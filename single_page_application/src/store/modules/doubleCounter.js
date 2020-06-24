//Counterコンポーネント用のストア
//ストア内には state getters mutations actions のプロパティを持ちます。 

//state には状態
const state = () => ({step: 2, count: 0})

//getters には state 内の状態を元に算出した値を返す関数
const getters = {
  step: state => state.step,
  count: state => state.count
}

// actions にはミューテーションにデータをコミットする関数
// アクションは任意の非同期処理を含むことができます。
const actions = {
  //引数分割束縛
  increment({ commit }) {
    commit('increment')
  }
}

//mutations には state のデータを更新する関数
const mutations = {
  increment (state) {
    state.count += state.step
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}