<template>
  <div class="news">
    <!--   左边-->
    <div class="left">
      <!-- 轮播部分 -->
      <div class="carousel">
        <el-carousel indicator-position="outside" height="25rem">
          <el-carousel-item v-for="item in imgUrlList" :key="item.name">
            <img :src="item.src" alt="" style="width: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 新闻部分 -->
      <!-- 通知公告  -->
      <div class="notice">
        <div class="title">
          <span>通知公告</span>
          <a href="/#/noticeDetail" style="color:rgb(89, 87, 87);margin-left: 390px;" target="_blank">更多</a>
        </div>
        <div class="content">
          <ul v-for="item, index in notifyList" :key="index">
            <li>
              <router-link :to="{ 'name': 'articleDetail', 'query': { 'type': 'notify', 'id': item.id } }"
                target="_blank">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--    右边-->
    <div class="right">
      <div class="information">
        <div class="title">
          <span>动态资讯</span>
          <a href="/#/newsDetail" style="color:rgb(89, 87, 87);margin-left: 390px;" target="_blank">更多</a>
        </div>
        <div class="content">
          <ul>
            <li v-for="item of infoList">
              <router-link :to="{ 'name': 'articleDetail', 'query': { 'type': 'news', 'id': item.id } }"
                target="_blank">
                <div>
                  <div class="img">
                    <img :src=item.full_image_path[0].url alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">{{ item.title }}</div>
                    <div class="itemContent">{{ item.desc }}</div>
                  </div>
                </div>
              </router-link>

              <div class="line"></div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.css"
import { newsList, notifyList } from '@/api/news'
const imgUrlList = [
  {
    name: '6.png',
    src: require('../../../assets/img/6.png')
  },
  {
    name: '5.jpg',
    src: require('../../../assets/img/5.jpg')
  }
]


export default {
  name: 'NewsPage',
  data() {
    return {
      imgUrlList: imgUrlList,
      notifyList: [],
      infoList: []
    }
  },
  created() {
    let query = {
      limit: 5,
      page: 1
    }
    newsList(query).then(res => {
      this.infoList = res.results;
      console.log('info', this.infoList);

    }).catch(err => {
      console.log(err);
    })
    notifyList({
      limit: 12,
      page: 1
    }).then(res => {
      this.notifyList = res.results;
      console.log('notify', this.notifyList);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.carousel {
  width: 606px;
  height: 431px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  transition: all .3s;
  background-color: #fff;
  margin-bottom: 14px;
}

.carousel:hover {
  border: 1px solid #b7b4b4;
  transition: all .3s;
  transform: scale(1.01);
}

.news {
  display: flex;
  height: 955px;
  width: 1226px;
  margin: 28px auto;
  /*padding-top: 15px;*/
  /*padding-left: 30px;*/
  /*background: #ffffff;*/
  border-radius: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: rgb(89, 87, 87);
}

/*左边*/
/*通知公告*/
.notice {
  width: 606px;
  height: 504px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  border: 1px solid #ffffff;
  transition: all .3s;
}

.notice:hover {
  border: 1px solid #b7b4b4;
  transition: all .3s;
  transform: scale(1.01);
}

.notice ul li a {
  color: #4a4a4a;
  font-size: 18px;
}

.notice ul li {
  margin: 10px 0;
}

.notice ul li:hover {
  color: #424141;
  font-weight: bold;
}

/* 右边 */
.right {
  margin-left: 14px;
}

/* 动态资讯 */
.information {
  width: 606px;
  height: 950px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  border: 1px solid #ffffff;
  transition: all .3s;
}

.right:hover {
  border: 1px solid #b7b4b4;
  /*box-shadow: 0 0 3px #858585, 0 0 5px #e3e3e3;*/
  transition: all .3s;
  transform: scale(1.01);
}

.content ul li a>div {
  display: flex;
  width: 551px;
  height: 103px;
}

.itemInformation {
  width: 370px;
  margin-left: 20px;
}

.line {
  border-top: 1px solid #F0F0F0;
  margin: 23.5px 0;
}

.itemTitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  font-size: 18px;
}

.itemContent {
  margin-top: 10px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(144, 147, 149);
  height: 70px;
}

.img {
  width: 163px;
}

.img img {
  width: 100%;
}
</style>
