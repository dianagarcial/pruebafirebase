import { createApp } from 'vue'
import App from './App.vue'
import store from './store/user/Index'
import router from './routes'
createApp(App)
.use(store)
.use(router)
.mount('#app')
