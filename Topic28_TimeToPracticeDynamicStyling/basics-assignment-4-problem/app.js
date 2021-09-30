
const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userSelected: 'user1, user2',
            isHidden: false,
            userColor: '',
            userColorInput: ''
           
            
            
               
            
        }
    },
    methods: {
        colorPicked() {
            this.userColor = this.userColorInput;
        },
        buttonClicked() {
            if (this.isHidden) 
            this.isHidden = false 
            else 
            this.isHidden = true
        },
        
        
       
        input() {
            if (this.userInput === '') {
                return '';
            } 
            this.userSelected = this.userInput;
            
        }
    }
});
app.mount('#assignment');