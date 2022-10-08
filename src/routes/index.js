import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../components/registro.vue')
  },
  {
    path: '/ingreso',
    name: 'Iniciosesion',
    component: () => import('../components/iniciosesion.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Upload.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router