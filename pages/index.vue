<template>
  <section>
    <markdown :data='data'/>

  </section>
</template>

<script>
import markdown from '~/components/markdown.vue'

export default {
  async asyncData ({ app,params }) {
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/img-upload.md')
    let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/iview.md')
    return { data }
  },
  components: {
    markdown
  },
  data(){
    return {
      
    }
  },
  mounted() {

  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
