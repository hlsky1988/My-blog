<template>
  <div>
    <h1 class="title">标题</h1>
    <div class="info">
      发布时间：<span class="date">2017年11月29日</span>
      <Icon type="ios-pricetags-outline" />&nbsp;标签：<span class="tags">vue iview</span>
    </div>
    <div ref="text" class="text" v-html="markdown(data)"></div>
  </div>
</template>

<script>

import marked from 'marked'
// import hljs from 'highlight.js';
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
  props:['data'],
  data() {
    return {}
  },
  mounted() {

    $('pre').addClass('line-numbers')
    var prism = document.createElement('script')
    prism.src = '/prism/prism.js'
    document.documentElement.appendChild(prism)

  },
  methods:{
    markdown:function (data) {
      return marked(data,{ sanitize: false })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.title 
  text-align center
  font-size 36px
.info
  text-align center
  margin-top 10px
  .date 
    margin-right 25px
.text
  padding: 40px;
  // border: 1px solid #d9dbde;
  border-radius: 5px;
  background-color: #fff;
  line-height: 1.5;
  &:hover
    // box-shadow: 1px 1px 10px 1px #d9dbde;
  

</style>
