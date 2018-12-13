<template>
  <section>
    <markdown :data='data'/>

  </section>
</template>

<script>
import markdown from '~/components/markdown.vue'

export default {
  head () {
    return {
      title: "Aming's blog - 首页",
      meta: [
        { hid: 'description', name: 'description', content: "Aming's blog - 首页" }
      ]
    }
  },
  async asyncData ({ app,params,title }) {
    console.log(process.env.title)
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/img-upload.md')
    let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/iview.md')
    return { data }
  },
  data(){
    return {
      
    }
  },
  components: {
    markdown
  },
  mounted() {
    console.log(process.env.title);
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
