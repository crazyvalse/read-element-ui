// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hljs from 'highlight.js'
import demoBlock from './components/demo-block'
import 'highlight.js/styles/color-brewer.css'

import './assets/demo-styles/index.scss'
import './assets/styles/common.css'

Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'NUI'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
