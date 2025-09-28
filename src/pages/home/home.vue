<template>
    <Header />
    <Intro v-if="isHomePage"/>
      <router-view /> <!-- Nội dung các trang con sẽ hiển thị ở đây -->
  
    <Footer />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
import Intro from '../../pages/introduce/introduce.vue'
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'


</script>

<script>
export default {
  components: { Intro },
  setup() {
    const route = useRoute()
    const isHomePage = computed(() => route.path === '/')
    return { isHomePage }
  }
}
</script>
