<template>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
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
            <li class="nav__item"><router-link to="/lienhe">Liên hệ</router-link></li>
            <li class="nav__item"><router-link to="/tuyendung">Tuyển dụng</router-link></li>
          </ul>
        </nav>
        <div class="login">
          <button class="login-btn">Đăng nhập</button>
        </div>
      </div>
    </header>
   
    <!-- Hero / Search -->
    <!-- <section class="hero">
      Slideshow
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
          <h1>Aura Hotel — Hệ thống khách sạn hàng đầu</h1>
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
    </section> -->

    
  </div>
</template>

