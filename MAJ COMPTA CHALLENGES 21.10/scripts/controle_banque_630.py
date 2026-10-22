#!/usr/bin/env python3
"""Contrôles bloquants de forme, diversité, arithmétique débutant et traçabilité.
Ne constituent pas une certification juridique indépendante de chaque cas métier.
"""
import csv, json, re, unicodedata
from collections import Counter
from decimal import Decimal
from pathlib import Path
from urllib.parse import urlparse
R=Path(__file__).resolve().parents[1]
D=Decimal
BANK=json.loads((R/'questions.json').read_text(encoding='utf-8'))
fail=[]
check=lambda cond,msg:fail.append(msg) if not cond else None
expected={f'{n:02d}-{lv}' for n in range(1,8) for lv in ('debutant','intermediaire','expert')}
check({g['id'] for g in BANK}==expected,'Les 21 groupes attendus ne sont pas présents')
check(len(BANK)==21,'Il doit exister 21 groupes')
check(all(len(g['questions'])==30 for g in BANK),'30 questions attendues par thème/niveau')
rows=[(g,q) for g in BANK for q in g['questions']]
check(len(rows)==630,'630 questions attendues')
normalize=lambda s:' '.join(''.join(c for c in unicodedata.normalize('NFD',s.casefold()) if not unicodedata.combining(c)).split())
keys=[normalize(q['q']) for _,q in rows]
check(len(set(keys))==len(keys),'Au moins deux énoncés identiques')
source_hosts={'www.anc.gouv.fr','anc.gouv.fr','bofip.impots.gouv.fr','www.impots.gouv.fr','impots.gouv.fr','www.legifrance.gouv.fr'}
allowed_cat={'notion','application','calcul','analyse'}
for g in BANK:
 cats=Counter(q.get('category') for q in g['questions'])
 check(cats.get('notion',0)>=2,f"{g['id']}: moins de 2 notions")
 check(cats.get('application',0)>=2,f"{g['id']}: moins de 2 applications")
 check(cats.get('calcul',0)>=2,f"{g['id']}: moins de 2 calculs")
 check(cats.get('analyse',0)>=2,f"{g['id']}: moins de 2 raisonnements")
 for i,q in enumerate(g['questions'],1):
  loc=f"{g['id']}/Q{i}"
  check(q.get('n')==i,f'{loc}: ordre incorrect')
  opts=q.get('options') or {}
  check(set(opts)==set('ABCD'),f'{loc}: exactement quatre choix')
  if set(opts)==set('ABCD'):
   check(len({normalize(x) for x in opts.values()})==4,f'{loc}: options répétées')
   check(q.get('correct') in opts,f'{loc}: réponse non référencée')
  check(len(q.get('q','').strip())>=12,f'{loc}: énoncé trop court')
  check(len(q.get('explanation','').strip())>=18,f'{loc}: explication trop courte')
  check(q.get('category') in allowed_cat,f'{loc}: catégorie inconnue')
  check(urlparse(q.get('source','')).hostname in source_hosts,f'{loc}: source non institutionnelle')
  check(q.get('reviewed_at') in ('2026-10-20','2026-10-21'),f'{loc}: date de revue absente')
  check(q.get('review_status') and q.get('review_method'),f'{loc}: traçabilité absente')
  check(not re.search(r'\bdans ce même cas\b|\bquestion précédente\b|\bci.dessus\b',q['q'],re.I),f'{loc}: dépendance à une autre question')
  check('BOI-TVA-DECLA-20-30-60' not in q.get('source',''),f'{loc}: ancienne référence TVA hors sujet')
  check('BOI-TVA-DED-20-10-20120912' not in q.get('source',''),f'{loc}: ancienne référence déduction hors sujet')
# Calculs vérifiés indépendamment de leur réponse stockée, en centimes.
scenarios={
 '01':[D('250')*D('1.20'),D('300')*D('1.20'),D('480'),D('1000')*D('0.20'),D('750')],
 '02':[D('2500')*D('1.20'),D('3400')*D('0.20'),D('5160')/D('1.20'),D('5200')*D('.90'),D('6100')-D('2200')],
 '03':[D('20000')/D('5'),D('25000')-D('5000'),D('6000')*D('6')/D('12'),D('35000')-D('185'),D('40000')*D('1.20')],
 '04':[D('2500')*D('.20'),D('3400')*D('.20'),D('4300')*D('.10'),D('5200')-D('1850'),D('6100')-D('2200')],
 '05':[D('2500')-D('800'),D('3400')+D('1150')-D('300'),D('4300')+D('1500'),D('5200')-D('1850'),D('6100')-D('2200')],
 '06':[D('2500')-D('800'),D('3400')-D('1150'),D('4300')+D('1500'),D('5200')+D('1850'),D('6100')-D('2200')],
 '07':[D('2500')+D('800'),D('3400')-D('3400'),D('4300')+D('1500'),D('5200')+D('1850'),D('6100')-D('2200')]
}
math_good=0
for g in BANK:
 if not g['id'].endswith('debutant'):continue
 for i,(q,val) in enumerate(zip(g['questions'][10:15],scenarios[g['fiche']]),11):
  raw=q['options'][q['correct']].replace('€','').replace('\u00a0','').replace(' ','').replace(',','.')
  try:
   actual=D(raw)
   check(actual==val.quantize(D('0.01')),f"{g['id']} Q{i}: {actual} != {val}")
   if actual==val.quantize(D('0.01')):math_good+=1
  except Exception as e:fail.append(f"{g['id']} Q{i}: calcul illisible {e}")
# L'échantillon de tirage n'est pas seulement une permutation brute des montants.
script=(R/'app.js').read_text(encoding='utf-8')
check('function sampleDiversified(pool,count)' in script,'Tirage diversifié absent')
check("sampleDiversified(pickForTopic" in script,'Le tirage n’est pas activé en mode standard')
check("sampleDiversified(pickForTopic(i,'mixte'),5)" in script,'Le tirage n’est pas activé en mode personnalisé')
print('Banque :',len(rows),'questions,',len(BANK),'groupes')
print('Familles :',dict(Counter(q['category'] for _,q in rows)))
print('Calculs débutant recomputés :',math_good,'/ 35')
print('Sites institutionnels liés :',len(set(q['source'] for _,q in rows)))
if fail:
 for msg in fail[:50]:print('ÉCHEC :',msg)
 raise SystemExit(1)
print('OK — inventaire, structure, thèmes, diversité, traçabilité et 35 calculs débutant validés par contrôle automatique.')
