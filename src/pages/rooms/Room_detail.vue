<template>
    <div>
        <div class="breadcrumb">
            <a href="/">Trang chủ</a> &gt; <a href="/room">Phòng</a> &gt; Chi tiết {{ viewData?.name  }}
        </div>
        <div class="view-detail">
            <h1>Chi tiết {{ viewData?.name  }}</h1>
        </div>
    </div>
        
    <div class="wrapper">
        <div class="view-info">
            <h2>{{ viewData?.name  }}</h2>
            <!-- <p>{{ viewData?.desc  }}</p>
            <p>Giá: {{ viewData?.price  }}₫/đêm</p> -->
        </div>
        <div class="view-images">
            <img v-if="viewData?.img" :src="getImg(viewData.img)" :alt="viewData?.name" />
        </div>
        <div class="view-thumbnail">
            <button class="btn-nav-left">
                <img src="../../assets/images/arrow-left.png" alt="Previous" />
            </button>
            <div class="thumbnails">
                <img v-for="n in 4" :key="n" :src="getImg(viewData.img)" :alt="`Hình ảnh ${n}`" />
            </div>
            <button class="btn-nav-right">
                <img src="../../assets/images/arrow-right.png" alt="Next" />
            </button>
        </div>
        <div class="view-description">
            <h2>Mô tả phòng</h2>
            <p>{{ description[viewId - 1]?.content }}</p>
        </div>
        <div class="view-amenities">
            <h2>Tiện nghi</h2>
            <ul>
                <li v-for="amenity in amenities[viewId - 1]?.list" :key="amenity">{{ amenity }}</li>
            </ul>
        </div>
        <div class="view-rules">
            <h2>Quy định phòng</h2>
            <ul> 
                <li v-for="rule in rules[viewId - 1]?.list" :key="rule">{{ rule }}</li>
            </ul>
        </div>
        <div class="view-rating">            
            <h2>Đánh giá</h2>
            <p>{{ ratings[viewId - 1]?.score }}/5 ({{ ratings[viewId - 1]?.reviews }} đánh giá)</p>
        </div>
        <div class="view-reviews">
            <h2>Đánh giá nổi bật</h2>
            <p>{{ reviews[viewId - 1]?.content }}</p>
        </div>
        <div class="view-other">
            <h2>Phòng khác</h2>
            <ul>
                <li v-for="room in sameFloorRooms" :key="room.id">
                    
                    <p>{{ room.name }}</p>
                    <a :href="`/room/${room.id}`">
                        <img :src="getImg(room.img)" :alt="room.name" />
                    </a>
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
    { id: 4,img: 'view4.png', name: "Phòng A201", desc: "Vịnh biển, nhiều hoạt động.", price: "600.000" },
    { id: 5,img: 'view5.png', name: "Phòng A202", desc: "Văn hóa cổ kính, yên tĩnh.", price: "420.000" },
    { id: 6,img: 'view6.png', name: "Phòng A203", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 7,img: 'view7.png', name: "Phòng A301", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 8,img: 'view8.png', name: "Phòng A302", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 9,img: 'view9.png', name: "Phòng A303", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 10,img: 'view1.png', name: "Phòng A401", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 11,img: 'view2.png', name: "Phòng A402", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
    { id: 12,img: 'view3.png', name: "Phòng A403", desc: "Gần chợ nổi, ẩm thực địa phương.", price: "390.000" },
]

const description = [
    { id: 1, content: "Phòng Deluxe tại khách sạn A25 mang đến trải nghiệm sang trọng với không gian rộng rãi, trang bị giường king-size êm ái và ban công riêng biệt. Từ ban công, bạn có thể tận hưởng tầm nhìn tuyệt đẹp ra thành phố nhộn nhịp. Phòng được thiết kế hiện đại với đầy đủ tiện nghi." },
    { id: 2, content: "Phòng Superior tại khách sạn A25 mang đến sự thoải mái với không gian ấm cúng và trang bị giường queen-size. Phòng có cửa sổ lớn giúp đón ánh sáng tự nhiên và tạo cảm giác rộng rãi. Tiện nghi hiện đại như TV." },
    { id: 3, content: "Phòng Standard tại khách sạn A25 là lựa chọn lý tưởng cho những ai tìm kiếm sự tiện nghi với ngân sách hợp lý. Phòng được trang bị giường đôi thoải mái, bàn làm việc và." },
    { id: 4, content: "Phòng Suite tại khách sạn A25 mang đến không gian rộng rãi với phòng khách riêng biệt và phòng ngủ sang trọng. Trang bị giường king-size, khu vực tiếp khách và tiện nghi hiện đại." },
    { id: 5, content: "Phòng Family tại khách sạn A25 là lựa chọn hoàn hảo cho các gia đình với không gian rộng rãi và giường phụ. Phòng được trang bị đầy đủ tiện nghi để đảm bảo sự thoải mái cho cả gia đình." },
    { id: 6, content: "Phòng Single tại khách sạn A25 phù hợp cho những ai đi công tác hoặc du lịch một mình. Phòng được trang bị giường đơn thoải mái, bàn làm việc và tiện nghi hiện đại." },
    { id: 7, content: "Phòng Double tại khách sạn A25 mang đến không gian ấm cúng với giường đôi thoải mái. Phòng được thiết kế hiện đại và trang bị đầy đủ tiện nghi để đáp ứng nhu cầu của khách." },
    { id: 8, content: "Phòng Twin tại khách sạn A25 là lựa chọn lý tưởng cho những ai đi cùng bạn bè hoặc đồng nghiệp. Phòng được trang bị hai giường đơn thoải mái và tiện nghi hiện đại." },
    { id: 9, content: "Phòng Economy tại khách sạn A25 là lựa chọn tiết kiệm với không gian gọn gàng và đầy đủ tiện nghi cơ bản. Phòng phù hợp cho những ai tìm kiếm sự tiện lợi với ngân sách hạn chế." },
    { id: 10, content: "Phòng Family tại khách sạn A25 là lựa chọn hoàn hảo cho các gia đình với không gian rộng rãi và giường phụ. Phòng được trang bị đầy đủ tiện nghi để đảm bảo sự thoải mái cho cả gia đình." },
    { id: 11, content: "Phòng Business tại khách sạn A25 là lựa chọn lý tưởng cho các doanh nhân với không gian làm việc tiện nghi và đầy đủ tiện ích." },
    { id: 12, content: "Phòng VIP tại khách sạn A25 mang đến trải nghiệm sang trọng với dịch vụ cao cấp và không gian riêng tư." }
]

