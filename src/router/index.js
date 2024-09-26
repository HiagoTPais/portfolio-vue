import { createRouter, createWebHistory } from 'vue-router'

import ProjetosView from '../views/ProjetosView.vue'
import SobreView from '../views/SobreView.vue'
import InicioView from '../views/InicioView.vue'
import ContatoView from '../views/ContatoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: InicioView
    },
    {
      path: '/projetos',
      name: 'Projetos',
      component: ProjetosView
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: SobreView
    },
    {
      path: '/contato',
      name: 'Contato',
      component: ContatoView
    },

  ]
})

export default router
