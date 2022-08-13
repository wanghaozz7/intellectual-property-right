<template>
  <div>
    <!-- 顶部 -->
    <div class="product clearfix">
      <div class="left fl" style="margin-top:20px;">
        <!-- 轮播图 -->
        <div class="img fl">
          <!-- <a :href="patentInfo.base_image" target="_blank">
            <img :src="patentInfo.image" alt="">
          </a> -->
          <!-- <button @click="onclickImg">
            <img :src="patentInfo.image" alt="">
          </button> -->
          <el-carousel indicator-position="none">
            <el-carousel-item v-for="(url, index) in patentInfo.image_lst" :key="index">
              <a @click="onclickImg(index)" href="javascript:void(0)">
                <img :src="url" alt="">
              </a>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 基本信息 -->
        <div class="productDetail fl">
          <!-- 标题 -->
          <div class="item_head" style="height: 80px;">
            <h1 style="font-size: 18px;"> {{ patentInfo.title }} </h1>
          </div>
          <div class="dash_line"></div>
          <div class="item_content">
            <div class="line_wrap clearfix">
              <div class="item_applyNo fl">
                申请号：
                <span title="2014102794157"> {{ patentInfo.application_no }}</span>
              </div>
              <!-- <div class="item_industry fl">
                行业分类：
                <span title="A: 人类生活需要">A: 人类生活需要</span>
              </div> -->
            </div>
            <div class="line_wrap clearfix">
              <div class="item_applyNo fl">
                申请类型：
                <span title="发明"> {{ patentInfo.patent_type_name }} </span>
              </div>

            </div>
            <div class="item_industry fl">
              法律状态：
              <span title="法律状态"> {{ patentInfo.ls1 }} </span>
            </div>
            <!-- <p>
              有效期：
              <span>
              {{ patentInfo.revocation_date }}
              </span>
            </p> -->
          </div>
          <div class="item_bottom">
            <div class="item_bottom_first">
              <!-- <div class="sell_price">
                出售价格：
                <span>
                        面议
                    </span>
              </div> -->
              <div class="item_ask">
                <a href="javascript:void(0)" @click="dialogFormVisible = true">立即咨询</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 具体信息 -->
    <div class="z_about">
      <div class="zl_about_cover" style="display: none"></div>
      <div class="zl_about_con">
        <div class="zl_about_part zl_detail">
          <!-- 专利详情 -->
          <div class="zl_about_part_title" style="margin-bottom: 10px;">
            <span>专利详情</span>
          </div>
          <div class="zl_detail_con">
            <div class="famous">
              <div class="famous-left" style="width: 50%;">
                <ul>
                  <li v-for="(item, index) in detailList" v-if="index < detailList.length / 2" style="margin: 20px 0;">
                    <div class="name">{{ item.name }}</div>
                    <span class="value">{{ item.value }}</span>
                  </li>
                </ul>
              </div>
              <div class="famous-right" style="width: 50%;">
                <ul>
                  <li v-for="(item, index) in detailList" v-if="index >= detailList.length / 2" style="margin: 20px 0;">
                    <div class="name">{{ item.name }}</div>
                    <span class="value">{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 摘要 -->
          <div class="zl_about_part_title" style="margin-bottom: 10px;">
            <span>摘要</span>
          </div>
          <div class="abstract">
            <p>
              {{ patentInfo.abstract_text }}
            </p>
          </div>
          <!-- 说明书 -->
          <div class="zl_about_part_title" style="margin-bottom: 10px;">
            <span>说明书</span>
          </div>
          <div class="abstract">
            <p>
              {{ patentInfo.abstract_text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <el-image-viewer v-if="previewImg" :on-close="closePreviewImage" :url-list="imgUrl" :z-index="9999" />
    <el-dialog title="专利求购" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="专利名称">
          <span>11111111111</span>
        </el-form-item>
        <el-form-item label="专利类型">
          <span>222222222222</span>
        </el-form-item>
        <el-form-item label="要求">
          <span>3333333333333</span>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
</style>
