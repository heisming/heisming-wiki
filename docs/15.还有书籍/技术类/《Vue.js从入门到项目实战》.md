# 随心记录

## page 24 => 数据响应式原理
> 在Vue中，最重要的概念就是响应式数据集；一方面指衍生数据和元数据之间的响应，通过数`数据链`来实现，另一方面指视图与数据之间的绑定。

### 数据链
> 数据链在学术上被定义为连通数据的链路。这条链路上有一个到多个数据起点（即`元数据`），并通过改点不断衍生拓展新的节点（衍生数据），形成一个庞大的网状结构。当你修改数据起点时，所有存在于网上的节点值都将同步更新。

**单一起点数据链**
| 元数据 | 网状节点 | 网状节点 |
|  ---- | ----    |  ----  |
|       | b=a*3-2 |  e=b+2 |
| a=3   | c=a%3+1 |  f=b+c |
|       | d=a%3   |  g=c-d |

**多起点数据链**
| 元数据 | 网状节点 | 网状节点 |
|  ---- | ----    |  ----  |
|       | c=a*2+2 |   |
| a=3   | d=a+b*2 |  f=c+d |
| b=4   | e=b/2   |  g=d-e |

## 函数式编程
元数据a与b通过变量声明即可获取：
```js
let a = 3, b = 4;
```
那么衍生数据怎么实现才能保证其值只依赖于元数据而不允许被外界修改呢？

这里就引出了函数式编程的概念：
一种结构化编程，力求将运算过程写成一系列嵌套的函数调用。（个人理解类似纯函数）

认定函数是“第一等公民”，可以赋值给其他变量，用作另一个函数的参数或者作为函数返回值来用。

函数体只包含运算过程，而且必带返回值。
```js
const double = function (num) {
  return num * 2;
}
```
### 核心
根据元数据生成新的衍生数据，提供唯一确定的输入，函数将返回唯一确定的输出，它并不会修改原有变量的值。这在运用javascript闭包概念进行开始时尤为重要，在函数作用域内调用域外或全局变量时不并不会修改它们的值，安全无污染（无副作用）。
```js
const x = (x = (x => x * 9)(x) + 3) (5)
const y = y => (y => y * 9) + 3
console.log(x); // 48
console.log(y(5)); // 48
```

Vue中的数据链：computed
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<style>
  p {
    width: 300px;
  }
  .data-label {
    width: 100px;
    margin-right: 30px;
  }
