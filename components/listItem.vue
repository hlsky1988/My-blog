<template>
  <div class="index-list-item" @click="itemClick">
    <div class="title">{{item.title}}</div>
    <div class="info">
      <Icon type="ios-clock-outline"/>&nbsp;发布时间 :
      <span class="date mr">{{date}}</span>
      <Icon type="ios-pricetags-outline"/>&nbsp;标签 :
      <span class="tags mr">
        <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{tag}}&nbsp;&nbsp;</span>
      </span>
      <Icon type="ios-eye-outline"/>&nbsp;
      <span class="num">{{item.browse}}</span>次
    </div>
    <p class="brief">{{item.brief}}</p>
    <!-- <img src="~/static/images/tags/css.webp" alt class="type"> -->
    <img :src="src" alt class="type">
  </div>
</template>

<script>
export default {
  props:{
    item:Object,
    index:Number
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.item);
  },
  computed: {
    date:function() {
      var date = new Date(this.item.date)
      var year = date.getFullYear()
      var month = date.getMonth()+1
      var day = date.getDate()
      return `${year}年${month}月${day}日`
    },
    src:function() {
      let src = `/images/tags/${this.item.tags[0]}.webp`
      return src
    }
  },
  methods: {
    itemClick:function() {
      window.location.href = `/${this.item.type}/${this.item._id}`
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index-list-item 
  min-height 140px
  position relative
  padding-left 2em
  padding-bottom 15px
  background-color rgba(255, 255, 255, 0.5)
  margin-top 30px
  &:hover
    background-color #fff
    border-radius 5px
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    cursor pointer
  .title 
    font-size 32px
    font-weight 700
    line-height 2
    color #333
  .info
    font-family 'Lora','Times New Roman',serif
    font-size 16px
    font-style italic
    font-weight 700
  p.brief
    font-size 14px
    line-height 2
    color #666
    width 70%
    margin-top 5px
  .mr
    margin-right 15px
  .type
    position absolute
    top 0
    bottom 0
    right 15px
    margin auto
    height 110px
</style>
