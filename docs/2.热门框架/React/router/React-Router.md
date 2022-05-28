# React-Router-v5

> 官网地址
>
> https://v5.reactrouter.com/



结合三位前辈的翻译：

https://juejin.cn/post/6844904093694033927#heading-5

https://segmentfault.com/a/1190000020812860

https://zhuanlan.zhihu.com/p/351840750



## 安装

```sh
npx create-react-app react-router-demo

npm i --save react-router-dom@5.2.0
```



## 指南

### [快速入门](https://v5.reactrouter.com/web/guides/quick-start)

#### 基本使用

在`src`目录下创建一个文件夹`reoute`，并在此文件夹中新建一个文件`router.js`，代码如下

```react
import React from 'react'
// 采用H5 history路由模式
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function Main() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      {/* <Switch>通过查找所有的子<Route>并渲染与当前URL匹配的第一个<Route>的内容 */}
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
```

```react
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './route/router'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);
```



#### 嵌套路由

将`router.js`代码修改为如下代码

```react
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() { return <h2>Home</h2>;}

function About() {return <h2>About</h2>;}

function Topics() {
  let match = useRouteMatch()
  console.log(match); // {path: '/topics', url: '/topics', isExact: true, params: {…}}
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>   
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>props-v-state</Link>   
        </li>
      </ul>    
      {/* 
          The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected 
       */}   
       {/*
          Topics页面有自己的<Switch>，其中包含更多的路线，建立在/topics路径之上
          您可以将第二个<Route>视为所有主题的“索引”页面，或者当未选择任何主题时显示的页面
       */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested ID: {topicId}</h3>
}
```





### [主要组件](https://v5.reactrouter.com/web/guides/primary-components)

React-Router中有三个主要的类别组件

- 路由，`<BrowserRouter>` `<HashRouter>`
- 路由匹配， `<Route>` `<Switch>`
- 路由导航，`<Link>` `<NavLink>` `<Redirect>`

我们也喜欢将导航组件称为"route changers"。

> 注意：在 Web 应用程序中使用的所有组件都应从 react-router-dom 导入

```js
import { BrowserRouter, Route, Link } from "react-router-dom";
```



#### 路由器

> Routers

每个 React Router 应用程序的核心都应该是一个路由器组件。对于 Web 项目，react-router-dom提供`<BrowserRouter>`和`<HashRouter>`路由器。两者之间的主要区别在于它们存储URL和与Web服务器通信的方式。

- `<BrowserRouter>`使用常规 URL 路径：http://example.com/your/page , 需要正确的配置服务器，您的Web 服务器需要在 React Router 管理的客户端的所有 URL 上提供相同的页面，`Create React App` 在开发中支持开箱即用，并附带有关如何配置生产服务器的[说明](https://create-react-app.dev/docs/deployment#serving-apps-with-client-side-routing)
- `<HashRouter>`将当前位置存储在[URL 的**`哈希`**部分中](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash)，看起来像URL，http://example.com/#/your/page，由于哈希永远不会发送到服务器，这意味着不需要特殊的服务器配置。

> 要使用路由器，只需确保它在元素层次结构的根部渲染即可。通常，您将顶级`<App>`元素包装在路由器中，如下所示：

```react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <h1>Hello React Router</h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```



#### 路由匹配器

> Route-matchers

有两个路由匹配组件`Switch` `Route`：当渲染Switch 组件时，它会搜索其它的Route子元素，以查找路径与当前URL匹配的元素。它会渲染它找到的第一个`Route`并忽略所有其他的路由。所以应该将更具体的`Route`放在不太具体的`Route`之前，

如果没有匹配项`<Route>`，`<Switch>`则不渲染任何内容(null)

```REACT
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        {/* 如果当前URL是/ about，则渲染此路由而其余的被忽略 */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        {/* 请注意这两个路由的顺序。更具体的path =“ / contact /：id”在path =“ / contact”之前，
        因此查看单个联系人时，这个路线将被渲染 */}
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.
            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        {/* 
            如果先前的路线都不提供任何东西，这条路线充当后备路线。
            重要提示：路径为'/'的路线将始终匹配URL，这就是为什么我们把它放在最后。
        */} 
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```



`route-matchers`匹配URL的**开头**而不是整个URL。因此，将**始终**与 URL 匹配。因此，我们通常将其放在最后。另一种可能的解决方案是使用 exact 将使Route匹配整条 URL 而不仅仅是开头。

```react
<Route path="/about"/>
<Route path="/"/>
// or
<Switch><Route exact path="/"/></Switch>
```

> 注意：尽管 React Router 确实支持 在 5.1 版之外渲染元素，但我们建议您改用[`useRouteMatch`钩子](https://v5.reactrouter.com/packages/react-router/docs/api/hooks.md#useroutematch)。此外，我们不建议您呈现不带路径的，而是建议您使用[钩子](https://v5.reactrouter.com/packages/react-router/docs/api/hooks.md)来访问所需的任何变量。



#### 导航

> Navigation (or Route Changers)

React Router 提供了一个组件`<LinK>`来在应用程序中创建链接。无论在何处呈现 ，都会在 HTML 文档中呈现锚点。

```react
<Link to="/">Home</Link>
// <a href="/">Home</a>
```

这是一种特殊类型，当其prop与当前位置匹配时，可以给它设置一个`activeClassName`的样式。

```react
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>

// When the URL is /react, this renders:
// <a href="/react" className="hurray">React</a>

// When it's something else:
// <a href="/react">React</a>
```

任何时候要强制导航时，你都可以使用`<Redirect>`，当呈现`<Redirect>`时，将根据 prop 的 to 值进行导航。

```react
<Redirect to="/login" />
```





### [服务器渲染](https://v5.reactrouter.com/web/guides/server-rendering)

> Server Rendering

服务器上的渲染有点不同，因为它都是无状态的。基本思想是，我们将应用程序包装在无状态[`<StaticRouter>`](https://v5.reactrouter.com/web/api/StaticRouter)而不是[`BrowserRouter`](https://v5.reactrouter.com/web/api/BrowserRouter)中。我们从服务器传入请求的 URL，以便路由可以匹配，以及我们接下来将讨论的 `context prop`。

```react
// client
<BrowserRouter>
  <App/>
</BrowserRouter>

// server (not the complete story)
<StaticRouter
  location={req.url}
  context={context}
>
  <App/>
</StaticRouter>
```

当您在客户端上呈现[`<重定向>`](https://v5.reactrouter.com/web/api/Redirect)时，浏览器历史记录将更改状态，我们会看到新屏幕。在静态服务器环境中，我们无法更改应用状态。相反，我们使用  `context prop`来找出渲染的结果是什么。如果我们找到一个`context.url`，那么我们知道应用程序重定向了。这使我们能够从服务器发送正确的重定向。

```REACT
const context = {};
const markup = ReactDOMServer.renderToString(
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>
);

if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url);
} else {
  // we're good, send the response
}
```



#### 添加特定于应用的上下文信息

> adding-app-specific-context-information

路由器只添加 `context.url`。但您可能希望某些重定向为 301，而其他重定向为 302。或者，如果呈现了 UI 的某些特定分支，则可能要发送 404 响应，或者如果它们未获得授权，则发送 401 响应。`context prop`是你的，所以你可以改变它。以下是区分 301 和 302 重定向的方法

```react
function RedirectWithStatus({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) staticContext.status = status;
        return <Redirect from={from} to={to} />;
      }}
    />
  );
}

// somewhere in your app
function App() {
  return (
    <Switch>
      {/* some other routes */}
      <RedirectWithStatus status={301} from="/users" to="/profiles" />
      <RedirectWithStatus
        status={302}
        from="/courses"
        to="/dashboard"
      />
    </Switch>
  );
}

// on the server
const context = {};

const markup = ReactDOMServer.renderToString(
  <StaticRouter context={context}>
    <App />
  </StaticRouter>
);

if (context.url) {
  // can use the `context.status` that
  // we added in RedirectWithStatus
  redirect(context.status, context.url);
}
```



#### 404、401 或任何其他状态

我们可以做与上面相同的事情。创建一个组件，该组件添加一些上下文并将其呈现在应用中的任何位置，以获取不同的状态代码。

```react
function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}
```

现在你可以呈现一个`Status`在应用程序的任何地方,你想添加`staticContext`的代码。

```react
function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}
```



#### 把它们放在一起

这不是一个真正的应用程序，但它显示了您需要将其全部放在一起的所有一般部分。

```react
import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./App.js";

http
  .createServer((req, res) => {
    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `);
      res.end();
    }
  })
  .listen(3000);
```

然后客户端：

```react
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
```



#### 数据加载

有很多不同的方法可以解决这个问题，而且还没有明确的最佳实践，所以我们寻求用任何方法组合，而不是规定或倾向于其中一种。我们相信路由器可以适应您的应用限制。

主要约束是要在呈现之前加载数据。React Router 导出它在内部用于将位置与路由进行匹配的`matchPath`静态函数。您可以在服务器上使用此函数来帮助确定呈现之前的数据依赖项。

此方法的要点依赖于静态路由配置，该配置用于呈现路由并在呈现之前进行匹配以确定数据依赖关系。

```react
const routes = [
  {
    path: "/",
    component: Root,
    loadData: () => getSomeData()
  }
  // etc.
];
```

然后使用此配置在应用程序中呈现您的routes ：

```react
import { routes } from "./routes.js";

function App() {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
}
```

然后在服务器上，您将拥有如下内容：

```react
import { matchPath } from "react-router-dom";

// inside a request
const promises = [];
// use `some` to imitate `<Switch>` behavior of selecting only
// the first to match
routes.some(route => {
  // use `matchPath` here
  const match = matchPath(req.path, route);
  if (match) promises.push(route.loadData(match));
  return match;
});

