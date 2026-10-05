# Grand Frère Project

Schools and families often face the same challenges:

- cash-based student spending is hard to track
- parents do not always know how much is being spent
- schools need a safer and more transparent way to manage meal budgets
- students need a simpler way to access their meal allowance without friction

Grand Frère addresses these issues by proposing a digital payment experience centered on transparency, control, and security.

## Project overview

This repository contains a complete digital experience for a school-focused ecosystem. It includes public-facing marketing pages, school and parent discovery interfaces, dashboard views for management tasks, and data-driven workflows for accounts, school join requests, and offers. The platform brings together all the stakeholders involved in the education ecosystem into a single, structured digital experience.

## Problem addressed

Many schools and families still rely on manual or fragmented systems for managing student allowances and related services. This leads to:

- poor visibility into how funds are used,
- difficult tracking of purchases and allocations,
- limited transparency for parents,
- operational friction for schools and administrators.

Grand Frère Project solves this by offering a central digital solution that allows schools to manage meal budgets more safely, gives parents better visibility, and provides a cleaner, more controlled financial flow for students.

## Project hierarchy

```text
Grand_Frere_Project/
├── app/                                      # Nuxt application source code
│   ├── app.vue                               # Root application component
│   ├── assets/                               # Static UI assets
│   │   └── css/                              # Global styles and animations
│   ├── components/                           # Reusable Vue components
│   │   ├── app_grand_frere/                  # App-specific UI building blocks
│   │   ├── dashboard/                        # Dashboard-related components
│   │   ├── footer.vue                        # Footer component
│   │   ├── landing_page/                     # Landing page sections
│   │   ├── offres/                           # Offers and provider feature components
│   │   ├── pages_destination/                # Destination/location pages
│   │   └── repertoire_ecoles/               # School directory components
│   ├── composables/                          # Reusable logic and shared hooks
│   │   ├── useApi.ts                         # API helper
│   │   └── useSchoolFormat.ts                # Data formatting for schools
│   ├── pages/                                # Nuxt route pages
│   │   ├── ecoles/                           # School-related pages
│   │   ├── appels-offres.vue                 # Offers page
│   │   ├── basilique.vue                     # Content/destination page
│   │   ├── compte.vue                        # User account page
│   │   ├── dashboard.vue                     # Administrative dashboard
│   │   ├── discovery.vue                     # School discovery page
│   │   ├── ecole.vue                         # School detail page
│   │   ├── index.vue                         # Homepage
│   │   ├── inscription.vue                   # Registration page
│   │   ├── landing_app.vue                   # App landing section
│   │   ├── repertoire_ecoles.vue             # School directory page
│   │   ├── school-admin.vue                  # School administrator area
│   │   ├── seConnecter.vue                   # Login page
│   │   └── ...
│   ├── plugins/                              # Nuxt plugins
│   │   ├── click-animation.client.ts        # Client-side animation plugin
│   │   └── pinia.ts                          # Pinia initialization
│   ├── stores/                               # State management (Pinia)
│   │   ├── auth.ts                           # Auth state management
│   │   ├── offres.ts                         # Offers-related state
│   │   ├── schoolJoinRequests.ts             # School join request state
│   │   └── schools.ts                        # School data state
│   └── utils/                                # Shared utility logic
│       └── roles.ts                          # Role access management
├── server/                                   # Server-side application logic
│   └── api/                                  # API endpoints
│       ├── auth/                             # Auth routes
│       └── school-join-requests.post.ts      # Join request API route
├── public/                                   # Static assets used by the frontend
│   ├── favicon.ico                           # Site favicon
│   ├── robots.txt                            # SEO configuration
│   ├── font/                                 # Typography assets
│   ├── images/                               # Visual assets for the site
│   └── videos/                               # Video/media assets
├── docs/                                     # Project documentation
│   ├── API_INTEGRATION_RESPONSABLE.md        # API integration notes
│   └── ajoutActivité.md                      # Activity-related documentation
├── main_page/                                # Legacy or standalone HTML page
│   └── main_page.html                        # Auxiliary landing/static page
├── .gitignore                                # Git ignore rules
├── index.html                                # HTML entry point
├── nuxt.config.ts                            # Nuxt configuration
├── package.json                              # Scripts and dependencies
├── package-lock.json                         # Locked dependency versions
├── tailwind.config.ts                        # Tailwind configuration
├── tsconfig.json                             # TypeScript configuration
├── README.md                                 # Project documentation
└── ...
```

## Technical stack

### Frontend
- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS

### State and data management
- Pinia
- Nuxt composables for reusable logic
- Runtime config for API base URL management

### Backend / API layer
- Nuxt server API routes
- External API integration via configurable public API base URL

### Tooling
- Node.js
- npm
- vue-tsc
- Nuxt devtools

## Key technical decisions

- Nuxt is used to combine frontend pages, server endpoints, and a smooth full-stack workflow in one project.
- Vue components are structured by feature to keep the app modular and easier to evolve.
- Pinia centralizes state such as authentication, school information, offers, and join requests.
- Tailwind CSS enables quick, consistent UI styling across the platform.
- TypeScript helps reduce errors and improve maintainability in a growing application.

## Notes

This repository is structured as a Nuxt 4 application with a Vue-based frontend and lightweight server endpoints. It is designed to unify the education ecosystem around school discovery, transparency, and more secure financial management.

Homepage: https://grand-frere-project.vercel.app
