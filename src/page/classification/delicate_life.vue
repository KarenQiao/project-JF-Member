<template>

  <div class="content_plate">

    <div class="life_top_plate"><img src="../../../static/images/delicate_life/img_delicate_life_top.png"/></div>

    <div class="life_details_font"><img src="../../../static/images/delicate_life/img_delicate_lifefont.png"/></div>

  <!--  <a class="life_details_plate" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/delicate_life/img_delicate_life01.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/delicate_life/img_delicate_life02.png"/></a>
-->
    <a class="life_details_plate" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/delicate_life/img_delicate_life001.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/delicate_life/img_delicate_life002.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/delicate_life/img_delicate_life003.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[3].url:''"><img src="../../../static/images/delicate_life/img_delicate_life004.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[4].url:''"><img src="../../../static/images/delicate_life/img_delicate_life005.png"/></a>

    <a class="life_details_plate" :href="dataList.length>0?dataList[5].url:''"><img src="../../../static/images/delicate_life/img_delicate_life006.png"/></a>

  </div>

</template>



<script>

  import API from '../../assets/api'

  export default {

    data() {
      return{

        id:'',

        page:1,

        dataList:''

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
