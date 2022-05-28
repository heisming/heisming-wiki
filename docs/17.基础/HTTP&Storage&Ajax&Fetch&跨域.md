# HTTP&Storage&Ajax&Fetch&跨域

## 1、HTTP

### 初识前后端通信

#### 1.前后端通信是什么

前端和后端数据交互的过程
浏览器和服务器之间数据交互的过程

#### 2.后端向前端发送数据

访问页面

#### 3.前端向后端发送数据

用户注册



### 前后端通信的过程与概念解释

#### 1.前后端通信的过程

前后端的通信是在‘请求-响应’中完成的

![image-20210905164215194](D:\front-end\study\MarkDown\0基础\img\前后端通信的过程.png)

####  2.概念解释

前端：浏览器端
客户端：只要能和服务器通信的就叫客户端
命令行工具
curl https://www.jd.com
后端：服务器端

```html
<a href="https://www.jd.com">京东</a>
<form action="https://www.jd.com" method="POST">
    <input type="text" name="username" placeholder="用户名">
    <input type="password" name="password" placeholder="密码">
    <input type="submit" value="注册">
</form>
<img src="./HTTP/index.png" alt="">
```



### 前后端的通信方式

#### 1.使用浏览器访问网页

在浏览器地址栏输入网址，按下回车

#### 2.HTML 的标签

浏览器在解析 HTML 标签的时候，遇到一些特殊的标签，会再次向服务器发送请求

```html
<link/>
<img/>
<script></script>
<iframe></iframe>
```

还有一些标签，浏览器解析的时候，不会向服务器发送请求，但是用户可以使用他们向服务器发送请求

```html
<a></a>
<form></form>
```

#### 3.Ajax 和 Fetch



### 初识 HTTP

#### 1.HTTP 是什么

HyperText Transfer Protocol

超文本传输协议

HTML：超文本标记语言

超文本：原先一个个单一的文本，通过超链接将其联系起来。由原先的单一的文本变成了可无限延伸、扩展的超级文本、立体文本

HTML、JS、CSS、图片、字体、音频、视频等等文件，都是通过 HTTP（超文本传输协议） 在服务器和浏览器之间传输

每一次前后端通信，前端需要主动向后端发出请求，后端接收到前端的请求后，可以给出响应

HTTP 是一个请求-响应协议

#### 2.HTTP 请求响应的过程

浏览器在请求某一个地址时，会现在缓存中查找是否访问过此地址，如果访问过，就不会向服务器发送HTTP请求了。

![](D:\front-end\study\MarkDown\0基础\img\HTTP请求响应的过程.png)

### HTTP 报文

```html
<form action="https://www.jd.com" method="get">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" value="注册" />
</form>
<form action="https://www.jd.com" method="post">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" value="注册" />
</form>
```

#### 1.HTTP 报文是什么

- 浏览器向服务器发送请求时，请求本身就是信息，叫请求报文

- 服务器向浏览器发送响应时传输的信息，叫响应报文

#### 2.HTTP 报文格式

![](D:\大前端学习\MarkDown\0基础\img\http报文格式.png)



请求 request

请求头：起始行+首部

请求体 body

GET 请求，没有请求体，数据通过请求头携带

POST 请求，有请求体，数据通过请求体携带

响应  response

响应头：起始行+首部

响应体



### HTTP 方法

#### 1.常用的 HTTP 方法

浏览器发送请求时采用的方法，和响应无关

#####  GET、POST、PUT、DELETE

用来定义对于资源采取什么样的操作的，有各自的语义

#### 2.HTTP 方法的语义

GET 获取数据
获取资源（文件）

POST 创建数据
注册

PUT 更新数据
修改个人信息，修改密码

DELETE 删除数据
删除一条评论

增删改查
这些方法虽然有各自的语义，但是并不是强制性的

#### 3.RESTful 接口设计★

通过用户 ID 获取个人信息，使用 GET 方法
https://www.jd.com/api/http/getUser?id=1
GET
https://www.jd.com/api/http/user?id=1
注册新用户，使用 POST 方法
https://www.jd.com/api/http/addUser
POST
https://www.jd.com/api/http/user
修改一个用户，使用 POST 方法
https://www.jd.com/api/http/modifyUser
PUT
https://www.jd.com/api/http/user
删除一个用户，使用 POST 方法
https://www.jd.com/api/http/deleteUser
DELETE
https://www.jd.com/api/http/user



### GET 和 POST 方法的对比★

#### 1.语义

 GET：获取数据

 POST：创建数据

#### 2.发送数据

GET 通过地址在**请求头**中携带数据

- 能携带的数据量和地址的长度有关系，一般最多就几K

POST 既可以通过地址在**请求头**中携带数据，也可以通过**请求体**携带数据

- 能携带的数据量理论上是无限的

携带少量数据，可以使用 GET 请求，大量的数据可以使用 POST 请求

#### 3.缓存

GET 可以被缓存，POST 不会被缓存

#### 4.安全性

GET在浏览器地址框显示:?username=alex

POST在浏览器控制台可以查找到

GET 和 POST 都不安全

发送密码或其他敏感信息时不要使用 GET，主要是避免直接被他人窥屏或通过历史记录找到你的密码



### HTTP 状态码★

#### 1.HTTP 状态码是什么

定义服务器对请求的处理结果，是服务器返回的

#### 2.HTTP 状态码的语义

##### 	100~199 消息

​		代表请求已被接受，需要继续处理

​		websocket

##### 	200~299 成功

##### 	300~399 重定向

​		http://www.jd.com/

​		https://www.jd.com/

​		301 Moved Permanently   永久重定向

​		302 Move Temporarily   临时重定向

​		304 Not Modified  资源未改变

##### 	400~499 请求错误

​		404 Not Found

##### 	500~599 服务器错误

​		500 Internal Server Error 

### 一些问题

1、请描述浏览器与服务器的简单请求过程？
2、link，img，script（被动），a，from（主动）交互数据
3、HTTP协议中HTML/CSS/JS/图片都是通过HTTP（请求-响应协议）传输的   
4、GET/POST/PUT/DELETE各是什么
5、GET 和 POST 方法的对比？
6、HTTP 状态码有哪些？







## 2、Cookie

### 2.1、Cookie 是什么

Cookie 全称 HTTP Cookie，简称 Cookie
是浏览器存储数据的一种方式
因为存储在用户本地，而不是存储在服务器上，是本地存储
一般会自动随着浏览器每次请求发送到服务器端

#### Cookie 有什么用

利用 Cookie 跟踪统计用户访问该网站的习惯，比如什么时间访问，访问了哪些页面，在每个网页的停留时间等

#### 在浏览器中操作 Cookie

不要在 Cookie 中保存密码等敏感信息

### 2.2、Cookie 的基本用法

#### 1、通过JS写入 Cookie（键(key)=值(value)）

```js
 document.cookie = 'username=zs';
 document.cookie = 'age=18';
```

不能一起设置，只能一个一个设置

```js
 document.cookie = 'username=zs; age=18'; 
```

#### 2、读取 Cookie（全部读取）

```js
console.log(document.cookie); // username=zs; age=18
```

读取的是一个由名值对构成的字符串，每个名值对之间由“; ”（一个分号和一个空格）隔开



### 2.3、Cookie 的属性

![image-20211025172019413](D:\front-end\study\MarkDown\0基础\img\cookie.png)

