import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'},
    {
    name: 'teams',
      path: '/teams', component: TeamsList, children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
      ]
    },
    { path: '/users', component: UserList },
    // { path: '/teams/:teamId', component: TeamMembers, props: true},
    { path: '/:notFound(.*)', component: NotFound }
    // {path: '/:notFound(.*)' , redirect: '/teams'}
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');
