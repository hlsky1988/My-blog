<template>
  <Affix>
    <Menu class="navTop" mode="horizontal" :theme="theme" active-name="0">

      <nuxt-link v-for="(item, index) in nav" :key="index" :to="item.link">
        <MenuItem :class="index==0?'home':''" :name='index'>{{ item.name }}</MenuItem>
      </nuxt-link>

    </Menu>
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
.navTop
  min-width 1200px
  .home
    margin-left 50%

</style>