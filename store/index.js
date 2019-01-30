import Vue from 'vue'
import Vuex from 'vuex'
import { AST_ForOf } from 'terser';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    title: '',
    tags: [],
    navtops: [],
    friendlinks: [],
    icp:''
  },
  mutations: {
    init (state,data) {
      state.title = data.title
      state.tags = data.tags
      state.navtops = data.navtops
      state.friendlinks = data.friendlinks
      state.icp = data.icp
    }
  },
  actions: {
    async nuxtServerInit ({ commit }, { app }) {
      let data = await app.$axios.get('http://localhost:3000/api/init')
      commit('init',data.data)
    }
  }
})

export default store