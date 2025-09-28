import { createApp } from 'vue'
<<<<<<< HEAD
import '../css/admin.css'
import '../css/main.css'
import App from "./App.vue"
import router from "./router/routes.js"


const app = createApp(App)
app.use(router)
app.mount('#app')   
=======
import '../css/main.css'   // CSS bên ngoài src
import '../css/Rooms.css'
import '../css/Deals.css'
import App from './App.vue' // App.vue trong cùng thư mục
import router from './router/routes.js'
createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
>>>>>>> fc367a91c2769da4f5ca539f994b8dbc5385cce8
