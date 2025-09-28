<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li :class="{ active: currentTab === 'rooms' }" @click="currentTab = 'rooms'">Quản lý phòng</li>
        <li :class="{ active: currentTab === 'bookings' }" @click="currentTab = 'bookings'">Đặt phòng</li>
        <li :class="{ active: currentTab === 'customers' }" @click="currentTab = 'customers'">Khách hàng</li>
        <li :class="{ active: currentTab === 'promotions' }" @click="currentTab = 'promotions'">Khuyến mãi</li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <h1>Hệ thống quản lý khách sạn</h1>
        <button class="logout">Đăng xuất</button>
      </header>

      <section v-if="currentTab === 'rooms'" class="section">
        <h2>Danh sách phòng</h2>
        <table>
          <thead>
            <tr>
              <th>Mã phòng</th>
              <th>Tên phòng</th>
              <th>Giá</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="room in rooms" :key="room.id">
              <td>{{ room.id }}</td>
              <td>{{ room.name }}</td>
              <td>{{ room.price }} VND</td>
              <td>{{ room.status }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section v-if="currentTab === 'bookings'" class="section">
        <h2>Danh sách đặt phòng</h2>
        <ul>
          <li v-for="booking in bookings" :key="booking.id">
            {{ booking.customer }} - {{ booking.room }} - {{ booking.date }}
          </li>
        </ul>
      </section>

      <section v-if="currentTab === 'customers'" class="section">
        <h2>Khách hàng</h2>
        <ul>
          <li v-for="cus in customers" :key="cus.id">
            {{ cus.name }} - {{ cus.phone }}
          </li>
        </ul>
      </section>

      <section v-if="currentTab === 'promotions'" class="section">
        <h2>Khuyến mãi</h2>
        <ul>
          <li v-for="promo in promotions" :key="promo.id">
            {{ promo.title }} - {{ promo.discount }}%
          </li>
        </ul>
      </section>
    </main>
  </div>
    <router-view />
</template>

<script setup>
import { ref } from "vue"

const currentTab = ref("rooms")

const rooms = ref([
  { id: "101", name: "Phòng Deluxe", price: 500000, status: "Trống" },
  { id: "102", name: "Phòng VIP", price: 800000, status: "Đã đặt" },
  { id: "103", name: "Phòng Standard", price: 350000, status: "Trống" },
])

const bookings = ref([
  { id: 1, customer: "Nguyễn Văn A", room: "Phòng VIP", date: "2025-09-28" },
  { id: 2, customer: "Trần Thị B", room: "Phòng Deluxe", date: "2025-09-30" },
])

const customers = ref([
  { id: 1, name: "Nguyễn Văn A", phone: "0901234567" },
  { id: 2, name: "Trần Thị B", phone: "0912345678" },
])

const promotions = ref([
  { id: 1, title: "Giảm giá mùa hè", discount: 20 },
  { id: 2, title: "Khuyến mãi cuối tuần", discount: 15 },
])
</script>
