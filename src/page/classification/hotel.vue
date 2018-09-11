<template>

  <div>
    <div class="hotel_img_plate"><img src="../../../static/images/hotel/img_hotel_banner.png"/></div>

    <div class="hotel_img_font"><img src="../../../static/images/hotel/img_hotel_01.png"/></div>

    <div class="hotel_img_02"><img src="../../../static/images/hotel/img_hotel_02.png"/></div>

    <div class="hotel_img_03"><img src="../../../static/images/hotel/img_hotel_03.png"/></div>

    <div class="hotel_img_04"><img src="../../../static/images/hotel/img_hotel_04.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/hotel/img_hotel_05.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/hotel/img_hotel_06.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/hotel/img_hotel_07.png"/></a>
      </div>
    </div>

    <div class="hotel_img_08"><img src="../../../static/images/hotel/img_hotel_08.png"/></div>

    <div class="hotel_img_09"><img src="../../../static/images/hotel/img_hotel_09.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img" :href="dataList.length>0?dataList[3].url:''"><img src="../../../static/images/hotel/img_hotel_10.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[4].url:''"><img src="../../../static/images/hotel/img_hotel_11.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[5].url:''"><img src="../../../static/images/hotel/img_hotel_12.png"/></a>
      </div>
    </div>

    <div class="hotel_img_13"><img src="../../../static/images/hotel/img_hotel_13.png"/></div>

    <div class="hotel_img_14"><img src="../../../static/images/hotel/img_hotel_14.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img" :href="dataList.length>0?dataList[6].url:''"><img src="../../../static/images/hotel/img_hotel_15.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[7].url:''"><img src="../../../static/images/hotel/img_hotel_16.png"/></a>
      </div>
    </div>

    <div class="hotel_img_17"><img src="../../../static/images/hotel/img_hotel_17.png"/></div>

    <div class="look_details_plate">
      <div class="look_details_part">
        <a class="look_details_img" :href="dataList.length>0?dataList[8].url:''"><img src="../../../static/images/hotel/img_hotel_18.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[9].url:''"><img src="../../../static/images/hotel/img_hotel_19.png"/></a>

        <a class="look_details_img" :href="dataList.length>0?dataList[10].url:''"><img src="../../../static/images/hotel/img_hotel_20.png"/></a>
      </div>
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

