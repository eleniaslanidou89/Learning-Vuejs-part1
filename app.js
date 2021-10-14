const app = Vue.createApp({
    // function
   data() {
       //object
       return {
           showSales: true,
           mails: true,
           title: 'The Final Empire',
           author: 'Brandon Sanson',
           age: '45',
           sales: [
               { shoes: 'shoes -40%', bags: 'bags -10%', img:'assets/K.jpg', isFav: true },
               { shoes: 'shoes -10%', bags: 'bags -10%', img:'assets/K.jpg', isFav: false },
               { shoes: 'shoes -10%', bags: 'bags -10%', img:'assets/K.jpg', isFav: true }
           ],
           url: 'https://www.apliiq.com/designyourown/'
       }
   },
   methods: {
       changeTitle() {
           this.title = 'Words of Randiance'
       },
       toggleShowSales() {
           this.showSales = !this.showSales
       },
       handleEvent() {
           console.log('event')
       },
       infoMails() {
           this.mails = !this.mails
       },
       toggleFav(sale) {
        sale.isFav = !sale.isFav
       }
       
   }
})

app.mount('#app')