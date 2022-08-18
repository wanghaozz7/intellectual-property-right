<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="保护案例" :list1="list1"
      :list2="list2" link_type="case" aside1="notify" aside2="news" @func="handlechange"></ArticleList>
  </div>
</template>

<script >
import Top from '@/components/Top/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'
import { cases } from '@/api/policy'
import { notifyList, newsList } from '@/api/news'
export default {
  name: '',
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
        items: [

        ],
        title: '通知公告',
        link: '/#/noticeDetail'
      },
      list2: {
        items: [

        ],
        title: '动态资讯',
        link: '/#/newsDetail'
      }
    }
  },
  created() {
    cases({
      limit: 100000,
      page: this.page
    }).then(res => {
      this.total = res.results.length;
    }).catch(err => {
      console.log(err);
    });
    cases({
      limit: this.limit,
      page: this.page
    }).then(res => {
      this.items = res.results;
      console.log('notify2', this.items);
      console.log('length2:' + this.items.length);

    }).catch(err => {
      console.log(err);
    });



    newsList({
      limit: 6,
      page: 1
    }).then(res => {
      this.list2.items = res.results;
      console.log(this.list2.items);
    }).catch(err => {
      console.log(err);
    });
    notifyList({
      limit: 6,
      page: 1
    }).then(res => {
      this.list1.items = res.results;
      console.log(this.list1.items);
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    handlechange(data) {
      this.limit = data.limit;
      this.page = data.page;
      this.getLeftList();

    },
    getLeftList() {
      cases({
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