const amenities = [
    { id: 1, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar", "Ban công riêng"] },
    { id: 2, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 3, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí"] },
    { id: 4, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar", "Ban công riêng", "Phòng khách"] },
    { id: 5, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar", "Giường phụ"] },
    { id: 6, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí"] },
    { id: 7, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 8, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 9, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 10, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 11, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
    { id: 12, list: ["Wi-Fi miễn phí", "TV", "Điều hòa không khí", "Minibar"] },
]

const rules = [
    { id: 1, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng", "Không mang theo vật nuôi"] },
    { id: 2, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng"] },
    { id: 3, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
    { id: 4, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng", "Không mang theo vật nuôi"] },
    { id: 5, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng", "Không mang theo vật nuôi"] },
    { id: 6, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
    { id: 7, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng"] },
    { id: 8, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00", "Không hút thuốc trong phòng"] },
    { id: 9, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
    { id: 10, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
    { id: 11, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
    { id: 12, list: ["Nhận phòng từ 14:00", "Trả phòng trước 12:00"] },
]

const ratings = [
    { id: 1, score: 4.5, reviews: 200 },
    { id: 2, score: 4.0, reviews: 150 },
    { id: 3, score: 3.8, reviews: 100 },
    { id: 4, score: 4.7, reviews: 250 },
    { id: 5, score: 4.2, reviews: 180 },
    { id: 6, score: 3.9, reviews: 120 },
    { id: 7, score: 4.1, reviews: 160 },
    { id: 8, score: 4.3, reviews: 190 },
    { id: 9, score: 3.7, reviews: 90 },
    { id: 10, score: 4.0, reviews: 150 },
    { id: 11, score: 4.2, reviews: 180 },
    { id: 12, score: 4.5, reviews: 200 },
]

const reviews = [
    { id: 1, content: '"Phòng rất sạch sẽ và thoải mái. Nhân viên thân thiện và dịch vụ tuyệt vời!" - Nguyễn Văn A' },
    { id: 2, content: '"Vị trí khách sạn rất thuận tiện, gần nhiều điểm tham quan." - Trần Thị B' },
    { id: 3, content: '"Giá cả hợp lý và phòng ốc đầy đủ tiện nghi." - Lê Thị C' },
    { id: 4, content: '"Tôi rất hài lòng với trải nghiệm tại khách sạn này." - Phạm Văn D' },
    { id: 5, content: '"Phòng rộng rãi và thoáng mát, rất thích hợp cho gia đình." - Hoàng Thị E' },
    { id: 6, content: '"Dịch vụ phòng nhanh chóng và chu đáo." - Vũ Văn F' },
    { id: 7, content: '"Khách sạn có vị trí đắc địa, dễ dàng di chuyển." - Đặng Thị G' },
    { id: 8, content: '"Tôi sẽ quay lại đây trong những chuyến đi tiếp theo." - Trịnh Văn H' },
    { id: 9, content: '"Phòng tắm sạch sẽ và hiện đại." - Bùi Thị I' },
    { id: 10, content: '"Phòng rất yên tĩnh và thoải mái." - Nguyễn Văn K' },
    { id: 11, content: '"Nhân viên lễ tân rất nhiệt tình và thân thiện." - Lê Thị L' },
    { id: 12, content: '"Tôi rất hài lòng với dịch vụ tại đây." - Trần Văn M' },
]

const viewData = views.find(r => r.id === viewId.value)
const getImg = (name) => new URL(`../../assets/images/${name}`, import.meta.url).href

const currentPrefix = computed(() => viewData?.name?.slice(0, 3) || "")
const sameFloorRooms = computed(() =>
    views.filter(
        r => r.name.startsWith(currentPrefix.value) && r.id !== viewId.value
    )
)
</script>