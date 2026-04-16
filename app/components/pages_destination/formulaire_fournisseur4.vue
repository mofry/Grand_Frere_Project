<template>
  <div class="min-h-screen bg-[#FDF8F9] font-sans text-[#4A3E3E]">
    <nav class="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <span class="text-amber-600 font-bold">GF</span>
          </div>
          <span class="font-bold text-xl tracking-tight text-[#8B5E3C]">GRAND FRÈRE</span>
        </div>

        <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" class="hover:text-amber-600">Accueil</a>
          <a href="#" class="hover:text-amber-600">La carte</a>
          <a href="#" class="hover:text-amber-600">Discovery</a>
          <a href="#" class="hover:text-amber-600">Écoles</a>
          <a href="#" class="hover:text-amber-600">Parents</a>
          <a href="#" class="hover:text-amber-600">Fournisseurs</a>
          <a href="#" class="hover:text-amber-600">A propos</a>
          <a href="#" class="hover:text-amber-600">FAQ</a>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-gradient-to-r from-[#E67E22] to-[#BC4E9C] text-white px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition">
          Contactez-nous
        </button>
        <button class="flex items-center gap-2 text-sm font-medium text-gray-700">
          <div class="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          Se connecter
        </button>
      </div>
    </nav>

    <main class="max-w-4xl mx-auto pt-16 pb-12 px-4 text-center">
      <h1 class="text-4xl font-extrabold mb-4 text-[#3D2B24]">Formulaire envoyé !</h1>
      <p class="text-gray-500 mb-10 leading-relaxed">
        Merci beaucoup pour votre intérêt et pour l'envoi de votre formulaire !<br />
        Votre démarche est bien enregistrée.
      </p>

      <div class="relative w-48 h-48 mx-auto mb-12">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-amber-50 rounded-full blur-2xl opacity-50"></div>
        <div class="relative flex justify-center">
          <div class="text-8xl">📩</div>
          <div class="absolute -top-4 -right-2 bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white font-bold">@</div>
        </div>
      </div>

      <div class="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-10 text-left max-w-2xl mx-auto border border-gray-50">
        <div class="space-y-10">
          <div class="flex gap-6">
            <div class="flex-shrink-0 w-10 h-10 bg-[#E67E22] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <p class="font-bold text-[#3D2B24] mb-4">Nous étudions actuellement votre demande avec attention.</p>
              <p class="text-gray-600 leading-relaxed">
                <span class="font-bold">Si nécessaire</span>, notre équipe vous contactera par e-mail ou par téléphone <span class="font-bold underline decoration-amber-500 decoration-2">dans un délai de 72H</span> pour recueillir des informations complémentaires.
              </p>
            </div>
          </div>

          <div class="flex gap-6">
            <div class="flex-shrink-0 w-10 h-10 bg-[#E67E22] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <p class="text-gray-600 leading-relaxed">
                Une fois cette courte étape de vérification terminée, vous recevrez un lien personnel par mail pour finaliser votre inscription.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button class="mt-12 bg-gradient-to-r from-[#E67E22] to-[#BC4E9C] text-white px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
        OK, bien compris !
      </button>
    </main>
  </div>
</template>

<script setup>
// Pas de logique nécessaire pour le moment
</script>

<style>
/* Ajout d'une police douce si nécessaire */
body {
  -webkit-font-smoothing: antialiased;
}
</style>