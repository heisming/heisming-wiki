# Vue.js

## Vue基础-上

### 0-hi~vue

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hi~vue</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="root"></div>
   
</body>
<script>
    // 面向数据编程
    const app = Vue.createApp({
        data(){
           return {
               show:true,
               content:'hi~',
               list:['a','b','c','d'],
               inputValue :''
            }
        },
        methods:{
            // 反转
            handleBtnClick(){
                this.content = this.content.split('').reverse().join('');
            },
            // 隐藏
            handleBtnNone(){
                this.show = !this.show;
            },
            // 增加
            handleAddItem(){
                this.list.push(this.inputValue);    
                this.inputValue = '';      
            },
            // //
            // inputValue(){
            // }
        },
        template:`
        <div>
            {{content}}
            <input v-model="inputValue" />
            <span v-if="show">哈哈哈哈哈哈</span>
            <button v-on:click = "handleBtnClick" >反转</button>
            <button v-on:click = "handleBtnNone" >隐藏/显示</button>
            <button v-on:click = "handleAddItem" v-bind:title="inputValue" >增加{{inputValue}}</button>
            <ul>
                <todo-item 
                v-for="(item,index) of list" 
                v-bind:content="item"
                v-bind:index ="index"
                ></todo-item>
            </ul>
        </div>
        `
    });

    // 组件化
    app.component('todo-item',{
        // data(){
        //     return{
        //         item:'hello ming'
        //     }
        // },
        props:['content','index'],
        template: '<li>{{index}}{{content}}</li>'
    });
    // 上树
    app.mount('#root');
    
</script>
</html>
```



### 1-Vue中应用和组件的基础概念

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue中应用和组件的基础概念</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root"></div>
</body>
<script>
    // 面向数据编程
    // createApp 表示创建一个 Vue 应用, 存储到 app 变量中
    // 传入的参数表示，这个应用最外层的组件，应该如何展示
    // MVVM 设计模式，M -> Model 数据， V -> View 视图， VM -> ViewModel 视图数据连接层
    const app = Vue.createApp({
        // M -> Model 数据
        data() {
            return {
                message: 'hello'
            }
        },
        // V -> View 视图
        template: '<div>{{message}}</div>'
    });
    // vm 代表的就是 Vue 应用的根组件
    const vm = app.mount('#root');

</script>

</html>
```



### 2-Vue中的生命周期函数

![](D:\大前端学习\MarkDown\0基础\vuereact\lifecycle.png)

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue中的生命周期函数</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root">
        <div>{{message}}</div>
    </div>
</body>
<script>
    const app = Vue.createApp({
        data() {
            return {
                message: 'hello world'
            }
        },
        // 在实例生成之前会自动执行的函数
        beforeCreate() {
            console.log('beforeCreate')
        },
        // 在实例生成之后会自动执行的函数
        created() {
            console.log('created')
        },
        // 在组件内容被渲染到页面之前自动执行的函数
        beforeMount() {
            console.log('beforeMount:',document.getElementById('root').innerHTML)
        },
        // 在组件内容被渲染到页面之后自动执行的函数
        mounted() {
            console.log('mounted:',document.getElementById('root').innerHTML)
        },

        // 在控制台中改变message的值：vm.$data.message ='bay'

        // 当数据发生变化时会立即自动执行的函数
        beforeUpdate() {
            console.log('beforeUpdate:',document.getElementById('root').innerHTML);
        },
        // 当数据发生变化，页面重新渲染后，会自动执行的函数
        updated() {
            console.log('updated:',document.getElementById('root').innerHTML,);
        },

        // 控制台中使用app.unmount()

        // 当 Vue 应用失效时，自动执行的函数
        beforeUnmount() {
            console.log('beforeUnmount:',document.getElementById('root').innerHTML,);
        },

        // 当 Vue 应用失效时，且 dom 完全销毁之后，自动执行的函数
        unmounted() {
            console.log('unmounted:',document.getElementById('root').innerHTML);
        },
        // template:'<div>{{message}}</div>'
    });
    
    const vm = app.mount('#root');
</script>

</html>
```



### 3-常用模版语法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>常用模版语法</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // {{}} 插值表达式
  // v-html，v-bind等于(:)，v-on等于(@), v-model
  // v-once 数据只渲染一次
  // 动态参数 [name] 很少用了解即可
  // 修饰符：prevent

  // v-bind：和元素的属性、数据进行单向绑定 title、disabled等
  // v-once：元素只渲染一次，后面数据改变也不会重新渲染
  // v-model：数据的双向绑定
  // v-if：条件渲染，会直接销毁元素
  // v-show：条件展示和隐藏，会display:none
  // v-on: 事件指令，v-on:click === @click,@click.prevent === e.preventDefault()
  // v-html: 将数据中含有html代码的数据进行解析展示 => message: "<strong>hello world</strong>"
  // 动态数据参数 [name]
  const app = Vue.createApp({
    data() {
      return {
        message: "<strong>hello world</strong>",
        toast: "hello world",
        isDisable: true,
        show: false,
        name: 'title'
      }
    },
    methods: {
      handleClick(e) {
        // 阻止默认行为（@click.prevent）
        // e.preventDefault();
        alert('click')
      }
    },
    template: `
      <input v-bind:disabled="isDisable" />
      <div v-once>{{'v-once:' + message}}</div>
      <div v-if="show">{{'v-if="show":' + message}}</div>
      <div v-html="message" v-bind:[name]="toast"></div>
      <form action="https://www.baidu.com" @click.prevent="handleClick">
        <button type="submit">提交</button>
      </form>
    `
  });
  const vm = app.mount('#root');
</script>

</html>
```



### 4-数据，方法，计算属性和侦听器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>数据，方法，计算属性和侦听器</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // data & methods & computed & watcher
  // computed 和 method 都能实现的一个功能，建议使用 computed，因为有缓存
  // computed 和 watcher 都能实现的功能，建议使用 computed 因为更加简洁

  // 使用方法，控制台输入：vm.$data.count = 44
  const app = Vue.createApp({
    //数据
    data() {
      return {
        message: "hello world",
        count: 2,
        price: 5,
        newTotal: 10,
      }
    },
    // 侦听器（异步操作setTimeout）
    watch: {
      // price 发生变化时，函数会执行
      price(current, prev) {
        this.newTotal = current * this.count;
        console.log(current,prev);
      }
    },
    // 计算属性（推荐★★★）
    computed: {
      // 当计算属性依赖的内容发生变更时，才会重新执行计算
      total() {
        return Date.now() + this.count;
        // return this.count * this.price
      }
    },
    // 方法
    methods: {
      formatString(string) {
        return string.toUpperCase();
      },
      // 只要页面重新渲染，就会重新计算
      getTotal() {
        return Date.now();
        // return this.count * this.price;
      },
    },
    template: `
     <div> {{message}} {{newTotal}} </div>
     <div> {{formatString(message)}} </div>
     <div> {{getTotal()}} </div>
     <div> {{total}} </div>
    `
  });
  const vm = app.mount('#root');
