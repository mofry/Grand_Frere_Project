<template>
<section class="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden py-20 px-6">
  
  <div class="absolute inset-0 z-0">
    <img 
      src="/images/Page_fournisseurs/Section_Fournisseurs.png" 
      alt="Fond fournisseurs" 
      class="h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-black/20"></div>
  </div>

  <div class="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
    
    <div class="w-fit px-6 py-1.5 rounded-lg border border-pink-200/20 bg-pink-100 text-gray-900 font-bold text-lg mb-10 shadow-[0_0_15px_rgba(252,231,243,0.3)]">
      Fournisseurs
    </div>

    <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
      Intégrez notre réseau de fournisseurs pour <br>
      bénéficier d’une visibilité privilégiée auprès des <br>
      écoles et des parents d’élèves.
    </h2>

    <p class="text-gray-300 text-lg leading-relaxed max-w-2xl mb-12 font-light">
      laboris nisi ut aliquip ex ea commodo consequat. Ut enim <br class="hidden md:block">
      ad minim x ea commodo consequat. Ut enim ad minim <br class="hidden md:block">
      veniam,odo Ut enim ad minim veniam, quis nostrud
    </p>

    <Nuxtlink to ="/fournisseur2" class="px-10 py-4 rounded-2xl border border-white/30 text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm">
      Devenir Fournisseur
    </Nuxtlink>

  </div>
</section>
</template>