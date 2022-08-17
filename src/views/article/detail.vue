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
import { newsDetail, notifyDetail } from '@/api/news';
import { lawDetail, caseDetail } from '@/api/policy'
export default {
  data() {
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

  created() {
    this.detail = {
      title: '',
      create_time: '',
      author: '',
      content: ``,
    }


    // 根据类型和
    let type = this.$route.query.type;
    let id = this.$route.query.id;
    if (type === 'news') {
      newsDetail(id).then(res => {
        console.log(res);
        this.detail.title = res.title;
        this.detail.create_time = res.created_time;
        this.detail.content = res.content;
        this.detail.author = res.author;
      }).catch(err => {
        console.log(err);
      });
    } else if (type === 'notify') {
      notifyDetail(id).then(res => {
        console.log(res);
        this.detail.title = res.title;
        this.detail.create_time = res.created_time;
        this.detail.content = res.content;
      }).catch(err => {
        console.log(err);
      });
    } else if (type === 'law') {
      lawDetail(id).then(res => {
        console.log(res);
        this.detail.title = res.title;
        this.detail.create_time = res.created_time;
        this.detail.content = res.content;
        this.detail.author = res.author;
      }).catch(err => {
        console.log(err);
      });
    } else if (type === 'case') {
      caseDetail(id).then(res => {
        console.log(res);
        this.detail.title = res.title;
        this.detail.create_time = res.created_time;
        this.detail.content = res.content;
        this.detail.author = res.author;
      }).catch(err => {
        console.log(err);
      });
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
  margin-top: 20px;
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
