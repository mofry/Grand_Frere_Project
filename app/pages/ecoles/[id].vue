<script setup lang="ts">
const route = useRoute()

/** Identifiant d'école issu de l'URL, pour une fiche partageable. */
const schoolId = computed(() => String(route.params.id))
</script>

<template>
  <div class="repertoire_ecoles">
    <RepertoireEcolesListe2 :school-id="schoolId" />
  </div>
</template>
