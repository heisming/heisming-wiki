# PC端的慕云游商场如何使用webpack做项目拆分？

## 项目开发步骤：

### 1、创建项目目录，放入准备好的文件

![image-20210809133426968](D:\大前端学习\MarkDown\webpack\image-20210809133426968.png)

#### 					1.1、src为主文件目录，包含api（各种api）、assets（各种资源目录：fonts、images、styles等）、components（项目的公共组件目录：backtotop、loading等）、pages（各个项目页面的拆分：主页、登录页面、注册页面等）、utils（存放各种工具函数、类等）等等目录。

## 2、搭建开发环境

### 	2.1、去官方网站https://nodejs.org/zh-cn/下载node.js，并安装长期支持版

#### 				2.1.1、检验是否安装成功：打开命令行工具执行node -v 或者 npm -v

### 	2.v2、初始化项目文件package.json

#### 				2.2.1、进入到项目src目录的上级目录使用npm init 命令开始初始化参数

![image-20210809144855683](D:\大前端学习\MarkDown\webpack\image-20210809144855683.png)



```json
注：json文件不能注释
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" //删除
    //修改为,编译打包为文件的命令: "webpack":"webpack"
    //修改为，开发者模式命令，在内存中: "start":"webpack-dev-server --open chrome"
  },
  "author": "",
  "license": "ISC"
}
```



#### 2.2.2、接下来安装需要的功能依赖包

##### 命令为：npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1 html-webpack-plugin@4.3.0 css-loader@4.2.1 style-loader@1.2.1 file-loader@6.0.0 url-loader@4.1.0 webpack-dev-server@3.11.0 art-template-loader@1.4.3 

可选（art-template@4.13.2 swiper@6.1.1 html-withimg-loader@0.1.16）

各依赖包功能解释如下：

**webpack-cli@3.3.12 webpack@4.44.1** => *****核心依赖包

**html-webpack-plugin@4.3.0**  => *****plugins插件，被用于帮助 webpack 处理各种模块，而插件则可以用于执行范围更广的任务

·用于处理多入口的html文件，生成对应多个出口文件

```js
//插件
plugins:[
//单入口
// new HtmlWebpackPlugin({
//     template:'./3.html'
// })
//多入口
    new HtmlWebpackPlugin({
        template:'./index.html',
        filename:'index.html',
        //独立连接单独的文件
        chunks:['index'],
        minify: {
        // 删除 index.html 中的注释
        removeComments: true,
        // 删除 index.html 中的空格
        collapseWhitespace: true,
        // 删除各种 html 标签属性值的双引号
        removeAttributeQuotes: true
    }
    }),
    new HtmlWebpackPlugin({
        template:'./search.html',
        filename:'search.html',
        chunks:['search']
    })
]
};
```

**css-loader@4.2.1**  => *****帮助识别CSS文件（只识别只读无法使用）

**style-loader@1.2.1**  => *****将css文件使用<style></style>标签插入<head>中

**mini-css-extract-plugin@0.9.0**  => 将css文件使用link：css文件方式插入<head>中

```js
  //loader模块
        module: {
            rules: [
            {   
                //正则匹配css文件
                test: /\.css$/,
                // loader: 'css-loader' 识别了css文件，但是无法处理css文件
                
                // 处理css文件方式的两种use:[] or user:{}
                
                // 1、<style><style/>
                // use: ['style-loader', 'css-loader']
                
                // 2、<link href="css/main.css" rel="stylesheet">
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            }
            ]
        }
```

**file-loader@6.0.0**  => *****帮助识别图片文件，可以处理js、css中的图片，仅copy

**html-withimg-loader@0.1.16**  => 处理 HTML 中的图片 

**url-loader@4.1.0**  =>*****（基于file-lodaer实现，依赖file-lodaer包）处理图片较小图片时可以进行base64编码减少http请求，增加网站性能

```js
     {
       test: /\.(jpg|png|gif)$/,
       use: {
       //将file-loader改为url-loader即可
       loader: 'url-loader',
       options: {
           name: 'img/[name].[ext]',
           //
           esModule: false,
           //bit字节，限制图片大小，小于3000的基于Base64转换，大于即file-loader原样copy
           limit: 3000
       			}
  			}
      }
```

**webpack-dev-server@3.11.0** => *****搭建开发环境（实时修改实时改变）

package.js

