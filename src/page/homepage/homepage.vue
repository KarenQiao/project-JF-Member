

<template>

  <div class="Jf_Member_Homepage">

    <div class="member_top member_between_center">

      <div class="member_left member_left_center">
        <p class="member_logo"><img src="../../../static/images/logo.jpg"></p>
        <p>
          <span class="member_name">{{mobileNo}}</span>
          <span class="member_score">568积分</span>
        </p>
      </div>

      <div class="member_right member_center">
        <span class="bg_light"></span>
        <img src="../../../static/images/grade_sun.png">
      </div>

    </div>

    <banner :bannerList="bannerList"></banner>

    <cheap-product :cheapPro="cheapProList" :proTitle="cheapProTitle"></cheap-product>

    <member-life :lifeList="lifeList" :lifeTitle="lifeTitle"></member-life>

    <edit-story :editList="editList" :editId="editId"></edit-story>

    <new-product :newPro="newProList" :goodId="newGoodId"></new-product>

    <div class="member_active normal_title">

      <div class="title member_between_center">
        <span>会员专享活动</span>
      </div>

      <div class="active_pic">

        <wc-swiper v-if="activeBanner.length>0"  :autoplay="false">
          <wc-slide v-for="(item,key) in activeBanner" :key="key">

            <a>
              <img v-lazy="item.theFigureUrl">
            </a>
          </wc-slide>

          <!-- <div slot="pagination"></div>
           <div slot="arrowLeft"></div>
           <div slot="arrowRight"></div>-->
        </wc-swiper>
      </div>

    </div>

    <member-footer :showObj="[true,false,false]"></member-footer>

    <coupons-box></coupons-box>

    <active-box></active-box>

  </div>



</template>



<script>

  import banner from '../../components/homepage/banner.vue'

  import cheapProduct from '../../components/homepage/cheapProduct.vue'

  import memberLife from '../../components/homepage/memberLife.vue'

  import editorStory from '../../components/homepage/reccomed.vue'

  import newProduct from '../../components/homepage/newPro.vue'

  import couponsBox from '../../components/homepage/coupons.vue'

  import activeBox from '../../components/homepage/activeBox.vue'

  import memberFooter from '../../components/footer.vue'

  import API from '../../assets/api'

  export default {
    name:'homepage',

    data(){

      return{

        mobileNo:'',

        bannerList:[],

        cheapProTitle:{},

        cheapProList:[],

        lifeList:[],

        lifeTitle:{},

        editList:[],

        editId:0,

        newProList:[],

        newGoodId:0,

        activeBanner:[],

      }
    },

    components: {
      'banner': banner,
      'cheapProduct':cheapProduct,
      'memberLife':memberLife,
      'editStory':editorStory,
      'newProduct':newProduct,
      'memberFooter':memberFooter,
      'couponsBox':couponsBox,
      'activeBox':activeBox
    },

  mounted(){

    let userData= JSON.parse(localStorage.getItem('userData'));

    this.mobileNo=userData.mobileNo;

    this.getBannerList();

    this.getColumn();

    },

    methods:{

      //获取banner
      getBannerList:function () {

      let params={};

      API.getFn(API.listBanner,params).then(function (res) {

        console.log(res);

        if(res.data.code='00000'){

          this.bannerList=res.data.list;

        }else {
          jfShowTips.toastShow({'text':res.data.message});

          return false
        }

      }.bind(this))
        .catch(function (error) {

        }.bind(this))

    },


      //获取栏目
      getColumn:function () {

        let params={

          'type':''
        };

        API.getFn(API.listColumn,params).then(function (res) {

          console.log(res);

          if(res.data.code='00000'){

            this.cheapProTitle=res.data.list[0];

            this.cheapProList=res.data.list[0].themeList[0].goodsList;

            this.lifeTitle=res.data.list[1];

            this.lifeList=res.data.list[1].themeList;

            this.editList=res.data.list[2].themeList;

            this.editId=res.data.list[2].id;

            this.newProList=res.data.list[3].themeList[0].goodsList;

            this.newGoodId=res.data.list[3].id;

            this.activeBanner=res.data.list[4].themeList

          }else {
            jfShowTips.toastShow({'text':res.data.message});

            return false
          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))
      },


    }

  }

</script>
