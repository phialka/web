import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MessagesView from '@/views/MessagesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const routes = [
    {
        path: '',
        name: 'main',
        component: MainView,
        redirect: { name: 'messages' },
        children: [
            {
                path: 'messages',
                name: 'messages',
                component: MessagesView
            }
        ]
    },
    {
        path: '/:undefined(.*)*',
        name: 'notFound',
        component: NotFoundView
    }
    
]

export default createRouter({
    history: createWebHistory(),
    routes
})