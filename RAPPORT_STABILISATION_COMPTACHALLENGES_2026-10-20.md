# ComptaChallenges — Priorité 1 : stabilisation

**Date :** 20 octobre 2026  
**Statut :** package local consolidé et contrôlé ; **non publié** sur GitHub/Netlify.

## Résultats locaux

- 7 thèmes × 3 niveaux = **21 parcours**, chacun complété en simulation avec 10 questions et un résultat final.
- **210 questions** réparties en 21 groupes ; sources et champs de traçabilité présents (contrôles structurels).
- **8 fiches mémos et 8 cartes mentales**, la TVA/CA3 prenant les versions du 20 octobre 2026.
- **128 PDF** dans le manifeste et la bibliothèque web.
- **112 anciens PDF d’exercices, corrigés et ressources conservés à l’octet près** par rapport à l’archive V4.9.5 de référence.
- Contrôles de syntaxe JavaScript, manifeste PDF, empreintes SHA-256 : **réussis**.
- Test DOM en Chromium à 375 px : **aucun débordement horizontal détecté**.
- Les correctifs de sécurité (19 octobre) sont intégrés au package.

## Choix conservateurs

La V4.9.5 comportait 1 120 questions mais leur validation individuelle n’était pas démontrée. Ce package garde la banque restreinte de 210 questions des correctifs les plus récents, plutôt que de réactiver des questions insuffisamment documentées. L’examen et les jeux non validés restent masqués. Le 8e thème SIC est disponible dans la bibliothèque PDF, sans faux quiz.

## Limites

Le navigateur de cet environnement a refusé la navigation réseau, y compris vers localhost. Les tests Chromium ont donc utilisé **l’interface HTML chargée en mémoire** et les questions JSON locales. Aucun parcours réseau en production n’a été validé. Les duels à distance, l’authentification Supabase, les e-mails OTP et les contrôles RGPD côté serveur restent à effectuer. La conformité comptable de toutes les réponses ne peut pas être certifiée par des tests de structure.

## Comment publier sans casser le site actuel

1. Faire une sauvegarde du dépôt GitHub actuel et relever le dernier déploiement Netlify.
2. Sur GitHub Desktop, synchroniser `comptachallenges`, puis créer la branche `stabilisation-2026-10-20`.
3. Extraire le ZIP de stabilisation et copier **son contenu** à la racine du dépôt ; ne pas supprimer les autres fichiers. Si des changements plus récents existent dans GitHub, les examiner avant remplacement.
4. Exécuter `python3 scripts/controle_publication.py`, `python3 scripts/controle_stabilisation.py` et `node --check` sur les fichiers JS.
5. Commit, push, ouvrir une pull request ; vérifier que GitHub Actions « Verifier le site » réussit.
6. Vérifier un aperçu Netlify si disponible, puis fusionner et confirmer **Published** dans Netlify.
7. Sur le domaine public, tester les 21 quiz, les PDF (dont TVA/SIC), la connexion et les duels sur deux comptes/appareils. Mettre en retrait tout module qui échoue.
8. Activer les protections de branche `main` (pull requests, checks requis, pas de force push).

**Le package ne déclenche aucun déploiement automatiquement.**
