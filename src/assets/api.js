
import Vue from 'vue'

import axios from 'axios'

let qs = require('qs');

let axiosHttp={

  listBanner:process.env.API_ROOT+'goodsRest/listBanner',//banner

  listColumn:process.env.API_ROOT+'goodsRest/listColumn',//所有栏目

  listTheme:process.env.API_ROOT+'goodsRest/listTheme',//更多主题

  goodList:process.env.API_ROOT+'goodsRest/listGoods',//更多主题

  register:process.env.API_ROOT+'v3/hysec/users',//注册

  login:process.env.API_ROOT+'v3/hysec/authorizations',//登录

  forgetPasd:process.env.API_ROOT+'v3/hysec/forgetPassword',//忘记密码

  modifyPasd:process.env.API_ROOT+'v3/hysec/updatePassword',//修改密码

  couponsBag:process.env.API_ROOT+'userTicketRest/listTicketByUserId',//券包


  getFn:(url,params)=>{

    return axios.get(`${url}`, {params: params}).then(res => res)

  },

  postFn:(url,params)=>{

    return axios.post(`${url}`, qs.stringify(params)).then(res => res)
  }

}

export default axiosHttp;



