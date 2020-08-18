/**
 * 制作 显示代码的slot
 * @param md
 */
// 覆盖默认的 fence 渲染策略
// 处理 html 相关的逻辑
module.exports = md => {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    // 判断：前一个是 demo，当前是 html
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/);

    if (token.info === 'html' && isInDemoContainer) {
      // 1. 包上 slot
      // 2. 把html代码转义
      return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
    }
    // 否则就用默认的
    return defaultRender(tokens, idx, options, env, self);
  };
};
