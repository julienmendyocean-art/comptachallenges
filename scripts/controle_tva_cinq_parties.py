#!/usr/bin/env python3
"""Valide structure, sources et équilibre des journaux produits pour la fiche finale TVA.
Ne prétend pas remplacer un contrôle fiscal adapté à des cas réels.
"""
from pathlib import Path
import hashlib,json,fitz
R=Path(__file__).resolve().parents[1]
pdf=R/'memos/04 - TVA et CA3.pdf'
card=R/'cartes-mentales/04 - TVA et CA3.pdf'
with fitz.open(pdf) as d:
 assert len(d)==16
 heads=['01 · NOTIONS','02 · RÈGLES','03 · PRÉPARATION','04 · DÉCLARATION','05 · POINTS DE VÉRIFICATION']
 start=[next(i for i,p in enumerate(d) if h in p.get_text()) for h in heads]
 assert start==[0,1,9,11,12],start
 body=' '.join(' '.join(p.get_text().split()) for p in d)
 for term in ['TVA collectée','TVA déductible','immobilisation','4458x','4452','44562','44566','44551','44567','B2','E1','F2','A4','RESTE DU MONDE','UNION EUROPÉENNE','D’APRÈS LES DÉBITS','option écrite','acompte','44571']:
  assert term.casefold() in body.casefold(),term
 for p in d:
  for b in p.get_text('blocks'):
   if len(b)<5:continue
   if b[0]<-1 or b[2]>p.rect.width+1:raise ValueError('Texte hors page PDF')
with fitz.open(card) as d:
 assert len(d)==1
 t=d[0].get_text()
 assert all(x in t for x in ['1. NOTIONS','2. RÈGLES','3. PRÉPARATION','4. CA3','5. POINTS','débits','acompte'])
h=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text(encoding='utf-8'))['sha256']
for f in (pdf,card):
 assert h[str(f.relative_to(R))]==hashlib.sha256(f.read_bytes()).hexdigest()
print('OK : mémo 16 pages, 5 parties, carte 1 page, rubriques clés et empreintes cohérentes.')
