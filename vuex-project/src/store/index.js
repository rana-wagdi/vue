import { createStore } from 'vuex';
import productsModules from './modules/product';
import cartModules from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModules,
    cart: cartModules,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    isAuthenicated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
