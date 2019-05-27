<template>
  <div :class="{ navBackground : $route.path !== '/' }" class="nav">
    <div class="title center">
      <span>
        <span class="logo">
          <img :src="imgLogo" class="logoImg">
        </span>
        <span class="name">
          <span>东方金信数据资产管理平台</span>
        </span>
      </span>
      <div class="list">
        <ul class="right">
          <li class="option">
            <nuxt-link to="/" class="link">首页</nuxt-link>
          </li>
          <li class="option">
            <nuxt-link to="/product" class="link">产品</nuxt-link>
          </li>
          <li class="option">
            <nuxt-link to="/news" class="link">新闻</nuxt-link>
          </li>
          <li class="option">
            <nuxt-link to="/dataStructure" class="link">数据架构</nuxt-link>
          </li>
          <li class="option">
            <nuxt-link to="/organization" class="link">组织架构</nuxt-link>
          </li>
        </ul>
        <div class="letterBox">
          <div class="letter">
            <nuxt-link to="/message">
              <img :src="img15">
            </nuxt-link>
            <div>6</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img15 from "../assets/image/15.png"
import imgLogo from "../assets/image/logo.png"

export default {
  computed: {
    img15: () => img15,
    imgLogo: () => imgLogo
  }
};
</script>

<style scoped>

.nav {
  position: fixed;
  top: 0px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  padding: 11px 0px;
}

.navBackground {
  position: fixed;
  top: 0px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 1) !important;
  z-index: 100;
  padding: 11px 0px;
}

.nav .title {
  height: 50px;
  width: 1094px;
}

.nav .title .logo {
  height: 50px;
}

.nav .title .logo .logoImg {
  padding-top: 7px;
  width: 34px;
  height: 34px;
}

.nav .title .name {
  position: absolute;
  padding-left: 9px;
  color: #fff;
  line-height: 50px;
}

.nav .title .name span {
  font-size: 18px;
  /* vertical-align: center; */
}

.nav .title .list {
  float: right;
  display: flex;
  align-items: center;
}

.nav .title .list .right {
  display: inline-block;
}

.nav .title .list .right .option {
  display: inline-block;
  padding: 0px 30px;
  line-height: 50px;
  color: #fff;
}

.nav .title .list .right .option .link {
  color: #fff;
  font-size: 18px;
}

.nav .title .list .right .option .link:hover {
  color: #477de9;
  font-size: 18px;
}

.nav .title .list .letterBox {
  display: inline-block;
}

.nav .title .list .right .letter {
  display: table-cell;
  vertical-align: middle;
}

.nav .title .list .letter img {
  width: 26px;
  height: 20px;
}

.nav .title .list .letter div {
  position: absolute;
  top: 18px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  margin-left: 20px;
  color: #fff;
  text-align: center;
  font-size: 10px;
}
</style>

