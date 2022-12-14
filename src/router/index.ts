import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EducationView from '../views/EducationView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('../views/AboutView.vue')
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    }
  ]
})

export default router
