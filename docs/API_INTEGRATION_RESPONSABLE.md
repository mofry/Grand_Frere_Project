# Intégration de l'API — Enregistrement d'un responsable d'établissement

Objectif
- Décrire pas-à-pas comment utiliser la nouvelle API (Swagger: https://gf-api.mfry.io/api/docs#/) pour permettre à un responsable d'école de s'enregistrer auprès des écoles partenaires, gérer les notions d'administrateur, et envoyer les accès.

Pré-requis
- Accès à la documentation Swagger fournie (vérifier méthodes, schémas, et types d'authentification).
- Clé/URL de base de l'API: récupérer la `baseUrl` (ex. `https://gf-api.mfry.io/api`).
- Compte administrateur ou clé API pour effectuer certaines opérations côté back-office si nécessaire.

Vue d'ensemble de la démarche
1. Identifier dans Swagger les endpoints nécessaires
   - Authentification: endpoint d'auth (ex. `POST /auth/login`, `POST /auth/register`) et type d'auth (Bearer JWT, API key).
   - Gestion utilisateurs / responsables: endpoint de création/utilisateur (ex. `POST /users`, `POST /responsables`).
   - Assignation rôle / établissement: endpoint pour lier un `responsable` à une `ecole` ou `partenaire` (ex. `POST /schools/{id}/partners` ou `POST /schools/{id}/users`).
   - Activation / validation: endpoint d'activation ou approbation par l'admin (ex. `PUT /users/{id}/activate`).

2. Définir le flow métier (exemple recommandé)
   - L'administrateur crée le compte du `responsable` via l'API (création côté serveur), ou le responsable initie l'inscription via un formulaire public.
   - Si c'est l'administrateur qui crée le compte: générer un mot de passe temporaire et envoyer les accès par email.
   - Si le responsable s'inscrit: créer en statut `pending` et notifier un admin pour validation.
   - Après validation/activation, le responsable peut se connecter et gérer sa liaison avec les écoles partenaires.

3. Champs minimums et payloads types
   - Exemple payload création utilisateur (administrateur crée le responsable):
     {
       "email": "responsable@ecole.tld",
       "password": "MotDePasseTemp123!",
       "role": "responsable",
       "firstName": "Prénom",
       "lastName": "Nom",
       "phone": "+33..."
     }
   - Exemple payload inscription publique (responsable initie):
     {
       "email": "responsable@ecole.tld",
       "firstName": "Prénom",
       "lastName": "Nom",
       "schoolId": 123
     }

4. Exemples d'appels (génériques) — remplacer `{API_BASE}` et chemins par ceux du Swagger
- cURL (création par admin):

  curl -X POST "{API_BASE}/users" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer {ADMIN_TOKEN}" \
    -d '{"email":"responsable@ecole.tld","password":"TempPass!","role":"responsable","firstName":"Prénom","lastName":"Nom"}'

- axios (JS) — instance centrale:

  import axios from 'axios'

  const api = axios.create({
    baseURL: process.env.API_BASE || 'https://gf-api.mfry.io/api',
    headers: { 'Content-Type': 'application/json' }
  })

  // Utilisation après login
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  // Exemple création utilisateur
  await api.post('/users', { email, password, role: 'responsable', firstName, lastName })

5. Intégration côté frontend (points concrets dans ce repo)
- Stores: utilisez le store `stores/auth.ts` pour stocker le token JWT et l'état utilisateur.
- Composants: ajouter des appels API depuis les pages/formulaires d'inscription (`app/pages_destination/Inscription.vue` ou composants dédiés dans `app/landing_page/`).
- Guard routes: protéger les routes admin avec un middleware qui vérifie `role === 'admin'` et la présence d'un token.
- Exemple simple (Pinia):

  - Dans `stores/auth.ts`: ajouter actions `login`, `logout`, `fetchProfile` et persister le token (localStorage).
  - Appeler `api.post('/auth/login', credentials)` puis sauvegarder `token` et `user`.

6. Gestion des rôles et des permissions
- Rôles recommandés: `admin`, `responsable`, `partner`, `user`.
- Rendre dépendante l'accès aux endpoints sensibles via le middleware backend (côté API) — vérifier dans Swagger les scopes/permissions.
- Frontend: masquer/afficher UI en fonction du rôle (`v-if="user.role === 'admin'"`).

7. Envoi des accès au responsable
- Scénario admin crée compte: générer mot de passe temporaire et envoyer email via votre système mail (ou endpoint d'invitation si l'API le propose).
- Scénario inscription publique: envoyer email de confirmation contenant un lien d'activation.
- Recommandation: ne jamais envoyer le mot de passe en clair par email si possible — préférer un lien de création de mot de passe temporaire.

8. Tests et validation
- Utiliser Swagger UI pour tester manuellement chaque endpoint et vérifier les schémas de réponses.
- Tester les flows suivants: création compte par admin, inscription publique, activation, connexion, accès aux ressources protégées, assignation école.

9. Sécurité et bonnes pratiques
- Stocker le token en `httpOnly` cookie si possible pour réduire les risques XSS; sinon utiliser storage sécurisé et CSRF protection.
- Valider côté backend toutes les opérations sensibles et ne faire aucune logique d'autorisation uniquement côté frontend.
- Logger les événements importants (création compte, activation, assignation d'école).

10. Checklist opérationnelle rapide
- [ ] Vérifier `baseUrl` et méthode d'auth dans Swagger.
- [ ] Repérer et noter endpoints exacts pour: création utilisateur, assignation école, activation, login.
- [ ] Implémenter axios instance centralisée et actions Pinia dans `stores/auth.ts`.
- [ ] Ajouter formulaires/handlers dans les pages d'inscription/administration.
- [ ] Mettre en place envoi des accès (email d'invitation ou mot de passe temporaire).
- [ ] Tester les flows avec Swagger UI et via le frontend.

Annexes — Exemples rapides
- Exemple: vérifier si l'API propose un endpoint d'invitation (rechercher `invite`, `send-invite` ou `invitations` dans Swagger).
- Si l'API propose des webhooks, utiliser pour synchroniser événements (ex: `user.activated`).

Besoin d'aide suivante?
- Je peux: 1) parcourir le Swagger et identifier les endpoints exacts pour vous, 2) implémenter la `axios` instance et actions Pinia dans `stores/auth.ts`, 3) ajouter un exemple de formulaire d'inscription et d'un handler pour ce repo.



////////////////////METHODES A SUIVRE POUR POUVOIR AJOUTER UN ADMIN

Méthodes à suivre pour l'admin :

Je vais récupérer la page Swagger pour lister les endpoints pertinents (auth, users, schools).



Fetched https://gf-api.mfry.io/api/docs#/

Je mets à jour le plan d'actions (statuts) puis je fournis la liste d'endpoints exacts et les snippets axios/Pinia + instructions de test.

Starting: *Générer axios instance et actions Pinia pour admin* (2/5)

Progress: j'ai lu le Swagger et mis à jour le plan. Voici ce que faire exactement pour le "school admin" — endpoints, payloads, code et tests.

1) Endpoints clés (extraits du Swagger)
- Auth: POST /api/v1/auth/signin (sign in with phone+password), POST /api/v1/auth/refresh, POST /api/v1/auth/signout
- Schools:
  - POST /api/v1/schools (create school)
  - GET /api/v1/schools (list)
  - POST /api/v1/schools/{id}/admin (create a school admin for a given school)
  - GET /api/v1/schools/{id} (school details)
  - PUT /api/v1/schools/{id}/suspend, PUT /api/v1/schools/{id}/activate
