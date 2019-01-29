<template>
  <div>
    <markdown :data='data'/>
  </div>
</template>

<script>
import markdown from '~/components/markdown.vue'

export default {
  async asyncData({ app, params }) {
    let { data } = await app.$axios.get(`/api/content?id=${params.id}`)
    return { data }
  },
  head() {
    return {
      title: `${this.data.title} - ${this.$store.state.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.data.title} - ${this.$store.state.title}`
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
