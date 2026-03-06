<script setup>
   import { ref } from 'vue'
   import { useStore } from 'vuex'
   
   const store = useStore()
   const newTask = ref('')
   
   const addTask = () => {
       store.dispatch('addTaskAsync', newTask.value)
       console.log(store.state.tasks)
       newTask.value = ''
    }
</script>
<template>
    <h2>Tasks({{store.getters.taskCount}})</h2>
    <input type="text" v-model="newTask" placeholder="Enter task" @keyup.enter="addTask">
    <button @click="addTask">Add Task</button>
    <ul>
        <li v-for="(task, index) in store.state.tasks" :key="index" class="list">
            {{ task }}
        </li>
    </ul>
</template>
<style scoped>
.list {
    text: white;
}

</style>