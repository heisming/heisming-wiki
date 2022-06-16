# npm换源
> [原文](https://www.virtualbing.fun/#/NodeJS/npm/%E6%8D%A2%E6%BA%90-%E5%B7%A5%E5%85%B7%E7%89%88)
> windows环境下nrm可能安装不成功，因为它已经**不再更新**了！

## 初始化换源流程

### 先安装管理工具

```bash
$ npm i -g yarn
$ npm i -g pnpm
```

### 正式安装

```bash
$ npm i nnrm -g --registry=http://registry.npmmirror.com
$ npm i nyrm -g --registry=http://registry.npmmirror.com
$ npm i prm -g --registry=http://registry.npmmirror.com
```

> 在 `Windows` 环境下要用 `bash` 终端安装。



使用taobao镜像源

```bash
$ nnrm use taobao
$ nyrm use taobao
$ prm use taobao
```

### 说明

`nnrm` 是 `npm` 和 `yarn` 的源管理工具，名字来源： `nnrm = new nrm` ，意为新的 `nrm` 工具。 `nrm` 的全称是： `npm registry manager` 。

同理， `nyrm` 对应 `yrm` ， `prm` 对应 `pnpm` 。

查看可用源的命令是：

```
$ nnrm ls
$ nyrm ls
$ prm ls
```

> 通过 `nnrm` 更改包镜像源地址并不能完全OK，大部分项目都或多或少的涉及到了**二进制文件**，这个时候需要**单独指定**二进制文件路径来完成换源，国内最常用的就是[taobao源](https://npmmirror.com/mirrors)，可以访问来查看需要的二进制文件地址。



## 换源命令

```bash
$ npm config get registry   # 获取当前镜像源

$ npm config set registry https://registry.npmmirror.com   # 设置镜像源为淘宝源
$ npm config set registry https://registry.npmjs.org   # 设置镜像源为npm官方源
$ npm config set registry https://registry.yarnpkg.com   # 设置镜像源为yarn官方源
$ npm config set registry http://r.cnpmjs.org   # 设置镜像源为cnpm源
```



## 换源配置

尽管我们使用 `nrm` ， `yrm` 等换源工具将 `registry` 指向了 `taobao` 镜像源，但是在下载一些二进制包的时候还是会遇到网络问题。

解决办法是：在项目的**根目录**配置 `.npmrc` （使用npm） 或 `.yarnrc` （使用yarn） 文件，指定二进制包地址。

### .npmrc 文件完整版配置

```bash
home="https://npmmirror.com"
registry="https://registry.npmmirror.com/"

#前台相关
sass_binary_site="https://npmmirror.com/mirrors/node-sass/"
canvas_binary_host_mirror="https://npmmirror.com/mirrors/node-canvas-prebuilt/"
phantomjs_cdnurl="https://npmmirror.com/dist/phantomjs/"
electron_mirror="https://npmmirror.com/mirrors/electron/v"
sqlite3_binary_host_mirror="http://npmmirror.com/mirrors/"
profiler_binary_host_mirror="https://npmmirror.com/mirrors/node-inspector/"
chromedriver_cdnurl="http://npmmirror.com/mirrors/chromedriver/"
operadriver_cdnurl="http://npmmirror.com/mirrors/operadriver/"
electron_builder_binaries_mirror="http://npmmirror.com/mirrors/electron-builder-binaries/"

#后台相关
grpc_node_binary_host_mirror="https://npmmirror.com/mirrors/"
node_sqlite3_binary_host_mirror="http://npmmirror.com/mirrors/"
nodejieba_binary_host_mirror="https://npmmirror.com/mirrors/nodejieba"
```

### .yarnrc 文件完整版配置

```bash
home "https://npmmirror.com"
registry "https://registry.npmmirror.com/"
disturl "https://npmmirror.com/dist"

#前台相关
sass_binary_site "https://npmmirror.com/mirrors/node-sass/"
canvas_binary_host_mirror "https://npmmirror.com/mirrors/node-canvas-prebuilt/"
phantomjs_cdnurl "https://npmmirror.com/dist/phantomjs/"
electron_mirror "https://npmmirror.com/mirrors/electron/v"
sqlite3_binary_host_mirror "http://npmmirror.com/mirrors/"
profiler_binary_host_mirror "https://npmmirror.com/mirrors/node-inspector/"
chromedriver_cdnurl "http://npmmirror.com/mirrors/chromedriver/"
operadriver_cdnurl "http://npmmirror.com/mirrors/operadriver/"
electron_builder_binaries_mirror "http://npmmirror.com/mirrors/electron-builder-binaries/"

#后台相关
grpc_node_binary_host_mirror "https://npmmirror.com/mirrors/"
node_sqlite3_binary_host_mirror "http://npmmirror.com/mirrors/"
nodejieba_binary_host_mirror "https://npmmirror.com/mirrors/nodejieba"
```

