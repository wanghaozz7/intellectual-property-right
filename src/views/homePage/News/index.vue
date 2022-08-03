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
        <div class="title">通知公告</div>
        <div class="content">
          <ul v-for="item, index in notifyList" :key="index">
            <li>
              <router-link :to="{'name': 'articleDetail', 'query': {'type': 'notify', 'id': item.id}}" target="_blank">
                <a> {{ item.title }} </a>
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
          动态资讯
        </div>
        <div class="content">
          <ul>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg69fvkQYotJv6ygUwwgM4_gE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </li>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg-bbvkQYosJ2X-QIwggM46wE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </li>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg69fvkQYotJv6ygUwwgM4_gE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </li>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg-bbvkQYosJ2X-QIwggM46wE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </li>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg69fvkQYotJv6ygUwwgM4_gE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </li>
            <li>
              <a href="">
                <div>
                  <div class="img">
                    <img src="https://28952661.s61i.faiusr.com/2/AD0I1ZDnDRACGAAg69fvkQYotJv6ygUwwgM4_gE.jpg.webp" alt="">
                  </div>
                  <div class="itemInformation">
                    <div class="itemTitle">啊啊啊</div>
                    <div class="itemContent">3月18日，位于四川甘孜藏族自治州的雅砻江两河口水电站一台机组正式投sdfsd fsdfssdfsdfsdfsdfsdfsddfsdafsdfasdfasdfasdafasdf</div>
                  </div>
                </div>
              </a>
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
  data () {
    return {
      imgUrlList: imgUrlList,
      notifyList: [
        { id: 1, title: '回顾2020：科学家在线推出多个路演项目共获4亿融资' },
        { id: 2, title: '海外优质科创项目线上路演-先进制造专场' },
        { id: 3, title: '科技创投私董会——区块链专场' },
        { id: 4, title: '回顾2020：科学家在线推出多个路演项目共获4亿融资' },
        { id: 5, title: '科技创投私董会——区块链专场' },
        { id: 6, title: '回顾2020：科学家在线推出多个路演项目共获4亿融资' },
        { id: 7, title: '海外优质科创项目线上路演-先进制造专场' },
        { id: 8, title: '回顾2020：科学家在线推出多个路演项目共获4亿融资' },
        { id: 9, title: '科技创投私董会——区块链专场' },
        { id: 10, title: '海外优质科创项目线上路演-先进制造专场' },
        { id: 11, title: '回顾2020：科学家在线推出多个路演项目共获4亿融资' },
        { id: 12, title: '科技创投私董会——区块链专场' },
      ]
    }
  }
}
</script>

<style scoped>
.carousel{
  width: 606px;
  height: 431px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  transition:all .3s;
  background-color: #fff;
  margin-bottom: 14px;
}
.carousel:hover{
  border: 1px solid #b7b4b4;
  transition:all .3s;
  transform:scale(1.01);
}
.news{
  display: flex;
  height: 955px;
  width: 1226px;
  margin: 28px auto;
  /*padding-top: 15px;*/
  /*padding-left: 30px;*/
  /*background: #ffffff;*/
  border-radius: 20px;
}
.title{
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: rgb(89, 87, 87);
}
/*左边*/
/*通知公告*/
.notice{
  width: 606px;
  height: 504px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  border: 1px solid #ffffff;
  transition:all .3s;
}
.notice:hover{
  border: 1px solid #b7b4b4;
  transition:all .3s;
  transform:scale(1.01);
}
.notice ul li a{
  color: #4a4a4a;
  font-size: 18px;
}
.notice ul li{
  margin: 10px 0;
}
.notice ul li:hover{
  color: #424141;
  font-weight: bold;
}
/* 右边 */
.right{
  margin-left: 14px;
}
/* 动态资讯 */
.information{
  width: 606px;
  height: 950px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  border: 1px solid #ffffff;
  transition:all .3s;
}
.information:hover{
  border: 1px solid #b7b4b4;
  /*box-shadow: 0 0 3px #858585, 0 0 5px #e3e3e3;*/
  transition:all .3s;
  transform:scale(1.01);
}
.content ul li a>div{
  display: flex;
  width: 551px;
  height: 103px;
}

.itemInformation{
  width: 370px;
  margin-left: 20px;
}
.line{
  border-top: 1px solid #F0F0F0;
  margin: 23.5px 0;
}
.itemTitle{
  overflow: hidden;
}
.itemContent{
  margin-top: 10px;
  font-size: 14px;
  overflow: hidden;
  color: rgb(144, 147, 149);
}
.img{
  width: 163px;
}
.img img{
  width: 100%;
}
</style>
