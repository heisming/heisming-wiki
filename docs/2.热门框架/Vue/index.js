const stateManagement = require('./状态管理')
const hooks = require('./hooks')

module.exports = {
  title: 'Vue',
  children: [
    hooks,
    stateManagement,
  ]
}