<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li :class="{ active: $route.path === '/admin/room' }">
          <router-link to="/admin/room">Quản lý Phòng</router-link>
        </li>
        <li :class="{ active: $route.path === '/admin/customer' }">
          <router-link to="/admin/customer">Khách Hàng</router-link>
        </li>
        <li :class="{ active: $route.path === '/admin/booking' }">
          <router-link to="/admin/booking">Đặt Phòng</router-link>
        </li>
        <li :class="{ active: $route.path === '/admin/deal' }">
          <router-link to="/admin/deal">Ưu Đãi</router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <h1>Hệ thống quản lý khách sạn</h1>
        <button class="logout">Đăng xuất</button>
      </header>
      <router-view />
    </main>
  </div>
    
</template>


