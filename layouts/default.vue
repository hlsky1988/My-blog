<template>
  <div>
    <nav-top/>
    <nuxt/>
    <Page class="page" :current="1" :total="30" size="small" />
    <BackTop :right='100' :bottom="100"></BackTop>
  </div>
</template>

<script>
import navTop from '~/components/navTop.vue'

export default {
  data() {
    return {}
  },
  components: {
    navTop
  },
  mounted() {
    ;(function() {
      // https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js
      var script = document.createElement('script')
      var script2 = document.createElement('script')
      console.log(script)
      script.src = 'https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js'
      script.color = '0,0,255'
      script.opacity = '0.6'
      script.zIndex = '-2'
      script.count = '99'
      script2.src = 'http://cdn.atool.org/res/ribbon.min.js'
      document.documentElement.appendChild(script)
      // document.documentElement.appendChild(script2)
    })()

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body 
  font-size 14px
.page {
  text-align: center;
  margin-top: 10px;
}
</style>