Promise.all(promises).then(data => {
  // do something w/ the data so the client
  // can access it then render the app
});
```

最后，客户端将需要获取数据。同样，我们不是在为你的应用规定数据加载模式，但这些是你需要实现的接触点。

您可能对我们的[React 路由器配置](https://github.com/remix-run/react-router/tree/main/packages/react-router-config)包感兴趣，它有助于使用静态路由配置加载数据和服务器渲染。





### [代码拆分](https://v5.reactrouter.com/web/guides/code-splitting)

web app的一个重要功能是，我们不必让访问者下载整个应用程序，然后才能使用它。您可以将代码拆分视为增量下载app。为了实现这一点，我们将使用[webpack](https://webpack.js.org/)、 [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/)和[`loadable-components`](https://github.com/smooth-code/loadable-components)来实现代码分割。



webpack内置了对[动态导入的支持](https://github.com/tc39/proposal-dynamic-import)。但是，如果您使用的是[Babel](https://babeljs.io/)(例如，将 JSX 编译为 JavaScript），则需要使用[`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/)插件。这是一个仅使用语法的插件，这意味着 Babel 不会执行任何其他转换。该插件只是允许Babel解析动态导入，以便webpack可以将它们捆绑为代码拆分。您的.babelrc配置应该如下所示：

```json
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

loadable-components是用于通过动态导入加载组件的库。它自动处理各种边缘情况，并使代码拆分变得简单，下面是有关如何使用loadable-components的示例：

```react
import loadable from "@loadable/component";
import Loading from "./Loading.js";

const LoadableComponent = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
```

这一切就是这么简单！ 只需使用LoadableDashboard（或任何您命名的组件），当您在应用程序中使用它时，它将自动加载并渲染。fallback是一个占位符组件，用于在加载实际组件时显示。

完整文档可[在此处](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/)获取



#### 代码拆分和服务器端呈现

loadable-components包括[服务器端渲染指南](https://www.smooth-code.com/open-source/loadable-components/docs/server-side-rendering/)。





### [滚动还原](https://v5.reactrouter.com/web/guides/scroll-restoration)

在早期版本的 React Router 中，我们为滚动恢复提供了开箱即用的支持，从那以后，人们一直在要求它。希望本文档可以帮助您从滚动条和路由中获得所需的内容！浏览器已经开始以自己的`history.pushState`处理滚动恢复，其方式与通过普通浏览器导航进行滚动恢复的方式相同。它已经可以在Chrome浏览器中使用，而且非常棒。[这是 卷轴恢复规范](https://majido.github.io/scroll-restoration-proposal/history-based-api.html#web-idl)。



由于浏览器开始处理"默认情况"，并且应用程序具有不同的滚动需求（例如此网站！），因此我们不附带默认滚动管理。本指南将帮助您实现您拥有的任何滚动需求。



#### 滚动到顶部

在大多数情况下，您所需要做的只是“滚动到顶部”，因为您有一个较长的内容页面，该页面在导航到该页面时始终保持向下滚动。使用`<ScrollToTop>`组件可以轻松处理此问题，该组件将在每次导航时向上滚动窗口：

```react
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

如果您尚未使用 `React 16.8`，则可以使用React.Component子类执行相同的操作：

```react
import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
```

然后将其呈现在应用的顶部，但位于路由器下方

```react
function App() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
```

如果你有一个 tab 接口连接到路由器，那么在切换tab的时候，您可能不想滚动到顶部，你可以在特定的位置使用使用`<ScrollToTopOnMount>`

```react
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

// Render this somewhere using:
// <Route path="..." children={<LongContent />} />
function LongContent() {
  return (
    <div>
      <ScrollToTopOnMount />

      <h1>Here is my long content page</h1>
      <p>...</p>
    </div>
  );
}
```

同样，如果你还没有运行 React 16.8，你可以用React.Component子类做同样的事情：

```react
import React from "react";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

// Render this somewhere using:
// <Route path="..." children={<LongContent />} />
class LongContent extends React.Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />

        <h1>Here is my long content page</h1>
        <p>...</p>
      </div>
    );
  }
}
```



#### 通用解决方案

对于通用解决方案（以及哪些浏览器已原生支持），我们谈论的是两件事：

1. 向上滚动导航，这样就不会启动滚动到底部的新屏幕
2. 恢复窗口的滚动位置和在“后退”和“前进”点击上溢出的元素（不是 Link 点击）。

在这一点上，我们希望提供一个通用的API。这就是我们想要实现的：

```react
<Router>
  <ScrollRestoration>
    <div>
      <h1>App</h1>

      <RestoredScroll id="bunny">
        <div style={{ height: "200px", overflow: "auto" }}>
          I will overflow
        </div>
      </RestoredScroll>
    </div>
  </ScrollRestoration>
</Router>
```

首先，ScrollRestoration将在导航时向上滚动窗口。其次，它将使用location.key将窗口滚动位置和RestoredScroll组件的滚动位置保存到sessionStorage。然后，在ScrollRestoration或RestoredScroll组件 mount时，它们可以从sessionStorage查找其位置。

棘手的部分是当你不希望窗口滚动被管理的时候，如何定义一个 "退出" 的api，例如，如果您在页面内容中浮动了一些标签导航，则可能不想滚动到顶部。

当我们得知Chrome现在可以为我们管理滚动位置，并意识到不同的应用程序将具有不同的滚动需求时，我们有点迷失了我们需要提供某些东西的信念，尤其是当人们只想滚动到顶部时。

基于此，我们不再有足够的力气自己完成工作（就像您一样，我们的时间有限！）。但是，我们很乐意为有志于实施通用解决方案的任何人提供帮助。一个可靠的解决方案甚至可以存在于项目中。如果您开始使用它，请与我们联系:)





### [哲学](https://v5.reactrouter.com/web/guides/philosophy)

本指南的目的是说明使用React Router时要具有的思维模型。我们称之为“动态路由”，它与您可能更熟悉的“静态路由”完全不同



#### 静态路由❌

如果您使用过Rails，Express，Ember，Angular等，那么您已经使用了静态路由。在这些框架中，在进行任何呈现之前，将路由声明为应用初始化的一部分。React Router pre-v4也是静态的（大部分）。让我们看一下如何在 express 中配置路由：

```react
// Express Style routing:
app.get("/", handleIndex);
app.get("/invoices", handleInvoices);
app.get("/invoices/:id", handleInvoice);
app.get("/invoices/:id/edit", handleInvoiceEdit);

app.listen();
```

请注意在应用监听之前如何声明路由。我们使用的客户端路由器也是相似的。在Angular中，您先声明路线，然后在渲染之前将其导入顶级AppModule：

```react
// Angular Style routing:
const appRoutes: Routes = [
  {
    path: "crisis-center",
    component: CrisisListComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  },
  {
    path: "heroes",
    component: HeroListComponent,
    data: { title: "Heroes List" }
  },
  {
    path: "",
    redirectTo: "/heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppModule {}
```

Ember有一个常规的`route.js`文件，该版本会为您读取并导入到应用程序中。同样，这是在您的应用渲染之前发生的。

```react
// Ember Style Router:
Router.map(function() {
  this.route("about");
  this.route("contact");
  this.route("rentals", function() {
    this.route("show", { path: "/:rental_id" });
  });
});

export default Router;
```

尽管API不同，但它们都共享“静态路由”模型。 React Router也跟进了直到v4。 

**为了成功使用React Router，您需要忘记上面这些内容！**





#### [背景故事](https://v5.reactrouter.com/web/guides/philosophy/backstory)

> 略



#### 动态路由

当我们讨论动态路由时，我们是指在您的应用渲染时发生的路由，而不是在运行中的应用之外配置或约定的。

这意味着几乎所有东西都是 React Router 中的一个组件。以下是对 API 的 60 秒回顾，以了解其工作原理：

1. 首先，为您要定位的环境获取一个Router组件，并将其呈现在应用程序的顶部。

   ```react
   // react-native
   import { NativeRouter } from "react-router-native";
   
   // react-dom (what we'll use here)
   import { BrowserRouter } from "react-router-dom";
   
   ReactDOM.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>,
     el
   );
   ```

2. 接下来，获取链接组件以链接到新位置：

   ```react
   const App = () => (
     <div>
       <nav>
         <Link to="/dashboard">Dashboard</Link>
       </nav>
     </div>
   );
   ```

3. 最后，渲染一个`Route`以在用户访问`/dashboard`时显示一些UI。

   ```REACT
   const App = () => (
     <div>
       <nav>
         <Link to="/dashboard">Dashboard</Link>
       </nav>
       <div>
         <Route path="/dashboard" component={Dashboard} />
       </div>
     </div>
   );
   ```

   该 Route 将呈现`<Dashboard {... props} />`，其中 props 是路由器特定的东西，比如 { match, location, history }。如果用户不在`/dashboard上`，则Route将呈现null。



#### 嵌套路由

许多路由器具有“嵌套路由”的概念。如果您使用了v4之前的React Router版本，那么您也会知道它也是如此，当您从静态路由配置转移到动态渲染的路由时，如何“嵌套一个div”？

```react
const App = () => (
  <BrowserRouter>
    {/* here's a div */}
    <div>
      {/* here's a Route */}
      <Route path="/tacos" component={Tacos} />
    </div>
  </BrowserRouter>
);

// when the url matches `/tacos` this component renders
const Tacos = ({ match }) => (
  // here's a nested div
  <div>
    {/* here's a nested Route,
        match.url helps us make a relative path */}
    <Route path={match.url + "/carnitas"} component={Carnitas} />
  </div>
);
```

就像div一样，Route只是一个组件。因此，要嵌套一个Route或一个div，您只需像嵌套div一样就可以了。

再进一步学习更复杂的内容吧！



