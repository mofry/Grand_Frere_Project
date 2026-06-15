<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col relative overflow-hidden">

    <img src="/images/Page_connexion/bg.png" class="absolute w-full h-screen"/>

    <nav class="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      
      <img src="/images/Page_vidéo1/logo_complet.png" />
       
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#" class="hover:text-orange-500 transition">Acceuil</a>
        <a href="#" class="hover:text-orange-500 transition">La carte</a>
        <a href="#" class="hover:text-orange-500 transition">Discovery</a>
        <a href="#" class="hover:text-orange-500 transition">Écoles</a>
        <a href="#" class="hover:text-orange-500 transition">Parents</a>
        <a href="#" class="hover:text-orange-500 transition">Fournisseurs</a>
        <a href="#" class="hover:text-orange-500 transition">A propos</a>
        <a href="#" class="hover:text-orange-500 transition">FAQ</a>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] w-[220px] h-[50px] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Commencez maintenant
        </button>
        <button class="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <div class="w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          Se connecter
        </button>
      </div>
    </nav>

    <main class="relative z-10 flex-1 flex items-center justify-center p-6">
      <div class="bg-white/80 backdrop-blur-sm border border-slate-100 p-12 rounded-[2.5rem] shadow-2xl w-full max-w-xl">
        <div class="mb-10">
          <h1 class="text-4xl font-bold text-slate-800 mb-4">
            Bienvenue 👋<br />
            Connectez-vous !
          </h1>
          <p class="text-slate-500 leading-relaxed">
            Entrez vos identifiants,<br />
            votre portail personnalisé vous attend !
          </p>
        </div>

        <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
            <input 
              type="email" 
              v-model="email"
              placeholder="exemple@email.com"
              class="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Mot de passe</label>
            <div class="relative">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password"
                class="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
              />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <div class="pt-4 flex flex-col items-center gap-6">
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-2/3 bg-gradient-to-r from-[#e67e22] to-[#a55eea] text-white font-bold py-4 rounded-2xl 
              shadow-lg shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? 'Connexion en cours...' : 'Se connecter' }}
            </button>

            <div class="flex gap-2 text-sm text-slate-600">
              <span>Pas de compte ?</span>
              <button 
                type="button"
                @click="goToRegister"
                class="text-orange-500 font-semibold hover:text-orange-600 transition"
              >
                Créer un compte
              </button>
            </div>

            <NuxtLink to="/mdp_forgot" class="text-slate-400 text-sm flex items-center gap-2 hover:text-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Mot de passe oublié ?
            </NuxtLink>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from '#app'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('test@example.com')
const password = ref('password123')
const showPassword = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true
  
  try {
    if (!email.value || !password.value) {
      throw new Error('Veuillez remplir tous les champs')
    }
    
    await authStore.login(email.value, password.value)
    await router.push('/dashboard')
  } catch (error) {
    errorMessage.value = error.message || 'Erreur lors de la connexion'
  } finally {
    isLoading.value = false
  }
}

const goToRegister = () => {
  router.push('/inscription')
}
</script>

<style scoped>
/* Optionnel : Ajustement de la police pour se rapprocher du design original si non défini globalement */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>