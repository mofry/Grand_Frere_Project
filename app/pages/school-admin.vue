<template>
  <div>
    <SchoolAdmin />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth'
import SchoolAdmin from '~/components/dashboard/SchoolAdmin.vue'

const auth = useAuthStore()

onMounted(async () => {
  // initialise le store (lit les tokens depuis localStorage)
  auth.initializeAuth()
  if (!auth.isAuthenticated) {
    return navigateTo('/seConnecter')
  }
  const role = auth.role
  if (role !== 'school_admin' && role !== 'super_admin') {
    // Accès restreint
    return navigateTo('/')
  }
})
</script>

<style scoped>
</style>
