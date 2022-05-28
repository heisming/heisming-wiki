# 《Web性能实战》2017出版----[美]杰里米·瓦格纳

# 1、理解Web性能

​	为什么Web性能很重要？

​		web性能主要指网站的加载速度，因为缩短加载时间可以改善网站在任意互联网连接条件下的用户体验。

## 1.1、理解Web性能

### 1.1.1、web性能和用户体验

​		**高性能的网站可以改善用户体验**。网站加载速度慢对用户参与度有明显的影响，特别是在电子商务网站上，**近一半的用户**希望加载在**2秒**内完成，如果加载时间**超过3秒**，**40%**的用户将会退出。

### 1.1.2、web浏览器如何与Web服务器通信

​		用户向example.com发送请求，用户通过浏览器发送网页请求，然后必须等待服务器响应并发送内容。服务器发送响应后，用户才能在浏览器中接收到网页

#### 加载时间

​		就是从用户请求网站到网站出现在用户屏幕上所经历的时间，其驱动机制也就是从用户请求内容到服务器响应到达用户所消耗的时间

#### 与服务器通信

​		当浏览器请求网页时，它使用一种被称为超文本传输协议(HTTP)和服务器通信，浏览器发出一个HTTP请求，Web服务器回一个HTTP响应，响应中包含了状态码和请求的内容

#### 通信中的延迟

​		1、等待请求达到Web服务器所花费的时间

​		2、Web服务器汇集和发送响应内容所花费的时间

​		3、Web浏览器下载响应内容得到时间

#### 减少延迟

​		减少响应达到客户端所需要的时间

#### 队头阻塞（HTTP/1）

​		浏览器限制了单一时间点内发出的请求数（**通常是6个**），当一个或者多个请求正在处理，而其余请求已完成时，对内容的新请求将会被阻塞，直到原先剩余的请求完成为止

#### HTTP/2

​		解决了对头阻塞问题，它能够使不支持HTTP/2的客户端回退到HTTP/1

### 1.1.3、Web页面如何加载

​		浏览器在下载index.html后，会发现一个链接到样式表的<link>标签、两个<script>标签和一个引用图像的<img>标签

​		user   => GET/index.html   =>	GET/styles.css   =>   GET/jquery.js   =>   GET/scripts.js   =>   GET/logo.png





## 1.2、上手准备

​		性能问题通常表明前端架构中存在问题。我们书中假定了一个客户需要优化他们的页面，需要使用Node.js和Git模拟到远程服务器的网络连接。

### 1.2.1、安装Node.js和Git

### 1.2.2、下载并运行客户的网站

​		从GitHub上下载，打开命令行运行如下代码：

```
git clone https://github.com/malchata/ch1-coyle.git
cd ch1-coyle
```

​		下载后，需要使用npm下载Web服务器所需的软件包

​		这条命令会将Express框架安装到当前目录，可以使用它创建一个简单的Web服务器，为本例和其他示例提供静态文件，这些示例将在本地计算机运行。

```
npm install express
```

​		运行如下命令会启动一个本地Web服务器，可以通过计算机打开http://localhost:8080/访问客户的网站

```
node http.js
```



### 1.2.3、模拟网络连接

​		打开Google Chrome浏览器，win：F12,mac：command + Alt + i

​		找到Network => 下拉菜单为No throttling =>  slow 3G





## 1.3、检查客户网站

​		创建瀑布图之前，chorme浏览器需要勾选Network下面的 Disable cache以确保重新加载页面衡量优化效果时不会进行缓存，开启左上角的按钮Record，network是slow 3G。

​		打开localhost:8080，加载页面，生成瀑布图

​		可以看到在All下有8个请求，总数据量有**536KB**，大约需要**6秒**才能全部加载完毕，这意味着移动网络上加载时间会更长。

​		这是一个响应式网站，因此我们要知道设备之间的加载时间是有区别的，通过被称为媒体查询的机制，可以匹配不同设备。

### *1.3.1、客户网站的加载时间不仅因网络连接质量不同，而且还因设备本身的特性而不同，

​		根据所访问的站点，显示密度较高的设备下载的数据可能比具有标准显示密度的设备多

|      设备类型      | 显示密度 | 页面大小 | 加载时间 |
| :----------------: | :------: | :------: | :------: |
| 移动端(手机和平板) |   标准   |  378KB   |  4.46s   |
| 移动端(手机和平板) |    高    |  526KB   |  6.01s   |
|       桌面端       |   标准   |  383KB   |  4.51s   |
|       桌面端       |    高    |  536KB   |  6.15s   |





