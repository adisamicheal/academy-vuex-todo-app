import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    todoItems: [],
    deletedItems: [],
    currentId: 0
  },
  getters: {
    getTodoItems: state => state.todoItems,
    getDeletedItems: state => state.deletedItems,
    getTodoById: (state) => (id) => {
      return state.todoItems.find(item => item.id === id)
    }
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload)},
    updateCurrentId: (state) => { state.currentId += 1 },
    updateDeletedItems: (state, payload) => { state.deletedItems.push(payload)},
    removeItem: (state, payload) => {
      state.todoItems = state.todoItems.filter(item => item.id !== payload)
    }
  },
  actions: {
    addTodoItem(context, payload) {
      const currentId = context.state.currentId
      const data = {
        ...payload,
        id: currentId + 1,
        isComplete: false
      }
      context.commit('updateTodoItems', data)
      context.commit('updateCurrentId')
    },
    deleteTodoItem(context, payload) {
      console.log(payload)
      const currentTodo = context.getters.getTodoById(payload)
      context.commit('updateDeletedItems', currentTodo)
      context.commit('removeItem', payload)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
