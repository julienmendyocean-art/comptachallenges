#!/usr/bin/env python3
"""Deuxième méthode de contrôle: relecture des nombres imprimés DANS les PDF corrigés.
Ne valide pas à elle seule la pertinence juridique du compte employé.
"""
from decimal import Decimal
from pathlib import Path
import fitz, re, json
R=Path(__file__).resolve().parents[1]
AUD=json.loads((R/'AUDIT_EXERCICES_21.10.json').read_text(encoding='utf8'))
amount=lambda s: Decimal(s.replace('\u00a0','').replace(' ','').replace('€','').replace(',','.'))
issues=[]; stages=0; lines=0
for rec in AUD:
 p=R/rec['correction']
 d=fitz.open(p)
 pages=[]
 for pi,pg in enumerate(d):
  st=pg.get_text()
  st=re.sub(r'^COMPTACHALLENGES • Pack pédagogique 21/10/2026 • PCG 2026\nPage \d+\n','',st)
  if pi>0 and st.startswith('Compte\nDébit\nCrédit\n'):
   prev=pages[-1].strip().splitlines()[-1] if pages else ''
   if prev=='—' or prev.endswith(' €'):
    st=st[len('Compte\nDébit\nCrédit\n'):]
  pages.append(st)
 s='\n'.join(pages)
 chunk=s.split('PARTIE B')[0]
 hits=list(re.finditer(r'Compte\nDébit\nCrédit\n',chunk))
 if len(hits)!=rec['steps']:
  issues.append(f'{p}: {len(hits)} tableaux vs {rec["steps"]} attendus')
 for hit in hits:
  post=chunk[hit.end():]
  total=re.search(r'\nTOTAL\n([0-9 ]+,[0-9]{2} €)\n([0-9 ]+,[0-9]{2} €)',post)
  if not total:
   issues.append(f'{p}: tableau sans TOTAL')
   continue
  stages+=1
  block=[x.strip() for x in post[:total.start()].splitlines() if x.strip()]
  debit=Decimal('0');credit=Decimal('0')
  if len(block)%3:
   issues.append(f'{p}: nombre de cellules inattendu ({len(block)})')
   continue
  for i in range(0,len(block),3):
   account,d,c=block[i:i+3]
   if not re.match(r'^\d{3,6}$',account):issues.append(f'{p}: compte inattendu {account!r}')
   if d!='—': debit+=amount(d)
   if c!='—': credit+=amount(c)
   lines+=1
  td,tc=map(amount,total.groups())
  if not debit==credit==td==tc:
   issues.append(f'{p}: {debit} débit, {credit} crédit, TOTAL {td}/{tc}')
if issues:
 for issue in issues[:30]: print('ECHEC:',issue)
 raise SystemExit(f'{len(issues)} anomalies de journal')
assert stages==sum(x['steps'] for x in AUD),(stages,sum(x['steps'] for x in AUD))
print(f'OK — nouveaux corrigés: {len(AUD)} documents, {stages} tableaux débit/crédit, {lines} lignes recalculées depuis les PDF, 0 déséquilibre.')
