<template>
  <div class="mt-20 flex flex-col items-center pb-20">
    
    <h1 class="text-4xl font-bold text-left mb-10">
      La carte 
      <img src="/images/Page_vidéo1/logo_complet.png" alt="Piece" class="left-1 inline-block w-80 h-auto align-middle ml-2">
      <br />
      comment ça fonctionne ?
    </h1>

    <div class="w-full max-w-[800px] flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth hide-scrollbar">
      
      <div class="snap-center shrink-0 w-full flex justify-center">
        <video 
          controls 
          poster="/images/Page_vidéo1/Frame_14.png" 
          class="w-full rounded-2xl shadow-lg"
        >
          <source src="/videos/grand_frere_video.mp4" type="video/mp4">
        </video>
      </div>

      <div class="snap-center shrink-0 w-full flex justify-center">
        <video 
          controls 

          class="w-full rounded-2xl shadow-lg"
        >
          <source src="/videos/pour_les_parents.mp4" type="video/mp4">
        </video>
      </div>

    </div>

    <NuxtLink 
      to="/Commencez" 
      class="mt-[50px] w-[295px] h-[60px] bg-gradient-to-r from-[#e67e22] to-[#a55eea] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition"
    >
      Commencez maintenant
    </NuxtLink>

  </div>
</template>

<style scoped>
/* Petite astuce pour cacher la barre de défilement (scrollbar) inesthétique tout en gardant le scroll tactile/souris actif */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>