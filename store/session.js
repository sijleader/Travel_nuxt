

export const state = () => ({
  sessionid: 0
})

export const mutations = {
  STORE_SESSION_ID(state, sessionid) {
    state.sessionid = sessionid
  }
}

export const actions = {
  storeSessionid({commit}, sessionid) {
    commit('STORE_SESSION_ID', sessionid)
  }
}

export const getters = {
  getSessionid(state) {
    return state.sessionid
  }
}