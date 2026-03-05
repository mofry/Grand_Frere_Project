<template>
  <div class="min-h-screen bg-white font-sans overflow-hidden relative">
    
    <div class="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#f29915] via-[#ea6075] to-[#e77695]"></div>
      <div class="absolute -bottom-[20%] -right-[10%] w-[150%] h-[80%] bg-white transform -rotate-[15deg] origin-bottom-right"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-[120vh] z-[100] pointer-events-none overflow-hidden">
      <img 
        :src="imageCoin" 
        alt="Pièces 3D" 
        class="w-full h-full object-cover" 
      />
    </div>

    <header class="relative z-50 max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-white">
      <div class="flex items-center gap-2">
        <div class="font-bold text-xl uppercase tracking-tighter flex items-center gap-2">
          <span class="w-6 h-6 bg-white rounded-full inline-block"></span>
          Grand Frère
        </div>
      </div>
      
      <nav class="hidden lg:flex gap-8 text-sm font-medium">
        <NuxtLink to="#" class="hover:opacity-80 transition">L'application</NuxtLink>
        <NuxtLink to="#" class="hover:opacity-80 transition">Fonctionnalités</NuxtLink>
        <NuxtLink to="#" class="hover:opacity-80 transition">Avantages</NuxtLink>
        <NuxtLink to="#" class="hover:opacity-80 transition">A propos</NuxtLink>
        <NuxtLink to="#" class="hover:opacity-80 transition">FAQ</NuxtLink>
      </nav>
      
      <div class="flex items-center gap-4">
        <NuxtLink to="#" class="border border-white/50 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition">Contactez-nous</NuxtLink>
        <button class="flex items-center gap-2 text-sm hover:opacity-80 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Se connecter
        </button>
      </div>
    </header>

    <main class="relative z-20 max-w-7xl mx-auto px-6 pt-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <div class="flex flex-col items-start justify-center">
        <span class="bg-white text-gray-800 px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm mb-6">
          L'application
        </span>
        
        <h1 class="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod incididunt
        </h1>
        
        <p class="text-[#4a2b2b] font-medium text-lg max-w-lg mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt, smod tempor incididunt
        </p>
        
        <div class="flex flex-wrap gap-4 mb-8">
          <button class="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition shadow-lg">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.82 3.59-.73 1.55.11 2.8.74 3.65 1.91-3.09 1.81-2.56 5.86.38 7.07-.63 1.54-1.58 3.12-2.7 4.19v-.27h-.27zm-3.32-14.4c.15-1.74-1.21-3.41-2.92-3.56-.25 1.83 1.48 3.45 2.92 3.56z"/></svg>
            <div class="text-left flex flex-col justify-center">
              <span class="text-[9px] leading-none text-gray-300">Download on the</span>
              <span class="text-sm font-bold leading-tight">App Store</span>
            </div>
          </button>
          
          <button class="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition shadow-lg">
            <svg class="w-6 h-6" viewBox="0 0 512 512"><path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div class="text-left flex flex-col justify-center">
              <span class="text-[9px] leading-none text-gray-300">GET IT ON</span>
              <span class="text-sm font-bold leading-tight">Google Play</span>
            </div>
          </button>
        </div>
        
        <button class="bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-black hover:scale-105 transition">
          Télécharger l'App
        </button>
      </div>

      <div class="relative min-h-[500px] hidden md:flex justify-center items-center">
        <img src="/images/Page_app/phone.png" 
          alt="Téléphone App" 
          class="absolute top-0 right-[25%] w-[320px] z-10 drop-shadow-2xl" 
        />
        
        <img src="/images/Page_app/carte.png" 
          alt="Carte Bancaire" 
          class="absolute bottom-[5%] -right-[5%] w-[380px] z-20 transform rotate-[15deg] drop-shadow-2xl" 
        />
      </div>
    </main>

    <section class="relative z-20 bg-white py-20 mt-10">
      <div class="max-w-6xl mx-auto px-6">
        
        <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-20">
          L'app et la carte <span class="font-serif text-[#b67a3d]">GRAND FRÈRE</span> ,<br>
          comment ça fonctionne ?
        </h2>

        <div class="relative">
          
          <div class="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            
            <div v-for="step in 4" :key="step" class="flex flex-col items-center text-center bg-white px-4">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#db8231] to-[#b15827] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                {{ step }}
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-3">
                étape {{ step }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
// Remplace ces chemins par ceux de tes propres images
const imageCoin = '/images/Page_app/bg_coin.png'
const imageTelephone = '/images/ton_telephone.png'; 
const imageCarte = '/images/ta_carte.png';
</script>