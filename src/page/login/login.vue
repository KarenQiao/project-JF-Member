
<template>
  <div class="registered_page login_page">

    <div class="login_top_bg">
      <div>
        <img src="../../../static/images/logo.jpg">
      </div>
    </div>


    <div class="input_box">
      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" placeholder="请输入电话号码"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入密码"/>
      </label>

      <div>
        <button class="go_register" @click="loginFn" >登录</button>
      </div>

      <div class="member_between_center login_help">
        <a @click="$router.push('/registered')">立即注册</a>
        <a  @click="$router.push('/forgetPasd')">忘记密码？</a>
      </div>
    </div>


  </div>

</template>

<script>

  import API from '../../assets/api'


  export default {
    name:'login',

    data(){

      return{
        username:'',

        pasd:''
      }
    },

    methods:{

      loginFn(){

        let params={

          mobile:this.username,

          password:this.pasd,

          code:''

        };

        API.postFn(API.login,params).then(function (res) {

          console.log(res)

        })
          .catch(function (error) {

          })

      }

    }
  }
</script>
