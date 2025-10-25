<!-- Hotel list -->
 <template>
       <main>
      <section>
<<<<<<< HEAD
        <h2 class="hotel_heading">Chuỗi Khách sạn A25</h2>
        <div class="hero-wrap">
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
=======
        <h2 class="hotel_heading">Khách sạn Aura</h2>
>>>>>>> 542178101f3338d17a3b991c9c6d7dabda265b1b
        <div class="hotel-grid">
          <div v-for="hotel in hotels" :key="hotel.id" class="hotel-card">
            <div class="promo-grid">
              <div class="brand">
                 <img :src="hotel.img" alt="Ảnh khách sạn" />
              </div>
            </div>
            <div class="meta">
              <h3>{{ hotel.name }}</h3>
              <p>{{ hotel.short }}</p>
              <div class="foot">
                <div class="hotel__price">Từ {{ hotel.price }}₫/đêm</div>
                <a :href="`/room/${hotel.id}`" class="cta">Xem phòng</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
    <script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue"
const hotels = ref([
  { id: 1, img: "../../src/assets/images/view9.png", name: "Phòng A101 - Phòng tiêu chuẩn", roomid: "101", short: "Khách sạn trung tâm, gần phố cổ.", price: "450.000" },
  { id: 2, img: "../../src/assets/images/view2.png", name: "Phòng A102 - Phòng tiêu chuẩn", roomid: "102", short: "Gần bãi biển, view đẹp.", price: "500.000" },
  { id: 3, img: "../../src/assets/images/view3.png", name: "Phòng A103 - Phòng tiêu chuẩn", roomid: "103", short: "Tiện lợi, gần trung tâm thương mại.", price: "550.000" },
  { id: 4, img: "../../src/assets/images/view4.png", name: "Phòng A201 - Phòng cao cấp", roomid: "201", short: "Vịnh biển, nhiều hoạt động.", price: "600.000" },
  { id: 5, img: "../../src/assets/images/view5.png", name: "Phòng A202 - Phòng cao cấp", roomid: "202", short: "Văn hóa cổ kính, yên tĩnh.", price: "650.000" },
  { id: 6, img: "../../src/assets/images/view6.png", name: "Phòng A203 - Phòng cao cấp", roomid: "203", short: "Gần chợ nổi, ẩm thực địa phương.", price: "680.000" },
  { id: 7, img: "../../src/assets/images/view7.png", name: "Phòng A301 - Phòng sang trọng", roomid: "301", short: "Gần chợ nổi, ẩm thực địa phương.", price: "750.000" },
  { id: 8, img: "../../src/assets/images/view8.png", name: "Phòng A302 - Phòng sang trọng", roomid: "302", short: "Gần chợ nổi, ẩm thực địa phương.", price: "780.000" },
  { id: 9, img: "../../src/assets/images/view9.png", name: "Phòng A303 - Phòng sang trọng", roomid: "303", short: "Gần chợ nổi, ẩm thực địa phương.", price: "850.000" },
  { id: 10, img: "../../src/assets/images/view1.png", name: "Phòng A401 - Phòng gia đình", roomid: "401", short: "Gần chợ nổi, ẩm thực địa phương.", price: "900.000" },
  { id: 11, img: "../../src/assets/images/view2.png", name: "Phòng A402 - Phòng gia đình", roomid: "402", short: "Gần chợ nổi, ẩm thực địa phương.", price: "950.000" },
  { id: 12, img: "../../src/assets/images/view3.png", name: "Phòng A403 - Phòng gia đình", roomid: "403", short: "Gần chợ nổi, ẩm thực địa phương.", price: "1.000.000" },
])
<<<<<<< HEAD
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
  new URL('../../assets/images/banner1.png', import.meta.url).href,
  new URL('../../assets/images/banner2.png', import.meta.url).href,
  new URL('../../assets/images/banner.png', import.meta.url).href
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
=======
onMounted(() => {
  document.title = "Danh sách phòng - Khách sạn Aura"
})


>>>>>>> 542178101f3338d17a3b991c9c6d7dabda265b1b
</script>

