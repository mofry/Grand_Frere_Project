<template>
  <div class="flex min-h-screen" style="background:#FDFAF5; font-family: Inter, sans-serif;">

    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 h-screen w-[254px] z-30 flex flex-col" style="padding: 18px 0 18px 21px;">
      <div class="flex-1 rounded-[20px] bg-white flex flex-col py-4 relative" style="box-shadow: 0 0 3px 0 rgba(0,0,0,0.15); overflow-y: auto;">

        <!-- Logo -->
        <div class="flex items-center gap-2 px-4 mb-4 mt-2">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/915ed3e13860af460796e301e7064a369e374695?width=92" alt="logo" class="w-[46px] h-[46px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/ed84d401329f4f339170875e147ae463cc49e06d?width=288" alt="Grand Frère" class="h-[22px]" />
        </div>

        <!-- Section: Principal -->
        <p class="text-[11px] uppercase tracking-wider px-6 mb-1 mt-2" style="color:#A0A8B0;">Principal</p>

        <!-- Active: Tableau de bord -->
        <NuxtLink to="/dashboard" class="relative flex items-center gap-3 px-6 py-4 cursor-pointer">
          <div class="absolute top-2 bottom-2 w-[10px] rounded-[10px_0_0_10px]" style="background:#F7B64C; left:-1px;"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#db-h1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8135 1.13487C13.2426 0.881117 12.6248 0.75 12 0.75C11.3752 0.75 10.7574 0.881117 10.1865 1.13487C6.45 2.79487 3.625 4.97237 2.163 6.23187C1.221 7.04337 0.714 8.19587 0.6515 9.38687C0.553442 11.2524 0.502926 13.1202 0.5 14.9884C0.5 16.7144 0.549 18.3784 0.603 19.6834C0.639864 20.6563 1.04443 21.579 1.73504 22.2652C2.42566 22.9515 3.35089 23.3502 4.324 23.3809C6.065 23.4404 8.644 23.4994 12 23.4994C15.356 23.4994 17.935 23.4404 19.676 23.3809C20.6492 23.3502 21.5745 22.9514 22.2651 22.265C22.9557 21.5787 23.3603 20.6559 23.397 19.6829C23.451 18.3789 23.5 16.7144 23.5 14.9879C23.5 12.7444 23.417 10.6954 23.3485 9.38687C23.286 8.19587 22.779 7.04287 21.837 6.23187C20.3745 4.97187 17.5495 2.79537 13.8135 1.13487Z" fill="#F7B64C"/></g><defs><clipPath id="db-h1"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px] font-semibold" style="color:#F7B64C;">Tableau de bord</span>
        </NuxtLink>

        <!-- Appels d'offres -->
        <NuxtLink to="/appels-offres" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#db-ao1)"><path d="M20.4615 3.44741C20.206 2.24191 19.132 1.44091 17.8825 1.50341C16.3725 1.57891 14.008 1.75441 10.6775 2.15691C7.34749 2.55941 5.00999 2.95191 3.52599 3.23791C2.29799 3.47441 1.45349 4.50742 1.50199 5.73792C1.55499 7.08292 1.69649 9.11641 2.04649 11.9224C2.20499 13.1914 2.36599 14.2974 2.52049 15.2499" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.721 19.979C2.8305 21.252 3.824 22.2025 5.0985 22.2885C6.641 22.3925 9.0645 22.5 12.5 22.5C15.935 22.5 18.359 22.3925 19.9015 22.2885C21.1765 22.2025 22.1695 21.252 22.279 19.979C22.392 18.662 22.5 16.698 22.5 14C22.5 11.302 22.392 9.3385 22.279 8.021C22.1695 6.748 21.176 5.7975 19.9015 5.7115C18.359 5.6075 15.9355 5.5 12.5 5.5C9.065 5.5 6.641 5.6075 5.0985 5.7115C3.8235 5.7975 2.8305 6.748 2.721 8.021C2.608 9.338 2.5 11.302 2.5 14C2.5 16.698 2.608 18.662 2.721 19.979Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.5 9.5H5.5M9.5 15.5H5.5M19.5 18.5H5.5M9.5 12.5H5.5" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="12.5" y="9" width="7" height="7" rx="2" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/></g><defs><clipPath id="db-ao1"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px]" style="color:#363636;">Appels d'offres</span>
        </NuxtLink>

        <!-- Soumissions -->
        <NuxtLink to="/soumissions" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#db-s1)"><path d="M13.25 2.75H15.75C16.1478 2.75 16.5294 2.90804 16.8107 3.18934C17.092 3.47064 17.25 3.85218 17.25 4.25M13.05 19.14L9.33 19.67L9.86 16L19.41 6.46C19.8365 6.06256 20.4007 5.84619 20.9836 5.85647C21.5665 5.86676 22.1226 6.1029 22.5349 6.51513C22.9471 6.92737 23.1832 7.48353 23.1935 8.06643C23.2038 8.64934 22.9874 9.21348 22.59 9.64L13.05 19.14ZM5.5 0.75H12.5C12.5 0.75 13.25 0.75 13.25 1.5V4C13.25 4 13.25 4.75 12.5 4.75H5.5C5.5 4.75 4.75 4.75 4.75 4V1.5C4.75 1.5 4.75 0.75 5.5 0.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 18.75V21.75C17.25 22.1478 17.092 22.5294 16.8107 22.8107C16.5294 23.092 16.1478 23.25 15.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V4.25C0.75 3.85218 0.908035 3.47064 1.18934 3.18934C1.47064 2.90804 1.85218 2.75 2.25 2.75H4.75M5.25 8.75H12.25M5.25 13.25H7.75" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="db-s1"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
          <span class="text-[15px]" style="color:#363636;">Soumissions</span>
        </NuxtLink>

        <!-- Bons de Commandes -->
        <NuxtLink to="/bons-de-commandes" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.395 1.25 10.838 1.4 10.229 1.652C9.64 1.896 8.956 2.255 8.105 2.702L6.037 3.787C4.992 4.335 4.157 4.774 3.51 5.205C2.842 5.652 2.326 6.122 1.951 6.759C1.577 7.394 1.409 8.082 1.328 8.901C1.25 9.696 1.25 10.673 1.25 11.903V12.097C1.25 13.327 1.25 14.304 1.328 15.099C1.409 15.919 1.578 16.606 1.951 17.241C2.326 17.878 2.841 18.348 3.511 18.795C4.156 19.226 4.992 19.665 6.037 20.213L8.105 21.298C8.956 21.745 9.64 22.104 10.229 22.348C10.839 22.6 11.395 22.75 12 22.75C12.605 22.75 13.162 22.6 13.771 22.348C14.36 22.104 15.044 21.745 15.895 21.298L17.963 20.214C19.008 19.665 19.843 19.226 20.489 18.795C21.159 18.348 21.674 17.878 22.049 17.241C22.423 16.606 22.591 15.918 22.672 15.099C22.75 14.304 22.75 13.327 22.75 12.098V11.902C22.75 10.673 22.75 9.696 22.672 8.901C22.591 8.081 22.422 7.394 22.049 6.759C21.674 6.122 21.159 5.652 20.489 5.205C19.844 4.774 19.008 4.335 17.963 3.787L15.895 2.702C15.044 2.255 14.36 1.896 13.771 1.652C13.161 1.4 12.605 1.25 12 1.25Z" fill="#363636"/></svg>
          <span class="text-[15px]" style="color:#363636;">Bons de Commandes</span>
        </NuxtLink>

        <!-- Livraisons -->
        <NuxtLink to="/livraisons" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 3H13V17H2V3Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><path d="M13 8H19L22 12V17H13V8Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><circle cx="6" cy="19" r="2" stroke="#363636" stroke-width="1.5"/><circle cx="18" cy="19" r="2" stroke="#363636" stroke-width="1.5"/><path d="M8 17H14" stroke="#363636" stroke-width="1.5"/></svg>
          <span class="text-[15px]" style="color:#363636;">Livraisons</span>
        </NuxtLink>

        <!-- Demandes d'écoles -->
        <NuxtLink to="/demandes-ecoles" class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8L12 13L22 8L12 3Z" stroke="#363636" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 10.5V16C6 16 8 18 12 18C16 18 18 16 18 16V10.5" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 8V13" stroke="#363636" stroke-width="1.5" stroke-linecap="round"/></svg>
          <span class="text-[15px]" style="color:#363636;">Demandes d'écoles</span>
        </NuxtLink>

        <!-- Divider -->
        <div class="mt-6 mb-2">
          <p class="text-[11px] uppercase tracking-wider px-6 mb-1" style="color:#A0A8B0;">Support</p>
        </div>

        <!-- Compte -->
        <div class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 4.75H21C21 4.75 23 4.75 23 6.75V17.25C23 17.25 23 19.25 21 19.25H3C3 19.25 1 19.25 1 17.25V6.75C1 6.75 1 4.75 3 4.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.56445 15.75H9.00045M15.0005 8.25H19.2385M15.0005 15.75H19.2385M13.2915 12H19.2385M4.56445 7.75H9.56445V12.75H4.56445V7.75Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-[15px]" style="color:#363636;">Compte</span>
        </div>

        <!-- Paramètres -->
        <div class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#363636" stroke-width="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#363636" stroke-width="1.5"/></svg>
          <span class="text-[15px]" style="color:#363636;">Paramètres</span>
        </div>

        <!-- Aide -->
        <div class="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-50 rounded-lg mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.83 14V13.379C11.8295 12.9697 11.9368 12.5676 12.1412 12.2129C12.3455 11.8583 12.6397 11.5638 12.994 11.359C14.12 10.699 14.508 9.302 13.848 8.176C13.188 7.05 11.791 6.662 10.665 7.322C9.965 7.75 9.5 8.487 9.5 9.341M12 17H11.992M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z" stroke="#363636" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-[15px]" style="color:#363636;">Aide</span>
        </div>
      </div>
    </aside>

    <!-- Main area -->
    <div class="ml-[275px] flex-1 flex flex-col min-h-screen pr-5">

      <!-- Top header -->
      <header class="flex items-center gap-4 py-6 pr-4">
        <div class="flex-shrink-0">
          <h1 class="text-[28px] font-semibold leading-tight" style="color:#363636;">Hello Fabienne,</h1>
          <p class="text-[14px]" style="color:#5F5E5D;">Mercredi 27 Janvier 2026</p>
        </div>

        <!-- Search bar -->
        <div class="flex-1 flex items-center gap-2 rounded-full px-5 py-3 mx-4" style="background:#FAFAFA; box-shadow:0 0 2px 0 rgba(0,0,0,0.20) inset;">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M17.7083 17.7083L21.875 21.875M3.125 11.4583C3.125 13.6685 4.00297 15.7881 5.56578 17.3509C7.12858 18.9137 9.2482 19.7917 11.4583 19.7917C13.6685 19.7917 15.7881 18.9137 17.3509 17.3509C18.9137 15.7881 19.7917 13.6685 19.7917 11.4583C19.7917 9.2482 18.9137 7.12858 17.3509 5.56578C15.7881 4.00297 13.6685 3.125 11.4583 3.125C9.2482 3.125 7.12858 4.00297 5.56578 5.56578C4.00297 7.12858 3.125 9.2482 3.125 11.4583Z" stroke="#A0A8B0" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-[15px] font-medium" style="color:#A0A8B0;">Rechercher</span>
        </div>

        <!-- Icons -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="relative">
            <div class="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center" style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.4056 17.2869V18.0072C14.4056 18.7713 14.1021 19.5041 13.5618 20.0444C13.0214 20.5847 12.2886 20.8883 11.5245 20.8883C10.7604 20.8883 10.0276 20.5847 9.48727 20.0444C8.94696 19.5041 8.64342 18.7713 8.64342 18.0072V17.2869M19.2531 15.8207C18.097 14.4058 17.2809 13.6855 17.2809 9.78479C17.2809 6.21268 15.4568 4.94004 13.9554 4.32196C13.756 4.24003 13.5683 4.05185 13.5075 3.84703C13.2442 2.95073 12.5059 2.16113 11.5245 2.16113C10.5431 2.16113 9.80441 2.95118 9.54376 3.84793C9.48299 4.055 9.29526 4.24003 9.09584 4.32196C7.59272 4.94094 5.77042 6.20908 5.77042 9.78479C5.76817 13.6855 4.95201 14.4058 3.79597 15.8207C3.31699 16.4068 3.73655 17.2869 4.57432 17.2869H18.4792C19.3125 17.2869 19.7293 16.4041 19.2531 15.8207Z" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px]" style="background:#E60606;">2</div>
          </div>
          <div class="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center cursor-pointer" style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15);">
            <svg width="20" height="20" viewBox="0 0 22 23" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.79847 2.16113H19.2508C19.6666 2.16113 20.0479 2.16113 20.3571 2.20243C20.699 2.24853 21.0591 2.35609 21.3559 2.6538C21.6526 2.95151 21.7612 3.31069 21.8073 3.65258C21.8485 3.96278 21.8485 4.34404 21.8485 4.75892V4.84536C21.8485 5.26119 21.8485 5.64246 21.8073 5.9517C21.7612 6.29359 21.6536 6.65372 21.3559 6.95048C21.0745 7.23282 20.7345 7.34423 20.408 7.39417V12.5388C20.408 14.304 20.408 15.7023 20.2611 16.7961C20.1093 17.9217 19.7905 18.8331 19.0721 19.5524C18.3528 20.2708 17.4414 20.5896 16.3159 20.7413C15.2211 20.8883 13.8237 20.8883 12.0586 20.8883H10.9907C9.2255 20.8883 7.82721 20.8883 6.73335 20.7413C5.6078 20.5896 4.69641 20.2708 3.9771 19.5524C3.25875 18.8331 2.93991 17.9217 2.78817 16.7961C2.64123 15.7013 2.64123 14.304 2.64123 12.5388V7.39513C2.31471 7.34519 1.97474 7.23378 1.69335 6.95144C1.39564 6.65468 1.28808 6.29455 1.24198 5.95266C1.20068 5.64246 1.20068 5.26119 1.20068 4.84632V4.75988C1.20068 4.34404 1.20068 3.96278 1.24198 3.65354C1.28808 3.31165 1.39564 2.95151 1.69335 2.65476C1.99106 2.35801 2.35024 2.24949 2.69213 2.20339C3.00233 2.16209 3.38359 2.16113 3.79847 2.16113Z" fill="black"/></svg>
          </div>
          <div class="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center cursor-pointer" style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8.79013 5.19383C10.0069 3.01187 10.6148 1.9209 11.5243 1.9209C12.4338 1.9209 13.0417 3.01187 14.2585 5.19383L14.5735 5.75852C14.9192 6.37892 15.0921 6.68911 15.361 6.89367C15.6299 7.09823 15.966 7.1741 16.6382 7.32584L17.249 7.46413C19.6115 7.99905 20.7918 8.26604 21.0732 9.16974C21.3536 10.0725 20.5489 11.0146 18.9383 12.8979L18.5215 13.3848C18.0644 13.9197 17.8349 14.1877 17.7321 14.518C17.6293 14.8493 17.6639 15.2066 17.7331 15.9202L17.7964 16.5703C18.0394 19.0836 18.1614 20.3398 17.4257 20.8977C16.6901 21.4557 15.5838 20.9467 13.373 19.9287L12.7997 19.6656C12.1716 19.3755 11.8575 19.2315 11.5243 19.2315C11.191 19.2315 10.877 19.3755 10.2489 19.6656L9.67655 19.9287C7.46483 20.9467 6.35849 21.4557 5.62381 20.8987C4.88721 20.3398 5.00917 19.0836 5.25214 16.5703L5.31553 15.9211C5.38468 15.2066 5.41925 14.8493 5.31553 14.519C5.21373 14.1877 4.9842 13.9197 4.52707 13.3857L4.11027 12.8979C2.49974 11.0156 1.69495 10.0734 1.97538 9.16974C2.2558 8.26604 3.43801 7.99809 5.80051 7.46413L6.41131 7.32584C7.0826 7.1741 7.41777 7.09823 7.68763 6.89367C7.9575 6.68911 8.1294 6.37892 8.47513 5.75852L8.79013 5.19383Z" stroke="black" stroke-width="1.44055"/></svg>
          </div>
          <div class="flex items-center gap-2 cursor-pointer">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/7e360c0dfc6ea222701f380a359322ffb6ab3437?width=100" alt="avatar" class="w-[50px] h-[50px] rounded-full object-cover" />
            <span class="text-[14px] font-semibold uppercase" style="color:#252019;">Quinsatin SARL</span>
          </div>
        </div>
      </header>

      <!-- Content grid -->
      <div class="flex gap-4 flex-1 pb-6">

        <!-- Left + Center columns -->
        <div class="flex-1 flex flex-col gap-4 min-w-0">

          <!-- Appels d'offres banner -->
          <div class="rounded-[30px] p-6 relative overflow-hidden" style="background:linear-gradient(142deg, #B92DB1 -1.5%, #F7B64C 78.42%); box-shadow:0 0 2px 0 rgba(0,0,0,0.15); min-height:353px;">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="text-white font-semibold text-[16px]">Appels d'offres disponibles</span>
                <span class="text-white text-[14px]">• {{ offres.length }} appels actifs</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-white text-[13px] underline opacity-80 hover:opacity-100">Voir tout</button>
                <div class="flex gap-1">
                  <button class="w-[26px] h-[26px] rounded-full flex items-center justify-center" style="background:#413625;">
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.1877 8.19163L4.83332 11.8373L5.74456 10.926L2.55456 7.73601L5.74456 4.54601L4.83332 3.63477L1.1877 7.28039C1.06688 7.40124 0.999012 7.56513 0.999012 7.73601C0.999012 7.90689 1.06688 8.07078 1.1877 8.19163Z" fill="white"/></svg>
                  </button>
                  <button class="w-[26px] h-[26px] rounded-full flex items-center justify-center" style="background:#413625;">
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.54564 8.19163L2.90001 11.8373L1.98877 10.926L5.17877 7.73601L1.98877 4.54601L2.90001 3.63477L6.54564 7.28039C6.66645 7.40124 6.73432 7.56513 6.73432 7.73601C6.73432 7.90689 6.66645 8.07078 6.54564 8.19163Z" fill="white"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div v-for="(offer, i) in offres" :key="i" class="bg-white rounded-[20px] p-4 flex-1 flex flex-col gap-2" style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15); min-width:0;">
                <div class="flex justify-end">
                  <div class="flex items-center gap-1">
                    <div class="w-[25px] h-[25px] rounded-full flex items-center justify-center" style="background:#F7B64C;">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 2.625C3.15 2.625 2.825 2.76667 2.5875 3.00417C2.35 3.24167 2.21667 3.5625 2.21667 3.9V10.1C2.21667 10.4375 2.35 10.7583 2.5875 10.9958C2.825 11.2333 3.15 11.375 3.5 11.375H10.5C10.85 11.375 11.175 11.2333 11.4125 10.9958C11.65 10.7583 11.7833 10.4375 11.7833 10.1V8.225C11.7833 8.05 11.9333 7.9 12.1083 7.9C12.2833 7.9 12.4333 8.05 12.4333 8.225V10.1C12.4333 11.025 11.6833 11.7833 10.5 11.7833H3.5C2.31667 11.7833 1.56667 11.025 1.56667 10.1V3.9C1.56667 2.975 2.31667 2.21667 3.5 2.21667H5.375C5.55 2.21667 5.7 2.36667 5.7 2.54167C5.7 2.71667 5.55 2.86667 5.375 2.86667H3.5ZM7.325 2.54167C7.325 2.36667 7.475 2.21667 7.65 2.21667H12.1083C12.2833 2.21667 12.4333 2.36667 12.4333 2.54167V7C12.4333 7.175 12.2833 7.325 12.1083 7.325C11.9333 7.325 11.7833 7.175 11.7833 7V3.38333L8.925 6.3417C8.79167 6.475 8.60833 6.475 8.475 6.34167C8.34167 6.20833 8.34167 6.025 8.475 5.89167L11.3333 2.9H7.65C7.475 2.9 7.325 2.75 7.325 2.54167Z" fill="white"/></svg>
                    </div>
                    <span class="text-[12px]" style="color:rgba(37,32,25,0.5);">Ouvrir</span>
                  </div>
                </div>
                <div>
                  <p class="text-[20px] font-medium leading-tight" style="color:#252019;">AO – {{ offer.Description }}</p>
                  <p class="text-[11px]" style="color:#252019;">{{ offer.Company }}</p>
                </div>
                <div class="flex items-center justify-between text-[12px]">
                  <span style="color:rgba(37,32,25,0.9);">{{ offer.Quantite }} Kg</span>
                  <span style="color:rgba(37,32,25,0.9);">{{ offer.Prix_unitaire }} FCFA /KG</span>
                </div>
                    <div class="flex items-center justify-between text-[11px]">
                  <span style="color:rgba(37,32,25,0.9);">{{ offer.Date_livraison }}</span>
                  <span :style="{color: offer.Date_livraison === 'Expirée' ? '#E60606' : 'rgba(37,32,25,0.9)'}">{{ offer.Date_livraison }}</span>
                </div>
                <button @click="soumettreOffre(offer)" class="mt-2 py-2 px-4 rounded-full text-[12px] font-medium text-left" style="background:#FED99D; color:#9F670E;">
                  Soumettre une offre
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom row -->
          <div class="flex gap-4">
            <!-- Suivi des livraisons -->
            <div class="flex-1 rounded-[30px] bg-white p-5" style="box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-[16px] font-semibold" style="color:#252019;">Suivi des livraisons</h2>
                <div class="flex items-center gap-3">
                  <button class="flex items-center gap-1 text-[13px]" style="color:rgba(0,0,0,0.7);">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M13.5 3H4.5C3.671 3 2.98 3.68 3.185 4.485C3.403 5.335 3.805 6.128 4.362 6.806C4.919 7.485 5.617 8.034 6.409 8.414C7.026 8.709 7.5 9.29 7.5 9.974V14.537C7.5 14.664 7.533 14.79 7.595 14.902C7.657 15.013 7.747 15.107 7.856 15.174C7.965 15.241 8.089 15.28 8.216 15.285C8.344 15.291 8.471 15.264 8.585 15.207L10.085 14.457C10.21 14.395 10.315 14.299 10.388 14.181C10.461 14.062 10.5 13.926 10.5 13.787V9.974C10.5 9.29 10.974 8.709 11.591 8.414C12.382 8.034 13.081 7.485 13.638 6.807C14.196 6.128 14.597 5.336 14.816 4.485C15.019 3.683 14.327 3 13.5 3Z" stroke="black" stroke-opacity="0.7"/></svg>
                    Filtres
                  </button>
                  <button class="text-[13px] underline" style="color:rgba(0,0,0,0.7);">Voir tout</button>
                </div>
              </div>
              <div class="grid text-[12px] font-medium pb-2 border-b" style="grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1.2fr; color:rgba(0,0,0,0.75); border-color:#D9D9D9;">
                <span>Désignations</span>
                <span>N°commande</span>
                <span>Statut</span>
                <span>Etape</span>
                <span>Actions</span>
              </div>
              <div v-for="(item, i) in livraisons" :key="i" class="grid items-center py-3 text-[12px] border-b" style="grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1.2fr; color:rgba(0,0,0,0.6); border-color:#D9D9D9;">
                <span class="truncate pr-2">{{ item.designation }}</span>
                <span>{{ item.commande }}</span>
                <span><span class="px-2 py-1 rounded-full text-[11px] font-medium" :style="{background: item.statutColor, color: item.statutTextColor}">{{ item.statut }}</span></span>
                <span><span class="px-2 py-1 rounded-full text-[11px]" :style="{background: item.etapeColor, color: item.etapeTextColor}">{{ item.etape }}</span></span>
                <span class="flex items-center gap-2">
                  <span v-if="item.action === 'open'" class="flex items-center gap-1 text-[11px] cursor-pointer" style="color:rgba(0,0,0,0.7);">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 9L7 4L12 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Étape Suivante
                  </span>
                  <span v-else class="flex items-center gap-1 text-[11px] cursor-pointer" style="color:rgba(0,0,0,0.7);">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 4H12.5M2.5 4V11.5C2.5 12.052 2.948 12.5 3.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V4M4.5 4V2.5C4.5 1.948 4.948 1.5 5.5 1.5H8.5C9.052 1.5 9.5 1.948 9.5 2.5V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Archiver
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="cursor-pointer opacity-50 flex-shrink-0"><path d="M1 13L5 9M9 2L12 5L7 10L3 10L3 6L9 2Z" stroke="#7F7F7F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div class="w-[322px] flex-shrink-0 rounded-[30px] bg-white p-5 flex flex-col gap-4" style="box-shadow:0 0 4px 0 rgba(0,0,0,0.20);">
              <h2 class="text-[16px] font-semibold" style="color:#252019;">Stats</h2>
              <div class="rounded-[15px] bg-white p-4 flex flex-col gap-2" style="box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
                <div class="w-[36px] h-[36px] rounded-full flex items-center justify-center" style="background:#F5F5F5;">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5.2037 3.764C5.7869 3.3149 6.0785 3.0908 6.4151 2.9459C6.5681 2.8805 6.7262 2.8277 6.8894 2.7875C7.2485 2.7002 7.6292 2.7002 8.3906 2.7002H13.2092C13.9706 2.7002 14.3522 2.7002 14.7104 2.7875C14.8742 2.8277 15.0323 2.8805 15.1847 2.9459C15.5213 3.0899 15.8129 3.3149 16.3961 3.764C18.3275 5.2508 19.2941 5.9951 19.6253 6.9581C19.772 7.3865 19.8269 7.8365 19.7873 8.2847C19.6973 9.2909 18.9341 10.2116 17.4086 12.0539L13.8149 16.3937C12.4316 18.065 11.7395 18.9002 10.7999 18.9002C9.8603 18.9002 9.1682 18.065 7.7849 16.3937L4.1912 12.0539C2.6657 10.2116 1.9034 9.2909 1.8125 8.2847C1.77238 7.83602 1.82759 7.38393 1.9745 6.9581C2.3057 5.9951 3.2723 5.2517 5.2037 3.764Z" stroke="black" stroke-width="1.35"/><path d="M9 7.65039H12.6" stroke="black" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <p class="text-[15px]" style="color:#252019;">Note qualité service</p>
                <div class="flex items-baseline gap-1">
                  <span class="text-[48px] font-medium leading-tight" style="color:#252019;">7</span>
                  <span class="text-[24px] font-medium" style="color:#252019;">/10</span>
                  <span class="text-[13px] ml-2 leading-tight" style="color:#8B8B8B;">L'évaluation des vendeurs et de l'équipe Grand Frère</span>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="flex-1 rounded-[15px] p-3 flex flex-col gap-1" style="background:#FED99D; box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
                  <div class="w-[31px] h-[31px] rounded-full flex items-center justify-center" style="background:#F5F5F5;">
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="none"><path d="M15.8998 10.9695L10.9693 15.9001C10.8427 16.0251 10.7003 16.1189 10.5422 16.1814C10.3841 16.2439 10.2266 16.2752 10.0695 16.2752C9.91242 16.2752 9.75612 16.2439 9.60061 16.1814C9.44509 16.1189 9.30404 16.0251 9.17746 15.9001L2.69691 9.43195C2.57446 9.31983 2.48198 9.18601 2.41946 9.0305C2.35694 8.8755 2.32568 8.71223 2.32568 8.5407V3.59155C2.32568 3.24331 2.44762 2.9452 2.69148 2.6972C2.93535 2.4492 3.23553 2.3252 3.59203 2.3252H8.54118C8.70858 2.3252 8.87108 2.35904 9.02866 2.42672C9.18624 2.4944 9.32238 2.58585 9.43708 2.70107L15.8998 9.16767C16.029 9.29425 16.123 9.4366 16.1819 9.5947C16.2408 9.7528 16.2703 9.91219 16.2703 10.0729C16.2703 10.2336 16.2408 10.3911 16.1819 10.5456C16.123 10.7001 16.029 10.8414 15.8998 10.9695Z" fill="black"/></svg>
                  </div>
                  <p class="text-[10px]" style="color:#252019;">Total des ventes FCFA</p>
                  <p class="text-[32px] font-medium leading-none" style="color:#252019;">6.75M</p>
                </div>
                <div class="flex-1 rounded-[15px] p-3 flex flex-col gap-1" style="background:#FFA9FA; box-shadow:0 0 5px 0 rgba(0,0,0,0.25);">
                  <div class="w-[31px] h-[31px] rounded-full flex items-center justify-center" style="background:#F5F5F5;">
                    <svg width="16" height="16" viewBox="0 0 19 19" fill="none"><path d="M14.3373 3.09961H4.2623C3.83428 3.09961 3.4873 3.44659 3.4873 3.87461V16.2746C3.4873 16.7026 3.83428 17.0496 4.2623 17.0496H14.3373C14.7653 17.0496 15.1123 16.7026 15.1123 16.2746V3.87461C15.1123 3.44659 14.7653 3.09961 14.3373 3.09961Z" stroke="black" stroke-width="0.7" stroke-linejoin="round"/><path d="M6.97471 1.5498V3.8748M11.6247 1.5498V3.8748M6.19971 7.3623H12.3997M6.19971 10.4623H10.8497M6.19971 13.5623H9.29971" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <p class="text-[10px]" style="color:#252019;">Total des commandes</p>
                  <p class="text-[32px] font-medium leading-none" style="color:#252019;">{{ soumissions.length }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right panel: Soumissions -->
        <div class="w-[332px] flex-shrink-0 rounded-[35px] bg-white flex flex-col" style="box-shadow:0 0 5px 0 rgba(0,0,0,0.25); overflow:hidden; max-height:calc(100vh - 110px); position:sticky; top:100px;">
          <div class="p-5 flex items-center justify-between border-b" style="border-color:#F0F0F0;">
            <h2 class="text-[16px] font-semibold" style="color:#252019;">Soumissions</h2>
            <button class="text-[13px] underline" style="color:rgba(0,0,0,0.7);">Voir tout</button>
          </div>
          <div class="overflow-y-auto flex-1 px-4 py-3 flex flex-col gap-3">
            <div v-for="(sub, i) in soumissions" :key="i" class="rounded-[20px] p-4 flex flex-col gap-2 relative" :style="{background: sub.bg, boxShadow:'0 0 3px 0 rgba(0,0,0,0.15)'}">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <div class="w-[25px] h-[25px] rounded-full flex items-center justify-center" style="background:#F7B64C;">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 2.625C3.15 2.625 2.825 2.76667 2.5875 3.00417C2.35 3.24167 2.21667 3.5625 2.21667 3.9V10.1C2.21667 10.4375 2.35 10.7583 2.5875 10.9958C2.825 11.2333 3.15 11.375 3.5 11.375H10.5C10.85 11.375 11.175 11.2333 11.4125 10.9958C11.65 10.7583 11.7833 10.4375 11.7833 10.1V8.225C11.7833 8.05 11.9333 7.9 12.1083 7.9C12.2833 7.9 12.4333 8.05 12.4333 8.225V10.1C12.4333 11.025 11.6833 11.7833 10.5 11.7833H3.5C2.31667 11.7833 1.56667 11.025 1.56667 10.1V3.9C1.56667 2.975 2.31667 2.21667 3.5 2.21667H5.375C5.55 2.21667 5.7 2.36667 5.7 2.54167C5.7 2.71667 5.55 2.86667 5.375 2.86667H3.5ZM7.325 2.54167C7.325 2.36667 7.475 2.21667 7.65 2.21667H12.1083C12.2833 2.21667 12.4333 2.36667 12.4333 2.54167V7C12.4333 7.175 12.2833 7.325 12.1083 7.325C11.9333 7.325 11.7833 7.175 11.7833 7V3.38333L8.925 6.3417C8.79167 6.475 8.60833 6.475 8.475 6.34167C8.34167 6.20833 8.34167 6.025 8.475 5.89167L11.3333 2.9H7.65C7.475 2.9 7.325 2.75 7.325 2.54167Z" fill="white"/></svg>
                  </div>
                  <span class="text-[12px]" style="color:rgba(37,32,25,0.5);">Ouvrir</span>
                </div>
                <!-- Pin icon -->
                <svg v-if="sub.pinned" width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M1.102 16.103C0.997 16.208 0.938 16.352 0.938 16.501C0.938 16.65 0.998 16.793 1.103 16.898C1.209 17.004 1.352 17.063 1.501 17.063C1.65 17.063 1.794 17.003 1.899 16.898L1.102 16.103ZM5.389 13.404C5.491 13.298 5.548 13.156 5.546 13.008C5.545 12.861 5.486 12.72 5.381 12.616C5.277 12.511 5.136 12.452 4.989 12.451C4.841 12.45 4.699 12.507 4.593 12.609L5.389 13.404ZM11.594 4.11L13.906 6.425L14.701 5.63L12.39 3.315L11.594 4.11ZM6.952 14.175L3.864 11.084L3.069 11.88L6.156 14.969L6.952 14.175ZM1.899 16.898L5.389 13.404L4.593 12.609L1.102 16.103L1.899 16.898Z" fill="#7F7F7F"/></svg>
                <svg v-else width="16" height="16" viewBox="0 0 18 18" fill="none" class="opacity-40"><path d="M1.102 16.103L5.389 13.404M11.594 4.11L13.906 6.425L14.701 5.63L12.39 3.315L11.594 4.11ZM6.952 14.175L3.864 11.084L3.069 11.88L6.156 14.969L6.952 14.175ZM1.899 16.898L5.389 13.404L4.593 12.609L1.102 16.103L1.899 16.898Z" stroke="#7F7F7F" stroke-width="1.2"/></svg>
              </div>
              <p class="text-[16px] font-medium" style="color:#252019;">AO – {{ sub.offre.Description }}</p>
              <p class="text-[11px]" style="color:#252019;">{{ sub.offre.Company }}</p>
              <div class="flex items-center gap-3 text-[12px]" style="color:rgba(37,32,25,0.9);">
                <span>{{ sub.offre.Quantite }} Kg</span>
                <span>{{ sub.offre.Prix_unitaire }} FCFA /KG</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="px-2 py-1 rounded-full text-[12px] flex items-center gap-1 bg-white" style="box-shadow:0 0 2px 0 rgba(0,0,0,0.25);">
                  <span class="w-[6px] h-[6px] rounded-full inline-block" :style="{background: sub.statusDot}"></span>
                  <span :style="{color: sub.statusColor}">{{ sub.status }}</span>
                </span>
                <span class="flex items-center gap-1 text-[12px]" style="color:#252019;">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="0.5" y="0.5" width="11" height="11" rx="1.5" stroke="#252019"/><line x1="0.5" y1="3.5" x2="11.5" y2="3.5" stroke="#252019"/><line x1="3" y1="0" x2="3" y2="3" stroke="#252019"/><line x1="9" y1="0" x2="9" y2="3" stroke="#252019"/></svg>
                  {{ sub.date }}
                </span>
              </div>
              <div class="absolute bottom-3 right-3">
                <div class="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center" style="box-shadow:0 0 3px 0 rgba(0,0,0,0.15);">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M6.865 4.056C7.815 2.352 8.29 1.5 9 1.5C9.71 1.5 10.185 2.352 11.135 4.056L11.381 4.497C11.651 4.9815 11.786 5.22375 11.996 5.3835C12.206 5.54325 12.469 5.6025 12.994 5.721L13.471 5.829C15.316 6.24675 16.238 6.45525 16.457 7.161C16.676 7.866 16.048 8.60175 14.79 10.0725L14.465 10.4528C14.108 10.8705 13.928 11.0797 13.848 11.3377C13.768 11.5965 13.795 11.8755 13.849 12.4327L13.898 12.9405C14.088 14.9032 14.183 15.8843 13.609 16.32C13.034 16.7558 12.17 16.3582 10.444 15.5632L9.996 15.3577C9.506 15.1312 9.26 15.0187 9 15.0187C8.74 15.0187 8.495 15.1312 8.004 15.3577L7.557 15.5632C5.83 16.3582 4.966 16.7557 4.392 16.3207C3.817 15.8842 3.912 14.9032 4.102 12.9405L4.151 12.4335C4.205 11.8755 4.232 11.5965 4.151 11.3385C4.072 11.0798 3.893 10.8705 3.536 10.4535L3.21 10.0725C1.952 8.6025 1.324 7.86675 1.543 7.161C1.762 6.45525 2.685 6.246 4.53 5.829L5.007 5.721C5.531 5.6025 5.793 5.54325 6.004 5.3835C6.215 5.22375 6.349 4.9815 6.619 4.497L6.865 4.056Z" stroke="black" stroke-width="1.44055"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useOffresStore, type Offre } from '~/stores/offres'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const offresStore = useOffresStore()
const authStore = useAuthStore()
const router = useRouter()

const { offres, soumissions, livraisons } = storeToRefs(offresStore)

const soumettreOffre = (offre: Offre) => {
  offresStore.soumettreOffre(offre)
}

onMounted(() => {
  authStore.initializeAuth()
  
  if (!authStore.user) {
    router.push('/seConnecter')
  }
})

</script>
