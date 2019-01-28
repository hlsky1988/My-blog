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
    <BackTop class="backTop" :right="100" :bottom="100"></BackTop>
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
      $(script) .attr( 'src', 'https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js' ) .attr('color', '255,0,0') .attr('opacity', '0.6') .attr('zIndex', '-2') .attr('count', '99') .appendTo('body')
    })()
  },
  methods: {
    
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body {
  font-size: 14px;
  background-color: #1f7994 !important;
}

.container {
  width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  .main {
    width: 880px;
    margin: 50px 0;
  }
}

.backTop {
  border-radius: 20px;
  overflow: hidden;

  &:hover, .ivu-back-top-inner:hover {
    background-color: #ff4d3a;
  }
}

.ivu-icon-ios-arrow-up:before {
  font-weight: 700;
}

.ivu-back-top i {
  padding: 8px 8px !important;
}
</style>
