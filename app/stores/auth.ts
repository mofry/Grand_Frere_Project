import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const ACCESS_KEY = 'grand_frere_access_token'
const REFRESH_KEY = 'grand_frere_refresh_token'
const PHONE_KEY = 'grand_frere_phone'

interface TokenResponse {
  statusCode?: number
  data?: {
    accessToken: string
    refreshToken: string
  }
  // certains environnements renvoient les tokens à la racine
  accessToken?: string
  refreshToken?: string
}

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const phone = ref<string | null>(null)

  const isAuthenticated = computed(() => !!accessToken.value)
  // Décoder un JWT simple pour extraire le payload (si présent)
  const decodeJwtPayload = (token?: string | null) => {
    if (!token) return null
    try {
      const parts = token.split('.')
      if (parts.length < 2) return null
      const payload = parts[1]
      // replace URL-safe base64 chars
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
      const json = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      return JSON.parse(json)
    } catch {
      return null
    }
  }

  const role = computed(() => {
    const payload = decodeJwtPayload(accessToken.value)
    if (!payload) return null
    return payload.role ?? payload.roles ?? null
  })

  // Conservé pour la compatibilité avec le code existant (dashboard, etc.)
  const user = computed(() => (accessToken.value ? { phone: phone.value, role: role.value } : null))

  const config = () => useRuntimeConfig().public.apiBase as string

  const extractTokens = (res: TokenResponse) => {
    const tokens = res?.data ?? res
    if (!tokens?.accessToken) {
      throw new Error('Réponse inattendue du serveur (aucun token reçu)')
    }
    return tokens
  }

  const persist = () => {
    if (import.meta.client) {
      if (accessToken.value) localStorage.setItem(ACCESS_KEY, accessToken.value)
      if (refreshToken.value) localStorage.setItem(REFRESH_KEY, refreshToken.value)
      if (phone.value) localStorage.setItem(PHONE_KEY, phone.value)
    }
  }

  const clear = () => {
    accessToken.value = null
    refreshToken.value = null
    phone.value = null
    if (import.meta.client) {
      localStorage.removeItem(ACCESS_KEY)
      localStorage.removeItem(REFRESH_KEY)
      localStorage.removeItem(PHONE_KEY)
    }
  }

  const initializeAuth = () => {
    if (!import.meta.client) return
    accessToken.value = localStorage.getItem(ACCESS_KEY)
    refreshToken.value = localStorage.getItem(REFRESH_KEY)
    phone.value = localStorage.getItem(PHONE_KEY)
  }

  /** Connexion par numéro de téléphone + mot de passe. */
  const signin = async (phoneNumber: string, password: string) => {
    const res = await $fetch<TokenResponse>('/api/auth/signin', {
      method: 'POST',
      body: { phone: phoneNumber, password }
    })
    const tokens = extractTokens(res)
    accessToken.value = tokens.accessToken
    refreshToken.value = tokens.refreshToken ?? null
    phone.value = phoneNumber
    persist()
  }

  /** Rafraîchit l'access token à partir du refresh token. */
  const refresh = async () => {
    if (!refreshToken.value) throw new Error('Aucun refresh token disponible')
    const res = await $fetch<TokenResponse>('/api/auth/refresh', {
      method: 'POST',
      body: { refreshToken: refreshToken.value }
    })
    const tokens = extractTokens(res)
    accessToken.value = tokens.accessToken
    refreshToken.value = tokens.refreshToken ?? refreshToken.value
    persist()
  }

  const logout = async () => {
    try {
      if (refreshToken.value) {
        await $fetch('/api/auth/signout', {
          method: 'POST',
          body: { refreshToken: refreshToken.value }
        })
      }
    } catch {
      // On ignore les erreurs de déconnexion côté serveur : on nettoie quand même localement.
    } finally {
      clear()
    }
  }

  return {
    // state
    accessToken,
    refreshToken,
    phone,
    role,
    // getters
    isAuthenticated,
    user,
    // actions
    initializeAuth,
    signin,
    refresh,
    logout
  }
})
