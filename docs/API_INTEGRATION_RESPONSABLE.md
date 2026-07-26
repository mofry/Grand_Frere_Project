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
