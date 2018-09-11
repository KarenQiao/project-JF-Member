<template>

  <div>

    <div class="life_top_plate"><img src="../../../static/images/delicate_life/img_delicate_life_top.png"/></div>

    <div class="life_details_plate">
      <a class="life_details_img" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/delicate_life/img_delicate_life02.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/delicate_life/img_delicate_life03.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/delicate_life/img_delicate_life04.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[3].url:''"><img src="../../../static/images/delicate_life/img_delicate_life05.png"/></a>
    </div>

    <div class="life_title_img"><img src="../../../static/images/delicate_life/img_delicate_life01.png"/></div>

    <div class="life_details_plate">
      <a class="life_details_img" :href="dataList.length>0?dataList[4].url:''"><img src="../../../static/images/delicate_life/img_delicate_life06.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[5].url:''"><img src="../../../static/images/delicate_life/img_delicate_life07.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[6].url:''"><img src="../../../static/images/delicate_life/img_delicate_life08.png"/></a>
    </div>

    <div class="life_title_img"><img src="../../../static/images/delicate_life/img_delicate_life09.png"/></div>

    <div class="life_details_plate">
      <a class="life_details_img" :href="dataList.length>0?dataList[7].url:''"><img src="../../../static/images/delicate_life/img_delicate_life10.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[8].url:''"><img src="../../../static/images/delicate_life/img_delicate_life11.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[9].url:''"><img src="../../../static/images/delicate_life/img_delicate_life12.png"/></a>

      <a class="life_details_img" :href="dataList.length>0?dataList[10].url:''"><img src="../../../static/images/delicate_life/img_delicate_life13.png"/></a>
    </div>

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
