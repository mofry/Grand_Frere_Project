<script setup lang="ts">
/**
 * Ancienne fiche d'école sans identifiant.
 * Les fiches vivent désormais sur /ecoles/[id] : on renvoie au répertoire,
 * seul endroit où choisir une école.
 */
definePageMeta({
  redirect: '/repertoire_ecoles'
})
</script>

<template>
  <div />
</template>
