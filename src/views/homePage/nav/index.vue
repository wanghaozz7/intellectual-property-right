<template>
  <!-- 导航开始 -->
  <div>
    <div class="bigCarousel" style="position: relative; margin: auto">
      <div class="bigTitle">
        <div class="TopTitle">知识产权对接平台</div>
        <div class="Nav">
          <ul style="display: flex">
            <li class="head_item"><a href="#">首页</a></li>
            <!-- <li class="head_item"><a href="#">平台服务</a></li> -->
            <li class="head_item"><a href="#">通知公告</a></li>
            <li class="head_item"><a href="#">动态资讯</a></li>
            <li class="head_item"><a href="#">专利导航</a></li>
            <li class="head_item"><a href="#">领域专家</a></li>
            <li class="head_item"><a href="#">企业需求</a></li>
            <li class="head_item"><a href="#">政策法规</a></li>
            <li class="head_item"><a href="#">登录</a></li>
            <li class="head_item"><a href="#">注册</a></li>
          </ul>
        </div>
      </div>
      <el-carousel height="790px" style="min-width: 1226px;">
        <el-carousel-item v-for="item, index in carousel" :key="index">
          <div style="width: 1226px; margin: 0 auto;position: relative;">
            <div class="carouselContent">
              <div class="title">{{ item.title }}</div>
              <div class="English">{{ item.English }}</div>
              <div class="content">
                {{ item.content1 }}
                <br>
                {{ item.content2 }}
                <!-- 数据流动、数据分析与数据存储将不可阻挡的形成跨域趋势<br />
                TEMPLATE致力于打造基于EOS互联网3.0数据与应用 -->
              </div>
            </div>
          </div>
          <!--          <div class="img"></div>-->
          <div class="img" :style="'width: 100%;height: 100%;' + 'background-image:url(' + item.imgUrl + ')'">
            <!--            <img :src="item.imgUrl" alt="暂无图片" style="display: block;width: 100%; height: 100%;margin:0 auto;" />-->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.css";
export default {
  name: "navPage",
  data() {
    return {
      // el-carousel 容器高度
      bannerHeight: 0,
      // 浏览器高度
      screenWidth: 0,
      carouselimgUrl: [
        require("../../../assets/img/lun5.png"),
        require("../../../assets/img/lun6.png"),
      ],
      carousel: [
        {
          imgUrl: require("../../../assets/img/lun5.png"),
          title: "知识产权、专家",
          English: "BLOCK CHAIN EXPERT",
          content1: `数据流动、数据分析与数据存储将不可阻挡的形成跨域趋势`,
          content2: 'TEMPLATE致力于打造基于EOS互联网3.0数据与应用'
        },
        {
          imgUrl: require("../../../assets/img/lun6.png"),
          title: "知识产权、专家2",
          English: "BLOCK CHAIN EXPERT2",
          content1: `数据流动、数据分析与数据存储将不可阻挡的形成跨域趋势2`,
          content2: 'TEMPLATE致力于打造基于EOS互联网3.0数据与应用2'
        },
      ],
    };
  },
  // 解决轮播图的高度自适应
  mounted() {
    this.screenWidth = window.innerWidth;
    // 首次加载时,初始化高度
    this.screenWidth = window.innerWidth;
    this.bannerHeight = (600 / 1550) * this.screenWidth;
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.bannerHeight = (600 / 1550) * this.screenWidth;
    };
  },
};
</script>

<style scoped>
.bigTitle {
  width: 1226px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 10;
}

.TopTitle {
  position: absolute;
  top: 60px;
  left: 0;
  /*z-index: 10;*/
  color: #02b2b5;
  font-weight: bold;
  font-size: 2rem;
}

.English {
  font-size: 25px;
  color: #40e2ec;
  margin-bottom: 34px;
}

.carouselContent {
  position: absolute;
  top: 200px;
  /*background-color:red;*/
  left: 50px;
  /*background-color: red;*/
  /*z-index: 10;*/
}

.carouselContent .title {
  font-size: 3rem;
  font-weight: bold;
  color: #40e2ec;
}

.carouselContent .content {
  font-size: 12px;
  color: #22848a;
}

.head_item {
  width: 80px;
}

img {
  width: 100%;
}

.Nav {
  position: absolute;
  top: 60px;
  right: 0;
  /*z-index: 10;*/
}

.Nav a {
  color: white;
}

.Nav ul li {
  margin: 0 10px;
}

.Nav ul li a:hover {
  color: rgb(9, 163, 181);
}

.bigCarousel img {
  background-repeat: repeat;
}
</style>
