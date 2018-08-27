<template>
  <div id="app">

    <router-view v-wechat-title='$route.meta.title' v-if="!$route.meta.keepAlive"></router-view>

   <!-- <router-view v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view>-->

    <keep-alive>
      <router-view v-wechat-title="$route.meta.title" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
