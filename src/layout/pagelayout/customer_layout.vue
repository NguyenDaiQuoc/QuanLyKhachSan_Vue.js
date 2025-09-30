<template>
  <section v-if="currentTab === 'customers'" class="section">
    <div class="header">
      <h2>Danh sách khách hàng</h2>
      <button class="btn add" @click="openAdd">+ Thêm khách hàng</button>
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
        <tr v-for="cus in customers" :key="cus.id">
          <td>{{ cus.id }}</td>
          <td>{{ cus.name }}</td>
          <td>{{ cus.email }}</td>
          <td>{{ cus.phone }}</td>
          <td>{{ cus.citizenId }}</td>
          <td>{{ cus.dob }}</td>
          <td>{{ cus.address }}</td>
          <td>{{ cus.status }}</td>
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
          <input v-model="form.id" required />
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
          <input type="text" v-model="form.phone" required />
        </div>

        <div class="form-row">
          <label>CCCD/CMND</label>
          <input type="text" v-model="form.citizenId" />
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
import { ref, nextTick } from "vue"
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

const dobRef = ref(null)
let dobPicker = null

function openAdd() {
  isEditing.value = false
  form.value = {
    id: "",
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

function saveCustomer() {
  if (isEditing.value) {
    const idx = customers.value.findIndex(c => c.id === form.value.id)
    if (idx !== -1) customers.value[idx] = { ...form.value }
  } else {
    customers.value.push({ ...form.value })
  }
  closeModal()
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
</script>

<style scoped>

</style>
