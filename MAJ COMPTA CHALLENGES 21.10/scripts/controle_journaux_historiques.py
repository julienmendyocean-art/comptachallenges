#!/usr/bin/env python3
"""Contrôle arithmétique des écritures des 42 corrigés historiques.
Reconstruction par positions PDF (colonnes Débit/Crédit).
Un équilibre débit/crédit ne constitue PAS une preuve de pertinence comptable.
"""
from pathlib import Path
from decimal import Decimal
import re, fitz
R=Path(__file__).resolve().parents[1]
files=sorted((R/'corriges').glob('*.pdf'))+sorted((R/'corriges-complets').glob('*.pdf'))
assert len(files)==42
stages_checked=lines_checked=0
for f in files:
 rows=[]
 for ip,p in enumerate(fitz.open(f)):
  words=p.get_text('words')
  for w in words:
   x,y,_,_,token,*_=w
   if not 46<x<90 or not re.fullmatch(r'[1-7]\d{1,5}',token):continue
   peers=[w2 for w2 in words if abs(w2[1]-y)<2.6 and 180<w2[0]<450]
   debit=''.join(w2[4] for w2 in sorted(peers,key=lambda x:x[0]) if 180<w2[0]<320)
   credit=''.join(w2[4] for w2 in sorted(peers,key=lambda x:x[0]) if 340<w2[0]<450)
   if '€' not in debit and '€' not in credit:continue
   def money(s):return Decimal(s.replace('€','').replace('\xa0','').replace(' ','').replace(',','.')) if '€' in s else Decimal(0)
   rows.append((ip,y,token,money(debit),money(credit)))
 groups=[];last=None
 for row in rows:
  page,y,_,_,_=row
  if last is None or (page!=last[0] and not (page==last[0]+1 and last[1]>700 and y<150)) or (page==last[0] and y-last[1]>34):groups.append([])
  groups[-1].append(row);last=row
 assert len(groups)>0,f'{f}: écriture non détectée'
 for k,g in enumerate(groups,1):
  d=sum(r[3] for r in g);c=sum(r[4] for r in g)
  assert d==c and d>0,f'{f.name} écriture {k} : débit {d} / crédit {c}'
  assert len(g)>=2,f'{f.name} écriture {k}: une seule ligne détectée'
 stages_checked+=len(groups);lines_checked+=len(rows)
print(f'OK — {len(files)} corrigés historiques : {stages_checked} écritures équilibrées, {lines_checked} lignes détectées.')
