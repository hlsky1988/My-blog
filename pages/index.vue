<template>
  <section>
    <listItem v-for="(item, index) in list" :key="index" :item="item"/>
    <Page class="page" :current="page" :total="total" :page-size="pageSize" simple size="small" @on-change='pageChange'/>
  </section>
</template>

<script>
import listItem from '~/components/listItem.vue'

export default {
  head() {
    return {
      title: `${this.$store.state.title} - 首页`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$store.state.title} - 首页`,
        }
      ]
    }
  },
  async asyncData({ app, params, query }) {
    let page = query.page?query.page*1:1
    let { data } = await app.$axios.get(`/api/list?page=${page}`)
    return { 
      page: page,
      list: data.result,
      total: data.total,
      pageSize: data.pageSize
    }
  },
  data() {
    return {
    }
  },
  components: {
    listItem
  },
  mounted() {
    
  },
  methods: {
    pageChange(page) {
      // window.location.href = `/?page=${page}`
      this.$router.push({path:'/',query:{page}})
      this.$axios
        .get(`/api/list?page=${page}`)
        .then(response => {
          this.pageSize = response.data.pageSize
          this.title = response.data.title
          this.list = response.data.result
        })
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.page 
  text-align center
  margin-top 50px
  padding-bottom 25px

</style>
