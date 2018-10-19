<template>
  <div>
    <nav-top/>
    <nuxt/>
    <Page class="page" :current="1" :total="30" size="small" />
  </div>
</template>

<script>
import navTop from '~/components/navTop.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    navTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page
  text-align center
  margin-top 10px
</style>
