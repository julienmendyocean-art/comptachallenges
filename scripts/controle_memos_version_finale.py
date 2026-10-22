#!/usr/bin/env python3
"""Vérifie que seules les versions finales des huit mémos sont exposées."""
from pathlib import Path
import fitz
R=Path(__file__).resolve().parents[1]
files=sorted((R/'memos').glob('*.pdf'))
assert len(files)==8,(len(files),[p.name for p in files])
for f in files:
 d=fitz.open(f);txt='\n'.join(p.get_text() for p in d).casefold()
 assert len(d)>0 and len(txt)>200,f
 assert 'rectification indispensable' not in txt and 'ancienne version' not in txt,f
 if f.name.startswith('08'):
  assert len(d)==5,f'Le mémo SIC enrichi doit avoir 5 pages : {len(d)}'
print('OK: 8 mémos finaux, SIC 5 pages, pas de pages de rectification.')