</script>
</html>
```



### 5-样式绑定语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>样式绑定语法</title>
  <style>
    .red {
      color: red;
    }
    .green {
      color: green;
    }
    .brown {
      color: brown;
    }
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>

  // v-bind:style === :style
  // v-bind:class === :class
  const app = Vue.createApp({
    data() {
      return {
        // 字符串:class="classString" => <div class="red"> Hello World </div>
        classString: 'red',
        // 对象:class="classObject" => <div class="red green"> Hello World </div>
        classObject: { red: true, green: true },
        // 数组:class="classArray" => <div class="red green brown"> Hello World </div>
        classArray: ['red', 'green', {brown: true}],
        
        // 内联样式
        // 字符串:style="styleString" => <div style="color: yellow; background: orange;"> Hello World </div>
        styleString: 'color: yellow;background: orange',
        // 对象:style="styleObject" => <div style="color: orange; background: yellow;"> Hello World </div>
        styleObject: {
          color: 'orange',
          background: 'yellow'
        }
      }
    },
    template: `
      <div :style="styleObject">
        Hello World
        <demo class="green"/>
        <demo :class="classArray"/>
      </div>
    `
  });

  // 被调用的组件是子组件
  app.component('demo', {
    // :class="$attrs.class"，子组件样式是调用我的父组件上的class值
    template: `
      <div :class="$attrs.class">one</div>
      <div :class="$attrs.class">two</div>
    `
  })

  const vm = app.mount('#root');
</script>
</html>

```



### 6-条件渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>条件渲染</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return {
        show: false,
        conditionOne: false,
        conditionTwo: true
      }
    },
    // v-if是通过《移除DOM元素》进行隐藏和显示（会销毁DOM元素）
    // v-show是通过《DOM元素的样式display属性》来控制的隐藏和显示（不会销毁DOM元素）
    template: `
      <div v-if="conditionOne">if</div>
      <div v-else-if="conditionTwo">elseif</div>
      <div v-else>else</div>
      
      <div v-if="show">Hello World</div>
      <div v-show="show">Bye World</div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>

```



### 7-列表循环渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>列表循环渲染</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return {
        listArray: ['dell', 'lee', 'teacher'],
        listObject: {
          firstName: 'dell',
          lastName: 'lee',
          job: 'teacher'
        }
      }
    },
    methods: {
      handleAddBtnClick() {
        // 1. 使用数组的变更函数 push, pop, shift, unshift, splice, sort, reverse
        // this.listArray.push('hello');
        // this.listArray.pop();
        // this.listArray.shift();
        // this.listArray.unshift('hello');
        // this.listArray.reverse();

        // 2. 直接替换数组
        // this.listArray = ['bye', 'world']
        // filter过滤
        // this.listArray = ['bye', 'wolrd'].filter(item => item === 'bye');

        // 3. 直接更新数组的内容
        // this.listArray[1] = 'hello'

        // 直接添加对象的内容，也可以自动的展示出来
        // this.listObject.age = 100;
        // this.listObject.sex = 'male';
      }
    },
    // 循环优先级大于if template占位符（类似小程序的block）,不要浪费用div标签
    template: `
      <div>
        <template v-for="(value, key, index) in listObject"  :key="index">
        <div v-if="key !== 'lastName'">
            {{value}} -- {{key}}
        </div>
        </template>

        <div v-for="item in 10">{{item}}</div>

        <button @click="handleAddBtnClick">新增</button>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>

```



### 8-事件绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件绑定</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // event, $event
  // 事件修饰符：stop, prevent, capture, self, once, passive
  // 按键修饰符：enter, tab, delete, esc, up, down, left, right
  // 鼠标修饰符：left, right, middle
  // 精确修饰符：exact
  const app = Vue.createApp({
    data(){
      return {
        counter:1
      }
    },
    methods: {
      handleClick() {
        console.log('click')
      },
      handleDivClick() {
        alert('div clicked')
      },
      handleDivSelfClick() {
        alert('div self clicked')
      },
      handleBtnClick(num,event){
        console.log(event.target);
        this.counter += num;
      },

      // 键盘事件函数
      handleEnterKeydown(event){
        console.log('狂按enter');
      },
      //鼠标事件
      handleRightMouse(event){
        console.log('狂按鼠标右键');
      },
      //精准事件: 只能ctrl键+click 
      handleCtrlClick(event){
        console.log('Ctrl+鼠标单击');
      },
    },
    template: `
      <div @click="handleDivClick">
        <div @click.ctrl.exact="handleClick">123</div>
        <div @click.ctrl.exact="handleClick">123</div>
        {{counter}}
        <button @click="counter += 1">button</button>
        <button @click="handleBtnClick(2,$event)">myself</button>
        <button @click.stop=" handleClick(),handleBtnClick(2,$event)">double</button>
      </div>
      <div @click.self="handleDivSelfClick">
          {{counter}}
          <button @click="handleClick">button</button>
      </div>
      
      <div>
          <input @keydown.enter="handleEnterKeydown"/>
      </div>
      
      <div>
          <div @click.right="handleEnterKeydown">鼠标左键鼠标右键鼠标滚轮</div>
      </div>

      <div>
          <div @click.ctrl.exact="handleCtrlClick">鼠标左键鼠标右键鼠标滚轮</div>
      </div>
    `
  });
  const vm = app.mount('#root');
</script>
</html>
```



### 9-表单中双向绑定指令的使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>表单中双向绑定指令的使用</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>

</body>
<script>
  // input, textarea, checkbox, radio, select
  // 修饰符 lazy, number, trim
  const app = Vue.createApp({
    data() {
      return {
        options: [
          {
            text: 'kevin', value: {value:'kevin'}
          }, {
            text: 'jason', value: 'jason'
          }, {
            text: 'linda', value: 'linda'
          }
        ],
        message: 'hello',
        messageAry: [],
        messageRadio: '',
        messageSelect: '',
        messageStr:'world'
      }
    },
    template: `
      <div>
        {{typeof message}}
        <input v-model.trim="message"  />
        <input v-model.number="message" type="number" />
        <textarea v-model.lazy="message"  />
      </div>
      <div>
        {{messageAry}}
        kevin<input type="checkbox" v-model="messageAry" value="kevin"/>
        jason<input type="checkbox" v-model="messageAry" value="jason"/>
        linda<input type="checkbox" v-model="messageAry" value="linda"/>
      </div>
      <div>
        {{messageRadio}}
        kevin<input type="radio" v-model="messageRadio" value="kevin"/>
        jason<input type="radio" v-model="messageRadio" value="jason"/>
        linda<input type="radio" v-model="messageRadio" value="linda"/>
      </div>
      <div>
        {{messageSelect}}
        <select v-model="messageSelect" >
          <option disabled value="">请选择内容</option>
          <option v-for="item in options" :value="item.value">{{item.text}}</option>
        </select>
      </div>
      <div>{{messageStr}}
        <input type="checkbox" v-model.trim="messageStr" true-value='hello' false-value="world" />
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



### 浅谈Vue和小程序双向绑定的理解？

