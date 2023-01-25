import { createStore } from 'vuex'

const getDefaultUser = () => {
  return {
    firstName: '',
  }
}

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    updateFirstName(state, payload) {
      state.user.firstName = payload
    },
  },

  modules: {},
})