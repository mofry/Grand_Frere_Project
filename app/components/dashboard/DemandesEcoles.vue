<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import {
  useSchoolJoinRequestsStore,
  type SchoolJoinRequest,
  type JoinRequestStatus
} from '~/stores/schoolJoinRequests'

const authStore = useAuthStore()
const store = useSchoolJoinRequestsStore()
const router = useRouter()

const { requests, isLoading, error } = storeToRefs(store)

// Filtre par statut
const filter = ref<JoinRequestStatus | 'ALL'>('PENDING')
const tabs: { key: JoinRequestStatus | 'ALL'; label: string }[] = [
  { key: 'PENDING', label: 'En attente' },
  { key: 'APPROVED', label: 'Approuvées' },
  { key: 'REJECTED', label: 'Rejetées' },
  { key: 'ALL', label: 'Toutes' }
]

const filteredRequests = computed(() =>
  filter.value === 'ALL'
    ? requests.value
    : requests.value.filter((r) => r.status === filter.value)
)

const statusBadge = (status: JoinRequestStatus) => {
  switch (status) {
    case 'APPROVED':
      return { bg: '#DCFCE7', color: '#15803D', label: 'Approuvée' }
    case 'REJECTED':
      return { bg: '#FEE2E2', color: '#B91C1C', label: 'Rejetée' }
    default:
      return { bg: '#FEF3C7', color: '#B45309', label: 'En attente' }
  }
}

const load = async () => {
  try {
    await store.fetchRequests()
  } catch {
    // erreur déjà stockée dans le store
  }
}

// --- Modale d'approbation ---
const approveModal = reactive({
  open: false,
  request: null as SchoolJoinRequest | null,
  sigle: '',
  password: '',
  submitting: false,
  error: ''
})

const openApprove = (req: SchoolJoinRequest) => {
  approveModal.open = true
  approveModal.request = req
  approveModal.sigle = ''
  approveModal.password = ''
  approveModal.error = ''
}

const submitApprove = async () => {
  if (!approveModal.request) return
  approveModal.error = ''
  const sigle = approveModal.sigle.trim().toUpperCase()
  if (!/^[A-Z0-9]{2,10}$/.test(sigle)) {
    approveModal.error = 'Le sigle doit contenir 2 à 10 caractères alphanumériques (majuscules).'
    return
  }
  if (approveModal.password.length < 6) {
    approveModal.error = 'Le mot de passe doit contenir au moins 6 caractères.'
    return
  }
  approveModal.submitting = true
  try {
    await store.approveRequest(approveModal.request.id, sigle, approveModal.password)
    approveModal.open = false
  } catch (e: any) {
    approveModal.error = e?.data?.message || e?.message || 'Échec de l’approbation.'
  } finally {
    approveModal.submitting = false
  }
}

// --- Modale de rejet ---
const rejectModal = reactive({
  open: false,
  request: null as SchoolJoinRequest | null,
  reason: '',
  submitting: false,
  error: ''
})

const openReject = (req: SchoolJoinRequest) => {
  rejectModal.open = true
  rejectModal.request = req
  rejectModal.reason = ''
  rejectModal.error = ''
}

const submitReject = async () => {
  if (!rejectModal.request) return
  rejectModal.error = ''
  if (rejectModal.reason.trim().length < 3) {
    rejectModal.error = 'Merci d’indiquer un motif de rejet.'
    return
  }
  rejectModal.submitting = true
  try {
    await store.rejectRequest(rejectModal.request.id, rejectModal.reason.trim())
    rejectModal.open = false
  } catch (e: any) {
    rejectModal.error = e?.data?.message || e?.message || 'Échec du rejet.'
  } finally {
    rejectModal.submitting = false
  }
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/seConnecter')
}

const formatDate = (iso: string) => {
  if (!iso) return ''
  const d = new Date(iso)
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString('fr-FR')
}

onMounted(() => {
  authStore.initializeAuth()
  if (!authStore.isAuthenticated) {
    router.push('/seConnecter')
    return
  }
  load()
})
</script>