```html
<!-- 
1.设置值
《在vue中》,只需要再表单元素上加上v-model,然后再绑定data中对应的一个值，当表单元素内容发生变化时，data中对应的值也会相应改变。
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>双向绑定</title>
    <script src="vue.js"></script>
</head>
<body>
    <div id="root">
        <input type="text" v-model="val" name="" placeholder="请输入">
        <p>{{val}}</p>
    </div>
</body>
<script>
    var app = Vue.createApp({
        el: '#app',
        data: {
            val: ''
        }
    })
const vm = app.mount('#root');
</script>
</html>

《在小程序中》,当表单内容发生变化时，会触发表单元素上绑定的方法，然后在该方法中，通过this.setData({key:value})来将表单上的值赋值给data中的对应值。

wxml部分：
<input bindinput="bindVal" placeholder="请输入" value='{{val}}' name="" />  
<view>{{val}}</view>

js部分：
Page({  
data:{  
    val:''  
},  
bindVal(e) {  
    this.setData({  
      val: e.detail.value  
    })  
  }  
}) 


2.取值
在vue中，通过this.reason取值；
小程序中，通过this.data.reason取值。


3.总结流程：
小程序中的数据双向绑定
1、首先通过 bindinput 绑定文本框的输入事件 
2、在 data 中声明一个变量 content ，将其动态绑定成文本框的 value 值
3、在 bindinput 事件中通过事件参数 e.detail.value 可以获取到文本框中最新的 value 值
4、通过 this.setData 将文本框最新的  value 值 赋值给 动态绑定的value值 content  即可实现数据的双向绑定

vue中的数据双向绑定
1、首先为文本框绑定@input 监听文本框的输入事件
2、为文本框动态绑定value 属性，其值是在data中定义的变量
3、在@input绑定的事件中 通过事件参数 event.target.value 可以获取到 input 框中最新的value值
4、将其重新获取到的value 赋值给 value值动态绑定的那个变量

-->
```





## Vue基础-中

### 过渡与动画

