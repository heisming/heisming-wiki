const UPnP = require("./UPnP");
const firewall = require('./firewall');

module.exports = {
  title: 'OpenWrt',
  children: [
    firewall,
    UPnP
  ]
}