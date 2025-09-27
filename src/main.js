import { createApp } from 'vue'
import '../css/main.css'   // CSS bên ngoài src
import '../css/Rooms.css'
import '../css/Deals.css'
import App from './App.vue' // App.vue trong cùng thư mục
import router from './router/routes.js'
createApp(App).mount('#app')
createApp(App).use(router).mount('#app')