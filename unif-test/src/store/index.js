import Vue from 'vue'
import Vuex from 'vuex'
import productions from './modules/productions'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  	  productions
  },
  plugins: [createPersistedState()]
})
