<template>

    <div class = "min-h-screen bg-gray-50 font-sans pb-10">

        <header class = "bg-gradient-to-br from-[#eba111] via-[#e244b0] to-[#a429d6] pt-4 pb-48 text-white px-6 mb-6">
                 <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between mb-16">
          <div class="flex items-center gap-2">
            <img src ="/images/commun/logo_trans.png" class="tracking-tighter flex items-center gap-2">
   
            
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
          <h1 class="text-6xl md:text-8xl font-black mb-4 tracking-tight">TOURISME</h1>

          <button class="bg-white text-orange-500 px-6 py-3 rounded-full font-bold shadow-lg inline-flex items-center gap-2 hover:scale-105 transition">
            Une histoire au Hasard
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
              </div>
   
            

        </header>


       

        <div class = "max-w-7xl mx-auto">

              <div class = "bg-cover bg-[url('/images/Page_discovery/gradiant.png')] shadow-xl rounded-[40px] p-6  ">
                    <span class = "m-6 font-semibold text-[#543252] text-4xl">
                        <h1>Basilique Notre Dame de <br>
                          la Paix
                            </h1>
                    </span>
                        
                    <h2 class = "mb-4 text-[#543252] font-medium text-2xl">
                        Joyau Architectural
                    </h2>
                    <div class = "flex flex-nowrap mb-6 gap-4">
                       <span class = "text-black">
                        Tourisme

                       </span>

                     
                      <div class="top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                        <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span class="text-[10px] font-bold text-gray-600">{{ basilique.date }}</span>
                      </div>

                      <button  @click.stop="toggleLike(basilique)" 
                         class="flex items-center gap-1 hover:scale-105 transition active:scale-95"
                      >
                      <span class="opacity-90">{{ formatNumber(basilique.likes) }}</span>
                      <svg 
                        class="w-4 h-4 transition-colors" 
                        :class="basilique.hasLiked ? 'fill-black text-black' : 'fill-none stroke-white opacity-80'" 
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      </button>


                      <div class="flex items-center gap-1 opacity-80">
                        <span>{{ basilique.views }}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>




                    </div>



                  <div class = "flex flex-nowrap items-start  gap-8 mb-8">
                    <div class = "grid grid-cols-1 grid-flow-row gap-5 max-w-xl">
                      <div class ="flex backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 md:p-10 max-w-xl w-full  text-[#543252] mb-4">
                        
                        <div class = "grid grid-cols-2 grid-flow-row gap-y-5 gap-x-12 h-fit">
                          <div class = "flex items-center gap-2">
                            <img src = "/images/Page_discovery/marteau.svg"/>
                             <span>Construction</span>
                          </div>
                          <div>Hauteur totale : 158 m</div>


                         <div class = "flex items-center gap-2">
                             <img src = "/images/Page_discovery/cube.svg"/>
                             <span>Superficie</span>
                         </div>
                         <div>Année de consécration : 1990</div>

                         <div class = "flex items-center gap-2" >
                             <img src = "/images/Page_discovery/people.svg"/>
                             <span>Capacité</span>
                         </div>
                         <div>Capacité d'accueil : 18 000 </div>

                         <div class = "flex items-center gap-2" >
                             <img src = "/images/Page_discovery/cash.svg"/>
                             <span>Coût</span>
                         </div>
           


                          


                        </div>


                      </div>

                    <div class = "max-w-xl">uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                          consequat.  Ut enim ad minim veniam, quis nostrud exercitation uis nostrud 
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                          Ut enim ad minim veniam,odo uis nostrud exercitation ullamco laboris nisi
                           ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud 
                           exercitation uis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat.  Ut enim ad minim veniam, 
                           quis nostrud exerco

                              nostrud exercitation uis nostrud exercitation 
                              ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat.  Ut enim ad minim veniam,odo
                                 uis nostrud exercitation nostrud exercitation uis nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                   Ut enim ad minim veniam,odo uis nostrud exercitation
                      </div>
                  </div>

                    

                    <div class = "flex justify-end my-auto">

                    <img src = " /images/Page_discovery/vraie_basilique.png " />
                    </div>




                  </div>


               
   

                    

                

              </div>

        </div>
      



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

// IMAGES
const img_basilique = '/images/Page_discovery/basilique_tourisme.png'
const img_cascade = '/images/Page_discovery/cascade_man.png' 
const img_rocher = '/images/Page_discovery/rocher.png' 
const img_archeologie = '/images/Page_discovery/archeologie.png' 


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
const sites_touristiques = ref([
  { id: 1, image: img_basilique, date: '20.05.2025', likes: 1200, hasLiked: false, views: 2500 }, // Ajouté ici
  { id: 2, image: img_cascade, date: '20.05.2025', likes: 850, hasLiked: false, views: 1200 },   // Et ici
  { id: 3, image: img_rocher, date: '20.05.2025', likes: 4300, hasLiked: true, views: 8900 },
  { id: 4, image: img_archeologie, date: '20.05.2025', likes: 95, hasLiked: false, views: 450 },
])
const basilique = sites_touristiques.value[1]



</script>