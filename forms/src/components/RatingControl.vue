<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: activeOption === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button"  @click="activate('great')" >Greate</button></li>
    </ul>
</template>
<script>
    export default {
    
        data(){
            return{
                activeOption: null
            }
        },
        methods: {
            activate(option){
                this.activeOption = option
            }
        }
    }
</script>
<style scoped>
.active{
    border-color: blueviolet;
}
.active button{
    color: violet;
}
</style>