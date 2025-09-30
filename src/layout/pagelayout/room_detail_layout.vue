<template>
  <section v-if="currentTab === 'rooms'" class="section">
    <div class="header">
      <h2>Danh sách phòng</h2>
      <button class="btn add" @click="openAdd">+ Thêm phòng</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Ảnh</th>
          <th>Mã phòng</th>
          <th>Tên phòng</th>
          <th>Loại</th>
          <th>Sức chứa</th>
          <th>Giường</th>
          <th>Diện tích</th>
          <th>Tầng</th>
          <th>View</th>
          <th>Giá</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" :key="room.id">
          <td>
            <img :src="room.image || defaultImage" class="thumb" />
          </td>
          <td>{{ room.id }}</td>
          <td>{{ room.name }}</td>
          <td>{{ room.type }}</td>
          <td>{{ room.capacity }} người</td>
          <td>{{ room.beds }}</td>
          <td>{{ room.size }} m²</td>
          <td>{{ room.floor }}</td>
          <td>{{ room.view }}</td>
          <td>{{ room.price }} VND</td>
          <td>{{ room.status }}</td>
          <td>
            <button class="btn edit" @click="openEdit(room)">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Modal thêm/sửa -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ isEditing ? "Sửa phòng" : "Thêm phòng" }}</h3>
        <div>
          <button type="button" class="btn save" @click="saveRoom">💾 Lưu</button>
          <button type="button" class="btn cancel" @click="closeModal">✖ Hủy</button>
        </div>
      </div>

      <form class="form-grid" @submit.prevent="saveRoom">
        <div class="form-row">
          <label>Mã phòng</label>
          <input v-model="form.id" required />
        </div>

        <div class="form-row">
          <label>Tên phòng</label>
          <input v-model="form.name" required />
        </div>

        <div class="form-row">
          <label>Loại</label>
          <input v-model="form.type" required />
        </div>

        <div class="form-row">
          <label>Sức chứa</label>
          <input type="number" v-model="form.capacity" min="1" required />
        </div>

        <div class="form-row">
          <label>Giường</label>
          <input v-model="form.beds" required />
        </div>

        <div class="form-row">
          <label>Diện tích (m²)</label>
          <input type="number" v-model="form.size" min="0" required />
        </div>

        <div class="form-row">
          <label>Tầng</label>
          <input type="number" v-model="form.floor" min="1" required />
        </div>

        <div class="form-row">
          <label>View</label>
          <input v-model="form.view" required />
        </div>

        <div class="form-row">
          <label>Giá</label>
          <input type="text" v-model="form.price" @input="validatePrice" required />
        </div>

        <div class="form-row">
          <label>Ảnh phòng</label>
          <input type="file" @change="handleImageUpload" />
        </div>

        <div class="form-row">
          <label>Trạng thái</label>
          <select v-model="form.status">
            <option>Trống</option>
            <option>Đã đặt</option>
            <option>Đang dọn</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import view1 from "../../assets/images/view1.png"
const currentTab = ref("rooms")
const defaultImage = "https://via.placeholder.com/80x60?text=Room"

const rooms = ref([
  {
    id: "101",
    name: "Phòng Deluxe",
    type: "Deluxe",
    capacity: 2,
    beds: "1 giường đôi",
    size: 28,
    floor: 2,
    view: "Biển",
    price: "500000",
    status: "Trống",
    image: view1
  },
  {
    id: "102",
    name: "Phòng VIP",
    type: "Suite",
    capacity: 4,
    beds: "2 giường đôi",
    size: 45,
    floor: 3,
    view: "Thành phố",
    price: "800000",
    status: "Đã đặt",
    image: ""
  }
])

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const form = ref({
  id: "",
  name: "",
  type: "",
  capacity: 1,
  beds: "",
  size: 0,
  floor: 1,
  view: "",
  price: "",
  status: "Trống",
  image: ""
})

function openAdd() {
  isEditing.value = false
  form.value = {
    id: "",
    name: "",
    type: "",
    capacity: 1,
    beds: "",
    size: 0,
    floor: 1,
    view: "",
    price: "0",
    status: "Trống",
    image: ""
  }
  showModal.value = true
}

function openEdit(room) {
  isEditing.value = true
  form.value = { ...room }
  showModal.value = true
}

function saveRoom() {
  if (parseFloat(form.value.price) < 0) {
    alert("Giá phòng không được nhỏ hơn 0")
    return
  }
  if (isEditing.value) {
    const idx = rooms.value.findIndex(r => r.id === form.value.id)
    if (idx !== -1) rooms.value[idx] = { ...form.value }
  } else {
    rooms.value.push({ ...form.value })
  }
  closeModal()
}

function validatePrice() {
  form.value.price = form.value.price.replace(/[^0-9]/g, "")
  if (form.value.price === "") form.value.price = "0"
}

function handleImageUpload(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      form.value.image = reader.result
    }
    reader.readAsDataURL(file)
  }
}

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>

</style>
