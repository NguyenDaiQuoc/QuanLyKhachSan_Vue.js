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

   

    
  </div>
</template>

