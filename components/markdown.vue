<template>
  <div class="wrapper">
    <p class="title">{{data.title}}</p>
    <div class="info">
      <Icon type="ios-clock-outline" />&nbsp;发布时间：<span class="date mr">{{date}}</span>
      <Icon type="ios-pricetags-outline" />&nbsp;标签：
      <span class="tags mr">
        <span class="tag" v-for="(tag, index) in data.tags" :key="index">{{tag}}&nbsp;&nbsp;</span>
      </span>
      <Icon type="ios-eye-outline" />&nbsp;<span class="num">{{data.browse}}</span>次浏览
    </div>
    <div ref="markdown" class="markdown" v-html="data.html"></div>
    <!-- <div ref="markdown" class="markdown" v-html="markdown(data.markdown)"></div> -->
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
  },
  computed: {
    date:function() {
      var date = new Date(this.data.date)
      var year = date.getFullYear()
      var month = date.getMonth()+1
      var day = date.getDate()
      return `${year}年${month}月${day}日`
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrapper
  padding-top 30px
  background-color #fff
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
  // background-color: #fff;
  line-height: 1.5;
  &:hover
    // box-shadow: 1px 1px 10px 1px #d9dbde;
  

</style>
