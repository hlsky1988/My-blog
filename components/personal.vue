<template>
  <Affix class="personal" :offset-top="0">
    <div class="tp">
      <no-ssr>
        <tp></tp>
      </no-ssr>
    </div>
    <Card class="card" :bordered="false">
      <p class="title" slot="title">个人介绍</p>
      <p>Aming, 前端螺丝工一枚, 博客纯属闹着玩</p>
      <Icon class="if24" type="ios-mail" /><span class="mail">aGxza3lAZm94bWFpbC5jb20=</span><br>
      <a href="https://github.com/hlsky1988/my-blog" target="_blank">
        <Icon class="if24" type="logo-github" /><span class="mail">https://github.com/hlsky1988/my-blog</span>
      </a>
      <a href="https://gitee.com/hlsky2017/my-blog" target="_blank">
        <Icon class="if24" type="logo-github" /><span class="mail">https://gitee.com/hlsky2017/my-blog</span>
      </a>
      <!-- <a href='https://gitee.com/hlsky2017/my-blog/stargazers' class="star"><img src='https://gitee.com/hlsky2017/my-blog/badge/star.svg?theme=white' alt='star'></img></a>
      <a href='https://gitee.com/hlsky2017/my-blog' class="fork"><img src='https://gitee.com/hlsky2017/my-blog/widgets/widget_6.svg' alt='Fork me on Gitee'></img></a> -->
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title">标签</p>
      <nuxt-link v-for="(item, index) in tags" :key="index" :to="item.path">
        <Button class="button">{{ item.name }}</Button>
      </nuxt-link>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title">推荐</p>
      <nuxt-link v-for="(item, index) in friendlink" :key="index" class="fl" :to="item.link" target="_blank">{{ item.name }}</nuxt-link>
    </Card>
  </Affix>
</template>

<script>
import tp from '~/components/tpwidget'

export default {
  data() {
    return {
      typeArr:['success',,'primary','error','info'],
    }
  },
  computed:{
    tags:function() {
      return this.$store.state.tags
    },
    friendlink:function() {
      return this.$store.state.friendlinks
    }
  },
  components:{
    tp
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personal
  box-sizing border-box
  width 305px
  float right
  .card
    line-height 2
    margin-top 20px
    .ivu-card-head 
      border-bottom 1px solid #FF4D3A !important
    .ivu-card-body > a 
      color #515a6e
    .title
      // text-align center
      font-size 20px
      height 36px
      line-height 36px
      .icon
        margin-right 5px
    .mail
      margin-left 6px
    .if24
      font-size 24px
    .button
      margin 10px 5px 0 0
    .fl
      margin-right 30px
      color #515a6e
    .star
      position relative
      top -6px
      margin 0 8px 0 8px
  .tp
    background-color #fff
    // background-color #1f7994
    border-radius 5px
    padding 10px 10px
    margin-top 20px

.top,.bottom
  text-align center
.center
  width 300px
  margin 10px auto
  overflow hidden
.center-left
  float left
.center-right
  float right
</style>
