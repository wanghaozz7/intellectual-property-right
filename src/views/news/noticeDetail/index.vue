<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="通知公告" :list1="list1"
      :list2="list2" link_type="notify" aside1="law" aside2="case" @func="handlechange">
    </ArticleList>
  </div>
</template>

<script >
import Top from '@/components/Top/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'
import { notifyList } from '@/api/news'
import { law, cases } from '@/api/policy'
export default {
  name: 'noticeDetail',
  components: {
    Top,
    ArticleList
  },
  data() {
    return {
      items: [],
      total: 1,
      page: 1,
      limit: 15,
      sizes: [10, 15, 20, 25, 30],
      list1: {
        items: [],
        title: '法律法规',
        link: '/#/policiesDetail/law'
      },
      list2: {
        items: [],
        title: '保护案例',
        link: '/#/policiesDetail/case'
      }
    }
  },
  created() {
    // 获得初始信息
    notifyList({
      limit: 100000,
      page: this.page
    }).then(res => {
      this.total = res.results.length;
    }).catch(err => {
      console.log(err);
    });
    notifyList({
      limit: this.limit,
      page: this.page
    }).then(res => {
      this.items = res.results;
      console.log('notify2', this.items);
      console.log('length2:' + this.items.length);

    }).catch(err => {
      console.log(err);
    });


    law({
      limit: 6,
      page: 1
    }).then(res => {
      this.list1.items = res.results;
      console.log('law', this.list1.items);
    }).catch(err => {
      console.log(err);
    })
    cases({
      limit: 6,
      page: 1
    }).then(res => {
      this.list2.items = res.results;
      console.log('case', this.list2.items);
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    handlechange(data) {
      this.limit = data.limit;
      this.page = data.page;
      this.getLeftList();

    },
    getLeftList() {
      notifyList({
        limit: this.limit,
        page: this.page
      }).then(res => {
        this.items = res.results;
        console.log('notify', this.items);
      }).catch(err => {
        console.log(err);
      });
    }
  }
};</script>

<style scoped>
</style>