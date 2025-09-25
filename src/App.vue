
<template>
  <div class="site">
    <!-- Header -->
    <header class="site-header">
      <div class="container inner">
          <div class="logo__brand">
            <img src="../../src/assets/images/logo.png">
          </div>
          <nav class="nav" >
            <ul class="nav__list">
              <li class="nav__item"><a href="#">Home</a></li>
              
              <li class="nav__item"><a href="#">Ưu Đãi</a></li>
           
              <li class="nav__item"><a href="#">Dịch Vụ</a></li>
            
              <li class="nav__item"><a href="#">Tin Tức</a></li>
            
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
      <div class="slide active" style="background-image: url('../../src/assets/images/banner1.png')"></div>
      <div class="slide" style="background-image: url('../../src/assets/images/banner2.png')"></div>
      <div class="slide" style="background-image: url('../../src/assets/images/banner.png')"></div>
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
              <input  type="text" v-model="adults" readonly />
              <button type="button" @click="increment('adults')" class="btn-inc">+</button>
            </div>
          </div>



                    <div class="search-field">
            <label>Trẻ em</label>
            <div class="number-input">
              <button type="button" @click="decrement('children')" class="btn-dec">-</button>
              <input  type="text" v-model="children" readonly />
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
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">


  <!-- Giới thiệu khách sạn -->
    <section class="about">
      <div class="container about-inner">
        <div class="about-text animate-left">
          <h2>Giới thiệu về AURA Hotel</h2>
          <p>
            AURA Hotel tự hào là hệ thống khách sạn tiêu chuẩn quốc tế, mang đến cho bạn
            trải nghiệm nghỉ dưỡng sang trọng, tiện nghi và dịch vụ chuyên nghiệp. 
            Chúng tôi luôn nỗ lực đem đến sự hài lòng tuyệt đối cho mỗi du khách.
          </p>
          <p>
            Với vị trí trung tâm, AURA Hotel là lựa chọn hoàn hảo cho cả công tác và nghỉ dưỡng.
          </p>
        </div>
        <div class="about-image animate-right">
          <img src="../../src/assets/images/introduce.png" alt="AURA Hotel" />
        </div>
      </div>
    </section>
      
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

   <!-- Footer -->
<footer class="site-footer">
  <div class="footer-inner container">
    
    <!-- Cột 1: Giới thiệu -->
    <div class="footer-col">
      <h3>AURA Hotel</h3>
      <p>
        AURA Hotel là chuỗi khách sạn hiện đại, mang đến trải nghiệm nghỉ dưỡng 
        thoải mái với dịch vụ chuyên nghiệp và vị trí trung tâm.
      </p>
    </div>

    <!-- Cột 2: Liên kết nhanh -->
    <div class="footer-col">
      <h4>Liên kết nhanh</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Ưu Đãi</a></li>
        <li><a href="#">Dịch Vụ</a></li>
        <li><a href="#">Tin Tức</a></li>
        <li><a href="#">Tuyển Dụng</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>
    </div>

    <!-- Cột 3: Liên hệ -->
    <div class="footer-col">
      <h4>Liên hệ</h4>
      <p>📍 Địa chỉ: Bà Rịa - Vũng Tàu</p>
      <p>📞 Hotline: 0101 2025</p>
      <p>📧 Email: contact@aurahotel.com</p>
      <p>🌐 Website: www.aurahotel.com</p>
    </div>

    <!-- Cột 4: Mạng xã hội -->
    <div class="footer-col">
      <h4>Kết nối với chúng tôi</h4>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook"></i> Facebook</a><br>
        <a href="#"><i class="fab fa-instagram"></i> Instagram</a><br>
        <a href="#"><i class="fab fa-youtube"></i> YouTube</a>
      </div>
    </div>
  </div>

  <!-- Bản quyền -->
  <div class="footer-bottom">
    <p>© {{ new Date().getFullYear() }} AURA Hotel — Mọi quyền được bảo lưu.</p>
  </div>
</footer>


  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"


// --- State
const today = new Date().toISOString().slice(0, 10)

const query = ref({
  destination: "",
  checkin: today,
  checkout: today,
})

// --- refs cho input
const checkinEl = ref(null)
const checkoutEl = ref(null)

// flatpickr instances
let fpCheckin, fpCheckout

// --- Slideshow state
let slides
let current = 0
let timer = null

// --- methods
function onSearch() {
  console.log("Tìm kiếm:", query.value)
  alert(`Tìm: ${query.value.destination} từ ${query.value.checkin} đến ${query.value.checkout}`)
}

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active")
    if (i === index) s.classList.add("active")
  })
}

function nextSlide() {
  current = (current + 1) % slides.length
  showSlide(current)
}

// --- lifecycle
onMounted(() => {
  // Khởi tạo flatpickr
  fpCheckin = flatpickr(checkinEl.value, {
    dateFormat: "Y-m-d",
    defaultDate: query.value.checkin,
    minDate: "today",
    animate: false,
    onChange: (dates, dateStr) => {
      query.value.checkin = dateStr
      if (fpCheckout) fpCheckout.set("minDate", dateStr)
    },
  })

  fpCheckout = flatpickr(checkoutEl.value, {
    dateFormat: "Y-m-d",
    defaultDate: query.value.checkout,
    minDate: query.value.checkin,
    animate: false,
    onChange: (dates, dateStr) => {
      query.value.checkout = dateStr
    },
  })

  // Slideshow
  slides = document.querySelectorAll(".slide")
  if (slides.length) {
    showSlide(current)
    timer = setInterval(nextSlide, 5000)
  }
})

onBeforeUnmount(() => {
  // cleanup flatpickr
  if (fpCheckin) fpCheckin.destroy()
  if (fpCheckout) fpCheckout.destroy()

  // cleanup slideshow
  if (timer) clearInterval(timer)
})





const adults = ref(0)
const children = ref(0)

function increment(type) {
  if (type === "adults") {
    adults.value++
  } else if (type === "children") {
    children.value++
  }
}

function decrement(type) {
  if (type === "adults") {
    if (adults.value > 0) {
      adults.value--
    } else {
      alert("Số lượng người lớn không được nhỏ hơn 0")
    }
  } else if (type === "children") {
    if (children.value > 0) {
      children.value--
    } else {
      alert("Số lượng trẻ em không được nhỏ hơn 0")
    }
  }
}

</script>




<style scoped>

</style>
