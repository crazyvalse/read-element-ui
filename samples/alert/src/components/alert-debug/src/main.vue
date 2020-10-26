<template>
  <div class="el-alert el-alert--info is-light">
    <i class="el-alert__icon el-icon-info is-big is-debug"></i>
    <div class="el-alert__content">
      <span class="el-alert__title">
        提示的文案
      </span>
      <p class="el-alert__description is-debug">文字说明文字说明文字说明</p>
      <i class="el-alert__closebtn el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-debug'
}
</script>

<style scoped>
.is-debug {
  display: none;
}
</style>
