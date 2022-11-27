<template>
  <div>
    <goal-todo :todoLists="todoLists"></goal-todo>
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
      <footer-todo :listLength="itemLength" @set="setFilter"></footer-todo>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import GoalTodo from "./GoalTodo.vue";
import FooterTodo from "./FooterTodo.vue";

export default {
  components: {
    draggable,
    GoalTodo,
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
    };
  },
  watch: {},
  methods: {
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },
    setFilter(type) {
      this.type = type;
      if (type === "clear") {
        this.todoLists.forEach((ele) => {
          if (ele.completed) {
            let indexOfCompletedTodo = this.todoLists.indexOf(ele);
            var result = confirm('Do you want Delete completed TODO are you sure? ')
            if(result){
              this.todoLists.splice(indexOfCompletedTodo, 1);

            }
          }
          this.type = "all";
          return this.todoLists;
        });
      } else
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
    clearCompleted() {
      return this.todoLists.filter((ele) => !ele.completed);
    },
  },
  mounted() {
    let itemLen = this.todoLists.filter((ele) => !ele.completed);
    this.itemLength = itemLen.length;
  },
  updated() {
    let itemLen = this.todoLists.filter((ele) => !ele.completed);
    this.itemLength = itemLen.length;
  },
};
</script>
