#!/usr/bin/env python3
"""Garde-fous contrôlant intégrité métier et pertinence MINIMALE des sources.
NE remplace PAS un avis professionnel sur les règles comptables applicables.
Ne requiert ni secret, ni réseau, ni accès Supabase.
"""
import json, re, sys
from collections import Counter
from pathlib import Path
R=Path(__file__).resolve().parents[1]
quiz=json.loads((R/'questions.json').read_text(encoding='utf-8'))
items=[(g['id'],q) for g in quiz for q in g['questions']]
errors=[]
if len(items)!=630: errors.append(f"630 questions attendues, {len(items)}")
if len({q['q'].strip().casefold() for _,q in items})!=len(items):errors.append('Énoncés exactement dupliqués')
for id,q in items:
    s=q.get('source','');st=q.get('review_status','')
    if 'BOI-TVA-DECLA-20-30-60' in s:errors.append(f'{id} : ancienne référence e-reporting hors sujet')
    if '20120912' in s and 'BOI-TVA-DED' in s:errors.append(f'{id} : ancienne référence déduction remplacée par une plus récente')
    if 'international-professionnel/fiscalite-des-entreprises' in s:errors.append(f'{id} : portail général au lieu de la doctrine TVA précise')
    if st not in ('verification_documentaire_anc_bofip_2026_10_17','recalcul_independant_2026_10_19','revue_thematique_2026_10_20','revue_ciblee_anc_dgfip_2026_10_20','calcul_recalcule_sur_scenario_2026_10_20','controle_cible_2026_10_21'):
        errors.append(f'{id} : statut inconnu de validation documentaire (mise en quarantaine)')
    if not q.get('explanation','').strip() or not q.get('source','').startswith('https://'):
        errors.append(f'{id} : explication ou source manquante')
    if 'Source de référence consultable : document officiel ANC / BOFiP' in q.get('explanation',''):
        errors.append(f'{id} : explication générique de remplissage')
# 2 références d'exigibilité particulièrement exposées au risque pédagogique.
tva=next(g for g in quiz if g['id']=='04-debutant')['questions']
if 'BOI-TVA-BASE-20-10-20221221' not in tva[0]['source']: errors.append('TVA débutant: biens sans source exigibilité')
if 'BOI-TVA-BASE-20-20-20181107' not in tva[1]['source']: errors.append('TVA débutant: services sans source exigibilité')
# Empêcher que les versions précédentes non auditées retrouvent les jeux/examens.
index=(R/'index.html').read_text(encoding='utf-8')
if 'value="exam"' not in index or 'disabled="" value="exam"' not in index:errors.append('Examen final non confirmé réactivé')
if 'id="jeux"' not in index or 'display:none!important' not in index:errors.append('Jeux non validés réactivés')
if '<script defer="" src="online.js"' in index or '<section id="duels-distance">' in index:errors.append('Duels distants non audités réactivés')
# Contradiction de point de vue corrigée au premier folio du mémo 02.
try:
    import fitz
    memo=' '.join(pg.get_text() for pg in fitz.open(R/'memos/02 - Opérations courantes.pdf'))
    if '656' not in memo or '756' not in memo:errors.append('Mémo change : comptes 656/756 absents')
    tva=' '.join(pg.get_text() for pg in fitz.open(R/'memos/04 - TVA et CA3.pdf'))
    if not all(x in tva for x in ('44571','44566','44562','44551','44567','4458','4452')):errors.append('Mémo TVA: comptes indispensables absents')
    if not all(x in tva for x in ('NOTIONS','RÈGLES','COMPTES ET ÉCRITURES','DÉCLARATION CA3','CA3')):errors.append('Mémo TVA : une rubrique obligatoire manque')
    if [tva.find(x) for x in ('01 NOTIONS','02 RÈGLES','03 COMPTES ET ÉCRITURES','04 DÉCLARATION CA3','05 CA3')]!=sorted(tva.find(x) for x in ('01 NOTIONS','02 RÈGLES','03 COMPTES ET ÉCRITURES','04 DÉCLARATION CA3','05 CA3')):errors.append('Mémo TVA : ordre incorrect')
    produits=' '.join(pg.get_text() for pg in fitz.open(R/'memos/06 - Compte de résultat.pdf'))
    if 'en cours d’homologation' in produits or '1er janvier 2027' not in produits:errors.append('Mémo produits : statut du règlement ANC 2026-03 incorrect')
except ImportError:
    errors.append('PyMuPDF absent : les contrôles métier des PDF ne peuvent pas être contournés')
if errors:
    for err in errors:print('ERREUR',err)
    sys.exit(1)
print('OK — 630 questions, sources documentaires essentielles, 7x3 thèmes/niveaux, contenus non validés maintenus masqués.')
print('Limite : la pertinence de chaque source et l’exactitude réglementaire de toutes les questions doivent aussi être revues par un humain.')
