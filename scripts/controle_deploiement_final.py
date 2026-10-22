#!/usr/bin/env python3
"""Contrôle bloquant des caractéristiques attendues du dossier final ; aucune connexion serveur."""
from pathlib import Path
import json,sys
R=Path(__file__).resolve().parents[1]
fail=[]
version=json.loads((R/'VERSION_SITE.json').read_text(encoding='utf-8'))
if version.get('nom')!='MAJ COMPTA CHALLENGES 21.10':fail.append('Numéro de version incorrect')
if version.get('duels_distants_actifs') is not False:fail.append('Duels distants non audités activés')
html=(R/'index.html').read_text(encoding='utf-8')
if '<section id="duels-distance" hidden=' not in html:fail.append('Section en ligne non masquée')
if 'src="online.js"' in html or 'src="online-config.js"' in html:fail.append('Connexion Supabase injectée alors que non auditée')
if 'id="jeux"' not in html or 'display:none!important' not in html:fail.append('Jeux non validés visibles')
if 'disabled="" value="exam"' not in html:fail.append('Examen non validé disponible')
if not (R/'references.html').is_file():fail.append('Références officielles non disponibles')
if any(R.rglob('*.sql')):fail.append('Scripts SQL privés dans le site public')
for private in ['AUDIT_PRIVE','audit_lecture_seule.sql','LISEZ_MOI_HORS_DEPOT.md']:
 if (R/private).exists():fail.append('Ressource privée dans dossier public : '+private)
if 'simplifié' in html.lower() and 'pcg simplifié' in html.lower():fail.append('PCG simplifié réapparu')
if fail:
 for issue in fail:print('ECHEC:',issue)
 sys.exit(1)
print('OK — données privées absentes, duels distants et jeux non validés masqués, site versionné.')
