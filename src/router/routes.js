<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router"
import AdminLayout from "../layout/pagelayout/admin_layout.vue" // đổi lại không có dấu cách

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout,
=======
import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home/home.vue'
import room from '../pages/rooms/Rooms.vue'
import deal from '../pages/deals/Deals.vue'

const routes = [
  {path:'/',
    component:home,
    children: [
      { path: '/room', name: 'room', component: room},
      { path:'/deal',name:'deal',component:deal },
    ]
>>>>>>> fc367a91c2769da4f5ca539f994b8dbc5385cce8
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
