<template class="drag">
  <div class="content">
    <header>
      <div class="header__todo"></div>
      
    </header>
    <p class="drag">Drag and drop to reoder list</p>
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
    /* background-attachment: fixed; */
    text-align: center;
    background-color: hsl(235, 21%, 11%);
    position: relative;
    justify-content: center;
    height: auto;
    min-height: 100vh;
}
.drag{
  margin-bottom: 4rem;
  color: aliceblue;
    background-color: hsl(235, 21%, 11%);
  
  /* z-index: 4555555555555; */
}
.header__todo {
  background-image: url("./assets/bg-desktop-dark.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 40vh;
    z-index: 1111;
}
</style>
