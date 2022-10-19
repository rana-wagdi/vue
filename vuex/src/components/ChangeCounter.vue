<template>
    <button @click="addOne">Add 5 </button>
</template>

<script>
export default{
methods:{ 
    addOne(){
        this.$store.state.counter++
    }
}
    
}

</script>