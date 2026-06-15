import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface UserProfile {
  id: string
  email: string
  username: string
  civilite: string
  nom: string
  prenoms: string
  telephone: string
  fonction: string
  entreprise: string
  typeUtilisateur: 'ecole' | 'fournisseur' | 'parent' | 'autre'
  message?: string
  dateCreation: string
}

export interface AuthState {
  user: UserProfile | null
  isAuthenticated: boolean
  token: string | null
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>(null)
  const isAuthenticated = ref(false)
  const token = ref<string | null>(null)

  // Charger les données depuis le localStorage au montage
  const initializeAuth = () => {
    const savedUser = localStorage.getItem('grand_frere_user')
    const savedToken = localStorage.getItem('grand_frere_token')
    
    if (savedUser && savedToken) {
      user.value = JSON.parse(savedUser)
      token.value = savedToken
      isAuthenticated.value = true
    }
  }

  const generateId = () => {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }

  const generateToken = () => {
    return 'token_' + Math.random().toString(36).substr(2, 16) + '_' + Date.now()
  }

  const register = (userData: Omit<UserProfile, 'id' | 'dateCreation'>, password: string) => {
    // Vérifier si l'email existe déjà
    const existingUsers = JSON.parse(localStorage.getItem('grand_frere_all_users') || '[]')
    if (existingUsers.some((u: any) => u.email === userData.email)) {
      throw new Error('Cet email est déjà utilisé')
    }

    const newUser: UserProfile = {
      ...userData,
      id: generateId(),
      dateCreation: new Date().toISOString()
    }

    // Sauvegarder le mot de passe hashé simplement (en production, utiliser bcrypt)
    const hashedPassword = btoa(password) // Encodage simple pour MVP
    
    const userWithPassword = {
      ...newUser,
      passwordHash: hashedPassword
    }

    // Ajouter à la liste des utilisateurs
    existingUsers.push(userWithPassword)
    localStorage.setItem('grand_frere_all_users', JSON.stringify(existingUsers))

    // Connecter automatiquement après l'inscription
    const newToken = generateToken()
    user.value = newUser
    token.value = newToken
    isAuthenticated.value = true

    // Sauvegarder la session courante
    localStorage.setItem('grand_frere_user', JSON.stringify(newUser))
    localStorage.setItem('grand_frere_token', newToken)

    return newUser
  }

  const login = (email: string, password: string) => {
    const allUsers = JSON.parse(localStorage.getItem('grand_frere_all_users') || '[]')
    const hashedPassword = btoa(password)

    const foundUser = allUsers.find((u: any) => u.email === email && u.passwordHash === hashedPassword)

    if (!foundUser) {
      throw new Error('Email ou mot de passe incorrect')
    }

    // Extraire les données sans le mot de passe
    const { passwordHash, ...userWithoutPassword } = foundUser
    const newToken = generateToken()

    user.value = userWithoutPassword
    token.value = newToken
    isAuthenticated.value = true

    // Sauvegarder la session
    localStorage.setItem('grand_frere_user', JSON.stringify(userWithoutPassword))
    localStorage.setItem('grand_frere_token', newToken)

    return userWithoutPassword
  }

  const logout = () => {
    user.value = null
    token.value = null
    isAuthenticated.value = false

    localStorage.removeItem('grand_frere_user')
    localStorage.removeItem('grand_frere_token')
  }

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user.value) {
      throw new Error('Aucun utilisateur connecté')
    }

    user.value = { ...user.value, ...updates }

    // Mettre à jour dans localStorage
    localStorage.setItem('grand_frere_user', JSON.stringify(user.value))

    // Mettre à jour dans la liste complète
    const allUsers = JSON.parse(localStorage.getItem('grand_frere_all_users') || '[]')
    const userIndex = allUsers.findIndex((u: any) => u.id === user.value?.id)
    if (userIndex !== -1) {
      allUsers[userIndex] = {
        ...allUsers[userIndex],
        ...updates
      }
      localStorage.setItem('grand_frere_all_users', JSON.stringify(allUsers))
    }

    return user.value
  }

  const getProfile = () => {
    return user.value
  }

  return {
    // State
    user,
    isAuthenticated,
    token,

    // Getters
    getProfile,

    // Actions
    initializeAuth,
    register,
    login,
    logout,
    updateProfile
  }
})
