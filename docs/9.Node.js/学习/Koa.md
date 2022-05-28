# Koa

package.json

```json
{
  "name": "jingdong-server",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node bin/www",
    "dev": "./node_modules/.bin/nodemon bin/www",
    "prd": "pm2 start bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "debug": "^4.1.1",
    "koa": "^2.7.0",
    "koa-bodyparser": "^4.2.1",
    "koa-convert": "^1.2.0",
    "koa-generic-session": "^2.1.1",
    "koa-json": "^2.0.2",
    "koa-logger": "^3.2.0",
    "koa-onerror": "^4.1.0",
    "koa-router": "^7.4.0",
    "koa-static": "^5.0.0",
    "koa-views": "^6.2.0",
    "koa2-cors": "^2.0.6",
    "mysql": "^2.17.1",
    "pug": "^2.0.3"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  }
}
```



/bin/www

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../src/app');
var debug = require('debug')('demo:server');
var http = require('http');
// https
const fs = require('fs')
const https = require('https')

// 读取公钥密钥
const privateKey = fs.readFileSync('./https/manger_www.heisming.com.key', 'utf-8')
const pem = fs.readFileSync('./https/manger_www.heisming.com.pem', 'utf-8')
const options = { key: privateKey, cert: pem }

// https设置端口
const SSLPORT = 443

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '80');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());
// 创建https服务
const httpsServer = https.createServer(options, app.callback(SSLPORT))

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// https监听
httpsServer.listen(SSLPORT)
httpsServer.on('error', onError);
httpsServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

```



app.js

```js
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// npm i koa-logger
const logger = require('koa-logger')
// session和跨域
const session = require('koa-generic-session')
// npm i cors
const cors = require('koa2-cors')

// 路由
const index = require('./routes/index')

// error handler
onerror(app)

// cors配置
app.use(cors({
  // origin: 'http://www.heisming.com:80',  // 前端origin
  origin: 'http://localhost:8080',  // 前端origin
  credentials: true  // 允许跨域带cookie
}))


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// session配置
app.keys = ['!@ASDA#$@21df453fd12!#%@@#^34'] 
app.use(session({
  // 配置cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 *1000
  }
}))


// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});



module.exports = app

```



/routes/index.js

```js
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

```

