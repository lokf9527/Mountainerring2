import { defineStore } from "pinia";
import axios from "axios";
import sweetalert from '@/utils/sweetalert';
import loadingStore from '@/stores/loadingStore.js';
const { VITE_URL, VITE_PATH } = import.meta.env
const status = loadingStore();

const cartStore = defineStore("cartSrore", {
  state: () => {
    return {
      cart: {},
      total: 0,
      final_total: 0,
      code:''
    }
  },
  actions: {
    getCart() {
      status.isLoading = true;
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
          status.isLoading = false
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '取得購物車資料失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        })
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      }; 
      status.loadingStatus = product_id;
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, data )
        .then((res) => {
          status.loadingStatus = ''
          const { message } = res.data
          sweetalert.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCart() 
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '新增商品至購物車失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        })
    },
    updateCart(item, act) {
      switch (act) {
        case "reduce":
          if (item.qty > 1) {
            item.qty -= 1
          }
          break;
        case "increase":
          item.qty += 1;
          break
      }
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      }
      status.loadingStatus = item.id;
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCart();
          status.loadingStatus = ''
          const { message } = res.data
          sweetalert.fire({
            title: `${message}`,
            icon: 'success',
          });
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '修改商品數量失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    deleteCart(item) {
      status.loadingStatus = item.id;
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(() => {
          status.loadingStatus = ''
          sweetalert.fire({
            title: '已刪除商品',
            icon: 'success',
          });
          this.getCart();
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '刪除商品失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    deleteAllCart() {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then(() => {
          status.loadingStatus = ''
          sweetalert.fire({
            title: '已清空購物車',
            icon: 'success',
          });
          this.getCart();
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '刪除商品失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          }); 
        });
    },
    addCouponCode (code) {
      const coupon = { code };
      status.loadingStatus = code;
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, { data: coupon })
        .then((res) => {
          const { message } = res.data;
          sweetalert.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.code = '' 
          this.getCart();
          status.loadingStatus = ''
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '優惠碼使用失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        })
    }
  },
  getters: {}
})

export default cartStore