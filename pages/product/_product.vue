<template>
  <div class="world">
    <p id="sonTitle">{{ dictionary[routeParams] }}</p>
    <p class="productDetails">{{ details }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    routeParams: function() {
      return this.$route.params.product === undefined
        ? "product"
        : this.$route.params.product
    },
  },
  data() {
    return {
      details: "",
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
  mounted() {
    let n = this.$route.path.split("/").length - 1
    this.$route.path.split("/")[n] === "details"
      ? (this.details = "详情")
      : (this.details = "")
  }
}
</script>