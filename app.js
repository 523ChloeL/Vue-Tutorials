const app = Vue.createApp({
    data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'img/1.jpg', isFav: true},
        { title: 'the way of kings', author: 'brandon sanderson', img: 'img/2.jpg', isFav: false},
        { title: 'the final empire', author: 'brandon sanderson', img: 'img/3.jpg', isFav: true},
      ],
    }
  },
    methods: {
        // changeTitle(abc){
        //     //this.title = 'Words of Randiance'
        //     this.title = abc
        // }
			toggleShowBooks() {
				this.showBooks = !this.showBooks
			},
      toggleFav(book){
        book.isFav - !book.isFav;
      }
      // handleEvent(e){
      //   console.log(e, e.type);
      // },
      // handleMouseMove(e){
      //   this.x = e.offsetX
      //   this.y = e.offsetY
      // }
    },
    computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isFav);
      }
    }
})

app.mount('#app')