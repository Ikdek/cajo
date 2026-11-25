# CLAUDE.md

Bibliothèque de composants en deux versions au rendu identique : Sass (`sass/`) et Tailwind CSS (`tailwind/`). Projet en français, sans JavaScript.

## Modules

Chaque module (composant) est un **dossier** dans `components/`, dans chacune des deux versions, avec le même nom :

```
sass/components/<module>/<module>.scss
tailwind/components/<module>/<module>.css
```

Exemple : `sass/components/button/button.scss` et `tailwind/components/button/button.css`.
Un fichier de module ne se place jamais directement à la racine de `components/`.

## Lier un module à sa page mère

Dès qu'un module est produit, on le lie à la page mère de sa version (`sass/index.html` ou `tailwind/index.html`) :

1. Ajouter sa feuille de style dans le `<head>` de la page mère :
   ```html
   <link rel="stylesheet" href="./components/button/button.scss" />
   ```
2. Ajouter sa section de documentation dans le `<main>` de la page mère : démonstration de toutes les variantes + code HTML associé.
3. Ajouter son lien dans le menu latéral de la page mère.

Faire la même chose dans les deux versions : un module n'est terminé que lorsqu'il est produit et lié des deux côtés.

Côté Tailwind, chaque fichier de module commence par `@reference "tailwindcss";`. Ainsi, `@apply` fonctionne sans que Tailwind soit dupliqué dans chaque fichier.

## Conventions

- Classes BEM préfixées `ui-` et identiques dans les deux versions : `.ui-button`, `.ui-button__icon`, `.ui-button--primary`.
- Variantes obligatoires pour chaque module : 4 couleurs (`--primary`, `--secondary`, `--success`, `--danger`), 3 tailles (`--sm`, `--md`, `--lg`) et 2 polices (`--sans`, `--serif`).
- Les classes de la documentation sont préfixées `docs-`.
- Aucun JavaScript : les interactions passent par CSS (`:hover`, `:focus-visible`, `:checked`, `<details>`…).
