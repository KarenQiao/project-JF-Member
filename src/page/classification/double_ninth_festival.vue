<template>

  <div>
    <div class="img_festival_top">
      <img src="../../../static/images/festival/img_festival_top.png"/>
    </div>

    <a class="img_festival_first"  href="#/electronicCard">
      <img src="../../../static/images/festival/img_festival_01.png"/>
    </a>

    <a class="img_festival_second" :href="dataList.length>0?dataList[0].url:''">
      <img src="../../../static/images/festival/img_festival_02.png"/>
    </a>

    <a class="img_festival_third" :href="dataList.length>0?dataList[1].url:''">
      <img src="../../../static/images/festival/img_festival_03.png"/>
    </a>

    <a class="img_festival_four" :href="dataList.length>0?dataList[2].url:''">
      <img src="../../../static/images/festival/img_festival_04.png"/>
    </a>

    <a class="img_festival_five" :href="dataList.length>0?dataList[3].url:''">
      <img src="../../../static/images/festival/img_festival_05.png"/>
    </a>

    <a class="img_festival_thirteen" :href="dataList.length>0?dataList[4].url:''">
      <img src="../../../static/images/festival/img_festival_13.png"/>
    </a>

    <a class="img_festival_six" :href="dataList.length>0?dataList[5].url:''">
      <img src="../../../static/images/festival/img_festival_06.png"/>
    </a>

    <a class="img_festival_seventh" :href="dataList.length>0?dataList[6].url:''">
      <img src="../../../static/images/festival/img_festival_07.png"/>
    </a>

    <a class="img_festival_fourteen" :href="dataList.length>0?dataList[7].url:''">
      <img src="../../../static/images/festival/img_festival_14.png"/>
    </a>

    <a class="img_festival_eighth" :href="dataList.length>0?dataList[8].url:''">
      <img src="../../../static/images/festival/img_festival_08.png"/>
    </a>

    <a class="img_festival_ninth" :href="dataList.length>0?dataList[9].url:''">
      <img src="../../../static/images/festival/img_festival_09.png"/>
    </a>

    <a class="img_festival_ten" :href="dataList.length>0?dataList[10].url:''">
      <img src="../../../static/images/festival/img_festival_10.png"/>
    </a>

    <a class="img_festival_fifteen" :href="dataList.length>0?dataList[11].url:''">
      <img src="../../../static/images/festival/img_festival_15.png"/>
    </a>

    <a class="img_festival_eleven" :href="dataList.length>0?dataList[12].url:''">
      <img src="../../../static/images/festival/img_festival_11.png"/>
    </a>

    <a class="img_festival_twelve" :href="dataList.length>0?dataList[13].url:''">
      <img src="../../../static/images/festival/img_festival_12.png"/>
    </a>
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
