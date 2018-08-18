
<template>

  <div class="member_footer">
    <div class="footer_bar"></div>
    <div class="footer_content member_between_center">

      <a :class="showObj[0]?'show':''"  @click.prevent.stop="goHomepage">
        <p>
          <img src="../../static/images/icon_homepage_grey.png">
          <img src="../../static/images/icon_homepage_gold.png">

        </p>
        <span>首页</span>
      </a>

      <a :class="showObj[1]?'show':''" @click.prevent.stop="goPower">
        <p>
          <img src="../../static/images/icon_rights_grey.png">
          <img src="../../static/images/icon_rights_gold.png">

        </p>
        <span>会员权益</span>
      </a>

      <a :class="showObj[2]?'show':''"  @click.prevent.stop="goCenter">
        <p>
          <img src="../../static/images/icon_mine_grey.png">
          <img src="../../static/images/icon_mine_gold.png">

        </p>
        <span>会员中心</span>
      </a>

    </div>

  </div>
</template>

<script>
  export default {

    name:'memberFooter',

    data(){
      return{

      }
    },

    props:{

      showObj:{
        type:Array
      }
    },

    methods:{

      goHomepage(){

        this.$router.push('/homepage');

      },

      goPower(){

        this.$router.push('/memberRights');
      },

      goCenter(){

        this.$router.push('/memberCenter')

      }



    }

  }
</script>
