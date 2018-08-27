<template>
  <div class="Jf_Member_Homepage all_new_product">

    <div class="cheapProduct">

    <div class="product_list">

      <a v-for="item in dataList" :href="item.url">
        <p><img v-lazy="item.theFigureUrl"></p>
        <p class="pro_info">{{item.commodityName}}</p>
        <p class="pro_price">￥{{item.price}}</p>
      </a>

  <!--    <a>
        <p><img src="../../../static/images/produce_2.png"></p>
        <p class="pro_info">全新入门亚马逊Kindle阅读器全新入门亚马逊Kindle电子书阅读器</p>
        <p class="pro_price">8888积分</p>
      </a>

      <a>
        <p><img src="../../../static/images/produce_2.png"></p>
        <p class="pro_info">全新入门亚马逊Kindle电子书阅读器全新入门亚马逊Kindle电子书阅读器</p>
        <p class="pro_price">8888积分</p>
      </a>

      <a>
        <p><img src="../../../static/images/produce_2.png"></p>
        <p class="pro_info">全新入门亚马逊Kindle电子书阅读器全新入门亚马逊Kindle电子书阅读器</p>
        <p class="pro_price">8888积分</p>
      </a>
      <a>
        <p><img src="../../../static/images/produce_2.png"></p>
        <p class="pro_info">全新入门亚马逊Kindle电子书阅读器全新入门亚马逊Kindle电子书阅读器</p>
        <p class="pro_price">8888积分</p>
      </a>-->

    </div>

  </div>

</div>

</template>

<script>
  import API from '../../assets/api'
  export default {
    name:'newProduct',

    data(){

      return{

        id:'',

        page:1,

        dataList:''

      }
    },

    mounted(){

      this.id=this.$route.params.allId;

      this.getInitList();
    },

    methods:{

      getInitList:function () {

        let params={

          columnId:this.id,

          page:this.page

        };

        API.getFn(API.goodList,params).then(function (res) {

          console.log(res);

          if(res.data.code='00000'){

            this.dataList=res.data.list;

            console.log(this.dataList)

          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))


      },



    }
  }
</script>
