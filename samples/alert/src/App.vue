<template>
  <div id="app">
    <el-alert title="这是一个示例" />
    <hr />
    alert-layout
    <alert-layout />
    <hr />
    alert-debug
    <alert-debug />
    <hr />
    alert-01-basic
    <alert-01-basic type="success" title="这是一个成功的示例" />
    <hr />
    alert-02-theme
    <alert-02-theme type="success" title="这是一个成功的示例" />
    <br />
    <alert-02-theme type="success" title="这是一个成功的示例" effect="dark" />
    <hr />
    alert-03-closeBtn
    <alert-03-close-btn type="success" title="不可关闭的alert" :closable="false" />
    <br />
    <alert-03-close-btn type="info" title="自定义 close-text" :close-text="'知道了'" />
    <br />
    <alert-03-close-btn type="warning" title="设置了回调的alert" @close="close" />
    <hr />
    alert-04-icon
    <alert-04-icon type="success" title="这是一个成功提示的文案" :show-icon="true" />
    <br />
    <alert-04-icon type="info" title="这是一个消息提示的文案" :show-icon="true" />
    <hr />
    alert-05-center
    <alert-05-center title="这是一个成功提示的文案" :center="true" />
    <hr />
    alert-06-description
    <alert-06-description
      type="success"
      title="带辅助性的文字介绍"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    />
    <hr />
    alert-07-description-icon
    <alert-07-description-icon
      type="success"
      title="带辅助性的文字介绍"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      :show-icon="true"
    />
    <hr />
    alert-08-slot
    <alert-08-slot type="success" :show-icon="true">
      <template v-slot:title>这是个title slot</template>
      <template>这是说明slot，这是说明slot，这是说明slot，这是说明slot，这是说明slot，这是说明slot</template>
    </alert-08-slot>
    <hr />
    alert-09-optimization
    <alert-09-optimization
        type="success"
        title="带辅助性的文字介绍"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        :show-icon="true"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    close() {
      alert('close')
    }
  }
}
</script>

<style lang="scss"></style>
