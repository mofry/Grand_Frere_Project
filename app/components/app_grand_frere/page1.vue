<template>
  <div class="min-h-screen bg-white font-sans">

    <div class="relative w-full max-w-[1556px] mx-auto overflow-hidden hidden md:block" style="aspect-ratio: 1556 / 1110;">

      <!-- Diagonal gradient background -->
      <div
        class="absolute"
        style="left:-1.03%; top:0.09%; width:101.03%; height:100%;"
      >
        <svg width="100%" height="100%" viewBox="0 0 1572 1110" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1110L1572 333.825V0H0V1110Z" fill="url(#hero_gradient)"/>
          <defs>
            <linearGradient id="hero_gradient" x1="603.517" y1="786" x2="382.669" y2="215.095" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFD289"/>
              <stop offset="1" stop-color="#E2910F"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Logo -->
      <div class="absolute flex items-center" style="left:5.40%; top:3.33%; width:11.31%; height:2.88%;">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b184cff916182a158fa9072a01e08a335d113179?width=76"
          alt="Grand Frère"
          class="h-full w-auto"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/826308671e5627565db39d7b98854f27bf739aed?width=288"
          alt="Grand Frère"
          class="h-[75%] w-auto ml-1"
        />
      </div>

      <!-- Nav -->
      <nav
        class="absolute hidden lg:flex items-center justify-between text-white font-medium"
        style="left:32.26%; top:2.97%; width:34.38%; height:2.70%; font-size:clamp(0.75rem,0.96vw,0.9375rem);"
      >
        <NuxtLink to="#l'application" class="hover:opacity-80 transition">L'application</NuxtLink>
        <NuxtLink to="#fonctionnalités" class="hover:opacity-80 transition">Fonctionnalités</NuxtLink>
        <NuxtLink to="#avantages" class="hover:opacity-80 transition">Advantages</NuxtLink>
        <NuxtLink to="#apropos" class="hover:opacity-80 transition">A propos</NuxtLink>
        <NuxtLink to="#faq" class="hover:opacity-80 transition">FAQ</NuxtLink>
      </nav>

      <!-- Pill button -->
      <div
        class="absolute rounded-[10px] flex items-center justify-center border border-solid"
        style="left:5.33%; top:16.67%; width:8.74%; height:3.51%; border-color:#985194; background:linear-gradient(90deg, #FFF4E3 0%, #FFDFFD 100%);"
      >
        <span
          style="font-family:Montserrat, -apple-system, Roboto, Helvetica, sans-serif; font-weight:500; font-size:clamp(0.75rem,0.96vw,0.9375rem); color:#252019;"
        >L'application</span>
      </div>

      <!-- Heading -->
      <h1
        class="absolute font-bold text-white"
        style="left:5.33%; top:24.14%; width:59.38%; height:20.54%; font-family:'Nirmala Text', -apple-system, Roboto, Helvetica, sans-serif; font-size:clamp(1.75rem,4.82vw,4.6875rem); line-height:0.91;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod incididunt
      </h1>

      <!-- Paragraph -->
      <p
        class="absolute"
        style="left:5.33%; top:47.75%; width:39.20%; height:5.05%; font-family:Inter, -apple-system, Roboto, Helvetica, sans-serif; font-weight:500; font-size:clamp(0.875rem,1.29vw,1.25rem); line-height:1.25; color:#252019;"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt, smod tempor incididunt
      </p>

      <!-- Store badges -->
      <a
        href="#"
        class="absolute block"
        style="left:5.40%; top:56.85%; width:9.25%; height:4.32%;"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4ee73a1ed7c3ce83e369298939722694892a0ff8?width=288"
          alt="Télécharger sur l'App Store"
          class="w-full h-full rounded-[10px]"
        />
      </a>
      <a
        href="#"
        class="absolute block"
        style="left:15.36%; top:56.85%; width:10.09%; height:4.32%;"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8f1b102f9c2bcbd720218527739dc48813021dc1?width=314"
          alt="Disponible sur Google Play"
          class="w-full h-full rounded-[10px]"
        />
      </a>

      <!-- Télécharger l'App button -->
      <a
        href="#"
        class="absolute rounded-[10px] flex items-center justify-center bg-[#252019] text-white font-semibold"
        style="left:5.40%; top:64.23%; width:16.97%; height:4.50%; font-family:Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size:clamp(0.75rem,1.03vw,1rem); box-shadow:6px 0 12px 0 rgba(152,81,148,0.10), 2px -15px 25px 0 #000 inset, 0 3px 3px 0 rgba(255,232,237,0.35) inset, -6px 0 12px 0 rgba(177,123,36,0.10);"
      >
        Télécharger l&lsquo;App
      </a>

      <!-- Decorative pattern shape behind phone -->
      <div class="absolute" style="left:67.29%; top:36.22%; width:28.99%; height:43.42%; filter:drop-shadow(0 0 8px rgba(0,0,0,0.25));">
        <svg width="100%" height="100%" viewBox="0 0 451 482" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rect160_gradient" x1="0" y1="0" x2="451" y2="482" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFD289"/>
              <stop offset="1" stop-color="#985194"/>
            </linearGradient>
          </defs>
          <path d="M225.673 447.391C212.965 464.001 188.622 465.832 173.573 451.31L45.2759 327.508C32.7525 315.423 31.0105 295.973 41.1873 281.855L222.898 29.7775C234.584 13.5662 257.449 10.414 273.085 22.8584L418.632 138.691C433.552 150.566 436.221 172.2 424.634 187.345L225.673 447.391Z" fill="url(#rect160_gradient)"/>
        </svg>
      </div>

      <!-- Phone mockup -->
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/55ee70c9ca9ada013221b91b54e8bbbc19e60610?width=882"
        alt="Application Grand Frère"
        class="absolute object-contain"
        style="left:55.98%; top:13.33%; width:28.34%; height:73.06%;"
      />

      <!-- Floating decorative illustrations -->
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/d210326103a5e8a0f0492c07ca21cf660d984d0a?width=406"
        alt=""
        class="absolute object-contain"
        style="left:-6.68%; top:6.85%; width:13.05%; height:16.85%; transform:rotate(-24.819deg); filter:blur(4.95px);"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f1ba52aecb41540be01a71ce119341e06c1db5a9?width=216"
        alt=""
        class="absolute object-contain"
        style="left:40.94%; top:29.19%; width:6.94%; height:9.01%; transform:rotate(-21.409deg); filter:blur(2.95px);"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ed2a87f55e4818495331aeb056891824ac659807?width=274"
        alt=""
        class="absolute object-contain"
        style="left:44.73%; top:46.04%; width:8.81%; height:12.34%; transform:rotate(25.082deg);"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/7a889f659d12534127a3f492788d63908e58f568?width=590"
        alt=""
        class="absolute object-contain"
        style="left:29.11%; top:52.16%; width:18.96%; height:24.59%; transform:rotate(-19.689deg);"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1a45600f0be6c946a2c90a2840199906d4f5fcd9?width=406"
        alt=""
        class="absolute object-contain"
        style="left:89.27%; top:5.05%; width:13.05%; height:16.85%; transform:rotate(-24.819deg); filter:blur(4.95px);"
      />
    </div>

    <section class="relative z-20 bg-white py-20 mt-10">
      <div class="max-w-6xl mx-auto px-6">
        
        <div class="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-5 flex items-center justify-center">
          L'app et la carte <img src="/images/commun/logo_colored.png" class="inline-block mx-2" /> 
  
        </div>
        <span class = "ext-center text-3xl md:text-4xl font-bold text-gray-900 mb-20 flex items-center justify-center">comment ça fonctionne ?</span>

        <div class="relative">
          
          <div class="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            
            <div v-for="step in 4" :key="step" class="flex flex-col items-center text-center bg-white px-4">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#db8231] to-[#b15827] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                {{ step }}
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-3">
                étape {{ step }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
</script>
