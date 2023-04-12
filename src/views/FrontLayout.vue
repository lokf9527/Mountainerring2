<script >
import { mapActions, mapState } from "pinia";
import { RouterView,RouterLink } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse';
import cartStore from "../stores/cart";
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
    ...mapState (cartStore, ["cart"])
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
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
        <div class="container px-md-0 px-3 position-relative ">
          <div class="d-flex flex-row justify-content-between w-100 navbar-text">
            <div>
              <RouterLink to="/" class="navbar-brand text-white fs-3" style="font-family:Righteous">MOUNTAINERRING</RouterLink>
            </div>
            <ul class="navbar-nav flex-row">
              <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-link px-2 py-lg-2">
                <h4 class="bi bi-cart text-white position-relative"></h4>
                <span v-if="cart.length"
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1">
                    {{ cart.length }}
                </span>
              </RouterLink>
              </li>
              <li class="nav-item order-lg-1 order-2">
                <button class="navbar-toggler mb-4 ms-4" type="button" @click="toggleNavCollapse">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <RouterLink to="/products" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/articles" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        登山專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/follows" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        追蹤清單
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      <!-- <br> -->
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
          <div>
              <RouterLink to="/" class="navbar-brand text-white fs-4" style="font-family:Righteous">MOUNTAINERRING</RouterLink>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav flex-row">
            <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-item nav-link">
                <h4 class="bi bi-cart text-white position-relative"></h4>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1">
                    {{ cart.length }}
                </span>
              </RouterLink>
            </li>
            <li class="nav-item order-lg-1 order-2">
                <button class="navbar-toggler mb-4" type="button" @click="toggleNavCollapse">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item noHover">
                      <RouterLink to="/products" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/articles" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        登山專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/follows" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        追蹤清單
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li> 
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav flex-row">
              <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-item nav-link">
                <h4 class="bi bi-cart text-white position-relative"></h4>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1">
                    {{ cart.length }}
                </span>
              </RouterLink>
              </li>
              <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item noHover">
                      <RouterLink to="/products" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/articles" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        登山專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/follows" class="nav-link text-white py-lg-2 py-4 fs-6" @click="closeNavCollapse">
                        追蹤清單
                      </RouterLink>
                    </li>
                  </ul>
              </div>
            </ul>
          </div>
          </ul>
    </div>
</nav> -->


    
    <RouterView></RouterView>

    <div class="footer py-5 bg-primary mt-auto">
        <div class="container">
            <div class="h5">Mountaineering</div>
            <p><a>Mountaineering@gmail.com</a> (02) 1234-5678</p>
            <p>Copyright © Mountaineering All Rights Reserved. 此網站僅供作品展示用，無任何商業用途</p>
        </div>
    </div>
</template>

