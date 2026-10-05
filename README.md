# Grand Frère Project

Nuxt + Vue project for the Grand Frère platform, with themed landing pages, school directories, supplier flows, authentication, and API endpoints.

## Project hierarchy

```text
Grand_Frere_Project/
├── .vscode/
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   ├── components/
│   │   ├── app_grand_frere/
│   │   ├── dashboard/
│   │   ├── footer.vue
│   │   ├── landing_page/
│   │   ├── offres/
│   │   ├── pages_destination/
│   │   └── repertoire_ecoles/
│   ├── composables/
│   │   ├── useApi.ts
│   │   └── useSchoolFormat.ts
│   ├── pages/
│   │   ├── ecoles/
│   │   ├── appels-offres.vue
│   │   ├── basilique.vue
│   │   ├── compte.vue
│   │   ├── dashboard.vue
│   │   ├── discovery.vue
│   │   ├── ecole.vue
│   │   ├── index.vue
│   │   ├── inscription.vue
│   │   ├── landing_app.vue
│   │   ├── repertoire_ecoles.vue
│   │   ├── school-admin.vue
│   │   ├── seConnecter.vue
│   │   └── ...
│   ├── plugins/
│   │   ├── click-animation.client.ts
│   │   └── pinia.ts
│   ├── stores/
│   │   ├── auth.ts
│   │   ├── offres.ts
│   │   ├── schoolJoinRequests.ts
│   │   └── schools.ts
│   └── utils/
│       └── roles.ts
├── docs/
│   ├── API_INTEGRATION_RESPONSABLE.md
│   └── ajoutActivité.md
├── main_page/
│   └── main_page.html
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── font/
│   │   └── nirmala/
│   ├── images/
│   │   ├── Page1-Hero/
│   │   ├── Page_app/
│   │   ├── Page_apropos/
│   │   ├── Page_connexion/
│   │   ├── Page_discovery/
│   │   ├── Page_ecole/
│   │   ├── Page_footer/
│   │   ├── Page_fournisseurs/
│   │   ├── Page_liste_ecoles/
│   │   ├── Page_parents/
│   │   ├── Page_recharge/
│   │   ├── Page_vidéo1/
│   │   ├── Pages_commencez_maintenant/
│   │   └── commun/
│   └── videos/
├── server/
│   └── api/
│       ├── auth/
│       └── school-join-requests.post.ts
├── .gitignore
├── index.html
├── nuxt.config.ts
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── ...
```

## Key folders

- app/: Nuxt app source, pages, components, stores, and styles.
- app/pages/: route-level pages for landing pages, school-related flows, dashboards, and forms.
- app/components/: reusable Vue sections mapped to the different pages of the experience.
- app/stores/: Pinia stores for authentication, schools, supplier/offers data, and join requests.
- app/composables/: reusable logic such as API helpers and school formatting.
- public/: static files including fonts, images, and videos.
- server/api/: server-side API routes and backend logic.
- docs/: project documentation and integration notes.
- main_page/: standalone HTML entry for a legacy/auxiliary page.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This repository is structured as a Nuxt 4 application with a Vue-based frontend and lightweight server endpoints. The project includes both application logic and static media assets used across the site.
