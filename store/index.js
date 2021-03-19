import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "Hello Vuex!!"
      }
    },
    // mutations: {
    //   updateMessage: function(state){
    //     state.message = 'Update!'
    //   }
    // }
    mutations: {
      updateMessage: function(state, payload){
        state.message = payload
      }
    },
    actions: {
      updateMessageAction(context){
        context.commit('updateMessage', 'Commit with payloa from action')
      }
    }
  })
}

export default createStore
