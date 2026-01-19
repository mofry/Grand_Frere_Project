<template>
  <div class="relative min-h-screen">
    <nav class="p-6 bg-white flex justify-between items-center shadow-sm relative z-50">
      <div class="font-bold text-xl text-orange-600">GRAND FRÈRE</div>
      
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
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            class="text-gray-800 group-hover:text-orange-500 transition-colors"
          >
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

    <div class="font-nirmala text-5xl absolute left-[565px] top-[194px] font-bold flex flex-col">
      <div class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] bg-clip-text text-transparent whitespace-nowrap ">
        La carte Grand Frère rassure
      </div> 
      <div class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] bg-clip-text text-transparent ml-[-80px] whitespace-nowrap">
        les parents et encadre les élèves
      </div>
      <p class="mt-6 text-[16px] text-[#333333] font-normal text-center max-w-[600px] leading-relaxed">
        Contrôlez et sécurisez le budget repas de vos enfants, directement au sein <br/>
        des établissements en réduisant les risques de dépenses superflues.
      </p>

      
    </div>

   
  
    <NuxtLink 
      to="/activites"
      class="absolute left-[570px] top-[380px] w-[254px] h-[50px] z-20 flex items-center justify-center rounded-[10px] 
      font-medium border border-gray-300 text-[#333333] 
      bg-white transition-all duration-300 hover:bg-[#333333] hover:text-white"
    >
      Chargez plus d'activités
    </NuxtLink>

    <NuxtLink 
      to="/Commencez" 
      class="z-20 absolute left-[870px] top-[380px] bg-gradient-to-r from-[#e67e22] to-[#a55eea] w-[254px] h-[50px] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition"
    >
      Commencez maintenant
    </NuxtLink>

  </div>
</template>