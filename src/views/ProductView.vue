<script>
import { mapActions } from "pinia";
import cartStore from "../stores/cart";
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data () {
    return {
      product: {},
      qty: 1,
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params;
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res=>{
            this.product = res.data.product
        })
    },
    addOne(){
        this.qty+=1
    },
    minusOne(){
        if (this.qty>1){
            this.qty-=1
        }  
    },
    ...mapActions(cartStore, ["addToCart"]) 
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<template>
    <div class="container w-100">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
                <li class="breadcrumb-item"><RouterLink to="/products" class="text-muted" >全部商品</RouterLink></li>
                <li class="breadcrumb-item text-muted">{{ product.category }}</li>
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
                <p>{{ product.content}}</p>
            </div>
        </div>
        
    </div>
</template>