import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/modules/counter'
import doubleCounter from './store/modules/doubleCounter'
import totalCounter from './store/modules/totalCounter'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})

store.dispatch('totalCounter/setModules', ['counterA','counterB', 'doubleCounterA', 'doubleCounterB'])
export default store