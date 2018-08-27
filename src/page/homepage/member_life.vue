<template>
  <div class="all_member_life">

    <a class="life_list" v-for="item in dataList">
        <p>{{item.theTitle}}</p>
        <p>{{item.subtitle}}</p>
      <div>
        <img v-lazy="item.theFigureUrl">
      </div>
    </a>

   <!-- <a class="life_list">

        <p>出游度假</p>
        <p>ON VACATION</p>

        <div>
          <img src="../../../static/images/life2.png">
        </div>
    </a>
    <a class="life_list">
      <p>亲密时光</p>
      <p>CLOSE TIME</p>
      <div>
        <img src="../../../static/images/life1.png">
      </div>
    </a>

    <a class="life_list">

      <p>出游度假</p>
      <p>ON VACATION</p>

      <div>
        <img src="../../../static/images/life2.png">
      </div>
    </a>
    <a class="life_list">
      <p>亲密时光</p>
      <p>CLOSE TIME</p>
      <div>
        <img src="../../../static/images/life1.png">
      </div>
    </a>

    <a class="life_list">

      <p>出游度假</p>
      <p>ON VACATION</p>

      <div>
        <img src="../../../static/images/life2.png">
      </div>
    </a>
    <a class="life_list">
      <p>亲密时光</p>
      <p>CLOSE TIME</p>
      <div>
        <img src="../../../static/images/life1.png">
      </div>
    </a>

    <a class="life_list">

      <p>出游度假</p>
      <p>ON VACATION</p>

      <div>
        <img src="../../../static/images/life2.png">
      </div>
    </a>-->

    <back-home></back-home>


  </div>
</template>

<script>

  import backHome from '../../components/backHome.vue'

  import API from '../../assets/api'


  export default {
    name:'allMemberLife',
    data(){
      return{

        id:'',

        page:1,

        dataList:''

      }
    },

    mounted(){

      this.id=this.$route.params.allId;

      this.getInitList();


    },

    components:{

      'backHome':backHome

    },

    methods:{

      getInitList:function () {

        let params={

          columnId:this.id,

          page:this.page

        };

        API.getFn(API.listTheme,params).then(function (res) {

          console.log(res);

          if(res.data.code='00000'){

            this.dataList=res.data.list;


          }

        }.bind(this))
          .catch(function (error) {

          }.bind(this))


      },



    }
  }
</script>
