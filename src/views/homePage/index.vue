<template>
  <div class="head clearfix">
    <Top></Top>
    <Nav></Nav>
    <News></News>
    <Main></Main>
    <Demand></Demand>
    <Policies></Policies>
<!--    <Footer></Footer>-->
  </div>
</template>

<script>
import Top from './top/index'
import Nav from './nav/index'
import News from '@/views/homePage/News'
import Main from '@/views/homePage/main/index.vue'
import Policies from '@/views/homePage/Policies'
import Footer from '@/views/homePage/footer'
import Demand from '@/views/homePage/demand'
export default {
  name: 'HomePage',
  components: { Top, Nav, News, Main, Footer, Policies, Demand }
}
</script>

<style scoped>

</style>
