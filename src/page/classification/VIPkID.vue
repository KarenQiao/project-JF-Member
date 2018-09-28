<template>

  <div>
    <div class="vip_English_banner"><img src="../../../static/images/vip_English_img/vip_English_banner1.png"/></div>

    <div class="vip_English_select">
      <select class="vip_select_plate" v-model="kidAge">
        <option value="">请选择小孩年龄</option>
        <option value="4">4岁</option>
        <option value="5">5岁</option>
        <option value="6">6岁</option>
        <option value="7">7岁</option>
        <option value="8">8岁</option>
        <option value="9">9岁</option>
        <option value="10">10岁</option>
        <option value="11">11岁</option>
        <option value="12">12岁</option>
      </select>

      <select class="vip_select_plate" v-model="kidGender">
        <option value="">请选择小孩性别</option>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>

      <input type="text" class="name_input" placeholder="请输入申请人姓名" value="" v-model="parentName"/>

      <label class="checkbox_font">
        <input class="vip_element_radio" type="checkbox" name="radio" v-model="checked">

        <span>我已阅读并同意<a class="details_orange_font" @click="$router.push('/agreement')">VIPKID用户注册协议</a>和<a class="details_orange_font" @click="$router.push('/privacy-agreement')">用户隐私协议</a></span>
      </label>

      <a class="vip_English_btn" @click="submitFn">立即免费领取</a>
    </div>

    <div class="vip_English_banner"><img src="../../../static/images/vip_English_img/vip_English_01.png"/></div>

    <div class="vip_English_banner"><img src="../../../static/images/vip_English_img/vip_English_02.png"/></div>

    <div class="vip_img_one"><img src="../../../static/images/vip_English_img/vip_English_03.png"/></div>

    <div class="vip_img_two"><img src="../../../static/images/vip_English_img/vip_English_04.png"/></div>

    <div class="vip_English_banner"><img src="../../../static/images/vip_English_img/vip_English_05.png"/></div>

    <div class="vip_img_three"><img src="../../../static/images/vip_English_img/vip_English_06.png"/></div>

    <div class="vip_img_four"><img src="../../../static/images/vip_English_img/vip_English_07.png"/></div>

    <!--礼包领取成功-->
    <div class="none_popup">
      <div class="receive_popup"></div>

      <div class="success_popup_plate">
        <div class="img_popup_plate"><img src="../../../static/images/vip_English_img/img_receive_success.png"/></div>

        <div class="close_popup_btn" @click="hidePopup()"><img src="../../../static/images/vip_English_img/icon_receive_delete.png"/></div>
      </div>
    </div>
  </div>

</template>


<script>

  import API from '../../assets/api'

  export default {

    name:'VIPKID',

    data() {
      return{

        userID:'',

        mobile:'',

        kidGender:'',

        kidAge:'',

        parentName:'',

        checked:false
      }
    },

    mounted() {

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userID=userData.userId;

      this.mobile=userData.mobileNo;
    },

    methods:{

      submitFn(){

        if(this.kidAge==''){

          jfShowTips.toastShow({'text':'请选择孩子的年龄'});

          return false
        }

        else if(this.kidGender==''){

          jfShowTips.toastShow({'text':'请选择孩子的性别'});

          return false

        }else if (this.parentName==''){

          jfShowTips.toastShow({'text':'请输入申请人姓名'});

          return false

        } else if(!this.checked){

          jfShowTips.toastShow({'text':'请同意相关协议'});

          return false
        }

        let params={

          userId:this.userID,

          mobile:this.mobile,

          kidGender:this.kidGender,

          kidAge:this.kidAge,

          parentName:this.parentName

        }

        API.postFn(API.vipKid,params)

          .then(function (res) {

            if(res.data.code=='00000'){

              this.showSuccess();

            }else {
              jfShowTips.toastShow({'text':res.data.msg})
            }

          }.bind(this))
          .catch(function (error) {

          }.bind(this))



      },

      showSuccess:function () {

        var clickShow=document.getElementsByClassName('none_popup')[0];

        clickShow.className = 'none_popup show_success_popup';

        document.getElementsByTagName('body')[0].className = 'none_scroll';

        document.getElementsByTagName('html')[0].className = 'none_scroll';

      },

      hidePopup:function () {

        var clickHide=document.getElementsByClassName('none_popup')[0];

        clickHide.className = 'none_popup';

        document.getElementsByTagName('body')[0].className = '';

        document.getElementsByTagName('html')[0].className = '';

        this.$router.push('/homepage')

      }

    }

  }

</script>
