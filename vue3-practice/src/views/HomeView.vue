<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
</script>

<template>
  <main>
    <h2>Home</h2>
    <p>Total Tasks: {{ store.getters.taskCount }}</p>
     <RouterView/>
  </main>
</template>
