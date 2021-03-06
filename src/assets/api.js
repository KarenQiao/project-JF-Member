
import Vue from 'vue'

import axios from 'axios'

let qs = require('qs');

let axiosHttp={

  listBanner:process.env.API_ROOT+'v3/hyvip/goodsRest/listBanner',//banner

  listColumn:process.env.API_ROOT+'v3/hyvip/goodsRest/listColumn',//所有栏目

  listTheme:process.env.API_ROOT+'v3/hyvip/goodsRest/listTheme',//更多主题

  themeGoods:process.env.API_ROOT+'v3/hyvip/goodsRest/lisThemeDetail',//更多主题商品

  goodList:process.env.API_ROOT+'v3/hyvip/goodsRest/listGoods',//更多商品

  register:process.env.API_ROOT+'v3/hysec/users',//注册

  getMsg:process.env.API_ROOT+'v3/hysec/mobileCode',//注册验证码

  login:process.env.API_ROOT+'v3/hysec/authorizations',//登录

  modifyLogin:process.env.API_ROOT+'v3/hysec/modifyLoginStatus',//修改登录状态

  forgetPasd:process.env.API_ROOT+'v3/hysec/forgetPassword',//忘记密码

  forgetMsg:process.env.API_ROOT+'v3/hysec/modifyPasswdCode',//忘记密码验证码,修改密码

  modifyPasd:process.env.API_ROOT+'v3/hysec/updatePassword',//修改密码

  setPasd:process.env.API_ROOT+'v3/hysec/outsideRest/register',//嘉福跳转设置密码

  couponsBag:process.env.API_ROOT+'v3/hyvip/userTicketRest/listTicketByUserId',//券包

  order:process.env.API_ROOT+'v3/hyvip/mallOrederRest/listOrderByUser',//订单

  vipKid:process.env.API_ROOT+'v3/hyvip/goodsRest/saveVipKidOrder',//VIPKID

  electronicCard:process.env.API_ROOT+'v3/hysec/userBlessingRest/makeBlessing',//编辑电子贺卡



  getFn:(url,params)=>{

    return axios.get(`${url}`, {params: params}).then(res => res)

  },

  postFn:(url,params,config)=>{

    return axios.post(`${url}`, qs.stringify(params),config).then(res => res)
  },

  JsonPostFn:(url,params,config)=>{

    return axios.post(`${url}`, JSON.stringify(params),config).then(res => res)
  },

  deleteFn:(url,params)=>{

    return axios.delete(`${url}`, {params: params}).then(res => res)

  },

}

export default axiosHttp;



