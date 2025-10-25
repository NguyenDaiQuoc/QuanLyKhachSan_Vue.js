<template>
  <section v-if="currentTab === 'rooms'" class="section">
    <div class="header">
      <h2>Danh sách phòng</h2>
      <button class="btn add" @click="openAdd">+ Thêm phòng</button>
    </div>

    <!-- Tìm kiếm và lọc -->
    <div class="filters">
      <input
        v-model="searchTerm"
        placeholder="🔍 Tìm kiếm theo loại, view..."
        class="search-input"
      />
      <select v-model="filterStatus" class="filter-select">
        <option value="">-- Tất cả trạng thái --</option>
        <option value="Trống">Trống</option>
        <option value="Đã đặt">Đã đặt</option>
        <option value="Đang dọn">Đang dọn</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Ảnh</th>
          <th>Mã phòng</th>
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
        <tr v-for="room in filteredRooms" :key="room.id">
          <td>
            <img :src="room.image || defaultImage" class="thumb" />
          </td>
          <td>{{ room.id }}</td>
          <td>{{ room.type }}</td>
          <td>{{ room.capacity }} người</td>
          <td>{{ room.beds }}</td>
          <td>{{ room.size }} m²</td>
          <td>{{ room.floor }}</td>
          <td>{{ room.view }}</td>
          <td>{{ room.price }} VND</td>
          <!-- Trạng thái đổi màu -->
          <td :class="statusClass(room.status)">{{ room.status }}</td>
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
          <input v-model="form.id" readonly />
        </div>

        <!-- Đổi Loại phòng thành select -->
        <div class="form-row">
          <label>Loại phòng</label>
          <select v-model="form.type" required>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="VIP">VIP</option>
          </select>
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
          <input type="text" v-model="form.size" min="1" required />
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
import { ref, computed } from "vue"
import view1 from "../../assets/images/view1.png"
import view2 from "../../assets/images/view2.png"
import view3 from "../../assets/images/view3.png"
import view4 from "../../assets/images/view4.png"
import view5 from "../../assets/images/view5.png"
import view6 from "../../assets/images/view6.png"
import view7 from "../../assets/images/view7.png"
import view8 from "../../assets/images/view8.png"
import view9 from "../../assets/images/view9.png"
import view10 from "../../assets/images/view1.png"
import view11 from "../../assets/images/view2.png"
import view12 from "../../assets/images/view2.png"
import view13 from "../../assets/images/view3.png"
import view14 from "../../assets/images/view4.png"
import view15 from "../../assets/images/view5.png"
import view16 from "../../assets/images/view6.png"
import view17 from "../../assets/images/view7.png"
import view18 from "../../assets/images/view8.png"
import view19 from "../../assets/images/view9.png"
import view20 from "../../assets/images/view2.png"


const currentTab = ref("rooms")
const defaultImage = "https://via.placeholder.com/80x60?text=Room"

