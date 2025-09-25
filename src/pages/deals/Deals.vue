<main class="content container">
      <!-- Promotions -->
      <section>
        <h2 class="hotel_heading">Ưu đãi khách sạn - Đặt và đi</h2>
        <div class="promo-grid">
          <article v-for="(promo, idx) in promotions" :key="idx" class="promo" >
            <div  class="banner">
              <img :src="promo.img"/>
             
            </div>
            <div class="body">
              <h3>{{ promo.title }}</h3>
              <p>{{ promo.description }}</p>
              <div class="actions">
                <a href="#">Xem chi tiết</a>
                <a href="#" class="cta">Đặt ngay</a>
            </div>
            </div>
          </article>
        </div>
      </section>

</main>
<script>
import { ref, onMounted, onBeforeUnmount } from "vue"
// --- Data khác
const promotions = ref([
  { img: "../../src/assets/images/view7.png", title: "Ưu đãi đặc biệt tuần này", description: "Giảm giá đến 20% cho đặt trước 7 ngày." },
  { img: "../../src/assets/images/view9.png", title: "Gói gia đình", description: "Miễn phí ăn sáng cho trẻ em." },
  { img: "../../src/assets/images/view8.png", title: "Stay Longer", description: "Giảm thêm khi ở từ 3 đêm trở lên." },
])
</script>
