const app = new Vue({
    el: '#app',

    // ✅ Data (Reactive State)
    data: {
        title: 'My Task Manager',
        newTask: '',
        tasks: []
    },

    // ✅ Methods
    methods: {
        addTask() {
            if (this.newTask.trim() === '') return;

            this.tasks.push({
                name: this.newTask,
                completed: false
            });

            this.newTask = '';
        },

        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});