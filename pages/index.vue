<template>
  <section class="container">
    <!-- <navLeft/> -->
    <!-- 4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/> -->
    <div ref="text" class="text"></div>
    <!-- <Icon class="goTop" type="ios-arrow-up" size='36'/> -->

  </section>
</template>

<script>
import navLeft from '~/components/navLeft.vue'

import marked from 'marked'
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/monokai-sublime.css'
import '~/static/css/code.css'
let renderMD = new marked.Renderer()

marked.setOptions({
  renderer: renderMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
})

export default {
  components: {
    navLeft
  },
  data(){
    return {
      
    }
  },
  mounted() {
    // this.$refs.text.innerHTML = marked('#text \n - 00 \n ``` \n 4454 \n ```', { sanitize: true })
    // this.$axios.get('/maekdown/export.md')
    this.$axios.get('/maekdown/iview.md')
    .then( (response)=> {
      console.log(response);
      this.$refs.text.innerHTML = marked(response.data,{ sanitize: false })
    })
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 1200px
  // background-color #f5f2ed
  margin 110px auto 0
  position relative
  // padding-left 280px
  .goTop
    color #fff
    background-color #333
    cursor pointer
    position fixed
    bottom 100px
    right 100px
  .text
    padding 40px
    border 1px solid #d9dbde
    border-radius 5px
    background-color #fff
    &:hover 
      box-shadow: 1px 1px 10px 1px #d9dbde;
      transform translateY(-1px)

</style>
