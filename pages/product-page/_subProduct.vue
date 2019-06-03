<template>
  <div class="world">
    <p id="sonTitle">{{ dictionary[routeParams] }}</p>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  props: {
    dictionary: Object,
    routeParams: String,
  }
}
</script>
