import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/index'

// Import CSS
import '../css/admin.css'
import '../css/main.css'
import '../css/Rooms.css'
import '../css/Deals.css'
import '../css/booking.css'
import '../css/room_detail_layout.css'
import '../css/customer_layout.css'
import '../css/room_detail.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
