/**
 * 1. 给标题做锚点，以大串作为id标识
 * 2. 把 :::demo 做成 <demo-block>
 * 3. 获得示例代码，并用 <!--element-demo 包装，以便后面制作 组件
 * 4. 组织 代码显示的code块； <template slot="highlight">
 */

// 链式设置 markdown-it插件
// https://www.npmjs.com/package/markdown-it
// https://www.npmjs.com/package/markdown-it-chain
const Config = require('markdown-it-chain');
// 这个插件可以对标题进行锚点抽取，以便阅读文档时能快速定位位置。
// Button 按钮
// ====>>>> <h2 id="button-an-niu"><a class="header-anchor" href="#button-an-niu">¶</a> Button 按钮</h2>
const anchorPlugin = require('markdown-it-anchor');
// 把中文转成 slugify 你好 # ni-hao
// Button 按钮 ===>>> button-an-niu
const slugify = require('transliteration').slugify;
// 标记特殊块 例如代码块
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

config
  .options.html(true).end()

  // 给标题添加 锚点
  .plugin('anchor').use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    }
  ]).end()

// 把 :::demo 转成 demo-block
  .plugin('containers').use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
