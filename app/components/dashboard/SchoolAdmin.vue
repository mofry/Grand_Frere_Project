<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Tableau de bord - Responsable d'école</h1>
    <p class="mb-2">Connecté en tant : <strong>{{ phone || '—' }}</strong></p>
    <p class="mb-4">Rôle détecté : <strong>{{ role || 'inconnu' }}</strong></p>

    <section class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="p-4 border rounded">Gérer les élèves (placeholder)</div>
      <div class="p-4 border rounded">Gérer les activités (placeholder)</div>
      <div class="p-4 border rounded">Voir les parents (placeholder)</div>
      <div class="p-4 border rounded">Transactions & fournisseurs (placeholder)</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { computed } from 'vue'

const auth = useAuthStore()
const phone = computed(() => auth.phone)
const role = computed(() => auth.role)
</script>

<style scoped>
</style>
