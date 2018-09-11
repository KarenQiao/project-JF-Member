<template>

  <div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_top.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_01.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_02.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_03.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_04.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_05.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_06.png"/></div>

    <div class="img_camera_02"><img src="../../../static/images/camera/img_camera_07.png"/></div>

    <a class="img_camera_price" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/camera/img_camera_08.png"/></a>

    <div class="img_camera_01 margin_img"><img src="../../../static/images/camera/img_camera_09.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_10.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_11.png"/></div>

    <div class="img_camera_03"><img src="../../../static/images/camera/img_camera_12.png"/></div>

    <a class="img_camera_price" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/camera/img_camera_13.png"/></a>

    <div class="img_camera_01 margin_img"><img src="../../../static/images/camera/img_camera_14.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_15.png"/></div>

    <div class="img_camera_04"><img src="../../../static/images/camera/img_camera_16.png"/></div>

    <a class="img_camera_price" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/camera/img_camera_17.png"/></a>

    <div class="img_camera_01 margin_img"><img src="../../../static/images/camera/img_camera_18.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_19.png"/></div>

    <div class="img_camera_05"><img src="../../../static/images/camera/img_camera_20.png"/></div>

    <a class="img_camera_price" :href="dataList.length>0?dataList[3].url:''"><img src="../../../static/images/camera/img_camera_21.png"/></a>

    <div class="img_camera_01 margin_img"><img src="../../../static/images/camera/img_camera_22.png"/></div>

    <div class="img_camera_01"><img src="../../../static/images/camera/img_camera_23.png"/></div>

    <div class="img_camera_05"><img src="../../../static/images/camera/img_camera_24.png"/></div>

    <a class="img_camera_price" :href="dataList.length>0?dataList[4].url:''"><img src="../../../static/images/camera/img_camera_25.png"/></a>

    <div class="img_camera_06 margin_img"><img src="../../../static/images/camera/img_camera_26.png"/></div>

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
