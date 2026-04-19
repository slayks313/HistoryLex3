import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase'

// Глобальное состояние (singleton)
const user = ref(null)
const loading = ref(false)
const error = ref(null)
let unsubscribe = null

export function useAuth() {
  // Инициализация при загрузке
  const initAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      user.value = session?.user || null
      
      // Подписываемся на изменения авторизации
      if (!unsubscribe) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          user.value = session?.user || null
        })
        unsubscribe = subscription?.unsubscribe
      }
    } catch (err) {
      error.value = err.message
      console.error('Auth init error:', err)
    }
  }

  // Регистрация
  const signUp = async (email, password, metadata = {}) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })
      if (err) throw err
      user.value = data.user
      return data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  // Логин
  const signIn = async (email, password) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (err) throw err
      user.value = data.user
      return data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  // Логаут
  const signOut = async () => {
    loading.value = true
    error.value = null
    try {
      const { error: err } = await supabase.auth.signOut()
      if (err) throw err
      user.value = null
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  // Слушать изменения авторизации
  const onAuthStateChange = (callback) => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user || null
      callback(event, session)
    })
    return subscription
  }

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
