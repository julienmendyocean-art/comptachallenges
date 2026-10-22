#!/usr/bin/env python3
"""Contrôles statiques et structurels de Compta Challenge.

Aucune connexion réseau / aucune écriture dans Supabase ou Netlify.
Ce contrôle NE certifie PAS la véracité des réponses comptables.
"""
from __future__ import annotations

import json
import re
import sys
import tomllib
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
warnings: list[str] = []


def check(condition: bool, detail: str) -> None:
    if not condition:
        errors.append(detail)


def load_json(name: str):
    try:
        return json.loads((ROOT / name).read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        errors.append(f"{name}: impossible de lire un JSON valide ({exc})")
        return None


class LocalRefs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []

    def handle_starttag(self, tag, attrs):
        props = dict(attrs)
        if tag in {"script", "link", "img"}:
            attr = "src" if tag in {"script", "img"} else "href"
            if props.get(attr):
                self.refs.append((tag, props[attr]))


def validate_html_files() -> None:
    for name in ("index.html", "confidentialite.html"):
        p = ROOT / name
        check(p.is_file(), f"Page obligatoire manquante : {name}")
        if not p.is_file():
            continue
        parser = LocalRefs()
        try:
            parser.feed(p.read_text(encoding="utf-8"))
        except Exception as exc:
            errors.append(f"HTML non lisible : {name} ({exc})")
            continue
        for tag, ref in parser.refs:
            parsed = urlparse(ref)
            if parsed.scheme or parsed.netloc or ref.startswith(("#", "//", "data:")):
                continue
            rel = unquote(parsed.path).lstrip("/")
            if rel:
                check((ROOT / rel).is_file(), f"Référence {tag} absente dans {name} : {rel}")


def validate_quiz() -> None:
    data = load_json("questions.json")
    if not isinstance(data, list):
        return
    check(len(data) == 27, f"27 groupes attendus (9 thèmes × 3 niveaux), obtenu : {len(data)}")
    ids = Counter()
    questions_count = 0
    for group in data:
        if not isinstance(group, dict):
            errors.append("questions.json : groupe mal formé")
            continue
        identifier = group.get("id", "")
        ids[identifier] += 1
        fich = str(group.get("fiche", ""))
        lev = identifier.rsplit("-", 1)[-1]
        check(fich in [f"{i:02d}" for i in range(1, 10)], f"Fiche invalide : {identifier}")
        check(identifier == f"{fich}-{lev}", f"Identifiant incohérent : {identifier}")
        qs = group.get("questions")
        check(isinstance(qs, list) and len(qs) >= 10,
              f"Au moins 10 questions nécessaires pour {identifier}")
        if not isinstance(qs, list):
            continue
        for j, q in enumerate(qs, 1):
            questions_count += 1
            loc = f"{identifier} / question {j}"
            if not isinstance(q, dict):
                errors.append(f"{loc} : entrée invalide")
                continue
            opts = q.get("options")
            check(isinstance(opts, dict) and set(opts) == set("ABCD"), f"{loc} : quatre choix A–D requis")
            if isinstance(opts, dict) and set(opts) == set("ABCD"):
                check(all(isinstance(v, str) and v.strip() for v in opts.values()), f"{loc} : proposition vide")
                check(len({v.strip().casefold() for v in opts.values()}) == 4, f"{loc} : propositions en doublon")
            check(q.get("correct") in list("ABCD"), f"{loc} : bonne réponse invalide")
            check(isinstance(q.get("q"), str) and len(q["q"].strip()) >= 8, f"{loc} : énoncé incomplet")
            check(isinstance(q.get("explanation"), str) and len(q["explanation"].strip()) >= 15,
                  f"{loc} : explication absente")
            source = q.get("source", "")
            host = urlparse(source).hostname if isinstance(source, str) else None
            check(host in {"www.urssaf.fr", "urssaf.fr", "www.anc.gouv.fr", "anc.gouv.fr", "bofip.impots.gouv.fr", "www.impots.gouv.fr", "impots.gouv.fr", "www.legifrance.gouv.fr", "www.cnil.fr", "cnil.fr", "code.travail.gouv.fr", "travail-emploi.gouv.fr", "entreprendre.service-public.gouv.fr", "www.service-public.gouv.fr"} and source.startswith("https://"),
                  f"{loc} : source institutionnelle HTTPS nécessaire")
            # Metadata requirement is a documentation check, not a legal certification.
            check(bool(q.get("review_status")) and bool(q.get("reviewed_at")),
                  f"{loc} : traçabilité de revue manquante")
    expected = {f"{i:02d}-{lev}" for i in range(1, 10) for lev in ("debutant", "intermediaire", "expert")}
    check(set(ids) == expected, f"Groupes incorrects — manquants: {sorted(expected - set(ids))}, inattendus: {sorted(set(ids) - expected)}")
    check(all(n == 1 for n in ids.values()), "Identifiants de groupes en double")
    print(f"Quiz : {len(data)} groupes / {questions_count} questions ; contrôles STRUCTURELS terminés.")
    print("Attention : aucun contrôle automatique ne certifie le fond comptable des réponses.")


def validate_pdfs() -> None:
    data = load_json("pdf-manifest.json")
    if not isinstance(data, list):
        return
    expected_count = 247
    check(len(data) >= expected_count, f"Manifest PDF : au moins {expected_count} entrées prévues (trouvé {len(data)})")
    files = []
    for entry in data:
        if not isinstance(entry, dict):
            errors.append("Manifest PDF : entrée invalide")
            continue
        rel = entry.get("path")
        check(isinstance(rel, str) and rel.endswith(".pdf") and ".." not in Path(rel).parts,
              f"Chemin PDF douteux : {rel}")
        if not isinstance(rel, str) or ".." in Path(rel).parts:
            continue
        path = ROOT / rel
        files.append(rel)
        if not path.is_file():
            errors.append(f"PDF manquant : {rel}")
            continue
        with path.open("rb") as f:
            starts_pdf = f.read(5) == b"%PDF-"
            f.seek(max(0, path.stat().st_size - 1024))
            ends_pdf = b"%%EOF" in f.read()
        check(starts_pdf and ends_pdf, f"PDF visiblement mal formé : {rel}")
    check(len(files) == len(set(files)), "Manifest PDF : chemins en double")
    for i, nom in enumerate(("Comptes usuels", "Opérations courantes", "Immobilisations", "TVA et CA3", "Lettrage et rapprochement bancaire", "Compte de résultat", "Bilan actif et passif"), 1):
        check(f"memos/{i:02d} - {nom}.pdf" in files, f"Mémo manquant pour thème {i}")
        check(f"cartes-mentales/{i:02d} - {nom}.pdf" in files, f"Carte mentale manquante pour thème {i}")
    print(f"PDF : {len(data)} chemins contrôlés (présence + signature du fichier, pas conformité pédagogique).")


def validate_deploy_config() -> None:
    p = ROOT / "netlify.toml"
    try:
        doc = tomllib.loads(p.read_text(encoding="utf-8"))
        check(doc.get("build", {}).get("publish") == ".", "Netlify doit publier la racine du site : publish='.'")
    except (OSError, ValueError) as exc:
        errors.append(f"netlify.toml : configuration illisible ({exc})")


def scan_exposed_secrets() -> None:
    suspicious = {
        "clé Supabase secrète": re.compile(r"sb_secret_[A-Za-z0-9_-]{8,}"),
        "clé de rôle Supabase classique": re.compile(r"(?i)(?:service.?role[\w\- ]{0,25}(?:key|token|=|:))[\s\"'=:\\]{0,5}eyJ[a-zA-Z0-9_-]{50,}"),
        "clé privée": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
        "jeton GitHub": re.compile(r"(?:ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{30,})"),
        "clé AWS": re.compile(r"AKIA[0-9A-Z]{16}"),
    }
    for f in ROOT.rglob("*"):
        if not f.is_file() or f.suffix.lower() not in {".html", ".css", ".js", ".json", ".toml", ".md"}:
            continue
        if ".git" in f.parts or "node_modules" in f.parts:
            continue
        content = f.read_text(encoding="utf-8", errors="replace")
        for label, regex in suspicious.items():
            if regex.search(content):
                errors.append(f"Identifiant potentiellement sensible dans {f.relative_to(ROOT)} : {label}")
    config = ROOT / "online-config.js"
    if config.exists():
        s = config.read_text(encoding="utf-8")
        check("sb_publishable_" in s or "eyJ" in s,
              "online-config.js : la configuration publique attendue n'a pas été trouvée")
    print("Secrets : signatures courantes analysées ; un scan ne garantit pas l'absence de tous les secrets.")


def main() -> int:
    validate_html_files()
    validate_quiz()
    validate_pdfs()
    validate_deploy_config()
    scan_exposed_secrets()
    if warnings:
        print("\nAvertissements :")
        for w in warnings:
            print(" -", w)
    if errors:
        print("\nÉCHEC — Anomalies à corriger avant publication :")
        for e in errors:
            print(" -", e)
        return 1
    print("\nOK — Contrôles STRUCTURELS validés. Tests fonctionnels en production et audit Supabase séparés obligatoires.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
