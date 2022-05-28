# WebSockets
>WebSockets 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此API，可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

## 解释



## 接口
`WebSocket`
  - 用于连接WebSocket服务器的主要接口，之后可以在这个连接上发送 和接受数据。
```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

`CloseEvent`
  - 连接关闭时WebSocket对象发送的事件。


`MessageEvent`
  - 当从服务器获取到消息的时候WebSocket对象触发的事件。



## 相关工具
- HumbleNet: 一个在浏览器中工作的跨平台网络库。它由一个围绕websocket和WebRTC的C包装器组成，抽象了跨浏览器的差异，方便了为游戏和其它应用程序创建多用户网络功能。
- [µWebSockets](https://github.com/uNetworking/uWebSockets):由C++11和Node.js 实现的高度可扩展的WebSocket服务器和客户端.。
- ClusterWS:  轻量级、快速和强大的框架，用于在Node.js.中构建可伸缩的WebSocket应用程序。
- Socket.IO: 一个基于长轮询/WebSocket的Node.js第三方传输协议。
- SocketCluster: 一个用于Node.js的pub/sub专注于可伸缩 WebSocket框架。
- WebSocket-Node: 一个用 Node.js实现WebSocket服务器API。
- Total.js:一个用Node.js 实现的的Web应用程序框架（例如:WebSocket聊天）。
- Faye: 一个 Node.js的WebSocket (双向连接)和 EventSource (单向连接)的服务器和客户端。
- SignalR: SignalR在可用时将隐藏使用WebSockets，在不可用时将优雅地使用其他技术和技术，而应用程序代码保持不变。
- Caddy: 能够将任意命令(stdin/stdout)代理为websocket的web服务器。
- [ws](https://github.com/websockets/ws): 一个流行的WebSocket客户端和服务器 Node.js库。
- jsonrpc-bidirectional: 易于使用异步RPC库，通过单个WebSocket或RTCDataChannel (WebRTC)连接支持双向调用。TCP / SCTP /等。客户端和服务器可以各自承载自己的JSONRPC和服务器端点。
- rpc-websockets: JSON-RPC 2.0在websocket上实现Node.js和JavaScript。

## `Socket.IO`
>工具有很多，但他是主角之一。

### 为什么选它？
- Bidirectional and low-latency communication for every platform
- In most cases, the connection will be established with WebSocket, providing a low-overhead communication channel between the server and the client.
- Rest assured! In case the WebSocket connection is not possible, it will fall back to HTTP long-polling. And if the connection is lost, the client will automatically try to reconnect.
- Scale to multiple servers and send events to all connected clients with ease.


### 简单介绍
Socket.IO 是一个库，可以在`客户端和服务器之间实现低延迟、双向和基于事件的通信`。
![](https://socket.io/images/bidirectional-communication2-dark.png)

它建立在`WebSocket`协议之上，并提供额外的保证，例如回退到 HTTP 长轮询或自动重新连接。
>[WebSocket](https://en.wikipedia.org/wiki/WebSocket) 是一种在服务器和浏览器之间提供全双工和低延迟通道的通信协议。

### 可实现
有几种可用的 Socket.IO 服务器实现：
- JavaScript: https://socket.io/docs/v4/server-installation/
- Java：https://github.com/mrniko/netty-socketio
- Java：https://github.com/trinopoty/socket.io-server-java
- Python：https://github.com/miguelgrinberg/python-socketio
- Golang：https://github.com/googollee/go-socket.io

大多数主要语言的客户端实现：
- JavaScript: https://socket.io/docs/v4/client-installation/
  - 可以在`浏览器`、`Node.js` 或 `React Native` 中运行
- Java：https://github.com/socketio/socket.io-client-java
- C++：https://github.com/socketio/socket.io-client-cpp
- Swift：https://github.com/socketio/socket.io-client-swift
- Dart：https://github.com/rikulo/socket.io-client-dart
- Python：https://github.com/miguelgrinberg/python-socketio
- .Net：https://github.com/doghappy/socket.io-client-csharp
- Rust：https://github.com/1c3t3a/rust-socketio
- Kotlin：https://github.com/icerockdev/moko-socket-io





### 简单案例(Node.js环境下)

服务端（基于ws）
```js
import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (socket) => {
  // send a message to the client
  socket.send(JSON.stringify({
    type: "hello from server",
    content: [ 1, "2" ]
  }));

  // receive a message from the client
  socket.on("message", (data) => {
    const packet = JSON.parse(data);

    switch (packet.type) {
      case "hello from client":
        // ...
        break;
    }
  });
});
```

客户端
```js
const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
  // send a message to the server
  socket.send(JSON.stringify({
    type: "hello from client",
    content: [ 3, "4" ]
  }));
});

