const app = Vue.createApp({
    data(){
    return {
    showDetails : false,
        friends: [
        {
            id: 'Manuel',
            name: 'Manuel Lorenz',
            phone: '012345678991',
            email: 'manuel@localhost.com'
        },
        {
            id: 'julie jones',
            name: 'julie jones',
            phone: '9566678991',
            email: 'julie@localhost.com'
        },
        
        ]
        
    }
}, 
methods: {
    toggleShowDetails(id){
        this.showDetails = !this.showDetails
    }
}
})
app.mount('#app')