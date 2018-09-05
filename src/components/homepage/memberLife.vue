
<template>
  <div class="member_life homepage_title">
    <div class="title">
      <p>{{lifeTitle.columnTheName}}</p>
      <p>{{lifeTitle.columnViceName}}</p>
    </div>


    <div class="tabChangeArea">

      <div class="tabBtn member_between_center">
        <span v-for="item in lifeList.slice(0,3)" >{{item.theTitle}}</span>
       <!-- <span class="showTab" >出游度假</span>
        <span>潮流风向</span>-->
       <!-- <a class="moreTab" @click="$router.push('/memberLife/'+lifeTitle.id)">更多</a>-->
      </div>

      <div class="moveArea ">
        <a v-for="item in lifeList" :href="item.url+'/'+item.id">
          <img v-lazy="item.theFigureUrl">
        </a>
       <!-- <a class="showArea"> <img src="../../../static/images/life2.png"></a>
        <a> <img src="../../../static/images/life1.png"></a>-->
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

    props:{

      lifeList:{
        type:Array
      },

      lifeTitle:{
        type:Object
      }
    },


    mounted(){
    /*  /!*商品详情页图片滚动以及缩放*!/
      tabMoveChange.init({

        "moveEle":"moveArea",//包裹所有图片的class选择器

        "moveEleParent":"tabChangeArea",//包括点点以及图片的父元素，class选择器
      });*/
    },

    updated(){

      document.getElementsByClassName('tabBtn')[0].getElementsByTagName('span')[0].className='showTab';

      document.getElementsByClassName('moveArea')[0].getElementsByTagName('a')[0].className='showArea';

      tabMoveChange.init({

        "moveEle":"moveArea",//包裹所有图片的class选择器

        "moveEleParent":"tabChangeArea",//包括点点以及图片的父元素，class选择器
      });
    }


  }
</script>
