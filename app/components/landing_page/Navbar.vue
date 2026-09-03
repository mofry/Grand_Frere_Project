<template>
  <div class="bg-cover bg-[url('/images/Page_app/fond_piece.png'),_url('/images/commun/gradiant.png')] relative min-h-screen bg-white flex flex-col">
    
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

    <main class="w-full flex flex-col items-center pt-32 px-4">
      
      <div class="text-center font-nirmala text-5xl font-bold flex flex-col items-center">
        <div class = "flex items-center">
          <div class="text-center bg-gradient-to-r from-[#985194] via-[#B17B24] to-[#252019] animate-gradient-fast bg-clip-text text-transparent whitespace-nowrap">
          La carte 
          </div> 
          <img src = "/images/commun/logo_noir.png" />

          <div >
          rassure
          </div> 
        </div>

        <div class="flex items-center justify-center bg-gradient-to-r from-[#985194] via-[#B17B24] to-[#252019] bg-clip-text text-transparent whitespace-nowrap mt-2 -ml-20">
          les parents et encadre les élèves
        </div>
        
        <p class="mt-8 text-[16px] text-[#333333] font-normal text-center max-w-[600px] leading-relaxed">
          Contrôlez et sécurisez le budget repas de vos enfants, 
          directement au sein
          des établissements en réduisant les risques de dépenses superflues.
        </p>
      </div>

      <div class="flex flex-row gap-8 mt-12">


        <NuxtLink 
          to="/seConnecter" 
          class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] w-[254px] h-[50px] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition"
        >
          Commencez maintenant
        </NuxtLink>
      </div>

      <div class="relative mt-20 w-full max-w-[800px] flex justify-center items-center">
        <div class="relative z-20 transform -translate-x-20 translate-y-5 ">
          <img src="/images/Page1-Hero/Rectangle-140.png" alt="Carte Orange" class="w-[350px] drop-shadow-2xl">
        </div>
        
        <div class="absolute z-10 transform translate-x-32 -translate-y-5">
          <img src="/images/Page1-Hero/Rectangle-160.png" alt="Carte Violette" class="w-[350px] opacity-90 drop-shadow-xl">
        </div>
      </div>

    </main>

  </div>
</template>