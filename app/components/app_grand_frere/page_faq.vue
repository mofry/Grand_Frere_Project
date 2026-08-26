<template>
  <div class="min-h-screen p-6 relative">

    <!-- Étiquette FAQ -->
    <div class="mx-auto p-0.5 rounded-lg bg-center bg-gradient-to-r from-[#985194] via-[#FFCDEB] to-[#E2910F] w-fit mt-10 mb-10">
      <div class="bg-[#FFCDEB] rounded-lg text-gray-800 px-4 py-1.5">
        FAQ
      </div>
    </div>

    <!-- Conteneur principal -->
    <div class="flex flex-col justify-center items-center">

      <!-- Titre -->
      <div class="bg-gradient-to-r from-[#E2910F] to-[#985194] bg-clip-text text-transparent text-2xl font-bold mb-10">
        Les questions fréquentes
      </div>

      <div class="flex flex-col gap-4 w-full max-w-3xl">

        <!-- FAQ 1 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=Comment%20fonctionne%20la%20carte%20pour%20les%20élèves%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">Comment fonctionne la carte pour les élèves ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- FAQ 2 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=Comment%20puis-je%20recharger%20le%20compte%20de%20mon%20enfant%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">Comment puis-je recharger le compte de mon enfant ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- FAQ 3 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=La%20carte%20peut-elle%20être%20utilisée%20pour%20autre%20chose%20que%20les%20repas%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">La carte peut-elle être utilisée pour autre chose que les repas ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- FAQ 4 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=Que%20faire%20si%20la%20carte%20de%20mon%20enfant%20est%20perdue%20ou%20volée%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">Que faire si la carte de mon enfant est perdue ou volée ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- FAQ 5 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=Y%20a-t-il%20des%20frais%20pour%20les%20parents%20ou%20pour%20l’école%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">Y a-t-il des frais pour les parents ou pour l’école ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- FAQ 6 -->
        <a 
          href="mailto:contact@votre-entreprise.com?subject=Demande%20d'aide&body=Comment%20sont%20sélectionnés%20les%20vendeurs%20ou%20points%20de%20restauration%20acceptant%20la%20carte%20?" 
          class="block py-3 px-4 filter drop-shadow-lg bg-[#FDFDFD] border-[#C0C0C0] shadow-inner-xl border-2 rounded-xl mb-32 cursor-pointer hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold">Comment sont sélectionnés les vendeurs ou points de restauration acceptant la carte ?</span>
            <img src="/images/Page_app/cross.png" alt="Croix" class="w-4 h-4" />
          </div>
        </a>

        <!-- Bloc Téléchargement Application -->
        <div class="relative z-10 bg-[#FBFBFB] filter drop-shadow-xl border-[#C0C0C0] border-4 rounded-3xl px-8 md:px-32 py-20 flex flex-col items-center text-center">

          <div class="my-auto bg-gradient-to-r from-[#E2910F] to-[#985194] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-3">
            Téléchargez dès maintenant
          </div>

          <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <span class="bg-gradient-to-r from-[#E2910F] to-[#985194] bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
              l'application
            </span>
            <img src="/images/Page_app/logo_colored.png" alt="Logo de l'application" class="w-32 md:w-auto" />
          </div>

          <div class="flex justify-center w-full">
            <button class="bg-[#252019] rounded-2xl text-white w-fit px-12 py-4 hover:bg-black hover:scale-105 transition-transform duration-300 mb-10 shadow-lg">
              Télécharger l'App
            </button>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition">
              <img src="/images/Page_app/app_store.png" alt="Disponible sur l'App Store" class="h-12 w-auto" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition">
              <img src="/images/Page_app/play_store.png" alt="Disponible sur Google Play" class="h-12 w-auto" />
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- Footer absolu -->
    <div class="absolute bottom-10 left-10 z-10 flex flex-col gap-2">
      <img src="/images/Page_app/white_logo.png" alt="Logo blanc" class="w-24" />
      <span class="text-gray-500 text-sm">Tous droits réservés - 2026</span>
    </div>

  </div>
</template>