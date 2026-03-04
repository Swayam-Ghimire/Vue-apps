export default {
    data()  {
        return {
            newAssignment: '',
        };
    },
    template: `
        <form @submit.prevent="add">
            <div class='mt-5 border border-gray-600 text-black divide-x divider-gray-600'>
                <input type='text' class="p-2"         placeholder="Enter new assignment.." v-model='newAssignment'>
                <button type="submit" class='bg-white hover:bg-gray-800 hover:text-white text-black 
                p-2'>Add</button>
            </div>
        </form>
    `,

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        },
    }
};