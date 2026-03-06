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
  <button @click="this.count++">Increase</button>
  <p>{{ count }}</p>
  <p>{{ double }}</p>
</template>