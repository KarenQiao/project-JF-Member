<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" placeholder="请输入电话号码" v-model="mobileNo" maxlength="11"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_safety.png"></span>
        <input type="tel" placeholder="请输入验证码" v-model="smsCode"/>
        <button class="getCode" id="getCode" @click="getCode">获取验证码</button>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请设置密码" v-model="passWord" maxlength="20"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请再次确认密码" v-model="rePassword" maxlength="20"/>
      </label>

      <p class="pasd_tips">密码长度6~16位，数字、字母、字符至少包含两种</p>


      <div>
        <button class="go_register" @click="checkFn">立即注册</button>
      </div>
    </div>
  </div>

</template>

<script>

  import API from '../../assets/api'

  export default {
    name:'registered',

    data(){

      return{

        mobileNo:'',

        passWord:'',

        rePassword:'',

        smsCode:'',

        openId:'5255'

      }
    },


    methods:{

      getCode(){

        let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        if(this.mobileNo==''){

          jfShowTips.toastShow({'text':'手机号码不能为空'});

          return false

        }else if(!reg.test(this.mobileNo)){

          jfShowTips.toastShow({'text':'请输入正确的手机号'});

          return false;

        }

        let params={

          mobileNo:this.mobileNo
        };

        API.getFn(API.getMsg,params)

          .then(function (res) {

            if(res.data.code=='00000'){

              inputFn.messageCheck(60)

            }else {
              jfShowTips.toastShow({'text':res.data.message})
            }
          }.bind(this))
          .catch(function (error) {

          })

      },

      checkFn(){

        let pasdRegex=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//(6-16位，大小字母以及数字)

        let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        this.mobileNo=this.mobileNo.trim();

        this.smsCode=this.smsCode.trim();

        this.passWord=this.passWord.trim();

        this.rePassword=this.rePassword.trim();

        console.log(this.mobileNo.length)

        if(this.mobileNo==''){

          jfShowTips.toastShow({'text':'手机号码不能为空'});

          return false

        }else if(!reg.test(this.mobileNo)){

          jfShowTips.toastShow({'text':'请输入正确的手机号'});

          return false;

        }else if(this.smsCode==''){

          jfShowTips.toastShow({'text':'请输入验证码'});

          return false;

        }else if(this.passWord==''){

          jfShowTips.toastShow({'text':'请输入密码'});

          return false;

        }else if(!pasdRegex.test(this.passWord)){

          jfShowTips.toastShow({'text':'密码为6-20位字母和数字组合，字母区分大小写'});

          return false;

        } else if(!this.rePassword){

          jfShowTips.toastShow({'text':'请再次确认密码'});

          return false;

        }else if(this.passWord!=this.rePassword){

          jfShowTips.toastShow({'text':'两次密码不一致'});

          return false;

        }else {

          let params={

            mobileNo:this.mobileNo,

            smsCode:this.smsCode,

            password:this.passWord,

            rePassword:this.rePassword,

            openId:this.openId
          };

          API.postFn(API.register,params).then(function (res) {

           if(res.data.code=='00000'){

              jfShowTips.toastShow({'text':'注册成功'});

             localStorage.setItem('userData',JSON.stringify(res.data.data));

             localStorage.setItem('firstLogin',res.data.data.firstLogin);


             var _this=this;


             setTimeout(function () {
               _this.$router.push('/homepage')
             },300)


            }else {

              jfShowTips.toastShow({'text':res.data.message})

              return false
            }

          }.bind(this))
            .catch(function (error) {

            }.bind(this))
        }




      }




    }




  }
</script>
