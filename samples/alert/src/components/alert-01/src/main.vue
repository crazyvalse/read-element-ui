<template>
  <transition>
    <div :class="['el-alert--' + type]" v-show="visible">
      <div>{{ title }}</div>
      <i class="el-icon-close" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert01',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
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
      this.$emit('close')
    }
  }
}
</script>

<style scoped></style>
