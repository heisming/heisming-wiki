# Prettier
>https://www.prettier.cn/

## `.prettierrc.js`

## 一、安装

### 安装命令
```bash
//npm
npm install --save-dev --save-exact prettier
//yarn
yarn add --dev --exact prettier
```

## 二、文件准备
在根目录下创建`.prettierrc.js`配置文件及`.prettierignore`忽略文件


## 三、创建配置
1. 创建格式化参考规则
在`.prettierrc.js`中写入以下内容：
```js
module.exports = {
  singleQuote: true,// 使用单引号
  semi: true, // 句末使用分号
  tabWidth: 2,// 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  printWidth: 160, // 单行长度
  endOfLine: 'auto', // 结束行形式
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, // 多属性html标签的‘>’折行放置
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  eslintIntegration: true,
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true,
  },
  // 额外的
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x 。always：总是需要
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
};
```

格式化规则还可以写在如下文件中(按优先级由高至低排列)：
1. 项目的package.json文件中
2. `.prettierrc.json`或 `.prettierrc.yml`文件中

```js
//格式示例
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```
3. `.prettierrc.js`或 `prettier.config.cjs`文件中
```js
//格式示例
module.exports = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```
>除此之外还可以写在很多类型中，详见 [preitter](https://www.prettier.cn/) 官网

2. 配置忽略文件

在`.prettierignore`中写入以下内容：
```js
# Ignore artifacts:
build
coverage

# Ignore all HTML files:
*.html
```

## 四、格式化文档

1. 命令行格式化

（1）格式化全部文档
```JS
npx prettier --write .
//或
yarn prettier --write .
```

（2）格式化指定文档
```JS
npx prettier --write src/components/Button.js
//或
yarn prettier --write src/components/Button.js
```

（3）检查文档是否已格式化
```JS
npx prettier --check .
//或
yarn prettier --check .
//检查指定文件同上
```

2. 利用编辑器插件进行格式化
在编辑器中搜索相应的 Prettier 安装，即可运用编辑器快捷键进行格式化。

|  常见的编辑器   | 对应插件名  |
|  :----:  | :----:  |
| VS Code  | Prettier - Code formatter |
| Emacs  | prettier-emacs |
| Vim  | vim-prettier |
| Sublime Text  | JsPrettier |
| Atom  | prettier-atom |
	
>❗重要提示：编辑器中的 Prettier 格式化规则也可在设置中编写，但实际执行时会以本地规则为优先。

3. 集成在 ESlint 中

ESlint 与 Prettier 可能会冲突，故需做如下设置：

```JS
//1. 安装 eslint-config-prettier 插件
npm i -D eslint-config-prettier
//2. 在eslint的配置文件中写入以下内容
 extends: ['plugin:prettier/recommended'], // 避免与 prettier 冲突
```

4. 集成在 git 生命周期中
搭配 lint-staged 与 husky 完成
>-----如下为内容以上规则（三-1）对应的美化效果，供参考----- [配置调试地址](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEAzArlMMCW0AEAEnADYkQDqEATiQCYAUwA5tXHLlM-gLz4A6IABalyggDT5W7eHV74A5IKq06ghZIDOOEghjzUAQxKa4k6AFkI6UwHkAbnGriAvgEp8wflHwCff3119AEd0CHgABWoIAAdNABE4AFsIeS9-X0MkAEZxb19fBQAjAFoAJgUkMryMxTBKgGZ8-BdvZqD8Q2pogHcIroQE5NSeAA8eAD5R5uacVAYAQmkOHC43YDYYdGofKHQyFwBuNtr8AHoz-AAVW3jbJHx46AV9Gzh8akMoOggk-FWPgg6E52hx8Hs-nwLIYYEIAHSocg0fAMaGwuGfb6-BgeABU+GyAFEANQAdjccJgEAAyjBqKtmDiMXAYiRDGA4Awzvx+HCeXRiWccMxJIJBG4Tr5NtsfAAeOg4ez4MBszSaAByhiScB4CmIZEoNHoCnwuBguh4wAABgBNaydNj4ew4bRU6jg9BJIpOfAAEmAHr+LitLnwlmsdkc1Et4beDicLgmkoKss0dOgzAmAeWnGYcM0JBwHIY+AADJJsvgKVSAKoxGJOADChlMOPwxKkbBWXHzheL2WrEAAMhAek2W5yPC5ZWc09EuEnaiwu7m4UDNBQcLCGBJxfgAPwCEBH-APVMxL74NMATwtwGAkHI1AeSn40mvChciYkR5nmgvUATC0zS+LKySLvwMDZiucByK0UCQTO4EgZ4KLaLosASqcB5HnyIAob4DyCAsgjwShM4KvYEzHAhUAuCA4ggLEuDQJoyCgF0vT9GwUBsSgxg9IY15sYxRSfGAADWHDUheYAMsgdLoGYIDJN6dDAnQQ5fMw6CGMwcAAGI0EkMK5sgICGOgVIMcIMBJCQFBCFucD-uycDUoMW6Klu17mWAao2aspjUDAUR6SZyBGCYykAFaaKMABC4lSTA1JanAQ6rHAkXGKYjFxaM1IMroACKYTwDl0WMRe1DBeZRSGN6JA2TE9KwJudCwsgAAc5YgK1ECmBQnwxOZrUuU4jg2aE4RwFEsR8RZmglFA7AaTZbChDgbBhcwEVIFFeUgKYSQ4Ap1BKYx2hcKV5XZQduXKTAjUdV1VSMXShg6Ayja-PtKmaAArDZbxXI1fGHcp9hKQAkt8ejUmA9IxDAACC3y0re92Q1+QA)
