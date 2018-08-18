

<template>
  <div class="new_product normal_title">

    <div class="title member_between_center">
      <span>主编推荐</span>
      <a  @click="$router.push('/newProduct')">更多</a>
    </div>

    <div class="pro_list">

      <div class="single_pro member_between_center">

        <div>
          <p class="pro_name">电子血压测量机一体机</p>
          <p class="pro_tips">嘉会员专享</p>
          <p class="price"><span>￥80.00</span>+<span>888积分</span></p>
        </div>

        <div class="pro_pic">
          <img src="../../../static/images/pro1.png">
        </div>


      </div>

      <div class="all_pro member_left_center">

        <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>

        <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>

        <a >
          <p><img src="../../../static/images/pro2.png"></p>
          <p class="pro_title">医用消毒纸巾</p>
          <p class="golden_text">888积分</p>
        </a>



      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name:'newProduct'
  }
</script>
