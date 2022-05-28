## Node.js 基础快速学习

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gvhjs57uv3j31h40u0tb8.jpg" alt="自我介绍" style="width:100%;" />





### 一、Node.js 介绍及开发环境搭建



#### （1）什么是服务端？什么是客户端？

> 1. 服务端：服务端（Server）也称为后端（Back-end），是指网络中能对其它机器「提供服务」的计算机系统，简单的讲：服务器端就是存放文件（图片、音频、视频等）、数据（数据库）、网页（代码）等的服务器。
>
> 2. 客户端：客户端（Client）也称为前端（Front-end），是指与服务器相对应，为客户提供本地服务的程序，简单的讲：客户端就是我们使用的手机、电脑（包括我们使用的浏览器 Chrome、IE、Firefox 等），用来访问服务端的文件、数据、代码等。
>
> 3. 服务端和客户端通过网络（Internet）进行数据传递和交互。



#### （2）什么是 Node.js ？

> ​	官方文档地址：https://nodejs.org/zh-cn/

> 1. Node.js® 是一个基于 Chrome V8 引擎的 JavaScript 运行时。
>
> - Node.js 不是一个库，也不是一个框架，也不一门语言。
> - Node.js 是一个 JavaScript 运行时环境，简单的讲 Node.js 是用来解析和执行 JavaScript 代码的环境。
> - 以前咱们 JavaScript 只能运行在客户端（浏览器环境），现在 JavaScript 可以完全脱离浏览器环境来运行在服务器端，这一切都归功于 Node.js。

> 2. 浏览器中的 JavaScript 主要在干什么？
>
> - EcmaScript 语言体系服务。
>   - 变量的声明  `var、function、Array、Object` 等；
>   - 变量的使用 +、-、*、/、%、&&、|| 等。
>   - 顺序、分支`if、switch`、循环`for、while`基础操作逻辑  ... 等。
> - 基于各种客户端浏览器解析渲染引擎（浏览器内核），进行 BOM、DOM 操作。
>   - 获取页面元素 `getElementsByClassName` 等；
>   - 操作页面元素 `appendChild` 等；
>   - 调用浏览器内置 API  ... 等。

> 3. Node.js 中的 JavaScript 主要在干什么？
>
> - EcmaScript 语言体系服务（同上浏览器端）。
> - Node.js 中没有 BOM、DOM 操作。
> - 基于 Google Chrome V8 服务端解析引擎，进行服务器级别的 API 操作。
>   - 文件读写；
>   - http 服务；
>   - 数据库操作服务  ... 等。

> 4. 解析引擎是什么？
>
> - 代码只是具有特定格式的字符串文档而已。
> - 引擎可以识别代码，将代码解析成为可以执行的二进制机器码（汇编），再交由机器进行运行，最终达成目标。
> - Google Chrome 的 V8 引擎最开始是运行在客户端（浏览器端），后来因为 V8 非常强大，便把 V8 在浏览器外部服务端执行，成为了一种服务器端脚本，比如：java、PHP、Python、Golang 等等也都是服务器端运行脚本语言环境。

> 5. Node.js 常用场景有哪些？
>
> - Web Server
>   - RESTful API
>   - 统一 Web 应用的 UI 层
>   - 大量 Ajax 请求的应用
> - 本地代码构建
>   - webpack
>   - gulp
> - 实用工具开发

> 6. 为什么要学习 Node.js ？
>
> - 学习 Node.js，可以让我们前端小伙伴和后端小伙伴，更加紧密的合作，因为理解，所以更和谐。
> - 学习 Node.js，可以让我们前端小伙伴未来成长为「全栈」开发工程师，奠定一个良好的基础，给我们更大的发展空间。
> - Node.js 使用 JavaScript 作为程序语言，对前端开发人员来讲，免去了学习后端开发必须新学一门语言体系的烦恼。

``

#### （3）Node.js 环境搭建及 helloWorld 体验

