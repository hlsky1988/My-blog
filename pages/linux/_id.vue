<template>
  <div>linux_id {{ params.id }}</div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.log(params)
    return {params}
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
