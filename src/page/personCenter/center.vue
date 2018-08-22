<template>
  <div class="Jf_Member_Homepage jf_Member_center">


    <div class="member_top member_between_center">

      <div class="member_left member_left_center">
        <p class="member_logo"><img src="../../../static/images/logo.jpg"></p>
        <p>
          <span class="member_name">Karen Qiao</span>
          <span class="member_score">568积分</span>
        </p>
      </div>

      <div class="member_right member_center">
        <span class="bg_light"></span>
        <img src="../../../static/images/grade_sun.png">
      </div>

    </div>


    <div class="center_list ">
     <a class="member_between_center">
       <p><img src="../../../static/images/icon_mine_assets.png"><span>我的资产</span></p>
       <p class="gray_text">等待开放中</p>
     </a>

      <a class="member_between_center">
        <p><img src="../../../static/images/icon_mine_voucher.png"><span>我的券包</span></p>

      </a>

      <a class="member_between_center" @click="$router.push('/order')">
        <p><img src="../../../static/images/icon_mine_order.png"><span>我的订单</span></p>

      </a>

      <a class="member_between_center">
        <p><img src="../../../static/images/icon_mine_address.png"><span>地址管理</span></p>
        <p class="gray_text">等待开放中</p>

      </a>

      <a class="member_between_center" @click="$router.push('/accountSafety')">
        <p><img src="../../../static/images/icon_mine_security.png"><span>账户安全</span></p>

      </a>

      <a class="member_between_center">
        <p><img src="../../../static/images/icon_mine_help.png"><span>帮助中心</span></p>

      </a>

    </div>


    <member-footer :showObj="[false,false,true]"></member-footer>


  </div>
</template>

<script>

  import memberFooter from '../../components/footer.vue'

  export default {

    name:'memberCenter',

    data(){
      return{

      }
    },

    components:{
      'memberFooter':memberFooter
    }


  }



</script>
