<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" readonly v-model="mobileNo"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_safety.png"></span>
        <input type="tel" placeholder="请输入验证码" v-model="smsCode" maxlength="6"/>
        <button class="getCode" id="getCode">获取验证码</button>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入新密码" v-model="newPwd" maxlength="20"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="tel" placeholder="请再次确认密码" v-model="reNewPwd" maxlength="20"/>
      </label>


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

        userId:'',

        newPwd:'',

        reNewPwd:'',

        smsCode:''

      }

    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

      this.mobileNo=userData.mobileNo;

    },

    methods:{

      checkPasd(){

        let pasdRegex=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;//(6-16位，大小字母以及数字)

        this.smsCode=this.smsCode.trim();

        this.newPwd=this.newPwd.trim();

        this.reNewPwd=this.reNewPwd.trim();

        if(this.smsCode==''){

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

            userId:this.userId,

            smsCode:this.smsCode,

            newPwd:this.newPwd,

            reNewPwd:this.reNewPwd,
          };

          API.postFn(API.modifyPasd,params).then(function (res) {

            console.log(res)

            if(res.data.code=='00000'){

              jfShowTips.toastShow({'text':'修改成功'});

              var _this=this;

              setTimeout(function () {

                _this.$router.push('/memberCenter')


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
