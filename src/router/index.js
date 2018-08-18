import Vue from 'vue'
import Router from 'vue-router'


/*import loginPage from '@/components/login'*/

// 懒加载方式，当路由被访问的时候才加载对应组件



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      meta:{
        title:'登录'
      },
      component: resolve => require(['@/components/Login'], resolve)
    },

    {
      path:'/homepage',
      name:'首页',
      meta:{
        title:'首页'
      },
      component:resolve=>require(['@/page/homepage/homepage'],resolve)

    },

    {
      path:'/memberLife',
      name:'会员生活',
      meta:{
        title:'会员生活'
      },
      component:resolve=>require(['@/page/homepage/member_life'],resolve)

    },

    {
      path:'/editStory',
      name:'主编推荐',
      meta:{
        title:'主编推荐'
      },
      component:resolve=>require(['@/page/homepage/editor_story'],resolve)

    },
    {
      path:'/newProduct',
      name:'新品快抢',
      meta:{
        title:'新品快抢'
      },
      component:resolve=>require(['@/page/homepage/new_product'],resolve)

    },

    {
      path:'/memberRights',
      name:'会员权益',
      meta:{
        title:'会员权益'
      },
      component:resolve=>require(['@/page/power/member_right'],resolve)

    },

    {
      path:'/memberCenter',
      name:'会员中心',
      meta:{
        title:'会员中心'
      },
      component:resolve=>require(['@/page/personCenter/center'],resolve)

    }




  ]
})
