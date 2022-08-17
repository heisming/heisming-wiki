# ES6

## 1、ES6(ECMASript6)

ECMAScrpt是语言的标准，6是版本号
ECMA：欧洲计算机制造商协会，标准化组织（ECMAScript = 语法、API）

### ES与JS的关系

JavaScript（浏览器端）= ECMAScript(语法、API) + DOM + BOM;

### ES6的兼容性

·主流浏览器的最新版本几乎全部支持
·IE老版本等不支持的浏览器，可以使用Bable转码

### 1.1、let和const

#### 	let代替var,声明变量

```js
var name = 'xg';
let age = 18;
```

#### 	const声明《常量》

```js
const sex = 'male';
console.log(name,age,sex);
name = 'xs';
age = 22;
try {
    sex = "female";//常量一旦初始化就不能重新赋值
} catch (error) {
    console.log('报错');
}
console.log(name,age,sex);
```

##### const的注意事项

1、使用const声明常量，一旦声明，就必须立即初始化，不能留到以后赋值

2、const声明的常量，允许在不重新赋值的情况下修改它的值(基本数据类型无法重新赋值)

##### 引用数据类型

```js
const person = {sex:'male'};
try {
    person = {};//报错
} catch (error) {
    console.log('报错');
}
//调用赋值
person.sex = 'female';
console.log(person);
```

#### 什么时候用const，什么时候用let

​	先用常量，修改出错后再改变声明

#### let、const与var的区别

##### 1、var允许重复声明，let、const不允许

```js
let a = 1;
try {
    let a = 2;
} catch (error) {
    console.log('报错');
}
console.log(a);
```

此时b已经是形参了，所以会在报错，只要变量已经被声明了，不管形式，就报错

```js
function f(b) {
    try {
        let b = 1;
    } catch (error) {
        console.log('报错');
    }
}
f(); 
```

##### 2、无变量提升★★★

​	var会提升变量的声明到**当前的作用域的顶部**

```js
console.log(c);
var c = 1;
// 相当于
var d;
console.log(d);
d = 1;
// ★★★let和const不存在变量提升
try {
    console.log(f);
    let f = 1;
} catch (error) {
    console.log('报错');
}
```

##### 3、暂时性死区(let和const独有)

​	只要作用域内存在let、const，它们声明的变量或常量就自动“绑定”这个区域，不再受到外部作用域的影响

```js
let x = 2;
let y = 1;
// 函数只有被调用的时候才会形成作用域
function fun() {
    console.log(y);// 没有绑定的内部作用域
    try {
        // let和const不存在变量提升，并且绑定了当前的作用域
        console.log(x);
        let x = 1;// 它会绑定当前函数的内部作用域，外部的作用域就无法再去查找了
    } catch (error) {
        console.log('报错');
    }
}
fun();
```

##### 4、window对象的属性和方法

​	全局作用域中，var声明的变量，通过function声明的函数，会自动变成window对象的属性和方法，而let和const不会

```js
var ages = 18;
console.log(window.ages);//18
function test() {}
console.log(window.test === test);// true
// let和const
let agess = 19;
const add = function () {}
console.log(window.agess); //undefined
console.log(window.add === add); // false
```

##### 5、块级作用域★★★★★

###### 1、var没有块级作用域

```js
for (var i = 0; i < 3; i++) {
} 
console.log(i);
```

###### 2、let和const有块级作用域

```js
for (let j = 0; j < 3; j++) {
    // 块级作用域内部
} 
try {
    console.log(j);
} catch (error) {
    console.log('报错'); 
}
```

###### 3、作用域链:块级（内层）作用域 => 函数（外层）作用域 =>...=> 全局作用域

![](D:\大前端学习\MarkDown\0基础\img\作用域链.png)

```js
function func() {
    //函数作用域
    for (let k = 0; k < 4; k++) {
        console.log(k);
        //块级作用域
    }
}
//全局作用域
func();
try {
    console.log(k);
} catch (error) {
    console.log('报错'); 
}
```

###### 4、有哪些块级作用域

​	{}/for/while/do{}while/if/switch

```js
{
    let num = 1;
    console.log(num);
}
try {
    console.log(num)
} catch (error) {
    console.log('报错'); 
}
```

​	const person = { a: 1 }  =>  对象不生成任何作用域，看处于什么作用域内，若内部有，就包含此作用域



函数作用域 => 块级作用域 => 块级作用域 => 函数作用域 => 全局作用域

```js
const number = 100;
function bar() {
    for (let s = 0; s < 3; s++) {
        if (s == 2) {
            let s = 3;
            foo(number);
        }
    }
}
function foo(arg) {
    console.log(arg);
}
bar();
```

作用域练习:0 =>块级作用域 , 1 => 函数作用域 , 2 => 全局作用域

```js
// 2
const num = 0;
function per() {
    const obj = {
        a: 1,
        // 1
        run: function() {
            // 0
            for (let q = 0; q < 3; q++) {
                // 0
                if (q == 2) {
                    console.log(num);// 0 
                }
            }
        }
    }
    obj.run();
}
per();
// 答案：00112
```

#### let和const的应用

```html
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>
<script>
    // var实现功能(这三个函数作用域相互独立，但是当函数被调用的时候，全局作用中只有一个i的值为3)
    var btns = document.querySelectorAll('.btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener(
        'click',
        function(){
            console.log(i);
        },
        false);
    }
</script>
```



![](D:\大前端学习\MarkDown\0基础\img\let 和 const 的应用-var.png)

```html
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>
<script>
    // 闭包实现
    var btnss = document.querySelectorAll('.btn');
    for (var t = 0; t < btnss.length; t++) {
        (function(index){
        btns[index].addEventListener(
            'click',
            function(){
                console.log(index);
            },
            false);
        })(t);
    }
</script>
```



![](D:\大前端学习\MarkDown\0基础\img\let 和 const 的应用-闭包.png)

```html
<button class="btn">0</button>
<button class="btn">1</button>
<button class="btn">2</button>
<script>
    // let/const可以直接实现
    let btnsss = document.querySelectorAll('.btn');
    for (let z = 0; z < btnsss.length; z++) {
        btns[z].addEventListener(
        'click',
        function(){
            console.log(z);
        },
        false);
    }
</script>
```

![](D:\大前端学习\MarkDown\0基础\img\let 和 const 的应用-let.png)

#### 一些问题

1、let和const是什么
2、let、const与var的区别
3、块级作用域是什么★★★★★





## 2、模板字符串与箭头函数

### 2.1、模板字符串

1、认识模板字符串(使用反引号，ESC键的下方，数字1的左边，Tab键的上面)

```js
const user1 = `heisming`;
const user2 = 'heisming';
```

2、模板字符串与一般字符串的区别

```js
const person = {username : 'ming',age : 22,sex:'male'};
console.log('我的名字是' + person.username + '性别' + person.sex + '今年'+ person.age + '岁了');
// ${}符号
console.log(`我的名字是:${person.username},性别${person.sex}，今年${person.age}岁了`);
```

#### 模板字符串的注意事项

##### 1、输出多行字符串(所有的空格、换行或缩进都会被保留在输出之中)

```js
    const info1 = '第1行\n第2行';
    console.log(info1);
    const info2 = `第1行\n第2行`;
    console.log(info2);
    const info3 = `第1行
第2行`;
    console.log(info3);
```

##### 2、输出`和\等特殊字符

```js
const info4 ='`\\@!\''; 
console.log(info4);
const info5 =`\`\\@!'`;
console.log(info5);
```

##### 3、模板字符串的注入★★★(只要最终可以《得出一个值》的就可以通过${}注入到模板字符串中)

```js
const name = 'ming';
const per = {age : 19,sex :'male'};
const getSex = function (sex) {
    return sex === 'male'?'男':'女';
}
console.log(`${name},${per.age * 2},${getSex(per.sex)}`);
```



#### 模板字符串的应用

```js
<p>学生信息表</p>
<ul id="list">
    <li style="list-style: none;">信息加载中...</li>
</ul>
<script>
    const students = [
        {
        username: 'Alex',
        age: 18,
        sex: 'male'
        },
        {
        username: 'ZhangSan',
        age: 28,
        sex: 'male'
        },
        {
        username: 'LiSi',
        age: 20,
        sex: 'female'
        }
  ];
  const list = document.getElementById('list');
  let html =``;
  for (let i = 0; i < students.length; i++) {
      html += `<li>我的名字是：${students[i].username},年龄是${students[i].age},性别是：${students[i].sex}。</li>`;
  }
  console.log(html);
  list.innerHTML = html;
```





### 2.2、箭头函数

​	认识箭头函数(匿名函数)

```js
const add = (x,y) => {
 return x + y;
};
console.log(add(1,2));
```

​	箭头函数的结构： const/let 函数名 = 参数 => 函数体

​	如何将一般函数改写成箭头函数

​	声明形式：先得转换成函数达表式形式

```js
function add1(){}
```

​	函数表达式形式：

```js
const add1 = function(){}
```

```js
const add1 = () => {};
```



#### 注意事项

##### 1、单个参数（可以省略圆括号）

```js
const jia1 = x => {return x+1;};
console.log(jia1(4));
```

##### 2、单行函数体(可以同时省略{}和return)

```js
const reduce = (x, y) => x-y;
console.log(reduce(3,22));
```

##### 3、单行对象(可以在{}外面套上()即可)

```js
const add2 = (x, y) => {
 return {
     value : x + y
 };
};
console.log(add2(13,2));//{value: 15}
//简化后
const add3 = (x, y) => ({value : x + y });
console.log(add3(12,12));
```

##### 4、单行数组

```js
const arr = (a, b) => [a+2, b+3];
console.log(arr(2,2));
```



### 2.3、非箭头函数的this指向

全局作用域中的this指向

```js
console.log(this);
```

一般函数（非箭头函数）中的this指向

```js
function getThis() {
   console.log(this); // 只有在函数调用的时候this指向才确定，不调用的时候，不知道指向谁    
}
```

**this指向和函数在哪调用没关系，《只和谁调用有关系》**

开启严格模式'use strict';

```js
getThis(); // undefined(严格模式下) => window(非严格模式下会转换成window)
const get = { getThis: getThis };
get.getThis(); // 只指向get对象
const getter = get.getThis;
getter(); // undefined(严格模式下) => window(非严格模式下会转换成window)
document.onclick = function(){
    console.log('点击事件的this：');
    console.log(this);// 指向#document
}
document.onclick();
function Person(username){
    this.username = username;
    console.log(this);
}
const p =  new Person('dddd'); // 构造函数指向构造函数实例化生成的对象
```



### 2.4、箭头函数中的this指向★

箭头函数没有自己的this，如果函数体内有this调用，需要通过作用域链去查找

```js
const calc = {
   add:() => {
      console.log(this);
   }
};
calc.add(); // window

const clas = {
    cdd: function () {
        cdder = () => {
            console.log(this);
        };
        cdder();
    }
};

clas.cdd(); // 指向clas对象
const cddFn = clas.cdd;
cddFn(); // undefined(严格模式下) => window(非严格模式下会转换成window)
```



### 2.5、不适用箭头函数的场景

#### 1、作为构造函数(详情请查看实例化对象生成四步走)

```js
try {
    const Pee = () => {};
    new Pee();
} catch (error) {
    console.log('报错');
}
```

#### 2、需要this指向调用对象的时候

```js
document.onclick = () =>{
    console.log(this);//window(一般我们希望是指向document)
}
document.addEventListener('click',() => {
    console.log(this);
},false);//window
```

#### 3、需要使用arguments的时候

箭头函数中没有argments(解决方案：剩余参数)

```js
function save() {
    console.log(arguments);
}
save(1,2,3);
// ..args
const saves = () => console.log(arguments);
try {
    saves(1,2,3);
} catch (error) {
    console.log('报错');
}
```



### 2.6、箭头函数的应用

```js
<button id="btn1">开始</button>
<span id="result1">1</span>
<button id="btn">开始</button>
<span id="result">0</span>
<script>
    const btn1 = document.getElementById('btn1');
    const result1 = document.getElementById('result1');
    
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    
    //此时let声明的对象不是window的
    //let time = 1;
    //var 声明才可以调用
    // var time = 1;
    const timer = {
        time: 1,
        start: function(){
            // 保存timer上下文
            var self = this;
            btn1.addEventListener('click', function(){
                // 这个位置的this是指向btn1对象的
                setInterval(function(){
                    console.log(this);//指向window
                    self.time ++;
                    result1.innerText = self.time;
                }, 1000);
            },false);
        }
    };
    timer.start();

    // 使用箭头函数，让this指向timers对象，就可以调用timers对象中的time
    const timers = {
        time: 0,
        start: function(){
            btn.addEventListener('click',
            () => { //this没了
                setInterval(
                    () => { //this没了
                    console.log(this);
                    this.time ++;
                    result.innerText = this.time;
                }, 1000);
            },false);
        }
    };
    timers.start();
