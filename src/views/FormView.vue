<script>
import { RouterLink } from "vue-router";
import { mapActions,mapState } from "pinia";
import cartStore from "../stores/cartStore";
import loadingStore from '../stores/loadingStore.js';
import sweetalert from '@/utils/sweetalert';

const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data () {
    return {
        data: {
            user: {
                email: '',
                name: '',
                tel: '',
                address: '',
                },
                message: '',
        },
        isProcessing: false
        
    }
  },
  methods: {
    createtOrder () {
      this.isProcessing = true
      const data = this.data;
        this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`,{ data })
          .then((res) => {
            const { orderId, message } = res.data
            this.isProcessing = false
            sweetalert.fire({
            title: `${message}`,
            icon: 'success',
            });
            this.getCart()
            this.$router.push(`/checkout/${orderId}`);
          })
          .catch(()=>{
            sweetalert.fire({
            title: '無法新增訂單，請確認資料是否填寫完整',
            icon: 'error',
            });
          })
        },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        },
    ...mapActions(cartStore, ['getCart']) 
  },    
  components: {
    RouterLink
  },
  computed: {
      ...mapState(loadingStore, ['loadingStatus']),
    },
}
</script>

<template>
    <div class="container">
        <div class="my-5 row justify-content-center" >
        <v-form class="col-md-6" v-slot="{ errors }" @submit="createtOrder">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <span class="text-danger">*</span>
                <v-field id="email" name="email" type="email" class="form-control"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email"
                    v-model="data.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <span class="text-danger">*</span>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名" rules="required" v-model="data.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <span class="text-danger">*</span>
                <v-field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話" :rules="isPhone" v-model="data.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <span class="text-danger">*</span>
                <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
                    v-model="data.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea id="message" class="form-control" cols="30" rows="10" v-model="data.message"></textarea>
            </div>
            <div class="row">
                <div class="text-start col">
                    <RouterLink to="/cart" class="btn btn-danger">回購物車</RouterLink>
                </div> 
                <div class="text-end col">
                    <button type="submit" class="btn btn-primary" @click="() => createtOrder()" :disabled="isProcessing">
                        送出訂單
                    </button>
                </div>
            </div>
        </v-form>
    </div>
    </div>
</template>