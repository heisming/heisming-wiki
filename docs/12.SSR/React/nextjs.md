# nextjs

https://www.nextjs.cn/learn/basics/create-nextjs-app

Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（搜索引擎优化了）

具有同类框架中最佳的“开发人员体验”和许多内置功能

- 直观的、 [基于页面](https://www.nextjs.cn/docs/basic-features/pages) 的路由系统（并支持 [动态路由](https://www.nextjs.cn/docs/routing/dynamic-routes)）
- [预渲染](https://www.nextjs.cn/docs/basic-features/pages#pre-rendering)。支持在页面级的 [静态生成](https://www.nextjs.cn/docs/basic-features/pages#static-generation-recommended) (SSG) 和 [服务器端渲染](https://www.nextjs.cn/docs/basic-features/pages#server-side-rendering) (SSR)
- 自动代码拆分，提升页面加载速度
- 具有经过优化的预取功能的 [客户端路由](https://www.nextjs.cn/docs/routing/introduction#linking-between-pages)
- [内置 CSS](https://www.nextjs.cn/docs/basic-features/built-in-css-support) 和 [Sass 的支持](https://www.nextjs.cn/docs/basic-features/built-in-css-support#sass-support)，并支持任何 [CSS-in-JS](https://www.nextjs.cn/docs/basic-features/built-in-css-support#css-in-js) 库
- 开发环境支持 [快速刷新](https://www.nextjs.cn/docs/basic-features/fast-refresh)
- 利用 Serverless Functions 及 [API 路由](https://www.nextjs.cn/docs/api-routes/introduction) 构建 API 功能
- 完全可扩展



用一个框架，就要知道它的优点（或者是解决了我们什么问题）:

- 完善的React项目架构，搭建轻松。比如：webpack配置，服务器启动，路由配置，缓存能力，这些在它内部已经完善的为我们搭建完成了。
- 自带数据同步策略，解决服务端渲染最大难点。把服务端渲染好的数据，拿到客户端重用，这个在没有框架的时候，是非常复杂和困难的。有了Next.js，它为我们提供了非常好的解决方法，让我们轻松的就可以实现这些步骤。
- 丰富的插件帮开发人员增加各种功能。每个项目的需求都是不一样的，包罗万象。无所不有，它为我们提供了插件机制，让我们可以在使用的时候按需使用。你也可以自己写一个插件，让别人来使用。
- 灵活的配置，让开发变的更简单。它提供很多灵活的配置项，可以根据项目要求的不同快速灵活的进行配置。



## 创建它

### 手动创建

#### 初始化项目

```shell
D:
mkdir manualNext
npm init -y
```

#### 安装依赖包

```shell
yarn add react react-dom next
npm install --save react react-dom next
```

#### 增加快捷指令

`package.json`

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "next" ,
    "build" : " next build",
    "start" : "next start"
  },
```

#### 创建文件夹和文件

**必须在根目录下**创建一个`page`文件夹，这个文件夹是Next规定的，在这个文件夹下写入的文件，Next.js会自动创建对应的路由。有了文件夹以后，在文件下面创建一个`index.js`文件，这就是我们的首页了,然后用`React Hooks`的写法，写个最简单的`Hello World`。

```react
function Index(){
    return (
        <div>Hello Next.js</div>
    )
}
export default Index
```



#### 预览

```shell
npm run dev
yarn dev
```



### 脚手架

```shell
npm install -g create-next-app
```

目前可以支持三种方式的创建，分别是用`npx`,`yarn`和`create-next-app`命令来进行安装，安装的结构都是完全一样的，这里使用`npx`的形式。

注意（低版本的node没有npx命令）

```shell
npx create-next-app nextDemo
```



#### 脚手架文件目录

- components文件夹:这里是专门放置自己写的组件的，这里的组件不包括页面，指**公用**的或者有专门用途的组件。
- node_modules文件夹：Next项目的所有依赖包都在这里，一般我们不会修改和编辑这里的内容。
- pages文件夹：这里是放置页面的，这里边的内容会**自动生成路由**，并在服务器端渲染，渲染好后进行数据同步。
- static文件夹（9版本之前）： 这个是静态文件夹，比如项目需要的图片、图标和静态资源都可以放到这里。
- .gitignore文件： 这个主要是控制git提交和上传文件的，简称就是忽略提交。
- package.json文件：定义了项目所需要的文件和项目的配置信息（名称、版本和许可证），最主要的是使用`npm install` 就可以下载项目所需要的所有包



### 访问

浏览器中输入 => http://localhost:3000/



## component,pages in nextjs

https://www.nextjs.cn/learn/basics/navigate-between-pages/pages-in-nextjs

### pages

直接在根目录下的`pages`文件夹下，新建一个`heisming.js`页面。然后写入下面的代码：

```react
export default function Heisming(){
    return (<button>Heisming</button>)
}
```

只要写完上面的代码，`Next`框架就自动作好了路由，这个也算是Next的一个重要优点，给我们节省了大量的时间。

### deep pages

现在要作一个更深的页面，比如把有关的界面都放在这样的路径下`http://localhost:3000/deep/deepPages`,其实只要在`pages`文件夹下再建立一个新的文件夹`deep`，然后进入`deep`文件夹，新建一个`deepPages.js`文件，就可以实现了。

```react
export default () => <div>deepPages</div>
```



### Component

直接在`components`目录下建立一个文件`Cutton.js`,然后写入下面代码:

```react
export default ({children})=><button>{children}</button>
```

组件写完后需要先引入，比如我们在Index页面里进行引入：

```js
import Cutton from '../components/Cutton'
```

使用它

```react
<Cutton>按钮</Cutton>
```



## 路由基础跳转

### 标签式<Link>

```react
import Link from 'next/link'
<Link><a>content</a></Link>
```

`page`下写好两个页面

`routeA.js`

```react
import Link from 'next/link'
export default() => (
    <>
        <div>routeA page </div>
        <Link href="/"><a>返回首页</a></Link>
    </>
)
```

`routeB.js`

```react
import Link from 'next/link'
export default ()=>(
    <>
        <div>routeB page </div>
        <Link href="/"><a>返回首页</a></Link>
    </>
)
```

修改`index.js`中的代码

```react
import React from 'react'
import Link from 'next/link'

const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/routeA"><a>去routeA页面</a></Link></div>
    <div><Link href="/routeB"><a>去routeB页面</a></Link></div>
  </>
)
export default Home
```



<Link>兄弟标签并列

```react
<Link href="/routeA">
  <a>
    <span>去routeA页面</span>
    <span>qqxas</span>
  </a>
</Link>
```



### 编程式

```react
import Router from 'next/router'
<button onClick={()=>{Router.push('/routeA')}}>去routeA页面</button>
```

or

```react
import React from 'react'
import Router from 'next/router'

function Index() {
  function toA() {
	Router.push('/routeA')  
  }
  return (
    <div>
      <button onClick={toA}>toA</button>
    </div>
  )
}
```



### 路由传参

**只能通过**query（`?id=1`）来传递参数，而不能通过(`path:id`)的形式传递参数

#### 标签式

`index.js`传参

```react
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
function Index() {
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href="/routeA?name=苹果"><a>苹果</a></Link><br/>
        <Link href="/routeA?name=梨子"><a>梨子</a></Link>
      </div>
    </>
  )
}
export default Home
```

`routeA.js`接收参数

```react
import { withRouter} from 'next/router'
import Link from 'next/link'

function routeA({router}) {
    return (
        <>
            <div>{router.query.name},好吃 .</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}
export default withRouter(routeA)
```

`withRouter`是`Next.js`框架的高级组件，用来处理路由用的



#### 编程式

```react
import React from 'react'
import Router from 'next/router'

function Index() {
  function toA() {
	Router.push('/routeA?name=芒果')  
  }
  return (
    <div>
      <button onClick={toA}>toA</button>
    </div>
  )
}
```

优雅的写法

```react
 function gotoXiaojiejie(){
    Router.push({
      pathname:'/routeA',
      query:{
        name:'芒果'
      }
    })
 }
```

Link标签

```react
<Link href={{pathname:'/routeA',query:{name:'西瓜'}}}><a>西瓜</a></Link>
```

使用`withRouter`接收



## 路由钩子事件

```react
function Index() {
  router.events.on('routeChangeStart', (...arg) => { console.log('routeChangeStart => 路由变化开始', ...arg ) })
  router.events.on('hashChangeStart', (...arg) => { console.log('hashChangeStart => hash路由变化开始', ...arg ) })
  router.events.on('routeChangeComplete', (...arg) => { console.log('routeChangeComplete => 路由变化完成', ...arg ) })
  router.events.on('hashChangeComplete', (...arg) => { console.log('hashChangeComplete => hash路由变化完成', ...arg ) })
  router.events.on('beforeHistoryChange', (...arg) => { console.log('beforeHistoryChange => 浏览器history出发前', ...arg ) })
  router.events.on('routeChangeEorror', (...arg) => { console.log('routeChangeEorror => 路由跳转发生错误', ...arg ) })
}
```

利用钩子事件是可以作很多事情的，比如转换时的加载动画，关掉页面的一些资源计数器.....。



## getInitialProps

如果你使用的是 Next.js 9.3 或更高版本，建议你使用 `getStaticProps` 或 `getServerSideProps` 来替代 `getInitialProps`

这些新的获取数据的方法使你可以在静态生成（static generation）和服务器端渲染（server-side rendering）之间进行精细控制。 更多信息请参考 [页面（Pages）](https://www.nextjs.cn/docs/basic-features/pages) 和 [数据获取](https://www.nextjs.cn/docs/basic-features/data-fetching) 文档。



`getInitialProps`在页面中启用[服务器端呈现](https://www.nextjs.cn/docs/basic-features/pages#server-side-rendering)，并允许您进行**初始数据填充**，这意味着发送具有已从服务器填充的数据[的页面](https://www.nextjs.cn/docs/basic-features/pages)。这对于[SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)特别有用。

> `getInitialProps`将禁用[自动静态优化](https://www.nextjs.cn/docs/advanced-features/automatic-static-optimization)。



`getInitialProps`是[`一个异步`](https://vercel.com/blog/async-and-await)函数，可以作为[`静态方法`](https://javascript.info/static-properties-methods)添加到任何页面。请看以下示例：

```react
function Page({ data }) {
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { data: json.stargazers_count }
}

export default Page
```

```react
import React from 'react'

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { data: json.stargazers_count }
  }

  render() {
    return <div>Next stars: {this.props.data}</div>
  }
}

export default Page
```



### [上下文对象](https://www.nextjs.cn/docs/api-reference/data-fetching/getInitialProps#context-object)

`getInitialProps`接收一个名为 的参数，它是一个具有以下属性的对象：`context`

- `pathname`- 当前路线。这是页面的路径`/pages`
- `query`- 解析为对象的URL的查询字符串部分
- `asPath` - `String`浏览器中显示的实际路径（包括查询）
- `req` - [HTTP 请求对象](https://nodejs.org/api/http.html#http_class_http_incomingmessage)（仅限服务器）
- `res` - [HTTP 响应对象](https://nodejs.org/api/http.html#http_class_http_serverresponse)（仅限服务器）
- `err`- 如果在渲染过程中遇到任何错误，则为错误对象



### 警告

- `getInitialProps`**不能**在子组件中使用，只能在每个页面的默认导出中使用
- 如果你在内部使用仅服务器端模块，请确保[正确导入它们](https://arunoda.me/blog/ssr-and-server-only-modules)，否则会降低你的应用速度`getInitialProps`



### TypeScript

如果您使用的是 TypeScript，则可以将该类型用于函数组件：`NextPage`

```react
import { NextPage } from 'next'

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Page
```

对于class, 可以使用：`React.Component``NextPageContext`

```react
import React from 'react'
import { NextPageContext } from 'next'

interface Props {
  userAgent?: string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const { userAgent } = this.props
    return <main>Your user agent: {userAgent}</main>
  }
}
```



## Lazy Loading

懒加载模块

这里使用一个在开发中常用的模块`Moment.js`，它是一个JavaScript日期处理类库，使用前需要先进行安装，这里使用`yarn`来进行安装。

```shell
npm install --save moment
yarn add moment
```

然后在`pages`文件夹下，新建立一个`time.js`文件，并使用刚才的`moment`库来格式化时间，代码如下:

```react
import React, {useState} from 'react'
import moment from 'moment'

function Time(){

    const [nowTime,setTime] = useState(Date.now())

    const changeTime=()=>{
        setTime(moment(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
```

这个看起来很简单和清晰的案例，缺存在着一个潜在的风险，就是如何有半数以上页面使用了这个`momnet`的库，那它就会以公共库的形式进行打包发布，**就算项目第一个页面不使用`moment`也会进行加载**，这就是资源浪费，对于我这样有代码洁癖的良好程序员是绝对不允许的。下面我们就通过`Lazy Loading`来进行改造代码。

```react
import React, {useState} from 'react'
//删除import moment
function Time(){

    const [nowTime,setTime] = useState(Date.now())

    const changeTime= async ()=>{ //把方法变成异步模式
        const moment = await import('moment') //等待moment加载完成
        setTime(moment.default(Date.now()).format()) //注意使用defalut
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
```

这时候就就是懒加载了，可以在浏览器中按`F12`，看一下`Network`标签，当我们点击按钮时，才会加载`1.js`,它就是`momnet.js`的内容。



### 自定义

懒加载组件也是非常容易的，我们先来写一个最简单的组件，在`components`文件夹下建立一个`one.js`文件，然后编写如下代码：

```react
export default ()=><div>Lazy Loading Component</div>
```

有了自定义组件后，先要在懒加载这个组件的文件中引入`dynamic`,我们这个就在上边新建的`time.js`文件中编写了。

```js
import dynamic from 'next/dynamic'
```

引入后就可以懒加载自定义模块了，代码如下：

```js
import React, {useState} from 'react'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))

function Time(){

    const [nowTime,setTime] = useState(Date.now())

    const changeTime= async ()=>{
        const moment = await import('moment')

        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <One/>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
```

写完代码后，可以看到自定义组件是懒加载的，只有在`jsx`里用到`<One/>`时，才会被加载进来，如果不使用就不会被加载。

当我们作的应用存在首页打开过慢和某个页面加载过慢时，就可以采用`Lazy Loading`的形式，用懒加载解决这些问题。





## SEO

既然用了`Next.js`框架，你就是希望服务端渲染，进行SEO操作。那为了更好的进行SEO优化，可以自己定制`<Head>`标签，定义`<Head>`一般有两种方式

### 在各页面上

先在`/pages`文件夹下面建立一个`header.js`文件，然后写一个最简单的`Hooks`页面，代码如下:

```react
function Header(){ 
    return (<div>JSPang.com</div>)
}
export default Header
```

写完后到浏览器中预览一下，可以发现title部分并没有任何内容，显示的是`localhost:3000/header`,接下来就自定义下`<Head>`。自定义需要先进行引入`next/head`。

```js
import Head from 'next/head'
```

引入后你就可以写一些列的头部标签了，全部代码如下:

```js
import Head from 'next/head'
function Header(){ 
    return (
        <>
            <Head>
                <title>技术胖是最胖的！</title>
                <meta charSet='utf-8' />
            </Head>
            <div>JSPang.com</div>

        </> 
    )
}
export default Header
```

这时候再打开浏览器预览，你发现已经有了`title`。



### 全局的

这种方法相当于自定义了一个组件，然后把`<Head>`在组件里定义好，以后每个页面都使用这个组件,其实这种方法用处不大，也不灵活。因为`Next.js`已经把`<Head>`封装好了，本身就是一个组件，我们再次封装的意义不大。

比如在`components`文件夹下面新建立一个`myheader.js`,然后写入下面的代码:

```js
import Head from 'next/head'

const MyHeader = ()=>{
    return (
        <>
            <Head>
                <title> jspang.com </title>   
            </Head>
        </>
    )
}

export default MyHeader
```

这时候把刚才编写的`header.js`页面改写一下，引入自定义的`myheader`，在页面里进行使用，最后在浏览器中预览，也是可以得到`title`的。

```js
import Myheader from '../components/myheader'
function Header(){ 
    return (
        <>
            <Myheader />
            <div>JSPang.com</div>

        </> 
    )
}
export default Header
```



### Next.js 如何生成 robots.txt 和 sitemap.xml

https://imlc.me/generate-robots-txt-and-sitemap-xml-in-next-js-zh

> 为了优化 SEO，生成 robots.txt 和 sitemap.xml 是必不可少的功能。 Next.js 自身并不提供生成 robots.txt 和 sitemap.xml 的特性，所以需要自己实现。



#### sitemap.xml.js

在 `pages/` 目录下创建 sitemap.xml.js。当浏览器访问 `http://<your-domain>/sitemap.xml` 路径时， Next.js 会调用 sitemap.xml.js 处理请求并响应。 在下面的例子中，我请求后台 API 获取 sitemap 数据，并返回给浏览器。

```React
import React, { Component } from "react";
import fetch from 'isomorphic-unfetch';

export default class SiteMap extends Component {
    static async getInitialProps({req, res}) {
        if(res) {
            const response = await fetch(`http://${req.headers['host']}/api/sitemap`);
            const text = await response.text();
            res.setHeader("Content-Type", "text/xml");
            res.write(text);
            res.end();
        }

    }
}
```



#### robots.txt

同样地，在 `pages/` 目录下创建 `robots.txt` 文件。

```React
import React, { Component } from "react";

export default class Robots extends Component {
    static getInitialProps({ res }) {
        res.setHeader("Content-Type", "text/plain");
        res.write(`User-agent: *
Disallow:
Sitemap: https://www.imlc.me/sitemap.xml`);
        res.end();
    }
}
```



#### Static Export

如果你是以生成静态文件的方式部署你的网站，那么事情就相当简单了。 因为生成的静态文件都在 `out/` 目录下，你只需要写个简单的脚本生成 robots.txt 和 sitemap.xml，并置于 `out/` 目录下。 具体方法我想不必多言。









## 编程中遇到的问题

打开浏览器后Module not found: Can't resolve 'fs'

```js
import babel from 'next/babel' // 浏览器无法识别此包
```

如果我们构建的`Next.j`s应用程序使用服务器端存在的`Node.js`模块（如文件系统（FileSystem）模块），我们可能会在构建时看到以下错误，因为在客户端（浏览器）上找不到该模块：`fs`

解决方案

`next.config.js`

如果使用**webpack5**

```JS
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }
        return config;
    }
}
```

如果使用**webpack4**

```JS
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.node = {
                fs: 'empty'
            }
        }

        return config;
    }
}
```

https://maikelveen.com/blog/how-to-solve-module-not-found-cant-resolve-fs-in-nextjs

https://jspang.com/detailed?id=51#toc233