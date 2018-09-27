<template>
  <div class="member_power">

    <div class="power_top">
      <p class="member_logo">
        <span></span>
        <img src="../../../static/images/grade_star.png" v-if="userData.userLevel==1">
        <img src="../../../static/images/grade_moon.png" v-else-if="userData.userLevel==2">
        <img src="../../../static/images/grade_sun.png" v-else="userData.userLevel==3">
      </p>
      <p>当前等级：<span>{{userData.userLevel|level}}</span></p>
    </div>

    <a class="more_rule" href="#/rightDetails">了解更多会员等级规则》</a>

    <!--敬请期待：coming_online_gray ；锁定：lock_power-->
    <div class="power_list member_between_center">
      <a @click="customerFn">
        <div class="power_img">
          <img src="../../../static/images/icon_customer_service.png">
        </div>
        <p>专属客服</p>
      </a>

      <a href="#/points_speed">
        <div class="power_img lock_power">
          <img src="../../../static/images/icon_integral_acceleration.png">
        </div>
        <p>积分加速</p>
      </a>
      <a href="#/points_exchange">
        <div class="power_img lock_power">
          <img src="../../../static/images/icon_exchange.png">
        </div>
        <p>积分兑换</p>
      </a>
      <a href="#/member_bag">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_gift.png">
        </div>
        <p>会员礼包</p>
      </a>
      <a href="#/upgrade_awards">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_upgrade_awards.png">
        </div>
        <p>升级奖励</p>
      </a>
      <a href="#/birthday">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_birthday_privileges.png">
        </div>
        <p>生日特权</p>
      </a>
      <!--

            <a @click="customerFn">
              <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
                <img src="../../../static/images/icon_customer_service.png">
              </div>
              <p>专属客服</p>
            </a>
      -->


      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_trial.png">
        </div>
        <p>0元试用</p>
      </a>

      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_surprise.png">
        </div>
        <p>10分惊喜</p>
      </a>
      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_exclusive.png">
        </div>
        <p>高端专享</p>
      </a>
    </div>

    <member-footer :showObj="[false,true,false]"></member-footer>

  </div>



  <!--<div class="member_power">

    <div class="power_top">
      <p class="member_logo">
        <span></span>
        <img src="../../../static/images/grade_star.png" v-if="userData.userLevel==1">
        <img src="../../../static/images/grade_moon.png" v-else-if="userData.userLevel==2">
        <img src="../../../static/images/grade_sun.png" v-else="userData.userLevel==3">
      </p>
      <p>当前等级：<span>{{userData.userLevel|level}}</span></p>
    </div>

    <a class="more_rule" href="#/rightDetails">了解更多会员等级规则》</a>

    <!--敬请期待：coming_online_gray ；锁定：lock_power-->
    <!--<div class="power_list member_between_center">
     <a href="#/points_speed">
       <div class="power_img">
         <img src="../../../static/images/icon_integral_acceleration.png">
       </div>
       <p>积分加速</p>
     </a>
      <a href="#/points_exchange">
        <div class="power_img">
          <img src="../../../static/images/icon_exchange.png">
        </div>
        <p>积分兑换</p>
      </a>
      <a href="#/member_bag">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_gift.png">
        </div>
        <p>会员礼包</p>
      </a>
      <a href="#/upgrade_awards">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_upgrade_awards.png">
        </div>
        <p>升级奖励</p>
      </a>
      <a href="#/birthday">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_birthday_privileges.png">
        </div>
        <p>生日特权</p>
      </a>
<!--

      <a @click="customerFn">
        <div class="power_img" :class="userData.userLevel==1?'lock_power':''">
          <img src="../../../static/images/icon_customer_service.png">
        </div>
        <p>专属客服</p>
      </a>
-->

      <!--<a @click="customerFn">
        <div class="power_img">
          <img src="../../../static/images/icon_customer_service.png">
        </div>
        <p>专属客服</p>
      </a>


      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_trial.png">
        </div>
        <p>0元试用</p>
      </a>

      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_surprise.png">
        </div>
        <p>10分惊喜</p>
      </a>
      <a class="coming_online_gray">
        <div class="power_img">
          <img src="../../../static/images/icon_exclusive.png">
        </div>
        <p>高端专享</p>
      </a>
    </div>

    <member-footer :showObj="[false,true,false]"></member-footer>

  </div>-->
</template>

<script>

  import MemberCustomer from '../../assets/customer';

  import memberFooter from '../../components/footer.vue'

  export default {

    name:'memberRight',

    data(){

      return{

        userData:{

          mobileNo:'',

          total:'',

          level:''

        },
      }

    },

    components:{

      'memberFooter':memberFooter
    },

    mounted(){

      console.log(MemberCustomer)

      this.userData=JSON.parse(localStorage.getItem('userData'))

/*      MemberCustomer.init({

        'tel':this.userData.mobileNo,

        '用户ID':this.userData.userId,

        '等级':this.userData.userLevel
      })*/


      MemberCustomer.init({//用户信息
          name: "嘉会员",// 名字
          email: "",// 邮箱
          tel: this.userData.mobileNo,// 电话
          '公司名称':"",
          '公司编号':"",
          '员工编号':""
        },'b040d96757bf55ea302f9fbfb0ecd062' //客服组1
      );

    },



    methods:{
      customerFn(){

        let _this=this;

      /*  if(this.userData.userLevel==1){

          return false

        }*/

        MemberCustomer.click();

       /* if (browser.supplier.weixin) {
          MemberCustomer.click();
        } else if (browser.supplier.ios) {
          window.webkit.messageHandlers.iOSMeiQia.postMessage({
            name: "嘉会员",// 名字
            email: "",// 邮箱
            tel: _this.userData.mobileNo,// 电话
            '公司名称':"",
            '公司编号':"",
            '员工编号':"",
            group:'b040d96757bf55ea302f9fbfb0ecd062'
          });
        } else if (browser.supplier.android) {
          window.AndroidInterface.androidMeiQia(
            {'name':'嘉会员'}, {'email':''}, {'tel':_this.userData.mobileNo}, {'公司名称':""}, {'公司编号':""}, {'group':'b040d96757bf55ea302f9fbfb0ecd062'}
          )
        }*/

      }
    }
  }
</script>
