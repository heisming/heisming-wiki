## koa 框架基础了解及 http 模块进阶学习



### 一、使用 NPM Scripts 构建工程项目

> Node 开发离不开 npm，而脚本功能是 npm 最强大、最常用的功能之一。
>
> 1. `npm init` 初始化项目 `package.json` 文件里有 scripts 字段，npm 允许使用 scripts 字段定义脚本命令。
>
> ```json
> {
>   // ...
>   "scripts": {
>     "build": "node build.js"
>   }
> }
> ```
>
> 2. 如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。
>
> ```js
> // 构建两个基础的 script 脚本文件
> "scripts": {
>   "script1": "node script1.js",
>   "script2": "node script2.js"
> }
> ```
>
> 如果是并行执行（即同时的平行执行），可以使用 `&` 符号。
>
> ```bash
> $ npm run script1 & npm run script2
> ```
>
> 如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用 `&&` 符号。
>
> ```bash
> $ npm run script1 && npm run script2
> ```
>
> 3. 常用的 npm 脚本简写形式。
>
> ```
> npm start 是 npm run start
> ```
>
> 4. npm 脚本可以通过 `npm_package_` 前缀，拿到 package.json 里面的字段
>
> ```json
> // 注意：一定要在 npm 脚本中运行（如：npm run view）才可以，直接在命令行中运行JS（如：node view.js）是拿不到值的
> {
>   "name": "foo", 
>   "version": "1.2.5",
>   "scripts": {
>     "view": "node view.js"
>   }
> }
> ```
>
> ```bash
> // node 环境下获取变量
> console.log(process.env.npm_package_name); // foo
> console.log(process.env.npm_package_version); // 1.2.5
> ```
>
> ```bash
> // bash 脚本获取变量
> echo $npm_package_name
> ```
>
> 5. npm 脚本可以通过 `npm config`  前缀，拿到 npm 的配置变量，即 `npm config get xxx` 命令返回的值。
>
> ```json
> { 
>   "name" : "foo",
>   "config" : { "port" : "8080" },
>   "scripts" : { "start" : "node server.js" }
> }
> ```
>
> ```bash
> $ npm config get foo:port
> $ npm config set foo:port 80
> ```
>
> 6. 使用 `env` 命令可以列出所有环境变量。
>
> ```json
> { 
>   "name" : "foo",
>   "config" : { "port" : "8080" },
>   "scripts" : { "env" : "env" }
> }
> ```



### 二、使用 koa-generator 初始化项目

> 1. 安装 koa-generator
>
> ```bash
> $ npm install -g koa-generator
> ```
>
> 2. 使用 koa-generator 生成 koa2 项目
>
> ```
> $ koa2  -e project(项目名称)   （-e 代表使用模板引擎ejs）
> ```
>
> 3. 进入项目
>
> ```bash
> $ cd project 
> $ npm install
> ```
>
> 4. 启动项目，默认端口号是 3000
>
> ```bash
> $  npm  run dev  （该方法可以直接刷新服务）
> ```
>
> 5. 项目目录
>
>    其中：database 为后来创建的操作 mongo 的文件目录；middleware 为后来创建的自定义中间件目录



### 三、使用 Mongoose 配置 Model 层服务

> 1. 在文件夹 database 中创建文件 config.js 用来进行配置数据库连接信息
>
> ```js
> // 配置mongo 地址
> module.exports =  {
>     demo: 'mongodb://127.0.0.1:27017/demo'
> }
> ```
>
> 2. 创建数据表
>
>    在文件 database 中创建文件夹models 用来存放不同的数据表，创建文件 person.js, 文件名 person 即为数据表名称。
>
> ```js
> const mongoose = require('mongoose')
> // 创建数据表模型，该文件的名字，即person，就是数据表的名字
> // 下面给 person 表声明两个字段name和age
> let personSchema = new mongoose.Schema({
>     name: String,
>     phone: String,
>     registerDate: Date
> })
> // 通过建 model 给 person 赋予增删改查等读写的功能
> module.exports = mongoose.model('Person', personSchema)
> ```
>
> 3. 连接 koa2 和 mongoose
>
> ```js
> // 一、引入mongoose
> const mongoose = require('mongoose')
> const dbConfig = require('./database/config')
> // 二、 连接数据库的服务
> mongoose.connect(dbConfig.demo, {
>   useNewUrlParser: true
> })
> ```