## 1.4、优化客户网站

​		提高网站性能时，目标很简单：**减少传输的数据量**，即传输更少的字节意味着更快的加载速度。	

​		***减少请求数**只适合HTTP/1工作流

​		首先要缩小网站资源，包括CSS、JS、HTML、图像、服务器压缩文本资源。

### 1.4.1、缩小资源

​		基于文本的资源中去除所有空白和非必要字符的过程

​		需要安装如下npm包

```
npm install -g minifier html-minify
```

#### 		1、缩小网站的CSS文件

```
minify -o styles.min.css styles.css	
```

```html
<link rel="stylesheet" type="text/css" href="css/styles.min.css">
```

​		如果遇到：minify : 无法加载文件 C:\Users\Ming\AppData\Roaming\npm\minify.ps1，因为在此系统上禁止运行脚本。打开PowerShell

```
set-ExecutionPolicy RemoteSigned
```

​		输入Y，回车

#### 		2、缩小网站的JS文件

```
minify -o jquery.min.js jquery.js
minify -o behaviors.min.js behaviors.js
```

```
<script src="js/jquery.min.js"></script>
<script src="js/behaviors.min.js"></script>
```

#### 		3、缩小网站的HTML

```
 htmlminify -o index.min.html index.html
```

​		意外后果：布局可能会发生变化，这是因为空白对CSS的display类型(inline和inline-block)的影响。还要注意所有按字面处理空白的属性或标签，例如CSS的white-space或者HTML标签<pre>

#### 		4、压缩后的变化

|  资源文件名  | 压缩前大小 | 压缩后大小 | 压缩率 |
| :----------: | :--------: | :--------: | :----: |
|  styles.css  |   18.2KB   |   15.6KB   |  14%   |
|  jquery.js   |  252.6KB   |   84.4KB   |  66%   |
| behaviors.js |   3.1KB    |   1.66KB   |  46%   |
|  index.html  |   4.57KB   |   3.71KB   |  19%   |
|     总计     |  278.47KB  |  105.37KB  |  62%   |



### 1.4.2、使用服务器压缩

​		服务器压缩的工作方式是用户的请求附带一个Accept-Encoding头部信息，向服务器告知浏览器可以使用的压缩格式。如果服务器能够按照Accept-Encoding头中的指示对内容进行编码，它将用一个描述压缩的方法和压缩的内容Accept-Encoding头部信息进行回复。

​		几乎所有的浏览器都支持一种名为gzip的压缩方法

```
npm install compression
```

#### 		1、配置node HTTP服务器

```js
var express = require("express")
// 把compression模块导入脚本
var compression = require("compression")
var app = express()
// 运行静态服务器
// 脚本将compression模块挂载到Web服务器
app.use(compression())
app.use(express.static(__dirname))
app.listen(8080)
```

​		重启服务后，查看瀑布图，并比较服务器压缩后文本资源大小

|    资源文件名    | 压缩前大小 | 压缩后大小 | 压缩率 |
| :--------------: | :--------: | :--------: | :----: |
|    index.html    |    4KB     |   1.8KB    |  55%   |
|  styles.min.css  |   15.9KB   |   3.1KB    | 80.5%  |
|  jquery.min.js   |   84.7KB   |    30KB    |  64%   |
| behaviors.min.js |   1.9KB    |   1.1KB    |  42%   |
|       总计       |  106.5KB   |    36KB    | 66.2%  |

#### 		2、配置Apache Web服务器

```jsp
// 检查是否已经加载了mod_deflate模块
// 匹配文件，这些文件匹配指定的内容类型
<IfModule mod_deflate.c>
	AddOutputFilterByType DEFLATE text/html text/css text/javascript
</IfModule>
```

### 1.4.3、压缩图片

​		要压缩这些图像，请将它们上传到TinyPNG网站：https://tinypng.com/





## 1.5、最终性能测试

| 设备类型      | 优化前页面大小 | 优化后页面大小 | 压缩率 | 优化前加载时间 | 优化后加载时间 |
| ------------- | -------------- | -------------- | :----: | :------------: | :------------: |
| 移动端(高DIP) | 526KB          | 118KB          | 77.5%  |       6s       |      1.8s      |
| 移动端        | 378KB          | 87.4KB         | 76.8%  |      4.4s      |      1.2s      |
| 桌面端(高DIP) | 536KB          | 121KB          | 77.4%  |       6s       |      1.9s      |
| 桌面端        | 383KB          | 89.5KB         | 76.6%  |      4.5s      |      1.2s      |

