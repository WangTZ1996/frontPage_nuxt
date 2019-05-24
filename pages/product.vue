<template>
  <div class="world">
    <div class="productMsg">
      <span class="title">
        {{ this.$route.name.split("-")[1] === 'resourceDirectory' ? '数据资源目录' : (
        this.$route.name.split("-")[1] === 'dataModel' ? '数据模型管理' : (
        this.$route.name.split("-")[1] === 'metaData' ? '元数据管理' : (
        this.$route.name.split("-")[1] === 'dataStandard' ? '数据标准管理' : (
        this.$route.name.split("-")[1] === 'dataQuality' ? '数据质量管理' : (
        this.$route.name.split("-")[1] === 'dataSecurity' ? '数据安全管理' : (
        this.$route.name.split("-")[1] === 'dataLifeCycle' ? '数据生命周期' : (
        this.$route.name.split("-")[1] === 'dataFactory' ? '数据产品工厂' : (
        this.$route.name.split("-")[1] === 'outerData' ? '外部数据管理' : (
        this.$route.name.split("-")[1] === 'dataDevelop' ? '数据开发平台' : (
        this.$route.name.split("-")[1] === 'BIPlat' ? 'BI平台' : '产品页面'))))))))))
        }}
      </span>
      <span class="bgImg"></span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
let pageName;

export default {
  computed: {
    pathName() {
      this.$route.name.split("-")[1] === "resourceDirectory"
        ? "数据资源目录"
        : this.$route.name.split("-")[1] === "dataModel"
        ? "dataModel"
        : "";
    }
  },
  data() {
    return {
      resourceDirectory: "数据资源目录"
    };
  }
};
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
  border-bottom: 2px solid #f40;
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
