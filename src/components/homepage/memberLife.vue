
<template>
  <div class="member_life homepage_title">
    <div class="title">
      <p>会员生活</p>
      <p>MEMBER - LIFE</p>
    </div>


    <div class="tabChangeArea">

      <div class="tabBtn member_between_center">
        <span class="showTab">亲密时光</span>
        <span>出游度假</span>
        <span>潮流风向</span>
        <a class="moreTab" @click="$router.push('/memberLife')">更多</a>
      </div>

      <div class="moveArea ">
        <a class="showArea">
          <img src="../../../static/images/life1.png">
        </a>
        <a> <img src="../../../static/images/life2.png"></a>
        <a> <img src="../../../static/images/life1.png"></a>
      </div>


    </div>

  </div>
</template>

<script>
  export default {

    name:'memberLife',

    data(){
      return{

      }
    },

    mounted(){
      /*商品详情页图片滚动以及缩放*/
      tabMoveChange.init({

        "moveEle":"moveArea",//包裹所有图片的class选择器

        "moveEleParent":"tabChangeArea",//包括点点以及图片的父元素，class选择器
      });
    }


  }
</script>
