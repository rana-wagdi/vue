
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UserFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
      ]
    },
    {
      path: '/users', components: {default: UserList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('user beforeEnter')
        console.log(to, from)
        next()
      }
    },

    // { path: '/teams/:teamId', component: TeamMembers, props: true},
    { path: '/:notFound(.*)', component: NotFound }
    // {path: '/:notFound(.*)' , redirect: '/teams'}
  ],
  linkActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition){
  scrollBehavior(_, _2, savedPosition) {

    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
});
///auth router
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)
  // if(to.name === 'team-members'){
  //   next()
  // }
  next()
})

export default router;