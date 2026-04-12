<template>
  <nav class="flex items-center justify-between px-6 py-4 border-b">

    <!-- ЛОГО -->
    <div class="text-xl font-bold">HISTORY</div>

    <!-- ССЫЛКИ -->
    <div class="flex items-center gap-6 text-sm">

      <router-link to="/6" class="hover:text-gray-600">6 класс</router-link>
      <router-link to="/7" class="hover:text-gray-600">7 класс</router-link>
      <router-link to="/8" class="hover:text-gray-600">8 класс</router-link>
      <router-link to="/9" class="hover:text-gray-600">9 класс</router-link>

    </div>

    <!-- ИКОНКИ -->
    <div class="flex gap-4">
      <MagnifyingGlassIcon class="w-5 h-5 cursor-pointer" />
      <UserIcon class="w-5 h-5 cursor-pointer" />
    </div>

  </nav>
</template>

<script setup>
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/vue/24/outline'
</script>