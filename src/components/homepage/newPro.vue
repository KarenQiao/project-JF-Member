

<template>
  <div class="new_product normal_title">

    <div class="title member_between_center">
      <span>新品快抢</span>
      <a  @click="$router.push('/newProduct/'+goodId)">更多</a>
    </div>

    <div class="pro_list">

      <a class="single_pro member_between_center" v-for="item in newPro.slice(0,1)" :href="item.url">

        <div>
          <p class="pro_name">{{item.commodityName}}</p>
          <p class="pro_tips">{{item.label}}</p>
          <p class="price"><span>¥{{item.price}}</span></p>
        </div>

        <div class="pro_pic">
          <img v-lazy="item.theFigureUrl">
        </div>


      </a>

      <div class="all_pro member_left_center">

        <a v-for="item in newPro.slice(1,4)" :href="item.url">
          <p><img v-lazy="item.theFigureUrl"></p>
          <p class="pro_title">{{item.commodityName}}</p>
          <p class="golden_text">¥{{item.price}}</p>
        </a>

       <!-- <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>-->

       <!-- <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>

        <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>-->



      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name:'newProduct',

    data(){
      return{

      }
    },

    props:{

      newPro:{
        type: Array,
      },

      goodId:{
        type:Number
      }


    }
  }
</script>
