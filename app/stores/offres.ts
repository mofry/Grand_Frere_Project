import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Offre {
  origine: string
  Conditionnement: string
  Description: string
  Company: string
  Prix_unitaire: number
  Quantite: number
  Montant_total: number
  Date_livraison: string
  Mode_livraison: string
  Durée: string
}

export interface Soumission {
  offre: Offre
  status: string
  bg: string
  statusDot: string
  statusColor: string
  pinned: boolean
  date: string
}

export interface Livraison {
  designation: string
  commande: string
  statut: string
  statutColor: string
  statutTextColor: string
  etape: string
  etapeColor: string
  etapeTextColor: string
  action: string
}

export const useOffresStore = defineStore('offres', () => {
  const offres = ref<Offre[]>([
    {
      origine: 'Mali',
      Conditionnement: 'Sac 50kg',
      Description: 'Riz long grain de qualité',
      Company: 'Quinsatin SARL',
      Prix_unitaire: 800,
      Quantite: 1000,
      Montant_total: 800000,
      Date_livraison: '20.05.2025',
      Mode_livraison: 'Transport routier',
      Durée: '30 jours'
    },
    {
      origine: 'Sénégal',
      Conditionnement: 'Carton',
      Description: 'Huile de palme pure',
      Company: 'Export Plus',
      Prix_unitaire: 1200,
      Quantite: 500,
      Montant_total: 600000,
      Date_livraison: '25.05.2025',
      Mode_livraison: 'Transport maritime',
      Durée: '15 jours'
    }
  ])

  const ajouterOffre = (nouvelleOffre: Offre) => {
    offres.value.push(nouvelleOffre)
  }

  const mettreAJourOffre = (index: number, offreModifiee: Offre) => {
    if (index >= 0 && index < offres.value.length) {
      offres.value[index] = offreModifiee
    }
  }

  const supprimerOffre = (index: number) => {
    if (index >= 0 && index < offres.value.length) {
      offres.value.splice(index, 1)
    }
  }

  const soumissions = ref<Soumission[]>([])
  const livraisons = ref<Livraison[]>([])

  const genererNumeroCommande = () => {
    const prefix = 'CA'
    const suffix = Math.floor(Math.random() * 900000 + 100000).toString()
    const postfix = `P${Math.floor(Math.random() * 90 + 10)}`
    return `${prefix}${suffix}${postfix}`
  }

  const ajouterLivraison = (offre: Offre) => {
    livraisons.value.unshift({
      designation: offre.Description,
      commande: genererNumeroCommande(),
      statut: 'En cours',
      statutColor: '#9DC7ED',
      statutTextColor: '#081A2A',
      etape: 'Transport',
      etapeColor: '#97A0D8',
      etapeTextColor: '#05012F',
      action: 'next'
    })
  }

  const soumettreOffre = (offre: Offre) => {
    const index = offres.value.findIndex((item) =>
      item === offre ||
      (item.Description === offre.Description &&
        item.Company === offre.Company &&
        item.Date_livraison === offre.Date_livraison &&
        item.Prix_unitaire === offre.Prix_unitaire &&
        item.Quantite === offre.Quantite)
    )

    if (index >= 0) {
      offres.value.splice(index, 1)
    }

    soumissions.value.unshift({
      offre,
      status: 'Analyse',
      bg: '#E0EFFB',
      statusDot: 'rgba(4,138,249,0.25)',
      statusColor: '#054177',
      pinned: true,
      date: new Date().toLocaleDateString('fr-FR')
    })

    ajouterLivraison(offre)
  }

  const obtenirOffres = () => {
    return offres.value
  }

  const obtenirSoumissions = () => {
    return soumissions.value
  }

  const obtenirLivraisons = () => {
    return livraisons.value
  }

  return {
    offres,
    soumissions,
    livraisons,
    ajouterOffre,
    ajouterLivraison,
    soumettreOffre,
    mettreAJourOffre,
    supprimerOffre,
    obtenirOffres,
    obtenirSoumissions,
    obtenirLivraisons
  }
})