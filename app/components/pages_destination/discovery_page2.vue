<template>
  <div class="min-h-screen bg-[#fafafa] font-sans pb-10">
    
    <main class="max-w-[1400px] mx-auto px-6 pt-12">
      
      <div class="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <h1 class="text-3xl font-black text-gray-900 tracking-tight">Toutes les histoires</h1>
        
        <div class="flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-full md:w-[400px]">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input 
            type="text" 
            placeholder="Rechercher une histoire" 
            class="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-400" 
          />
          <button class="ml-auto text-gray-500 hover:text-gray-900 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div 
          v-for="story in stories" 
          :key="story.id" 
          class="relative group rounded-[2rem] overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gray-200"
          :class="story.customClass"
        >
          <img :src="story.image" :alt="story.title" class="absolute inset-0 w-full h-full object-cover" />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

          <div class="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gray-800 uppercase tracking-wide z-10 shadow-sm">
            {{ story.category }}
          </div>

          <button class="absolute top-5 right-5 bg-white/90 p-2 rounded-full shadow-sm hover:scale-110 transition z-10 text-gray-800">
            <svg class="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          </button>

          <div class="absolute bottom-5 left-5 right-5 z-10 text-white">
            <h3 class="font-bold text-2xl leading-tight mb-1">{{ story.title }}</h3>
            <p class="text-xs font-medium opacity-90 mb-4">{{ story.subtitle }}</p>

            <div class="flex items-center justify-between text-xs font-semibold">
              
              <div class="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/20">
                <svg class="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{{ story.date }}</span>
              </div>

              <div class="flex items-center gap-3">
                <button 
                  @click.stop="toggleLike(story)" 
                  class="flex items-center gap-1 hover:scale-105 transition active:scale-95"
                >
                  <span class="opacity-90">{{ formatNumber(story.likes) }}</span>
                  <svg 
                    class="w-4 h-4 transition-colors" 
                    :class="story.hasLiked ? 'fill-white text-white' : 'fill-none stroke-white opacity-80'" 
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>

                <div class="flex items-center gap-1 opacity-80">
                  <span>{{ story.views }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-center mt-12">
        <button class="border-2 border-gray-300 text-gray-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
          Chargez plus d'histoires
        </button>
      </div>

    </main>

    <footer class="mt-24 border-t border-gray-200 bg-[#fafafa] pt-12 pb-20">
      <div class="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        <div class="flex items-start gap-2">
          <div class="font-bold text-xl uppercase tracking-tighter flex items-center gap-2 text-[#b67a3d]">
             <span class="w-6 h-6 bg-[#b67a3d] rounded-full inline-block"></span>
             Grand Frère
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm font-medium text-gray-600">
          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-gray-900 mb-1">Pages</h4>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">La carte</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Discovery</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Écoles</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Parents</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Fournisseurs</NuxtLink>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-gray-900 mb-1">Aide</h4>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">A propos</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">FAQ</NuxtLink>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-gray-900 mb-1">Comptes</h4>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">S'inscrire</NuxtLink>
            <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Se connecter</NuxtLink>
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- DÉFINIS TON IMAGE UNIQUE ICI ---
const imageUnique = '/images/Page_discovery/makeba3.png' // Laisse-moi juste insérer l'image !

// Logique pour formater les nombres (ex: 5000 -> 5K)
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0) + 'K'
  }
  return num
}

// Logique de toggle Like (Incrémente/Décrémente le compteur)
const toggleLike = (story) => {
  if (story.hasLiked) {
    story.likes--
    story.hasLiked = false
  } else {
    story.likes++
    story.hasLiked = true
  }
}

// Les données des cartes
const stories = ref([
  { id: 1, category: 'Femmes', title: 'Miriam Makeba', subtitle: 'Grammy awards 1966', date: '20.05.2025', likes: 5000, hasLiked: false, views: '72K', image: imageUnique },
  { id: 2, category: 'Sport', title: 'Sprint', subtitle: 'Ta Lou', date: '20.05.2025', likes: 1400, hasLiked: true, views: '14K', image: imageUnique },
  { id: 3, category: 'Littérature', title: 'Wole Soyinka', subtitle: 'Prix Nobel', date: '20.05.2025', likes: 1000, hasLiked: false, views: '2.5K', image: imageUnique, customClass: 'ring-4 ring-purple-500 ring-offset-2' }, // J'ai ajouté l'effet de bordure comme sur l'image
  { id: 4, category: 'Tourisme', title: 'Basilique Notre Dame...', subtitle: 'Joyau Architectural Mondial', date: '20.05.2025', likes: 5000, hasLiked: false, views: '12.5K', image: imageUnique },
  
  { id: 5, category: 'Sport', title: 'Sprint', subtitle: 'Ta Lou', date: '20.05.2025', likes: 5000, hasLiked: false, views: '58K', image: imageUnique },
  { id: 6, category: 'Littérature', title: 'Wole Soyinka', subtitle: 'Prix Nobel', date: '20.05.2025', likes: 5000, hasLiked: false, views: '2.5K', image: imageUnique },
  { id: 7, category: 'Femmes', title: 'Miriam Makeba', subtitle: 'Grammy awards 1966', date: '20.05.2025', likes: 1000, hasLiked: false, views: '19K', image: imageUnique },
  { id: 8, category: 'Tourisme', title: 'Basilique Notre Dame...', subtitle: 'Joyau Architectural Mondial', date: '20.05.2025', likes: 5000, hasLiked: false, views: '12.5K', image: imageUnique },

  { id: 9, category: 'Femmes', title: 'Miriam Makeba', subtitle: 'Grammy awards 1966', date: '20.05.2025', likes: 5000, hasLiked: false, views: '72K', image: imageUnique },
  { id: 10, category: 'Tourisme', title: 'Basilique Notre Dame...', subtitle: 'Joyau Architectural Mondial', date: '20.05.2025', likes: 5000, hasLiked: false, views: '12.5K', image: imageUnique },
  { id: 11, category: 'Sport', title: 'Sprint', subtitle: 'Ta Lou', date: '20.05.2025', likes: 5000, hasLiked: false, views: '14K', image: imageUnique },
  { id: 12, category: 'Sport', title: 'Sprint', subtitle: 'Ta Lou', date: '20.05.2025', likes: 5000, hasLiked: false, views: '140K', image: imageUnique },
])
</script>