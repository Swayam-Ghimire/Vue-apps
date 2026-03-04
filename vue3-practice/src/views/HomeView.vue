<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <!-- nested routes will render here -->
    <router-view />
  </main>
</template>
