// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './assets/axios'
import filter from './assets/filter'

import VueWechatTitle from 'vue-wechat-title'

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  error:'./static/loading_big.gif',
  loading:'../static/images/loading_big.gif'
})



Vue.use(VueWechatTitle)

Vue.config.productionTip = false;

import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
