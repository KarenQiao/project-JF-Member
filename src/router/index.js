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
      component: resolve => require(['@/page/login/login'], resolve)
    },
    {
      path: '/registered',
      name: 'registeredPage',
      meta:{
        title:'注册'
      },
      component: resolve => require(['@/page/Login/registered'], resolve)
    },

    {
      path: '/forgetPasd',
      name: 'forgetPasd',
      meta:{
        title:'忘记密码'
      },
      component: resolve => require(['@/page/Login/forgetPasd'], resolve)
    },

    {
      path: '/accountSafety',
      name: 'accountSafety',
      meta:{
        title:'账户安全'
      },
      component: resolve => require(['@/page/Login/accountSafety'], resolve)
    },
    {
      path:'/homepage',
      name:'首页',
      meta:{
        title:'首页',
        keepAlive: true,
      },
      component:resolve=>require(['@/page/homepage/homepage'],resolve)

    },

    {
      path:'/memberLife/:allId',
      name:'会员生活',
      meta:{
        title:'会员生活',

        keepAlive: true,
      },
      component:resolve=>require(['@/page/homepage/member_life'],resolve)

    },

    {
      path:'/editStory/:allId',
      name:'主编推荐',
      meta:{
        title:'主编推荐',

        keepAlive: true,
      },
      component:resolve=>require(['@/page/homepage/editor_story'],resolve)

    },
    {
      path:'/newProduct/:allId',
      name:'新品快抢',
      meta:{
        title:'新品快抢',

        keepAlive: true,
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
      path:'/points_speed',
      name:'积分加速',
      meta:{
        title:'积分加速'
      },
      component:resolve=>require(['@/page/power/parts/points_speed'],resolve)

    },

    {
      path:'/points_exchange',
      name:'积分兑换',
      meta:{
        title:'积分兑换'
      },
      component:resolve=>require(['@/page/power/parts/points_exchange'],resolve)

    },

    {
      path:'/member_bag',
      name:'会员礼包',
      meta:{
        title:'会员礼包'
      },
      component:resolve=>require(['@/page/power/parts/member_bag'],resolve)

    },

    {
      path:'/upgrade_awards',
      name:'升级奖励',
      meta:{
        title:'升级奖励'
      },
      component:resolve=>require(['@/page/power/parts/upgrade_awards'],resolve)

    },
    {
      path:'/birthday',
      name:'生日特权',
      meta:{
        title:'生日特权'
      },
      component:resolve=>require(['@/page/power/parts/birthday'],resolve)

    },

    {
      path:'/rightDetails',
      name:'会员等级规则',
      meta:{
        title:'会员等级规则'
      },
      component:resolve=>require(['@/page/power/member_grade'],resolve)

    },

    {
      path:'/memberCenter',
      name:'会员中心',
      meta:{
        title:'会员中心'
      },
      component:resolve=>require(['@/page/personCenter/center'],resolve)

    },

    {
      path:'/order',
      name:'订单',
      meta:{
        title:'订单'
      },
      component:resolve=>require(['@/page/personCenter/order'],resolve)

    },

    {
      path:'/coupons',
      name:'优惠券',
      meta:{
        title:'我的券包'
      },
      component:resolve=>require(['@/page/personCenter/my_cardbag'],resolve)

    }




  ]
})
