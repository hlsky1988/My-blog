<template>
  <div>
    <Menu class="navTop" mode="horizontal" :theme="theme">
      <MenuItem class="home" name="1">
        首页
      </MenuItem>
      <MenuItem name="2">
        归档
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.navTop
  min-width 1200px
  .home
    margin-left 50%

</style>