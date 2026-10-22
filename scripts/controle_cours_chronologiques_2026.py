#!/usr/bin/env python3
"""Contrôle technique et documentaire de neuf cours chronologiques, sans certification juridique."""
import hashlib,json,re,sys
from pathlib import Path
import fitz
R=Path(__file__).resolve().parents[1]
errors=[]
def check(cond,issue):
 if not cond: errors.append(issue)
courses=json.loads((R/'PARCOURS_CHRONOLOGIQUE_2026.json').read_text('utf-8'))
check(len(courses)==9,'9 cours attendus')
check([c['step'] for c in courses]==list(range(1,10)),'Étapes non chronologiques')
check(len({c['theme'] for c in courses})==9,'Thèmes en double')
assert len(courses)==9
for c in courses:
 path=R/c['pdf_path']
 check(path.is_file(),f'PDF manquant : {path}');
 if not path.is_file():continue
 check(hashlib.sha256(path.read_bytes()).hexdigest()==c['sha256'],f'Empreinte du cours {c["step"]}')
 with fitz.open(path) as pdf:
  original_pages = 67 if c['step']==6 else 51
  expected_pages = (65 if c['step']==1 else (72 if c['step']==6 else original_pages + 3))
  check(len(pdf)==expected_pages,f'{c["step"]} : {expected_pages} pages attendues')
  check((('COMPTES USUELS' in pdf[0].get_text()) if c['step']==1 else f'ÉTAPE {c["step"]:02d} SUR 09' in pdf[0].get_text()),f'{c["step"]} : mauvaise couverture')
  check('Sommaire chronologique' in pdf[1].get_text(),f'{c["step"]} : sommaire absent')
  check(len(pdf.get_toc())==(29 if c['step']==1 else (35 if c['step']==6 else 18)),f'{c["step"]} : signets absents')
  check(len(c['chapters'])==16,f'{c["step"]} : 16 chapitres attendus')
  for j,title in enumerate(c['chapters'],1):
   k=2+(j-1)*(4 if c['step']==6 else 3)
   for offset in (0,1,2):
    t=pdf[k+offset].get_text()
    check(f'CHAPITRE {j:02d} / 16' in t,f'{c["step"]} chapitre {j} mauvais ordre/numéro p. {k+offset+1}')
    check(f'{k+offset+1} / {original_pages}' in t,f'{c["step"]} pagination incorrecte p. {k+offset+1}')
   check(title in pdf[k].get_text(),f'{c["step"]} : titre de chapitre non synchronisé {j}')
  check(('Sources et mises à jour' if c['step']==6 else 'Références et lectures utiles') in pdf[original_pages-1].get_text(),f'{c["step"]} : références absentes')
  check(len(pdf[original_pages-1].get_links())>0,f'{c["step"]} : liens sources perdus')
  if c['step']==6:
   for j in range(16):
    p=5+4*j
    check('LA BOÎTE À OUTILS' in pdf[p].get_text(),f'PAIE : notions essentielles absentes chapitre {j+1}')
    check(f'{p+1} / 67' in pdf[p].get_text(),f'PAIE : pagination fiche {j+1}')
   check('journal de paie' in pdf[63].get_text().lower(), 'PAIE : journal comptable manquant')
  if c['step']==6:
   for j in range(16):
    p=5+4*j
    check('LA BOÎTE À OUTILS' in pdf[p].get_text(),f'PAIE : notions essentielles absentes chapitre {j+1}')
    check(f'{p+1} / 67' in pdf[p].get_text(),f'PAIE : pagination fiche {j+1}')
   check('journal de paie' in pdf[63].get_text().lower(), 'PAIE : journal comptable manquant')
  full=' '.join(page.get_text() for page in pdf)
  check(not re.search(r'(?m)^(?:EXERCICE [0-9]{1,3}|CORRIGÉ :)$',full),f'{c["step"]} : page d’exercice détectée')
manifest=json.loads((R/'pdf-manifest.json').read_text('utf-8'))
paths=[x['path'] for x in manifest]
check(len(paths)==247 and len(set(paths))==247,'247 entrées PDF uniques attendues')
check(len(list(R.rglob('*.pdf')))==247,'Le répertoire doit contenir exactement 247 PDF')
for c in courses:check(c['pdf_path'] in paths,f'{c["step"]} : entrée du catalogue absente')
checks=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text('utf-8'))['sha256']
check(set(checks)==set(paths),'Empreintes/documents non alignés')
for rel in paths:
 f=R/rel
 check(f.is_file() and hashlib.sha256(f.read_bytes()).hexdigest()==checks.get(rel),f'Empreinte invalide {rel}')
q=json.loads((R/'questions.json').read_text('utf-8'))
check(len(q)==27 and sum(len(g['questions']) for g in q)==810,'Les 810 quiz doivent être conservés')
site=(R/'index.html').read_text('utf-8');lib=(R/'pdf-library.js').read_text('utf-8');v=json.loads((R/'VERSION_SITE.json').read_text('utf-8'))
check('id="cours"' in site and 'Cours complets' in site,'Section des cours absente')
check('value="cours"' in site and "label.startsWith('Cours complet')" in lib,'Filtre cours absent')
check(all(c['pdf_path'] in site and c['pdf_path'] in lib for c in courses),'Liens cours manquants')
check(v['pdf_total']==247 and v['cours_complets']==9 and v['quiz_questions']==810,'Compteurs inexactes')
if errors:
 for e in errors:print('ÉCHEC :',e)
 sys.exit(1)
print('OK : neuf cours chronologiques, 16 chapitres par volume, 515 pages, 247 PDF intègres et 810 questions conservées.')
