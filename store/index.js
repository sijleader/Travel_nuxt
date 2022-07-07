import Vuex from 'vuex'

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   loggedInUser(state) {
//     return state.auth.user
//   },
// }

export const store = () => {
  return new Vuex.Store({
    state: {
      // return {
      token: null,
      sessionid: [],
      results: null,
      SessionID:null
      // }
    },
    mutations: {
      SET_TOKEN(state, token) {
        state.token = token || null
      },
      INVALIDATE_TOKEN(state) {
        state.token = null
      },
      STORE_SESSION(state, sessionid) {
        state.sessionid = sessionid
      },
    },
    getters: {
      isVerified(state) {
        return state.token
      },
      isAuthenticated(state) {
        return state.auth.loggedIn
      },

      loggedInUser(state) {
        return state.auth.user
      },
      getSession(state) {
        return state.sessionid
      },
    },
    // actions:{
    //   storeSessionId({commit}, sessionid) {
    //     commit('STORE_SESSION_IDS', sessionid)
    //   }
    // }
  })
}

export default store
