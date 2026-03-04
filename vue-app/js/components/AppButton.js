export default {
    props: {
        type: {
            type: String,
            default: "muted",
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
  template: `
            <button :class="{
            'font-bold hover:bg-gray-300 border rounded px-5 py-2' : true, 
            'bg-blue-600' : type === 'primary',
            'bg-red-600' : type === 'secondary',
            'bg-gray-800 text-white' : type === 'muted',
            }" :disabled='processing'>
                <slot />
            </button>
        `,
};
