import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Store from './views/Store.vue'
import About from './views/About.vue'
import Careers from './views/Careers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    }
  ]
})
