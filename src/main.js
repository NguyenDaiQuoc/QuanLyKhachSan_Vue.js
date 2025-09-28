import { createApp } from 'vue'
import '../css/admin.css'
import '../css/main.css'
import App from "./App.vue"
import router from "./router/routes.js"


const app = createApp(App)
app.use(router)
app.mount('#app')   