# MongoDB

## 安装

###  《mac 安装mongodb》

```shell
*   安装homebrew（程序员必装）
 *      https://brew.sh/
 *   复制代码，命令行，回车
 *      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 *      /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
 *   查看版本
 *      brew --version
 *   切换镜像源
 *      https://www.jianshu.com/p/18065741e052
 *   访问Github搜索mongodb/homebrew/brew
 *     $ brew install mongodb-community
 *   启动服务
 *     $ brew services start mongodb-community
 *   进入数据库
 *     mongo
 *   关闭服务
 *     $ brew services stop mongodb-community
 *   安装compass https://www.mongodb.com/zh-cn
 *     software => compass（图形界面）=> 立即使用 => Download
 * 
```

### 《win系统安装mongodb》

```shell
 *   安装compass https://www.mongodb.com/zh-cn
 *      software => Community Server 社区版=> Download
 *   安装步骤msi
 *      Custom => D:\MongoDB\Server\5.0\ => next => next => 取消左边的Install MongoDB Compass => Install => Ignore
 *   创建数据库文件
 *      访问D:\MongoDB\Server\5.0\data => 创建db文件夹 => 访问log文件夹 => 创建文件mongod.log
 *   命令行访问启动服务
 *      cd  D:\MongoDB\Server\5.0\bin => mongod.exe --dbpath D:\MongoDB\Server\5.0\data\db => 找到ip和端口Listening on 127.0.0.1 和 waitting for connections on port 27017
 *   访问数据库 
 *      D:\MongoDB\Server\5.0\bin => mongo.exe --port 27017 
 *   关于一直显示连接中
 *      D:\MongoDB\Server\5.0\bin>mongo.exe --port 27017
 *      MongoDB shell version v5.0.2
 *      connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
 *   重启服务
 *      cd  D:\MongoDB\Server\5.0\bin => ./mongod.exe --dbpath D:\MongoDB\Server\5.0\data\db 
 *   路径中有空格需要 "D:\Program Files\MongoDB\Server\5.0\data\db"
 *   再次重新访问数据库
 *      D:\MongoDB\Server\5.0\bin => mongo.exe --port 27017 
 *   安装图形化界面
 *      software => compass（图形界面）=> 立即试用
 *   安装好了后
 *      connect
 */
```



### nodejs 连接 mongodb

```SHELL
 * mongoose对接路由功能
 * npmjs.com搜索并安装mongodb
 *   npm i mongodb --save
```



```js
// compass和nodejs一样得作为mongdb数据库的客户端
const MongoClient = require('mongodb').MongoClient
// 本地需要启动mongodb服务
const url = 'mongodb://localhost:27017'
// 留言板项目的数据库
const dbName = 'commentOne'

// url，配置，回调函数
MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    console.error('mongodb 连接出错', err);
    return
  }
  console.log('mongodb连接成功');
  // 切换数据库
  const db = client.db(dbName)

  // 切换到制定得到集合 collection
  const userCollection = db.collection('users')

  // 查询数据 find(条件) sort(排序/最新时间排序_id: -1)
  userCollection.find({}).sort({ _id: -1 }).toArray((err, result) => {
    if (err) {
      console.error('mongodb 连接出错', err);
      return
    }
    console.log('查询结果', result)
  })

  // 新增数据
  userCollection.insertOne({
    username: 'liudehua',
    password: 'abc',
    age: 30,
    city: 'xianggang'
  }, (err, result) => {
    if (err) {
      console.error('插入数据出错', err);
      return
    }
    console.log('插入后的返回结果', result);
  })

  // 修改数据
  userCollection.updateOne(
    // 修改的条件
    { username: 'ccc'},
    // 修改的内容
    { $set: { age: 22, city: 'guangzhou'}}, 
    (err, result) => {
      if (err) {
        console.error('修改数据出错', err);
        return
      }
      console.log('修改后返回的结果', result)
    }
  )  

  // 删除
  userCollection.deleteOne({ username : 'wangwu'}, (err, result) => {
    if (err) {
      console.error('删除数据出错', err);
      return
    }
    console.log('删除后返回的结果', result)
  })

  // 关闭()
  // 由于连接数据库的操作为异步操作，在执行连接数据库获取数据信息的操作时，还未结束，数据库就已经被关闭了，导致出现报错信息无法使用已经结束的对话
  // client.close()

})
```



### 基础操作

```js
/**
 * 安装mongoose
 *   npm i mongoose
 * db.js连接数据库
 */

/**
 * 文档是 MongoDB 中存储的基本单元，是一组有序的键值对集合。文档中存储的文档键的格式必须是符合 UTF-8 标准的字符串，同时要遵循以下注意事项：
 * =>不能包含\0字符（空字符），因为这个字符表示键的结束；
 * =>不能包含$和. 因为.和$是被保留的，只能在特定环境下使用；
 * =>键key名区分大小写，Age不同于age
 * =>键key的值区分类型（如字符串和整数等）；
 * =>键key不能重复，在一条文档里起唯一的作用。
 */
```

#### db.js

```js
// 连接数据库（mongodb服务器）
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017'

const dbName = 'conmmentTwo'

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)

// 开始连接数据库
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 获取连接对象
const conn = mongoose.connection  
conn.on('error', err => {
  console.error('mongodb 连接出错', err)
})

module.exports = mongoose //commonjs语法
```

#### model.js

```js
// 数据模型（规范数据格式）
const mongoose = require('./db')

// ★★★定义Schema（数据规范）
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    // 姓名必须要传给我，否则我不会存储它
    // 必填
    require: true,
    // 唯一，不重复
    unique: true
  },
  password: String,
  age: Number,
  city: String,
  // 性别
  gender: {
    typeof: Number,
    default: 0 // 0- 保密，1-男，2-女
  }
}, { timestamps: true}) // 时间戳，自动添加文档的创建时间等

// 定义 Model
const User = mongoose.model('user', UserSchema)

module.exports = {
  User
}
```

#### update.js

```js
// 使用model
const { User } = require('./model')

// 定义一个async的匿名函数，并执行。为了里面能用await
!(async () => {
  // 更新
  const updateResult = await User.findOneAndUpdate(
    // 条件
    { username: 'zhangsan' },
    // 更新的内容
    { age:30 },
    {
      // 返回更新后的数据
      new: true
    }
  ) 
  console.log('更新返回的结果', updateResult)
  
  // 删除
  const deleteResult = await User.remove({ username: 'lisi'})
  console.log('删除返回的结果', deleteResult);
})()
```

#### usemodel（新增）.js

```js
// 使用model
const { User } = require('./model')

// 定义一个async的匿名函数，并执行。为了里面能用await
!(async () => {
  // 新增数据1
  const zhangsan = new User({
    username: 'zhangsan',
    password: 'asb',
    age: 11,
    city: 'tianjin'
  })
  // 新增数据2
  const lisi = await User.create({
    username: 'lisi',
    password: '123',
    age: 23,
    city: 'shanghai'
  })
  console.log('lisi创建完成', lisi)

  // // 查询数据
  // const userList = await User.find().sort({ _id: -1 })
  // console.log('userList查询结果', userList);

  // // 查询单条数据, 返回对象
  // const user = await User.findOne({ usernmae: 'zhangsan'})
  // console.log('username查询结果', user)
  
})()
```