#### 1、Cookie 的名称（Name）和值（Value）★★★★★

最重要的两个属性，创建 Cookie 时必须填写，其它属性可以使用默认值

Cookie 的名称或值如果包含非英文字母，

- 写入时使用 **encodeURIComponent**() 编码
- 读取时使用 **decodeURIComponent**() 解码

```js
document.cookie = 'username=alex';
```

```js
// 一般名称使用英文字母，不要用中文，值可以用中文，但是要编码
document.cookie = `username=${encodeURIComponent('张三')}`;
document.cookie = `${encodeURIComponent('用户名')}=${encodeURIComponent(
  '张三'
)}`;
```

#### 2、失效（到期）时间★★★★★

- 对于失效的 Cookie，会被浏览器清除

- 如果没有设置失效（到期）时间，这样的 Cookie 称为《会话 Cookie》
- 它存在内存中，当会话结束，也就是浏览器关闭时，Cookie 消失

##### 想长时间存在，设置 Expires 或 Max-Age

`expires` 值为 Date 类型

```js
document.cookie = `username=lm; expires=${new Date(
  '2100-1-01 00:00:00'
)}`;
```

`max-age` 值为数字，表示当前时间 + 多少秒后过期，单位是秒

```js
document.cookie = 'username=alex; max-age=5';
document.cookie = `username=alex; max-age=${24 * 3600 * 30}`;
```

如果 max-age 的值是 0 或负数，则 Cookie 会被删除

```js
document.cookie = 'username=alex';
document.cookie = 'username=alex; max-age=0';
document.cookie = 'username=alex; max-age=-1';
```

#### 3、Domain 域★

Domain 限定了访问 Cookie 的范围（不同域名）

使用 JS 只能读写当前域或父域的 Cookie，无法读写其他域的 Cookie

```js
document.cookie = 'username=alex; domain=www.jd.com';
```

```js
// www.jd.com 
// m.jd.com 当前域
// 父域：.jd.com（可以共同访问）
```

#### 4、Path 路径

Path 限定了访问 Cookie 的范围（同一个域名下）

使用 JS 只能读写当前路径和上级路径的 Cookie，无法读写下级路径的 Cookie

```JS
document.cookie = 'username=alex; path=/course/list'; //无法写入
document.cookie = 'username=alex; path=/1.Cookie/';
```

当 Name、Domain、Path 这 3 个字段都相同的时候，才是同一个 Cookie（浏览器控制台中的Application中的Cookies中的查看）

#### 5、HttpOnly

设置了 HttpOnly 属性的 Cookie 不能通过 JS 去访问

#### 6、Secure 安全标志

Secure 限定了只有在使用了 https 而不是 http 的情况下才可以发送给服务端

Domain、Path、Secure 都要满足条件，还没过期的 Cookie 才能随着请求发送到服务器端

##### cookie.js

```js
// 中英文网站切换
// 写入Cookie
const set = (name,value,{maxAge,domain,path,secure} = {}) =>{
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; secure`;
    }
    console.log(cookieText);
    document.cookie = cookieText;

};

// 通过name获取cookie的值
const get = name =>{
    name = `${decodeURIComponent(name)}`;
    const arrCookies = document.cookie.split('; ');
    for (const item of arrCookies) {
       let [cookieName, cookieValue] = item.split('=');
       if (cookieName === name) {
           return decodeURIComponent(cookieValue);
       }
    }
    return;
}


// 通过name,domain和path删除Cookie
const remove = (name,{domain,path}={}) =>{
    set(name,'',{domain,path,maxAge: -1})
};

export {set,get,remove};
```

```HTML
<!-- Cookie 的封装 -->
<button id="cn">中文</button>
<button id="en">英文</button>
<script type="module">
  //中英文网站切换
  import { set, get, remove } from './JS/cookie.js';
  set('uase', 'lac');
  set('uase', 'ass');
  set('age', 18);
  set('用户名', '天下第一');
  set('嘲笑他人梦想', 'sha', {
    maxAge: 3600 * 24 * 7,
  });
  console.log(get('uase'));
  console.log(get('嘲笑他人梦想'));
  console.log(get('用户名'));
  remove('嘲笑他人梦想');
  // 使用封装好的Cookie来实现语言切换
  const btnCN = document.getElementById('cn');
  const btnEN = document.getElementById('en');
  btnCN.addEventListener('click', () => {
    set('language', 'CN', {
      maxAge: 3600 * 24 * 30
    })
    // BOM强制从服务器刷新页面
    window.location.reload(true);
  }, false);
  btnEN.addEventListener('click', () => {
    set('language', 'EN', {
      maxAge: 3600 * 24 * 30
    })
    // BOM强制从服务器刷新页面
    window.location.reload(true);
  }, false);
</script>
```

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>记住用户名</title>
</head>
<style>
    .login {
        background-color: green;
        color: #fff;
        border-radius: 5px;
    }
    .delete {
        background-color: red;
        color: #fff;
        border-radius: 5px;
    }
    div{
        margin: 10px 0 0 70px;
    }
</style>
<body>
    <form action="javascript:;">
        用户名：<input type="text" id="username" placeholder="请输入用户名">
        <div>
            <input type="submit" class="login" value="登录" id="login">
            <input type="button" class="delete" value="删除" id="delete">
        </div>
    </form>
    <script type="module">
        //导入JS
        import { set, get, remove } from '../JS/cookie.js';
        // console.log(set);

        //获取DOM
        const loginBtn = document.getElementById('login');
        const deleteBtn = document.getElementById('delete');
        const usernameText = document.getElementById('username');
        //常量
        const USERNAME = 'username'
        //获取文本框中的值
        //usernameText.value;

        //重新加载页面函数
        function reload() {
            window.location.reload(true);
        };

        //首次加载判断是否有cookie
        if (get(USERNAME)) {
            usernameText.value = get(USERNAME);
        }

        //登录按钮监听事件
        loginBtn.addEventListener('click', () => {
            console.log(usernameText.value);
            set(USERNAME, usernameText.value, { maxAge: 7 * 24 * 3600 });
            //重新加载页面
            reload();
        }, false);

        //删除按钮监听事件
        deleteBtn.addEventListener('click', () => {
            remove(USERNAME);
            //重新加载页面
            reload();
        }, false);
    </script>
</body>
</html> 
```



### 2.4、Cookie 的注意事项

#### 1、前后端都可以创建 Cookie

#### 2、Cookie 有数量限制

每个域名下的 Cookie 数量有限

当超过单个域名限制之后，再设置 Cookie，浏览器就会清除以前设置的 Cookie

#### 3、Cookie 有大小限制

每个 Cookie 的存储容量很小，最多只有 4KB 左右





## 3、localSrorage

### 3.1、初识 localStorage

```html
<form id="login" action="https://www.imooc.com" method="post">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" id="btn" value="登录" />
</form>
```

#### 1、localStorage 是什么（key：value对）

localStorage 也是一种浏览器存储数据的方式（本地存储），它只是存储在本地，**不会发送到服务器端**

单个域名下的 localStorage 总大小有限制

#### 2、在浏览器中操作 localStorage（cookie的上方）

![image-20211025172410509](D:\front-end\study\MarkDown\0基础\http\LocalStorage.png)

#### 3、localStorage 的基本用法

```js
console.log(localStorage); // Storage {age: "18", username: "heisming", length: 2}
```

##### setItem()

