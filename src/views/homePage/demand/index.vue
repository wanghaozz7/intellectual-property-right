<template>
  <div class="main demand">
    <div class="title">
      <div style="display: flex">
        <h2>企业最新需求</h2>
        <p>
          <a href="/#/demandList" style="color: #196aa9" target="_blank"
            >更多需求</a
          >
        </p>
      </div>
    </div>
    <div class="content">
      <div class="contentBlock" v-for="block of content">
        <router-link
          v-for="item of block"
          :to="{ name: 'demandDetail', query: { id: item.id } }"
          target="_blank"
        >
          <div class="item">
            <div class="date">
              <h1>{{ item.date[2] }}</h1>
            </div>
            <div class="time">
              <span>{{ item.date[1] }}</span>
              <span>·</span>
              <span>{{ item.date[0] }}</span>
            </div>
            <div class="itemContent">
              <span>{{ item.title }}</span>
              <div class="textContent">
                {{ item.demand }}
              </div>
            </div>
          </div>
        </router-link>
        <!-- <a href="">
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
        </a> -->
      </div>
      <!-- <div class="contentBlock">
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
      </div> -->
      <!-- <div class="contentBlock">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.css";
import { demandList } from "@/api/demand";
export default {
  name: "",
  data() {
    return {
      content: [[], [], []],
    };
  },
  created() {
    demandList()
      .then((res) => {
        const tmp = res;
        console.log("demand", tmp);
        this.content = [[], [], []];
        for (let idx in tmp) {
          //分为三组
          let i = Math.floor(idx / 2);
          const source = tmp[idx];
          const date = source.created_time.split("-");
          const title = source.title;
          const demand = source.demand_content;
          const id = source.id;
          const data = {
            date,
            title,
            demand,
            id,
          };
          console.log(i, data);
          this.content[i].push(data);
        }
        console.log("content", this.content);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
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

.title > div {
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
  color: rgba(000, 000, 000, 0.7);
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
  color: rgba(000, 000, 000, 0.8);
}

.content .contentBlock {
  margin: 0 13px 0 0;
}

/* 最右侧 */
.content :nth-child(3) {
  margin-right: 0;
}

.content .contentBlock a > div {
  margin: 13px 0;
  transition: all 0.1s;
}

.content .contentBlock a > div:hover {
  color: #4c6a86;
  transition: all 0.1s;
}

.content .item .itemContent {
  width: 200px;
}

.content .item .itemContent span {
  font-size: 20px;
  display: block;
  height: 25px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content .item .itemContent .textContent {
  width: 200px;
  height: 109px;
  color: #4a4a4a;

  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-all;
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