```json
"scripts": {
  "webpack": "webpack",
  "dev": "webpack-dev-server --open chrome"
},
```

**art-template-loader@1.4.3** => *****帮助识别art文件

**art-template@4.13.2** =>  *****模板引擎 

```art-template
 //标准语法
{{include './header.art'}}
{{include './header.art' data}}
// 原始语法（带参数，推荐）
<% include('./header.art') %>
<% include('./header.art', data) %>
```

**swiper@6.1.1** => 轮播图插件 https://swiper.com.cn/



#### 2.2.3 安装依赖包完成后，完整的项目package.json文件

```json
{
  "name": "pcweb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "webpack": "webpack",
    "start": "webpack-dev-server --open chrome"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "art-template-loader": "^1.4.3",
    "css-loader": "^4.2.1",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^4.3.0",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "art-template": "^4.13.2"
  }
}

```

#### 2.2.4、对应依赖包配置webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    // 开发环境
    mode: 'development',
    // 生产环境
    // mode: "productiong",  
    // Webpack 入口文件
    entry: {
        index: './src/pages/index/index.js'
    },
    // Webpack 输出路径
    output: {
        // 输出的目录
        path: resolve('dist'),
        // 输出的文件名
        filename: 'js/[name].js'
    },
    // source-map，调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages')
        }
    },
    // 不同类型模块的处理规则
    module: {
        rules: [
            // 匹配.css结尾文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 模板文件
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    // 小于 10K 的图片转成 base64 编码的 dataURL 字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'images/[name].[ext]',
                    // 防止图片路径失效
                    // 问题： 因为 url-loader 默认使用 ES6 模块化解析，而 html-loader 引入图片是 common.js 
                    // 解析时会出现问题：[object Module]
                    // 解决：关闭 url-loader 的 ES6 模块化，使用 common.js 解析
                    // 最新版webpack已经解决这个问题 可注释
                    esModule: false
                }
            },
            // 字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // html-webpack-plugin
        // 自动将依赖注入 html 模板，并输出最终的 html 文件到目标文件夹
        // 功能：默认会创建一个空的 HTMl 文件，自动引入打包输出的所有资源 ( JS/CSS )
        // 需求：需要有结构的 HTMl 文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // 复制 src 目录下的 index.html 文件，并自动引入打包输出的所有资源 ( JS/CSS )  => 注意：不需要自己手动引入
            template: './src/pages/index/index.art'
        })
    ]
};
```



## 3.开发公共组件和页面组件

#### 3.1、根据页面的内容进行合理的拆分页面组件和公共组件

![image-20210809155251734](D:\大前端学习\MarkDown\webpack\image-20210809155251734-16284955733131.png)

模板(.art)：引入index.art
样式(.css)：引入当前目录下的index.js
功能(.js)：引入index.js



## 4.在页面中引入组件

### 4.1、在模板（index.art）中引入：使用art-template语法

![image-20210809155616214](D:\大前端学习\MarkDown\webpack\image-20210809155616214-16284957771832.png)



### 4.2、在JS（index.js）中引入组件

![image-20210809155640388](D:\大前端学习\MarkDown\webpack\image-20210809155640388-16284958017843.png)



## 5.关于出错的问题

### 5.1、图片或文件路径有问题，webpack.config.js文件配置有问题，环境有问题，css中的图片文件有问题，启动命令是否有错误，

使用 html-webpack-plugin打包，art文件中不要有<link:css>和<script>,html- webpack-plugin创建一个空的HTML文件，找到template下的文件复制到这个空的 HTML文件中，再将打包好的其他资源全部引入这个空的HTML文件，如果原文件中已经存在了<script src="js/XXX.js"></script>这行引入代码，就可能产生冲突，报错。



注意：注释的中的内容也会被解析。

例如html原来中含有注释引入图片的情况需要将原代码删除或者直接保留一份在原来的images目录中即可

注意art-template语法是否正确，缺少/结尾啊，{}括号多了少了啊





注意在index.js已经用innerHTML引入的就不要再HTML文件中在此引入了

```html
<div class="hd">
    <h3>最世界·深度旅行</h3>
    <div class="slogan">摆脱千篇一律的旅行，探索属于自己的世界</div>
    <div class="tabbar">
        <ul>
            <li class="current"><a href="javascript:;">城市旅行</a></li>
            <li><a href="javascript:;">乡村旅行</a></li>
        </ul>
    </div>
</div>

