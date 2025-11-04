<template>
  <h1>Danh sách phòng</h1>
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Danh sách phòng</h2>

    <div v-if="loading" class="flex justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
    
    <p v-if="error" class="text-red-600 bg-red-100 p-4 rounded-lg">{{ error }}</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img 
          :src="room.image || '/default-room.jpg'" 
          :alt="room.name"
          class="w-full h-48 object-cover"
        >
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800">{{ room.name }}</h3>
          <div class="mt-2 text-gray-600">
            <p class="text-lg font-bold text-blue-600">{{ formatPrice(room.price) }} VND</p>
            <div class="flex items-center mt-2">
              <span 
                :class="[
                  'px-2 py-1 rounded-full text-sm', 
                  room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]"
              >
                {{ room.available ? 'Còn trống' : 'Đã thuê' }}
              </span>
            </div>
          </div>
          <router-link 
            :to="`/room/${room.id}`"
            class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Xem chi tiết
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const rooms = computed(() => store.state.room.rooms)
const loading = computed(() => store.getters.isLoading)
const error = computed(() => store.getters.error)

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}

onMounted(() => {
  store.dispatch('fetchRooms')
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
