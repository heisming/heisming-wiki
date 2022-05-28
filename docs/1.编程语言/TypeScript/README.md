#  TypeScript

浏览器无法直接执行，需要编译成JS代码才可以


## ReactJS增加TS支持

```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```



## 基本数据类型

```typescript
// 数据类型
let isDone: boolean = false
let age: number = 10
let firstName: String = 'heisming'
let message: String = `HELLO, ${firstName}`
let u: undefined = undefined
let n: null = null
let num: number = NaN
let ud: number = undefined

// any
let notSure: any = 4
notSure = 'string'
notSure = true
notSure.myName
notSure.getName()
```



## 数组和元祖(Tuple)

```typescript
// 数组
let arrOfNumber: number[] = [1, 2, 3,'4']
let arrOfNumber2: Array<number>= [1, 2, 3, 4]
let list = [1, '2'] // let list: (string | number)[]
let list2: any[] = [1, "2", true]
arrOfNumber.push(1)
arrOfNumber.push('1')

// Tuple元祖，它将类型写在了里面，这就对每一项起到了限定作用
// 固定类型固定长度的数组
let user: [string, number] = ['a', 1]
let user2: [string, number] = ['a', '1']
user.push('123') // bug
user.push(1) // bug
user.push(true)
```



## 类型别名type aliase

给类型起一个快捷方式类型的名称

type是类型别名：交叉或者组合类型的时候使用它

```typescript
let adds: (x: number, y: number) => number
const res = adds(1.2, 1)
// 使用类型别名
type PlusType = (x: number, y: number) => number
let adda: PlusType
const resu = adda(2, 1)
```





## 联合类型和字面量类型

```typescript
// union types 联合类型：表示类型或的关系
let numberOrString: number | string | boolean
numberOrString = '1'
numberOrString = 1
numberOrString = undefined
numberOrString = NaN
numberOrString = []
// 只能访问共有属性和方法
numberOrString.toString()

// 在函数中使用
function getLength(input: string | number): number {}

// 字面量类型（literal）
let union: 0 | 1 | 2

// 交叉类型: 混合使用 => n1/n2：联合类型  resultType: 字面量类型
function merge(n1: number | string, n2: number | string, resultType : 'as-number' | 'as-string' ) {
  if (resultType === "as-string") {
     return n1.toString() + n2.toString() 
  }
  if(typeof n1 === "string" || typeof n2 === "string") {
     return n1.toString() + n2.toString() 
  } else {
     return n1 + n2;
  }
}
let mregeNumber = merge(2, 5, "as-number")
let mregeNumber2 = merge(2, 5, "as-string")
let mregeString = merge('hi', 'world', "as-string")
```



## 枚举类型enum

```typescript
enum Color {
  red, // 0
  green, // 1
  blue // 2
}
let color = Color.blue // 2
enum Color {
  red = 5, // 5
  green, // 6
  blue // 7
}
enum Color {
  red = 5,
  green = 3,
  blue = 'blue'
}
```

```typescript
// 枚举Enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up)// 0
console.log(Direction[0])// 'Up'

// 实现原理
var Directions;
(function (Directions) {
  Directions[Directions['Up'] = 0] = 'Up'
  Directions[Directions['Down'] = 1] = 'Down'
  Directions[Directions['Left'] = 2] = 'Left'
  Directions[Directions['Right'] = 3] = 'Right'
})(Directions || (Directions = {}))

// 字符串枚举(常量值)
const enum DirectionStr {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

const value = 'UP'
if (value === DirectionStr.Up) {
  console.log('go up!!!');
}

const enum Order{
  start = '初始化',
  cancel = '已取消',
  finish = '已完成'
}
const enum OrderNumber{
  start = 10,
  cancel = 0,
  finish = 100
}
```





## 动态类型any和unknown

- 灵活使用JS动态语言的特性和TS的强类型结合
- 两者区别：any即原生JS的类型，unknown需要进行类型确定才可以使用

