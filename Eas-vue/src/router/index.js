import { createRouter, createWebHistory } from 'vue-router'
import Form from '../component/TheWelcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Form
    },
    {
      path: '/CekStatus',
      name: 'about',
      component: () => import('../AuthPage/CekStatus.vue')
    }
  ]
})

export default router