#### 0-Vue实现基础的CSS过渡与动画效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue实现基础的CSS过渡与动画效果</title>
  <style>
     /* 动画 */
    @keyframes leftToRight {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(-50px);
      }
      100% {
        transform: translateX(-100px);
      }
    }

    .animation {
      animation: leftToRight 1.3s  linear 0s  2 alternate;
    }

    /* 过渡 */
    .transition {
      transition: background-color 1.3s ease 0s;
    }
    .blue {
      background: blue;
    }
    .green {
      background: green;
    }

  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>

  // 改变数据的值来改变CSS的样式
  const app = Vue.createApp({
    data() {
      return {
        animate:{
          animation:false
        },
        styleObj: {
          background: 'red'
        }
      }
    },
    methods: {
      // <div class="transition" style="background: blue;">hello world</div>
      // <div class="transition" style="background: green;">hello world</div>
      handleClick() {
        if(this.styleObj.background === 'blue') {
          this.styleObj.background = 'green';
        }else {
          this.styleObj.background = 'blue'
        }
      },
      // <div class="animation">看我的</div>
      handleAnimation(){
        this.animate.animation = !this.animate.animation;
      }
    },
    template: `
      <div>
        <div :class="animate">看我的</div>
        <button @click="handleAnimation">切换</button>
      </div>
      <div>
        <div class="transition" :style="styleObj">hello world</div>
        <button @click="handleClick">切换</button>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>

```



#### 1-使用transition标签实现单元素组件的过渡和动画效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>使用transition标签实现单元素组件的过渡和动画效果</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <style>
    /* 动画 */
    @keyframes shake {
      0% {
        transform: translateX(100px)
      }
      50% {
        transform: translateX(50px)
      }
      100% {
        transform: translateX(0px)
      }
    }

    /* name-xxx- */
    .hello-leave-active {
      animation: shake 1.3s linear 0s alternate;
    }
    .hello-enter-active {
      animation: shake 1.3s linear 0s;
    }

    /* v-xxx-过渡 */
    .v-enter-from{
      opacity: 0;
    }
    .v-leave-active,
    .v-enter-active{
      transition: opacity 2s linear 0s;
    }
    .v-enter-to{
      opacity: 1;
    }
    .v-leave-to{
      opacity: 0;
    }

    /* 过渡和动画不同时 */
    .v-enter-from {
      color: red;
    }
    .v-enter-active {
      animation: shake 3s;  
      transition: color 10s ease-in;
    }
    .v-leave-active {
      color: red;
      animation: shake 3s;
      transition: all 10s ease-in;
    } 
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 单元素，单组件的入场出场动画
  const app = Vue.createApp({
    data() {
      return {
        show: false
      }
    },
    methods: {
      handleClick() {
        this.show = !this.show;
      },
      // JS写动画
      handleBeforeEnter(el) {
        el.style.color = "red";
      },
      handleEnterActive(el, done) {
        const animation = setInterval(() => {
          const color = el.style.color;
          if(color === 'red') {
            el.style.color = 'green';
          } else {
            el.style.color = 'red';
          }
        }, 1000)
        setTimeout(() => {
          clearInterval(animation);
          // 告诉transition动画执行结束了
          done();
        }, 3000)
      },
      handleEnterEnd(el) {
        alert(123);
      }
    },
    // 给个name替换v（去掉name属性可看到v属性）
    // 偏向一个动画时长属性：<transition type="transition/animation" ></transition>
    // 自定义动画时长 :duration="{enter:1000, leave:2000}"
    // animate__animated 动画库
    // :css="false" 属性关闭CSS动画效果
    // 钩子：@before-leave
    // @leave
    // @after-leave
    template: `
      <div>
        <transition name="hello" 
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__flash"
        @before-enter="handleBeforeEnter"
        @enter="handleEnterActive"
        @after-enter="handleEnterEnd"
        >
          <div v-if="show">hello world</div>
        </transition>
        <button @click="handleClick">切换</button>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 2-组件和元素切换动画的实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <title>组件和元素切换动画的实现</title>
  <style>
    .v-leave-to {
      opacity: 0;
    }
    .v-enter-from {
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: opacity 1s ease-in;
    }
    .v-leave-from ,
    .v-enter-to {
      opacity: 1;
    }
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  
  // 多个单组件之间的切换
  const ComponentA = {
    template: '<div>hello world</div>'
  }
  // 局部组件
  const ComponentB = {
    template: '<div>bye world</div>'
  }

  const app = Vue.createApp({
    data() {
      return { component: 'component-a',show:false }
    },
    methods: {
      handleClick() {
        this.show = !this.show;
        //动态组件
        if(this.component === 'component-a') {
          console.log(1);
          this.component = 'component-b';
        }else {
          this.component = 'component-a';
        }
      },
    },
    // 局部组件需要在components中注册才可以被使用
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB,
    },

    // 多个单元素标签之间的切换
    // 顺序切换：mode="out-in"固定属性
    // 刚进入页面有动画展示：appear属性

    // 动态组件
    //  <component :is="component" />

    // 静态组件
    // <component :is="component" />
    // 或者
    // <component-a v-if="show" />
    // <component-b v-else />
    // <transition> can only be used on a single element or component.
    template: `
      <div>
        <transition mode="out-in" appear>
          <div v-if="show">hello liming</div>
          <div v-else>bye liming</div>
        </transition>
        <button @click="handleClick">切换</button>
      </div>
    `
    // template: `
    //   <div>
    //     <transition mode="out-in" appear>
    //       <component :is="component" />
    //     </transition>
    //     <button @click="handleClick">切换</button>
    //   </div>
    // `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 3-列表动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <title>列表动画</title>
  <style>
    .v-enter-from {
      opacity: 0;
      transform: translateY(30px);
    }
    .v-enter-active {
      transition: all .5s ease-in;
    }
    .v-enter-to {
      opacity: 1;
      transform: translateY(0);
    }
    /* 所有的移动都会有动画效果 */
    .v-move {
      transition: all .5s ease-in;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;
    }
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 列表动画的实现
  const app = Vue.createApp({
    data() {
      return { list: [1, 2, 3] }
    },
    methods: {
      handleClick() {
        this.list.unshift(this.list.length + 1);
      },
    },
    // 没有被执行
    updated(){
      console.log('I re');
    },
    // transition-group
    // transition标签默认动画为v-xxx-xxx
    template: `
      <div>
        <transition-group>
          <span class="list-item" v-for="item in list" :key="item">{{item}}</span>
        </transition-group>
        <button @click="handleClick">增加</button>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 4-状态“动画”

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>状态“动画”</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // svg
  // 状态动画：从数字1~10有个缓慢动画1~2,2~3....9~10
  const app = Vue.createApp({
    data() {
      return {
        number: 1,
        animateNumber: 1
      }
    },
    methods: {
      handleClick() {
        this.number = 10;
        if(this.animateNumber < this.number) {
          const animation = setInterval(() => {
            this.animateNumber += 1;
            if(this.animateNumber === 10) {
              clearInterval(animation);
            }
          }, 100);
        }
      },
    },
    // 通过不断地重绘页面产生的动画效果
    updated(){
      console.log(this.animateNumber);
    },
    template: `
      <div>
        <div>{{animateNumber}}</div>
        <button @click="handleClick">增加</button>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```





### 组件与插槽

#### 0-组件的定义及复用性，局部组件和全局组件

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>组件的定义及复用性，局部组件和全局组件</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="root"></div>
  </body>
  <script>
    // 组件的定义
    // 组件具备复用性
    // 全局组件，只要定义了，处处可以使用，性能不高，但是使用起来简单，名字建议 小写字母单词，中间用横线间隔
    // 局部组件，定义了，要注册之后才能使用，性能比较高，使用起来有些麻烦，建议大写字母开头，驼峰命名
    // 局部组件使用时，要做一个名字和组件间的映射对象，你不写映射，Vue 底层也会自动尝试帮你做映射
  
 
    // 局部组件
    const Counter = {
      data() {
        return {
          count: 1
        }
      },
      template: `<div @click="count += 1">{{count}}</div>`
    }
    // 局部组件
    const HelloWorld = {
      template: `<div>hello world</div>`
    }
  
    const app = Vue.createApp({
      // 局部组件需要在components中注册才可以被使用
      components: {
        // counter: Counter,
        // 'hello-world': HelloWorld,
        Counter, HelloWorld,
      },
      // counter点击只能修改对应的
      // 注意局部组件HelloWord的用法
      template: `
        <div>
          <hello-world />
          <counter />
          <counter />
          <counter />
          </div>
      `
    });
  
    // 全局组件（用不用都会被挂载上去）
    app.component('counter-parent', {
      template: `<counter />`
    })
    // 全局组件（用不用都会被挂载上去）
    // app.component('counter', {
    //   data() {
    //     return {
    //       count: 1
    //     }
    //   },
    //   template: `<div @click="count += 1">{{count}}</div>`
    // })
  
  
    const vm = app.mount('#root');
  </script>
  </html>
```



#### 1-组件间传值及传值校验

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>组件间传值及传值校验</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return { num: 9999 }
      // 返回一个包含函数的对象
      // return { num: ()=>{alert(123)} }
    },
    // 动态传递：灵活变动
    // 应用场景：需要传递非字符串的值，数字
    // :content=“num”中的num单向绑定了data中的num
    template: `
      <div><test :content="num" /></div>
    `
    // 静态传递：只能传递字符串
    // <div><test content="num" /></div>
  });

  // 全局组件
  app.component('test', {
    // 不做校验
    // 接收了:content的num值
    // props:['content'],

    // 接收并校验是否是函数
    // props:{
    //   content:Function
    // },
    
    // 做校验
    props: {
      content: {
        // 值类型校验
        // type:String, Boolean, Array, Object, Function, Symbol
        // required 必填，校验父组件必须向子组件传参
        // default 不传（num === undefined也算传递了值,null除外）就是这个默认值
        type: Number,
        // required: true,
        // default: 1010,
        // 可以写成函数
        default: function () {
          return 456;
        },
        // 传递值的校验
        validator: function (value) {
          return value < 1000;
        },
      }
    },
    
    methods:{
      handleClick(){
        alert(456);
        // 调用传递过来的函数
        // this.content();
      }
    },  
    template: `<div @click="this.handleClick">{{content}}</div>`
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 2-单向数据流的理解

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>单向数据流的理解</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // ★★★单项数据流的概念: 子组件可以使用父组件传递过来的数据，但是绝对不能修改传递过来的数据
  const app = Vue.createApp({
    data() {
      return {
        num: 1,
        params: {
          content: 123,
          a: 456,
          b: 789,
          c: 0
        }
      }
    },
    // v-bind="params" ≈ :content="params.content" :a="params.a" :b="params.b" :c="params.c"
    template: `
      <div>
        <counter :count="num" />
        <counter :count="num" />
        <counter :count="num" />
      </div>
      <div><counter v-bind="params" /> </div>
      <div><counter :content-abc="num" /> </div>
    `
  });

  // 全局组件
  app.component('counter', {
    // 属性传递的时候，使用 content-abc 这种命名，接的时候，使用 contentAbc 命名
    props: ['count', 'content', 'a', 'b', 'c', 'contentAbc'],

    // 可以通过其他属性来接收值，修改这个接收属性
    // data() {
    //   return {
    //     myCount: this.count
    //   }
    // },
    // template: `<div @click="myCount += 1">{{myCount}}{{content}}-{{a}}-{{b}}-{{c}}-{{contentAbc}}</div>`

    // ★★★单项数据流的概念: 子组件可以使用父组件传递过来的数据，但是绝对不能修改传递过来的数据
    template: `<div @click="count += 1">{{count}}{{content}}-{{a}}-{{b}}-{{c}}-{{contentAbc}}</div>`
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 3-Non-Props属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Non-Props属性</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // Non-props 属性（最外层DOM增加class，style属性）,父组件给子组件传递内容的时候，不通过props接收
  const app = Vue.createApp({
    template: `
      <div>
        <counter msg="hello" msg1="hello1" />
      </div>
    `
  });

  app.component('counter', {
    // 不继承父组件的Non-prop 属性
    inheritAttrs: false,
    mounted() {
      console.log(this.$attrs.msg);
    },
    // template: `<div>Counter</div>` => <div msg="hello" msg1="hello1">Counter</div>
    
    // <div msg="hello">Counter</div>
    // <div msg="hello" msg1="hello1">Counter</div>
    // <div msg1="hello1">Counter</div>
    // :class="$attrs.msg"，子组件样式是调用我的父组件上的msg值
    template: `
      <div :msg="$attrs.msg">Counter</div>
      <div v-bind="$attrs">Counter</div>
      <div :msg1="$attrs.msg1">Counter</div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 4-父子组件间如何通过事件进行通信

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>父子组件间如何通过事件进行通信</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>

  const app = Vue.createApp({
    data() {
      return { count: 1 }
    },

    // 回调：4、执行方法改变值
    // methods:{
    //   handleAdd(param){
    //     this.count += param;
    //   }
    // },

     // 高级写法
    //  template: `<counter v-model="count" />`,
    template: `<counter v-model:app="count" />`,
    // @是监听符号
    // 回调：3、事件监听，父组件的自定义add-one事件，并调用handleAdd方法
    // template:`
    //   <div>
    //     <counter :count="count" @add-one="handleAdd"/>
    //   </div>`
  });

  // modelValue是固定搭配和写法，不能变
  app.component('counter', {
    // 高级写法
    // props: ['modelValue'],
    props: ['app'],

    // 回调：向外触发事件的监听，可以看出来触发的是什么事件
    // emits:['addOne'],
    // emits:{
    //   // 事件校验
    //   addOne:(count)=>{
    //     if(count > 0){
    //       return true
    //     }
    //     return false
    //   }
    // },
    // 回调
    // props: ['count'],
    methods: {
      handleClick() {
        // 回调：2、父组件的addOne事件监听
        // this.$emit('addOne',-2);
        // 高级写法
        // this.$emit('update:modelValue', this.modelValue + 3);
        this.$emit('update:app', this.app + 3);
      }
    },
    // 高级写法
    // template: `<div @click="handleClick">{{modelValue}}</div>`
    template: `<div @click="handleClick">{{app}}</div>`
    // 回调：1、触发事件的点击函数
    // template: `
    //   <div @click="handleClick">{{count}}</div>
    // `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 5-组件间双向绑定高级内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>组件间双向绑定高级内容</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return {
        count: 'a',
      }
    },
    template: `
      <counter v-model.uppercase="count" />
    `
  });

  app.component('counter', {
    props: {
      'modelValue': String,
      'modelModifiers': {
        default: ()=> ({})
      }
    },
    methods: {
      handleClick() {
        let newValue = this.modelValue + 'b';
        if(this.modelModifiers.uppercase) {
          newValue = newValue.toUpperCase();
        }
        this.$emit('update:modelValue', newValue);
      },
    },
    template: `
      <div @click="handleClick">{{modelValue}}</div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 6-使用插槽和具名插槽解决组件内容传递问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>使用插槽和具名插槽解决组件内容传递问题</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // slot 插槽
  // slot 中使用的数据，作用域的问题
  // 父模版里调用的数据属性，使用的都是父模版里的数据
  // 子模版里调用的数据属性，使用的都是子模版里的数据
  // 具名插槽解决了什么问题：可以将组件取名后，根据名字放在任意位置

  // 插槽
  // const appp = Vue.createApp({
  //   data(){
  //     return {
  //       text:'提交'
  //     }
  //   },
  //   template: `
  //       <myform>
  //         <div>{{text}}</div>
  //         <submit />
  //       </myform>
  //       <myform>
  //         <button>{{text}}</button>
  //       </myform>
  //       <myform>
  //       </myform>
  //   `
  // });
  
  // // 全局组件
  // appp.component('submit', {
  //   template:`<div>提交</div>`
  // })

  // // 全局组件
  // appp.component('myform', {
  //   methods:{
  //     handleClick(){
  //       alert(123);
  //     }
  //   },
  //   // slot无法绑定事件
  //   // slot相当于把<myform></myform>中的内容全部替换了，如果没有就使用默认的defalutValue
  //   template: `
  //     <div>
  //       <input />
  //       <span @click="handleClick">
  //         <slot>defalutValue</slot>
  //       </span>
  //     </div>
  //   `
  // });
  // const vmm = appp.mount('#root');


   // 具名插槽：由标签变成了v-slot
  const app = Vue.createApp({
    // template: `
    //   <layout>
    //     <template v-slot:header>
    //       <div>header</div>
    //     </template>
    //     <template v-slot:footer>
    //       <div>footer</div>
    //     </template>
    //   </layout>
    // `,
    //简写
    template: `
      <layout>
        <template #header>
          <div>header</div>
        </template>
        <template #footer>
          <div>footer</div>
        </template>
      </layout>
    `
  });

  // 全局组件
  app.component('layout', {
    template: `
      <div>
        <slot name="header"></slot>
        <div>content</div>
        <slot name="footer"></slot>
      </div>
    `
  });
  const vm = app.mount('#root');
  
</script>
</html>
```



#### 7-作用域插槽

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>作用域插槽</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 父模版里调用的数据属性，使用的都是父模版里的数据
  // 作用域插槽
  // 当子组件渲染的内容由父组件决定的时候
  const app = Vue.createApp({
    data(){
     return {item :1}
    },
    // 删除v-slot="{item}"看结果
    template: `
      <list v-slot="slotProps">
        <div>{{slotProps.item + 2}}</div>
      </list>
    `
    // 解构赋值 {item} = slotProps
    // template: `
    //   <list v-slot="{item}">
    //     <div>{{item + 1}}</div>
    //   </list>
    // `
  });
  // 全局组件
  app.component('list', {
    data() {return {list: [1, 2, 3]}},
    template: `
      <div>
        <slot v-for="item in list" :item="item" />
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>
```



#### 8-动态组件和异步组件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>动态组件和异步组件</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // <component :is="currentItem" />
  // 动态组件: 根据数据的变化，结合 component 这个标签，来随时动态切换组件的现实
  // const app = Vue.createApp({
  //   data(){
  //     return {currentItem :'input-item'}
  //   } ,
  //   methods:{
  //     handleClick(){
  //       this.currentItem === 'input-item'?this.currentItem = 'common-item':this.currentItem = 'input-item'
  //     }
  //   },
  //   template:`

        
  //     <keep-alive>
  //       <component :is="currentItem" />
  //     </keep-alive>


  //     <button @click="handleClick">切换</button>`
  // });
  // app.component('input-item',{
  //   template:`<input />`
  // })
  // app.component('common-item',{
  //   template:`<div>helo</div>`
  // })
  // const vm = app.mount('#root');


  // 异步组件: 是异步执行某些组件的逻辑，这叫做异步组件
  const app = Vue.createApp({
    template: `
      <div>
        <common-item />
        <async-common-item />
      </div>
    `
  });

  app.component('common-item', {
    template: `<div>hello world</div>`
  });

  // Vue.defineAsyncComponent
  app.component('async-common-item', Vue.defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          template: `<div>this is an async component</div>`
        })
      }, 4000)
    })
  }))

  const vm = app.mount('#root');
