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
  error:'./static/images/loading_big.jpg',
  loading:require('./assets/loading_big.jpg')
})

Vue.use(VueWechatTitle);

Vue.config.productionTip = false;

import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

import VueScroller from 'vue-scroller'
Vue.use(VueScroller);



router.beforeEach((to, from, next) => {

  var userInfo = localStorage.getItem('userData');

  if(userInfo){

    next();

  } else {

    console.log(to.path)

    if(to.path=='/login'||to.path=='/registered'||to.path=='/forgetPasd'||to.path=='/setpasd'||to.path=='/'||to.path=='/accountError'||to.path=='/datedError'){

      next();

    } else {

      next('/login');
    }

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
