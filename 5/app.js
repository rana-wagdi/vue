const app = Vue.createApp({
  data() {
    return {
    enteredValue:'',
    goals: []
    };
  },
  methods :{
    addGoal(){
      this.goals.push(this.enteredValue)
    },
    removeGoal() {
      this.goals.remove(this.enteredValue)
    }
  }
});

app.mount('#user-goals');
