<template>
  <div>
    以下是插槽的内容
    <div>
      <slot></slot>
      <div>
        <slot name="user" :user="user">
          {{ user.a }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  // 想用子组件中的对象，需要把它绑定到slot上面
  export default {
    name: "TestSlot",
    data(){
      return {
        user: {
          a: 1,
          b: 2
        }
      }
    }
  };
</script>

<style scoped>

</style>
