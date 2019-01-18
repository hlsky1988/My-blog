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
      title: "Aming's blog - 首页",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Aming's blog - 首页"
        }
      ]
    }
  },
  async asyncData({ app, params, query }) {
    // console.log(params.id);
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
    // console.log(process.env.title);
    console.log(process.client);
  },
  methods: {
    pageChange(page) {
      // this.$router.push(`/?page=${page}`)
      window.location.href = `/?page=${page}`
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.page {
  text-align: center;
  margin-top: 50px;
  padding-bottom: 25px;
}
</style>