```typescript
let randomValue: any = 566;
randomValue = true;
randomValue = '123';
randomValue = {};
randomValue() // mistake
randomValue.toUpperCase()

let randomValue: unknown = 234
randomValue = true;
randomValue = '123';
randomValue = {};
if (typeof randomValue === 'function') {
  randomValue() 
}
if (typeof randomVaule === 'string') {
  randomValue.toUpperCase()    
}
```



## void、undefined 与 never

```typescript
// public void printResult() {}
// void指的是存在本身不存在，变量本身就不存在(返回undefined)
function printResult() : void {
  console.log('lalala')
}
console.log('is', printResult()) // is undefined

// undefined指的是物质不存在，变量本身未赋值
function printResult() : undefined {
  console.log('lalala')
  return
}

// 一个函数永远执行不完的情况
function throwError(message: string, errorCode: number) : never {
   throw {
      message,
      errorCode
   }
}
throwError("not found", 404)

function whileLoop() : never {
   while(true) {
     console.log('aaa')  
   }
}
```



## 类型断言（适配）

type Assertions

```typescript
let message : any;
message = "abc";
message.endsWith("c");
// 手动进行类型的推导，告诉编译器你比它更了解这个类型是什么类型
let str = (<string>message).endsWith("c");
let str2 = (message as string).endsWith("c");
```



## 函数类型

```typescript
// 可选参数Z,其他的X,Y必须传参
function add(x: number, y: number = 0, z?:number): number {
  if(typeof z === 'number')
  {
    return x + y + z
  } else {
    return x + y
  }
}
```



## 对象类型

```typescript
const person : {
  fistName: string,
  lastName: string,
  age: number
} = {
  firstName = "heisming",
  lastName = "li",
  age: 10
}
console.log(person.nickname) // cosnt person : any { }
```



## interface 与 class

interface：是一种独特的类型，主要用于类的实现

```typescript
let drawPoint = (point: IPoint) => {
  console.log({x: point.x, y: point.y})
}
drawPoint({ x: 104, y: 24})
drawPoint({ x: "cxzz", y: "sa"})
drawPoint({ wether: "晴天", temperature: "5oc"})

interface IPoint {
   // x: number;
   // y: number;
   drawPoint: () => void;
   getDistance: (p: IPoint) => number;
   X: number;
   Y: number;
   setY: (value: number) => void;
   getY: () => void;
}

class Point implements IPoint {
    
   x: number;
   y: number;
   // 只有一个构造函数
   constructor(x?: number, y: number = 2) {
     this.x = x;
     this.y = y;
   }
   
   // 简写
   // Access Modifier 访问修饰符：默认public
   constructor(public x: number, public y: number = 2){}
   // 私有后，实例就无法再次调用赋值 point.x = 123 错误，需要删除接口中的公有属性
   constructor(private x: number, private y: number = 2){} 
    
   drawPoint = () => {
     console.log("x: ", this.x, " y: ", this.y)
   }
   getDsitance = (p: Point) => {
    // return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.x, y)
    // return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.x, y)  
     return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.x, y)   
   }
   
   // 懒人包形式
   set X(value: number) {
     if (value < 0) {
       throw new Error('value不能小于0')  
     }
     this.x = value;  
   }  
   get X() {
     return this.x  
   }
    
   setY = (value: number) => {
     if (value < 0) {
       throw new Error('value不能小于0')  
     }
     this.y = value;
   }
   getY = () => {
     retrun this.y  
   }   
}
const point = new Point(1, 2)
// point.x = 2;
// point.y = 3;
point.drawPoint()
// 对象object、类calss、实例intance
// public priavte protected

point.setY(11)
console.log(getY())

point.X = 10
console.log(point.X)

// tsc -t es5 index.ts
```

