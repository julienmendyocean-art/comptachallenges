(() => {
'use strict';
const labels={debutant:'Débutant',intermediaire:'Intermédiaire',expert:'Expert',tous:'Tous niveaux'};
const topics=['Comptes usuels','Opérations courantes','Immobilisations','TVA et CA3','Lettrage et rapprochement bancaire','Compte de résultat','Bilan actif et passif','Système d’information comptable (SIC)','PAIE'];
const library = [
  {
    "theme": "01",
    "label": "Cours complet • étape 01/09 · 36 pages",
    "level": "tous",
    "path": "cours-complets/01_COURS_COMPTES_USUELS_2026.pdf"
  },
  {
    "theme": "01",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/01 - Comptes usuels.pdf"
  },
  {
    "theme": "01",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/01 - Comptes usuels.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/01_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/01_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/01_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/01_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/01_expert_rapide_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/01_expert_rapide_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/01_debutant_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/01_debutant_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/01_complet_debutant.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/01_debutant_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/01_debutant_corrige_complet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/01_complet_debutant.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/01_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/01_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/01_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/01_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/01_expert_complet_sujet.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/01_expert_exercices_complets.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/01_expert_complet_corrige.pdf"
  },
  {
    "theme": "01",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/01_expert_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "Cours complet • étape 03/09 · 32 pages",
    "level": "tous",
    "path": "cours-complets/03_COURS_OPERATIONS_COURANTES_2026.pdf"
  },
  {
    "theme": "02",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/02 - Opérations courantes.pdf"
  },
  {
    "theme": "02",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/02 - Opérations courantes.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/02_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/02_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/02_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/02_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/02_expert_rapide_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/02_expert_rapide_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/02_debutant_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/02_debutant_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/02_complet_debutant.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/02_debutant_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/02_debutant_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/02_complet_debutant.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/02_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/02_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/02_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/02_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/02_expert_complet_sujet.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/02_expert_exercices_complets.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/02_expert_complet_corrige.pdf"
  },
  {
    "theme": "02",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/02_expert_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "Cours complet • étape 05/09 · 27 pages",
    "level": "tous",
    "path": "cours-complets/05_COURS_IMMOBILISATIONS_2026.pdf"
  },
  {
    "theme": "03",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/03 - Immobilisations.pdf"
  },
  {
    "theme": "03",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/03 - Immobilisations.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/03_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/03_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/03_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/03_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/03_expert_rapide_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/03_expert_rapide_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/03_debutant_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/03_debutant_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/03_complet_debutant.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/03_debutant_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/03_debutant_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/03_complet_debutant.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/03_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/03_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/03_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/03_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/03_expert_complet_sujet.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/03_expert_exercices_complets.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/03_expert_complet_corrige.pdf"
  },
  {
    "theme": "03",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/03_expert_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "Cours complet • étape 04/09 · 37 pages",
    "level": "tous",
    "path": "cours-complets/04_COURS_TVA_CA3_2026.pdf"
  },
  {
    "theme": "04",
    "label": "Mémo TVA chronologique (21/10/2026)",
    "level": "tous",
    "path": "memos/04 - TVA et CA3.pdf"
  },
  {
    "theme": "04",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/04 - TVA et CA3.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/04_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/04_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/04_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/04_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/04_expert_rapide_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/04_expert_rapide_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/04_debutant_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/04_debutant_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/04_complet_debutant.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/04_debutant_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/04_debutant_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/04_complet_debutant.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/04_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/04_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/04_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/04_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/04_expert_complet_sujet.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/04_expert_exercices_complets.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/04_expert_complet_corrige.pdf"
  },
  {
    "theme": "04",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/04_expert_corrige_complet.pdf"
  },
  {
    "theme": "05",
    "label": "Cours complet • étape 07/09 · 26 pages",
    "level": "tous",
    "path": "cours-complets/07_COURS_LETTRAGE_RAPPROCHEMENT_2026.pdf"
  },
  {
    "theme": "05",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/05 - Lettrage et rapprochement bancaire.pdf"
  },
  {
    "theme": "05",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/05 - Lettrage et rapprochement bancaire.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/05_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/05_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/05_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/05_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/05_expert_rapide_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/05_expert_rapide_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/05_debutant_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/05_debutant_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/05_complet_debutant.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/05_debutant_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/05_debutant_corrige_complet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/05_complet_debutant.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/05_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/05_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/05_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/05_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/05_expert_complet_sujet.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/05_expert_exercices_complets.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/05_expert_complet_corrige.pdf"
  },
  {
    "theme": "05",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/05_expert_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "Cours complet • étape 08/09 · 25 pages",
    "level": "tous",
    "path": "cours-complets/08_COURS_COMPTE_DE_RESULTAT_2026.pdf"
  },
  {
    "theme": "06",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/06 - Compte de résultat.pdf"
  },
  {
    "theme": "06",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/06 - Compte de résultat.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/06_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/06_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/06_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/06_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/06_expert_rapide_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/06_expert_rapide_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/06_debutant_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/06_debutant_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/06_complet_debutant.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/06_debutant_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/06_debutant_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/06_complet_debutant.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/06_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/06_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/06_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/06_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/06_expert_complet_sujet.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/06_expert_exercices_complets.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/06_expert_complet_corrige.pdf"
  },
  {
    "theme": "06",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/06_expert_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "Cours complet • étape 09/09 · 24 pages",
    "level": "tous",
    "path": "cours-complets/09_COURS_BILAN_ACTIF_PASSIF_2026.pdf"
  },
  {
    "theme": "07",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/07 - Bilan actif et passif.pdf"
  },
  {
    "theme": "07",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/07 - Bilan actif et passif.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/07_debutant_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/07_debutant_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/07_intermediaire_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/07_intermediaire_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/07_expert_rapide_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO rapide (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/07_expert_rapide_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-21/07_debutant_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-complets/07_debutant_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet complémentaire · sujet · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-valides/07_complet_debutant.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-21/07_debutant_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-complets/07_debutant_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet complémentaire · corrigé · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-valides/07_complet_debutant.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-21/07_intermediaire_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-complets/07_intermediaire_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-21/07_intermediaire_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-complets/07_intermediaire_corrige_complet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-21/07_expert_complet_sujet.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · sujet · difficulté 5/5",
    "level": "expert",
    "path": "exercices-complets/07_expert_exercices_complets.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet (édition 21/10/2026) · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-21/07_expert_complet_corrige.pdf"
  },
  {
    "theme": "07",
    "label": "EXO complet · corrigé · difficulté 5/5",
    "level": "expert",
    "path": "corriges-complets/07_expert_corrige_complet.pdf"
  },
  {
    "theme": "08",
    "label": "Cours complet • étape 02/09 · 25 pages",
    "level": "tous",
    "path": "cours-complets/02_COURS_SYSTEME_INFORMATION_COMPTABLE_2026.pdf"
  },
  {
    "theme": "08",
    "label": "Mémo",
    "level": "tous",
    "path": "memos/08 - Système d'information comptable.pdf"
  },
  {
    "theme": "08",
    "label": "Carte mentale",
    "level": "tous",
    "path": "cartes-mentales/08 - Système d'information comptable.pdf"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/08_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/08_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/08_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/08_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/08_expert_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice rapide SIC — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/08_expert_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/08_debutant_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/08_debutant_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/08_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/08_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/08_expert_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "08",
    "label": "Exercice complet SIC — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/08_expert_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Cours complet • étape 06/09 · 47 pages — PAIE / PSS 2026",
    "level": "tous",
    "path": "cours-complets/06_COURS_PAIE_2026.pdf"
  },
  {
    "theme": "09",
    "label": "Mémo PAIE",
    "level": "tous",
    "path": "references-paie/PAIE - Mémo consolidé 2026.pdf",
    "sha256": "0e18dc15be092230dc547755a494df25b1761e23390269c9a3034663479a5800",
    "type": "memos",
    "note": "Consolidation des supports PAIE du 22/10/2026"
  },
  {
    "theme": "09",
    "label": "Carte mentale PAIE",
    "level": "tous",
    "path": "references-paie/PAIE - Carte mentale consolidée 2026.pdf",
    "sha256": "62e2dd13df29045675819db6d9da7474297ce183bd7c8dd3cb23e19f0a76ee87",
    "type": "cartes-mentales",
    "note": "Consolidation des supports PAIE du 22/10/2026"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/09_debutant_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/09_debutant_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/09_intermediaire_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/09_intermediaire_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/09_expert_rapide_sujet.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice rapide PAIE — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/09_expert_rapide_corrige.pdf",
    "type": "rapide",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "exercices-2026-10-22/09_debutant_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 1/5",
    "level": "debutant",
    "path": "corriges-2026-10-22/09_debutant_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "exercices-2026-10-22/09_intermediaire_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 3/5",
    "level": "intermediaire",
    "path": "corriges-2026-10-22/09_intermediaire_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — sujet · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "exercices-2026-10-22/09_expert_complet_sujet.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  },
  {
    "theme": "09",
    "label": "Exercice complet PAIE — corrigé · édition 22/10/2026 · difficulté 5/5",
    "level": "expert",
    "path": "corriges-2026-10-22/09_expert_complet_corrige.pdf",
    "type": "complet",
    "source_status": "qcm issus banque R9; écritures nouvelles contrôlées par double entrée"
  }
];
window.ComptaAllowedPdfPaths = new Set(library.map(x=>x.path));
const safePaths=new Set(library.map(x=>x.path));
const root=document.getElementById('pdf-items');
const themeselect=document.getElementById('pdf-theme-filter');
const levelselect=document.getElementById('pdf-level-filter');
const kindselect=document.getElementById('pdf-kind-filter');
const search=document.getElementById('pdf-search');
const reset=document.getElementById('pdf-reset');
const count=document.getElementById('pdf-library-summary');
if(!root||!themeselect||!levelselect||!kindselect||!search||!reset)return;
const learningOrder=['01','08','02','04','03','09','05','06','07'];
for(const id of learningOrder){const option=document.createElement('option');option.value=id;option.textContent=topics[Number(id)-1];themeselect.append(option)}
function kind(label){const v=label.toLowerCase();return v.startsWith('cours complet')?'cours':v.startsWith('exercice rapide')||v.startsWith('exo rapide')?'rapide':v.startsWith('exercice complet')||v.startsWith('exo complet')?'complet':'fiches'}
const PARTS=[{id:'cours',label:'Cours complet'},{id:'memo',label:'Mémo'},{id:'carte',label:'Carte mentale'},{id:'rapide',label:'Exercices rapides et corrigés'},{id:'complet',label:'Exercices complets et corrigés'}];
const difficultyLabel={debutant:'Débutant · 1/5',intermediaire:'Intermédiaire · 3/5',expert:'Expert · 5/5',tous:'Tous niveaux'};
const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
function subgroup(item){if(kind(item.label)==='cours')return 'cours';if(kind(item.label)==='rapide')return 'rapide';if(kind(item.label)==='complet')return 'complet';return item.label.toLowerCase().includes('carte')?'carte':'memo'}
function make(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text)node.textContent=text;return node}
function preview(item,title,cls='btn subtle'){
 const button=make('button',cls,title);button.type='button';button.dataset.previewLocal=item.path;button.dataset.previewTitle=topics[Number(item.theme)-1]+' — '+item.label;return button;
}
function series(item){
 const dated=item.path.match(/2026-10-(21|22)/);if(dated)return {id:'edition-'+dated[0],label:'Série du '+dated[1]+' octobre 2026',priority:0};
 if(item.path.includes('-complets/'))return {id:'serie-complete',label:'Autre série complète',priority:1};
 if(item.path.includes('-valides/'))return {id:'serie-complementaire',label:'Série complémentaire',priority:2};
 return {id:item.path.replace(/corrig[ée]s?|sujets?|exercices?/gi,''),label:'Série complémentaire',priority:3};
}
function exerciseRows(items){
 const wrap=make('div','exercise-rows');
 for(const level of ['debutant','intermediaire','expert']){
  const rows=items.filter(i=>i.level===level);if(!rows.length)continue;
  const groups=new Map();for(const row of rows){const info=series(row);if(!groups.has(info.id))groups.set(info.id,{...info,items:[]});groups.get(info.id).items.push(row)}
  const ordered=[...groups.values()].sort((a,b)=>a.priority-b.priority||a.id.localeCompare(b.id));
  const levelBlock=make('div','exercise-level');const name=make('h5','',difficultyLabel[level]);levelBlock.append(name);
  function addPair(group,target){
   const pair=make('div','exercise-pair');
   if(ordered.length>1)pair.append(make('span','series-label',group.label));
   const actions=make('div','resource-actions');
   for(const item of group.items){
    const correction=/corrig/i.test(item.label);const button=preview(item,correction?'Corrigé':'Sujet',correction?'btn subtle':'linkbtn');
    button.setAttribute('aria-label',(correction?'Corrigé':'Sujet')+' · '+topics[Number(item.theme)-1]+' · '+difficultyLabel[level]+' · '+group.label);
    actions.append(button);
   }
   pair.append(actions);target.append(pair);
  }
  addPair(ordered[0],levelBlock);
  if(ordered.length>1){const more=make('details','more-series');more.append(make('summary','','Autres séries ('+(ordered.length-1)+')'));for(const group of ordered.slice(1))addPair(group,more);levelBlock.append(more)}
  wrap.append(levelBlock);
 }
 return wrap;
}
function matchesFilters(item){
 const words=normalize(search.value).split(' ').filter(Boolean);
 const text=normalize(topics[Number(item.theme)-1]+' '+item.label+' '+difficultyLabel[item.level]);
 return (themeselect.value==='all'||item.theme===themeselect.value)&&
  (levelselect.value==='all'||item.level==='tous'||item.level===levelselect.value)&&
  (kindselect.value==='all'||kind(item.label)===kindselect.value)&&words.every(w=>text.includes(w));
}
function render(){
 const visible=library.filter(matchesFilters);root.replaceChildren();
 const active=search.value.trim()!==''||[themeselect,levelselect,kindselect].some(x=>x.value!=='all');reset.hidden=!active;
 let themes=0;
 for(const id of learningOrder){
  const items=visible.filter(i=>i.theme===id);if(!items.length)continue;themes++;
  const card=make('article','course pdf-topic-card');card.id='theme-'+id;
  card.append(make('span','course-order','Étape '+String(learningOrder.indexOf(id)+1).padStart(2,'0')));
  const title=make('h3','',topics[Number(id)-1]);title.id='theme-title-'+id;card.setAttribute('aria-labelledby',title.id);card.append(title);
  const descriptions={'01':'Comprendre les comptes et les écritures.','08':'Suivre les documents et organiser les contrôles.','02':'Du devis jusqu’au règlement.','04':'Comprendre la TVA et préparer la CA3.','03':'Acheter, utiliser et céder un bien durable.','09':'Comprendre le bulletin et les calculs de paie.','05':'Vérifier les factures, les paiements et la banque.','06':'Expliquer les charges, les produits et le résultat.','07':'Lire la situation de l’entreprise à une date.'};
  card.append(make('p','theme-description',descriptions[id]));
  const docs=make('div','theme-documents');
  for(const part of PARTS.slice(0,3)){
   for(const item of items.filter(i=>subgroup(i)===part.id)){
    const title=part.id==='cours'?'Lire le cours':part.label;const button=preview(item,title,'document-button document-'+part.id);
    const pages=item.label.match(/(\d+) pages/);if(pages)button.append(make('small','',pages[1]+' pages'));
    button.setAttribute('aria-label',title+' · '+topics[Number(id)-1]);docs.append(button);
   }
  }
  if(docs.children.length)card.append(docs);
  const exercises=items.filter(i=>['rapide','complet'].includes(subgroup(i)));
  if(exercises.length){
   const detail=make('details','theme-exercises');detail.append(make('summary','','Exercices et corrigés'));
   for(const part of PARTS.slice(3)){
    const rows=exercises.filter(i=>subgroup(i)===part.id);if(!rows.length)continue;
    const block=make('section','pdf-resource-group');block.append(make('h4','',part.id==='rapide'?'Pour commencer : exercices rapides':'Pour aller plus loin : exercices complets'));block.append(exerciseRows(rows));detail.append(block);
   }
   card.append(detail);
  }
  const quiz=make('button','text-button theme-quiz','Faire un quiz sur ce thème →');quiz.type='button';quiz.dataset.quizTheme=id;card.append(quiz);root.append(card);
 }
 if(!themes){const empty=make('div','panel empty-results');empty.append(make('h3','','Aucun document trouvé'),make('p','','Essaie un autre mot ou efface les filtres.'));root.append(empty)}
 const filtered=active?' · sélection filtrée':'';
 count.textContent=themes+' thème'+(themes>1?'s':'')+' · '+visible.length+' document'+(visible.length>1?'s':'')+filtered;
}
for(const control of [themeselect,levelselect,kindselect])control.addEventListener('change',render);
search.addEventListener('input',render);
reset.addEventListener('click',()=>{search.value='';for(const control of [themeselect,levelselect,kindselect])control.value='all';render();search.focus()});
root.addEventListener('click',e=>{
 const quiz=e.target.closest('[data-quiz-theme]');if(quiz){window.dispatchEvent(new CustomEvent('compta:theme-quiz',{detail:{theme:quiz.dataset.quizTheme,level:levelselect.value}}));return;}
 const button=e.target.closest('[data-preview-local]');if(button&&!safePaths.has(button.dataset.previewLocal))e.preventDefault();
});
render();
})();
