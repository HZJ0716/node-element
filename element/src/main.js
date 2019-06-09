// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 使用axios并设置url
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api/'
})
// 设置懒加载
Vue.use(VueLazyLoad, {
  error: './static/image/loading.gif',
  loading: './static/image/loading.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
