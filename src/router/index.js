import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '../views/Example.vue'
import Bezier from '../views/Bezier.vue'
import Crop from '../views/Crop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Example',
    component: Example
  },
  {
    path: '/bezier',
    name: 'Bezier',
    component: Bezier
  },
  {
    path: '/crop',
    name: 'Crop',
    component: Crop
  }
]

const router = new VueRouter({
  routes
})

export default router
