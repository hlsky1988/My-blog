<template>
  <div>
    {{ params.id }}
    <Page class="page" :current="1" :total="30" size="small" />
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.log(params)
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

 .page
  text-align: center;
  margin-top: 40px;
</style>
