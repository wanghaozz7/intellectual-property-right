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
  name: '',
  components: {
    Top,
    ArticleList
  },
  data() {
    return {
      items: [
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
                {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
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