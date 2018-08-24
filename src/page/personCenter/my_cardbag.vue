<template>

  <div>

    <div class="fixed_top_bar">
      <div class="bar"></div>
      <div class="all_tab yao_shadow">
        <p class="show" onclick="orderFn.tabChange(0)">全部</p>
        <p onclick="orderFn.tabChange(1)">待付款</p>
        <p onclick="orderFn.tabChange(2)">待收货</p>

      </div>
    </div>

    <div class="my_order_page">

      <p class="card_bag_title">/ 优惠券 /</p>

      <div class="order_box member_start_start">

        <div class="all box">

          <!--优惠券-->
          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small">食品类</p>

                <p class="left_bottom_font">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>300</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--折扣券-->
          <p class="card_bag_title">/ 折扣券 /</p>

          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>8.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>6.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>5.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--免息券-->
          <p class="card_bag_title">/ 免息券 /</p>

          <div class="card_bag_plate">
            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>10</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>

            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>
          </div>

        </div>

        <!--代付款-->
        <div class="paying box">

          <!--优惠券-->
          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small">食品类</p>

                <p class="left_bottom_font">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>300</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--折扣券-->
          <p class="card_bag_title">/ 折扣券 /</p>

          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>8.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>6.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>5.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--免息券-->
          <p class="card_bag_title">/ 免息券 /</p>

          <div class="card_bag_plate">
            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>10</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>

            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>
          </div>
        </div>


        <!--待收货-->
        <div class="evaluate box">

          <!--优惠券-->
          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small">食品类</p>

                <p class="left_bottom_font">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>300</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--折扣券-->
          <p class="card_bag_title">/ 折扣券 /</p>

          <div class="card_bag_plate">
            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>8.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">无门槛</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>6.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">旅游类</p>

                <p class="left_bottom_font font_padding">特惠线路使用</p>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>5.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">满399元可用</p>
              </div>
            </div>
          </div>

          <!--免息券-->
          <p class="card_bag_title">/ 免息券 /</p>

          <div class="card_bag_plate">
            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>10</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>

            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
              </div>
            </div>
          </div>

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
