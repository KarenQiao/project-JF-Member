<template>

  <div class="registered_page">
    <div class="input_box input_boxa">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" placeholder="请输入电话号码" maxlength="11" v-model="mobile"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_safety.png"></span>
        <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="smsCode"/>
        <button class="getCode" id="getCode" @click="getCode">获取验证码</button>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入新密码" maxlength="20" v-model="newPwd"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请再次确认密码" maxlength="20" v-model="reNewPwd"/>
      </label>

      <p class="pasd_tips">密码长度6~16位，数字、字母、字符至少包含两种</p>


      <div>
        <button class="go_register" @click="checkFn">确认</button>
      </div>
    </div>
  </div>

</template>

<script>

  import API from '../../assets/api';

  export default {
    name:'forgetPasd',

    data(){

      return{

        mobile:'',

        smsCode:'',

        newPwd:'',

        reNewPwd:''

      }
    },

    methods:{

      getCode(){

        let reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        if(this.mobile==''){

          jfShowTips.toastShow({'text':'手机号码不能为空'});

          return false

        }else if(!reg.test(this.mobile)){

          jfShowTips.toastShow({'text':'请输入正确的手机号'});

          return false;

        }

        let params={

          mobileNo:this.mobile
        };

        API.getFn(API.forgetMsg,params)

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

        this.mobile=this.mobile.trim();

        this.smsCode=this.smsCode.trim();

        this.newPwd=this.newPwd.trim();

        this.reNewPwd=this.reNewPwd.trim();


        if(this.mobile==''){

          jfShowTips.toastShow({'text':'手机号码不能为空'});

          return false

        }else if(!reg.test(this.mobile)){

          jfShowTips.toastShow({'text':'请输入正确的手机号'});

          return false;

        }else if(this.smsCode==''){

          jfShowTips.toastShow({'text':'请输入验证码'});

          return false;

        }else if(this.newPwd==''){

          jfShowTips.toastShow({'text':'请输入密码'});

          return false;

        }else if(!pasdRegex.test(this.newPwd)){

          jfShowTips.toastShow({'text':'密码为6-20位字母和数字组合，字母区分大小写'});

          return false;

        } else if(!this.reNewPwd){

          jfShowTips.toastShow({'text':'请再次确认密码'});

          return false;

        }else if(this.newPwd!=this.reNewPwd){

          jfShowTips.toastShow({'text':'两次密码不一致'});

          return false;

        }else {

          let params={

            mobile:this.mobile,

            smsCode:this.smsCode,

            newPwd:this.newPwd,

            reNewPwd:this.reNewPwd,
          };

          API.postFn(API.forgetPasd,params).then(function (res) {

            console.log(res)

            if(res.data.code=='00000'){

              jfShowTips.toastShow({'text':'修改成功'});

              var _this=this;

              setTimeout(function () {
                _this.$router.push('/login')
              },300)

            }else {

              jfShowTips.toastShow({'text':res.data.message});

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
