<template>

    <nav class="sticky top-0 w-full p-6 bg-white flex justify-between items-center shadow-sm z-50">
          <NuxtLink to="/" class="hover:text-orange-500 transition">
            <img src="/images/commun/logo_complet.png" alt="Logo Grand Frère" class="w-32" />
          </NuxtLink>
       
      <div class="flex items-center space-x-6">
        <NuxtLink to="#accueil" class="hover:text-orange-500 transition">Accueil</NuxtLink>
        <NuxtLink to="#carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
        <NuxtLink to="#discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
        <NuxtLink to="#ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
        <NuxtLink to="#parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
        <NuxtLink to="#fournisseur" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
        <NuxtLink to="#apropos" class="hover:text-orange-500 transition">A propos</NuxtLink>
        <NuxtLink to="#faq" class="hover:text-orange-500 transition">FAQ</NuxtLink>
        
        <a href="mailto:prunel@grandfrere.com" class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Contactez-nous
        </a>

        <!-- Bloc "Se connecter" : icône SVG + texte de connexion -->

      </div>
    </nav>

  <!-- Conteneur principal en Flexbox (colonne) -->
  <div class="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-4">
    
    <!-- Image de fond (seul élément absolu, placé en arrière-plan avec -z-10) -->
    <img src="/images/Pages_commencez_maintenant/bg.png" class="absolute inset-0 w-full h-full object-cover -z-10" alt="Background" />

    <!-- Illustration du haut -->
    <img src="/images/Pages_commencez_maintenant/grand_frere.png" class="w-40 mb-6" alt="Illustration" />

    <!-- Titre -->
    <h2 class="font-bold text-3xl text-center mb-12 text-gray-800">
      Choisissez le type d'utilisateur que vous êtes
    </h2>

    <!-- Grille des cartes (responsive : 1 colonne sur mobile, 3 sur grand écran) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
      
      <!-- Carte 1 -->
      <NuxtLink to="/formulaire_respo_ecole" class="bg-gray-200/70 flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl hover:bg-gray-300/80 transition duration-300">
        <img src="/images/Pages_commencez_maintenant/school.svg" class="w-32 h-32 mb-6" alt="Icone Ecoles" />
        <h2 class="font-bold text-xl text-gray-800">Ecoles</h2>
      </NuxtLink>

      <!-- Carte 2 -->
      <NuxtLink to="/formulaire_fournisseur" class="bg-gray-200/70 flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl hover:bg-gray-300/80 transition duration-300">
        <img src="/images/Pages_commencez_maintenant/delivery.svg" class="w-32 h-32 mb-6" alt="Icone Fournisseurs" />
        <h2 class="font-bold text-xl text-gray-800">Fournisseurs</h2>
      </NuxtLink>

      <!-- Carte 3 -->
      <NuxtLink to="/formulaire_parent" class="bg-gray-200/70 flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl hover:bg-gray-300/80 transition duration-300">
        <img src="/images/Pages_commencez_maintenant/parent.svg" class="w-32 h-32 mb-6" alt="Icone Parents" />
        <h2 class="font-bold text-xl text-gray-800">Parents</h2>
      </NuxtLink>

    </div>

    <!-- Conteneur des boutons -->

  </div>
</template>