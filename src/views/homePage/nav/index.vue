<template>
  <!-- 导航开始 -->
  <div style="position: relative;">
    <!-- <div class="bigCarousel" style="position: relative; margin: auto">
      <div class="bigTitle">
        <div class="TopTitle">知识产权对接平台</div>
        <div class="Nav">
          <ul style="display: flex">
            <li class="head_item"><a href="#">首页</a></li>
            <li class="head_item"><a href="#">通知公告</a></li>
            <li class="head_item"><a href="#">动态资讯</a></li>
            <li class="head_item"><a href="#">专利导航</a></li>
            <li class="head_item"><a href="#">领域专家</a></li>
            <li class="head_item"><a href="#">企业需求</a></li>
            <li class="head_item"><a href="#">政策法规</a></li>
            <li class="head_item" style="margin-left:100px"><a href="#">登录</a></li>
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
              </div>
            </div>
          </div>
          <div class="img" :style="'width: 100%;height: 100%;' + 'background-image:url(' + item.imgUrl + ')'">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div class="Anchor">
      <div class="nav_title">
        <div class="big_title">知识产权服务平台</div>
        <div class="nav_blocks">
          <ul style="display: flex;">
            <li v-for="item in blocks">{{ item }}</li>
            <li style="margin-left: 50px;">登录</li>
            <li>注册</li>
          </ul>
        </div>
      </div>
      <div class="nav_content">
        <div class="text_content">
          <div style="font-size: 22px;margin-bottom: 15px;">助力企业智能转型升级</div>
          <div style="font-size: 44px;margin-bottom: 15px;">携手打造知识产权生态平台</div>
          <div>HAND IN HAND TO BUILD AN INTERNET ECO-PLATFORM</div>
        </div>
      </div>
    </div>

    <Earth></Earth>
  </div>
</template>

<script>
import "@/assets/css/base.css";
import Earth from '@/components/Earth'
export default {
  name: "navPage",
  data() {
    return {
      // el-carousel 容器高度
      // bannerHeight: 0,
      // 浏览器高度
      // screenWidth: 0,
      // carouselimgUrl: [
      //   require("../../../assets/img/lun5.png"),
      //   require("../../../assets/img/lun6.png"),
      // ],
      // carousel: [
      //   {
      //     imgUrl: require("../../../assets/img/lun5.png"),
      //     title: "知识产权、专家",
      //     English: "BLOCK CHAIN EXPERT",
      //     content1: `数据流动、数据分析与数据存储将不可阻挡的形成跨域趋势`,
      //     content2: 'TEMPLATE致力于打造基于EOS互联网3.0数据与应用'
      //   },
      //   {
      //     imgUrl: require("../../../assets/img/lun6.png"),
      //     title: "知识产权、专家2",
      //     English: "BLOCK CHAIN EXPERT2",
      //     content1: `数据流动、数据分析与数据存储将不可阻挡的形成跨域趋势2`,
      //     content2: 'TEMPLATE致力于打造基于EOS互联网3.0数据与应用2'
      //   },
      // ],
      blocks: ['首页', '通知公告', '动态资讯', '专利导航', '领域专家', '企业需求', '政策法规']
    };
  },
  // 解决轮播图的高度自适应
  // mounted() {
  //   this.screenWidth = window.innerWidth;
  //   // 首次加载时,初始化高度
  //   this.screenWidth = window.innerWidth;
  //   this.bannerHeight = (600 / 1550) * this.screenWidth;
  //   // 窗口大小发生改变
  //   window.onresize = () => {
  //     this.screenWidth = window.innerWidth;
  //     this.bannerHeight = (600 / 1550) * this.screenWidth;
  //   };
  // },
  components: {
    Earth
  }
};
</script>

<style scoped>
/* 锚点，用于在不同尺寸显示器中定位到中间 */
.Anchor {
  width: 1226px;
  height: 650px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}

/* 顶部 */
.nav_title {
  width: 1226px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 25px;
  z-index: 13;
}

/* 内容 */
.nav_content {
  width: 1226px;
  height: 550px;
  position: absolute;
  left: 0;
  top: 230px;
}

.text_content {
  width: 600px;
  height: 450px;
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 13;
  /* 文字部分 */
  text-align: center;
  color: white;
}

/* 左侧大标题 */
.big_title {
  position: absolute;
  top: 30px;
  left: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
}

/* 右侧li */
.nav_blocks {
  position: absolute;
  top: 40px;
  right: 20px;
  color: #fff;
  font-size: 18px;
}

.nav_blocks li {
  margin-left: 10px;
  margin-right: 10px;
}

.nav_blocks li:hover {
  cursor: pointer;
  color: rgb(9, 163, 181);
}


/* .bigTitle {
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
  left: 30px;
  color: #fff;
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
  top: 300px;
  left: 100px;
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
}

.Nav a {
  color: white;
}

.Nav ul {
  height: 42px;
}

.Nav ul li {
  margin: 0 10px;
  width: auto;
  line-height: 42px;
}

.Nav ul li a:hover {
  color: rgb(9, 163, 181);
}

.bigCarousel img {
  background-repeat: repeat;
} */
</style>
