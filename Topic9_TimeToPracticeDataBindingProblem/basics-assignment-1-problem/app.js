

const app = Vue.createApp({
    data() {
        return {
            myName: 'Angelica Castillo',
            myAge: 20, 
            myAge2: 20 + 5,
            name: 'Angelica G. Castillo',
            Images: ['https://tse3.mm.bing.net/th?id=OIP.6dAd8u8mdnZ6vuUDl8fnYgHaEK&pid=Api&P=0&w=286&h=162'],
            

        }
    },

  //data() {
   //    return {
      //  Images: ['https://wallup.net/wp-content/uploads/2016/05/14/33418-anime-anime_girls-soft_shading.jpg']
     //  }
   // },



    methods: {
        
        myFavoriteNumber() {
            const favNumber = Math.random();
                if (favNumber < 0.5) {
                    return '  1';
                } else {
                    return '  0';
                }
                },

    

                
            
        
    }


}); 

app.mount('#assignment');