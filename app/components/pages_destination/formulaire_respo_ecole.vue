<script setup>
// C'est ici que le "cerveau" de ta page habite
const handleSubmit = () => {
  alert("Bravo ! Tu as déclenché ta première fonction JavaScript.");
};
</script>
<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    <header class="flex justify-between items-center px-10 py-4 shadow-sm">
      <div class="flex items-center gap-2">
         <span class="font-bold text-orange-600 text-xl italic">GRAND FRÈRE</span>
      </div>
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <a href="#">Accueil</a>
        <a href="#">La carte</a>
        <a href="#">Discovery</a>
        <a href="#">Écoles</a>
        <a href="#">Parents</a>
        <a href="#">Fournisseurs</a>
      </nav>
      <button class="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">Contactez-nous</button>
    </header>

    <main class="max-w-5xl mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold mb-4">Rejoignez le réseau d’écoles<br>partenaires <span class="italic text-orange-600">GRAND FRÈRE</span></h1>
        <p class="text-orange-500 font-bold text-xl">Besoin de plus d’informations ?<br>Contactez-nous !</p>
      </div>

      <div class="bg-white border border-gray-100 shadow-2xl rounded-[3rem] p-10 md:p-16">
        <form @submit.prevent="handleSubmit">
          
          <h3 class="text-orange-500 font-bold mb-6">Informations sur votre école</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label class="block text-sm font-semibold mb-2">Commune *</label>
              <select class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200">
                <option>Choisir une commune</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Nom de l’établissement *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Nombre d’élèves *</label>
              <select class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
                <option>Choisir une tranche</option>
              </select>
            </div>
          </div>

          <h3 class="text-orange-500 font-bold mb-6 border-t pt-8">Informations du demandeur</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Civilité *</label>
              <select class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
                <option>Choisir une civilité</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Nom *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Prénoms *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label class="block text-sm font-semibold mb-2">Numéro de téléphone *</label>
              <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">E-mail Professionnel *</label>
              <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Fonction *</label>
              <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm" />
            </div>
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold mb-2">Message</label>
            <textarea rows="5" class="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm"></textarea>
          </div>

          <div class="flex items-start gap-3 mb-10">
            <input type="checkbox" class="mt-1 accent-orange-500 h-4 w-4" id="consent" />
            <label for="consent" class="text-xs text-gray-500 leading-tight">
              J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
            </label>
          </div>

          <div class="flex justify-center">
            <NuxtLink to ="/formulaire2" class="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-4 px-20 rounded-xl shadow-lg hover:scale-105 transition-transform">
              Envoyer
            </NuxtLink>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>