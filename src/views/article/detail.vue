<template>
  <div style="background:#f6fffb">
    <el-container v-if="detail" class="main">
      <el-header class="header_wrapper">
        <div class="article-detail-title__title">{{ detail.title }}</div>
        <div class="article-detail-title-desc-wrapper">
          <div class="article-detail-title-desc-item">
            <span class="iconfont icon-31shijian"></span>
            <span class="text">{{ detail.create_time }}</span>
          </div>
          <div class="article-detail-title-desc-item">
            <span class="iconfont icon-bianjishuru"></span>
            <span class="text">{{ detail.author }}</span>
          </div>
        </div>
      </el-header>
      <el-main>
          <div class="article-detail__content" v-html="detail.content"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '',
      id: '',
      detail: null,
      prevDetail: null,
      nextDetail: null,
    }
  },

  components: {
  },

  created () {
    this.detail = {
      title: '这里是新闻标题',
      create_time: '2022-02-02',
      author: '黄佳荣',
      content: `<p class="vsbcontent_start">为深入贯彻教育部办公厅《关于开展全国高校书记校长访企拓岗促就业专项行动的通知》要求，深入落实高校毕业生就业工作“一把手”工程，充分发挥学校党委书记、校长带头做好毕业生就业工作的重要示范作用，近日，校党委书记成洪波、校长马宏伟分别带领相关职能部门和二级学院负责人，通过线上线下相结合的方式，深入东莞部分重点企业走访调研，与企业家、往届毕业生和校友座谈交流，开展“用人单位大走访 全员联动促就业”专项行动。</p>
    <p>在与东莞得利钟表有限公司总经理刘仁的线上交流中，成洪波询问了当前企业生产经营状况，听取了企业对高素质应用型创新性人才培养以及深化校企合作、推进产教融合的意见建议。成洪波感谢得利钟表公司人才培养创新性做法和相关意见建议。他指出，要围绕学生核心素养、动手能力以及对生产工艺全过程了解，加强对工业、行业、职业深层次理解，推动教育部门和生产部门共同投入，进一步提升新一代工程师的品质和能力。在听取校友代表发言后，成洪波表示，往届毕业生注重积累、经受磨练，体现了自己的价值，成就了企业，也成就了自己，勉励大家要共筑制造业强国梦想，充分发挥好区位优势条件，在大时代、大机遇中让自己的人生更加出彩。</p>
    <p class="vsbcontent_img"><img src="https://www.dgut.edu.cn/__local/A/6D/5D/F625EACCAA5DE06045B1CC762C8_C2E573D5_1163D.jpg" width="800" alt="1163D" vsbhref="vurl" vurl="https://www.dgut.edu.cn/__local/A/6D/5D/F625EACCAA5DE06045B1CC762C8_C2E573D5_1163D.jpg" vheight="" vwidth="800" orisrc="https://www.dgut.edu.cn/__local/A/6D/5D/F625EACCAA5DE06045B1CC762C8_C2E573D5_1163D.jpg" class="img_vsb_content"></p>
    <p>在东莞立讯技术有限公司，成洪波参观了公司通讯设备展厅、实验室，听取了近年来企业发展情况和校企人才专项培养计划介绍，与公司总经理熊藤芳围绕高校毕业生在适应性和可成长性方面进行了座谈交流。成洪波表示，学校要加强工程硕士能力，推动卓越工程师本地化，主动改变、主动适应、主动生产，为毕业生就业创业开拓新的岗位。双方表示，下来要同向同行，建立更加紧密的产学研合作关系。</p>
    <p class="vsbcontent_img"><img src="https://www.dgut.edu.cn/__local/2/05/E5/0A7C95FCE404E2C3468BC17E2EE_9E48706C_15583.jpg" width="800" alt="15583" vsbhref="vurl" vurl="https://www.dgut.edu.cn/__local/2/05/E5/0A7C95FCE404E2C3468BC17E2EE_9E48706C_15583.jpg" vheight="" vwidth="800" orisrc="https://www.dgut.edu.cn/__local/2/05/E5/0A7C95FCE404E2C3468BC17E2EE_9E48706C_15583.jpg" class="img_vsb_content"></p>
    <p>在广东奥普特科技股份有限公司，成洪波参观了奥普特机器视觉技术应用中心，观看了SCI视觉系统演示平台的演示，了解企业发展、生产、产品和专利等情况，与公司董事长卢盛林和往届毕业生代表进行了座谈。双方围绕课程设计与开发、实训实践等进行了交流探讨。成洪波表示，要进一步提高人才培养质量和社会契合度，实现人才可持续性发展，更好地支持服务企业发展。</p>
    <p class="vsbcontent_img"><img src="https://www.dgut.edu.cn/__local/8/57/C7/5E09B0555EBB0C3A24919E42EEE_65B6BE26_14591.jpg" width="800" alt="14591" vsbhref="vurl" vurl="https://www.dgut.edu.cn/__local/8/57/C7/5E09B0555EBB0C3A24919E42EEE_65B6BE26_14591.jpg" vheight="" vwidth="800" orisrc="https://www.dgut.edu.cn/__local/8/57/C7/5E09B0555EBB0C3A24919E42EEE_65B6BE26_14591.jpg" class="img_vsb_content"></p>
    <p>在校友企业KK集团，马宏伟听取了企业创新创业历程与未来发展愿景的情况介绍，KK集团董事长吴悦宁交流了企业对人才知识、能力与素质要求，表达了对母校的深厚感情与良好祝愿。马宏伟介绍了学校新型高水平理工科大学示范校建设的重大发展机遇和阶段建设成效，希望今后进一步加强交流、深化合作，为在校生提供实习实训平台、传授创新创业经验，为毕业生提供就业创业机会。</p>
    <p class="vsbcontent_img"><img src="https://www.dgut.edu.cn/__local/5/A0/E6/C364A30FF8D862ED44C4F3FFAE7_E21F40A7_2D11F.jpg" width="800" alt="2D11F" vsbhref="vurl" vurl="https://www.dgut.edu.cn/__local/5/A0/E6/C364A30FF8D862ED44C4F3FFAE7_E21F40A7_2D11F.jpg" vheight="" vwidth="800" orisrc="https://www.dgut.edu.cn/__local/5/A0/E6/C364A30FF8D862ED44C4F3FFAE7_E21F40A7_2D11F.jpg" class="img_vsb_content"></p>
    <p>下来，学校领导班子成员及各二级学院负责人将深入推进“访企拓岗促就业”专项行动，主动走进镇街园区、走进行业企业，走访用人单位，为毕业生挖掘更多岗位资源、精准推荐岗位信息，促进毕业生实现更高质量更充分就业。同时，学校扎实开展社会需求调查和毕业生就业状况跟踪调查，充分听取用人单位的意见和建议，为深化教育教学改革、人才培养和就业指导服务提供支撑，为区域经济社会发展提供智力支持和人力支撑。</p>`,
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.main {
  background: #f6fffb;
  width: 90%;
  margin: 0 auto;
}

.header_wrapper {
  height: 100% !important;
  border-bottom: 2px solid #06783f;
}

.article-detail-wrapper {
  margin-top: 100px;
  padding: 64px 0;
  background: #f6fffb;
  box-sizing: border-box;
  overflow: hidden;
}

.article-detail-container {
  width: 1700px;
  margin: 0 auto;
}

.article-detail-title__title {
  font-size: 32px;
  line-height: 48px;
  color: #474747;
  text-align: center;
  margin-top:20px;
}

.article-detail-title-desc-wrapper {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-detail-title-desc-item {
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 12px;

  &+.article-detail-title-desc-item {
    margin-left: 32px;
  }

  .iconfont {
    color: #06783f;
    margin-right: 8px;
  }
}

.article-detail__content {
  // padding: 32px 0;

  font-size: 18px;
  color: #323232;
  line-height: 24px;
  margin-bottom: 14px;
  text-align: justify;

  ::v-deep * {
    line-height: 36px;
    margin-bottom: 20px;
  }

  ::v-deep p {
    text-indent: 2em;
  }

  ::v-deep img {
    width: 800px;
    margin: 0 auto;
    object-fit: cover;
    display: inherit;
  }
}

.panagation-wrapper {
  padding: 24px 0;

  .panagation {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    color: #323232;
    font-weight: bold;
    line-height: 36px;

    span {
      font-weight: normal;
    }

    &:hover {
      color: #06783f;

      span {
        font-weight: bold;
      }
    }
  }
}
</style>
