## Node WebServer 构建及 Express 框架基础



### 一、使用 Node.js 搭建 WebServer 服务

> 1. 使用 Node.js 原生实现路由，搭建静态 WebServer，实现逻辑如下：
>
> - 第一步，导入 http、fs 模块
> - 第二步，使用 createServer 创建一个服务，监听 8080 端口，启动服务
> - 第三步，截取中间件 req 的 url 属性
> - 第四步，对 url 值进行 switch 判断，根据判断结果调用不同路由
> - 第五步，根据 url 直接写入内容渲染页面，或者读取文件渲染页面
>
> ```js
> const http = require("http");
> const fs = require("fs");
> http
>   .createServer(function (req, res) {
>     switch (req.url) {
>       case "/":
>         res.writeHead(200, {
>           "content-type": "text/html;charset=utf8",
>         });
>         res.write("首页");
>         res.end();
>         break;
>       case "/mine":
>         res.writeHead(200, {
>           "content-type": "text/html;charset=utf8",
>         });
>         res.write("个人中心页");
>         res.end();
>         break;
>       case "/login":
>         fs.readFile("./static/login.html", function (error, data) {
>           if (error) throw error;
>           res.write(data);
>           res.end();
>         });
>         break;
>       case "/me.jpg":
>         fs.readFile("./static/2009.jpg", "binary", function (error, data) {
>           if (error) throw error;
>           res.write(data, "binary");
>           res.end();
>         });
>         break;
>       default:
>         res.write("Page Not Found!");
>         res.end();
>     }
>   })
>   .listen(8080, "localhost", function () {
>     console.log("服务器运行在： http://localhost:8080");
>   });
> ```

> 2. 使用 Node.js 原生构建静态资源 WebServer，实现逻辑如下：
>
> - 第一步，抽离文件读取模块，传入 res（response）参数及 文件路径参数
> - 第二步，获取文件类型，如果存在文件类型则说明是静态资源读取，读取文件渲染页面
> - 第三步，构建 httpServer，对 path 进行 parse 解析，调用 path 获取文件路径
> - 第四步，调用文件读取模块，渲染页面
> - 第五步，如果文件不存在则渲染 404 提醒信息
>
> ```js
> // 引入依赖的模块
> const path = require("path");
> const fs = require("fs");
> const mime = require("mime");
> function readStaticFile(res, filePathname) {
>   const ext = path.parse(filePathname).ext;
>   const mimeType = mime.getType(ext);
>   console.log(ext);
>   // 判断路径是否有后缀, 有的话则说明客户端要请求的是一个文件
>   if (ext) {
>     // 根据传入的目标文件路径来读取对应文件
>     fs.readFile(filePathname, (err, data) => {
>       // 错误处理
>       if (err) {
>         res.writeHead(404, { "Content-Type": "text/plain" });
>         res.write("404 - NOT FOUND");
>         res.end();
>       } else {
>         res.writeHead(200, { "Content-Type": mimeType });
>         res.write(data);
>         res.end();
>       }
>     });
>     // 返回 true 表示, 客户端想要的 是 静态文件
>     return true;
>   } else {
>     res.writeHead(404, { "Content-Type": "text/plain" });
>     res.write("404 - NOT FOUND");
>     res.end();
>     // 返回 false 表示, 客户端想要的 不是 静态文件
>     return false;
>   }
> }
> // 导出函数
> module.exports = readStaticFile;
> ```
>
> ```js
> // 引入相关模块
> const http = require("http");
> const url = require("url");
> const path = require("path");
> const readStaticFile = require("./modules/readStaticFile");
> 
> // 搭建 HTTP 服务器
> const server = http.createServer(function (req, res) {
>   const urlObj = url.parse(req.url);
>   const urlPathname = urlObj.pathname;
>   const filePathname = path.join(__dirname, "/static", urlPathname);
>   // 读取静态文件
>   readStaticFile(res, filePathname);
> });
> 
> // 在 8080 端口监听请求
> server.listen(8080, function () {
>   console.log("服务器运行中：http://localhost:8080");
> });
> ```





### 二、MVC 框架、前后端分离概念理解

