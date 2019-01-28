<template>
  <!-- <Affix> -->
    <header>
      <Menu class="navTop" mode="horizontal" :theme="theme">
        <!-- <a href="/">
          <span class="logo">Aming's blog</span>
        </a> -->
        <nuxt-link v-for="(item, index) in nav" :key="index" :to="item.link">
          <MenuItem class="logo" v-if="index == 0" :name='index'>Aming's blog</MenuItem>
          <MenuItem :class="index==1?'home':''" :name='index' v-if="index !== 0">{{ item.name }}</MenuItem>
        </nuxt-link>
      </Menu>
    </header>
  <!-- </Affix> -->
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      nav:[],
      title:null,
    }
  },
  beforeMount(){
    let upDate = localStorage.getItem('upDate')
    let now = new Date().getTime()
    if (!upDate || (now-upDate)>1000*60*10) {
      // let url = '//aming660.cn:8080/api/init'
      let url = process.client?'/api/init':`${location.href}/api/init`
      this.$axios.get(url).then(function(result) {
        if (result.status == 200) {
          localStorage.setItem('title',result.data.title)
          localStorage.setItem('tags',JSON.stringify(result.data.tags))
          result.data.navtops.unshift({name:'logo',link:'/'})
          localStorage.setItem('navtops',JSON.stringify(result.data.navtops))
          localStorage.setItem('friendlinks',JSON.stringify(result.data.friendlinks))
          localStorage.setItem('upDate',new Date().getTime())
        }
      })
    }
    this.nav = JSON.parse(localStorage.getItem('navtops'))
    this.title = localStorage.getItem('title')
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
  background-color #fff
  .navTop
    width 1200px
    position relative
    margin 0 auto
    font-weight 700
    .home
      margin-left 50%
    .logo
      font-family 'ZefaniStencil-Regular'
      font-size 30px
      position absolute
      top 0
      left 0
      color #2d8cf0
      &:hover
        border-bottom 0


.ivu-menu-horizontal.ivu-menu-light:after
  height 0

</style>