import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.config'
import store from './store/store.config'



createApp(App)
.use(router)
.use(store)
.mount('#app')
