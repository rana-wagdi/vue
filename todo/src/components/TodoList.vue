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
        :listLength="itemLength"
        :all="allTodo"
        :active="activeTodo"
        :completed="completed"
      ></footer-todo>
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
          completed: false,
        },
      ],
      // enterGoal: "",

      itemLength: 0,
      todoL: [],
      completedTodo: [],
      notChecked: [],
      checkTodo: [],
    };
  },
  watch: {
    todoLists: {
      handler() {
        this.todoL = this.todoLists;

        console.log(this.todoL);
        this.completedTodo = this.todoL.filter((ele) => ele.completed);
        this.notChecked = this.todoL.filter((ele) => !ele.completed);
      },
      deep: true,
    },
  },
  methods: {
    removeTask(taskId) {
      const getTaskId = this.todoLists.find((ele) => ele.id == taskId);
      const todoELePosition = this.todoLists.indexOf(getTaskId);
      this.todoLists.splice(todoELePosition, 1);
    },
    allTodo() {
      this.todoLists = this.todoL;
    },
    completed() {
      // this.completedTodo = this.todoLists.filter((ele) => ele.completed);
      // this.todoLists = this.completedTodo;
      this.todoLists = this.completedTodo;
    },

    activeTodo() {
      this.todoLists = this.notChecked;
    },
  },
  // allTodo(){

  // },

  mounted() {
    // this.itemLength =  this.notChecked.length
  },
  updated() {
    this.todoL = this.todoLists;

    console.log(this.todoL);
    // console.log("gA",this.todoLists.completed)
    //   let a=this.todoLists.filter(this.checkedNames)
    // console.log(a)
    // console.log(this.checkedNames)
    // for (let i of this.checkedNames){
    // //  let a = this.todoLists.find((el)=> el.id == i )
    //  let a =this.todoLists.filter((el)=>el.id == i)
    //  console.log("a",a)
    //  const todoELePosition = this.todoLists.indexOf(a);
    //  this.todoLists.splice(todoELePosition, 1);
    //  console.log("a",todoELePosition)
    // }
  },
  // checkGoal.filter()
  // console.log(i)
  // console.log("i", i.value)
  // console.log()
  // console.log("i",i.value)
  //      let a=i.filter(this.checkedNames)
  // console.log(a)
};
// console.log(this.notChecked)

//  console.log(this.notChecked)
//  this.itemLength= this.notChecked.length
//  let a = checkGoal.filter(this.checkedNames)
//  console.log(this.checkedNames)
// this.itemLength = checkGoal.length;
</script>
