<template>
  <div id="app">
    <el-alert :title="title" />
    <hr />
    <alert01 :title="title" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: '提示的文案'
    }
  }
}
</script>

<style lang="scss"></style>
