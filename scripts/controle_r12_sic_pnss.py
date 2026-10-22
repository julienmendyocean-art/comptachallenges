#!/usr/bin/env python3
"""Cross-file editorial QA; not a legal audit of individual real-life pay slips."""
from pathlib import Path
import fitz,json,hashlib,re
from html.parser import HTMLParser
R=Path(__file__).resolve().parents[1]
assert len(list(R.rglob('*.pdf')))==247
paths=[R/'cours-complets/01_COURS_COMPTES_USUELS_2026.pdf',R/'memos/01 - Comptes usuels.pdf',R/'cartes-mentales/01 - Comptes usuels.pdf']
for fp in paths:
 with fitz.open(fp) as d: text=' '.join(p.get_text() for p in d)
 assert not re.search(r'\bSIC\b|Système d.information comptable',text,re.I),f'Rubrique SIC présente dans {fp.name}'
assert (R/'memos/08 - Système d\'information comptable.pdf').is_file(), 'SIC autonome doit être conservé'
assert (R/'cours-complets/02_COURS_SYSTEME_INFORMATION_COMPTABLE_2026.pdf').is_file(), 'Cours SIC autonome manquant'
index_html=(R/'references-comptes/index.html').read_text('utf8')
assert index_html.count('<section id=')==8, '8 rubriques thématiques attendues'
assert 'Système d’information comptable (SIC)' not in index_html, 'SIC ajouté à index comptes'
for rel,expected in [('cours-complets/06_COURS_PAIE_2026.pdf',72),('references-paie/PAIE - Mémo consolidé 2026.pdf',11),('references-paie/PAIE - Carte mentale consolidée 2026.pdf',2)]:
 with fitz.open(R/rel) as d:
  assert len(d)==expected,(rel,len(d))
  content=' '.join(p.get_text() for p in d)
  for token in ['PMSS','PASS','4 005','48 060']:
   assert token in content,(rel,token)
  assert any('https://www.urssaf.fr' in str(link.get('uri','')) for p in d for link in p.get_links()),f'Lien Urssaf manquant {rel}'
qs=json.loads((R/'questions.json').read_text('utf8'));assert len(qs)==27
assert sum(len(x['questions']) for x in qs)==810
for level in ['debutant','intermediaire','expert']:
 g=next(g for g in qs if g['id']==f'09-{level}')
 assert len(g['questions'])==30
 q=g['questions'][14]
 assert 'plafond' in (q['q']+' '+q['explanation']).lower() and 'urssaf.fr' in q['source']
 assert q['correct'] in q['options'] and len(set(q['options'].values()))==4
v=json.loads((R/'VERSION_SITE.json').read_text('utf8'))
assert v['quiz_questions']==810 and v['pdf_total']==247 and v['correctif']=='2026-10-22-r12'
sha=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text('utf8'))['sha256']
assert len(sha)==247
for rel,expected in sha.items():assert hashlib.sha256((R/rel).read_bytes()).hexdigest()==expected,rel
print('OK R12: 8 rubriques comptes sans SIC, SIC autonome, 810 QCM, PSS/PASS/PMSS cohérents cours/mémo/carte, 247 PDF intègres.')
