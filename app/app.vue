<template>
  <div class="min-h-screen w-full bg-white pb-20">
    
    

    <NuxtPage />
    
  </div>
</template>

<style>
  /* Tes polices globales */
  @font-face {
    font-family: 'NirmanaText';
    src: url('/fonts/Nirmana-Text.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  /* Applique la police à tout le site */
  body {
    font-family: 'NirmanaText', sans-serif;
    margin: 0; /* Bon réflexe pour éviter les marges blanches par défaut */
  }
</style>








