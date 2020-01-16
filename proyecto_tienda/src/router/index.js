import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/carne',
    name: 'carne',
    component: () => import(/**/ '@/views/Carne.vue')
  },
  {
    path: '/pollo',
    name: 'pollo',
    component: () => import(/**/ '@/views/Pollo.vue')
  },
  {
    path: '/huevo',
    name: 'huevo',
    component: () => import(/** */ '@/views/Huevo.vue')
  },
  {
    path: '/arroz',
    name: 'arroz',
    component: () => import(/** */ '@/views/Arroz.vue')
  },
  {
    path: '/azucar',
    name: 'azucar',
    component: () => import(/** */ '@/views/Azucar.vue')
  },
  {
    path: '/fideo',
    name: 'fideo',
    component: () => import(/** */ '@/views/Fideo.vue')
  },
  {
    path: '/sal',
    name: 'sal',
    component: () => import(/** */ '@/views/Sal.vue')
  },
  {
    path: '/aceite',
    name: 'aceite',
    component: () => import(/** */ '@/views/Aceite.vue')
  },
  {
    path: '/adereso',
    name: 'adereso',
    component: () => import(/**/ '@/views/Adereso.vue')
  },
  {
    path: '/otro',
    name: 'otro',
    component: () => import(/**/ '@/views/Otro.vue')
  },
  {
    path: '/embutido',
    name: 'embutido',
    component: () => import(/**/ '@/views/Embutido.vue')
  },
  {
    path: '/condimento',
    name: 'condimento',
    component: () => import(/** */ '@/views/Condimento.vue')
  },
  {
    path: '/lacteo',
    name: 'lacteo',
    component: () => import(/** */ '@/views/Lacteo.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/** */ '@/views/Contacto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
