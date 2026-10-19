# Compta Challenge — base GitHub V4.9.2

Cette archive contient les fichiers statiques du site et **126 PDF** issus de la version V4.9.2 retrouvée dans les fichiers ChatGPT. C'est une **base de travail** : elle n'a pas été vérifiée en production sur Netlify au moment de sa préparation pour GitHub.

## Mettre les fichiers dans GitHub

1. Télécharger puis **décompresser** l'archive ZIP ; ne pas envoyer le ZIP comme fichier unique dans le dépôt.
2. Installer **GitHub Desktop** et se connecter au compte `julienmendyocean-art`.
3. Dans GitHub Desktop, **File > Clone repository... > GitHub.com > comptachallenges > Clone**.
4. **Repository > Show in Explorer**. Copier **tout le contenu** de ce dossier dans le dossier du dépôt cloné (le fichier `index.html` doit être à la racine du dépôt, pas dans un sous-dossier).
5. Dans GitHub Desktop, saisir un résumé : `Ajout du site Compta Challenge V4.9.2`, puis **Commit to main** et **Push origin**.
6. Avant de relier Netlify à la branche `main`, comparer la version en ligne actuelle. Le branchement au dépôt peut provoquer un nouveau déploiement.

## Netlify

Projet Netlify existant : `comptachallenges` ; publication statique à partir de `.` ; laisser la commande de build vide ; branche `main`. Ne pas créer un deuxième site.

## Sécurité et contenu

- `online-config.js` contient une **clé Supabase publishable publique** attendue dans une application navigateur ; ne pas y ajouter de clé `service_role`, `sb_secret_` ou de mot de passe.
- Le dépôt GitHub indiqué est public : tout fichier ajouté sera visible par tout le monde.
- Les fichiers PDF sont préservés par rapport à l'archive source V4.9.2.
- **Ne pas publier automatiquement V4.9.5** : les 1 050 nouvelles questions n'ont pas une validation éditoriale individuelle attestée ; les contrôles automatiques ne suffisent pas.
- Les PDF avaient été validés sur d'autres plateformes d'après le propriétaire ; ceci ne constitue pas une nouvelle certification de leurs contenus.