```typescript
// 类Class: 定义一切事物的抽象特点
// 对象Object: 类的实例
// 面向对象OOP三大特性： 封装、继承、多态
class Animal {
  constructor(name: string) {
    this.name = name
  }
  run(){
    return `${this.name} is two`
  }
}
// 实例化
const snake = new Animal('snnake')
console.log(snake.run())

// 继承
class Dog extends Animal {
  bark(){
    return `${this.name} is barking`
  }
}
const xioabao = new Dog('xioabao')
console.log(xioabao.run())
console.log(xioabao.bark())

// 多态
class Cat extends Animal{
  static categories = ['cat']
  constructor(name: string){
    super(name)
    console.log(this.name)
  }
  // 方法重写
  run(){
    return `name is barking` + super.run()
  }
}
const maomao = new Dog('maomao')
console.log(maomao.run())
console.log(Cat.categories)

// public：修饰的属性或方法是共有的
// private：修饰的属性或方法是私有的
// protected：修饰的属性或方法是受保护的,和private类似，区别是在它子类中也是被允许访问的




// 类可以使用implements来实现接口
interface Radio{
  switchRadio(trigger: boolean):void;
}
interface Battery{
  checkBatteryStatus(): void;
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio{

}
class Cellphone implements Radio, Battery {
  switchRadio(trigger: boolean){
  
  }
  checkBatteryStatus(){
  
  }
}
class CCellphone implements RadioWithBattery {
  switchRadio(trigger: boolean) {

  }

}
```





## 模块Module

index.ts

```typescript
import Point from './point'

const point = new Point(1, 2)
// point.x = 2;
// point.y = 3;
point.drawPoint()
// 对象object、类calss、实例intance
// public priavte protected

point.setY(11)
console.log(getY())

point.X = 10
console.log(point.X)

// tsc -t es5 index.ts
```



point.ts

```typescript
interface IPoint {
   // x: number;
   // y: number;
   drawPoint: () => void;
   getDistance: (p: IPoint) => number;
   X: number;
   Y: number;
   setY: (value: number) => void;
   getY: () => void;
}

export default class Point implements IPoint {
    
   x: number;
   y: number;
   // 只有一个构造函数
   constructor(x?: number, y: number = 2) {
     this.x = x;
     this.y = y;
   }
   
   // 简写
   // Access Modifier 访问修饰符：默认public
   constructor(public x: number, public y: number = 2){}
   // 私有后，实例就无法再次调用赋值 point.x = 123 错误，需要删除接口中的公有属性
   constructor(private x: number, private y: number = 2){} 
    
   drawPoint = () => {
     console.log("x: ", this.x, " y: ", this.y)
   }
   getDsitance = (p: Point) => {
    // return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.x, y)
    // return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.x, y)  
     return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.x, y)   
   }
   
   // 懒人包形式
   set X(value: number) {
     if (value < 0) {
       throw new Error('value不能小于0')  
     }
     this.x = value;  
   }  
   get X() {
     return this.x  
   }
    
   setY = (value: number) => {
     if (value < 0) {
       throw new Error('value不能小于0')  
     }
     this.y = value;
   }
   getY = () => {
     retrun this.y  
   }   
}
```



## 泛型Generics

保证传入值和返回值保持统一类型的模糊定义

```typescript
let list: Array<string> = ['x', 'y']
// let lastInArray = <T>(arr : Array<T>) => {
let lastInArray = <T>(arr : T[]) => {    
  return arr[arr.length - 1]  
}
const l1 = lastInArray([1, 2, 3, 4])
cosnt l2 = lastInArray<string>(['a', 'b', 'c'])
cosnt l3 = lastInArray<string | number>(['a', 'b', 'c'])

// let makeTuple = (x: number, y: string) => [x, y]
let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y]
const v1 = makeTuple(1, 'one')
const v2 = makeTuple<boolean>(true, 1)
```

