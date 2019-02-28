import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    title: '',
    tags: [],
    navtops: [],
    friendlinks: [],
    icp: '',
    token:''
  },
  mutations: {
    init (state,data) {
      state.title = data.title
      state.tags = data.tags
      state.navtops = data.navtops
      state.friendlinks = data.friendlinks
      state.icp = data.icp
    },
    login(state, token) {
      state.token = token
    }
  },
  actions: {
    async nuxtServerInit ({ commit }, { app }) {
      let res = await app.$axios.get('http://localhost:3000/api/init')
      commit('init',res.data)
    }
  }
})

export default store