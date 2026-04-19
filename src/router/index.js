import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Grade6 from '../views/Grade6.vue'
import Grade7 from '../views/Grade7.vue'
import Grade8 from '../views/Grade8.vue'
import Grade9 from '../views/Grade9.vue'

// Импортируем новые узбекские страницы
import Grade7Uz from '../views/Grade7Uz.vue'
import Grade8Uz from '../views/Grade8Uz.vue'
import Grade9Uz from '../views/Grade9Uz.vue'

const routes = [
  { path: '/login', component: Login, meta: { requiresAuth: false } },
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/6', component: Grade6, meta: { requiresAuth: true } },
  { path: '/7', component: Grade7, meta: { requiresAuth: true } },
  { path: '/8', component: Grade8, meta: { requiresAuth: true } },
  { path: '/9', component: Grade9, meta: { requiresAuth: true } },
  
  // Новые пути (например, добавим префикс uz или другой путь)
  { path: '/7uz', component: Grade7Uz, meta: { requiresAuth: true } },
  { path: '/8uz', component: Grade8Uz, meta: { requiresAuth: true } },
  { path: '/9uz', component: Grade9Uz, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard для проверки авторизации
let authInitialized = false

router.beforeEach(async (to, from) => {
  const { user, initAuth } = useAuth()
  
  // Инициализируем auth только один раз при первой загрузке
  if (!authInitialized) {
    await initAuth()
    authInitialized = true
  }

  const requiresAuth = to.meta.requiresAuth !== false

  if (requiresAuth && !user.value) {
    // Если требуется авторизация и пользователь не залогирован
    return '/login'
  } else if (to.path === '/login' && user.value) {
    // Если уже залогирован и пытается зайти на login, редирект на главную
    return '/'
  }
})

export default router