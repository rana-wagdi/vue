const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:''
    };
  },
  methods: {
  submitForm(event){
  // event.preventDefault()
    alert("Submittef")
  },
  confirmedInput(){
  this.confirmedName = this.name
  },
    setName(event){
      this.name= event.target.value
    }
  }
});

app.mount('#events');
