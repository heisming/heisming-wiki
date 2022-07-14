const wlanVisit = require('./WLAN访问');
module.exports = {
  title: '防火墙',
  children: [
    wlanVisit,
    {
      title: '端口转发',
      path: '/19.OpenWrt/firewall/端口转发.md',
    },
    {
      title: 'DMZ',
      path: '/19.OpenWrt/firewall/DMZ.md',
    }
  ]
}