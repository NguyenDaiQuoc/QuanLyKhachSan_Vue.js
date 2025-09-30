<template>
  <section v-if="currentTab === 'promotions'" class="section">
    <div class="header">
      <h2>Danh sách ưu đãi</h2>
      <button class="btn add" @click="openAdd">+ Thêm ưu đãi</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Mã ƯĐ</th>
          <th>Tên ưu đãi</th>
          <th>Giảm (%)</th>
          <th>Ngày bắt đầu</th>
          <th>Ngày kết thúc</th>
          <th>Mô tả</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promo in promotions" :key="promo.id">
          <td>{{ promo.id }}</td>
          <td>{{ promo.name }}</td>
          <td>{{ promo.discount }}</td>
          <td>{{ promo.startDate }}</td>
          <td>{{ promo.endDate }}</td>
          <td>{{ promo.description }}</td>
          <td>{{ promo.status }}</td>
          <td>
            <button class="btn edit" @click="openEdit(promo)">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Modal thêm/sửa ưu đãi -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ isEditing ? "Sửa ưu đãi" : "Thêm ưu đãi" }}</h3>
        <div>
          <button type="button" class="btn save" @click="savePromotion">💾 Lưu</button>
          <button type="button" class="btn cancel" @click="closeModal">✖ Hủy</button>
        </div>
      </div>

      <form class="form-grid" @submit.prevent="savePromotion">
        <div class="form-row">
          <label>Mã ƯĐ</label>
          <input v-model="form.id" required />
        </div>

        <div class="form-row">
          <label>Tên ưu đãi</label>
          <input v-model="form.name" required />
        </div>

        <div class="form-row">
          <label>Giảm (%)</label>
          <input type="number" v-model="form.discount" min="0" max="100" required />
        </div>

        <div class="form-row">
          <label>Ngày bắt đầu</label>
          <input type="text" ref="startDateRef" required />
        </div>

        <div class="form-row">
          <label>Ngày kết thúc</label>
          <input type="text" ref="endDateRef" required />
        </div>

        <div class="form-row">
          <label>Mô tả</label>
          <textarea v-model="form.description"></textarea>
        </div>

        <div class="form-row">
          <label>Trạng thái</label>
          <select v-model="form.status">
            <option>Hoạt động</option>
            <option>Ngừng</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"

const currentTab = ref("promotions")

const promotions = ref([
  {
    id: "UD001",
    name: "Giảm giá mùa hè",
    discount: 20,
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    description: "Ưu đãi đặc biệt cho khách đặt phòng mùa hè.",
    status: "Hoạt động"
  },
  {
    id: "UD002",
    name: "Combo 2 đêm",
    discount: 15,
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    description: "Đặt 2 đêm được giảm ngay 15%.",
    status: "Ngừng"
  }
])

const showModal = ref(false)
const isEditing = ref(false)
const form = ref({
  id: "",
  name: "",
  discount: 0,
  startDate: "",
  endDate: "",
  description: "",
  status: "Hoạt động"
})

const startDateRef = ref(null)
const endDateRef = ref(null)
let startPicker = null
let endPicker = null

function openAdd() {
  isEditing.value = false
  form.value = {
    id: "",
    name: "",
    discount: 0,
    startDate: "",
    endDate: "",
    description: "",
    status: "Hoạt động"
  }
  showModal.value = true
  nextTick(initPickers)
}

function openEdit(promo) {
  isEditing.value = true
  form.value = { ...promo }
  showModal.value = true
  nextTick(initPickers)
}

function savePromotion() {
  if (isEditing.value) {
    const idx = promotions.value.findIndex(p => p.id === form.value.id)
    if (idx !== -1) promotions.value[idx] = { ...form.value }
  } else {
    promotions.value.push({ ...form.value })
  }
  closeModal()
}

function closeModal() {
  showModal.value = false
}

function initPickers() {
  if (startPicker) startPicker.destroy()
  if (endPicker) endPicker.destroy()

  startPicker = flatpickr(startDateRef.value, {
    dateFormat: "Y-m-d",
    defaultDate: form.value.startDate || null,
    onChange: dates => {
      form.value.startDate = dates[0] ? dates[0].toISOString().split("T")[0] : ""
    }
  })

  endPicker = flatpickr(endDateRef.value, {
    dateFormat: "Y-m-d",
    defaultDate: form.value.endDate || null,
    onChange: dates => {
      form.value.endDate = dates[0] ? dates[0].toISOString().split("T")[0] : ""
    }
  })
}
</script>

