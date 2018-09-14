<template>
  <div class="editor_reccomed normal_title">

    <div class="title member_between_center">
     <span>主编推荐</span>
      <a @click="$router.push('/editStory/'+editId)">更多</a>
    </div>

    <div class="reccomed_list">

    <a class="member_left_center" v-for="(item,index) in editList.slice(0,2)" :href="item.url+'/'+item.id">
        <p class="pic"> <img v-lazy="item.theFigureUrl"></p>

        <p>
          <span class="content">{{item.theTitle}}</span>
        </p>
      </a>

    </div>
  </div>
</template>


<script>

  export default {
    name:'editor_story',

    data(){
      return{

      }
    },

   props:{

      editList:{
        type:Array,
      },

     editId:{
        type:Number
     }

    }
  }
</script>
