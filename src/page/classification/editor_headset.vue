<template>

  <div>

    <div class="img_top_plate"><img src="../../../static/images/headset/img_headset_top.png"/></div>

    <div class="img_top_plate"><img src="../../../static/images/headset/img_headset_01.png"/></div>

    <div class="headset_img_01"><img src="../../../static/images/headset/img_headset_02.png"/></div>

    <div class="headset_img_02"><img src="../../../static/images/headset/img_headset_03.png"/></div>

    <a class="headset_img_03" :href="dataList.length>0?dataList[0].url:''"><img src="../../../static/images/headset/img_headset_04.png"/></a>

    <div class="headset_img_04"><img src="../../../static/images/headset/img_headset_05.png"/></div>

    <div class="headset_img_02"><img src="../../../static/images/headset/img_headset_06.png"/></div>

    <a class="headset_img_03" :href="dataList.length>0?dataList[1].url:''"><img src="../../../static/images/headset/img_headset_08.png"/></a>

    <div class="headset_img_02"><img src="../../../static/images/headset/img_headset_07.png"/></div>

    <div class="headset_img_05"><img src="../../../static/images/headset/img_headset_09.png"/></div>

    <a class="headset_img_03" :href="dataList.length>0?dataList[2].url:''"><img src="../../../static/images/headset/img_headset_11.png"/></a>

    <div class="headset_img_02"><img src="../../../static/images/headset/img_headset_10.png"/></div>

    <div class="headset_img_06"><img src="../../../static/images/headset/img_headset_12.png"/></div>

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

            }

          }.bind(this))

          .catch(function (error) {

          }.bind(this))



      }



    }

  }

</script>

