import { createRouter, createWebHistory } from 'vue-router'

import SimpleForm from '../views/SimpleForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SimpleForm,
    alias:'/home'
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
