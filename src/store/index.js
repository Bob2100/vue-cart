import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increase(state) {
      state.count++;
    }
  },
  getters: {
    money(state) {
      return `${state.count}元`;
    }
  },
  // 异步操作时使用
  actions: {
    increaseAsync({ commit }) {
      setTimeout(() => {
        commit('increase');
      }, 5000);
    }
  },
  modules: {
  }
})
