<template  lang="ar">
  <h1>hello</h1>
  <form>
    <component :currentPage="currentStep" :is="this.stepsList[this.currentStep]"> </component>
    <p @click="pervious">back</p>
    <p @click="next">to</p>
  </form>
</template>
<script>
import StepOne from '@/components/StepOne.vue';
import StepTwo from '@/components/StepTwo.vue'

export default {
    components:{
        StepOne,
        StepTwo
    },
  data() {
    return {
      currentStep: 0,
      stepsList: ["StepOne",'StepTwo'],
    };
  },
  methods:{
    pervious(){
        if(this.currentStep > 0){
        this.currentStep--
        }
    },
    next(){
        if(this.currentStep < 1){
        this.currentStep++
        }

    }

  }
};
</script>
<style>
    *{
        direction: rtl;
    }
</style>