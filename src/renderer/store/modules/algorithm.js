const state = {
  value: [{
    name: 'z',
    age: '1'
  }, {
    name: 's',
    age: '2'
  }, {
    name: 'm',
    age: '3'
  }]
}

const mutations = {
  changeValue_algorithm(state, value) {
    state.value = value
  }

}

const actions = {

}

export default {
  state,
  mutations,
  actions
}