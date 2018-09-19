<template>

  <div>


    <div class="my_order_page">

      <div class="order_box member_start_start">

        <!--全部-->
        <div class="all box">


          <p  class="tickets_none common_error">
            <img src="../../../static/images/accout_error.png">
            <span>账户匹配错误，请致电400-821-5990</span>

            <a class="bottom_btn" onclick="window.history.go(-1)">点击确认</a>
          </p>

        </div>

      </div>



    </div>


  </div>
</template>

<script>
  export default {
    name:'accountError'
  }
</script>
