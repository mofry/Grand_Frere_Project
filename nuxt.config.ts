// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/animations.css'],
  app: {
    // Transition de page (fondu + léger glissement)
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      // Racine du serveur API ; les chemins incluent /api/v1/...
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://gf-api.mfry.io'
    }
  }
})