- School join requests:
  - POST /api/v1/school-join-requests (submit request)
  - PUT /api/v1/school-join-requests/{id}/approve (approve — creates school + its admin)
  - PUT /api/v1/school-join-requests/{id}/reject
- Resources scoped to SCHOOL_ADMIN (examples): GET /api/v1/school-activities/mine (activities for management), GET /api/v1/schools/{id}/students, GET /api/v1/schools/{id}/parents, etc.

2) Pourquoi un "admin" est nécessaire — résumé court
- Séparation des responsabilités: l'admin global (SUPER_ADMIN) gère la plateforme (création d'écoles, approbations), le `SCHOOL_ADMIN` gère une école spécifique (élèves, activités, vendors, transactions).
- Contrôle d'accès: réduit le blast radius (permissions limitées par école), permet des logs/audits par rôle.
- Flux métier: approbation d'inscription d'école → création de l'école et du `SCHOOL_ADMIN` automatisée via l'endpoint d'approbation.

3) Payloads et exemples d'appels (remplacer placeholders)
- Créer un admin pour une école (requiert token admin/superadmin):
  curl:
  curl -X POST "https://gf-api.mfry.io/api/v1/schools/{schoolId}/admin" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer {ADMIN_TOKEN}" \
    -d '{"phone":"+225XXXXXXXXX","email":"responsable@ecole.tld","firstName":"Prénom","lastName":"Nom","password":"TempPass!","role":"school_admin"}'

