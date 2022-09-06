const stateManagement = require('./状态管理')
const hooks = require('./hooks')

module.exports = {
  title: 'Vue',
  path: '/2.热门框架/Vue/',
  children: [
    hooks,
    stateManagement,
  ]
}