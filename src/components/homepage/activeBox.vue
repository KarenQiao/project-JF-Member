<template>

  <div class="active_box" >

    <div class="main_box">
      <div class="popup_logo_plate"><img src="../../../static/images/img_popup_logo.png"/></div>

      <p class="popup_welcome_font">嘉会员欢迎您</p>

      <p class="popup_welcome_details">价值￥<span>6000</span>优惠券</p>

      <p class="popup_welcome_content">价值￥<span>6000</span>优惠券</p>

      <div class="check_btn" @click="getCoupons">
        <button>即刻激活领取</button>
      </div>
    </div>

    <div class="box_shadow"></div>
  </div>


</template>




<script>

  import API from '../../assets/api'

  export default {
    name:'activeBox',

    data(){

      return{

        userData:{
          userId:''
        }
      }
    },

    mounted(){

      this.userData=JSON.parse(localStorage.getItem('userData'));
    },

    methods:{

      getCoupons(){

        API.getFn(API.modifyLogin,{userId:this.userData.userId})

          .then(function (res) {

            if(res.data.code=='00000'){

              boxShow.checkHide('active_box');

              let _this=this;

              setTimeout(function () {

                _this.$router.push('/memberOnline')

              },300)

            }else {


              jfShowTips.toastShow({'text':res.data.message});

              boxShow.checkHide('active_box');
            }

          }.bind(this))
          .catch(function (error) {

          }.bind(this))

      }

    }
  }
</script>






