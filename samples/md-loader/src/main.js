// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// highlight.js 给code标签添加样式
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// demo所需的样式
import './assets/demo-styles/index.scss'
import './assets/styles/common.css'
// 模板组件 - md文件通过 md-loader 转成 vue的 sfc格式 并组织 demo-block 的slot 代码片段
import demoBlock from './components/demo-block'

Vue.config.productionTip = false
// 注册成全局组件
Vue.component('demo-block', demoBlock)

// 切换路由的时候，初始化 highlight 库
router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    // 调整code标签的样式？
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  // 命名title
  document.title = 'MD-Loader'
})

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