```js
localStorage.setItem("username", "ss");
localStorage.setItem("username", "heisming");
localStorage.setItem("age", 18);
localStorage.setItem("sex", "男");
```

##### length

```js
console.log(localStorage.length);
```

##### getItem()

```js
console.log(localStorage.getItem('username'));
// 获取不存在的返回 null
console.log(localStorage.getItem('usernam1e'));
```

##### removeItem()

```js
localStorage.removeItem('sex');
// 删除不存在的 key，不报错
localStorage.removeItem('se22222x');
```

##### clear()

```js
// 一键清除
localStorage.clear();
```



#### 4.使用 localStorage 实现自动填充

```js
const loginForm = document.getElementById('login');
const btn = document.getElementById('btn');
const usernmae = localStorage.getItem('username');
if (usernmae) {
  loginForm.username.value = usernmae;
}
btn.addEventListener('click', e => {
  //阻止表单的默认提交事件
  e.preventDefault();
  //数据验证
  //loginForm.name获得表单中的元素
  console.log(loginForm.username);
  localStorage.setItem('username', loginForm.username.value)
  loginForm.submit();
}, false);
```



#### 5、记录页面访问次数

```js
// 名称常量
const COUNT = 'count';
// 首先获得本地存储中是否含有
let count = localStorage.getItem(COUNT);
// 判断是否是第一次访问
if (count) {
  console.log(count);
  localStorage.setItem(COUNT, ++count);
} else {
  localStorage.setItem(COUNT, 1);
  count = 1;
}
// 输出
console.log(`第${count}次访问此页面`);
```





### 3.2、localStorage 的注意事项

#### 1、localStorage 的存储期限（被动过期）

localStorage 是持久化的本地存储，除非手动清除（比如通过 js 删除，或者清除浏览器缓存），否则数据是永远不会过期的

#### 2、localStorage 键和值的类型★

localStorage 存储的键和值只能是字符串类型

不是字符串类型，也会先转化成字符串类型再存进去

```js
console.log({}.toString());//[object Object]
localStorage.setItem({}, 18);
localStorage.setItem('students', [{},{}]);
console.log(
  typeof localStorage.getItem('[object Object]'),//string
  localStorage.getItem('[object Object]')//18
);
```

#### 3、不同域名下 不能 共用 localStorage

#### 4、localStorage的兼容性(IE8)





## 4、sessionStorage

### 1、认识它

会话存储：用于临时保存同一窗口（或标签页）的数据，在关闭窗口或变迁也之后将会删除这些数据

当会话结束（比如关闭浏览器）的时候，sessionStorage 中的数据会被清空

#### 保存数据

sessionStorage.setItem('username', 'alex');

#### 读取数据

sessionStorage.getItem('username');

#### 删除数据

sessionStorage.removeItem('username');

#### 清空数据

sessionStorage.clear();

### 2、cookie、localStorage、sessionStorage的区别  

（1）cookie会在服务器和浏览器之间传递，localStorage和sessionStorage不会发给服务器，仅在本地保存      

（2）cookie存储数据小，不超过4k。localStorage和sessionStorage存储大小也有限制，但是比cookie大，一般5M左右      

（3）cookie可以通过自带属性设置有效期，当不设置有效期，浏览器关闭，cookie就会消失；当设置有效期后，在有效期内，关闭浏览器或者窗口，依然存在。

（4）到有效期后，cookie会自动消失。localStorage没有自带属性的设置有效期，除非手动删除。sessionStorage在关闭浏览器或者窗口时会被删除。 

（5）cookie和localStorage在**同源窗口是共享**的，**sessionStorage在不同的窗口不能共享。**



### 一些问题

1、Cookie
 1.1、Cookie用法和属性{[名称（Name）和值（Value）],[失效（到期）时间(Expires 或 Max-Age)]}及中文编码和解码
 1.2、Cookie的封装
2、localStorage
 2.1、localStorage的用法和属性
 2.2、localStorage的注意事项
3、简单了解sessionStorage
4、cookie、localStorage、sessionStorage的区别









## 5、Ajax

### 5.1、初识 Ajax

#### 1.Ajax 是什么

Ajax 是 Asynchronous JavaScript and XML（异步 JavaScript 和 XML）的简写

Ajax 中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事情。

直到成功获取响应后，浏览器才开始处理响应数据

XML（可扩展标记语言）是前后端数据通信时传输数据的一种格式

```xml
<person>
  <name>张三</name>
  <age>18</age>
  <sex>男</sex>
</person>
<person>
  <name>李四</name>
  <age>28</age>
  <sex>女</sex>
</person>
```

XML 现在已经不怎么用了，现在比较常用的是 JSON

Ajax 其实就是浏览器与服务器之间的一种异步通信方式

★★★使用 Ajax 可以在不重新加载整个页面的情况下，对页面的某部分进行更新

案例：
① XX网注册检测
② XX网搜索提示

#### 2.搭建 Ajax 开发环境

Ajax 需要服务器环境，非服务器环境下，很多浏览器无法正常使用 Ajax

VScode中的Live Server 使用http协议访问，模拟服务器环境

其他方式
windows phpStudy
Mac MAMP



### 5.2、Ajax 的基本用法

#### 1.XMLHttpRequest

Ajax 想要实现浏览器与服务器之间的异步通信，需要依靠 XMLHttpRequest，它是一个构造函数

不论是 XMLHttpRequest，还是 Ajax，都没有和具体的某种数据格式绑定

#### 2.Ajax 的使用步骤

##### 2.1.创建 xhr 对象

```JS
const xhr = new XMLHttpRequest()
```

##### 2.2.监听事件，处理响应

当获取到响应后，会触发 xhr 对象的 readystatechange 事件，可以在该事件中对响应进行处理

###### 两种写法

```js
// XMLHttpRequest
const xhr = new XmlHttpRequset()
xhr.open('GET', url, true)
// onreadystatechange
xhr.onreadyStateChange = () => {
  // readyState
  if(xhr.Status === 4) {
      // status
      if(xhr.Code === 200) {
          // JSON.parse
          console.log(JSON.parse(xhr.responseText))
      }
  }
}
// 位置
xhr.open('GET', url, true)
xhr.send(null)
```

```js
// 第一种
xhr.addEventListener('readystatechange', () => {}, fasle);
// 第二种
xhr.onreadystatechange = () => {
   if (xhr.readyState !== 4) return;
   // HTTP CODE
   // ★★★获取到响应后，响应的内容会自动填充 xhr 对象的属性
   // xhr.status：HTTP  200  404
   // xhr.statusText：HTTP 状态说明 OK Not Found
   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
     console.log('正常使用响应数据');
     console.log(xhr.responseText);
   }
 };
```

###### 兼容性★★★

readystatechange 事件也可以配合 addEventListener 使用，不过要注意，IE6~8 不支持 addEventListener

为了兼容性，readystatechange 中不使用 this，而是直接使用 xhr

由于兼容性的原因，最好放在 open 之前



###### 事件监听

readystatechange 事件监听 readyState 这个状态的变化

它的值从 0 ~ 4，一共 5 个状态

0：未初始化。尚未调用 open()
1：启动。已经调用 open()，但尚未调用 send()
2：发送。已经调用 send()，但尚未接收到响应
3：接收。已经接收到部分响应数据
4：完成。已经接收到全部响应数据，而且已经可以在浏览器中使用了

##### 2.3.准备发送请求