```typescript
// 泛型Generics
// 保证传入值和返回值保持统一类型的模糊定义
// 类型推论
function echo<T>(arg : T): T{
  return arg
}
// function echo<true>(arg: true): true
const result = echo(true)
// function echo<123>(arg: 123): 123
const result1 = echo(123)
// function echo<"abc">(arg: "abc"): "abc"
const result11 = echo('abc')

function swap<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1], tuple[0]]
}
// function swap<string, number>(tuple: [string, number]): [number, string]
const result2 = swap(['string',123.123])
result2[1].toLocaleUpperCase()
result2[0].toFixed(2)

// 《约束泛型》
// 只能传入数字数组
function echoWithArr<T>(arg: T[]): T[]{
  console.log(arg.length)
  return arg
}
// function echoWithArr<number>(arg: number[]): number[]
const arr = echoWithArr([1,2,3])
const str = echoWithArr('123')

// 约束包含length属性的变量接口
interface IWithLength{
  length: number
}
// extends关键字
function echoWithLength <T extends IWithLength>(arg: T): T{
  console.log(arg.length)
  return arg
}
// function echoWithLength<"str">(arg: "str"): "str"
const str1 = echoWithLength('str')
// function echoWithLength <{length: number;width: number;}> (arg: {length: number;width: number;}) : {length: number;width: number;}
const obj = echoWithLength({length: 10, width: 10})
// function echoWithLength<number[]>(arg: number[]): number[]
const arr2 = echoWithLength([1,2,3])
echoWithLength(123)


// 泛型在类和接口中的使用
// 队列类
class Queue<T> {
  private data = [];
  // 在尾部插入
  push(item: T){
    return this.data.push(item)
  }
  // 在头部删除
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed(1));

// 接口
interface KeyPair<T, U>{
  key: T
  value: U
}
let kp1: KeyPair<number, string> = { key: 1,value:'string'}
let kp2: KeyPair<string, number> = { key: 'str',value: 2}
// 泛型的应用
let arra: number[] = [1, 2, 3]
// 等于
let arrTwo: Array<number> = [1, 23, 4,'0']

// 总结：泛型创建一个拥有特定类型的容器，你可以设定它为任何类型，像一个可变参数一样，可以约束他
```



## 功能性帮助类型

```typescript
// Utility Types
interface IPeople{
  name: String,
  age: number
}
let viking: IPeople = { name: 'a', age: 123}
// Partial：使用其中一个即可，可选属性
type IPartial = Partial<IPeople>
let viking1: IPartial = { age: 1 }
// Omit：忽略name属性
type IOmit = Omit<IPeople, 'name'>
let viking2: IOmit = { age: 20}
```



## 类型守卫《Type》 Guards

```typescript
type Square = {
  size: number;  
}
type Rectangle = {
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function isSqure(shape: Shape): shape is Square {
  return 'size' in shape;  
}

function isRectangle(shape: Shape): shape is Rectangle {
  return 'width' in shape;  
}

function area(shape: Shape) {
  if (isSqure(shape)) {
    return shape.size * shape.size
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height  
  }
}

```



## 函数重载 Function Overloading

```typescript
function reverse(string: string) : string;
function reverse(array: string[]) : string[];

function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray == "string") {
    return stringOrArray.split("").reverse().join("")
  } else {
    return stringOrArray.slice().reverse()
  }
}

const hello = reverse('hello') // olleh
const helloArr = reverse(["h", "e", "l", "l", "o"]) // ["o", "l", "l", "e", "h"]


function makeDate(timestampOrYear: number): Date;
function makeDate(year: number, month: number, day: number);

function makeDate(timestampOrYear: number, month?: number, day?: number) {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day)  
  } else {
    return new Date(timestampOrYear)
  }
}

const day0 = makeDate(2021, 1, 1);
const day1 = makeDate(1231231);
const day2 = makeDate(2021, 1) // error
```



## 调用签名 Call Signatures

```typescript
type Add = (a: number, b: number) => number;
// 调用签名
type Add = {
  (a: number, b: number) : number;
  (a: number, b: number, c: number) : number;
  debugName: string;
}

const add: Add = (a: number, b: number, c?: number) => return a + b + (c != null ? c : 0)

add.debugName = "extrol"

// new 构造函数

type Point = new (x: number, y: number) => { x: number, y: number }
// 调用签名
type Point = {
  new (x: number, y: number) : { x: number, y: number };
  new (x: number, y: number, z: number) : { x: number, y: number, z: number }
}
const point = class {
  constructor(public x: number, public y: number, public z?: number) {}
}
```



