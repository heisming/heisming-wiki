const React = require('./React')
const Vue = require('./Vue')
const Platform = require('./跨平台')

module.exports = {
  title: '热门框架',
  children: [
    React, 
    Vue, 
    Platform,
    {
      title: '组件库',
      path: '/2.热门框架/组件库.md'
    }
  ]
}