</script>
```



### 2.7、《严格模式》

#### 一、为什么使用严格模式

·严格模式消除了JS语法的一些不合理、不严谨之处，减少一些怪异行为
·消除代码运行一些不安全之处，保证代码运行的安全
·提高代码编译效率，增加运行速度
·为未来新版本得JS做好铺垫

#### 二、如何开启严格模式

1、为整个脚本开启严格模式，需要在所有语句之前放一个特定语句'use strict'

```html
<script>
// 整个脚本都开启严格模式的语法
"use strict";
let v = "Hi!  I'm a strict mode script!";
</script>
```

2、为函数开启严格模式

```js
function strict() {
  // 函数级别严格模式语法
  'use strict';
   let sum = 1;
   let result = 0
   result += sum 
}
```

#### 三、严格模式与非严格的区别

1、将过失错误转成异常

- 在非严格模式下，如果一个变量没有声明就赋值，默认是全局变量，不会出现报错。num = 1;
- 在严格模式下,会出现报错

2、this指向undefined

- 在非严格模式中，全局作用域中的函数内部this默认指向window
- 在严格模式中，全局作用域中的函数内部this默认指向undefined

3、不允许变量重名

在非严格模式中，允许变量重名

```js
function sum(a, a, c){
    return a + a + c;
}
```

在严格模式中，不允许变量重名

```js
"use strict";
function sum(a, a, c){ //语法错误
    return a + a + c;
}
```

### 一些问题

1、模板字符串的注入
2、箭头函数的使用及this指向
3、非箭头函数中的this指向
4、模板字符串和箭头函数的两个注意事项





## 3、解构赋值

### 认识解构赋值

解析某一数据的结构，将我们想要的东西提取出来，赋值给变量或者常量

```js
//原始方法
const arr = [1,2,3];
for(let i = 0;i < arr.length; i++){
    console.log(arr[i]);
}
//解构赋值
const [a,b,c] = [1,2,3];
console.log(a,b,c);
```



### 数组解构赋值

#### 原理

1、模式（结构）匹配(一 一对应的关系)

```js
[] = [];
```

2、索引值相同的完成赋值（映射）

```js
// a =>2 ,b =>4 ,c =>6 
const [x,y,z] = [2,4,6];
```

```js
//练习(不取值的可以使用逗号来跳过)
const[o,[,,p],q] = [1,[2,,3],4];
console.log(o,p,q);
```



#### 默认值

##### 默认值的基本用法

```js
const [u,i] = [];
console.log(u,i);
//加上默认值
const [m = 1,n = 2] = [];
console.log(m,n);
```

##### 默认值的生效条件

```js
//只有当数组成员严格等于(===)undefined时，对应的默认值才会生效
const [l = 0,j = 0,k = 0] = [1, null];
console.log(l,j,k);
```

##### 默认值表达式（惰性求值）

```js
//此函数没有被执行，当默认值被用到的时候就会执行
const func = () => {
    console.log('我被Q到了');
    return 2;
}
const [a1 = func()] = [111];
console.log(a1);
```



#### 应用

1、常见的类数组的解构赋值

```js
// arguments
function fun() {
  const [a2,b2] = arguments;
  console.log(a2,b2);
}
fun('a','b');
// NodeList
console.log(document.querySelectorAll('p'));
const [p1,p2,p3] = document.querySelectorAll('p');
console.log(p1,p2,p3);
```

2、函数参数解构赋值

```js
const array = [2,3];
const add = arr => arr[0] + arr[1];
console.log(add(array));
// 解构赋值
const jia = ([a3 = 0,b3 = 0]) => a3 + b3;
console.log(jia(array));
console.log(jia([]));
```

3、交换变量的值

```js
let x1 = 1,y1 = 0;
let temp = x1;
    x1 = y1;
    y1 = temp;
console.log(`x1=${x1},y1=${y1}`);
//解构赋值的作用
[x1,y1] = [y1,x1];
console.log(`x1=${x1},y1=${y1}`);
```





### 对象的解构赋值

#### 原理

1、模式（结构）匹配 

```js
const {} = {};
```

2、属性名相同的完成赋值

```js
//{age,name} === {age:age,name:name}
const {age,name} = {name:'lm',age:19};
//取别名
const {'age':age1,'name':name1} = {name:'lm',age:19};
const {age:ages,name:names} = {name:'lm',age:19};
console.log(name,age);
console.log(name1,age1);
console.log(ages,names);
```



#### 注意事项

1、对象解构赋值的默认值

```js
//【生效条件】属性值 === undefined
const {uname ='zhangsan',uage = 123} = {uname:'lmmm'};
console.log(uname,uage);
//【默认表达式】惰性求值
```

2、将一个已经声明的变量用于解构赋值

```js
let h = 2;
// 套上()
({h} = {h:1});
console.log(h); // 1
[h] = [1];
```

3、可以**取到继承的属性**

```js
const {toString} = {};
console.log(toString);
// Object.prototype
console.log(Object.prototype.hasOwnProperty('toString')); // 对象的原型上含有toStrig方法
console.log({});
```



#### 应用

1、函数参数的解构赋值

```js
const logPersonInfo = user => console.log(user.name,user.age);
logPersonInfo({name:'lm',age:15});
// 解构赋值后
const logPersonInfo1 = ({name ='AAA',age = 0}) => console.log(name,age);
logPersonInfo1({name:'lm',age:15});
// 隐式操作内容：{name,age} = {name:'lm',age:15}
```

2、复杂的嵌套

```js
const obj = {
    x10:1,
    y10:[2,3,4],
    z10:{
        a:5,
        b:6,
        c:7
    }
};
const {x10,y10,z10} = obj;
console.log(x10,y10,z10);
//取第二个数组的
//第一个y10是匹配，y11是赋值的，第二个y10也是匹配的，[,b10,]是完成赋值的
//第一个z10是匹配，z11是赋值的，第二个z10也是匹配的，[b11,]是完成赋值的
const {y10:y11,y10:[,b10,],z10:z11,z10:{b:b11,}} = obj;
console.log(b10,y11,z11,b11); // 3 1 {a: 5, b: 6, c: 7} 6
```





### 其它数据类型的解构赋值

#### 1、字符串的解构赋值

1.1、数组形式

```js
const [h1,i1,,,,,j1] = `hello world`;
console.log(h1,i1,j1);
```

1.2、对象形式[索引值]

```js
const {0: xx, 1: yy, 10: zz} = `hello world`;
console.log(xx, yy, zz);
```

#### 2、数值和布尔值的解构赋值

```js
// 先将等号右边的值转为对象(true右边的是空)
Object.prototype.hasOwnProperty('valueOf'); // true
const { a100 = 1, valueOf } = true;
console.log(a100, valueOf);
```

#### 3、undefined和null的解构赋值📃

```js
// undefined和null无法转为对象,解构赋值报错
try {
    const {toString} = undefined;
    const {toString} = null;
} catch (error) {}
```





### 解构赋值常见的应用场景

#### 1、交换变量的值 

```js
let x1 = 1,y1 = 0;
[x1,y1] = [y1,x1];
```

#### 2、从函数返回多个值

```js
function ex() {
    return[12,21,12];
}
let [aa,bb,cc] = ex();
console.log(aa,bb,cc);
```

#### 3、从函数返回多个对象

```js
function ex1() {
    return { foo: 1, bar: 2 }
}
let {foo = 0,bar = 0,to = 0} = ex1();
console.log(foo,bar,to);
```

#### 4、函数参数的定义

```js
// 参数是一组有次序的值
function f([x,y,z]) {
    console.log(x,y,z);
}
f([11,22,33]);
// 参数是一组无次序的值
function f1 ({x,y,z}){
    console.log(x,y,z);
}
f1({z:33,x:22,y:11});
```

#### 5、指定函数参数的默认值

```js
function foo1({x, y = 5}){
    console.log(x, y);
}
foo1({});
foo1({x:1});
foo1({x:1,y:2});
```

#### 6、遍历Map解构

```js
var map = new Map();
map.set('李四', '18');
map.set('wangwu', '28');
for (let [key, value] of map) {
    console.log(`${key}今年${value}岁`);
}
```

#### 7、加载模块（让你引入的部分更加明确）

```js
import {x,y} form 'xxxx';
```

#### 8、提取JSON数据📃

```js
var jsonData = {
    "name": "小慕",
    "age": "18",
    "data": [1, 2, 3, 4],
    "status": "OK"
};
let {
    name,
    age,
    data,
    status
} = jsonData;
console.log(name, age, data, status);
```

### 一些问题

1、数组、对象的解构赋值的原理和注意事项
2、数组、对象的解构赋值的默认值和应用场景
3、其他数据类型的解构赋值（字符串的形式）







## 4、对象字面量的增强与函数参数的默认值

### 《属性和方法的简洁表示法》

#### 1、对象字面量是什么

```js
 // 实例化构造函数生成对象
 const person = new Object();
 person.age = 19;
 person.speak = function(){}
 // 对象字面量
 const per = {
     age: 18,
     speak: function(){}
 };
```

#### 2、属性的简洁表示法

```js
// 当键名和变量或常量名一样的时候，可以只写一个
const age = 19;
const pers = {
    // age:age
    age
};
console.log(pers.age);
// 3、方法的简洁表示法
// 方法可以省略冒号和function关键字
const personal = {
    // speak: function(){}
    speak(){}
};
console.log(personal);
```



### 《方括号语法》

#### 1、方括号语法的用法📃

```js
const prop = 'age';
const person1 = {};
const person2 = {};
person1.prop = 15;
console.log(person1);
person2[prop] = 15;
console.log(person2);
// 方括号语法可以写在对象字面量中
const person3 = {[prop]:18, [person1]:123};
console.log(person3);
```

#### 2、方括号中可以放什么

类似${}，[值或通过计算可以得到值的(表达式)]

```js
const proa = 'age1';
const func = () => 'age2';
const per = {
    [proa]: 12,
    [func()]: 12,
    ['sex']: 'male',
    ['a' + 'asd']: 'ddd'
}
console.log(per);
```

#### 3、方括号语法与点语法的区别

点语法是方括号语法的特殊形式

什么时候可以用点语法？

```js
person.age === person['age']
```

合法标识符可以用来作为变量或常量名

当你的属性或方法名是合法标识符的时候

属性名由数字、字母、下划线以及$构成，并且数字还不能打头的时候可以使用点语法，其他情况使用方括号语法

```JS
age19_$ // √
190gea // ✖
```



#### 4、案例理解

案例1：访问对象属性

```JS
const obj = {
    "age": 2,
    "8i":"jd"
};
// age是合法标识符，点语法和方括号语法都可以访问
console.log(obj.age); // 2
console.log(obj['age']); // 2
// 8i不属于合法的标识符，使用点语法访问属性会报错
// console.log(obj.8i)  // 报错
// 不符合语法标识符的属性，可以使用方括号语法访问
console.log(obj['8i']);// jd
```

案例2：使用变量或常量保存属性名时，只能使用方括号语法，不能使用点语法

```js
const obj1 = {
    "age": 2,
    "8i": "jd"
};
// 定义一个常量property，值为age
const property = "age";
// 当属性为变量或常量时，必须通过方括号语法，即:obj[property]，使用property保存的值age，所以等价于obj.age这种写法
console.log(obj1[property]); // 2
// 当属性为变量或常量时，如果通过点语法，会将property看做字符串，表示访问obj对象下的property属性，而不是访问obj下的age属性，而obj对象中没有property属性，所以返回结果为undefined
console.log(obj1.property); // undefined
```







## 5、剩余参数与展开运算符

### 5.1《剩余参数》

#### 1、认识剩余参数

```js
const add = (x,y,z,...args) => {};
```

#### 2、剩余参数的本质

(永远是个数组，即使没有值，也是空数组)

```js
const add1 = (x,y,z,...args) => console.log(x,y,z,args)
add1(12,213,132,12312,12341,1212,2312);
```



#### 注意事项

##### 1、箭头函数的剩余参数

（一个剩余参数，不能省略圆括号）

```js
const jiafa = (...args) => {};
```

##### 2、使用剩余参数替代arguments获取实际参数

(箭头函数没有arguments)

```js
const shen  = (...args) => console.log(args);
shen(12,213,132,12312,12341,12);
```

##### 3、剩余参数的位置

（参数只能放在最后一个位置）

```js
const shens = (...args,s) => console.log(args);
// Uncaught SyntaxError: Rest parameter must be last formal parameter
```



#### 应用

##### 1、完成无限制参数加法函数

```js
const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};
console.log(sum(1,2,23,12312,1231));
```

##### 2、剩余参数与解构赋值结合使用★

```js
//剩余参数不一定非要作为函数参数使用
const [num,...args] = [1,2,3,4];
console.log(num,args);
const func = ([num,...args]) =>{};
func([1,3,5]);
//此时不是剩余参数（在函数中），此时是剩余元素（具体要看元素是什么）
const {x,y,...z} = {a:3,x:1,y:2,b:4};
console.log(x,y,z);
```





### 5.2《展开运算符》

#### 5.2.1《数组展开运算符》

##### 基本用法

###### 1、认识展开运算符

[3,2,1]   == 展开 =>   (3,2,1)

###### 2、数组展开运算符的基本用法

```JS
console.log(Math.min([3,2,1]));
//使用展开运算符
console.log(Math.min(...[3,2,1]));
//相当于
console.log(Math.min((3,2,1)));
```

##### 区分剩余参数和展开运算符

###### 根本区别★

展开运算符：[X,Y,Z]=>(X,Y,Z)
剩余参数：(X,Y,Z)=>[X,Y,Z]

###### 如何区分

```js
//(X,Y,Z)=>[X,Y,Z]
const adds = (...args) =>{
    console.log(args);
    //[X,Y,Z]=>(X,Y,Z)
    console.log(...args);//展开运算符，此时的args是数组了
}
adds(1,3,5);
```

```js
// 二维数组转换为一维数组
console.log([...[1,2,3],4]);
```



##### 应用

###### 1、克隆数组（以前需要for循环遍历克隆）

```js
const aaa = [1,23,4];
const ccc = [...aaa];
aaa[0] = 12;
console.log(aaa);
console.log(ccc);
```

###### 2、合并数组

```js
const aa = [1,2];
const bb = [3];
const cc = [4,5];
const tt = [...bb, 10, ...aa, ...cc, 123];
console.log(tt);
```

###### 3、字符串转为数组

```js
// 字符串可以按照数组的形式展开
console.log('heisming');
console.log(...'heisming');
```

###### 4、常见的类数组转化为数组(需要在数组中展开)

```js
// arguments
function fun(){
    console.log(arguments);
    console.log([...arguments]);
}
fund(1,2,3)
// NodeList
const p = document.getElementsByTagName('p');
const p1 = document.querySelectorAll('p');
console.log(p);
console.log(p1);
console.log([...p]);
console.log([...p1]);
```







#### 5.2.2《对象的展开运算符》

##### 基本用法

###### 1、展开对象

```js
// 对象不能直接展开，必须在{}中展开
const apple ={
  color:'青色',
  shape:'球形',
  taste:'甜'
}
console.log(apple);
// 对象的展开：把属性罗列出来，用逗号分隔，放到一个{}中，构成新对象
console.log({...apple});// 得到了一个新的对象
console.log({...apple} === apple);
```

###### 2、合并对象

```js
const pen ={
        color:'黑色',
        shape:'圆柱形',
        use:'写字'
    }
