<template>
  <div class="min-h-screen w-full bg-slate-50 relative overflow-hidden font-sans">

    <nav class="relative z-50 w-full p-6 bg-white flex justify-between items-center shadow-sm">
                    <NuxtLink to="/" class="hover:text-orange-500 transition">
                        <img src="/images/commun/logo_complet.png" alt="Logo Grand Frère" class="w-32" />
                    </NuxtLink>
       
      <div class="flex items-center space-x-6">
        <NuxtLink to="/" class="hover:text-orange-500 transition">Accueil</NuxtLink>
        <NuxtLink to="/#carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
        <NuxtLink to="/#discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
        <NuxtLink to="/#ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
        <NuxtLink to="/#parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
        <NuxtLink to="/#fournisseur" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
        <NuxtLink to="/#apropos" class="hover:text-orange-500 transition">A propos</NuxtLink>
        <NuxtLink to="/#faq" class="hover:text-orange-500 transition">FAQ</NuxtLink>
        
        <a href="mailto:prunel@grandfrere.com" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Contactez-nous
        </a>


        <!-- Bloc "Se connecter" : icône SVG + texte de connexion -->

      </div>
    </nav>

    <main class="relative w-full flex flex-col items-center pt-8 pb-20 px-4">
      <div class="w-full max-w-6xl space-y-8">
        
        <section class="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
          <div class="relative h-72 bg-gray-200">
            <img src="/images/Page_liste_ecoles/batiment.png" class="w-full h-full object-cover" />
            
            <div class="absolute -bottom-14 left-12 w-36 h-36 rounded-full border-4 border-white bg-[#1a1a4b] shadow-lg overflow-hidden">
              <img src="/images/Page_liste_ecoles/logo_ecole.png" class="w-full h-full object-contain p-2" />
            </div>
          </div>

          <div class="pt-16 pb-10 px-12">
            <h1 class="text-3xl font-bold text-gray-800">Los Alamitos High School</h1>
            <p class="text-gray-400 text-sm mt-1">Lycée privé • Premier et Second cycles</p>
            
            <div class="mt-4 inline-flex items-center gap-2 border border-dashed border-blue-400 px-3 py-1.5 rounded-md text-blue-500 text-xs font-semibold italic bg-blue-50/30">
              <span class="text-lg">📍</span> Marcory remblais, Abidjan
            </div>

            <div class="flex gap-4 mt-10 border-b border-gray-100">
              <button @click="tabActive = 'propos'" 
                :class="tabActive === 'propos' ? 'bg-gray-50 border-b-2 border-gray-800 font-bold' : 'text-gray-400 font-medium'"
                class="flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs transition-all">
                📖 À propos
              </button>
              <button @click="tabActive = 'distinctions'" 
                :class="tabActive === 'distinctions' ? 'bg-gray-50 border-b-2 border-gray-800 font-bold' : 'text-gray-400 font-medium'"
                class="flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs transition-all">
                🏆 Distinctions
              </button>
              <button @click="tabActive = 'effectifs'" 
                :class="tabActive === 'effectifs' ? 'bg-gray-50 border-b-2 border-gray-800 font-bold' : 'text-gray-400 font-medium'"
                class="flex items-center gap-2 px-6 py-3 rounded-t-xl text-xs transition-all">
                👥 Effectifs
              </button>
            </div>

            <div class="mt-8 min-h-[120px]">
              <div v-if="tabActive === 'propos'" class="text-gray-600 text-sm leading-relaxed max-w-4xl">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div v-else-if="tabActive === 'distinctions'" class="relative">
                <div class="flex justify-end mb-4">
                  <button class="bg-gray-100 hover:bg-gray-200 text-[10px] px-4 py-1.5 rounded-lg flex items-center gap-2 font-bold transition">
                    Pièces justificatives <span class="bg-black text-white rounded p-0.5 text-[7px]">📄</span>
                  </button>
                </div>
                <div class="absolute left-[90px] top-4 bottom-4 w-px bg-gray-200"></div>
                <div class="space-y-8">
                  <div v-for="dist in distinctionsList" :key="dist.date" class="flex gap-12 items-start">
                    <span class="w-14 text-right text-xs font-bold text-gray-400 pt-1">{{ dist.date }}</span>
                    <div class="flex-1 space-y-4">
                      <div v-for="label in dist.items" :key="label" class="flex items-center gap-4">
                        <div class="w-2.5 h-2.5 rounded-full bg-orange-500 z-10 border-2 border-white shadow-sm"></div>
                        <p class="text-xs font-bold text-gray-700 uppercase tracking-tight">{{ label }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="tabActive === 'effectifs'" class="space-y-8 pt-4">
                <div class="flex items-center gap-8">
                  <div class="flex items-center gap-2 text-sm text-gray-700 font-medium w-36">
                    <span class="text-gray-900 font-bold">•</span> Premier cycle:
                  </div>
                  <div class="flex items-center gap-10">
                    <div class="flex items-center gap-3">
                      <span class="text-lg">🚺</span> 
                      <span class="text-sm font-bold text-gray-600">324 Filles</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-lg">🚹</span> 
                      <span class="text-sm font-bold text-gray-600">144 Garçons</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-8">
                  <div class="flex items-center gap-2 text-sm text-gray-700 font-medium w-36">
                    <span class="text-gray-900 font-bold">•</span> Second cycle:
                  </div>
                  <div class="flex items-center gap-10">
                    <div class="flex items-center gap-3">
                      <span class="text-lg">🚺</span> 
                      <span class="text-sm font-bold text-gray-600">189 Filles</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-lg">🚹</span> 
                      <span class="text-sm font-bold text-gray-600">205 Garçons</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section class="bg-white rounded-[32px] shadow-sm border border-gray-100 p-10">
          <div class="flex justify-between items-center mb-10">
            <h2 class="text-xl font-bold text-gray-900 flex items-center gap-3">
              Activités Récentes <span class="italic">GRAND FRÈRE</span>
            </h2>
            <div class="relative flex items-center">
              <input type="text" placeholder="Rechercher une activité" class="bg-gray-100 rounded-full py-2.5 px-12 text-sm focus:outline-none w-80">
              <span class="absolute left-4 text-gray-400">🔍</span>
              <span class="ml-4 text-gray-400 cursor-pointer text-xl">⚙️</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="act in recentActivities" :key="act.id" class="border border-gray-100 rounded-3xl p-3 hover:shadow-md transition">
              <div class="bg-gray-200 h-52 rounded-2xl mb-5 overflow-hidden">
                <img :src="act.img" class="w-full h-full object-cover" />
              </div>
              <div class="px-2">
                <div class="flex justify-between items-center mb-6">
                  <p class="font-bold text-sm">{{ act.title }}</p>
                  <button class="text-[9px] border border-gray-300 px-3 py-1 rounded flex items-center gap-1 font-bold hover:bg-gray-50 transition">
                    Voir plus ↗
                  </button>
                </div>
                <div class="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                  <span>{{ act.school }}</span>
                  <span>{{ act.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-12">
            <button class="border border-gray-800 rounded-xl px-10 py-3 text-xs font-extrabold hover:bg-gray-800 hover:text-white transition">
              Chargez plus d'activités
            </button>
          </div>
        </section>

      </div>
    </main>



  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabActive = ref('propos')

const distinctionsList = [
  { 
    date: "2023", 
    items: [
      "Prix Nationale d'Excellence Académique et Pédagogique", 
      "Prix Nationale d'excellence en mathématiques secondaire"
    ] 
  },
  { 
    date: "Jan 2025", 
    items: [
      "Record national Meilleur Taux de Réussite au Baccalauréat"
    ] 
  }
]

const recentActivities = [
  { id: 1, title: "Intitulé de l'activité", school: "Nom de l'établissement", date: "20.10.2025", img: "/images/Page_liste_ecoles/ecole1.png" },
  { id: 2, title: "Intitulé de l'activité", school: "Nom de l'établissement", date: "20.10.2025", img: "/images/Page_liste_ecoles/ecole2.png" },
  { id: 3, title: "Intitulé de l'activité", school: "Nom de l'établissement", date: "20.10.2025", img: "/images/Page_liste_ecoles/ecole3.png" }
]
</script>