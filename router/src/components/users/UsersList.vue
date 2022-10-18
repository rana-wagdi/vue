<template>
<button @click="confirmInput">Confirm</button>
<button @click="saveChanged">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
// import { onUnmounted } from '@vue/runtime-core';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput(){
    this.$router.push('/teams')
    // this.$router.back()
    // this.$router.forward()
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('usersList cmp')
    console.log(to, from)
    next()
  }, 
  beforeRouteLeave(to, from, next){
      console.log('userList compinent beforerouterleave ')
      console.log(to, from)
      
      if(this.changesSaved){
          next()
      }else{
        const userWantToLeave =confirm("Are you sure? things will not be changes!")
        next(userWantToLeave)
      }
  },
  unmounted(){
  console.log('unMunted')
  },
  saveChanged(){
    this.changesSaved = true;
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>