<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  lastActivityBySchool,
  useSchoolsStore,
  type School,
  type SchoolActivity
} from '~/stores/schools'
import { useSchoolFormat } from '~/composables/useSchoolFormat'

const store = useSchoolsStore()
const { formatDate, initials } = useSchoolFormat()

/**
 * Écoles + activités publiées du réseau, rendues côté serveur.
 * Les données passent par le payload : le store Pinia n'étant pas hydraté
 * automatiquement, on lit `data` plutôt que l'état du store.
 */
const { data, pending, error, refresh } = await useAsyncData(
  'repertoire-ecoles',
  () => store.fetchDirectory()
)

const schools = computed<School[]>(() => data.value?.schools ?? [])
const activities = computed<SchoolActivity[]>(() => data.value?.activities ?? [])

/** Date de dernière activité publiée, par école. */
const lastActivity = computed(() => lastActivityBySchool(activities.value))

// --- Journal des activités ---------------------------------------------------

const activitySearch = ref('')
const ACTIVITIES_STEP = 6
const activitiesShown = ref(ACTIVITIES_STEP)

/** Photos dont le chargement a échoué : on bascule sur le visuel de repli. */
const brokenPhotos = ref(new Set<string>())
const markPhotoBroken = (id: string) => {
  brokenPhotos.value = new Set(brokenPhotos.value).add(id)
}

const filteredActivities = computed(() => {
  const term = activitySearch.value.trim().toLowerCase()
  if (!term) return activities.value
  return activities.value.filter((a) =>
    [a.title, a.description, a.school?.name, a.school?.sigle]
      .filter(Boolean)
      .some((field) => field!.toLowerCase().includes(term))
  )
})

/** Activités affichées, photo de couverture déjà résolue. */
const visibleActivities = computed(() =>
  filteredActivities.value.slice(0, activitiesShown.value).map((activity) => ({
    ...activity,
    photo: brokenPhotos.value.has(activity.id)
      ? null
      : activity.photoUrls?.[0] ?? null
  }))
)

const hasMoreActivities = computed(
  () => filteredActivities.value.length > activitiesShown.value
)

watch(activitySearch, () => {
  activitiesShown.value = ACTIVITIES_STEP
})

// --- Liste des écoles partenaires -------------------------------------------

const schoolSearch = ref('')
const PER_PAGE = 10
const page = ref(1)

const filteredSchools = computed(() => {
  const term = schoolSearch.value.trim().toLowerCase()
  if (!term) return schools.value
  return schools.value.filter((s) =>
    [s.name, s.sigle, s.address]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(term))
  )
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredSchools.value.length / PER_PAGE))
)

const pagedSchools = computed(() =>
  filteredSchools.value.slice((page.value - 1) * PER_PAGE, page.value * PER_PAGE)
)

/** Numérotation continue d'une page à l'autre. */
const rowNumber = (index: number) => (page.value - 1) * PER_PAGE + index + 1

watch(schoolSearch, () => {
  page.value = 1
})

const goToPage = (target: number) => {
  page.value = Math.min(Math.max(1, target), totalPages.value)
}
</script>

