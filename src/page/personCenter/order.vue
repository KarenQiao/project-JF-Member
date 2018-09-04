<template>

  <div>

<!--  <div class="fixed_top_bar">
    <div class="bar"></div>
    <div class="all_tab yao_shadow">
     &lt;!&ndash; <p class="show" onclick="orderFn.tabChange(0)" @click="getList('')">全部</p>&ndash;&gt;
      <p class="show" onclick="orderFn.tabChange(0)" @click="getList('00')">待付款</p>
      <p onclick="orderFn.tabChange(1)" @click="getList('10')">已付款</p>
      <p onclick="orderFn.tabChange(2)" @click="getList('20')">已发货</p>
      <p onclick="orderFn.tabChange(3)" @click="getList('30')">已过期</p>
      <p onclick="orderFn.tabChange(4)" @click="getList('40')">已完成</p>
    </div>
  </div>-->

  <div class="my_order_page">

    <div class="order_box member_start_start">

      <!--全部-->
      <div class="all box">

        <scroller :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller"  class="my-scroller"  refresh-layer-color="#bb9966" no-data-text="没有更多订单啦~"  v-if="dataList.length>0" >

          <a class="order_list" v-for="item in dataList">
            <div class="order_status member_between_center">
              <p>
                <span>订单号:</span>
                <span>{{item.orderNo}}</span>
              </p>
              <p class="golden_text">待发货</p>
            </div>
            <div v-for="list in item.detailList" class="details member_left_center" >

              <p><img :src="list.shopUrl"></p>
              <div>
                <span class="title">{{list.shopTitle}}</span>
                <span>{{list.shopSpec}}</span>

                <p class="member_between_center"><span class="golden_text">￥{{list.shopPrice}}</span><span>X{{list.shopNum}}</span></p>

              </div>
            </div>

            <div class="total">
              总共<span>{{item.shopNum}}</span>件商品，合计<span>￥800.00</span> 包含运费<span>￥{{item.extraMoney}}</span>
            </div>
          </a>

        </scroller>

        <p v-show="noDataText" class="tickets_none">
          <img src="../../../static/images/noOrder.png">
          <span>暂无相关订单数据哦</span></p>

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

        dataList:[],

        userId:'',

        orderStatus:'3',//00-待付款,10-已付款,20-已发货,30-已过期,40-已完成,全部为空

        page:1,

        params:{},

        noData:true,

        noDataText:false



      }
    },

    mounted(){

      let userData= JSON.parse(localStorage.getItem('userData'));

      this.userId=userData.userId;

   //   this.userId=8628699251605504;

      this.getList(this.page);
    },

    methods:{

      getList(num){

        if(num==1){

          jfShowTips.loadingShow()

        }

        API.postFn(API.order,{userId:this.userId, orderStatus:this.orderStatus,page:num}).then(function (res) {

          console.log(res);

          jfShowTips.loadingRemove()

          if(res.data.code='00000'){

            if(res.data.list.length==0&&num==1){

              this.noDataText=true;

              return false

            }

            for(var i=0; i<res.data.list.length;i++){

              this.dataList.push(res.data.list[i])

            }

            if(res.data.list.length<10){

              this.noData = true;

            }else {

              this.noData = false;
            }

          }else {
            jfShowTips.toastShow({'text':res.data.message})
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

          self.page=1

          self.getList(self.page);

          self.noData = true;

          done(true)

        },1500)
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

          self.getList(self.page);

          self.$refs.my_scroller.resize();

          done(true)

        }, 1500)
      },

      },

//done()表示这次异步加载数据完成，加载下一次
//因为这个是同步的，加了setTimeout就是异步加载数据；
//因为涉及到this指向问题，所以将他放在一个变量里。


  }
</script>

<style>



</style>

