
<template>

  <div class="homepage_coupons">

    <div class="coupons_box">

      <div class="box_name member_center">
        <p>领取新人专享券</p>
        <span onclick="boxShow.checkHide()">x</span>
      </div>

      <ul class="main_box">

        <li >

          <div class="member_between_center">
            <div>
              <p class="num golden_text"><span>20</span> 元优惠券</p>
              <p class="date">有效期：<span>2018.05.05-2018.12.12</span></p>
            </div>
            <div>
              <p class="type golden_text">食品类</p>
              <p class="conditions">满299元可用</p>
            </div>
          </div>

        </li>

        <li>
          <div class="member_between_center">
            <div>
              <p class="num golden_text"><span>20</span> 元优惠券</p>
              <p class="date">有效期:<span>2018.05.05-2018.12.12</span></p>
            </div>
            <div>
              <p class="type golden_text">食品类食品类食品类</p>
              <p class="conditions">满299元可用满299元可用满299元可用</p>
            </div>
          </div>
        </li>

        <li >

          <div class="member_between_center">
            <div>
              <p class="num golden_text"><span>20</span> 元优惠券</p>
              <p class="date">有效期：<span>2018.05.05-2018.12.12</span></p>
            </div>
            <div>
              <p class="type golden_text">食品类</p>
              <p class="conditions">满299元可用</p>
            </div>
          </div>

        </li>

        <li >

          <div class="member_between_center">
            <div>
              <p class="num golden_text"><span>20</span> 元优惠券</p>
              <p class="date">有效期：<span>2018.05.05-2018.12.12</span></p>
            </div>
            <div>
              <p class="type golden_text">食品类</p>
              <p class="conditions">满299元可用</p>
            </div>
          </div>

        </li>

        <li >

          <div class="member_between_center">
            <div>
              <p class="num golden_text"><span>2000</span> 元优惠券</p>
              <p class="date">有效期：<span>2018.05.05-2018.12.12</span></p>
            </div>
            <div>
              <p class="type golden_text">食品类</p>
              <p class="conditions">满299元可用</p>
            </div>
          </div>

        </li>

      </ul>

      <div class="close_btn" onclick="boxShow.checkHide('homepage_coupons')"><button>确认</button></div>
    </div>

    <div class="box_shadow"></div>


  </div>



</template>


<script>
  export default {

    name:'coupons',

    data(){

      return{

      }
    },

    mounted(){
     // boxShow.checkShow('homepage_coupons');
    }
  }
</script>


<style lang="less">


  @import './box.less';


</style>
