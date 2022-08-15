const uniApp = require('./uni-app')
const electron = require('./Electron')

module.exports = {
  title: '跨平台',
  path: '',
  children: [
    uniApp,
    electron
  ]
}