import { createRouter, createWebHistory } from "vue-router"
import AdminLayout from "../layout/pagelayout/admin_layout.vue" // đổi lại không có dấu cách

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
