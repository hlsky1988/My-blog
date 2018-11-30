<template>
  <section class="container">
    <!-- <navLeft/> -->
    <!-- 4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/>
    4544564654 <br/> -->
    <div ref="text" class="text" v-html="markdown"></div>
    <!-- <Icon class="goTop" type="ios-arrow-up" size='36'/> -->

  </section>
</template>

<script>
import navLeft from '~/components/navLeft.vue'

import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/monokai-sublime.css'
// import '~/static/css/code.css'
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
    // return hljs.highlightAuto(code).value;
  }
})

export default {
  asyncData ({ params }) {
    // return axios.get('http://127.0.0.1:3000/maekdown/img-upload.md')
    return axios.get('http://127.0.0.1:3000/maekdown/iview.md')
    .then((res) => {
      var markdown = marked(res.data,{ sanitize: false })
      // console.log(markdown);
      return { markdown }
    })
  },
  components: {
    navLeft
  },
  data(){
    return {
      
    }
  },
  mounted() {
    // this.$axios.get('/maekdown/export.md')
    // this.$axios.get('/maekdown/iview.md')
    // this.$axios.get('/maekdown/img-upload.md')
    // .then( (response)=> {
      // console.log(response);
      // this.$refs.text.innerHTML = marked(response.data,{ sanitize: false })
    // })
    function pre() {
        $('pre').addClass('line-numbers');
        var prism = document.createElement('script');
        prism.src = '/prism/prism.js';
        document.documentElement.appendChild(prism)
      }

      pre();
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
    line-height 1.5;
    &:hover 
      box-shadow: 1px 1px 10px 1px #d9dbde;

</style>
