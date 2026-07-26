<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div class="bg-white rounded-[20px] w-full max-w-2xl p-6" style="box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
      
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-[24px] font-semibold" style="color:#252019;">Créer une nouvelle offre</h2>
        <button @click="fermer" class="text-[20px]" style="color:#A0A8B0;">✕</button>
      </div>

      <!-- Form -->
      <form @submit.prevent="soumettreFormulaire" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <!-- Origine -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Origine</label>
            <input v-model="formulaire.origine" type="text" placeholder="Ex: Mali" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" />
          </div>

          <!-- Conditionnement -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Conditionnement</label>
            <input v-model="formulaire.Conditionnement" type="text" placeholder="Ex: Sac 50kg" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" />
          </div>

          <!-- Description -->
          <div class="col-span-2">
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Description</label>
            <textarea v-model="formulaire.Description" placeholder="Détails du produit" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9; min-height:80px;"></textarea>
          </div>

          <!-- Company -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Entreprise</label>
            <input v-model="formulaire.Company" type="text" placeholder="Nom entreprise" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" />
          </div>

          <!-- Prix unitaire -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Prix unitaire (FCFA)</label>
            <input v-model.number="formulaire.Prix_unitaire" type="number" placeholder="0" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" @input="calculerTotal" />
          </div>

          <!-- Quantité -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Quantité</label>
            <input v-model.number="formulaire.Quantite" type="number" placeholder="0" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" @input="calculerTotal" />
          </div>

          <!-- Montant total (lecture seule) -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Montant total (FCFA)</label>
            <input :value="formulaire.Montant_total" type="text" disabled class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9; background:#F5F5F5;" />
          </div>

          <!-- Date livraison -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Date de livraison</label>
            <input v-model="formulaire.Date_livraison" type="text" placeholder="DD.MM.YYYY" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" />
          </div>

          <!-- Mode livraison -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Mode livraison</label>
            <select v-model="formulaire.Mode_livraison" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;">
              <option value="">Sélectionner</option>
              <option value="Transport routier">Transport routier</option>
              <option value="Transport maritime">Transport maritime</option>
              <option value="Transport aérien">Transport aérien</option>
              <option value="Retrait sur place">Retrait sur place</option>
            </select>
          </div>

          <!-- Durée -->
          <div>
            <label class="block text-[12px] font-semibold mb-2" style="color:#252019;">Durée</label>
            <input v-model="formulaire.Durée" type="text" placeholder="Ex: 30 jours" class="w-full px-3 py-2 border rounded-[10px]" style="border-color:#D9D9D9;" />
          </div>
        </div>

        <!-- Boutons -->
        <div class="flex gap-3 pt-4">
          <button @click="fermer" type="button" class="flex-1 px-4 py-2 rounded-full border" style="border-color:#D9D9D9; color:#252019;">Annuler</button>
          <button type="submit" class="flex-1 px-4 py-2 rounded-full text-white font-medium" style="background:#F7B64C; color:#252019;">Créer l'offre</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOffresStore, type Offre } from '~/stores/offres'

const store = useOffresStore()

const isOpen = ref(false)

const formulaire = ref<Offre>({
  origine: '',
  Conditionnement: '',
  Description: '',
  Company: '',
  Prix_unitaire: 0,
  Quantite: 0,
  Montant_total: 0,
  Date_livraison: '',
  Mode_livraison: '',
  Durée: ''
})

const ouvrir = () => {
  isOpen.value = true
}

const fermer = () => {
  isOpen.value = false
  reinitialiserFormulaire()
}

const calculerTotal = () => {
  formulaire.value.Montant_total = formulaire.value.Prix_unitaire * formulaire.value.Quantite
}

const soumettreFormulaire = () => {
  if (formulaire.value.origine && formulaire.value.Description && formulaire.value.Quantite > 0) {
    store.ajouterOffre(formulaire.value)
    fermer()
  } else {
    alert('Veuillez remplir tous les champs obligatoires')
  }
}

const reinitialiserFormulaire = () => {
  formulaire.value = {
    origine: '',
    Conditionnement: '',
    Description: '',
    Company: '',
    Prix_unitaire: 0,
    Quantite: 0,
    Montant_total: 0,
    Date_livraison: '',
    Mode_livraison: '',
    Durée: ''
  }
}

defineExpose({ ouvrir, fermer })
</script>
