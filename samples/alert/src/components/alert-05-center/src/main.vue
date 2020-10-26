<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass, effectClass, isCenter]" v-show="visible">
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
export default {
  name: 'alert-05-center',
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
    },
    center: {
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
    },
    isCenter() {
      return this.center ? 'is-center' : ''
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
