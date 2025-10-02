<!-- Hotel list -->
 <template>
       <main>
      <section>
        <h2 class="hotel_heading">Khách sạn Aura</h2>
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
onMounted(() => {
  document.title = "Danh sách phòng - Khách sạn Aura"
})


</script>
