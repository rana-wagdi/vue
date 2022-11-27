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
      <span class="clear" @click="$emit('set', 'clear')">Clear Completed</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listLength"],
  data() {
    return {
      type: "all",
    };
  },
  methods: {
    todoType(type) {
      this.type = type;
    },
  },
};
</script>
