<template>
    <div class="min-h-screen p-6">

        <div class="mx-auto p-0.5 rounded-lg bg-center bg-gradient-to-r from-[#985194] via-[#FFCDEB] to-[#E2910F] w-fit mt-10 mb-10">
            <div class="bg-[#FFCDEB] rounded-lg p-4 text-gray-800 px-4 py-1.5">
                FAQ
            </div>
        </div>

        <div class="relative z-0 flex flex-col justify-center items-center">

            <img 
                src="/images/commun/meuf_faq.png" 
                alt="Illustration femme" 
                class="hidden lg:block absolute bottom-0 left-0 w-80 object-contain z-0 pointer-events-none" 
            />

            <img 
                src="/images/commun/carte_faq.png" 
                alt="Carte orange" 
                class="hidden lg:block absolute bottom-56 left-[270px] w-24 object-contain z-10 pointer-events-none" 
            />

            <div class="relative z-10 bg-gradient-to-r from-[#E2910F] to-[#985194] bg-clip-text text-transparent text-2xl font-bold mb-10">
                Les questions fréquentes
            </div>

            <div class="relative z-10 text-center mb-10"> 
                Vous avez d’autres questions? <br>Contactez-nous en cliquant sur le bouton ci-dessous 
            </div>

            <div class="relative z-10 flex flex-col gap-4 w-full max-w-3xl">

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] border-2 rounded-xl">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> Comment fonctionne la carte pour les élèves</span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] border-2 rounded-xl">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> Comment puis-je recharger le compte de mon enfant ? </span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] border-2 rounded-xl">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> La carte peut-elle être utilisée pour autre chose que les repas ? </span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] border-2 rounded-xl">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> Que faire si la carte de mon enfant est perdue ou volée ?</span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] border-2 rounded-xl">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> Y a-t-il des frais pour les parents ou pour l’école ?</span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

                <div class="py-1.5 px-4 filter drop-shadow-lg bg-[#FDFDFD] border border-[#C0C0C0] shadow-inner-xl border-2 rounded-xl mb-32">
                    <div class="flex items-center justify-between">
                        <span class="font-bold"> Comment sont sélectionnés les vendeurs ou points de restauration acceptant la carte ? </span>
                        <img src="/images/Page_app/cross.png" />
                    </div>
                </div>

            </div>

        </div>

    

        <footer class="border-t border-gray-200 bg-[#fafafa] pt-12 pb-20">
            <div class="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
                <div class="flex items-start gap-2">
                    <div class="font-bold text-xl uppercase tracking-tighter flex items-center gap-2 text-[#b67a3d]">
                        <span class="w-6 h-6 bg-[#b67a3d] rounded-full inline-block"></span>
                        Grand Frère
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm font-medium text-gray-600">
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Pages</h4>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">La carte</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Discovery</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Écoles</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Parents</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Fournisseurs</NuxtLink>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Aide</h4>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">A propos</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">FAQ</NuxtLink>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Comptes</h4>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">S'inscrire</NuxtLink>
                        <NuxtLink to="#" class="hover:text-[#b67a3d] transition">Se connecter</NuxtLink>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>