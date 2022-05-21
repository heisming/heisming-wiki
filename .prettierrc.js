//no .js config
// {
//   "singleQuote": true,
//   "trailingComma": "none",
//   "semi": true,
//   "printWidth": 160,
//   "bracketSpacing": true,
//   "arrowParens": "avoid"
// }

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
}
