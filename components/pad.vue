<template>
  <div class="content">
    <p>Our Products</p>
    <div class="box center">
      <div class="pad">
        <ProductCard
          :src="resourceDirectory"
          title="数据资源目录"
          :text="Data.resourceDirectory.text"
          :enterURL="Data.resourceDirectory.enterURL"
          :detailURL="Data.resourceDirectory.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataModel"
          title="数据模型管理"
          :text="Data.dataModel.text"
          :enterURL="Data.dataModel.enterURL"
          :detailURL="Data.dataModel.detailURL"
        ></ProductCard>
        <ProductCard
          :src="metaData"
          title="元数据管理"
          :text="Data.metaData.text"
          :enterURL="Data.metaData.enterURL"
          :detailURL="Data.metaData.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataStandard"
          title="数据标准管理"
          :text="Data.dataStandard.text"
          :enterURL="Data.dataStandard.enterURL"
          :detailURL="Data.dataStandard.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataQuality"
          title="数据质量管理"
          :text="Data.dataQuality.text"
          :enterURL="Data.dataQuality.enterURL"
          :detailURL="Data.dataQuality.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataSecurity"
          title="数据安全管理"
          :text="Data.dataSecurity.text"
          :enterURL="Data.dataSecurity.enterURL"
          :detailURL="Data.dataSecurity.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataLifeCycle"
          title="数据生命周期管理"
          :text="Data.dataLifeCycle.text"
          :enterURL="Data.dataLifeCycle.enterURL"
          :detailURL="Data.dataLifeCycle.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataFactory"
          title="数据产品工厂"
          :text="Data.dataFactory.text"
          :enterURL="Data.dataFactory.enterURL"
          :detailURL="Data.dataFactory.detailURL"
        ></ProductCard>
        <ProductCard
          :src="outerData"
          title="外部数据管理"
          :text="Data.outerData.text"
          :enterURL="Data.outerData.enterURL"
          :detailURL="Data.outerData.detailURL"
        ></ProductCard>
        <ProductCard
          :src="dataDevelop"
          title="数据开发平台"
          :text="Data.dataDevelop.text"
          :enterURL="Data.dataDevelop.enterURL"
          :detailURL="Data.dataDevelop.detailURL"
        ></ProductCard>
        <ProductCard
          :src="BIPlat"
          title="BI平台"
          :text="Data.BIPlat.text"
          :enterURL="Data.BIPlat.enterURL"
          :detailURL="Data.BIPlat.detailURL"
        ></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/image/1.png"
import image2 from "../assets/image/2.png"
import image3 from "../assets/image/3.png"
import image4 from "../assets/image/4.png"
import image5 from "../assets/image/5.png"
import image6 from "../assets/image/6.png"
import image7 from "../assets/image/7.png"
import image8 from "../assets/image/8.png"
import image9 from "../assets/image/9.png"
import image10 from "../assets/image/10.png"
import image11 from "../assets/image/11.png"

import data from "../assets/data/frontPageData.js"
import ProductCard from "./product-card.vue"

export default {
  components: {
    ProductCard
  },
  computed: {
    resourceDirectory: () => image1,
    dataModel: () => image2,
    metaData: () => image3,
    dataStandard: () => image4,
    dataQuality: () => image5,
    dataSecurity: () => image6,
    dataLifeCycle: () => image7,
    dataFactory: () => image8,
    outerData: () => image9,
    dataDevelop: () => image10,
    BIPlat: () => image11,
    data: () => data,
    Data: () => data.data
  }
}
</script>



<style>

.content {
  position: relative;
  height: 1552px;
  width: 100%;
  background: rgb(248, 248, 248);
}

.content p {
  padding-top: 80px;
  font-size: 36px;
  color: #5a5a5a;
  text-align: center;
}

.content .box {
  width: 1140px;
  height: 1452px;
  background: rgb(248, 248, 248);
}

.content .box .pad {
  width: 1150px;
  height: 1352px;
  padding-top: 30px;
  padding-bottom: 50px;
  background: rgb(248, 248, 248);
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
}
</style>


