# VSCode Chrome Debugger断点映射的原理
用 VSCode Debugger 调试 Vue 和 React 项目，经常会遇到一些断点相关的问题，比如：
- 在文件里打的断点是灰的，一直不生效
- 断点断在了奇怪的文件和位置

不知道什么原因导致的，该怎么解决。
因为不清楚 VSCode Debugger 里打的断点是怎么在网页里生效的。

## 断点映射的原理 