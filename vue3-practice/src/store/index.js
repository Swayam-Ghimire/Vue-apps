import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            count: 0,
            double: 0
        };
    },
    // commit
    mutations: {
        increment (state) {
            state.count++,
            state.double = state.count * 2
        }
    },
    // dispatch
    actions: {

    },
    modules: {

    },

    //getters:{}
})
