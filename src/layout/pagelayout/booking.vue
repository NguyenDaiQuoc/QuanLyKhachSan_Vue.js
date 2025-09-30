<template>
  <section class="section">
    <div class="header">
      <h2>Danh sách đặt phòng</h2>
      <input type="text" v-model="searchQuery" placeholder="Tìm kiếm theo khách hàng, phòng, trạng thái..." class="search-input"/>
      <button class="btn add" @click="openAdd">+ Thêm đặt phòng</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Mã ĐP</th>
          <th>Khách hàng</th>
          <th>Phòng</th>
          <th>Người lớn</th>
          <th>Trẻ em</th>
          <th>Ngày nhận</th>
          <th>Ngày trả</th>
          <th>Tổng tiền</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in filteredBookings" :key="b.id">
          <td>{{ b.id }}</td>
          <td>{{ b.customer }}</td>
          <td>{{ b.room }}</td>
          <td>{{ b.adults }}</td>
          <td>{{ b.children }}</td>
          <td>{{ b.checkIn }}</td>
          <td>{{ b.checkOut }}</td>
          <td>{{ b.total }} ₫</td>
          <td :class="statusClass(b.status)">{{ b.status }}</td>
          <td>
            <button class="btn edit" @click="openEdit(b)">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal thêm/sửa -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ isEditing ? "Sửa đặt phòng" : "Thêm đặt phòng" }}</h3>
          <div>
            <button class="btn save" @click="saveBooking">💾 Lưu</button>
            <button class="btn cancel" @click="closeModal">✖ Hủy</button>
          </div>
        </div>

        <form class="form-grid" @submit.prevent="saveBooking">
          <div class="form-row">
            <label>Mã ĐP</label>
            <input v-model="form.id" required :readonly="isEditing" />
          </div>

          <div class="form-row">
            <label>Khách hàng</label>
            <select v-model="form.customer" required>
              <option v-for="c in customers" :key="c.id" :value="c.name">{{ c.name }}</option>
            </select>
          </div>

          <div class="form-row">
            <label>Phòng</label>
            <select v-model="form.room" required>
              <option v-for="r in rooms" :key="r.id" :value="r.name">{{ r.name }} ({{ r.price }} ₫/đêm)</option>
            </select>
          </div>

          <div class="form-row">
            <label>Người lớn</label>
            <input type="number" min="1" v-model.number="form.adults" />
          </div>

          <div class="form-row">
            <label>Trẻ em</label>
            <input type="number" min="0" v-model.number="form.children" />
          </div>

          <div class="form-row">
            <label>Ngày nhận</label>
            <input type="text" ref="checkInRef" required />
          </div>

          <div class="form-row">
            <label>Ngày trả</label>
            <input type="text" ref="checkOutRef" required />
          </div>

          <div class="form-row">
            <label>Trạng thái</label>
            <select v-model="form.status">
              <option>Chưa nhận</option>
              <option>Đã nhận</option>
              <option>Đã hủy</option>
            </select>
          </div>

          <div class="form-row">
            <label>Tổng tiền</label>
            <input :value="calculateTotal()" readonly />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, computed } from "vue"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"

// Dữ liệu demo
const customers = ref([
  { id: "KH001", name: "Nguyễn Văn A" },
  { id: "KH002", name: "Trần Thị B" }
])
const rooms = ref([
  { id: "R101", name: "101", price: 500000 },
  { id: "R102", name: "102", price: 600000 }
])

const bookings = ref([
  { id: "DP001", customer: "Nguyễn Văn A", room: "101", adults: 2, children: 1, checkIn: "2025-10-01", checkOut: "2025-10-05", total: 2000000, status: "Chưa nhận" }
])

const showModal = ref(false)
const isEditing = ref(false)
const form = ref({
  id: "",
  customer: "",
  room: "",
  adults: 1,
  children: 0,
  checkIn: "",
  checkOut: "",
  status: "Chưa nhận"
})

const checkInRef = ref(null)
const checkOutRef = ref(null)
let checkInPicker = null
let checkOutPicker = null

const searchQuery = ref('')

// Computed lọc booking
const filteredBookings = computed(() => {
  if (!searchQuery.value) return bookings.value
  const q = searchQuery.value.toLowerCase()
  return bookings.value.filter(b =>
    b.customer.toLowerCase().includes(q) ||
    b.room.toLowerCase().includes(q) ||
    b.status.toLowerCase().includes(q)
  )
})

function openAdd() {
  isEditing.value = false
  form.value = { id: "", customer: "", room: "", adults: 1, children: 0, checkIn: "", checkOut: "", status: "Chưa nhận" }
  showModal.value = true
  nextTick(initPickers)
}

function openEdit(b) {
  isEditing.value = true
  form.value = { ...b }
  showModal.value = true
  nextTick(initPickers)
}

function saveBooking() {
  const total = calculateTotal()
  if (isEditing.value) {
    const idx = bookings.value.findIndex(b => b.id === form.value.id)
    if (idx !== -1) bookings.value[idx] = { ...form.value, total }
  } else {
    bookings.value.push({ ...form.value, total })
  }
  closeModal()
}

function closeModal() {
  showModal.value = false
}

function initPickers() {
  if (checkInPicker) checkInPicker.destroy()
  if (checkOutPicker) checkOutPicker.destroy()

  checkInPicker = flatpickr(checkInRef.value, {
    dateFormat: "Y-m-d",
    defaultDate: form.value.checkIn || null,
    onChange: dates => form.value.checkIn = dates[0] ? dates[0].toISOString().split("T")[0] : ""
  })
  checkOutPicker = flatpickr(checkOutRef.value, {
    dateFormat: "Y-m-d",
    defaultDate: form.value.checkOut || null,
    onChange: dates => form.value.checkOut = dates[0] ? dates[0].toISOString().split("T")[0] : ""
  })
}

// Tính tổng tiền
function calculateTotal() {
  const room = rooms.value.find(r => r.name === form.value.room)
  if (!room || !form.value.checkIn || !form.value.checkOut) return 0
  const start = new Date(form.value.checkIn)
  const end = new Date(form.value.checkOut)
  const days = Math.max(1, (end - start)/(1000*60*60*24))
  return days * room.price
}

// Color code trạng thái
function statusClass(status) {
  if (status === "Chưa nhận") return "status-pending"
  if (status === "Đã nhận") return "status-confirmed"
  if (status === "Đã hủy") return "status-cancelled"
  return ""
}
</script>
