<template>
 <div :class="[isActive ? 'dark' : 'light']">
    <div class="content">
        <div class="header__todo"></div>
  <div class="todo__content">
    <header-todo @change-mode="enableLightMode"></header-todo>
    <goal-todo :todoLists="todoLists"></goal-todo>
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
  </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import HeaderTodo from './HeaderTodo.vue';
import GoalTodo from './GoalTodo.vue';

export default {
  props: ["modeTheme"],
  components: {
    draggable,
    HeaderTodo,
    GoalTodo
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
      // enterGoal: "",
      itemLength: "",
      checkedNames: [],
      isActive: true,
    };
  },

  methods: {
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
    listLength() {
      let checkGoal = document.querySelectorAll(".goalCheck");
      console.log(checkGoal.length);
    },
    themeMode() {
      this.isActive = !this.isActive;
      this.$emit("change-mode", this.isActive);
    },
    enableLightMode(isActive) {
      this.isActive = isActive;
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
