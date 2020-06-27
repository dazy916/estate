import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gardens',
    name: 'Gardens',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gardens.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "about" */ '../views/Location.vue')
  },
  {
    path: '/door',
    name: 'Door',
    component: () => import(/* webpackChunkName: "about" */ '../views/Door.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
