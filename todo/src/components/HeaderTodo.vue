<template>
     <header class="header_todo">
      <div>
        <h1>TODO</h1>
      </div>
      <div>
        <i
          @click="themeMode"
          class="bi theme_icon"
          :class="{ 'bi-brightness-high-fill': isActive, 'bi-moon': !isActive }"
        ></i>
      </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                isActive: true,
            }
        },
        methods:{
        themeMode() {
          this.isActive = !this.isActive;
          this.$emit("change-mode", this.isActive);
    },        
        }
    }

</script>