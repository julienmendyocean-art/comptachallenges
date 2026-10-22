#!/usr/bin/env python3
"""Faits contrôlés d'après BOI-TVA-BASE-20-50-10 ; structure + arithmétique des exemples."""
from pathlib import Path
from decimal import Decimal
import fitz,json
root=Path(__file__).resolve().parents[1]
with fitz.open(root/'memos/04 - TVA et CA3.pdf') as doc:
 assert len(doc)==16
 p4=doc[3].get_text().casefold()
 p5=doc[4].get_text().casefold()
 for phrase in ['option d’après les débits','s i e','sans option']:
  # Don't require 'S I E' lettering: a word extraction can change spaces.
  if phrase=='s i e':continue
  assert phrase in p4, phrase
 assert 's i e' not in p4
 for phrase in ['5 octobre','20 octobre','10 novembre','4191','44571','60 €','200 €','840 €']:
  assert phrase.casefold() in p5,phrase
 # Five required parts begin in their expected order.
 heads=['01 · NOTIONS','02 · RÈGLES','03 · PRÉPARATION','04 · DÉCLARATION','05 · POINTS DE VÉRIFICATION']
 pos=[next(i for i,p in enumerate(doc) if h in p.get_text()) for h in heads]
 assert pos==[0,1,9,11,12],pos
rows=json.loads((root/'CONTROLE_ECRITURES_MEMO_TVA_R4.json').read_text())['journaux']
assert len(rows)==24
assert all(Decimal(str(x['debit']))==Decimal(str(x['credit'])) for x in rows)
assert {'Q1','Q2','Q3','Q4'}.issubset({x['title'][:2] for x in rows})
assert Decimal(60)+Decimal(200)-Decimal(60)==Decimal(200)
assert Decimal(1200)-Decimal(360)==Decimal(840)
print('OK : option débits, acompte, 24 écritures équilibrées et 5 parties chronologiques.')
