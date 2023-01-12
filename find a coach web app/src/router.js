import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coachs/CoachList.vue';
import CoachDetails from './pages/coachs/CoachDetails.vue';
import CoachRegister from './pages/coachs/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRegister from './pages/requests/RequestRegister.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'content', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestRegister },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
export default router;
