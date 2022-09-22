const uniApp = require('./uni-app')
const electron = require('./Electron')
const tauri = require('./Tauri')

module.exports = {
  title: '跨平台',
  path: '',
  children: [
    uniApp,
    electron,
    tauri
  ]
}