const rooms = ref([
  { id: "P101", type: "Deluxe", capacity: 2, beds: "1 giường đôi", size: 28, floor: 2, view: "Biển", price: "500000", status: "Trống", image: view1 },
  { id: "P102", type: "Deluxe", capacity: 2, beds: "1 giường đôi", size: 28, floor: 2, view: "Biển", price: "500000", status: "Trống", image: view2 },
  { id: "P103", type: "Superior", capacity: 2, beds: "2 giường đơn", size: 30, floor: 3, view: "Hồ bơi", price: "450000", status: "Trống", image: view3 },
  { id: "P104", type: "Suite", capacity: 4, beds: "2 giường đôi", size: 50, floor: 5, view: "Biển", price: "900000", status: "Đã đặt", image: view4 },
  { id: "P105", type: "Standard", capacity: 2, beds: "1 giường đôi", size: 25, floor: 1, view: "Vườn", price: "400000", status: "Trống", image: view5 },
  { id: "P106", type: "Deluxe", capacity: 3, beds: "1 giường đôi + 1 giường đơn", size: 32, floor: 2, view: "Biển", price: "550000", status: "Trống", image: view6 },
  { id: "P107", type: "Superior", capacity: 2, beds: "2 giường đơn", size: 30, floor: 3, view: "Hồ bơi", price: "450000", status: "Đã đặt", image: view7 },
  { id: "P108", type: "Suite", capacity: 4, beds: "2 giường đôi", size: 55, floor: 5, view: "Biển", price: "950000", status: "Trống", image: view8 },
  { id: "P109", type: "Standard", capacity: 2, beds: "1 giường đôi", size: 26, floor: 1, view: "Vườn", price: "420000", status: "Trống", image: view9 },
  { id: "P110", type: "Deluxe", capacity: 2, beds: "1 giường đôi", size: 28, floor: 2, view: "Biển", price: "500000", status: "Đã đặt", image: view10 },
  { id: "P111", type: "Superior", capacity: 2, beds: "2 giường đơn", size: 30, floor: 3, view: "Hồ bơi", price: "450000", status: "Trống", image: view11 },
  { id: "P112", type: "Suite", capacity: 4, beds: "2 giường đôi", size: 50, floor: 5, view: "Biển", price: "900000", status: "Trống", image: view12 },
  { id: "P113", type: "Standard", capacity: 2, beds: "1 giường đôi", size: 25, floor: 1, view: "Vườn", price: "400000", status: "Đã đặt", image: view13 },
  { id: "P114", type: "Deluxe", capacity: 3, beds: "1 giường đôi + 1 giường đơn", size: 32, floor: 2, view: "Biển", price: "550000", status: "Trống", image: view14 },
  { id: "P115", type: "Superior", capacity: 2, beds: "2 giường đơn", size: 30, floor: 3, view: "Hồ bơi", price: "450000", status: "Đã đặt", image: view15 },
  { id: "P116", type: "Suite", capacity: 4, beds: "2 giường đôi", size: 55, floor: 5, view: "Biển", price: "950000", status: "Trống", image: view16 },
  { id: "P117", type: "Standard", capacity: 2, beds: "1 giường đôi", size: 26, floor: 1, view: "Vườn", price: "420000", status: "Trống", image: view17 },
  { id: "P118", type: "Deluxe", capacity: 2, beds: "1 giường đôi", size: 28, floor: 2, view: "Biển", price: "500000", status: "Đã đặt", image: view18 },
  { id: "P119", type: "Superior", capacity: 2, beds: "2 giường đơn", size: 30, floor: 3, view: "Hồ bơi", price: "450000", status: "Trống", image: view19 },
  { id: "P120", type: "Suite", capacity: 4, beds: "2 giường đôi", size: 50, floor: 5, view: "Biển", price: "900000", status: "Trống", image: view20 },
]);

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const form = ref({
  id: "",
  type: "Standard",
  capacity: 1,
  beds: "",
  size: 0,
  floor: 1,
  view: "",
  price: "",
  status: "Trống",
  image: ""
})

// Tìm kiếm & lọc
const searchTerm = ref("")
const filterStatus = ref("")
const filteredRooms = computed(() => {
  return rooms.value.filter(r => {
    const matchSearch =
      r.type.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      r.view.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      r.price.includes(searchTerm.value)

    const matchStatus = filterStatus.value ? r.status === filterStatus.value : true

    return matchSearch && matchStatus
  })
})

// Hàm đổi màu trạng thái
function statusClass(status) {
  if (status === "Trống") return "status-available"
  if (status === "Đã đặt") return "status-booked"
  if (status === "Đang dọn") return "status-cleaning"
  return ""
}

// Sinh mã phòng tự động
function generateRoomId() {
  if (rooms.value.length === 0) return "P101"
  const lastId = rooms.value[rooms.value.length - 1].id
  const num = parseInt(lastId.replace("P", "")) + 1
  return "P" + num
}

function openAdd() {
  isEditing.value = false
  form.value = {
    id: generateRoomId(),
    type: "Standard",
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
  if (form.value.capacity <= 0) {
    alert("Sức chứa phải lớn hơn 0")
    return
  }
  if (form.value.size <= 0) {
    alert("Diện tích phải lớn hơn 0")
    return
  }
  if (form.value.floor <= 0) {
    alert("Tầng phải lớn hơn 0")
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
.filters {
  margin: 10px 0;
}

.search-input {
  width: 500px;
  background-color: #fff;
  padding: 6px;
  font-size: 2.3rem;
  color: #000;
  border-radius: 1rem;
}

.filter-select {
  padding: 6px;
  font-size: 2.3rem;
  border-radius: 1rem;
}

.thumb {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

/* Style cho trạng thái */
.status-available {
  color: green;
  font-weight: bold;
}
.status-booked {
  color: red;
  font-weight: bold;
}
.status-cleaning {
  color: orange;
  font-weight: bold;
}
</style>
