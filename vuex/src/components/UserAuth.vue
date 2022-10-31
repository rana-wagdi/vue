<template>
    <button @click="logIn" v-if="!isAuth">Login</button>
    <button @click="logOut" v-if="isAuth">Logout  </button>
</template>

<script>
    export default {
        methods: {
            logIn(){
                this.$store.dispatch('loggedIn')
            },
            logOut(){
                this.$store.dispatch('loggedOut')
            }
        },
        computed: {
            isAuth() {
                return this.$store.getters.userIsAuthenticated
            }
        }
    }
</script>
