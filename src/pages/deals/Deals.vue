<template>
  <main class="content container">
    <!-- Promotions -->
    <section>
      <h2 class="hotel_heading">Ưu đãi khách sạn - Đặt và đi</h2>
      <div class="promo-grid">
        <article v-for="(promo, idx) in promotions" :key="idx" class="promo">
          <div class="banner">
            <img :src="promo.img" :alt="promo.title" />
          </div>

          <div class="body">
            <h3>{{ promo.title }}</h3>
            <p>{{ promo.description }}</p>
            <div class="actions">
              <button class="btn-view" @click="openDetail(promo.detail)">
                Xem chi tiết
              </button>
              <button class="cta" @click="bookNow(promo)">
                Đặt ngay
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Modal chi tiết -->
    <div v-if="showDetail" class="modal-overlay">
      <div class="modal-box">
        <h3>Chi tiết ưu đãi</h3>
        <p class="detail-text">{{ currentDetail }}</p>
        <button class="close-btn" @click="closeDetail">Đóng</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue"

const showDetail = ref(false)
const currentDetail = ref("")

function openDetail(detail) {
  currentDetail.value = detail
  showDetail.value = true
}

function closeDetail() {
  showDetail.value = false
}

function bookNow(promo) {
  alert(`Bạn đã chọn ưu đãi: ${promo.title}`)
}

const promotions = ref([
  {
    img: "../../src/assets/images/view7.png",
    title: "Ưu đãi đặc biệt tuần này",
    description: "Giảm giá đến 20% cho đặt trước 7 ngày.",
    detail: `Chi tiết:
Giảm 10% tổng giá trị phòng khi ở từ 3–5 đêm.
Giảm 15% khi ở 6 đêm trở lên.
Miễn phí 1 bữa tối đặc biệt cho 2 người tại nhà hàng của khách sạn.
Dọn phòng hằng ngày và dịch vụ giặt ủi miễn phí cho 1 bộ quần áo/ngày.

Điều kiện áp dụng:
Không hoàn hủy sau khi xác nhận đặt phòng.
Không áp dụng cho kỳ nghỉ lễ hoặc Tết.

Ưu điểm nổi bật:
👉 Phù hợp với khách lưu trú dài ngày, muốn tận hưởng trọn vẹn không gian nghỉ dưỡng với chi phí hợp lý.`,
  },
  {
    img: "../../src/assets/images/view9.png",
    title: "Gói gia đình",
    description: "Miễn phí ăn sáng cho trẻ em.",
    detail: `Chi tiết:
Phòng gia đình rộng rãi, miễn phí ăn sáng cho 2 trẻ dưới 12 tuổi.
Tặng vé khu vui chơi trẻ em trong khuôn viên khách sạn.
Giảm 15% dịch vụ spa cho bố mẹ.

Điều kiện áp dụng:
Không áp dụng kèm ưu đãi khác.
Áp dụng cho kỳ nghỉ tối thiểu 2 đêm.`,
  },
  {
    img: "../../src/assets/images/view8.png",
    title: "Stay Longer",
    description: "Giảm thêm khi ở từ 3 đêm trở lên.",
    detail: `Chi tiết:
Giảm 20% tổng hóa đơn phòng khi ở từ 3 đêm trở lên.
Miễn phí đưa đón sân bay 1 chiều.
Tặng voucher đồ uống tại quầy bar.

Điều kiện áp dụng:
Chỉ áp dụng cho đặt phòng trực tiếp qua website.`,
  },
])
</script>
