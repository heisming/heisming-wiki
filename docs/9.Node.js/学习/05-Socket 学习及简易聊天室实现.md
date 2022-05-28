## Socket 学习及简易聊天室实现



### 一、使用 Mock.js 模拟数据提高前后端开发协作效率

> - Mock.js 使用目的：生成随机数据，拦截 Ajax 请求
> - 官方文档，直接看「示例」，快速使用即可：http://mockjs.com/examples.html
> - Mock.js 不仅仅可以模拟常规字符串反馈数据，还能模拟图片反馈数据，非常强大
> - 作为前端开发程序员，我们可以通过 Mock.js 和后端小伙伴定义好规则后，快速进行开发
>
> ```js
> // 使用 Mock 构建本地服务器输出数据结果
> const Mock = require('mockjs');
> const express = require('express');
> const app = express();
> //根据传入的参数 num，生成 num 条模拟的数据列表
> function generatorList(num) {
>   return Mock.mock({
>     [`list|${num}`]: [ "@ctitle(15,25)" ]
>   });
> }
> //允许跨域请求返回数据
> app.all('*', function (req, res, next) {
>   res.header("Access-Control-Allow-Origin", "*");
>   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
>   res.header("Access-Control-Allow-Headers", "X-Requested-With");
>   res.header('Access-Control-Allow-Headers', 'Content-Type');
>   next();
> });
> //截取路由并反馈数据
> app.get("/data", function (req, res) {
>   // 获取 get 请求数据条数参数 num
>   const { num } = req.query;
>   return res.send(generatorList(num));
> })
> //设置端口并打印对应调用结果
> const server = app.listen(4000, function () {
>   console.log("本地mock服务启动，接口地址为：http://localhost:4000/data?num=请求列表数量");
> })
> ```





### 二、使用 socket 实现在线聊天室

#### （1）什么是 socket？

> socket 的原意是「插座」，在计算机通信领域，socket 被翻译为「套接字」，它是计算机之间进行通信的一种约定或一种方式，通过 socket 这种约定，一台计算机可以接收其他计算机的数据，也可以向其他计算机发送数据。
>
> 我们把插头插到插座上就能从电网获得电力供应，同样，为了与远程计算机进行数据传输，需要连接到因特网，而 socket 就是用来连接到因特网的工具，这里我们需要注意的是：插头一旦被接上，咱们就能持续的获得使用电能的能力。
>
> ![socket](./images/socket.png)
>
> socket 的典型应用就是 Web 服务器和浏览器：浏览器获取用户输入的 URL，向服务器发起请求，服务器分析接收到的 URL，将对应的网页内容返回给浏览器，浏览器再经过解析和渲染，就将文字、图片、视频等元素呈现给用户。



#### （2）什么是 Ajax 轮询？什么是 WebSocket？

> 现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询，轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出 HTTP Ajax 请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。那么有什么办法可以解决这个资源消耗浪费的问题呢？WebSocket！

> WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行「 全双工」通讯的协议。WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
>
> 在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

> ![ws](./images/ws.jpg)



#### （3）WebSocket 实现属性和方法

> 1. WebSocket 创建 Socket 对象
>
> 浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。当你获取 Web Socket 连接后，你可以通过 **send()** 方法来向服务器发送数据，并通过 **onmessage** 事件来接收服务器返回的数据。
>
> 以下 API 用于创建 WebSocket 对象。
>
> ```js
> var Socket = new WebSocket(url, [protocol] );
> ```
>
> 以上代码中的第一个参数 url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议。
>
> 2. WebSocket Socket 属性
>
> | 属性                  | 描述                                                         |
> | :-------------------- | :----------------------------------------------------------- |
> | Socket.readyState     | 只读属性 **readyState** 表示连接状态，可以是以下值：0 - 表示连接尚未建立。1 - 表示连接已建立，可以进行通信。2 - 表示连接正在进行关闭。3 - 表示连接已经关闭或者连接不能打开。 |
> | Socket.bufferedAmount | 只读属性 **bufferedAmount** 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。 |
>
> 3. WebSocket 事件
>
> | 事件    | 事件处理程序     | 描述                       |
> | :------ | :--------------- | :------------------------- |
> | open    | Socket.onopen    | 连接建立时触发             |
> | message | Socket.onmessage | 客户端接收服务端数据时触发 |
> | error   | Socket.onerror   | 通信发生错误时触发         |
> | close   | Socket.onclose   | 连接关闭时触发             |
>
> 4. WebSocket 方法
>
> | 方法           | 描述             |
> | :------------- | :--------------- |
> | Socket.send()  | 使用连接发送数据 |
> | Socket.close() | 关闭连接         |
>
> 5. WebSocket 实例
>
>    WebSocket 协议本质上是一个基于 TCP 的协议。为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息 `Upgrade: WebSocket`表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。