//后面的覆盖前面的做合并（取交集）
console.log({...apple,...pen});
console.log({...pen,...apple});
//对象中有两个对象
console.log({apple,pen});
//单个展开
console.log({...apple,pen});
```



##### 注意事项

###### 1、空对象的展开（无意义）

```js
console.log({...{}});
console.log({...{},a: 1});
```

###### 2、非对象的展开

```js
//如果展开的不是对象，则会自动将其转为对象，再将其属性罗列出来
console.log({...1});// {}
console.log({...null});// {}
console.log({...undefined});// {}
console.log(new Object(1));// { Number {1} }
console.log("=================");
//如果展开运算符后面是字符串，它会转换成一个类似数组的对象，因此返回的不是空对象
console.log({...'null'});// {0：n,1:u,2:l,3:l}
console.log([...'null']);// ["n","u","l","l"]
console.log(...'null');// n u l l
console.log("=================");
console.log({...['null']});// {0: null}
console.log(...['null']);// "null"
//否定之否定
console.log([...['null']]);// ['null']
console.log({...[9, 99, 999]});// { 0: 9, 0: 99, 0: 999}
console.log("=================");
```

###### 3、对象中对象属性的展开

```js
//不会展开对象中的对象属性
const pear = {
    feature : {
        taste : 'sweet'
    }
};
const pencil ={
    feature : {
        color: 'green',
        shape: 'ride'
    },
    use :'write'
};
console.log({...pear});
console.log({...pencil});
// 内层的属性依然后面覆盖前面
console.log({...pencil,...pear});
```



##### 应用

###### 1、克隆对象

```js
const ee = { a: 1 , b: 2 };
const dd = {...ee};
console.log(ee === dd);
```

###### 2、用户参数和默认参数

```js
// 当userParam不传递值的时候，可以得到默认的defaultParam的值
const logUser = userParam => {
    const defaultParam = {
        name :'zhansan',
        age : 0,
        sex :'男'
    };
    const param = {...defaultParam, ...userParam};
    console.log(param.name);
    const {name, age, sex} = {...defaultParam, ...userParam};
    console.log(sex);
};
logUser();
```



### 一些问题

1、剩余参数的注意事项与应用

2、数组和对象的展开运算符的注意事项与应用    

3、数组的reduce方法的第一个参数的意义以及其应用







## 6、Set和Map数据结构

### 6.1、Set数据结构

#### 6.1.1、什么是Set

```js
// 集合
// 数组是一系列有序的数据集合
// Set是一系列无序、没有重复值的数据集合
const s = new Set();
s.add(1);
s.add(1);
s.add(2);
s.add(2);
console.log(s);// Set(2) {1, 2}
// Set没有下标去标示每一个值，所以Set是无序的，也不能像数组那样通过下标去访问Set的成员
```

#### 6.1.2、Set实例的方法和属性

##### 1、方法

###### add添加数据

```js
const s = new Set();
s.add(1).add(2).add(3);
```

###### has判断是否有

```js
console.log(ss.has(2));
```

###### delete(删除不存在的成员，不发生任何事情，不报错)

```js
console.log(ss.delete(3));
console.log(ss.delete(0));
```

###### clear清空所有

```js
ss.clear();
```

###### forEach遍历(按照成员添加进集合的顺序)

```js
s.forEach(function (value, key, set) {
    // Set中value = key
    console.log(value, key, set === s);
    console.log(this);//#document
}, document);
```



##### 2、属性

###### size长度

```js
console.log(s.size);
```





#### 6.1.3、Set构造函数的参数

##### 1、数组作为参数

```js
const sss = new Set([1,12,123]);
console.log(sss);// Set(3) {1, 12, 123}
```

##### 2、字符串、arguments、NodeList、Set等

###### 字符串📃

```js
console.log(new Set('hewwo'));//Set(4) {"h", "e", "w", "o"}
```

###### arguments

```js
function fun() {
    console.log(new Set(arguments)); //Set(2) {1, 11}
}
fun(1,11,11)
```

###### NodeList

```js
console.log(new Set(document.querySelectorAll('p'))); //Set(3) {p, p, p}
```

###### Set

```js
console.log(new Set(sss));// Set(3) {1, 12, 123}
console.log(new Set(sss) === sss);// fasle
```





#### 6.1.4、Set的注意事项

##### 1、判断重复的方式

```js
const s1 = new Set([1,2,1,NaN,NaN,{},{}]); // Set(5) {1, 2, NaN, {…}, {…}}
// Set对重复值的判断基本遵循严格相等(===)
// 但是对于NaN的判断与 === 不同，Set中NaN等于NaN★★★★★
console.log(s1);
```

##### 2、什么时候使用Set★★★★★

2.1、数组或字符串去重时

2.2、不需要通过下标访问，只需要遍历时

2.3、为了使用Set提供的方法和属性的时候(add, delete, clear, has, forEach, size)





#### 6.1.5、Set的应用

##### 1、数组去重

```js
const s2 = new Set([1,2,1,2,3,3,2,3,4,2,3,4,5]);
function clearRe(set) {
    console.log([...set]);
}
clearRe(s2);
```

##### 2、字符串去重

```js
console.log([...new Set('hello world')].join(''));
```

##### 3、存放DOM元素

```js
new Set(document.querySelectorAll('p')).forEach(function (elem) {
    console.log(elem);//（3）<p style="color: red; background-color: #abcdef;">1</p>
    console.log(this);//（3）window
    elem.style.color = 'red';
    elem.style.backgroundColor = '#abcdef';
});
```







### 6.2、Map数据结构

#### 6.2.1、认识Map（Map和对象都是键值对的集合）

```js
// 映射
// 键 => 值，key => value
const person = {
    name: 'heisming',
    age: 16
}
const m = new Map();
m.set('name', 'heisming').set('age', 15);
console.log(m);
```





#### 6.2.2、Map和对象的区别

对象一般用字符串当做键、default,true都是字符串

```js
const obj = {
    default : 'default',
    true : 'true',
    [{}] : 'object'
}
console.log(obj);//{default: "default", true: "true", [object Object]: "object"}
console.log({}.toString());//[object Object]
```

基本数据类型：数字、字符串、布尔值、undefined、null
引用数据类型：对象（[]、{}、函数、Set、Map等）

```js
// 以上都可以作为Map的键
const m1 = new Map();
m1.set('name', 'llimng');
m1.set(true, 'yes');
m1.set(undefined, 'undefined');
m1.set({}, 'no');
m1.set(new Set([2, 1]), 'set');
console.log(m1);
// Map(5) {"name" => "llimng", true => "yes", undefined => "undefined", {…} => "no", Set(2) => "set"}
```





#### 6.2.3、Map实例的方法和属性

##### 1、方法

###### set方法

```js
// set添加的新成员，键如果已经存在，后添加的键值对覆盖已有的
const m2 = new Map();
m2.set(1,1).set(2,2).set(1,3).set(true,'yes');
console.log(m2);//Map(3) {1 => 3, 2 => 2, true => "yes"}
```

###### get方法(不存在返回undefined)

```js
console.log(m2.get(true));// yes
console.log(m2.get('true'));// undefined
```

###### has是否有

```js
console.log(m2.has(true));// true
console.log(m2.has(2));// true
```

###### delete删除某一个

```js
console.log(m2.delete(true));//true
```

###### clear一键清除

```js
m2.clear();
```

###### forEach遍历

```js
console.log(m2);//Map(2) {1 => 3, 2 => 2}
m2.forEach(function (value,key,map) {
    console.log(key,value,map === m2);   
    //1 3 true 
    //2 2 true
})
```



##### 2、属性

```js
console.log(m2.size);//2
```





#### 6.2.4、Map构造函数的参数

##### 1、(二维)数组当做参数

```js
 console.log(new Map([[1, 2], [3, 2]])); // Map(2) {1 => 2, 3 => 2}
