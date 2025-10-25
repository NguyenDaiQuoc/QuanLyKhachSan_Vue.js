<template>
  <section v-if="currentTab === 'customers'" class="section">
    <div class="header">
      <h2>Danh sách khách hàng</h2>
      <button class="btn add" @click="openAdd">+ Thêm khách hàng</button>
    </div>

    <!-- Thanh tìm kiếm và lọc -->
    <div class="filters">
      <input
        v-model="searchTerm"
        placeholder="🔍 Tìm kiếm theo tên, email, SĐT..."
        class="search-input"
      />
      <select v-model="filterStatus" class="filter-select">
        <option value="">-- Tất cả trạng thái --</option>
        <option value="Hoạt động">Hoạt động</option>
        <option value="Khóa">Khóa</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Mã KH</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>SĐT</th>
          <th>CCCD</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cus in filteredCustomers" :key="cus.id">
          <td>{{ cus.id }}</td>
          <td>{{ cus.name }}</td>
          <td>{{ cus.email }}</td>
          <td>{{ cus.phone }}</td>
          <td>{{ cus.citizenId }}</td>
          <td>{{ cus.dob }}</td>
          <td>{{ cus.address }}</td>
          <td :class="statusClass(cus.status)">{{ cus.status }}</td>
          <td>
            <button class="btn edit" @click="openEdit(cus)">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Modal thêm/sửa khách hàng -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ isEditing ? "Sửa khách hàng" : "Thêm khách hàng" }}</h3>
        <div>
          <button type="button" class="btn save" @click="saveCustomer">💾 Lưu</button>
          <button type="button" class="btn cancel" @click="closeModal">✖ Hủy</button>
        </div>
      </div>

      <form class="form-grid" @submit.prevent="saveCustomer">
        <div class="form-row">
          <label>Mã KH</label>
          <!-- readonly không cho sửa -->
          <input v-model="form.id" readonly />
        </div>

        <div class="form-row">
          <label>Họ tên</label>
          <input v-model="form.name" required />
        </div>

        <div class="form-row">
          <label>Email</label>
          <input type="email" v-model="form.email" required />
        </div>

        <div class="form-row">
          <label>SĐT</label>
          <input
            type="text"
            v-model="form.phone"
            @blur="validateNumber('SĐT', form.phone, 10)"
            required
          />
        </div>

        <div class="form-row">
          <label>CCCD/CMND</label>
          <input
            type="text"
            v-model="form.citizenId"
            @blur="validateNumber('CCCD', form.citizenId, 12)"
          />
        </div>

        <div class="form-row">
          <label>Ngày sinh</label>
          <input type="text" ref="dobRef" required />
        </div>

        <div class="form-row">
          <label>Địa chỉ</label>
          <input v-model="form.address" />
        </div>

        <div class="form-row">
          <label>Trạng thái</label>
          <select v-model="form.status">
            <option>Hoạt động</option>
            <option>Khóa</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, computed } from "vue"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"

const currentTab = ref("customers")

const customers = ref([
  {
    id: "KH001",
    name: "Nguyễn Văn A",
    email: "vana@example.com",
    phone: "0912345678",
    citizenId: "123456789012",
    dob: "1995-05-20",
    address: "Hà Nội",
    status: "Hoạt động"
  },
  {
    id: "KH002",
    name: "Trần Thị B",
    email: "thib@example.com",
    phone: "0987654321",
    citizenId: "987654321098",
    dob: "1998-08-15",
    address: "TP.HCM",
    status: "Khóa"
  }
])

const showModal = ref(false)
const isEditing = ref(false)
const form = ref({
  id: "",
  name: "",
  email: "",
  phone: "",
  citizenId: "",
  dob: "",
  address: "",
  status: "Hoạt động"
})

// tìm kiếm + lọc
const searchTerm = ref("")
const filterStatus = ref("")

const filteredCustomers = computed(() => {
  return customers.value.filter(cus => {
    const matchSearch =
      cus.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      cus.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      cus.phone.includes(searchTerm.value)

    const matchStatus = filterStatus.value
      ? cus.status === filterStatus.value
      : true

    return matchSearch && matchStatus
  })
})

const dobRef = ref(null)
let dobPicker = null

// Sinh mã KH tự động (KH003, KH004...)
function generateCustomerId() {
  if (customers.value.length === 0) return "KH001"
  const lastId = customers.value[customers.value.length - 1].id
  const num = parseInt(lastId.replace("KH", "")) + 1
  return "KH" + num.toString().padStart(3, "0")
}

function openAdd() {
  isEditing.value = false
  form.value = {
    id: generateCustomerId(), // tự sinh mã KH
    name: "",
    email: "",
    phone: "",
    citizenId: "",
    dob: "",
    address: "",
    status: "Hoạt động"
  }
  showModal.value = true
  nextTick(initDobPicker)
}

function openEdit(cus) {
  isEditing.value = true
  form.value = { ...cus }
  showModal.value = true
  nextTick(initDobPicker)
}

function closeModal() {
  showModal.value = false
}

function initDobPicker() {
  if (dobPicker) dobPicker.destroy()
  dobPicker = flatpickr(dobRef.value, {
    dateFormat: "Y-m-d",
    defaultDate: form.value.dob || null,
    onChange: dates => {
      form.value.dob = dates[0] ? dates[0].toISOString().split("T")[0] : ""
    }
  })
}

function validateNumber(field, value, minLength) {
  // chỉ cho phép số
  if (!/^[0-9]+$/.test(value)) {
    alert(`${field} chỉ được nhập số!`)
    return false
  }

  // không cho số nhỏ hơn hoặc bằng 0
  if (parseInt(value) <= 0) {
    alert(`${field} phải lớn hơn 0!`)
    return false
  }

  // kiểm tra độ dài tối thiểu (nếu có)
  if (minLength && value.length < minLength) {
    alert(`${field} phải có ít nhất ${minLength} số!`)
    return false
  }

  return true
}

function saveCustomer() {
  // validate trước khi lưu
  if (
    !validateNumber("SĐT", form.value.phone, 10) ||
    !validateNumber("CCCD", form.value.citizenId, 12)
  ) {
    return // dừng lại, không lưu
  }

  if (isEditing.value) {
    const idx = customers.value.findIndex(c => c.id === form.value.id)
    if (idx !== -1) customers.value[idx] = { ...form.value }
  } else {
    customers.value.push({ ...form.value })
  }
  closeModal()
}

// CSS đổi màu trạng thái
function statusClass(status) {
  if (status === "Hoạt động") return "status-active"
  if (status === "Khóa") return "status-inactive"
  return ""
}
</script>

<style scoped>

.status-active {
  color: green;
  font-weight: bold;
}
.status-inactive {
  color: red;
  font-weight: bold;
}
</style>
