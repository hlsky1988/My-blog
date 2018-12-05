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

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
