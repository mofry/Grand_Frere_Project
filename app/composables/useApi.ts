import { useAuthStore } from '~/stores/auth'

/**
 * Client HTTP centralisé pour l'API Grand Frère.
 * - baseURL = racine du serveur (runtimeConfig.public.apiBase)
 * - ajoute automatiquement le header Authorization: Bearer <accessToken>
 *   quand l'utilisateur est connecté.
 *
 * Les chemins passés commencent par `/api/v1/...` (comme dans le Swagger).
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()

  return $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ options }) {
      if (auth.accessToken) {
        const headers = new Headers(options.headers as HeadersInit)
        headers.set('Authorization', `Bearer ${auth.accessToken}`)
        options.headers = headers
      }
    }
  })
}
