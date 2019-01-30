<template>
  <div class="footer">
    <p>Copyright&nbsp;&copy;&nbsp;{{ name }}&nbsp;&nbsp;&nbsp;2018-{{ year }}&nbsp;&nbsp;&nbsp;{{ icp }}</p>
    <p>Powered by Vue & Nuxt</p>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed:{
    name:function() {
      return this.$store.state.title
    },
    year:function() {
      return new Date().getFullYear()
    },
    icp:function() {
      return this.$store.state.icp
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  text-align center
  height 80px
  background-color #1f7994
  padding-top 22px
  p
    color #fff
    font-weight 700
</style>
