
import Vue from 'vue'

import axios from 'axios'

let qs = require('qs');

let axiosHttp={

  login:process.env.API_ROOT+'v3/hyvip/goodsRest/listBanner',

  //http://116.62.199.212:7988/v3/hyvip/goodsRest/listBanner

  getFn:(url,params)=>{

    return axios.get(`${url}`, {params: params}).then(res => res)

  },

  postFn:(url,params)=>{

    return axios.post(`${url}`, qs.stringify(params)).then(res => res)
  }

}

export default axiosHttp;



