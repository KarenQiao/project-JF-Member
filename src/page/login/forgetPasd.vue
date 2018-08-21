<template>

  <div class="registered_page">
    <div class="input_box ">

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_phone.png"></span>
        <input type="tel" placeholder="请输入电话号码"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_safety.png"></span>
        <input type="tel" placeholder="请输入验证码"/>
        <button class="getCode" id="getCode">获取验证码</button>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="password" placeholder="请输入薪密码"/>
      </label>

      <label class="member_left_center">
        <span><img src="../../../static/images/icon_locked.png"></span>
        <input type="tel" placeholder="请再次确认密码"/>
      </label>


      <div>
        <button class="go_register">确认</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:'forgetPasd'
  }
</script>
