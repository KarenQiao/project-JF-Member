
<template>
  <div>

    <div><input type="text" placeholder="请输入姓名" v-model="username"/></div>
    <div><input type="password" placeholder="请输入密码" v-model="pasd"/></div>
    <div><button @click="loginFn">点击</button></div>


  </div>

</template>

<script>

  import API from '../assets/api'


  export default {
    name:'login',

    data(){

      return{
        username:'',

        pasd:''
      }
    },

    methods:{

      loginFn(){

        let params={

          mobile:this.username,

          password:this.pasd,

          code:''

        };

        API.postFn(API.login,params).then(function (res) {

          console.log(res)

        })
          .catch(function (error) {

          })

      }

    }
  }
</script>