</script>

</html>
```



#### 9-基础语法知识点查缺补漏

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>基础语法知识点查缺补漏</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // v-once 让某个元素标签只渲染一次
  // ref 实际上是获取 Dom 节点 / 组件引用 的一个语法
  // provide / inject 作用:用于父组件向子孙组件传递数据
  const app = Vue.createApp({
    data() {
      return { count: 1}
    },
    // provide 提供者
    provide() {
      return {
        count: this.count,
      }
    },

    // ref
    mounted(){
      console.log(this); // 指向vm
      console.log(this.$refs.dom);
      console.log(this.$refs.comp.syHello);
    },
    template: `
      <div ref="dom">
        <child :count="count" />
        <button @click="count += 1">Add</button>
      </div>
      <div>
        <comp ref="comp"/>
      </div>
    `
  });

  // ref
  app.component('comp',{
    methods:{
      syHello(){
        alert('hello')
      }
    },
    template:`<div>hello</div>`
  })

  // 多级子组件传值
  app.component('child', {
    template: `<child-child />`
  });
  // inject 接收者
  app.component('child-child', {
    inject: ['count'],
    template: `<div>{{count}}</div>`
  });

  const vm = app.mount('#root');
</script>
</html>
```





## Vue基础-下

### 混入与自定义指令

