<template>
  <section class="contact-page">
    <div class="container contact-layout">
      <!-- Hero bên trái -->
      <header class="hero__contact">
        <div class="hero__contact-inner">
          <h1>Liên hệ với {{ hotelName }}</h1>
          <p class="subtitle">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7.</p>
        </div>
      </header>

      <!-- Nội dung bên phải -->
      <div class="contact-content">
        <!-- Quick contact cards -->
        <div class="quick-contact">
          <div class="card phone">
            <svg viewBox="0 0 24 24" class="icon" aria-hidden><path d="M6.6 10.8a11.4 11.4 0 0 0 6.6 6.6l1.8-1.8a1 1 0 0 1 1-.2 10 10 0 0 0 3.1.5 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1 10 10 0 0 0 .5 3.1 1 1 0 0 1-.2 1l-1.8 1.8z"/></svg>
            <div>
              <h4>Hotline đặt phòng</h4>
              <a :href="`tel:${phoneRaw}`">{{ phone }}</a>
            </div>
          </div>

          <div class="card email">
            <svg viewBox="0 0 24 24" class="icon" aria-hidden><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5l-10 6-10-6V6zM2 8.2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.2l-9.4 5.64a2 2 0 0 1-1.2.36 2 2 0 0 1-1.2-.36L2 8.2z"/></svg>
            <div>
              <h4>Email</h4>
              <a :href="`mailto:${email}`">{{ email }}</a>
            </div>
          </div>

          <div class="card location">
            <svg viewBox="0 0 24 24" class="icon" aria-hidden><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            <div>
              <h4>Địa chỉ</h4>
              <address>{{ address }}</address>
            </div>
          </div>
        </div>

        <!-- Hours + Social -->
        <div class="info-blocks">
          <div class="hours">
            <h4>Giờ làm việc</h4>
            <p>Hằng ngày: 07:00 — 22:00</p>
          </div>

          <div class="socials">
            <h4>Kết nối với chúng tôi</h4>
            <div class="icons">
              <i class="fab fa-facebook"></i>
              <a :href="social.facebook" target="_blank" rel="noopener">Facebook</a>
              <i class="fab fa-instagram-square"></i>
              <a :href="social.instagram" target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
        </div>

        <!-- Small FAQ -->
        <section class="faq">
          <h3>Các câu hỏi thường gặp</h3>
          <ul>
            <li><strong>Phòng có cho nhận phòng sớm không?</strong> Vui lòng liên hệ trước để chúng tôi bố trí nếu có thể.</li>
            <li><strong>Chính sách hủy phòng:</strong> Hủy trước 48 giờ để được hoàn phí (tùy loại đặt phòng).</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const hotelName = 'Khách sạn Aura'
const phone = '+84 123 456 789'
const phoneRaw = phone.replace(/\s+/g, '')
const email = 'info@aura-hotel.com'
const address = 'Số 123, Đường ABC, Quận X, TP. HCM'

const social = reactive({
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
})
</script>

<style scoped>
.contact-page{
  background-color: #fff;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
}
.contact-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}
.hero__contact {
  flex: 1;
  background: linear-gradient(180deg,#0b74ff 0%, #2dd4bf 100%);
  border-radius: 12px;
  padding: 40px 20px;
  color: #fff;
  height: 600px;
   font-family: "Dancing Script", cursive;
  font-weight: 600;
  
  margin: 1.5rem 0;
  padding: 0 4rem;
}
.hero__contact h1 {
 font-size: 4rem;
}
.hero__contact .subtitle {
 font-size: 3rem;
}

.contact-content {
  flex: 2;
  font-size: 2rem;
}

.quick-contact {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;
  margin-bottom: 20px;
}
.card {
  background: white;
  border: 1px solid #e6eef5;
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
}
.card .icon {
  width: 36px;
  height: 36px;
  fill: #0b74ff;
}
.card h4 {
  margin: 0 0 4px 0;
  font-size: 14px;
}
.card a, address {
  font-size: 13px;
  color: #0b74ff;
  text-decoration: none;
}

.info-blocks {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
.faq {
  margin-top: 24px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e6eef5;
}
.icons i {
  font-size: 1.6rem;
  margin-right: 8px;
}
.icons a {
  margin-right: 16px;
  text-decoration: none;
  font-size: 1rem;
  color: #0b74ff;
}

@media (max-width: 920px) {
  .contact-layout {
    flex-direction: column;
  }
  .quick-contact {
    grid-template-columns: 1fr;
  }
}
</style>