</style>
<body>
    <div id="app">
      <p><strong class="data-label">A</strong><input type="text" v-model="a"/></p>
      <p><strong class="data-label">B</strong><input type="text" v-model="b"/></p>
      <p><strong class="data-label">C=A*2+2</strong>{{c}}</p>
      <p><strong class="data-label">D=A+B*2</strong>{{d}}</p>
      <p><strong class="data-label">E=B/2</strong>{{e}}</p>
      <p><strong class="data-label">F=C+D</strong>{{f}}</p>
      <p><strong class="data-label">G=D-E</strong>{{g}}</p>
    </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        a: 3,
        b: 4
      }
    },
    computed: {
      c() {
        return this.a * 2 + 2
      },
      d() {
        return Number(this.a) + this.b * 2
      },
      e() {
        return this.b / 2
      },
      f() {
        return Number(this.c) + Number(this.d)
      },
      g() {
        return this.d - this.e 
      }
    },
    // 以函数的形式创建数据链以实现数据之间的响应
    methods: {
      getC (suf) {
        return this. a  * 2 + (suf || 2)
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>

```

## 数据绑定视图原理
下面是一个含有字符串类型属性的`profile`的对象:
```js
let obj = {
  profile: ''
}
```
作为对象属性profile仅仅是一个字符串吗？
看下图：
![](assets/images/profile.png)

我们可以使用Object API的 `defineProperty` 方法对其进行配置。对象属性配置项（描述符）如下表
| 名称 | 默认值 | 说明 | 
| --- | --- | --- |
| configurable | false | 标示属性配置是否可更改和该属性能否从对象中删除 |
| enumerable | false | 标示属性是否可被枚举 |
| writable | false | 标示属性是否可通过赋值运算符修改，不与set共存 |
| value | undefined | 属性值，可为任意Javascript数据类型，不与set共存 |
| **set** | undefined | 函数类型，属性被赋值时调用 |
| get | undefined | 函数类型，返回值将作为属性值 |

对象属性被赋值调用的set有何妙用？看代码
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <!-- <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script> -->
</head>
<body>
  <span id="harry" style="line-height: 32px;">&nbsp;</span><br>
  <input id="trigger" type="text" />
</body>
<script type="text/javascript">
  let harry = document.getElementById('harry');
  let trigger = document.getElementById('trigger');
  let key = 'profile'; // 对象属性键名
  let store = {} // 辅助get取值
  let obj = {  // 对象
    profile: ''
  }

  Object.defineProperty(obj, key, {
    set(value) {
      harry.innerText = value // 重点在此：修改DOM节点视图
      store[key] = value
    },
    get() {
      return  store[key]
    }
  })
  trigger.addEventListener('keyup', function() {
    obj[key] = this.value;
    console.log(obj[key]);
    // this指向trigger的DOM实例
    console.log(this);
  })

  // TODO Q:上面的代码与下面这段代码有什么区别呢？
  // trigger.addEventListener('keyup', function() {
  //   harry.innerText = this.value;
  // })
</script>
</html>

```
在上面的代码中，在对象属性的**setter**函数中修改文本节点的值，所以当obj.profile被重新赋值时，节点视图也会同步更新；然后对输入框添加事件监听，当用户事件触发时，输入值将被赋予obj.profile。
至此，我们实现了数据与视图之间的“双向绑定”。

在Vue2中，当我们把普通的js对象赋值给Vue实例的data选项时，Vue将遍历对象属性，并使用Object.defineProperty将其全部转换为getter/setter，并在组件渲染时将属性记录为依赖。之后当依赖项的setter函数被调用时，Vue会通知watcher重新计算并更新其关联的所有组件。
> 因为兼容性问题，Object.defineProperty是ES5中一个无法shim（自定义拓展）的特性，所以IE8以下无法使用Vue
![](assets/images/Object.defineProperty兼容性.png)

在Vue3中，用Proxy（ES6）替代了它，它支持开发者为一个对象定义一个Proxy对象，并定义其代理方法，而不破坏或改变对象的特性。语法如下：
```js
// target 需要被代理的对象
// handler 开发者自定义的代理方法
let p = new Proxy(target, handler);
```

代理一个空的对象的getter和setter，仅在其属性setter和getter被调用时输出一行日志，如下：
```js
let proxied = {};
let p = new Proxy(proxied, {
  get(target, property) {
    console.log(`${property} getter is called`);
    return property in target ? target[property] : 3;
  },
  set(target, property, value) {
    console.log(`${property} setter is called`);
    target[property] = value;
  }
});
p.name = 'test';
console.log(p.name);

// name setter is called
// name getter is called
// test
```

Vue3全面（IE11除外）使用Proxy取代了Object.defineProperty，性能Proxy更强。

无论是变量、表达式、执行函数 ，还是DOM代码，Vue都只将结果当文本处理。

## 事件绑定
```js
// Cannot read properties of undefined (reading 'log')
<button v-on:click="console.log('A Vue App')">输出消息</button>
// Cannot read properties of undefined (reading 'console')
<button v-on:click=" () => console.log('A Vue App')">输出消息</button>

```

V2中，这一行代码可以正常输出，V3不行，因为V3中这段代码在当前Vue视图对象作用域中运行，实际运行的是`this.console.log('A Vue App')`, 当前的Vue对象是没有这个console属性的。

### 获得事件对象
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <!-- 1.在事件函数不必传参时，可以这样写，注意：不能带() -->
    <input type="text" @keyup="handleKeyUp" />
    <br>
    <!-- 2.手动传入$event对象 -->
    <input type="text" @keyup="handleKeyUp($event)" />
  </div>
</body>
<script type="text/javascript">
  const app = {
    methods: {
      handleKeyUp (event) {
        console.log(event.key, event);
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>

```

运行上例代码：发现都输出了事件对象。

onclick和@click的区别：
- 事件绑定解决了不同浏览器之间的兼容问题；
- 事件绑定提供了语法糖——事件绑定修饰符。

### 常见事件修饰符
js原生：
```js
event.preventDefault(); // 阻止节点数默认行为
event.stopPropagation(); // 阻止事件冒泡
```
[Vue](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)封装后：
| 名称 | 可用版本 | 可用事件 | 说明 |
| ---- | ---- | ----| ----|
| .stop | 所有 | 任意 | 当事件触发时，阻止事件冒泡 |
| .prevent | 所有 | 任意 | 当事件触发时，阻止元素默认行为 |
| .capture | 所有 | 任意 | 当事件触发时，阻止事件捕获 |
| .self | 所有 | 任意 | 限制事件仅作用于节点自身 |
| .once | 2.1.4+ | 任意 | 事件被触发一次后即解除监听 |
| .passive | 2.3.0+ | 滚动 | 移动端，限制事件永不调用preventDefault()方法 |

上代码：
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <form @submit="handleSubmit">
      <h2>不使用修饰符时</h2>
      <button type="submit">提交</button>
    </form>
    <form @submit.prevent="handleSubmit">
      <h2>使用.prevent修饰符时</h2>
      <button type="submit">提交(.prevent)</button>
    </form>
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      handleSubmit () {
        console.log(`submit ${++this.counter} timers`);
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

点击<button>提交</button>可以看到页面不断刷新重载, 点击<button>提交(.prevent)</button>，可以看到控制台不停的输出累加值。

#### 多修饰符
当事件名称后有多个修饰符时，要注意修饰符的排列顺序，相应的代码会根据排列顺序依次产生。
`@click.prevent.self`：Vue先执行了event.preventDefault(), 因此会阻止元素上的所有单击事件；
`@click.self.prevent`: Vue先会配置event.self，只会阻止对元素自身的点击。

### 按键修饰符
V2允许将按键值作用修饰符来使用，如监听回车键（键盘13）是否被按下？
```html
  <input type="text" @keyup.13="console.log($event)" />
```
[V3](https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers)，已被遗弃，只提供常用别名按键修饰符
| 别名修饰符 | 对应按键 | 
| ---- | ---- |
| .delete | 回格/删除 |
| .tab | 制表 | 
| .enter | 回车 |
| .esc | 退出 |
| .space | 空格 | 
| .left | 左 |
| .up | 上 |
| .right | 右 |
| .down | 下 |
V3版：
```html
  <input type="text" @keyup.enter="() => console.log($event)" />
```

### 鼠标按键事件
| 别名修饰符|  可用版本 | 对应按键 | 
| ----   | ---- | ---- |
| .left     | 2.2.0+ | 左键 |
| .right    |  2.2.0+ | 右键 |
| .middle   |  2.2.0+ | 中键 |

### 组合修饰符
| 别名修饰符|  可用版本 | 对应按键 | 
| ----   | ---- | ---- |
| .ctrl     | 2.1.0+ | Ctrl |
| .alt    |  2.1.0+ | Alt |
| .shift   |  2.1.0+ | Shift |
| .meta   |  2.1.0+ | meat键(win===田) |

Demo: 
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h1 @click.ctrl="logWithCtrl" @click="logSingle">没有Ctrl别来点我</h1>
  </div>
</body>
<script type="text/javascript">
  const app = {
    methods: {
      logWithCtrl (event) {
        console.log(`---------分割线---------`);
        console.log(`$event.ctrlKey:`, event.ctrlKey);
        console.log('按住，是的；按住Ctrl');
      },
      logSingle() {
        if(!event.ctrlKey) {
          console.log(`---------分割线---------`);
          console.log(`$event.ctrlKey:`, event.ctrlKey);
          console.log('点我干啥，单身汪！');
        } else {
          console.log('不错，进步很快呀！');
        }
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

## 双向绑定❗
v-model：输入元素（input & textarea）创建双向数据绑定。
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
   <h3>单行文本框</h3>
   <input type="text" v-model="singleText" style="width: 240px"/>
   <p>{{singleText}}</p>
   <hr>

   <h3>多行文本框</h3>
   <textarea v-model="multiText" style="width: 240px"></textarea>
   <p>{{multiText}}</p>
   <hr>

   <h3>单选框</h3>
   <!-- 由于点击被选中的单选项无法取消其被选中的状态，所以实战中一般没有使用单个单选项的场景。
    这里，设置v-model共用一个变量(radioValue)可实现RadioGroup的效果
   -->
   <input id="ra" type="radio" value="杨玉环" v-model="radioValue" />
   <label for="ra">A.杨玉环</label>
   <input id="ra" type="radio" value="赵飞燕" v-model="radioValue" />
   <label for="rb">B.赵飞燕</label>
   <p>{{radioValue}}</p>
   <hr>

   <h3>单个复选框</h3>
   <!-- 单个复选框被用于true和false的切换 -->
   <input id="c" type="checkbox" v-model="toggleValue" />
   <label for="c">天生丽质</label>
   <p>{{toggleValue}}</p>
   <hr>

   <h3>多个复选框</h3>
   <!-- 多个复选框，v-model接受数组类型变量 -->
   <input id="ca" type="checkbox" value="漂亮" v-model="checkedValues" />
   <label for="ca">A.回眸一笑百媚生</label>
   <input id="cb" type="checkbox" value="瘦弱" v-model="checkedValues" />
   <label for="cb">B.体轻能为掌上舞</label>
   <input id="cc" type="checkbox" value="得宠" v-model="checkedValues" />
   <label for="cc">C.三千宠爱在一身</label>
   <p>{{ checkedValues.join(',') }}</p>
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        singleText: '',
        multiText: '',
        radioValue: '',
        toggleValue: false,
        checkedValues: []
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

#### 下拉选择框
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
   <h3>下拉选择框</h3>
   <select v-model="singleSelect">
    <!-- 如果没有设置value,则option节点的文本值会被当做value值 -->
    <option value="汉代">汉代</option>
    <option>唐代</option>
   </select>
   <p>{{singleSelect}}</p>
   <hr>

   <h3>多选下拉选择框</h3>
   <select multiple v-model="multiSelect">
    <!-- 按住Ctrl键,可执行多选 -->
    <option value="1">出生微寒</option>
    <option value="2">饱受争议</option>
    <!-- TODO why? -->
    <option :value="3">结局悲凉</option>
   </select>
   <p>{{multiSelect.join(',')}}</p>
   <hr>
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        singleSelect: '唐代', // 根据value设置默认
        multiSelect: [1, 3]
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

#### 修饰符
| 修饰符 | 可用版本 | 说明 |
| ---- | ---- | ---- |
| .lazy | 所有 | 将用户输入的数据赋值于变量的时机由输入时延迟到数据改变时|
| .number | 所有 | 自动转换用户输入为数值类型 |
| .trim | 所有 | 自动过滤用户输入的收尾空白字符 |
```html 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <input type="text" v-model.number="num" @keyup="handleKeyUp" />
    <input type="text" v-model.lazy="lazy" @keyup="handleLazy" />
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        num: '',
        lazy: '',
      }
    },
    methods: {
      handleKeyUp() {
        // let x = parseFloat(this.num);
        console.log(this.num, typeof this.num);
      },
      handleLazy() {
        console.log(this.lazy, typeof this.lazy);
      }
    }
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

#### 自定义组件
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <!-- 自定义组件v-model -->
    <custom-screen v-model="text"></custom-screen>
    <br>
    <!-- 原生元素v-model-->
    <input type="text" v-model="text" />
  </div>
</body>
<script type="text/javascript">
  const app = Vue.createApp({
    data() {
      return {
        text: ''
      }
    },
  })
  app.component('custom-screen', {
    props: ['modelValue'],
    methods: {
      handleReset () {
        console.log('重置为\'\'');
        this.$emit('update:modelValue', '');
        // 使用$emit发送update:modelValue事件，并将目标值作为参数传出
      }      
    },
    template: `
      <div>
        <h2>输入值为： {{ modelValue }}</h2>
        <button @click="handleReset">重置为空</button>
      </div>
    `
  })
  app.mount('#app');
</script>
</html>
```
V3,自定义组件的modelValue属性和update:modelValue事件尤为重要，它们分别负责不同的数据传递。modelValue属性用于接收外部传入的值,以更新组件的内部状态。

## v-if和v-show
条件渲染与`display:none`控制
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2 v-show="visible">v-show, visible = true</h2>
    <h2 v-show="!visible">v-show, visible = false</h2>
    <h2 v-if="visible">v-if, visible = true</h2>
    <h2 v-if="!visible">v-if, visible = false</h2>
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        visible: false
      }
    },
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```
v-show并不能算作真正的条件渲染，因为挂载它的多个元素之间并没有条件上下文关系。

v-if没有DOM，v-show是有DOM的。注意以下几点：
- v-if会在切换中将组件上的事件监听器和子组件销毁和重建。当组件被销毁时，该组件将无法被任何方式获取，因为它不存在于DOM中。
- 在创建父组件时，如果子组件的v-if被判定为假，则Vue不会对子组件做任何事情，知道第一次判断为真时。这在使用Vue生命周期钩子函数时要尤为注意，如果Vue生命周期已走过组件创建的阶段却仍无法获取组件对象，应该想一想是不是v-if在作怪。
- v-show有更高的初始渲染开销，而v-if有更高的切换开销，这与它们的实现机制有关。使用它们时要多加考虑具体的应用场景。
- v-show不支持template元素

## v-for
除了渲染数组之外，还可以渲染一个对象的键值对
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2>用户列表</h2>
    <ul>
      <!-- index作为第二个参数，用于标示下标 -->
      <li v-for="(user, index) in users">
        用户{{ index + 1 }}
        <ul>
          <!-- key作为第二个参数，用于标示键名 -->
          <li v-for="(value, key) of user">{{ key }}:&nbsp;{{ value }}</li>
          <li v-for="(value, index) of user">{{ index }}:&nbsp;{{ value }}</li>
        </ul>
      </li>
    </ul>
  </div>
</body>
<script type="text/javascript">
  const app = {
    data() {
      return {
        users: [
          { name: 'Clark', age: 27, city: 'Chicago' },
          { name: 'Jackson', age: 28, city: 'Sydney'}
        ]
      }
    },
  }
  Vue.createApp(app).mount('#app');
</script>
</html>
```

Vue会把数组当做被观察者加入响应式系统中，`当调用一些方法修改数组时，对应的视图将会同步更新`。
与数据响应有关的数组方法
| 名称 | 说明 |
|----| ---- |
| push | 将一个或多个元素添加至数组末尾，并返回新数组的长度 |
| pop | 从数组中删除并返回最后一个元素 |
| shift | 从数组删除并烦恼会第一个元素 |
| unshift | 将一个或多个元素添加至数组开头，并返回新数组的长度 |
| splice | 从数组中删除元素或向数组添加元素 |
| sort | 对数组元素进行排序，默认按照Unicode编码排序，返回排序后的数组（localeCompare） |
| reverse | 将数组中的元素位置颠倒，返回颠倒后的数组 |

### 列表渲染的中的key
每个迭代元素都应该有一个不重复的key。
当列表渲染被重新执行（数组内容发生变化）时，如果不使用key，则Vue会为数组成员就近复用已存在的DOM节点，
```js
// 不使用key时
{
  arr-number1 : DOM1,
  arr-number2 : DOM2,
  arr-number3 : DOM3,
}
// 当数组内容发生变化时
{
  arr-number3 : DOM1,
  arr-number1 : DOM2,
  arr-number2 : DOM3,
}
```
当使用key时，Vue会根据key的变化重新排列节点顺序，并将移除key不存在的节点
```js
// 使用key时，身份追踪
{
  arr-number1 : DOM1,
  arr-number2 : DOM2,
  arr-number3 : DOM3,
// 当数组内容发生变化时
}
{
  arr-number3 : DOM3,
  arr-number1 : DOM1,
  arr-number2 : DOM2,
}
```
实质上，key的存在是为DOM节点标注一个身份信息，让Vue能够有迹可循追踪到数据对应的节点。
实战开发中，是否使用key不会影响功能的实现，不过在2.2.0+的版本中，会有警告。

## Vue选项

### data数据选项
在V2中，data数据选项可接受的类型有对象和函数两种。不过我们在定义组件的时候使用函数类型。
在V3中，所有类型必须是函数。
```html
<div id="app">
  <h1>{{ title}}</h1>
  <button-counter></button-counter>
</div>
<script>
  const app = Vue.createApp({
    data () {
      return {
        title: 'A Vue App'
      }
    }
  })
  app.component('button-counter', {
    // 必须使用函数类型
    data () {
      return {
        counter: 1
      }
    },
    template: `
    <button @click="counter++"> {{ counter }} timers</button>
    `
  });
  app.mount('#app')
</script>
```

在Vue中声明组件时，如果使用了对象类型的data选项，则模板将找不到在data中被声明的数据；如果使用了支持Vue模板的语法检查器，则会得到错误提示————“data property is component must be a function”
Vue会递归的将data选项中的数据加入响应式系统，在V2中，这些数据应该是声明时即存在得到，在V3中，数据也可以在运行时声明。
```html
<div id="app"> 
  <h2>{{ title }}</h2>
  <p> {{ profile }}</p>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js"></script>
<script>
  let vm = new Vue({
    el: '#app',
    data () {
      return {
        title: 'A Vue App'
      }
    },
    created () {
      Object.assign(this.$data ,{
        profile: 'This is a Vue App'
      })
      console.log(this.$data);
    }
  })
</script>
```
运行结果:
```bash
# <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
vue.js:5062 [Vue warn]: Property "profile" must be accessed with "$data.profile" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data

(found in <Root>)

# <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js"></script>
ReferenceError: profile is not defined
    at xr.eval (eval at ac (vue.min.js:11:104187), <anonymous>:3:101)
    at t._render (vue.min.js:11:44924)
    at xr.r (vue.min.js:11:78772)
    at t.get (vue.min.js:11:27616)
    at new t (vue.min.js:11:27529)
    at vue.min.js:11:78786
    at xr.$mount (vue.min.js:11:79004)
    at xr.$mount (vue.min.js:11:106346)
    at e._init (vue.min.js:11:42495)
    at new xr (vue.min.js:11:39571)
```

解析：title是初始化实例时在data选项中声明的数据，而profile是在created钩子函数中被赋予data选项的。Vue在处理数据时，并未把profile加入数据响应式系统。

然而在V3中，profile可以被观察到。
```html
<div id="app">
    <h2>{{ title }}</h2>
    <p> {{ profile }}</p>
</div>
<script type="text/javascript">
  const app = {
    data () {
      return {
        title: 'A Vue App'
      }
    },
    created () {
      Object.assign(this.$data ,{
        profile: 'This is a Vue App'
      })
      console.log(this.$data);
    }
  }
  Vue.createApp(app).mount('#app')
```

```bash
Proxy {title: 'A Vue App', profile: 'This is a Vue App'}
> [[Handler]]: Object
﹀ [[Target]]: Object
  profile: "This is a Vue App"
  title: "A Vue App"
> [[Prototype]]: Object
[[IsRevoked]]: false
```

可以用Object.assign为data选项动态绑定数据
```js
const app = {
  data() {
    return {
      title: 'A Vue App',
      obj: {}
    }
  },
  created() {
    Object.assign(this.obj,{
      profile: 'This is a Vue App'
    });
    console.log('created', this.obj);
  },
  mounted() {
    Object.assign(this.obj,{
      profile: 'This is a Test Vue App'
    });
    console.log('mounted', this.obj);
  },
  methods: {
    toggle () {
      Object.assign(this.obj,{
        profile: 'This is a Vue App for test.'
      });
      console.log('toggle', this.obj);
    }
  },
}
```
TODO
思考，`Object.assign(this.obj, { profile: '' })`与`this.obj.profile`有什么区别？

>❗慎重将已有内存地址的对象或函数用于data选项

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <!-- 调用两次组件 -->
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</body>
<script type="text/javascript">
  let jack = { counter: 0 }
  const app = Vue.createApp({})
  app.component('button-counter', {
    data () {
      return jack
      // 不要将已有内存地址的对象用于data选项，无论使用哪种方式，都是为实例的data选项分配一个新的内存地址
      // return counter: 0
      // return JSON.parse(JSON.stringify(jack)) // 深拷贝
    },
    template: `
    <button @click="counterAdd">click {{ counter }} times</button>
    `,
    methods: {
      counterAdd () {
        this.counter++ 
        console.log('\'click\'')
      }
    }
  })
  app.mount('#app')
</script>
</html>
```

由于button-counter组件在声明时，jack对象被用作data选项的根节点，`所有实例将共享jack对象占用的地址`。
因此，当修改一个实例的数据时，所有实例的数据都将同步更新。

### 属性选项props

可以是数组或者对象类型，用于接收父组件传递过来的参数，并允许开发者为其设置默认值，类型监测和校验规则

```html
  <div id="app">
    <!-- 无color，默认#000 -->
    <color-text text="Hello World"></color-text>
    <br>
    <!-- 无text -->
    <color-text></color-text>
    <br>
    <!-- 正确 -->
    <color-text color="#f78" text="Hello World"></color-text>
    <br>
    <!-- 错的color，默认#000 -->
    <color-text color="#43dt" text="Hello World"></color-text>
    <br>
  </div>
<script type="text/javascript">
  const app = Vue.createApp({})
  app.component('color-text', {
    props: {
      text: String,
      color: {
        type: String,
        default: '#000',
        required: true,
        validator(value) {
          return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
        }
      }
    },
    template: `
    <span :style="{ color: color }">{{ text }}</span>
    `
  })
  app.mount('#app')
</script>
```

### 方法选项methods
```js
/**
 * -----------匿名函数-----------
 * > { msg: 'Hello World', logMsg: f }
 * Hello World
 */
let store1 = {
  msg: 'Hello World',
  logMsg: function () {
    console.log('-----------匿名函数-----------\n', this);
    console.log(this.msg);
  }
}
store1.logMsg();
/**
 * -----------箭头函数-----------
 * > Window { postMessage: f, blur: f, focus: f, close: f, frames: window, ... }
 * undefined
 */
let store2 = {
  msg: 'Hello World',
  logMsg: () => {
    console.log('-----------箭头函数-----------\n', this);
    console.log(this.msg);
  }
}
```
使用箭头函数定义方法时并不会创建函数作用域，因此this也不会指向其父级实例，此时的this会向上追踪。当找到某个函数作用域时，this将指向该函数的父级实例；否则，this将指向浏览器的内置对象Window。

Q:
```js
let store = {
  msg: '学习',
  logMsg: () {
    let store = {
      msg: '加油',
      logMsg: () => {
        let store = {
          msg: '别放弃',
          logMsg: () => {
            console.log(this.msg);
          }
        }
        store.logMsg();
      }
    }
    store.logMsg();
  }
}
store.logMsg();
```
A：<input type="text" /> 
>❗hint：不要使用箭头函数在其中定义方法。
在创建组件时，methods中的方法将被绑定到Vue实例上，方法中的this也将自动指向Vue实例
如果使用了箭头函数，this将无法正确的指向Vue实例。

### 计算属性computed
>设计初衷在于减轻模板上的业务负担，当数据链上出现复杂衍生数据时，更易维护。