> 1. 环境安装与版本查看
>
> Node.js 安装包下载地址：https://nodejs.org/en/download/
>
> ``` bash
> // 查看版本号
> node --version
> node -v
> ```
>
> 2. 命令行 运行 Hello World 
>
> ```bash
> node
> >console.log('Hello World');
> ```
>
> 3. JavaScript 脚本运行 Hello World
>
> ```javascript
> // 创建一个 JavaScript 脚本文件 01-helloWorld.js
> const hello = 'Hello World!';
> console.log(hello);
> ```
>
> ```bash
> // cd 进入到index.js 所在文件夹
> node 01-helloWorld.js;
> ```
>
> 4. webServer 浏览器输出 Hello World
>
> ```javascript
> // 创建一个 JavaScript 脚本文件 02-server.js
> const http = require("http");
> http
>   .createServer((req, res) => {
>     res.writeHead(200, {
>       "content-type": "text/plain",
>     });
>     res.write("Hello World!");
>     res.end();
>   })
>   .listen(3000);
> ```
>
> 5. 使用 nodemon 工具实现自动检测更新热加载
>
> ```bash
> npm install -g nodemon
> #或
> npm install --save-dev nodemon
> # 热启动 node 服务
> nodemon ./main.js
> ```



### 二、Node.js 模块及包管理工具



#### （1）Node.js 模块及 CommonJS 规范

> 1. 为什么要有模块的概念？使用模块有什么好处？
>
> - 把大量的代码放在一个文件内，维护困难，将代码进行分组，分别放在不同的独立文件，便可大大提高代码的可维护性。
> - 存放代码的独立文件我们也称作「模块 module 」，在 Node.js 环境中，一个 `.js` 文件就称之为一个模块。
> - Node.js 可以引用我们自己写好的自定义模块，也可以引用 Node 内置的模块和来自第三方的模块。
> - 使用模块还可以避免函数名和变量名冲突，相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。

> 2. CommonJS 规范
>
> - Node.js 模块加载机制被称为 CommonJS 规范，在这个规范下，每个 `.js` 文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，`a.js` 和 `b.js` 都申明了全局变量 `let s = 'xxx'；`，但互不影响。
> - 一个模块想要对外暴露变量（函数也是变量），可以用 `module.exports = variable;`。
> - 一个模块要引用其他模块暴露的变量，用 `const ref = require('module_name');` 就拿到了引用模块的变量。

> 3. 模块定义、接口暴露和引用接口
>
> - 使用 module.exports （推荐使用）
>
> ```javascript
> // 03-module.js
> function hello() {
>   console.log("Hello, world!");
> }
> function greet(name) {
>   console.log("Hello, " + name + "!");
> }
> module.exports = {
>   hello: hello,
>   greet: greet,
> };
> ```
>
> - 直接使用 exports
>
> ```javascript
> // 03-module.js
> function hello() {
>   console.log("Hello, world!");
> }
> function greet(name) {
>   console.log("Hello, " + name + "!");
> }
> exports.hello = hello;
> exports.greet = greet;
> ```
>
> - 不可以直接对 exports 赋值
>
> ```javascript
> // 代码可以执行，但是模块并没有输出任何变量:
> exports = {
> 	hello: hello,
> 	greet: greet
> };
> ```
>
> - 使用 require 获取模块内容
>
> ```javascript
> // 04-require.js
> const {hello, greet} = require('./03-module.js');
> hello();
> greet('你好，中国');
> ```



#### （2）NPM  包管理工具介绍

> - 新版的 node.js 集成 NPM。
>
> ```bash
> // 查看版本号
> npm --version
> npm -v
> ```
>
> - NPM 包管理工具，我们可以在命令行中，通过不同的命令输入以执行 npm 包管理工具中的各种功能。
>
> ```bash
> // 安装
> npm install <包名>
> npm install -g <包名>
> // 卸载
> npm uninstall <包名>
> npm uninstall -g <包名>
> // 更新
> npm update <包名>
> npm update –g <包名>
> // 批量更新
> npm update
> npm update -g
> // 初始化项目
> npm init
> // 查看当前安装的依赖
> npm list
> npm list -g
> // 清除安装缓存（解决安装一半卡住问题）
> npm cache clean --force
> ```
>
> - `npm init` 初始化项目 `package.json` 文件字段简介
>   -  name 包名，包名是唯一的，由小写字母，数字和下划线组成，不能包含空格。
>   -  preferglobal  是否支持全局安装，字段值为 true 是支持全局安装，为 false 时不支持全局安装。
>   - description 包说明，对包进行简要概述。
>   - vrsion 版本号。
>   - author 作者信息数组，每个数组元素中可包含 name、email、web字段。
>   - maintainers 包维护者信息数组，每个数组元素中可包含name、email、web字段。
>   - bugs bug的提交地址，可以是网址或电子邮件。
>   - licenses 许可证数组，每个元素要包含 type 许可证名称和 url 链接到许可证文本的地址字段。
>   - repository 仓库托管地址数组，每个元素要包含 type（仓库类型，如Git），url（仓库地址）字段。
>   - keywords 关键字数组，通常用于搜索。
>   - dependencies 本包所依赖的包，是一个关联的数组，有包名和版本号组成。
>   - scripts 执行脚本文件，可以进行命令行配置，进行快捷操作。



