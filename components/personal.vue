<template>
  <Affix class="personal" :offset-top="70">
    <Card class="card" :bordered="false">
      <p class="title" slot="title">个人介绍</p>
      <p>Aming, 前端螺丝工一枚, 博客纯属闹着玩</p>
      <Icon class="if24" type="ios-mail" /><span class="mail">aGxza3lAZm94bWFpbC5jb20=</span><br>
      <a href="https://gitee.com/hlsky2017/my-blog" target="_blank">
        <Icon class="if24" type="logo-github" /><span class="mail">https://gitee.com/hlsky2017/my-blog</span>
      </a>
      <a href='https://gitee.com/hlsky2017/my-blog/stargazers' class="star"><img src='https://gitee.com/hlsky2017/my-blog/badge/star.svg?theme=white' alt='star'></img></a>
      <a href='https://gitee.com/hlsky2017/my-blog' class="fork"><img src='https://gitee.com/hlsky2017/my-blog/widgets/widget_6.svg' alt='Fork me on Gitee'></img></a>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-pricetags-outline" />标签</p>
      <!-- <nuxt-link v-for="(item, index) in tags" :key="index" :to="item.name"> -->
      <a v-for="(item, index) in tags" :key="index" :href="item.path">
        <Button class="button" :type="typeArr[item.type]" shape="circle">{{ item.name }}</Button>
      </a>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-link-outline" />友情链接</p>
      <a v-for="(item, index) in friendlink" :key="index" class="fl" :href="item.link" target="_blank">{{ item.name }}</a>
    </Card>
  </Affix>
</template>

<script>
export default {
  data() {
    return {
      tags:process.env.tags,
      typeArr:['success',,'primary','error','info'],
      friendlink:process.env.friendlink
    }
  },
  mounted() {
    console.log(this.tags);
  },
  methods:{
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personal
  box-sizing border-box
  width 300px
  float right
  .card
    line-height 2
    margin-top 25px
    .ivu-card-body > a 
      color #515a6e
    .title
      text-align center
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
      margin-right 10px
      color #515a6e
    .star
      position relative
      top -6px
      margin 0 8px 0 8px

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
