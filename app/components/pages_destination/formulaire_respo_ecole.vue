<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSchoolJoinRequestsStore, type Gender } from '~/stores/schoolJoinRequests'

const store = useSchoolJoinRequestsStore()

// Communes proposées (city = chaîne libre côté API)
const communes = [
  'Abobo', 'Adjamé', 'Attécoubé', 'Cocody', 'Koumassi', 'Marcory',
  'Plateau', 'Port-Bouët', 'Treichville', 'Yopougon', 'Bingerville', 'Anyama'
]

const form = reactive({
  city: '',
  schoolName: '',
  studentCount: '' as number | '',
  civilite: '' as '' | 'M.' | 'Mme' | 'Mlle',
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  position: '',
  message: '',
  consent: false
})

const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// La civilité du formulaire est mappée sur le champ `gender` (enum MALE/FEMALE) de l'API.
const genderFromCivilite = (c: string): Gender => (c === 'M.' ? 'MALE' : 'FEMALE')

const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validation minimale des champs obligatoires
  if (
    !form.city || !form.schoolName || !form.studentCount || !form.civilite ||
    !form.lastName || !form.firstName || !form.phone || !form.email || !form.position
  ) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires (*).'
    return
  }
  if (!form.consent) {
    errorMessage.value = 'Vous devez accepter l’utilisation de vos données pour continuer.'
    return
  }

  isLoading.value = true
  try {
    await store.submitRequest({
      schoolName: form.schoolName,
      city: form.city,
      studentCount: Number(form.studentCount),
      gender: genderFromCivilite(form.civilite),
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      position: form.position,
      message: form.message || undefined
    })
    successMessage.value =
      'Votre demande a bien été envoyée ! Notre équipe l’étudiera et vous recontactera avec vos accès.'
    // Réinitialisation du formulaire
    Object.assign(form, {
      city: '', schoolName: '', studentCount: '', civilite: '',
      lastName: '', firstName: '', phone: '', email: '', position: '',
      message: '', consent: false
    })
  } catch (e: any) {
    errorMessage.value =
      e?.data?.message || e?.message || 'Une erreur est survenue lors de l’envoi. Réessayez.'
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <header class="flex justify-between items-center px-10 py-4 shadow-sm">
      <div class="flex items-center gap-2">
         <span class="font-bold text-orange-600 text-xl italic">GRAND FRÈRE</span>
      </div>
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <a href="#">Accueil</a>
        <a href="#">La carte</a>
        <a href="#">Discovery</a>
        <a href="#">Écoles</a>
        <a href="#">Parents</a>
        <a href="#">Fournisseurs</a>
      </nav>
      <button class="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">Contactez-nous</button>
    </header>

    <main class="max-w-5xl mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold mb-4">Rejoignez le réseau d’écoles<br>partenaires <span class="italic text-orange-600">GRAND FRÈRE</span></h1>
        <p class="text-orange-500 font-bold text-xl">Besoin de plus d’informations ?<br>Contactez-nous !</p>
      </div>

      <div class="bg-white border border-gray-100 shadow-2xl rounded-[3rem] p-10 md:p-16">
        <!-- Messages de retour -->
        <div v-if="successMessage" class="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleSubmit">

          <h3 class="text-orange-500 font-bold mb-6">Informations sur votre école</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div>
              <label class="block text-sm font-semibold mb-2">Nom de l’établissement *</label>
              <input v-model="form.schoolName" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Nombre d’élèves *</label>
              <input v-model="form.studentCount" type="number" min="1" placeholder="Ex : 450" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Commune *</label>
              <select v-model="form.city" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
                <option value="" disabled>Choisir une commune</option>
                <option v-for="commune in communes" :key="commune" :value="commune">{{ commune }}</option>
              </select>
            </div>
          </div>

          <h3 class="text-orange-500 font-bold mb-6 border-t pt-8">Informations du demandeur</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Civilité *</label>
              <select v-model="form.civilite" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
                <option value="" disabled>Choisir une civilité</option>
                <option value="M.">M.</option>
                <option value="Mme">Mme</option>
                <option value="Mlle">Mlle</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Nom *</label>
              <input v-model="form.lastName" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Prénoms *</label>
              <input v-model="form.firstName" type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Numéro de téléphone *</label>
              <input v-model="form.phone" type="tel" placeholder="+225..." class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">E-mail Professionnel *</label>
              <input v-model="form.email" type="email" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Fonction *</label>
              <input v-model="form.position" type="text" placeholder="Ex : Directeur" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold mb-2">Message</label>
            <textarea v-model="form.message" rows="5" class="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm"></textarea>
          </div>

          <div class="flex items-start gap-3 mb-10">
            <input v-model="form.consent" type="checkbox" class="mt-1 accent-orange-500 h-4 w-4" id="consent" />
            <label for="consent" class="text-xs text-gray-500 leading-tight">
              J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
            </label>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              :disabled="isLoading"
              class="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-4 px-20 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {{ isLoading ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
