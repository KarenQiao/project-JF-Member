<template>

  <div>

    <div class="fixed_top_bar">
      <div class="bar"></div>
      <div class="all_tab yao_shadow">
        <p class="show" @click="changeTabFn(0,30)">未使用</p>
        <p @click="changeTabFn(1,40)">已使用</p>
        <p @click="changeTabFn(2,50)">已过期</p>

      </div>
    </div>

    <div class="my_order_page cardbag_box">


      <div class="order_box card_box member_start_start">

        <div class="all box">

          <div class="card_bag_plate" v-if="dataList.length!=0">


              <scroller style="padding-top: 15px" :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller"  class="my-scroller"  refresh-layer-color="#bb9966" no-data-text="没有更多啦~">


              <div  v-for="item in dataList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

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

                  <p class="left_bottom_font">{{item.ticketMarketingValueStr}}</p>
                </div>


              </div>

            </scroller>

            </div>

          <p v-show="ticketsNone" class="tickets_none">
            <img src="../../../static/images/noTickets.png">
            <span>暂无未使用的优惠券</span>
          </p>

        </div>

        <!--代付款-->
        <div class="used box">

              <!--优惠券-->
            <div class="card_bag_plate" v-if="dataList.length!=0" >

              <scroller style="padding-top: 15px" :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller"  class="my-scroller"  refresh-layer-color="#bb9966" no-data-text="没有更多啦~">

              <div v-for="item in dataList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

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

                  <p class="left_bottom_font">{{item.ticketMarketingValueStr}}</p>

                  <span class="status_tips">已使用</span>
                </div>


              </div>

              </scroller>

            </div>

          <p v-show="ticketsNone" class="tickets_none">
            <img src="../../../static/images/noTickets.png">
            <span>暂无已使用的优惠券</span>
          </p>


        </div>


        <!--待收货-->
        <div class="dated box">

        <div class="card_bag_plate" v-if="dataList.length!=0">

          <scroller style="padding-top: 15px" :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller"  class="my-scroller"  refresh-layer-color="#bb9966" no-data-text="没有更多啦~">


          <div   v-for="item in dataList"  :class="item.ticketType==30?'mianxi_card':'youhui_card'">

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

                <p class="left_bottom_font">{{item.ticketMarketingValueStr}}</p>

                <span class="status_tips">已过期</span>
              </div>


            </div>

          </scroller>

          </div>


          <p v-show="ticketsNone" class="tickets_none">
            <img src="../../../static/images/noTickets.png">
            <span>暂无已过期的优惠券</span>
          </p>

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

        state:'30',//30未使用，40已经使用，50已过期

        ticketsNone:false,

        noData:true,

        page:1,


      }
    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

      this.mobileNo=userData.mobileNo;

      this.getInitList(this.state,this.page);

    },


    methods:{

      getInitList(num,pageNo){

        this.ticketsNone=false;

        if(pageNo==1){

          jfShowTips.loadingShow()

        }

        let params={
        //  userId:this.userId,

          state:num,

          page:pageNo
        };


        let config = {
          headers: {'Content-Type':'application/json;charset=UTF-8'}
        };

        API.JsonPostFn(API.couponsBag,params,config).then(function (res) {

          jfShowTips.loadingRemove();

          console.log(res);

          if(res.data.code=='000000'){


            if(res.data.ticketList==0&&pageNo==1){

              this.ticketsNone=true;

              return false
            }

            for(var i=0; i<res.data.ticketList.length;i++){

              this.dataList.push(res.data.ticketList[i])

            }

            if(res.data.ticketList.length<10){

              this.noData = true;

            }else {

              this.noData = false;
            }


          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false
          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))

      },

      refresh(done){

        console.log('下拉刷新')

        let self = this;//this指向问题

        setTimeout(function () {

          self.dataList=[];

          self.page=1;

          self.getInitList(self.state,self.page);

          self.noData = true;

          done(true)

        },1000)
      },

      infinite(done) {

        console.log('上拉加载1')

        console.log('noData='+this.noData)

        if(this.noData){

          setTimeout(() => {

            console.log('无法上啦加载~结束')

            this.$refs.my_scroller.finishInfinite(false);

            done(true)

          });
          return false;
        }

        let self = this;//this指向问题

        setTimeout(() => {

          console.log('上拉加载')

          self.page+=1;

          self.getInitList(self.state,self.page);

          self.$refs.my_scroller.resize();

          done(true)

        }, 1500)
      },

      changeTabFn(num,state){

        orderFn.tabChange(num);

        this.page=1;

        this.state=state;

        this.dataList=[];

        this.getInitList(this.state,this.page);
      }


    }
  }
</script>
