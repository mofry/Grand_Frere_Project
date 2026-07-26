<template>
  <div class="min-h-screen w-full bg-white py-20 px-6 font-sans overflow-hidden">
    
    <div class="max-w-6xl mx-auto" text-right>

      <div class="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
        <div class="w-fit px-6 py-1.5 rounded-lg border border-pink-300 bg-pink-50 text-gray-800 font-medium text-lg mb-8">
          Parents
        </div>

        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Offrez à votre enfant un <br>
          budget repas 100 % sécurisé.
        </h2>

        <h3 class="text-2xl lg:text-4xl font-bold mb-8 leading-tight">
          <span class="bg-gradient-to-r from-[#d97706] to-[#a21caf] bg-clip-text text-transparent">
            Rechargez, suivez, contrôlez...
          </span> <br>
          <span class="bg-gradient-to-r from-[#a21caf] to-[#d97706] bg-clip-text text-transparent">
            tout depuis votre smartphone.
          </span>
        </h3>

        <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NuxtLink to = "/repertoire_ecoles" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] via-[#d946ef] to-[#a21caf] text-white font-bold shadow-lg hover:opacity-90 transition-all hover:scale-105">
            Voir la liste des écoles Partenaires
          </NuxtLink>
          <button class="px-8 py-3.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all">
            Chargez plus d'activités
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(card, index) in cards" :key="index" 
             :class="card.bgColor"
             class="group rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
          
          <div class="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <img 
              src="/images/Page_parents/Vector.svg" 
              alt="Icône de service" 
              class="w-full h-full object-contain"
            />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4" v-html="card.title"></h3>
          
          <p class="text-sm text-gray-500 leading-relaxed">
            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
    bgColor: "bg-gradient-to-b from-orange-100/80 to-white"
  },
  {
    title: "Contrôle total du <br> budget repas",
    bgColor: "bg-gradient-to-b from-rose-100/80 to-white"
  },
  {
    title: "Sécurité et <br> tranquillité d’esprit",
    bgColor: "bg-gradient-to-b from-orange-100/60 to-white"
  }
]
</script>