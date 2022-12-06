<template>
  <div>
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
    <!-- <goal-todo  :todoLists="todoLists"></goal-todo> -->
    <ul>
      <draggable>
        <li class="task_list" v-for="list in setFilter(type)" :key="list.id">
          <div class="task_list_content">
            <input
              class="goalCheck"
              :value="list.id"
              type="checkbox"
              v-model="list.completed"
            />
            <span class="task_list_text">{{ list.task }}</span>
          </div>
          <span @click="removeTask(list.id)"
            ><i class="bi bi-x-circle close_icon"></i
          ></span>
        </li>
      </draggable>
      <footer-todo
        @removeTodo="removeAllCheckedTodo"
        :listLength="itemLength"
        @set="setFilter"
      ></footer-todo>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import GoalTodo from "./GoalTodo.vue";
import FooterTodo from "./FooterTodo.vue";

export default {
  components: {
    draggable,

    // GoalTodo,
    FooterTodo,
  },
  data() {
    return {
      todoLists: [
        {
          id: "try to die",
          task: "try to die",
          completed: false,
        },
        {
          id: "study",
          task: "study",
          completed: false,
        },
        {
          id: "go to hoomme!",
          task: "go to hoomme!",
          completed: true,
        },
      ],
      itemLength: 0,
      type: "all",
      enterGoal: "",
    };
  },
  watch: {
    todoLists: {
      handler() {
        localStorage.setItem("todoList", JSON.stringify(this.todoLists));
      },
      deep: true,
    },
  },
  methods: {
    addTask() {
      const enterValue = this.$refs.goal.value;
      if (this.enterGoal.length > 0) {
        this.todoLists.push({
          id: new Date().toISOString(),
          task: enterValue,
          completed: false,
        });
      } else {
        alert("Please Insert Some Goals");
      }
      this.enterGoal = "";
    },
    resetTask() {
      this.enterGoal = "";
    },
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },
    removeAllCheckedTodo() {
      var result = confirm("Do you want Delete completed TODO are you sure? ");
      if (result) {
        this.todoLists = this.todoLists.filter((ele) => !ele.completed);
        // removeCompletedTodo
        // this.todoLists = removeCompletedTodo
      }
    },
    setFilter(type) {
      this.type = type;
      return this.todoLists.filter((ele) => {
        switch (type) {
          case "all":
            return ele;
          case "complete":
            return ele.completed;
          case "active":
            return !ele.completed;
        }
      });
    },
  },
  mounted() {
    this.todoLists = JSON.parse(
      localStorage.getItem("todoList") || this.todoLists
    );
    let itemLen = this.todoLists.filter((ele) => !ele.completed);
    this.itemLength = itemLen.length;
  },
  updated() {
    let itemLen = this.todoLists.filter((ele) => !ele.completed);
    this.itemLength = itemLen.length;
    // localStorage.setItem('todoList', JSON.stringify(this.todoLists))
  },
};
</script>