<template>

  <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden">

    <nav class="relative z-50 w-full p-6 bg-white flex justify-between items-center shadow-sm">
      <img src="/images/Page_vidéo1/logo_complet.png" />
      <div class="flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-orange-500 transition">Accueil</NuxtLink>
        <NuxtLink to="/#carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
        <NuxtLink to="/#discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
        <NuxtLink to="/#ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
        <NuxtLink to="/#parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
        <NuxtLink to="/#fournisseur" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
        <NuxtLink to="/#apropos" class="hover:text-orange-500 transition">A propos</NuxtLink>
        <NuxtLink to="/#faq" class="hover:text-orange-500 transition">FAQ</NuxtLink>

        <a href="mailto:contact.grandfrere@gmail.com" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Contactez-nous
        </a>

        <!-- Bloc "Se connecter" : icône SVG + texte de connexion -->

      </div>
    </nav>

    <main class="relative w-full flex flex-col items-center pt-10 pb-20">

      <div class="relative z-10 flex flex-col items-center gap-10 w-full max-w-6xl px-4">

        <h2 class="font-bold text-2xl text-slate-800 flex items-center justify-center flex-wrap">
          Le réseau d'écoles partenaires
          <img src="/images/Page_liste_ecoles/logo.png" class="h-8" />
        </h2>

        <!-- Erreur de chargement : on propose de réessayer plutôt qu'un écran vide -->
        <div v-if="error" class="w-full bg-white rounded-[32px] shadow-sm border border-red-100 p-8 text-center">
          <p class="text-sm font-bold text-red-500 mb-2">Impossible de charger le répertoire</p>
          <p class="text-xs text-gray-500 mb-6">{{ store.error || 'Le service est momentanément indisponible.' }}</p>
          <button @click="refresh()" class="border border-gray-800 rounded-lg px-6 py-2 text-sm font-bold hover:bg-gray-50">
            Réessayer
          </button>
        </div>

        <template v-else>

          <div class="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
            <div class="flex justify-between items-center mb-8">
              <h3 class="text-xl font-bold text-gray-800">Journal des activités</h3>
              <div class="relative flex items-center">
                <input
                  v-model="activitySearch"
                  type="text"
                  placeholder="Rechercher une activité"
                  class="bg-gray-100 rounded-full py-2 px-10 text-sm focus:outline-none w-64"
                >
                <span class="absolute left-3 text-gray-400">🔍</span>
              </div>
            </div>

            <!-- Squelettes pendant le chargement -->
            <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="i in 3" :key="i" class="border border-gray-100 rounded-2xl p-3 animate-pulse">
                <div class="bg-gray-200 h-44 rounded-xl mb-4"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
                <div class="h-2 bg-gray-100 rounded w-1/3"></div>
              </div>
            </div>

            <p v-else-if="!filteredActivities.length" class="text-sm text-gray-400 py-8 text-center">
              {{ activitySearch ? 'Aucune activité ne correspond à cette recherche.' : "Aucune activité n'a encore été publiée." }}
            </p>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="activity in visibleActivities" :key="activity.id" class="border border-gray-100 rounded-2xl p-3">
                <div class="bg-gray-200 h-44 rounded-xl mb-4 overflow-hidden">
                  <img
                    v-if="activity.photo"
                    :src="activity.photo"
                    :alt="activity.title"
                    class="w-full h-full object-cover"
                    @error="markPhotoBroken(activity.id)"
                  />
                  <!-- Pas de photo (ou photo indisponible) : visuel de repli neutre -->
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e67e22] to-[#a55eea] text-white font-bold text-xl"
                  >
                    {{ initials(activity.school) }}
                  </div>
                </div>
                <div class="flex justify-between items-start gap-2">
                  <p class="font-bold text-sm">{{ activity.title }}</p>
                  <NuxtLink
                    :to="`/ecoles/${activity.schoolId}`"
                    class="text-[10px] border border-gray-300 px-2 py-1 rounded flex items-center gap-1 shrink-0 hover:bg-gray-50"
                  >
                    Voir plus ↗
                  </NuxtLink>
                </div>
                <div class="flex justify-between text-[11px] text-gray-400 mt-6 font-medium">
                  <span>{{ activity.school?.name || 'École inconnue' }}</span>
                  <span>{{ formatDate(activity.createdAt) }}</span>
                </div>
              </div>
            </div>

            <div v-if="hasMoreActivities" class="flex justify-center mt-8">
              <button
                @click="activitiesShown += ACTIVITIES_STEP"
                class="border border-gray-800 rounded-lg px-6 py-2 text-sm font-bold hover:bg-gray-50"
              >
                Chargez plus d'activités
              </button>
            </div>
          </div>

          <div class="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
            <div class="flex justify-between items-center mb-8">
              <h3 class="text-xl font-bold text-gray-800">Liste des écoles partenaires</h3>
              <div class="relative flex items-center">
                <input
                  v-model="schoolSearch"
                  type="text"
                  placeholder="Rechercher une école"
                  class="bg-gray-100 rounded-full py-2 px-10 text-sm focus:outline-none w-64"
                >
                <span class="absolute left-3 text-gray-400">🔍</span>
              </div>
            </div>

            <table class="w-full text-left text-sm">
              <thead>
                <tr class="text-gray-400 border-b border-gray-50">
                  <th class="pb-4 font-bold uppercase text-[10px]">Nom de l'établissement</th>
                  <th class="pb-4 font-bold uppercase text-[10px]">Commune</th>
                  <th class="pb-4 font-bold uppercase text-[10px]">Date récente activité</th>
                  <th class="pb-4 font-bold uppercase text-[10px] text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="pending">
                  <tr v-for="i in 5" :key="`skeleton-${i}`" class="border-b border-gray-50 animate-pulse">
                    <td class="py-4"><div class="h-3 bg-gray-200 rounded w-2/3"></div></td>
                    <td class="py-4"><div class="h-3 bg-gray-100 rounded w-24"></div></td>
                    <td class="py-4"><div class="h-3 bg-gray-100 rounded w-20"></div></td>
                    <td class="py-4"><div class="h-8 bg-gray-100 rounded-xl w-32 mx-auto"></div></td>
                  </tr>
                </template>

                <tr v-else-if="!pagedSchools.length">
                  <td colspan="4" class="py-10 text-center text-sm text-gray-400">
                    {{ schoolSearch ? 'Aucune école ne correspond à cette recherche.' : "Aucune école partenaire n'est encore publiée." }}
                  </td>
                </tr>

                <template v-else>
                  <tr v-for="(school, index) in pagedSchools" :key="school.id" class="border-b border-gray-50">
                    <td class="py-4 font-medium text-gray-700">
                      <span class="text-gray-300 mr-2">{{ rowNumber(index) }}.</span> {{ school.name }}
                    </td>
                    <td class="py-4 text-gray-500">{{ school.address || '—' }}</td>
                    <td class="py-4 text-gray-500">{{ formatDate(lastActivity[school.id]) }}</td>
                    <td class="py-4">
                      <div class="flex justify-center">
                        <NuxtLink
                          :to="`/ecoles/${school.id}`"
                          class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
                        >
                          Voir la fiche <span class="bg-black text-white rounded p-0.5 text-[8px]">📄</span>
                        </NuxtLink>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>

            <div v-if="!pending && totalPages > 1" class="flex justify-end items-center gap-4 mt-6 text-xs font-bold">
              <button
                :disabled="page === 1"
                @click="goToPage(page - 1)"
                class="text-gray-400 hover:text-gray-800 disabled:opacity-30 disabled:hover:text-gray-400"
              >
                Précédent
              </button>
              <button
                v-for="p in totalPages"
                :key="p"
                @click="goToPage(p)"
                :class="p === page ? 'text-gray-800 underline' : 'text-gray-300 hover:text-gray-500'"
              >
                {{ p }}
              </button>
              <button
                :disabled="page === totalPages"
                @click="goToPage(page + 1)"
                class="text-gray-400 hover:text-gray-800 disabled:opacity-30 disabled:hover:text-gray-400"
              >
                Suivant
              </button>
            </div>
          </div>

        </template>

      </div>

    </main>

  </div>
</template>
