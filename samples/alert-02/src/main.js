import Vue from 'vue'
import App from './App.vue'
import './assets/element-ui-chalk.css'

import Alert from './components/alert'
import Alert01 from './components/alert-01'

Vue.config.productionTip = false

Vue.use(Alert)
Vue.use(Alert01)

new Vue({
  render: h => h(App)
}).$mount('#app')
