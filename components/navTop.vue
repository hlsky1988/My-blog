<template>
  <header>
    <Menu class="navTop" mode="horizontal" :theme="theme">
      <nuxt-link to="/">
        <MenuItem class="logo" name="logo">{{ title }}</MenuItem>
      </nuxt-link>
      <nuxt-link v-for="(item, index) in nav" :key="index" :to="item.link">
        <MenuItem :class="index==0?'home':''" :name="index">{{ item.name }}</MenuItem>
      </nuxt-link>
    </Menu>
  </header>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  computed: {
    nav: function() {
      return this.$store.state.navtops
    },
    title: function() {
      return this.$store.state.title
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@font-face {
  font-family: 'ZefaniStencil-Regular';
  src: url('~/font/ZefaniStencil-Regular.otf');
}

header {
  background-color: #fff;

  .navTop {
    width: 1200px;
    position: relative;
    margin: 0 auto;
    font-weight: 700;

    .home {
      margin-left: 50%;
    }

    .logo {
      font-family: 'ZefaniStencil-Regular';
      font-size: 30px;
      position: absolute;
      top: 0;
      left: 0;
      color: #2d8cf0;

      &:hover {
        border-bottom: 0;
      }
    }
  }
}

.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}
</style>