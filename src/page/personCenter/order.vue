<template>

  <div>

  <div class="fixed_top_bar">
    <div class="bar"></div>
    <div class="all_tab yao_shadow">
      <p class="show" onclick="orderFn.tabChange(0)">全部</p>
      <p onclick="orderFn.tabChange(1)">待付款</p>
      <p onclick="orderFn.tabChange(2)">待收货</p>
      <p onclick="orderFn.tabChange(3)">已完成</p>
      <p onclick="orderFn.tabChange(4)">已取消</p>
    </div>
  </div>

  <div class="my_order_page">

    <div class="order_box member_start_start">

      <!--全部-->
      <div class="all box">

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">已完成</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>5</span>件商品，合计<span>￥800.00</span> 包含运费<span>￥80.00</span>
          </div>
        </a>

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">已完成</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>

      </div>

      <!--代付款-->
      <div class="paying box">

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">待付款</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">待付款</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>
      </div>


      <!--待收货-->
      <div class="evaluate box">

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">已完成</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>

      </div>


      <!--已完成-->
      <div class="evaluate box">

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">已完成</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>

      </div>

      <!--已取消-->
      <div class="evaluate box">

        <a class="order_list">
          <div class="order_status member_between_center">
            <p>
              <img src="../../../static/images/ent_logo.png">
              <span>德开药店</span>
            </p>
            <p class="golden_text">已完成</p>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="details member_left_center">
            <p><img src="../../../static/images/produce_2.png"></p>
            <div>
              <span class="title">kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器kindle电子阅读器</span>
              <span>白色，12寸</span>

              <p class="member_between_center"><span class="golden_text">￥500</span><span>X1</span></p>

            </div>
          </div>
          <div class="total">
            总共<span>1</span>件商品，合计<span>￥600.00</span> 包含运费<span>￥10.00</span>
          </div>
        </a>

      </div>

    </div>



  </div>


  </div>
</template>

<script>

  export default {
    name:'order',

    data(){
      return{

      }
    }
  }
</script>
