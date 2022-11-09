# 🍍Pinia
>https://pinia.vuejs.org/

## 为什么选择Pinia？
💡 Intuitive
Stores are as familiar as components. API designed to let you write well organized stores.

🔑 Type Safe
Types are inferred, which means stores provide you with autocompletion even in JavaScript!

⚙️ Devtools support
Pinia hooks into Vue devtools to give you an enhanced development experience in both Vue 2 and Vue 3.

🔌 Extensible
React to store changes to extend Pinia with transactions, local storage synchronization, etc.

🏗 Modular by design
Build multiple stores and let your bundler code split them automatically.

📦 Extremely light
Pinia weighs around 1kb, you will forget it's even there!


## 开始吧
本次使用[Vite](./../../构建打包/Vite/README.md)环境作为构建打包工具。
### 初始化环境
```bash
npm init vite@latest // 只能npm
```
如果是第一次安装，会提示你安装对应的packages。
```bash
Need to install the following packages:
  create-vite@latest
Ok to proceed? (y)
```
输入完名字，会让你选择项目的框架。
```bash
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue
    react
    preact
    lit
    svelte
```
选择vue-ts
```bash
? Select a variant: » - Use arrow-keys. Return to submit.
   vue
>  vue-ts
```
```bash
Done. Now run:

  cd pinia-demo  // 进入项目文件夹
  pnpm install    // 安装项目依赖
  pnpm run dev    // 运行项目
```
如果这一步出现问题，可能是缺少`.npmrc`文件,需要在根目录下创建
```bash
home="https://npmmirror.com" 
registry="https://registry.npmmirror.com/" 

#前台相关 
sass_binary_site="https://npmmirror.com/mirrors/node-sass/" 
canvas_binary_host_mirror="https://npmmirror.com/mirrors/node-canvas-prebuilt/" 
phantomjs_cdnurl="https://npmmirror.com/dist/phantomjs/" 
electron_mirror="https://npmmirror.com/mirrors/electron/v" 
sqlite3_binary_host_mirror="http://npmmirror.com/mirrors/" 
profiler_binary_host_mirror="https://npmmirror.com/mirrors/node-inspector/" 
chromedriver_cdnurl="http://npmmirror.com/mirrors/chromedriver/" 
operadriver_cdnurl="http://npmmirror.com/mirrors/operadriver/" 
electron_builder_binaries_mirror="http://npmmirror.com/mirrors/electron-builder-binaries/" 
#后台相关 
grpc_node_binary_host_mirror="https://npmmirror.com/mirrors/" 
node_sqlite3_binary_host_mirror="http://npmmirror.com/mirrors/" 
nodejieba_binary_host_mirror="https://npmmirror.com/mirrors/nodejieba"
```


```bash
vite v2.7.13 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 805ms.
```

### 安装Pinia
```bash
npm i pinia
pnpm add(i) pinia
yarn add pinia
```

### 基础
>与Vuex有些类似，但是Pinia比Vuex轻巧许多，也更加简单易用，特别适合小型项目开发。

#### 1、创建全局pinia实例
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建pinia 实例
const pinia = createPinia();

const app = createApp(App)
// 挂载到 Vue 根实例上
app.use(pinia)

app.mount('#app')
```
#### 2、创建store
在`src`目录下创建一个`store`文件夹，并且在目录下创建`index.ts`
```ts
/** 创建store状态管理库
 *  1.定义状态容器(仓库)
 *  2.修改容器(仓库)中的 state
 *  3.仓库中的 action 的使用
 */
