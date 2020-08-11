import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      component: () => import('../docs/installation.md')
    },
    {
      path: '/button',
      component: () => import('../docs/button.md')
    }
  ]
})
