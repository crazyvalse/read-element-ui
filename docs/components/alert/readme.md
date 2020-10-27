# Element 组件分析 —— Alert

## TL;DR

很多同学一提到开源项目的代码，都会"色变"，认为自己的基础不好，不足以读懂源代码。本质上讲开源项目也是普通的工程，我们可以把里面的每一个组件都可以当成是一个普通的 UI 组件。因此，我们按照开发流程的角度来看待 `element-ui` 中的代码(组件)。

分别从下面几个流程来分析：

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 总结

- 所有的计算全部都放到 computed 中，让 html 尽量简洁。
