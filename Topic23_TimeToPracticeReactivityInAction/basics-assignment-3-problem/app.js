


const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            if (value > 100) {
            const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 500);
            }
            
        }
    },
    computed: {
        increment() {
            console.log('Running Again...');
            if (this.counter < 37 && this.counter > 0) {
                return 'Not Yet!';
            } else if (this.counter > 37) {
                return 'Too Much!';  
            }
          return  this.counter;
            
        }
    },
    
    
    methods: {
        thisIncrement() {
            console.log('Running Again...');
            if (this.counter < 37 && this.counter > 0) {
                return 'Not Yet!';
            } else if (this.counter > 37) {
                return 'Too Much!';  
            } 
            
          return  this.counter;
        },
        add5(num) { 
            this.counter = this.counter + num;
        },
        add(num) {
            this.counter = this.counter + num;
        },
          
    }
});
 app.mount('#assignment');
