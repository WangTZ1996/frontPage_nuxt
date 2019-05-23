<template>
  <div>
    <Swiper></Swiper>
    <Mid></Mid>
    <Pad></Pad>
  </div>
</template>

<script>
import Swiper from "./swiper-container.vue"
import Mid from "./mid.vue"
import Pad from "./pad.vue"

export default {
  components: {
    Swiper,
    Mid,
    Pad,
  },
  destroyed() {
    this.$destroy("Swiper")
  }
}
</script>
