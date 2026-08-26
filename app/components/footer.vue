<template>
        <footer class="border-t border-gray-200 bg-[#fafafa] pt-12 pb-20">
            <div class="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
                <div class="flex items-center justify-between gap-2">
                    <NuxtLink to="/" class="hover:text-orange-500 transition">
                        <img src="/images/commun/logo_complet.png" alt="Logo Grand Frère" class="w-32" />
                    </NuxtLink>
       

                    <span class="text-sm text-gray-600">© 2024 Grand Frère. Tous droits réservés.</span>

 
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm font-medium text-gray-600">
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Pages</h4>
                            <NuxtLink to="/#accueil" class="hover:text-orange-500 transition">Accueil</NuxtLink>
                            <NuxtLink to="/#carte" class="hover:text-orange-500 transition">La carte</NuxtLink>
                            <NuxtLink to="/#discovery" class="hover:text-orange-500 transition">Discovery</NuxtLink>
                            <NuxtLink to="/#ecoles" class="hover:text-orange-500 transition">Écoles</NuxtLink>
                            <NuxtLink to="/#parents" class="hover:text-orange-500 transition">Parents</NuxtLink>
                            <NuxtLink to="/#fournisseur" class="hover:text-orange-500 transition">Fournisseurs</NuxtLink>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Aide</h4>
                        <NuxtLink to="/#apropos" class="hover:text-orange-500 transition">A propos</NuxtLink>
                        <NuxtLink to="/#faq" class="hover:text-orange-500 transition">FAQ</NuxtLink>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900 mb-1">Comptes</h4>
                        <NuxtLink to="/#inscription" class="hover:text-orange-500 transition">S'inscrire</NuxtLink>
                        <NuxtLink to="/#connexion" class="hover:text-orange-500 transition">Se connecter</NuxtLink>
                    </div>
                </div>
            </div>
        </footer>
     

</template>
