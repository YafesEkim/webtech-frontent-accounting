import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rechnung from '@/views/Rechnung'
import Persons from '@/views/Persons'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rechnung',
    name: 'Rechnung',
    component: Rechnung
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Persons
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
