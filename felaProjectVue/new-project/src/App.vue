<template>
<the-header></the-header>
<HomePage></HomePage>
  <div></div>
  <!-- <script src="./assets/js/jquery.min.js"></script> -->
</template>

<script>
// import carousel from 'vue-owl-carousel'
import TheHeader from './components/layout/TheHeader.vue'
import HomePage from './components/Ui/HomePage.vue';


export default {
// import './assets/js/jquery.min.js';
  name: 'App',
  components: {
    TheHeader,
    HomePage,

},
// mounted() {
//   // let script = document.createElement('script');
// 	  // script.setAttribute('src','./assets/js/jquery.min.js');
// },
}
</script>

<style>
  /* @import './assets/js/jquery.min.js'; */


  @import './assets/css/aos.css';
  @import './assets/css/bootstrap.rtl.min.css';
  @import './assets/css/header.css';
  @import './assets/css/rtl.css';
  @import './assets/css/style.css';
  @import './assets/css/rtl.css';
  @import './assets/css/responsive.css';
  @import './assets/css/index-rtl.css';
  @import './assets/css/flaticon.css';
  @import './assets/css/remixicon.css';
  /* @import './assets/js/jquery.min.js; */
  /* @import './assets/css/owl.carousel.min.css'; */
  @import './assets/css/fancybox.css';
  /* @import './assets/css';
  @import './assets/css'; */


</style>
