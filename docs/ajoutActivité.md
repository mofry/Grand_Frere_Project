# Répertoire des écoles — branchement sur l'API

Ce document décrit le branchement du répertoire d'écoles du site public sur l'API
Grand Frère : ce qui a été construit, pourquoi, et comment le faire évoluer.

Rédigé le 13 septembre 2026. Tout ce qui est affirmé ici a été vérifié contre
l'API de production et contre un build réel, pas déduit de la documentation.

---

## 1. Objectif

La page répertoire affichait des données inventées : tableau en dur (`v-for="i in 10"`),
activités fictives, école « Los Alamitos High School ». L'objectif était d'afficher les
informations réelles que les responsables d'établissement saisissent via l'API.

Périmètre retenu : **la liste des écoles et la fiche détail**, sans modifier l'API.

---

## 2. Stack

### Site public — `Grand_Frere_Project`

| Élément | Version / choix |
|---|---|
| Framework | Nuxt 4.2 (`app/` directory, SSR activé) |
| Vue | 3.5 |
| Styles | Tailwind via `@nuxtjs/tailwindcss` 6.14 (Tailwind 3.4.19) |
| État | Pinia 3.0, **monté à la main** dans `app/plugins/pinia.ts` |
| Client HTTP | `$fetch` encapsulé dans `app/composables/useApi.ts` |
| URL de l'API | `runtimeConfig.public.apiBase`, surchargeable par `NUXT_PUBLIC_API_BASE` |

> **Point structurant :** Pinia est installé sans `@pinia/nuxt`. L'état des stores
> **n'est donc pas transféré du serveur au client**. Un store rempli pendant le SSR
> sera vide à l'hydratation. C'est la raison d'être du montage décrit en section 5.

### API — `mon-api-grand-frere/grand_frere_api`

NestJS + TypeORM + PostgreSQL. Base de production : `https://gf-api.mfry.io`.
Préfixe global `api`, versioning par URI → tous les chemins sont en `/api/v1/...`.
Swagger : `https://gf-api.mfry.io/api/docs`.

---

## 3. Ce que l'API expose publiquement

Trois routes seulement sont accessibles sans jeton (aucun `JwtAuthGuard`) :

| Route | Contenu |
|---|---|
| `GET /api/v1/schools` | Toutes les écoles. **Non paginé, sans recherche, statuts mélangés.** |
| `GET /api/v1/school-activities?schoolId=&page=&limit=` | Activités **publiées** (`isVisible: true`), paginées, avec `school: {id, name, sigle}` |
| `GET /api/v1/school-activities/:id` | Une activité publiée |

### Champs d'une école

```json
{
  "id": "1f7b6fbe-...", "name": "Lycée de garçons de Bingerville",
  "sigle": "LGB", "address": "Cocody", "description": null,
  "logoUrl": null, "status": "ACTIVE", "createdAt": "2026-08-15T14:52:04.280Z"
}
```

### Ce que le responsable d'établissement peut réellement renseigner

- `PUT /api/v1/schools/:id` → `name`, `address`, `description` (2000 caractères max)
- `PUT /api/v1/schools/:id/logo` → le logo
- Les activités : titre, description, photos, publication / masquage

C'est **tout**. Aucun autre champ n'existe en base pour une école.

---

## 4. Les cinq pièges de l'API

Ils expliquent la plupart des choix de code. À connaître avant toute modification.

**1. Double enveloppe sur les routes paginées.**
Le `ResponseInterceptor` global enveloppe chaque réponse dans `{ data, statusCode }`.
Une route qui retourne déjà `{ data, meta }` produit donc :

```jsonc
// GET /api/v1/schools          → { "data": [ ... ], "statusCode": 200 }
// GET /api/v1/school-activities → { "data": { "data": [ ... ], "meta": {...} }, "statusCode": 200 }
//                                          ^^^^^^ deux niveaux
```

C'est le bug qui cassait l'ancien code : il lisait `json.data` et recevait `{data, meta}`.

**2. Pas de route détail publique.**
`GET /api/v1/schools/:id` est protégé par `@Role(SUPER_ADMIN, SCHOOL_ADMIN)`.
Impossible de charger une école seule depuis le site.

**3. `GET /schools` renvoie aussi les écoles `SUSPENDED`.**
La route filtrante (`GET /schools/search`) est réservée au `SUPER_ADMIN`.
**Le filtrage est donc à notre charge** — sans lui, une école suspendue s'afficherait.

