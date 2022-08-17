<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="法律法规" :list1="list1"
      :list2="list2"></ArticleList>
  </div>
</template>

<script >
import Top from '@/components/Top/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'
import { law } from '@/api/policy'
import { newsList, notifyList } from '@/api/news'
export default {
  name: '',
  components: {
    Top,
    ArticleList
  },
  data() {
    return {
      items: [],
      total: 13000,
      page: 1,
      limit: 10,
      sizes: [10, 15, 20, 25, 30],
      list1: {
        items: [],
        title: '通知公告',
        link: ''
      },
      list2: {
        items: [],
        title: '动态资讯',
        link: ''
      }
    }
  },
  created() {
    const query = {
      limit: 2,
      page: 1
    };
    law(query).then(res => {
      this.items = res.results;
      console.log(this.items);
    }).catch(err => {
      console.log(err);
    });
    newsList(query).then(res => {
      this.list2.items = res.results;
      console.log(this.list2.items);
    }).catch(err => {
      console.log(err);
    });
    notifyList().then(res => {
      this.list1.items = res
      console.log(this.list1.items);
    }).catch(err => {
      console.log(err);
    });
  }
};</script>

<style scoped>
</style>