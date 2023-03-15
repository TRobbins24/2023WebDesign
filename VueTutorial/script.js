const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: '1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: '2.jpg', isFav: fase},
                { title: 'name of the wind', author: 'brandon sanderson', img: '3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