```js
xhr.open(
  '方法HTTP: GET、POST、PUT、DELETE',
  '地址URL: https://www.jd.com/api/http/search/suggest?words=js ./index.html ./index.xml ./index.txt',
  true
);
```

调用 open 并不会真正发送请求，而只是做好发送请求前的准备工作

##### 2.4.发送请求

调用 send() 正式发送请求

send() 的参数是通过请求体携带的数据

xhr.send(null);兼容性参数写法null

#### 3.使用 Ajax 完成前后端通信 

```js
const url = 'https://www.jd.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  //4代表请求完成不表示成功或失败
  if (xhr.readyState !== 4) return;
  // 判断是否成功
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText);
    console.log(typeof xhr.responseText);
  }
};
xhr.open('GET', url, true);
xhr.send(null);
```



### 5.3、GET请求

#### 1.携带数据

GET 请求不能通过请求体携带数据，但可以通过请求头携带

```js
xhr.open('GET', url, true);
xhr.send(null);
// 不会报错，但不会发送数据
xhr.send('sex=male');
```

#### 2.数据编码★

 如果携带的数据是非英文字母的话，比如说汉字，就需要编码之后再发送给后端，不然会造成乱码问题

 可以使用 encodeURIComponent() 编码

```js
const url = `https://www.jd.com/api/http/search/suggest?words=${encodeURIComponent(
  '前端'
)}`;
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return;
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText);
  }
};
xhr.open('GET', url, true);
xhr.send(null);
```

### 5.4、POST 请求

```html
<form action="https://www.jd.com/api/http/search/suggest?words=js" method="post">
	<input type="text" name="username" />
	<input type="password" name="password" />
	<input type="submit" value="提交" />
</form>    
```

#### 1.携带数据

POST 请求主要通过请求体携带数据，同时也可以通过请求头携带

```JS
const url = 'https://www.jd.com/api/http/search/suggest?words=js';
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText);
  }
}
xhr.open('POST', url, true);
```

如果想发送数据，直接写在 send() 的参数位置，一般是字符串

```JS
xhr.send('username=alex&age=18');
```

不能直接传递对象，需要先将对象转换成字符串的形式

```JS
xhr.send({
  username: 'alex',
  age: 18
});
// 结果
[object Object]
```

#### 2.数据编码同GET

```JS
xhr.send(`username=${encodeURIComponent('张三')}&age=18`);
```



### 5.5、JSON

#### 初识 JSON

##### 1.JSON 是什么

JSON 全称是 JavaScript Object Notation

Ajax 发送和接收数据的一种格式

```json
{"code":200,"data":[{"word":"jsp"},{"word":"js"},{"word":"json"},{"word":"js \u5165\u95e8"},{"word":"jstl"}]}
```

##### 2.为什么需要 JSON

JSON 有 3 种形式，每种形式的写法都和 JS 中的数据类型很像，可以很轻松的和 JS 中的数据类型互相转换

JS->JSON->PHP/Java

PHP/Java->JSON->JS



#### JSON 的 3 种形式

##### 1.简单值形式

JSON 的简单值形式就对应着 JS 中的基础数据类型
数字、字符串、布尔值、null

###### 注意事项

① JSON 中没有 undefined 值
② JSON 中的字符串必须使用双引号
③ JSON 中是不能注释的

plain.json文件

```json
"str"
```



##### 2.对象形式

JSON 的对象形式就对应着 JS 中的对象

###### 注意事项

JSON 中对象的属性名必须用双引号，属性值如果是字符串也必须用双引号
JSON 中只要涉及到字符串，就必须使用双引号
不支持 undefined

obj.json文件

```js
{
  "name": "张三",
  "age": 18,
  "hobby": ["足球", "乒乓球"],
  "family": {
    "father": "张老大",
    "mother": "李四"
  }
}
```



##### 3.数组形式

JSON 的数组形式就对应着 JS 中的数组

arr.json文件

```json
[
  {
    "id": 1,
    "username": "张三",
    "comment": "666"
  },
  {
    "id": 2,
    "username": "李四",
    "comment": "999 6翻了"
  }
]
```

###### 注意事项

数组中的字符串必须用双引号
JSON 中只要涉及到字符串，就必须使用双引号
不支持 undefined

```js
const xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = () => {
  if (xhr3.readyState !== 4) return;
  if ((xhr3.status >= 200 && xhr3.status < 300) || xhr3.status === 304) {
    console.log(xhr3.responseText);
    console.log(typeof xhr3.responseText);
  }
};
// xhr3.open('GET', './JSON/plain.json', true);
// xhr3.open('GET', './JSON/obj.json', true);
xhr3.open('GET', './JSON/arr.json', true);
xhr3.send(null);
```



#### JSON 的常用方法

##### JSON.parse()

可以将 JSON 格式的字符串解析成 JS 中的对应值

一定要是合法的 JSON 字符串，否则会报错

```js
const xhr4 = new XMLHttpRequest();
xhr4.onreadystatechange = () => {
  if (xhr4.readyState !== 4) return;
  if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status === 304) {
    console.log(xhr4.responseText);
    console.log(JSON.parse(xhr4.responseText));
    console.log(JSON.parse(xhr4.responseText).data);
  }
};
// xhr4.open('GET', './plain.json', true);
// xhr4.open('GET', './obj.json', true);
xhr4.open('GET', 'https://www.jd.com/api/http/search/suggest?words=js', true);
// xhr4.send(null);
```

##### JSON.stringify()

JSON.stringify() 可以将 JS 的基本数据类型、对象或者数组转换成 JSON 格式的字符串

```js
console.log(
   JSON.stringify({
     username: 'alex',
     age: 18
   })
);
xhr4.send(JSON.stringify({
   username: 'alex',
   age: 18
}));
```

##### 使用 JSON.parse() 和 JSON.stringify() 封装 localStorage★

###### storage.js文件

```js
const storage = window.localStorage;
// 增
const set = (key,value) => {
    storage.setItem(key,JSON.stringify(value))
};
// 查
const get = key => {
    if (storage.getItem(key) != 'undefined') {
        return JSON.parse(storage.getItem(key));
    }
    return null;
};
// 删除
const remove = key => {
    storage.removeItem(JSON.stringify(key));
};
// 清空
const clear = () => {
    storage.clear();
};
export {set,get,remove,clear};
```

```js
import { set, get, remove, clear } from './JS/storage.js';
set('obj', { name: '对象', age: 18 });
console.log(get('obj'));
```





## 6、跨域

### 初识跨域

#### 1.跨域是什么

同域(发送请求的域与请求的地址域相同)，不是跨域

```js
(function () {
  // const url = './HTML/index.html';
  // 不同域，跨域，被浏览器阻止
  // const url = 'https://www.jd.com';
  const xhr = new XMLHttpRequest();
  // 向一个域发送请求，如果要请求的域和当前域是不同域，就叫跨域
  // 不同域之间的请求，就是跨域请求
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  }
  xhr.open('GET', url, true);
  xhr.send(null);
})();
```

#### 2.什么是不同域，什么是同域

**https（协议）://www.jd.com（域名）:443（端口号）/course/list（路径）**

协议、域名、端口号(默认端口号可以省略显示)，任何一个不一样，就是不同域

与路径无关，路径一不一样无所谓

##### 不同域

https://www.jd.com:443/course/list
http://www.jd.com:80/course/list

不同域