## 索引签名Index Signatures

```typescript
const obj = {
  hello: 'world',
}
const dddd = obj["hello"] // world
const nums = {
  1234: "lett"
}
console.log(nums[1234]) // lett

type Dictionary = {
  [key: string] : any;
}

type Person = {
  name: string;
  email: string;
}

type PersonDictionary = {
  [username: string]: Person;  
}

const persons : PersonDictionary = {
  heisming : {
    name: "heisming",
    email: "hesiming@163.com"
  },
  lm: {
    name: 'lm',
    email: "lm@ad.con"
  }
}

const heisming = persons['heisming']

persons["ddd"] = {
  name: "asdas",
  email: "asdas@163.com"
}

delete persons["lm"]

const abc = persons["missing"] // undefined
abc.name // ts编译器不报错
```



## 只读readonly

```typescript
function reverseSorted(input: readonly number[]) : number[] {
  // return input.sort().reverse();
  // return input.slice().sort().reverse()
  return [...input].sort().reverse() // 推荐 
}
const started = [1, 2, 3, 4, 5]
const result = reverseSorted(stated)
console.log(started) // 54321
console.log(result) // 54321
```



### 程序中的副作用

https://juejin.cn/post/6908512860683370503

- 与药物的副作用类似：减肥药（拉肚子），头孢（过敏），泰诺（头痛）
  - 修改全局变量
  - 修改函数传入的参数值
  - 修改DOM元素
  - 发送AJAX请求数据(后端数据不定性)
  - console.log（）打印数据
- 纯函数（pure function）：给一个函数同样的参数，那么这个函数永远返回同样的值
  - 函数式编程理念
  - React组件输入相同的参数(props),渲染UI应该永远一样
  - 数学角度
    - 函数写作：y = f (x)
    - 函数的定义是指在两个非空集合中，存在一种关系可以使得输入值集合中的每项元素皆能对应唯一一项输出值集合中的元素
    - 例如： y = x²， y = x*x²
    - 非函数
      - 圆、椭圆这样的曲线则不是函数
      - 一个x可能会有多于1个y与之对应
      - 输入参数一样，而输出结果不确定的情况就是**副作用**
- 副作用概念与纯函数相反，指一个函数处理了与**返回值无关**的事情
- 副作用是件坏事吗？
  - 当然不是，很多代码必须得借助副作用才能实现：
    - 如ajax，修改DOM，甚至是console.log
  - React: state状态的改变，生命周期，构建函数
- 副作用会给系统添加不可控的因素，但是不要害怕



## 双重断言Double Assertion

```typescript
type Point2D = { x: number; y: number }
type Point3D = { x: number; y: number; z: number }
type Person = { name: string; email: string }

let point2 = Point2D = { x: 0, y: 0 }
let point3 = Point3D = { x: 10, y: 10, z: 10 }
let person: Person = { name: 'lm', email: 'heisming@126.com' }

point2 = point3
point3 = point2 // error
point3 = point2 as Point3D; // 断言欺骗编译器

person = point3 // error
point3 = person // error
point3 = person as Point3D; // 欺骗不了编译器
point3 = person as any as Point3D; // 双重断言欺骗编译器
```



## 常量断言const Assertion

```typescript
let king = "heisming";
// js的字符串本身就是immutable的
king = "xixi"

king[2] // "e"
// js中字符串不可修改，immutable
king[2] = "A" // error

// const 只修饰lm，不修饰其属性
const lm = {
   name: "lm"
   arr: [1, 2, 3]
   // readonly name: "lm" 
} as const; // 常量断言
// 第一，常量断言，可以用于断言任意一个类型
// 第二，它可以把对象中任何的原始类型成员变量都装换为readonly，只读属性
// 第三，甚至是数组这样的复杂数据类型，使用常量断言也同样可以完成只读类型的转化。

lm = { name: 'sa' } // error
lm.name = "as" // yes

function layout(setting: {
  align: "left" | "center" | "left"; // 字面量类型
  padding: number;
}){
  console.log("layout: ", setting)  
}

const paramater = {
   // readonly 可以?
   align: "left" as const, // string类型
   padding: 0 
}

layout(paramater) // error
```



