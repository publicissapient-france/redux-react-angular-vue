# SLOT XKE

## Timing

- 15mn prés
- 30mn livecoding
- 15mn React
- 15mn Vue
- 15mn Q&A

## Live Coding

### Arborescence des fichiers de l'App

#### domains

- todo.models
- todo.operators

__Good:__ Réunir au même endroit le modèle et les opérations (FP) effectuées dessus.

__Bad:__ Mettre le code métier dans les Components.

#### components/ui

- ui-todo-add
- ui-todo-list
- ui-todo-status
- ui-todo-category

### A FAIRE

- retirer la version rxjs
- garder vanilla pour montrer l'app finale
- retirer les features de l'app redux à livecoder: category, remove

### A montrer

Le code Vanilla avec les @Input, @Output.
Le code Redux sans...

### Pour le LiveCoding

On fait genre on a un bug et l'appli ne fonctionne pas
(on clique sur "category", nothing... On clique sur "trash", nothing...).

Seulement ensuite on explique que y a un gars qui a pété l'app et qu'on va la remettre d'équerre
en liveCoding.

Ensuite on montre la version Vanilla pour que les gens voient le truc fonctionner une fois
afin de comprendre le fonctionnement de l'app.

## THE LIVE CODING

todo.reducer -> remove all related `category` (state, reducer, selectors)
index.ts (root reducer of the feature) -> idem
todo.actions -> remove related `category`

redux-todo-category.component -> remove category selector
redux-todo-list.component -> replace todosFiltered$ with todo$

---

todo.reducer -> remove RemoveSuccess
todo.effects -> remove Remove middleware

---
TODO:

todo.reducer -> remove `as State`

---

ANGULAR IN FIVE MINUTES

@Input, @Output, DI.

---

THE APP

Présenter les dossiers

Faire le livecoding

Conclure en montrant qu'avec Redux les composants sont indépendants
alors que sans, les composants sont liés.

---

AU FAIT REDUX =

1. Predictible
2. Component indepdants
3. Immutable (for shallow comparison)
