<template>
  <div class="min-h-screen w-full p-6 lg:p-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2a0e0e] via-[#000000] via-40% to-[#1a0b2e] relative overflow-hidden flex items-center">

    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] -z-10"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10 w-full">
      
      <div class="flex flex-col items-start text-left font-nirmala relative z-20">
        <div class="w-fit px-4 py-1.5 rounded-xl border border-rose-300/30 bg-rose-500/10 text-rose-200 font-medium text-[20px] mb-6 -mt-20">
          Discovery
        </div>

        <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-8">
          <span class="bg-gradient-to-r from-[#e67e22] via-[#a55eea] to-white/80 bg-clip-text text-transparent">
            Scanne et voyage.Chaque monument,<br>
             chaque personnage,
             une histoire <br>
             captivante à découvrir.
          </span>
        </h1>

        <div class="border border-blue-400/30 bg-blue-900/10 p-4 rounded-lg max-w-md mb-8 text-blue-200/80 text-sm font-mono backdrop-blur-sm">
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. minim veniam...
        </div>

        <NuxtLink to="/Commencez" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-8 py-3 rounded-xl text-white font-bold shadow-lg shadow-orange-900/30 hover:opacity-90 transition-all">
          Découvrir des histoires
        </NuxtLink>
      </div>


      <div class="relative h-[600px] w-full flex items-center justify-end">
        
        <div class="absolute left-0 top-1/4 z-30 transform -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
           <div class="w-[380px] h-[240px] rounded-3xl bg-gradient-to-br from-[#9b5de5] to-[#5a189a] border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between p-6">
              <div class="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              <div class="flex justify-between items-start relative z-10">
                 <div class="bg-orange-400 text-white font-bold text-xs px-2 py-1 rounded-full border-2 border-white">GF</div> <div class="text-right text-white/80 text-xs font-mono">
                    2345 6489 6340 7324 <br>
                    <span class="text-[10px] opacity-70">EXP 08/27</span>
                 </div>
              </div>

              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                 <span class="text-6xl font-black text-white/10 select-none">LUFFY</span>
              </div>

              <div class="text-white relative z-10">
                 <div class="font-bold text-lg tracking-widest">MONKEY D. LUFFY</div>
                 <div class="text-[10px] text-white/60 leading-tight mt-1 max-w-[80%]">
                    Modèle J-10. Protagoniste du manga One Piece. Capitaine de l'équipage du Chapeau de Paille.
                 </div>
              </div>
              
              <div class="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-md"></div>
           </div>
        </div>


        <div class="relative z-10 w-72 flex flex-col gap-2 p-3 rounded-2xl bg-[#3b2d4a]/40 border border-white/10 backdrop-blur-md shadow-xl">
          
          <div v-for="(item, index) in categories" :key="index" 
               class="group w-full text-left px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 text-white transition-all cursor-pointer flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white group-hover:shadow-[0_0_8px_white] transition-all"></span>
            <span class="font-light text-sm tracking-wide">{{ item }}</span>
          </div>

        </div>

        <div class="absolute -bottom-10 right-10 w-64 p-4 rounded-xl bg-[#3b2d4a]/60 border border-white/10 backdrop-blur-md flex items-center gap-4 shadow-lg">
           <div class="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center text-black font-bold text-xs">QR</div>
           <div class="text-xs text-white/80">
              <strong class="text-white block mb-1">Un code QR à scanner</strong>
              pour découvrir des histoires fascinantes et booster ta culture G !
           </div>
        </div>

        <svg class="absolute inset-0 pointer-events-none z-0 opacity-40" width="100%" height="100%">
           <path d="M 380 200 L 450 200" stroke="white" stroke-width="1" stroke-dasharray="4 4" fill="none" />
           <circle cx="450" cy="200" r="2" fill="white" />

           <path d="M 350 350 L 350 450 L 480 450" stroke="white" stroke-width="1" stroke-dasharray="4 4" fill="none" />
           <circle cx="480" cy="450" r="2" fill="white" />
        </svg>

      </div>

    </div>
  </div>
</template>

<script setup>
// Les données pour la liste, exactement comme sur l'image
const categories = [
  'Femmes',
  'Littérature',
  'Personnages animés',
  'Sport',
  'Tourisme',
  'Colonisation / décolonisation',
  'Science'
]
</script>