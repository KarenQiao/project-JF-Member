<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" readonly v-model="mobileNo"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入新密码" v-model="newPwd" maxlength="20"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请再次确认密码" v-model="reNewPwd" maxlength="20"/>
      </label>


      <div>
        <button class="go_register" @click="checkPasd">确认</button>
      </div>
    </div>
  </div>

</template>

<script>

  import API from '../../assets/api';

  export default {
    name:'accountSafety',

    data(){

      return{

        mobileNo:'',

        userId:'',

        newPwd:'',

        reNewPwd:'',

        smsCode:''

      }

    },

    mounted(){

    },

    methods:{


    }
  }
</script>
