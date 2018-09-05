<template>

  <div>

    <div class="life_top_plate"><img src="../../../static/images/delicate_life/img_delicate_life_top.png"/></div>

    <div class="life_details_plate">
      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life02.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life03.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life04.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life05.png"/></div>
    </div>

    <div class="life_title_img"><img src="../../../static/images/delicate_life/img_delicate_life01.png"/></div>

    <div class="life_details_plate">
      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life06.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life07.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life08.png"/></div>
    </div>

    <div class="life_title_img"><img src="../../../static/images/delicate_life/img_delicate_life09.png"/></div>

    <div class="life_details_plate">
      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life10.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life11.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life12.png"/></div>

      <div class="life_details_img"><img src="../../../static/images/delicate_life/img_delicate_life13.png"/></div>
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
