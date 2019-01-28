<template>
  <div>
    <markdown :data='data'/>
  </div>
</template>

<script>
import markdown from '~/components/markdown.vue'

export default {
  async asyncData({ app, params }) {
    // console.log(params.id);
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/img-upload.md')
    // let { data } = await app.$axios.get('http://127.0.0.1:3000/maekdown/iview.md')
    let { data } = await app.$axios.get(`/api/content?id=${params.id}`)
    return { data }
  },
  head() {
    return {
      title: `${this.data.title} - Aming's blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.data.title} - Aming's blog`
        }
      ]
    }
  },
  data() {
    return {

    }
  },
  components: {
    markdown
  },
  mounted() {
    
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
