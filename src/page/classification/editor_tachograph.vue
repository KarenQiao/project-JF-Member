<template>

  <div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_top.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_01.png"/></div>

    <a class="img_tachograph_price" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/tachograph/img_tachograph_02.png"/></a>

    <div class="img_tachograph_01 margin_tachograph"><img src="../../../static/images/tachograph/img_tachograph_03.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_04.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_05.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_06.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_07.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_08.png"/></div>

    <div class="img_tachograph_01"><img src="../../../static/images/tachograph/img_tachograph_09.png"/></div>

    <div class="img_tachograph_02"><img src="../../../static/images/tachograph/img_tachograph_10.png"/></div>

    <a class="img_tachograph_price" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/tachograph/img_tachograph_13.png"/></a>

    <div class="img_tachograph_01 margin_tachograph"><img src="../../../static/images/tachograph/img_tachograph_11.png"/></div>

    <div class="img_tachograph_03"><img src="../../../static/images/tachograph/img_tachograph_12.png"/></div>

    <a class="img_tachograph_price" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/tachograph/img_tachograph_14.png"/></a>

    <div class="img_tachograph_01 margin_tachograph"><img src="../../../static/images/tachograph/img_tachograph_15.png"/></div>

    <div class="img_tachograph_04"><img src="../../../static/images/tachograph/img_tachograph_16.png"/></div>

    <a class="img_tachograph_price" :href="dataList.length>0?dataList[3].url:''"><img src="../../../static/images/tachograph/img_tachograph_17.png"/></a>

    <div class="img_tachograph_01 margin_tachograph"><img src="../../../static/images/tachograph/img_tachograph_18.png"/></div>

    <div class="img_tachograph_05"><img src="../../../static/images/tachograph/img_tachograph_19.png"/></div>

    <a class="img_tachograph_price" :href="dataList.length>0?dataList[4].url:''"><img src="../../../static/images/tachograph/img_tachograph_20.png"/></a>

    <div class="img_tachograph_06 margin_tachograph"><img src="../../../static/images/tachograph/img_tachograph_21.png"/></div>

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

