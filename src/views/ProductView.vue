<script>
import { mapActions } from "pinia";
import cartStore from "../stores/cart";
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data () {
    return {
      product: {},
      relativePorduct: {},
      id: "",
      qty: 1,
    }
  },
  methods: {
    getProduct () {
    //   const { id } = this.$route.params; 
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${this.id}`)
        .then(res=>{
            this.product = res.data.product
            this.getRelativeProducts()  
        })
    },
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
    getRelativeProducts () {
      const {category, id} =this.product
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then(res=>{
            this.relativePorduct = res.data.products.filter((item) => item.id !== id)
        })
    },
    addOne () {
        this.qty+=1
    },
    minusOne () {
        if (this.qty>1){
            this.qty-=1
        }  
    },
    toggleId(id) {
      this.$router.push(`/product/${id}`);
      this.id = id;
      this.getProduct();
    },
    ...mapActions(cartStore, ["addToCart"]) 
  },
  components: {
    RouterLink
  },
  created() {
    const { id } = this.$route.params
    this.id = id;
    this.getProduct();
  },
//   watch: {
//     '$route.params': {
//       immediate: true,
//       handler() {
//         this.getProduct();
//       },
//     },
//   },
  mounted () {
    this.getProduct()
  }
}
</script>

<template>
    <div class="container w-100">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb  px-1 mb-0 py-3">
                <li class="breadcrumb-item"><RouterLink to="/products" class="text-muted" >全部商品</RouterLink></li>
                <!-- <li class="breadcrumb-item text-muted">{{ product.category }}</li> -->
                <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
        </nav>
        <div class="row align-items-center">
            <div class="col-md-7">
                <div  class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="product.imageUrl"
                                class="d-block w-100" :alt="product.title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
                <p class="h4 fw-bold text-end">NT${{ product.price}}</p>
                <div class="input-group my-3 bg-light rounded">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="() => minusOne()">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light"
                                placeholder="" aria-label="Example text with button addon"
                                aria-describedby="button-addon1" v-model="qty">
                            <div class="input-group-append">
                                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="() => addOne()">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </div>
                <div class="row align-items-center">
                    <div class="col-6">
                        <button type="button" class="text-nowrap btn btn-dark w-100 py-2" @click="() => addToCart(product.id,qty)">加入購物車</button>
                    </div>
                    <div class="col-6">
                        <RouterLink to="/cart" class="text-nowrap btn btn-dark w-100 py-2" @click="() => addToCart(product.id,qty)">立刻購買</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-md-7">
                <p>{{ product.description}}</p>
                <hr>
            </div>
            <div class="col-md-7">
                <h3 class="fw-bold">簡易行程</h3>
                <p class="text-wrapper" >{{ product.content}}</p>
            </div>
        </div>
        <hr>
        <h3 class="fw-bold">相關行程</h3>
        <div class="container">
            <div class="row mt-4 mb-5" >
                <div class="col-lg-3 col-md-6" v-for="item in relativePorduct" :key="item.id">
                    <div class="card border-0 mb-4 h-100">
                        <!-- <RouterLink :to="`/product/${item.id}`">
                            <img :src="item.imageUrl" class="card-img-top rounded-0" :alt="item.title"  />
                        </RouterLink>    -->
                        <img :src="item.imageUrl" class="card-img-top rounded-0" :alt="item.title" style="cursor: pointer" @click.prevent="() => toggleId(item.id)" />
                        <div class="card-body text-start">
                        <h5>{{ item.title }}</h5> 
                        <div class="d-flex justify-content-between">
                            <p class="card-text text-muted mb-0 h6">
                                NT${{ item.price }}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>