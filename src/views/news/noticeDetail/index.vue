<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="通知公告" :list1="list1"
      :list2="list2" link_type="notify" aside1="law" aside2="case">
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
      total: 13000,
      page: 1,
      limit: 10,
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
    const query = {
      limit: 2,
      page: 1
    }
    notifyList().then(res => {
      this.items = res;
      console.log(this.items);
    }).catch(err => {
      console.log(err);
    });
    law(query).then(res => {
      this.list1.items = res.results;
      console.log(this.list1.items);
    }).catch(err => {
      console.log(err);
    })
    cases(query).then(res => {
      this.list2.items = res.results;
      console.log(this.list2.items);
    }).catch(err => {
      console.log(err);
    })
  }
};</script>

<style scoped>
</style>