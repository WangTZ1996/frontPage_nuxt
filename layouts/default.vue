<template>
  <div>
    <NavBlock></NavBlock>
    <nuxt />
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import NavBlock from "./nav-block.vue"
import FooterBlock from "./footer-block.vue"

export default {
  components: {
    NavBlock,
    FooterBlock,
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
</style>
