import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ListProductions from '@/views/ListProductions.vue'
import LaunchProduction from '@/views/LaunchProduction.vue'
import ListActors from '@/views/ListActors.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-productions',
    name: 'ListProductions',
    component: ListProductions
  },
  {
    path: '/launch-production',
    name: 'LaunchProduction',
    component: LaunchProduction
  },
  {
    path: '/list-actors',
    name: 'ListActors',
    component: ListActors
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