- Approuver une demande d'adhésion (crée aussi l'école + admin):
  curl -X PUT "https://gf-api.mfry.io/api/v1/school-join-requests/{requestId}/approve" \
    -H "Authorization: Bearer {SUPER_ADMIN_TOKEN}"

- Connexion (signin):
  curl -X POST "https://gf-api.mfry.io/api/v1/auth/signin" \
    -H "Content-Type: application/json" \
    -d '{"phone":"+2250170959931","password":"<votre_mot_de_passe>"}'
  (Remplacez par vos identifiants localement — ne partagez pas le mot de passe publiquement.)

4) Snippets pratiques (axios + Pinia pour ce repo Nuxt)

- axios instance (create `utils/api.ts`):
  import axios from 'axios'

  export const api = axios.create({
    baseURL: process.env.API_BASE || 'https://gf-api.mfry.io/api/v1',
    headers: { 'Content-Type': 'application/json' }
  })

  export function setAuthToken(token: string | null) {
    if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete api.defaults.headers.common['Authorization']
  }

- Pinia `stores/auth.ts` (structure / actions importants):
  import { defineStore } from 'pinia'
  import { api, setAuthToken } from '~/utils/api'

  export const useAuthStore = defineStore('auth', {
    state: () => ({ token: null as string | null, user: null as any }),
    actions: {
      async signin(phone: string, password: string) {
        const res = await api.post('/auth/signin', { phone, password })
        this.token = res.data?.tokens?.access // adapter selon réponse
        this.user = res.data?.user
        setAuthToken(this.token)
        localStorage.setItem('gf_token', this.token)
      },
      signout() {
        this.token = null
        this.user = null
        setAuthToken(null)
        localStorage.removeItem('gf_token')
      },
      async createSchoolAdmin(schoolId: number, adminPayload: any) {
        // nécessite token SUPER_ADMIN ou rôle autorisé
        return api.post(`/schools/${schoolId}/admin`, adminPayload)
      },
      async approveJoinRequest(requestId: number) {
        return api.put(`/school-join-requests/${requestId}/approve`)
      }
    }
  })

- Exemple handler dans un composant Vue (formulaire admin creation):
  async function submitCreateAdmin(form) {
    const auth = useAuthStore()
    try {
      await auth.createSchoolAdmin(form.schoolId, {
        phone: form.phone,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        password: form.password
      })
      // success: envoyer email d'invitation ou montrer message
    } catch (err) { /* gérer erreurs */ }
  }

5) Routage / guard (Nuxt middleware)
- Créer `middleware/auth.ts` qui vérifie presence de token et rôle:
  export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()
    if (!auth.token) return navigateTo('/seConnecter')
    if (to.meta?.requiresAdmin && auth.user?.role !== 'school_admin' && auth.user?.role !== 'super_admin') {
      return navigateTo('/') // ou page 403
    }
  })

6) Tests et validation
- Tester manuellement via Swagger UI: essayer `POST /auth/signin` pour obtenir token, puis appeler `POST /schools/{id}/admin` avec `Authorization: Bearer {token}`.
- Automatisation minimale: écrire tests d'intégration backend simulant le flow d'approbation ou scripts curl.
- Pour utiliser vos identifiants fournis localement, exécutez la commande signin ci-dessus en remplaçant le mot de passe localement — ne collez pas ces identifiants dans des logs publics.

7) Sécurité / recommandations rapides
- Préférer `httpOnly` cookie pour tokens si possible; sinon stocker en mémoire + refresh tokens.
- Ne jamais exposer mot de passe en clair par email — envoyez lien d'activation / changement de mot de passe.
- Limiter endpoints `POST /schools/{id}/admin` aux rôles autorisés (SUPER_ADMIN / back-office).
- Logger et monitorer les actions sensibles (création admin, approbation).

8) Prochaine étape que je peux faire pour vous
- Parcourir toutes les opérations Swagger et générer un fichier `snippets` avec les payloads exacts pour chaque endpoint (je peux le faire automatiquement).
- Implémenter l'`api` utilitaire et mettre à jour `stores/auth.ts` dans votre repo (`app/plugins/pinia` exists) — voulez-vous que je l'ajoute maintenant ?

Si vous voulez que je lance les actions de modification de code dans le repo, dites précisément lesquelles (ex: "Ajoute `utils/api.ts` et mets à jour `stores/auth.ts`"), et je m'en occupe.