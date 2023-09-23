import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useSessionStorage } from '@vueuse/core'
import { publicStore } from '@/stores/publicStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'productDetial',
      component: () => import('../views/ProductDetialView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  const store = publicStore()
  const { init } = store
  const sessionToken: any = useSessionStorage('token', null);

  if (sessionToken.value) {
    await init()
  }
  next()
})


export default router
