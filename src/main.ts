import './assets/style/main.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'


const app = createApp(App)

app.use(createPinia().use((context) => createPersistedStatePlugin()(context)))
app.use(router)

app.mount('#app')
