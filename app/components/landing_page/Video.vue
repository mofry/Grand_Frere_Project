<template>
<div class="mt-20 flex flex-col items-center pb-20">
  
  <h1 class="text-4xl font-bold text-left">
    La carte 
    <img src="/images/Page_vidéo1/logo_complet.png" alt="Piece" class=" left-1 inline-block w-80 h-auto align-middle ml-2">
    <br />
    comment ça fonctionne ?
  </h1>


  

    <video 
        controls 
        poster="/images/Page_vidéo1/Frame_14.png" 
        class="w-[800px] rounded-2xl"
    >
        <source src="/videos/grand_frere_video.mp4" type="video/mp4">
    </video>

      






    <NuxtLink 
      to="/Commencez" 
      class="mt-[50px] w-[295px] h-[60px] bg-gradient-to-r from-[#e67e22] to-[#a55eea] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition"
    >
      Commencez maintenant
    </NuxtLink>

  </div>
</template>