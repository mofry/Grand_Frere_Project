<template>
  <div class="min-h-screen w-full pl-20 p-10 lg:pt-16 pb-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2a0e0e] via-[#000000] via-40% to-[#1a0b2e] relative overflow-hidden flex items-start">

    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] -z-10"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start z-10 w-full">
      
      <div class="flex flex-col items-start text-left font-nirmala pt-0 relative z-20">
        <div class="w-fit px-4 py-1.5 rounded-xl border border-rose-300/30 bg-rose-50 text-gray-800 font-medium text-[20px] mb-6 mt-0">
          Discovery
        </div>

        <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-8 mt-0 text-white">
          <span class="bg-gradient-to-r from-[#e67e22] via-[#a55eea] to-white/80 bg-clip-text text-transparent">
            Scanne et voyage. Chaque monument,<br>
             chaque personnage,
             une histoire <br>
             captivante à découvrir.
          </span>
        </h1>

        <div class="max-w-md mb-8 text-white text-sm font-mono backdrop-blur-sm opacity-80">
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   minim veniam, quis nostrud exercitation uis nostrud exercitation ullamco laboris nisi ut aliquip
        </div>

        <NuxtLink to="/discovery" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-8 py-3 rounded-xl text-white font-bold shadow-lg shadow-orange-900/30 hover:opacity-90 transition-all">
          Découvrir des histoires
        </NuxtLink>
      </div>

      <div class="relative h-[600px] w-full flex items-center justify-end">
        
        <div class="absolute left-0 top-1/4 z-30 transform -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
           <img 
             src="/images/Page_discovery/Luffy_violet.png" 
             alt="Carte Discovery" 
             class="w-[380px] h-auto rounded-3xl shadow-2xl"
           >
        </div>

        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
          <path d="M 380,220 L 460,220 L 460,260 L 520,260" 
                fill="none" stroke="white" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
          <circle cx="520" cy="260" r="3" fill="white" opacity="0.6" />
          
          <path d="M 350,340 L 350,450 L 550,450" 
                fill="none" stroke="white" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
          <circle cx="550" cy="450" r="3" fill="white" opacity="0.6" />
        </svg>

        <div class="relative z-10 w-72 flex flex-col gap-2 p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
          <div v-for="(item, index) in categories" :key="index" 
               class="px-5 py-3 rounded-xl bg-white/5 text-white text-sm flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer group">
            <span class="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-all"></span>
            {{ item }}
          </div>
        </div>

        <div class="absolute mb-6 bottom-10 right-0 w-72 p-4 rounded-2xl bg-[#3b2d4a]/60 border border-white/10 backdrop-blur-md flex items-center gap-4 shadow-xl z-20">
           <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-black font-black text-xl shadow-inner shrink-0">
              QR
           </div>
           <div class="text-[13px] text-white/90 leading-tight">
              <span class="font-bold block mb-1">Un code QR à scanner</span>
              pour découvrir des histoires fascinantes et booster ta culture G !
           </div>
        </div>

      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit z-20 pointer-events-none">
      <img 
        src="/images/Page_discovery/enfants.png" 
        alt="enfants" 
        class="block h-auto max-w-[90vw] lg:max-w-full align-bottom"
      >
    </div>

  </div>
</template>

<script setup>
const categories = ['Femmes', 'Littérature', 'Personnages animés', 'Sport', 'Tourisme', 'Colonisation / décolonisation', 'Science']
</script>