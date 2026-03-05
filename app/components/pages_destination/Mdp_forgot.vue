<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col relative overflow-hidden">

    <img src = "/images/Page_connexion/bg.png" class = "absolute w-full h-screen"/>

    <nav class="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      
      <img src="/images/Page_vidéo1/logo_complet.png"  />
       
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
        <a href="#" class="hover:text-orange-500 transition">Acceuil</a>
        <a href="#" class="hover:text-orange-500 transition">La carte</a>
        <a href="#" class="hover:text-orange-500 transition">Discovery</a>
        <a href="#" class="hover:text-orange-500 transition">Écoles</a>
        <a href="#" class="hover:text-orange-500 transition">Parents</a>
        <a href="#" class="hover:text-orange-500 transition">Fournisseurs</a>
        <a href="#" class="hover:text-orange-500 transition">A propos</a>
        <a href="#" class="hover:text-orange-500 transition">FAQ</a>
      </div>

      <div class="flex items-center gap-4">
        <button class="bg-gradient-to-r from-[#e67e22] to-[#a55eea] w-[220px] h-[50px] flex items-center justify-center rounded-[12px] text-white font-bold shadow-md hover:opacity-90 transition">
          Commencez maintenant
        </button>
        <button class="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <div class="w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          Se connecter
        </button>
      </div>
    </nav>




    <main class="relative z-10 flex-1 flex items-center justify-center p-6">
      <div class="bg-white/80 backdrop-blur-sm border border-slate-100 p-12 rounded-[2.5rem] shadow-2xl w-full max-w-xl">
        <div class="mb-10">
          <h1 class="text-4xl font-bold text-slate-800 mb-4">
            Mot de <img src = "/images/Page_connexion/cadenas_forgot_passsword.svg" class ="inline-block"/><br />
            passe oublié
            
          </h1>
          <p class="text-slate-500 leading-relaxed">
            Vérifiez votre voîte de réception(et vos spams). Nous<br />
            nous avons envoyés un e-mail contenant un lien pour <br />
            réinitialiser votre mot de passe.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">E-mail de connexion</label>
            <input 
              type="text" 
              v-model="username"
              placeholder="raniakouakou@gmail.com"
              class="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-orange-200 focus:outline-none transition"
            />
          </div>

 
          <div class="pt-4 flex flex-col items-center gap-6">
            <button 
              type="submit" 
              class="w-2/3 bg-gradient-to-r from-[#e67e22] to-[#a55eea] text-white font-bold py-4 rounded-2xl 
              shadow-lg shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Valider
            </button>

            <a href="#" class="text-slate-400 text-sm flex items-center gap-2 hover:text-orange-500 transition underline">
                <img src = "/images/Page_connexion/refresh.svg" />
              Je n'ai pas reçu l'e-mail,renvoyez
            </a>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('Rania Kouakou');
const password = ref('password123');
const showPassword = ref(false);

const handleLogin = () => {
  console.log("Tentative de connexion pour :", username.value);
};
</script>

<style scoped>
/* Optionnel : Ajustement de la police pour se rapprocher du design original si non défini globalement */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>