#### （4）什么是 Socket.io？

> Socket.io是一个 WebSocket 库，包括了客户端的 js 和服务器端的 nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用，它会自动根据浏览器从 WebSocket、AJAX 长轮询、Iframe流等等各种方式中选择最佳的方式来实现网络实时应用，非常方便和人性化，而且支持的浏览器最低达 IE5.5
>
> socket.io特点
>
> - 实时分析：将数据推送到客户端，这些客户端会被表示为实时计数器，图表或日志客户。
> - 实时通信和聊天：只需几行代码便可写成一个 Socket.IO 的`Hello World`聊天应用。
> - 二进制流传输：从1.0版本开始，Socket.IO 支持任何形式的二进制文件传输，例如：图片，视频，音频等。
> - 文档合并：允许多个用户同时编辑一个文档，并且能够看到每个用户做出的修改。
>
> Socket.IO 由两部分组成
>
> - 一个服务端用于集成（或挂载）到 Node.JS HTTP 服务器： `socket.io`
> - 一个加载到浏览器中的客户端： `socket.io-client`
>
> Socket.IO 基础方法
>
> - 实例化一个 io 对象 `var socket = io()`。
>
> - Socket.IO 的核心理念就是允许发送、接收任意事件和任意数据，当用户输入消息时，服务器接收一个 `chat message` 事件。
>
>   ```js
>   io.on('connection', function(socket){
>     socket.broadcast.emit('hi');
>   });
>   io.on('connection', function(socket){
>     console.log('a user connected');
>     socket.on('disconnect', function(){
>       console.log('user disconnected');
>     });
>   });
>   ```
>
> - Socket.IO 提供了 `io.emit` 方法，让服务器将消息发送给其他用户，将事件发送给每个用户
>
>   ```js
>   io.emit('some event', { for: 'everyone' });
>   ```



#### （5）使用 Express + socket.io 实现实时在线聊天室

> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>   <meta charset="UTF-8">
>   <meta http-equiv="X-UA-Compatible" content="IE=edge">
>   <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <title>简易聊天室</title>
> </head>
> <body>
>   <h3 style="text-align: center;">欢迎加入简易聊天室</h3>
>   <div class="register">
>     昵称：<input id="nickname" type="text" placeholder="请输入您的昵称" />
>     <br />
>     <button id="register" style="margin-top:20px;">开始聊天吧！</button>
>   </div>
>   <div class="user-list">
>     <h3></h3>
>     <div></div>
>   </div>
>   <div class="chat-list" style="display: none;"></div>
>   <div class="chat-input" style="position: fixed;bottom: 30px;display: none;">
>     <input id="mychat" type="text" placeholder="请输入您想说的话" style="width: 300px;height: 52px;" />
>     <button id="sendmsg" style="margin-left:20px;width: 100px;height: 58px;">发送</button>
>   </div>
> </body>
> <script src="/js/jquery.js"></script>
> <script src="/js/socket.io.js"></script>
> <script>
>   const socket = io.connect('127.0.0.1:8000');
>   let nickname = "";
>   socket.on('init', function (chatList) {
>     $(".user-list h3").html("欢迎" + nickname + "加入聊天室，当前共有" + chatList.onLineCounts + "名在线用户");
>     $(".user-list div").html(chatList.onLineUsers.join(", "))
>   })
>   $("#register").on("click", function () {
>     // alert($("#nickname").val() + "用户注册了")
>     nickname = $("#nickname").val();
>     socket.emit('login', nickname);
>     socket.on('login', function (chatList) {
>       //更新系统信息
>       $(".register").hide();
>       $(".user-list").show();
>       $(".chat-input").show();
>       $(".chat-list").show();
>       $(".user-list h3").html("欢迎" + nickname + "加入聊天室，当前共有" + chatList.onLineCounts + "名在线用户");
>       $(".user-list div").html(chatList.onLineUsers.join(", "))
>     });
>   })
> 
>   $("#sendmsg").on("click", function () {
>     socket.emit('message', {
>       nickname: nickname,
>       content: $("#mychat").val()
>     });
>   })
>   // 需要注意的是：这个是一个注册行为，会常驻在内存中，也就是我们说的内存泄漏，得写在外面哦，而 login 比较特殊，当前用户注册一次，所以事件生效行为也是一次
>   socket.on('message', function (obj) {
>     $(".chat-list").append('<p>' + obj.nickname + "说: " + obj.content + '</p>')
>   })
> </script>
> </html>
> ```
>
> ```js
> const express = require("express");
> const app = express();
> const http = require("http").Server(app);
> const io = require("socket.io")(http);
> const path = require("path");
> // 设置渲染的引擎模板
> app.set("views", __dirname + "/views"); //设置模板的目录
> app.set("view engine", "html"); // 设置解析模板文件类型：这里为html文件
> app.engine("html", require("ejs").__express); // 使用ejs引擎解析html文件中ejs语法
> // 配置静态文件访问
> app.use(express.static(path.join(__dirname, "public")));
> 
> app.get("/", function (req, res) {
>   res.render("index");
> });
> // 在线人员
> var onLineUsers = [];
> // 在线人数
> var onLineCounts = 0;
> // io监听到存在链接，此时回调一个socket进行socket监听
> io.on("connection", function (socket) {
>   console.log("服务端提示信息：一个新的用户加入了，建立了连接！");
>   io.emit("init", {
>     onLineUsers: onLineUsers,
>     onLineCounts: onLineCounts
>   });
>   // 定义一个 login 事件，用来监听新用户加入，客户端建立通信后，便可调用该事件
>   socket.on("login", function (nickname) {
>     //暂存 socket.name 为 nickname 在用户退出时候将会用到
>     socket.name = nickname;
>     // 判断当前用户名是否存在，不存在则加入聊天
>     if (nickname != "" && onLineUsers.indexOf(nickname) == -1) {
>       onLineUsers.push(nickname);
>       onLineCounts++;
>       console.log("服务端提示信息：", nickname, "加入了聊天室");
>     }
>     // 一个用户新加入，向所有客户端监听 login 的 socket 的实例发送响应，响应内容为一个对象
>     io.emit("login", {
>       onLineUsers: onLineUsers,
>       onLineCounts: onLineCounts,
>       nickname: nickname,
>     });
>   });
>   // 监听用户退出聊天室
>   socket.on("disconnect", function () {
>     if (onLineUsers.hasOwnProperty(socket.name)) {
>       onLineUsers.splice(onLineUsers.indexOf(socket.name), 1);
>       onLineCounts--;
>       // 向所有客户端广播该用户退出群聊
>       io.emit("logout", {
>         onLineUsers: onLineUsers,
>         onLineCounts: onLineCounts,
>         nickname: socket.name,
>       });
>       console.log("服务端提示信息：", socket.name, "退出群聊");
>     }
>   });
>   // 监听到用户发送了消息，就使用io广播信息，信息被所有客户端接收并显示。
>   // 注意，如果客户端自己发送的也会接收到这个消息，故在客户端应当存在这的判断，是否收到的消息是自己发送的，故在emit时，应该将用户的id和信息封装成一个对象进行广播
>   socket.on("message", function (obj) {
>     // 监听到有用户发消息，将该消息广播给所有客户端
>     io.emit("message", obj);
>     console.log("服务端提示信息：", obj.nickname, "说了:", obj.content);
>   });
> });
> 
> http.listen(8000, function () {
>   console.log("服务器运行中，访问地址：http://127.0.0.1:8000");
> });
> ```
