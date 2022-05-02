import { createRouter, createWebHistory } from 'vue-router'
import UserPage from "@/views/UserPage";
import CarPage from "@/views/CarPage";
import formManage from "@/components/formManage";


const routes = [
  {
    path: '/',
    name: 'users',
    component: UserPage
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarPage
  },
  {
    path: '/manage',
    name: 'manage',
    component: formManage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
