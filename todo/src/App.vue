<template class="drag">
  <div :class="[isActive ? 'dark' : 'light']">
    <div class="content">
      <header>
        <div class="header__todo"></div>
      </header>
      <the-list @change-mode="enableLightMode" />
    </div>
  </div>
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
