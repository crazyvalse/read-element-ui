# 【开发】 `Alert 警告` 组件

TODO

- [ ] 主题的实现方式

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [1. 布局](#1-%E5%B8%83%E5%B1%80)
  - [1.1 思路](#11-%E6%80%9D%E8%B7%AF)
  - [1.2 实现](#12-%E5%AE%9E%E7%8E%B0)
  - [1.3 测试](#13-%E6%B5%8B%E8%AF%95)
  - [1.4 示例代码](#14-%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)
- [2. 隐藏不需要的页面元素](#2-%E9%9A%90%E8%97%8F%E4%B8%8D%E9%9C%80%E8%A6%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E5%85%83%E7%B4%A0)
- [3. 基本功能](#3-%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD)
  - [3.1 实现思路](#31-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [3.2 具体实现](#32-%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0)
    - [3.2.1 可关闭](#321-%E5%8F%AF%E5%85%B3%E9%97%AD)
    - [3.2 主题色](#32-%E4%B8%BB%E9%A2%98%E8%89%B2)
    - [3.3 文本](#33-%E6%96%87%E6%9C%AC)
    - [3.4 完善](#34-%E5%AE%8C%E5%96%84)
    - [3.5 优化](#35-%E4%BC%98%E5%8C%96)
  - [示例工程](#%E7%A4%BA%E4%BE%8B%E5%B7%A5%E7%A8%8B)
- [4. 主题](#4-%E4%B8%BB%E9%A2%98)
  - [4.1 实现思路](#41-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [4.2 具体实现](#42-%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0)
  - [自定义关闭按钮](#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE)
    - [3.1 需求](#31-%E9%9C%80%E6%B1%82)
      - [不可关闭](#%E4%B8%8D%E5%8F%AF%E5%85%B3%E9%97%AD)
      - [自定义 `close-text`](#%E8%87%AA%E5%AE%9A%E4%B9%89-close-text)
      - [设置回调](#%E8%AE%BE%E7%BD%AE%E5%9B%9E%E8%B0%83)
    - [跟 关闭按钮相关的代码](#%E8%B7%9F-%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE%E7%9B%B8%E5%85%B3%E7%9A%84%E4%BB%A3%E7%A0%81)
  - [4. 带有 icon](#4-%E5%B8%A6%E6%9C%89-icon)
    - [4.1 需求](#41-%E9%9C%80%E6%B1%82)
    - [4.2 实现思路](#42-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [文字居中](#%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD)
    - [5.1 需求](#51-%E9%9C%80%E6%B1%82)
    - [5.2 实现思路](#52-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [6. 带有辅助性文字介绍](#6-%E5%B8%A6%E6%9C%89%E8%BE%85%E5%8A%A9%E6%80%A7%E6%96%87%E5%AD%97%E4%BB%8B%E7%BB%8D)
    - [6.1 需求](#61-%E9%9C%80%E6%B1%82)
    - [6.2 实现思路](#62-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [7. 带有 icon 和辅助性文字介绍：](#7-%E5%B8%A6%E6%9C%89-icon-%E5%92%8C%E8%BE%85%E5%8A%A9%E6%80%A7%E6%96%87%E5%AD%97%E4%BB%8B%E7%BB%8D)
    - [7.1 需求](#71-%E9%9C%80%E6%B1%82)
    - [7.2 实现思路](#72-%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)
  - [添加插槽](#%E6%B7%BB%E5%8A%A0%E6%8F%92%E6%A7%BD)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

当我们实现一个组件的功能时，最好是从布局开始，然后再逐一实现这个组件中的功能。

示例工程: [samples/alert](../../../samples/alert)

## 1. 布局

### 1.1 思路

我们整体使用 `布局二` 作为总体布局方案，并通过以下操作，把 `布局二` 改成`布局一`。

1. 修改文字图标的 `font-size`，对应 `class="is-big"`；
2. 修改标题的 `font-weight`，对应 `class="is-bold"`；
3. 隐藏文字说明部分，通过绑定 `v-if` 来判断；

![](../../../assets/imgs/alert/77.png)

### 1.2 实现

在这一步中，我们不写任何的功能，只实现静态页面。

- 每一个元素上都需要有一个唯一指定的 `class`，例如 `el-alert__icon`。规则是 `组件名__功能描述`。
- 最外层 div
  - class:el-alert--{type}: 不同类型的主题色。（info/success/warning/danger）
  - class:is-{effect}: 明暗两套大的主题。
- icon 图标
  - class:el-icon-{type}: 不同种类的文字图标。
  - class:is-big: 显示大图标。
- 标题 span
  - class:is-bold: 文字加粗。在显示描述时，加粗标题上的文字。
- 关闭按钮
  - class:el-icon-close: 文字图标。

```vue
<template>
  <div class="el-alert el-alert--info is-light">
    <i class="el-alert__icon el-icon-info is-big"></i>
    <div class="el-alert__content">
      <span class="el-alert__title is-bold"> 提示的文案 </span>
      <p class="el-alert__description">文字说明文字说明文字说明</p>
      <i class="el-alert__closebtn el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-layout'
}
</script>

<style scoped></style>
```

### 1.3 测试

![](../../../assets/imgs/alert/alert-layout-1.png)

### 1.4 示例代码

示例代码: [/src/components/alert-layout/src/main.vue](../../../samples/alert/src/components/alert-layout/src/main.vue)

## 2. 隐藏不需要的页面元素

我们先定义一个 `is-debug` 类，并把 `图标` 和 `描述` 隐藏起来，以便于开发基础功能。

```vue
<template>
  <div class="el-alert el-alert--info is-light">
    <i class="el-alert__icon el-icon-info is-big is-debug"></i>
    <div class="el-alert__content">
      <span class="el-alert__title"> 提示的文案 </span>
      <p class="el-alert__description is-debug">文字说明文字说明文字说明</p>
      <i class="el-alert__closebtn el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-debug'
}
</script>

<style scoped>
.is-debug {
  display: none;
}
</style>
```

页面显示

![](../../../assets/imgs/alert/alert-debug-1.png)

示例代码: [/src/components/alert-layout/src/main.vue](../../../samples/alert/src/components/alert-layout/src/main.vue)

## 3. 基本功能

页面中的非浮层元素，不会自动消失。点击**关闭按钮**的时候，提示条消失。

### 3.1 实现思路

经过分析可以得到以下的实现思路：

1. 非浮层元素，不会自动消失：使用 div 来实现这个组件（这是一句废话）。
2. 可关闭: 在 `data` 中定义 `visible` 属性，当点击**关闭按钮**时，设置 `this.visible = false`.
3. 主题色: 在 `props`中定义 `type` 属性，并在组件最外层的 div 上绑定一个 `class` 。根据 `type` 动态改变 `class`。例如： `<div :class="['el-alert--' + type]" />`
4. 文本: 在 `props` 中定义 `title` 属性，接收外部传递的标题。

![](../../../assets/imgs/alert/111.png)

### 3.2 具体实现

#### 3.2.1 可关闭

当点击**关闭按钮**时，关闭 `Alert` 组件。

具体的实现流程：

1. 在 `data` 中定义 `visible` 属性
2. 在最外层的**div**中定义 `v-show="visible"`
3. 在**关闭按钮**标签中定义 `@click="close"`
4. 触发 `click事件` 时，`this.visible = false`

示例代码

```vue
<template>
  <!-- 2. 在最外层的**div**中定义 `v-show="visible"` -->
  <div class="el-alert el-alert--info is-light" v-show="visible">
    ...
    <div class="el-alert__content">
      ...
      <!-- 3. 在**关闭按钮**标签中定义 `@click="close"` -->
      <i class="el-alert__closebtn el-icon-close" @click="close"></i>
    </div>
  </div>
</template>

<script>
/**
 * 1. 可关闭
 */
export default {
  name: 'alert-01-basic',
  data() {
    return {
      // 1. 在 `data` 中定义 `visible` 属性
      visible: true
    }
  },
  methods: {
    // 4. 触发 `click事件` 时，`this.visible = false`
    close() {
      this.visible = false
    }
  }
}
</script>
```

#### 3.2 主题色

根据 `type(props)` 来决定 `Alert` 组件的颜色。

具体的实现流程：

1. 在 `props` 中定义 `type` 属性。
2. 根据 `type` 决定 `class`。

示例代码：

```vue
<template>
  <!-- 2. 根据 `type` 决定 `class`。 -->
  <div class="el-alert is-light" :class="['el-alert--' + type]" v-show="visible">...</div>
</template>

<script>
export default {
  name: 'alert-01-basic',
  props: {
    // 1. 在 `props` 中定义 `type` 属性。
    type: {
      type: String,
      default: 'info'
    }
  }
  // ...
}
</script>
```

测试：

在父组件调用这个组件，并在浏览器上查看组件是否变色

```vue
<alert-01-basic type="success" />
```

![](../../../assets/imgs/alert/alert-01-basic-1.png)

#### 3.3 文本

根据 `title(props)` 显示 `Alert` 组件的提示信息。

1. 在 `props` 中定义 `title` 字段。
2. 在 html 中用 `{{ title }}` 来显示。

```vue
<template>
  <div class="el-alert is-light" :class="['el-alert--' + type]" v-show="visible">
    ...
    <div class="el-alert__content">
      <!-- 2. 在 html 中用 `{{ title }}` 来显示。 -->
      <span class="el-alert__title">
        {{ title }}
      </span>
      ...
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert-01-basic',
  props: {
    // ...
    // 1. 在 `props` 中定义 `title` 字段。
    title: {
      type: String,
      default: ''
    }
  }
  // ...
}
</script>
```

测试：

在父组件调用这个组件，并在浏览器上查看 `Alert` 组件的提示是否是从父组件传递过来的 `title` 。

```vue
<alert-01-basic type="success" title="这是一个成功的示例" />
```

![](../../../assets/imgs/alert/alert-01-basic-2.png)

#### 3.4 完善

自此 `alert 警告` 组件的基本需求已经完成了。为了提升体验，我们在最外层添加 `transition` 标签，并添加一个动画效果。

```css
.el-alert-fade-enter,
.el-alert-fade-leave-active {
  opacity: 0;
}
```

#### 3.5 优化

在页面当中最容易变化的就是 html 和样式，我们应该尽可能地使 html 部分看起来简单、整洁，以便于后期的维护。因此我们把**数据处理**相关的逻辑放到 script 中实现。

使用 computed 的 `typeClass` 代替 html 中的判断。

```vue
<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass]" v-show="visible">...</div>
  </transition>
</template>

<script>
export default {
  // ...
  computed: {
    typeClass() {
      return 'el-alert--' + this.type
    }
  }
}
</script>
```

### 示例工程

完整代码：[/src/components/alert-01-basic/src/main.vue](../../../samples/alert/src/components/alert-01-basic/src/main.vue)

## 4. 主题

### 4.1 实现思路

Alert 组件提供两个不同的主题：light 和 dark。

1. 定义两套 css 主题('is-light' 和 'is-dark')。
2. 在 `props`中定义 `effect` 属性。
3. 在组件最外层的 div 上绑定 `class`，根据 `effect(props)` 来决定使用哪个主题。

![](../../../assets/imgs/alert/22.png)

### 4.2 具体实现

```vue
<template>
  <transition name="el-alert-fade">
    <div class="el-alert is-light" :class="[typeClass, effectClass]" v-show="visible">...</div>
  </transition>
</template>

<script>
export default {
  name: 'alert-02-theme',
  props: {
    // 2. 在 `props`中定义 effect 属性。
    effect: {
      type: String,
      default: 'light',
      validate(value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
    // ...
  },
  computed: {
    // 3. 在组件最外层定义一个 div，并绑定 `class`，根据 `effect` 来决定使用哪个主题。
    effectClass() {
      return 'is-' + this.effect
    }
    // ...
  }
  // ...
}
</script>
```

测试：在外部传入 `effect="dark"`

![](../../../assets/imgs/alert/alert-02-theme-1.png)

完整代码：[/src/components/alert-02-theme/src/main.vue](../../../samples/alert/src/components/alert-02-theme/src/main.vue)

### 自定义关闭按钮

#### 3.1 需求

自定义关闭按钮为文字或其他符号。

![](../../../assets/imgs/alert/3.png)

- 不可关闭：在关闭的标签上定义 `v-show` 或者 `v-if`，根据 `closable`(props) 的值来决定是否显示 关闭标签。
- 自定义 `close-text`：定义 `props` 中的 `closeText` 属性，并根据该属性来判断是直接显示自定义文字还是显示文字图标。
- 设置了回调：绑定一个 `click` 事件，点击按钮时，`emit` 该事件。

##### 不可关闭

在关闭的标签上定义 `v-show` 或者 `v-if`，根据 `closable`(props) 的值来决定是否显示 关闭标签。

```vue
<template>
  <i class="el-alert__closebtn el-icon-close" v-if="closable"></i>
</template>

<script>
export default {
  name: 'alert-03-close-btn',
  props: {
    closable: {
      type: Boolean,
      default: true
    }
  }
}
</script>
```

##### 自定义 `close-text`

定义 `props` 中的 `closeText` 属性，并根据该属性来判断是直接显示自定义文字还是显示文字图标。

- 使用 computed 来判断是使用自定义文字还是文字图标。

```vue
<template>
  <i class="el-alert__closebtn" :class="[closeClass]" v-if="closable">
    {{ closeText }}
  </i>
</template>
<script>
export default {
  computed: {
    closeClass() {
      return this.closeText === '' ? 'el-icon-close' : 'is-customed'
    }
  }
}
</script>
```

##### 设置回调

绑定一个 `click` 事件，点击按钮时，`emit` 该事件。

```vue
<template>
  <i class="el-alert__closebtn" @click="close">
    {{ closeText }}
  </i>
</template>
<script>
export default {
  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
```

#### 跟 关闭按钮相关的代码

```vue
<template>
  <i class="el-alert__closebtn" :class="[closeClass]" v-if="closable" @click="close">
    {{ closeText }}
  </i>
</template>
<script>
export default {
  props: {
    closable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    }
  },
  computed: {
    closeClass() {
      return this.closeText === '' ? 'el-icon-close' : 'is-customed'
    }
  }
}
</script>
```

测试：

```vue
<alert-03-close-btn type="success" title="不可关闭的alert" :closable="false" />
<br />
<alert-03-close-btn type="info" title="自定义 close-text" :close-text="'知道了'" />
<br />
<alert-03-close-btn type="warning" title="设置了回调的alert" @close="close" />
```

![](../../../assets/imgs/alert/alert-03-close-btn-1.png)

完整代码：[/src/components/alert-03-close-btn/src/main.vue](../../../samples/alert/src/components/alert-03-close-btn/src/main.vue)

### 4. 带有 icon

#### 4.1 需求

带有 icon 表示某种状态时提升可读性。

![](../../../assets/imgs/alert/4.png)

#### 4.2 实现思路

- 在 `props` 中定义一个 `showIcon` 属性。
- 根据该属性来判断是否显示 icon。
- 根据 `props` 中的 `type` 决定显示哪个 icon。

```vue
<template>
  <i class="el-alert__icon" :class="[iconClass, isBig]" v-if="showIcon"></i>
</template>
<script>
export default {
  name: 'alert-04-icon',
  props: {
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass() {
      return 'el-icon-' + this.type
    },
    // TODO 在判断实现辅助提示功能时实现
    isBig() {
      return ''
    }
  }
}
</script>
```

注意：此时 `is-big` 还未使用，我们先指定一个空的字符串，并用 `// TODO` 注释以免忘记实现。

测试：

完整代码：[/src/components/alert-04-icon/src/main.vue](../../../samples/alert/src/components/alert-04-icon/src/main.vue)

### 文字居中

#### 5.1 需求

使用 center 属性让文字水平居中。

![](../../../assets/imgs/alert/5.png)

#### 5.2 实现思路

- 在 `props` 中定义一个 `center` 属性。
- 根据该属性来决定是否使用 `is-center` 这个 class。

```vue
<template>
  <div class="el-alert is-light" :class="[typeClass, effectClass, isCenter]" v-show="visible">...</div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isCenter() {
      return this.center ? 'is-center' : ''
    }
  }
}
</script>
```

测试：传入 `:center="true"`

![](../../../assets/imgs/alert/alert-05-center-1.png)

完整代码：[/src/components/alert-05-center/src/main.vue](../../../samples/alert/src/components/alert-05-center/src/main.vue)

### 6. 带有辅助性文字介绍

#### 6.1 需求

包含标题和内容，解释更详细的警告。

![](../../../assets/imgs/alert/6.png)

#### 6.2 实现思路

- 在 `props` 中定义 `description` 属性。
- 根据该属性来判断是否显示描述信息。

此外

- 定义 `isBoldTitle` 来根据 `description` 属性来决定是否加深标题的颜色。
- 当没有 title 的时候，单独显示 `description`。

```vue
<template>
  <div class="el-alert__content">
    <span class="el-alert__title" :class="[isBoldTitle]" v-if="title">
      {{ title }}
    </span>
    <p class="el-alert__description" v-if="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    isBoldTitle() {
      return this.description ? 'is-bold' : ''
    }
  }
}
</script>
```

测试

```vue
<alert-06-description
  type="success"
  title="带辅助性的文字介绍"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
/>
```

![](../../../assets/imgs/alert/alert-06-description-1.png)

完整代码：[/src/components/alert-06-description/src/main.vue](../../../samples/alert/src/components/alert-06-description/src/main.vue)

### 7. 带有 icon 和辅助性文字介绍：

#### 7.1 需求

带有 icon 和辅助性文字介绍

![](../../../assets/imgs/alert/7.png)

#### 7.2 实现思路

- 定义两个图标样式：大图标和小图标。
- 根据 `props` 中的 `description` 属性来判断显示大图标或者小图标。
- 默认是小图标。

```vue
<template>
  <i class="el-alert__icon" :class="[iconClass, isBig]" v-if="showIcon"></i>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    isBig() {
      return this.description ? 'is-big' : ''
    }
  }
}
</script>
```

测试

```vue
<alert-07-description-icon
  type="success"
  title="带辅助性的文字介绍"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
  :show-icon="true"
/>
```

![](../../../assets/imgs/alert/alert-07-description-icon-1.png)

完整代码：[/src/components/alert-07-description-icon/src/main.vue](../../../samples/alert/src/components/alert-07-description-icon/src/main.vue)

### 添加插槽

添加两个插槽

- title
- description

注意：之前判断 `title` 和 `description` 非空的地方，现在需要加上 `$slots.title` 和 `$slots.default` 判断。

```vue
<template>
  <transition name="el-alert-fade">
    <div class="el-alert__content">
      <span class="el-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <p class="el-alert__description" v-if="description || $slots.default">
        <slot>
          {{ description }}
        </slot>
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    isBig() {
      return this.description || this.$slots.default ? 'is-big' : ''
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>
```
