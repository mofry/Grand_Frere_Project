<template>
  <div class="min-h-screen bg-gray-50 font-sans pb-10">
    
    <header class="bg-gradient-to-br from-[#eba111] via-[#e244b0] to-[#a429d6] pt-6 pb-32 text-white px-6">
      <div class="max-w-7xl mx-auto">
        
        <nav class="flex items-center justify-between mb-16">
          <div class="flex items-center gap-2">
            <div class="font-bold text-xl uppercase tracking-tighter flex items-center gap-2">
              <span class="w-6 h-6 bg-white rounded-full inline-block"></span>
              Grand Frère
            </div>
          </div>
          <div class="hidden lg:flex gap-6 text-sm font-medium">
            <a href="#" class="hover:underline">Accueil</a>
            <a href="#" class="hover:underline">La carte</a>
            <a href="#" class="hover:underline">Discovery</a>
            <a href="#" class="hover:underline">Écoles</a>
            <a href="#" class="hover:underline">Parents</a>
            <a href="#" class="hover:underline">Fournisseurs</a>
            <a href="#" class="hover:underline">A propos</a>
            <a href="#" class="hover:underline">FAQ</a>
          </div>
          <div class="flex items-center gap-4">
            <button class="border border-white/50 px-4 py-1.5 rounded-full text-sm hover:bg-white/10 transition">Contactez-nous</button>
            <button class="flex items-center gap-2 text-sm hover:opacity-80 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Se connecter
            </button>
          </div>
        </nav>

        <div class="text-center">
          <h1 class="text-6xl md:text-8xl font-black mb-4 tracking-tight">DISCOVERY</h1>
          <p class="text-xl md:text-2xl font-medium mb-8">
            Explore les divers univers de cartes <span class="font-bold">GRAND FRÈRE</span>
          </p>
          <button class="bg-white text-orange-500 px-6 py-3 rounded-full font-bold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition">
            Une histoire au Hasard
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
      <div class="bg-white rounded-[40px] shadow-xl p-6 md:p-12">

        <section class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Favoris du mois de nos curieux</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div 
              v-for="item in favoris" 
              :key="item.id" 
              class="relative group rounded-[2rem] overflow-hidden aspect-[3/4] shadow-md bg-gray-100"
            >
              <img :src="item.image" alt="Carte Favori" class="absolute inset-0 w-full h-full object-cover" />

              <div class="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-[10px] font-bold text-gray-600">{{ item.date }}</span>
              </div>

              <button class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm hover:scale-110 transition z-10">
                <svg class="w-4 h-4 text-gray-800 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              </button>

              <button 
                @click="item.likes++" 
                class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-1.5 shadow-md hover:bg-white transition z-10 hover:scale-105 active:scale-95"
              >
                <svg 
                  class="w-5 h-5 text-red-500 transition-colors" 
                  :class="item.likes > 0 ? 'fill-current' : 'fill-none'" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span class="text-sm font-bold text-gray-800">{{ item.likes }}</span>
              </button>
            </div>
          </div>

          <div class="flex justify-end items-center mt-8 gap-3">
             <button class="bg-[#3a3a3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition">&lt;</button>
             <button class="bg-[#3a3a3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition">&gt;</button>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Catégories</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div 
              v-for="cat in categories" 
              :key="cat.id" 
              class="relative group rounded-[2.5rem] overflow-hidden aspect-[2/3] shadow-sm bg-gray-100"
            >
              <img :src="cat.image" alt="Carte Catégorie" class="absolute inset-0 w-full h-full object-cover" />

              <button class="absolute top-6 right-6 bg-white p-2.5 rounded-full shadow-md hover:scale-110 transition z-10">
                <svg class="w-4 h-4 text-gray-800 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              </button>
              
              <button 
                @click="cat.likes++" 
                class="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-1.5 shadow-md hover:bg-white transition z-10 hover:scale-105 active:scale-95"
              >
                <svg 
                  class="w-5 h-5 text-red-500 transition-colors" 
                  :class="cat.likes > 0 ? 'fill-current' : 'fill-none'" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span class="text-sm font-bold text-gray-800">{{ cat.likes }}</span>
              </button>
            </div>
          </div>
          
          <div class="flex justify-end items-center mt-8 gap-3">
             <button class="bg-[#3a3a3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition">&lt;</button>
             <button class="bg-[#3a3a3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition">&gt;</button>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- DÉFINIS TON IMAGE UNIQUE ICI ---
const monImageUnique = '/images/Page_discovery/makeba3.png' // Remplace par le chemin de ton image

const favoris = ref([
  { id: 1, image: monImageUnique, date: '20.05.2025', likes: 0 },
  { id: 2, image: monImageUnique, date: '20.05.2025', likes: 0 },
  { id: 3, image: monImageUnique, date: '20.05.2025', likes: 0 },
  { id: 4, image: monImageUnique, date: '20.05.2025', likes: 0 },
])

const categories = ref([
  { id: 1, image: monImageUnique, likes: 0 },
  { id: 2, image: monImageUnique, likes: 0 },
  { id: 3, image: monImageUnique, likes: 0 },
  { id: 4, image: monImageUnique, likes: 0 },
])
</script>