<template>
  <div>
    <NavBlock></NavBlock>
    <nuxt />
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import NavBlock from "../components/nav-block.vue"
import FooterBlock from "../components/footer-block.vue"

export default {
  components: {
    NavBlock,
    FooterBlock,
  }
}
</script>
