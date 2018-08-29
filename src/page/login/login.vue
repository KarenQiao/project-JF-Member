
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
        <input type="tel" placeholder="请输入电话号码" v-model="username" maxlength="11"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入密码" v-model="pasd" maxlength="20"/>
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

        this.username=this.username.trim();

        this.pasd=this.pasd.trim();

        let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        if(this.username==''){

          jfShowTips.toastShow({'text':'请输入手机号码'});

          return false

        }else if(!reg.test(this.username)){

          jfShowTips.toastShow({'text':'手机号码格式有误'});

          return false;

        }else if(this.pasd==''){

          jfShowTips.toastShow({'text':'请输入密码'});

          return false;
        }

        let params={

          username:this.username,

          password:this.pasd,

        };

        API.postFn(API.login,params).then(function (res) {

          console.log(res)

          if(res.data.code='00000'){

            localStorage.setItem('userData',JSON.stringify(res.data.data));

            this.$router.push('/homepage')


          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false

          }

        }.bind(this))
          .catch(function (error) {

            console.log(error)

          }.bind(this))

      }

    }
  }
</script>
