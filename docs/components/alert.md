# Element 组件分析——Alert

## TL;DR

本质上讲开源项目也是普通的工程，里面的每一个组件都可以当成是一个普通的 UI 组件。因此，我们按照开发流程的角度来看待 `element-ui` 中的代码(组件)。

分别从下面几个流程来分析：

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [分析设计](#%E5%88%86%E6%9E%90%E8%AE%BE%E8%AE%A1)
  - [1. 基本用法](#1-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)
    - [需求](#%E9%9C%80%E6%B1%82)
    - [分析](#%E5%88%86%E6%9E%90)
    - [实现思路](#%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
    - [示例简码](#%E7%A4%BA%E4%BE%8B%E7%AE%80%E7%A0%81)
  - [2. 主题](#2-%E4%B8%BB%E9%A2%98)
  - [3. 自定义关闭按钮](#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE)
  - [4. 带有 icon](#4-%E5%B8%A6%E6%9C%89-icon)
  - [5. 文字居中](#5-%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD)
  - [6. 带有辅助性文字介绍](#6-%E5%B8%A6%E6%9C%89%E8%BE%85%E5%8A%A9%E6%80%A7%E6%96%87%E5%AD%97%E4%BB%8B%E7%BB%8D)
  - [7. 带有 icon 和辅助性文字介绍：](#7-%E5%B8%A6%E6%9C%89-icon-%E5%92%8C%E8%BE%85%E5%8A%A9%E6%80%A7%E6%96%87%E5%AD%97%E4%BB%8B%E7%BB%8D)
- [具体实现](#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0)
  - [布局](#%E5%B8%83%E5%B1%80)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 分析设计

`Alert 警告` 组件用于页面中展示重要的提示信息。我们将根据**需求**设计出每个功能点的实现思路。

详细内容请阅读 [element ui/组件/alert 警告](https://element.eleme.cn/#/zh-CN/component/alert)

### 1. 基本用法

#### 需求

页面中的非浮层元素，不会自动消失。点击关闭按钮的时候，提示条消失。

![](../../assets/imgs/alert/1.png)

#### 分析

从以上的**需求描述**及**示例图**中，我们可以获得以下需求点：

- 非浮层元素，不会自动消失
- 可关闭
- 主题色
- 文本

既然是通用的 UI 组件，那么组件需要对外暴露可以修改的属性(props)以及回调方法(\$emit())，以方便外部自定义属性和方法。

#### 实现思路

经过分析可以得到以下的实现思路：

- 非浮层元素，不会自动消失：使用 div 来实现这个组件。
- 可关闭：在 `data` 中定义 `visible` 属性，当点击**关闭按钮**时，设置 `this.visible = false`.
- 主题色：在 `props`中定义 `type` 属性，并在组件最外层的 div 上绑定一个 `class` 。根据 `type` 动态改变 `class`。例如： `<div :class="['el-alert--' + type]" />`
- 文本：在 `props` 中定义 `title` 属性，接收外部传递的标题。

#### 示例简码

html

```vue
<div :class="['el-alert--' + type]" v-show="visible">
  <div>{{ title }}</div>
  <i class="el-icon-close" @click="close" />
</div>
```

script

```vue
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
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
    }
  }
}
</script>
```

### 2. 主题

Alert 组件提供两个不同的主题：light 和 dark。

![](../../assets/imgs/alert/2.png)

实现思路：

1. 定义两套 css 主题('is-light' 和 'is-dark')。
2. 在 `props`中定义 effect 属性。
3. 在组件最外层定义一个 div，并绑定 `class`，根据 `effect` 来决定使用哪个主题。

html： 在 div 中添加 class

```vue
<div :class="['el-alert--' + type, 'is-' + effect]" v-show="visible">
  ...
</div>
```

script

```vue
<script>
export default {
  props: {
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  }
}
</script>
```

### 3. 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

![](../../assets/imgs/alert/3.png)

实现思路：

- 不可关闭：在关闭的标签上定义 `v-show` 或者 `v-if`，根据 `closable`(props) 的值来决定是否显示 关闭标签。
- 自定义 `close-text`：定义 `props` 中的 `closeText` 属性，并根据该属性来判断是直接显示自定义文字还是显示文字图标。
- 设置了回调：绑定一个 `click` 事件，点击按钮时，`emit` 该事件。

html

```vue
<div>
  <i :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
</div>
```

### 4. 带有 icon

表示某种状态时提升可读性。

![](../../assets/imgs/alert/4.png)

实现思路

- 在 `props` 中定义一个 `showIcon` 属性。
- 根据该属性来判断是否显示 icon。
- 根据 `props` 中的 `type` 决定显示哪个 icon。

html

```vue
<i :class="'el-icon-' + type" v-if="showIcon"></i>
```

script

```vue
<script>
export default {
  props: {
    // 判断提示的类型
    type: {
      type: String,
      default: 'info'
    },
    // 判断是否显示 icon
    showIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
```

### 5. 文字居中

使用 center 属性让文字水平居中。

![](../../assets/imgs/alert/5.png)

实现思路：

- 在 `props` 中定义一个 `center` 属性。
- 根据该属性来决定是否使用 `is-center` 这个 class。

html

```vue
<div :class="[center ? 'is-center' : '']">
  ...
</div>
```

script

```vue
<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>
```

### 6. 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

![](../../assets/imgs/alert/6.png)

实现思路

- 在 `props` 中定义 `description` 属性。
- 根据该属性来判断是否显示描述信息。

html

```vue
<p v-if="description">{{ description }}</p>
```

script

```vue
<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
```

### 7. 带有 icon 和辅助性文字介绍：

![](../../assets/imgs/alert/7.png)

实现思路：

- 定义两个图标样式：大图标和小图标。
- 根据 `props` 中的 `description` 属性来判断显示大图标或者小图标。
- 默认是小图标。

```vue
<i :class="description ? 'is-big' : ''"></i>
```

## 具体实现

当我们实现一个组件的功能时，最好是从布局开始，然后再逐一实现这个组件中的功能。

### 布局

## 总结

- 所有的计算全部都放到 computed 中，让 html 尽量简洁。
