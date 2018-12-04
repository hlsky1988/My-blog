<template>
  <Affix class="personal" :offset-top="70">
    <Card class="card" :bordered="false">
      <p class="title" slot="title">个人介绍</p>
      <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-pricetags-outline" />标签</p>
      <Button class="button" :type="type()" shape="circle">css</Button>
      <Button class="button" :type="type()" shape="circle">es6</Button>
      <Button class="button" :type="type()" shape="circle">express</Button>
      <Button class="button" :type="type()" shape="circle">分享</Button>
      <Button class="button" :type="type()" shape="circle">koa</Button>
      <Button class="button" :type="type()" shape="circle">node</Button>
      <Button class="button" :type="type()" shape="circle">go</Button>
      <Button class="button" :type="type()" shape="circle">egg</Button>
    </Card>
    <Card class="card" :bordered="false">
      <p class="title" slot="title"><Icon class="icon" type="ios-link-outline" />友情链接</p>
      <p>Content of no border type. Content of no border type. </p>
    </Card>
  </Affix>
</template>

<script>
export default {
  data() {
    return {
      typeArr:[,'primary','success','info','error','dashed']
    }

  },
  mounted() {

  },
  methods:{
    type:function() {
      let num = Math.round(Math.random()*5);
      return this.typeArr[num]
    }
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
    .title
      text-align center
      font-size 20px
      height 36px
      line-height 36px
      .icon
        margin-right 5px
    .button
      margin-top 10px;
</style>
