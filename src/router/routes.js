import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home/home.vue'
import room from '../pages/rooms/Rooms.vue'
import deal from '../pages/deals/Deals.vue'
import AdminLayout from "../layout/pagelayout/admin_layout.vue" 
import AdminRoom from "../layout/pagelayout/room_detail_layout.vue"
import AdminCustomer from "../layout/pagelayout/customer_layout.vue"
import AdminDeals from "../layout/pagelayout/deals.vue"
import AdminBooking from "../layout/pagelayout/booking.vue"
const routes = [
  {path:'/',
    component:home,
    children: [
      { path: '/room', name: 'room', component: room},
      { path:'/deal',name:'deal',component:deal },
      { path:'/room/:id',name:'room-detail',component: () => import('../pages/rooms/Room_detail.vue')}
    ]

  },
  { path: '/admin', name: 'admin', component: AdminLayout,
    children: [
      {path:'/admin/room',name:'admin-room',component:AdminRoom},
      {path:'/admin/customer',name:'admin-customer',component:AdminCustomer},
      {path:'/admin/deal',name:'admin-deal',component:AdminDeals},
      {path:'/admin/booking',name:'admin-booking',component:AdminBooking},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