```

##### 2、Set、Map等(克隆)

```js
console.log(new Map(new Map(new Set([['a', 1], ['b', 2]]))));
// Set(2) { ['a', 1], ['b', 2] }
// Map(2) {'a' => 1, 'b' => 2}
```





#### 6.2.5、Map的注意事项

##### 1、判断键名是否相同的方式

Map对重复值的判断基本遵循严格相等(===)

但是对于NaN的判断与 === 不同，Map中NaN等于NaN★★★★★  

##### 2、什么时候使用Map

如果只需要k:v的结构，或者需要字符串以外的值做键K

forEach遍历（对象使用 for(k in obj)）

需要使用到Map的一些常用方法(set,*get,delete,clear,has,forEach,size)

只有模拟现实世界的实体时，才使用对象





#### 6.2.6、Map的应用

```js
const [p1, p2, p3] = document.querySelectorAll('p');
const m3 = new Map();
m3.set(p1, {
    color: 'red',
    backgroundColor: '#fdecba',
    fontSize: '19px'
});
m3.set(p2, {
    color: 'blue',
    backgroundColor: '#abcedf',
    fontSize: '22px'
});
m3.set(p3, {
    color: 'yellow',
    backgroundColor: '#cbafde',
    fontSize: '33px'
});
console.log(m3);
m3.forEach((propObj, elem) => {
    for (const p in propObj) {
        elem.style[p] = propObj[p];
    }
});
//对象改成Map改写
```



### 一些问题

1、set和Map的实例的方法和属性、构造函数的参数、注意事项及应用各是什么







## 7、Iterator遍历器与for...of循环

### 7.1、Iterator遍历器

#### 1、Iterator的作用

Iterator：遍历器（迭代器）

#### 2、寻找Iterator

```js
try {
    console.log(Iterator);
} catch (error) {
    console.log('报错');
}
// 在数组的原型链上__proto__有: Symbol(Symbol.iterator): ƒ values()
console.log([1.2]);
```

#### 3、使用Iterator

```js
// it：可遍历对象（可迭代对象）
// Symbol.iterator：可遍历对象的生成方法
const it = [1,2][Symbol.iterator]();
console.log(it.next());//{value: 1, done: false}
console.log(it.next());//{value: 2, done: false}
console.log(it.next());//{value: undefined, done: true}
```

#### 4、什么是Iterator：以下过程

Symbol.iterator：可遍历对象的生成方法 => it：可遍历对象（可迭代对象）=> it.next() => it.next() =>...(直到done为true)



#### 7.1.1、Iterator解惑

##### 1、为什么需要iterator遍历器

遍历数组：for循环和forEach方法

遍历对象：for in循环

iterator遍历器是一个统一的遍历方式

##### 2、如果更方便的使用iterator

我们一般不会直接使用iterator去遍历

我们会使用iterator封装好的for...of





### 7.2、《Symbol》详解

#### 7.2.1、Symbol是什么？

是ES6新引入的基本数据类型，表示《独一无二的值》，它是JS中的第七种数据类型，与udefined、null、Number、String、Boolean、Object并列

```js
const s = Symbol();
console.log(s);// Symbol()
console.log(typeof s);// symbol
```



#### 7.2.2、语法规范

##### 1、基本语法

```js
let a = Symbol();
let b = Symbol();
console.log(a, b);// Symbol() Symbol()
console.log(a === b);// false
// 可以在调用的时候传入一个字符串作为描述
let a1 = Symbol('a1');
let b1 = Symbol('b1');
console.log(a1, b1);// Symbol(a1) Symbol(b1)
try {
    let aa = new Symbol()
} catch (error) {
    console.log('Symobol是基本数据类型，不能用new调用');       
}
```

##### 2、Symbol的遍历

```js
let a1 = Symbol('a1');
let b1 = Symbol('b1');
// 以Symbol类型的变量作为对象属性时，该属性不会出现在for...in、for...of循环中
// 由于a1和b1是一个变量，因此需要使用中括号括起来（否则它会被当做字符串使用）
let aa = {
    name: '夕山雨',
    [a1]: 24,
    [b1]: function () {}
}
for(const key in aa){
    console.log(key + ':' + aa[key]);
}
```

##### 3、Symbol.for()  Symbol.keyFor()

###### 	1）Symbol.for()

Symbol提供的一种可以创建相同Symbol的机制，就是使用Symbol.for()进行注册

```js
let a2 = Symbol.for('heisming');  // 全局注册了以"heisming"为描述符的 Symbol
// 由于描述符"heisming"已被注册到全局，因此这里创建的 Symbol 与上面是同一个
let b2 = Symbol.for('heisming');  
console.log(a2 === b2) // true
// 通过该方法生成的Symbol会在当前作用域中注册指定的描述符，之后再次通过Symbol.for()传入相同的描述符时，
// 就可以得到相同的Symbol值，所以a2和b2是相同的，返回true
```

###### 	2）Symbol.keyFor()

返回一个全局注册的Symbol的描述符

```js
let sy = Symbol.for('lm');
let descript = Symbol.keyFor(sy);
console.log(descript);//lm
```



#### 7.2.3、Symbol的作用

```js
// 由于每一个Symbol的值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
// 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖
let s1 = Symbol('s1');
let s2 = Symbol('s2');
const obj = {
    age: 16,
    age: 19,
    [s1]: 'Hello!',
    [s2]: 'world'
};
console.log(obj);// {age: 19, Symbol(s1): "Hello!", Symbol(s2): "world"}
// 由于age是字符串类型的，同名属性会被覆盖，所以obj对象中只会有一个age属性，而Symbol值是唯一的，即使控制台中输出的结果看起来是一样的，
// 但它们并不表示同一个值，所以obj中s1和s2都为添加到obj对象中
```



#### 7.2.4、常用内置的Symbol值：Symbol.iterator

```js
// 对象的Symbol.iterator属性，指向该对象的默认遍历器方法，凡是具有[Symbol.iterator]方法的对象都是可遍历的，
// 可使用for...of循环一次输出对象的每个属性
// 数组和类数组，以及ES6中的Map、Set等都原生部署了该方法，因此它们都可遍历
for (const item of [1,2,3]) {
    console.log(item);
}
```



#### 7.2.5、Symbol与基本数据类型转换

#####  1）Symbol不能转成数字

```js
let ton = Symbol('1');
try {
    console.log(Number(ton));
} catch (error) {
    console.log('无法转换为数字类型');
}
```

#####  2）可以转成布尔值和字符串

```js
let ss = Symbol('1');
console.log(typeof ss);
console.log(typeof String(ss));
console.log(typeof Boolean(ss));
```



#### 7.2.6、总结📃

​	一般Symbol值就是为**对象属性的键值**，防止该属性被覆盖，使用Symbol作为对象属性时，需要使用方括号语法去访问对应的属性，而不是字符串







### 7.3、for...of循环

#### 1、for...of的用法

```js
const arr = [1,2,3];
// for...of循环封装了
const its = arr[Symbol.iterator]();
let next = its.next();
console.log(next);
while(!next.done){
    console.log(next.value);
    next = its.next();
    console.log(next);
}
// 用法与for循环类似
for (const item of arr) {
    console.log(item);
}
// for...of循环只会遍历出那些done为false时，对应的value值
```

#### 2、与break、continue一起使用

```js
const arrs = [3,6,9];
for (const item of arrs) {
    if(item === 2){
        // break;
        continue;
    }
    console.log(item);
}
```

#### 3、如何在for...of中取得数组的索引📃

```js
console.log(arrs.keys());//Array Iterator {}
//keys()得到的是索引的可遍历对象，可以遍历出索引值
for(const key of arrs.keys()){
    console.log(key);
}
//values()得到的是值的可遍历对象，可以遍历出值
for(const value of arrs.values()){
    console.log(value);
}
//entries()得到的是索引+值组成的数组的可遍历对象
for(const entries of arrs.entries()){
    console.log(entries);
}
//解构赋值
for(const [index,value] of arrs.entries()){
    console.log(index,value);
}
```



#### 7.3.1、什么样的数据可以使用for...of循环？

原生可遍历与非原生可遍历

##### 1、什么是可遍历（可以使用for...of）★

​	只要有Symbol.iterator方法，并且这个方法可以生成可遍历对象，就是可遍历的

##### 2、原生可遍历的有哪些

###### 数组

```js
for (const item of [3,3,3]) {
    console.log(item);//输出三次3
}
```

###### 字符串

```js
for (const item of '[3,3,3]') {
    console.log(item);// 依次输出： ' [ 3 , 3 , 3 ] '
}
```

###### Set和Map

```js
for (const item of new Set([3,3,2])) {
    console.log(item);//依次输出： 3 2
}
for (const item of new Map([[3,3],['a',1]])) {
    console.log(item);//依次输出 [3,3] ['a',1]
}
```

###### arguments

```js
function fun() {
    for (const item of arguments) {
        console.log(item);
    }
}
fun(2,2,3,4);//依次输出： 2 2 3 4
```

###### NodeList

```html
<p>1</p>
<p>1</p>
<p>1</p>
<script>
for (const elem of document.querySelectorAll('p')) {
    console.log(elem);
    elem.style.color = 'red';//将所有p标签字体颜色变红，可带入浏览器执行
}
</script>
```



##### 3、非原生可遍历的有哪些

###### 一般的对象

```js
const person ={sex:'男',age: 121};
try {
    for (const item  of person) {
        console.log(item);
    }    
} catch (error) {
    console.log('报错');
}
```

###### {next()}{value,done}手写★★★★★📃

```js
person[Symbol.iterator] = () => {
  let index = 0
  return{
    next(){
      index++;
      if (index === 1) {
        return {
        value: person.age,
        done:false
        }
      }else if(index === 2){
        return {
        value: person.sex,
        done:false
        }
      }else{
        return{done:true}
      }
    }
  }
}
for (const item  of person) {
    console.log(item);
}
```



###### 有length值和索引属性的对象

```js
const objs ={
    0: 'a',
    1: 'b',
    length :2
}
```

######  手写★★★

```js
objs[Symbol.iterator] = () =>{
    let index = 0;
    return{
        next(){
            let value,done;
            if (index < objs.length) {
                value = objs[index];
                done = false;
            }else{
                value = undefined;
                done = true;
            }
            index++;
            return{
                value,
                done
            };
        }
    }
}
// 借用
objs[Symbol.iterator]  = Array.prototype[Symbol.iterator
// 输出
for (const item of objs) {
    console.log(item);
}
```



##### 4.使用了Iterator的场合

###### 原生可遍历的

###### 数组Array

```JS
//《数组的展开运算符》使用了Iterator
console.log(...[1,2,3]);
```

```JS
//《数组的解构赋值》使用了Iterator
let [a0,b0] = [1,2];
let [a10,b10] = 'hi';
```

###### 字符串String

###### Set和Map

```JS
//《Set和Map的构造函数》使用了Iterator
const set = new Set([1,2,3]);
const map = new Map([[1,2],['abc','abc']]);
```

###### 函数的arguments对象

###### NodeList对象



### 一些问题

1、Iterator遍历器的遍历过程？

2、for...of的应用场景，如何与break、continue一起使用，如何获得数组的索引

3、可遍历和非可遍历有哪些？

4、使用了Iterator的场合有哪些地方？







## 8、ES6的新增方法

### 8.1、字符串的新增方法

#### includes()★★★

判断字符串中是否含有某些字符

##### 1、基本用法

```js
console.log('abc'.includes('b'));//true
console.log('abc'.includes('ab'));//true
```

##### 2、第二个参数

```js
//表示开始搜索的位置，默认0
console.log('abc'.includes('b',3));//false
```

##### 3、应用

```js
let url = 'https://www.baodu.com';
const addURLParam = (url,name,value) =>{
    url += url.includes('?')?'&':'?'; 
    url += `${name}=${value}`;
    return url;
} 
url = addURLParam(url,'c','fe');
console.log(url);
url = addURLParam(url,'c','fe');
console.log(url);
```



#### padStart()和padEnd()

补全字符串长度

##### 1、基本用法

```js
console.log('x'.padStart(5,'ab'));//ababx
console.log('x'.padEnd(5,'ab'));//xabab
console.log('x'.padEnd(4,'ab'));//xaba
```

##### 2、注意事项

```js
//原字符串的长度>=最大长度，保持原样
console.log('xxx'.padStart(2,'ab'));//xxx
//补全字符串大长度查过最大长度，截去超过的补全字符串
console.log('xxx'.padStart(10,'0123456789'));//0123456xxx
//第二个参数省略，默认使用空格
console.log('x'.padStart(4));//空格空格空格空格x
```

##### 3、应用

```js
//显示日期格式(保证两位数)
console.log('10'.padStart(2,0));//10
console.log('1'.padStart(2,0));//01
```



#### trimStart()和trimEnd()

清除字符串的首或尾空格，中间的空格不会清除

##### 1、基本用法

```js
const s = '  a bc ';
console.log(s);//空格空格a空格bc空格
console.log(s.trimStart());//a空格bc空格
console.log(s.trimEnd());//空格空格a空格bc
const s1 = '  a bc ';
console.log(s1);//空格空格a空格bc空格
console.log(s1.trimLeft());//a空格bc空格
console.log(s1.trimRight());//空格空格a空格bc
const s2 = '  a bc ';
console.log(s2.trim());//a空格bc
```

##### 2、应用(提交前的验证)

```js
const usernameInput = document.getElementById('username');
const submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
  console.log(usernameInput.value);
  //验证
  if (usernameInput.value.trim() !== '') {
      console.log('可以提交');
  }else{
      console.log('不能提交');
  }
  //手动提交
},false);
```



#### replaceAll()

##### 1、为什么要replaceAll方法

```JS
//由于字符串的实例方法replace只能替换第一个匹配的内容
console.log('aabbcc'.replace('b','_'));//aa_bcc
//如果需要替换所有则需要使用正则表达式的g修饰符
console.log('aabbcc'.replace(/b/g,'_'));//aa__cc
//使用replaceAll
console.log('aabbcc'.replaceAll('b','_'));//aa__cc
```

##### 2、语法

```JS
String.prototype.replaceAll(searchValue,replacement);
// searchValue：表示搜索模式，可以是一个字符串，也可以是一个全局的正则表达式（带有g修饰符，没有会报错）
// replacement：表示替换的文本，是一个字符串
```

```JS
const fruits = '🍎+🍓+';
const fruitsWithBanana = fruits.replace(/\+/g,'🍌');
console.log(fruits);//🍎+🍓+
console.log(fruitsWithBanana);//🍎🍌🍓🍌
```

##### 3、replaceAll()应用场景

```JS
// 去除字符串中多余的文字，例如：如下字符串，需要把‘省’去掉，变成：广东、福建、浙江、湖南、河北、河南
const str1 = "广东省，福建省，浙江省，湖南省，河北省，河南省，...";
// 将省字替换为空白字符即可
const str = str1.replaceAll('省',"");
console.log(str1);// 广东省，福建省，浙江省，湖南省，河北省，河南省，...
console.log(str);// 广东，福建，浙江，湖南，河北，河南，...
```







### 8.2、数组的新增的方法

#### includes()★★★

##### 1、基本用法

```js
//判断数组中是否含有某个成员
console.log([1,2,3].includes('2'));//fasle
console.log([1,2,3].includes(2));//true
//NaN === NaN
console.log([1,2,NaN].includes(NaN));//true
```

##### 2、应用

```js
//数组去重
const arr = [1,2,1],newArr = [];
for (let item of arr) {
    if(!newArr.includes(item)){
        newArr.push(item);
    }
}
console.log(newArr);
```





#### Array.from()★★★

将其他数据类型转换成数组

##### 1、基本用法

```js
console.log(Array.from('string'));//(6) ["s", "t", "r", "i", "n", "g"]
```

##### 2、哪些可以通过Array.from()转换成数组

###### 2.1、所有可遍历的

```js
//数字、字符串、Set、Map、NodeList、arguments
console.log(Array.from(new Set([1,2,1])));//(2) [1, 2]
console.log([...new Set([1,2,1])]);//(2) [1, 2]
```

###### 2.2、拥有length属性的任意对象(没有就是{})

```js
const obj ={
    '0':'a',
    '1':'b',
    name:'lm',
    length:1
};
const obj2 ={
    '0':'a',
    '1':'b',
    name:'lm',
    length:2
};
const obj3 ={
    '0':'a',
    '1':'b',
    name:'lm',
    length:3
};
console.log(Array.from(obj));//["a"]
console.log(Array.from(obj2));//["a","b"]
console.log(Array.from(obj3));//(3) ["a", "b", undefined]
```

##### 3、第二个参数

```js
// 作用类似于数组的map()方法，用来对每个元素进行处理，将处理后的值放入返回的数组
console.log(
    [1,2].map(value =>{
        return value*2;
    })
);
// [2,4]
console.log(Array.from('12',value => value*2)); // [2,4]
console.log(Array.from('12').map(value => value*2)); // [2,4]
```

##### 4、第三个参数（修改this指向）

```js
Array.from(
    '12',
    function () {
        console.log(this);//#document
    },document
);// (2) [undefined, undefined]
Array.from(
    '12',
    () => {
        console.log(this);//window
    },document
);// (2) [undefined, undefined]
```





#### find()和findIndex()

find()找到满足条件的第一个立即返回其值，不满足undefined

findIndex()找到满足条件的第一个，立即返回其索引，不满足-1

##### 1、基本用法

```js
console.log([1,5,10,15].find(function (value,index,arr) {
    console.log(value,index,arr);
    console.log(this);
    return value > 9;
},document));
console.log([1,5,10,15].findIndex(function (value,index,arr) {
    console.log(value,index,arr);
    console.log(this);
    return value > 9;
},document));
```

##### 2、应用(对象)

```js
const students = [
{
  name: '张三',
  sex: '男',
  age: 16
},
{
  name: '李四',
  sex: '女',
  age: 22
},
{
  name: '王二麻子',
  sex: '男',
  age: 32
}
];
console.log(students.find(value => value.sex === '女'));//{name: '李四',sex: '女',age: 22}
console.log(students.find(function(value){
    return value.sex === '女'}));//{name: '李四',sex: '女',age: 22}
console.log(students.findIndex(value => value.sex === '女'));//1
```







### 8.3、对象的新增方法📃

#### Object.assign()★★

##### 1、基本使用

用来合并对象，Object.assign(目标对象, 源对象1,源对象2,...) : （返回）目标对象

```js
 const apple = {
   color: '红色',
   shape: '圆形',
   taste: '甜'
 };
 const pen = {
   color: '黑色',
   shape: '圆柱形',
   use: '写字'
 };
 // Object.assign()直接合并到了第一个参数中，返回的就是合并后的对象
 // 改变了apple
 console.log(Object.assign(apple,pen));//{color: "黑色", shape: "圆柱形", taste: "甜", use: "写字"}
 console.log(apple);//{color: "黑色", shape: "圆柱形", taste: "甜", use: "写字"}
 console.log(Object.assign(apple,pen) === apple);//true
 // 这样就生成新对象，没有改变原来的对象(可以合并多个对象)
 console.log(Object.assign({},apple,pen));// {color: "黑色", shape: "圆柱形", taste: "甜", use: "写字"}
 console.log({...apple,...pen});// {color: "黑色", shape: "圆柱形", taste: "甜", use: "写字"}
