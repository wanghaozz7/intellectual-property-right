<template>
  <div style="background-color: #fff;">
    <Top :sign=true holder="输入资讯关键词"></Top>
    <ArticleList :items=items :total=total :page=page :limit=limit :sizes=sizes title="法律法规"></ArticleList>
  </div>
</template>

<script >
import Top from '@/components/Top/index.vue'
import ArticleList from '@/components/ArticleList/index.vue'

export default {
  name: '',
  components: {
    Top,
    ArticleList
  },
  data() {
    return {
      items: [
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        }],
      total: 13000,
      page: 1,
      limit: 10,
      sizes: [10, 15, 20, 25, 30]
    }
  }
};</script>

<style scoped>
</style>