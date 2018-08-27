<template>

  <div class="active_box">

    <div class="main_box">
      <span>x</span>

      <div class="check_btn">
        <button onclick="boxShow.checkHide('active_box');boxShow.checkShow('homepage_coupons')">确认</button>
      </div>
    </div>

    <div class="box_shadow"></div>
  </div>


</template>




<script>

  export default {
    name:'activeBox',

    mounted(){
     // boxShow.checkShow('active_box');
    }
  }
</script>

<style lang="less">
  @import './activeBox.less';
</style>



