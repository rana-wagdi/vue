const app = Vue.createApp({
    data() {
    return {
        courseGoal: 'Finish The course and learn Vue!',
        vueLink: 'https://vuejs.org/'
    }
    }
})

app.mount('#user-goal')