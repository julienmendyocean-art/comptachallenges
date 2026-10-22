# Mise à jour guidée de Compta Challenge — 19 octobre 2026

Ce paquet sert à installer la correction des **quiz aux 3 niveaux** et les **14 PDF de mémos/cartes mentales** dans le dépôt local GitHub Desktop existant.

## Procédure (Windows)
1. Téléchargez **ASSISTANT_INSTALLATION_COMPTA_CHALLENGE.zip** et faites **Extraire tout**.
2. Ouvrez le dossier extrait puis double-cliquez sur **1_LANCER_LE_CORRECTIF.cmd**.
3. Suivez les demandes de confirmation à l'écran (**O** = oui, **N** = non). Si le programme ne trouve pas votre dépôt, dans GitHub Desktop cliquez sur **Show in Explorer**, puis choisissez ce même dossier dans la fenêtre de sélection.
4. À la fin, consultez **Netlify > Deploys**, puis testez la fiche TVA et les 3 niveaux de quiz.

## Ce que fait le programme
- Vérifie qu'il travaille sur votre dépôt `julienmendyocean-art/comptachallenges`, branche `main`, commit initial `0913725` ; **s'arrête si le projet a déjà changé**.
- S'assure qu'aucune modification locale non enregistrée ne serait écrasée.
- Vérifie l'intégrité des 17 fichiers avec les empreintes SHA-256.
- Enregistre les originaux dans `Documents/ComptaChallenge-sauvegardes/...` avant toute modification.
- Ne modifie que `index.html`, `app.js`, `questions.json` et les **14 PDF** des mémos/cartes mentales. Les PDF d'exercices et corrigés restent inchangés.
- Vous demande une première confirmation pour installer, puis une deuxième avant d'effectuer un `git commit` et un `git push`.
- Ne demande **jamais** de mot de passe ou de clé Supabase.

## Si l'envoi GitHub échoue
Le programme affiche un avertissement. Ouvrez GitHub Desktop et cliquez sur **Push origin**. Si le programme signale un dépôt différent ou des changements locaux, arrêtez-vous et transmettez une capture du message.

## Remarques de sécurité
- Ce programme n'est pas un accès à distance à votre ordinateur : **vous seul le lancez et autorisez les opérations**.
- L'automatisation de copie et d'envoi a été préparée ici, mais ne peut pas être testée sur votre configuration Windows depuis cette conversation.
- L'envoi sur `main` déclenche normalement un déploiement Netlify : faites-le quand vous souhaitez effectivement publier le correctif.
- Les tests des quiz et PDF effectués précédemment étaient locaux ; le site de production doit être testé après publication.
