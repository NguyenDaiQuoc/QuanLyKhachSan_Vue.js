<template>
  <div class="site">
    <!-- Header -->
    <header class="site-header">
      <div class="container inner">
        <div class="logo__brand">
          <img src="../assets/images/logo.png" alt="Logo">
        </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><router-link to="/">Home</router-link></li>
            <li class="nav__item"><router-link to="/room">Đặt Phòng</router-link></li>
            <li class="nav__item"><router-link to="/deal">Ưu Đãi</router-link></li>
            <li class="nav__item"><a href="#">Dịch Vụ</a></li>
            <li class="nav__item"><a href="#">Tuyển Dụng</a></li>
            <li class="nav__item"><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
        <div class="login">
          <button class="login-btn">Đăng nhập</button>
        </div>
      </div>
    </header>

    <!-- Hero / Search -->
    <section class="hero">
      <!-- Slideshow -->
      <div class="slideshow">
        <div 
          v-for="(slide, idx) in slidesData" 
          :key="idx" 
          class="slide" 
          :class="{ active: current === idx }"
          :style="{ backgroundImage: `url(${slide})` }"
        ></div>
      </div>

      <div class="container co">
        <div class="hero-wrap">
          <h1>A25 Hotel — Hệ thống khách sạn hàng đầu</h1>
          <p>Đặt phòng nhanh chóng — Giá tốt — Vị trí trung tâm</p>

          <form @submit.prevent="onSearch" class="search-form">
            <div class="search-field">
              <label>Ngày nhận</label>
              <input ref="checkinEl" type="text" placeholder="Ngày nhận" />
            </div>

            <div class="search-field">
              <label>Ngày trả</label>
              <input ref="checkoutEl" type="text" placeholder="Ngày trả" />
            </div>

            <div class="search-field">
              <label>Người lớn</label>
              <div class="number-input">
                <button type="button" @click="decrement('adults')" class="btn-dec">-</button>
                <input type="text" v-model="adults" readonly />
                <button type="button" @click="increment('adults')" class="btn-inc">+</button>
              </div>
            </div>

            <div class="search-field">
              <label>Trẻ em</label>
              <div class="number-input">
                <button type="button" @click="decrement('children')" class="btn-dec">-</button>
                <input type="text" v-model="children" readonly />
                <button type="button" @click="increment('children')" class="btn-inc">+</button>
              </div>
            </div>

            <div class="search-field">
              <button type="submit" class="btn btn-primary">Tìm phòng</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"

// --- State
const today = new Date().toISOString().slice(0, 10)
const query = ref({ destination: "", checkin: today, checkout: today })

// --- refs cho input
const checkinEl = ref(null)
const checkoutEl = ref(null)

// flatpickr instances
let fpCheckin, fpCheckout

// --- Slideshow
const slidesData = [
  new URL('../assets/images/banner1.png', import.meta.url).href,
  new URL('../assets/images/banner2.png', import.meta.url).href,
  new URL('../assets/images/banner.png', import.meta.url).href
]
const current = ref(0)
let timer = null

// --- Search & increment/decrement
const adults = ref(0)
const children = ref(0)

function onSearch() {
  console.log("Tìm kiếm:", query.value)
  alert(`Tìm: ${query.value.destination} từ ${query.value.checkin} đến ${query.value.checkout}`)
}

function increment(type) {
  if (type === "adults") adults.value++
  else if (type === "children") children.value++
}

function decrement(type) {
  if (type === "adults") {
    if (adults.value > 0) adults.value--
    else alert("Số lượng người lớn không được nhỏ hơn 0")
  } else {
    if (children.value > 0) children.value--
    else alert("Số lượng trẻ em không được nhỏ hơn 0")
  }
}

function nextSlide() {
  current.value = (current.value + 1) % slidesData.length
}

// --- Lifecycle
onMounted(() => {
  fpCheckin = flatpickr(checkinEl.value, {
    dateFormat: "Y-m-d",
    defaultDate: query.value.checkin,
    minDate: "today",
    onChange: (dates, dateStr) => {
      query.value.checkin = dateStr
      if (fpCheckout) fpCheckout.set("minDate", dateStr)
    }
  })

  fpCheckout = flatpickr(checkoutEl.value, {
    dateFormat: "Y-m-d",
    defaultDate: query.value.checkout,
    minDate: query.value.checkin,
    onChange: (dates, dateStr) => {
      query.value.checkout = dateStr
    }
  })

  timer = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  if (fpCheckin) fpCheckin.destroy()
  if (fpCheckout) fpCheckout.destroy()
  if (timer) clearInterval(timer)
})
</script>
