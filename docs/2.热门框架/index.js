const React = require('./React')
const Vue = require('./Vue')
const uniApp = require('./uni-app')

module.exports = {
  title: '热门框架',
  children: [
    React, 
    Vue, 
    uniApp,
    {
      title: '组件库',
      path: '/2.热门框架/组件库.md'
    }
  ]
}