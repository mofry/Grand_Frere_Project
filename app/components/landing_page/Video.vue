<script setup>
import { ref } from 'vue'

const slider = ref(null)
const activeIndex = ref(0)

// Fonction utilitaire pour mettre toutes les vidéos en pause
const pauseAllVideos = () => {
  if (slider.value) {
    const videos = slider.value.querySelectorAll('video')
    videos.forEach((video) => {
      video.pause()
    })
  }
}

// Défilement vers l'index ciblé
const scrollToVideo = (index) => {
  pauseAllVideos()
  activeIndex.value = index
  if (slider.value) {
    const children = slider.value.children
    if (children[index]) {
      children[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      })
    }
  }
}

// Bascule via les flèches
const toggleVideo = () => {
  const newIndex = activeIndex.value === 0 ? 1 : 0
  scrollToVideo(newIndex)
}

// Détection du scroll manuel pour mettre en pause et mettre à jour l'index actif
const handleScroll = () => {
  if (!slider.value) return

  const scrollLeft = slider.value.scrollLeft
  const itemWidth = slider.value.offsetWidth
  const newIndex = Math.round(scrollLeft / itemWidth)

  if (newIndex !== activeIndex.value) {
    pauseAllVideos()
    activeIndex.value = newIndex
  }
}
</script>

<template>
  <div class="mt-20 flex flex-col items-center pb-20">
    
    <h1 class="text-4xl font-bold text-left mb-4">
      La carte 
      <img src="/images/Page_vidéo1/logo_complet.png" alt="Piece" class="left-1 inline-block w-80 h-auto align-middle ml-2">
      <br />
      comment ça fonctionne ?
    </h1>

    <div class="relative w-full max-w-[800px]">
      
      <!-- Ajout de l'événement @scroll="handleScroll" -->
      <div 
        ref="slider" 
        @scroll="handleScroll"
        class="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth hide-scrollbar"
      >
        
        <div class="snap-center shrink-0 w-full flex justify-center">
          <video 
            controls 
            poster="/images/Page_vidéo1/Frame_14.png" 
            class="w-full aspect-video object-cover rounded-2xl"
          >
            <source src="/videos/grand_frere_video.mp4" type="video/mp4">
          </video>
        </div>

        <div class="snap-center shrink-0 w-full flex justify-center">
          <video 
            controls 
            class="w-full aspect-video object-cover rounded-2xl"
          >
            <source src="/videos/pour_les_parents.mp4" type="video/mp4">
          </video>
        </div>

      </div>

      <button 
        @click="toggleVideo" 
        class="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition z-10"
        aria-label="Vidéo précédente"
      >
        ❮
      </button>

      <button 
        @click="toggleVideo" 
        class="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition z-10"
        aria-label="Vidéo suivante"
      >
        ❯
      </button>

    </div>

    <div class="flex justify-center gap-2 mt-3">
      <span 
        @click="scrollToVideo(0)"
        :class="['h-3 rounded-full cursor-pointer transition-all', activeIndex === 0 ? 'bg-orange-500 w-8' : 'bg-gray-300 w-3']"
      ></span>
      <span 
        @click="scrollToVideo(1)"
        :class="['h-3 rounded-full cursor-pointer transition-all', activeIndex === 1 ? 'bg-orange-500 w-8' : 'bg-gray-300 w-3']"
      ></span>
    </div>

    <NuxtLink 
      to="/commencez_now" 
      class="mt-[50px] w-[295px] h-[60px] bg-gradient-to-r from-[#e67e22] to-[#a55eea] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition"
    >
      Commencez maintenant
    </NuxtLink>

  </div>
</template>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>