<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 pt-20">
    <div class="w-full max-w-md">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <!-- Заголовок -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">HistoryLex</h1>
          <p class="text-gray-600 dark:text-gray-400">{{ isSignUp ? 'Создать аккаунт' : 'Вход в аккаунт' }}</p>
        </div>

        <!-- Форма -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="your@email.com"
            />
          </div>

          <!-- Пароль -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Пароль
            </label>
            <input
              v-model="password"
              type="password"
              required
              :minlength="isSignUp ? 6 : 1"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              :placeholder="isSignUp ? 'Минимум 6 символов' : 'Ваш пароль'"
            />
          </div>

          <!-- Подтверждение пароля -->
          <div v-if="isSignUp">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Подтвердите пароль
            </label>
            <input
              v-model="passwordConfirm"
              type="password"
              required
              minlength="6"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Подтвердите пароль"
            />
          </div>

          <!-- Ошибка -->
          <div v-if="error" class="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
            {{ error }}
          </div>

          <!-- Кнопка отправки -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            {{ loading ? 'Загрузка...' : (isSignUp ? 'Зарегистрироваться' : 'Войти') }}
          </button>
        </form>

        <!-- Переключение между логином и регистрацией -->
        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ isSignUp ? 'Уже есть аккаунт?' : 'Нет аккаунта?' }}
            <button
              type="button"
              @click="isSignUp = !isSignUp"
              class="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-semibold transition"
            >
              {{ isSignUp ? 'Войти' : 'Зарегистрироваться' }}
            </button>
          </p>
        </div>
      </div>

      <!-- Ссылка на главную -->
      <div class="text-center mt-6">
        <router-link
          to="/"
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          ← Вернуться на главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signIn, signUp, loading, error } = useAuth()

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isSignUp = ref(false)

const handleSubmit = async () => {
  try {
    if (isSignUp.value) {
      if (password.value !== passwordConfirm.value) {
        alert('Пароли не совпадают')
        return
      }
      await signUp(email.value, password.value)
      alert('Регистрация успешна! Проверь email для подтверждения или войди сразу.')
    } else {
      await signIn(email.value, password.value)
    }
    router.push('/')
  } catch (err) {
    console.error('Auth error:', err)
    // Улучшенная обработка ошибок
    if (err.message?.includes('Email not confirmed')) {
      error.value = 'Email не подтвержден. Проверь почту или обратись в поддержку.'
    } else if (err.message?.includes('Invalid login credentials')) {
      error.value = 'Неверный email или пароль'
    } else if (err.message?.includes('User already registered')) {
      error.value = 'Пользователь с таким email уже зарегистрирован'
    } else {
      error.value = err.message || 'Ошибка авторизации'
    }
  }
}
</script>

<style scoped>
/* Анимация входа */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.min-h-screen {
  animation: slideUp 0.4s ease-out;
}
</style>
