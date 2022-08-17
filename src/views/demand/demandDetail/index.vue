<template>
  <div>
    <Top :sign=true holder="需求详情"></Top>
    <el-card class="box-card">
      <div slot="header" class="header">
        <span style="font-size: 20px;">
          <el-tag>{{ field[field_idx] }}</el-tag> 寻求提升PET物性稳定性、阻燃性、尺寸稳定性的方法
        </span>
        <span>
          <el-button :type=button_type size="small" @click="handleClick">{{ button_text }}</el-button>
        </span>
      </div>

      <el-descriptions class="margin-top" :column="5" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'center' }">
        <template slot="title">山东某新材料有限公司</template>
        <template slot="extra">2022-05-27 10:14</template>
        <el-descriptions-item label="关键词">PET PET 阻燃 阻燃</el-descriptions-item>
        <el-descriptions-item label="客户类型">企业</el-descriptions-item>
        <el-descriptions-item label="解决期限">未确认</el-descriptions-item>
        <el-descriptions-item label="最佳预算">未确定</el-descriptions-item>
        <el-descriptions-item label="预算上线">未确定</el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="附件"></el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="需求详情">
          企业研究过程遇到的难点是：(1)PET吸水，从而导致物性不稳定；(2)PET 不容易做到阻燃；(3)PET 尺寸不稳定。 希望找到专家或研究院所，能够解决难点。占位占位占位占位占位占位占位占位占位
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="技术指标">
          尚未填写
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions :column="1" border :labelStyle="{ 'width': '80px', 'text-align': 'center' }"
        :contentStyle="{ 'text-align': 'left' }">
        <el-descriptions-item label="不感兴趣的技术">
          尚未填写
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
      button_text: '我感兴趣'
    }
  },
  created() {
    this.field_idx = this.$route.query.id;
    console.log(this.field_idx);
  },
  methods: {
    handleClick() {
      let token = getToken();
      console.log(token);
      if (token === '') {
        console.log('未登录');

      } else {
        console.log('已登录');

      }
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