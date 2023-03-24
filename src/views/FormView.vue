<script>
import { RouterLink } from "vue-router";
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data () {
    return {
        data: {
                user: {
                  email: "",
                  name: "",
                  tel: "",
                  address: "",
                },
                message: "",
              },
    }
  },
  methods: {
    createtOrder () {
      const data = this.data;
        this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`,{data})
          .then((res)=>{
            alert(res.data.message);
            const { orderId } = res.data
            //   this.$refs.form.resetForm();
            //   this.data.message = "";
            //   this.getCarts();
              this.$router.push(`/checkout/${orderId}`);

          }).catch((err)=>{
            console.log(err)
            //   alert(err.data.message)
            })
        }
  },    

  components: {RouterLink
  }
}
</script>

<template>
    <div class="container">
        <div class="my-5 row justify-content-center" >
        <v-form class="col-md-6" v-slot="{ errors }" @submit="createtOrder">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <v-field id="email" name="email" type="email" class="form-control"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email"
                    v-model="data.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名" rules="required" v-model="data.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <v-field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話" rules="required" v-model="data.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
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
                    <!-- <button type="submit" class="btn btn-outline-primary">回購物車</button> -->
                    <RouterLink to="/cart" class="btn btn-danger">回購物車</RouterLink>
                </div> 
                <div class="text-end col">
                    <button type="button" class="btn btn-primary" @click="() => createtOrder()">送出訂單</button>
                    <!-- <RouterLink to="/checkoutSuccess" class="btn btn-danger">送出訂單</RouterLink> -->
                </div>
            </div>
            <!-- <div class="text-end">
                <button type="submit" class="btn btn-danger">送出訂單</button>
                <RouterLink to="/checkoutSuccess" class="btn btn-danger">送出訂單</RouterLink>
            </div> -->
        </v-form>
    </div>
    </div>
    
</template>