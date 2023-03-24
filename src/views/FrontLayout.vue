<script >
import { mapActions, mapState } from "pinia";
import { RouterView,RouterLink } from 'vue-router'
import cartStore from "../stores/cart";
export default { 
  components: {
    RouterView,RouterLink
  },
  computed: {
    ...mapState (cartStore, ["cart"])
  },
  methods: {
    ...mapActions(cartStore, ["getCart"])
  },
  mounted() {
    this.getCart()
  }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
            <RouterLink to="/" class="navbar-brand text-white" style="font-family:Righteous;">MOUNTAINERRING</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink to="/" class="nav-item nav-link me-4 text-white">首頁</RouterLink>
              <!-- <a class="nav-item nav-link me-4" href="./product.html">
                <h4 class="bi bi-bookmark text-white"></h4>
              </a> -->
              <RouterLink to="/products" class="nav-item nav-link me-4 text-white">商品列表</RouterLink>
              <RouterLink to="/cart" class="nav-item nav-link">
                <h4 class="bi bi-cart text-white position-relative"></h4>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1">
                    {{ cart.length }}
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
    </nav>

    <RouterView></RouterView>

    <footer class="py-5 bg-primary ">
        <div class="container">
            <div class="h5">Mountaineering</div>
            <p>Mountaineering@gmail.com (02) 1234-5678</p>
            <p>Copyright © Mountaineering All Rights Reserved. 此網站僅供作品展示用，無任何商業用途</p>
        </div>
    </footer>
</template>

