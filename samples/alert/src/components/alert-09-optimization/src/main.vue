<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="divClass" v-show="visible">
      <i class="el-alert__icon" :class="iconClass" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <p class="el-alert__description" v-if="description || $slots.default">
          <slot>
            {{ description }}
          </slot>
        </p>
        <i class="el-alert__closebtn" :class="[closeClass]" v-if="closable" @click="close">
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert-09-optimization',
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
    closeClass() {
      return this.closeText === '' ? 'el-icon-close' : 'is-customed'
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    },
    divClass() {
      return [
        'el-alert--' + this.type,
        'is-' + this.effect,
        this.center ? 'is-center' : ''
      ]
    },
    iconClass(){
      return [
        'el-icon-' + this.type,
        this.description || this.$slots.default ? 'is-big' : ''
      ]
    }
  }
}
</script>

<style scoped></style>
