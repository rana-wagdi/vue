<template>
      <ul>
      <learning-resourses  v-for="res in resourses"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"></learning-resourses>
  </ul>
</template>

<script>

import LearningResourses from "./LearningResourses.vue";
export default {
inject: ['resourses'],
    components: {
    LearningResourses
}
}

</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>