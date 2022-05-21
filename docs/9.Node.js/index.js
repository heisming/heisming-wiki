const versionControl = require('./版本管理');
const packageControl = require('./包管理工具');

module.exports = {
  title: 'NodeJs',
  children: [
    versionControl,
    packageControl,
  ]
}