import { defineStore } from "pinia";
// 参数1：为容器起一个唯一的名字 "main"
// 参数2：理解为一个配置对象，里边是对容器仓库的配置说明。
export const mainStore = defineStore('main', {
  // 用来存储全局的状态的，这里边定义的，就可以是为SPA里全局的状态了。
  state: () => {
    return {
      // 全局的状态数据，所有的页面和组件都可以获取
      helloWorld: "Hello World",
      count: 0,
      phone: '13355335533'
    }
  },
  // 用来监视或者说是计算状态的变化的，有*缓存的功能*, 有点类似computed
  getters: {
    phoneHidden(state) {
      // 只显示了一次PhoneHidden被调用了
      // 调用多次，但是值一样就不会被多次调用，节约性能
      console.log('缓存的功能=>','PhoneHidden被调用了');
      // 用正则表达式替换*字符串实现手机号隐藏功能
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    },
    // 使用TS时：如果不传state，ts无法推断出来返回数据类型，所以需要标注
    phoneHiddens(): String {
      console.log('缓存的功能=>','PhoneHidden被调用了');
      return this.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  // 对state里数据变化的业务逻辑，需求不同，编写逻辑不同。修改state全局状态数据的。
  actions: {
    // 可以在组件中调用这个函数来修改状态数据
    // 不能使用箭头函数，因为箭头函数绑定是外部的this。
    changeState() {
      this.count++;
      this.helloWorld = "heisming"
    }
  }
})
```

#### 3、Pinia🍍已下锅，开始操作(使用state)
```ts
<template>
 <h2>{{ store.helloWorld }}</h2>
 <h2>{{ store.count }}</h2>
 <h2>{{ store.phoneHidden }}</h2>
  or
 <h2>{{ helloWorld }}</h2>
 <h2>{{ count }}</h2>
 <h2>{{ phoneHidden }}</h2>
</template>

<script setup lang="ts">
// 先引入mainStore,然后通过mainStore得到store实例，就可以在组件里调用store里的state定义的状态数据了。
import { mainStore } from "../store"
import { storeToRefs } from "pinia";
const store = mainStore()

// 直接对store结构会导致失去响应式
/**
 *  Hello World
 *  0
 */
// const { helloWorld, count } = store
// 引入storeToRefs即可
/**
 * ObjectRefImpl {_object: Proxy, _key: 'helloWorld', _defaultValue: undefined, __v_isRef: true} 
 * ObjectRefImpl {_object: Proxy, _key: 'count', _defaultValue: undefined, __v_isRef: true}
 * ObjectRefImpl {_object: Proxy, _key: 'phoneHidden', _defaultValue: undefined, __v_isRef: true}
 */
const { helloWorld, count, phoneHidden } = storeToRefs(store)

</script>
```



##### 修改state的几种方式
```ts
<template>
 <div>
   <button @click="handleClick">click count++</button>
   <button @click="handleClickWithPatchObj">change state with($patch)</button>
   <button @click="handleClickWithPatchMethod">change state with($patch with methods)</button>
   <button @click="handleClickWithActions">change state with(actions)</button>
   <button @click="handleClickWithGetter">change state with(getters)</button>
 </div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store';
const store = mainStore();

const handleClick = () => {
  // 简单粗暴直接修改
  store.count++;
}

const handleClickWithPatchObj = () => {
  // 修改多条数据的方法
  store.$patch({
    count: store.count + 2,
    // helloWorld中的store.count是没有 +2 之前的值
    // 拿到的是prev值，如果想拿到最新的值怎么办？
    helloWorld: store.helloWorld + " " + store.count
  })
}

const handleClickWithPatchMethod = () => {
  // 个人称之为React方式
  // state就是store中的state
  store.$patch((state) => {
    state.count++;
    state.helloWorld = store.helloWorld + " " + store.count
  })
} 

const handleClickWithActions = () => {
  // 使用actions中的methods
  store.changeState()
}

// 点击按钮的对应函数
const handleClickWithGetter = () => {
  // 当phone改变的时候，Getter自动工作，phoneHidden会自动被调用一次,对应的缓存会被清除
  store.phone = "15139333999";
};

</script>
```

##### 获取其它store中的state
在`src`目录下创建一个`store`文件夹，并且在目录下创建`presonal.ts`
```ts
import { defineStore } from "pinia";

export const personalStore = defineStore("HEISMING", {
  state: () => {
    return {
      list: ['HE', 'IS', 'MING']
    }
  }
})
```
`/src/store/index.ts`的`actions`中添加
```ts
  import { personalStore } from "./personal";
  export const mainStore = defineStore('main', {
  // ...
      actions: {
        getList() {
          // 获取其它store仓库中的state
          // Proxy {0: 'HE', 1: 'IS', 2: 'MING'}
          console.log(personalStore().list)
        }
      }
  }
```
并在组件中调用
```ts
<template>
 <div>
   <button @click="hanldeOtherStateList">get other state with(actions)</button>
 </div>
</template>

<script lang="ts" setup>
import { mainStore } from '../store';
const store = mainStore();

// 获取其它store中的state
const hanldeOtherStateList = () => {
  store.getList()
}
</script>
```

### 附上小Demo

```bash
src
  │  App.vue
  │  env.d.ts
  │  main.ts
  │
  ├─assets
  │      logo.png
  │
  ├─components
  │      ChangeStoreState.vue
  │      GetOtherStoreState.vue
  │
  └─store
         index.ts
         presonal.ts
```

`/src/main.ts`
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建 pinia 实例
const pinia = createPinia();
// 创建 vue 实例
const app = createApp(App)
// 挂载到 Vue 根实例上
app.use(pinia)

app.mount('#app')
```

`/src/store/index.ts`

```ts
import { defineStore } from "pinia";
import personalStore from "./presonal";

const mainStore = defineStore('main' ,{
  state: () => {
    return {
      name: 'liming',
      phone: '1234657980',
      sex: 'male',
      weight: '69kg',
    }
  },
  getters: {
    phoneHidden(state) {
        // 只显示了一次PhoneHidden被调用了
        // 调用多次，但是值一样就不会被多次调用，节约性能
        console.log('缓存的功能=>','PhoneHidden被调用了');
        // 用正则表达式替换*字符串实现手机号隐藏功能
        return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
      },
      // 使用TS时：如果不传state，ts无法推断出来返回数据类型，所以需要标注
      phoneHiddens(): String {
        console.log('缓存的功能=>','PhoneHidden被调用了');
        return this.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
      }
  },

  actions: {
    changeState() {
      this.name = 'heisming',
      this.phone= '1334571890'
    },
    getList() {
      return personalStore().list;
    }
  }
})
export default mainStore;
```

`/src/store/personal.ts`

```ts
import { defineStore } from "pinia";

const personalStore = defineStore('personal', {
  state: () => {
    return {
      list: ['HE', 'IS', 'MING']
    }
  }
})
export default personalStore;
```

`/src/App.vue`

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ChangeStoreState from './components/ChangeStoreState.vue';
import GetOtherStoreState from './components/GetOtherStoreState.vue';
import mainStore from './store';
const main = mainStore()

// 直接对store结构会导致失去响应式
/**
 * male 
 * 69kg
 */
// const { sex, weight } = main;

// 引入storeToRefs即可
/**
 * ObjectRefImpl {_object: Proxy, _key: 'sex', _defaultValue: undefined, __v_isRef: true} 
 * ObjectRefImpl {_object: Proxy, _key: 'weight', _defaultValue: undefined, __v_isRef: true}
 */
const { sex, weight } = storeToRefs(main);
console.log(sex, weight);

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  姓名：{{ main.name }}
  电话：{{ main.phone }}
  性别：{{ sex }}
  体重：{{ weight }}
  <h2>{{ main.phoneHidden }}</h2>
  <div>
    <change-store-state />
    <get-other-store-state />
  </div>
</template>
```

`/src/components/ChangeStoreState.vue`

```vue
<template>
  <div>
    <button @click="handleClick">click count++</button>
    <button @click="handleClickWithPatchObj">change state with($patch)</button>
    <button @click="handleClickWithPatchMethod">change state with($patch with methods)</button>
    <button @click="handleClickWithActions">change state with(actions)</button>
    <button @click="handleClickWithGetter">change state with(getters)</button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import mainStore from '../store';
const main = mainStore()

const handleClick = () => {
  main.name = 'barryLee';
}

const handleClickWithPatchObj = () => {
  main.$patch({
    name: main.name + '$patch',
  })
}

const handleClickWithPatchMethod = () => {
  main.$patch((state) => {
    state.name = 'react-liming'
  })
}

const handleClickWithActions = () => {
  main.changeState()
}

const handleClickWithGetter = () => {
  main.phone = '13675439366'
}

</script>
<script lang="ts">
defineComponent({ name: 'ChangeStoreState' })
</script>

<style scoped></style>

```

`/src/components/GetOtherStoreState.vue`

```vue
<template>
  <div>
    <ul>
       <li v-for="item in list" :key="item">{{item}}</li>  
    </ul>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue' 
import mainStore from '../store';
const list = mainStore().getList();

</script>

<style lang='scss' scoped>

</style>

```

### 后续补充
[setup](https://pinia.vuejs.org/zh/core-concepts/#setup-stores)函数式写法(组合式API)
```ts
import { defineStore } from "pinia";
import { ref } from 'vue'

const useAppStore = defineStore('app', () => {
  // state
  const token = ref('')

  // getter
  const tokenWithName = computed(() => `HEISMING${token.value}` )

  // action
  function change() {
    token.value = 'token is ready'
  } 

  return { token, tokenWithName, change }
})

export default useAppStore
```