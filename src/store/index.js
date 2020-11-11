import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    isLogin: false,
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
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
    },
    submitLogin({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('login');
          resolve();
        }, 5000);
      });
    }
  },
  modules: {
  }
})
