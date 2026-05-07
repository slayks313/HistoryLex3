import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

import Home from '../views/Home.vue'
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
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/6', component: Grade6 },
  { path: '/7', component: Grade7 },
  { path: '/8', component: Grade8 },
  { path: '/9', component: Grade9 },
  { path: '/7uz', component: Grade7Uz },
  { path: '/8uz', component: Grade8Uz },
  { path: '/9uz', component: Grade9Uz }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let authInitialized = false

router.beforeEach(async () => {
  const { initAuth } = useAuth()

  if (!authInitialized) {
    await initAuth()
    authInitialized = true
  }
})

export default router