// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Test from '../pages/test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
