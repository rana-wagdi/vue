<template>
  <div class="todo__content">
    <header class="header_todo">
      <div>
        <h1>TODO</h1>
      </div>
      <div>
      <!-- <i class="bi bi-brightness-high-fill"></i> -->
        <i class="bi bi-brightness-high-fill theme_icon"></i>
      </div>
    </header>
    <!-- <form> -->
      
    <input class="goalCheck"  type="checkbox">
    <input
      class="goal"
      type="text"
      ref="goal"
      v-model="enterGoal"
      placeholder="Create a new todo..."
    />
    <button @click="addTask">I Got This!</button>
    <!-- </form> -->
    <ul>
      <li v-for="list in todoLists" :key="list.id">
        {{ list.task }} <span @click="removeTask(list.id)">X</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoLists: [
        {
          id: "try to die",
          task: "try to die",
        },
        {
          id: "study",
          task: "study",
        },
        {
          id: "go to hoomme!",
          task: "go to hoomme!",
        },
      ],
      enterGoal: "",
    };
  },
  methods: {
    addTask() {
      const enterValue = this.$refs.goal.value;
      // console.log(enterValue);
      if (this.enterGoal.length > 1) {
        this.todoLists.push({
          id: new Date().toISOString(),
          task: enterValue,
        });
      } else {
        alert("Please Insert Some Goals");
      }
      this.enterGoal = " ";
    },
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },
  },
};
</script>
<style scoped>
.todo__content {
  width: 30%;
  margin: auto;
  text-align: left;
  padding: 5rem 0 1rem 0;
    font-family: "Josefin Sans", sans-serif;

}
.header_todo {
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.header_todo .theme_icon {
  cursor: pointer;
  font-size: 1.5rem;
}
.todo__content h1 {
  color: #fff;
  text-align: left;
  letter-spacing: 0.8rem;
}
.goal{
  background-color: hsl(235, 24%, 19%);
  border: none;
  padding: .5rem;
  width:70%;

}
</style>