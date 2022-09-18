<template>
    <base-card>
        <base-button @click="setSelectedTabs('stored-rsourses')" :mode ="storedButton">stored Resourses</base-button>
        <base-button @click="setSelectedTabs('AddResourses')" :mode ="addButton">Add Resourses</base-button>
        
 
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
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
            resourses: this.storedRsourses,
            addResource: this.addResourses,
            deleteResource:this.removeResourse
        }
    },
    computed: {
        storedButton() {
            return this.selectedTab === 'stored-rsourses' ? null : 'flat' ;
        },
        addButton() {
            return this.selectedTab === 'AddResourses' ? null : 'flat' ;
        }
        
    },
    methods: {
        setSelectedTabs(tab){
            this.selectedTab = tab
        },
        addResourses(title, description , url){
            const newResourses = {
                id: new Date().toISOString(),
                title: title,
                description:description,
                link:url
            }
            this.storedRsourses.unshift(newResourses)
            this.selectedTab = 'stored-rsourses'
        },
        removeResourse(resId){
        const resIndex = this.storedRsourses.findIndex((res)=>res.id === resId)
        
        this.storedRsourses.splice(resIndex, 1)
        }
    }
}
</script>