```

##### 2、注意事项

###### 2.1、基本数据类型作为源对象

```js
// 与对象的展开类似，先转换成对象，再合并
console.log(Object.assign({},undefined));//{}
console.log(Object.assign({},null));//{}
console.log(Object.assign({},1));//{}
console.log(Object.assign({},true));//{}
console.log(Object.assign({},'string'));//{0:"s",1:"t",2:"r",3:"i",4:"n",5:"g"}
```

###### 2.2、同名属性的替换

```js
// 后面的覆盖前面的
const apples  = {
  color: ['红色', '黄色'],
  shape: '圆形',
  taste: '甜'
};
const pens = {
  color: ['黑色', '银色'],
  shape: '圆柱形',
  use: '写字'
};
console.log(Object.assign({}, apples, pens));//{color: ['黑色', '银色'], shape: '圆柱形',taste: '甜',use: '写字'}
```

##### 3、应用

```js
// 合并默认参数和用户参数
const logUser = userOptions => {
    const DEFAULTS = {
        name : 'wangsi',
        age :0 ,
        sex: 'male'
    }
    const options = Object.assign({},DEFAULTS,userOptions);
    console.log(options);
};
logUser();//{name:"wangsi",age:0,sex:"male"}
logUser({name:'lm'});//{name:"lm",age:0,sex:"male"}
```



#### Object.keys()、Object.values()、Object.entries()📃

##### 1、基本用法

```js
const person ={
    name :'hes',
    age :18
}
console.log(Object.keys(person));//["name","age"]
console.log(Object.values(person));//["hes",18]
console.log(Object.entries(person));//[["name","hes"],["age",18]]
```

##### 2、与数组类似方法的区别

```js
console.log([1,2].keys());//Array Iterator {}
console.log([1,2].values());//Array Iterator {}
console.log([1,2].entries());//Array Iterator {}
```

数组的 keys()、values()、entries() 等方法是实例方法，返回的都是 **Iterator**

对象的 Object.keys()、Object.values()、Object.entries() 等方法是构造函数方法，返回的是**数组**

##### 3、使用 for...of 循环遍历对象（应用）

```js
const person ={
    name :'hes',
    age :18
}
for (const item of Object.keys(person)) {
    console.log(item);
    //name 
    //age
}
for (const item of Object.values(person)) {
    console.log(item);
    //hes 
    //18
}
for (const item of Object.entries(person)) {
    console.log(item);
    //["name","hes"] 
    //["age",18]
}
for (const [key,value] of Object.entries(person)) {
    console.log(key,value);
    //name hes  
    //age 18
}
```

Object.keys()/values()/entires() 并不能保证顺序一定是你看到的样子，这一点和 for in 是一样的



### 一些问题

1、字符串的新增方法：includes/padStart/padEnd/trimStart/trimEnd/trimLeft/trimRight

2、数组的新增方法：includes/Array.from/find/findIndex

3、对象的新增方法：Object.assgin/Object.keys/Object.values/Object.entries





```js
const { createRouter, createWebHashHistory } from 'vue-router'
const routes = {
 { 
   path: '/',
   name: 'index',
   component: () => import('../views/index.vue')
 }
}
const router = createRouter(
  history: createWebHashHistory();
  routes
)
export default router
```



## 9、Promise

### 1、认识Promise

是异步操作的一种解决方案

```js
// 回调函数
document.addEventListener('click',() => {
    console.log('这里是异步的');
},false);
console.log('这里是同步的');
```

### 2、什么时候使用Promise

一般用来解决层层嵌套的回调函数（回调地狱callback hell）的问题

```js
// 运动
const box = document.getElementById('box');
const move = (el, {x = 0, y = 0} = {},end =() =>{}) =>{
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
    el.addEventListener('transitionend',() => {
        end();
    },false);
};
document.addEventListener('click',() => {
    move(box, { x: 100 }, () => {
        move(box, { x: 100, y: 100 }, () => {
            move(box, { y: 150 }, () => {
                move(box, { x: 0, y: 0 }, () =>{
                  //...
                });
            });
        }); 
    });
},false);
```



### 9.1、Promise的基本用法

#### 1、实例化构造函数生成实例对象

```js
console.log(Promise);
const p = new Promise(() => {});
```

#### 2、Promise的状态★★★

```js
const pp = new Promise((resolve,reject)=>{
//Promise 有 3 种状态，一开始是 pending（未完成），执行 resolve，变成 fulfilled(resolved)，已成功
//执行 reject，变成 rejected，已失败
//Promise 的状态一旦变化，就不会再改变了
//pending->fulfilled(resolved)
    resolve();
//pending->rejected    
    reject();//会执行，不改变状态
});
console.log(pp);
// 控制台查看
// Promise {<fulfilled>: undefined}
    // __proto__: Promise
    // [[PromiseState]]: "fulfilled"
    // [[PromiseResult]]: undefined
```

#### 3、then方法

```js
pp.then(()=>{
    console.log('success');
},()=>{
    console.log('fail');
});
```

#### 4、resolve和reject函数的参数

```js
const ppp = new Promise((resolve, reject) => {
    // Promise 有 3 种状态，一开始是 pending（未完成），执行 resolve，变成 fulfilled(resolved)，已成功
    // 执行 reject，变成 rejected，已失败
    // Promise 的状态一旦变化，就不会再改变了
    // pending=>fulfilled
    // resolve('succ');
    resolve({ username: 'lm' });
    // pending->rejected
    // reject('error');
    reject(new Error('error'));
});
ppp.then(
    data => {
        console.log('success', data);
    },
    err => {
        console.log('error', err);
    }
);
console.log(ppp);
```





### 9.2、Promise实例化方法

#### then

##### 1、什么时候执行

pending => fulfilled 时，执行 then 的第一个回调函数

pending => rejected 时，执行 then 的第二个回调函数

##### 2、执行后的返回值

then 方法执行后返回一个新的 Promise 对象

```js
const p1 = new Promise((resolve,reject) => {
    resolve();
    // reject();
});
const p2 = p1.then(
    () => {},
    () => {}
).then().then();
console.log(p1, p2, p1 === p2);
// Promise {<fulfilled>: undefined}  Promise {<pending>} false
```

##### 3、then方法返回的Promise对象的状态改变(向后传值)📃

```js
const p2 = new Promise((resolve,reject) => {
    // resolve();
    reject();
});
p2.then(
    () => {
        console.log('sucess');
        // 在 then 的回调函数中，return 后面的东西，会用 Promise 包装一下
        // 默认返回的永远都是成功状态的 Promise 对象
        // return 123;
        // 等价于
        // return new Promise(resolve => {
        //   resolve(123);
        // });
    },
    () => {
        console.log('error'); 
        // 如果想返回失败状态的话就需要手动调用
        return new Promise((resolve, reject) => {
            reject('fail');
        })
    }
).then(
    data => {
        console.log('sucess2', data);
    },
    err => {
        console.log('error2', err);
        return undefined;
        // 留空等价于
        return new Promise(resolve => {
           resolve(undefined);
        });
    }
).then(
    data => {
        console.log('sucess3', data);
    },
    err => {
        console.log('error3', err);
    }
);
```

##### 4、使用Promise解决回调地狱

```js
const moves = (el, {x = 0, y = 0} = {},end = () => {}) => {
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
    el.addEventListener('transitionend', () => {
        end();
    }, false);
};
const movesPromise = (el,point) => {
    return new Promise(resolve => {
        moves(el, point, () => {
            resolve();
        })
    })
}
// then.then.then是横向发展的，方便后续修改
document.addEventListener(
    'click', () => {
    movesPromise(box,{x:150}).then(()=>{
        return movesPromise(box,{x:150,y:150});
    }).then(() => {
        return movesPromise(box,{y:150});
    }).then(() => {
        return movesPromise(box,{x:0,y:0});
    });
}, false);
```



#### catch

##### 1.有什么用

- catch 专门用来**处理 rejected** 状态

- **catch 本质上是 then 的特例**，结果返回成功**fulfilled**的Promise

- ```js
  then ( null,  err => {} );    ===   catch( err => {} );
  ```

##### 2.基本用法

```js
new Promise((resolve,reject) => {
    // resolve(123);
    reject('error')
}).then(data => {
    console.log('not use')
    console.log(data);
}).catch(err => {
    console.log(err);//error
    // return undefined;
    throw new Error('mistake');
}).then(data => {
    console.log(data); // Promise {<resolved>:undefined}
}).catch(err => {
    console.log(err); 
})
// catch() 可以捕获它前面的错误
// 一般总是建议，Promise 对象后面要跟 catch 方法，这样可以处理 Promise 内部发生的错误
```



#### finally

##### 1.什么时候执行

```js
// 当 Promise 状态发生变化时，不论如何变化都会执行，不变化不执行
new Promise((resolve, reject) => {
    // resolve(123);
    reject('error')
}).finally(data => {
    console.log(data); // undefined
}).catch(err => {
    console.log(err);
})
```

##### 2.本质

```js
// finally() 本质上是 then() 的特例
// 等同于
new Promise((resolve, reject) => {
    // resolve(123);
    reject('error')
}).then( // 这个then百分百会被执行
    // 如果Promise返回成功，则执行这里的
    result => {
        console.log('result=', result)
        return result;
	},
    // 如果Promise返回失败，则执行这部分
    err => {      
        return new Promise((resolve, reject) => {
            reject(err);
   		})
}).catch(err => {
    console.log(err);
})
```







### 9.3、Promise.resolve() 和 Promise.reject()

#### 1、Promise.resolve()

```js
// 是成功状态 Promise 的一种简写形式
new Promise(resolve => resolve('foo'));
//简写
Promise.resolve('foo');
```

##### 参数

###### 一般参数

```js
Promise.resolve('foo').then(data => {
    console.log(data);
});
```

###### Promise📃

当 Promise.resolve() 接收的是 Promise 对象时，**直接返回这个 Promise 对象，什么都不做**

```js
const p5 = new Promise(resolve =>{
    setTimeout(resolve, 1000, '我执行了');
    // 全等于
    // setTimeout(() => {
    //     resolve('我执行了');
    // },1000);
});
Promise.resolve(p5).then(data =>{
    console.log(data);
});
// 等价于
// p5.then(data => {
//     console.log(data);
// });
console.log(Promise.resolve(p5) === p5); // true

// 上面的代码理解简写
new Promise(resolve => {
    setTimeout(() => {
        resolve('我执行了');
     }, 1000);
}).then(data =>{
    console.log(data);
});
```

当 resolve 函数接收的是 Promise 对象时，后面的 then 会根据**传递的 Promise 对象的状态变化决定**执行哪一个回调

```js
new Promise(resolve => resolve(p5)).then(data => {
  console.log(data);
});
```

###### 自定义then方法

- 可以使用具有 then 方法的对象

```js
function fun(obj) {
    obj.then(1,2);
};
// const obj = { then(a, b) { console.log('a:' + a,'b:' + b) } };  fun(obj)
// 含有then方法的对象，等于传递对象然后调用了它的then的方法
fun({
    then(a,b){
        console.log('a:' + a,'b:' + b); //a:1  b:2
    }
});

// 解释代码(自定义then方法)
const thenable = {
    // then: function(resolve,reject){console.log('B:then'); resolve('data');}
    then(resolve, reject){
        console.log('B:then'); // B:then
        resolve('data');
        // reject('error');
    }
}
Promise.resolve(thenable).then(
    data => console.log(data), // data
    err => console.log(err)
);
console.log(Promise.resolve(thenable));// Promise {<pending>} 只返回对象什么都不处理所以是初始状态
```



#### 2.Promise.reject()

```js
// 失败状态 Promise 的一种简写形式
new Promise((resolve, reject) => {
  reject('error');
});
// 等价于
Promise.reject('error');
```

##### 参数

不管什么参数，都会**原封不动地向后传递，作为后续方法的参数**

```js
const p11 = new Promise(resolve => {
  setTimeout(resolve, 2000, '我执行了');
});
Promise.reject(p11).catch(err => console.log(err));

new Promise((resolve, reject) => { 
    resolve(123);
    // reject(123) // Promise {<rejected>: 123}
}).then(data => {
    console.log('data1 =', data)
    // return data;
    // return Promise.resolve(data);
    return Promise.reject('error');// 直接向后传递对象 Promise {<rejected>: 'error'}
}).then(data => {
    console.log('data2 =', data)
    console.log(data)
}).catch(err => {
    console.log('err =', err) // Promise {<fulfilled>: undefined}
})
```



### 9.4、Promise.all() => &&

#### 1、有什么用

Promise.all() 关注多个 Promise 对象的状态变化，传入多个 Promise 实例，包装成一个新的 Promise 实例返回

#### 2、基本用法

- 只要有一个**Promise**返回了**reject**，立即返回reject状态的Promise

```js
const delay = ms =>{
    return new Promise(resolve =>{
        setTimeout(resolve, ms);
    });
};
const p10 = delay(1000).then(()=>{
    console.log('p10完成了');
    // return 'Promise.all():p10';
    return Promise.reject('Promise.all():error');
});
const p20 = delay(2000).then(()=>{
    console.log('p20完成了');
    return 'p20';
    // return new Promise((resolve,reject) => {reject('erorr')})
    // 简写成
    // return Promise.reject('error');
});
// Promise.all() 的状态变化与所有传入的 Promise 实例对象状态有关
// 所有状态都变成 resolved，最终的状态才会变成 resolved
// 只要有一个变成 rejected，最终的状态就变成 rejected
const P30 = Promise.all([p10,p20]); // Promise {<rejected>: 'Promise.all():error'}
P30.then(data => {
    console.log(data);
},err => {
    console.log(err);
});
// p10完成了
// Promise.all():error
// p20完成了
```





### 9.5、Promise.race() 和 Promise.allSettled()

#### 1.Promise.race() => first

- race n.比赛

```js
const delays = ms => {
    return new Promise(resolve => {
        setTimeout(resolve,ms);
    });
};
const p100 = delays(2000).then(() => {
    console.log('Promise.race():p100完成了');
    // return 'Promise.race():p100';
    return Promise.reject('Promise.race():error');
});
const p200 = delays(1000).then(() => {
    console.log('Promise.race():p200完成了');
    return 'Promise.race():p200';
    // return new Promise((resolve,reject) => {reject('Promise.race():erorr')})
    // 简写成：
    // return Promise.reject('Promise.race():error');
});
        