### 四、在 koa-router 中完成 Controll 层逻辑

> ```js
> const router = require("koa-router")();
> // 引入mongo模型
> const Person = require("../database/models/person");
> router.prefix("/users");
> router
>   .get("/register", async (ctx) => {
>     await ctx.render("register", {
>       title: "欢迎新用户注册",
>     });
>   })
>   .post("/register", async function (ctx) {
>     // 创建实例
>     const person = new Person({
>       name: ctx.request.body.username,
>       phone: ctx.request.body.phone,
>     });
>     try {
>       await person.save();
>       ctx.redirect("/");
>     } catch (e) {
>       ctx.body = "用户注册失败";
>     }
>   });
> /*
> model自带方法直接通过模型 Person 操作
> findOne() 只是找到一条符合条件的内容
> find() 可以找到整个符合条件的集合(数组)
> where() 找到符合条件的内容
> update() 修改该内容
> remove() 删除该内容
> */
> module.exports = router;
> ```



### 五、在 Views 中使用 ejs 完成 View 层页面

> ```html
> <!DOCTYPE html>
> <html>
> 
> <head>
>  <title>
>      <%= title %>
>  </title>
>  <link rel='stylesheet' href='/stylesheets/style.css' />
> </head>
> <body>
>  <h1>
>      <%= title %>
>  </h1>
>  <form method="POST" action="/users/register">
>      <p>用户名:</p>
>      <input name="username">
>      <p>电话:</p>
>      <input name="phone">
>      <p>-----</p>
>      <button type="submit">提交</button>
>  </form>
> </body>
> </html>
> ```



### 六、http 模块深度学习

#### （1）使用 http 模块构建服务发送 get 请求网络数据

