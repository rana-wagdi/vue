<template>
  <div :class="[isActive ? 'dark' : 'light']">
    <div class="content">
      <div class="header__todo"></div>
      <div class="todo__content">
        <header-todo @change-mode="enableLightMode"></header-todo>
        <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTodo from "./HeaderTodo.vue";
import TodoList from "./TodoList.vue";

export default {
  props: ["modeTheme"],
  components: {
    HeaderTodo,
    TodoList,
  },
  data() {
    return {
      isActive: true,
    };
  },

  methods: {
    themeMode() {
      this.isActive = !this.isActive;
      this.$emit("change-mode", this.isActive);
    },
    enableLightMode(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>
