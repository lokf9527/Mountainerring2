<script>
import followsStore from '../stores/favoriteStore';
import cartStore from "../stores/cartStore";
import imageUrl from '@/assets/pic/banner.png';
import sweetalert from '@/utils/sweetalert';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

const { VITE_URL, VITE_PATH }  = import.meta.env
const follow = followsStore();  

export default {
  data() {
    return {
      imageUrl:imageUrl,
      products:[],
      isLoading: false,
    };
  },
  methods: {
    getProducts () {
        this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
            this.products = res.data.products
            follow.tempProducts(this.products)
            this.pagination = res.data.pagination
            this.isLoading = false
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '取得產品列表失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          })
        })
    },
    ...mapActions(followsStore, ['getFollows', 'toggleFollow']),
    ...mapActions(cartStore, ['addToCart']) 
  },
  components: { RouterLink },
  computed: {
    ...mapState(followsStore, ['followIds', 'followList']),
  },
  mounted() {
    this.getProducts()
    this.isLoading = true;
  },
};
</script>

<template>
    <VueLoading v-model:active="isLoading" />
    <!-- banner -->
    <header class="favorite-header" :style="{'background-image':`url(${imageUrl})`}">
        <div class="container d-flex justify-content-end align-items-center h-75 w-50 ">
            <div class="me-4">
                <h3 class="text-dark" style="font-family:Righteous;">MOUNTAINERRING</h3>
                <h1 class="fw-bold text-dark mb-3">和你一起翻山越嶺</h1>
                <RouterLink to="/products" class="btn btn-dark py-2">查看行程</RouterLink>
            </div>
        </div>
    </header>
    <!-- 收藏清單 -->
    <div class="container mt-md-5 mt-3 mb-7">
        <div class="row" v-if="followList.length">
            <div class="col-md-12">
                <nav aria-label="breadcrumb" class="mt-0" >
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <RouterLink to="/" >首頁</RouterLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">收藏清單</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-md-3" v-for="item in followList" :key="item.id">
                        <div class="card cardProducts border-0 rounded-0 mb-4  position-relative">
                            <RouterLink :to="`/product/${item.id}`">
                                <img :src="item.imageUrl" class="card-img-top rounded-0 object-fit-cover" :alt="item.title">
                            </RouterLink>
                            <RouterLink :to="`/product/${item.id}`" class="card-body text-start text-dark" >  
                                <div class="position-absolute" style="cursor: pointer; right: 30px; top:10px" @click.prevent="() => toggleFollow(item.id)">
                                <i class="bi bi-heart text-danger h5 position-absolute"  v-if="followIds.indexOf(item.id) === -1"></i>
                                <i class="bi bi-heart-fill text-danger h5 position-absolute" v-else></i>
                                </div>
                                <h4 class="mt-3 h5">{{ item.title}}</h4>
                                <p>NT${{item.price}}</p>
                            </RouterLink>
                            <div class="card-footer d-grid gap-2 border-top-0 px-0 py-0">
                                <button type="button" class="text-nowrap btn btn-primary w-100 py-2" style="border-radius:0%" @click="() => addToCart(item.id,qty)" :disabled="loadingStatus === item.id">
                            <i class="spinner-border spinner-border-sm me-3" v-if="loadingStatus === item.id"></i>
                            <span>加入購物車</span>
                                </button>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="mt-5">收藏清單目前是空的，快來挑選商品吧！</h2>
                <RouterLink class="btn btn-primary my-5 text-end" to="/products">
                    查看行程
                </RouterLink>
                <h4 class="fw-bold mt-5">你可能會有興趣 ...</h4>
                <div class="row mt-4 mb-5">
                    <div class="col-md-3">
                        <div class="card border-0 mb-4 cardProducts" style="border-radius:0%">    
                            <RouterLink to="/product/-NN0TN0Oy7quf2LBeINs">
                                <img src="https://greathunger.com.tw/images/images/activity2_20221202152957.jpg" class="card-img-top rounded-0" alt="能高安東軍縱走" />
                            </RouterLink>
                            <RouterLink to="/product/-NN0TN0Oy7quf2LBeINs">
                            <div class="card-body text-start text-dark">
                                <h5>水鹿的故鄉｜能高安東軍縱走</h5> 
                                <div class="d-flex justify-content-between">
                                    <p class="card-text mb-0 h6">
                                        NT$12500
                                    </p>
                                </div>
                            </div>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0 mb-4 cardProducts" style="border-radius:0%">
                            <RouterLink to="/product/-NKpwDun9A4lFDuSlmJL">
                                <img src="https://greathunger.com.tw/images/images/activity8_20221114191552.jpg" class="card-img-top rounded-0" alt="戒茂斯上嘉明湖" />
                            </RouterLink>
                            <RouterLink to="/product/-NKpwDun9A4lFDuSlmJL">
                            <div class="card-body text-start text-dark">
                                <h5>天使的眼淚｜戒茂斯上嘉明湖</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text mb-0 h6">
                                        NT$4500
                                    </p>
                                </div>
                            </div>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0 mb-4 cardProducts" style="border-radius:0%">
                            <RouterLink to="/product/-NR2IkrzZx0QBHqSbOca">
                                <img src="https://greathunger.com.tw/images/images/activity0_20221115212626.jpg" class="card-img-top rounded-0" alt="加羅湖" />
                            </RouterLink>
                            <RouterLink to="/product/-NR2IkrzZx0QBHqSbOca">
                            <div class="card-body text-start text-dark">
                                <h5>散落的珍珠｜加羅湖</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text mb-0 h6">
                                        NT$4380
                                    </p>
                                </div>
                            </div>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0 mb-4 cardProducts" style="border-radius:0%">
                            <RouterLink to="/product/-NR2CbYAl8zohH3Px7O1">
                                <img src="https://greathunger.com.tw/images/activity_20221115211124.jpg" class="card-img-top rounded-0" alt="水漾森林" />
                            </RouterLink>
                            <RouterLink to="/product/-NR2CbYAl8zohH3Px7O1">
                            <div class="card-body text-start text-dark">
                                <h5>遠離塵嚣的仙境｜水漾森林</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text mb-0 h6">
                                        NT$4500
                                    </p>
                                </div>
                            </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
