<template>
  <div>
    <nav-top/>

    <div class="container">
      <personal/>

      <div class="main">
        <nuxt/>
      </div>
    </div>

    <comfoot/>

    <BackTop :right="100" :bottom="100"></BackTop>
  </div>
</template>

<script>
import navTop from '~/components/navTop.vue'
import personal from '~/components/personal.vue'
import comfoot from '~/components/footer.vue'

export default {
  data() {
    return {}
  },
  components: {
    navTop,
    personal,
    comfoot
  },
  mounted() {
    ;(function() {
      var script = document.createElement('script')
      var script2 = document.createElement('script')
      // $(script).attr('src','https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js').attr('color','0,0,255').attr('opacity','0.6').attr('zIndex','-2').attr('count','99').appendTo('body');
      // $(script2).attr('src','http://cdn.atool.org/res/ribbon.min.js').appendTo('body')
      $(script).attr('src','https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js').attr('color','255,0,0').attr('opacity','0.6').attr('zIndex','-2').attr('count','99').appendTo('body');
    })()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body 
  font-size 14px
  // background-color #fffbfb !important
  background-color #edffed !important


.container 
  width 1200px
  min-height 830px
  margin 0 auto
  position relative
  box-sizing border-box
  .main 
    width 880px
    margin 50px 0


</style>
