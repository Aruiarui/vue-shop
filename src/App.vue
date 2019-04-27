<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter"/>

  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide"

  export default {
    async mounted() {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')

    },
    components: {
      FooterGuide,

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
