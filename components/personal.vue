<template>
  <Affix class="personal" :offset-top="70">
    <Card class="card" :bordered="false">
      <p class="title" slot="title">个人介绍</p>
      <p>Aming, 前端螺丝工一枚</p>
      <Icon class="if24" type="ios-mail" /><span class="mail">hlsky#foxmial.com</span>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-pricetags-outline" />标签</p>
      <nuxt-link v-for="(item, index) in tags" :key="index" :to="item.name">
        <Button class="button" :type="typeArr[item.type]" shape="circle">{{ item.name }}</Button>
      </nuxt-link>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-link-outline" />友情链接</p>
      <a v-for="(item, index) in friendlink" :key="index" class="fl" :href="item.link">{{ item.name }}</a>
    </Card>
  </Affix>
</template>

<script>
export default {
  data() {
    return {
      tags:process.env.tags,
      typeArr:[,'primary','success','error','info'],
      friendlink:process.env.friendlink
    }

  },
  mounted() {
    // console.log(this.friendlink);
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
    margin-top 25px
    vertical-align baseline
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
</style>
