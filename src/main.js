import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './assets/iconfont/iconfont.css'
import $ from 'jquery'
Vue.prototype.$ = $
// if (process.env.NODE_ENV === 'development') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
