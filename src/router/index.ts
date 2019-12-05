import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import login from '../views/login.vue';
import home from '../views/home-so.vue';
import register from '../views/register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: login,
  },
  {
    path: '/home-so',
    name: 'home-so',
    component: home,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
