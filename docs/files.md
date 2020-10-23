# 【element ui源代码】目录

## TL;DR

分析一个工程，最好是先从目录结构开始。
具体如下：

```
element-dev-2.13.2/
├── .github/            // element-ui的贡献指南、issue和PR模板
├── build/              // 打包相关的配置
├── examples/           // 官网的代码
├── packages/           // 存放组件的文件夹
├── src/                // 存放入口文件和一些工具辅助函数
├── test/               // 测试文件夹
├── types/              // 类型声明文件
├── .babelrc            // babel 的配置文件
├── .eslintignore       // eslint 的忽略文件
├── .eslintrc           // eslint的配置
├── .travis.yml         // github cicd 工具
├── CHANGELOG.en-US.md
├── CHANGELOG.es.md
├── CHANGELOG.fr-FR.md
├── CHANGELOG.zh-CN.md
├── FAQ.md
├── LICENSE
├── Makefile            // 输入 make 命令将会执行 Makefile 文件中的某个命令
├── README.md
├── components.json     // 标明了组件的文件路径，打包的时候自动引入相关的组件
├── element_logo.svg    // logo
├── package.json        // package.json
└── yarn.lock
```

## package.json

```
{
  "name": "element-ui",
  "version": "2.13.2",
  "description": "A Component Library for Vue.js.",
  "main": "lib/element-ui.common.js",
  "files": [
    "lib",
    "src",
    "packages",
    "types"
  ],
  "typings": "types/index.d.ts",
  "scripts": {
    ...
  },
  "faas": [
    {
      "domain": "element",
      "public": "temp_web/element"
    },
    {
      "domain": "element-theme",
      "public": "examples/element-ui",
      "build": [
        "yarn",
        "npm run deploy:build"
      ]
    }
  ],
  "repository": {
    "type": "git",
    "url": "git@github.com:ElemeFE/element.git"
  },
  "homepage": "http://element.eleme.io",
  "keywords": [
    "eleme",
    "vue",
    "components"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ElemeFE/element/issues"
  },
  "unpkg": "lib/index.js",
  "style": "lib/theme-chalk/index.css",
  "dependencies": { 
    ...
  },
  "peerDependencies": {
    "vue": "^2.5.17"
  },
  "devDependencies": { 
    ... 
  }
}

```

- name: 【必须字段】当前模块/包名称。这个名字会作为参数被传入require()，所以它应该短且意义清晰。长度必须小于等于214个字符，不能以"."(点)或者"_"(下划线)开头，不能包含大写字母。
- version: 【必须字段】当前包的版本号，初次建立默认为1.0.0 (格式：大版本.次要版本.小版本)。这个字段可以显示当前项目的版本迭代进度。
- description: 当前包的描述信息，是一个字符串。这个字段有助于别人搜索你的项目。如果 package.json 中没有这个字段，npm使用项目中的 `README.md` 的第一行作为描述信息。
- main: 指定了项目加载的入口文件。 默认值是根目录下的 `index.js`。
- scripts: scripts是一个由脚本命令组成的对象，他们在包不同的生命周期中被执行。key是生命周期事件，value是要运行的命令。细节可以参考 [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html) 。
- files: 在我们使用 `npm publish` 命令后推送到 `npm` 服务器的文件列表，如果指定文件夹，则文件夹内的所有内容都会包含进来。
- faas: 与部署相关。
- repository: 代码存放的类型。
- homepage: 项目主页或者文档首页。
- keywords: 当在包管理器里搜索包时很有用。
- license: 开源协议。
- unpkg: 让npm上所有的文件都开启 cdn 服务。详细可阅读 [package.json 非官方字段集合](https://segmentfault.com/a/1190000016365409) 。
- style: 声明当前模块包含style部分，并制定入口文件

## 推荐文章

- package.json详解: https://juejin.im/post/6844904114762022926
- 重新认识 package.json: https://juejin.im/post/6844904159226003463
- 文件 package.json 的说明文档: https://juejin.im/post/6844903894099689485
