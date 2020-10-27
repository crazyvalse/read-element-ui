# 【Element 组件】 — Alert 警告

## TL;DR

很多同学一提到开源项目的代码，都会"色变"，认为自己的基础不好，不足以单独读懂源代码。本质上，开源项目也是普通的工程，我们可以把 `element-ui` 中的 UI 组件可以当成是普通的组件。为了能让同学快速熟悉 UI 组件的开发流程，这篇文档将按照实际工作中的开发流程来分析(开发) `element-ui` 中的代码。

我们就把 [element 官方文档](https://element.eleme.cn/#/zh-CN/component/quickstart) 作为一个需求文档，然后我们按照这篇文档来实现里面的功能。

我们从下面几个流程进行分析：

- [需求](https://element.eleme.cn/#/zh-CN/component/alert)
- 概要设计（省）
- [详细设计](./analysis.md)
- [开发](./develop.md)
- 测试
- 复盘

## 总结

- 所有的计算全部都放到 computed 中，让 html 尽量简洁。
