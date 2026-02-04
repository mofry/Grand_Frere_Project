<template>
  <div class="min-h-screen w-full bg-white relative font-nirmala py-20 px-4 md:px-10 overflow-hidden">
    
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -z-10"></div>

    <div class="max-w-6xl mx-auto flex flex-col items-center gap-8">

      <div class="w-fit px-8 py-1.5 rounded-full border border-rose-300 bg-rose-50 text-gray-800 font-medium text-lg shadow-sm">
        Ecoles
      </div>

      <div class="w-full bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-10 lg:p-16 text-center relative">
        
        <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          La carte <span class="text-[#bf8c2c] uppercase">Grand Frère</span> , l’outil innovant d’une <br class="hidden lg:block">
          école connectée à l’avenir.
        </h1>

        <p class="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#a21caf] text-white font-bold shadow-lg hover:opacity-90 transition-all hover:scale-105">
            Devenir une école Partenaire
          </button>
          
          <button class="px-8 py-3.5 rounded-xl bg-[#d97706] text-white font-bold shadow-lg hover:bg-[#b45309] transition-all hover:scale-105">
            Voir la liste des écoles Partenaires
          </button>
        </div>

      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div class="bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-10 lg:p-12 flex flex-col justify-center h-full">
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="text-[#bf8c2c]">Maîtrise des flux <br> financiers</span> au sein de <br> vos établissements
          </h3>
          <p class="text-gray-600 leading-relaxed">
            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-10 lg:p-12 flex flex-col justify-center h-full text-right items-end">
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center justify-end gap-3 text-gray-800 font-medium">
              Simplification de la gestion des repas
              <span class="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
            </li>
            <li class="flex items-center justify-end gap-3 text-gray-800 font-medium">
              Sécurité des transactions
              <span class="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
            </li>
            <li class="flex items-center justify-end gap-3 text-gray-800 font-medium">
              Lien renforcé avec les parents
              <span class="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
            </li>
          </ul>

          <h3 class="text-xl lg:text-2xl font-bold text-[#a21caf] mb-4 leading-tight">
            La sécurité et la transparence, <br>
            au service de vos élèves.
          </h3>
          
          <p class="text-gray-600 leading-relaxed text-sm lg:text-base max-w-md">
            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.
          </p>

        </div>

      </div>

    </div>
  </div>
</template>