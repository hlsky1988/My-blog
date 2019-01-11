<template>
  <Affix>
    <header>
      <Menu class="navTop" mode="horizontal" :theme="theme">
        <a href="/">
          <span class="logo">Aming's blog</span>
        </a>
        <nuxt-link v-for="(item, index) in nav" :key="index" :to="item.link">
          <MenuItem :class="index==0?'home':''" :name='index'>{{ item.name }}</MenuItem>
        </nuxt-link>
      </Menu>
    </header>
  </Affix>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      nav:process.env.navtop,
      
    }
  },
  mounted() {

  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@font-face {
  font-family: 'ZefaniStencil-Regular';
  src: url("~/font/ZefaniStencil-Regular.otf");
}

header
  background-color #edffed
  background-color #fff
  .navTop
    background-color #edffed
    background-color #fff
    width 1200px
    position relative
    margin 0 auto
    .home
      margin-left 50%
    .logo
      font-family 'ZefaniStencil-Regular'
      font-size 30px
      position absolute
      top 0
      left 0


.ivu-menu-horizontal.ivu-menu-light:after
  height 0

</style>