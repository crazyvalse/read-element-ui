<template>
  <div class="el-alert" :class="[typeClass, effectClass, isCenterClass]" v-show="visible">
    <i class="el-alert__icon" :class="[iconClass, isBig]" v-if="showIcon"></i>
    <div class="el-alert__content">
      <span class="el-alert__title" :class="isBoldTitle" v-if="title || $slots.title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <p class="el-alert__description" v-if="description || $slots.default">
        <slot>{{ description }}</slot>
      </p>
      <i class="el-alert__closebtn" :class="[closeIcon]" v-show="closable" @click="close">{{ closeText }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-default',
  props: {
    // 警告类型
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
      validator(value) {
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
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    description: {
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
    closeIcon() {
      return this.closeText ? 'is-customed' : 'el-icon-close'
    },
    iconClass() {
      return 'el-icon-' + this.type
    },
    isCenterClass() {
      return this.center ? 'is-center' : ''
    },
    isBig() {
      return (this.description || this.$slots.default) && (this.title || this.$slots.title) ? 'is-big' : ''
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>

<style scoped>
.is-debug {
  display: none;
}
</style>
