<template>
  <div class="head swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="slideText">
          <h1>数据资产价值持续增长</h1>
          <h2>估值</h2>
          <div>
            <span data-number="43780123" class="number"></span>
            <div class="unit">元</div>
          </div>
        </div>
        <img :src="img1">
      </div>
      <div class="swiper-slide">
        <div class="slideText">
          <h1>数据资产持续丰富，目前已经有167个数据来源</h1>
          <div>
            <span data-number="450" class="number"></span>
            <div class="numberUnit">T</div>
            <div class="unit">数据</div>
          </div>
        </div>
        <img :src="img2">
      </div>
      <div class="swiper-slide">
        <div class="slideText">
          <h1>数据资产支撑的内外部应用</h1>
          <div class="roll">
            <span data-number="65" class="number"></span>
            <div class="unit">个</div>
          </div>
        </div>
        <img :src="img3">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { CreateSwiper } from "../assets/rotation"
import img1 from "../assets/image/14.jpeg"
import img2 from "../assets/image/16.jpeg"
import img3 from "../assets/image/17.jpeg"

let swiper1 = new CreateSwiper()

export default {
  computed: {
    img1: () => img1,
    img2: () => img2,
    img3: () => img3
  },

  mounted() {
    swiper1.create()
  }
}
</script>

<style scoped>
.head {
  position: relative;
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  -webkit-background-size: cover;
}

.head .swiper-slide img {
  width: 100%;
  height: 100%;
}

.head .swiper-wrapper .slideText {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 50%;
  margin-top: -100px;
  text-align: center;
  display: inline-block;
  color: #fff;
}

.head .swiper-wrapper h1 {
  font-size: 52px;
  font-weight: 300;
  text-shadow: 0 4px 42px #000;
}

.head .swiper-wrapper h2 {
  font-size: 36px;
  font-weight: 300;
  padding-top: 47px;
}

.head .swiper-wrapper .slideText div {
  padding-top: 30px;
}

.head .swiper-wrapper .number {
  font-size: 100px;
  font-family: Charter-Roman, serif;
  color: #477de9;
  text-align: center;
  vertical-align: middle;
}

.head .swiper-wrapper .numberUnit {
  display: inline-block;
  font-size: 100px;
  font-family: Charter-Roman, serif;
  color: #477de9;
  text-align: center;
  vertical-align: middle;
  padding-top: 0px !important;
}

.head .swiper-wrapper .slideText .roll {
  padding-top: 0px;
}

.head .swiper-wrapper .unit {
  display: inline-block;
  height: 100px;
  line-height: 100px;
  font-size: 36px;
  color: #fff;
  font-family: sans-serif;
  vertical-align: middle;
  padding-left: 29px;
}

.pagination {
  display: inline-block;
  margin: 0 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  /* color: #5a5a5a; */
}

.paginationActive {
  background: #fff;
}

.pagHeight {
  height: 27px;
}

.head .dotBox {
  position: absolute;
  height: 30px;
  width: 100px;
  left: 50%;
  bottom: 0px;
  padding-bottom: 8px;
  margin-left: -50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

.head .dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
}

.head .dot:hover {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}
</style>


