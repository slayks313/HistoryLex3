import { ref, computed } from 'vue'

// Глобальное состояние (singleton)
const user = ref(null)
const loading = ref(false)
const error = ref(null)

export function useAuth() {
  const initAuth = async () => {
    user.value = null
  }

  const signUp = async () => {
    loading.value = false
    error.value = 'Авторизация отключена'
    throw new Error('Авторизация отключена')
  }

  const signIn = async () => {
    loading.value = false
    error.value = 'Авторизация отключена'
    throw new Error('Авторизация отключена')
  }

  const signOut = async () => {
    user.value = null
  }

  const onAuthStateChange = () => ({ unsubscribe: () => {} })

  const isAuthenticated = computed(() => !!user.value)

  return {
    user,
    loading,
    error,
    isAuthenticated,
    initAuth,
    signUp,
    signIn,
    signOut,
    onAuthStateChange
  }
}
