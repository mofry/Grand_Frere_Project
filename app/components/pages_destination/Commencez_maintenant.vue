<template>


    <div class = "relative min-h-screen w-full flex justify-center ">
        <img src = "/images/Pages_commencez_maintenant/bg.png" class = "absolute w-full h-full objet-cover" />

        <img src = "/images/Pages_commencez_maintenant/grand_frere.png"  class = "absolute w-41 h-35 top-48" />

        <span class = "absolute font-bold text-3xl top-80">
            <h2>Choisissez le type d'utilisateur que vous êtes</h2>
        </span>

        <div class = "absolute grid grid-cols-3 gap-5 top-[400px]">



            <div class = "bg-gray-200/50  px-28 py-36 shadow-2xl rounded-2xl mx-auto my-auto " >

                <img src="/images/Pages_commencez_maintenant/school.svg" class="w-full h-full opacity-100" alt="Icone utilisateur"  />

                <span class ="flex justify-center font-bold"> 
                    <h2>Ecoles</h2>
                </span>

            </div>

            <div class = "bg-gray-200/50  px-28 py-36 shadow-2xl rounded-2xl " >

                <img src="/images/Pages_commencez_maintenant/delivery.svg" class="w-full h-full" alt="Icone utilisateur" />
                <span class ="flex justify-center font-bold"> 
                    <h2>Fournisseurs</h2>
                </span>


            </div>

            <div class = "bg-gray-200/50 px-28 py-36 shadow-2xl rounded-2xl " >
                 <img src="/images/Pages_commencez_maintenant/parent.svg" class="w-full h-full" alt="Icone utilisateur" />
                <span class ="flex justify-center font-bold"> 
                    <h2>Parents</h2>
                </span>
            </div>

        </div>

        <button class="absolute bg-gradient-to-r from-[#e67e22] to-[#a55eea] px-[30px] py-[10px] rounded-[12px]
         text-white font-bold shadow-md hover:opacity-90 transition bottom-10 translate-x-[150%]">
          Continuer
        </button>

        <button class="absolute px-8 py-3 rounded-xl border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition-colors
         shadow-sm bottom-10 -translate-x-[50%]">
          Chargez plus d'activités
        </button>


        




    </div>






</template>