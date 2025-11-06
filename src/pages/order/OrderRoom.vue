<template>
  <div class="order-page">
    <h1>Thông tin đặt phòng</h1>
    <p><b>Tên phòng:</b> {{ route.query.name }}</p>
    <p><b>Giá:</b> {{ route.query.price }} VND</p>
    <p><b>Ngày nhận phòng:</b> {{ route.query.checkin }}</p>
    <p><b>Ngày trả phòng:</b> {{ route.query.checkout }}</p>
    <p><b>Người lớn:</b> {{ route.query.adults }}</p>
    <p><b>Trẻ em:</b> {{ route.query.children }}</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
</script>

<style scoped>
.order-page {
  width: 800px;
  height:800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top:40px;
  background: #333;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
}
</style>


