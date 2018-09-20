<template>
  <div class="Jf_Member_Homepage jf_Member_center">


    <div class="member_top member_between_center">

      <div class="member_left member_left_center">
        <p class="member_logo"><img src="../../../static/images/logo.jpg"></p>
        <p>
          <span class="member_name">{{userData.mobileNo}}</span>
          <span class="member_score">{{userData.total}}积分</span>
        </p>
      </div>

      <div class="member_right member_center">
        <span class="bg_light"></span>
        <img src="../../../static/images/grade_star.png" v-if="userData.userLevel==1">
        <img src="../../../static/images/grade_moon.png" v-else-if="userData.userLevel==2">
        <img src="../../../static/images/grade_sun.png" v-else="userData.userLevel==3">
      </div>

    </div>


    <div class="center_list ">
     <a class="member_between_center">
       <p><img src="../../../static/images/icon_mine_assets.png"><span>我的资产</span></p>
       <p class="gray_text">等待开放中</p>
     </a>

      <a class="member_between_center"  @click="$router.push('/coupons')">
        <p><img src="../../../static/images/icon_mine_voucher.png"><span>我的券包</span></p>

      </a>

      <a class="member_between_center"  @click="$router.push('/order')">
        <p><img src="../../../static/images/icon_mine_order.png"><span>我的订单</span></p>
      </a>

      <a class="member_between_center">
        <p><img src="../../../static/images/icon_mine_address.png"><span>地址管理</span></p>
        <p class="gray_text">等待开放中</p>

      </a>

      <a class="member_between_center" @click="$router.push('/accountSafety')">
        <p><img src="../../../static/images/icon_mine_security.png"><span>账户安全</span></p>

      </a>

      <a class="member_between_center" @click="$router.push('/help')">
        <p><img src="../../../static/images/icon_mine_help.png"><span>帮助中心</span></p>

      </a>

    </div>


    <div class="center_list" @click="loginOut">
      <a class="member_between_center">
        <p><img src="../../../static/images/icon_loginout.png"><span>退出登录</span></p>
      </a>
    </div>


    <member-footer :showObj="[false,false,true]"></member-footer>


  </div>
</template>

<script>

  import memberFooter from '../../components/footer.vue'

  import API from '../../assets/api'

  export default {

    name:'memberCenter',

    data(){
      return{

        token:'',

        userData:''
      }
    },

    components:{
      'memberFooter':memberFooter
    },

    mounted(){

      this.token = localStorage.getItem('userToken');

      this.userData=JSON.parse(localStorage.getItem('userData'))

    },

    beforeDestroy(){
      jfShowTips.dialogRemove();
    },

    methods:{

      checkOut(){

        let params={

          sessionKey:this.token
        };

        API.deleteFn(API.login,params).then(function (res) {

          console.log(res)

          if(res.data.statusCode=='10000'){

            localStorage.clear();

            this.$router.push('/login')

          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false

          }

        }.bind(this))

          .catch(function (error) {

          }.bind(this))

      },

      loginOut(){

        let _this=this;

        jfShowTips.dialogShow({

          'mainText':'确认退出登录',

          checkFn:function () {

            jfShowTips.dialogRemove();

            _this.checkOut();


          }

        })
      }

    }


  }



</script>
