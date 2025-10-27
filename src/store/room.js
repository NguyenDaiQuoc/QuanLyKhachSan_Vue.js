// src/store/room.js
export default {
    state: {
        rooms: [],
        loading: false,
        error: null
    },
    mutations: {
        // Sửa tên mutation để khớp với commit trong action
        SET_ROOMS(state, rooms) { // Thay setRooms thành SET_ROOMS
            state.rooms = rooms
        },
        SET_LOADING(state, loading) { // Thay setLoading thành SET_LOADING 
            state.loading = loading
        },
        SET_ERROR(state, error) { // Thay setError thành SET_ERROR
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
                        image: './src/assets/images/view1.png' // Thêm đường dẫn hình ảnh
                    },
                    {
                        id: 2,
                        name: 'Phòng A102',
                        price: 550000,
                        available: false,
                        image: './src/assets/images/view2.png' // Thêm đường dẫn hình ảnh
                    },
                    {
                        id: 3,
                        name: 'Phòng A103',
                        price: 650000,
                        available: true,
                        image: '/images/view3.png'
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
