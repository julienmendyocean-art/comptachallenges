# Veille réglementaire ComptaChallenges — 11 novembre 2026

## Changements confirmés et dates d’application

### PAIE — réduction générale dégressive unique (RGDU)

Le décret n° 2026-1037 du 6 novembre 2026 a été publié au Journal officiel le **10 novembre 2026**. Le mécanisme de détermination de la liste des branches prévu par le nouvel article D. 241-6 entre en vigueur le **11 novembre 2026**. Un arrêté conjoint annuel doit, au plus tard le 31 janvier, lister les branches dont le minimum national professionnel des salariés sans qualification est resté inférieur au SMIC pendant toute l’année civile précédente, avec le montant de référence (minimum professionnel annuel brut divisé par 1 820 heures). La première liste, fondée sur 2026, est attendue au plus tard le **31 janvier 2027**. Les dispositions de calcul dérogatoire s’appliquent aux cotisations dues au titre des périodes d’emploi à compter du **1er janvier 2027**. La liste n’étant pas encore publiée, aucune branche n’est désignée dans les supports. Les conditions et exceptions de D. 241-7, notamment les situations multi-branches et les mesures de rémunération, doivent être contrôlées avant application.

Source officielle : Légifrance, décret n° 2026-1037, NOR CPPS2619226D, articles 1 et 3.

### Immobilisations et Fiscalité — versions de véhicules électriques

L’arrêté du **9 novembre 2026**, publié au JO le **10 novembre 2026**, actualise la liste des types-variantes-versions (TVV) de voitures électriques ayant atteint le score environnemental minimal requis pour certaines aides et certaines dispositions fiscales. L’arrêté entre en vigueur le **11 novembre 2026** ; les nouvelles versions sont ajoutées à la liste à compter du **12 novembre 2026**. Les supports rappellent que le TVV exact doit être vérifié et que l’inscription ne vaut pas attribution automatique de l’aide. Le texte ne modifie pas les règles PCG de coût d’entrée/amortissement ni le régime général de TVA.

Source officielle : Légifrance, arrêté NOR TECR2629802A, texte JORFTEXT000055075229.

### RSE — certificats d’économies d’énergie (CEE)

L’arrêté du **5 novembre 2026**, publié au JO le **10 novembre 2026**, modifie les catégories de ménages, les justificatifs de revenus et plusieurs bonifications des secteurs résidentiel et transport. Il prévoit notamment le renseignement du décile de revenu fiscal de référence par part pour les opérations de transport concernées. Les nouvelles dispositions entrent en vigueur le **16 novembre 2026** et s’appliquent aux opérations engagées à compter de cette date. Les seuils et coefficients restent à vérifier dans les annexes propres à la fiche CEE et à la catégorie du bénéficiaire ; aucun montant générique n’est inventé dans les supports.

Source officielle : Légifrance, arrêté NOR ECOR2625692A, texte JORFTEXT000055075316.

### Autres mises à jour déjà intégrées dans la consolidation du 11/11

- PAIE : nouveau formulaire en ligne du congé supplémentaire de naissance obligatoire depuis le 01/11/2026 ; deux démarches cumulatives (DSN/DSIJ ou attestation si indisponible, et dépôt PDF), le même jour dans les cinq jours suivant le début de chaque période.
- SIC : sanctions CNIL publiées le 09/11/2026, utilisées comme cas pratique illustrant les articles 32 et 35 du RGPD, sans présenter les décisions comme une nouvelle norme générale.
- Fiscalité : arrêté du 06/11/2026 publié le 08/11/2026 ; à compter du 01/01/2027, lamibois, bois lamellés-collés et bois lamellés-croisés ajoutés aux exceptions de la catégorie « panneaux à base de bois » de l’article A. 471-36 du CIBS ; ils ne sont pas ajoutés à l’assiette.

## Synchronisation documentaire effectuée

- 5 thèmes synchronisés : PAIE, SIC, Immobilisations, Fiscalité et RSE.
- 15 supports PDF (cours, mémos, cartes mentales) enrichis ou mis à jour ; chaque support conserve sa présentation adaptée et porte la référence commune du 11/11/2026.
- 21 questions de quiz actualisées, sans changer la structure : 42 groupes de 30 questions, soit 1 260 questions.
- 7 exercices experts et 7 corrigés ajoutés dans la consolidation : CSN, cybersécurité CNIL, taxe bois, RGDU, véhicule électrique (immobilisations), véhicule électrique (fiscalité) et CEE.
- Références du site, index, manifeste PDF et bibliothèque embarquée synchronisés.
- 304 ressources dans le manifeste ; 14 cours totalisant 397 pages.

## Contrôles techniques

- `questions.json` et `pdf-manifest.json` valides ; 42 groupes × 30 questions = 1 260.
- 304 chemins de manifeste uniques, présents et avec empreintes SHA-256 conformes.
- PDF modifiés et nouveaux ouverts et contrôlés ; annexes datées du 11/11/2026.
- `pdf-library.js` reconstruit à partir du manifeste et syntaxe JavaScript contrôlée.
- Archive delta testée ; aucun ZIP complet du site n’a été créé.

## Limites

Ce delta est cumulatif pour la veille du 11 novembre et s’applique après le patch du 07/11, le delta du 08/11 et celui du 10/11. Les branches concernées par le calcul RGDU 2027 ne sont pas encore publiées : aucune liste n’est présumée. Les conditions individuelles de chaque aide véhicule et de chaque fiche CEE doivent être vérifiées au dossier. Les contrôles Supabase/RLS/RPC, trafic réseau, scripts tiers, comptes en ligne et duels ne sont pas revendiqués. Aucun déploiement GitHub/Netlify n’a été effectué. L’archive finale du site reste bloquée jusqu’à la commande explicite « Lance la MAJ finale ».
