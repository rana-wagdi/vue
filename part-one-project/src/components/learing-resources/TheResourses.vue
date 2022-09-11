<template>
    <base-card>
        <base-button @click="setSelectedTabs('stored-rsourses')">stored Resourses</base-button>
        <base-button @click="setSelectedTabs('AddResourses')">Add Resourses</base-button>
        
 
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredRsourses from "./StoredRsourses.vue";
import AddResourses from "./AddResourses.vue";


export default {
  components: {
    StoredRsourses,
    AddResourses
},
    data(){
        return {
            selectedTab: 'stored-rsourses',
            storedRsourses: [
                {
                  id: "official-guide",
                  title: "offical-Guide One",
                  description: "guide",
                  link: "https://vuejs.org",
                },
                {
                  id: "official-guidee",
                  title: "offical-Guide Two",
                  description: "guide",
                  link: "https://vuejs.org",
                },
                {
                  id: "official-guidess",
                  title: "offical",
                  description: "guide",
                  link: "https://vuejs.org",
                },
         ],
        };
    },
    provide () {
        return {
            resourses: this.storedRsourses
        }
    },
    methods: {
        setSelectedTabs(tab){
            this.selectedTab = tab
        }
    }
}
</script>