<template>
  <div class="member_power">

    <div class="power_top">
      <p class="member_logo">
        <span></span>
        <img src="../../../static/images/grade_sun.png">
      </p>
      <p>当前等级：<span>太阳</span></p>
    </div>

    <a class="more_rule" href="#/rightDetails">了解更多会员等级规则》</a>

    <div class="power_list member_between_center">
     <a href="#/points_speed">
       <img src="../../../static/images/icon_integral_acceleration.png">
       <p>积分加速</p>
     </a>
      <a href="#/points_exchange">
        <img src="../../../static/images/icon_exchange.png">
        <p>积分兑换</p>
      </a>
      <a href="#/member_bag">
        <img src="../../../static/images/icon_gift.png">
        <p>会员礼包</p>
      </a>
      <a href="#/upgrade_awards">
        <img src="../../../static/images/icon_upgrade_awards.png">
        <p>升级奖励</p>
      </a>
      <a href="#/birthday">
        <img src="../../../static/images/icon_birthday_privileges.png">
        <p>生日特权</p>
      </a>
      <a>
        <img src="../../../static/images/icon_trial.png">
        <p>0元试用</p>
      </a>
      <a class="locked">
        <img src="../../../static/images/icon_customer_service.png">
        <p>专属客服</p>
      </a>
      <a class="locked">
        <img src="../../../static/images/icon_surprise.png">
        <p>10分惊喜</p>
      </a>
      <a class="locked">
        <img src="../../../static/images/icon_exclusive.png">
        <p>高端专享</p>
      </a>
    </div>

    <member-footer :showObj="[false,true,false]"></member-footer>

  </div>
</template>

<script>

  import memberFooter from '../../components/footer.vue'

  export default {

    name:'memberRight',

    data(){

      return{

      }

    },

    components:{

      'memberFooter':memberFooter
    },

    mounted(){



    }
  }
</script>
