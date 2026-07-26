<template>
    <div class="min-h-screen bg-[#F8F9FA] flex flex-col items-center py-12 px-4 font-sans text-gray-800">

    <div class="mb-6 px-8 py-1.5 rounded-full border border-pink-200 bg-pink-50/50 text-gray-800 text-sm font-medium shadow-sm">
        Ecoles
    </div>

    <div class="bg-white drop-shadow-xl rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-gray-100 p-12 max-w-5xl w-full text-center mb-6">
        <div class = "flex items-center justify-center ">

            <div class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            La carte 

            </div>
            <img src = " /images/Page_app/logo_colored.png"  />

        </div>

            <span class =  "text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                l'outil innovant d'une <br>école connectée à l'avenir
            </span>
   
 
        
        <p class="text-gray-600 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br>
        nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,<br>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br>
        commodo consequat. Ut enim ad minim veniam, quis nostrud<br>
        exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to = /formulaire_respo_ecole class="px-6 py-3 rounded-md bg-gradient-to-r from-[#E08A44] to-[#A44E8C] text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Devenir une école Partenaire
        </NuxtLink>
        <NuxtLink to = /repertoire_ecoles class="px-6 py-3 rounded-md bg-[#ED8E00] text-white text-sm font-medium hover:bg-orange-600 transition-colors">
            Voir la liste des écoles Partenaires
        </NuxtLink>
        </div>
    </div>

    <div class="relative w-full max-w-5xl mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white rounded-3xl drop-shadow-xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-gray-100 p-10 h-72 flex flex-col justify-end">
            <div class="w-4/5"> <h2 class="text-xl font-bold mb-4 leading-snug">
                <span class="text-[#B7853A]">Maîtrise des flux<br>financiers</span> au sein de<br>vos établissements
            </h2>
            <p class="text-[13px] text-gray-500 leading-relaxed">
                uis nostrud exercitation ullamco laboris nisi ut<br>
                aliquip ex ea commodo consequat. Ut enim ad<br>
                minim veniam, quis nostrud exercitation
            </p>
            </div>
        </div>

        <div class="bg-white rounded-3xl drop-shadow-xl shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-gray-100 p-10 h-72 flex flex-col justify-end items-end text-right">
            <div class="w-4/5"> <ul class="text-[13px] text-gray-700 mb-6 space-y-1.5">
                <li>Simplification de la gestion des repas &bull;</li>
                <li>Sécurité des transactions &bull;</li>
                <li>Lien renforcé avec les parents &bull;</li>
            </ul>
            <h2 class="text-xl font-bold mb-4 leading-snug">
                <span class="text-[#984A86]">La sécurité et la transparence,</span><br>au service de vos élèves.
            </h2>
            <p class="text-[13px] text-gray-500 leading-relaxed">
                uis nostrud exercitation ullamco laboris nisi<br>
                ut aliquip ex ea commodo consequat. Ut<br>
                enim ad minim veniam, quis nostrud
            </p>
            </div>
        </div>
        
        </div>

        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] z-10">
        <div class="w-64 h-40 ">
            <img src = "/images/Page1-Hero/Rectangle-140.png" />
        </div>
        
        </div>

    </div>
    </div>
</template>