<script>
    import { ref, computed, watch, onMounted } from 'vue';
    import { useStore }  from 'vuex';
  export default {
    setup() {
      const store = useStore()
      const count = ref(0);
      const double = computed(()=> count.value * 2);
      watch(count, (newVal) => {
        console.log("count changed:", newVal)
      })
      onMounted(()=>{console.log("component mounted")})
      return { count, double, store }
    }
  }
</script>

<template>
  <button @click="store.commit('increment')">Increase</button>
  <p>{{ store.state.count }}</p>
  <p>{{ store.state.double }}</p>
</template>