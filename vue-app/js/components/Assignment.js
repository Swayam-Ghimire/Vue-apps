export default {
    props: {
        assignment: {
            type: Object,
        }
    },
    template: `
        <li class='flex justify-between items-center'>
            <label :for="assignment.name" class="p-2">{{assignment.name}}&nbsp;</label>
            <input
              type="checkbox"
              :id="assignment.name"
              v-model="assignment.complete" class="m-2"
            />
          </li>
    `
};