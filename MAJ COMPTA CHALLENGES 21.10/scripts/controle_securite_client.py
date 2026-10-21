#!/usr/bin/env python3
"""Contrôles d'hygiène du client uniquement ; AUCUNE certification Supabase serveur."""
from pathlib import Path
import re,sys
R=Path(__file__).resolve().parents[1]
files={p.name:p.read_text(encoding='utf-8') for p in R.glob('*.js')}
errors=[]
for name,body in files.items():
    for pattern,reason in [(r'\.innerHTML\s*=', 'HTML dynamique non échappé à auditer'),
                           (r'insertAdjacentHTML\s*\(', 'Insertion de HTML dynamique à auditer'),
                           (r'\bdocument\.write\s*\(', 'document.write potentiellement dangereux'),
                           (r'\bnew\s+Function\s*\(', 'Compilation dynamique de JS non attendue'),
                           (r'\beval\s*\(', 'eval JS non attendu'),
                           (r'\bsb_secret_[A-Za-z0-9_-]+', 'Signature de clé Supabase secrète')]:
        if re.search(pattern,body):errors.append(f'{name} : {reason}')
online=files.get('online.js','')
if "textContent=String(text??'')" not in online:errors.append('online.js : textNode doit rendre les données utilisateur comme texte')
if 'shouldCreateUser:false' not in online:errors.append('online.js : inscription par OTP ne semble pas désactivée')
if not (R/'_headers').exists() or 'Content-Security-Policy:' not in (R/'_headers').read_text():errors.append('En-têtes de sécurité Netlify manquants')
if 'X-Robots-Tag: noindex, nofollow' not in (R/'_headers').read_text():errors.append('Site non finalisé devenu indexable par inadvertance')
if errors:
  print('\n'.join('ERREUR : '+e for e in errors));sys.exit(1)
print('OK — garde-fous statiques du navigateur. Limite : RLS, RPC SQL, auth et conservation restent non audités côté serveur.')
