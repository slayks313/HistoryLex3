<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 md:px-6 py-3 md:py-4 gap-2 md:gap-4">

    <div class="flex-shrink-0">
      <div class="text-base md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter md:tracking-normal">
        History
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <div class="relative w-full max-w-[160px] md:max-w-md">
        <input
          v-model="search"
          type="text"
          placeholder="Поиск..."
          @keydown.enter.prevent="handleSearch"
          class="w-full border border-gray-300 dark:border-gray-600 pr-9 md:pr-12 pl-3 md:pl-4 py-1.5 md:py-2 rounded-full text-sm outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all focus:border-purple-500"
        />
        <button
          @click="handleSearch"
          class="absolute right-0 top-1/2 -translate-y-1/2 h-full aspect-square bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors scale-90"
        >
          <MagnifyingGlassIcon class="w-3.5 h-3.5 md:w-4 h-4 text-white" />
        </button>
      </div>
    </div>

    <div class="flex items-center gap-3 md:gap-6">
      
      <div class="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <div class="flex gap-3 border-r border-gray-200 dark:border-gray-700 pr-4">
          <router-link to="/6" class="hover:text-purple-600 transition">6 класс</router-link>
          <router-link to="/7" class="hover:text-purple-600 transition">7 класс</router-link>
          <router-link to="/8" class="hover:text-purple-600 transition">8 класс</router-link>
          <router-link to="/9" class="hover:text-purple-600 transition">9 класс</router-link>
        </div>
        <div class="flex gap-3 italic">
          <router-link to="/7uz" class="hover:text-blue-500 transition">7-Uz</router-link>
          <router-link to="/8uz" class="hover:text-blue-500 transition">8-Uz</router-link>
          <router-link to="/9uz" class="hover:text-blue-500 transition">9-Uz</router-link>
        </div>
      </div>

      <button
        @click="toggleDarkMode"
        class="hidden md:block text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition"
      >
        <MoonIcon v-if="!isDarkMode" class="w-5 h-5" />
        <SunIcon v-else class="w-5 h-5" />
      </button>

      <UserIcon class="w-5 h-5 cursor-pointer text-gray-700 dark:text-gray-300" />

      <Bars3Icon
        class="w-6 h-6 cursor-pointer md:hidden text-gray-700 dark:text-gray-300"
        @click="open = true"
      />
    </div>
  </nav>

  <div class="h-[64px] md:h-[72px]"></div>

  <Transition name="fade">
    <div v-if="notFound" class="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="notFound = false"></div>
      <div class="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-gray-100 dark:border-gray-700">
        <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <XMarkIcon class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Ничего не нашли</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          По запросу <span class="font-semibold text-purple-600 italic">"{{ lastSearch }}"</span> совпадений нет.
        </p>
        <button @click="notFound = false" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition">
          ОК
        </button>
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-[100] flex justify-end">
      <div class="absolute inset-0 bg-black/30 backdrop-blur-md" @click="open = false"></div>
      
      <div class="relative w-64 h-full bg-white dark:bg-gray-900 p-6 shadow-xl flex flex-col gap-6">
        <div class="flex items-center justify-between">
          <span class="font-bold dark:text-white">МЕНЮ</span>
          <XMarkIcon class="w-6 h-6 cursor-pointer dark:text-white" @click="open = false" />
        </div>

        <button @click="toggleDarkMode" class="flex items-center gap-3 py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
          <component :is="isDarkMode ? SunIcon : MoonIcon" class="w-5 h-5" />
          {{ isDarkMode ? 'Светлая тема' : 'Темная тема' }}
        </button>

       <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-4">
            <router-link 
              v-for="i in [6,7,8,9]" 
              :key="'ru'+i" 
              :to="'/'+i" 
              @click="open = false" 
              class="text-lg font-medium dark:text-gray-200 hover:text-purple-600"
            >
              {{i}} класс
            </router-link>
          </div>

          <div class="my-4 border-t border-gray-200 dark:border-gray-700"></div>

          <div class="flex flex-col gap-4">
            <router-link 
              v-for="i in [7,8,9]" 
              :key="'uz'+i" 
              :to="'/'+i+'uz'" 
              @click="open = false" 
              class="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
            >
              {{i}} класс (История Уз)
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  MagnifyingGlassIcon, UserIcon, Bars3Icon, XMarkIcon, MoonIcon, SunIcon
} from '@heroicons/vue/24/outline'

const open = ref(false)
const search = ref('')
const lastSearch = ref('')
const notFound = ref(false)
const isDarkMode = ref(false)
const route = useRoute()
const router = useRouter()

function handleSearch() {
  const query = search.value.trim()
  lastSearch.value = query

  if (!query) {
    notFound.value = true
    return
  }

  // Пример логики: если не найдено (замени на свою проверку данных)
  if (query.toLowerCase() === 'ошибка') {
    notFound.value = true
    return
  }

  router.push({ path: route.path, query: { search: query } })
  notFound.value = false
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('darkMode', isDarkMode.value)
}

onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved === 'true') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>