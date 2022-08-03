<template>
  <div>
    <Top :sign="false"></Top>
    <div class="search-box">
      <div class="search-box-title-p">
        <span class="search-box-title">100万专家大数据画像</span>
      </div>
      <div class="search-input">
        <input type="text" placeholder="输入专家名称、技术信息等" id="search-content">
        <div class="search-button-p">
          <button class="search-button search-button-text">查一下</button>
        </div>
      </div>
      <div class="city-section">
        <div class="city_item"><label>区域：</label>
          <div class="city_list">&nbsp;</div>
        </div>
        <template v-for="(city, province, i) in city_data">
          <div class="city_item" :key="i">
            <label> {{ province }}: </label>
            <div class="city_list">
              <template v-for="city_name in city">
                <router-link :to="{'name': 'expertSearch', 'query': {'city': city_name}}" :key="city_name">
                  <a class="item" href="#">{{ city_name }}</a>
                </router-link>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
.search-box-title-p {
  width: 587px;
  height: 67px;
  margin: auto;
  padding-bottom: 46px;
}

.search-box-title {
  font-size: 40px;
  font-weight: 800;
  color: #242424;
  line-height: 65px;
  letter-spacing: 1px;
}

.search-box {
  width: 980px;
  height: 551px;
  margin: 200px auto auto;
}

.search-input {
  position: relative;
}

.search-input input {
  width: 768px;
  height: 66px;
  border-radius: 40px;
  padding-left: 43px;
  outline: 0;
  border: 0;
  font-size: 19px;
  line-height: 66px;
  background-color: #fff;
  background-size: cover;
  /*border-radius: 50%;*/
}

.search-button-p {
  position: absolute;
  left: 689px;
  bottom: 0;
}

.search-button-text {
  font-size: 26px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 37px;
}

.search-button {
  width: 186px;
  height: 66px;
  /*outline: 0;*/
  border: 0;
  padding: 0;
  border-radius: 40px;
  background-color: #2489f2;
}
.city-section{
  margin-top: 100px;
}
/*。。。*/
.city-section .city_item{
  position: relative;
  padding-left: 65px;
  text-align: left;
  margin-top: 20px;
  font-size: 16px;
}
.city-section .city_item:first-child label {
  color: #292929;
  font-size: 20px;
}
.city-section .city_item:first-child label::before {
  content: "";
  display: inline-block;
  height: 10px;
  width: 46px;
  background: #FFAB00;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.city-section .city_item label {
  position: absolute;
  left: 0;
  top: 0;
  height: 30px;
  line-height: 30px;
  color: rgba(151, 151, 151, 0.82);
  font-weight: normal;
  z-index: 2;
}
.city-section .city_item .city_list .item {
  display: inline-block;
  margin-right: 30px;
  height: 30px;
  line-height: 30px;
  text-decoration: underline;
  color: rgba(43, 104, 225, 0.82);
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
</style>
