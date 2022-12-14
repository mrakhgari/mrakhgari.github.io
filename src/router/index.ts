import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '../views/WorkView.vue'
import AboutView from '../views/AboutView.vue'
import EducationView from '../views/EducationView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    { path: '/', redirect: '/about' },
    {
      path: '/education',
      name: 'education',
      component: EducationView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    }
  ]
})

export default router