**4. `limit` est plafonné à 100** (`PaginationQueryDto`, `@Max(100)`).
Demander davantage renvoie une erreur de validation.

**5. Les URLs d'images dépendent du stockage.**
En production, `SpacesStorageService` produit des URLs DigitalOcean valides
(`https://tassa.nyc3.digitaloceanspaces.com/...`). En local, `LocalStorageService`
produit `http://localhost/storage/...`, **qui ne résout pas** : les images seront
cassées hors production. D'où le repli sur `@error` décrit plus bas.

---

## 5. Architecture de la solution

```
  GET /api/v1/schools ─────────┐
                               ├──> stores/schools.ts ──> useAsyncData ──> composant
  GET /api/v1/school-activities┘     (appels + types)      (payload SSR)     (rendu)
```

Le store porte **les appels et les types**, pas l'état affiché. Chaque composant appelle
le store dans `useAsyncData` et lit le résultat via `data`. C'est ce qui permet un vrai
rendu serveur malgré l'absence de `@pinia/nuxt` (section 2) : les données transitent par
le payload Nuxt plutôt que par l'état Pinia.

> **Conséquence pour la maintenance :** dans ces composants, ne lisez jamais
> `store.schools` directement pour l'affichage — ce serait vide après hydratation.
> Lisez toujours `data.value`. Le store conserve ses `ref` pour d'éventuels usages
> purement client, et `store.error` reste utilisable pour le message d'erreur.

---

## 6. Fichiers

### Créés

| Fichier | Rôle |
|---|---|
| `app/stores/schools.ts` | Types `School` / `SchoolActivity`, les deux appels publics, le filtre `ACTIVE`, la dérivation « dernière activité » |
| `app/composables/useSchoolFormat.ts` | `formatDate` et `initials` partagés par la liste et la fiche |
| `app/pages/ecoles/[id].vue` | Route dynamique de la fiche ; passe `schoolId` au composant |

### Modifiés

