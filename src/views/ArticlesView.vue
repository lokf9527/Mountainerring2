<script>
import imageUrl from '@/assets/pic/banner.png';
import sweetalert from '@/utils/sweetalert';
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data () {
    return {
      imageUrl: imageUrl,
      articles: [],
      isLoading: false,
    }
  },
  methods: {
    getArtticles () {
      this.isLoading = true; 
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          this.articles = res.data.articles
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          const errMessage = err.response?.data?.message || '取得文章列表失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    }
  },
  mounted () {
    this.getArtticles() 
  }
}
</script>

<template>
  <VueLoading v-model:active="isLoading" />
  <!-- banner -->
  <header class="products-header" :style="{'background-image':`url(${imageUrl})`}">
    <div class="container d-flex justify-content-end align-items-center h-75 w-50 ">
      <div class="me-4">
        <h3 class="text-dark" style="font-family:Righteous;">MOUNTAINERRING</h3>
        <h1 class="fw-bold text-dark mb-3">和你一起翻山越嶺</h1>
        <RouterLink to="/products" class="btn btn-dark py-2">查看行程</RouterLink>
      </div>
    </div>
  </header>
  <!-- 文章列表 -->
  <div class="container">
    <div class="row justify-content-center py-3">
      <div class="col-lg-8">
        <nav aria-label="breadcrumb" class="mt-3" >
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/" >首頁</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">登山專欄</li>
              </ol>
        </nav>
        <template v-for="article in articles" :key="article.id">
          <div v-if="article.isPublic" class="card mb-6">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="article.imageUrl" class="img-fluid rounded-start h-md-100" :alt="article.title"/>
              </div>
              <div class="col-md-8">
                <RouterLink class="text-dark" :to="`/article/${article.id}`" v-if="article.isPublic">
                  <div class="card-body d-flex flex-column justify-content-between h-100">
                    <h5 class="card-title text-dark">{{ article.title }}</h5>
                    <div class="card-text fw-normal">
                      <div v-html="article.description"></div>
                    </div>
                    <div class="text-end mt-md-0 mt-5">繼續閱讀</div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>