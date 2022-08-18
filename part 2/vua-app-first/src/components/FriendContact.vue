<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleDetailsVisable">ShowDetails</button>
    <ul v-if="detalisVisable">
      <li>Phone Number: {{phoneNumber}}</li>
      <li>Email: {{emailAddress}}</li>
    </ul>
  </li>
</template>

<script>

export default {
  props: [
  'name',
  'phoneNumber',
  'emailAddress',
  'isFavorite'
  ],
  data() {
    return {
      detalisVisable: false,
      friends: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite
    };
  },

  methods: {
  toggleDetailsVisable(){
    this.detalisVisable = !this.detalisVisable
  },
  toggleFavorite(){
    if(this.friendIsFavorite === '1'){
      this.friendIsFavorite == '0'
    }else {
      this.friendIsFavorite == '1'
    }
    // this.isFavorite = !this.isFavorite
  }
    
  },
};
</script>