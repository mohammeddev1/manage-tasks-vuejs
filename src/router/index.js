import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/add-new-task',
    name: 'AddNewTask',
    component: () => import('../pages/AddNewTask.vue'),
  },
  {
    path: '/edit-task/:taskId',
    name: 'EditTask',
    component: () => import('../pages/EditTask.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
