import { createRouter, createMemoryHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MessagesView from '@/views/MessagesView.vue'


const routes = [
    {
        path: '',
        name: 'main',
        component: MainView,
        children: [
            {
                path: 'messages/:chatId',
                name: 'messages',
                component: MessagesView
            }
        ]
    },
    
]

export default createRouter({
    history: createMemoryHistory(),
    routes
})