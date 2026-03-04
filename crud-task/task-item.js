Vue.component("task-item", {
  props: ["task"],

  data: function () {
    return {
      isEditing: false,
      editedTask: this.task.name,
    };
  },

  template: `
  <div style="margin-bottom:10px; border:1px solid #ccc; padding:10px;">
    <div v-if="!isEditing">
        <p>{{ editedTask }}</p>
        <button @click="isEditing = true">Edit</button>
        <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
    <div v-else>
        <input type="text" v-model="editedTask" @keyup.enter="saveEdit">
        <button @click="saveEdit">Save</button>
        <button @click="cancel">Cancel</button>
    </div>
  </div>`,

  methods: {
    saveEdit() {
      this.$emit("edit-task", {
        id: this.task.id,
        value: this.editedTask,
      });
      this.isEditing = false;
    },

    cancel() {
      this.editedTask = this.task.name;
      this.isEditing = false;
    },
  },
});
