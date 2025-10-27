<template>
  <div class="p-6">
    <h2>Chi tiết phòng ID: {{ route.params.id }}</h2>
    <p v-if="!room">Đang tải thông tin phòng...</p>
    <div v-else>
      <h3>{{ room.name }}</h3>
      <img :src="room.image" :alt="room.name" class="w-full h-auto mb-4" />
      <p>Giá: {{ room.price }} VND</p>
      <p>Trạng thái: {{ room.available ? 'Còn trống' : 'Đã thuê' }}</p>
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
h2 {
  color: #333;
}
</style>
