
import Vue from 'vue'

import axios from 'axios'

let qs = require('qs');

let axiosHttp={

  login:process.env.API_ROOT+'jx/action/login',

  getFn:(url,params)=>{

    return axios.get(`${url}`, {params: params}).then(res => res)

  },

  postFn:(url,params)=>{

    return axios.post(`${url}`, qs.stringify(params)).then(res => res)
  }

}

export default axiosHttp;



