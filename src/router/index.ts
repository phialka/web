import MessagesView from '@/views/MessagesView.vue'

import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MessagesView
    }
  ]
})