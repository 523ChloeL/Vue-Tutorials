const app = Vue.createApp({
    data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss'},
        { title: 'the way of kings', author: 'brandon sanderson'},
        { title: 'the final empire', author: 'brandon sanderson'},
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
            handleEvent(e){
                console.log(e, e.type);
            },
            handleMouseMove(e){
                this.x = e.offsetX
                this.y = e.offsetY
            }
    }
})

app.mount('#app')