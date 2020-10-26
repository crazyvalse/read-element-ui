<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass, effectClass, isCenter]" v-show="visible">
      <i class="el-alert__icon" :class="[iconClass, isBig]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[isBoldTitle]" v-if="title">
          {{ title }}
        </span>
        <p class="el-alert__description" v-if="description">{{ description }}</p>
        <i class="el-alert__closebtn" :class="[closeClass]" v-if="closable" @click="close">
          {{ closeText }}
        </i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'alert-07-description-icon',
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
      return this.description ? 'is-big' : ''
    },
    isCenter() {
      return this.center ? 'is-center' : ''
    },
    isBoldTitle() {
      return this.description ? 'is-bold' : ''
    }
  }
}
</script>

<style scoped></style>
