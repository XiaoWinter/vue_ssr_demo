<template>
  <div>
      Boo
      {{JSON.stringify(nodeData)}}
  </div>
</template>

<script>
export default {
  // { match:
  //  [ { name: 'ZBC', team_id: 88497, belong: 'china' },
  //    { name: 'C3', team_id: 88956, belong: 'japan' } ] 
  //    }
  asyncData ({ store, route, data }) {
    // 触发 action 后，会返回 Promise
/**
 * window.__INITIAL_STATE__={"items":{"nodeData":{"match":[{"name":"ZBC","team_id":88497,"belong":"china"},{"name":"C3","team_id":88956,"belong":"japan"}]}},"route":{"path":"\u002Fboo","hash":"","query":{},"params":{},"fullPath":"\u002Fboo","meta":{},"from":{"name":null,"path":"\u002F","hash":"","query":{},"params":{},"fullPath":"\u002F","meta":{}}}}
 * 
 */
    if(typeof window === 'undefined'){
        console.log("AAA",data)
        store.commit('setNode',data)
        return Promise.resolve(data)

    }else if(!Object.keys(store.state.items.nodeData).length){
       window.location.href = '/boo'
    }
  },
    computed: {
    // 从 store 的 state 对象中的获取 item。
    nodeData () {
      return this.$store.state.items.nodeData
    }
  },
}
</script>

<style>

</style>