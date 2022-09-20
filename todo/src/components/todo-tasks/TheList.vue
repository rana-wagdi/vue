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
    
      <div class="goal">
      <div @click="resetTask" class="circle_goal">
      <span class="circle_goal_item"></span>
      </div>
    <!-- <input class="goalCheck" type="checkbox"> -->
    
    <input
      class="goal"
      type="text"
      ref="goal"
      v-model="enterGoal"
      placeholder="Create a new todo..."
      @keyup.enter="addTask"
    />
    </div>
    <!-- <button @click="addTask">I Got This!</button> -->
    <!-- </form> -->
    <ul>
      <li class="task_list" v-for="list in todoLists" :key="list.id">
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
    resetTask(){
      this.enterGoal =""
    }
  },
};
</script>
<style scoped>
.todo__content {
  width: 40%;
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
  font-weight: bolder;
  letter-spacing: 0.8rem;
  margin-bottom: 3rem;
}
.goal{
  display: flex;
  background-color: hsl(235, 24%, 19%);
  border: none;
  padding: 0.5rem 0.9rem;
  width:100%;
  border-radius: 5px;
  /* margin: 0 0.9rem; */
  color: hsl(236, 9%, 61%);
  /* padding: 4rem auto ; */
}
.task_list{
    display: flex;
  background-color: hsl(235, 24%, 19%);
  border: none;
  padding: 0.5rem 0.9rem;
  width:100%;
  /* border-radius: 5px; */
  border-bottom: 1px solid #393a4c;

  /* margin: 0 0.9rem; */
  color: hsl(236, 9%, 61%);
}
ul{
  margin-top: 2rem;
}
.circle_goal{
    max-width: 56px;
    height: 28px;
    padding: 1.2px;
    /* background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); */
    background-color: hsl(236, 9%, 61%);
    border-radius: 50%;
    margin-top: 0.5rem;
    cursor: pointer;
}
.circle_goal:hover{
background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
.circle_goal_item{
  background-color: hsl(235, 24%, 19%);
    color: white;
    padding: 13px 13px;
    display: block;
    border-radius: 50%;
}
input:focus {
    outline: none !important;
    /* border:1px solid red;
    box-shadow: 0 0 10px #719ECE; */
    color: #fff;
  }
.goalCheck{
  background-color: hsl(235, 24%, 19%);
}
.goalCheck[type=checkbox] {
  width: 1.5rem;
  height: 1.5rem;
  color: dodgerblue;
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 1px solid ;
  border-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); 
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: hsl(235, 24%, 19%);;
  transition: background 300ms;
  cursor: pointer;
  margin-top: 0.5rem;
  
}
[type=checkbox]::before {
  content: "";
  /* color: transparent; */
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  /* background-color: blue; */
  background-size: contain;
  /* box-shadow: inset 0 0 0 1px #CCD3D8; */
}
[type=checkbox]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  /* background-image: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%); */
  /* background-image:  linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); */
}

[type=checkbox]:checked {
  background-image:  linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

</style>