#!/usr/bin/env python3
"""Contrôles statiques de publication R12 — NE valide PAS individuellement le fond comptable."""
from pathlib import Path
from collections import Counter
from urllib.parse import urlsplit,unquote
from html.parser import HTMLParser
import hashlib,json,re,sys
R=Path(__file__).resolve().parents[1]
errors=[];warnings=[]
class Links(HTMLParser):
 def __init__(self): super().__init__();self.all=[]
 def handle_starttag(self,tag,attrs):
  if tag not in ('a','script','link','img','iframe'):return
  d=dict(attrs);url=d.get('href') if tag in ('a','link') else d.get('src')
  if url:self.all.append((tag,url))

def fail(msg):errors.append(msg)
def check(expr,msg):
 if not expr: fail(msg)

for name in ('index.html','references.html','confidentialite.html','references-comptes/index.html'):
 path=R/name
 if not path.exists():fail('Page manquante: '+name);continue
 parser=Links();parser.feed(path.read_text(encoding='utf-8'))
 for tag,href in parser.all:
  u=urlsplit(href)
  if u.scheme or u.netloc or not u.path or u.path.startswith('#'):continue
  resolved=(path.parent/unquote(u.path).lstrip('/')).resolve()
  try:resolved.relative_to(R)
  except ValueError:fail(f'Lien dangereux: {name}: {href}');continue
  if not resolved.is_file():fail(f'Lien {name}: {href} absent')

version=json.loads((R/'VERSION_SITE.json').read_text(encoding='utf-8'))
qs=json.loads((R/'questions.json').read_text(encoding='utf-8'))
manifest=json.loads((R/'pdf-manifest.json').read_text(encoding='utf-8'))
check(len(qs)==27,'27 groupes (9 thèmes × 3 niveaux) requis')
ids={f'{i:02d}-{level}' for i in range(1,10) for level in ('debutant','intermediaire','expert')}
check({g['id'] for g in qs}==ids,'Un thème ou un niveau du quiz manque')
check(all(len(g['questions'])==30 for g in qs),'Un groupe de quiz ne contient pas 30 questions')
check(sum(map(lambda g:len(g['questions']),qs))==810,'Nombre de questions différent de 810')
check(version.get('quiz_questions')==810 and version.get('pdf_total')==247,'Compteurs VERSION_SITE.json désynchronisés')
keys=[]
for g in qs:
 for q in g['questions']:
  keys.append(re.sub(r'\s+',' ',q.get('q','').casefold().strip()))
  if q.get('correct') not in ('A','B','C','D') or set(q.get('options',{}))!=set('ABCD'):
   fail('QCM mal formé : '+g['id'])
check(len(set(keys))==len(keys),'Doublons d’énoncé dans les QCM')
check(len(manifest)==247,'Manifest PDF différent de 247 fichiers')
paths=[x.get('path') for x in manifest]
check(len(paths)==len(set(paths)),'Doublons de chemin dans le manifest PDF')
check(len(list(R.rglob('*.pdf')))==247,'Le site ne contient pas exactement 247 PDF')
ledger=json.loads((R/'CONTROLE_PDF_SHA256_2026-10-21.json').read_text(encoding='utf-8')).get('sha256',{})
check(set(paths)==set(ledger),'Manifeste PDF et empreintes SHA256 différents')
for path,expected in ledger.items():
 p=R/path
 if not p.exists():fail('PDF absent '+path);continue
 if not p.read_bytes().startswith(b'%PDF-'):fail('Document non PDF : '+path)
 if hashlib.sha256(p.read_bytes()).hexdigest()!=expected:fail('PDF modifié sans validation : '+path)
html=(R/'index.html').read_text(encoding='utf-8')
check('MAJ-COMPTA-CHALLENGES-22.10-R12' in html,'Marqueur de build absent')
check('src="online.js"' not in html and 'src="online-config.js"' not in html,'Module Supabase non audité chargé')
check(version.get('duels_distants_actifs') is False,'Duels distants actifs avant audit')
# Ces paramètres demandent une décision explicite avant ouverture au référencement.
if 'Disallow: /' in (R/'robots.txt').read_text(encoding='utf-8'):
 warnings.append('SEO : robots.txt bloque toutes les pages de l’indexation')
if 'X-Robots-Tag: noindex' in (R/'_headers').read_text(encoding='utf-8'):
 warnings.append('SEO : _headers ajoute X-Robots-Tag: noindex, nofollow')
if (R/'online.js').exists() or (R/'online-config.js').exists():
 warnings.append('Supabase : fichiers historiques accessibles, même si non chargés; base/RLS à auditer')
warnings.append('Métier : sources institutionnelles présentes ne prouvent pas la validation individuelle des 810 réponses')
print(json.dumps({'status':'FAIL' if errors else 'PASS_WITH_WARNINGS' if warnings else 'PASS','checks':{'themes':9,'levels':3,'questions':810,'pdfs':247,'static_links':'checked','hashes':'checked'},'errors':errors,'warnings':warnings},ensure_ascii=False,indent=2))
sys.exit(1 if errors else 0)
