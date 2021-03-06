

const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
            boxDselected: false,
            
        };

    },
    computed: {
        boxAClasses() {
            return {active:this.boxAselected};
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxAselected = !this.boxAselected;
            } else if (box === 'B') {
                this.boxBselected = !this.boxBselected;
            } else if (box === 'C') {
                this.boxCselected = !this.boxCselected;
            } else if (box === 'D') {
                this.boxDselected = !this.boxDselected;
            } 
        }
    }

});
app.mount('#styling');