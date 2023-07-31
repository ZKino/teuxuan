import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Register from '@/views/register/index.vue'
import MyOrder from '@/views/myorder/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)', redirect: '/' },
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/myorder', name: 'myorder', component: MyOrder },
  ],
})

export default router
