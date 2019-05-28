<template>
  <div class="world">
    <div class="productMsg">
      <span class="title">{{ dictionary[routeParams] }}</span>
      <span class="bgImg"></span>
    </div>
      <nuxt-child :dictionary="dictionary" :routeParams="routeParams"></nuxt-child>
  </div>
</template>

<script>
export default {
  computed: {
    routeParams: function() {
      return this.$route.params.subProduct === undefined ? 
      'product' : this.$route.params.subProduct
    },
  },
  data() {
    return {
      dictionary: {
        resourceDirectory: "数据资源目录",
        dataModel: "数据模型管理",
        metaData: "元数据管理",
        dataStandard: "数据标准管理",
        dataQuality: "数据质量管理",
        dataSecurity: "数据安全管理",
        dataLifeCycle: "数据生命周期",
        dataFactory: "数据产品工厂",
        outerData: "外部数据管理",
        dataDevelop: "数据开发平台",
        BIPlat: "BI平台",
        product: "产品页面",
      },
    }
  },
}
</script>

<style scoped>
.world {
  min-height: 800px;
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
