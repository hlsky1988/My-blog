<template>
  <div>
    <nav-top/>

    <div class="container">
      <personal/>

      <div class="main">
        <nuxt/>
        <Page class="page" :current="1" :total="30" size="small" />
      </div>
    </div>

    <BackTop :right="100" :bottom="100"></BackTop>
  </div>
</template>

<script>
import navTop from '~/components/navTop.vue'
import personal from '~/components/personal.vue'

export default {
  data() {
    return {}
  },
  components: {
    navTop,
    personal
  },
  mounted() {
    ;(function() {
      var script = document.createElement('script')
      var script2 = document.createElement('script')
      $(script).attr('src','https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js').attr('color','0,0,255').attr('opacity','0.6').attr('zIndex','-2').attr('count','99').appendTo('body');
      // $(script2).attr('src','http://cdn.atool.org/res/ribbon.min.js').appendTo('body')
    })()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body 
  font-size: 14px;

.container 
  width 1200px
  min-height 600px
  margin 0 auto
  position relative
  box-sizing border-box
  .main 
    width 880px
    margin 50px 300px 0 0



.page
  text-align: center;
  margin-top: 40px;

</style>
