

<template>

  <div class="Jf_Member_Homepage">

    <div class="member_top member_between_center">

      <div class="member_left member_left_center">
        <p class="member_logo"><img src="../../../static/images/logo.jpg"></p>
        <p>
          <span class="member_name">Karen Qiao</span>
          <span class="member_score">568积分</span>
        </p>
      </div>

      <div class="member_right member_center">
        <span class="bg_light"></span>
        <img src="../../../static/images/grade_sun.png">
      </div>

    </div>

    <banner></banner>

    <cheap-product></cheap-product>

    <member-life></member-life>

    <edit-story></edit-story>

    <new-product></new-product>

    <div class="member_active normal_title">

      <div class="title member_between_center">
        <span>会员专享活动</span>
      </div>

      <div class="active_pic">
        <img src="../../../static/images/active1.png">
      </div>

    </div>

    <member-footer :showObj="[true,false,false]"></member-footer>

  </div>



</template>



<script>

  import banner from '../../components/homepage/banner.vue'

  import cheapProduct from '../../components/homepage/cheapProduct.vue'

  import memberLife from '../../components/homepage/memberLife.vue'

  import editorStory from '../../components/homepage/reccomed.vue'

  import newProduct from '../../components/homepage/newPro.vue'

  import memberFooter from '../../components/footer.vue'

  export default {
    name:'homepage',

    data(){

      return{

      }
    },

    components: {
      'banner': banner,
      'cheapProduct':cheapProduct,
      'memberLife':memberLife,
      'editStory':editorStory,
      'newProduct':newProduct,
      'memberFooter':memberFooter
    },

    mounted(){

      //jfAutoPlay.jfCarouselInit();//轮播

    }
  }

</script>
