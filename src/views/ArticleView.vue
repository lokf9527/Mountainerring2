<script>
import { RouterLink } from 'vue-router';
import sweetalert from '@/utils/sweetalert';
const { VITE_URL, VITE_PATH }  = import.meta.env

export default {
  data() {
    return {
      article: {},
      isLoading: false,
      articleIndex: 0,
    };
  },
  components: { RouterLink },
  methods: {
    getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          this.isLoading = false
          const { article } = res.data
          this.article = article
        })
        .catch((err) => {
          this.isLoading = false
          const errMessage = err.response?.data?.message || '取得文章內容失敗，請稍後再試'
          sweetalert.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
   
  },
  mounted() {
    this.getArticle();
  },
};
</script>

<template>
  <VueLoading v-model:active="isLoading" />
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-8">
          <nav aria-label="breadcrumb" class="mt-3" >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/articles" >登山專欄</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
            </ol>
          </nav>
          <h2 class="mt-4">{{ article.title }}</h2>
          <article class="py-3">
            <p>
              <small class="text-muted">{{ (article.create_at) }}</small>-<small class="text-muted">作者：{{ article.author }}</small>
            </p>
            <img :src="article.imageUrl" alt="" class="img-fluid mb-3" />
            <div v-html="article.content"></div>
          </article>
        </div>
      </div>
    </div>
</template>