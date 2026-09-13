import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '~/composables/useApi'

export type SchoolStatus = 'ACTIVE' | 'SUSPENDED'

/** École telle que renvoyée par GET /api/v1/schools (route publique). */
export interface School {
  id: string
  name: string
  sigle: string
  address: string
  description: string | null
  logoUrl: string | null
  status: SchoolStatus
  createdAt: string
}

/** Activité telle que renvoyée par GET /api/v1/school-activities (route publique). */
export interface SchoolActivity {
  id: string
  schoolId: string
  title: string
  description: string
  photoUrls: string[]
  isVisible: boolean
  createdAt: string
  school?: { id: string; name: string; sigle: string }
}

/** Le ResponseInterceptor de l'API enveloppe toute réponse dans { data, statusCode }. */
interface Envelope<T> {
  statusCode?: number
  data?: T
}

/** Les routes paginées sont donc doublement imbriquées : { data: { data, meta } }. */
interface Paginated<T> {
  data: T[]
  meta: { total: number; page: number; limit: number; totalPages: number }
}

/** Limite maximale acceptée par PaginationQueryDto côté API. */
export const MAX_LIMIT = 100

/**
 * Date de l'activité publiée la plus récente, par école.
 * Les activités arrivant triées par createdAt décroissant, la première occurrence
 * d'un schoolId est la plus récente.
 */
export const lastActivityBySchool = (activities: SchoolActivity[]) => {
  const map: Record<string, string> = {}
  for (const activity of activities) {
    if (!map[activity.schoolId]) map[activity.schoolId] = activity.createdAt
  }
  return map
}

export const useSchoolsStore = defineStore('schools', () => {
  const schools = ref<School[]>([])
  const activities = ref<SchoolActivity[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const messageFromError = (e: any) =>
    e?.data?.message || e?.message || 'Une erreur est survenue'

  /**
   * GET public — liste des écoles.
   * L'API renvoie toutes les écoles sans pagination ni filtre de statut : on écarte
   * ici les écoles suspendues, qui ne doivent pas apparaître sur le site public.
   */
  const fetchSchools = async () => {
    isLoading.value = true
    error.value = null
    try {
      const api = useApi()
      const res = await api<Envelope<School[]>>('/api/v1/schools')
      const list = res?.data ?? (res as unknown as School[]) ?? []
      schools.value = list.filter((s) => s.status === 'ACTIVE')
      return schools.value
    } catch (e) {
      error.value = messageFromError(e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  /**
   * GET public — activités publiées, les plus récentes d'abord.
   * `schoolId` restreint le résultat à une école ; sans lui on couvre tout le réseau.
   */
  const fetchActivities = async (schoolId?: string, limit = MAX_LIMIT) => {
    error.value = null
    try {
      const api = useApi()
      const res = await api<Envelope<Paginated<SchoolActivity>>>(
        '/api/v1/school-activities',
        {
          query: {
            page: 1,
            limit: Math.min(limit, MAX_LIMIT),
            ...(schoolId ? { schoolId } : {})
          }
        }
      )
      activities.value = res?.data?.data ?? []
      return activities.value
    } catch (e) {
      error.value = messageFromError(e)
      throw e
    }
  }

  /**
   * Charge en un appel parallèle tout ce dont le répertoire a besoin.
   * Le résultat est retourné pour pouvoir transiter par le payload de useAsyncData :
   * Pinia est monté sans @pinia/nuxt, son état n'est donc pas hydraté depuis le SSR.
   */
  const fetchDirectory = async () => {
    const [schoolList, activityList] = await Promise.all([
      fetchSchools(),
      fetchActivities()
    ])
    return { schools: schoolList, activities: activityList }
  }

  return {
    schools,
    activities,
    isLoading,
    error,
    fetchSchools,
    fetchActivities,
    fetchDirectory
  }
})
