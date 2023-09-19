# 调试Vue项目

## 调试 @vue/cli 创建的 webpack 项目
```bash
$ yarn add -g @vue/cli
$ vue -V
```
然后执行 vue create vue-demo1 创建 vue 项目：
```bash
$ vue create vuecli-debug

Vue CLI v5.0.4
┌─────────────────────────────────────────┐
│                                         │
│   New version available 5.0.4 → 5.0.8   │
│                                         │
└─────────────────────────────────────────┘

? Please pick a preset: (Use arrow keys)
> Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
  Manually select features
```
选择 vue3 的模版。安装完之后把开发服务跑起来。
```bash
 $ cd vuecli-debug
 $ yarn serve
```
浏览器访问localhost:8080，会看到渲染出的页面。

然后我们进行调试：
点击调试窗口的 create a launch.json file(创建launch.json文件) 来创建调试配置文件：
![](assets/img/create_a_launch_json.png)

把 Chrome 调试配置的 url 改成目标 url 就可以进行调试了：
```js
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "针对 localhost 启动 Chrome",
      "url": "http://localhost:8080", // 保持与开发服务器一致
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```
点击 debug 启动，在 vue 组件里打个断点，你会发现断点没生效：
![](assets/img/unbound_breakpoint.jpg)

这是为什么呢？

先加个 debugger 来跑一下：
```js
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    debugger;
    console.log('mounted');
  }
}
```
然后在 Chrome DevTools 里看下：
![](assets/img/vue_debugger_devtools.png)

会发现他从一个乱七八糟的路径，映射到了`webpack://vuecli-debug/src/App.vue?91a0`的路径下。

然后在 VSCode Debugger 里看看这个路径：
![](assets/img/vue_debugger_callback.png)
