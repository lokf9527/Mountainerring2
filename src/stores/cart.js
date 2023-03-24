import { defineStore } from "pinia";
import axios from "axios";

const { VITE_URL, VITE_PATH } = import.meta.env

const cartStore = defineStore("cart", {
  state: () => {
    return {
      cart: {},
      total: 0,
      final_total: 0,
    }
  },
  actions: {
    getCart() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total
        })
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, data)
        .then(() => {
          this.getCart()
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
      };
      this.loadingItem = item.id;
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then(() => {
          this.getCart();
          this.loadingItem = "";
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    deleteCart(item) {
      this.loadingItem = item.id;
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(() => {
          this.getCart();
          this.loadingItem = "";
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    deleteAllCart() {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`)
        .then(() => {
          alert("已清空購物車");
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    addCouponCode (code) {
      const coupon = {
        code 
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, { data: coupon })
        .then((res) => {
          console.log(res)
          this.getCart();
          this.coupon_code = ''
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  getters: {}
})

export default cartStore