#!/usr/bin/env python3
"""Contrôles reproductibles des 84 nouveaux PDF et des 84 sujets/corrigés hérités.
La lisibilité, les comptages et les écritures de la nouvelle banque ne garantissent
pas une validation juridique indépendante de chaque scénario.
"""
import json,re,fitz,collections
from pathlib import Path
R=Path(__file__).resolve().parents[1]
a=json.loads((R/'AUDIT_EXERCICES_21.10.json').read_text())
assert len(a)==42
for rec in a:
 exp=2 if rec['mode']=='rapide' else 5
 nq=5 if rec['mode']=='rapide' else 10
 assert rec['cases']==exp and rec['qcm']==nq,rec
 assert all(rec['categories'].get(k,0)>=1 for k in ('notion','application','calcul','analyse')),rec
 for path in (rec['source'],rec['correction']):
  p=R/path
  assert p.is_file() and p.read_bytes().startswith(b'%PDF-'),p
  doc=fitz.open(p);content='\n'.join(pg.get_text() for pg in doc)
  assert len(doc)>=1 and 'PARTIE A' in content and 'PARTIE B' in content,p
  assert len(re.findall(r'\bCas \d+ [—–]',content))==exp,(p,'cas')
  assert len(re.findall(r'\bQCM \d+ [—–]',content))==nq,(p,'QCM')
  if 'corriges-' in str(p):
   assert len(re.findall('Réponse :',content))==nq,p
   assert len(re.findall('TOTAL',content))==rec['steps'],(p,rec['steps'])
# Historical library: inspect all 84 legacy PDFs for expected question counts and pairing.
for level in ('debutant','intermediaire','expert'):
 for th in range(1,8):
  n=f'{th:02d}_{level}'
  docs=[R/f'exercices/{n}_exercices.pdf',R/f'corriges/{n}_corrige.pdf',R/f'exercices-complets/{n}_exercices_complets.pdf',R/f'corriges-complets/{n}_corrige_complet.pdf']
  assert all(p.is_file() for p in docs),docs
  for i,p in enumerate(docs):
   t='\n'.join(pg.get_text() for pg in fitz.open(p))
   assert len(t)>500 and 'PCG 2026' in t,p
   if i==1: assert len(re.findall('Bonne réponse :',t))==5,p
   if i==3: assert len(re.findall('Bonne réponse :',t))==10,p
print('OK: 84 nouveaux PDF (42 sujets + 42 corrigés), 84 historiques structurels, 147 cas équilibrés (générateur), 315 QCM et corrections.')