> 1. 什么是 MVC 框架？
>
> - MVC 框架 Model View Controller，是模型-视图-控制器的缩写。
>   - model 是应用程序中用于处理数据逻辑的部分，通常模型对象负责在数据库中存取数据。
>   - view 是应用程序中处理数据显示的部分，通常视图是依据数据模型创建的。
>   - controller 是应用程序中处理数据交互的部分，通常控制器负责从视图读取数据，控制用户输入，并向模型发送。
>
> - mvc 的优点
>   - 多个视图共享一个模型，大大提高代码的可重用性。
>   - 三个模块相互独立，改变其中一个不会影响其他两，所以依据这种设计模式能构建良好的松耦合性的组件。
>   - 控制器提高了应用程序的灵活性和可控制性。控制器可以用来连接不同的模型和视图去完成用户的需求，这样控制器可以为构造应用程序提高强有力的手段。
>
> - mvc的缺点
>   - 增加了系统结构和实现的复杂性，对于简单页面，严格遵循 mvc，使模型、视图与控制器分离，会增加结构的复杂性，并可能产生过多的更新操作，降低运行效率。
>   - 视图与控制器过于紧密的连接，视图与控制器是相互分离，但确实联系紧密的部件，视图没有控制器的存在，其应用是很有限的，反之亦然，这样就妨碍了他们的独立重用。
>   - 视图对模型数据的低效率访问，依据模型操作接口的不同，视图可能需要多次调用才能获得足够的显示数据。对未变化数据的不必要的频繁访问，也将损害操作性能。

