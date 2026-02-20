<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <header class="flex items-center justify-between px-6 py-4 border-b border-gray-50">
      <div class="flex items-center gap-2 font-black text-orange-600 italic tracking-tighter">
        <span class="text-xl">GF</span> GRAND FRÈRE
      </div>
      <nav class="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#" class="hover:text-orange-500 transition">Accueil</a>
        <a href="#" class="hover:text-orange-500 transition">La carte</a>
        <a href="#" class="hover:text-orange-500 transition">Discovery</a>
        <a href="#" class="hover:text-orange-500 transition">Écoles</a>
        <a href="#" class="hover:text-orange-500 transition">Parents</a>
        <a href="#" class="hover:text-orange-500 transition">Fournisseurs</a>
        <a href="#" class="hover:text-orange-500 transition">A propos</a>
        <a href="#" class="hover:text-orange-500 transition">FAQ</a>
      </nav>
      <div class="flex items-center gap-4">
        <button class="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-orange-200 hover:scale-105 transition">
          Contactez-nous
        </button>
        <button class="flex items-center gap-2 text-sm font-semibold">
          <div class="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-[10px]">👤</div>
          Se connecter
        </button>
      </div>
    </header>

    <div class="text-center mt-16 mb-12 px-4">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
        Proposez vos produits aux écoles via notre solution
      </h1>
      <h2 class="text-3xl md:text-4xl font-black tracking-[0.2em] text-gray-900 mt-2 uppercase">
        GRAND FRÈRE
      </h2>
    </div>

    <main class="max-w-4xl mx-auto px-4 pb-20">
      <div class="bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-gray-200/50 p-8 md:p-16">
        
        <div class="flex justify-between items-start mb-16 relative">
          <div class="absolute top-3 left-0 w-full h-[2px] bg-gray-100 -z-0"></div>
          <div 
            class="absolute top-3 left-0 h-[2px] bg-orange-400 transition-all duration-500 -z-0"
            :style="{ width: step === 1 ? '16%' : step === 2 ? '50%' : '84%' }"
          ></div>
          
          <div v-for="s in 3" :key="s" class="relative z-10 flex flex-col items-center text-center w-1/3">
            <div 
              class="w-6 h-6 rounded-full mb-3 transition-colors duration-300"
              :class="step >= s ? 'bg-white border-4 border-orange-400' : 'bg-gray-200 border-4 border-white'"
            ></div>
            <span 
              class="text-[10px] font-bold uppercase leading-tight transition-colors"
              :class="step >= s ? 'text-orange-400' : 'text-gray-400'"
            >
              {{ s === 1 ? 'Informations générales' : s === 2 ? 'Produits et services' : 'Conditions commerciales' }}
            </span>
          </div>
        </div>

        <div v-if="step === 1" class="space-y-6 animate-fadeIn">
          <h3 class="text-orange-400 font-bold text-lg mb-8">Informations générales</h3>

          <div class="grid grid-cols-1 gap-5">
            <div v-for="label in ['Raison sociale *', 'Nom commercial *', 'Adresse complète *']" :key="label">
              <label class="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wide">{{ label }}</label>
              <input type="text" class="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-orange-100 outline-none transition-all">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wide">Numéro de téléphone *</label>
                <input type="tel" class="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-orange-100 outline-none transition-all">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wide">E-mail Professionnel *</label>
                <input type="email" class="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-orange-100 outline-none transition-all">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase tracking-wide">Site web</label>
              <input type="url" class="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-orange-100 outline-none transition-all">
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-12">
          <button 
            @click="step++"
            class="px-16 py-3 border border-gray-300 rounded-2xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Suivant
          </button>
        </div>
      </div>
    </main>

    <footer class="border-t border-gray-100 py-16 bg-white px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div class="col-span-1">
          <div class="flex items-center gap-2 font-bold text-orange-600 italic text-sm">GF GRAND FRÈRE</div>
        </div>
        <div v-for="(col, title) in footerLinks" :key="title">
          <h4 class="font-bold text-sm mb-4">{{ title }}</h4>
          <ul class="space-y-2 text-xs text-gray-400 font-medium">
            <li v-for="link in col" :key="link"><a href="#" class="hover:text-orange-500">{{ link }}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)

const footerLinks = {
  'Pages': ['La carte', 'Ecoles', 'Parents', 'Vendeurs'],
  'Aide': ['A propos', 'FAQ'],
  'Comptes': ["S'inscrire", 'Se connecter']
}
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>