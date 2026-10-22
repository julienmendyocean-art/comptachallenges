#!/usr/bin/env python3
"""PDF PAIE R6 : cohérence et intégrité. Ne constitue pas un audit légal de paie réelle."""
from pathlib import Path
import fitz,json,hashlib
R=Path(__file__).resolve().parents[1]
folder=R/'references-paie'
pdfs=sorted(folder.glob('*.pdf'))
assert len(pdfs)==2, f'Un mémo et une carte PAIE attendus, trouvé {len(pdfs)}'
mem=next(x for x in pdfs if 'Mémo' in x.name)
car=next(x for x in pdfs if 'Carte mentale' in x.name)
with fitz.open(mem) as d:
 assert len(d)==11,'Mémo consolidé et supplément officiel PSS attendu (11 pages)'
 text=' '.join(p.get_text() for p in d).casefold()
 for term in ['bulletin de paie','net social','1er janvier 2027','heures complémentaires','congés payés','avantages en nature','10 %','25 %']:
  assert term in text,term
with fitz.open(car) as d:
 assert len(d)==2 and all(p.rect.height>1600 for p in d), 'Carte mentale globale attendue sur deux pages A2 (dont PSS 2026)'
 s=d[0].get_text().casefold()
 assert 'identité' in s and 'salaire de base' in s
assert len(list(R.rglob('*.pdf')))==247
h=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text('utf-8'))['sha256']
assert len(h)==247
for p in pdfs:
 rel=p.relative_to(R).as_posix()
 assert hashlib.sha256(p.read_bytes()).hexdigest()==h[rel]
lib=(R/'pdf-library.js').read_text('utf-8')
assert 'PAIE' in lib and all(p.name in lib for p in pdfs)
assert not any('09 - Presentation' in p.name or '10 - Elements' in p.name for p in pdfs)
v=json.loads((R/'VERSION_SITE.json').read_text('utf-8'))
assert v['quiz_questions']==810 and v['pdf_references_paie']==2
print('OK PAIE : 1 mémo (11 pages), 1 carte (2 pages A2), 247 PDF, 810 QCM préservées.')