#### 响应式路由

考虑到一个用户导航至 /invoices，您的应用程序适应不同的屏幕尺寸，他们屏幕比较小的时候，你只能向他们展示单据清单和跳转单据的dashboard的链接，所以他们可以从这里在跳转到更深的地方。

```
Small Screen
url: /invoices

+----------------------+
|                      |
|      Dashboard       |
|                      |
+----------------------+
|                      |
|      Invoice 01      |
|                      |
+----------------------+
|                      |
|      Invoice 02      |
|                      |
+----------------------+
|                      |
|      Invoice 03      |
|                      |
+----------------------+
|                      |
|      Invoice 04      |
|                      |
+----------------------+
```

在更大的屏幕上，我们希望显示一个主从视图，该视图的左侧是导航，而dashbord 或 特定的单据则显示在右侧。

```
Large Screen
url: /invoices/dashboard

+----------------------+---------------------------+
|                      |                           |
|      Dashboard       |                           |
|                      |   Unpaid:             5   |
+----------------------+                           |
|                      |   Balance:   $53,543.00   |
|      Invoice 01      |                           |
|                      |   Past Due:           2   |
+----------------------+                           |
|                      |                           |
|      Invoice 02      |                           |
|                      |   +-------------------+   |
+----------------------+   |                   |   |
|                      |   |  +    +     +     |   |
|      Invoice 03      |   |  | +  |     |     |   |
|                      |   |  | |  |  +  |  +  |   |
+----------------------+   |  | |  |  |  |  |  |   |
|                      |   +--+-+--+--+--+--+--+   |
|      Invoice 04      |                           |
|                      |                           |
+----------------------+---------------------------+

```

现在暂停一分钟，思考一下 /invoices 路径如何适配两种屏幕大小，或者更大的屏幕呢，他还能适用吗？我们应该在右边放什么呢？

```
url: /invoices
+----------------------+---------------------------+
|                      |                           |
|      Dashboard       |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 01      |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 02      |             ???           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 03      |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 04      |                           |
|                      |                           |
+----------------------+---------------------------+

```

在大屏幕上，/invoices 不是有效的路径，但在小屏幕上是,为了使事情变得更有趣，请考虑使用大型手机的人。他们可能会纵向查看/invoices，然后将手机旋转至横向。突然，我们有足够的空间来显示主从界面，因此您应该立即进行**重定向**！

React Router先前版本的静态路由并没有真正解决这个问题的方法。但是，当路由是动态的时，您可以声明性地组合此功能。如果您开始将路由视为一种UI，而不是静态配置，那么您的直觉将引导您进入以下代码：

```react
const App = () => (
  <AppLayout>
    <Route path="/invoices" component={Invoices} />
  </AppLayout>
);

const Invoices = () => (
  <Layout>
    {/* always show the nav */}
    <InvoicesNav />

    <Media query={PRETTY_SMALL}>
      {screenIsSmall =>
        screenIsSmall ? (
          // small screen has no redirect
          <Switch>
            <Route
              exact
              path="/invoices/dashboard"
              component={Dashboard}
            />
            <Route path="/invoices/:id" component={Invoice} />
          </Switch>
        ) : (
          // large screen does!
          <Switch>
            <Route
              exact
              path="/invoices/dashboard"
              component={Dashboard}
            />
            <Route path="/invoices/:id" component={Invoice} />
            <Redirect from="/invoices" to="/invoices/dashboard" />
          </Switch>
        )
      }
    </Media>
  </Layout>
);
```

当用户将手机从纵向旋转到横向时，此代码将自动将其重定向到 `/invoices/dashboard`。 有效路径会根据用户手中移动设备的动态性质而变化。

这只是一个例子，我们总结以下建议：为了使您的直觉与React Router的直觉相符，请考虑组件而不是静态路由。考虑一下如何使用React的声明式可组合性解决问题，**因为几乎每个“ React Router问题”都可能是“ React问题”**





### [测试](https://v5.reactrouter.com/web/guides/testing)

React Router依靠React Context来工作。 这会影响您如何测试在你的组件里使用我们的组件。



#### Context

如果您尝试对渲染<Link>或<Route>的组件之一进行单元测试，等等。您会收到一些有关context的错误和警告。 尽管您可能会想自己亲自设置router context，我们建议您将单元测试包装在路由器组件之一中：具有history属性的路由或<StaticRouter>，<MemoryRouter>或<BrowserRouter>的基本路由器（如果window.history在测试环境中可作为全局变量使用）。建议使用

MemoryRouter或自定义history，以便能够在两次测试之间重置路由器。

```react
class Sidebar extends Component {
  // ...
  render() {
    return (
      <div>
        <button onClick={this.toggleExpand}>expand</button>
        <ul>
          {users.map(user => (
            <li>
              <Link to={user.path}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// broken
test("it expands when the button is clicked", () => {
  render(<Sidebar />);
  click(theButton);
  expect(theThingToBeOpen);
});

// fixed!
test("it expands when the button is clicked", () => {
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );
  click(theButton);
  expect(theThingToBeOpen);
});
```



#### 从指定route开始

<MemoryRouter>支持initialEntries和initialIndex props，因此您可以在特定位置启动应用程序（或应用程序的任何较小部分）。

```react
test("current user is active in sidebar", () => {
  render(
    <MemoryRouter initialEntries={["/users/2"]}>
      <Sidebar />
    </MemoryRouter>
  );
  expectUserToBeActive(2);
});
```



#### 导航

我们进行了很多测试，以检查routes在位置更改时是否有效，因此您可能不需要测试这些东西。 但是，如果您需要在应用程序中测试导航，则可以这样进行：

```react
// app.js (a component file)
import React from "react";
import { Route, Link } from "react-router-dom";

// our Subject, the App, but you can test any sub
// 我们的主题，即应用，但您可以测试任何子项
// section of your app too
// 您的应用程序部分
const App = () => (
  <div>
    <Route
      exact
      path="/"
      render={() => (
        <div>
          <h1>Welcome</h1>
        </div>
      )}
    />
    <Route
      path="/dashboard"
      render={() => (
        <div>
          <h1>Dashboard</h1>
          <Link to="/" id="click-me">
            Home
          </Link>
        </div>
      )}
    />
  </div>
);
```

```react
// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
// 您还可以在此处使用"@testing-library/react"或"enzyme/mount"之类的渲染器
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

// app.test.js
it("navigates home when you click the logo", () => {
  // in a real test a renderer like "@testing-library/react"
  // 在真实测试中，渲染器如"@testing-library/react"
  // would take care of setting up the DOM elements
  // 将负责设置DOM元素
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>,
    root
  );

  // Interact with page
  // 与页面互动  
  act(() => {
    // Find the link (perhaps using the text content)
    // 查找链接（可能使用文本内容）  
    const goHomeLink = document.querySelector('#click-me');
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Check correct page content showed up
  // 检查显示的页面内容是否正确
  expect(document.body.textContent).toBe('Welcome');
});
```



#### 检查测试中的位置

在测试中，您不必经常访问location或history对象，但是如果你这样做了(比如验证在url栏中设置了新的查询参数)，你可以在测试中添加一个更新变量的路由:

```react
// app.test.js
test("clicking filter links updates product query params", () => {
  let testHistory, testLocation;
  render(
    <MemoryRouter initialEntries={["/my/initial/route"]}>
      <App />
      <Route
        path="*"
        render={({ history, location }) => {
          testHistory = history;
          testLocation = location;
          return null;
        }}
      />
    </MemoryRouter>,
    node
  );

  act(() => {
    // example: click a <Link> to /products?id=1234
  });

  // assert about url
  expect(testLocation.pathname).toBe("/products");
  const searchParams = new URLSearchParams(testLocation.search);
  expect(searchParams.has("id")).toBe(true);
  expect(searchParams.get("id")).toEqual("1234");
});
```

**备选方案：**

