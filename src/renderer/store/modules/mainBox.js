const state = {
  testVal: 0,
  mainType: ''
}

const mutations = {
  changeTestVal_mainBox (state, value) {
    state.testVal = value
  },
  changeMainType_mainBox (state, value) {
    state.mainType = value
  }

}

const actions = {

}

export default {
  state,
  mutations,
  actions
}