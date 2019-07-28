import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'


// import firebase from "firebase";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // }
  ]
})