<div class="bd">
    <!-- 记录错误：此处已经在JS中使用innerHTML，不要再用{{inlucde 'xxx'}}引入了，否则会报错
    ERROR in Template execution failed: TypeError: Cannot read property 'url' of undefined
    ERROR in   TypeError: Cannot read property 'url' of undefined
    -->
</div>
 
```





## 6.关于art-template的使用

服务器端数据：（从控制台输出查看是否是一个对象Object）

```JSON
{
	"code": 200,
	"data": {
		"one": {
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_01.png",
			"title": "[樱花季]天津直飞东京\/大阪\/名古屋\/冲绳\/札幌2-30天往返",
			"extra-info": "含机票酒店",
			"tag": "城市",
			"extra-tag": "CITY WALK"
		},
		"items": [{
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_02.png",
			"title": "北京\/上海\/南京\/杭州直飞巴厘岛5-7天往返含税机票（赠送旅游意外险）"
		}, {
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_03.png",
			"title": "北京\/天津直飞日本东京\/大阪\/东阪\/福冈\/名古屋冲绳\/北海道4-7天往返非常好"
		}, {
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_04.png",
			"title": "[樱花季] 北京\/天津直飞东京\/大阪\/名古屋\/福冈\/广岛\/北海道\/冲绳往返9日游"
		}, {
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_05.png",
			"title": "杭州\/上海\/宁波\/义乌直飞越南芽庄\/岘港4-6天往返含税机票（20KG行李免费）"
		}, {
			"url": "http:\/\/alimc.img.imooc.com\/class\/muyun\/mall-PC\/world\/zlx_06.png",
			"title": "[樱花季]天津直飞东京\/大阪\/名古屋\/冲绳\/札幌2-30天往返"
		}],
		"more": {
			"title": "深度旅行产品",
			"items": ["日游", "周末", "亲子", "长线"]
		}
	}
}


{
	"code": 200,
	"data": [{
		"key": "hot",
		"title": "热门出发地",
		"subTitles": ["北京", "上海", "广深", "西南", "东北"]
	}, {
		"key": "hk",
		"title": "港澳台",
		"subTitles": ["香港", "澳门", "台湾"]
	}, {
		"key": "japan",
		"title": "日本",
		"subTitles": ["东京", "大阪", "冲绳", "北海道", "福冈"]
	}, {
		"key": "asia",
		"title": "东南亚 西亚",
		"subTitles": ["泰国", "新加坡", "印尼", "马来西亚", "越南"]
	}, {
		"key": "eu",
		"title": "欧洲 美洲",
		"subTitles": ["英国", "法国", "美国", "加拿大"]
	}, {
		"key": "au",
		"title": "澳新 中东非",
		"subTitles": ["澳大利亚", "新西兰", "迪拜"]
	}]
}

```

应用端.html

```html
<ul>
    <li class="big grid">
        <a href="">
            <div class="pic">
                <img class="p-img" src="{{one.url}}" alt="">
            </div>
            <div class="tip">
                <div class="inn">
                    <p>{{one.title}}</p>
                    <p>{{one['extra-info']}}</p>
                </div>
            </div>
            <div class="mask"></div>
            <div class="y">
                <div class="c">{{one.tag}}</div>
                <div class="e">{{one['extra-tag']}}</div>
            </div>
        </a>
    </li>
    {{each items}}
    <li class="grid">
        <a href="">
            <div class="pic">
                <img class="p-img" src="{{$value.url}}" alt="">
            </div>
            <div class="tip">
                {{$value.title}}
            </div>
        </a>
    </li>
    {{/each}}
    <li class="more grid">
        <a href="">
            <div class="more_con">
                查看更多<br>
                {{more.title}}
            </div>
            <div class="arrow">
                <b class="iconfont">&#xe602;</b>
            </div>
            <div class="tj">
                <ul>
                    {{each more.items}}
                    <li>{{$value}}</li>
                    {{/each}}                 
                </ul>
            </div>
        </a>
    </li>
</ul>

<ul>
    {{each items}}
    <li data-n="{{$value.key}}">
        <div class="inn">
            <div class="t">{{$value.title}}</div>
            <div class="e">
                {{each $value.subTitles}}
                <em>{{$value}}</em>
                {{/each}}
                <!-- <em>澳门</em>
                <em>台湾</em>
                <em>国内其他</em> -->
            </div>
        </div>
    </li>
    {{/each}}
</ul>  
```