1. 如果您的测试环境具有浏览器全局变量window.location和window.history（这是通过JSDOM在Jest中的默认设置，但您无法重置测试之间的历史记录），则也可以使用BrowserRouter。
2. 您可以将基本路由器与[history](https://github.com/remix-run/history)包中的history props一起使用，而不是将自定义路由传递给MemoryRouter：

```react
// app.test.js
import { createMemoryHistory } from "history";
import { Router } from "react-router";

test("redirects to login page", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App signedInUser={null} />
    </Router>,
    node
  );
  expect(history.location.pathname).toBe("/login");
});
```



#### React测试包

请参阅官方文档中的示例：[使用 React 测试库测试 React Router](https://testing-library.com/docs/example-react-router)





### [深度 Redux 集成](https://v5.reactrouter.com/web/guides/deep-redux-integration)

Redux是React生态系统的重要组成部分。 对于想要同时使用React Router和Redux的人，我们希望使其无缝集成。

1. 从store同步路由数据，并从store访问路由数据。
2. 可以通过dispatch action操作导航
3. 在Redux devtools中支持对路径更改进行时间行程调试。

所有这些都需要更深入的集成。



我们的建议是不要将routes完全保留在Redux store中。论证：

1. 路由数据已经成为大多数关心它的组件的支持。 无论是来自store还是router，您组件的代码都基本相同。
2. 在大多数情况下，您可以使用Link，NavLink和Redirect执行导航操作。有时您可能还需要以编程方式进行导航，有时您可能还需要以编程方式导航，在某个操作最初启动的异步任务之后。例如，您在用户提交登录表单时调度操作。然后，您的使用[thunk](https://github.com/reduxjs/redux-thunk)，[saga](https://redux-saga.js.org/)或其他异步处理程序会对凭据进行身份验证，如果成功，则需要以某种方式导航到新页面。此处的解决方案只是将history对象（提供给所有路由组件）包括在操作的payload，并且异步处理程序可以在适当的时候使用此对象进行导航。
3. Route更改对于时间行程调试不太重要。唯一明显的情况是调试router/store同步中的问题，如果根本不同步它们，则该问题将消失。

但是，如果您强烈希望将Route与store同步，则可能需要尝试[Connected React Router](https://github.com/supasate/connected-react-router),，这是React Router和Redux的第三方绑定。



### [静态路由](https://v5.reactrouter.com/web/guides/static-routes)

以前版本的 React Router 使用静态路由来配置应用程序的路由。这允许在渲染之前检查和匹配路由。由于 v4 迁移到动态组件而不是路由配置，因此以前的一些用例变得不那么明显和棘手。

我们正在开发一个软件包，与静态路由配置和 React Router 配合使用，以继续满足这些用例。它现在正在开发中，但我们希望您尝试一下并提供帮助。

[React Router Config](https://github.com/remix-run/react-router/tree/main/packages/react-router-config)







## 应用程序接口

### [Hooks](https://v5.reactrouter.com/web/api/Hooks)

React Router 附带了几个[hooks](https://reactjs.org/docs/hooks-intro.html)，可让您访问路由器的状态并从组件内部执行导航。

> 请注意：你需要使用 React >= 16.8 才能使用这些钩子！



#### useHistory

通过useHistory，您可以访问可用于导航的[`历史记录`](https://v5.reactrouter.com/web/api/history)实例。

```react
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```



#### useLocation

useLocation hook 返回代表当前URL的 location 对象。你可以把它当成一个 useState hook，只要URL更改，它就会返回一个新位置。

如果你希望每次加载新页面的时候都使用 web 分析工具除法新的“页面浏览”事件，这个 hook 将会非常有用。如以下示例所示：

```react
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
```



#### useParams

useParams返回URL参数的键/值对的对象。使用它来访问当前`<Route>`的match.params。

```react
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```



#### useRouteMatch

useRouteMatch hook 尝试以与<Route>相同的方式匹配当前URL。它主要用于在无需实际渲染<Route>的情况下访问匹配数据。

不用useRouteMatch：

```react
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />;
      }}
    />
  );
}
```

使用useRouteMatch：

```react
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Do whatever you want with the match...
  return <div />;
}
```





### [<BrowserRouter>](https://v5.reactrouter.com/web/api/BrowserRouter)

 使用 HTML5 history API(pushState，replaceState和popstate事件) 使 UI 与 URL 保持同步的 Router。

```react
<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</BrowserRouter>
```



#### basename:string

所有路径的基本URL。如果您的应用是通过服务器上的子目录提供的，则需要将其设置为子目录。格式正确的基本名称应以斜杠开头，但不能以斜杠结尾。

```react
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
    ...
</BrowserRouter>
```



#### getUserConfirmation: function

跳转路由前的确认函数。默认为使用[`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm).

```react
<BrowserRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```



#### forceRefresh: boolean

如果设为true,在路由跳转时将整页刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能

```react
<BrowserRouter forceRefresh={true} />
```



#### keyLength: number

`location.key`的长度，默认为6。

```react
<BrowserRouter keyLength={12} />
```



#### children: node

要呈现的子元素。

> 注意：在 React < 16的版本中，你必须使用[单个子元素](https://facebook.github.io/react/docs/react-api.html#reactchildrenonly) ，因为render方法不能返回多个元素，你可以将他们包裹在额外的div元素或<React.Fragment>中。





### [<HashRouter>](https://v5.reactrouter.com/web/api/HashRouter)

`<Router>`使用URL的哈希部分（即window.location.hash）使UI与URL保持同步

>重要提示：hash history 不支持location.key 或者 location.state。在之前的版本中，我们试图纠正这种行为，但存在一些无法解决的极端情况。任何需要此行为的代码或插件都将无法使用。由于**此技术仅用于支持旧版浏览器**，因此建议您将服务器配置为与`<BrowserHistory>`一起使用。

```react
<HashRouter
  basename={optionalString}
  getUserConfirmation={optionalFunc}
  hashType={optionalString}
>
  <App />
</HashRouter>
```



#### basename:string

所有路径的基本URL。basename 应以斜杠开头，但不能以斜杠结尾。

```react
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```



#### getUserConfirmation: func

跳转路由前的确认函数。默认为使用[`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm).

```react
<HashRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```



#### hashType: string

用于`window.location.hash`的编码类型。可用值为:

- "slash"- # 后有一个斜线，例如：` #/ `或 `#/sunshine/lollipops`
- "noslash"-# 后面没有斜线，例如：`# `或 `#sunshine/lollipops`
- "hashbang"-Google 风格的 ajax crawlable，例如 `#!/` 和 `#!/sunshine/lollipops`

默认为 "slash"



#### children:node

要渲染的[单个子元素](https://facebook.github.io/react/docs/react-api.html#reactchildrenonly)。

```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link, withRouter } from 'react-router-dom';

function INav() {
    let homeRef;
    let anchorRef = React.createRef();
    console.log('before - anchorRef=>', anchorRef);
    useEffect(props => {
        console.log('after - anchorRef=>', anchorRef);
        console.log('after- homeRef=>', homeRef);
    });
    return (
        <ul className={'nav'}>
            <li>
                <Link to={'/home'} replace innerRef={homeRef}>Home</Link>
            </li>
            <li>
                <Link to={'/rule'} innerRef={anchorRef}>Rule</Link>
            </li>
            <li>
                <Link to={'/form'} innerRef={node => {
                    // "node"指的是被挂载的DOM元素
                    // 组件被卸载时为null
                    console.log('node=>', node);
                }}>Form</Link>
            </li>
            <li>
                <Link to={location => `/table?sort=name`}>Table</Link>
            </li>
            <li>
            <Link to={location => {
                console.log('Charts - location=>', location);
                return { ...location, pathname: '/charts' }
            }}>Charts</Link>
            </li>
            <li>
                <Link to={{
                    pathname: '/example',
                    search: '?sort=name',
                    hash: '#the-hash',
                    state: {
                        fromDashboard: true,
                        name: 'Jameswain'
                    }
                }}>Example</Link>
            </li>
        </ul>
    )
}

function Home(props) {
    console.log('Home:', props);
    return <h1>
        Home
    </h1>
}

function Form(props) {
    console.log('Form:', props);
    return <h1>Form</h1>;
}

function Table(props) {
    console.log('Table:', props);
    return <h1>Table</h1>
}

function Rule(props) {
    console.log('rule:', props);
    return <h1>
        Rule
    </h1>
}

const Example = withRouter((props) => {
    console.log('Example:', props);
    return <h1>Example</h1>
});

const Charts = withRouter((props) => {
    console.log('Charts:', props);
    return <h1>Charts</h1>
});


function App() {
    return (
        <HashRouter hashType={'noslash'} basename={'/calendar'}>
            <div className={'app'}>
                <INav/>
                <Switch>
                    <Route path={'/home'} exact>
                        <Home />
                    </Route>
                    <Route path={'/rule'} children={props => <Rule {...props} />} />
                    <Route path={'/form'} render={props => <Form {...props} />} />
                    <Route path={'/table'} component={props => <Table {...props} />} />
                    <Route path={'/charts'} children={<Charts />} />
                    <Route path={'/example'}>
                        <Example />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
```





### [<Link>](https://v5.reactrouter.com/web/api/Link)

提供围绕应用程序的声明式、可访问的导航，其实渲染出来的就是一个标签，对标签的封装。

```react
<Link to="/about">About</Link>
```



#### to: string

链接地址的字符串表示形式，是通过将location的pathname，search和hash属性连接起来而创建的。

```jsx
<Link to="/courses?sort=name" />
```



#### to: object

可以具有以下任何属性的对象：

- pathname: 要跳转的路径
- search: URL中query参数的字符串形式
- hash:URL中的hash部分，例如：#a-hash.
- state:存储到 location 中的额外状态数据

```jsx
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```



#### to: function

以当前位置为参数传递给该函数，该函数以字符串或对象的形式返回目标路径。

```jsx
<Link to={location => ({ ...location, pathname: "/courses" })} />
<Link to={location => `${location.pathname}?sort=name`} />
```



#### replace: boolean

如果为true，则将单击链接替换为history记录堆栈中的当前条目，而不是添加一条新条目。

这样就没有回退功能了，因为它是把当前URL地址替换掉，不会产生历史记录。

```jsx
<Link to="/courses" replace />
```



#### innerRef: function

> 提示：从React Router 5.1开始，如果您使用的是React 16，就不需要这个参数了。因为我们已经[将 ref 转发](https://reactjs.org/docs/forwarding-refs.html)给了底层的 a 标签，所以您可以直接使用 ref。

使用[`React.createRef`](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs)获取组件的底层引用

```jsx
<Link
  to="/"
  innerRef={node => {
    // `node` refers to the mounted DOM element
    // or null when unmounted
  }}
/>
```



#### innerRef: RefObject

> 同 innerRef: function

```jsx
let anchorRef = React.createRef()

<Link to="/" innerRef={anchorRef} />
```



#### React.Component

如果您想使用自己的导航组件，可以通过将其传递到`component prop`来执行此操作。

```jsx
const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
  return (
    <a ref={ref} {...props} onClick={handleClick}>💅 {props.children}</a>
  )
})

<Link to="/" component={FancyLink} />
```



#### other

你也可以传递一些其他的a标签的属性props，例如： title, id, className等





### [<NavLink>](https://v5.reactrouter.com/web/api/NavLink)

NavLink 是 Link 标签的一个特殊版本，当匹配到当前URL时，可以为渲染的元素添加特定的样式属性。

```jsx
<NavLink to="/about">About</NavLink>
```



#### className: string | function

`className`可以是字符串，也可以是**返回字符串的函数。**如果className使用函数，链接的active state作为参数传递。这是有用的,如果你想专门应用名称一个不活动的链接。

```jsx
<NavLink
  to="/faq"
  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
>
  FAQs
</NavLink>
```

在 React Router **v6** 中，activeClassName将被删除，您应该使用className函数将className应用于活动或非活动NavLink组件。



#### activeClassName: string

当元素处于选中状态时提供的类，默认状态是active。将与 className 合并。

```jsx
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```



#### style: object | function

`style`可以是对象，也可以是返回React.CSSProperties样式对象的函数。如果使用style函数，则链接的状态将作为active参数传递。

```jsx
<NavLink
  to="/faq"
  style={isActive => ({
    color: isActive ? "green" : "blue"
  })}
>
  FAQs
</NavLink>
```

在 React Router **v6** 中，activeStyle将被删除，您应该使用style函数将style应用于活动或非活动NavLink组件。



#### activeStyle: object

元素处于active状态时应用于该元素的样式。

```jsx
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
```



#### exact: boolean

如果为true，则仅在location完全匹配时才应用active的class或style。

```jsx
<NavLink exact to="/profile">
  Profile
</NavLink>
```



#### strict: boolean

如果为true，则在确定位置是否与当前URL匹配时，将会考虑位置路径名上的斜杠，它需要和<Route>配合使用。有关更多信息，请参见 [`<Route strict>`](https://v5.reactrouter.com/core/api/Route/strict-bool) 文档

```jsx
<NavLink strict to="/events/">
  Events
</NavLink>
```



#### isActive: function

添加额外的逻辑来判断当前链接是否处于选中状态。如果需要更多的验证来判断链接的路径名是否与当前URL匹配，可使用这种方法。

```jsx
<NavLink
  to="/events/123"
  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}
>
  Event 123
</NavLink>
```



#### location: object

[`isActive`](https://v5.reactrouter.com/web/api/NavLink/isactive-func)会比较当前history location（通常是当前浏览器 URL）。要与其他location进行比较，可以传递[`一个位置`](https://v5.reactrouter.com/core/api/location)。



#### aria-current: string

aria-current 属性的值应用在active 的 link 上。有效值为：

- "page" - 用来表示一组分页链接中的链接
- "step" - 用来表示步骤指示器中基于步骤过程的链接
- "location" - 用来表示突出展示流程图中的当前部分的图像
- "date" - 用来表示日历中的当前日期
- "time" - 用来表示时间表中的当前时间
- "true" - 用来表示当前 NavLink 是否处于激活状态（用例是防止单个页面上有多个 aria-current 标签）

默认为 page

基于[WAI-ARIA 1.1 规范](https://www.w3.org/TR/wai-aria-1.1/#aria-current)

```react
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

function Home() {
return <h1>Home</h1>
}

function About() {
return <h1>About</h1>
}

const Charts = () => <h1>Charts</h1>;
const Table = () => <h1>Table</h1>;
const FAQ = () => <h1>FAQ</h1>;
const Events = () => <h1>Events</h1>;

function App() {
return <div className={'app'}>
    <HashRouter hashType={'noslash'}>
        <ul>
            <li>
                <NavLink to={'/home'} className={'home'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'} className={'about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/charts'} className={'charts'} activeClassName={'selected'}>Charts</NavLink>
            </li>
            <li>
                <NavLink to={'/table'} className={'table'} activeClassName={'selected'}>Table</NavLink>
            </li>
            <li>
                <NavLink to={'/faq'} activeStyle={{ fontWeight: 'bold', color: 'red' }}>FAQ</NavLink>
            </li>
            <li>
                <NavLink strict to="/events">Events</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path={'/home'} children={<Home/>} />
            <Route path={'/about'} children={<About/>} />
            <Route path={'/charts'} children={<Charts/>} />
            <Route path={'/table'} children={<Table/>} />
            <Route path={'/faq'} children={<FAQ />} />
            <Route path={'/events/'} strict children={<Events />} />
        </Switch>
    </HashRouter>
</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
```





### [<Prompt>](https://v5.reactrouter.com/web/api/Prompt)

用于在离开页面之前提示用户。当您的应用程序进入应防止用户离开的状态时（例如，表单已被半填满），使用`<Prompt>`

```JSX
<Prompt
  when={formIsHalfFilledOut}
  message="Are you sure you want to leave?"
/>
```



#### message: string

当用户尝试离开时提示用户的消息。

```jsx
<Prompt message="Are you sure you want to leave?" />
```



#### message: func

当用户准备跳转到下一个页面时调用，返回一个用于提示的字符串或者return true 允许直接跳转。

```jsx
<Prompt
  message={(location, action) => {
    if (action === 'POP') {
      console.log("Backing up...")
    }

    return location.pathname.startsWith("/app")
      ? true
      : `Are you sure you want to go to ${location.pathname}?`
  }}
/>
```



#### when: bool

您可以始终渲染它，而可以通过when={true}或when={false}来阻止或允许进行相应的导航，而不是通过条件控制是否渲染<Prompt>。

```jsx
<Prompt when={formIsHalfFilledOut} message="Are you sure?" />
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Prompt } from 'react-router-dom';

function Home() {
    return <h1>Home</h1>
}

function Table() {
    return <h1>Table</h1>;
}

function Charts() {
    return <h1>Charts</h1>
}

function About() {
    return <h1>About</h1>
}

function App() {
    return <BrowserRouter>
        <Prompt message={location => {
            if (location.pathname !== '/home') {
                return `您确定要前往${location.pathname}吗?`
            } else {
                return true;
            }
            return true;
        }} when={true} />
        <ul>
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/table'}>Table</Link>
            </li>
            <li>
                <Link to={'/charts'}>Charts</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
        <Switch>
            <Route path={'/home'} children={props => <Home {...props} />} />
            <Route path={'/table'} render={props => <Table {...props} />} />
            <Route path={'/charts'} children={props => <Charts {...props} />} />
            <Route path={'/about'} render={props => <About {...props} />} />
        </Switch>
    </BrowserRouter>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
```





### [<MemoryRouter>](https://v5.reactrouter.com/web/api/MemoryRouter)

将“ URL”的历史记录保留在内存中（不读取或写入地址栏）的`<Router>`。在测试和非浏览器环境（例如React Native）中很有用

```jsx
<MemoryRouter
  initialEntries={optionalArray}
  initialIndex={optionalNumber}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</MemoryRouter>
```



#### initialEntries: array

历史堆栈中的一系列位置信息。这些可能是带有 {pathname, search, hash, state} 的完整位置对象或简单的字符串 URL。

```jsx
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
>
  <App />
</MemoryRouter>
```



#### initialIndex: number

initialEntries 数组中的初始位置索引。



#### getUserConfirmation: func

用于确认导航的函数。当 `<MemoryRouter>` 直接与 `<Prompt>` 一起使用时，你必须使用此选项。



#### keyLength: number

location.key 的长度，默认为 6。

```jsx
<MemoryRouter keyLength={12} />
```



#### children: node

要呈现的子元素。

> 注意：在 React < 16的版本中，你必须使用[单个子元素](https://facebook.github.io/react/docs/react-api.html#reactchildrenonly) ，因为render方法不能返回多个元素，你可以将他们包裹在额外的div元素或<React.Fragment>中。





### [<Redirect>](https://v5.reactrouter.com/web/api/Redirect)

渲染<Redirect>将导航到新位置。新位置将覆盖history堆栈中的当前位置，就像服务器端重定向（HTTP码 3xx）一样。

```jsx
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
```



#### to:string

重定向到的URL。[`regexp@^1.7.0`](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)可以支持的任何有效URL路径。to中使用的所有URL参数必须由from提供。

```jsx
<Redirect to="/somewhere/else" />
```



#### to:object

重定向到的URL。[`regexp@^1.7.0`](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)可以支持的任何有效URL路径。

```jsx
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```



#### push:boolean

设置为true时，重定向会将新条目推入历史记录，而不是替换当前条目。

```jsx
<Redirect push to="/somewhere/else" />
```



#### from:string

要进行重定向的路径名。可以是[`regexp@^1.7.0`](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)支持的所有有效路径。所有匹配的url的参数都会提供给to指定的重定向的地址，to 未使用的其它参数将被忽略。

> 提示：from 参数仅支持在 Switch 组件内的 Redirect组件使用，具体请参考[`Switch children`](https://v5.reactrouter.com/web/api/Switch/children-node)

```jsx
<Switch>
  <Redirect from="/old-path" to="/new-path" />
  <Route path="/new-path">
    <Place />
  </Route>
</Switch>

// Redirect with matched parameters
<Switch>
  <Redirect from="/users/:id" to="/users/profile/:id" />
  <Route path="/users/profile/:id">
    <Profile />
  </Route>
</Switch>
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, Link, useParams } from 'react-router-dom';

function App() {
    return(
        <BrowserRouter>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/charts/123123'}>Charts</Link>
                </li>
                <li>
                    <Link to={'/profile/111'}>Profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path={'/home'} render={props => <Home {...props} />} />
                <Route path={'/profile/:id'} render={props => <Profile {...props} />} />
                <Redirect from={'/charts/:id'} to={'/profile/:id'} />
            </Switch>
        </BrowserRouter>
    )
}
function Home() {
    return <h1>Home</h1>
}
function Profile() {
    const params = useParams();
    console.log('params=>', params);
    return <>
        <h1>Profile</h1>
    </>
}
ReactDOM.render(<App />, document.querySelector('#root'));
```



#### exact:boolean

是否精准匹配。等效于[Route.exact](https://v5.reactrouter.com/web/api/Route/exact-bool)。

> 注意：只有在<Switch>内渲染<Redirect>时，才能与from结合使用，以完全匹配位置。有关更多详细信息，请参见[`Switch children`](https://v5.reactrouter.com/web/api/Switch/children-node)

```jsx
<Switch>
  <Redirect exact from="/" to="/home" />
  <Route path="/home">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const App = () => <BrowserRouter>
    <ul>
        <li>
            <Link to={'/home'}>Home</Link>
        </li>
        <li>
            <Link to={'/about'}>About</Link>
        </li>
    </ul>
    <Switch>
        <Route path={'/home'} render={props => <Home {...props} />} />
        <Route path={'/about'} children={props => <About {...props} />} />
        {/*这个一定要放到Route后面，等Route渲染完了，才可以重定向*/}
        <Redirect exact from={'/'} to={'/home'} />
    </Switch>
</BrowserRouter>;

ReactDOM.render(<App />, document.querySelector('#root'));
```



#### strict:boolean

严格匹配;等效于[Route.strict](https://v5.reactrouter.com/web/api/Route/strict-bool)。

> 注意：只有在<Switch>内部渲染<Redirect>时，此选项只有与from一起使用才能以严格匹配位置。有关更多详细信息，请参见[`Switch children`](https://v5.reactrouter.com/web/api/Switch/children-node)

```jsx
<Switch>
  <Redirect strict from="/one/" to="/home" />
  <Route path="/home">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const App = () => <BrowserRouter>
    <ul>
        <li>
            <Link to={'/home'}>Home</Link>
        </li>
        <li>
            <Link to={'/about'}>About</Link>
        </li>
        <li>
            <Link to={'/one'}>One</Link>
        </li>
    </ul>
    <Switch>
        <Route path={'/home'} render={props => <Home {...props} />} />
        <Route path={'/about'} children={props => <About {...props} />} />
        {/*这个一定要放到Route后面，等Route渲染完了，才可以重定向*/}
        <Redirect strict from="/one/" to="/home" />
    </Switch>
</BrowserRouter>;

ReactDOM.render(<App />, document.querySelector('#root'));
```



#### sensitive: bool

匹配区分大小写;等效于[Route.sensitive](https://v5.reactrouter.com/web/api/Route/sensitive-bool)。

```jsx
<Route sensitive path="/one">
  <About />
</Route>
```

| path | location.pathname | sensitive | 是否匹配 |
| ---- | ----------------- | --------- | -------- |
| /one | /one              | true      | yes      |
| /One | /one              | true      | no       |
| /One | /one              | false     | yes      |





### [<Route>](https://v5.reactrouter.com/web/api/Route)

路由组件可能是React Router中了解和学习中使用的最重要的组件。他的最基本的职责是在其路径与当前URL匹配时呈现某些UI。

思考下面的代码：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <NewsFeed />
      </Route>
    </div>
  </Router>,
  node
);
```

如果当前路径是：/，那么 UI的结构将类似于：

```html
<div>
  <Home />
  <!-- react-empty: 2 -->
</div>
```

如果当前的路径是:/news，那么UI的结构将类似于：

```html
<div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div>
```

其中 react-empty 注释只是 React 空渲染的实现细节。但对于我们的目的而言，它是有启发性的。路由始终在技术上被“渲染”，即使它的渲染为空。只要应用程序的位置匹配 `<Route>` 的 path，你的组件就会被渲染。



如果在同一组件树中的同一点上使用同一组件作为多个 <Route>s 的子组件，React 会将其视为相同的组件实例，并且组件的状态将在路由更改之间保留。如果不希望这样做，则添加到每个路由组件的唯一属性key将导致 React 在路由更改时重新创建组件实例。



#### Route render methods

建议使用的 Route 渲染方式是使用子元素，就像上面的例子上展示的。但是还是有一些其他的方式可用于Router渲染。提供这些方式主要是为了支持引用hooks之前版本的路由器构建的应用程序。

- [`<Route component>`](https://v5.reactrouter.com/web/api/Route/component)
- [`<Route render>`](https://v5.reactrouter.com/web/api/Route/render-func)
- [`<Route children>` function](https://v5.reactrouter.com/web/api/Route/children-func)

您应该在给定的<Route>上仅使用其中一个属性。请参阅下面的解释，以了解它们之间的差异。



#### Route props

所有的渲染方式都会提供相同的三个路由属性。

- [match](https://v5.reactrouter.com/web/api/match)
- [location](https://v5.reactrouter.com/web/api/location)
- [history](https://v5.reactrouter.com/web/api/history)



#### component

React component 仅当路径匹配时才会渲染。它将会与route props一起渲染。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// All route props (match, location and history) are available to User
// 用户可以使用所有route props（match, location and history）
function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(
  <Router>
    <Route path="/user/:username" component={User} />
  </Router>,
  node
);
```

当你使用component(而不是render 或 children)时，Router 将根据指定的组件，使用 React.createElement 创建一个新的 React 元素。这意味着，如果你向 component 提供一个内联函数，那么每次渲染都会创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅仅更新现有组件。当使用内联函数进行内联渲染时，请使用 render 或 children（见下文）。



#### render:func

这样可以方便地进行内联渲染和包装，而无需进行上述不必要的组件重装。

你可以传入一个函数，以在位置匹配时调用，而不是使用 component 创建一个新的 React 元素。render 渲染方式接收所有与 component 方式相同的 route props。 (match, location and history) 

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// convenient inline rendering
// 方便的内联渲染
ReactDOM.render(
  <Router>
    <Route path="/home" render={() => <div>Home</div>} />
  </Router>,
  node
);

// wrapping/composing
// You can spread routeProps to make them available to your rendered Component
// 您可以传播 route 属性 以使它们可用于渲染的组件
function FadingRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <FadeIn>
          <Component {...routeProps} />
        </FadeIn>
      )}
    />
  );
}

ReactDOM.render(
  <Router>
    <FadingRoute path="/cool" component={Something} />
  </Router>,
  node
);
```

> 警告：`<Route component>` 优先于 `<Route render>`，因此不要在同一个 `<Route>` 中同时使用两者。



#### children:func

有些情况下，不管路径是否与位置匹配，你都需要去渲染一些东西，在这种情况下，你可以使用 childen prop，除了不论是否匹配它都会被调用以外，它的工作原理与 render 完全一样。

children 属性与 component 和 render 属性接收相同的 route props, 除法路由与路径不匹配，不匹配时 match 为 null。它允许你根据路由是否匹配动态的调整你的UI。如下所示，如果路线匹配，我们会添加一个active类。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

function ListItemLink({ to, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  );
}

ReactDOM.render(
  <Router>
    <ul>
      <ListItemLink to="/somewhere" />
      <ListItemLink to="/somewhere-else" />
    </ul>
  </Router>,
  node
);
```

这对于动画也很有用：

```jsx
<Route
  children={({ match, ...rest }) => (
    {/* Animate will always render, so you can use lifecycles
        to animate its child in and out */}
    <Animate>
      {match && <Something {...rest}/>}
    </Animate>
  )}
/>
```

> 警告：<Route children>优先于<Route component>和<Route render>，因此请不要在同一<Route>中使用多个。



#### path:string | string[]

[`regexp@^1.7.0`](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)可以理解的任何有效 URL 路径或路径数组。

```jsx
<Route path="/users/:id">
  <User />
</Route>
<Route path={["/users/:id", "/profile/:id"]}>
  <User />
</Route>
```

没有 path 属性的 Route 将会一直被匹配。



#### exact:bool

当为true时，只有在 path 完全匹配 location.pathname 时才匹配。

```jsx
<Route exact path="/one">
  <About />
</Route>
```

|  path  | location.pathname |  exact  | matches? |
| :----: | :---------------: | :-----: | :------: |
| `/one` |    `/one/two`     | `true`  |    no    |
| `/one` |    `/one/two`     | `false` |   yes    |



#### strict:bool

如果为 true，则具有尾部斜杠的 path 仅与具有尾部斜杠的 location.pathname 匹配。当 location.pathname 中有附加的 URL 片段时，strict 就没有效果了。

```jsx
<Route strict path="/one/">
  <About />
</Route>
```

|  path   | location.pathname | matches? |
| :-----: | :---------------: | :------: |
| `/one/` |      `/one`       |    no    |
| `/one/` |      `/one/`      |   yes    |
| `/one/` |    `/one/two`     |   yes    |

> 警告：strict可以用来强制location.pathname没有结尾的斜杠，但是要做到这一点，strict 和 exact 都必须为true。

```jsx
<Route exact strict path="/one">
  <About />
</Route>
```

|  path  | location.pathname | matches? |
| :----: | :---------------: | :------: |
| `/one` |      `/one`       |   yes    |
| `/one` |      `/one/`      |    no    |
| `/one` |    `/one/two`     |    no    |



#### location: object

<Route>元素尝试将其路径与当前history location（通常是当前浏览器URL）匹配。但是，也可以传递路径名不同的位置进行匹配。

在需要将<Route>匹配到当前历史记录位置以外的位置时，这很有用，如[Animated Transitions](https://reactrouter.com/web/example/animated-transitions)示例所示。

如果<Route>元素包装在<Switch>中并且与传递给<Switch>的位置（或当前历史记录位置）匹配，则传递给<Route>位置的prop将被<Switch>使用的那个props覆盖（[此处](https://github.com/remix-run/react-router/blob/main/packages/react-router/modules/Switch.js#L51)给出）



#### sensitive: bool

如果为 true，进行匹配时将区分大小写。

```jsx
<Route sensitive path="/one">
  <About />
</Route>
```

|  path  | location.pathname | sensitive | matches? |
| :----: | :---------------: | :-------: | :------: |
| `/one` |      `/one`       |  `true`   |   yes    |
| `/One` |      `/one`       |  `true`   |    no    |
| `/One` |      `/one`       |  `false`  |   yes    |







### [<Router>](https://v5.reactrouter.com/web/api/Router)

Router 是所有路由器组件的通用底层接口。通常，应用程序只会从以下高级Router中选择一个作为代替：

- [`<BrowserRouter>`](https://v5.reactrouter.com/web/api/BrowserRouter)
- [`<HashRouter>`](https://v5.reactrouter.com/web/api/HashRouter)
- [`<MemoryRouter>`](https://v5.reactrouter.com/web/api/MemoryRouter)
- [`<NativeRouter>`](https://v5.reactrouter.com/native/api/NativeRouter)
- [`<StaticRouter>`](https://v5.reactrouter.com/web/api/StaticRouter)

使用底层<Router>的最常见用例是将自定义历史记录与状态管理库（如Redux或Mobx）进行同步。 请注意，并不需要将状态管理库与React Router一起使用，它仅用于深度集成。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  node
);
```



#### history: object

用于导航的[`历史记录`](https://github.com/remix-run/history)对象。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

ReactDOM.render(<Router history={customHistory} />, node);
```



#### children:node

要呈现的子元素。

```jsx
<Router>
  <App />
</Router>
```



### [<StaticRouter>](https://v5.reactrouter.com/web/api/StaticRouter)

永远不会更改位置的<Router>。

当用户实际上没有四处点击时，这在服务器端渲染方案中很有用，因此位置永远不会发生实际变化。 因此，名称为：static。它在简单测试中也很有用，您只需要插入一个位置并在渲染输出中进行断言时。

示例：这是一个node服务器，它为<Redirect>发送302状态代码，并为其他请求发送常规HTML：

```JS
import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

http
  .createServer((req, res) => {
    // This context object contains the results of the render
    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(html);
      res.end();
    }
  })
  .listen(3000);
```



#### basename: string

所有位置的基本URL。格式正确的基本名称应以斜杠开头，但不能以斜杠结尾。

```jsx
<StaticRouter basename="/calendar">
  <Link to="/today"/> // renders <a href="/calendar/today">
</StaticRouter>
```



#### location: string

服务器收到的URL，可能是node服务器上的req.url.

```jsx
<StaticRouter location={req.url}>
  <App />
</StaticRouter>
```



#### location: object

形状为{ pathname, search, hash, state }的location对象

```jsx
<StaticRouter location={{ pathname: "/bubblegum" }}>
  <App />
</StaticRouter>
```



#### context: object

一个普通的JavaScript对象。在渲染期间，组件可以向对象添加属性以存储有关渲染的信息

```jsx
const context = {}
<StaticRouter context={context}>
  <App />
</StaticRouter>
```

当<Route>匹配时，它会将上下文对象传递给它作为 staticContext prop 呈现的组件。查看[服务器呈现指南](https://v5.reactrouter.com/web/guides/server-rendering)，了解有关如何自行执行此操作的更多信息。

渲染后，这些属性可用于配置服务器的响应。

```js
if (context.status === "404") {
  // ...
}
```



#### children: node

要渲染的子元素。

> 注意：在 React < 16的版本中，你必须使用[单个子元素](https://facebook.github.io/react/docs/react-api.html#reactchildrenonly) ，因为render方法不能返回多个元素，你可以将他们包裹在额外的div元素或<React.Fragment>中。







### [<Switch>](https://v5.reactrouter.com/web/api/Switch)

渲染与location匹配的第一个子元素<Route>或<Redirect>。

**这与仅仅使用一堆`<Route>`有什么不同？**

Switch 只会渲染一个路由。相反，仅仅定义一系列 Route 时，每一个与路径匹配的 Route 都将包含在渲染范围内。考虑如下代码：

```jsx
import { Route } from "react-router";

let routes = (
  <div>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </div>
);
```

如果URL是/about，则渲染<About>，<User>和<NoMatch>将全部渲染，因为它们都与所有路径都匹配。这是设计使然，允许我们以多种方式将<Route>组合到我们的应用中，例如边栏和面包屑，引导程序标签等。

但是，有时我们只选择一个<Route>进行渲染。如果我们位于/about，我们不想同时匹配/:user（或显示"404"页面）。使用Switch的方法如下：

```jsx
import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);
```

现在，如果我们位于/about，<Switch>将开始寻找匹配的<Route>。<Route path ="/about" />将匹配，而<Switch>将停止寻找匹配并渲染<About>。同样，如果我们在/michael位置，则会显示<User>。

这对于动画过渡也很有用，因为匹配的<Route>呈现在与上一个相同的位置。

```jsx
let routes = (
  <Fade>
    <Switch>
      {/* there will only ever be one child here */}
      {/* 这里只有一个子元素 */}
      <Route />
      <Route />
    </Switch>
  </Fade>
);

let routes = (
  <Fade>
    {/* there will always be two children here,
        one might render null though, making transitions
        a bit more cumbersome to work out */}
    {/* 这里永远有两个子元素，但是可能会呈现null，进行转换,计算起来有点麻烦 */}
    <Route />
    <Route />
  </Fade>
);
```



#### location: object

用于匹配子元素而不是当前历史位置（通常是当前的浏览器 URL）的 location 对象。



#### children: node

<Switch>的所有子代应为<Route>或<Redirect>元素。仅第一个与当前位置匹配的子元素会被渲染。

<Route>元素使用其path属性进行匹配，而<Redirect>元素使用其from属性进行匹配。没有path属性的<Route>或没有from属性的<Redirect>将始终与当前位置匹配。

在<Switch>中包含<Redirect>时，它可以使用<Route>的任何位置匹配属性：path，exact和strict。 from只是path属性的别名。
如果给<Switch>一个location属性，它将覆盖匹配的子元素上的location属性。

```jsx
import { Redirect, Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/users">
      <Users />
    </Route>
    <Redirect from="/accounts" to="/users" />

    <Route>
      <NoMatch />
    </Route>
  </Switch>
);
```





### [generatePath](https://v5.reactrouter.com/web/api/generatePath)

`generatePath`函数可用于生成路由的 URL。在内部使用`path-to-regexp`库。

```js
import { generatePath } from "react-router";

generatePath("/user/:id/:entity(posts|comments)", {
  id: 1,
  entity: "posts"
});
// Will return /user/1/posts
```

将路径编译为正则表达式的结果被缓存，因此生成具有相同模式的多个路径不会产生开销。



#### patten: string

`generatePath`需要 2 个参数。第一个是作为`Route`组件的路径属性提供的模式。



#### params: object

第二个参数是具有要使用的模式的相应参数的对象。

如果提供的参数和路径不匹配，将引发错误：

```js
generatePath("/user/:id/:entity(posts|comments)", { id: 1 });
// TypeError: Expected "entity" to be defined
```





### [history](https://v5.reactrouter.com/web/api/history)

本文档中的"history" 和""history object"术语是指[ `history package`](https://github.com/remix-run/history),。 它是React Router仅有的两个主要依赖项之一（除了React本身），它提供了几种不同的实现来管理各种环境中JavaScript的会话历史记录。

下面几种术语也有涉及：

- “browser history” - 特定用于DOM的实现，在支持HTML5历史记录API的Web浏览器中很有用。
- “hash history” - 特定用于DOM的实现，适用于旧版网络浏览器
- “memory history” - 内存历史记录实现，可用于测试和非DOM环境（如React Native）



`history`对象通常具有以下属性和方法：

- length -(number) 历史记录堆栈中的条目数
- action - (string) 当前操作类型(PUSH,REPLACE,POP)
- location(object) 当前位置对象，应该包括以下属性：
  - pathname-(string) url中的路径
  - search-(string) url中的 query
  - hash-(string) url 中的 hash 片段
  - state-(object) 例如 当进行push(path,state) 操作后， 当location 被推入堆栈时，特定位置的state属性将会被提供。

- push(path,[state]) - (function) 将一个新的历史条目推入历史堆栈。
- replace(path,[state])- (function) 在历史堆栈中替换当前历史条目
- go(n)-(function) 将历史记录堆栈中的指针移动n个条目
- goBack()-(function) 相当于 go(-1)
- goForward()-(function) 相当于 go(-1)
- block(prompt)-(funtion) 阻止跳转(请参阅[历史记录文档](https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md))



#### history 是可变的

history 对象是可变的，因此，建议从[`<Route>`](https://v5.reactrouter.com/web/api/Route)的渲染属性访问[`location`](https://v5.reactrouter.com/web/api/location)而不是从history.location中访问。这确保了您对React的假设在生命周期钩子中是正确的。例如:

```jsx
class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    // will be true
    const locationChanged =
      this.props.location !== prevProps.location;

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged =
      this.props.history.location !== prevProps.history.location;
  }
}

<Route component={Comp} />;
```

其他属性也可能存在，具体取决于您使用的实现。有关更多详细信息[，请参阅历史记录文档](https://github.com/remix-run/history/tree/main/docs)。





### [location](https://v5.reactrouter.com/web/api/location)

location表示应用程序当前位置，您希望其运行的位置，甚至是之前的位置。看起来像这样

```js
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```



router将在几个地方为您提供location对象：

- [Route component](https://v5.reactrouter.com/web/api/Route/component) as `this.props.location`
- [Route render](https://v5.reactrouter.com/web/api/Route/render-func) as `({ location }) => ()`
- [Route children](https://v5.reactrouter.com/web/api/Route/children-func) as `({ location }) => ()`
- [withRouter](https://v5.reactrouter.com/web/api/withRouter) as `this.props.location`

它也可以在history.location上获取到，但您不应该使用从history.location上获取到的location对象，因为它是可变的。

location对象永远不会发生突变，因此您可以在生命周期挂钩中使用它来确定何时进行导航，这对于数据获取和动画处理非常有用。

```js
componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // navigated!
  }
}
```

您可以向导航的各个位置提供location而不是字符串：

- Web [Link to](https://v5.reactrouter.com/web/api/Link/to)
- Native [Link to](https://v5.reactrouter.com/native/api/Link/to)
- [Redirect to](https://v5.reactrouter.com/web/api/Redirect/to)
- [history.push](https://v5.reactrouter.com/web/api/history/push)
- [history.replace](https://v5.reactrouter.com/web/api/history/push)

通常您只需要使用一个字符串，但是，如果您需要添加一些“位置状态”，只要应用返回到该特定位置即可使用，则可以使用location对象代替。如果您要基于导航历史而不是仅基于路径（如 modals）来分支UI，这将非常有用。

```jsx
// usually all you need
<Link to="/somewhere"/>

// but you can use a location instead
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}

<Link to={location}/>
<Redirect to={location}/>
history.push(location)
history.replace(location)
```

最后，您可以将location传递给以下组件：

- [Route](https://v5.reactrouter.com/web/api/Route/location)
- [Switch](https://v5.reactrouter.com/web/api/Switch/location)

这样可以防止他们在路由器状态下使用实际位置。这对于动画和待处理的导航很有用，或者在您想要诱使组件在与真实位置不同的位置进行渲染时，这很有用。



### [match](https://v5.reactrouter.com/web/api/match)

match 对象包含有关`<Route path>`如何与URL匹配的信息。匹配对象包含以下属性：

- params-(object) 从与路径的动态段相对应的URL解析的键/值对 如/:id
- isExact-(bool) 如果整个URL都匹配，则为true（无结尾字符）
- path-(string) 用于匹配的路径模式。用于构建嵌套的`<Route>`
- url-(string) URL的匹配部分。用于构建嵌套的`<Link>`



可以在下面几个地方获取 match 对象：

- [Route component](https://v5.reactrouter.com/web/api/Route/component) as `this.props.match`
- [Route render](https://v5.reactrouter.com/web/api/Route/render-func) as `({ match }) => ()`
- [Route children](https://v5.reactrouter.com/web/api/Route/children-func) as `({ match }) => ()`
- [withRouter](https://v5.reactrouter.com/web/api/withRouter) as `this.props.match`
- [matchPath](https://v5.reactrouter.com/web/api/matchPath) as the return value
- [useRouteMatch](https://v5.reactrouter.com/web/api/hooks/useroutematch) as the return value

如果Route没有path，因此会始终匹配，它将获取最接近的父项匹配项。和withRouter一样。



#### null matches

在 <Route path="/somewhere" children={({ match }) => ()} /> 中，即使 path 与当前位置不匹配，children 指定的内联函数也依然会被

调用。这种情况下，match 为 null。能够在不匹配时依然呈现 `<Route>` 的内容可能很有用，但是这样会带来一些挑战。



"解析"URL 的默认方法是将match.url字符串联接到"relative"路径。

```js
let path = `${match.url}/relative-path`;
```

如果你在 match 为 null 时尝试执行此操作，最终会出现 TypeError 错误。这意味着在使用 children 属性时尝试在 `<Route>` 内部连接 "relative"路径 是不安全的。

当您在产生空匹配对象的 `<Route>` 内部使用没有定义 path 的 `<Route>` 时，会出现类似但更微妙的情况

```js
// location.pathname = '/matches'
<Route path="/does-not-match"
  children={({ match }) => (
    // match === null
    <Route
      render={({ match: pathlessMatch }) => (
        // pathlessMatch === ???
      )}
    />
  )}
/>
```

没有 path 的 `<Route>` 从它的父节点继承 match 对象。如果它的父匹配为 null，那么它的匹配也将为 null。这意味着：

任何子路由/子链接必须是绝对的 一个没有定义 path 的 `<Route>`，它的父匹配可以为 null，但它本身需要使用 children 来呈现内容。



### [matchPath](https://v5.reactrouter.com/web/api/matchPath)

在正常的渲染周期之外，你可以使用和 `<Route>` 使用的相同的匹配代码，例如在服务器上呈现之前收集数据依赖关系。

```js
import { matchPath } from "react-router";

const match = matchPath("/users/123", {
  path: "/users/:id",
  exact: true,
  strict: false
});
```



#### pathname

第一个参数是要匹配的路径名。如果您在服务器上通过 Node.js 使用，它将是 req.path。



#### props

第二个参数是匹配的属性，它们与`<Route>`接受的匹配属性相同：

```js
{
  path, // like /users/:id; either a single string or an array of strings
  strict, // optional, defaults to false
  exact, // optional, defaults to false
}
```



#### returns

当提供的路径名与路径属性匹配时，它将返回一个对象。

```js
matchPath("/users/2", {
  path: "/users/:id",
  exact: true,
  strict: true
});

//  {
//    isExact: true
//    params: {
//        id: "2"
//    }
//    path: "/users/:id"
//    url: "/users/2"
//  }
```

如果提供的路径名与路径属性不匹配，则返回null。

```js
matchPath("/users", {
  path: "/users/:id",
  exact: true,
  strict: true
});

//  null
```



### withRouter

你可以通过 `withRouter` 高阶组件访问 `history` 对象的属性和最近（UI 结构上靠的最近）的 `<Route>` 的 `match` 对象。当组件渲染

时，`withRouter` 会将更新后的 `match`、`location` 和 `history` 传递给它。

```jsx
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```

> 注意：withRouter 不会订阅位置更改 就像 React Redux 的 connect 对状态更改所做的更改。withRouter 是在位置更改从 
>
> `<Router>` 组件传播出去之后重新呈现。这意味着除非其父组件重新呈现，否则使用 withRouter 不会在路由转换时重新呈现。

**静态方法和属性**

包装组件的所有非 react 特定静态方法和属性都将自动复制到connected 组件。



#### Component.WrappedComponent

包装的组件在返回的组件上作为静态属性WrappedComponent公开，它可以用于隔离测试组件等

```jsx
// MyComponent.js
export default withRouter(MyComponent)

// MyComponent.test.js
import MyComponent from './MyComponent'
render(<MyComponent.WrappedComponent location={{...}} ... />)
```



#### wrappedComponentRef: func

一个将作为 ref 属性传递给包装组件的函数。

```jsx
class Container extends React.Component {
  componentDidMount() {
    this.component.doSomething();
  }

  render() {
    return (
      <MyComponent wrappedComponentRef={c => (this.component = c)} />
    );
  }
}
```







# DEMO

## React Router导航守卫

> https://juejin.cn/post/7028742447702212644



src/components/GuardRouter.jsx

```jsx
import { PureComponent } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let unBlock
/* 辅助组件，不做显示，仅用于设置阻塞 */
class _GuardRouterHelper extends PureComponent {
  componentDidMount() {
    // 设置阻塞 ====================
    unBlock = this.props.history.block((location, action) => {
      const prevLocation = this.props.location
      // curLocation = location
      // curAction = action
      // 返回值会作为 listen 函数的第一个参数 msg
      return JSON.stringify({
        prevLocation,
        location,
        action
      })
    })
    
    this.unListen = this.props.history.listen((location, action) => {
      console.log(location)
      console.log(action)
      const prevLocation = this.props.location
      // 约定属性 onRouterChange 传递一个函数，当页面跳转时处理一些事情
      this.props.onRouterChange && this.props.onRouterChange(prevLocation, location, action, this.unListen)
    })
    // 设置阻塞 ====================
  }

  componentWillUnmount() {
    // 取消阻塞
    unBlock()
    // 取消路由变化的监听
    this.unListen()
  }

  render() {
    return null
  }
}
const GuardRouterHelper = withRouter(_GuardRouterHelper)

// 此组件不处于 Router 的上下文中，拿不到 history 对象，则无法设置阻塞
class GuardRouter extends PureComponent {
  // 借助 JSON.parse 解析 json 字符串 ==========================>
  // 切换路由触发
  handleRouterConfirm = (msg, next) => {
    // 约定在路由跳转之前的处理函数 onBeforeEach，跳转权交给外层调用者
    const { prevLocation, location, action } = JSON.parse(msg)
    this.props.onBeforeEach 
      ? this.props.onBeforeEach(prevLocation, location, action, next, unBlock) 
      : next() // 默认跳转
  }
  // 借助 JSON.parse 解析 json 字符串 ==========================>
  
  render() {
    // 跳转路由前的确认函数getUserConfirmation
    return <Router getUserConfirmation={this.handleRouterConfirm}>
      <GuardRouterHelper/>
      {/* 组件的所有子节点 */}
      {this.props.children}
    </Router>
  }

}

export default GuardRouter
```



src/App.js

```jsx
import { Link, Route } from 'react-router-dom'
import GuardRouter from './components/GuardRouter'
import Home from './view/Home'
import News from './view/News'
import AboutUS from './view/AboutUS'

// 路由变化运行的函数
function routerChange(prevLocation, curLocation, action, unListen) {
  // 能够监听到路由跳转的变化, 也能够拿到路由跳转的相关信息
  console.log(`日志: ${prevLocation.pathname} => ${curLocation.pathname}, ${action}`);
}

function beforeRouterChange(prevLocation, location, action, next, unBlock) {
  // 满足跳转条件,点击Link生成的a标签才可以跳转
  let tiaojian = '1'
  // 跳转路由 : 不跳转路由
  tiaojian ? next(true) : next(false)
}

export default function App() {
  return (
    // <Router getUserConfirmation={getConfirm}>
    <GuardRouter
      onRouterChange={routerChange} 
      onBeforeEach={beforeRouterChange}
    >
      <Link to="/">首页</Link>
      <Link to="/news">新闻页</Link>
      <Link to="/aboutus">关于我们</Link>
      <>
        <Route path="/" exact component={Home}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/aboutus" component={AboutUS}></Route>
      </>
      </GuardRouter>
    // </Router>
  )
}
```



