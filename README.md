# 读 element-ui 源代码

简单而言，组件可以分为两种：UI 组件和业务组件。其中，业务组件具有很强的业务针对性，往往难以复用。而 UI 组件则相反，只要结构、功能、样式合适，那么这个 UI 组件就是可以被复用的。

本篇文档的目的是希望通过分析 `element-ui` 的源代码，让同学们能够了解并学会如何开发 UI 组件，以便于让更多的自开发组件在项目中复用起来。


以 [alert](./docs/components/alert/readme.md) 为例：

- [需求](https://element.eleme.cn/#/zh-CN/component/alert)
- 概要设计（省）
- [详细设计](./analysis.md)
- [开发](./develop.md)
- 测试
- 复盘
- 
## 推荐文章

- Element 非官方分析 https://www.jianshu.com/c/c71f9c127c71
- element-ui 组件解读 （一） input 组件 https://juejin.im/post/6844903937439432718
- 来聊聊源码学习 https://zhuanlan.zhihu.com/p/37805692
- Element-UI 技术揭秘 https://zhuanlan.zhihu.com/p/80107218
- ElementUI 的构建流程 https://segmentfault.com/a/1190000016419049
- Element 源码系列——初识框架 https://me.csdn.net/m0_37972557
- element 源码学习一 —— 认识框架 https://www.jianshu.com/p/92d0e78c9906
- 前端 UI 组件库搭建指南 https://zhuanlan.zhihu.com/p/94920464
- 从 Element UI 源码的构建流程来看前端 UI 库设计 https://juejin.im/post/6844904197863964685
