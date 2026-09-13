/**
 * Rôles utilisateur, recopiés à l'identique de l'enum `UserRole` de l'API
 * (`grand_frere_api/src/modules/users/user.types.ts`).
 *
 * Les valeurs sont en MAJUSCULES : c'est la forme exacte présente dans le
 * payload du JWT (`{ sub, role }`). Comparer à une chaîne en minuscules ne
 * correspond jamais — c'est le bug qui empêchait les responsables
 * d'établissement d'accéder à leur espace.
 *
 * Toute comparaison de rôle dans l'application doit passer par ces constantes,
 * jamais par une chaîne écrite à la main.
 */
export const UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  SCHOOL_ADMIN: 'SCHOOL_ADMIN',
  VENDOR: 'VENDOR',
  PARENT: 'PARENT',
  STUDENT: 'STUDENT'
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

/**
 * Page d'accueil de chaque rôle après connexion.
 * `null` = ce rôle n'a pas d'espace sur le site web (parents et élèves passent
 * par l'application mobile) ; la connexion web leur est donc refusée avec un
 * message explicite plutôt qu'une redirection silencieuse vers l'accueil.
 */
const HOME_BY_ROLE: Record<UserRole, string | null> = {
  SUPER_ADMIN: '/demandes-ecoles',
  SCHOOL_ADMIN: '/school-admin',
  VENDOR: '/dashboard',
  PARENT: null,
  STUDENT: null
}

/** Vrai si la valeur correspond à un rôle connu de l'API. */
export const isKnownRole = (role: unknown): role is UserRole =>
  typeof role === 'string' && role in HOME_BY_ROLE

/**
 * Destination après connexion pour un rôle donné.
 * Renvoie `null` si le rôle n'a pas d'espace web, ou s'il est inconnu
 * (rôle ajouté côté API sans être déclaré ici).
 */
export const homeForRole = (role: unknown): string | null =>
  isKnownRole(role) ? HOME_BY_ROLE[role] : null
