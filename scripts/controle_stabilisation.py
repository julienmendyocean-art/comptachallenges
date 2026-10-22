#!/usr/bin/env python3
"""Vérifie la banque locale et les PDF, sans prétendre certifier le PCG."""
import hashlib
import json
import re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
questions=json.loads((ROOT/'questions.json').read_text(encoding='utf-8'))
assert len(questions)==21, '21 groupes attendus : 7 thèmes x 3 niveaux'
assert {g['id'] for g in questions}=={f'{t:02d}-{l}' for t in range(1,8) for l in ('debutant','intermediaire','expert')}
assert all(len(g['questions'])>=10 for g in questions), 'Moins de 10 questions dans un niveau'
assert all(x.get('review_status') and x.get('reviewed_at') and x.get('source') for g in questions for x in g['questions'])
manifest=json.loads((ROOT/'pdf-manifest.json').read_text(encoding='utf-8'))
paths=[e['path'] for e in manifest]
assert len(paths)==128 and len(set(paths))==128, '128 PDF uniques requis'
lib=(ROOT/'pdf-library.js').read_text(encoding='utf-8')
m=re.search(r'const library = (\[.*?\]);\s*const safePaths',lib,re.S)
assert m,'Bibliothèque JS non trouvée'
library=json.loads(m.group(1))
assert {x['path'] for x in library}==set(paths), 'Bibliothèque et manifeste PDF désynchronisés'
checks=json.loads((ROOT/'CONTROLE_PDF_SHA256_2026-10-20.json').read_text(encoding='utf-8'))['sha256']
assert set(checks)==set(paths), 'Empreintes et documents désynchronisés'
for path, sha in checks.items():
 f=ROOT/path
 assert f.is_file() and f.read_bytes().startswith(b'%PDF-'),f'PDF manquant/invalide : {path}'
 assert hashlib.sha256(f.read_bytes()).hexdigest()==sha, f'PDF modifié sans validation : {path}'
print(f'OK: 21 groupes, {sum(len(g["questions"]) for g in questions)} questions structurellement validées, {len(checks)} PDF intègres.')
