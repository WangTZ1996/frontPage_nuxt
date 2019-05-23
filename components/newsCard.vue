<template>
  <div class="newsCard">
    <span class="newsImg">
      <img :src="img">
    </span>
    <span class="newsText">
      <p>{{ title }}</p>
      <div>
        <span class="author">{{ author }}</span>
        <span class="date">{{ time }}</span>
      </div>
      <div class="text">{{ text }}</div>
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "author", "time", "text", "img"],
}
</script>

<style scoped>
.newsCard {
  min-height: 128px;
  border: 1px solid #c8c8c8;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 298px 1fr;
  grid-template-rows: auto;
}

.newsCard .newsImg {
  display: inline-block;
  width: 298px;
  background: #aaa;
  background-size: cover;
  background-position: center center;
}

.newsCard .newsImg img {
  height: 100%;
}

.newsCard .newsText {
  display: inline-block;
  padding: 10px 33px 15px 37px;
  width: 723px;
  vertical-align: top;
  font-family: "PingFangSC";
  height: auto;
}

.newsCard .newsText p {
  display: inline-block;
  line-height: 25px;
  font-size: 18px;
  color: #5b687b;
  font-family: "PingFangSC";
  padding-bottom: 6px;
}

.newsCard .newsText div {
  line-height: 17px;
  font-size: 12px;
  color: #95a0af;
  font-family: "PingFangSC";
}

.author,
.date {
  padding: 0 10px 0 0;
}

.newsCard .newsText .text {
  height: 60px;
  padding-top: 14px;
  font-size: 12px;
  line-height: 20px;
  color: #95a0af;
  font-family: "PingFangSC", "monospace";
  height: fit-content;
}
</style>


