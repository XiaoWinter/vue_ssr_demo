<!-- Item.vue -->
<template>
  <div>
    <div>

    {{ item && item.text }}
    </div>
    <button @click = "haha" >{{AA}}</button>
  </div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  },
  data:function(){
    return {
      AA:"点击"
    }
  },
  methods:{
    haha:function(){
      this.AA = "点击成功"
      console.log(123123)
    }
  }
}
</script>