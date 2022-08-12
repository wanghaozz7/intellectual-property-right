<template>
  <div class="main demand">
    <div class="title">
      <div style="display: flex">
        <h2>企业最新需求</h2>
        <p>
          <router-link to="/demandDetail">
            <a href="" style="color: #196aa9">更多需求
            </a>
          </router-link>
        </p>
      </div>
    </div>
    <div class="content">
      <div class="contentBlock">
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="contentBlock">
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="contentBlock">
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div class="item">
            <div class="date">
              <h1>1</h1>
            </div>
            <div class="time">
              <span>Apr</span>
              <span>·</span>
              <span>2022</span>
            </div>
            <div class="itemContent">
              <span>寻找节能环保建筑材料、绿色建筑等新成果</span>
              <div class="textContent">
                寻找节能环保建筑材料、绿色建筑等新成果，以现有河北地区工厂企业为依托，与成果持有专家团队共同推动成果应用到产业和运营工作，可考虑技术入股、长期聘用专家指导等方式合作。
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.css"
export default {
  name: 'index'
}
</script>
<style scoped>
.demand {
  /*background-color: red;*/
  height: 470px;
  /*background-color: red;*/
  margin: 30px auto;
}

a {
  color: black;
}

.title {
  height: 40px;
  /*background-color: red;*/
}

.title>div {
  /*text-align: center;*/
  position: relative;
  top: 20%;
}

.title div h2 {
  font-size: 28px;
  color: #4a4a4a;
}

.title div p {
  position: absolute;
  right: 0;
  font-size: 20px;
  color: rgba(000, 000, 000, .7);
}

/*内容*/
.content {
  display: flex;
  flex-direction: row;
  /* flex 水平居中 */
  justify-content: center;
  /* flex 垂直居中 */
  align-items: center;
  /*background-color: #fff;*/
  height: 400px;
  width: 1226px;
  /* padding: 40px 90px; */
}

.content .item {
  display: flex;
  width: 400px;
  height: 200px;
  background-color: #fff;
  padding: 30px;
}

.item .date h1 {
  margin-top: 0;
  font-size: 60px;
  color: rgba(000, 000, 000, .8);
}

.content .contentBlock {
  margin: 0 13px 0 0;

}
/* 最右侧 */
.content :nth-child(3){
  margin-right: 0;
}

.content .contentBlock a>div {
  margin: 13px 0;
  transition: all .1s;
}

.content .contentBlock a>div:hover {
  color: #4c6a86;
  transition: all .1s;
}

.content .item .itemContent {
  width: 220px;
}

.content .item .itemContent span {
  font-size: 20px;
  display: block;
  height: 25px;
  overflow: hidden;
  margin-bottom: 10px;
  text-overflow: ellipsis;
}

.content .item .itemContent .textContent {
  width: 200px;
  height: 109px;
  color: #4a4a4a;
  overflow: hidden;
}

.content .item .time {
  position: relative;
  top: 50%;
  margin: -30px 30px 0;
}

.content .item .time span {
  display: block;
  color: #ddd;
}
</style>
