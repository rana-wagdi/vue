<template >
  <div class="content">
    <the-list />
  </div>
</template>

<script>
import TheList from "./components/todo-tasks/TheList.vue";

export default {
  name: "App",
  components: {
    TheList,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
}
.content {
  background-image: url("./assets/bg-desktop-dark.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  background-color: hsl(235, 21%, 11%);
  height: 100vh;
}
</style>
