const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAclasses() {
            return { active: this.boxASelected};
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected  
                console.log(this.boxASelected)
            }else if (box === 'B') {
                this.boxBSelected = true
            }else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected
            }
        }

    }
})

app.mount('#styling');
