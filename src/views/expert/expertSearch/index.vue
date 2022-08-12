<template>
  <div>
    <top :sign="true"></top>
    <div class="container">
      <div class="search-Range">
        <div class="search-Range-title">
          <div class="left">
            查找范围
          </div>
          <div class="right">
            <div v-for="(item, index) in searchRangeList"
              :class="selectedIndex === index ? 'right-item active' : 'right-item'" @click="getTopic(index)">{{ item }}
            </div>
          </div>
        </div>
        <div class="search-Range-down">
          <!-- <div class="search-Range-down-item">
            <div class="left">特殊荣誉</div>
            <div class="right">
              <div v-for="(item,index) in SpecialHonorList" :class="SpecialHonorIndex === index ? 'right-item active':'right-item'" @click="SpecialHonor(index)">{{item}}</div>
            </div>
          </div>
          <div class="search-Range-down-item">
            <div class="left">H因子范围</div>
            <div class="right">
              <div v-for="(item,index) in H_factorList" :class="H_factorIndex === index?'right-item active':'right-item'" @click="H_factor(index)">{{item}}</div>
            </div>
          </div> -->
          <div class="search-Range-down-item">
            <div class="left">领域范围</div>
            <div class="right">
              <div v-for="(item, index) in Domain_scopeList"
                :class="Domain_scopeIndex === index ? 'right-item active' : 'right-item'" @click="Domain_scope(index)">
                {{ item }}</div>
            </div>
          </div>
          <!-- <div class="search-Range-down-item">
            <div class="left">机构（高校）</div>
            <div class="right">
              <div v-for="(item,index) in SchoolList" :class="SchoolIndex === index ? 'right-item active':'right-item'" @click="School(index)">{{item}}</div>
            </div>
          </div> -->
          <div class="search-Range-down-item">
            <div class="left">地域</div>
            <div class="right">
              <div v-for="(item, idx) of areaList" class='right-item'  @click="area(idx)" 
                :class="areaIndex === idx ? 'right-item active' : 'right-item'">{{ item }}
              </div>
            </div>
          </div>
          <div class="search-condition">
            <div class="search-condition-left">
              筛选条件：
            </div>
            <div class="search-condition-right" v-for="(item, index) in searchCondition" :key="item"
              @click="cancel(index)">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="search-result">
        <div class="search-result-number">
          为您找到 <span> {{ total }}</span> 条记录
        </div>

        <div class="search-result-export">
          <div class="search-result-export-item" v-for="(talent, i) in talentList" :key=i>
            <router-link :to="{ 'name': 'expertDetail', 'query': { 'uri': talent.uri } }">
              <div class="left"> {{ talent.name[0] }} </div>
            </router-link>
            <div class="right">
              <div class="name_from">
                <router-link :to="{ 'name': 'expertDetail', 'query': { 'uri': talent.uri } }">
                  <div class="name"> {{ talent.name }} </div>
                </router-link>
                <div class="from"> {{ talent.org }} </div>
              </div>
              <div class="tag"> {{ talent.domains }} </div>
              <div class="data">
                <div class="data-item"> <span class="title">H因子: </span> <span class="value">{{ talent.hIndex }}</span>
                </div>
                <div class="data-item"> <span class="title">论文数: </span> <span class="value">{{ talent.paperCounts
                }}</span> </div>
                <div class="data-item"> <span class="title">被引用数: </span> <span class="value">{{ talent.cited }}</span>
                </div>
                <div class="data-item"> <span class="title">专利数: </span> <span class="value">{{ talent.patentCounts
                }}</span> </div>
                <div class="data-item"> <span class="title">项目数: </span> <span class="value">{{ talent.projectCounts
                }}</span> </div>
              </div>
            </div>
          </div>
        </div>

        <pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
          @pagination="getTalent" />
      </div>
    </div>
  </div>

</template>

<script src="./index.js"></script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: yellow;
}

a {
  text-decoration: none;
  color: black;
}
</style>
