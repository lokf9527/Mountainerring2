<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import cartStore from "../stores/cartStore";
import loadingStore from '../stores/loadingStore.js';



export default {
    data(){
        return{
          code: '',
          product: {},
          id: '',
          qty: 1,
          isLoading: false,
        }
    },
    methods:{
      ...mapActions(cartStore, ['getCart','updateCart','deleteCart','deleteAllCart','addCouponCode']),
    },
    computed: {
      ...mapState(cartStore,['cart','total','final_total']),
      ...mapState(loadingStore, ['loadingStatus']),
      discount () {
        return (this.total-this.final_total)
    }
    },
    components:{
        RouterLink
    },
    mounted(){
        this.getCart()
        this.isLoading = true
        setTimeout(() => {
        this.isLoading = false
      }, 750)
    },
}
</script>
<template>
    <div class="container">
        <VueLoading v-model:active="isLoading" />
        <div class="mt-3" v-if="cart.length">
            <h3 class="mt-4">購物車</h3>
            <div class="row">
                <div class="col-md-8">
                    <div class="text-end">
                    <button class="btn btn-outline-danger" type="button" @click="() => deleteAllCart()">清空購物車</button>
                    </div>
                    <table class="table text-muted">
                        <thead>
                            <tr>
                                <th scope="col" class="border-0 ps-0">商品資料</th>
                                <th scope="col" class="border-0">數量</th>
                                <th scope="col" class="border-0">價格</th>
                                <th scope="col" class="border-0"></th>
                            </tr>
                        </thead>
                        <tbody v-for="item in cart" :key="item.id">
                            <tr class="border-bottom border-top">
                                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                                    <img :src="item.product.imageUrl" :alt="item.product.title" style="width: 72px; height: 72px; object-fit: cover;">
                                    <p class="mb-0 fw-bold ms-lg-3 d-inline-block">{{ item.product.title }}</p>
                                </th>
                                <td class="border-0 align-middle px-0 " style="max-width: 160px;">
                                    <div class="input-group pe-lg-5 ">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-dark border-0 py-2 px-0 px-md-2" type="button"
                                                id="button-addon1" @click="() => updateCart (item,'reduce')" :disabled="loadingStatus === item.id || item.qty === 1">
                                                <i class="bi bi-dash-lg"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control border-0 text-center my-auto shadow-none"
                                            placeholder="" aria-label="Example text with button addon"
                                            aria-describedby="button-addon1" readonly :value="item.qty">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-dark border-0 py-2 ps-0 pe-0 px-md-2" type="button"
                                                id="button-addon2" @click="() => updateCart (item,'increase')" :disabled="loadingStatus === item.id">
                                                <i class="bi bi-plus-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-0 align-middle ps-4 ps-md-2 ">
                                    <p class="mb-0 ms-auto">NT${{ item.product.price }}</p>
                                </td>
                                <td class="border-0 align-middle px-0">
                                    <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="() => deleteCart (item)" :disabled="loadingStatus === item.id">
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <div class="border p-4 mb-4">
                        <h4 class="fw-bold mb-4">訂單資訊</h4>
                        <table class="table text-muted border-bottom">
                            <tbody>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-3 font-weight-normal">小計</th>
                                    <td class="text-end border-0 px-0 pt-3">NT${{ total }}</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                                    <td class="text-end border-0 px-0 pt-0">信用卡</td>
                                </tr>
                                <tr v-if="discount">
                                    <th scope="row" class="border-0 text-success px-0 pt-0 pb-4 font-weight-normal">已使用優惠券：{{ code }}</th>
                                    <td class="text-end text-success border-0 px-0 pt-0 pb-4">-NT${{ discount }}</td>
                                </tr>   
                            </tbody>
                        </table>
                        <div v-if="discount"></div>
                        <div class="input-group mb-3 input-group-sm" v-else>
                            <input type="text" class="form-control"  placeholder="請輸入優惠碼 VIP777" v-model="code"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary " style="border-top-left-radius:0%; border-bottom-left-radius:0%" type="button" @click="addCouponCode(code)" :disabled="loadingStatus === code">
                                    套用優惠碼
                                </button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <p class="mb-0 h4 fw-bold">總計</p>
                            <p class="mb-0 h4 fw-bold">NT${{ final_total }}</p>
                        </div>
                        <RouterLink to="/form" class="btn btn-dark w-100 mt-4">前往結帳</RouterLink>
                    </div>
                </div>
            </div>
            <h4 class="fw-bold mt-1">你可能會有興趣 ...</h4>
                <div class="row my-4">
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
        <div v-else>
            <h2 class="mt-5">購物車目前是空的，快來挑選商品吧！</h2>
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