<template>
  <div class="footer">
    <p>Copyright&nbsp;&copy;&nbsp;{{ name }}&nbsp;&nbsp;&nbsp;2018-2019&nbsp;&nbsp;&nbsp;粤ICP备18067420号</p>
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
