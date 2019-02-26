<template>
  <div>
    <no-ssr>
      <nav-top/>
      <nuxt/>
    </no-ssr>
  </div>
</template>

<script>
import navTop from '~/components/navTop.vue'

export default {
  head() {
    return {
      title: `后台管理 - ${this.$store.state.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `后台管理 - ${this.$store.state.title}`
        }
      ]
    }
  },
  data() {
    return {

    }
  },
  components: {
    navTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
