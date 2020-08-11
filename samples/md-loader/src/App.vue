<template>
  <div id="app">
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  margin: 0 auto;
  width: 800px;
}
</style>
