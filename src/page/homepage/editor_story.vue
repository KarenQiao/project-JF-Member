<template>


  <div class="Jf_Member_Homepage all_edit_story">
    <div class="editor_reccomed normal_title">
      <div class="reccomed_list">
        <a class="member_left_center" v-for="item in dataList" :href="item.url+'/'+item.id">

          <p class="pic"> <img v-lazy="item.theFigureUrl"></p>

          <p>
            <span class="content">{{item.theTitle}}</span>
            <span class="ent">{{item.label}}</span>
          </p>
        </a>

    <!--    <a class="member_left_center">
          <p class="pic"> <img src="../../../static/images/list2.png"></p>

          <p>
            <span class="content">十一黄金周去哪里，上嘉会员，体验精品路线一黄金周去哪里，上嘉会员，体验精</span>
            <span class="ent">现代国旅</span>
          </p>
        </a>

        <a class="member_left_center">
          <p class="pic"> <img src="../../../static/images/list1.png"></p>

          <p>
            <span class="content">日本NO.1甜品品牌故事，大家都爱的的甜品</span>
            <span class="ent">上海快孚</span>
          </p>
        </a>

        <a class="member_left_center">
          <p class="pic"> <img src="../../../static/images/list2.png"></p>

          <p>
            <span class="content">十一黄金周去哪里，上嘉会员，体验精品路线一黄金周去哪里，上嘉会员，体验精</span>
            <span class="ent">现代国旅</span>
          </p>
        </a>-->
      </div>
    </div>
    <back-home></back-home>
  </div>

</template>

<script>
  import editorStory from '../../components/homepage/reccomed.vue'

  import backHome from '../../components/backHome.vue'

  import API from '../../assets/api'

  export default {

    name:'allEditStory',

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

      'editorStory':editorStory,
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