// Promise.race() 的状态取决于第一个完成的 Promise 实例对象，
// 如果第一个完成的成功了，那最终的就成功；如果第一个完成的失败了，那最终的就失败
const racePriomise = Promise.race([p100,p200]);
racePriomise.then(data => {
    console.log(data);
},err => {
    console.log(err);
});
```

#### 2.Promise.allSettled() => 100%

```js
const delays = ms => {
    return new Promise(resolve => {
        setTimeout(resolve,ms);
    });
};
const p1000 = delays(1000).then(() => {
    console.log('Promise.allSettled():p1000完成了');
    // return 'Promise.allSettled():p1000';
    return Promise.reject('Promise.allSettled():error');
});
const p2000 = delays(2000).then(() => {
    console.log('Promise.allSettled():p2000完成了');
    return 'Promise.allSettled():p2000';
    // return new Promise((resolve,reject) => {reject('Promise.allSettled():erorr')})
    // 简写成:
    // return Promise.reject('Promise.allSettled():error');
});
// Promise.allSettled() 的状态与传入的Promise 状态无关
// 永远都是成功的
// 它只会忠实的记录下各个 Promise 的表现
const allSettledPriomise = Promise.allSettled([p1000,p2000]);
allSettledPriomise.then(data => {
    console.log(data);
});
/**
(2) [{…}, {…}]
    0: {status: 'rejected', reason: 'Promise.allSettled():error'}
    1: {status: 'fulfilled', value: 'Promise.allSettled():p2000'}
    length: 2
    [[Prototype]]: Array(0)
*/
```



### 9.6、Promise.any(iterable[可迭代的对象])  => ||

常见返回值

传入得到参数是一组Promise实例，那么所有Promise实例都变成rejected状态，返回的Promise才会变成rejected状态

参数中只要有一个Promise改变为成功状态，则返回的Promise状态就是成功的状态

#### 1）参数中只有一个成功状态的Promise实例

```js
//失败
const p01 = new Promise((resolve,reject) => {
    reject();
});
//失败
const p02 = new Promise((resolve,reject) => {
    reject();
});
//成功
const p03 = new Promise((resolve,reject) => {
    resolve();
});
const res = Promise.any([p01,p02,p03]);
console.log(res);//返回成功状态的Promise
```

#### 2）参数中全部是失败状态的Promise实例

```js
//失败
const p001 = new Promise((resolve,reject) => {
    reject();
});
//失败
const p002 = new Promise((resolve,reject) => {
    reject();
});
//失败
const p003 = new Promise((resolve,reject) => {
    reject();
});
const ress = Promise.any([p001,p002,p003]);
// .catch(err => console.log(err));
console.log(ress);//返回失败状态的Promise
```

#### 3）注意事项

Promise.any()不会因为某个Promise实例变成失败状态而结束，这个方法用于**返回第一个成功的Promise**

**只要有一个Promise成功此方法就会终止**，它不会等待其他的Promise全部完成

```js
const p0001 = new Promise((resolve,reject) => {
    reject('Promise.any():失败');
});
const p0002 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'Promise.any()最后完成不了');
});
const p0003 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'Promise.any()第一个完成');
});
Promise.any([p0001,p0002,p0003]).then(value => {
    console.log(value);
});
```

#### 4）与Promise.all()和与Promise.race()的区别📃

(1):`Promise.all()`会返回一组完成值那样，而`Promise.any()`只能得到一个成功值（假设至少有一个Promise完成）。
    当我们只需要一个Promise成功，而不关心是哪一个成功时此方法很有用的。

(2):`Promise.race()`总是返回第一个结果值，而`Promise.any()`返回的是第一个成功的值，
    这个方法将会忽略掉所有被拒绝的Promise，直到第一个Promise成功。



#### 5）实际应用场景

一次性加载多张图片，哪一张先加载出来就显示哪一张，那么此时就可以使用Promise.any()方法实现效果





### 9.7、Promise 的注意事项

#### 1、resolve 或 reject 函数执行后的代码

​	推荐在调用 resolve 或 reject 函数的时候加上 return，不再执行它们后面的代码

```js
new Promise((resolve, reject)=>{
    // return resolve(123);
    return reject('error');
});
```

#### 2、Promise.all/race/allSettled 的参数问题

​	参数如果不是 Promise 数组，会将不是 Promise 的**数组元素转变成 Promise 对象**

```js
Promise.all([1,2,3]).then(datas =>{
    console.log(datas);
});
// 等价于
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(datas =>{
    console.log(datas);
});
```

不只是数组，**任何可遍历**的都可以作为参数

数组、字符串、Set、Map、NodeList、arguments

```js
Promise.all(new Set([1,2,3])).then(datas =>{
    console.log(datas);
});
```

#### 3.Promise.all/race/allSettled 的错误处理

```js
const delay = ms => {
    return new Promise(resolve => {
       setTimeout(resolve, ms);
    });
};
const p1111 = delay(10000).then(() => {
    console.log('p1111 完成了');
    // return 'p1111';
    return Promise.reject('error');
});
// .catch(err => {
//   console.log('p1111', err);
// });
const p2222 = delay(11000).then(() => {
    console.log('p2222 完成了');
    return 'p2222';
    // return Promise.reject('error');
});
// // .catch(err => {
// //   console.log('p2222', err);
// });
const allPromise = Promise.all([p1111, p2222]);
allPromise.then(datas => {
   console.log(datas);
}).catch(err =>
   console.log(err);
);
// 错误既可以单独处理，也可以统一处理
// 一旦被处理，就不会在其他地方再处理一遍
```



### 9.8、Promise 的应用

```js
// 异步加载图片
const loadImageAsync = url => {
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(new Error(`Could not load image at ${url}`));
        };
        img.src = url;
    });
}
const imgDOM = document.getElementById('img');
loadImageAsync('https://img.mukewang.com/5f057a6a0001f4f918720764.jpg').then(
    img => {
        console.log(img.src);
        setTimeout(() => {
            imgDOM.src = img.src;
        },5000);
    }
).catch(err => {
    console.log(err);
})
```



### 一些问题

1、什么是Promise、实例方法、构造函数方法、注意事项及应用
2、Promise.resolve/Promise.reject/Promise.then/Promise.catch/Promise.finally/Promise.all/Promise.race/Promise.allSettled/Promise.any





### 9.9、【拓展】async/await★★★

- async/await是基于Promise实现的

- async/await使得异步代码看起来像同步代码

- 以前的方法有回调函数和Promise，async/await是写异步代码的新方式

- await后面的代码全部都是异步的



#### 语法

async函数返回一个Promise对象，可以使用then方法添加回调函数。

​    当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体后面的语句

```js
const timeout = time => {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve();
        },time);
    })
};
const start = async () =>{
    // 在这里使用起来就像同步代码那样直观
    console.log('async/await:start');
    await timeout(11000);
    console.log('async/await:end');
    return 'async/await:jd';
};
start().then(data =>{
    console.log('async/await:test....' + data);
});
// async/await:start
// async/await:end
// async/await:test....async/await:jd
```

#### 注意事项

1、await命令只能在async函数之中，若果用在普通函数，就会报错

```js
const timeouts = time =>{
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve();
        }, time);
    })
};
function fn() {
    await timeouts(1111);//Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
};
fn();
```

2、await后面跟着是一个Promise对象，会等待Promise返回结果了，再继续执行后面的代码

```js
const timeoutss = time => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('async/await:imooc')
            resolve();
        }, time);
    })
};
const starts = async () => {
    await timeoutss(12000);
    console.log('async/await:end');
};
starts();
```

3、await后面跟着是一个数值或者字符串等数据类型的值，则直接返回该值

```js
const num = 1;
const srt ='async/await:imoc';
const arr =[1111,2222];
const stratV = async () =>{
    console.log(await num);
    console.log(await srt);
    console.log(await arr);
}
stratV();
```

4、await后面跟着的是定时器，不会等待定时器里面的代码执行完，而是直接执行后面的代码，然后再执行定时器的代码。

```js
const startH = async () =>{
    console.log('async/await:1');
    await setTimeout(() => {
        console.log('async/await:2');
    }, 13000);
    console.log(3);
};
startH()
```

5、用标准的try...catch语法捕捉错误

```js
const timeoutA = time => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        // 模拟出错了，返回 ‘error’
            reject('async/await:error');
        }, time);
    })
};
const startA = async () =>{
try {
        console.log('async/await:KAISHI');
        await timeoutA(14000); // 这里得到了一个返回错误
        // 所以以下代码不会被执行了
        console.log('async/await:JIESHU');
    } catch (err) {
        console.log(err); // 这里捕捉到错误 `async/await:error`
    }
};
startA()
```







## 10、Class类

### 10.1、认识类

人类：类

具体的人：实例、对象

类可以看做是对象的模板，用一个类可以创建出许多不同的对象

#### 1、Class 的基本用法

类名一般大写

```js
class Person {
  // 实例化时执行构造方法，所以必须有构造方法，但可以不写出来
  constructor(name, age) {
    console.log('实例化时构造方法会自动执行');
    this.name = name;
    this.age = age;
    // 一般在构造方法中定义属性，方法不在构造方法中定义
    // this.speak = () => {};
  }
  speak() {
      console.log('speak');
  }
}
Person.prototype.run = function () { }
const zs = new Person('zz', 18);
const zz = new Person('zz', 18);
console.log(zs.speak === zz.speak);
console.log(zs.run === zz.run);
console.log(typeof Person);
console.log(Person.prototype.speak);
```

#### 2、Class 与构造函数

```js
function Persons(name, age) {
    this.name = name;
    this.age = age;
}
Persons.prototype.speak = function () {}
```

#### 3、Class 的两种定义形式

##### 1.声明形式

```js
class Persona {
    constructor() { }
    speak() { }
}
```

##### 2.表达式形式

```js
//function Persona(){}
//const Person = function(){};
const PersonA = class {
    constructor() {
        console.log('constructor');
    }
};
```

##### 3.立即执行的匿名类

```js
(function () {
    console.log('IIFE');
})();

new (class {
    constructor() {
        console.log('立即执行的匿名类');
    }
})();
```



### 10.2、实例属性、静态方法和静态属性

#### 1、实例属性

```js
class Person {
  // 可以当成设置默认值
  age = 18;
  name = 'unkown';
  sex = 'male';
  // 获取私有属性
  getSex = function () {
    return this.sex;
  }
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  
  speak(){
    console.log('speak');
    console.log(this);
  }
  static speak() {
    console.log('人类可以说话');
    // this 指向类
    console.log(this);
  }
}
const p1 = new Person('heisming');
console.log(p1); // PersonD {age: undefined, name: "heisming", sex: "male", getSex: ƒ}
console.log(p1.name, p1.age, p1.sex);// heisming undefined male
```

#### 2、静态方法&类的方法

```js
p1.speak();
PersonD.speak();
```

#### 3、静态属性&类的属性

```js
class Person {
  // 不要这么写，目前只是提案，有兼容性问题
  // static vesion = '1.0';
  // 改写成
  static getVesion(){
    return '1.0';
  }
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log('speak');
    console.log(this);
  }
}
const P2 = new Person('lm');
console.log(P2.name);
console.log(PersonP.getVesion());
```



### 10.3、私有属性和方法

#### 1、为什么需要私有属性和方法

一般情况下，类的属性和方法都是公开的

公有的属性和方法可以被外界修改，造成意想不到的错误



#### 2、模拟私有属性和方法

##### 2.1、_ (下划线)开头表示私有(人为规定的，非语法)

```js
class PresonC{
  constructor(name){
    this._name = name;
  }
  _speak(){
    console.log('speak');
  }
  getName(){
    return this._name;
  }
}   
const P3 = new PresonC('lllx');
console.log(P3.name);
console.log(P3.getName());
```

##### 2.2、将私有属性和方法移出类

```js
(function () {
    // 移出类
    let names = '';
    class PersonX {
        constructor(name){
            names = name;
        }
        getName(){
            return names ;
        }
    }
    // 关键语句，挂在到window上提供访问
    window.PersonX = PersonX;
})();

(function () {
    const p1 = new PersonX('sadad');
    console.log(p1.getName());
})();
```





### 10.4、extends★★★

#### 子类继承父类

```js
class PersonZ {
  constructor(name, sex) {
      this.name = name;
      this.sex = sex;
      this.say = function () {
          console.log('say');
      };
  }
  speak() {
  	  console.log('speak');
  }
  static speak() {
  	  console.log('static speak');
  }
  hi() {
      console.log('hi~');
  }
}
// 在父类上添加静态属性
PersonZ.version = '1.0';