#### （3）NRM 镜像源管理工具

> 1. 查看当前源
>
> ```bash
> npm config get registry
> ```
>
> 2. 切换淘宝源
>
> ```bash
> npm config set registry https://registry.npm.taobao.org
> ```
>
> 3. NRM (npm registry manager) 是 npm 的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换。
>
> - 全局安装 nrm `npm install -g nrm`
> - 查看可选的源 `nrm ls `，带 * 的是当前使用的源
> - 切换到 taobao 源，`nrm use taobao`
> - 测试相应源的响应时间 ` nrm test `



#### （4）Yarn 包管理器使用

> Yarn 对你的代码来说是一个包管理器，它可以让你使用并分享全世界开发者的（例如 JavaScript）代码。
>
> 1. 安装
>
> yarn 安装请进 [传送门](https://yarn.bootcss.com/docs/install/#mac-stable)
>
> 2. yarn 初始化一个新项目
>
> ```bash
> yarn init
> ```
>
> 3. yarn 添加依赖包
>
> ```bash
> yarn add [package]
> yarn add [package]@[version]
> yarn add [package]@[tag]
> ```
>
> 4. 将依赖项添加到不同依赖项类别中，devDependencies、peerDependencies 和 optionalDependencies 
>
> ```bash
> yarn add [package] --dev
> yarn add [package] --peer
> yarn add [package] --optional
> ```
>
> ​	npm 目前支持以下几类依赖包管理：
>
> - **dependencies**
>
>   应用依赖，或者叫做业务依赖，这是我们最常用的依赖包管理对象！它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试时或者本地打包时所使用的包。
>
> - **devDependencies**
>
>   开发环境依赖，仅次于 dependencies 的使用频率！它的对象定义和 dependencies 一样，只不过它里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如 gulp、 grunt、 webpack、moca、 coffee 等。
>
> - **peerDependencies**
>
>   同等依赖，或者叫同伴依赖，用于指定当前包（也就是你写的包）兼容的宿主版本。如何理解呢？ 试想一下，我们编写一个 gulp 的插件，而 gulp 却有多个主版本，我们只想兼容最新的版本，此时就可以用同等依赖来指定。
>
> - **optionalDependencies**
>
>   可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望 npm 继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包，所以不要在两个地方都写。
>
> - **bundledDependencies / bundleDependencies**
>
>   打包依赖，bundledDependencies是一个包含依赖包名的数组对象，在发布时会将这个对象中的包打包到最终的发布包里。
>
> 5. 升级依赖包
>
> ```bash
> yarn upgrade [package]
> yarn upgrade [package]@[version]
> yarn upgrade [package]@[tag]
> ```
>
> 6. 移除依赖包 `yarn remove [package]`
>
> 7. 安装项目的全部依赖 `yarn` 或者 `yarn install` 



### 三、Node.js 常用内置模块



#### （1）URL 网址解析

> 1. parse 方法解析 url 地址
>
> `url.parse(urlString[, parseQueryString[, slashesDenoteHost]])`
>
> ```js
>                    url.parse(string).query
>                                            |
>            url.parse(string).pathname      |
>                        |                   |
>                        |                   |
>                      ------ -------------------
> http://localhost:8888/start?foo=bar&hello=world
>                                 ---       -----
>                                  |          |
>                                  |          |
>               querystring.parse(queryString)["foo"]    |
>                                             |
>                          querystring.parse(queryString)["hello"]
> ```
>
> ```js
> const url = require("url");
> const urlString =
>   "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110";
> const parsedStr = url.parse(urlString);
> console.log(parsedStr);
> ```
>
> 2. format 格式化 url 地址
>
> `url.format(urlObject)`
>
> ```js
> const url = require("url");
> const urlObject = {
>   protocol: "https:",
>   slashes: true,
>   auth: null,
>   host: "www.baidu.com:443",
>   port: "443",
>   hostname: "www.baidu.com",
>   hash: "#tag=110",
>   search: "?id=8&name=mouse",
>   query: { id: "8", name: "mouse" },
>   pathname: "/ad/index.html",
>   path: "/ad/index.html?id=8&name=mouse",
>   href: "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110",
> };
> const parsedObj = url.format(urlObject);
> console.log(parsedObj);
> ```
>
> 3. resolve 拼接 url 地址
>
> `url.resolve(from, to)`
>
> ```js
> const url = require("url");
> const a = url.resolve("/one/two/three", "four");
> const b = url.resolve("http://example.com/", "/one");
> const c = url.resolve("http://example.com/one", "/two");
> console.log(a + "," + b + "," + c);
> ```



#### （2）Querystring 查询字符串

> 1. parse（decode）解析 url 地址中传递的参数成为 json 对象
>
> `querystring.parse(str[, sep[, eq[, options]]])`
>
> ```js
> const querystring = require("querystring");
> const qs = "x=3&y=4";
> const parsed = querystring.parse(qs);
> console.log(parsed);
> ```
>
> 2. stringify（encode）拼接 json 对象成为 url 地址
>
> `querystring.stringify(obj[, sep[, eq[, options]]])`
>
> ```js
> const querystring = require("querystring");
> const qo = {
>   x: 3,
>   y: 4,
> };
> const parsed = querystring.stringify(qo);
> console.log(parsed);
> ```
>
> 3. escape & unescape 方法对给定的 `str` 执行 URL 百分比编码 & 解码
>
> `querystring.escape(str)`
>
> ```js
> const querystring = require("querystring");
> const str = "id=3&city=北京&url=https://www.baidu.com";
> const escaped = querystring.escape(str);
> console.log(escaped);
> ```
>
> `querystring.unescape(str)`
>
> ```js
> const querystring = require("querystring");
> const str =
>   "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com";
> const unescaped = querystring.unescape(str);
> console.log(unescaped);
> ```



#### （3）事件 events 模块

> ```js
> const EventEmitter = require("events");
> class MyEventEmitter extends EventEmitter {}
> const event = new MyEventEmitter();
> event.on("play", (movie) => {
>     console.log(movie);
> });
> event.emit("play", "我和我的祖国");
> event.emit("play", "中国机长");
> ```



#### （4）文件 fs 模块

> ```js
> const fs = require("fs");
> const fsP = require("fs").promises;
> // 创建文件夹
> fs.mkdir("./logs", (err) => {
>   console.log("done.");
> });
> // 文件夹改名
> fs.rename("./logs", "./log", () => {
>   console.log("done");
> });
> // 删除文件夹
> fs.rmdir("./log", () => {
>   console.log("done.");
> });
> // 写内容到文件里
> fs.writeFile(
>   "./logs/log1.txt",
>   "hello",
>   // 错误优先的回调函数
>   (err) => {
>     if (err) {
>       console.log(err.message);
>     } else {
>       console.log("文件创建成功");
>     }
>   }
> );
> // 给文件追加内容
> fs.appendFile("./logs/log1.txt", "\nworld", () => {
>   console.log("done.");
> });
> // 读取文件内容
> fs.readFile("./logs/log1.txt", "utf-8", (err, data) => {
>   console.log(data);
> });
> // 删除文件
> fs.unlink("./logs/log1.txt", (err) => {
>   console.log("done.");
> });
> // 批量写文件
> for (let i = 0; i < 10; i++) {
>   fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
>     console.log("done.");
>   });
> }
> // 读取文件/目录信息
> fs.readdir("./", (err, data) => {
>   data.forEach((value, index) => {
>     fs.stat(`./${value}`, (err, stats) => {
>       // console.log(value + ':' + stats.size)
>       console.log(
>         value + " is " + (stats.isDirectory() ? "directory" : "file")
>       );
>     });
>   });
> });
> // 同步读取文件
> try {
>   const content = fs.readFileSync("./logs/log-1.txt", "utf-8");
>   console.log(content);
>   console.log(0);
> } catch (e) {
>   console.log(e.message);
> }
> console.log(1);
> // 异步读取文件：方法一
> fs.readFile("./logs/log-0.txt", "utf-8", (err, content) => {
>   console.log(content);
>   console.log(0);
> });
> console.log(1);
> // 异步读取文件：方法二
> fs.readFile("./logs/log-0.txt", "utf-8").then((result) => {
>   console.log(result);
> });
> // 异步读取文件：方法三
> function getFile() {
>   return new Promise((resolve) => {
>     fs.readFile("./logs/log-0.txt", "utf-8", (err, data) => {
>       resolve(data);
>     });
>   });
> }
> (async () => {
>   console.log(await getFile());
> })();
> // 异步读取文件：方法四
> const fsp = fsP.readFile("./logs/log-1.txt", "utf-8").then((result) => {
>   console.log(result);
> });
> console.log(fsP);
> // watch 监测文件变化
> fs.watch("./logs/log-0.txt", () => {
>   console.log(0);
> });
> ```



#### （5）Stream 流模块基础学习

> ```js
> const fs = require("fs");
> //打开一个读取流
> const rs = fs.createReadStream("txt/test1.txt", "utf-8");
> //data事件表示流的数据已经可以读取了
> rs.on("data", function (chunk) {
>      console.log("DATA:");
>      console.log(chunk);
> });
> //end事件表示这个流已经到末尾了
> rs.on("end", function () {
>      console.log("END");
> });
> //error事件表示出错了
> rs.on("error", function (err) {
>      console.log("ERROR: " + err);
> });
> 
> // 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
> const ws1 = fs.createWriteStream("output/output2.txt", "utf-8");
> ws1.write("使用Stream写入文本数据...\n"); //\n代表换行
> ws1.write("第二步写入\n");
> ws1.write("最后一次写入  END\n");
> ws1.end(); //此流结束
> 
> //使用stream写入二进制数据
> const ws2 = fs.createWriteStream("output/output3.txt");
> ws2.write(Buffer.from("使用Stream写入二进制数据...\n", "utf-8"));
> ws2.write(Buffer.from("END.", "utf-8"));
> ws2.end();
> 
> // pipe(),将读取流和写入流连接起来
> const rs2 = fs.createReadStream("txt/test1.txt", "utf-8");
> rs2.on("data", function (chunk) {
>   console.log("rs2可以读取了");
>    });
> rs2.on("end", function () {
>   console.log("rs2读取结束");
>    });
> rs2.on("error", function (err) {
>   console.log(err);
>    });
> const ws3 = fs.createWriteStream("output/output4.txt", "utf-8");
> ws3.write("我是ws3自己写入的内容\n");
> ws3.write("ws3又写了一行文本\n");
> rs2.pipe(ws3, { end: true }); //end为true代表 读取流结束后  将自动关闭写入流
> ```



#### （6）Zlib 数据压缩和解压

> ```js
> // 导入模块
> const fs = require("fs");
> const zlib = require("zlib");
> // 创建文件的可读流
> const rs = fs.createReadStream("./txt/test.txt");
> // 创建文件的可写流
> const ws = fs.createWriteStream("./txt/test.gzip");
> // 创建gzip压缩 流对象，gzip可读可写
> const gzip = zlib.createGzip();
> // 管道操作
> rs.pipe(gzip).pipe(ws);
> 
> let data = "hello,world";
> //参数一表示要压缩的数据，可以是string或buffer
> zlib.gzip(data, function (err, buffer) {
>   if (err) {
>     console.log(err);
>   }
>   //buffer就是压缩后的数据
>   console.log(buffer.toString());
>   //对buffer数据进行解压
>   zlib.unzip(buffer, function (err, buffer) {
>     console.log(buffer.toString());
>   });
> });
> ```
>



#### （7）ReadLine 标准输入输出获取数据

> ```js
> // 引入readline模块
> const readline = require("readline");
> //创建readline接口实例
> const rl = readline.createInterface({
>   input: process.stdin,
>   output: process.stdout,
> });
> rl.setPrompt("Test> ");
> rl.prompt();
> rl.on("line", function (line) {
>   switch (line.trim()) {
>     case "copy":
>       console.log("复制");
>       break;
>     case "puse":
>       console.log("粘贴");
>       break;
>     case "close":
>       rl.close();
>       break;
>     default:
>       console.log("没有找到命令！");
>       break;
>   }
>   rl.prompt();
> });
> rl.on("close", function () {
>   console.log("下次再见!");
>   process.exit(0);
> });
> ```
>



#### （8）Crypto 加密模块基础

> ```js
> const crypto = require("crypto");
> // sha1、sha256、sha512 加密算法均可使用
> const hash = crypto.createHash("md5");
> // 可任意多次调用update():
> hash.update("Hello, world!");
> hash.update("Hello, nodejs!");
> console.log(hash.digest("hex")); // 7e1977739c748beac0c0fd14fd26a544
> ```