#### 0-Mixin混入的基础语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mixin混入的基础语法</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // mixin 混入（可维护性不高），将数据、生命周期、方法等混入到组件中
  // 组件 data, methods 优先级高于 mixin data, methods 优先级
  // 生命周期函数，先执行 mixin 里面的，再执行组件里面的


  // 自定义的属性，组件中的属性优先级高于 mixin 属性的优先级
  const myMixin = {
    number: 11111
  }

  // 组件 data 优先级高于 mixin data 优先级
  // mixin
  const FirstMixin ={
    data(){
      return{
        count:2222
      }
    },
    // 生命周期函数，先执行 mixin 里面的，再执行组件里面的
    created(){
      console.log('mixin:生命周期');
    },
     // 组件 data, methods 优先级高于 mixin data, methods 优先级
    methods:{
      handleClick(){
        console.log('mixin:methods');
      }
    }
  }

  // 根组件
  const app = Vue.createApp({
    // 组件 data 优先级高于 mixin data 优先级
    data(){
      return{count:3333}
    },
    // 生命周期函数，先执行 mixin 里面的，再执行组件里面的
    created(){
      console.log('组件:生命周期');
    },
    // 组件 methods 优先级高于 methods 优先级
    methods:{
      handleClick(){
        console.log('组件:methods');
      }
    },
    // mixin的使用方法
    mixins: [myMixin,FirstMixin],
    number: 23333,
    // vue的组件所有的东西都会挂载到options上
    // 删除 <child />看生命周期（会调用一遍子组件，而子组件调用了FirstMixin）
    template: `
      <div>
        <div>{{this.$options.number}}</div>
        <div>{{count}}</div>
        <child />
        <button @click="handleClick">点击</button>
      </div>
    `
  });

  // 全局的mixin（不推荐使用，维护性低）
  app.mixin({
    data(){
      return{
        count:21222
      }
    },
    // 生命周期函数，先执行 mixin 里面的，再执行组件里面的
    created(){
      console.log('全局mixin:生命周期');
    },
     // 组件 data, methods 优先级高于 mixin data, methods 优先级
    methods:{
      handleClick(){
        console.log('全局mixin:methods');
      }
    }
  });


  app.component('child',{
    // 大于全局的mixin
    mixins:[FirstMixin],
    template:`<div>{{count}}</div>`
  })


  // 对自定义的属性合并的策略做修改（默认是appValue）
  app.config.optionMergeStrategies.number = (mixinVal, appValue) => {
    return mixinVal || appValue;
  }

  const vm = app.mount('#root');
</script>
</html>
```



#### 1-开发实现Vue中的自定义指令

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>开发实现Vue中的自定义指令</title>
  <style>
    .header {
      position: absolute
    }
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // 自定义指令 directive

  // 局部指令定义
  // const directives = {
  //   focus: {
  //     mounted(el) {
  //       el.focus();
  //     }
  //   }
  // } 


  const app = Vue.createApp({
    // 局部指令使用
    // directives: directives,
    data() {
      return {
        distance: 120,
        tag: true,
        show: true
      }
    },
    template: `
      <div>
        <div v-show="show">
          <div v-if="tag" >
            <input v-focus />
          </div>
        </div>
        <div v-pos:left="distance" class="header">
          <input />
        </div>
      </div>
    `
  });

  // <input v-focus />
  // 全局自定义指令
  app.directive('focus', {
    beforeMount() {
      console.log('beforeMount');
    },
    mounted(el) {
      el.focus();
      console.log('mounted');
    },

    // Console:(v-show)vm.$data.show = false
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },

    // Console:(v-if)vm.$data.tag = false
    beforeUnmount() {
      console.log('beforeUnmout');
    },
    unmounted() {
      console.log('unmounted');
    }
  })

  // 全局自定义指令
  app.directive('pos', (el, binding) => {
    console.log(el);
    console.log(binding);
    // <div v-pos:left="distance" class="header"> v-post:属性
    console.log(binding.arg);// left
    // distance
    console.log(binding.value); //120
    el.style[binding.arg] = (binding.value + 'px');
  })

  const vm = app.mount('#root');
</script>

</html>
```



#### 2-Teleport传送门功能

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teleport传送门功能</title>
  <style>
    .area {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 300px;
      background: green;
    }
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: 0.5;
      color: #fff;
      font-size: 100px;
    } 
  </style>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
  <div id="hello"></div>
</body>
<script>
  // teleport 传送门
  const app = Vue.createApp({
    data() {
      return {
        show: false,
        message: 'hello'
      }
    },
    methods: {
      handleBtnClick() {
        this.show = !this.show;
      }
    },
    // 将teleport改为div就知道结果了
    // 将元素和组件挂载其他元素和组件上面
    // <teleport to="#hello">将属性挂载到id为hello的元素上，若为div就会挂载到div上
    template: `
      <div class="area">
        <button @click="handleBtnClick">按钮</button>
        <teleport to="#hello">
          <div class="mask" v-show="show">{{message}}</div>
        </teleport>
      </div>
    `
  });

  const vm = app.mount('#root');
</script>
</html>

```



#### 3-更加底层的render函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>更加底层的render函数</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // render function
  // template -> render -> h -> 虚拟DOM（JS对象）-> 真实 DOM -> 展示到页面上
  const app = Vue.createApp({
    template: `
      <my-title :level="2">
        hello dell
      </my-title>
    `
  });

  app.component('my-title', {
    props: ['level'],
    render() {
      const { h } = Vue;
      return h('h' + this.level, {}, [
        this.$slots.default(),
        h('h4', {}, 'dell')
      ])
    }
  })

  const vm = app.mount('#root');
</script>
</html>

```



#### 4-插件的定义和使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>插件的定义和使用</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // plugin 插件, 也是把通用性的功能封装起来
  // install方法会获得整个app对象还有use方法中的第二个参数用options接收
  const myPlugin = {
    // app.use方法的回调函数
    install(app, options) {
      console.log(app,options);//{_uid: 0, _component: {…}, _props: null, _container: null, _context: {…}, …},{name:'dell'}
      app.provide('name', 'Dell Lee2');
      // 自定义指定
      app.directive('focus', {
        mounted(el) {
          // input输入框聚焦
          el.focus();
        }
      })
      // mixin混入
      app.mixin({
        mounted(){
          console.log('mixin');
        }
      })
      app.config.globalProperties.$sayHello = 'hello world';
    }
  }

  const app = Vue.createApp({
    template: `
      <my-title />
    `
  });

  app.component('my-title', {
    inject: ['name'],
    mounted() {
      console.log(this.$sayHello);
    },
    template: `<div>{{name}}<input v-focus /></div>`
  })
  // 使用 Plugin
  app.use(myPlugin, { name: 'dell'});

  const vm = app.mount('#root');
</script>
</html>

