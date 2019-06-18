<template>
  <div>
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
              <nuxt-link to="/product-page" class="link">产品</nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/news-page" class="link">新闻</nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/data-Structure-page" class="link">数据架构</nuxt-link>
            </li>
            <li class="option">
              <nuxt-link to="/organization-page" class="link">组织架构</nuxt-link>
            </li>
          </ul>
          <div class="settingBox">
            <img class="setting" :src="setting" >
              <div class="settingList">
              <div class="itemPad">
                <div class="listItem"><a href="http://10.1.1.176:20024">流程IDE</a></div>
                <div class="listItem"><a href="">用户</a></div>
              </div>
            </div>
          </div>
          <div class="letterBox">
            <div class="letter">
              <nuxt-link to="/message-page">
                <img :src="img15">
              </nuxt-link>
              <div>6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt/>
    <div class="footer">
      <div class="present center">
        <div class="footerTitle">
          <p>关于东方金信</p>
        </div>
        <div class="footerText">
          <p>北京东方金信科技有限公司（后简称东方金信）成立于2013年2月，是一家专注于大数据平台和大数据解决方案的国内领先企业，拥有ISO9001和CMMI3认证，是首批通过工业和信息化部数据中心大数据能力和性能认证的三家企业之一，参与和编写了中国大数据标准和安全纲要，参与编写区域大数据评价标准和大数据十三五规划等顶层设计纲要，中国数据中心联盟理事单位，中国大数据产业生态联盟理事单位，中国大数据50强企业，IBM中国区大数据战略合作伙伴。</p>
        </div>
        <div class="msg">
          <p>邮箱：dongfangjinxin@seaboxdata.com</p>
        </div>
        <div class="msg">
          <p>地址：北京市东城区白桥大街15号嘉禾国信大厦9层</p>
        </div>
        <div class="copyright">
          版权所有 Copyright &copy; 2013-2019 北京东方金信科技有限公司 Beijing Eastern Jin Technology
          Ltd.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img15 from "../assets/image/15.png"
// import login from ""
import imgLogo from "../assets/image/logo.png"
import setting from "../assets/image/gearWhite.png"

export default {
  computed: {
    img15: () => img15,
    imgLogo: () => imgLogo,
    setting: () => setting,
  },
  data () {
    return {
      option1: "选项1",
      option2: "选项2",
    }
  }
} 
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
}

.nav .title .list {
  position: relative;
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
  vertical-align: middle;
}

.nav .title .list .settingBox {
  position: relative;
  padding-right: 30px;
}

.nav .title .list .settingBox .setting {
  z-index: 11;
  width: 24px;
  height: 24px;
}

.nav .title .list .settingBox:hover .settingList {
  position: absolute;
  height: 74px;
  padding-top: 22px;
  right: 0;
}

.nav .title .list .settingBox .settingList .itemPad {
  display: none;
}

.nav .title .list .settingBox:hover .settingList .itemPad{
  display: inherit;
  color:#fff;
  background: #001529;
  line-height: 37px;
  border-radius: 5px;
  overflow: hidden;
}

.nav .title .list .settingBox:hover .settingList .itemPad a {
  color: #fff;
}

.nav .title .list .settingBox .settingList .itemPad .listItem{
  white-space: nowrap;
  padding: 0 2em;
  min-width: 100px;
}

.nav .title .list .settingBox .settingList .itemPad .listItem:hover {
  background: #477de9;
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

.nav .title .list .login {
  background: #fff;
}

.footer {
  position: relative;
  height: 350px;
  width: 100%;
  background: #444;
}

.footer .present {
  position: relative;
  width: 1094px;
  height: 350px;
  background: #444;
  color: #eee;
}

.footer .present .footerTitle {
  padding: 30px 0px;
  font-size: 20px;
}

.footer .present .footerText {
  font-size: 13px;
  line-height: 24px;
}

.footer .present .msg {
  padding-top: 15px;
  font-size: 14px;
}

.footer .present .copyright {
  padding-top: 46px;
  text-align: center;
  font-size: 14px;
}
</style>

