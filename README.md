# Bibliothèque de composants — Sass & Tailwind CSS

Bibliothèque de composants graphiques proposée en **deux implémentations au rendu identique** : l'une en Sass, l'autre en Tailwind CSS. Aucun JavaScript.

- Documentation en ligne : _à compléter_
- Dépôt : _à compléter_

## Équipe

- _Prénom Nom_
- _Prénom Nom_
- _Prénom Nom_
- _Prénom Nom_

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

| Page | URL locale |
| --- | --- |
| Accueil | `http://localhost:5173/` |
| Documentation Sass | `http://localhost:5173/sass/` |
| Documentation Tailwind | `http://localhost:5173/tailwind/` |

Le déploiement sur GitHub Pages est automatique à chaque push sur `main` (`.github/workflows/deploy.yml`).
Dans les réglages du dépôt, **Settings → Pages → Source** doit être réglé sur **GitHub Actions**.

## Arborescence

```
.
├── index.html            page d'accueil (choix de la version)
├── sass/
│   ├── index.html        documentation de la version Sass
│   ├── abstracts/        variables partagées (aucune sortie CSS)
│   └── components/       un dossier par module
├── tailwind/
│   └── index.html        documentation de la version Tailwind CSS
├── vite.config.js        build multi-pages (accueil, sass, tailwind)
└── .github/workflows/    déploiement GitHub Pages
```

Les feuilles de style de chaque version sont à créer dans son dossier (`sass/`, `tailwind/`) puis à lier dans le `index.html` correspondant.

## Conventions

### Nommage des classes (BEM préfixé `ui-`)

| Rôle | Syntaxe | Exemple |
| --- | --- | --- |
| Bloc | `.ui-{composant}` | `.ui-button` |
| Élément | `.ui-{composant}__{élément}` | `.ui-progress__bar` |
| Modificateur | `.ui-{composant}--{variante}` | `.ui-button--primary` |

Les **mêmes classes** sont utilisées dans les deux versions : le HTML d'un composant est identique, seule la feuille de style change.
Les classes de la documentation sont préfixées `docs-` et ne font pas partie de la bibliothèque.

### Variantes obligatoires

| Type | Modificateurs |
| --- | --- |
| Couleur | `--primary` (défaut) · `--secondary` · `--success` · `--warning` · `--danger` · `--neutral` |
| Taille | `--sm` · `--md` (défaut) · `--lg` |
| Police | `--sans` (défaut, Plus Jakarta Sans) · `--mono` (JetBrains Mono) |

```html
<button class="ui-button ui-button--primary ui-button--lg ui-button--mono">Valider</button>
```

### Composants

| Composant | Classe |
| --- | --- |
| Bouton | `.ui-button` |
| Badge | `.ui-badge` |
| Barre de progression | `.ui-progress` |
| Notification | `.ui-notification` |
| Indicateur de chargement | `.ui-loader` |
| Infobulle | `.ui-tooltip` |
| Champ de formulaire | `.ui-field` |
| Champ de texte | `.ui-input` |
| Zone de texte | `.ui-textarea` |
| Case à cocher | `.ui-checkbox` |
| Bouton radio | `.ui-radio` |

### Git

- Branche par tâche depuis `main` : `feat/button-sass`, `feat/button-tailwind`, `fix/tooltip-position`, `docs/readme`.
- Messages au format [Conventional Commits](https://www.conventionalcommits.org/fr/) :
  `feat(button): ajoute les variantes de couleur (sass)`, `fix(radio): corrige le focus (tailwind)`.
- Fusion dans `main` par pull request, relue par un autre membre.
- Un composant n'est terminé que lorsque ses deux versions sont faites et rendent la même chose.