class Programmer extends PersonZ{
    constructor(name,sex,feature){
        // this 操作不能放在 super 前面
        super(name,sex);
        this.feature = feature;
    }
    // 重写父类方法override
    speak(){
        console.log('Programmer speak');
    }
}
const zc = new Programmer('zc', '男', '格子衫');
zc.say();// say
zc.speak();// Programmer speak
zc.hi();// hi~
Programmer.speak();// static speak
console.log(zc.name, zc.sex, Programmer.version, zc.feature);// zc 男 1.0 格子衫
```





### 10.5、super★

#### 1、作为函数调用

代表父类的构造方法，只能用在子类的构造方法中，用在其他地方就会报错

super 虽然代表了父类的构造方法，但是内部的 this 指向子类的实例

```js
class Personx {
  constructor(name) {
    this.name = name;
    console.log(this);
  }
}
class Programmers extends Personx {
  constructor(name, sex) {
    //当子类继承父类时，如果不需要通过constructor设置属性和继承父类constructor中的属性，那么久可以不写constructor和super，反之必须。
    super(name, sex);
  }
  // hi() {
  //   super(); // ×
  // }
}
new Personx();
new Programmers();
```



#### 2、作为对象使用📃

- 在**构造方法**中使用或**一般方法**中使用
  - `super` 代表父类的原型对象 `Person.prototype`
  - 所以定义在父类**实例上** new **Person**() 的方法或属性，是无法通过 `super` 调用的
  - 通过 `super` 调用父类的方法时，方法内部的 <`this` 指向当前的**子类实例**>
- 在**静态方法**中使用
  - 指向父类，而不是父类的原型对象（no Person.prototype）
  - 通过`static`方法中 `super` 调用父类的方法时，方法内部的 `this` 指向**当前**的**子类**(class)，而**不是子类的实例** new **Programmer**() 

```js
class Person {
   // 定义在父类上的方法或属性，是无法通过 super 调用的
   number = '777777'
   // 添加父类静态属性
   static time = '2021'
   // 构造方法
   constructor(name) {
       // 此处的this指向子类的实例
       this.name = name;
       console.log(this);// Programmer {number: "777777", name: "this你要搞死我啊"}
   }
   speak() {
      console.log(this); // Programmer {number: "777777", name: "this你要搞死我啊", age: 19}
      console.log('Person：speak ' + this.number + ' '+ this.age);// Person：speak 777777 19
   }
   static speak() {
      // 通过static方法中 super 调用父类的方法时，方法内部的 this 指向当前的子类，而不是子类的实例
      console.log(this); // class Programmer extends Person { ... } 
      console.log('Person：static speak ' + this.age);// Person：static speak undefined
   }
   // 添加父类静态属性
   getSlogn() {
       return 'success';
   }
}
// 添加父类静态属性
Person.sign = 'Bar';
console.log(new Person());
console.log(Person.prototype) // {constructor: ƒ, speak: ƒ, getSlogn: ƒ}

class Programmer extends Person {
   age = 19
   constructor(name, sex) {
       // 作为函数使用，super()代表父类的构造方法，但是this指向子类的实例，因为要给子类实例添加实例属性
       super(name, sex);
       
       // super 代表父类的原型对象 Person.prototype, 定义在父类上的方法或属性，是无法通过 super 调用的
       console.log(super.number);// Person.prototype.number ==> undefined
       
       // 指向子类的实例，详细请看JS基础的中的四步走
       // 当调用父类的构造方法完成之后，类中age的属性才会被加上，因为没有父类中没有age属性
       // 在class中直接声明的属性，以及constructor构造函数中声明的属性都是挂载到实例对象上的，但是counstructor中会覆盖class中直接声明的同名属性值。
       console.log(this);// Programmer {number: "777777", name: "this你要搞死我啊", age: 19}
       
       // super 代表父类的原型对象 Person.prototype,通过 super 调用父类的方法时，方法内部的 this 指向当前的子类实例
       super.speak();// Person.prototype.speak();
   }
   speak() {
       console.log('----------------------------');
       // super 代表父类的原型对象 Person.prototype,通过 super 调用父类的方法时，方法内部的 this 指向当前的子类实例
       super.speak(); // Person.prototype.speak();
       console.log(this);
       console.log('Programmer speak' + this.name);
   }
   // 2.2.在静态方法中使用
   // 指向父类，而不是父类的原型对象
   // 通过static方法中 super 调用父类的方法时，方法内部的 this 指向当前的子类，而不是子类的实例
   static speak() {
       console.log(this); // class Programmer extends Person { ... }
       // 作为对象在静态方法内使用，super代表父类，其中的this指向子类,所以不可访问实例属性，但是静态属性(类的属性)可以访问
       super.speak(); 
       console.log('Programmer static speak ' + this.age + ' ' +  this.time); // Programmer static speak undefined 2021
   }
}
new Programmer('this你要搞死我啊');
Programmer.speak();
```

#### 3、注意事项

使用 super 的时候，必须显式指定是作为函数还是作为对象使用，否则会报错



### 10.6、应用

#### slider.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Class 的应用</title>
    <link rel="stylesheet" href="./slider.css" />
  </head>
  <body>
    <div class="slider-layout">
      <div class="slider">
        <div class="slider-content">
          <div class="slider-item">
            <a href="javascript:;"
              ><img src="./imgs/1.jpg" alt="1" class="slider-img"
            /></a>
          </div>
          <div class="slider-item">
            <a href="javascript:;"
              ><img src="./imgs/2.jpg" alt="1" class="slider-img"
            /></a>
          </div>
          <div class="slider-item">
            <a href="javascript:;"
              ><img src="./imgs/3.jpg" alt="1" class="slider-img"
            /></a>
          </div>
          <div class="slider-item">
            <a href="javascript:;"
              ><img src="./imgs/4.jpg" alt="1" class="slider-img"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <script src="./base.js"></script>
    <script>
      // console.log(BaseSlider);

      class Slider extends BaseSlider {
        constructor(el, options) {
          super(el, options);

          this._bindEvent();
        }

        _bindEvent() {
          document.addEventListener('keyup', ev => {
            // console.log(ev.keyCode);
            if (ev.keyCode === 37) {
              // ←
              this.prev();
            } else if (ev.keyCode === 39) {
              // →
              this.next();
            }
          });
        }
      }
      new Slider(document.querySelector('.slider'), {
        initialIndex: 1,
        animation: true,
        speed: 1000
      });
    </script>
  </body>
</html>
```

#### slider.css

```css
/* css reset */
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  outline: none;
}
img {
  vertical-align: top;
}

/* layout */
.slider-layout {
  width: 80%;
  height: 420px;
  margin: 0 auto;
}

/* slider */
.slider,
.slider-content,
.slider-item,
.slider-img {
  width: 100%;
  height: 100%;
}
.slider {
  overflow: hidden;
}
.slider-item {
  float: left;
}
.slider-animation {
  transition-property: transform;
  transition-duration: 0ms;
}
```

#### base.js

```js
// 默认参数
const DEFAULTS = {
    // 初始索引
    initialIndex: 0,
    // 切换时是否有动画
    animation: true,
    // 切换速度，单位 ms
    speed: 300
};
// base
const ELEMENT_NODE = 1;
const SLIDER_ANIMATION_CLASSNAME = 'slider-animation';

class BaseSlider {
    constructor(el, options) {
        console.log(options)
        if (el.nodeType !== ELEMENT_NODE)
            throw new Error('实例化的时候，请传入 DOM 元素！');

        // 实际参数
        this.options = {
            ...DEFAULTS,
            ...options
        };

        const slider = el;
        const sliderContent = slider.querySelector('.slider-content');
        const sliderItems = sliderContent.querySelectorAll('.slider-item');

        // 添加到 this 上，为了在方法中使用
        this.slider = slider;
        this.sliderContent = sliderContent;
        this.sliderItems = sliderItems;

        this.minIndex = 0;
        this.maxIndex = sliderItems.length - 1;
        this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

        // 每个 slider-item 的宽度（每次移动的距离）
        this.itemWidth = sliderItems[0].offsetWidth;

        this.init();
    }

    // 获取修正后的索引值
    // 随心所欲，不逾矩
    getCorrectedIndex(index) {
        if (index < this.minIndex) return this.maxIndex;
        if (index > this.maxIndex) return this.minIndex;
        return index;
    }

    // 初始化
    init() {
        // 为每个 slider-item 设置宽度
        this.setItemsWidth();

        // 为 slider-content 设置宽度
        this.setContentWidth();

        // 切换到初始索引 initialIndex
        this.move(this.getDistance());

        // 开启动画
        if (this.options.animation) {
            this.openAnimation();
        }
    }

    // 为每个 slider-item 设置宽度
    setItemsWidth() {
        for (const item of this.sliderItems) {
            item.style.width = `${this.itemWidth}px`;
        }
    }

    // 为 slider-content 设置宽度
    setContentWidth() {
        this.sliderContent.style.width = `${
      this.itemWidth * this.sliderItems.length
    }px`;
    }

    // 不带动画的移动
    move(distance) {
        this.sliderContent.style.transform = `translate3d(${distance}px, 0px, 0px)`;
    }

    // 带动画的移动
    moveWithAnimation(distance) {
        this.setAnimationSpeed(this.options.speed);
        this.move(distance);
    }

    // 设置切换动画速度
    setAnimationSpeed(speed) {
        this.sliderContent.style.transitionDuration = `${speed}ms`;
    }

    // 获取要移动的距离
    getDistance(index = this.currIndex) {
        return -this.itemWidth * index;
    }

    // 开启动画
    openAnimation() {
        this.sliderContent.classList.add(SLIDER_ANIMATION_CLASSNAME);
    }

    // 关闭动画
    closeAnimation() {
        this.setAnimationSpeed(0);
    }

    // 切换到 index 索引对应的幻灯片
    to(index) {
        index = this.getCorrectedIndex(index);
        if (this.currIndex === index) return;

        this.currIndex = index;
        const distance = this.getDistance();

        if (this.options.animation) {
            return this.moveWithAnimation(distance);
        } else {
            return this.move(distance);
        }
    }

    // 切换上一张
    prev() {
        this.to(this.currIndex - 1);
    }

    // 切换下一张
    next() {
        this.to(this.currIndex + 1);
    }

    // 获取当前索引
    getCurrIndex() {
        return this.currIndex;
    }
}
```



### 一些问题

1、Class的基本用法
2、Class的两种定义形式
3、实例属性、静态方法和静态属性
4、私有属性和方法
5、extends、super





## 11、Module模块

### 1、什么是模块

模块：一个一个的局部作用域的代码块

### 2、什么是《模块系统》

模块系统需要解决的主要问题
① 模块化的问题
② 消除全局变量
③ 管理加载顺序

过去 RequireJS seaJS

现在 ES6 Module



### 11.1、Module 的基本用法

#### 1、使用 Module 模块化之前的例子

#### 2、使用 script 标签加载模块

##### 一个文件就是一个模块

只要你会用到 import 或 export，在使用 script 标签加载的时候，就要加上 type="module"

#### 3、分析 Module 解决的问题

① 模块化的问题
② 消除全局变量
③ 管理加载顺序

##### module.js

```js
// module.js
//《export default 和对应的 import》
const age = 18;
// const sex = 'male';
console.log(age);

// export default age;
// export default 20;
// export default {};

// const fn = () => {};
// export default fn;
// export default function () {}

export default class {}

// ★★★★★一个模块只能有一个 export default
// export default sex;

```

```html
<script type="module">
    //《export default 和对应的 import》
    // 1.认识导出和导入
    // 导出的东西可以被导入（import），并访问到
    // 一个模块没有导出，也可以将其导入
    // 被导入的代码都会执行一遍，也仅会执行一遍
    import './js/module.js';
    import './js/module.js';
    import './js/module.js';
    // 2.基本用法
    // 可以随便起名
    import age from './js/module.js';
    console.log(age);
    // ★★★★★ 一个模块只能有一个 export default 
</script>
```

##### modules.js

```js
//《export 和对应的 import》
// const age = 18;

// export default age;// ×
// export age;// ×
// export 18;// ×

// export 声明或语句
// export const age = 18;

 const age = 18;
 // export age; ×
//  export { age }; // √

function fn() {}
// export fn; // ×
// export function fn() {}
// export function () {} // 匿名函数不行

class className {}
// export className;// ×
// export class className {}
// export class  {} // 匿名类不行

// const age = 18;

// export const age = 18;
//多个导出 ，as 换名
export { fn as func, className, age };

export default 18;
```

```html
<script type="module">
    //《export 和对应的 import》
    // 1.基本用法
    // export 声明或语句
    // export const age = 18;
    
    // 不能随意命名（要对应）
    // import {age} from './js/modules.js';
    // console.log(age);
    // import aaa from './js/modules.js'; // 对应 export default
    
    // 2.多个导出
    // 使用export导出，导入时必要添加{}，而且要按照导出时的名称接收，但是，接收顺序可以任意书写
    // import {fn} from './js/modules.js';
    // import { fn, age, className } from './js/modules.js';
    // console.log(fn, age, className);
    
    // 3.导出导入时起别名(as 换名)
    // export { fn as func, className, age };
    import { func, age, className as Person } from './js/modules.js';
    console.log(Person);
    
    // 4.整体导入
    // 会导入所有输出，包括通过 export default 导出的
    // import obj from './js/modules.js';
    import * as obj from './js/modules.js';
    console.log(obj);
    
    // 5.同时导入
    // import { func, age, className } from './js/modules.js';
    // import age2 from './js/modules.js';
    // 一定是 export default 的在前
    // import age2, { func, age, className } from './js/modules.js';
    // import { func, age, className },age2 from './js/modules.js'; //报错
</script>
```

##### moduleb.js

```js
console.log(this);

// 防止非模块方式加载
// if (typeof this !== 'undefined') {
//   throw new Error('请使用模块的方式加载');
// }

export const age = 28;
```

```html
<script src="./js/moduleb.js">//防止非模块方式加载</script>
<script type="module">
    //《Module 的注意事项》
    // 1.模块顶层的 this 指向
    // 模块中，顶层的 this 指向 undefined
    // import './js/moduleb.js';
    
    // 2.import 和 import()
    // import 命令具有提升效果，会提升到整个模块的头部，率先执行
    console.log('第一');
    console.log('第二');
    import './js/moduleb.js';//我才是第一
    
    // import 执行的时候，代码还没执行
    // import 和 export 命令只能在模块的顶层，不能在代码块中执行
    // if (PC) {
    //   import 'pc.js';
    // } else if (Mobile) {
    //   import 'mobile.js';
    // }
    
    // import() 可以按条件导入★★★★★
    // if (PC) {
    //   import('pc.js').then().catch();
    // } else if (Mobile) {
    //   import('mobile.js').then().catch();
    // }
    
    // 3.导入导出的复合写法（不推荐这么写）
    // 复合写法导出的，无法在当前模块中使用
    // export { age } from './module.js';
    // console.log(age);//但是age无法被使用
    // 等价于
    // import { age } from './module.js';
    // export { age } from './module.js';
    // console.log(age);
</script>
```



### 一些问题

1、使用script标签加载模块时需要添加type='module'
2、导出和导入
 1、一个模块的导出可以被其它模块导入，并访问
 2、没有导出，也可以将其导入
 3、被导入的代码都会执行一遍，也仅会执行一遍
