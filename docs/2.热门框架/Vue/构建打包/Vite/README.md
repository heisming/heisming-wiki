# Vite
>[优秀项目](https://github.com/vitejs/awesome-vite#templates)

## 中文官网

> https://cn.vitejs.dev/


## 基础使用

#### 脚手架自动生成

```sh
npm init vite@latest

输入项目名称即可：thecountdown

cd thecountdown

npm install

npm run dev
```

#### 手动生成

```sh
npm i -g vite

新建文件夹

新建npm项目

npm init -y

安装vue
npm install -S vue@next

安装compiler-sfc
npm i -D @vue/compiler-sfc

cmd运行
vite

安装@vitejs/plugin-vue
npm i -S @vitejs/plugin-vue
```

##### html文件

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Vite</title>
</head>
<body>
  <div id="root"></div>
  <!-- 引入Vite -->
  <script type="module" src="./main.js"></script>
</body>
</html>
```

##### JS文件

```js
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount(‘#root’)
```

##### App.vue

```vue
<template>

  <div>hello world</div>

</template>

<script>
export default {

}
</script>

<style>

</style>
```

##### `vite.config.js`

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

```

