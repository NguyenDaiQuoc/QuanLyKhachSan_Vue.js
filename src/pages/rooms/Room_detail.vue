<template>
  <div class="container">


    <div class="p-6">
      <router-link style="color:#333;font-size: 20px;text-decoration: none;" to="/room"
        class="text-blue-500 hover:underline">
        &larr; Quay lại danh sách phòng
      </router-link>
      <h2>Chi tiết phòng ID: {{ route.params.id }}</h2>
      <p v-if="!room">Không tìm thấy thông tin phòng</p>
      <div v-else>
        <div class="content">
          <h3>{{ room.name }}</h3>
          <img :src="room.image" :alt="room.name" class="w-full h-auto mb-4" />
          <p>Giá: {{ room.price }} VND</p>
          <p>Trạng thái: {{ room.available ? 'Còn trống' : 'Đã thuê' }}</p>
          <p>Mô tả: {{ room.desciption }}</p>
          <p>Tiện nghi: {{ room.amenities }}</p>
          <p>Sức chứa: {{ room.capacity }}</p>
          <p>Loại giường: {{ room.bedtype }}</p>
          <p>Diện tích: {{ room.acreage }}</p>
          <p>Quy định: {{ room.rule }}</p>
          <p>Chính sách giữ phòng: {{ room.conservation }}</p>
        </div>
      </div>
    </div>

    <div class="order border-t mt-4">
      <h2>Đặt phòng</h2>
      <form @submit.prevent="handleBooking">
        <label for="checkin">Ngày nhận phòng:</label>
        <input type="date" id="checkin" v-model="checkin" required />

        <label for="checkout">Ngày trả phòng:</label>
        <input type="date" id="checkout" v-model="checkout" required />

        <label for="guests">Số lượng khách:</label>
        <div class="guest-inputs">
          <label for="adults">Người lớn:</label>
          <input type="number" id="adults" v-model="adults" min="0" max="10" required />
          <label for="children">Trẻ em:</label>
          <input type="number" id="children" v-model="children" min="0" max="10" required />
        </div>

        <button type="submit">Đặt ngay</button>
      </form>
    </div>
  </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

const room = computed(() =>
  store.state.room.rooms.find(r => r.id === Number(route.params.id))
)

onMounted(() => {
  if (!store.state.room.rooms.length) {
    store.dispatch('fetchRooms')
  }
})

// 🧾 Các biến lấy từ form
const checkin = ref('')
const checkout = ref('')
const adults = ref(1)
const children = ref(0)

// 🧭 Hàm xử lý khi nhấn "Đặt ngay"
const handleBooking = (e) => {
  e.preventDefault()

  // Kiểm tra hợp lệ đơn giản
  if (!checkin.value || !checkout.value) {
    alert('Vui lòng chọn ngày nhận và trả phòng!')
    return
  }

  // Điều hướng sang trang /order và gửi dữ liệu qua query params
  router.push({
    path: '/order',
    query: {
      roomId: room.value.id,
      name: room.value.name,
      price: room.value.price,
      checkin: checkin.value,
      checkout: checkout.value,
      adults: adults.value,
      children: children.value
    }
  })
}

</script>

<style scoped>
.container {
  display: flex;
  background-color: #f2f2f2;
  padding: 20px;
  gap: 20px;
}

h2 {
  color: #333;
  font-size: 24px;
}

h3 {
  color: #333;
  font-size: 22px;
}

.content {
  color: #333;
  float: left;
  display: block;
}

.content p {
  color: #333;
  font-size: 16px;
}

p {
  color: #333;
  font-size: 16px;
}

.order {
  font-size: 18px;
  width: 40%;
  background-color: #185F56;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  float: left;
  height: 500px;
  font-family: roboto, cursive;
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
  color: #fff;
  position: sticky;
  top: 20px;
}

.order h2 {
  color: #fff;
}

.order form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  text-align: left;
  font-size: 18px;
  font-family: roboto, cursive;
  font-weight: bold;
  color: #fff;
}

.order input,
.order label {
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}

.order button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  font-family: roboto, cursive;
}

.order .guest-inputs {
  display: flex;
  gap: 10px;
  align-items: center;
}

.p-6 {
  text-align: justify;
  width: 80%;
}

.container .w-full {
  width: 800px;
  height: 500px;
}

.container .w-full:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
