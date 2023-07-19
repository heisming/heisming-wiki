# PWA
由于 Web 应用入口严重依赖于浏览器，这一限制大大降低了用户体验且不利于用户留存。即使部分浏览器提供了添加为桌面快捷方式的机制以便用户快速打开应用，但其表现形式依旧含有强烈的浏览器标签。而 PWA 正是通过 Manifest 配置文件在保留 Web 应用原有特性的同时，降低甚至抹平与原生应用间的差异，从而提高用户体验及用户留存率。

## Manifest配置文件
来个DEMO：[manifest.json](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
```json
{
  "name": "PWA Manifest Demo", // 应用名称: 在启动页和安装提示中显示
  "short_name": "Manifest Demo", // 应用短名称：主名称，安装横幅
  "start_url": "./index.html", // 启动网址：启动应用时加载的URL
  "theme_color": "#4374A5", // 主题色：工具栏的色值，如在 HTML 中通过 meta 标签指定，则以 meta 标签指定的色值为准，故建议 meta 与 manifest.json 的值保持一致。
  "background_color": "#4374A5", // 背景色：应用首次启动后，在启动网址呈现之前，浏览器会使用该色值填充屏幕，以便杜绝白屏，效果如上述中的启动页。
  "display": "standalone", // 启动模式：1.fullscreen：页面占满整个屏幕。2.standalone：相对于 fullscreen，此模式还包含状态栏、返回按钮等其他系统 UI，该模式更接近原生应用。 3.minimal-ui：相对于 standalone，此模式还包含浏览器地址栏，地址栏样式取决于具体的浏览器。4.browser：使用操作系统内置的浏览器来打开应用。
  "orientation": "natural", // 显示方向：锁定屏幕旋转，强制指定应用的显示方向。
  // any：当屏幕切换到横屏时，以横屏方式显示，否则以竖屏方式显示。
  // natural：如果屏幕的宽大于高，则以横屏显示，否则以竖屏方式显示。
  // portrait：根据平台规则或屏幕旋转角度，自动取值 portrait-primary 或 portrait-secondary。
  // portrait-primary：竖屏正方向。
  // portrait-secondary：竖屏反方向，屏幕正方向按顺时针旋转 180°。
  // landscape：根据平台规则或屏幕旋转角度，自动取值 landscape-primary 或 landscape-secondary。
  // landscape-primary：横屏正方向，屏幕正方向按顺时针旋转 90°。
  // landscape-secondary：横屏反方向，屏幕正方向按顺时针旋转 270°。
  "icons": [{ // 应用图标：
    "src": "images/launcher-icon.png", // src：图标文件路径。
    "sizes": "192x192", // type：图标的 mime 类型；非必填项，该属性可以让浏览器快速忽略掉不支持的图标类型。
    "type": "image/png" // sizes：图标尺寸；格式为 widthxheight，其宽高均以像素（px）为单位。
  }] 
}
```
已经完成了 `manifest.json` 的配置，那要实现**可安装**，还需要做些什么呢？
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="manifest" href="./manifest.json">
</head>
<body>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        /**
         * ./sw.js 文件中的内容如下：
         * self.addEventListener('fetch', function(event) {
         * });
         */
        navigator.serviceWorker.register('./sw.js');
      });
    }
  </script>
</body>
</html>
```
上述代码中，不仅对 manifest.json 进行了链接，并对 Service Worker 进行了注册，这是因为要实现应用的可安装，需满足以下条件：
- 拥有一个 manifest.json 配置文件，且该配置文件必须包含以下配置：
  - name
  - short_name
  - start_url
  - icons
- 拥有一个注册了的 Service Worker。
- 网络需要使用 HTTPS。
- 网站在同一浏览器中至少被访问过两次，且相隔时间不少于五分钟。

完成这些设置，便可通过点击浏览器右上角的三个竖排点中的安装 PWA Manifest Demo 或浏览器内置的安装横幅（会在用户多次访问站点且间隔时间不少于五分钟的时候自动出现）来进行应用安装。但如果想要延迟安装提示，或在用户选择同意或拒绝安装后做一些统计类的工作，就需要通过代码来实现。比如：
```js
let appPromptEvent = null;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('触发事件：beforeinstallprompt');
  appPromptEvent = event;
  event.preventDefault();
  return false;
});

const installBtn = document.getElementById('installBtn');
installBtn.addEventListener('click', function() {
  if (appPromptEvent !== null) {
    appPromptEvent.prompt();
    appPromptEvent.userChoice.then(function(result) {
      if (result.outcome === 'accepted') {
        console.log('同意安装应用');
      } else {
        console.log('不同意安装应用');
      }
      appPromptEvent = null;
    });
  }
});
window.addEventListener('appinstalled', function() {
  console.log('应用已安装');
});
```
上述代码的主要流程为：
- 通过监听 window 对象的 beforeinstallprompt 事件拦截浏览器安装横幅的显示事件，在回调中我们将 event 实例保存起来以便后续使用，然后通过屏蔽事件的默认行为来阻止安装横幅的显示。
- 在安装应用按钮的点击事件中，如果 appPromptEvent 不为空，我们通过调用 prompt 方法来显示安装提示，而后便可在 userChoice 属性的 then 回调中对用户的选择做一些类似统计之类的工作，这里唯一需要注意的是，由于 appPromptEvent 只能被使用一次，所以在最后我们必须要将其设置为空（或许你会问：如果用户选择了拒绝，片刻又反悔了岂不是没有事件可用了？关于这个问题我们稍后回答）。
- 通过监听 window 对象的 appinstalled 事件，我们可以在应用成功安装后做一些类似统计之类的工作。

那么动手来实验一下吧：

通过日志输出可以得知 beforeinstallprompt 被触发了两次，那么就让我们对该事件的触发时机进行简单梳理：
- 如果应用已经被安装，该事件将不会被触发。
- 如果应用没有被安装，该事件会在：
  - 浏览器安装横幅首次将要显示时触发。
  - 用户拒绝安装后（这也回答了上面把 appPromptEvent 设置为空后，后续再次点击安装应用按钮后无事件可用的问题）。

通过Manifest 配置文件的作用，Web 应用可以抹平与原生应用在启动方式、应用表现形式等方面的差异。
