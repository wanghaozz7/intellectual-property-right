import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // 前台
  {
    path: '/',
    name: 'homePage',
    component: () => import('@/views/homePage')
  },
  // 专利详情
  {
    // path: '/detail/:id(\\d+)',
    path: '/patentDetail',
    name: 'patentDetail',
    // component: () => import('@/views/detail/patentDetail/index.vue')
    component: () => import('@/views/patent/patentDetail/index.vue')
  },
  // 需求提交页
  {
    path: '/demandDetail',
    name: 'demandDetail',
    component: () => import('@/views/demandDetail/index.vue')
  },
  // 更多专家
  {
    path: '/moreExpert',
    name: 'moreExpert',
    component: () => import('@/views/expert/moreExpert/index.vue')
  },
  // 专家查询
  {
    path: '/expertSearch',
    name: 'expertSearch',
    component: () => import('@/views/expert/expertSearch/index.vue')
  },
  {
    path: '/expertDetail',
    name: 'expertDetail',
    component: () => import('@/views/expert/expertDetail/index.vue')
  },
  // 动态资讯详情
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: () => import('@/views/article/detail.vue')
  },
  {
    path: '/patent',
    name: 'patentList',
    component: () => import('@/views/patent/patentList/index.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
