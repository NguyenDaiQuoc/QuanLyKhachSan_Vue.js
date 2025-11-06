export default {
    state: {
        rooms: [],
        loading: false,
        error: null
    },
    mutations: {
        
        SET_ROOMS(state, rooms) { 
            state.rooms = rooms
        },
        SET_LOADING(state, loading) { 
            state.loading = loading
        },
        SET_ERROR(state, error) { 
            state.error = error
        }
    },
    actions: {
        async fetchRooms({ commit }) {
            commit('SET_LOADING', true)
            try {
                const mock = [
                    {
                        id: 1,
                        name: 'Phòng A101',
                        price: 450000,
                        available: true,
                        image: './src/assets/images/view1.png',
                        desciption: 'Phòng rộng rãi với ban công nhìn ra biển',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, ban công riêng',
                        capacity: '2 người lớn, 1 trẻ em',
                        bedtype: '1 giường đôi lớn',
                        acreage: '28m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'                     
                    },
                    {
                        id: 2,
                        name: 'Phòng A102',
                        price: 550000,
                        available: false,
                        image: './src/assets/images/view2.png',
                        desciption: 'Phòng hiện đại với tầm nhìn thành phố',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar',
                        capacity: '2 người lớn',
                        bedtype: '2 giường đơn',
                        acreage: '32m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 3,
                        name: 'Phòng A103',
                        price: 650000,
                        available: true,
                        image: './src/assets/images/view3.png',
                        desciption: 'Phòng sang trọng với tiện nghi cao cấp',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm',
                        capacity: '2 người lớn, 2 trẻ em',
                        bedtype: '1 giường đôi lớn và 1 giường đơn',
                        acreage: '40m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 4,
                        name: 'Phòng A104',
                        price: 750000,
                        available: true,
                        image: './src/assets/images/view4.png',
                        desciption: 'Phòng suite với phòng khách riêng biệt',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách',
                        capacity: '4 người lớn',
                        bedtype: '1 giường đôi lớn và 2 giường đơn',
                        acreage: '55m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 5,
                        name: 'Phòng A105',
                        price: 850000,
                        available: false,
                        image: './src/assets/images/view5.png',
                        desciption: 'Phòng cao cấp với tầm nhìn toàn cảnh thành phố',
                        amenities: 'WiFi miễn phí, Điều hòa Không khí, TV màn hình phẳng, minibar, bồn tắm, ban công riêng',
                        capacity: '2 người lớn, 2 trẻ em',
                        bedtype: '1 giường đôi lớn và 1 giường đơn',
                        acreage: '45m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 6,
                        name: 'Phòng A106',
                        price: 950000,
                        available: true,
                        image: './src/assets/images/view6.png',
                        desciption: 'Phòng tổng thống với tiện nghi sang trọng',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống',
                        capacity: '6 người lớn',
                        bedtype: '2 giường đôi lớn và 2 giường đơn',
                        acreage: '80m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 7,
                        name: 'Phòng A107',
                        price: 1050000,
                        available: true,
                        image: './src/assets/images/view7.png',
                        desciption: 'Phòng VIP với dịch vụ cao cấp',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7',
                        capacity: '4 người lớn, 2 trẻ em',
                        bedtype: '1 giường đôi lớn và 2 giường đơn',    
                        acreage: '70m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 8,
                        name: 'Phòng A108',
                        price: 1150000,
                        available: false,
                        image: './src/assets/images/view8.png',
                        desciption: 'Phòng hoàng gia với thiết kế tinh tế',
                        amenities: 'WiFi miễn phí, Điều hòa Không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng',
                        capacity: '6 người lớn, 2 trẻ em',
                        bedtype: '2 giường đôi lớn và 2 giường đơn',
                        acreage: '90m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 9,
                        name: 'Phòng A109',
                        price: 1250000,
                        available: true,
                        image: './src/assets/images/view9.png',
                        desciption: 'Phòng penthouse với tầm nhìn toàn cảnh thành phố',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng',
                        capacity: '8 người lớn',
                        bedtype: '3 giường đôi lớn và 2 giường đơn',
                        acreage: '120m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 10,
                        name: 'Phòng A110',
                        price: 1350000,
                        available: false,
                        image: './src/assets/images/view10.png',
                        desciption: 'Phòng deluxe với tiện nghi hiện đại',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng',
                        capacity: '4 người lớn, 2 trẻ em',
                        bedtype: '1 giường đôi lớn và 2 giường đơn',
                        acreage: '75m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 11,
                        name: 'Phòng A111',
                        price: 1450000, 
                        available: true,
                        image: './src/assets/images/view11.png',
                        desciption: 'Phòng executive với không gian làm việc tiện nghi',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '3 người lớn',
                        bedtype: '1 giường đôi lớn và 1 giường đơn',
                        acreage: '65m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 12,
                        name: 'Phòng A112',
                        price: 1550000,
                        available: false,
                        image: './src/assets/images/view12.png',
                        desciption: 'Phòng royal suite với thiết kế sang trọng',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '6 người lớn, 2 trẻ em',
                        bedtype: '2 giường đôi lớn và 2 giường đơn',
                        acreage: '100m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 13,
                        name: 'Phòng A113',
                        price: 1650000,
                        available: true,
                        image: './src/assets/images/view13.png',
                        desciption: 'Phòng imperial suite với tiện nghi đẳng cấp',
                        amenities: 'WiFi miễn phí, Điều hòa Không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '8 người lớn',
                        bedtype: '3 giường đôi lớn và 2 giường đơn',
                        acreage: '130m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 14,
                        name: 'Phòng A114',
                        price: 1750000,
                        available: false,
                        image: './src/assets/images/view14.png',
                        desciption: 'Phòng grand suite với không gian rộng lớn',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '10 người lớn',
                        bedtype: '4 giường đôi lớn và 2 giường đơn',
                        acreage: '150m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 15,
                        name: 'Phòng A115',
                        price: 1850000,
                        available: true,
                        image: './src/assets/images/view15.png',
                        desciption: 'Phòng luxury suite với thiết kế tinh tế',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '6 người lớn, 2 trẻ em',
                        bedtype: '2 giường đôi lớn và 2 giường đơn',
                        acreage: '110m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 16,
                        name: 'Phòng A116',
                        price: 1950000,
                        available: false,
                        image: './src/assets/images/view16.png',
                        desciption: 'Phòng elite suite với tiện nghi hiện đại',
                        amenities: 'WiFi miễn phí, Điều hòa không khí,  TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '8 người lớn',
                        bedtype: '3 giường đôi lớn và 2 giường đơn',
                        acreage: '140m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 17,
                        name: 'Phòng A117',
                        price: 2050000,
                        available: true,
                        image: './src/assets/images/view17.png',
                        desciption: 'Phòng supreme suite với không gian sang trọng',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '10 người lớn',
                        bedtype: '4 giường đôi lớn và 2 giường đơn',
                        acreage: '160m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều' 
                    },
                    {
                        id: 18,
                        name: 'Phòng A118',
                        price: 2150000,
                        available: false,
                        image: './src/assets/images/view18.png',
                        desciption: 'Phòng ultimate suite với thiết kế đẳng cấp',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '12 người lớn',
                        bedtype: '5 giường đôi lớn và 2 giường đơn',
                        acreage: '180m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 19,
                        name: 'Phòng A119',
                        price: 2250000,
                        available: true,
                        image: './src/assets/images/view19.png',
                        desciption: 'Phòng platinum suite với tiện nghi cao cấp',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '8 người lớn, 2 trẻ em',
                        bedtype: '2 giường đôi lớn và 2 giường đơn',
                        acreage: '120m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    },
                    {
                        id: 20,
                        name: 'Phòng A120',
                        price: 2350000,
                        available: false,
                        image: './src/assets/images/view20.png',
                        desciption: 'Phòng diamond suite với không gian rộng lớn',
                        amenities: 'WiFi miễn phí, Điều hòa không khí, TV màn hình phẳng, minibar, bồn tắm, phòng khách, khu vực ăn uống, dịch vụ phòng 24/7, spa riêng, sân thượng, bàn làm việc',
                        capacity: '10 người lớn',
                        bedtype: '4 giường đôi lớn và 2 giường đơn',
                        acreage: '150m²',
                        rule: 'Nhận phòng từ 14:00, Trả phòng trước 12:00, Không hút thuốc, Không mang vật nuôi',
                        conservation: 'Giữ phòng trước 6 giờ chiều'
                    }
                    
                ]
                await new Promise(r => setTimeout(r, 500))
                commit('SET_ROOMS', mock)
            } catch (err) {
                commit('SET_ERROR', 'Không thể tải danh sách phòng')
            } finally {
                commit('SET_LOADING', false)
            }
        }
    }
}
