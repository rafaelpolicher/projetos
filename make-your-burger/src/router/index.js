import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      // route level code-splitting
      // this generates a separate chunk (Pedidos.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