| Fichier | Changement |
|---|---|
| `app/components/repertoire_ecoles/Liste_Ecole.vue` | La liste, branchée : recherche, pagination, squelettes, états vides, erreur |
| `app/components/repertoire_ecoles/Liste2.vue` | La fiche, branchée ; blocs sans données retirés ; 3 bugs corrigés |
| `app/pages/liste2.vue` | Redirige vers `/repertoire_ecoles` (une fiche sans identifiant n'a plus de sens) |

### Nommage automatique des composants

Nuxt dérive le nom du chemin : `components/repertoire_ecoles/Liste_Ecole.vue`
devient `<RepertoireEcolesListeEcole />`, et `Liste2.vue` devient
`<RepertoireEcolesListe2 />`. **Renommer un fichier casse donc les pages qui l'utilisent.**

### Routes

| URL | Page | Rend |
|---|---|---|
| `/repertoire_ecoles` | `pages/repertoire_ecoles.vue` | la liste |
| `/ecoles/<uuid>` | `pages/ecoles/[id].vue` | la fiche |
| `/liste2` | `pages/liste2.vue` | redirection 302 vers `/repertoire_ecoles` |

---

## 7. Fonctionnement détaillé

### `stores/schools.ts`

- `fetchSchools()` — appelle `/api/v1/schools`, **écarte les écoles non `ACTIVE`**,
  remplit `schools` et **retourne la liste** (le retour est ce qui alimente le payload SSR).
- `fetchActivities(schoolId?, limit = 100)` — appelle `/api/v1/school-activities`,
  lit la double enveloppe `res.data.data`, retourne la liste.
- `fetchDirectory()` — lance les deux en parallèle et retourne `{ schools, activities }`.
- `lastActivityBySchool(activities)` — **fonction pure exportée**, hors du store.
  Les activités arrivant triées par `createdAt` décroissant, la première occurrence
  d'un `schoolId` est sa plus récente.

Les appels passent par `useApi()`, cohérent avec le reste du projet. Ce client ajoute
un `Authorization` quand l'utilisateur est connecté ; les routes publiques n'ayant
pas de garde, l'en-tête est simplement ignoré.

### La liste — `Liste_Ecole.vue`

Recherche, filtrage, pagination et tri sont **tous côté client**, puisque l'API ne les
offre pas publiquement (piège n° 3).

- Écoles : recherche sur `name`, `sigle`, `address` ; pagination à `PER_PAGE = 10`.
- Activités : recherche sur titre, description, nom et sigle de l'école ;
  affichage par paliers de `ACTIVITIES_STEP = 6` via « Chargez plus ».
- Un `watch` remet la pagination à la première page quand la recherche change.
- Colonne « Commune » : alimentée par `address` (voir les limites, section 9).
- Colonne « Date récente activité » : issue de `lastActivityBySchool`, `—` si absente.

### La fiche — `Liste2.vue`

Reçoit `schoolId` en prop. Comme il n'existe pas de route détail publique (piège n° 2),
elle charge la liste complète et y résout l'identifiant :

```ts
const [schools, activities] = await Promise.all([
  store.fetchSchools(),
  store.fetchActivities(props.schoolId)   // filtré par l'API sur cette école
])
return { school: schools.find(s => s.id === props.schoolId) ?? null, activities }
```

**L'ouverture directe par URL fonctionne donc**, au prix du chargement de la liste entière.
`useAsyncData` reçoit `watch: [() => props.schoolId]` pour recharger lors d'une navigation
d'une fiche à l'autre, le composant étant réutilisé par le routeur.

Quatre états sont rendus : chargement (squelette), erreur réseau (avec « Réessayer »),
école introuvable, et la fiche elle-même.

### Replis d'affichage

Ils sont systématiques parce que les données réelles sont souvent absentes (section 8).

- **Logo manquant ou cassé** → initiales tirées du sigle, sur fond dégradé.
- **Photo d'activité manquante ou cassée** → même visuel de repli.
- **Image en erreur** → `@error` alimente un `Set` d'identifiants ; le rendu bascule
  alors sur le repli. C'est ce qui évite les images brisées en développement (piège n° 5).
- **Description vide** → « Cet établissement n'a pas encore renseigné sa présentation. »

### Format de date

`useSchoolFormat.formatDate` construit `jj.mm.aaaa` **à la main en UTC**, sans
`toLocaleDateString`. Volontaire : un formatage dépendant de la locale ou du fuseau
produit un résultat différent sur le serveur et dans le navigateur, ce qui déclenche
une erreur d'hydratation Vue. **Ne pas « simplifier » en revenant à `toLocaleDateString`.**

---

## 8. État réel des données en production

Relevé le 13 septembre 2026 sur `https://gf-api.mfry.io` :

- **2 écoles** (`Collège moderne de Bingerville`, `Lycée de garçons de Bingerville`)
- **0 description**, **0 logo** — tous les champs à `null`
- **1 activité publiée** (« Atelier de musique : Initiation au balafon »)

Le site affiche donc majoritairement les replis. Le branchement est correct ;
c'est la saisie par les responsables qui reste à faire.

---

## 9. Limites connues

**Le champ « Commune » est approximatif.** L'entité `School` n'a pas de champ ville :
la colonne affiche `address`. Or à l'approbation d'une demande d'adhésion,
`SchoolJoinRequestsService` recopie `request.city` dans `address`. Une école issue du
formulaire porte donc une ville, une école créée à la main peut porter une adresse
complète. Affichage hétérogène par construction.

**La date de dernière activité peut manquer.** Seules les 100 dernières activités du
réseau sont chargées (piège n° 4). Une école dont la dernière publication sort de cette
fenêtre affichera `—`. Sans impact aujourd'hui (1 activité), à revoir vers ~100.

**La liste entière est chargée à chaque fois.** Acceptable pour quelques dizaines
d'écoles ; à repenser au-delà de quelques centaines — voir la recette 10.3.

**Les blocs suivants ont été retirés de la maquette, faute de données :** distinctions,
effectifs par cycle, type d'établissement, cycles, photo de couverture, pièces
justificatives. Décision assumée : ne pas afficher d'informations inventées sur de
vraies écoles. La couverture est remplacée par un bandeau dégradé décoratif.

---

## 10. Recettes de maintenance

### 10.1 — Changer la pagination ou les paliers

Constantes en tête du `<script setup>` de `Liste_Ecole.vue` :
`PER_PAGE` (écoles par page) et `ACTIVITIES_STEP` (activités par palier).

### 10.2 — Ajouter une colonne au tableau

1. Vérifier que le champ existe dans `SchoolResponseDto` côté API.
2. L'ajouter à l'interface `School` de `app/stores/schools.ts`.
3. Ajouter le `<th>` et le `<td>` dans `Liste_Ecole.vue`.
4. Si la colonne doit être cherchable, l'ajouter au tableau de `filteredSchools`.

### 10.3 — Passer à une vraie route détail (si l'API évolue)

Trois ajouts côté API rendraient la page nettement plus saine :

- une route détail publique pour les écoles `ACTIVE` ;
- `ACTIVE` + recherche + pagination sur la liste publique ;
- un `lastActivityAt` exposé sur l'école.

Côté site, il suffirait alors de remplacer le `find()` de `Liste2.vue` par un appel
direct, et de déplacer recherche et pagination de `Liste_Ecole.vue` vers des paramètres
de requête. Les composants de rendu ne changeraient pas.

### 10.4 — Ajouter un champ riche (ex. type d'établissement)

Chaîne complète, dans l'ordre :

1. **Migration** dans `grand_frere_api/src/database/migrations/`
2. **Entité** `School` (`schools/entities/school.entity.ts`)
3. **DTO** : `SchoolResponseDto` (lecture) et `UpdateSchoolDto` (écriture)
4. **Mapping** dans `SchoolsService.toDto()`
5. **Interface `School`** dans `app/stores/schools.ts`
6. **Affichage** dans `Liste2.vue`
7. **Écran de saisie** pour le responsable

L'étape 7 est la plus lourde et la plus facile à oublier : le tableau de bord
`app/components/dashboard/SchoolAdmin.vue` n'est aujourd'hui qu'une série de
placeholders. **Sans elle, le champ restera vide pour toujours.**

### 10.5 — Pointer vers une autre API

Variable d'environnement `NUXT_PUBLIC_API_BASE` (défaut : `https://gf-api.mfry.io`).
Attention au piège n° 5 : sur une instance locale, les images seront cassées, et les
replis prendront le relais. C'est le comportement attendu.

---

## 11. Vérifier que tout fonctionne

```bash
# Développement
npm run dev                       # http://localhost:3000/repertoire_ecoles

# Build + rendu serveur réel
npm run build
PORT=3123 node .output/server/index.mjs

# Les données doivent apparaître dans le HTML renvoyé, pas seulement après hydratation
curl -s http://localhost:3123/repertoire_ecoles | grep -o "Bingerville"

# Formes de réponse de l'API
curl -s https://gf-api.mfry.io/api/v1/schools
curl -s "https://gf-api.mfry.io/api/v1/school-activities?page=1&limit=3"
```

Cas à couvrir lors d'une modification :

- une école **avec** activités et une **sans** ;
- un identifiant inexistant → « École introuvable » ;
- une recherche sans résultat → message dédié, pas un tableau vide ;
- `/liste2` → redirection 302 ;
- API injoignable → bloc d'erreur avec « Réessayer ».

---

## 12. Dette et points de vigilance

- **`app/components/repertoire_ecoles/Liste2 copy.vue`** : doublon non versionné,
  contenant l'ancien code cassé (double import de `ref`, URL erronée). Le nom comporte
  un espace. Nuxt l'auto-importe sous un nom bizarre. **À supprimer** — conservé pour
  l'instant faute d'instruction explicite.
- **La barre de navigation est dupliquée** dans `Liste_Ecole.vue` et `Liste2.vue`
  (ainsi qu'ailleurs). Toute modification doit être répercutée dans chaque copie.
  Candidate évidente à l'extraction en composant de mise en page.
- **`docs/API_INTEGRATION_RESPONSABLE.md`** est un document de cadrage antérieur, dont
  les chemins d'endpoints sont hypothétiques. Ne pas s'y fier pour les noms de routes ;
  la référence est le Swagger.
- **Ne pas combiner `v-if` et `v-for` sur un même élément** : Vue 3 évalue `v-if`
  d'abord, la variable de boucle n'est pas disponible et la chaîne `v-else` se casse.
  Les tableaux utilisent des enveloppes `<template>` pour cette raison.

---

## 13. Bugs corrigés au passage

Trois défauts de l'ancien `Liste2.vue`, tous bloquants :

1. `ref` importé **deux fois** (lignes 178 et 198) → le composant ne compilait pas.
2. URL construite en `${apiBase}/v1/school-activities` alors que `apiBase` contenait
   déjà `/api/v1` → requêtes vers `/api/v1/v1/...`, en 404.
3. Lecture de `json.data` en ignorant la double enveloppe (piège n° 1) → les données
   n'auraient de toute façon pas été exploitables.
