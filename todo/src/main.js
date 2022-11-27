import App from './App.vue';
import Vue from 'vue';
import VueDragAndDropList from 'vue-drag-and-drop-list';
import './styles/main.css'
Vue.use(VueDragAndDropList);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

