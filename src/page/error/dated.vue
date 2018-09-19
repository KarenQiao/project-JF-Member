<template>

  <div>


    <div class="my_order_page">

      <div class="order_box member_start_start">

        <!--全部-->
        <div class="all box">


          <p  class="tickets_none common_error">
            <img src="../../../static/images/system_dated.png">
            <span>系统超时，请返回后重新进入</span>

            <a class="bottom_btn" onclick="window.history.go(-1)">返回</a>
          </p>

        </div>

      </div>



    </div>


  </div>
</template>
<script>
  export default {
    name:'datadError'
  }
</script>
