<template>

  <div>
    <div class="hotel_img_plate"><img src="../../../static/images/hotel/img_hotel_banner.png"/></div>

    <div class="hotel_img_font"><img src="../../../static/images/hotel/img_hotel_01.png"/></div>

    <div class="hotel_img_02"><img src="../../../static/images/hotel/img_hotel_02.png"/></div>

    <div class="hotel_img_03"><img src="../../../static/images/hotel/img_hotel_03.png"/></div>

    <div class="hotel_img_04"><img src="../../../static/images/hotel/img_hotel_04.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_05.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_06.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_07.png"/></a>
      </div>
    </div>

    <div class="hotel_img_08"><img src="../../../static/images/hotel/img_hotel_08.png"/></div>

    <div class="hotel_img_09"><img src="../../../static/images/hotel/img_hotel_09.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_10.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_11.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_12.png"/></a>
      </div>
    </div>

    <div class="hotel_img_13"><img src="../../../static/images/hotel/img_hotel_13.png"/></div>

    <div class="hotel_img_14"><img src="../../../static/images/hotel/img_hotel_14.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_15.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_16.png"/></a>
      </div>
    </div>

    <div class="hotel_img_17"><img src="../../../static/images/hotel/img_hotel_17.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_18.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_19.png"/></a>

        <a class="look_details_img"><img src="../../../static/images/hotel/img_hotel_20.png"/></a>
      </div>
    </div>
  </div>

</template>


<script>

  export default {

    data() {
      return{

        id:'',

        page:1,

      }
    },

    mounted(){

      this.id=this.$route.params.id;


    },

  }

</script>

