<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass]" v-show="visible">
      <i class="el-alert__icon el-icon-info is-big is-debug"></i>
      <div class="el-alert__content">
        <span class="el-alert__title">
          {{ title }}
        </span>
        <p class="el-alert__description is-debug">文字说明文字说明文字说明</p>
        <i class="el-alert__closebtn el-icon-close" @click="close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * 1. 可关闭
 * 2. 主题色
 * 3. 文本
 */
export default {
  name: 'alert-01-basic',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    close() {
      this.visible = false
    }
  },
  computed: {
    typeClass() {
      return 'el-alert--' + this.type
    }
  }
}
</script>

<style scoped>
.is-debug {
  display: none;
}
</style>
