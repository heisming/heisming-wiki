const npm = require('./npm');
const pnpm = require('./pnpm');

module.exports = {
  title: '包管理工具',
  children: [
    npm,
    pnpm,
  ]
}