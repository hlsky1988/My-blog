<template>
  <div>
    admin  {{ params.id }}
  </div>
</template>

<script>
export default {
  layout: 'admin',
  asyncData({ params }) {
    // console.log(params)
    return {params}
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body {
  width: 100vw;
  height: 100vh;
  background-image: 
    -webkit-radial-gradient(-20% 140%, ellipse , rgba(235,167,171,.6) 30%,rgba(255,255,227,0) 50%),
    -webkit-radial-gradient(60% 40%,ellipse, #d9e3e5 10%,rgba(44,70,76,.0) 60%),
    -webkit-linear-gradient(-45deg, rgba(62,70,92,.8) -10%,rgba(220,230,200,.8) 80% );
  line-height 100vh
  text-align center
  font-size 64px
}

</style>