## this

```typescript
// function double() {
function double(this: { value: number }) { // this必须是参数的第一个
  this.value = this.value * 2  
}

const vaild = {
  value: 10,
  double,
}
vaild.double();
vaild.value // 20

const invaild = {
  // 变量名错误
  valye: 10,
  double,
}
// vaild.double(); // runtime error
vaild.double(); // compli error
```



## typeof操作符

```typescript
const center = {
  x: 0,
  y: 0,
  z: 0
};

type Point = {
  x: number;
  y: number;
  z: number;
}

type Point = typeof center;

// const unit: typeof center = {
const unit: Point = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1
};
```

```typescript
// json数据
const personResponse = {
  name: 'lm',
  email: 'lm@123.com',
  firstName: 'li',
  lastName: 'ming'
}

type PersonResponse = typeof personResponse;

function process(person: PersonResponse) {
  console.log("全名：", person.firstName, person.lastName)  
}
```



## keyof操作符

```typescript
type Person = {
  name: string,
  age: number,
  location: string
}

const lm: Person = {
  name: 'lm',
  age: 30,
  location: '安徽'
}

type PersonKey = keyof Person

function getValueByKey(obj: any, key: string) {
function getValueByKey(obj: any, key: PersonKey) {
function getValueByKey(obj: Person, key: keyof Person) {
function getValueByKey<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {    
  const value = obj[key]
  return value
}

const age = getValueByKey(lm, "age") // 30
const email = getValueByKey(lm, "email") // no error => error

function setValueByKey<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[key]) {
  obj[key] = value;  
}
setValueByKey(lm, "age", 22)
```



## 类型查找 lookup types

```typescript
export type RequestData = {
  transactionId: string;
  user: {
    name: string;
    email: string;
    phone: string;
    nickname: string;
    gender: string;
    dob: string;
    nationality: string;
    address: {
      stress: string;
      unitNumber: string;
      city: string;
      provance: string;
      contury: string;
    }[];
  };
  dirverInfo: {
    licenceNumber: string;
    exporyDate: string;
    classes: string;
    status: string;
  };
  payment: {
    creditCardNumber: string;  
  };
}

function getPayment() : RequestData["payment"] {
  return {
    creditCardNumber: "123123122312312"
  }  
}

function getAddress() : RequestData["user"]["address"][0] {
  return {
    stress: "鸠兹广场",
    unitNumber: "1hao";
    city: "芜湖";
    provance: "安徽";
    contury: "中国";
  }  
}
```



## 类型映射 Mapped Types

```typescript
type Point = {
  x: number;
  y: number;
  z: number;
  // a: string;
}

type ReadonlyPoint = {
  readonly [key in keyof Point] : number    
  // readonly [key in keyof Point] : Point[key]        
}

// 结合泛型、类型映射、keyof操作符、类型查找(TS原生含有这个类型，删除这段代码也没问题)
export type Readonly<T> = {
  readonly [key in keyof T] : T[key]        
}

const center: Readonly<Point> = {
// const center: ReadonlyPoint = {
  x: 0,
  y: 0,
  z: 0
};

center.x = 100
```



## 映射修饰符 Mapped Modifier

```typescript
type Point = {
  readonly x: numebr;
  y?: number;
}

type Mapped<T> = {
  // -抹去修饰符, 默认缺省+
  -readonly [P in keyof T] -? : T[P]  
}

type Result = Mapped<Point>
```

```typescript
export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}
// 系统自带的，可以注释掉
export type Partial<T> = {
  [P in keyof T] ?: T[P];
}

const state = new State({ x: 0, y: 0 })
state.update({ x: 0, y: 123 })
// 替换成
state.update({ y: 123 })
state.update({ z: 123 })
console.log(state.current)
```

