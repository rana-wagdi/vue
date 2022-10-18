import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
import router from './router';
import App from './App.vue';

const app = createApp(App);
app.use(router);

app.mount('#app');
