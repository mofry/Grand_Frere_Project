<template>
  <div class="min-h-screen w-full bg-white relative font-sans py-20 px-6 overflow-hidden">
    
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -z-10 translate-x-[-20%] translate-y-[-20%]"></div>
    <div class="absolute top-[20%] right-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -z-10 translate-x-[20%]"></div>

    <div class="max-w-6xl mx-auto flex flex-col items-center">
      
      <div class="w-fit px-6 py-1 rounded-full border border-pink-200 bg-pink-50 text-gray-800 font-medium text-sm mb-6">
        A Propos
      </div>

      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        À propos de <span class="uppercase tracking-wider">Grand Frère</span>
      </h2>

      <p class="text-gray-500 text-center leading-relaxed max-w-4xl mb-16">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </p>

      <div class="w-full relative z-20 mb-[-80px]"> <div class="bg-gradient-to-r from-[#d97706] via-[#b45309] to-[#a21caf] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-wrap justify-around items-center gap-8 border border-white/20 relative">
          
          <div class="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div class="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div class="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div class="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full opacity-60"></div>

          <div class="flex flex-col items-center gap-4 text-white group">
            <img src="/images/Page_apropos/medaille.svg" alt="Valeur 1" class="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" />
            <span class="font-bold text-lg">Valeur 1</span>
          </div>

          <div class="flex flex-col items-center gap-4 text-white group">
            <img src="/images/Page_apropos/medaille.svg" alt="Valeur 2" class="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" />
            <span class="font-bold text-lg">Valeur 2</span>
          </div>

          <div class="flex flex-col items-center gap-4 text-white group">
            <img src="/images/Page_apropos/medaille.svg" alt="Valeur 3" class="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" />
            <span class="font-bold text-lg">Valeur 3</span>
          </div>

          <div class="flex flex-col items-center gap-4 text-white group">
            <img src="/images/Page_apropos/medaille.svg" alt="Valeur 4" class="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" />
            <span class="font-bold text-lg">Valeur 4</span>
          </div>
        </div>
      </div>

      <div class="w-full bg-white/40 backdrop-blur-md rounded-[3rem] p-12 md:p-20 pt-32 shadow-2xl border border-white relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div class="flex flex-col gap-4">
            <h3 class="text-[#d97706] text-2xl font-bold">Notre vision</h3>
            <p class="text-gray-500 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div class="flex flex-col gap-4 text-right items-end">
            <h3 class="text-[#d97706] text-2xl font-bold text-right">Notre mission</h3>
            <p class="text-gray-500 leading-relaxed text-right">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-12">
          <a 
            href="mailto:prunel@grandfrere.com?subject=Demande%20d'aide&"
            class="px-10 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#a21caf] text-white font-bold shadow-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Contactez-nous
          </a>
        </div>
      </div>

    </div>
  </div>
</template>


