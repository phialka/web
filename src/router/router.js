import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MessagesView from '@/views/MessagesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NewServerView from '@/views/NewServerView.vue'
import NewChannelView from '@/views/NewChannelView.vue'


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
            },
            {
                path: 'server/new',
                name: 'new-server',
                component: NewServerView
            },
            {
                path: 'channel/new',
                name: 'new-channel',
                component: NewChannelView
            },
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