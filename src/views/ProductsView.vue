<script >
import imageUrl from '@/assets/pic/banner.png';
import Pagination from '@/components/PaginationView.vue'
import followsStore from '../stores/favoriteStore';
import sweetalert from '@/utils/sweetalert';
import { RouterLink } from "vue-router";
import { mapActions, mapState } from 'pinia';
const { VITE_URL, VITE_PATH }  = import.meta.env

const follow = followsStore();

export default {
  data(){
    return {
      imageUrl: imageUrl,
      products: [],
      pagination: {},
      currentPage: 1,
      isLoading: false,
    }   
  },
  methods: {
    getProducts (category,page = 1) {
      let url=`${VITE_URL}v2/api/${VITE_PATH}/products/`
      switch(category){
        case"初階體驗":
        case"中階探索":
        case"高階冒險":
          url=`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${ category }`
          break;
          default:
          url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${ page }`
        }
        this.$http.get(url)
          .then((res) => {
            this.products = res.data.products
            follow.tempProducts(this.products)
            this.pagination = res.data.pagination
            this.isLoading = false
          })
          .catch((err) => {
            const errMessage = err.response?.data?.message || '取得產品列表失敗，請稍後再試'
            sweetalert.fire({
            title: `${ errMessage }`,
            icon: 'error',
            })
          })
        },
    updatePage (page=1) {
      let url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${ page }`;
        this.$http.get(url)
          .then((res) => {
            this.products = res.data.products
            this.pagination = res.data.pagination
          })
          .catch((err) => {
            const errMessage = err.response?.data?.message || '取得分頁失敗，請稍後再試'
            sweetalert.fire({
            title: `${ errMessage }`,
            icon: 'error',
            })
          })
        },
    ...mapActions(followsStore, ['getFollows', 'toggleFollow']),
  },
  components: { RouterLink,Pagination },
  computed: {
    ...mapState(followsStore, ['followIds']),
  },
  mounted() {
    this.getProducts()
    this.isLoading = true;
  },
}

</script>
<template>
    <!-- banner -->
    <header class="products-header" :style="{'background-image':`url(${imageUrl})`}">
        <div class="container d-flex justify-content-end align-items-center h-75 w-50 ">
            <div class="me-4">
                <h3 class="text-dark" style="font-family:Righteous;">MOUNTAINERRING</h3>
                <h1 class="fw-bold text-dark mb-3">和你一起翻山越嶺</h1>
                <RouterLink to="/products" class="btn btn-dark py-2">查看行程</RouterLink>
            </div>
        </div>
    </header>
    <!-- 商品列表 -->
    <div class="container mt-md-5 mt-3 mb-7">
        <VueLoading v-model:active="isLoading" />
        <div class="row">
            <div class="col-md-3">
                <div class="mb-3">
                    <div class="card border-0" style="border-radius:0%">
                        <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" >
                            <div class="d-flex justify-content-between align-items-center pe-1">
                                <h4 class="mb-0 ms-6" style="cursor: pointer" @click="() => getProducts('')">
                                    <a href="#" class="text-dark">全部商品</a>
                                </h4> 
                            </div>
                        </div>
                        <div aria-labelledby="headingOne" style="cursor: pointer; border-radius:0%">
                            <div class="card-body py-0">
                                <ul class="list-unstyled">
                                    <li class="py-2 d-block" @click="() => getProducts('初階體驗')" >
                                      <a href="#" class="text-dark">初階體驗</a>
                                    </li>
                                    <li class="py-2 d-block " @click="() => getProducts('中階探索')">
                                      <a href="#" class="text-dark">中階探索</a>
                                    </li>
                                    <li class="py-2 d-block " @click="() => getProducts('高階冒險')">
                                      <a href="#" class="text-dark">高階冒險</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-4" v-for="product in products" :key="product.id">
                        <div class="card cardProducts border-0 rounded-0 mb-4 position-relative">
                            <RouterLink :to="`/product/${product.id}`">
                              <img :src="product.imageUrl" class="card-img-top rounded-0 object-fit-cover" :alt="product.title">
                            </RouterLink>
                            <RouterLink :to="`/product/${product.id}`" class="card-body text-start text-dark" >  
                                <div class="position-absolute" style="right:30px; top:10px" @click.prevent="() => toggleFollow(product.id)">
                                <i class="bi bi-heart text-danger h5 position-absolute" v-if="followIds.indexOf(product.id) === -1"></i>
                                <i class="bi bi-heart-fill text-danger h5 position-absolute" v-else></i>
                                </div>
                                <h4 class="mt-3 h5 ">
                                    <p class="text-dark">{{ product.title}}</p>
                                </h4>
                                <p>NT${{product.price}}</p>
                            </RouterLink>
                        </div>
                    </div>                   
                </div>
                <Pagination :pages="pagination" @emit-pages="updatePage"></Pagination>
            </div>
        </div>
    </div>
</template>