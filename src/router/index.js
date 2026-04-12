import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Grade6 from '../views/Grade6.vue'
import Grade7 from '../views/Grade7.vue'
import Grade8 from '../views/Grade8.vue'
import Grade9 from '../views/Grade9.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/6', component: Grade6 },
  { path: '/7', component: Grade7 },
  { path: '/8', component: Grade8 },
  { path: '/9', component: Grade9 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router