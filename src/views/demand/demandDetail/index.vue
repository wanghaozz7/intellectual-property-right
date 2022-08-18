<template>
  <div>
    <Top :sign=true holder="需求详情"></Top>
    <el-card class="box-card">
      <div slot="header" class="header">
        <span style="font-size: 20px;">
          <el-tag>{{ field[field_idx] }}</el-tag> {{ demandDetail.title }}
        </span>
        <span>
          <el-button :type=button_type size="small" @click="handleClick" style="transition: all .3s;">{{ button_text }}
          </el-button>
        </span>
      </div>
      <el-descriptions class="margin-top" :column="5" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'center' }">
        <template slot="title">{{ demandDetail.unit }}</template>
        <template slot="extra">{{ demandDetail.publish_date }}</template>
        <el-descriptions-item label="关键词"><span v-for="item of demandDetail.keywords">{{ item }}</span>
        </el-descriptions-item>
        <el-descriptions-item label="客户类型">{{ demandDetail.client_type }}</el-descriptions-item>
        <el-descriptions-item label="解决期限">{{ demandDetail.end_date }}</el-descriptions-item>
        <el-descriptions-item label="最佳预算">{{ demandDetail.best_budget }}</el-descriptions-item>
        <el-descriptions-item label="预算上限">{{ demandDetail.max_budget }}</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="附件">
          <span v-for="item of demandDetail.file">{{ item }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="需求详情">
          {{ demandDetail.demand_content }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="技术指标">
          <span v-for="item of demandDetail.technical_index">{{ item }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="不感兴趣的技术">
          <span v-for="item of demandDetail.uninterested_technology">{{ item }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <!-- <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'height': '200px' }"
        :contentStyle="{ 'text-align': 'center' }">
        <el-descriptions-item label="处理进度" align-center space="100">
          <div>
            <el-steps :space="200" :active="1" finish-status="success">
              <el-step title="已完成"></el-step>
              <el-step title="进行中"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </div>
        </el-descriptions-item>
      </el-descriptions> -->
      <el-steps :active="1" style="margin-top:20px" align-center>
        <el-step title="提交需求" icon="el-icon-document"></el-step>
        <el-step title="需求确认" icon="el-icon-document-checked"></el-step>
        <el-step title="需求预约" icon="el-icon-date"></el-step>
        <el-step title="需求服务" icon="el-icon-goods"></el-step>
        <el-step title="需求关闭" icon="el-icon-circle-check"></el-step>
      </el-steps>
    </el-card>
  </div>
</template>

<script>
import Top from '@/components/Top/index.vue'
import store from '@/store/index'
import router from '@/router/index'
import { getToken } from '@/utils/auth';
import { demandConsult, demandDetail } from '@/api/demand';

const field = ['节能环保', '生物医药', '机械制造', '电子信息', '化工化学', '新能源', '材料科学', '其他'];


export default {
  name: '',
  components: {
    Top
  },
  data() {
    return {
      field,
      field_idx: -1,
      demand_list: {

      },
      button_type: 'danger',
      button_text: '我感兴趣',
      demandDetail: {}
    }
  },
  created() {
    this.field_idx = this.$route.query.idx;
    console.log(this.field_idx);
    const id = this.$route.query.id;
    demandDetail(id).then(res => {
      console.log(res);
      this.demandDetail = res;
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    handleClick() {
      store.commit('SET_TOKEN', getToken());
      let token = store.state.token;
      if (token === '' || typeof (token) === "undefined") {
        console.log(token);

        console.log('未登录');
        this.$message.error('请先登录！');
        window.setTimeout(function () {
          router.push({ name: 'login' });
        }, 1000);
      } else {
        console.log('已登录');
        this.button_type = 'success';
        this.button_text = '已感兴趣';
        const data = {
          demand: '1'
        }
        demandConsult(data).then(res => {
          console.log(res);
          this.open1();
        }).catch(err => {
          console.log(err);
        });
      }
    },
    open1() {
      this.$notify({
        title: '成功添加',
        message: '已将该需求设为感兴趣',
        type: 'success'
      });
    }
  }
};
</script>

<style scoped>
/* 卡片 */
.box-card {
  width: 1226px;
  margin: 20px auto;
  padding: 20px;
}

/* 头部 */
.header {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
}

/* .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
} */
</style>