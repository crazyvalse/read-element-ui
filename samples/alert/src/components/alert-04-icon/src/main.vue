<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass, effectClass]" v-show="visible">
      <i class="el-alert__icon" :class="[iconClass, isBig]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title">
          {{ title }}
        </span>
        <p class="el-alert__description is-debug">文字说明文字说明文字说明</p>
        <i class="el-alert__closebtn" :class="[closeClass]" v-if="closable" @click="close">
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * 1. 不可关闭：在关闭的标签上定义 `v-show` 或者 `v-if`，根据 `closable`(props) 的值来决定是否显示 关闭标签。
 * 2. 自定义 `close-text`：定义 `props` 中的 `closeText` 属性，并根据该属性来判断是直接显示自定义文字还是显示文字图标。
 * 3. 设置了回调：绑定一个 `click` 事件，点击按钮时，`emit` 该事件。
 */
export default {
  name: 'alert-04-icon',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'light',
      validate(value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
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
  },
  computed: {
    typeClass() {
      return 'el-alert--' + this.type
    },
    effectClass() {
      return 'is-' + this.effect
    },
    closeClass() {
      return this.closeText === '' ? 'el-icon-close' : 'is-customed'
    },
    iconClass() {
      return 'el-icon-' + this.type
    },
    isBig() {
      return ''
    }
  }
}
</script>

<style scoped>
.is-debug {
  display: none;
}
.el-alert__closebtn.is-customed {
  font-style: normal;
  font-size: 13px;
  top: 9px;
}
</style>
