<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSchoolsStore, type School, type SchoolActivity } from '~/stores/schools'
import { useSchoolFormat } from '~/composables/useSchoolFormat'

const props = defineProps<{ schoolId: string }>()

const store = useSchoolsStore()
const { formatDate, initials } = useSchoolFormat()

/**
 * L'API n'expose pas de route publique pour une école seule
 * (GET /api/v1/schools/:id exige un rôle SUPER_ADMIN ou SCHOOL_ADMIN).
 * On récupère donc la liste publique et on y résout l'identifiant, ce qui
 * permet quand même d'ouvrir une fiche directement par son URL.
 */
const { data, pending, error, refresh } = await useAsyncData(
  `ecole-${props.schoolId}`,
  async () => {
    const [schools, activities] = await Promise.all([
      store.fetchSchools(),
      store.fetchActivities(props.schoolId)
    ])
    return {
      school: schools.find((s) => s.id === props.schoolId) ?? null,
      activities
    }
  },
  { watch: [() => props.schoolId] }
)

const school = computed<School | null>(() => data.value?.school ?? null)
const activities = computed<SchoolActivity[]>(() => data.value?.activities ?? [])

const logoBroken = ref(false)
watch(school, () => {
  logoBroken.value = false
})

const logo = computed(() =>
  logoBroken.value ? null : school.value?.logoUrl ?? null
)

// --- Activités de l'école ----------------------------------------------------

const activitySearch = ref('')
const ACTIVITIES_STEP = 6
const activitiesShown = ref(ACTIVITIES_STEP)

const filteredActivities = computed(() => {
  const term = activitySearch.value.trim().toLowerCase()
  if (!term) return activities.value
  return activities.value.filter((a) =>
    [a.title, a.description]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(term))
  )
})

/** Photos dont le chargement a échoué : on bascule sur le visuel de repli. */
const brokenPhotos = ref(new Set<string>())
const markPhotoBroken = (id: string) => {
  brokenPhotos.value = new Set(brokenPhotos.value).add(id)
}

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

watch([activitySearch, () => props.schoolId], () => {
  activitiesShown.value = ACTIVITIES_STEP
})
</script>

