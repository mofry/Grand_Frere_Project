# Grand Frère Project

## About Grand Frère

Grand Frère is a digital payment platform that transforms how schools and families manage student allowances and meal budgets. By centralizing transparency, control, and security, we simplify the educational ecosystem for schools, parents, and students alike.

## The Problem We Solve

Many schools and families still rely on manual or fragmented systems for managing student allowances and related services, leading to:

- Poor visibility into how funds are used
- Difficult tracking of purchases and allocations
- Limited transparency for parents
- Operational friction for schools and administrators
- Cash-based spending that's hard to track
- Students lacking a simple, frictionless way to access their meal allowance

## Current Features



The current version of the platform encompasses a complete multi-stakeholder ecosystem with the following key modules:


- **Grand Frère Card Showcase:** Dedicated presentation pages detailing the features, benefits, and security aspects of the student card.
- **Usage Guidelines:** Clear, step-by-step instructions explaining how students and parents use the card on a daily basis.
- **Vendor Registration Workflow:** An onboarding interface allowing local merchants, food vendors, and suppliers to register and propose their services to partner schools.
- **Secure Authentication:** Dedicated login portal for school principals and administrative staff.
- **Real-Time Transaction Dashboard:** A comprehensive monitoring interface tracking all financial flows and purchases made within the school premises.
- **On-Campus Vendor Management:** Tools for schools to oversee, validate, and manage all active suppliers and vendors operating inside the establishment.

  
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

This repository is structured as a Nuxt 4 application with a Vue-based frontend and lightweight server endpoints. It is designed to unify the education ecosystem around school discovery, transparency, and secure financial management.

Homepage: [https://grand-frere-project.vercel.app](https://grand-frere-project-git-mainbranch-gf-0543.vercel.app)
