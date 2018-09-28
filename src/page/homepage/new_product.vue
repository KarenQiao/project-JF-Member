<template>
  <div class="Jf_Member_Homepage all_new_product">

    <div class="cheapProduct">

    <div class="product_list">

      <scroller :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller"  class="my-scroller"  refresh-layer-color="#bb9966" no-data-text="我们是有底线的~" v-if="dataList.length>0">

      <a v-for="item in dataList" :href="item.url">
        <p><img v-lazy="item.theFigureUrl"></p>
        <p class="pro_info">{{item.commodityName}}</p>
        <p class="pro_price">￥{{item.price}}</p>
      </a>

      </scroller>

    </div>
    </div>

    <back-home></back-home>

</div>

</template>

<script>
  import backHome from '../../components/backHome.vue'

  import API from '../../assets/api'
  export default {
    name:'newProduct',

    data(){

      return{

        id:'',

        page:1,

        dataList:[],

        noData:true

      }
    },

    mounted(){

      this.id=this.$route.params.allId;

      this.getInitList(this.page);
    },

    components:{

      'backHome':backHome
    },

    methods:{

      getInitList:function (num) {

        if(num==1){

          jfShowTips.loadingShow()

        }

        let params={

          columnId:this.id,

          page:num

        };

        API.getFn(API.goodList,params).then(function (res) {

          jfShowTips.loadingRemove()

          console.log(res);

          if(res.data.code='00000'){

            for(var i=0; i<res.data.list.length;i++){

              this.dataList.push(res.data.list[i])

            }

            if(res.data.list.length<10){

              this.noData = true;

            }else {

              this.noData = false;
            }


          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))


      },


      refresh(done){

        let self = this;//this指向问题

        setTimeout(function () {

          self.dataList=[];

          self.page=1;

          self.getInitList(self.page);

          self.noData = true;

          done(true)

        },1500)
      },

      infinite(done) {

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

          self.getInitList(self.page);

          self.$refs.my_scroller.resize();

          done(true)

        }, 1500)
      },




    }
  }
</script>
