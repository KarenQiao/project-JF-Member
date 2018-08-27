<template>

  <div class="jf_homepage_autoplay">

    <div class="jf_autoplay_images">

      <wc-swiper v-if="bannerList.length>0">
        <wc-slide v-for="(item,key) in bannerList" :key="key">

          <a :href="item.linkActivity">
            <img v-lazy="item.showPicturUrl">
          </a>
        </wc-slide>

       <!-- <div slot="pagination"></div>
        <div slot="arrowLeft"></div>
        <div slot="arrowRight"></div>-->
      </wc-swiper>

<!--
      <a v-for="item in bannerList" :href="item.linkActivity">
        <img v-lazy="item.showPicturUrl">
      </a>-->
    </div>
   <!-- <div class="jf_pagination"></div>-->
  </div>



</template>


<script>

  export default {
    name:'banner',

    data(){

      return{


      }

    },

    props:{

      bannerList:{
        type:Array
      }
    },


  }



</script>

<style lang="less">

  .wc-slide{

    position: relative;
  }

  .wc-pagination .wc-dot-active{
    background: #bb9966;
  }

  .wc-swiper-container{
    height: 100%;
  }

</style>

