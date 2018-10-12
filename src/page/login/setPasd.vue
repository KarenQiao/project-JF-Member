<template>

  <div class="registered_page">
    <div class="input_box input_boxa">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" readonly v-model="mobileNo"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请设置嘉会员登陆密码" v-model="passWord" maxlength="20"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请再次确认密码" v-model="rePassword" maxlength="20"/>
      </label>

      <p class="pasd_tips">密码长度6~16位，数字、字母、字符至少包含两种</p>




      <div>
        <button class="go_register" @click="checkPasd">确认</button>
      </div>

      <p class="pasd_tips login_tips">嘉会员用户名为嘉福账户绑定的手机号</p>
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

        geid:'',

        passWord:'',

        rePassword:'',

      }

    },

    created(){

      this.mobileNo=localStorage.getItem('mobileNo');

      this.geid=localStorage.getItem('geid');

      this.guid=localStorage.getItem('guid')

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

            guid: this.guid,

            geid:this.geid

          };

          API.postFn(API.setPasd,params)
            .then(function (res) {

              if(res.data.code=='00000'){

                jfShowTips.toastShow({'text':'设置成功'});

                localStorage.removeItem('geid');

                localStorage.removeItem('guid');

                localStorage.removeItem('mobileNo');

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

    }
  }
</script>
