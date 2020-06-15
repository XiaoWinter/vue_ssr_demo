<template>
  <div>
      <h1>Home</h1>
      <router-link to="/item/33">toItem</router-link>
      <router-link to="/foo">FOO</router-link>
      <router-link to="/boo">BOO</router-link>
      <router-link to="/list">List</router-link>
      <router-view></router-view>
      <div @click="todo">点击的</div>
      <div @click="todo2">点击的2</div>
  </div>
</template>

<script>

export default {
  
methods:{
  todo(){
    alert('tototototototo')
  },
  todo2:function(){
    alert("ssssssssssssssssssssss")
  }
}
}
</script>

<style>

</style>