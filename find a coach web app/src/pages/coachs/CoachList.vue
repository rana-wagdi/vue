<template>
  <coach-filter @change-filter="setFilters"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as coash</base-button>
      </div>
      <ul v-if="hasCoach">
        <coach-item
          v-for="coach in filterCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h1 v-else>There is no coaches</h1>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data(){
    return{
      isActiveFilter:{
        frontend: true,
        backend:true,
        career:true
      }
    }
  },
  computed: {
    filterCoaches() {
      const coaches = this.$store.getters['coaches/coaches']; //first:'nameSpaced'    second:'getters'
      return coaches.filter(coach=> {
      if(this.isActiveFilter.frontend && coach.areas.includes('frontend')){
        return true
      }
      if(this.isActiveFilter.backend && coach.areas.includes('backend')){
        return true
      }
      if(this.isActiveFilter.career && coach.areas.includes('career')){
        return true
      }
        return false
      })
      
    },
    hasCoach() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updateFilters){
      this.isActiveFilter = updateFilters
      console.log("A",updateFilters)
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
