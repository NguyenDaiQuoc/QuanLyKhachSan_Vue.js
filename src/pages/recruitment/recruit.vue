<!-- Tuyển dụng -->
<template>

  <section class="careers">
    <div class="container careers-inner">
      <div class="careers-text animate-left">
        <h2>Tuyển dụng tại AURA Hotel</h2>
        <p>
          Chúng tôi luôn coi con người là tài sản quý giá nhất. 
          AURA Hotel mong muốn xây dựng một môi trường làm việc chuyên nghiệp, năng động,
          nơi mỗi cá nhân đều có cơ hội phát triển và tỏa sáng.
        </p>
        <p>
          Hiện tại, chúng tôi đang tuyển các vị trí sau:
        </p>
        <ul>
          <li>Lễ tân (Receptionist)</li>
          <li>Nhân viên Buồng phòng (Housekeeping)</li>
          <li>Nhân viên Phục vụ Nhà hàng (Waiter/Waitress)</li>
          <li>Nhân viên Bếp (Cook/Commis Chef)</li>
          <li>Nhân viên Kinh doanh & Marketing</li>
        </ul>
        <p>
          Ứng viên vui lòng gửi CV về email: 
          <a href="mailto:hr@aurahotel.com">hr@aurahotel.com</a>
          hoặc liên hệ trực tiếp: 0123 456 789 (Phòng Nhân sự).
        </p>
      </div>
      <div class="careers-image animate-right">
        <img src="../../assets/images/recrut.png" alt="Tuyển dụng AURA Hotel" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.careers {
  padding: 60px 0;
  background-color: #fff;
}
.careers-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
}
.careers-text {
  flex: 1;
   font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 4rem;
  color: #5a6f73;
  margin: 1.5rem 0;
  padding: 0 4rem;
}
.careers-text h2 {
  font-weight: 800;
  font-size: 5rem;
  margin-bottom: 16px;
}
.careers-text a{
    text-decoration: none;
    color: #000;
}
.careers-text ul {
  margin: 12px 0 16px 20px;
}
.animate-left{
  padding:0 10rem;
}
.careers-image {
  flex: 1;
  text-align: center;
}
.careers-image img {
  max-width: 100%;
  border-radius: 10px;
}
</style>
