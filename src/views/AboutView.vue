<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
<template>
  <h1>This is About page.</h1>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <div >
    <loading v-model:active="isLoading"/>
    <ul style="min-height:100px">
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <img :src="product.imageUrl" width="200" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      isLoading: false,
    }
  },
  components: {
    Loading
  },
  methods: {
    getProducts () {
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
          Swal.fire({
            title: '載入成功!',
            icon: 'success',
            confirmButtonText: '確定'
          })
        })
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.getProducts()
    }, 5000)
  }
}
</script>

<style scoped>
</style>
