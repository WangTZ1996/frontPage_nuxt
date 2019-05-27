<template>
  <div class="item">
    <div class="headline">{{ title }}</div>
    <div class="logoBox">
      <img :src="src" class="itemLogo">
    </div>
    <div class="text">{{ text }}</div>
    <div class="btn">
      <div class="btnBox">
        <nuxt-link :to="enterURL">点击进入</nuxt-link>
      </div>
      <div class="btnBox">
        <nuxt-link :to="detailURL">查看详情</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "src", "enterURL", "detailURL"]
}
</script>

<style scoped>

.item {
  width: 340px;
  height: 300px;
  position: relative;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  transform: scale(1);
  transition: transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28),
    box-shadow 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.12);
}

.item:hover {
  transform: scale(1.09);
  box-shadow: 3px 3px 15px 0 rgba(0, 0, 0, 0.5);
}

.item .headline {
  font-size: 22px;
  color: #555;
  text-align: center;
  padding-top: 20px;
}

.item .logoBox {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 5px;
  height: 70px;
}

.item .text {
  height: 60px;
  padding-right: 26px;
  padding-left: 26px;
  color: #909090;
  font-size: 14px;
  text-align: justify;
  /* font-family: "PingFangSC"; */
}

.item .btn {
  height: 50px;
  padding-top: 20px;
}

.item .btn .btnBox {
  display: inline-block;
  width: 49%;
  text-align: center;
  font-size: 20px;
  padding-top: 26px;
}

.item .btn .btnBox a {
  color: #477de9;
  cursor: pointer;
}
</style>