http://www.jd.com:80/course/list
http://m.jd.com:80/course/list
http://jd.com:80/course/list

#### 3.跨域请求为什么会被阻止

阻止跨域请求，其实是浏览器本身的一种安全策略--同源策略

其他客户端或者服务器都不存在跨域被阻止的问题

#### 4.跨域解决方案

① CORS(Cross-Origin Resource Sharing) 跨域资源共享
② JSONP

优先使用 CORS 跨域资源共享，如果浏览器不支持 CORS 的话，再使用 JSONP

### CORS 跨域资源共享《后端处理》

#### 1.CORS 是什么

```js
(function () {
  // const url = 'https://www.jd.com';
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
})();
```

##### 	在Response Headers中

​	    表明允许所有的域名来跨域请求它，* 是通配符，没有任何限制

```
Access-Control-Allow-Origin: *
```

​		只允许指定域名的跨域请求

```
Access-Control-Allow-Origin: http://127.0.0.1:5500
```

#### 2.使用 CORS 跨域的过程

① 浏览器发送请求
② 后端在响应头中添加 Access-Control-Allow-Origin 头信息
③ 浏览器接收到响应
④ 如果是同域下的请求，浏览器不会额外做什么，这次前后端通信就圆满完成了
⑤ 如果是跨域请求，浏览器会从响应头中查找是否允许跨域访问
⑥ 如果允许跨域，通信圆满完成
⑦ 如果没找到或不包含想要跨域的域名，就丢弃响应结果

#### 3.CORS 的兼容性（IE10）



### JSONP

#### 1.JSONP 的原理

script 标签跨域不会被浏览器阻止

JSONP 主要就是利用 script 标签，加载跨域文件

#### 2.使用 JSONP 实现跨域

服务器端准备好 JSONP 接口

https://www.jd.com/api/http/jsonp?callback=handleResponse

动态加载 JSONP 接口

##### jsonp.js文件

```js
const script = document.createElement('script');
// handleResponse
script.src = 'https://www.jd.com/api/http/jsonp?callback=handleResponse';
document.body.appendChild(script);
// handleResponse
const handleResponse = data => {
  console.log(data);
}
```

手动加载 JSONP 接口

```html
<script src="https://www.jd.com/api/http/jsonp?callback=handleResponse"></script>
```

相当于

```html
<script>
 handleResponse({
   code: 200,
   data: [
     {
       word: 'jsp'
     },
     {
       word: 'js'
     },
     {
       word: 'json'
     },
     {
       word: 'js 入门'
     },
     {
       word: 'jstl'
     }
   ]
 });
</script>
```

**优先使用 CORS，如果浏览器不支持 CORS 的话，再使用 JSONP**





## 7、XHR的对象

### XHR的属性

#### responseType 和 response 属性(IE10)

```js
(function () {
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('《XHR的responseType 和 response 属性》');
      // 文本形式的响应内容
      // responseText 只能在没有设置 responseType 或者 responseType = '' 或 'text' 的时候才能使用
      // console.log('responseText:' + xhr.responseText);
      // 可以用来替代 responseText
      console.log('response:' + xhr.response);
      // console.log('response:' + JSON.parse(xhr.responseText));
    }
  };
  xhr.open('GET', url, true);
  // xhr.responseType = '';
  // xhr.responseType = 'text';
  xhr.responseType = 'json';
  xhr.send(null);
})();
```

#### timeout 属性(IE8)

```js
// 设置请求的超时时间（单位 ms）
(function () {
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('《XHR的timeout 属性》');
      console.log('response:' + xhr.response);
    }
  };
  xhr.open('GET', url, true);
  //设置超时触发timeout事件
  xhr.timeout = 10000;
  xhr.send(null);
})();
```

#### withCredentials 属性(IE10)

指定使用 Ajax 发送请求时是否携带 Cookie

使用 Ajax 发送请求，默认情况下，同域时，会携带 Cookie；跨域时，不会

```js
xhr.withCredentials = true;
```

最终能否成功跨域携带 Cookie，还要看服务器同不同意

```js
(function () {
  const url = './HTML/index.html';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('《XHR的withCredentials 属性》');
      console.log('response:' + xhr.response);
    }
  };
  xhr.open('GET', url, true);
  //设置发送请求时(请求头)携带cookie
  xhr.withCredentials = true;
  xhr.send(null);
})();
```





### XHR 的方法

#### abort()

终止当前请求， 一般配合 abort 事件一起使用

```js
(function () {
  const url = './HTML/index.html';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('response:' + xhr.response);
    }
  };
  xhr.open('GET', url, true);
  xhr.send(null);
  //终止当前请求
  xhr.abort();
})();
```

#### setRequestHeader()

可以设置请求头信息

xhr.setRequestHeader(头部字段的名称, 头部字段的值);

```js
(function () {
  // const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  // 后端处理过可以发送json的接口
  const url = 'https://www.jd.com/api/http/json/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('《XHR的responseType 和 response 属性》');
      console.log('response:' + xhr.response);
    }
  };
  xhr.open('POST', url, true);
  // 请求头中的 Content-Type 字段用来告诉服务器，浏览器发送的数据是什么格式的
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(null);
  // xhr.send('username=alex&age=18');
  xhr.send(
    JSON.stringify({
      username: 'lmsoa'
    })
  );
})();
```

### XHR 的事件

#### load 事件(IE9)

响应数据可用时触发

```js
(function () {
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('response:' + xhr.response);
    }
  };
  // xhr.addEventListener('load',() => {
  //   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
  //     console.log('response:' + xhr.response);
  //   }
  // },false)
  xhr.open('GET', url, true);
  xhr.send(null);
})();
```

#### error 事件(IE10)

```JS
(function () {
  // const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('response:' + xhr.response);
    }
  };
  //请求发生错误时触发
  xhr.onerror = () => {
    console.log('error');
  }
  xhr.open('GET', url, true);
  xhr.send(null);
})();
```

#### abort 事件(IE10)

调用 abort() 终止请求时触发

```JS
(function () {
  const url = './HTML/index.html';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('response:' + xhr.response);
    }
  };
  xhr.onabort = () => {
    console.log('阻止');
  }
  xhr.open('GET', url, true);
  xhr.send(null);
  //终止当前请求
  xhr.abort();
})();
```

#### timeout 事件(IE8)

请求超时后触发

```JS
(function () {
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log('《XHR的timeout 属性》');
      console.log('response:' + xhr.response);
    }
  };
  xhr.addEventListener(
    'timeout',
    () => {
      console.log('timeout');
    },
    false
  );
  xhr.open('GET', url, true);
  //设置超时触发timeout事件
  xhr.timeout = 10;
  xhr.send(null);
})();
```





## 8、Ajax 进阶

### FormData

#### 1.使用 Ajax 提交表单

```html
<form id="login" action="https://www.jd.com/api/http/search/suggest?words=js" method="POST"
      
  enctype="multipart/form-data">
    
  <input type="text" name="username" placeholder="用户名" />
  <input type="password" name="password" placeholder="密码" />
  <input id="submit" type="submit" value="登录" />
</form>
```

#### 2.FormData 的基本用法(IE10)

通过 HTML 表单元素创建 FormData 对象

```js
const fd = new FormData(表单元素);
xhr.send(fd);
```

通过 append() 方法添加数据

```js
const fd = new FormData(表单元素);
fd.append('age', 18);
fd.append('sex', 'male');
xhr.send(fd);
```



