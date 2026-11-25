# Boutons Tailwind — TW-01

Module : `button.css`, chargé dans `tailwind/index.html`.
La configuration Vite/Tailwind existante compile les `@apply`. Aucun JavaScript
n'est ajouté aux pages. `tailwind/docs.css` charge Tailwind une seule fois et
ne définit que la présentation de la documentation.

## Contrat à reproduire côté Sass

La capture Nova UI et le choix du propriétaire de ce ticket priment sur les
anciennes couleurs du README général. Les noms BEM et la police mono suivent
les conventions actualisées du dépôt.
Source des valeurs exécutables : `button.css`.

| Classe | Dégradé à 135° |
| --- | --- |
| `ui-button--primary` | `#8B5CF6` → `#6366F1` |
| `ui-button--secondary` | `#06B6D4` → `#0EA5E9` |
| `ui-button--success` | `#10B981` → `#059669` |
| `ui-button--warning` | `#F59E0B` → `#F97316` (Solar Amber) |

| `ui-button--danger` | `#EF4444` → `#F87171` |
| `ui-button--neutral` | `#94A3B8` → `#CBD5E1` |

Texte : `#03040A`, graisse 600, interligne 24 px. Le texte sombre est un choix
de lisibilité : du blanc n'aurait pas un contraste suffisant sur ces dégradés.

| Taille | Hauteur minimale | Padding vertical / horizontal | Texte | Rayon |
| --- | --- | --- | --- | --- |
| `--sm` | 36 px | 4 / 16 px | 12 px | 8 px |
| `--md` | 44 px | 8 / 24 px | 14 px | 14 px |
| `--lg` | 52 px | 12 / 32 px | 16 px | 20 px |

Les dimensions des boutons, absentes de la capture, sont des choix proposés
sur sa grille de 4 px, à reprendre à l'identique dans Sass.
Police `--sans` : Plus Jakarta Sans. Police `--mono` : JetBrains Mono, conformément
aux conventions partagées actualisées. Défauts : primary, md, sans.

États : survol éclairci avec halo ; focus blanc de 2 px décalé de 4 px ;
pression avec déplacement de 1 px et échelle 0.98 ; disabled natif avec
fond `#34385B` et texte `#A5AACB`. Transitions : 180 ms, pression 120 ms.
Les animations sont supprimées avec prefers-reduced-motion.

## Vérification manuelle

1. À la racine : `npm run dev`, puis ouvrir `/tailwind/#button`.
2. Vérifier les 4 couleurs, les 3 tailles, les 2 polices et les combinaisons.
3. Tester survol, clic maintenu, Tab / Maj+Tab et activation au clavier.
4. Vérifier que disabled ne reçoit pas le focus et ne s'active pas.
5. Ouvrir les exemples HTML avec Entrée sur « Voir le code HTML ».
6. Vérifier à 375 px de large, puis à 200 % de zoom.
7. Compiler avec `npm run build`, puis vérifier avec `npm run preview`.
8. Comparer à Sass lorsque son module bouton sera disponible.

Les boutons sont des exemples de présentation sans action métier.
Les autres composants sont laissés aux membres responsables.
