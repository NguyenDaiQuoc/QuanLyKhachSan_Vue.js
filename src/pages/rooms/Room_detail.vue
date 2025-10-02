<template>
    <div>
        <div class="breadcrumb">
            <a href="/">Trang chủ</a> &gt; <a href="/views">Phòng</a> &gt; Chi tiết {{ viewData?.name  }}
        </div>
        <div class="view-detail">
            <h1>Chi tiết {{ viewData?.name  }}</h1>
        </div>
    </div>
        
    <div class="wrapper">
        <div class="view-info">
            <h2>{{ viewData?.name  }}</h2>
            <p>{{ viewData?.desc  }}</p>
            <p>Giá: {{ viewData?.price  }}₫/đêm</p>
        </div>
        <div class="view-images">
            <img v-if="viewData?.img" :src="getImg(viewData.img)" :alt="viewData?.name" />
        </div>
        <div class="view-description">
            <h2>Mô tả phòng</h2>
            <p>Phòng Deluxe tại khách sạn A25 mang đến trải nghiệm sang trọng với không gian rộng rãi, trang bị giường king-size êm ái và ban công riêng biệt. Từ ban công, bạn có thể tận hưởng tầm nhìn tuyệt đẹp ra thành phố nhộn nhịp. Phòng được thiết kế hiện đại với đầy đủ tiện nghi như TV</p>
        </div>
        <div class="view-amenities">
            <h2>Tiện nghi</h2>
            <ul>
                <li>Wi-Fi miễn phí</li>
                <li>TV màn hình phẳng</li>
                <li>Điều hòa không khí</li>
                <li>Minibar</li>
                <li>Ban công riêng</li>
            </ul>
        </div>
        <div class="view-rules">
            <h2>Quy định phòng</h2>
            <ul>
                <li>Nhận phòng từ 14:00</li>
                <li>Trả phòng trước 12:00</li>
                <li>Không hút thuốc trong phòng</li>
                <li>Không mang theo vật nuôi</li>
            </ul>
        </div>
        <div class="view-rating">            
            <h2>Đánh giá</h2>
            <p>4.5/5 (200 đánh giá)</p>
        </div>
        <div class="view-description">
            <h2>Đánh giá chi tiết</h2>
            <p>"Phòng rất sạch sẽ và thoải mái. Nhân viên thân thiện và dịch vụ tuyệt vời!" - Nguyễn Văn A</p>
            <p>"Vị trí khách sạn rất thuận tiện, gần nhiều điểm tham quan." - Trần Thị B</p>
        </div>
        <div class="view-other">
            <h2>Phòng khác</h2>
            <ul>
                <li>
                    <a href="/room/2">Phòng Superior</a>
                    <img src="../../assets/images/view2.png" alt="">
                </li>
                <li>
                    <a href="/room/3">Phòng Standard</a>
                    <img src="../../assets/images/view3.png" alt="">
                </li>
            </ul>
        </div>
        <div class="view-map">
            <h2>Vị trí khách sạn</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.462634848634!2d106.68243431526096!3d10.762622262303736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeea1f5b8b7%3A0x5a4c6c6c6c6c6c6c!2zQW5oIEjDoG5oIHbDoG5oLCBUaMOgbmcgVGjhuqFjaCBUa
Gnhu4d0LCBUaMOgbmcgVGjhuqFjaCBUaGnhu4d0!5e0!3m2!1svi!2s!4v1616161616161!5m2!1svi!2s"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>

    </div>    
    <div class="order">
        <h2>Đặt phòng</h2>
        <form>
            <label for="checkin">Ngày nhận phòng:</label>
            <input type="date" id="checkin" name="checkin" required />

            <label for="checkout">Ngày trả phòng:</label>
            <input type="date" id="checkout" name="checkout" required />

            <label for="guests">Số lượng khách:</label>
            <input type="number" id="guests" name="guests" min="1" max="10" required />

            <button type="submit">Đặt ngay</button>
        </form>
    </div>
    <

</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const viewId = computed(() => Number(route.params.id))
const views = [
    { id: 1,img: 'view1.png', name: "Phòng A101", desc: "Khách sạn trung tâm, gần phố cổ.", price: "450.000" },
    { id: 2,img: 'view2.png', name: "Phòng A102", desc: "Gần bãi biển, view đẹp.", price: "550.000" },
    { id: 3,img: 'view3.png', name: "Phòng A103", desc: "Tiện lợi, gần trung tâm thương mại.", price: "500.000" },
    { id: 4,img: 'view4.png', name: "Phòng A104", desc: "Vịnh biển, nhiều hoạt động.", price: "600.000" },
    { id: 5,img: 'view5.png', name: "Phòng A105", desc: "Văn hóa cổ kính, yên tĩnh.", price: "420.000" },
    { id: 6,img: 'view6.png', name: "Phòng A106", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 7,img: 'view7.png', name: "Phòng A107", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 8,img: 'view8.png', name: "Phòng A108", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 9,img: 'view9.png', name: "Phòng A109", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
]
const viewData = views.find(r => r.id === viewId.value)
// ...existing code...
const getImg = (name) => new URL(`../../assets/images/${name}`, import.meta.url).href
</script>