<script setup>
const activites = [
  {
    id: 1,
    intitule: "Atelier de Robotique",
    etablissement: "Lycée International",
    date: "20.10.2025",
    image: "/images/Page_liste_ecoles/ecole1.png" 
  },
  {
    id: 2,
    intitule: "Cours d'Informatique",
    etablissement: "Collège Moderne",
    date: "21.10.2025",
    image: "/images/Page_liste_ecoles/ecole2.png"
  },
  {
    id: 3,
    intitule: "Espace de Lecture",
    etablissement: "Primaire Excellence",
    date: "22.10.2025",
    image: "/images/Page_liste_ecoles/ecole3.png"
  }
]
</script>

<template>

  <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden">

    <nav class="relative z-50 w-full p-6 bg-white flex justify-between items-center shadow-sm">
      <img src="/images/Page_vidéo1/logo_complet.png" />
      <div class="flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-orange-500 transition">Accueil</NuxtLink>
        <NuxtLink to="/carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
        <NuxtLink to="/discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
        <NuxtLink to="/ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
        <NuxtLink to="/parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
        <NuxtLink to="/Fournisseurs" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
        <NuxtLink to="/A propos" class="hover:text-orange-500 transition">A propos</NuxtLink>
        <NuxtLink to="/FAQ" class="hover:text-orange-500 transition">FAQ</NuxtLink>
        
        <button class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Contactez-nous
        </button>

        <div class="flex items-center gap-2 cursor-pointer group transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-800 group-hover:text-orange-500 transition-colors">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"/>
            <path d="M17 18C17 15.2386 14.7614 13 12 13C9.23858 13 7 15.2386 7 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-[16px] font-medium text-gray-800 group-hover:text-orange-500 transition-colors">
            Se connecter
          </span>
        </div>
      </div>
    </nav>

    <main class="relative w-full flex flex-col items-center pt-10 pb-20">

      <div class="relative z-10 flex flex-col items-center gap-10 w-full max-w-6xl px-4">
        
        <h2 class="font-bold text-2xl text-slate-800 flex items-center justify-center gap-8 flex-wrap">
          Le réseau d'écoles partenaires 
          <img src="/images/Page_liste_ecoles/logo.png" class="h-8" />
        </h2>

    <div class="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
      <div class="flex justify-between items-center mb-8">
    <h3 class="text-xl font-bold text-gray-800">Journal des activités</h3>
    <div class="relative flex items-center">
      <input type="text" placeholder="Rechercher une activité" class="bg-gray-100 rounded-full py-2 px-10 text-sm focus:outline-none w-64">
      <span class="absolute left-3 text-gray-400">🔍</span>
      <span class="ml-4 text-gray-400 cursor-pointer">⚙️</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="ecole in activites" :key="ecole.id" class="border border-gray-100 rounded-2xl p-3">
      <div class="bg-gray-200 h-44 rounded-xl mb-4 overflow-hidden">
        <img :src="ecole.image" :alt="ecole.intitule" class="w-full h-full object-cover" />
      </div>
      <div class="flex justify-between items-start">
        <p class="font-bold text-sm">{{ ecole.intitule }}</p>
        <button class="text-[10px] border border-gray-300 px-2 py-1 rounded flex items-center gap-1">
          Voir plus ↗
        </button>
      </div>
      <div class="flex justify-between text-[11px] text-gray-400 mt-6 font-medium">
        <span>{{ ecole.etablissement }}</span>
        <span>{{ ecole.date }}</span>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-8">
    <button class="border border-gray-800 rounded-lg px-6 py-2 text-sm font-bold hover:bg-gray-50">
      Chargez plus d'activités
    </button>
  </div>
</div>
        <div class="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 p-8">
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-xl font-bold text-gray-800">Liste des écoles partenaires</h3>
            <div class="relative flex items-center">
              <input type="text" placeholder="Rechercher une école" class="bg-gray-100 rounded-full py-2 px-10 text-sm focus:outline-none w-64">
              <span class="absolute left-3 text-gray-400">🔍</span>
              <span class="ml-4 text-gray-400 cursor-pointer">⚙️</span>
            </div>
          </div>

          <table class="w-full text-left text-sm">
            <thead>
              <tr class="text-gray-400 border-b border-gray-50">
                <th class="pb-4 font-bold uppercase text-[10px]">Nom de l'établissement</th>
                <th class="pb-4 font-bold uppercase text-[10px]">Commune</th>
                <th class="pb-4 font-bold uppercase text-[10px]">Date récente activité</th>
                <th class="pb-4 font-bold uppercase text-[10px] text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" :key="i" class="border-b border-gray-50">
                <td class="py-4 font-medium text-gray-700">
                  <span class="text-gray-300 mr-2">{{ i }}.</span> Nom de l'établissement
                </td>
                <td class="py-4 text-gray-500">Marcory</td>
                <td class="py-4 text-gray-500">20.10.2025</td>
                <td class="py-4">
                  <div class="flex justify-center">
                    <NuxtLink to =/liste2 class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                        Voir la fiche <span class="bg-black text-white rounded p-0.5 text-[8px]">📄</span>
                      
                    </NuxtLink>

                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex justify-end gap-4 mt-6 text-xs font-bold">
            <span class="text-gray-300">1</span>
            <span class="text-gray-800 underline">2</span>
            <span class="text-gray-300">3 - 60</span>
          </div>
        </div>

      </div>

    </main>

    <footer class="bg-white w-full py-12 px-20 border-t border-gray-100">
      <div class="max-w-6xl mx-auto flex justify-between">
        <div>
          <img src="/images/Page_vidéo1/logo_complet.png" class="h-8" />
        </div>
        <div class="grid grid-cols-3 gap-20">
          <div>
            <h4 class="font-bold mb-4">Pages</h4>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>La carte</li>
              <li>Discovery</li>
              <li>Écoles</li>
              <li>Parents</li>
              <li>Fournisseurs</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Aide</h4>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>A propos</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Comptes</h4>
            <ul class="text-sm text-gray-500 space-y-2">
              <li>S'inscrire</li>
              <li>Se connecter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>