// receive a message from the server
socket.addEventListener("message", ({ data }) => {
  const packet = JSON.parse(data);

  switch (packet.type) {
    case "hello from server":
      // ...
      break;
  }
});
```


再来看看 Socket.IO 的示例：
```js
// server
import { Server} from 'socket.io'

const io = new Server(3000);
io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello", "world");
  // receive a message from the client
  socket.on("howdy", (arg) => {
    // prints "stranger"
    console.log(arg);
  })
})
```

```js
// client
import { io } from 'socket.io-client';

const socket = io("ws://localhost:3000");

// receive a message from the server
socket.on("hello", (arg) => {
  console.log(arg)// prints "world"
});

// send a message to the server
socket.emit("howdy", "stranger");
```

>这两个示例看起来非常相似，但实际上 Socket.IO 提供了附加功能，这些功能隐藏了在生产环境中运行基于 WebSockets 的应用程序的复杂性。

### 它不是什么？
>❗Socket.IO不是WebSocket 实现。

WebSocket 客户端将无法成功连接到 Socket.IO 服务器，而 Socket.IO 客户端也将无法连接到普通 WebSocket 服务器。
```js
// WARNING: the client will NOT be able to connect!
const socket = io("ws://echo.websocket.org");
```
想要了解普通的 WebSocket 服务器，可以查看[ws](https://github.com/websockets/ws)或[µWebSockets](https://github.com/uNetworking/uWebSockets)。

在客户端，也许你会对[robust-websocket](https://github.com/nathanboktae/robust-websocket)感兴趣

>❗❗Socket.IO 并不打算在移动应用程序的后台服务中使用。因为 Socket.IO 库保持与服务器的开放 TCP 连接，这可能会导致用户消耗大量电池。但可以使用google的[FCM](https://firebase.google.com/docs/cloud-messaging)


### 功能
以下是 Socket.IO 在普通 WebSockets 上提供的功能：

#### 回退 HTTP 长轮询
如果无法建立 WebSocket 连接，连接将回退到 HTTP 长轮询。

这个特性是在十多年前创建项目时使用 Socket.IO 的首要原因，因为浏览器对 WebSockets 的支持仍处于起步阶段。

#### 自动重连
在某些特定情况下，服务器和客户端之间的 WebSocket 连接可能会中断，而双方都不知道链接的断开状态。

Socket.IO 包含一个心跳机制，它会定期检查连接的状态。

当客户端最终断开连接时，它会以指数回退延迟自动重新连接，以免使服务器不堪重负。


#### 数据包缓冲
当客户端断开连接时，数据包会自动缓冲，并在重新连接时发送。


#### 使用方式 

Socket.IO 提供了一种方便的方式来发送事件和接收响应：

发件人
```js
socket.emit("hello", "world", (response) => {
  console.log(response); // "got it"
});
```

接收者
```js
socket.on("hello", (arg, callback) => {
  console.log(arg); // "world"
  callback("got it");
});
```

超时相应：
```js
socket.timeout(5000).emit("hello", "world", (err, response) => {
  if (err) {
    // the other side did not acknowledge the event in the given delay
  } else {
    console.log(response); // "got it"
  }
});
```

在服务器端，可以向**所有连接的客户端**或**客户端的子集**发送事件：

**所有的客户端**
![](https://socket.io/images/broadcasting-dark.png)


**客户端的子集**
![](https://socket.io/images/rooms-dark.png)


#### 命名空间
>https://socket.io/docs/v4/namespaces/

命名空间允许在单个共享连接上拆分应用程序的逻辑。例如，如果想创建一个只有授权用户才能加入的“管理员”频道。
```js
io.on("connection", (socket) => {
  // classic users
});

io.of("/admin").on("connection", (socket) => {
  // admin users
});
```
![](https://socket.io/assets/images/namespaces-088745a8a8882118740f50b6b1232588.png)

#### 协议开销
`socket.emit("hello", "world")`将作为单个 WebSocket 帧发送，其中包含`42["hello","world"]`：
- `4`是 Engine.IO “消息”数据包类型
- `2`是 Socket.IO “消息”数据包类型
- `["hello","world"]`是`JSON.stringify()`参数数组的 `-ed` 版本


>浏览器包本身的大小是10.4 kB (minified and gzipped).



## koa + JavaScript的简单实战案例

### koa
让我们快速的使用koa脚手架（全局安装）创建一个简单的项目（全局安装）
```bash
npm install koa-generator -g
```
创建项目
```bash
koa koa-socket-io
```
之后会创建项目如下目录
```bash
│  app.js
│  package.json
│
├─bin
│      www
│
├─public
│  ├─images
│  ├─javascripts
│  └─stylesheets
│          style.css
│
├─routes
│      index.js
│      users.js
│
└─views
        error.pug
        index.pug
        layout.pug
