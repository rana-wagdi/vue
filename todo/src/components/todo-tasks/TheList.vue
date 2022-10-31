<template>
  <div class="todo__content">
    <header class="header_todo">
      <div>
        <h1>TODO</h1>
      </div>
      <div>
        <i
          @click="themeMode"
          class="bi theme_icon"
          :class="{ 'bi-brightness-high-fill': isActive, 'bi-moon': !isActive }"
        ></i>
      </div>
    </header>
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
    <ul>
      <draggable>
        <li class="task_list" v-for="list in todoLists" :key="list.id">
          <div class="task_list_content">
            <input
              class="goalCheck"
              :value="list.id"
              type="checkbox"
              v-model="checkedNames"
            />
            <span class="task_list_text">{{ list.task }}</span>
          </div>
          <span @click="removeTask(list.id)"
            ><i class="bi bi-x-circle close_icon"></i
          ></span>
        </li>
        <p class="task_list">{{ itemLength }} items left</p>
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  props: ["modeTheme"],
  components: {
    draggable,
  },
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
      itemLength: "",
      checkedNames: [],
      // themeColor: true,
      isActive: true,
    };
  },

  methods: {
    addTask() {
      const enterValue = this.$refs.goal.value;
      if (this.enterGoal.length > 1) {
        this.todoLists.push({
          id: new Date().toISOString(),
          task: enterValue,
        });
      } else {
        alert("Please Insert Some Goals");
      }
      this.enterGoal = "";
    },
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      console.log(taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      console.log("as", taskId.checked);
      let checkGoall = document.querySelectorAll(".goalCheck");

      for (var i = 0; i <= checkGoall.length - 1; i++) {
        var checkBoox = checkGoall[i];
        if (checkBoox.checked) {
          if (checkBoox.value == taskId) {
            this.itemLength = 10;
            console.log(this.itemLength);
          }
        }
      }
      this.todoLists.splice(todoELePosition, 1);
    },
    resetTask() {
      this.enterGoal = "";
    },
    listLength() {
      let checkGoal = document.querySelectorAll(".goalCheck");
      console.log(checkGoal.length);
    },
    themeMode() {
      this.isActive = !this.isActive;
      this.$emit("change-mode", this.isActive);
    },
  },
  mounted() {
    let checkGoal = document.querySelectorAll(".goalCheck");
    this.itemLength = checkGoal.length;
  },
  updated() {
    let checkGoal = document.querySelectorAll(".goalCheck");
    this.itemLength = checkGoal.length;
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
  position: absolute;
  top: 30px;
  left: 30%;
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
li {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.goal {
  display: flex;
  background-color: hsl(235, 24%, 19%);
  border: none;
  padding: 0.5rem 0.9rem;
  width: 100%;
  border-radius: 5px;
  color: hsl(236, 9%, 61%);
}
.task_list_content {
  position: relative;
}
.task_list {
  display: flex;
  background-color: hsl(235, 24%, 19%);
  border: none;
  padding: 1rem 0.9rem;
  width: 100%;
  border-bottom: 1px solid #393a4c;
  color: hsl(236, 9%, 61%);
}
.task_list:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.task_list:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.task_list_text {
  margin: 0.5rem 1rem;
  font-size: 1.3rem;
  color: hsl(236, 33%, 92%);
  cursor: pointer;
}
.close_icon {
  padding-top: 0.4rem;
  display: none;
  cursor: pointer;
  font-size: 1.3rem;
}

.task_list:hover .close_icon {
  display: block !important;
}
ul {
  margin-top: 1.5rem;
}
.circle_goal {
  max-width: 56px;
  height: 28px;
  padding: 1.2px;
  /* background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); */
  background-color: hsl(236, 9%, 61%);
  border-radius: 50%;
  margin-top: 0.5rem;
  cursor: pointer;
}
.circle_goal:hover {
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
.circle_goal_item {
  background-color: hsl(235, 24%, 19%);
  color: white;
  padding: 13px 13px;
  display: block;
  border-radius: 50%;
}
input:focus {
  outline: none !important;
  color: #fff;
}
.goalCheck {
  background-color: hsl(235, 24%, 19%);
}
.goalCheck[type="checkbox"] {
  width: 1.5rem;
  height: 1.5rem;
  color: hsl(236, 9%, 61%);
  /* vertical-align: middle; */
  vertical-align: sub;
  -webkit-appearance: none;
  background: none;
  border: 1px solid;
  border-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: hsl(235, 24%, 19%);
  transition: background 300ms;
  cursor: pointer;
  margin-top: 0.5rem;
}
.goalCheck[type="checkbox"]:hover {
  color: hsl(192, 100%, 67%);
}
[type="checkbox"]::before {
  content: "";
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  background-size: contain;
}
[type="checkbox"]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  /* background-image: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%); */
  /* background-image:  linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); */
}
.goalCheck[type="checkbox"]:checked ~ .task_list_text {
  opacity: 0.2;
  text-decoration: line-through;
}
[type="checkbox"]:checked {
  background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
</style>
