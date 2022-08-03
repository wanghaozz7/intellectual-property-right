<template>
  <div style="background-color: white;">
    <div class="contain">
      <div class="content">
        <router-link to="/patentList">
          <div class="title">
            <span>知识产权对接平台</span>
          </div>
        </router-link>
        <div class="search">
          <el-input style="width: 480px;" v-model="input" placeholder="输入专利关键词"></el-input>
          <el-button style="background-color: #2489f2;color:#fff; margin-left:10px;" slot="append" icon="el-icon-search"></el-button>
        </div>
      </div>
    </div>

    <div style="margin-left: 20px;">
      <el-table
        :data="tableData"
        style="width: 1200px;"
        :show-header="false"
        highlight-current-row
        border
      >
        <el-table-column width="1200">
          <template slot-scope="{row}">
            <el-container>
              <el-header height="45px">
                <el-row :gutter="10">
                  <el-col :span="4"><span> {{ row.p_type_name }} </span></el-col>
                  <el-col :span="4">
                    <router-link :to="{'name': 'patentDetail', 'query': {'patent': row.id}}" target="_blank">
                      <span class="link-type"> {{ row.application_no }} </span>
                    </router-link>
                  </el-col>
                  <el-col :span="8">
                    <router-link :to="{'name': 'patentDetail', 'query': {'patent': row.id}}" target="_blank">
                      <span class="link-type"> {{ row.title }} </span>
                    </router-link>
                  </el-col>
                  <el-col :span="6"><el-tag :type="row.ls1_tag_style"> {{ row.ls1 }} </el-tag></el-col>
                </el-row>
              </el-header>
              <el-container>
                <el-aside width="200px" style="background:white; padding:0; margin:0; height:190px;">
                  <img style="border:1px solid #ccc; width:200px; height: 190px;" :src="row.image" />
                </el-aside>
                <el-main style="padding: 0 20px;">
                  <el-row :gutter="10">
                    <el-col :span="10">
                      <span style="font-weight:bold;">公开（公告）号：</span>
                      <router-link :to="{'name': 'patentDetail', 'query': {'patent': row.id}}" target="_blank">
                        <span class="link-type">
                          {{ row.publication_no }} <template v-if="row.apn"> ({{ row.apn }}) </template>
                        </span>
                      </router-link>
                    </el-col>
                    <el-col :span="14">
                      <span style="font-weight:bold;">申请（专利权）人：</span>
                      <span> {{ row.applicants }} </span>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="10">
                      <span style="font-weight:bold;">申请日：</span>
                      <span> {{ row.application_date }} </span>
                    </el-col>
                    <el-col :span="14">
                      <span style="font-weight:bold;">主分类号：</span>
                      <span> {{ row.ic1 }} </span>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="10">
                      <span style="font-weight:bold;">公开（公告）日：</span>
                      <span> {{ row.publication_date }} <template v-if="row.apd"> ({{ row.apd }}) </template></span>
                    </el-col>
                    <el-col :span="14">
                      <span style="font-weight:bold;">代理机构：</span>
                      <span> {{ row.agent_org_name }} </span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <span style="font-weight:bold;">摘要：</span>
                      <span> {{ row.abstract_text }} </span>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-container>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>

  </div>
</template>

<script src="./index.js">
</script>

<style scoped>
.contain{
  height: 86px;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;
}
.content{
  display: flex;
  width: 1200px;
  height: 86px;
  align-items: center;
  margin: auto;
}
.search{
  display: flex;
}
.title{
  margin-right: 80px;
}
.title span{
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.table {
  margin-left: 10px;
  /* width: 95%; */
  /* margin: 0 auto; */
}

</style>
