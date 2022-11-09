<template class="drag">
      <the-list @change-mode="enableLightMode" />
</template>

<script>
import TheList from "./components/TheList.vue";

export default {
  name: "App",
  components: {
    TheList,
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    enableLightMode(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>

<style>

</style>
