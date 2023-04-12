<script >
import imageUrl from '@/assets/pic/banner.png';
import Pagination from '@/components/PaginationView.vue'
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data(){
    return {
      imageUrl:imageUrl,
      products:[],
      pagination: {},
      currentPage: 1
    }
  },
  methods: {
    getProducts (category,page = 1) {
        let url=`${VITE_URL}v2/api/${VITE_PATH}/products/`;
        switch(category){
          case"初階體驗":
          case"中階探索":
          case"高階冒險":
            url=`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`
            break;
            default:
            url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`;
        }
        this.$http(url)
          .then((res) => {
            this.products = res.data.products
            this.pagination = res.data.pagination
        })
    },
    updatePage(page=1){
          let url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`;
          this.$http(url)
            .then(res=>{
            this.products=res.data.products
            this.pagination = res.data.pagination
            })
        },
  },
  components: {
    RouterLink,
    Pagination
  },
  mounted() {
    this.getProducts()
  },
}

</script>

<template>
    <header class="products-header" :style="{'background-image':`url(${imageUrl})`}">
        <div class="container d-flex justify-content-end align-items-center h-75 w-50 ">
            <div class="me-4">
                <h3 class="text-dark" style="font-family:Righteous;">MOUNTAINERRING</h3>
                <h1 class="fw-bold text-dark mb-3">和你一起翻山越嶺</h1>
                <button class="btn btn-dark py-2" type="button">查看行程</button>
            </div>
        </div>
    </header>
    <!-- 商品列表 -->
    <div class="container mt-md-5 mt-3 mb-7">
        <div class="row">
            <div class="col-md-3">
                <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
                    id="accordionExample">
                    <div class="card border-0">
                        <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                            id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            <div class="d-flex justify-content-between align-items-center pe-1">
                                <h4 class="mb-0 ms-6" style="cursor: pointer" @click="() => getProducts('')">
                                    全部商品
                                </h4>
                            </div>
                        </div>
                        <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" style="cursor: pointer"
                            data-bs-parent="#accordionExample">
                            <div class="card-body py-0">
                                <ul class="list-unstyled">
                                    <li class="py-2 d-block text-muted" @click="() => getProducts('初階體驗')">初階體驗</li>
                                    <li class="py-2 d-block text-muted" @click="() => getProducts('中階探索')">中階探索</li>
                                    <li class="py-2 d-block text-muted" @click="() => getProducts('高階冒險')">高階冒險</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <!-- <h4 class="my-3">全部商品</h4> -->
                <div class="row">
                    <div class="col-md-4" v-for="product in products" :key="product.id">
                        <div class="card cardProducts border-0 rounded-0 mb-4  position-relative">
                            <RouterLink :to="`/product/${product.id}`">
                                <img :src="product.imageUrl"
                                class="card-img-top rounded-0 object-fit-cover" :alt="product.title">
                            </RouterLink>
                            <!-- <a href="#" class="text-dark">
                                <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                            </a> -->
                            <div class="card-body text-start">
                                <h4 class="mt-3 h5">
                                    <RouterLink :to="`/product/${product.id}`">{{ product.title}}</RouterLink>
                                </h4>
                                <p>NT${{product.price}}</p>
                            </div>
                        </div>
                    </div>                   
                </div>
                <Pagination :pages="pagination" @emit-pages="updatePage"></Pagination>
            </div>
        </div>
    </div>
</template>