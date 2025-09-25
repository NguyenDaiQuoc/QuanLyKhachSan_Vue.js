<!-- Hotel list -->
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
              <h3>{{ hotel.city }}</h3>
              <p>{{ hotel.short }}</p>
              <div class="foot">
                <div class="hotel__price">Từ {{ hotel.price }}₫/đêm</div>
                <a href="#" class="cta">Xem phòng</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <script>
    import { ref, onMounted, onBeforeUnmount } from "vue"
const hotels = ref([
  { id: 1, img: "../../src/assets/images/view6.png", name: "A25 Hotel - Hà Nội", city: "Hà Nội", short: "Khách sạn trung tâm, gần phố cổ.", price: "450.000" },
  { id: 2, img: "../../src/assets/images/view2.png", name: "A25 Hotel - Đà Nẵng", city: "Đà Nẵng", short: "Gần bãi biển, view đẹp.", price: "550.000" },
  { id: 3, img: "../../src/assets/images/view3.png", name: "A25 Hotel - TP. HCM", city: "TP. HCM", short: "Tiện lợi, gần trung tâm thương mại.", price: "500.000" },
  { id: 4, img: "../../src/assets/images/view4.png", name: "A25 Hotel - Nha Trang", city: "Nha Trang", short: "Vịnh biển, nhiều hoạt động.", price: "600.000" },
  { id: 5, img: "../../src/assets/images/view5.png", name: "A25 Hotel - Huế", city: "Huế", short: "Văn hóa cổ kính, yên tĩnh.", price: "420.000" },
  { id: 6, img: "../../src/assets/images/view6.png", name: "A25 Hotel - Cần Thơ", city: "Cần Thơ", short: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
])
</script>