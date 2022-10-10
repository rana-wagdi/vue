<template class="drag">
  <div :class="mode">
    <div class="content">
      <header>
        <div class="header__todo"></div>
      </header>
      <!-- <p class="drag">Drag and drop to reoder list</p> -->
      <the-list :modeTheme="mode" />
    </div>
  </div>
</template>

<script>
import TheList from "./components/todo-tasks/TheList.vue";

export default {
  name: "App",
    components: {
    TheList,
  },
  data() {
    return {
      mode: "dark",
    };
  },
   provide() {
    return {
      mode: this.mode
    };
}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
}
.content {
  text-align: center;
  position: relative;
  justify-content: center;
  height: auto;
  min-height: 100vh;
}
.drag {
  margin-bottom: 4rem;
  color: aliceblue;
  background-color: hsl(235, 21%, 11%);
}
.header__todo {
  background-image: url("./assets/bg-desktop-dark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 40vh;
  z-index: 1111;
}
.dark {
  background-color: hsl(235, 21%, 11%);
}
.light {
  background-color: #fff;
}
</style>