> 2. 什么是前后端分离开发？
>
> - 传统的开发模式下的系统数据交互图：
>
>   ![mvc-01](https://tva1.sinaimg.cn/large/008i3skNly1gvhkph6rvfj60zo0i4abn02.jpg)
>
> - 传统开发模式的劣势和不足：
>
>   开发出的软件响应速度慢，质量差，用户体现差。
>   前后端严重耦合，代码混乱，可维护性差。
>   研发人员前后端兼顾，开发效率低下，研发周期变长。
>
> - 为了解决传统开发模式中的这些病痛，前后端分离框架应用而生。
>   从项目维护的角度上，传统的开发模式，前端代码和后端代码耦合在一起，导致代码混乱不堪，极大的降低了项目的可维护性，增加了维护成本。
>
>   从开发角度来看，研发人员在开发过程中，不仅要设计后端架构还要兼顾前端展示，导致开发效率低下，延长开发周期。扬长避短，为什么不让专业的人去做专业的事？
>
> - 什么是前后端分离？
>   在前后端分离的开发模式中，后端仅返回前端所需的数据，前端负责渲染HTML页面，后端不再控制前端的效果，用户看到什么样的效果，从后端请求的数据如何加载到前端中，都由前端自己决定，后端仅仅需要提供一套逻辑对外提供数据即可，并且前端与后端的耦合度相对较低，在这种模式中，我们通常将后端开发的每个视图都成为一个接口，或者API，前端通过访问接口来对数据进行增删改查。总结一句话，后台负责提供数据，前端负责数据展示，职责分离，分工明确。
>
>   对应的数据交互如下图：
>
>   ![mvc-02](https://tva1.sinaimg.cn/large/008i3skNly1gvhjsark3nj315c0nuju0.jpg)
>
> - 前后端分离的优缺点？
>
>   - 为优质产品打造精益团队
>     术业有专攻，通过前后端分离，让前后端工程师只需要专注于前端或者后端的开发工作，有利于编写出高质量的代码，培养开发工程师独特的技术特性，然后构建出一个全栈式的精益开发团队。
>   - 提高工作效率，分工更加明确
>     前后端分离的工作流程可以使得前端专心前端，后端关心后端，两者开发同时进行，提高开发效率，页面的增加和路由的修改也不必再去麻烦后端，开发更加灵活。
>   - 降低服务器负载，系统性能提升
>     通过前端路由的配置，我们可以实现页面的按需加载，无需一开始加载首页便加载网站的所有资源，服务器也不再需要解析前端页面，在页面交互及用户体验上有所提升。
>   - 增强代码的可维护性
>     前后端分离后，应用的代码不再是前后端混合，只有在运行期才会调用依赖关系，并且分层明确，应用代码变得整洁清晰。



### 三、Express 框架简介及安装

> 1. Express 框架核心特性有哪些？
>
> - Web 应用
>
>   Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
>
> - API
>
>   丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。
>
> - 性能
>
>   Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能。

> 2. Express 安装
>
> 首先假定你已经安装了 Node.js，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。
>
> ```bash
> $ mkdir myapp
> $ cd myapp
> $ npm init
> $ npm install express --save
> // 临时安装使用，不添加进依赖
> $ npm install express
> ```
>
> 安装 Node 模块时，如果指定了 --save 参数，那么此模块将被添加到 package.json 文件中 dependencies 依赖列表中， 然后通过 npm install 命令即可自动安装依赖列表中所列出的所有模块。

> 3. helloWorld 初体验 Express
>
> ```js
> const express = require('express');
> const app = express();
> app.get('/', function (req, res) {
>   res.send('Hello World!');
> });
> const server = app.listen(8080, function () {
>   const host = server.address().address;
>   const port = server.address().port;
>   console.log('Example app listening at http://%s:%s', host, port);
> });
> ```



### 四、Express 路由服务

> 1. 路由概念理解及基础结构体验
>
> - 路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求，简单的讲就是根据不同的「请求地址」响应对应的服务反馈。
>
> - 路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下：
>
>   ` app.METHOD(path, [callback...], callback)`
>
>   app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。
>
> - 基本的路由示例
>
> ```js
> var express = require('express');
> var app = express();
> // respond with "hello world" when a GET request is made to the homepage
> app.get('/', function(req, res) {
>   res.send('hello world');
> });
> const server = app.listen(8080);
> ```

> 2. 路由方法，路由方法源于 HTTP 请求方法，和 express 实例相关联。
>
> ```js
> // GET method route
> // 对网站首页的访问返回 "Hello World!" 字样
> app.get('/', function (req, res) {
>   res.send('Hello World!')
> })
> // 网站首页接受 POST 请求
> app.post('/', function (req, res) {
>   res.send('Got a POST request')
> })
> // /user 节点接受 PUT 请求
> app.put('/user', function (req, res) {
>   res.send('Got a PUT request at /user')
> })
> // /user 节点接受 DELETE 请求
> app.delete('/user', function (req, res) {
>   res.send('Got a DELETE request at /user')
> })
> ```
>
> - Express 定义了如下和 HTTP 请求对应的路由方法： 
>
>   `get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, connect`
>
>   有些路由方法名不是合规的 JavaScript 变量名，此时使用括号记法，比如： 
>
>   `app['m-search']('/', function ...`
>
> - `app.all()` 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
>
> - 在下面的例子中，来自 `/secret` 的请求，不管使用 GET、POST、PUT、DELETE 或其他任何 http 模块支持的 HTTP 请求，句柄都会得到执行。
>
> ```js
> app.all('/secret', function (req, res, next) {
>   console.log('Accessing the secret section ...')
>   next(); // pass control to the next handler
> })
> ```

> 3. 路由路径，路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。
>
> - 使用字符串的路由路径示例
>
> ```js
> // 匹配根路径的请求
> app.get('/', function (req, res) {
>   res.send('root');
> });
> // 匹配 /about 路径的请求
> app.get('/about', function (req, res) {
>   res.send('about');
> });
> // 匹配 /random.text 路径的请求
> app.get('/random.text', function (req, res) {
>   res.send('random.text');
> });
> ```
>
> - 使用字符串模式的路由路径示例：
>
> ```js
> // 匹配 acd 和 abcd
> app.get('/ab?cd', function(req, res) {
>   res.send('ab?cd');
> });
> 
> // 匹配 abcd、abbcd、abbbcd等
> app.get('/ab+cd', function(req, res) {
>   res.send('ab+cd');
> });
> 
> // 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
> app.get('/ab*cd', function(req, res) {
>   res.send('ab*cd');
> });
> 
> // 匹配 /abe 和 /abcde
> app.get('/ab(cd)?e', function(req, res) {
>  res.send('ab(cd)?e');
> });
> ```
>
> - 使用正则表达式的路由路径示例：
>
> ```js
> // 匹配任何路径中含有 a 的路径：
> app.get(/a/, function(req, res) {
>   res.send('/a/');
> });
> 
> // 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
> app.get(/.*fly$/, function(req, res) {
>   res.send('/.*fly$/');
> });
> ```

> 4. 路由句柄，为请求处理提供多个回调函数，路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合
>
> - 使用一个回调函数处理路由
>
> ```js
> app.get('/example/a', function (req, res) {
>   res.send('Hello from A!');
> });
> ```
>
> - 使用多个回调函数处理路由，需要注意使用 next 方法
>
> ```js
> app.get('/example/b', function (req, res, next) {
>   console.log('response will be sent by the next function ...');
>   next();
> }, function (req, res) {
>   res.send('Hello from B!');
> });
> ```
>
> - 使用回调函数数组处理路由
>
> ```js
> var cb0 = function (req, res, next) {
>   console.log('CB0')
>   next()
> }
> var cb1 = function (req, res, next) {
>   console.log('CB1')
>   next()
> }
> var cb2 = function (req, res) {
>   res.send('Hello from C!')
> }
> app.get('/example/c', [cb0, cb1, cb2])
> ```
>
> - 混合使用函数和函数数组处理路由
>
> ```js
> var cb0 = function (req, res, next) {
>   console.log('CB0')
>   next()
> }
> 
> var cb1 = function (req, res, next) {
>   console.log('CB1')
>   next()
> }
> 
> app.get('/example/d', [cb0, cb1], function (req, res, next) {
>   console.log('response will be sent by the next function ...')
>   next()
> }, function (req, res) {
>   res.send('Hello from D!')
> })
> ```

> 5. 响应方法，下表中响应对象 `res` 的方法向客户端返回响应，终结请求响应的循环，如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。
>
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

> 6. 使用  `app.route()` 创建路由路径的链式路由句柄，由于路径在一个地方指定，这样做有助于创建模块化的路由，而且减少了代码冗余和拼写错误。
>
> ```js
> app.route('/book')
>   .get(function(req, res) {
>     res.send('Get a random book');
>   })
>   .post(function(req, res) {
>     res.send('Add a book');
>   })
>   .put(function(req, res) {
>     res.send('Update the book');
>   });
> ```

> 7. 可使用 `express.Router` 类创建模块化、可挂载的路由句柄，Router 实例是一个完整的中间件和路由系统，因此常称其为一个 `mini-app`。
>
> ```js
> // 在 app 目录下创建名为 birds.js 的文件，内容如下
> var express = require('express');
> var router = express.Router();
> // 该路由使用的中间件
> router.use(function timeLog(req, res, next) {
>   console.log('Time: ', Date.now());
>   next();
> });
> // 定义网站主页的路由
> router.get('/', function(req, res) {
>   res.send('Birds home page');
> });
> // 定义 about 页面的路由
> router.get('/about', function(req, res) {
>   res.send('About birds');
> });
> module.exports = router;
> ```
>
> ```js
> // 然后在应用中加载路由模块：
> var birds = require('./birds')
> ...
> app.use('/birds', birds)
> ```



### 五、利用 Express 托管静态文件

> 1. 通过 Express 内置的` express.static `可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
>
>    将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
>
>    例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：
>
>    `app.use(express.static('public'));`
>    
>    `app.use(express.static(path.join(__dirname, "public")));`
>
> ​			现在，public 目录下面的文件就可以访问了。
>
> ```http
> http://localhost:3000/images/kitten.jpg
> http://localhost:3000/css/style.css
> http://localhost:3000/js/app.js
> http://localhost:3000/images/bg.png
> http://localhost:3000/hello.html
> ```
>
> ​			PS：所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
>
> 2. 如果静态资源存放在多个目录下面，可以多次调用 `express.static` 中间件。
>
> ```js
> app.use(express.static('public'))
> app.use(express.static('files'))
> ```
>
> ​			访问静态资源文件时，`express.static` 中间件会根据目录添加的顺序查找所需的文件。
>
> 3. 如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：
>
>    `app.use('/static', express.static('public'))`
>
> ​			现在，你就可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。
>
> ```http
> http://localhost:3000/static/images/kitten.jpg
> http://localhost:3000/static/css/style.css
> http://localhost:3000/static/js/app.js
> http://localhost:3000/static/images/bg.png
> http://localhost:3000/static/hello.html
> ```



### 六、Express 中间件使用

> 1. Express 中间件基础概念
>
> - Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。
>
> - 中间件 Middleware 是一个函数，它可以访问请求对象`request object (req)`, 响应对象`response object (res)`, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 `next` 的变量。
>
>   中间件的功能包括：
>
>   - 执行任何代码
>   - 修改请求和响应对象
>   - 终结请求-响应循环
>   - 调用堆栈中的下一个中间件
>
> - 如果当前中间件没有终结请求-响应循环，则必须调用 `next()` 方法将控制权交给下一个中间件，否则请求就会挂起。
>
>   Express 应用可使用如下几种中间件：
>
>   - 应用级中间件
>   - 路由级中间件
>   - 错误处理中间件
>   - 内置中间件
>   - 第三方中间件

> 2. 应用级中间件，应用级中间件绑定到 app 对象 使用 `app.use()` 和 `app.METHOD()`， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET、PUT、 POST 等等，全部小写。
>
> - 一个挂载点装载一个中间件
>
> ```js
> var app = express()
> // 没有挂载路径的中间件，应用的每个请求都会执行该中间件
> app.use(function (req, res, next) {
>   console.log('Time:', Date.now())
>   next()
> })
> // 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
> app.use('/user/:id', function (req, res, next) {
>   console.log('Request Type:', req.method)
>   next()
> })
> // 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
> app.get('/user/:id', function (req, res, next) {
>   res.send('USER')
> })
> ```
>
> - 一个挂载点装载一组中间件
>
> ```js
> // 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
> app.use('/user/:id', function(req, res, next) {
>   console.log('Request URL:', req.originalUrl)
>   next()
> }, function (req, res, next) {
>   console.log('Request Type:', req.method)
>   next()
> })
> ```
>
> - 作为中间件系统的路由句柄，使得为路径定义多个路由成为可能。在下面的例子中，为指向 `/user/:id` 的 GET 请求定义了两个路由。第二个路由虽然不会带来任何问题，但却永远不会被调用，因为第一个路由已经终止了请求-响应循环。
>
> ```js
> // 一个中间件栈，处理指向 /user/:id 的 GET 请求
> app.get('/user/:id', function (req, res, next) {
>   console.log('ID:', req.params.id)
>   next()
> }, function (req, res, next) {
>   res.send('User Info')
> })
> 
> // 处理 /user/:id， 打印出用户 id
> app.get('/user/:id', function (req, res, next) {
>   res.end(req.params.id)
> })
> ```
>
> - 如果需要在中间件栈中跳过剩余中间件，调用 `next('route') `方法将控制权交给下一个路由。 注意： `next('route') `只对使用 `app.VERB()` 或 `router.VERB() `加载的中间件有效。
>
> ```js
> // 一个中间件栈，处理指向 /user/:id 的 GET 请求
> app.get('/user/:id', function (req, res, next) {
>   // 如果 user id 为 0, 跳到下一个路由
>   if (req.params.id == 0) next('route')
>   // 否则将控制权交给栈中下一个中间件
>   else next() //
> }, function (req, res, next) {
>   // 渲染常规页面
>   res.render('regular')
> });
> 
> // 处理 /user/:id， 渲染一个特殊页面
> app.get('/user/:id', function (req, res, next) {
>   res.render('special')
> })
> ```

> 3. 路由级中间件，路由级中间件和应用级中间件一样，只是它绑定的对象为 `express.Router()`。
>
> ```js
> var router = express.Router()
> ```
>
> 路由级使用 `router.use()` 或 `router.VERB()` 加载。
>
> 上述在应用级创建的中间件系统，可通过如下代码改写为路由级：
>
> ```js
> var app = express()
> var router = express.Router()
> // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
> router.use(function (req, res, next) {
>   console.log('Time:', Date.now())
>   next()
> })
> // 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
> router.use('/user/:id', function(req, res, next) {
>   console.log('Request URL:', req.originalUrl)
>   next()
> }, function (req, res, next) {
>   console.log('Request Type:', req.method)
>   next()
> })
> // 一个中间件栈，处理指向 /user/:id 的 GET 请求
> router.get('/user/:id', function (req, res, next) {
>   // 如果 user id 为 0, 跳到下一个路由
>   if (req.params.id == 0) next('route')
>   // 负责将控制权交给栈中下一个中间件
>   else next() //
> }, function (req, res, next) {
>   // 渲染常规页面
>   res.render('regular')
> })
> // 处理 /user/:id， 渲染一个特殊页面
> router.get('/user/:id', function (req, res, next) {
>   console.log(req.params.id)
>   res.render('special')
> })
> // 将路由挂载至应用
> app.use('/', router)
> ```

> 4. 错误处理中间件，错误处理中间件和其他中间件定义类似，只是要使用 4 个参数（必选），而不是 3 个，其签名如下： `err, req, res, next`。
>
> ```js
> app.use(function(err, req, res, next) {
>   console.error(err.stack)
>   res.status(500).send('Something broke!')
> })
> ```

> 5. 内置中间件，从 4.x 版本开始, Express 除了 `express.static`，Express 以前内置的中间件现在已经全部单独作为模块安装使用了。
>
> | 属性         | 描述                                                         | 类型     | 缺省值       |
> | ------------ | ------------------------------------------------------------ | -------- | ------------ |
> | dotfiles     | 是否对外输出文件名以点（.）开头的文件。可选值为 “allow”、“deny” 和 “ignore” | String   | “ignore”     |
> | etag         | 是否启用 etag 生成                                           | Boolean  | true         |
> | extensions   | 设置文件扩展名备份选项                                       | Array    | []           |
> | index        | 发送目录索引文件，设置为 false 禁用目录索引。                | Mixed    | “index.html” |
> | lastModified | 设置 Last-Modified 头为文件在操作系统上的最后修改日期。可能值为 true 或 false。 | Boolean  | true         |
> | maxAge       | 以毫秒或者其字符串格式设置 Cache-Control 头的 max-age 属性。 | Number   | 0            |
> | redirect     | 当路径为目录时，重定向至 “/”。                               | Boolean  | true         |
> | setHeaders   | 设置 HTTP 头以提供文件的函数。                               | Function |              |
>
> ```js
> var options = {
>   dotfiles: 'ignore',
>   etag: false,
>   extensions: ['htm', 'html'],
>   index: false,
>   maxAge: '1d',
>   redirect: false,
>   setHeaders: function (res, path, stat) {
>     res.set('x-timestamp', Date.now())
>   }
> }
> 
> app.use(express.static('public', options))
> ```

> 6. 第三方中间件，通过使用第三方中间件从而为 Express 应用增加更多功能。安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。
>
> ```js
> // 解析 cookie 的中间件： cookie-parser
> $ npm install cookie-parser
> var express = require('express')
> var app = express()
> var cookieParser = require('cookie-parser')
> // 加载用于解析 cookie 的中间件
> app.use(cookieParser())
> ```



### 七、Express art 模板引擎使用

> 1. 模板引擎的概念
>
>    模板引擎（这里特指用于 Web 开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的 HTML 文档。
>
>    常见的 Express 模板引擎有：
>
>    - art
>    - ejs
>    - Jade 等
>
> 2. npm Install 安装模板引擎
>
> ```bash
> npm install --save art-template
> npm install --save express-art-template
> ```
>
> 3. art 模板引擎使用，官方文档地址：http://aui.github.io/art-template/zh-cn/
>
> ```js
> var express = require('express')
> var app = express()
> // view engine setup
> app.engine('art', require('express-art-template'))
> app.set('view', {
>     debug: process.env.NODE_ENV !== 'production'
> })
> app.set('views', path.join(__dirname, 'views'))
> app.set('view engine', 'art')
> // routes
> app.get('/', function (req, res) {
>     res.render('index.art', {
>         user: {
>             name: 'aui',
>             tags: ['art', 'template', 'nodejs']
>         }
>     })
> })
> ```



### 八、预习准备  MongoDB 及可视化管理工具安装

> 1. Windows 平台安装 MongoDB
>
>    MongoDB 提供了可用于 32 位和 64 位系统的预编译二进制包，你可以从MongoDB官网下载安装，MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center/community
>
> 2. Mac OSX 平台安装 MongoDB
>
>    MongoDB 提供了 OSX 平台上 64 位的安装包，你可以在官网下载安装包，下载地址：https://www.mongodb.com/download-center#community
>
> 3. MongoDB 可视化管理工具安装
>
>    MongoDB Compass 安装，下载地址：https://www.mongodb.com/try/download/compass
>
>    Robo 3T 安装，下载地址：https://studio3t.com/download/