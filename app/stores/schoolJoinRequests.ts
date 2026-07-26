import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '~/composables/useApi'

export type Gender = 'MALE' | 'FEMALE'
export type JoinRequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

/** Payload envoyé par le formulaire public d'inscription d'école. */
export interface SchoolJoinRequestPayload {
  schoolName: string
  city: string
  studentCount: number
  gender: Gender
  firstName: string
  lastName: string
  phone: string
  email: string
  position: string
  message?: string
}

/** Demande telle que renvoyée par l'API. */
export interface SchoolJoinRequest extends SchoolJoinRequestPayload {
  id: string
  status: JoinRequestStatus
  rejectionReason?: string
  createdAt: string
}

interface ListResponse {
  statusCode?: number
  data?: SchoolJoinRequest[]
}

export const useSchoolJoinRequestsStore = defineStore('schoolJoinRequests', () => {
  const requests = ref<SchoolJoinRequest[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const messageFromError = (e: any) =>
    e?.data?.message || e?.message || 'Une erreur est survenue'

  /** POST public — envoie une demande d'adhésion (aucune authentification requise). */
  const submitRequest = async (payload: SchoolJoinRequestPayload) => {
    const api = useApi()
    return await api('/api/v1/school-join-requests', {
      method: 'POST',
      body: payload
    })
  }

  /** GET — liste des demandes (authentification admin requise). */
  const fetchRequests = async (status?: JoinRequestStatus) => {
    isLoading.value = true
    error.value = null
    try {
      const api = useApi()
      const res = await api<ListResponse>('/api/v1/school-join-requests', {
        method: 'GET',
        query: status ? { status } : undefined
      })
      requests.value = res?.data ?? (res as unknown as SchoolJoinRequest[]) ?? []
    } catch (e) {
      error.value = messageFromError(e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  /** PUT — approuve une demande : crée l'école + le compte admin (sigle + mot de passe). */
  const approveRequest = async (id: string, sigle: string, password: string) => {
    const api = useApi()
    await api(`/api/v1/school-join-requests/${id}/approve`, {
      method: 'PUT',
      body: { sigle, password }
    })
    await fetchRequests()
  }

  /** PUT — rejette une demande avec un motif. */
  const rejectRequest = async (id: string, reason: string) => {
    const api = useApi()
    await api(`/api/v1/school-join-requests/${id}/reject`, {
      method: 'PUT',
      body: { reason }
    })
    await fetchRequests()
  }

  return {
    requests,
    isLoading,
    error,
    submitRequest,
    fetchRequests,
    approveRequest,
    rejectRequest
  }
})
