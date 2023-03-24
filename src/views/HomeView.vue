<script >
import imageUrl from '@/assets/pic/banner.png';
const { VITE_URL, VITE_PATH }  = import.meta.env
export default {
  data(){
    return {
      imageUrl:imageUrl,
      products:[]
    }
  },
  methods: {
    getProduct () {
        this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
          .then((res) => {
             this.products = res.data.products
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },
  mounted() {
    this.getProduct()
  }
}
</script>

<template>
  <!-- banner -->
  <header class="home-header" :style="{'background-image':`url(${imageUrl})`}">
        <div class="container d-flex justify-content-end align-items-center h-75 w-50 ">
            <div class="me-4" >
                <h3 class="text-dark" style="font-family:Righteous;">MOUNTAINERRING</h3>
                <h1 class="fw-bold text-dark mb-3">和你一起翻山越嶺</h1>
                <RouterLink to="/products" class="btn btn-dark py-2">查看行程</RouterLink>
            </div>
        </div>
    </header>
    <!-- 路線簡介 -->
    <section>
        <div class="row g-0">
            <div class="col-md-5 bg-secondary d-flex align-items-center ">
                <div class="container m-5">
                    <div>
                        <h2 class="mb-5">路線<br>簡介</h2>
                        <h4>水鹿的故鄉：能高安東軍縱走 ― 大北三段</h4>
                        <p>中央山脈主脊北三段，北自大禹嶺，一路向南經過奇萊北壁、奇萊連峰、能高安東軍，然後再往南穿越魔王草山摩即後，抵達七彩湖。知名的進階路線一奇萊東稜及千卓萬群峰，正是分屬此處東西支稜。而一般口語上會將能高安東軍稱為「北三段」，實際上能安縱走只佔其中一段。
                        </p>
                        <button class="btn btn-outline-light " type="button">查看更多</button>
                    </div>
                </div>
                <!-- <img style="z-index: 1; " src="../stylesheets/shoes.jpg" alt=""> -->
            </div>
            <div class="col-md-7">
                <img class="height-s5 w-100 object-fit-cover " src="../assets/pic/能高安東軍.jpeg" alt="能高安東軍">
            </div>
        </div>
    </section>
    <!-- 最新活動 -->
    <section class="container">
        <div class="row my-5">
            <h2 class="mb-5">最新<br>活動</h2>
            <div class="col-md-3">
                <div class="card border-0 mb-4">
                    <RouterLink to="/product/-NN0TN0Oy7quf2LBeINs"><img src="https://greathunger.com.tw/images/images/activity2_20221202152957.jpg" class="card-img-top rounded-0" alt="能高安東軍縱走" /></RouterLink>
                    <div class="card-body text-start">
                        <h5>水鹿的故鄉｜能高安東軍縱走</h5> 
                        <div class="d-flex justify-content-between">
                            <p class="card-text text-muted mb-0 h6">
                                NT$12500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 mb-4">
                    <RouterLink to="/product/-NKpwDun9A4lFDuSlmJL"><img src="https://greathunger.com.tw/images/images/activity8_20221114191552.jpg" class="card-img-top rounded-0" alt="戒茂斯上嘉明湖" /></RouterLink>
                    <div class="card-body text-start">
                        <h5>天使的眼淚｜戒茂斯上嘉明湖</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text text-muted mb-0 h6">
                                NT$4500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 mb-4">
                    <RouterLink to="/product/-NR2IkrzZx0QBHqSbOca"><img src="https://greathunger.com.tw/images/images/activity0_20221115212626.jpg" class="card-img-top rounded-0" alt="加羅湖" /></RouterLink>
                    <div class="card-body text-start">
                        <h5>散落的珍珠｜加羅湖</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text text-muted mb-0 h6">
                                NT$4380
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card border-0 mb-4">
                    <RouterLink to="/product/-NR2CbYAl8zohH3Px7O1"><img src="https://greathunger.com.tw/images/activity_20221115211124.jpg" class="card-img-top rounded-0" alt="水漾森林" /></RouterLink>
                    <div class="card-body text-start">
                        <h5>即將消失的秘境｜水漾森林</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text text-muted mb-0 h6">
                                NT$4500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 登山知識 -->
    <section>
        <div class="row g-0 flex-row-reverse">
            <div class="col-md-6 bg-secondary d-flex align-items-center ">
                <div class="container m-5">
                    <div>
                        <h2 class="mb-5">登山<br>知識</h2>
                        <h4>關於獨攀這件事</h4>
                        <p>這個6月份，就三起山中事故的新聞報導：1. 男獨攀立霧山受困求助 救難隊河谷尋獲遺體2. 獨攀桃山失聯！男山友失足墜溪溺斃3. 男獨攀合歡山受困 「跑山獸」連夜入山尋獲
                        </p>
                        <button class="btn btn-outline-light " type="button">查看更多</button>
                    </div>
                </div>
                <!-- <img style="z-index: 1; " src="../stylesheets/shoes.jpg" alt=""> -->
            </div>
            <div class="col-md-6">
                <img class="height-s5 w-100 object-fit-cover " src="../assets/pic/knowledge.png" alt="">
            </div>
        </div>
    </section>
</template>