```

使用npm 或者 yarn
```bash
npm i 
yarn
```
启动它
```bash
npm start
yarn start
```



#### 配置 socket.io
```bash 
npm i socket.io@4.5.0 
```

打开`/bin/www`, 修改为如下逻辑代码
```js
var http = require('http');
const { Server } = require("socket.io");
/**
 * Create HTTP server.
 */
var server = http.createServer(app.callback());
/**
 * Create socket.io server.
 * cors: true ✔ 这步是用来跨域的不能，之前忘了配置导致跨域不成功
 */
const io = new Server(server, { cors: true });

io.on("connection", (socket) => {
  // 监听客户端发送的 chat 事件
  socket.on('chat', function (chatInfo) {
    console.log('start', chatInfo);
    // 向当前 socket 发送聊天信息
    chatInfo.chatContent = new Date().getTime();
    socket.emit('chat', chatInfo);
    // 向除了当前 socket 外的所有 socket 发送聊天信息
    socket.broadcast.emit('chat', chatInfo);
    console.log('end',chatInfo);
  });
});
```

打开`/app.js`也需要设置跨域

- 安装koa2-cors

```BASH
npm i koa2-cors@2.0.6
```
```js
const Koa = require('koa')
const app = new Koa()
// ...
// cors配置
const cors = require('koa2-cors')
app.use(cors({
  origin: '*',  
  credentials: true,  // 允许跨域带cookie
}))

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// json
// ...
```


### JavaScript
```HTML
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>聊天室</title>
</head>
<body>
    <div id="chat">
        <ul id="chatList">
        </ul>
        <form>
            <input type="text" name="chatContent" id="chatContent" />
            <input type="button" id="sendChatContent" value="发送" />
        </form>
    </div>
</body>
<!-- CDN引入socket.io-client -->
<script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script>
<script>
    const url = 'http://localhost:3000/';
    // 建立 socket 连接
    socket = io.connect(url);
    // 点击“发送”，向服务器发送聊天信息
    const sendChatContent = document.getElementById('sendChatContent')
    const chatContent = document.getElementById('chatContent')
    const chatList = document.getElementById('chatList')
    sendChatContent.addEventListener('click', function (event)  {
        const username = 'barry'
        // 获取文本框输入值
        const chatContentText = chatContent.value.trim();
        if(!chatContent){
            return;
        }
        if(socket){
            // 向服务器 chat 事件，发送信息
            socket.emit('chat', {username: username, chatContent: chatContentText});
        }
    })
    // 监听服务器发送来的 chat 事件
    socket.on('chat', function (chatInfo) {
      chatList.append(chatInfo.username + chatInfo.chatContent, document.createElement('li'))
    });
</script>
</html>
```






## Vue相关
### hooks
```typescript
import { ElMessage } from 'element-plus';
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';
import { onBeforeUnmount, shallowRef } from 'vue';

export interface SocketIOOptions {
  onConnected?: () => void;
  onDisconnected?: (reason: string) => void;
  onError?: () => void;
  autoClose?: boolean;
}

export function useSocketIO(url?: string, options: Partial<ManagerOptions & SocketOptions & SocketIOOptions> = {}) {
  const { onConnected, onDisconnected, onError, autoClose = true, ...rest } = options;
  const socket = shallowRef<Socket | null>(url ? io(url, { ...rest }) : io({ ...rest }));
  socket.value?.on('connect', () => {
    onConnected?.();
  });
  socket.value?.on('connect_error', () => {
    ElMessage.error('连接失败');
    onError?.();
  });
  socket.value?.on('disconnect', (reason: string) => {
    onDisconnected?.(reason);
  });

  const release = () => {
    if (!socket.value) return;
    socket.value.close();
    socket.value = null;
  };
  const joinRoom = (token: string) => {
    socket.value?.emit('joinRoom', token, (res: boolean) => {
      if (!res) ElMessage.error('节点不存在');
    });
  };
  const connect = (urls: string, option: Partial<ManagerOptions & SocketOptions> = {}) => {
    socket.value = io(urls, { ...option });
  };
  const addEventHandler = (event: string, handler: (...args: any[]) => void) => {
    socket.value?.on(event, handler);
  };
  if (autoClose) {
    onBeforeUnmount(() => release());
  }
  return {
    instance: socket,
    connect,
    release,
    joinRoom,
    addEventHandler,
  };
}

```