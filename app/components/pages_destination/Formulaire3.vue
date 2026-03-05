<template>
  <div class="min-h-screen bg-[#FDFDFD] font-sans text-[#4A4A4A]">
    <nav class="flex items-center justify-between px-12 py-6 bg-white border-b border-gray-100">
      <div class="flex items-center gap-12">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold italic">G</div>
          <span class="font-bold text-gray-800 tracking-tight uppercase text-sm">Grand Frère</span>
        </div>
        
        <div class="hidden xl:flex items-center gap-6 text-[13px] font-medium text-gray-500">
          <a href="#" class="hover:text-orange-500">Accueil</a>
          <a href="#" class="hover:text-orange-500">La carte</a>
          <a href="#" class="hover:text-orange-500">Discovery</a>
          <a href="#" class="hover:text-orange-500">Écoles</a>
          <a href="#" class="hover:text-orange-500">Parents</a>
          <a href="#" class="hover:text-orange-500 font-semibold text-orange-500">Fournisseurs</a>
          <a href="#" class="hover:text-orange-500">À propos</a>
          <a href="#" class="hover:text-orange-500">FAQ</a>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-[#FAD9C1] text-[#D48247] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wide">
          Contactez-nous
        </button>
        <button class="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase">
          <span class="text-lg">👤</span> Se connecter
        </button>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h1 class="text-[40px] leading-[1.1] font-black text-gray-800 mb-4">
          Proposez vos produits aux<br />
          écoles via notre solution<br />
          <span class="uppercase tracking-[0.2em] text-3xl">Grand Frère</span>
        </h1>
      </div>

      <div class="bg-white rounded-[40px] shadow-sm border border-gray-100 p-16 max-w-4xl mx-auto">
        
        <div class="relative flex justify-between items-start mb-16 max-w-2xl mx-auto">
          <div class="absolute top-4 left-0 w-full h-[2px] bg-gray-200 -z-0">
             <div class="w-1/2 h-full bg-orange-400"></div> </div>

          <div class="relative z-10 flex flex-col items-center gap-3">
            <div class="w-8 h-8 rounded-full border-[3px] border-orange-400 bg-white"></div>
            <span class="text-[10px] font-bold text-orange-400 text-center uppercase leading-tight">Informations<br/>générales</span>
          </div>

          <div class="relative z-10 flex flex-col items-center gap-3">
            <div class="w-8 h-8 rounded-full border-[3px] border-orange-400 bg-white"></div>
            <span class="text-[10px] font-bold text-gray-700 text-center uppercase leading-tight">Produits et<br/>services</span>
          </div>

          <div class="relative z-10 flex flex-col items-center gap-3">
            <div class="w-8 h-8 rounded-full border-[3px] border-gray-200 bg-white"></div>
            <span class="text-[10px] font-bold text-gray-400 text-center uppercase leading-tight">Conditions<br/>commerciales</span>
          </div>
        </div>

        <div class="space-y-8">
          <h3 class="text-orange-500 font-bold text-sm tracking-wide">Produits et services proposés</h3>

          <div class="space-y-6">
            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Types de produits disponibles (fruits, légumes, viandes, boissons, emballages, etc.) *</label>
              <input type="text" class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-300 transition-colors">
            </div>

            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Origines des produits *</label>
              <div class="relative">
                <select class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer">
                  <option>Locale</option>
                  <option>Importée</option>
                </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs">▼</div>
              </div>
            </div>

            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Principaux clients actuels (optionnel) *</label>
              <input type="text" class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-300">
            </div>

            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Volume de production mensuel disponible *</label>
              <input type="text" class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-300">
            </div>

            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Délai moyen de livraison *</label>
              <input type="text" class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-300">
            </div>

            <div class="group">
              <label class="block text-[11px] font-bold text-gray-600 mb-2">Minimum de commande accepté *</label>
              <input type="text" class="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-300">
            </div>
          </div>

          <div class="flex justify-center pt-10">
            <NuxtLink to ="/formulaire4" class="px-16 py-3 border-2 border-gray-300 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all text-sm">
              Suivant
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-white border-t border-gray-100 mt-12 py-16">
      <div class="max-w-6xl mx-auto px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold italic text-[10px]">G</div>
          <span class="font-bold text-gray-800 uppercase text-xs">Grand Frère</span>
        </div>

        <div class="grid grid-cols-3 gap-24">
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-sm">Pages</h4>
            <ul class="text-xs text-gray-500 space-y-2">
              <li class="hover:text-orange-500 cursor-pointer text-sm">La carte</li>
              <li class="hover:text-orange-500 cursor-pointer text-sm">Ecoles</li>
              <li class="hover:text-orange-500 cursor-pointer text-sm">Parents</li>
              <li class="hover:text-orange-500 cursor-pointer text-sm">Vendeurs</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-sm">Aide</h4>
            <ul class="text-xs text-gray-500 space-y-2">
              <li class="hover:text-orange-500 cursor-pointer text-sm">A propos</li>
              <li class="hover:text-orange-500 cursor-pointer text-sm">FAQ</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-gray-800 text-sm">Comptes</h4>
            <ul class="text-xs text-gray-500 space-y-2">
              <li class="hover:text-orange-500 cursor-pointer text-sm">S'inscrire</li>
              <li class="hover:text-orange-500 cursor-pointer text-sm">Se connecter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Pas de logique nécessaire pour le template pur, 
// mais prêt pour vos variables réactives (v-model).
</script>

<style scoped>
/* Tailwind s'occupe de tout, pas besoin de CSS personnalisé ici */
</style>