<script >
import { mapActions, mapState } from "pinia";
import { RouterView,RouterLink } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse';
import cartStore from "../stores/cartStore";
export default { 
  data () {
    return {
      collapse: {},
    }
  },
  components: {
    RouterView,RouterLink
  },
  computed: {
    ...mapState (cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    toggleNavCollapse() {
      this.collapse.toggle();
    },
    closeNavCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.getCart()
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container px-md-0 px-3 text-center position-relative ">
          <div class="d-flex flex-row justify-content-between w-100 navbar-text">
            <div>
              <RouterLink to="/" class="navbar-brand text-white fs-2 text-center" style="font-family:Righteous">MOUNTAINERRING</RouterLink>
            </div>
            <ul class="navbar-nav flex-row">
              <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-link px-2 py-lg-2">
                <h4 class="bi bi-cart text-white position-relative"></h4>
                <span v-if="cart.length" class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1">
                    {{ cart.length }}
                </span>
              </RouterLink>
              </li>
              <li class="nav-item order-lg-1 order-2 ">
                <button class="navbar-toggler ms-4 custom-toggler" type="button" @click="toggleNavCollapse">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <RouterLink to="/products" class="nav-link text-white py-lg-2 py-4 fs-5" @click="closeNavCollapse">
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/articles" class="nav-link text-white py-lg-2 py-4 fs-5" @click="closeNavCollapse">
                        登山專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/favorites" class="nav-link text-white py-lg-2 py-4 fs-5" @click="closeNavCollapse">
                        收藏清單
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      <RouterView></RouterView>
    <!-- footer -->
    <div class="footer py-5 bg-primary mt-auto">
        <div class="container">
            <div class="h5">Mountaineering</div>
            <p><a href="mailto:Mountaineering@gmail.com">Mountaineering@gmail.com</a></p>
            <p><a href="tel:(02)1234-5678">(02)1234-5678</a></p>
            <p>Copyright © Mountaineering All Rights Reserved. 此網站僅供作品展示用，無任何商業用途</p>
        </div>
    </div>
</template>

