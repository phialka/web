import { createRouter, createMemoryHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'


const routes = [
    {
        path: '/',
        alias: '/messages',
        name: 'main',
        component: MainView
    },
    
]

export default createRouter({
    history: createMemoryHistory(),
    routes
})