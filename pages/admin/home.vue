<template>
  <div>
    {{ token }}
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {

    }
  },
  components: {

  },
  computed: {
    token:function(){
      return this.$store.state.token
    }
  },
  mounted(){
    if (this.token == '') {
      this.$router.push({path:'/admin'})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body {
  background-color: #fff;
}

</style>
