<template>
  <div>
    <listItem v-for="(item, index) in list" :key="index" :item="item"/>
    <Page class="page" :current="page" :total="total" :page-size="pageSize" simple size="small" @on-change='pageChange' v-if="list.length !== 0"/>
    <p class="no" v-if="list.length == 0">当前分类还没有文章哦~~</p>
  </div>
</template>

<script>
import listItem from '~/components/listItem.vue'

export default {
  async asyncData({ app, params, query }) {
    // console.log(params.id);
    let type = params.id
    let page = query.page?query.page*1:1
    let { data } = await app.$axios.get(`/api/list?page=${page}&type=${type}`)
    return { 
      page, type,
      list: data.result,
      total: data.total,
      pageSize: data.pageSize,
    }
  },
  data() {
    return {

    }
  },
  components: {
    listItem
  },
  methods: {
    pageChange(page) {
      // this.$router.push(`/?page=${page}`)
      window.location.href = `/?type=${this.type}&page=${page}`
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.page
  text-align: center;
  margin-top: 40px;
.no
  color #fff
  font-size 20px
  font-weight 700
</style>
