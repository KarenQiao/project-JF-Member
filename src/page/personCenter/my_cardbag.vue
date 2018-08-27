<template>

  <div>

    <div class="fixed_top_bar">
      <div class="bar"></div>
      <div class="all_tab yao_shadow">
        <p class="show" onclick="orderFn.tabChange(0)">未使用</p>
        <p onclick="orderFn.tabChange(1)">已使用</p>
        <p onclick="orderFn.tabChange(2)">已过期</p>

      </div>
    </div>

    <div class="my_order_page">


      <div class="order_box card_box member_start_start">


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
        <div class="used box">

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

                <span class="status_tips">已使用</span>
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

                <span class="status_tips">已使用</span>
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

                <span class="status_tips">已使用</span>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>8.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">无门槛</p>

                <span class="status_tips">已使用</span>
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

                <span class="status_tips">已使用</span>
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

                <span class="status_tips">已使用</span>
              </div>
            </div>
          </div>

        </div>


        <!--待收货-->
        <div class="dated box">

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
                <span class="status_tips">已过期</span>
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
                <span class="status_tips">已过期</span>
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
                <span class="status_tips">已过期</span>
              </div>
            </div>

            <div class="youhui_card">
              <div class="card_left">
                <p class="left_top_font"><span>8.8</span><span class="left_top_small">折</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <p class="left_top_small font_padding">食品类</p>

                <p class="left_bottom_font font_padding">无门槛</p>
                <span class="status_tips">已过期</span>
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
                <span class="status_tips">已过期</span>
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
                <span class="status_tips">已过期</span>
              </div>
            </div>

            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>10</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
                <span class="status_tips">已过期</span>
              </div>
            </div>

            <div class="mianxi_card">
              <div class="card_left">
                <p class="left_top_font"><span>30</span><span class="left_top_small">天免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>2018.08.16-2018.09.18</span></p>
              </div>

              <div class="card_right">
                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>
                <span class="status_tips">已过期</span>
              </div>
            </div>
          </div>
        </div>


      </div>



    </div>


  </div>
</template>

<script>

  import API from '../../assets/api'

  export default {
    name:'cardBag',

    data(){
      return{

        userId:'',

        dataList:''

      }
    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

      this.mobileNo=userData.mobileNo;

      this.getInitList();

    },

    methods:{

      getInitList(){

        let params={
          userId:this.userId
        };

        API.postFn(API.couponsBag,params).then(function (res) {

          console.log(res)

        }.bind(this))
          .catch(function (error) {

          }.bind(this))

      }

    }
  }
</script>