```



##### 4.1-数据校验插件开发实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>数据校验插件开发实例</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 对数据做校验的插件
  const app = Vue.createApp({
    data() {
      return { name: 'deel', age: 26}
    },
    rules: {
      age: {
        validate: age => age > 25,
        message: 'too young, to simple'
      },
      name: {
        validate: name => name.length >= 4,
        message: 'name too short'
      }
    },
    template: `<div>name:{{name}}, age:{{age}}</div>`
  });

  // Plugin
  const validatorPlugin = (app, options) => {
    console.log(app,options);
    app.mixin({
      // 生命周期函数，先执行 mixin 里面的，再执行组件里面的
      created() {
        // const vm = app.mount('#root');
        // 指向vm实例 Proxy
        console.log(this);
        // Proxy {…}对象中[[Target]]: Object的$options属性
        console.log(this.$options);
        for(let key in this.$options.rules) {
          // console.log(key);
          const item = this.$options.rules[key];
          // 侦查者，当数据发生变化的时候才会执行此方法
          // vm.$data.name(age) = xxx
          this.$watch(key, value => {
            const result = item.validate(value);
            if(!result) console.log(item.message);
          })
        }
      }
    })
  }

  // 使用 Plugin
  app.use(validatorPlugin);
  const vm = app.mount('#root');
</script>
</html>

```



### CompositionAPI

#### 0-Setup函数的使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Setup函数的使用</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>

  // 对数据做校验的插件
  const app = Vue.createApp({
    template: `<div @click="handleClick">{{name}}</div>`,
    methods: {
      test() {
        console.log('app',this);// vm ≈ Proxy
        console.log('app',this.$options.setup());
      }
    },
    mounted() {
      this.test();
    },
    // created 实例被完全初始化之前,无法"使用"this关键词,是this指向windows,
    setup(props, context) {
      console.log('setup',props,context);//undefined undefined => Proxy {}[[Handler]]: Object[[Target]]: Proxy[[Handler]]: Object[[Target]]: Object[[IsRevoked]]: false[[IsRevoked]]: false {expose: ƒ}
      console.log('setup',this);//windows => vm.$options
      return {
        name: 'dell',
        handleClick: () => {
          alert(123)
        }
      }
    }
  });
  const vm = app.mount('#root');
</script>
</html>
```



#### 1-ref，reactive响应式引用的用法和原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ref,reactive响应式引用的用法和原理</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // ref, reactive 响应式的引用
  // 原理，通过 proxy 对数据进行封装，当数据变化时，触发模版等内容的更新
  // ref 处理基础类型的数据,例如数字,字符串等
  // reactive 处理非基础类型的数据,例如数组，对象等
  const app = Vue.createApp({
    template: `
      <div>{{name}}</div>
      <div>{{nameArr[0]}}</div>
      <div>{{copyNameArr}}</div>
    `,
    setup(props, context) {
      // ref的响应式引用
      // const { ref } = Vue;
      // proxy , 'dell' 变成 proxy({value: 'dell'}) 这样的一个响应式引用
      // let name = ref('dell');
      // setTimeout(() => {
      //   name.value = 'lee'
      // }, 2000)
      // return { name } 

      // reactive的响应式引用
      // readonly拷贝过来的只能读取不能改变 vue@next:715 Set operation on key "0" failed: target is readonly.
      const { reactive, readonly, toRefs } = Vue;

      // 数组
      const nameArr = reactive([123]);
      // 附魔
      const copyNameArr = readonly(nameArr);
      setTimeout(() => {
          nameArr[0] = 555;
          copyNameArr[0] = 666;
      }, 1000);
      // return {nameArr,copyNameArr}

      // proxy , { name: 'dell'} 变成 proxy({ name: 'dell'}) 这样的一个《响应式引用》
      // nameObj是个响应式数据
      const nameObj = reactive({name: 'dell', age: 28});
      setTimeout(() => {
        nameObj.name = 'lee'
      }, 2000)


      // toRefs原理还是proxy
      // toRefs proxy({ name: 'dell', age: 28}), { 
      //  name: proxy({ value: 'dell'}),
      //  age: proxy({value: 28})
      // }
      // 简写
      const { name, age } = toRefs(nameObj);
      return { name,nameArr,copyNameArr }
    }
  });
  const vm = app.mount('#root');
</script>
</html>
```



#### 2-toRef以及context参数

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>toRef以及context参数</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // toRef(data,'age');第二个参数是在没法取到的时候添加一个默认值'age'
  // const app = Vue.createApp({
  //   template: `
  //     <div>{{age}}</div>
  //   `,
  //   setup(props, context) {
  //     const { reactive,toRef} = Vue;

  //     const data = reactive({name: 'dell'});
         // 第二个参数是在没法取到的时候添加一个默认值
  //     const age = toRef(data,'age');

  //     setTimeout(() => {
  //       age.value = 'lee'
  //     }, 2000)
  
  //     return {age}
  //   }

  
  const app = Vue.createApp({
    methods: {
      handleChange() {
        console.log('change');
      }
    },
    template: `<child @change="handleChange" app="app">parent</child>`

  });
  // 全局组件
  app.component('child', {
    props:["app"],
    mounted(){
      // slots
      console.log(this.$slots);
      // emit 触发自定义事件
      this.$emit('change');
    },
    template: `<div @click="handleClick">123123</div>`,
    setup(props, context) {
      // context:
      // {expose: ƒ}
      // attrs: (...)
      // emit: (...)
      // expose: exposed => {…}
      // slots: (...)
      // get attrs: ƒ attrs()
      // get emit: emit() { return (event, ...args) => {…}
      // get slots: ƒ slots()
      // __proto__: Object
      console.log('setup',props,context);
      const { h } = Vue;
      // attrs 父组件传递过来的None-Props属性
      // slots 父组件传递过来的插槽 
      // emit 用来触发一个事件
      const { attrs, slots, emit } = context;
      console.log(attrs.app);
      function handleClick() { 
        emit('change');
      }
      return { handleClick }
      // return ()=> h('div',{},slots.default());
    }
  })
  const vm = app.mount('#root');
</script>

