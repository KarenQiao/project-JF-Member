<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" readonly v-model="mobileNo"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入新密码" v-model="passWord" maxlength="20"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请再次确认密码" v-model="rePassword" maxlength="20"/>
      </label>

      <p class="pasd_tips">密码长度6~16位，数字、字母、字符至少包含两种</p>


      <div>
        <button class="go_register" @click="checkPasd">确认</button>
      </div>
    </div>
  </div>

</template>

<script>

  import API from '../../assets/api';

  export default {
    name:'accountSafety',

    data(){

      return{

        mobileNo:'',

        guid:'',

        loginPasd:'',

        passWord:'',

        rePassword:'',

      }

    },

    created(){

      this.mobileNo=window.location.href.split('?')[1].split('=')[1].slice(0,11);

      if(window.location.href.includes('password')){

        this.loginPasd=window.location.href.split('?')[1].split('=')[2];

        this.selfLogin();


      }else {

        this.guid=window.location.href.split('?')[1].split('=')[2];
      }

    },

    mounted(){


    },

    methods:{

      checkPasd(){

        let pasdRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//(6-16位，大小字母以及数字);

        this.passWord = this.passWord.trim();

        this.rePassword = this.rePassword.trim();

        if (this.passWord == '') {

          jfShowTips.toastShow({'text': '请输入密码'});

          return false;

        } else if (!pasdRegex.test(this.passWord)) {

          jfShowTips.toastShow({'text': '密码为6-20位字母和数字组合，字母区分大小写'});

          return false;

        } else if (!this.rePassword) {

          jfShowTips.toastShow({'text': '请再次确认密码'});

          return false;

        } else if (this.passWord != this.rePassword) {

          jfShowTips.toastShow({'text': '两次密码不一致'});

          return false;

        } else {

          let params = {

            mobileNo: this.mobileNo,

            password: this.passWord,

            rePassword: this.rePassword,

            guid: this.guid
          };

          API.postFn(API.setPasd,params)
            .then(function (res) {

              if(res.data.code=='00000'){

                jfShowTips.toastShow({'text':'设置成功'});

                localStorage.setItem('userData',JSON.stringify(res.data.data));

                localStorage.setItem('firstLogin',res.data.data.firstLogin);

                localStorage.setItem('userToken',res.data.data.sessionKey);


                var _this=this;

                setTimeout(function () {

                  _this.$router.push('/homepage')

                },300)


              }else {

                jfShowTips.toastShow({'text':res.data.message});

                return false
              }



            }.bind(this))
            .catch(function (error) {

            }.bind(this))


        }
      },

      selfLogin(){

        let params={

          username:this.mobileNo,

          password:this.loginPasd,

        };
        jfShowTips.loadingShow()

        API.getFn(API.login,params).then(function (res) {

          console.log(res)

          jfShowTips.loadingRemove();

          if(res.data.code=='00000'){

            localStorage.setItem('userData',JSON.stringify(res.data.data));

            localStorage.setItem('firstLogin',res.data.data.firstLogin);

            localStorage.setItem('userToken',res.data.data.sessionKey);

            this.$router.push('/homepage')


          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false

          }

        }.bind(this))
          .catch(function (error) {

            jfShowTips.loadingRemove();
            console.log(error)

          }.bind(this))

      }
    }
  }
</script>
