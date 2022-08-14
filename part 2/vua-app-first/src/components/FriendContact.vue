<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="toggleDetailsVisable">ShowDetails</button>
    <ul v-if="detalisVisable">
      <li>Phone Number: {{friends.phone}}</li>
      <li>Phone Number: {{friends.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detalisVisable: false,
      friends: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },

  methods: {
  toggleDetailsVisable(){
    this.detalisVisable = !this.detalisVisable
  }
    
  },
};
</script>