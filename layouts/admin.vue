<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
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

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
