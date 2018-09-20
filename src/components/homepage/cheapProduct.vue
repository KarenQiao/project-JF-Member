<template>
  <div class="cheapProduct homepage_title">
    <div class="title">
      <p>{{proTitle.columnTheName}}</p>
      <p>{{proTitle.columnViceName}}</p>
    </div>

    <div class="product_list member_left_center">

      <a v-for="item in cheapPro"  :href="item.url">
        <p><img v-lazy=item.theFigureUrl></p>
        <p class="pro_info">{{item.commodityName}}</p>
        <p class="member_between_center"><span class="pro_price">¥{{item.price}}</span><span class="customary_price">¥{{item.origPrice}}</span></p>
      </a>

     <!-- <a>
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
</template>

<script>
  export default {

    name:'cheap-product',

    data(){

      return{

      }

    },

    props:{

      cheapPro:{
        type:Array
      },

      proTitle:{
        type:Object
      }
    },

  }
</script>
