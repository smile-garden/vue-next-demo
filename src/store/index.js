import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    test: {
      a: 1,
      b: 2,
    },
  },
  mutations: {
    setTestA(state, value) {
      state.test.a = value;
    },
  },
  actions: {
    setTestB(state, value) {
      state.test.b = value;
    },
  },
  modules: {
  },
});
