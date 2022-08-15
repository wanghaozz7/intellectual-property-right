<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="保护案例"></ArticleList>
  </div>
</template>

<script >
import Top from '@/components/Top/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'

export default {
  name: 'noticeDetail',
  components: {
    Top,
    ArticleList
  },
  data() {
    return {
      items: [
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        }],
      total: 13000,
      page: 1,
      limit: 10,
      sizes: [10, 15, 20, 25, 30]
    }
  },
  methods: {
    getList() {

    }
  }
};</script>

<style scoped>
</style>