```js
(function () {
  const login = document.getElementById('login');
  //  console.log(login.username);
  //  console.log(login.password);
  const { username, password } = login;
  const btn = document.getElementById('submit');
  const url = 'https://www.jd.com/api/http/search/suggest?words=js';
  btn.addEventListener('click', e => {
    // 阻止表单自动提交
    e.preventDefault();
    // 表单数据验证
    // 发送 Ajax 请求
    const xhr = new XMLHttpRequest();
    xhr.addEventListener(
      'load',
      () => {
        if (
          (xhr.status >= 200 && xhr.status < 300) ||
          xhr.status === 304
        ) {
          console.log(xhr.response);
        }
      },
      false
  );
 xhr.open('POST', url, true);
 // 组装数据
 // const data = `username=${username.value}&password=${password.value}`;
 // 大数据替代方案
 // FormData 可用于发送表单数据
 const data = new FormData(login);
 // data.append('age', 18);
 // data.append('sex', 'male');
 // console.log(data);
 // for (const item of data) {
 //   console.log(item);
 // }
 // 当使用FormData时，浏览器会自动使用
 // xhr.setRequestHeader(
 //   'Content-Type',
 //   'application/x-www-form-urlencoded'
 // );
 xhr.send(data);
 // xhr.send('username=alex&password=12345');
  },
    false
  );
})();
```





### 封装 Ajax

#### constants.js

```js
//常量
export const HTTP_GET = 'GET';
export const HTTP_POST = 'POST';
export const DATA_JSON = 'json';
export const CONTENTTYPE_FORM_URLENCODED ='application/x-www-form-urlencoded';
export const CONTENTTYPE_JSON ='application/json';
export const ERROR_HTTP_CODE = 1;
export const ERROR_HTTP_CODE_TEXT = 'HTTP状态码异常';
export const ERROR_REQUEST = 2;
export const ERROR_REQUEST_TEXT = '请求被阻止';
export const ERROR_TIMEOUT = 3;
export const ERROR_TIMEOUT_TEXT = '请求超时';
export const ERROR_ABORT = 4;
export const ERROR_ABORT_TEXT = '请求终止';
```

#### defaults.js

```js
//常量
import {HTTP_GET,CONTENTTYPE_FORM_URLENCODED,CONTENTTYPE_JSON} from './constants.js'
//默认参数
const DEFAULTS = {
    method:HTTP_GET,
    //请求头携带的数据
    params: null,
    // params: {
    //   username: 'lm'  
    //   age : 12
    // }
    //请求体携带的数据
    data: null,
    // data:{
    //     username: 'lm',
    //     age : 12
    // }
    //data: FormData数据

    contentType:CONTENTTYPE_FORM_URLENCODED,
    responseType : 'text',
    timeoutTime : 0,
    withCredentials:false,

    //方法
    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){},

};

export default DEFAULTS;
```

#### util.js

```js
//工具函数
const serialize = param =>{
     const results = [];
     for (const [key,value] of Object.entries(param)) {
           results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
     }
     //['username =lm','age = 123' ]
     return results.join('&');
}

//给URL添加参数
const addURLData = (url,data) =>{
    if(!data) return '';
    const mark = url.includes('?')?'&':'?';

    return `${mark}${data}`
};

//数据序列化成JSON格式的字符串
const serializeJSON = param =>{
    return JSON.stringify(param);
}

export {serialize,addURLData,serializeJSON};
```

#### Ajax.js

```js
//常量
import {HTTP_GET,CONTENTTYPE_FORM_URLENCODED,CONTENTTYPE_JSON} from './constants.js'

//工具函数
import { serialize, addURLData,serializeJSON } from './util.js'

////默认参数
import DEFAULTS from "./defaults.js";



//Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);

        //初始化
        this.init();
    }
    init() {
        const xhr = new XMLHttpRequest();
        //给别的方法访问
        this.xhr = xhr;
        //绑定事件函数
        this.bindEvents();
        
        xhr.open(this.options.method, this.url + this.addParam(), true);

        //设置responseType
        this.setResponseType();

        //设置跨域是否携带cookie
        this.setCookie();

        //设置超时时间
        this.setTimeout();
        
        //发送请求
        this.sendData();
       
        // xhr.send();
    }

    //绑定相应事件处理程序
    bindEvents() {
        const xhr = this.xhr;

        const { success, httpCodeError, error, abort, timeout } = this.options;

        xhr.addEventListener(
            'load',
            () => {
                if (this.OKhttp()) {
                    success(xhr.response, xhr);
                } else {
                    httpCodeError(xhr.status, xhr);
                }
            },
            false
        );

        //请求遇到错误时，将触发error事件
        //error
        xhr.addEventListener(
            'error',
            () => {
                error(xhr);
            },
            false
        );

        //abort
        xhr.addEventListener(
            'abort',
            () => {
                abort(xhr);
            },
            false
        );

        //timeout
        xhr.addEventListener(
            'timeout',
            () => {
                timeout(xhr);
            },
            false
        );

    }

    //检测响应的HTTP状态码是否正常
    OKhttp() {
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status < 300) ||
            xhr.status === 304;
    }

    //在地址上添加数据
    addParam() {
        const { param } = this.options;

        if (!param) return '';

        return addURLData(this.url, serialize(param));
    }

    // 设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }
    
     //设置跨域是否携带cookie
    setCookie(){
        if(this.options.withCredentials) {
           this.xhr.withCredentials = true;
        }       
    }

    //设置超时时间
    setTimeout(){
        const {timeoutTime} = this.options;
        if(timeoutTime > 0){
            this.xhr.timeout = timeoutTime;
        }
    }

    //发送请求
    sendData(){
        const xhr = this.xhr;
        if(!this.isSendData()){
            return xhr.send(null);
        }

        let resultData = null;
        const {data} = this.options;

        if(this.isFormData()){
            resultData = data;
        }else if(this.isFormURLEncodeData()){

            this.setContentType(CONTENTTYPE_FORM_URLENCODED);
            //发送application/x-www-form-urlencoded格式的数据
            resultData = serialize(data);
        
        }else if(this.isJSONData){
            this.setContentType(CONTENTTYPE_JSON);
            resultData = serializeJSON(data);
        }else{
            //发送其他格式的数据
            this.setContentType();
            resultData = data;
        }
        xhr.send(resultData);
    }

    //是否需要send发送数据
    isSendData(){
        const {data,method} = this.options;
        if(!data) return false;

        if(method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

        return true;

    }

    //是否发送FormData格式的数据
    isFormData(){
        return this.options.data instanceof FormData;
    }

    //是否发送application/x-www-form-urlencoded格式的数据
    isFormURLEncodeData(){
        return this.options.contentType.toLowerCase().includes(CONTENTTYPE_FORM_URLENCODED);
    }
    
    //是否发送application/json格式的数据
    isJSONData(){
        return this.options.contentType.toLowerCase().includes(CONTENTTYPE_JSON);
    }

    //设置Content-Type
    setContentType(contentType = this.options.contentType){
        if(!contentType) return;
        this.xhr.setRequestHeader('Content-Type',contentType);
    }

    //获取XHR对象
    getXHR(){
        return this.xhr;
    }
}

export default Ajax;
```

#### index.js

