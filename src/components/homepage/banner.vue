<template>

  <div class="jf_homepage_autoplay">

    <div class="jf_autoplay_images">

      <wc-swiper v-if="bannerList.length>0" :autoplay=true :interval="4000">
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

        autoplay:true

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



</style>

