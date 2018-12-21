<template>
  <section>
    <!-- <markdown :data='data'/> -->
    <div class="index-list-item">
      <div class="title">title</div>
      <div class="info">
        <Icon type="ios-clock-outline"/>&nbsp;发布时间
        <span class="date mr">2017年11月29日</span>
        <Icon type="ios-pricetags-outline"/>&nbsp;标签 :
        <span class="tags mr">
          <span class="tag">vue</span>
          <span class="tag">iview</span>
        </span>
        <Icon type="ios-eye-outline"/>&nbsp;
        <span class="num">27041</span>次
      </div>
      <p class="ec">00000000000000000000000000000000000000000000000000000000000000000000000000000</p>
      <img src="~/static/images/tags/css.webp" alt="" class="type">
    </div>
    <div class="index-list-item">
      <div class="title">title</div>
      <div class="info">
        <Icon type="ios-clock-outline"/>&nbsp;发布时间
        <span class="date mr">2017年11月29日</span>
        <Icon type="ios-pricetags-outline"/>&nbsp;标签 :
        <span class="tags mr">
          <span class="tag">vue</span>
          <span class="tag">iview</span>
        </span>
        <Icon type="ios-eye-outline"/>&nbsp;
        <span class="num">27041</span>次
      </div>
      <p class="ec">00000000000000000000000000000000000000000000000000000000000000000000000000000</p>
      <img src="~/static/images/tags/css.webp" alt="" class="type">
    </div>
  </section>
</template>

<script>
import markdown from '~/components/markdown.vue'

export default {
  head() {
    return {
      title: "Aming's blog - 首页",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Aming's blog - 首页"
        }
      ]
    }
  },
  async asyncData({ app, params, title }) {
    // console.log(process.env.title)
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/img-upload.md')
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/iview.md')
    // return { data }
  },
  data() {
    return {}
  },
  components: {
    markdown
  },
  mounted() {
    // console.log(process.env.title);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index-list-item 
  min-height 140px
  position relative
  padding-left 2em
  &:not(:nth-of-type(1))
    border-top 1px solid #eee
  &:hover
    background-color #eee
  .title 
    font-size 32px
    font-weight 700
    line-height 2
    color #333
  .ec
    font-size 14px
    line-height 2
    color #666
    width 70%
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
