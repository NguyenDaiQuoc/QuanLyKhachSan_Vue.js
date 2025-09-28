
import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home/home.vue'
import room from '../pages/rooms/Rooms.vue'
import deal from '../pages/deals/Deals.vue'
import AdminLayout from "../layout/pagelayout/admin_layout.vue" 

const routes = [
  {path:'/',
    component:home,
    children: [
      { path: '/room', name: 'room', component: room},
      { path:'/deal',name:'deal',component:deal },
      { path: '/admin', name: 'admin', component: AdminLayout},
    ]

  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
