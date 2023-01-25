import { createStore } from 'vuex'

const getDefaultUser = () => {
  return {
    nameOfOrgnization: '',
    activeOfOrgnization:'',
    city:'',
    government:'',
    chooseOption:null
  }
}

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    updateNameOfOrgnization(state, payload) {
      state.user.nameOfOrgnization = payload
    },
    updateActiveOfOrgnization(state, payload){
        state.user.activeOfOrgnization = payload
    },
    updateCity(state, payload){
        state.user.city = payload
    },
    updateGovernment(state, payload){
        state.user.government = payload
    },
    updateChooseOption(state, payload){
        state.user.chooseOption = payload
    },
  },

  modules: {},
})