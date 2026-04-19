<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <!-- Заголовок -->
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Мой профиль</h1>

      <!-- Информация пользователя -->
      <div class="space-y-6">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <div class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
            {{ user?.email }}
          </div>
        </div>

        <!-- ID пользователя -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ID пользователя
          </label>
          <div class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white font-mono text-sm break-all">
            {{ user?.id }}
          </div>
        </div>

        <!-- Дата создания -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Зарегистрирован
          </label>
          <div class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
            {{ formatDate(user?.created_at) }}
          </div>
        </div>
      </div>

      <!-- Кнопки -->
      <div class="mt-8 flex gap-4">
        <button
          @click="handleLogout"
          :disabled="loading"
          class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          {{ loading ? 'Выход...' : 'Выйти' }}
        </button>
        <router-link
          to="/"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          На главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { user, signOut, loading } = useAuth()

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const handleLogout = async () => {
  try {
    await signOut()
    router.push('/login')
  } catch (err) {
    console.error('Logout error:', err)
  }
}
</script>
