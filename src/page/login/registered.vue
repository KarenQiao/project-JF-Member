<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/logo1.png"></span>
        <input type="tel" placeholder="请输入电话号码"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/logo1.png"></span>
        <input type="tel" placeholder="请输入验证码"/>
        <button class="getCode" id="getCode">获取验证码</button>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/logo1.png"></span>
        <input type="password" placeholder="请设置密码"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/logo1.png"></span>
        <input type="tel" placeholder="请再次确认密码"/>
      </label>


      <div>
        <button class="go_register">立即注册</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:'registered'
  }
</script>
