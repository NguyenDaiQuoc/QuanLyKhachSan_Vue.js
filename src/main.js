import { createApp } from 'vue'
 
import '../css/admin.css'
import '../css/main.css'   // CSS bên ngoài src
import '../css/Rooms.css'
import '../css/Deals.css'
import '../css/booking.css'
import '../css/room_detail_layout.css'
import '../css/customer_layout.css'
import '../css/room_detail.css'
import App from './App.vue' // App.vue trong cùng thư mục
import router from './router/routes.js'
createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

