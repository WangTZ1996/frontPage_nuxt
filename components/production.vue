<template>
  <div class="world">
    <div class="productMsg">
      <span class="title"></span>
      <span class="bgImg"></span>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.world {
  min-height: 1000px;
  width: 100%;
}
.productMsg {
  margin-top: 72px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
  width: 100%;
  border: 2px solid #f40;
}
.title {
  display: inline-block;
  font-size: 40px;
  margin: 100px 0;
  text-align: center;
  border: 2px solid #000;
}
.bgImg {
  display: inline-block;
  background: orange;
}
</style>
