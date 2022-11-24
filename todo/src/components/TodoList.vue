<template>
  <div>
    <goal-todo :todoLists="todoLists"></goal-todo>
    <ul>
      <draggable>
        <li class="task_list" v-for="list in setFilter" :key="list.id">
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
      <div>
      <span>{{itemLength}}</span>
        <span @click="filterTodo('all')">all</span>
        <span @click="filterTodo('active')" >active</span>

        <span @click="filterTodo('complete')">complete</span>
      </div>
      <!-- <footer-todo
        :listLength="itemLength"
        :all="filterTodo('all')"
        :active="filterTodo('active')"
        :completed="activeTodo"
      ></footer-todo> -->
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import GoalTodo from "./GoalTodo.vue";
// import FooterTodo from "./FooterTodo.vue";

export default {
  components: {
    draggable,
    GoalTodo,
    // FooterTodo,
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
  
  methods: {
    filterTodo(type) {
      this.type = type;
      console.log("type", type);
    },
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },

  },
  computed: {
    setFilter() {
      return this.todoLists.filter((ele) => {
        switch (this.type) {
          case "all":
            return ele;
          case "complete":
            return ele.completed;
          case 'active':
            return !ele.completed
        }
      });
    },
  },

  mounted() {
    let itemLen = this.todoLists.filter((ele)=> !ele.completed)
    this.itemLength = itemLen.length
  },
  updated() {
    let itemLen = this.todoLists.filter((ele)=> !ele.completed)
    this.itemLength = itemLen.length
  },

};

</script>
