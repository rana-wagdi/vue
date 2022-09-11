<template>
<TheHeader title="RememberMe"></TheHeader>
    <the-resourses></the-resourses>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResourses from './components/learing-resources/TheResourses.vue';

export default {
  name: "App",
  components: {

    TheHeader,
    TheResourses
},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
