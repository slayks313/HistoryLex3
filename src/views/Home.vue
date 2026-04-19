<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
    <!-- Hero Section -->
    <div class="relative overflow-hidden px-4 md:px-8 py-16 md:py-24">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Добро пожаловать в <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">HistoryLex</span>
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Полный курс истории для учащихся 6-9 классов
          </p>
          <div class="flex gap-2 justify-center flex-wrap text-sm">
            <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">200+ тем</span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Удобный интерфейс</span>
            <span class="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">⭐ Полностью бесплатно</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <!-- Две основные карточки -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Русский курс -->
        <router-link to="/6" class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full bg-white dark:bg-gray-800">
            <!-- Фото -->
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="randomImages[0]" 
                :alt="'История России'"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <span class="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold mb-2">Все темы</span>
                <h2 class="text-3xl font-bold text-white">Всемирная история</h2>
              </div>
            </div>

            <!-- Содержание -->
            <div class="p-6 md:p-8">
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Погрузись в богатую Всемирную историю от древних времен до современности. Откройте для себя великие события, выдающихся личностей и ключевые моменты, которые сформировали нашу страну.
              </p>

              <!-- Классы -->
              <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Доступные классы:</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg">6 класс</span>
                  <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg">7 класс</span>
                  <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg">8 класс</span>
                  <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg">9 класс</span>
                </div>
              </div>

              <!-- Особенности -->
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Развернутые статьи по каждой эпохе</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Исторические даты и события</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span>Биографии великих личностей</span>
                </li>
              </ul>

              <button class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-lg">
                Начать обучение →
              </button>
            </div>
          </div>
        </router-link>

        <!-- Узбекский курс -->
        <router-link to="/7uz" class="group">
          <div class="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full bg-white dark:bg-gray-800">
            <!-- Фото -->
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="randomImages[1]" 
                :alt="'История Узбекистана'"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <span class="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-2">Все темы</span>
                <h2 class="text-3xl font-bold text-white">История Узбекистана</h2>
              </div>
            </div>

            <!-- Содержание -->
            <div class="p-6 md:p-8">
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Изучите захватывающую историю Узбекистана, его культуру и наследие. От Шелкового пути до современных достижений — откройте величие среднеазиатской цивилизации.
              </p>

              <!-- Классы -->
              <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Доступные классы:</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg">7 класс (Uz)</span>
                  <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg">8 класс (Uz)</span>
                  <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg">9 класс (Uz)</span>
                </div>
              </div>

              <!-- Особенности -->
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Только самое важное</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Культурное и историческое наследие</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Интерактивное обучение</span>
                </li>
              </ul>

              <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-lg">
                Начать обучение →
              </button>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Новости и обновления -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">🔥 Свежие новости</h2>
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded-full animate-pulse">НОВОЕ</span>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <p class="text-gray-600 dark:text-gray-300 text-center col-span-full">Пока что ничего нету :(</p>
          
                
        </div>
      </div>

      <!-- CTA Секция -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 md:p-12 text-center text-white shadow-xl">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        </div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Начни учиться прямо сейчас</h2>
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Выбери нужный класс и язык обучения, и погрузись в увлекательный мир истории
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/6" class="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200">
              Всемирная история
            </router-link>
            <router-link to="/7uz" class="px-8 py-3 bg-white/20 hover:bg-white/30 font-bold rounded-xl border-2 border-white transition-all duration-200">
              История Узбекистана
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Массив рандомных изображений разных размеров
const randomImages = ref([])

// Функция для генерации случайного числа для изображения
const generateRandomImages = () => {
  const imageIds = [
    Math.floor(Math.random() * 800),
    Math.floor(Math.random() * 800),
    Math.floor(Math.random() * 800),
    Math.floor(Math.random() * 800),
    Math.floor(Math.random() * 800)
  ]
  
  randomImages.value = imageIds.map(id => `https://picsum.photos/800/400?random=${id}`)
}

onMounted(() => {
  generateRandomImages()
})
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>