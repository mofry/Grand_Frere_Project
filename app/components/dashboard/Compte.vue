<template>
  <div class="flex min-h-screen" style="background:#FDFAF5; font-family: Inter, sans-serif;">

    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 h-screen w-[254px] z-30 flex flex-col" style="padding: 18px 0 18px 21px;">
      <div class="flex-1 rounded-[20px] bg-white flex flex-col py-4 relative" style="box-shadow: 0 0 3px 0 rgba(0,0,0,0.15); overflow-y: auto;">

        <!-- Logo -->
        <div class="flex items-center gap-2 px-4 mb-4 mt-2">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/915ed3e13860af460796e301e7064a369e374695?width=92" alt="logo" class="w-[46px] h-[46px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/ed84d401329f4f339170875e147ae463cc49e06d?width=288" alt="Grand Frère" class="h-[22px]" />
        </div>

        <!-- Section: Principal -->
        <p class="text-[11px] uppercase tracking-wider px-6 mb-1 mt-2" style="color:#A0A8B0;">Principal</p>

        <NuxtLink to="/dashboard" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#l-db)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8135 1.13487C13.2426 0.881117 12.6248 0.75 12 0.75C11.3752 0.75 10.7574 0.881117 10.1865 1.13487C6.45 2.79487 3.625 4.97237 2.163 6.23187C1.221 7.04337 0.714 8.19587 0.6515 9.38687C0.553442 11.2524 0.502926 13.1202 0.5 14.9884C0.5 16.7144 0.549 18.3784 0.603 19.6834C0.639864 20.6563 1.04443 21.579 1.73504 22.2652C2.42566 22.9515 3.35089 23.3502 4.324 23.3809C6.065 23.4404 8.644 23.4994 12 23.4994C15.356 23.4994 17.935 23.4404 19.676 23.3809C20.6492 23.3502 21.5745 22.9514 22.2651 22.265C22.9557 21.5787 23.3603 20.6559 23.397 19.6829C23.451 18.3789 23.5 16.7144 23.5 14.9879C23.5 12.7444 23.417 10.6954 23.3485 9.38687C23.286 8.19587 22.779 7.04287 21.837 6.23187C20.3745 4.97187 17.5495 2.79537 13.8135 1.13487Z" fill="#363636"/></g><defs><clipPath id="l-db"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px]" style="color:#363636;">Tableau de bord</span>
        </NuxtLink>

        <NuxtLink to="/appels-offres" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#l-ao)"><path d="M20.4615 3.44741C20.206 2.24191 19.132 1.44091 17.8825 1.50341C16.3725 1.57891 14.008 1.75441 10.6775 2.15691C7.34749 2.55941 5.00999 2.95191 3.52599 3.23791C2.29799 3.47441 1.45349 4.50742 1.50199 5.73792C1.55499 7.08292 1.69649 9.11641 2.04649 11.9224C2.20499 13.1914 2.36599 14.2974 2.52049 15.2499" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.721 19.979C2.8305 21.252 3.824 22.2025 5.0985 22.2885C6.641 22.3925 9.0645 22.5 12.5 22.5C15.935 22.5 18.359 22.3925 19.9015 22.2885C21.1765 22.2025 22.1695 21.252 22.279 19.979C22.392 18.662 22.5 16.698 22.5 14C22.5 11.302 22.392 9.3385 22.279 8.021C22.1695 6.748 21.176 5.7975 19.9015 5.7115C18.359 5.6075 15.9355 5.5 12.5 5.5C9.065 5.5 6.641 5.6075 5.0985 5.7115C3.8235 5.7975 2.8305 6.748 2.721 8.021C2.608 9.338 2.5 11.302 2.5 14C2.5 16.698 2.608 18.662 2.721 19.979Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.5 9.5H5.5M9.5 15.5H5.5M19.5 18.5H5.5M9.5 12.5H5.5" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="12.5" y="9" width="7" height="7" rx="2" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/></g><defs><clipPath id="l-ao"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px]" style="color:#363636;">Appels d'offres</span>
        </NuxtLink>

        <NuxtLink to="/soumissions" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#l-s)"><path d="M13.25 2.75H15.75C16.1478 2.75 16.5294 2.90804 16.8107 3.18934C17.092 3.47064 17.25 3.85218 17.25 4.25M13.05 19.14L9.33 19.67L9.86 16L19.41 6.46C19.8365 6.06256 20.4007 5.84619 20.9836 5.85647C21.5665 5.86676 22.1226 6.1029 22.5349 6.51513C22.9471 6.92737 23.1832 7.48353 23.1935 8.06643C23.2038 8.64934 22.9874 9.21348 22.59 9.64L13.05 19.14ZM5.5 0.75H12.5C12.5 0.75 13.25 0.75 13.25 1.5V4C13.25 4 13.25 4.75 12.5 4.75H5.5C5.5 4.75 4.75 4.75 4.75 4V1.5C4.75 1.5 4.75 0.75 5.5 0.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 18.75V21.75C17.25 22.1478 17.092 22.5294 16.8107 22.8107C16.5294 23.092 16.1478 23.25 15.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V4.25C0.75 3.85218 0.908035 3.47064 1.18934 3.18934C1.47064 2.90804 1.85218 2.75 2.25 2.75H4.75M5.25 8.75H12.25M5.25 13.25H7.75" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="l-s"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px]" style="color:#363636;">Soumissions</span>
        </NuxtLink>

        <NuxtLink to="/bons-de-commandes" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.395 1.25 10.838 1.4 10.229 1.652C9.64 1.896 8.956 2.255 8.105 2.702L6.037 3.787C4.992 4.335 4.157 4.774 3.51 5.205C2.842 5.652 2.326 6.122 1.951 6.759C1.577 7.394 1.409 8.082 1.328 8.901C1.25 9.696 1.25 10.673 1.25 11.903V12.097C1.25 13.327 1.25 14.304 1.328 15.099C1.409 15.919 1.578 16.606 1.951 17.241C2.326 17.878 2.841 18.348 3.511 18.795C4.156 19.226 4.992 19.665 6.037 20.213L8.105 21.298C8.956 21.745 9.64 22.104 10.229 22.348C10.839 22.6 11.395 22.75 12 22.75C12.605 22.75 13.162 22.6 13.771 22.348C14.36 22.104 15.044 21.745 15.895 21.298L17.963 20.214C19.008 19.665 19.843 19.226 20.489 18.795C21.159 18.348 21.674 17.878 22.049 17.241C22.423 16.606 22.591 15.918 22.672 15.099C22.75 14.304 22.75 13.327 22.75 12.098V11.902C22.75 10.673 22.75 9.696 22.672 8.901C22.591 8.081 22.422 7.394 22.049 6.759C21.674 6.122 21.159 5.652 20.489 5.205C19.844 4.774 19.008 4.335 17.963 3.787L15.895 2.702C15.044 2.255 14.36 1.896 13.771 1.652C13.161 1.4 12.605 1.25 12 1.25Z" fill="#363636"/></svg>
          <span class="text-[15px]" style="color:#363636;">Bons de Commandes</span>
        </NuxtLink>

        <NuxtLink to="/livraisons" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 3H13V17H2V3Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><path d="M13 8H19L22 12V17H13V8Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><circle cx="6" cy="19" r="2" stroke="#363636" stroke-width="1.5"/><circle cx="18" cy="19" r="2" stroke="#363636" stroke-width="1.5"/><path d="M8 17H14" stroke="#363636" stroke-width="1.5"/></svg>
          <span class="text-[15px]" style="color:#363636;">Livraisons</span>
        </NuxtLink>

        <!-- Active: Compte -->
        <div class="relative flex items-center gap-3 px-6 py-4 cursor-pointer mt-6">
          <div class="absolute top-2 bottom-2 w-[10px] rounded-[10px_0_0_10px]" style="background:#F7B64C; left:-1px;"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 4.75H21C21 4.75 23 4.75 23 6.75V17.25C23 17.25 23 19.25 21 19.25H3C3 19.25 1 19.25 1 17.25V6.75C1 6.75 1 4.75 3 4.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.56445 15.75H9.00045M15.0005 8.25H19.2385M15.0005 15.75H19.2385M13.2915 12H19.2385M4.56445 7.75H9.56445V12.75H4.56445V7.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-[15px] font-semibold" style="color:#F7B64C;">Compte</span>
        </div>

        <!-- Divider -->
        <div class="mt-6 mb-2">
          <p class="text-[11px] uppercase tracking-wider px-6 mb-1" style="color:#A0A8B0;">Support</p>
        </div>

        <!-- Paramètres -->
        <div class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#363636" stroke-width="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#363636" stroke-width="1.5"/></svg>
          <span class="text-[15px]" style="color:#363636;">Paramètres</span>
        </div>

        <!-- Aide -->
        <div class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.83 14V13.379C11.8295 12.9697 11.9368 12.5676 12.1412 12.2129C12.3455 11.8583 12.6397 11.5638 12.994 11.359C14.12 10.699 14.508 9.302 13.848 8.176C13.188 7.05 11.791 6.662 10.665 7.322C9.965 7.75 9.5 8.487 9.5 9.341M12 17H11.992M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z" stroke="#363636" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-[15px]" style="color:#363636;">Aide</span>
        </div>

        <!-- Logout -->
        <div class="mt-auto pt-4 border-t">
          <button @click="logout" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-red-50 rounded-lg mx-2 text-red-600 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5m0 0l-5-5m5 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span class="text-[15px]">Déconnexion</span>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main area -->
    <div class="ml-[275px] flex-1 flex flex-col min-h-screen pr-5">

      <!-- Header -->
      <header class="flex items-center gap-4 py-6 pr-4">
        <div class="flex-shrink-0">
          <h1 class="text-[28px] font-semibold leading-tight" style="color:#363636;">Mon Compte</h1>
          <p class="text-[14px]" style="color:#5F5E5D;">Gérez vos informations personnelles</p>
        </div>
        <div class="flex-1"></div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {{ userInitial }}
          </div>
        </div>
      </header>

      <!-- Main content -->
      <div v-if="!user" class="flex items-center justify-center flex-1">
        <div class="text-center">
          <p class="text-gray-500 text-lg mb-4">Vous n'êtes pas connecté</p>
          <NuxtLink to="/seConnecter" class="bg-orange-500 text-white px-6 py-2 rounded-lg">Se connecter</NuxtLink>
        </div>
      </div>

      <div v-else class="space-y-6 pb-10">
        <!-- Profile Card -->
        <div class="rounded-[30px] bg-white p-8" style="box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
          <h2 class="text-[20px] font-semibold mb-6" style="color:#252019;">Informations Personnelles</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Colonne gauche -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Civilité</label>
                <p class="text-lg text-gray-800">{{ user.civilite }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Nom</label>
                <p class="text-lg text-gray-800">{{ user.nom }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Prénoms</label>
                <p class="text-lg text-gray-800">{{ user.prenoms }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">E-mail</label>
                <p class="text-lg text-gray-800">{{ user.email }}</p>
              </div>
            </div>

            <!-- Colonne droite -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Téléphone</label>
                <p class="text-lg text-gray-800">{{ user.telephone }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Fonction</label>
                <p class="text-lg text-gray-800">{{ user.fonction }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Entreprise / Organisation</label>
                <p class="text-lg text-gray-800">{{ user.entreprise || 'Non renseigné' }}</p>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">Type de compte</label>
                <span class="inline-block px-4 py-2 rounded-full text-white text-sm" :style="{ background: getTypeColor(user.typeUtilisateur) }">
                  {{ user.typeUtilisateur }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="user.message" class="mt-8 pt-8 border-t">
            <label class="block text-sm font-semibold text-gray-600 mb-3">Message</label>
            <p class="text-gray-700 leading-relaxed">{{ user.message }}</p>
          </div>

          <div class="mt-8 pt-8 border-t">
            <p class="text-xs text-gray-500">
              Compte créé le : {{ formatDate(user.dateCreation) }}
            </p>
          </div>
        </div>

        <!-- Edit Button -->
        <div class="flex justify-end gap-4">
          <button @click="showEditForm = !showEditForm" class="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            {{ showEditForm ? 'Annuler' : 'Modifier mes infos' }}
          </button>
        </div>

        <!-- Edit Form -->
        <div v-if="showEditForm" class="rounded-[30px] bg-white p-8" style="box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
          <h2 class="text-[20px] font-semibold mb-6" style="color:#252019;">Modifier vos informations</h2>
          
          <form @submit.prevent="updateProfile" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Civilité</label>
                <select v-model="editFormData.civilite" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200">
                  <option>M.</option>
                  <option>Mme</option>
                  <option>Mlle</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">Nom</label>
                <input v-model="editFormData.nom" type="text" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">Prénoms</label>
                <input v-model="editFormData.prenoms" type="text" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">E-mail</label>
                <input v-model="editFormData.email" type="email" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">Téléphone</label>
                <input v-model="editFormData.telephone" type="tel" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">Fonction</label>
                <input v-model="editFormData.fonction" type="text" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              
              <div>
                <label class="block text-sm font-semibold mb-2">Entreprise / Organisation</label>
                <input v-model="editFormData.entreprise" type="text" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Message</label>
              <textarea v-model="editFormData.message" rows="4" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200"></textarea>
            </div>

            <button type="submit" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Enregistrer les modifications
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = computed(() => authStore.user)
const showEditForm = ref(false)

const editFormData = ref({
  civilite: '',
  nom: '',
  prenoms: '',
  email: '',
  telephone: '',
  fonction: '',
  entreprise: '',
  message: ''
})

const userInitial = computed(() => {
  if (user.value) {
    return (user.value.prenoms?.[0] || user.value.nom?.[0] || '?').toUpperCase()
  }
  return '?'
})

const getTypeColor = (type) => {
  const colors = {
    ecole: '#3B82F6',
    fournisseur: '#F59E0B',
    parent: '#10B981',
    autre: '#8B5CF6'
  }
  return colors[type] || '#6B7280'
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const logout = () => {
  authStore.logout()
  router.push('/seConnecter')
}

const updateProfile = async () => {
  try {
    authStore.updateProfile(editFormData.value)
    showEditForm.value = false
    // Rafraîchir les données du formulaire
    Object.assign(editFormData.value, user.value)
  } catch (error) {
    alert(error.message)
  }
}

onMounted(() => {
  authStore.initializeAuth()
  
  if (!user.value) {
    router.push('/seConnecter')
  } else {
    // Initialiser le formulaire avec les données de l'utilisateur
    Object.assign(editFormData.value, user.value)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
</style>