> ```js
> // 导包
> const http = require("http");
> const server = http.createServer((request, response) => {
>   // request 参数用来获取请求的相关数据
>   // var url = request.url.substr(1)
>   // console.log(url)
>   let data = "";
>   response.writeHeader(200, {
>     "content-type": "application/json;charset=utf-8",
>     "Access-Control-Allow-Origin": "*",
>   });
>   // Node.js 服务端发送请求，也可以理解为向服务器端爬取数据请求
>   http.get(`http://47.115.83.135/api/v2/feeds`, (res) => {
>     res.on("data", (chunk) => {
>       data += chunk;
>     });
>     res.on("end", () => {
>       response.end(
>         JSON.stringify({
>           requestOK: true,
>           data,
>         })
>       );
>     });
>   });
> });
> server.listen(8080, () => {
>   console.log("localhost:8080");
> });
> ```



#### （2）使用 http 模块构建服务发送 post 请求网络数据

> ```js
> const http = require("http");
> const querystring = require("querystring");
> // 这是需要提交的数据
> const post_data = {
>    pageno: 1,
>    pagesize: 200,
>    condstr: "社会大课堂: 0",
> };
> const content = querystring.stringify(post_data);
> // 请求的服务信息，注意端口号 可以忽略不写 写一定写对
> const options = {
>    hostname: "youxuewang.com.cn",
>    port: 80,
>    path: "/shouji/home/LoadProducts",
>    method: "POST",
>    headers: {
>        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
>    },
> };
> // http 请求 也可以理解为爬虫请求
> const req = http.request(options, function (res) {
>    res.setEncoding("utf8");
>    res.on("data", function (chunk) {
>        console.log("BODY: " + chunk);
>        //JSON.parse(chunk)
>    });
> });
> // 错误反馈
> req.on("error", function (e) {
>    console.log("problem with request: " + e.message);
> });
> // write data to request body
> req.write(content);
> req.end();
> ```



#### （3）HTTP 小爬虫实现

> ```js
> const https = require("https");
> const http = require("http");
> const cheerio = require("cheerio");
> function filterData(data) {
>   let $ = cheerio.load(data);
>   let $movieList = $(".movie-item");
>   let movies = [];
>   $movieList.each((index, value) => {
>     movies.push({
>       title: $(value).find(".movie-title").attr("title"),
>       score: $(value).find(".movie-score i").text(),
>     });
>   });
>   response.end(JSON.stringify(movies));
> }
> http
>   .createServer((request, response) => {
>     response.writeHead(200, {
>       "content-type": "application/json;charset=utf-8",
>     });
>     const options = {
>       protocol: "https:",
>       hostname: "maoyan.com",
>       port: 443,
>       path: "/",
>       method: "GET",
>     };
>     const req = https.request(options, (res) => {
>       let data = "";
>       res.on("data", (chunk) => {
>         data += chunk;
>       });
>       res.on("end", () => {
>         filterData(data);
>       });
>     });
>     req.end();
>   })
>   .listen(8080);
> ```



#### （4）Node.js 构建 https 服务

> 1.  什么是 https ？
>
> 　　https 是以安全为目标的 http 通道，简单讲就是 http 的安全版，即 http 下加入 SSL 层进行内容及传输加密，在 https 的站点中是不允许请求 http 的接口的。

> 2. https 和 http 的区别
>
> - https 协议需要到 ca 申请证书，一般免费证书很少，需要交费。
> - http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。
> - http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
> - http 的连接很简单，是无状态的。
> - https 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

> 3. openssl 生成证书文件
>
> ```bash
> # 只要安装了 git 客户端就会有 openssl ，检测 openssl 是否安装
> openssl version -a
> #1、生成私钥key文件：
> openssl genrsa -out privatekey.pem 1024
> #2、通过私钥生成CSR证书签名  （需要填一些信息、可直接回车）
> openssl req -new -key privatekey.pem -out certrequest.csr
> #3、通过私钥和证书签名生成证书文件 
> openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
> # Signature ok
> ```
>
> - privatekey.pem:  私钥
> - certrequest.csr: CSR 证书签名
> - certificate.pem:  证书文件

> 4. Node.js 构建 https 服务，这个时候 http 请求已经失效了
>
> ```javascript
> const app = require("express")();
> const fs = require("fs");
> const https = require("https");
> 
> const privateKey = fs.readFileSync("./privatekey.pem", "utf8");
> const certificate = fs.readFileSync("./certificate.pem", "utf8");
> const credentials = {
>   key: privateKey,
>   cert: certificate,
> };
> 
> const httpsServer = https.createServer(credentials, app);
> const SSLPORT = 8081;
> 
> httpsServer.listen(SSLPORT, function () {
>   console.log("HTTPS Server is running on: https://localhost:%s", SSLPORT);
> });
> 
> // Welcome
> app.get("/", function (req, res) {
>   res.status(200).send("Welcome to Safety Land!");
> });
> ```



#### （5）http 请求方法介绍（GET/POST/PUT/PATCH/DELETE 等）

> 1. HEAD
>
>    HEAD 方法是向服务器发出指定资源的请求，只不过索要的只是响应头，响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。
>
> 2. GET
>
>    GET 方法与 HEAD 方法类似，是向指定的资源发出显示请求。使用 GET 方法应该只用在读取数据，而不应当被用于产生副作用的操作中，如修改数据等，因为 GET 可能会被网络爬虫等随意访问。GET 方法也能够向服务端发送数据，是直接加在 URL 中发送的，用 ? 分割URL和数据，用 & 连接多个数据。
>
>    例如：`https:mu-mu.cn/index.html?name=mumu&age=20`
>
> 3. POST
>
>    GET 和 POST 是我们使用最频繁的两种请求方法，都是向服务器发出指定资源的请求。但是与 GET 方法不同，POST 方法一般拿来新建或修改服务器资源，所以数据与 POST 方法往往是不可分割的，POST 方法的数据会被包含在请求体中发送至服务端。
>
> 4. PUT
>
>    PUT 方法和 POST 方法非常类似，都是用作数据的修改，他们的区别就是，PUT 方法是等幂的，也就是说，如果你对一段资源进行多次 PUT 请求提交，最后的结果应该都是一样的，所以用来进行数据的修改；而 POST 方法如果进行多次数据提交，最后的结果是不一样的，所以应该用作数据的新增。
>
> 5. DELETE
>
>    DELETE 方法用来请求服务器删除 Request-URI 所标识的资源。
>
> 6. OPTIONS
>
>    OPTIONS 方法可使服务器传回对于该资源的支持情况，包括各种请求方法、头部的支持情况等。客户端可以对特定的 URL 使用 OPTIONS 方法，也可以对整站（通过将 URL 设置为 “*” ）使用该方法，用来测试服务器功能是否正常运作。常见的例子还有跨域的时候，当我们发送的请求为非简单请求时（非 HEAD 、GET、POST，请求头不只有 Accept、Accept-Language、Content-Language、Last-Event-ID、三种Content-Type：application/x-www-form-urlencoded、multipart/form-data、text/plain），浏览器就会先发 OPTIONS 来试探服务器是否允许跨域。
>
> 7. CONNECT
>
>    CONNECT 方法在一般的开发中使用不到，这个方法的作用就是把服务器作为跳板，让服务器代替用户去访问其它网页，之后把数据原原本本的返回给用户。这样用户就可以访问到一些只有服务器上才能访问到的网站了，这就是HTTP代理。
>
> 8. TRACE
>
>    TRACE 请求会在目的服务器端发起一个环回诊断。行程最后一站的服务器会弹回一条 TRACE 响应，并在响应主体中携带它收到的原始请求报文。这样客户端就可以查看在所有中间 HTTP 应用程序组成的请求 / 响应链上，原始报文是否，以及如何被毁坏或修改过。TRACE 方法主要用于测试或诊断，验证请求是否如愿穿过了请求 / 响应链。



#### （6）http 请求常见状态码简介

> **200** OK 当您的操作将在响应正文中返回数据时，出现此结果。
>
> **204** No Content 当您的操作成功，但不在响应正文中返回数据时，出现此结果。
>
> **304** Not Modified（重定向） 当测试实体自上次检索以来是否被修改时，出现此结果。
>
> **403** Forbidden  客户端错误
>
> **401** Unauthorized 客户端错误
>
> **413** Payload Too Large（客户端错误） 当请求长度过长时，出现此结果。
>
> **400** BadRequest（客户端错误） 当参数无效时，出现此结果。
>
> **404** Not Found（客户端错误） 当资源不存在时，出现此结果。
>
> **405** Method Not Allowed（客户端错误）由于方法和资源组合不正确而出现此错误。 例如，您不能对一个实体集合使用 DELETE 或 PATCH。
>
> **412** Precondition Failed 客户端错误
>
> **501** Not Implemented（服务器错误） 当未实施某个请求的操作时，出现此结果。
>
> **503** Service Unavailable（服务器错误） 当 Web API 服务不可用时，出现此结果。



#### （7）编写一个简单的接口并使用 PostMan 接口调试工具

> | 方法             | 描述                                                         |
> | ---------------- | ------------------------------------------------------------ |
> | res.download()   | 提示下载文件。                                               |
> | res.end()        | 终结响应处理流程。                                           |
> | res.json()       | 发送一个 JSON 格式的响应。                                   |
> | res.jsonp()      | 发送一个支持 JSONP 的 JSON 格式的响应。                      |
> | res.redirect()   | 重定向请求。                                                 |
> | res.render()     | 渲染视图模板。                                               |
> | res.send()       | 发送各种类型的响应。                                         |
> | res.sendFile     | 以八位字节流的形式发送文件。                                 |
> | res.sendStatus() | 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。 |
>
> 使用 `res.json()`  or `res.send()` 方法返回一个 json 对象，这个即为一个简单的接口
>
> ```js
> const Koa = require('koa')
> const app = new Koa()
> app.use( async ( ctx ) => {
>   let url = ctx.url
>   // 从上下文的request对象中获取
>   let request = ctx.request
>   let req_query = request.query
>   let req_querystring = request.querystring
>   // 从上下文中直接获取
>   let ctx_query = ctx.query
>   let ctx_querystring = ctx.querystring
>   ctx.body = {
>     url,
>     req_query,
>     req_querystring,
>     ctx_query,
>     ctx_querystring
>   }
> })
> app.listen(3000, () => {
>   console.log('[demo] request get is starting at port 3000')
> })
> ```
>
> 使用 ajax 访问自己定义的接口，获取对应的数据



### 七、仿拉勾网 M 站产品逻辑熟悉

> 拉勾网 M 站地址：https://m.lagou.com/
>
> 1. 一级路由模块分析与实现
> 2. 二级页面路由分析
> 3. 岗位、用户 MongoDB 数据结构分析
