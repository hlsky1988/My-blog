<template>
  <div>
    <p class="title">标题</p>
    <div class="info">
      <Icon type="ios-clock-outline" />&nbsp;发布时间：<span class="date mr">2017年11月29日</span>
      <Icon type="ios-pricetags-outline" />&nbsp;标签：
      <span class="tags mr">
        <span class="tag">vue</span>
        <span class="tag">iview</span>
      </span>
      <Icon type="ios-eye-outline" />&nbsp;<span class="num">27041</span>次浏览
    </div>
    <div ref="markdown" class="markdown" v-html="markdown(data)"></div>
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
  font-weight 700
.info
  text-align center
  margin-top 10px
  .mr 
    margin-right 25px
.markdown
  padding: 40px;
  // border: 1px solid #d9dbde;
  border-radius: 5px;
  background-color: #fff;
  line-height: 1.5;
  &:hover
    // box-shadow: 1px 1px 10px 1px #d9dbde;
  

</style>
