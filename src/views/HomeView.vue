<script >
import imageUrl from '@/assets/pic/banner.png';
export default {
  data(){
    return {
      imageUrl: imageUrl,
    }
  },
  methods: {
  },
  mounted() {
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
    <section class="">
        <div class="row g-0">
            <div class="col-md-5 bg-secondary d-flex align-items-center text-white">
                <div class="container m-5">
                    <div>
                        <h2 class="mb-5">路線<br>簡介</h2>
                        <h4>水鹿的故鄉：能高安東軍縱走 ― 大北三段</h4>
                        <p>中央山脈主脊北三段，北自大禹嶺，一路向南經過奇萊北壁、奇萊連峰、能高安東軍，然後再往南穿越魔王草山摩即後，抵達七彩湖。知名的進階路線一奇萊東稜及千卓萬群峰，正是分屬此處東西支稜。而一般口語上會將能高安東軍稱為「北三段」，實際上能安縱走只佔其中一段。
                        </p>
                        <RouterLink class="btn btn-outline-light" to="/product/-NN0TN0Oy7quf2LBeINs">查看更多</RouterLink>
                    </div>
                </div>
                <!-- <img style="z-index: 1; " src="../stylesheets/shoes.jpg" alt=""> -->
            </div>
            <div class="col-md-7">
                <img class="height-s5 w-100 object-fit-cover d-none d-md-block" src="../assets/pic/能高安東軍.jpeg" alt="能高安東軍">
            </div>
        </div>
    </section>
    <!-- 最新活動 -->
    <section class="container">
        <div class="row my-5">
            <h2 class="mb-5">最新<br>活動</h2>
            <div class="col-md-3">
                <div class="card cardProducts border-0 rounded-0 mb-4 ">
                    <RouterLink to="/product/-NN0TN0Oy7quf2LBeINs">
                        <img src="https://greathunger.com.tw/images/images/activity2_20221202152957.jpg" class="card-img-top rounded-0" alt="能高安東軍縱走" />
                    </RouterLink>
                    <RouterLink to="/product/-NN0TN0Oy7quf2LBeINs">
                    <div class="card-body text-start text-dark">
                        <h5>水鹿的故鄉｜能高安東軍縱走</h5> 
                        <div class="d-flex justify-content-between">
                            <p class="card-text mb-0 h6">
                                NT$12500
                            </p>
                        </div>
                    </div>
                    </RouterLink>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card cardProducts border-0 rounded-0 mb-4">
                    <RouterLink to="/product/-NKpwDun9A4lFDuSlmJL">
                        <img src="https://greathunger.com.tw/images/images/activity8_20221114191552.jpg" class="card-img-top rounded-0" alt="戒茂斯上嘉明湖" />
                    </RouterLink>
                    <RouterLink to="/product/-NKpwDun9A4lFDuSlmJL">
                        <div class="card-body text-start text-black">
                        <h5 class="text-black">天使的眼淚｜戒茂斯上嘉明湖</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text mb-0 h6">
                                NT$4500
                            </p>
                        </div>
                    </div>
                    </RouterLink>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card cardProducts border-0 rounded-0 mb-4">
                    <RouterLink to="/product/-NR2IkrzZx0QBHqSbOca">
                        <img src="https://greathunger.com.tw/images/images/activity0_20221115212626.jpg" class="card-img-top rounded-0" alt="加羅湖" />
                    </RouterLink>
                    <RouterLink to="/product/-NR2IkrzZx0QBHqSbOca">
                    <div class="card-body text-start text-dark">
                        <h5>散落的珍珠｜加羅湖</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text mb-0 h6">
                                NT$4380
                            </p>
                        </div>
                    </div>
                    </RouterLink>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card cardProducts border-0 rounded-0 mb-4">
                    <RouterLink to="/product/-NR2CbYAl8zohH3Px7O1">
                        <img src="https://greathunger.com.tw/images/activity_20221115211124.jpg" class="card-img-top rounded-0" alt="水漾森林" />
                    </RouterLink>
                    <RouterLink to="/product/-NR2CbYAl8zohH3Px7O1">
                    <div class="card-body text-start text-dark">
                        <h5>遠離塵嚣的仙境｜水漾森林</h5>
                        <div class="d-flex justify-content-between">
                            <p class="card-text mb-0 h6">
                                NT$4500
                            </p>
                        </div>
                    </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>

    <!-- 登山知識 -->
    <section class="">
        <div class="row g-0 flex-row-reverse">
            <div class="col-md-6 bg-secondary d-flex align-items-center text-white">
                <div class="container m-5">
                    <div>
                        <h2 class="mb-5">登山<br>知識</h2>
                        <h4>艱困路線的行走技巧</h4>
                        <p>就以百岳可能途經的路線來說，安東軍-摩即山-草山段，絕對是最容易迷路第一名。雖然多數人不會去走到這路線，就其它百岳路線類似的來說，比較容易迷失、植物茂密、路徑不明的還有
                        </p>
                        <RouterLink class="btn btn-outline-light" to="/article/-NTDWGukt4LEU0tUbT60">查看更多</RouterLink>
                    </div>
                </div>
                <!-- <img style="z-index: 1; " src="../stylesheets/shoes.jpg" alt=""> -->
            </div>
            <div class="col-md-6">
                <img class="height-s5 w-100 object-fit-cover d-none d-md-block " src="../assets/pic/knowledge.png" alt="">
            </div>
        </div>
    </section>
</template>
