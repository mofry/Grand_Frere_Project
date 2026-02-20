<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <header class="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <div class="flex items-center gap-2">
        <img src="/images/Pages_commencez_maintenant/grand_frere.png" alt="Grand Frère Logo" class="h-8" />
        <span class="font-bold text-[#C5A059] uppercase tracking-wider text-sm">Grand Frère</span>
      </div>
      
      <nav class="hidden md:flex items-center gap-6 text-xs font-medium text-gray-600">
        <a href="#" class="hover:text-black">Accueil</a>
        <a href="#" class="hover:text-black">La carte</a>
        <a href="#" class="hover:text-black">Discovery</a>
        <a href="#" class="hover:text-black">Écoles</a>
        <a href="#" class="hover:text-black">Parents</a>
        <a href="#" class="hover:text-black">Fournisseurs</a>
        <a href="#" class="hover:text-black">A propos</a>
        <a href="#" class="hover:text-black">FAQ</a>
      </nav>

      <div class="flex items-center gap-4">
        <button class="bg-gradient-to-r from-[#E6A57E] to-[#B06AB3] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
          Contactez-nous
        </button>
        <button class="flex items-center gap-2 text-xs font-medium text-gray-600">
          <div class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
            <i class="far fa-user text-[10px]"></i>
          </div>
          Se connecter
        </button>
      </div>
    </header>

    <main class="max-w-4xl mx-auto py-16 px-4">
      <h1 class="text-3xl md:text-4xl font-black text-center text-[#2D2D2D] mb-12 leading-tight">
        Proposez vos produits aux <br />
        écoles via notre solution <br />
        <span class="font-serif italic capitalize">GRAND FRÈRE</span>
      </h1>

      <div class="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 md:p-12">
        
        <div class="relative flex justify-between items-center mb-16 max-w-lg mx-auto">
          <div class="absolute h-[2px] bg-[#EBB143] w-full top-1/2 -translate-y-1/2 z-0"></div>
          
          <div class="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
            <div class="w-4 h-4 rounded-full border-2 border-[#EBB143] bg-white"></div>
            <span class="text-[10px] font-bold text-[#EBB143] text-center leading-tight">Informations<br>générales</span>
          </div>
          
          <div class="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
            <div class="w-4 h-4 rounded-full border-2 border-[#EBB143] bg-white"></div>
            <span class="text-[10px] font-bold text-gray-400 text-center leading-tight">Produits et<br>services</span>
          </div>
          
          <div class="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
            <div class="w-4 h-4 rounded-full border-2 border-[#EBB143] bg-white"></div>
            <span class="text-[10px] font-bold text-gray-400 text-center leading-tight">Conditions<br>commerciales</span>
          </div>
        </div>

        <h2 class="text-[#EBB143] font-bold text-sm mb-6 uppercase tracking-wide">Conditions commerciales</h2>
        
        <form @submit.prevent class="space-y-6">
          <div>
            <label class="block text-[11px] font-medium mb-2 uppercase">Mode de facturation *</label>
            <input type="text" class="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#EBB143]" />
          </div>

          <div>
            <label class="block text-[11px] font-medium mb-2 uppercase">Moyens de paiement acceptés *</label>
            <div class="relative">
              <div class="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 flex flex-wrap gap-2 items-center min-h-[48px]">
                <span class="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                  Mobiles Money <span class="text-gray-400">×</span>
                </span>
                <span class="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                  Virement <span class="text-gray-400">×</span>
                </span>
                <span class="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] flex items-center gap-1">
                  Chèque <span class="text-gray-400">×</span>
                </span>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">▼</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-[11px] font-medium mb-2 uppercase">Délai de paiement accordé *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#EBB143]" />
            </div>
            <div>
              <label class="block text-[11px] font-medium mb-2 uppercase">Délai moyen de livraison *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#EBB143]" />
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-medium mb-2 uppercase">Politique de reprise en cas de produit non conforme *</label>
            <textarea rows="4" class="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none focus:ring-1 focus:ring-[#EBB143]"></textarea>
          </div>

          <div class="flex justify-center pt-6">
            <button class="bg-gradient-to-r from-[#EBB143] to-[#B06AB3] text-white px-12 py-3 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-opacity">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </main>

    <footer class="bg-white pt-20 pb-10 px-8 border-t border-gray-50">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div class="flex items-center gap-2">
          <img src="/images/Pages_commencez_maintenant/grand_frere.png" alt="Grand Frère Logo" class="h-6 opacity-80" />
          <span class="font-bold text-[#C5A059] uppercase tracking-wider text-xs">Grand Frère</span>
        </div>

        <div class="grid grid-cols-3 gap-16">
          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-xs uppercase mb-1">Pages</h4>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">La carte</a>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">Ecoles</a>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">Parents</a>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">Vendeurs</a>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-xs uppercase mb-1">Aide</h4>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">A propos</a>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">FAQ</a>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="font-bold text-xs uppercase mb-1">Comptes</h4>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">S'inscrire</a>
            <a href="#" class="text-[11px] text-gray-500 hover:text-black">Se connecter</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Logique éventuelle pour gérer les étapes du formulaire
</script>

<style scoped>
/* Ajouts spécifiques si nécessaire, mais Tailwind couvre 99% des besoins ici */
</style>