# 开发模式

UI 组件库及可以单独打包成 UI 库，也可以直接供给教程官网使用。

在开发模式下，主要使用以下两个脚本：

```json
{
  "script": {
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js"
  }
}
```

- dev: 是对官网进行开发。
- dev:play: 是对单个组件进行 debug 开发。

先是 play 模式下的入口文件,可以看到仅仅引用了 element 所有的文件与样式,我们写的组件直接在 index.vue 中调用调试就可以了

```js
//
import Vue from 'vue'
import Element from 'main/index.js'
import App from './play/index.vue'
import 'packages/theme-chalk/src/index.scss'

Vue.use(Element)

new Vue({
  // eslint-disable-line
  render: (h) => h(App)
}).$mount('#app')
```

```vue
// index.vue
<template>
  <div style="margin: 20px;"></div>
</template>
<script>
export default {}
</script>
```
