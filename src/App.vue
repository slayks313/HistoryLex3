<template>
  <div class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200">
    <Navbar v-if="$route.path !== '/login'" />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const $route = useRoute()
</script>