## 【手把手】 教你实现 `Alert 警告` 组件

当我们实现一个组件的功能时，最好是从布局开始，然后再逐一实现这个组件中的功能。

### 1. 布局

### 2. 隐藏不需要的页面元素

### 3. 实现基本功能

- 可关闭
- 主题色
- 文本

#### 3.1 可关闭

1. 在 `data` 中定义 `visible` 属性
2. 在最外层的**div**中定义 `v-show="visible"`
3. 在**关闭按钮**标签中定义 `@click="close"`
4. 触发 `click事件` 时，`this.visible = false`

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

1. 在 `props` 中定义 `type` 属性。
2. 根据 `type` 决定 `class`。

```vue
<template>
  <div class="el-alert is-light" :class="['el-alert--' + type]" v-show="visible">...</div>
</template>

<script>
/**
 * 1. 可关闭
 * 2. 主题色
 * 3. 文本
 */
export default {
  name: 'alert-01-basic',
  props: {
    type: {
      type: String,
      default: 'info'
    }
  }
  // ...
}
</script>
```

测试：在外部传入`type=success`

![](../../assets/imgs/alert/alert-01-basic-1.png)

### 3.3 文本

1. 在 `props` 中定义 `title` 字段。
2. 在 html 中用 `{{ title }}` 来显示。

```vue
<template>
  <div class="el-alert is-light" :class="['el-alert--' + type]" v-show="visible">
    ...
    <div class="el-alert__content">
      <span class="el-alert__title">
        {{ title }}
      </span>
      ...
    </div>
  </div>
</template>

<script>
/**
 * 1. 可关闭
 * 2. 主题色
 * 3. 文本
 */
export default {
  name: 'alert-01-basic',
  props: {
    // ...
    title: {
      type: String,
      default: ''
    }
  }
  // ...
}
</script>
```

### 3.4 完善

自此 `alert 警告` 组件的基本需求已经完成了。为了提升体验，我们在最外层添加 `transition` 标签，以获得一个动画效果。

```css
.el-alert-fade-enter,
.el-alert-fade-leave-active {
  opacity: 0;
}
```

### 3.5 优化

我们都知道在页面当中最容易变化的就是 html 和样式了。我们尽可能的使 html 部分看起来简单、整洁，以便于后期的维护。因此我们把所有的数据处理全部都放到 script 中。

- 使用 computed 的 `typeClass` 代替 html 中的判断。

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

完整代码：[/src/components/alert-01-basic/src/main.vue](../../samples/alert/src/components/alert-01-basic/src/main.vue)

## 主题

Alert 组件提供两个不同的主题：light 和 dark。

![](../../assets/imgs/alert/2.png)

1. 定义两套 css 主题('is-light' 和 'is-dark')。
2. 在 `props`中定义 effect 属性。
3. 在组件最外层定义一个 div，并绑定 `class`，根据 `effect` 来决定使用哪个主题。

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

![](../../assets/imgs/alert/alert-02-theme-1.png)

完整代码：[/src/components/alert-02-theme/src/main.vue](../../samples/alert/src/components/alert-02-theme/src/main.vue)

### 自定义关闭按钮

#### 3.1 需求

自定义关闭按钮为文字或其他符号。

![](../../assets/imgs/alert/3.png)

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

![](../../assets/imgs/alert/alert-03-close-btn-1.png)

完整代码：[/src/components/alert-03-close-btn/src/main.vue](../../samples/alert/src/components/alert-03-close-btn/src/main.vue)

### 4. 带有 icon

#### 4.1 需求

带有 icon 表示某种状态时提升可读性。

![](../../assets/imgs/alert/4.png)

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

完整代码：[/src/components/alert-04-icon/src/main.vue](../../samples/alert/src/components/alert-04-icon/src/main.vue)

### 文字居中

#### 5.1 需求

使用 center 属性让文字水平居中。

![](../../assets/imgs/alert/5.png)

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

![](../../assets/imgs/alert/alert-05-center-1.png)

完整代码：[/src/components/alert-05-center/src/main.vue](../../samples/alert/src/components/alert-05-center/src/main.vue)

### 6. 带有辅助性文字介绍

#### 6.1 需求

包含标题和内容，解释更详细的警告。

![](../../assets/imgs/alert/6.png)

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

![](../../assets/imgs/alert/alert-06-description-1.png)

完整代码：[/src/components/alert-06-description/src/main.vue](../../samples/alert/src/components/alert-06-description/src/main.vue)

### 7. 带有 icon 和辅助性文字介绍：

#### 7.1 需求

带有 icon 和辅助性文字介绍

![](../../assets/imgs/alert/7.png)

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

![](../../assets/imgs/alert/alert-07-description-icon-1.png)

完整代码：[/src/components/alert-07-description-icon/src/main.vue](../../samples/alert/src/components/alert-07-description-icon/src/main.vue)

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