</html>
```



#### 3-使用 CompositionAPI开发TodoList

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>使用CompositionAPI开发TodoList</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // 关于 list 操作的内容进行了封装
  const listRelativeEffect = () => {
    const { reactive } = Vue;
    const list = reactive([]);
    const addItemToList = (item) => {
      list.push(item);
      // vm.inputValue =''
    }
    return { list, addItemToList }
  }

  // 关于 inputValue 操作的内容进行了封装
  const inputRelativeEffect = () => {
    const { ref } = Vue;
    const inputValue = ref('');
    const handleInputValueChange = (e) => {
      // console.log(e);
      inputValue.value = e.target.value
    }
    return { inputValue, handleInputValueChange }
  }

  const app = Vue.createApp({
    setup() {
      // console.log(Vue);
      // 流程调度中转
      const { list, addItemToList } = listRelativeEffect();
      const { inputValue, handleInputValueChange } = inputRelativeEffect();
      return {
        list, addItemToList,
        inputValue, handleInputValueChange
      }
    },
    template: `
      <div>
        <div>
          <input :value="inputValue" @input="handleInputValueChange" />
          <button @click="() => addItemToList(inputValue)">提交</button>
        </div>
        <ul>
          <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
      </div>
    `,
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 4-computed方法生成计算属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>computed方法生成计算属性</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // constant
  const app = Vue.createApp({
    setup() {
      // 获得静态方法
      const { reactive, computed } = Vue;
      // 设置响应式引用
      const countObj = reactive({ count: 0 });
      // 点击事件
      const handleClick = () => {
        countObj.count += 1;
      }
      
      // computed 计算属性
      let countAddFive = computed({
        // 每次countObj.count值改变的时候会触发这个函数
        get: () => {
          return countObj.count + 5;
        },
        // countAddFive.value = 100;触发此方法
        set: (param) => {
          countObj.count = param - 5;
        }
      })

      // 用来触发computed：set函数
      setTimeout(() => {
        countAddFive.value = 100;
      }, 3000)

      console.log(countAddFive);

      return { countObj, countAddFive, handleClick }
    },
    template: `
      <div>
        <span @click="handleClick">{{countObj.count}}</span> -- {{countAddFive}}
      </div>
    `,
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 5-watch和watchEffect 的使用和差异性

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>watch和watchEffect 的使用和差异性</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>
  // watch 侦听器
  // watchEffect 侦听器，偏向于 effect
  const app = Vue.createApp({
    setup() {
      const { reactive, watch, watchEffect, toRefs } = Vue;
      const nameObj = reactive({
        name: 'dell', englishName: 'lee'
      })
      // 被动触发具备一定的惰性 lazy
      // 参数可以拿到原始和当前值
      // reactive使用() => {}去监听
      // 可以侦听多个数据的变化，用一个侦听器承载
      // 也可以写停止异步调用
      watch([() => nameObj.name, () => nameObj.englishName], ([curName, curEng], [prevName, preEng]) => {
        console.log('watch', curName, prevName, '---', curEng, preEng);
      },
      // 非惰性开启(页面记载完毕后立即执行)
      { immediate: true }
      )
      
      // WatchEffect
      // 页面加载完毕后立即执行，没有惰性 immediate
      // 不需要传递你要侦听的内容，自动会感知代码依赖，不需要传递很多参数，只要传递一个回调函数
      // 不同点：不能获取之前数据的值
      const stop = watchEffect(() => {
        console.log('watchEffect =>',nameObj.name);
        console.log('watchEffect =>',nameObj.englishName);
        setTimeout(() => {
          stop();
        }, 5000)
      })

      const { name, englishName } = toRefs(nameObj);

      return { name, englishName }
    },
    template: `
      <div>
        <div>
          Name: <input v-model="name"> 
        </div>
        <div>
          Name is {{name}}
        </div>
        <div>
          EnglishName: <input v-model="englishName"> 
        </div>
        <div>
          EnglishName is {{englishName}}
        </div>
      </div>
    `,
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 6-生命周期函数的新写法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>生命周期函数的新写法</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
  <div id="root"></div>
</body>
<script>

  const app = Vue.createApp({
    // mapping vue2 to vue3
    // 没有beforeCreate,created函数
    // beforeCreat => use setup()
    // created => use setup()
    // beforeMount => onBeforeMount
    // mounted => onMounted
    // beforeUpdate => onBeforeUpdate
    // updated => onUpdated
    // beforeUnmount(beforeDestroy) => onBeforeUnmount
    // unmouted(destroyed) => onUnmounted
    // activated => onActivated
    // deactivated => onDeactiavted
    // errorCaptured => onErrorCaptured

    // 新增onRenderTracked, onRenderTriggered
    // 此函数的执行时间点在beforeCreate,created函数之间，直接写在这里面就OK了
    setup() {
      const {
        ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
        onBeforeUnmount, onUnmounted,
        onRenderTracked, onRenderTriggered
      } = Vue;
      let show = ref(true);
      const name = ref('dell')
      onBeforeMount(() => {
        console.log('onBeforeMount')
      })
      onMounted(() => {
        console.log('onMounted')
      })
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
      })
      onUpdated(() => {
        console.log('onUpdated')
      })

      // 控制台中使用app.unmount()
      
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
      })
      onUnmounted(() => {
        console.log('onUnmounted')
      })

      // ★★★每次渲染后重新收集响应式依赖
      onRenderTracked(() => {
        console.log('onRenderTracked')
      })
      // ★★★每次触发页面重新渲染时自动执行
      onRenderTriggered(() => {
        console.log('onRenderTriggered')
      })

      const handleClick = () => {
        // 查看更新数据时生命周期函数变化
        // name.value = 'lee'
        // console.log(show);
        // 查看dom销毁时的生命周期函数变化
        show.value = false;
        console.log(show);
      }

      return { name, show, handleClick }
    },
    template: `
      <div @click="handleClick" v-if="show">
        {{name}}
      </div>
    `,
  });

  const vm = app.mount('#root');
</script>

</html>
```



#### 7-Provide,Inject,模版Ref的用法

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Provide,Inject,模版Ref的用法</title>
  <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 《provide, inject》
  // const app = Vue.createApp({
  //   setup() {
  //     const { provide, ref, readonly } = Vue;
  //     const name = ref('dell');
  //     // 只读
  //     provide('name', readonly(name));
  //     // 父组件传递方法
  //     provide('changeName', (value) => {
  //       name.value = value;
  //     });
  //     return { }
  //   },
  //   template: `
  //     <div>
  //       <child />
  //     </div>
  //   `,
  // });

  // app.component('child', {
  //   setup() {
  //     const { inject } = Vue;
  //     const name = inject('name');
  //     const changeName = inject('changeName');
  //     const handleClick = () => {
  //       // name.value = 'mistake';
  //       changeName('lee');
  //     }
  //     return { name, handleClick }
  //   },
  //   template: '<div @click="handleClick">{{name}}</div>'
  // })


  // 《dom ref》
  // CompositionAPI 的语法下，获取真实的 DOM 元素节点
  const app = Vue.createApp({
    setup() {
      const { ref, onMounted } = Vue;
      // 对应div上的属性ref="hello"，所以ref不再是响应式引用了
      const hello = ref('null');
      onMounted(() => {
        console.log(hello);
        console.log(hello.value);
      })
      return { hello }
    },
    template: `
      <div>
        <div ref="hello">{{hello}}hello world</div>
      </div>
    `,
  });
  
  const vm = app.mount('#root');
</script>
</html>

```



## 一些其他

### scpoed

```css
<style lang="scss" scpoed></style>
```

scpoed:表示当前的样式只作用于当前的vue文件



### 路由守卫

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/Register/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 访问login之前会执行的函数
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        // 展示当前页面，不做跳转
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    // 访问login之前会执行的函数
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        // 展示当前页面，不做跳转
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫跳转会执行的函数
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router

```



### ?. 可选链 

```js
let res = obj?.data?.list
let res = obj && obj.data && obj.data.list
```

作用就是判断这个对象（this.element）下的（businessObject）下的（value）下的（length）是否为null或者undefined，当其中一链为null或者undefined时就返回undefined，这样即使中间缺少一个属性也不会报错，双问号后面接的就是默认值。

```js
var obj ={}
console.log(obj?.a?.b ?? 233 ) //233
var obj={a:{b:1}}
console.log(obj?.a?.b??233) //1
```

### ??双问号

#### 忽0和空字符串等错误的值

```js
console.log(1 || "xx") 			//1
console.log(0 || "xx") 			//xx
console.log(null || "xx")		//xx
console.log(undefined || "xx")  //xx
console.log(-1 || "xx") 		//-1
console.log("" || "xx") 		//xx

console.log(1 ?? "xx")			//1
console.log(0 ?? "xx") 			//0
console.log(null ?? "xx") 		//xx
console.log(undefined ?? "xx")  //xx
console.log(-1 ?? "xx") 		//-1
console.log("" ?? "xx") 		//''
```

