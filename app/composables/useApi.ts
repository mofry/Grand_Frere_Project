import { useAuthStore } from '~/stores/auth'

/**
 * Client HTTP centralisé pour l'API Grand Frère.
 * - baseURL = racine du serveur (runtimeConfig.public.apiBase)
 * - ajoute automatiquement le header Authorization: Bearer <accessToken>
 *   quand l'utilisateur est connecté.
 * - renouvelle l'access token expiré et rejoue la requête (voir plus bas).
 *
 * Les chemins passés commencent par `/api/v1/...` (comme dans le Swagger).
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()

  return $fetch.create({
    baseURL: config.public.apiBase as string,

    /**
     * Renouvellement automatique sur access token expiré.
     *
     * ofetch exécute `onResponseError` *avant* sa logique de retry : on
     * rafraîchit ici le token, puis ofetch rejoue la requête, ce qui repasse
     * par `onRequest` et injecte le nouveau token.
     *
     * Pas de risque de boucle : `auth.refresh()` appelle `$fetch` directement,
     * sans passer par ce client, et `retry: 1` limite à une seule tentative.
     */
    retry: 1,
    retryStatusCodes: [401],

    onRequest({ options }) {
      if (auth.accessToken) {
        const headers = new Headers(options.headers as HeadersInit)
        headers.set('Authorization', `Bearer ${auth.accessToken}`)
        options.headers = headers
      }
    },

    async onResponseError({ response }) {
      if (response.status !== 401) return

      // Rien à renouveler : l'utilisateur n'était pas connecté, ou l'appel
      // visait une route publique. On laisse l'erreur remonter telle quelle.
      if (!auth.refreshToken) return

      try {
        await auth.refresh()
      } catch {
        // Le refresh token est lui aussi expiré ou révoqué : la session est
        // bel et bien terminée.
        auth.clear()
        if (import.meta.client) {
          await navigateTo('/seConnecter')
        }
      }
    }
  })
}
