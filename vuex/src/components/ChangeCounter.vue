<template>
    <button @click="addOne">Add 5 </button>
</template>

<script>
export default{
methods:{ 
    addOne(){
        this.$store.dispatch('increment')
    }
}
    
}

</script>