<template>
  <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden font-sans">

    <nav class="relative z-50 w-full p-6 bg-white flex justify-between items-center shadow-sm">
      <NuxtLink to="/" class="hover:text-orange-500 transition">
        <img src="/images/commun/logo_complet.png" alt="Logo Grand Frère" class="w-32" />
      </NuxtLink>

      <div class="flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-orange-500 transition">Accueil</NuxtLink>
        <NuxtLink to="/#carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
        <NuxtLink to="/#discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
        <NuxtLink to="/#ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
        <NuxtLink to="/#parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
        <NuxtLink to="/#fournisseur" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
        <NuxtLink to="/#apropos" class="hover:text-orange-500 transition">A propos</NuxtLink>
        <NuxtLink to="/#faq" class="hover:text-orange-500 transition">FAQ</NuxtLink>

        <a href="mailto:prunel@grandfrere.com" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Contactez-nous
        </a>

        <!-- Bloc "Se connecter" : icône SVG + texte de connexion -->

      </div>
    </nav>

    <main class="relative w-full flex flex-col items-center pt-8 pb-20 px-4">
      <div class="w-full max-w-6xl space-y-8">

        <!-- Chargement -->
        <section v-if="pending" class="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden animate-pulse">
          <div class="h-72 bg-gray-200"></div>
          <div class="pt-16 pb-10 px-12 space-y-4">
            <div class="h-6 bg-gray-200 rounded w-1/3"></div>
            <div class="h-3 bg-gray-100 rounded w-1/5"></div>
            <div class="h-24 bg-gray-100 rounded"></div>
          </div>
        </section>

        <!-- Erreur réseau -->
        <section v-else-if="error" class="bg-white rounded-[32px] shadow-sm border border-red-100 p-12 text-center">
          <p class="text-sm font-bold text-red-500 mb-2">Impossible de charger cette école</p>
          <p class="text-xs text-gray-500 mb-6">{{ store.error || 'Le service est momentanément indisponible.' }}</p>
          <button @click="refresh()" class="border border-gray-800 rounded-xl px-8 py-2.5 text-xs font-extrabold hover:bg-gray-800 hover:text-white transition">
            Réessayer
          </button>
        </section>

        <!-- Identifiant inconnu, ou école suspendue donc absente du site public -->
        <section v-else-if="!school" class="bg-white rounded-[32px] shadow-sm border border-gray-100 p-12 text-center">
          <p class="text-sm font-bold text-gray-700 mb-2">École introuvable</p>
          <p class="text-xs text-gray-500 mb-6">Cette fiche n'existe pas ou n'est plus publiée.</p>
          <NuxtLink to="/repertoire_ecoles" class="border border-gray-800 rounded-xl px-8 py-2.5 text-xs font-extrabold hover:bg-gray-800 hover:text-white transition">
            Retour au répertoire
          </NuxtLink>
        </section>

        <template v-else>

          <section class="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
            <!-- Bandeau décoratif : l'API ne stocke pas de photo de couverture d'établissement -->
            <div class="relative h-72 bg-gradient-to-br from-[#e67e22] to-[#a55eea]">
              <div class="absolute -bottom-14 left-12 w-36 h-36 rounded-full border-4 border-white bg-[#1a1a4b] shadow-lg overflow-hidden flex items-center justify-center">
                <img
                  v-if="logo"
                  :src="logo"
                  :alt="`Logo ${school.name}`"
                  class="w-full h-full object-contain p-2"
                  @error="logoBroken = true"
                />
                <span v-else class="text-white font-bold text-3xl">{{ initials(school) }}</span>
              </div>
            </div>

            <div class="pt-16 pb-10 px-12">
              <h1 class="text-3xl font-bold text-gray-800">{{ school.name }}</h1>
              <p class="text-gray-400 text-sm mt-1">{{ school.sigle }}</p>

              <div v-if="school.address" class="mt-4 inline-flex items-center gap-2 border border-dashed border-blue-400 px-3 py-1.5 rounded-md text-blue-500 text-xs font-semibold italic bg-blue-50/30">
                <span class="text-lg">📍</span> {{ school.address }}
              </div>

              <div class="mt-10 border-b border-gray-100">
                <h2 class="inline-flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs bg-gray-50 border-b-2 border-gray-800 font-bold">
                  📖 À propos
                </h2>
              </div>

              <div class="mt-8 min-h-[120px] text-gray-600 text-sm leading-relaxed max-w-4xl">
                <p v-if="school.description" class="whitespace-pre-line">{{ school.description }}</p>
                <p v-else class="text-gray-400 italic">
                  Cet établissement n'a pas encore renseigné sa présentation.
                </p>
              </div>
            </div>
          </section>

          <section class="bg-white rounded-[32px] shadow-sm border border-gray-100 p-10">
            <div class="flex justify-between items-center mb-10">
              <h2 class="text-xl font-bold text-gray-900 flex items-center gap-3">
                Activités Récentes <span class="italic">GRAND FRÈRE</span>
              </h2>
              <div class="relative flex items-center">
                <input
                  v-model="activitySearch"
                  type="text"
                  placeholder="Rechercher une activité"
                  class="bg-gray-100 rounded-full py-2.5 px-12 text-sm focus:outline-none w-80"
                >
                <span class="absolute left-4 text-gray-400">🔍</span>
              </div>
            </div>

            <p v-if="!filteredActivities.length" class="text-sm text-gray-400 py-8 text-center">
              {{ activitySearch ? 'Aucune activité ne correspond à cette recherche.' : "Cet établissement n'a pas encore publié d'activité." }}
            </p>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="activity in visibleActivities" :key="activity.id" class="border border-gray-100 rounded-3xl p-3 hover:shadow-md transition">
                <div class="bg-gray-200 h-52 rounded-2xl mb-5 overflow-hidden">
                  <img
                    v-if="activity.photo"
                    :src="activity.photo"
                    :alt="activity.title"
                    class="w-full h-full object-cover"
                    @error="markPhotoBroken(activity.id)"
                  />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e67e22] to-[#a55eea] text-white font-bold text-xl"
                  >
                    {{ initials(school) }}
                  </div>
                </div>
                <div class="px-2">
                  <div class="mb-4">
                    <p class="font-bold text-sm">{{ activity.title }}</p>
                    <p class="text-xs text-gray-500 mt-2 line-clamp-3">{{ activity.description }}</p>
                  </div>
                  <div class="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                    <span>{{ school.sigle }}</span>
                    <span>{{ formatDate(activity.createdAt) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="hasMoreActivities" class="flex justify-center mt-12">
              <button
                @click="activitiesShown += ACTIVITIES_STEP"
                class="border border-gray-800 rounded-xl px-10 py-3 text-xs font-extrabold hover:bg-gray-800 hover:text-white transition"
              >
                Chargez plus d'activités
              </button>
            </div>
          </section>

        </template>

      </div>
    </main>

  </div>
</template>
