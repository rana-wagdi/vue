<template>
  <div>
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
      </draggable>
    <footer-todo :listLength="itemLength"></footer-todo>
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
      itemLength: 0,
      checkedNames: [],
      notChecked: []
    };
  },
  methods: {
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },
    listLength() {
      let checkGoal = document.querySelectorAll(".goalCheck");
      console.log(checkGoal.length);
    },

  },
  mounted() {
      // this.itemLength =  this.notChecked.length
    },
    updated() {
      let checkGoal = document.querySelectorAll(".goalCheck");
     for(let i of checkGoal){
      if(i.checked == false){
        // console.log("i", i.value)
        
        this.notChecked.push(i.value)
        
      }
     
     }
     console.log()
    //  this.itemLength= this.notChecked.length
    //  let a = checkGoal.filter(this.checkedNames)
     console.log(this.checkedNames)
      // this.itemLength = checkGoal.length;
    },
};
</script>
