<template>

  <div>

    <div class="fixed_top_bar">
      <div class="bar"></div>
      <div class="all_tab yao_shadow">
        <p class="show" onclick="orderFn.tabChange(0)" @click="getInitList(30)">未使用</p>
        <p onclick="orderFn.tabChange(1)" @click="getInitList(40)">已使用</p>
        <p onclick="orderFn.tabChange(2)" @click="getInitList(50)">已过期</p>

      </div>
    </div>

    <div class="my_order_page">


      <div class="order_box card_box member_start_start">

        <div class="all box">
          <!--  <data-list :dataList="datasList"></data-list>-->
            <!--优惠券-->
            <div class="card_bag_plate">

              <div v-if="dataList.length!=0"  v-for="item in dataList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

                <div class="card_left">
                  <p class="left_top_font" v-if="item.ticketType==10"><span>{{item.amt}}</span><span class="left_top_small">元优惠券</span></p>

                  <p class="left_top_font" v-else-if="item.ticketType==20"><span>{{item.discount*10}}</span><span class="left_top_small">折</span></p>

                  <p class="left_top_font" v-else="item.ticketType==30"><span>{{item.amt}}</span><span class="left_top_small">免息券</span></p>

                  <p class="left_bottom_font"><span>有效期：</span><span>{{item.validityStart|time}}-{{item.validityEnd|time}}</span></p>
                </div>

                <div class="card_right" v-if="item.ticketType==30">

                  <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>

                </div>

                <div class="card_right" v-else="">

                  <p class="left_top_small">全品类</p>

                  <p class="left_bottom_font">{{item.ticketMarketingValue}}</p>
                </div>


              </div>

              <p v-show="dataList.length==0" class="tickets_none"></p>

            </div>

        </div>

        <!--代付款-->
        <div class="used box">

              <!--优惠券-->
            <div class="card_bag_plate">



              <div v-if="usedList.length!=0" v-for="item in usedList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

                <div class="card_left">
                  <p class="left_top_font" v-if="item.ticketType==10"><span>{{item.amt}}</span><span class="left_top_small">元优惠券</span></p>

                  <p class="left_top_font" v-else-if="item.ticketType==20"><span>{{item.discount*10}}</span><span class="left_top_small">折</span></p>

                  <p class="left_top_font" v-else="item.ticketType==30"><span>{{item.amt}}</span><span class="left_top_small">免息券</span></p>

                  <p class="left_bottom_font"><span>有效期：</span><span>{{item.validityStart|time}}-{{item.validityEnd|time}}</span></p>
                </div>

                <div class="card_right" v-if="item.ticketType==30">

                  <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>

                </div>

                <div class="card_right" v-else="">

                  <p class="left_top_small">全品类</p>

                  <p class="left_bottom_font">{{item.ticketMarketingValue}}</p>

                  <span class="status_tips">已使用</span>
                </div>


              </div>

              <p v-show="usedList.length==0" class="tickets_none"></p>

            </div>

        </div>


        <!--待收货-->
        <div class="dated box">

        <div class="card_bag_plate">

            <div  v-if="datedList.length!=0" v-for="item in datedList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

              <div class="card_left">
                <p class="left_top_font" v-if="item.ticketType==10"><span>{{item.amt}}</span><span class="left_top_small">元优惠券</span></p>

                <p class="left_top_font" v-else-if="item.ticketType==20"><span>{{item.discount*10}}</span><span class="left_top_small">折</span></p>

                <p class="left_top_font" v-else="item.ticketType==30"><span>{{item.amt}}</span><span class="left_top_small">免息券</span></p>

                <p class="left_bottom_font"><span>有效期：</span><span>{{item.validityStart|time}}-{{item.validityEnd|time}}</span></p>
              </div>

              <div class="card_right" v-if="item.ticketType==30">

                <div class="card_logo_plate"><img src="../../../static/images/img_iou_logo.png"/></div>

              </div>

              <div class="card_right" v-else="">

                <p class="left_top_small">全品类</p>

                <p class="left_bottom_font">{{item.ticketMarketingValue}}</p>

                <span class="status_tips">已使用</span>
              </div>


            </div>
             <p v-show="datedList.length==0" class="tickets_none"></p>

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

        dataList:[],

        usedList:[],

        datedList:[],

        state:'',//30未使用，40已经使用，50已过期

      }
    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

      this.mobileNo=userData.mobileNo;

      this.getInitList(30);

    },


    methods:{

      getInitList(num){

        jfShowTips.loadingShow();


        let params={
          userId:this.userId,

          state:num
        };

        API.postFn(API.couponsBag,params).then(function (res) {

          jfShowTips.loadingRemove();

          console.log(res);

          if(res.data.code=='000000'){

            if(num==30){

              this.dataList=res.data.ticketList;

              if(this.dataList==0){

                document.getElementsByClassName('tickets_none')[0].innerHTML='暂无未使用的优惠券'

              }

              return false

            }else if(num==40){

              this.usedList=res.data.ticketList;

              if(this.usedList==0){

                document.getElementsByClassName('tickets_none')[1].innerHTML='暂无已使用的优惠券'
              }

              return false
            }else {

              this.datedList=res.data.ticketList;

              if(this.datedList==0){

                document.getElementsByClassName('tickets_none')[2].innerHTML='暂无已过期的优惠券'
              }

            }

            console.log(res.data.ticketList)

          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false
          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))

      }

    }
  }
</script>
