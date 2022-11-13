<template>
  <div class="goal">
    <div @click="resetTask" class="circle_goal">
      <span class="circle_goal_item"></span>
    </div>
    <input
      class="goal"
      type="text"
      ref="goal"
      v-model="enterGoal"
      placeholder="Create a new todo..."
      @keyup.enter="addTask"
    />
  </div>
</template>

<script>
export default {
props:['todoLists'],
data(){
    return{
        enterGoal: "",
        todoList: this.todoLists
    }
},
  methods: {
    addTask() {
      const enterValue = this.$refs.goal.value;
      if (this.enterGoal.length > 1) {
        this.todoList.push({
          id: new Date().toISOString(),
          task: enterValue,
        });
      } else {
        alert("Please Insert Some Goals");
      }
      this.enterGoal = "";
    },
    resetTask() {
      this.enterGoal = "";
    },
  },
};
</script>
