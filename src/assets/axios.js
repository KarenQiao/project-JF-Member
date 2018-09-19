import Vue from 'vue'
import router from '../router'
import axios from 'axios'




Vue.prototype.$http=axios;

axios.defaults.withCredentials = true;

Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;



// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(function (config){

  //jfShowTips.loadingShow()

  let token = localStorage.getItem('userToken');


  if (token !== null && token.toString().length > 1) {

    config.headers.authorization = 'bearer'+' '+token

  }

  return config;

}, function (error){
  // 请求失败的处理
  return Promise.reject(error);
});

axios.interceptors.response.use(function (res) {

  jfShowTips.loadingRemove();

  return res

}, function (error) {

  console.log(error);

  jfShowTips.loadingRemove();

  if(error.response.status=='500'){

    jfShowTips.toastShow({'text': error.response.data.error});

    console.log(error)

    return false
  }

  else if (error.response.status=='502') {

  //  jfShowTips.errorShow({'text': '系统异常，请稍后再试!'});

    return false

  }else if(error.response.data.code=='102'||error.response.data.code=='101') {

    jfShowTips.toastShow({'text': error.response.data.descrpition});

    localStorage.clear();

    setTimeout(function () {

      router.push('/login');

     // window.location.reload();

    },1500)

  }

  return Promise.reject(error)

})








export default axios
