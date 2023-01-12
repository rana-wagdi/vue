<template>
    <section>
        Filter
    </section>
    <section>
    <div class="controls">
    <button>Refresh</button>
    <router-link to="/register">Register as coash</router-link>
    </div>
       <ul v-if="hasCoach" >
       <li v-for="coach in filterCoaches" :key="coach.id">{{ coach.firstName }}</li>
       </ul>
       <h1  v-else> There is no coaches</h1>
    </section>
</template>

<script>
    export default{
        computed:{
            filterCoaches(){
                return this.$store.getters['coaches/coaches']//first:'nameSpaced'    second:'getters'
            },
            hasCoach(){
                return this.$store.getters['coaches/hasCoaches']
            }
        }
    }
</script>