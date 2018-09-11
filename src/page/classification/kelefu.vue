<template>

  <div>

    <div class="img_banner_plate"><img src="../../../static/images/kelefu/img_banner_01.png"/></div>

    <div class="images_price">
      <a class="img_price_plate" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/kelefu/img_kelefu_01.png"/></a>

      <div class="img_price_plate"><img src="../../../static/images/kelefu/img_kelefu_02.png"/></div>
    </div>

    <div class="img_bottom_plate"><img src="../../../static/images/kelefu/img_kelefu_03.png"/></div>

    <div class="img_banner_plate"><img src="../../../static/images/kelefu/img_banner_02.png"/></div>

    <div class="images_price">
      <a class="img_price_plate" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/kelefu/img_kelefu_04.png"/></a>

      <div class="img_price_plate"><img src="../../../static/images/kelefu/img_kelefu_05.png"/></div>
    </div>

    <div class="img_bottom_plate"><img src="../../../static/images/kelefu/img_kelefu_06.png"/></div>

    <div class="img_banner_plate"><img src="../../../static/images/kelefu/img_banner_03.png"/></div>

    <div class="images_price">
      <a class="img_price_plate" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/kelefu/img_kelefu_07.png"/></a>

      <div class="img_price_plate"><img src="../../../static/images/kelefu/img_kelefu_08.png"/></div>
    </div>

    <div class="img_bottom_plate"><img src="../../../static/images/kelefu/img_kelefu_09.png"/></div>

  </div>

</template>

<script>


  import API from '../../assets/api'

  export default {

    data() {
      return{

        id:'',

        page:1,

        dataList:[]

      }
    },

    mounted(){

      this.id=this.$route.params.id;

      this.getUrl();
    },

    methods:{

      getUrl(){

        let params={

          themeId:this.id,
        };

        API.getFn(API.themeGoods,params)

          .then(function (res) {

            console.log(res);

            if(res.data.code=='00000'){

              this.dataList=res.data.list

              console.log(this.dataList[0].url)

            }else {

              jfShowTips.toastShow({'text':res.data.message})
            }
          }.bind(this))

          .catch(function (error) {

          }.bind(this))



      }



    }

  }

</script>

