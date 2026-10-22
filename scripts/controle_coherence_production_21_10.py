#!/usr/bin/env python3
"""Empêche de publier un affichage périmé (210/525) et des PDF TVA non chronologiques.
Vérifie uniquement les fichiers statiques du même dossier ; la production Netlify reste à tester.
"""
import json,hashlib,re,sys
from pathlib import Path
import fitz
R=Path(__file__).resolve().parents[1]
errors=[]
def check(cond,why):
 if not cond: errors.append(why)
q=json.loads((R/'questions.json').read_text(encoding='utf-8'))
flat=[qq for group in q for qq in group['questions']]
check(len(q)==27 and len(flat)==810,'Banque doit comporter 810 questions et 27 groupes')
check(all(len(group['questions'])==30 for group in q),'Chaque thème et niveau doit avoir 30 QCM')
html=(R/'index.html').read_text(encoding='utf-8')
js=(R/'app.js').read_text(encoding='utf-8')
lib=(R/'pdf-library.js').read_text(encoding='utf-8')
v4=(R/'v4.js').read_text(encoding='utf-8')
check('<strong>525</strong>' not in html and '25 questions' not in html and '>210<' not in html,'Ancien nombre de questions dans le HTML')
check('MAJ-COMPTA-CHALLENGES-22.10-R12' in html,'Balise de version HTML périmée')
check('id="qcm-total"' in html and 'id="qcm-level-count"' in html,'Compteurs dynamiques manquants')
check('CC_EXPECTED_QUIZ_COUNT=810' in js and 'CC_EXPECTED_PER_GROUP=30' in js,'JS non synchronisé avec banque')
check('validatePublishedBank(q)' in js and "cache:'no-store'" in js,'Détection de déploiement partiel ou cache non assurée')
check('app.js?v=20261022-r12' in html and 'pdf-library.js?v=20261022-r12' in html,'Versionnement des scripts manquant')
check('memos/04 - TVA et CA3.pdf' in lib and 'cartes-mentales/04 - TVA et CA3.pdf' in lib and '?v=20261022-r12' in lib,'Révision PDF TVA / carte absente de la bibliothèque')
check('?v=20261022-r12' in v4,'Révision PDF TVA / carte absente de l’aperçu')
pdf=R/'memos/04 - TVA et CA3.pdf'
with fitz.open(pdf) as doc:
 pages=[page.get_text() for page in doc]
 heads=['01 · NOTIONS','02 · RÈGLES','03 · PRÉPARATION DE LA DÉCLARATION DE TVA','04 · DÉCLARATION DE TVA CA3','05 · POINTS DE VÉRIFICATION ET VIGILANCE']
 loc=[]
 for h in heads:
  matches=[i+1 for i,text in enumerate(pages) if h in text]
  check(bool(matches),f'Rubrique manquante : {h}')
  loc.append(matches[0] if matches else 0)
 check(loc==[1,2,10,12,13],f'Ordre et pages TVA non conformes aux cinq parties : {loc}')
 check(all('03 · PRÉPARATION' not in x for x in pages[:9]),'Préparation CA3 insérée trop tôt dans les règles')
 check(len(pages)==16,'Le nouveau mémo TVA doit faire seize pages')
 for term in ['FRANCE → FRANCE','UNION EUROPÉENNE','RESTE DU MONDE','4458x','4452','44562','44566','44551','44567','F2','E1','A4','B2','D’APRÈS LES DÉBITS','option écrite','acompte','4191']:
  check(any(term.casefold() in ' '.join(t.split()).casefold() for t in pages),f'Mémo TVA: notion/cas absent : {term}')
hashes=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text(encoding='utf-8'))['sha256']
check(hashes.get('memos/04 - TVA et CA3.pdf')==hashlib.sha256(pdf.read_bytes()).hexdigest(),'Empreinte du mémo TVA incorrecte')
card=R/'cartes-mentales/04 - TVA et CA3.pdf'
check(hashes.get('cartes-mentales/04 - TVA et CA3.pdf')==hashlib.sha256(card.read_bytes()).hexdigest(),'Empreinte de la carte TVA incorrecte')
with fitz.open(card) as d:
 t=' '.join(x.get_text() for x in d)
 for h in ['1. NOTIONS','2. RÈGLES','3. PRÉPARATION','4. CA3','5. POINTS DE VIGILANCE']:
  check(h in t, 'Carte TVA : rubrique manquante '+h)
check(len(hashes)==247,'Incohérence bibliothèque de 247 PDF')
v=json.loads((R/'VERSION_SITE.json').read_text(encoding='utf-8'))
check(v.get('quiz_questions')==810 and v.get('correctif')=='2026-10-22-r12','Métadonnées de version incorrectes')
if errors:
 for e in errors:print('ECHEC',e)
 sys.exit(1)
print('OK : 810 QCM, 5 rubriques TVA, 16 pages, carte synchronisée, 247 PDF.')
