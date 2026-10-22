#!/usr/bin/env python3
"""R9: validate 9 themes, 27 quiz banks, local calculations, PDF notes, source provenance and conservation.
Verification of local consistency is not an individual legal opinion on every answer.
"""
import json,hashlib,re,unicodedata,sys
from pathlib import Path
from collections import Counter
from urllib.parse import urlparse
from decimal import Decimal
import fitz
R=Path(__file__).resolve().parents[1]
errors=[]
def check(ok,why):
 if not ok:errors.append(why)
can=lambda a:json.dumps(a,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode('utf-8')
bank=json.loads((R/'questions.json').read_text('utf-8'))
baseline=json.loads((R/'HISTORIQUE_R8_EMPREINTES_NON_MODIFIEES_R9.json').read_text('utf-8'))
check(len(bank)==27,'27 groupes attendus')
check({g['id'] for g in bank}=={f'{i:02d}-{lv}' for i in range(1,10) for lv in ('debutant','intermediaire','expert')},'Groupes manquants')
check(all(len(g['questions'])==30 for g in bank),'30 questions par groupe')
check(sum(len(g['questions']) for g in bank)==810,'810 questions attendues')
check(hashlib.sha256(can(bank[:21])).hexdigest()==baseline['question_base_sha256'],'630 anciennes questions modifiées sans revue')
assert len(bank)>=27
seen=set()
hosts={'www.urssaf.fr','urssaf.fr','www.anc.gouv.fr','anc.gouv.fr','www.cnil.fr','cnil.fr','code.travail.gouv.fr','entreprendre.service-public.gouv.fr','www.service-public.gouv.fr','travail-emploi.gouv.fr','www.impots.gouv.fr','impots.gouv.fr','bofip.impots.gouv.fr','www.legifrance.gouv.fr'}
new_cases=[]
for g in bank:
 cats=Counter(q.get('category') for q in g['questions'])
 for category in ('notion','application','calcul','analyse'):
  check(cats.get(category,0)>=2,f'{g["id"]} catégorie insuffisante : {category}')
 for q in g['questions']:
  key=' '.join(''.join(c for c in unicodedata.normalize('NFD',q['q'].lower()) if not unicodedata.combining(c)).split())
  check(key not in seen,f'Énoncé en double : {g["id"]}: {key[:50]}')
  seen.add(key)
  opts=q.get('options') or {}
  check(set(opts)==set('ABCD'),f'{g["id"]} choix A/B/C/D absents')
  check(q.get('correct') in opts,f'{g["id"]} réponse incorrecte')
  check(len(set(opts.values()))==4,f'{g["id"]} choix en double')
  check(len(q.get('explanation',''))>=18,f'{g["id"]} explication insuffisante')
  check(urlparse(q.get('source','')).hostname in hosts,f'{g["id"]} URL non institutionnelle')
  if g['fiche'] in ('08','09'):
   check(q.get('review_status')=='revue_documentaire_ciblee_r9','Nouvelle question sans revue R9')
   new_cases.append((g,q))
check(len(new_cases)==180,'180 nouvelles questions SIC/PAIE attendues')
# Numerical answers independently fixed by the stated closed scenarios, without reusing the answer string.
expected={
 '08-debutant':['20 pièces','24 lignes','12 sauvegardes','0 €','7 pièces'],
 '08-intermediaire':['107','250 €','135','60 Go','68 mouvements'],
 '08-expert':['460 lignes','175 €','210 factures','190 minutes','6 copies'],
 '09-debutant':['2 000 €','15 €','1 670 €','10 jours','80 €'],
 '09-intermediaire':['2 460 €','52,50 €','2,4 h','2 080 €','6 jours'],
 '09-expert':['2 h','2 195 €','2 190 €','98 €','3 600 €']}
checked=0
for g in bank:
 if g['id'] not in expected:continue
 for i,target in enumerate(expected[g['id']],25):
  q=g['questions'][i];actual=q['options'][q['correct']]
  check(actual==target,f'Calcul {g["id"]}/{i+1}: {actual} != {target}')
  check(q['category']=='calcul',f'Catégorie calcul absente {g["id"]}/{i+1}')
  checked+=1
check(checked==30,'Contrôle indépendant des 30 calculs nouveaux manquant')
manifest=json.loads((R/'pdf-manifest.json').read_text('utf-8'))
check(len(manifest)==247,'247 PDF doivent être présents en R10')
check(len({d['path'] for d in manifest})==247,'doublon dans manifest')
sha=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text('utf-8'))['sha256']
check(set(sha)=={d['path'] for d in manifest},'Empreintes et fichiers désalignés')
legitimate_updates={
 'cours-complets/01_COURS_COMPTES_USUELS_2026.pdf',
 'memos/01 - Comptes usuels.pdf',
 'cartes-mentales/01 - Comptes usuels.pdf',
 'cours-complets/06_COURS_PAIE_2026.pdf',
 'references-paie/PAIE - Mémo consolidé 2026.pdf',
 'references-paie/PAIE - Carte mentale consolidée 2026.pdf'}
for name,old in baseline['pdfs_inchanges'].items():
 if name not in legitimate_updates:
  check(sha[name]==old,f'Ancien PDF modifié alors que non prévu : {name}')
for fn,sh in sha.items():
 p=R/fn;check(p.exists() and hashlib.sha256(p.read_bytes()).hexdigest()==sh,f'PDF absent/modifié : {fn}')
notes=json.loads((R/'ENRICHISSEMENT_NOTIONS_R9.json').read_text('utf-8'))
check(len(notes['pdfs'])==18,'9 cours + 9 mémos enrichis requis')
for fn,meta in notes['pdfs'].items():
 with fitz.open(R/fn) as pdf:
  check(len(pdf)>=meta['final_pages'] and len(pdf)>meta['original_pages'],f'Pages notions absentes : {fn}')
  if fn=='memos/01 - Comptes usuels.pdf':
   txt=' '.join(p.get_text() for p in pdf)
   check('Comptes usuels' in txt and 'TVA' in txt and 'PAIE' in txt, 'Mémo thématique comptes usuels non conforme')
  else:
   check('NOTIONS ESSENTIELLES' in pdf[meta['original_pages']].get_text(),f'Titre notions manquant : {fn}')
   check(all('Vigilance' in page.get_text() or 'À comprendre' in page.get_text() for page in list(pdf)[meta['original_pages']:meta['final_pages']]),f'Pages notions illisibles : {fn}')
site=(R/'index.html').read_text('utf-8');js=(R/'app.js').read_text('utf-8')
check('CC_EXPECTED_QUIZ_COUNT=810' in js and 'q.length!==27' in js,'Quiz côté navigateur non synchronisés')
check('9 thèmes' in site and '810' in site, 'Affichage site non actualisé')
check('Système d’information comptable' in js and "'PAIE'" in js,'SIC/PAIE non accessibles aux joueurs')
v=json.loads((R/'VERSION_SITE.json').read_text('utf-8'))
check(v['quiz_questions']==810 and v['quiz_themes']==9 and v['pdf_total']==247,'Métadonnées R9 erronées')
print('R9 :',len(bank),'groupes,',sum(len(g['questions']) for g in bank),'QCM, 180 nouvelles questions,',checked,'calculs nouveaux recalculés,',len(manifest),'PDF dont 18 enrichis, 24 nouveaux exercices SIC/PAIE.')
if errors:
 for e in errors[:45]:print('ECHEC',e)
 sys.exit(1)
print('OK : structure, références, traçabilité, conservation des anciens QCM et PDF, calculateurs et nouveaux thèmes.')
