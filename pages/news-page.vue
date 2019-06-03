<template>
  <div id="newsBlock">
    <div class="bgImg">
      <div class="text">
        <p>与平煤神马集团、恒申集团签署合资合作协议</p>
        <div>此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引言或者前言，此处是文章的引……</div>
      </div>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <NewsCard :title="item.title" :author="item.author" :time="item.time" :text="item.text"></NewsCard>
      </li>
    </ul>
  </div>
</template>

<script>
import NewsCard from "../components/news-card.vue";
import newsData from "../assets/data/newsData.js";

export default {
  components: {
    NewsCard
  },

  data() {
    return { items: newsData.newsData }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

#newsBlock {
  position: relative;
  width: 1100px;
  height: 1581px;
  margin: 0 auto;
  top: 72px;
}

#newsBlock .bgImg {
  width: 100%;
  height: 538px;
  background: #aaa;
  padding-bottom: 1px;
}

#newsBlock .bgImg .text {
  margin: auto 28px;
  padding-top: 436px;
  color: #fff;
}

#newsBlock .bgImg .text p {
  font-size: 20px;
  line-height: 28px;
  font-family: "PingFangSC", "monospace";
  text-align: justify;
  text-shadow: 0 0 8px #000;
}

#newsBlock .bgImg .text div {
  font-size: 12px;
  line-height: 20px;
  font-weight: "Regular";
  text-align: justify;
  padding-top: 9px;
  text-shadow: 0 0 6px #000;
}
</style>