3、export dedfult 和对应的 import
 用于导出一个默认值，一个模块只能有一个
4、export 和对应的 import
 export用于导出声明或语句，可以导出多个，导出导入时起别名(as 换名)，整体导出（export dedfult和export），同时导出
 import同上
5、module的注意事项
 1、模块中，顶层的this指向undefined（是否成功加载的标志）
 2、import具有提升效果，会提升到整个模块的头部，优先执行
 3、import执行的时候，代码还没执行
 4、import和export只能在模块的顶层，不能再代码块中执行
 5、import()可以按条件导入
 6、复合写法导出的，无法再当前模块中使用







## 12、Babel与Webpack

### 12.1、Babel

#### 	1.认识 Babel

官网：https://babeljs.io/
在线编译：https://babeljs.io/repl

​	Babel 是 JavaScript 的编译器，用来将 ES6 的代码，转换成 ES6 之前的代码

#### 2.使用 Babel

```js
// ES6前
let name = 'Alex';
const age = 18;
const add = (x, y) => x + y;
// Set Map等等
new Promise((resolve, reject) => {
    resolve('成功');
}).then(value => {
    console.log(value);
});
Array.from([1, 2]);
class Person {
    constructor(name, age) {
        Object.assign(this, { name, age });
    }
}
new Person('Alex', 18);
import './index.js';
```

使用 Babel 编译后

```js
('use strict');
require('./index.js');
function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== 'undefined' &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var name = 'Alex';
var age = 18;
var add = function add(x, y) {
    return x + y;
};
new Promise(function (resolve, reject) {
    resolve('成功');
}).then(function (value) {
    console.log(value);
});
Array.from([1, 2]);
var Person = function Person(name, age) {
    _classCallCheck(this, Person);
    Object.assign(this, {
        name: name,
        age: age
    });
};
new Person('Alex', 18);
```

#### 3.解释编译结果

Babel 本身可以编译 ES6 的大部分语法，比如 let、const、箭头函数、类

但是对于 ES6 新增的 API，比如 Set、Map、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign/Array.from）都不能直接编译，需要借助其它的模块

Babel 一般需要配合 Webpack 来编译模块语法



### 12.2、Babel前的准备工作

#### 什么是 Node.js 和 npm

Node.js 是个平台或者工具，对应浏览器
后端的 JavaScript = ECMAScript + IO + File + ...等服务器端的操作
npm：node 包管理工具

##### 1.初始化json配置文件

```shell
npm install
```

##### 2.安装 Node.js

```shell
node -v
npm -v
```

##### 3.初始化项目

```shell
npm init -> package.json
```

##### 4.安装 Babel 需要的包

```shell
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/core@7.11.0 @babel/cli@7.10.5
```

##### 5、package.json用来备份包 

```shell
npm install
```



#### Babel编译ES6代码

https://babeljs.io/setup

##### 1.执行编译的命令

在 package.json 文件中添加执行 babel 的命令

```shell
babel src -d dist
```

相当于

```shell
babel src --out-dir dist
```

##### 2.Babel 的配置文件

缺少.babelrc文件
添加

```shell
npm install @babel/preset-env@7.11.0 --save-dev
```

创建配置文件 .babelrc，并配置

```json
{
  "presets": ["@babel/preset-env"]
}
```

package.json

```json
{
    "name": "babel",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "build": "babel src -d dist"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@babel/cli": "^7.10.5",         执行命令包
        "@babel/core": "^7.11.0",        核心包，发号命令
        "@babel/preset-env": "^7.11.0"   转换语法
    }
}
```





### 12.3、Webpack

#### 12.3.1、认识 Webpack

webpack 是<静态模块打包器>，当 webpack 处理应用程序时，会将所有这些模块打包成一个或多个文件

```js
import './module.js'
require('./module.js')
```

#### 12.3.2、什么是 Webpack

模块 => webpack 可以处理 js/css/图片、图标字体等单位

静态 => 开发过程中存在于本地的 js/css/图片/图标字体等文件，就是静态的

动态的内容 => webpack没办法处理，只能处理静态的

静态 

```HTML
<img src="./img/logo.png" alt="" /> 
```

动态  

```html
<img src="https://www.imooc.com/static/img/index/logo.png" alt="" />
```



#### 12.3.3、Webpack初体验

```html
<script src="./Bable/src/index.js" type="module"></script>
<script src="./Bable/webpack/bundle.js"></script>
```

webpack官网地址：https://www.webpackjs.com

##### 1.初始化项目

```shell
npm init
```

##### 2.安装 webpack 需要的包

```
npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1
```

##### 3.配置 webpack

```json
// package.json修改为
"main": "index.js"
"scripts": {
"webpack(any)": "webpack --config webpack.config.js"
},
```

```js
// webpack.config.js
const path = require('path');
module.exports = {
 // webpack.config.js添加开发者模式
 mode:'development', //production
 entry: './src/index.js',
 output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
 }
};
```

##### 4.编译并测试

```SHELL
npm run webpack(any)
```





#### 12.3.4、entry和output

```js
const path = require('path');
module.exports = {
    //开发者模式
    mode: 'development',
    // 1、指定了入口文件
    // 单入口
    // entry: './src/index.js',
    // 多入口
    entry: {
        main: './src/index.js',
        search: './src/search.js',
    },
    //2. output: {
    //单出口
    //     //__dirname当前目录
    //     path: path.resolve(__dirname, 'dist'),
    //     //filename输出文件名
    //     filename: 'bundle.js'
    // }
    //多出口
    output: {
        //__dirname当前目录
        path: path.resolve(__dirname, 'dist'),
        //[name]对应输入的文件名然后输出文件名
        filename: '[name].js'
    }
};
```





#### 12.3.5、loader

##### 1、什么是 loader

webpack js/css/图片

loader 让 webpack 能够去处理那些非 JS 文件的模块



##### 2、babel-loader★

```shell
npm install --save-dev babel-loader@8.1.0
```



##### 3、安装 Babel

```shell
npm install --save-dev @babel/core@7.11.0 @babel/preset-env@7.11.0
```

```js
//webpack.config.js
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {   //正则表达式
                test: /\.js$/,
                //不包括的文件(夹)
                exclude: /node_modules/,
                //使用的命令
                loader: 'babel-loader'
            }
        ]
    }
};
```

##### 4、配置 babel-loader

https://www.webpackjs.com/loaders/

##### 5、引入 core-js

编译新增 API
https://babeljs.io/docs/en/babel-polyfill

```shell
npm install --save-dev core-js@3.6.5
```

index.js增加新的命令如下

```shell
import "core-js/stable";
```

##### 6.打包并测试

```shell
npm run webpack
```



#### 12.3.6、plugins

##### 1.什么是 plugins 

插件

loader 被用于帮助 webpack 处理各种模块，而插件则可以用于执行范围更广的任务

https://www.webpackjs.com/plugins/

##### 2.html-webpack-plugin(安装插件)

```shell
npm install --save-dev html-webpack-plugin@4.3.0
```

会自动将index.js文件嵌入

##### 3.配置 html-webpack-plugin 插件(基本用法)

```js
// webpack.config.js(单入口)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode:'development',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
//插件
plugins:[
new HtmlWebpackPlugin({
    template:'/3.html'
})
]
};
```

##### 4.多页面时 html-webpack-plugin 插件的配置

```js
// webpack.config.js(多入口)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode:'development',
entry: {
    index:'./src/index.js',
    search:'./src/search.js',
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
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

##### 5.html-webpack-plugin 插件的其他功能★

删除 index.html 中的注释
删除 index.html 中的空格
删除各种 html 标签属性值的双引号





#### 12.3.7、webpack的应用

##### webpack处理css文件

1、将css文件导入JS中

```js
import './src/index.css'
```

2、安装 webpack 需要的包

```shell
npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1
```

3、html-webpack-plugin(安装插件)

```shell
npm install --save-dev html-webpack-plugin@4.3.0
```

会自动将index.js文件嵌入

4、安装css-loader帮助识别CSS文件（只识别只读无法使用）

```shell
npm install --save-dev css-loader@4.1.1
```

5、使用css文件

5.1 安装style-loader插件将css文件使用<style></style>标签插入

```shell
npm install --save-dev style-loader@1.2.1
```

5.2 安装**mini-css-extract-plugin**插件将css文件使用link：css文件方式插入

```shell
npm install --save-dev mini-css-extract-plugin@0.9.0
```

6.配置webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
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
},
plugins: [
    //两个插件
    new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
    filename: 'css/[name].css'
    })
]
};
```



##### 使用 file-loader 处理 CSS 中的图片

```css
background-image: url(img/logo.png);
```

1、如果是外部的资源，是不需要考虑 webpack 的，只有本地的图片才需要被 webpack 处理

```shell
npm init
npm install
```

2、安装file-loader帮助识别图片文件

```shell
npm install --save-dev file-loader@6.0.0
```

3、配置webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  
module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
module: {
    rules: [
    {
        test: /\.css$/,
        use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
            //给复制出来的图片加上公共路径，否则找不到
            publicPath: '../'
            }
        },
        'css-loader'
        ]
    },
    {
        //以这些结尾后缀的图片
        test: /\.(jpg|png|gif)$/,
        use: {
        loader: 'file-loader',
        //参考官方文档命令规则：img(复制的目录)/ [name].[ext] 表示复制：原来的图片名称.原来的格式
        options: {
            name: 'img/[name].[ext]'
        }
        }
    }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
    filename: 'css/[name].css'
    })
]
};
```



##### 使用 html-withimg-loader 处理 HTML 中的图片

```html
<img src="./src/img/logo.png" alt="" />
```

1、初始化项目

```shell
npm init
npm install
```

2、安装html-withimg-loader包

```shell
npm install --save-dev html-withimg-loader@0.1.16  
```

3、配置webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
module: {
    rules: [
    {
        test: /\.css$/,
        use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
            publicPath: '../'
            }
        },
        'css-loader'
        ]
    },
    //它负责处理代码
    {
        test: /\.(jpg|png|gif)$/,
        use: {
        loader: 'file-loader',
        options: {
            name: 'img/[name].[ext]',
            // 不按照ES6的模块来导出
            esModule: false
        }
        }
    },
    //以htm和html结尾的文件中的图片（它负责识别html文件中的代码）
    {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
    }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
    filename: 'css/[name].css'
    })
]
};
```



##### 使用 file-loader 处理 JS 中的图片

```js
import img from './img/logo.png'; 
```

file-loader => css img
html-withimg-loader => html img
file-loader => js img

配置webpack.config.js（与CSS中处理图片配置相同）



##### ★★★使用 url-loader 处理图片★★★

url-loader可以替换file-lodaer

1、安装url-loader包（基于file-lodaer实现，依赖file-lodaer包）

```shell
npm install --save-dev url-loader@4.1.0 
```

2、配置webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
module: {
    rules: [
    {
        test: /\.css$/,
        use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
            publicPath: '../'
            }
        },
        'css-loader'
        ]
    },
    {
        test: /\.(jpg|png|gif)$/,
        use: {
        // 将file-loader改为url-loader即可
        loader: 'url-loader',
        options: {
            name: 'img/[name].[ext]',
            // 不按照ES6的模块来导出
            esModule: false,
            // bit字节，限制图片大小，小于3000的基于Base64转换，大于即file-loader原样copy
            limit: 3000
        }
        }
    }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
    filename: 'css/[name].css'
    })
]
};
```



##### 使用 webpack-dev-server 搭建开发环境（实时修改实时改变）

1、安装webpack-dev-server包

```shell
npm install --save-dev webpack-dev-server@3.11.0
```

https://www.webpackjs.com/configuration/dev-server/

2.看package.json配置文件

```json
"scripts": {
    "webpack": "webpack",
    "dev": "webpack-dev-server --open chrome"
  },
```

3.运行

```shell
npm run dev
```

#### 12.3.8、常用的安装包★★★

```shell
npm install --save-dev html-withimg-loader@0.1.16
npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1 html-webpack-plugin@4.3.0 css-loader@4.2.1 style-loader@1.2.1 file-loader@6.0.0 url-loader@4.1.0 webpack-dev-server@3.11.0 art-template-loader@1.4.3
npm install art-template@4.13.2 swiper@6.1.1
```

##### 有关packagejson文件

| --save(代码中引入,package.json:dependencies) | --save-dev的区别(不会在代码中引入,命令行启动服务,package.json:devDependencies) |
| -------------------------------------------- | ------------------------------------------------------------ |
| dependencies是**生产环境**中的应用程序,      | devDependencies是**开发环境**的工具（例如测试的库）          |



### 一些问题

1、Babel编译器
 1.1 Babel本身可以编译ES6的大部分语法
 1.2 ES6 Module语法一般需要使用Webpack来处理
 1.3 Babel本身不能编译ES6新增的API，需要借助其它的模块
 1.4 学会查询Babel官网的Setup页面
 1.5 一般在命令行（CLI）或Webpack中使用Babel
2、使用Bable的流程
 2.1 安装Node.js
 2.2 npm init 初始化项目，生成package.json文件
 2.3 安装Bable需要的包(@babel/core、@babel/cli和@babel/preset-env)
 2.4 在package.json文件添加执行编译的命令 "scripts":{"build":"babel src -d dist"}
 2.5 创建配置文件 .babelrc，并配置{"presets":["@babel/preset-env"]}
 2.6 编译并测试
3、使用Webpack流程
 3.1 初始化项目，生成package.json文件
 3.2 安装webpack需要的包(webpack-cli和webpack) npm install --save-dev webpack-cli webpack
 3.3 在package.json文件添加执行编译的命令
  {
    "name":"xxxx",
    "scripts":{"webpack(any)":"webpack --config webpack.config.js"}
  }
 3.4 创建配置文件(默认webpack.config.js)，并配置
 3.5 打包并测试 npm run webpack(any)
4、Webpack的核心概念
 4.1、entry指定入口文件
 4.2、output指定输出相关信息
 4.3、loader可以帮助webpack处理那些非JS文件
 4.4、plugins用于执行范围更广的任务