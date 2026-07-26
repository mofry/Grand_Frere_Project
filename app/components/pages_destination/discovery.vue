<template>
  <div class="min-h-screen bg-gray-50 font-sans pb-10">
    
    <header class="bg-gradient-to-br from-[#eba111] via-[#e244b0] to-[#a429d6] pt-4 pb-32 text-white px-6">
      <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between mb-16">
          <div class="flex items-center gap-2">
            <img src="/images/commun/logo_trans.png" class="tracking-tighter flex items-center gap-2">
          </div>
          
          <div class="hidden lg:flex gap-6 text-sm font-medium">
            <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
            <NuxtLink to="/#carte" class="hover:underline">La carte</NuxtLink>
            
            <button @click="window.scrollTo({ top: 0, behavior: 'smooth' })" class="hover:underline">Discovery</button>
            
            <NuxtLink to="/#ecoles" class="hover:underline">Écoles</NuxtLink>
            <NuxtLink to="/#parents" class="hover:underline">Parents</NuxtLink>
            <NuxtLink to="/#fournisseur" class="hover:underline">Fournisseurs</NuxtLink>
            <NuxtLink to="/#apropos" class="hover:underline">A propos</NuxtLink>
            <NuxtLink to="/#faq" class="hover:underline">FAQ</NuxtLink>
          </div>
          
          <div class="flex items-center gap-4">
            <button class="border border-white/50 px-4 py-1.5 rounded-full text-sm hover:bg-white/10 transition">Contactez-nous</button>
            
            <NuxtLink to="/seConnecter" class="flex items-center gap-2 text-sm hover:opacity-80 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Se connecter
            </NuxtLink>
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

              <button 
                @click="toggleLike(item)" 
                class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-1.5 shadow-md hover:bg-white transition z-10 hover:scale-105 active:scale-95"
              >
                <svg 
                  class="w-5 h-5 text-red-500 transition-colors duration-300" 
                  :class="item.hasLiked ? 'fill-current' : 'fill-none'" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span class="text-sm font-bold text-gray-800">{{ formatNumber(item.likes) }}</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Catégories</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink 
              v-for="cat in categories" 
              :key="cat.id" 
              :to="cat.link"
              class="block relative group rounded-[2.5rem] overflow-hidden aspect-[2/3] shadow-sm bg-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img :src="cat.image" alt="Carte Catégorie" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              <button 
                @click.prevent.stop="toggleLike(cat)" 
                class="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-1.5 shadow-md hover:bg-white transition z-10 hover:scale-105 active:scale-95"
              >
                <svg 
                  class="w-5 h-5 text-red-500 transition-colors duration-300" 
                  :class="cat.hasLiked ? 'fill-current' : 'fill-none'" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span class="text-sm font-bold text-gray-800">{{ formatNumber(cat.likes) }}</span>
              </button>
            </NuxtLink>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// IMAGES
const img_makeba = '/images/Page_discovery/makeba3.png'
const img_basilique = '/images/Page_discovery/basilique_top.png' 
const img_talou = '/images/Page_discovery/talou_top.png' 
const img_sport = '/images/Page_discovery/sport.png' 
const img_femmes = '/images/Page_discovery/femmes.png' 
const img_soyinka = '/images/Page_discovery/soyinka_top.png' 
const img_litterature = '/images/Page_discovery/litterature.png' 
const img_tourisme = '/images/Page_discovery/tourisme.png' 

// --- LOGIQUE DES LIKES ---

/**
 * Formate les nombres (ex: 1500 -> 1.5K)
 */
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0) + 'K'
  }
  return num
}

/**
 * Alterne entre liker et dé-liker
 */
const toggleLike = (item) => {
  if (item.hasLiked) {
    item.likes--
    item.hasLiked = false
  } else {
    item.likes++
    item.hasLiked = true
  }
}

// DONNÉES REACTIVES
const favoris = ref([
  { id: 1, image: img_basilique, date: '20.05.2025', likes: 1200, hasLiked: false },
  { id: 2, image: img_makeba, date: '20.05.2025', likes: 850, hasLiked: false },
  { id: 3, image: img_talou, date: '20.05.2025', likes: 4300, hasLiked: true },
  { id: 4, image: img_soyinka, date: '20.05.2025', likes: 95, hasLiked: false },
])

// =============================================================
// AJOUT DE LA PROPRIÉTÉ 'link' POUR GERER LA NAVIGATION
// =============================================================
const categories = ref([
  { id: 1, image: img_femmes, likes: 540, hasLiked: false, link: '/categorie/femmes' },
  { id: 2, image: img_litterature, likes: 1200, hasLiked: false, link: '/categorie/litterature' },
  { id: 3, image: img_sport, likes: 890, hasLiked: false, link: '/categorie/sport' },
  { id: 4, image: img_tourisme, likes: 2100, hasLiked: false, link: '/tourisme' }, // <-- Ton lien demandé
])
</script>