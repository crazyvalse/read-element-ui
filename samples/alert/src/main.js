import Vue from 'vue'
import App from './App.vue'
import './assets/element-ui-chalk.css'

import Alert from './components/alert'
import AlertLayout from './components/alert-layout'
import AlertDebug from './components/alert-debug'
import Alert01 from './components/alert-01-basic'
import Alert02 from './components/alert-02-theme'
import Alert03 from './components/alert-03-close-btn'
import Alert04 from './components/alert-04-icon'
import Alert05 from './components/alert-05-center'
import Alert06 from './components/alert-06-description'
import Alert07 from './components/alert-07-description-icon'
import Alert08 from './components/alert-08-slot'
import Alert09 from './components/alert-09-optimization'

Vue.config.productionTip = false

Vue.use(Alert)
Vue.use(AlertLayout)
Vue.use(AlertDebug)
Vue.use(Alert01)
Vue.use(Alert02)
Vue.use(Alert03)
Vue.use(Alert04)
Vue.use(Alert05)
Vue.use(Alert06)
Vue.use(Alert07)
Vue.use(Alert08)
Vue.use(Alert09)

new Vue({
  render: h => h(App)
}).$mount('#app')
