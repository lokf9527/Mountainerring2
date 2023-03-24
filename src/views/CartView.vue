<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import cartStore from "../stores/cart";

export default {
    data(){
        return{
            code:""
        }
    },
    methods:{
        ...mapActions(cartStore, ["getCart","updateCart","deleteCart","deleteAllCart","addCouponCode"])
    },
    computed: {
        ...mapState(cartStore,["cart","total","final_total"]),
        discount () {
        return (this.total-this.final_total).toFixed(2)
    }
    },
    components:{
        RouterLink
    },
    mounted(){
        this.getCart();
    },
}
</script>
<template>
    <div class="container ">
        <div class="mt-3">
            <h3 class="mt-3 mb-4">購物車</h3>
            <div class="row">
                <div class="col-md-8">
                    <div class="text-end">
                    <button class="btn btn-outline-danger" type="button" @click="() => deleteAllCart()">清空購物車</button>
                    </div>
                    <table class="table">
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
                                    <img :src="item.product.imageUrl"
                                        :alt="item.product.title" style="width: 72px; height: 72px; object-fit: cover;">
                                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item.product.title }}</p>
                                </th>
                                <td class="border-0 align-middle" style="max-width: 160px;">
                                    <div class="input-group pe-5 ">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-dark border-0 py-2" type="button"
                                                id="button-addon1" @click="() => updateCart (item,'reduce')">
                                                <i class="bi bi-dash-lg"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control border-0 text-center my-auto shadow-none"
                                            placeholder="" aria-label="Example text with button addon"
                                            aria-describedby="button-addon1" :value="item.qty">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-dark border-0 py-2" type="button"
                                                id="button-addon2" @click="() => updateCart (item,'increase')">
                                                <i class="bi bi-plus-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-0 align-middle">
                                    <p class="mb-0 ms-auto">NT${{ item.product.price }}</p>
                                </td>
                                <td class="border-0 align-middle">
                                    <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="() => deleteCart (item)">
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
                                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                                    <td class="text-end border-0 px-0 pt-4">NT${{ final_total}}</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                                    <td class="text-end border-0 px-0 pt-0 pb-4">信用卡</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">折扣金額</th>
                                    <td class="text-end border-0 px-0 pt-0 pb-4">NT${{ discount }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="input-group mb-3 input-group-sm">
                            <input type="text" class="form-control" placeholder="請輸入優惠碼 VIP777" v-model="code"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="button" @click="() => addCouponCode(code)">
                                    套用優惠碼
                                </button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <p class="mb-0 h4 fw-bold">總計</p>
                            <p class="mb-0 h4 fw-bold">NT${{ final_total }}</p>
                        </div>
                        <!-- <a href="./checkout.html" class="btn btn-dark w-100 mt-4">前往結賬</a> -->
                        <RouterLink to="/form" class="btn btn-dark w-100 mt-4" >前往結帳</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>