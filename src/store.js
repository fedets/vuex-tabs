import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {},
    activeTabId: 0
  },
  mutations: {
    updateCart(state, cartValue) {
      state.cart = cartValue;
    },
    setActiveTab(state, tabId) {
      state.activeTabId = tabId;
    }
  },
  actions: {
    updateCart({ commit }, payload) {
      commit("updateCart", payload);
    },
    setActiveTab({ commit }, tabId) {
      commit("setActiveTab", tabId);
    }
  },
  getters: {
    getCartValue(state) {
      return state.cart;
    },
    getActiveTabId(state) {
      return state.activeTabId;
    }
  }
});
