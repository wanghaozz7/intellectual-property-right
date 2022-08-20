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
            <li v-for="item in blocks">
              <router-link :to="{ 'name': item.link }" target="_blank">
                {{ item.name }}
              </router-link>

            </li>
            <li style="margin-right: 50px;"></li>
            <router-link :to="{ 'name': 'login', 'query': { 'type': 'login' } }" target="_blank" v-if="!isLoged">
              <li style="color: white;">登录</li>
            </router-link>
            <router-link :to="{ 'name': 'login', 'query': { 'type': 'register' } }" target="_blank" v-if="!isLoged">
              <li style="color: white;">注册</li>
            </router-link>
            <li v-if="isLoged" @click="Drawer = true">欢迎,{{ name }}</li>
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
    <!-- 登录 -->
    <!-- <el-dialog :visible.sync="enrollVisible">
      <el-form :model="enrollInfo" label-position="left" label-width="50px">
        <el-form-item label="账号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog> -->
    <!-- 抽屉 -->
    <el-drawer :with-header="false" :visible.sync="Drawer" direction="rtl" size="300px">
      <el-collapse v-model="activeNames" style="padding: 20px;">
        <el-collapse-item title="我感兴趣的需求" name="1">
          <div v-for="item of personalDemandConsult">
            <router-link :to="{ 'name': 'demandDetail', 'query': { 'id': item.demand } }" target="_blank"
              class="link-style">
              {{ item.demand_title }}
            </router-link>
          </div>

        </el-collapse-item>
        <el-collapse-item title="我提出的需求" name="2">
          <div v-for="item of personalDemand">
            <router-link :to="{ 'name': 'demandDetail', 'query': { 'id': item.id } }" target="_blank" class="link-style
              ">
              {{ item.title }}
            </router-link>
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-button type="danger" style="margin: 12px 100px;" @click="handleLogOut"><i class="el-icon-error"></i>退出登录
      </el-button>
    </el-drawer>
  </div>
</template>

<script>
import "@/assets/css/base.css";
import Earth from '@/components/Earth'
import store from '@/store/index'
import { getInfo } from '@/api/user'
import { getToken, removeToken } from "@/utils/auth";
import router from "@/router/index";
import { personalDemand, personalDemandConsult } from '@/api/demand'
let token;
let isLoged;
let name;
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
      blocks: [{
        name: '首页',
        link: 'homePage'
      }, {
        name: '通知公告',
        link: 'noticeDetail'
      }, {
        name: '动态资讯',
        link: 'newsDetail'
      }, {
        name: '专利导航',
        link: 'patentList'
      }, {
        name: '领域专家',
        link: 'expertSearch'
      }, {
        name: '企业需求',
        link: 'demandList'
      }, {
        name: '政策法规',
        link: 'law'
      }],
      isLoged,
      token,
      name,
      Drawer: false,
      activeNames: [],
      personalDemand: [],
      personalDemandConsult: []
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
  },
  created() {
    // 获取个人信息
    store.commit('SET_TOKEN', getToken());
    this.token = getToken();
    if (this.token === '' || typeof (this.token) === "undefined") this.isLoged = false;
    else this.isLoged = true;
    getInfo().then(res => {
      this.name = res.data.name;
    }).catch(err => {
      console.log(err);
    });

    // 获取个人中心信息
    const query = {
      limit: 2,
      page: 1
    }
    personalDemand().then(res => {
      console.log('personal_demand', res);
      this.personalDemand = res;
    }).catch(err => {
      console.log(err);
    });
    personalDemandConsult(query).then(res => {
      this.personalDemandConsult = res.results;
      console.log('personalDemandConsult', this.personalDemandConsult);
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    handleLogOut() {//退出
      console.log('我要退出');
      removeToken();
      store.commit('SET_TOKEN', '');
      router.push({ name: 'login' });
    }
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
  height: 300px;
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

.link-style {
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
}

.link-style a:hover {
  color: #4a79ff;
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
