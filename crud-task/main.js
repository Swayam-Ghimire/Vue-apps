new Vue({
  el: "#app",
  data: {
    heading: "Task",
    tasks: [],
    newTask: "",
    count: 0,
  },
  methods: {
    addTask: function () {
      if (this.newTask.trim() === "") return;

      this.tasks.push(
        { 
            id: this.count++, 
            name: this.newTask 
        }
    );
      this.newTask = "";
    },

    editTask: function (payload) {
        const task = this.tasks.find((t) => t.id === payload.id);
        if (task) {
            task.name = payload.value;
        }
    },

    deleteTask: function (index) {
        console.log("Deleting:", index);
        this.tasks = this.tasks.filter((t) => t.id !== index);
    },
  },

  computed: {
    totalTasks: function () {
      return this.tasks.length;
    },
  },
});
