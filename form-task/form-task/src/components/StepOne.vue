<template>
  <h1>نموذج طلب المنتج"هندسة الموسم"</h1>
  <h3><span>*</span>بيانات المنظمه</h3>
  <label for="nameOfOrgnization">اسم المنظمة</label><br />
  <input
    type="text"
    name="nameOfOrgnization"
    id="nameOfOrgnization"
    v-model="nameOfOrgnization"
  /><br />
  <label for="activeOfOrgnization">نشاط المنظمة </label><br />
  <input
    type="text"
    name="acriveOfOrgnization"
    id="activeOfOrgnization"
    v-model="activeOfOrgnization"
  /><br />
  <label for="city">المنطقة</label><br />
  <input type="text" name="city" id="city" v-model="city" />
  <label for="government">المركز / المحافظه</label><br />
  <input type="text" name="government" id="government" v-model="government" />
  <h3>الباقة المطلوبة</h3>
  <label for="chooseOption"></label>
  <input type="number" name="chooseOption" id="chooseOption" v-model="chooseOption" />
<p @click="nextPage">التالى</p>
</template>

<script>
export default {
    props:{ currentPage: Number},
    // data(){
    //     return{
    //             numberOfPage: this.currentPage
    //     }
    // },
    methods:{
        nextPage(){
            this.currentPage
console.log(this.urrentPage)
        }
    },
  computed: {
    nameOfOrgnization: {
      get() {
        return this.$store.state.user.nameOfOrgnization;
      },
      set(value) {
        this.$store.commit("updateNameOfOrgnization", value);
      },
    },
    activeOfOrgnization: {
      get() {
        return this.$store.state.user.activeOfOrgnization;
      },
      set(value) {
        this.$store.commit("updateActiveOfOrgnization", value);
      },
    },
    city: {
      get() {
        return this.$store.state.user.city;
      },
      set(value) {
        this.$store.commit("updateCity", value);
      },
    },
    government: {
      get() {
        return this.$store.state.user.government;
      },
      set(value) {
        this.$store.commit("updateGovernment", value);
      },
    },
    chooseOption: {
      get() {
        return this.$store.state.user.chooseOption;
      },
      set(value) {
        this.$store.commit("updateChooseOption", value);
      },
    },
  },
};
</script>
