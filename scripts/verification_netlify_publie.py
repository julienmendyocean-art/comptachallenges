#!/usr/bin/env python3
"""Compare le site Netlify publié aux fichiers locaux : lecture seule, sans authentification."""
import argparse,hashlib,json,sys,re,urllib.request,urllib.parse,urllib.error
from pathlib import Path
P=argparse.ArgumentParser(description='Contrôle post-publication ComptaChallenges (lecture seule)')
P.add_argument('--url',default='https://comptachallenges.netlify.app/',help='Adresse publique Netlify')
P.add_argument('--all-pdf',action='store_true',help='Télécharger et comparer les empreintes des 247 PDF')
P.add_argument('--output',help='Rapport JSON à créer')
A=P.parse_args()
R=Path(__file__).resolve().parents[1];base=A.url.rstrip('/')+'/'
problems=[];warnings=[];tests={}
def read(path,maxsize=30000000):
 url=urllib.parse.urljoin(base,urllib.parse.quote(path,safe='/-._~'))
 req=urllib.request.Request(url,headers={'User-Agent':'ComptaChallenges-ReadOnly-ReleaseAudit/1.0','Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=17) as r:
  payload=r.read(maxsize+1)
  if len(payload)>maxsize:raise ValueError('Réponse anormalement grosse: '+path)
  if r.status!=200:raise ValueError(f'HTTP {r.status} pour {path}')
  return payload,dict(r.headers)
def get(path):
 try:return read(path)
 except (urllib.error.URLError,TimeoutError,OSError,ValueError) as e:
  problems.append(f'{path} : inaccessible ({type(e).__name__}: {e})');return None,{}
raw,headers=get('index.html')
if raw:
 tests['homepage']=True
 if b'MAJ-COMPTA-CHALLENGES-22.10-R12' not in raw:problems.append('index.html ne contient pas le marqueur de version R12')
 else:tests['build']='R12 confirmé dans le HTML'
 if 'noindex' in headers.get('X-Robots-Tag','').lower():warnings.append('Site public interdit à l’indexation (X-Robots-Tag)')
ver,_=get('VERSION_SITE.json')
if ver:
 try:
  v=json.loads(ver)
  for k,x in [('quiz_questions',810),('pdf_total',247),('quiz_themes',9)]:
   if v.get(k)!=x:problems.append(f'VERSION_SITE : {k}={v.get(k)} au lieu de {x}')
  tests['version_correctif']=v.get('correctif')
 except ValueError:problems.append('VERSION_SITE.json invalide')
q,_=get('questions.json')
if q:
 try:
  g=json.loads(q)
  if len(g)!=27 or sum(len(i.get('questions',[])) for i in g)!=810 or any(len(i.get('questions',[]))!=30 for i in g):problems.append('Banque distante : 810/27/30 non respecté')
  else:tests['banque']='810 QCM / 27 groupes / 30 par groupe'
  local=(R/'questions.json').read_bytes()
  if hashlib.sha256(q).hexdigest()!=hashlib.sha256(local).hexdigest():problems.append('questions.json en production différent du ZIP local')
 except ValueError:problems.append('questions.json distant non JSON')
pdfraw,_=get('pdf-manifest.json')
if pdfraw:
 try:
  items=json.loads(pdfraw)
  if len(items)!=247:problems.append(f'Manifest PDF : {len(items)} au lieu de 247')
  else:tests['manifest_pdf']='247 documents'
  if hashlib.sha256(pdfraw).hexdigest()!=hashlib.sha256((R/'pdf-manifest.json').read_bytes()).hexdigest():problems.append('Manifest PDF en production différent du ZIP local')
 except ValueError:problems.append('pdf-manifest distant invalide')
ledger=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text(encoding='utf-8'))['sha256']
selected=sorted(ledger) if A.all_pdf else [
 'memos/01 - Comptes usuels.pdf','memos/04 - TVA et CA3.pdf',
 'cours-complets/06_COURS_PAIE_2026.pdf',
 'references-paie/PAIE - Mémo consolidé 2026.pdf',
 'references-paie/PAIE - Carte mentale consolidée 2026.pdf',
 'cartes-mentales/01 - Comptes usuels.pdf']
for path in selected:
 if path not in ledger:problems.append('Fichier sentinelle absent du manifest local : '+path);continue
 body,_=get(path)
 if body:
  if hashlib.sha256(body).hexdigest()!=ledger[path]:problems.append('PDF différent en production : '+path)
  else:tests.setdefault('pdf_egaux',[]).append(path)
summary={'status':'CONFORME_AUX_FICHIERS' if not problems else 'ECARTS_OU_INACCESSIBILITE','site':base,'tests':tests,'errors':problems,'warnings':warnings,'limitations':['Les résultats n’établissent pas la conformité réglementaire individuelle des questions','Ils ne testent pas les droits Supabase ni les duels distants']}
print(json.dumps(summary,ensure_ascii=False,indent=2))
if A.output:Path(A.output).write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
sys.exit(1 if problems else 0)