<template>
  <div class="min-h-screen" style="background:#FDFAF5; font-family: Inter, sans-serif;">
    <div class="max-w-6xl mx-auto px-6 py-10">

      <!-- En-tête -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-[28px] font-semibold" style="color:#363636;">Demandes d’écoles partenaires</h1>
          <p class="text-[14px]" style="color:#5F5E5D;">Validez ou rejetez les demandes d’adhésion.</p>
        </div>
        <button
          @click="handleLogout"
          class="text-sm font-semibold text-slate-600 hover:text-orange-500 transition border border-slate-200 rounded-full px-4 py-2"
        >
          Se déconnecter
        </button>
      </div>

      <!-- Onglets de filtre -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button
          v-for="t in tabs"
          :key="t.key"
          @click="filter = t.key"
          class="px-4 py-2 rounded-full text-sm font-medium transition"
          :style="filter === t.key
            ? 'background:#F7B64C; color:white;'
            : 'background:white; color:#5F5E5D; box-shadow:0 0 2px 0 rgba(0,0,0,0.15);'"
        >
          {{ t.label }}
        </button>
        <button
          @click="load"
          class="ml-auto px-4 py-2 rounded-full text-sm font-medium bg-white text-orange-500"
          style="box-shadow:0 0 2px 0 rgba(0,0,0,0.15);"
        >
          Rafraîchir
        </button>
      </div>

      <!-- États -->
      <div v-if="isLoading" class="text-center py-16 text-slate-400">Chargement des demandes...</div>
      <div v-else-if="error" class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
        {{ error }}
      </div>
      <div v-else-if="filteredRequests.length === 0" class="text-center py-16 text-slate-400">
        Aucune demande dans cette catégorie.
      </div>

      <!-- Liste des demandes -->
      <div v-else class="flex flex-col gap-4">
        <div
          v-for="req in filteredRequests"
          :key="req.id"
          class="bg-white rounded-[20px] p-6"
          style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15);"
        >
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div class="flex items-center gap-3 mb-1">
                <h3 class="text-[18px] font-semibold" style="color:#252019;">{{ req.schoolName }}</h3>
                <span
                  class="px-3 py-1 rounded-full text-[11px] font-medium"
                  :style="{ background: statusBadge(req.status).bg, color: statusBadge(req.status).color }"
                >
                  {{ statusBadge(req.status).label }}
                </span>
              </div>
              <p class="text-[13px] text-slate-500">
                {{ req.city }} • {{ req.studentCount }} élèves • Reçu le {{ formatDate(req.createdAt) }}
              </p>
            </div>

            <div v-if="req.status === 'PENDING'" class="flex gap-2">
              <button
                @click="openApprove(req)"
                class="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style="background:#16A34A;"
              >
                Approuver
              </button>
              <button
                @click="openReject(req)"
                class="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style="background:#DC2626;"
              >
                Rejeter
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 text-[13px] text-slate-600 border-t pt-4">
            <p><span class="font-semibold">Demandeur :</span> {{ req.firstName }} {{ req.lastName }} ({{ req.position }})</p>
            <p><span class="font-semibold">Téléphone :</span> {{ req.phone }}</p>
            <p><span class="font-semibold">E-mail :</span> {{ req.email }}</p>
            <p v-if="req.message" class="md:col-span-2"><span class="font-semibold">Message :</span> {{ req.message }}</p>
            <p v-if="req.status === 'REJECTED' && req.rejectionReason" class="md:col-span-2 text-red-600">
              <span class="font-semibold">Motif du rejet :</span> {{ req.rejectionReason }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale : Approuver -->
    <div v-if="approveModal.open" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.4);">
      <div class="bg-white rounded-2xl p-8 w-full max-w-md">
        <h3 class="text-xl font-bold mb-1">Approuver {{ approveModal.request?.schoolName }}</h3>
        <p class="text-sm text-slate-500 mb-6">
          Ceci crée l’école et le compte administrateur. Définissez son sigle et son mot de passe : ce sont les accès
          à transmettre au responsable (il se connectera avec son numéro <span class="font-semibold">{{ approveModal.request?.phone }}</span>).
        </p>

        <div v-if="approveModal.error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {{ approveModal.error }}
        </div>

        <label class="block text-sm font-semibold mb-2">Sigle de l’école *</label>
        <input
          v-model="approveModal.sigle"
          type="text"
          placeholder="Ex : LMC"
          maxlength="10"
          class="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm mb-4 uppercase"
        />

        <label class="block text-sm font-semibold mb-2">Mot de passe du compte *</label>
        <input
          v-model="approveModal.password"
          type="text"
          placeholder="Mot de passe à communiquer au responsable"
          class="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm mb-6"
        />

        <div class="flex justify-end gap-3">
          <button @click="approveModal.open = false" class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600">
            Annuler
          </button>
          <button
            @click="submitApprove"
            :disabled="approveModal.submitting"
            class="px-4 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
            style="background:#16A34A;"
          >
            {{ approveModal.submitting ? 'Validation...' : 'Confirmer l’approbation' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Modale : Rejeter -->
    <div v-if="rejectModal.open" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.4);">
      <div class="bg-white rounded-2xl p-8 w-full max-w-md">
        <h3 class="text-xl font-bold mb-1">Rejeter {{ rejectModal.request?.schoolName }}</h3>
        <p class="text-sm text-slate-500 mb-6">Indiquez le motif du rejet (visible dans le suivi de la demande).</p>

        <div v-if="rejectModal.error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {{ rejectModal.error }}
        </div>

        <label class="block text-sm font-semibold mb-2">Motif *</label>
        <textarea
          v-model="rejectModal.reason"
          rows="4"
          class="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm mb-6"
        ></textarea>

        <div class="flex justify-end gap-3">
          <button @click="rejectModal.open = false" class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600">
            Annuler
          </button>
          <button
            @click="submitReject"
            :disabled="rejectModal.submitting"
            class="px-4 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
            style="background:#DC2626;"
          >
            {{ rejectModal.submitting ? 'Rejet...' : 'Confirmer le rejet' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
