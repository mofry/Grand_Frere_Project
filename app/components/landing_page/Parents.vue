<template>
  <div class="min-h-screen w-full bg-white py-20 px-6 font-sans overflow-hidden">
    
    <div class="max-w-7xl mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        
        <div class="relative group">
          <div class="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="/images/Page_parents/Frame_9.png" 
              alt="Parents utilisant l'application" 
              class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="absolute inset-y-0 left-[-10%] right-[40%] bg-orange-200/20 blur-3xl -z-10 pointer-events-none"></div>
        </div>

        <div class="flex flex-col items-center lg:items-end text-center lg:text-right">
          
          <div class="w-fit px-6 py-1 rounded-full border border-pink-200 bg-pink-50 text-gray-800 font-medium text-sm mb-6">
            Parents
          </div>

          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Offrez à votre enfant un <br>
            budget repas 100 % sécurisé.
          </h2>

          <h3 class="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            <span class="text-[#d97706]">Rechargez, suivez, contrôlez...</span> <br>
            <span class="text-[#a21caf]">tout depuis votre smartphone.</span>
          </h3>

          <p class="text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-end">
            <NuxtLink  to="/repertoire_ecoles" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#a21caf] text-white font-bold shadow-lg hover:opacity-90 transition-all hover:scale-105">
              Voir la liste des écoles Partenaires
            </Nuxtlink>
            <NuxtLink to = /landing_app class="px-8 py-3.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all">
              Téléchargez l'application
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div v-for="(card, index) in cards" :key="index" 
             class="group rounded-[2.5rem] p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
             :style="{ background: card.gradient }">
          
          <div class="w-16 h-16 mb-8 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <img 
              src="/images/Page_parents/Vector.svg" 
              alt="Icone Médaille" 
              class="w-full h-full object-contain"
            />
          </div>

          <h4 class="text-xl font-bold text-gray-900 mb-6" v-html="card.title"></h4>
          
          <p class="text-sm text-gray-500 leading-relaxed font-light">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "Simplicité et <br> rapidité de gestion",
    gradient: "linear-gradient(180deg, rgba(255,237,213,0.6) 0%, rgba(255,255,255,1) 100%)"
  },
  {
    title: "Contrôle total du <br> budget repas",
    gradient: "linear-gradient(180deg, rgba(251,207,232,0.6) 0%, rgba(255,255,255,1) 100%)"
  },
  {
    title: "Sécurité et <br> tranquillité d’esprit",
    gradient: "linear-gradient(180deg, rgba(255,237,213,0.4) 0%, rgba(255,255,255,1) 100%)"
  }
]
</script>