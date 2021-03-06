// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { fetchItem } from './api.js'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {
        nodeData:{}
      }
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      },
      
    },
    mutations: {
      setItem (state, { id, item }) {
        //响应式数据 Vue.set(object, propertyName, value)
        Vue.set(state.items, id, item)
      },
      //设置node端数据
      setNode(state,data){
        Vue.set(state.items,"nodeData",data)
      }
    }
  })
}