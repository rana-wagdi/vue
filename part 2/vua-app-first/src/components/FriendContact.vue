<template>
  <li>
    <h2>{{ name }} {{ isFavorite == true ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleDetailsVisable">ShowDetails</button>
    <ul v-if="detalisVisable">
      <li>Phone Number: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:
  // [
  // 'name',
  // 'phoneNumber',
  // 'emailAddress',
  // 'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
    },
  },
  emits: ['toggle-favorite'],
  data() {
    return {
      detalisVisable: false,

      // friendIsFavorite: this.isFavorite,
    };
  },

  methods: {
    toggleDetailsVisable() {
      this.detalisVisable = !this.detalisVisable;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
      // if(this.friendIsFavorite === '1'){
      //   this.friendIsFavorite == '0'
      // }else {
      //   this.friendIsFavorite == '1'
      // }
      // this.isFavorite = !this.isFavorite
    },
  },
};
</script>