```js
//常量
import {
   HTTP_GET, HTTP_POST, DATA_JSON, CONTENTTYPE_FORM_URLENCODED, CONTENTTYPE_JSON,
   ERROR_HTTP_CODE,
   ERROR_HTTP_CODE_TEXT,
   ERROR_REQUEST,
   ERROR_REQUEST_TEXT,
   ERROR_TIMEOUT,
   ERROR_TIMEOUT_TEXT,
   ERROR_ABORT,
   ERROR_ABORT_TEXT
} from './constants.js'
//导入类
import Ajax from "./Ajax.js";



//使用 Promise 改造封装好的 Ajax
const ajaxs = (url, options) => {

   let xhr;
   const p = new Promise((resolve, reject) => {
      xhr = new Ajax(url, {
         //展开运算符覆盖默认方法
         ...options, ...{
            success(response) {
               resolve(response);
            },
            httpCodeError(status) {
               reject({
                  type: ERROR_HTTP_CODE,
                  text: `${ERROR_HTTP_CODE_TEXT}:${status}`
               });
            },
            error() {
               reject({
                  type: ERROR_REQUEST,
                  text: ERROR_REQUEST_TEXT
               });
            },
            abort() {
               reject({
                  type: ERROR_ABORT,
                  text: ERROR_ABORT_TEXT
               });
            },
            timeout() {
               reject({
                  type: ERROR_TIMEOUT,
                  text: ERROR_TIMEOUT_TEXT
               });
            },
         }
      }).getXHR();
   })
   p.xhr = xhr;
   p.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
   p.ERROR_REQUEST = ERROR_REQUEST;
   p.ERROR_TIMEOUT = ERROR_TIMEOUT;
   p.ERROR_ABORT = ERROR_ABORT;
   
   return p;
}
const ajax = (url, options) => {
   return new Ajax(url, options).getXHR();
}
const get = (url, options) => {
   return ajax(url, { ...options, method: HTTP_GET });
}
const post = (url, options) => {
   return ajax(url, { ...options, method: HTTP_POST });
}
const getJSON = (url, options) => {
   return ajax(url, { ...options, method: HTTP_GET, responseType: DATA_JSON });
}
const getJSONS = (url, options) => {
   return ajaxs(url, { ...options, method: HTTP_GET, responseType: DATA_JSON });
}

export { ajax, get, post, getJSON,getJSONS };
```









### Ajax 应用

#### 模拟简单登录

```js
<input id="search" type="search" name="" id="" placeholder="我是搜索框">
<ul id="result"></ul>
<script type="module">
  import { getJSONS } from './JS/index.js';
  const Surl = 'https://www.imooc.com/api/http/search/suggest?words=';
  const searchInput = document.getElementById('search');
  const resultList = document.getElementById('result');
  const handleInputEvent = function () {
    if (searchInput.value.trim() !== '') {
      getJSONS(`${Surl}${searchInput.value}`).then(response => {
        console.log(response);
        let html = ``;
        for (const item of response.data) {
          html += `<li>${item.word}</li>`;
        }
        resultList.innerHTML = html;
      }).catch(err => {
        console.log(err);
      })
    } else {
      resultList.innerHTML = ``;
    }
  }
  let timer = null;
  //IE9
  searchInput.addEventListener('input', () => {
    //  console.log(1);
    // 
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(handleInputEvent, 500);
  }, false)
</script>
```

#### 二级菜单

![](D:\front-end\study\MarkDown\0基础\img\loading.gif)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>竖直二级菜单</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        li {
            list-style: none;
        }

        /* menu */
        .menu {
            width: 100px;
            background-color: rgba(0, 0, 0, 0.1);
            margin: 10px;
        }

        .menu-item {
            position: relative;
            padding: 5px;
            cursor: pointer;
        }

        .menu-content {
            display: none;
            position: absolute;
            left: 100%;
            top: 0;
            width: 200px;
            height: 100px;
            padding: 0 5px;
            background-color: rgba(0, 0, 0, 0.1);
        }

        .menu-item:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }

        .menu-item:hover .menu-content {
            display: block;
        }

        .menu-loading {
            margin: 45px 0 0 92px;
        }
    </style>
</head>

<body>
    <ul id="menu" class="menu">
        <!-- <li class="menu-item" data-key="hot" data-done="done">
          <span>热门</span>
          <div class="menu-content">
            <p><img class="menu-loading" src="./loading.gif" alt="加载中" /></p>
          </div>
        </li> -->
    </ul>
    <script type="module">
        import { getJSONS } from '../JS/index.js'
        const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
        const menuEL = document.getElementById('menu');
        console.log(getJSONS);
        getJSONS(menuURL).then(response => {
            console.log(response);
            let html = ``;
            for (const item of response.data) {
                html += `<li class="menu-item" 
                data-key="${item.key}">
                <span>${item.title}</span>
                <div class="menu-content">
                <p><img class="menu-loading" src="../IMG/loading.gif" alt="加载中" /></p>
                </div>
                </li> `;
            }
            menuEL.innerHTML = html;
        }).catch(err => {
            console.log(err);
        }).then(() => {
            const items = menuEL.querySelectorAll('.menu-item');
            for (const item of items) {
                item.addEventListener('mouseenter', () => {
                    //IE11
                    // console.log(item.dataset.key);
                    if (item.dataset.done === 'done') return;
                    getJSONS(`https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`).then(
                        response => {
                            console.log(response);
                            item.dataset.done = 'done';
                            let html = ``;
                            for (const item of response.data) {
                                html += `<p>${item.title}</p>`;
                            }
                            console.log(html);
                            item.querySelector('.menu-content').innerHTML = html;
                        }).catch(err => {
                            console.log(err);
                        })
                }, false);
            }
        }).catch(err => {
            console.log(err);
        })
    </script>
</body>
</html>
```

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>横向二级菜单</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .menu {
            width: 500px;
            height: 30px;
            background-color: rgba(0, 0, 0, 0.1);
            overflow: hidden;
            list-style: none;
            text-align: center;
            line-height: 30px;
            overflow: hidden;
        }

        .menu li {
            float: left;
            margin-right: 10px;
            cursor: pointer;
            /* position: relative; */
        }

        .menu-content {
            display: none;
            position: absolute;
            height: 200px;
            background-color: rgba(0, 0, 0, 0.1);
            top: 30px;

        }

        .menu li:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }

        .menu li:hover .menu-content {
            display: block;
        }
    </style>
</head>
<ul id="menu" class="menu">
    <!-- <li class="menu-item" data-key="hot" data-done="done">
      <span>热门</span>
      <div class="menu-content">
        <p><img class="menu-loading" src="../IMG/loading.gif" alt="加载中" /></p>
      </div>
    </li> -->
</ul>

<body>
    <script type="module">
        import { getJSONS } from '../JS/index.js';
        const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
        const menuEL = document.getElementById('menu');
        console.log(getJSONS);
        getJSONS(menuURL).then(response => {
            console.log(response);
            let html = ``;
            for (const item of response.data) {
                console.log(item);
                html += ` <li class="menu-item" data-key="${item.key}">
                <span>${item.title}</span>
                <div class="menu-content">
                    <p><img class="menu-loading" src="../IMG/loading.gif" alt="加载中" /></p>
                </div>
                </li>`;
            }
            // console.log(html);
            menuEL.innerHTML = html;
        }).catch(err => {
            console.log(err);
        }).then(() => {
            const items = menuEL.querySelectorAll('.menu-item');
            for (const item of items) {
                item.addEventListener('mouseenter', () => {
                    if (item.dataset.done === 'done') return;
                    getJSONS(`https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`)
                        .then(response => {
                            console.log(response);
                            item.dataset.done = 'done';
                            let html = ``;
                            for (const item of response.data) {
                                html += `<p>${item.title}</p>`;
                            }
                            item.querySelector('.menu-content').innerHTML = html;
                        })
                }, false);
            }
        }).catch(err => {
            console.log(err);
        });

    </script>
</body>

</html>
```



