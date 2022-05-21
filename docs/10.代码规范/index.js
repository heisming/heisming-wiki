const tools = require('./插件工具')
const css = require('./CSS')

module.exports = {
  title: '代码规范',
  children: [
    tools,
    css,
    {
      title: 'JS',
      path: '/10.代码规范/JS',
    },
    {
      title: '其他',
      path: '/10.代码规范/其他',
    },
  ]
}