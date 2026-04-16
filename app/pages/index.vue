<script setup lang="ts">
// Pas besoin d'importer les composants, Nuxt le fait pour toi !
</script>

<template>
  <div class="landing-page">

    <section id = "accueil" class="scroll-mt-24">
      <LandingPageNavbar />
    </section>

    <section id="carte" class="scroll-mt-24">
      <LandingPageLaCarte />
    </section>

    <section id="video" class="scroll-mt-24">
      <LandingPageVideo />
    </section>

    <section id="discovery" class="scroll-mt-24">
      <LandingPageDiscovery />
    </section>

    <section id="recharge" class="scroll-mt-24">
      <LandingPageRecharge />
    </section>

    <section id="ecoles" class="scroll-mt-24">
      <LandingPageEcolesTrue />
    </section>

    <section id="parents" class="scroll-mt-24">
      <LandingPageParents />
    </section>

    <section id="fournisseur" class="scroll-mt-24">
      <LandingPageFournisseurs />
    </section>

    <section id="apropos" class="scroll-mt-24">
      <LandingPageAPropos />
    </section>

    <section id="faq" class="scroll-mt-24">
      <LandingPageFaq />
    </section>
   
  </div>
</template>