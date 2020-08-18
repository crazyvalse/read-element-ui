/**
 * 这个插件可以让你支持内容块：比较常见的是提示、警告、危险。用于强调一块特定内容。
 * ::: warning
 * *here be dragons*
 * :::
 *
 * <div class="warning">
 *   <em>here be dragons</em>
 * </div>
 *
 * -------------------------------------------------------------------
 *
 * :::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
 *
 * ```html
 * <el-row>
 *   <el-button>默认按钮</el-button>
 *   <el-button type="primary">主要按钮</el-button>
 *   <el-button type="success">成功按钮</el-button>
 *   <el-button type="info">信息按钮</el-button>
 *   <el-button type="warning">警告按钮</el-button>
 *   <el-button type="danger">危险按钮</el-button>
 * </el-row>
 * ```
 * :::
 *
 * <demo-block>
 * <div><p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>
 * </div>
 * <!--element-demo: <el-row>
 * <el-button>默认按钮</el-button>
 * <el-button type="primary">主要按钮</el-button>
 * <el-button type="success">成功按钮</el-button>
 * <el-button type="info">信息按钮</el-button>
 * <el-button type="warning">警告按钮</el-button>
 * <el-button type="danger">危险按钮</el-button>
 * </el-row>
 * :element-demo-->
 * 1. 组织标题 及 描述
 * 2. 获得示例代码，并用 <!--element-demo 包装，以便后面制作 组件
 */
const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'demo', {
    // 判断块级后的标签是否是demo，例如 :::demo
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    // 改写块级内的渲染规则
    render(tokens, idx) {
      // 1. 获得 :::demo 后面的文字内容
      // match的参数放正则的话，返回的是数组
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

      // open标签
      if (tokens[idx].nesting === 1) {

        // 1.1 ":::demo" 后面的描述信息
        const description = m && m.length > 1 ? m[1] : ''
        // 2. 获得 :::html中的内容
        // 当前的规则是下一个 :::html 中的内容，即 template模板
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        // 3. 套上 <demo-block> 壳子，调用 <demo-block> 组件，内部是demo-block组件的slot
        // 此时 ```html 还在，下面这段是写在 :::demo 里面
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-demo: ${content}:element-demo-->
        `
      }
      // 闭
      return '</demo-block>';
    }
  });

  // 5. 使用固定的模板
  // 如果遇到 :::warning 就再在div上添加 class='tip'
  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};
