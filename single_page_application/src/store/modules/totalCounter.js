//state には状態
const state = () => ({modules: []})

//getters には state 内の状態を元に算出した値を返す関数
const getters = {
  count (state, getters, rootState) {
    let sum = 0

    state.modules.forEach((elem) => {
      sum += rootState[elem].count
    })
    return sum
  }
}

// actions にはミューテーションにデータをコミットする関数
// アクションは任意の非同期処理を含むことができます。
const actions = {
  setModules({commit}, val) {
    commit('setModules', val)
  }
}

//mutations には state のデータを更新する関数
const mutations = {
  setModules(state, val) {
    state.modules = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}