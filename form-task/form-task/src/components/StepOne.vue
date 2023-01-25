<template>
    <label for="firstName">firstName</label>
    <input type="text" name="firstName" id="firstName" v-model="firstName" />
</template>

<script>
export default{
    data(){
        return{
            // firstName:''
        }
    },
    computed: {
    firstName: {
      get() {
        return this.$store.state.user.firstName
      },
      set(value) {
        this.$store.commit('updateFirstName', value) 
        
      },
    },
}
}
</script>