<template>
  <div class="min-h-screen w-full bg-white py-16 px-6 font-sans overflow-hidden">
    
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-16 md:mb-24">
        <h2 class="text-3xl md:text-5xl font-extrabold text-[#333] mb-2">
          Rechargez, contrôlez, encadrez.
        </h2>
        <h3 class="text-2xl md:text-4xl font-bold text-[#b8860b] leading-tight">
          L'application qui transforme le budget<br class="hidden md:block">
          repas en expérience maîtrisée.
        </h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div class="relative flex items-center justify-center h-[400px] md:h-[500px]">
          <div class="relative z-20 transform translate-x-10 md:translate-x-20">
            <img src="/images/Page_app/phone_cote.png" alt="Smartphone" class="w-[200px] md:w-[280px] drop-shadow-2xl">
          </div>

          <div class="absolute z-10 transform -translate-x-16 -translate-y-24 md:-translate-x-28 md:-translate-y-32 -rotate-12">
            <img src="/images/Page_recharge/carte_orange.png" alt="Carte Orange" class="w-[180px] md:w-[260px] drop-shadow-xl">
          </div>

          <div class="absolute z-30 transform -translate-x-12 translate-y-20 md:-translate-x-20 md:translate-y-28 rotate-6">
            <img src="/images/Page_recharge/Luffy_violet.png" alt="Carte Luffy" class="w-[220px] md:w-[320px] drop-shadow-2xl">
          </div>
        </div>

        <div class="flex flex-col gap-10">
          
          <div v-for="(item, index) in features" :key="index" class="flex items-start gap-5">
            <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#d98b3a] to-[#9b4d8d] flex items-center justify-center shadow-md">
              <img src = "/images/Page_recharge/icone_sms.svg" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-800 mb-1">{{ item.title }}</h4>
              <p class="text-gray-600 leading-snug max-w-md">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="flex justify-center mt-20">
        <button class="px-8 py-3 rounded-xl border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition-colors shadow-sm">
          Chargez plus d'activités
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
const features = [
  { title: "Fonctionnalité 1" },
  { title: "Gérer son budget" },
  { title: "Paiement" }
]
</script>

<style scoped>
/* Ajout d'une police proche de celle de l'image si nécessaire */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>