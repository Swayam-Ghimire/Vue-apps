import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            tasks: [],
        }
    },
    getters: {
        taskCount: (state) => state.tasks.length
    },

    mutations: {
        addTask(state, task) {
            state.tasks.push(task)
        }
    },
    actions: {
        addTaskAsync({ commit }, task) {
            setTimeout(()=>{
                commit('addTask', task)
            }, 500)
        }
    }
})