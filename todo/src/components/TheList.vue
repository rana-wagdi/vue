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

</style>
