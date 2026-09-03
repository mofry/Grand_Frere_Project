<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <header class="flex justify-between items-center px-10 py-4 shadow-sm">
      <div class="flex items-center gap-2">
         <span class="font-bold text-orange-600 text-xl italic">GRAND FRÈRE</span>
      </div>
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <a href="/">Accueil</a>
        <a href="#">La carte</a>
        <a href="#">Discovery</a>
        <a href="#">Écoles</a>
        <a href="#">Parents</a>
        <a href="#">Fournisseurs</a>
      </nav>
      <!-- Bloc "Se connecter" : bouton de connexion principal -->
      <NuxtLink to="/seConnecter" class="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">Se connecter</NuxtLink>
    </header>

    <main class="max-w-5xl mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold mb-4">Créer votre compte<br><span class="italic text-orange-600">GRAND FRÈRE</span></h1>
        <p class="text-gray-600 text-lg">Rejoignez notre réseau de partenaires</p>
      </div>

      <div v-if="errorMessage" class="mb-6 max-w-2xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        {{ errorMessage }}
      </div>

      <div v-if="successMessage" class="mb-6 max-w-2xl mx-auto p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
        {{ successMessage }}
      </div>

      <div class="bg-white border border-gray-100 shadow-2xl rounded-[3rem] p-10 md:p-16 max-w-2xl mx-auto">
        <form @submit.prevent="handleRegister" class="space-y-8">
          
          <!-- Section: Type de compte -->
          <div>
            <h3 class="text-orange-500 font-bold mb-6">Type de compte</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label v-for="type in accountTypes" :key="type" class="flex items-center gap-3 cursor-pointer p-4 border rounded-lg hover:bg-gray-50" :class="{ 'border-orange-500 bg-orange-50': formData.typeUtilisateur === type }">
                <input 
                  type="radio" 
                  :value="type" 
                  v-model="formData.typeUtilisateur"
                  class="accent-orange-500"
                />
                <span class="text-sm font-medium capitalize">{{ type }}</span>
              </label>
            </div>
          </div>

          <!-- Section: Informations personnelles -->
          <div>
            <h3 class="text-orange-500 font-bold mb-6 border-t pt-8">Informations personnelles</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Civilité *</label>
                <select v-model="formData.civilite" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200">
                  <option>Choisir une civilité</option>
                  <option>M.</option>
                  <option>Mme</option>
                  <option>Mlle</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Nom *</label>
                <input v-model="formData.nom" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Prénoms *</label>
                <input v-model="formData.prenoms" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-semibold mb-2">E-mail *</label>
                <input v-model="formData.email" type="email" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Numéro de téléphone *</label>
                <input v-model="formData.telephone" type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>
          </div>

          <!-- Section: Identifiants de connexion -->
          <div>
            <h3 class="text-orange-500 font-bold mb-6 border-t pt-8">Identifiants de connexion</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Nom d'utilisateur *</label>
                <input v-model="formData.username" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Mot de passe *</label>
                <input v-model="password" type="password" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-semibold mb-2">Confirmer le mot de passe *</label>
              <input v-model="passwordConfirm" type="password" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
            </div>
          </div>

          <!-- Section: Informations supplémentaires -->
          <div>
            <h3 class="text-orange-500 font-bold mb-6 border-t pt-8">Informations supplémentaires</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Fonction *</label>
                <input v-model="formData.fonction" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Entreprise / Organisation</label>
                <input v-model="formData.entreprise" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>

            <div class="mb-8">
              <label class="block text-sm font-semibold mb-2">Message (optionnel)</label>
              <textarea v-model="formData.message" rows="4" class="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200"></textarea>
            </div>
          </div>

          <!-- Conditions -->
          <div class="flex items-start gap-3 mb-10">
            <input v-model="acceptTerms" type="checkbox" class="mt-1 accent-orange-500 h-4 w-4" id="consent" />
            <label for="consent" class="text-xs text-gray-500 leading-tight">
              J'accepte les conditions d'utilisation et la politique de confidentialité
            </label>
          </div>

          <!-- Boutons -->
          <div class="flex justify-center gap-4">
            <NuxtLink to="/seConnecter" class="bg-gray-200 text-gray-800 font-bold py-3 px-12 rounded-xl hover:bg-gray-300 transition">
              Annuler
            </NuxtLink>
            <button 
              type="submit"
              :disabled="isLoading"
              class="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-12 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? 'Création en cours...' : 'Créer mon compte' }}
            </button>
          </div>

          <p class="text-center text-sm text-gray-600 pt-4">
            Vous avez déjà un compte ? 
            <NuxtLink to="/seConnecter" class="text-orange-500 font-semibold hover:text-orange-600">Se connecter</NuxtLink>
          </p>
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

const accountTypes = ['ecole', 'fournisseur', 'parent', 'autre']

const formData = ref({
  typeUtilisateur: 'autre',
  email: '',
  username: '',
  civilite: '',
  nom: '',
  prenoms: '',
  telephone: '',
  fonction: '',
  entreprise: '',
  message: ''
})

const password = ref('')
const passwordConfirm = ref('')
const acceptTerms = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)

const handleRegister = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  isLoading.value = true

  try {
    // Validation
    if (!formData.value.email || !formData.value.nom || !formData.value.prenoms || 
        !formData.value.telephone || !formData.value.fonction || !password.value) {
      throw new Error('Veuillez remplir tous les champs obligatoires')
    }

    if (!formData.value.email.includes('@')) {
      throw new Error('Veuillez entrer un email valide')
    }

    if (password.value.length < 6) {
      throw new Error('Le mot de passe doit contenir au moins 6 caractères')
    }

    if (password.value !== passwordConfirm.value) {
      throw new Error('Les mots de passe ne correspondent pas')
    }

    if (!acceptTerms.value) {
      throw new Error('Vous devez accepter les conditions d\'utilisation')
    }

    // Créer le compte
    const userData = {
      email: formData.value.email,
      username: formData.value.username || formData.value.email,
      civilite: formData.value.civilite,
      nom: formData.value.nom,
      prenoms: formData.value.prenoms,
      telephone: formData.value.telephone,
      fonction: formData.value.fonction,
      entreprise: formData.value.entreprise,
      typeUtilisateur: formData.value.typeUtilisateur,
      message: formData.value.message
    }

    await authStore.register(userData, password.value)
    successMessage.value = 'Compte créé avec succès ! Redirection en cours...'
    
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  } catch (error) {
    errorMessage.value = error.message || 'Erreur lors de la création du compte'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
</style>
