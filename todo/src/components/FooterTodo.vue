<template>
  <div class="footer_List">
    <div>
      <p>{{ listLength }} items left</p>
    </div>
    <div class="footer__items">
      <span
        :class="type === 'all' ? 'active' : ''"
        @click="$emit('set', 'all'), todoType('all')"
        >All</span
      >
      <span
        :class="type === 'active' ? 'active' : ''"
        @click="$emit('set', 'active'), todoType('active')"
        >Active</span
      >
      <span
        :class="type === 'complete' ? 'active' : ''"
        @click="$emit('set', 'complete'), todoType('complete')"
        >Completed</span
      >
    </div>
    <div>
      <span class="clear" @click="$emit('removeTodo'), todoType('all')">Clear Completed</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listLength", "todoLists"],
  data() {
    return {
      type: "all",
      todoList: this.todoLists,
    };
  },
  methods: {
    todoType(type) {
      this.type = type;
    },
    // removeTodo() {
    //   var result = confirm("Do you want Delete completed TODO are you sure? ");
    //   if (result) {
    //     let a = this.todoList.filter((ele) => !ele.completed);
    //     this.todoList = a
    //     console.log('a', a)
    //   }
    // },
  },
};
</script>