#### 多个 Ajax 请求的并发执行

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多个 Ajax 请求的并发执行</title>

    <style>
        /* css reset */
        * {
            padding: 0;
            margin: 0;
        }

        li {
            list-style: none;
        }

        /* menu */
        .menu {
            width: 100px;
            background-color: rgba(0, 0, 0, 0.1);
            margin: 10px;
        }

        .menu-item {
            position: relative;
            padding: 5px;
            cursor: pointer;
        }

        .menu-content {
            display: none;
            position: absolute;
            left: 100%;
            top: 0;
            width: 200px;
            height: 100px;
            padding: 0 5px;
            background-color: rgba(0, 0, 0, 0.1);
        }

        .menu-item:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }

        .menu-item:hover .menu-content {
            display: block;
        }

        .menu-loading {
            margin: 45px 0 0 92px;
        }

        /* loading-page */
        .loading-page {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            background-color: #eee;
            text-align: center;
        }

        .loading-img {
            position: absolute;
            top: 50%;
        }

        .ad img {
            display: inline-block;
            width: 25%;
        }

        .none {
            display: none;
        }
    </style>
</head>

<body>
    <div id="loading-page" class="loading-page">
        <img class="loading-img" src="../IMG/loading.gif" alt="加载中..." />
    </div>

    <div id="ad" class="ad"></div>

    <ul id="menu" class="menu">
        <!-- <li class="menu-item" data-key="hot" data-done="done">
          <span>热门</span>
          <div class="menu-content">
            <p><img class="menu-loading" src="../IMG/loading.gif" alt="加载中" /></p>
          </div>
        </li> -->
    </ul>

    <script type="module">
        import { getJSONS } from '../JS/index.js';

        const menuURL = 'https://www.imooc.com/api/mall-PC/index/menu';
        const adURL = 'https://www.imooc.com/api/mall-PC/index/ad';

        const loadingPageEl = document.getElementById('loading-page');
        const adEl = document.getElementById('ad');
        const menuEl = document.getElementById('menu');

        const p1 = getJSONS(menuURL)
            .then(response => {
                // console.log(response);
                let html = '';
                for (const item of response.data) {
                    html += `
              <li class="menu-item" data-key="${item.key}">
                <span>${item.title}</span>
                <div class="menu-content">
                  <p><img class="menu-loading" src="../IMG/loading.gif" alt="加载中" /></p>
                </div>
              </li>
            `;
                }
                menuEl.innerHTML = html;
                // [{key: "hot", title: "热门出发地", subTitles: Array(5)}]
                // ...
            })
            .then(() => {
                const items = menuEl.querySelectorAll('.menu-item');
                for (const item of items) {
                    item.addEventListener(
                        'mouseenter',
                        () => {
                            // console.log(item.getAttribute('data-key'));

                            // IE11 开始支持
                            // console.log(item.dataset.key);
                            if (item.dataset.done === 'done') return;
                            getJSONS(`https://www.imooc.com/api/mall-PC/index/menu/${item.dataset.key}`
                            ).then(response => {
                                // console.log(response);
                                // [{title: "内地热门城市", cities: Array(27)}]
                                item.dataset.done = 'done';
                                let html = '';
                                for (const item of response.data) {
                                    html += `<p>${item.title}</p>`;
                                }
                                item.querySelector('.menu-content').innerHTML = html;
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        },
                        false
                    );
                }
            }).catch(err => {
                console.log(err);
            });

        const p2 = getJSONS(adURL).then(response =>{
            console.log(response);
            let html = ``;
            for (const item of response.data) {
                html += `<img src="${item.url}" alt="加载中" />`;
            }
            // console.log(html);
            adEl.innerHTML = html;
        }).catch(err => {
            console.log(err);
        });
    
        Promise.all([p1,p2]).then(success =>{
           //隐藏loading图片
           // loadingPageEl.className += ' none'
           // IE10
           loadingPageEl.classList.add('none');
        });

    </script>
</body>
</html>
```



### axios



#### 1.axios 是什么

axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中

第三方 Ajax 库 http://www.axios-js.com/zh-cn/docs/

#### 2.axios 的基本用法

引入 axios

```html
<script src="https://unpkg.com/axios@0.19.2/dist/axios.min.js">
	console.log(axios);
</script>
```

```js
(function () {
    const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
    axios(url, {
      method: 'post',
      // 请求时的头信息
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/json'
      },
      // 通过请求头携带的数据
      params: {
        username: 'htsingmg'
      },
      // 通过请求体携带的数据
      // application/json
      data: {
        age: 18,
        sex: 'male'
      },
      //超时请求
      timeout: 10,
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
 
  axios.get(url, {
    params: {
      username: 'alex'
    }
  }).then(response => {
      console.log(response);
  });
  axios.post(url, 'username=alex&age=18')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  axios.post('https://www.imooc.com/api/http/json/search/suggest?words=js', {
      username: 'alex'
  }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  // axios.put()
  // axios.delete()
})();
```







### Fetch

#### 1.Fetch 是什么

Fetch 也是前后端通信的一种方式

Fetch 是 Ajax（XMLHttpRequest）的一种替代方案，基于 Promise 

Ajax 的兼容性比 Fetch 好

但是没有`abort`和`timeout`

可参考阮一峰大佬的博客

http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html

```js
console.log(fetch);//ƒ fetch() { [native code] }
```

#### 2.Fetch 的基本用法

fetch() 调用后返回 Promise 对象

```js
(function () {
  const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
  // body: (...)
  // bodyUsed: false
  // ok: true
  // status: 200
  // statusText: "OK"
  // type: "cors"
  // url: "https://www.im...
  // 第二个参数是对象，用来配置 fetch
  const fd = new FormData();
  fd.append('username', 'alex');
  fetch(url, {
    method: 'post',
    // 通过请求体发送数据
    // body: null
    // body: 'username=alex&age=18',
    // body: JSON.stringify({ username: 'alex' })
    body: fd,
    // 请求头无法携带数据
    // headers: {
    //   // 'Content-Type': 'application/x-www-form-urlencoded'
    //   'Content-Type': 'application/json'
    // }
    // 跨域资源共享（默认值）
    mode: 'cors'
    // 跨域是否携带cookie
    // credentials:'include'
  }).then(response => {
      console.log(response);
      // body/bodyUsed
      // body 只能读一次，读过之后就不让再读了
      // ok
      // 如果为 true，表示可以读取数据，不用再去判断 HTTP 状态码了
      if (response.ok) {
        // console.log(response.json());
        return response.json();
        // return response.text();
      } else {
        throw new Error(`HTTP CODE 异常 ${response.status}`);
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
})();
```



## 一些问题

1、Ajax的使用步骤有哪些？
2、GET和POST的请求携带数据的区别？
3、JSON的三种形式是哪三种？
4、什么是跨域资源共享？
5、XHR的属性有哪些？事件有哪些？
6、FormData是什么？
7、axios和Fetch的区别？

