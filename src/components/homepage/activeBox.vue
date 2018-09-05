<template>

  <div class="active_box" @click="getCoupons">

    <div class="main_box">
      <!--<span>x</span>

      <div class="check_btn">
        <button onclick="boxShow.checkHide('active_box');boxShow.checkShow('homepage_coupons')">确认</button>
      </div>-->
    </div>

    <div class="box_shadow"></div>
  </div>


</template>




<script>

  import API from '../../assets/api'

  export default {
    name:'activeBox',

    data(){

      return{

        userData:{
          userId:''
        }
      }
    },

    mounted(){

      this.userData=JSON.parse(localStorage.getItem('userData'));
    },

    methods:{

      getCoupons(){

        API.getFn(API.modifyLogin,{userId:this.userData.userId})

          .then(function (res) {

            if(res.data.code=='00000'){

              boxShow.checkHide('active_box');

              let _this=this;

              setTimeout(function () {

                _this.$router.push('/memberOnline')

              },300)

            }else {


              jfShowTips.toastShow({'text':res.data.message});

              boxShow.checkHide('active_box');
            }

          }.bind(this))
          .catch(function (error) {

          }.bind(this))

      }

    }
  }
</script>



<style lang="less">
  @import './activeBox.less';
</style>



