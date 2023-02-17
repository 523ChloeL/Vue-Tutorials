const app = Vue.createApp({
    data(){
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(abc){
            //this.title = 'Words of Randiance'
            this.title = abc
        }
    }
})

app.mount('#app')