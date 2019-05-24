<template>
  <div class="world">
    <P id="sonTitle">数据开发平台</P>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style scoped>
  .world{
    min-height: 800px;
    width: 100%;
  }
  #sonTitle{
    width: 100%;
    font-size: 40px;
    margin: 100px auto;
    text-align: center;
  }
</style>
