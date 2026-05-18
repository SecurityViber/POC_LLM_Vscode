import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MonthlySpecialView from '../views/MonthlySpecialView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/monthly-special',
    name: 'monthly-special',
    component: MonthlySpecialView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
