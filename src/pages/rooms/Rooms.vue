<!-- Hotel list -->
 <template>
       <main>
      <section>
        <h2 class="hotel_heading">Chuỗi Khách sạn A25</h2>
        <div class="hotel-grid">
          <div v-for="hotel in hotels" :key="hotel.id" class="hotel-card">
            <div class="promo-grid">
              <div class="brand">
                 <img :src="hotel.img" alt="Ảnh khách sạn" />
              </div>
            </div>
            <div class="meta">
              <h3>Phòng {{ hotel.roomid }}</h3>
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
  { id: 1, img: "../../src/assets/images/view9.png", name: "Phòng A101", roomid: "101", short: "Khách sạn trung tâm, gần phố cổ.", price: "450.000" },
  { id: 2, img: "../../src/assets/images/view2.png", name: "Phòng A102", roomid: "102", short: "Gần bãi biển, view đẹp.", price: "550.000" },
  { id: 3, img: "../../src/assets/images/view3.png", name: "Phòng A103", roomid: "103", short: "Tiện lợi, gần trung tâm thương mại.", price: "500.000" },
  { id: 4, img: "../../src/assets/images/view4.png", name: "Phòng A104", roomid: "104", short: "Vịnh biển, nhiều hoạt động.", price: "600.000" },
  { id: 5, img: "../../src/assets/images/view5.png", name: "Phòng A105", roomid: "105", short: "Văn hóa cổ kính, yên tĩnh.", price: "420.000" },
  { id: 6, img: "../../src/assets/images/view6.png", name: "Phòng A106", roomid: "106", short: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
  { id: 7, img: "../../src/assets/images/view7.png", name: "Phòng A107", roomid: "107", short: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
  { id: 8, img: "../../src/assets/images/view8.png", name: "Phòng A108", roomid: "108", short: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
  { id: 9, img: "../../src/assets/images/view9.png", name: "Phòng A109", roomid: "109", short: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
])
const room = ref ([
  { id: 1, img: "../../src/assets/images/room1.png", name: "Phòng Deluxe", desc: "Phòng rộng rãi với giường king-size, ban công nhìn ra thành phố.", price: "1.200.000" },
  { id: 2, img: "../../src/assets/images/room2.png", name: "Phòng Superior", desc: "Phòng thoải mái với giường queen-size và tiện nghi hiện đại.", price: "900.000" },
  { id: 3, img: "../../src/assets/images/room3.png", name: "Phòng Standard", desc: "Phòng ấm cúng với giường đôi và đầy đủ tiện nghi.", price: "700.000" },
])


</script>
