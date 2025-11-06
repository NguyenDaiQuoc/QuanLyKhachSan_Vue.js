<template>
  <div class="container">
    <div class="  back mb-4">
      <router-link style="color:#333;font-size: 20px;text-decoration: none;" to="/room" class="text-blue-500 hover:underline">
        &larr; Quay lại danh sách phòng
      </router-link>
    </div>

    <div class="p-6">
      <h2>Chi tiết phòng ID: {{ route.params.id }}</h2>
      <p v-if="!room">Đang tải thông tin phòng...</p>
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

    <div class="order-form p-6 border-t mt-4">
        <h2>Đặt phòng</h2>
        <form>
            <label for="checkin">Ngày nhận phòng:</label>
            <input type="date" id="checkin" name="checkin" required />

            <label for="checkout">Ngày trả phòng:</label>
            <input type="date" id="checkout" name="checkout" required />

            <label for="guests">Số lượng khách:</label>
            <input type="number" id="guests" name="guests" min="1" max="10" required />

            <button type="submit">Đặt ngay</button>
        </form>
    </div>
  </div>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const room = computed(() =>
  store.state.room.rooms.find(r => r.id === Number(route.params.id))
)

onMounted(() => {
  if (!store.state.room.rooms.length) {
    store.dispatch('fetchRooms')
  }
})
</script>

<style scoped>
.container{
  margin-top:20px;
  display:flex;
}

.back{
  font-size: 20px;
  color:#333;
  text-decoration: none;
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
  font-size: 18px;
}

p {
  color: #333;
  font-size: 20px;
}

.order-form form {
  color:#333;
  font-size: 20px;
}
</style>
