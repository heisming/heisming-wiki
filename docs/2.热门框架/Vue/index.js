const stateManagement = require('./状态管理')
const build = require('./构建打包')
const hooks = require('./hooks')

module.exports = {
  title: 'Vue',
  path: '/2.热门框架/Vue/',
  children: [
    build,
    hooks,
    stateManagement,
  ]
}