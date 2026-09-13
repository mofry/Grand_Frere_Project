<template>
  <div>
    <SchoolAdmin />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth'
import { UserRole } from '~/utils/roles'
import SchoolAdmin from '~/components/dashboard/SchoolAdmin.vue'

const auth = useAuthStore()

onMounted(async () => {
  // initialise le store (lit les tokens depuis localStorage)
  auth.initializeAuth()
  if (!auth.isAuthenticated) {
    return navigateTo('/seConnecter')
  }
  // Les rôles arrivent en MAJUSCULES dans le JWT : comparer à 'school_admin'
  // ne correspondait jamais et éjectait les responsables légitimes.
  const role = auth.role
  if (role !== UserRole.SCHOOL_ADMIN && role !== UserRole.SUPER_ADMIN) {
    // Accès restreint
    return navigateTo('/')
  }
})
</script>

<style scoped>
</style>
