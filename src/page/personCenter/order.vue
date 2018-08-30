<template>

  <div>

  <div class="fixed_top_bar">
    <div class="bar"></div>
    <div class="all_tab yao_shadow">
     <!-- <p class="show" onclick="orderFn.tabChange(0)" @click="getList('')">全部</p>-->
      <p class="show" onclick="orderFn.tabChange(0)" @click="getList('00')">待付款</p>
      <p onclick="orderFn.tabChange(1)" @click="getList('10')">已付款</p>
      <p onclick="orderFn.tabChange(2)" @click="getList('20')">已发货</p>
      <p onclick="orderFn.tabChange(3)" @click="getList('30')">已过期</p>
      <p onclick="orderFn.tabChange(4)" @click="getList('40')">已完成</p>
    </div>
  </div>

  <div class="my_order_page">

    <div class="order_box member_start_start">

      <!--全部-->
      <div class="all box">

        <a class="order_list" v-for="item in dataList">
          <div class="order_status member_between_center">
            <p>
              <span>订单号:</span>
              <span>{{item.orderNo}}</span>
            </p>
            <p class="golden_text">{{item.orderStatus|orderStatue}}</p>
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
            总共<span>{{item.shopNum}}</span>件商品，合计<span>￥800.00</span> 包含运费<span>￥{{item.extraMoney}}</span>
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

  import API from '../../assets/api'

  export default {
    name:'order',

    data(){
      return{

        dataList:'',

        userId:'',

        orderStatus:'',//00-待付款,10-已付款,20-已发货,30-已过期,40-已完成,全部为空

        page:1,

      }
    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

      this.getList('');
    },

    methods:{

      getList(num){

        let params={
          userId:this.userId,

          orderStatus:num,

          page:this.page

        }

        API.postFn(API.order,params).then(function (res) {

          console.log(res)

          if(res.data.code='00000'){

            this.dataList=res.data.list;

          }else {
            jfShowTips.toastShow({'text':res.data.message})
          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))

      }



    }
  }
</script>
