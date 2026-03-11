import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  data() {
    return {
      assignments: [
        
      ],
    };
  },
  methods: {
    add(newName) {
        if(newName.trim() !== ''){
            this.assignments.push({
                id: this.assignments.length + 1,
                name: newName,
                complete: false,
                tag:'new',
            });
        }
    },
  },
  computed: {
    inProgress() {
      return this.assignments.filter((a) => a.complete === false);
    },

    isCompleted() {
      return this.assignments.filter((a) => a.complete === true);
    },
  },
  created() {
    fetch('http://localhost:3001/assignments')
    .then(response=>response.json())
    .then(assignments => {
        this.assignments = assignments
    });
  },
  components: {
    "assignment-list": AssignmentList,
    "assignment-create": AssignmentCreate,
  },
  template: `
        <section class='flex gap-8'> 
        <assignment-list :assignments= 'inProgress' title='In Progress'><assignment-create @add='add'></assignment-create></assignment-list>
        <assignment-list :assignments= 'isCompleted' title='Completed'></assignment-list>
        </section>
        
        
    `,
};
