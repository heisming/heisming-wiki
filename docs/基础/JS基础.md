

# JS基础

ECMAScript是JavaScript的标准

 三部分组成:
     语言核心：ECMAScript5（基础）、6、7、8、9
     DOM特效
     BOM特效

## 1、《语法与表达式》

### 1.1书写位置

```css
<body>
	<script src="JavaScript.js"></script>
	<script> console.log('!!!');</script>
</body>
```

#### alert(); -弹出警告框

​	内置函数，函数就是功能“封装”调用函数需要使用圆括号，（）里面是参数,它是字符串，需要引号包裹，结尾需要书写分号,浏览器遇到它，会暂停程序的执行。

#### console.log(); -控制台输出

​	console是JS的内置对象，通过"."可以调用它内置的log"方法"，所谓"方法"就是对象能够调用的函数

#### 学会处理错误

​	Uncaught SyntaxError: Invalid or unexpected token 未捕获的语法错误：不合法或错误的符号
​	Uncaught ReferenceError: XXX is not defined   未捕获的语法错误：XX没有被（变量）定义
​	Uncaught ReferenceError: alret is not defined  未捕获的语法错误：alret没有被定义（方法） 

##### 	错误调试语句try...catch

​		不会因为报错而中断程序代码的执行

```js
 try{
     //在此运行代码
 }catch(err){
     //在此处理错误
 }
```

​	try/catch/finally（全小写）

```js
try{
    //在此运行代码
}catch(err){
    //在此处理错误
}finally{
    //无论try/catch结果如何，写在此处的代码都会执行
}
```

##### REPL环境

​	浏览器F12控制台(Console)也是一个REPL环境，可以使用它临时测试表达式的值



### 1.2、变量

​	变量是计算机语言中能存储计算结果或能表示值抽象概念，变量不是数值本事，他们仅仅是一个用于存储数值的容器。

#### 	定义变量

​		第一步声明，并给它赋值。 var a = 5; var是定义变量的关键字，a就是变量名，=表示赋值，5就是存储的数值。

​		当变量被赋值后，就可以使用它了。alert(a);变量不能使用引号，使用了就是字符串"a"了。

#### 	改变变量

​		变量的值可以被改变，改变变量不需要再写var了

```js
var a = 10; 
a = 18;//改变变量a的值为18
console.log(a);
```

#### 	变量的合法命名（函数、类名、对象的属性同理）

​		只能由字母、数字、下划线、$组成，但《不能以“数字”开头》，不能是“关键字”和“保留字”，区分英文大小写。

##### 		★优秀的命名法

​			驼峰命名法：mathTestScore
​			C风格命名法：math_test_score
​			匈牙利命名法：iMathTestScore, i表示int数据类型

##### 	同时声明多个变量

​		使用逗号，var a = 0, b = 0; var c,d = 2;表示c只定义未赋值，d被赋值2

##### 	变量的默认值

​		一个变量只定义，但没有赋初始值，默认是undefined，会被输出
​		一个变量只有被var定义，并赋初始值，才算正式初始化完成

##### 	变量的常见错误

​		不用var定义，而直接将值赋予它，虽不会引发报错，但会产生作用域问题。
​		尝试使用一个既没有被var定义过，也没有赋过值得字符，就会产生引用错误。



#### ★变量声明提升（先用后定,有定无值）

​	提前使用一个稍后才声明的变量，而不会引发异常

​	在执行代码前，JS有预解析阶段，会预读所有变量的定义，但是没有值。

##### 	注意事项

​		1、JS特性，会经常出面试题。

​		2、在实际开发时，不要刻意使用，要先定义赋值再使用

```js
 console.log(a); //undefined
 var a = 1;
```

##### 	一些问题

​		1、前端开发主要有哪些层？语言和功能是什么？（面试）

​		2、JavaScript书写位置是哪里？

​		3、JavaScript有哪些输出语句？怎么拼写？

​		4、变量是什么？如何定义变量？变量的合法命名规则有哪些？

​		5、只用var定义一个变量，但是没有赋初始值，这个变量的值是什么？
​		6、什么是变量声明的提升？（面试）

​		7、JavaScript等号的功能是什么？



### 1.3、数据类型简介和检测

#### 1.3.1、基本数据类型

​	**Number、String、Boolean、Undefined、Null、Bigint、Symbol(typeof检测结果为object,但公认为null类型)**

#### 1.3.2、复杂数据类型

​	**Object、Array、Function、RegExp、Date、Map、Set、Symbol等等**

#### typeof运算符

​	**检测值或者变量的类型**(返回值是string类型),类型和typeof检测结果并不总是一一对应，比如数组检测结果也是object

##### 	5种基本数据类型的typeof检测返回结果

​		数字类型（number）==>5,

​		字符串类型(string) ==>'123',

​		布尔类型（boolean）==>true,

​		undefined类型（undefined）==>undefined,

​		null类型（object）==>null;

​	    function类型 (function) ==> function;

​        symobl类型 (symobl) ==> Symobl();es6

```js
console.log(typeof 5); //number
console.log(typeof '5'); //string
console.log(typeof false); //boolean
console.log(typeof object); //undefined
// 返回值是string类型 
console.log(typeof typeof 5); //string
```

###### 	数字类型（Number）

​		不分大小、不分整浮（数）、不分正负、都是数字类型。

​			1、Infinity关键字表示无穷大，非零数字除以0时，结果是Infinity或-Infinity

```js
console.log(Infinity);
console.log(typeof Infinity); //number
```

​			2、小数中0可以省略

​			3、较大数或较小数可以用科学计数法表示：3e8==300000000,3e-3==0.003; .3e5==30000

```js
console.log(3e8); //300000000
console.log(3e-3);//0.003
console.log(.3e5);//30000
```

​			4、不同进制的数字：二进制数值以0b开头：0b10==2,0b1111==15，八进制数值以0开头：017==15;十六进制数字以0x开头：0xf==15

```js
console.log(0b10);//2
console.log(0b1111);//15
console.log(017);//15
console.log(0xf);//15
```

​			5、一个特殊的数字型值NaN(not a number)，不是一个数字，但它是一个数字类型的值

​				5.1、0除以0的结果都是NaN，事实上，在数学运算中，若结果不能得到数字，其结果往往都是NaN

​				5.2、NaN有一个奇怪的特质：不自等

```js
console.log(typeof NaN);//number
```

###### 字符串类型(string) 

​	人类的自然语言，用引号包裹:  “ ”  or  ' '

​    字符串的拼接：'im' + 's'='ims'

```js
console.log('im' + 's');
```

​		要将一个变量的值插入到字符串中，要斩断链接

```js
 var year = 2021;
 console.log('im' + year + 's');
```

​	空字符串：var str='';

​	**字符串的常用方法**

​		字符的length属性：表示字符串的长度,str.length;

```js
console.log(''.length);//0
console.log('我'.length);//1
```

​		**charAt(**序号从0开始，超过为空字符串)得到指定“位置”单个字符;

```js
'success'.charAt(4);//e
```

​		**substring(a,b)**整数从a开始到b结束（不包括b，即b-1位）得到子字符串，一个参数值表示从a开始到结尾;a>b，自动调整为小数字在前;a==b返回空字符串。

```js
var str ='好好学习，天天向上'
var str1 = str.substring(2,4);//学习
```

​		**substr(a,b)**整数从a开始得到b长度的子字符串;一个参数值表示从a开始到结尾;a可以为负数，倒数位置，再正向取值。b小于0，返回空字符串。

```js
var str ='好好学习，天天向上'
var str2 = str.substr(2,2);//学习
```

​		**slice()**整数从a开始到b结束（不包括b，即b-1位）得到子字符串；a、b都可以是负整数，即:倒数-a位到倒数-b位（不包括）,a不大于b。

```js
var str ='好好学习，天天向上'
var str3 = str.slice(-7,-5);//学习
```

​		**toUpperCase()**将字符串变大写;

```js
'aA'.toUpperCase();//AA
```

​		**toLowerCase()**将字符串变小写;

```js
'Aa'.toLowerCase();//aa
```

​		**indexOf()**检索字符串:返回某个指定字符串在字符串中首次出现的位置，若没有即-1。

```js
'abcdef'.indexOf('b');//1
'abcdef'.indexOf('de');//3
```

###### 布尔类型（boolean）

​	只有两个值：true和false,表示真和假

###### undefined类型（undefined）

​	它既是值又是类型，这种类型只有它自己一个值。（变量声明提升）

###### null类型（null）

​	null表示空，它是空对象。

​	用途：当我们需要将对象销毁、数组销毁或者删除事件监听时，通常将它们设置为null。



### 1.4、★数据类型的转换

![](D:\front-end\study\MarkDown\0基础\img\JS类型转换表.png)

#### 	其他值->数字

##### 		Number()

​		使用Number()内置构造函数,有非数字类字符（e除外），就会转换NaN

```js
Number('123'); //123
Number('123.4'); //123.4
Number('123年'); //NaN
Number('2e3'); //2000
Number(''); //0
Number(true); //1
Number(false; //0
Number(undefined); //NaN
Number(null); //0
```

###### 高级写法

```js
var a = '1'
console.log(typeof a)
console.log(typeof Number(a)) // 普通写法
console.log(typeof +a) // 高端写法
```



##### 	parseInt()

​		将**字符串**转为整数，将自动截掉第一个非数字字符值后的所有字符（正负号+-除外）。

```js
parseInt(3.14); //3
parseInt('0003'); //3
parseInt('200px'); //200
parseInt('3.14'); //3
parseInt('3.14是圆周率'); //3
parseInt('圆周率是3.14'); //NaN
parseInt('3.99'); //3
```

##### 	parseFloat()

​		将**字符串**转为浮点数,将自动截掉第一个非数字字符值后的所有字符（正负号小数点+-.除外，只识别各一个）

```js
parseFloat('050x'); //50,不是50.00
parseFloat('3.14'); //3.14
parseFloat('3.14是圆周率'); //3.14
parseFloat('圆周率是3.14'); //NaN
parseFloat('3.99'); //3.99
parseFloat(true); //NaN
parseFloat(false; //NaN
parseFloat(undefined); //NaN
parseFloat(null); //0
```



#### 其他值->字符串

##### 	String()

```js
String(123); //'123'
String(123.4); //'123.4'
String(NaN); //'NaN'
String(Infinity); //'Infinity'
String(true); //'true'
String(false); //'false'
String(undefined); //'undefined'
String(null); //'null'
//注意：科学计数法和非10进制数字回转为10进制的值
String(2e3); //'2000'
String(0xf); //'15'
```

##### toString()

​	函数可以单独调用，方法需要打点：“对象.方法名”

```js
(6).toString();//'6'
true.toString();//'true'
NaN.toString();//'NaN'
```



#### 其他值->布尔值

##### 	Boolean()

​		0/NaN/' '/null/undefined都是fasle

```js
// 0和NaN转为false，其他数字为true
Boolean(123);//true
Boolean(0);//false
Boolean(NaN);//flase
Boolean(Infinity);//true
Boolean(-Infinity);//true
// 空字符串转为false，其他都转为true
Boolean('');//fasle
Boolean('abc');//true
Boolean('fasle');//true
// 其他特殊类型都是fasle
Boolean(undefined);//fasle
Boolean(null);//fasle
```

###### 高级写法

```js
var a = 0
console.log(typeof a)
console.log(typeof Boolean(a)) // 普通写法
console.log(typeof !!a) // 高端写法
```



#### 小demo

```js
// 让用户输入两个数字
var a = Number(prompt('请输入第一个数字'));//常见写法
var b = Number(prompt('请输入第二个数字'));
alert(a+b);
```

#### 一些问题

1、JS中有哪些基本类型？它们的typeof检测结果各是什么？
2、说出下面几个特殊值是什么？
    ·NaN：
    ·undefined：
    ·null：
3、各种类型值相互转换的方法和规律？
4、请说出substring()、substr()、slice()方法的区别？





### 1.5、表达式和运算符

​	操作数 + 运算符 + 操作符 = 表达式；

​		**表达式种类：算术、关系、逻辑、赋值、综合。**

#### 算术表达式

​		加减乘除、取余：+-*/%（有字符串+变为连字符）

​    		**运算优先级:()括号（从内向外）大于*/%（从左到右）大于+-;**

```JS
5%2// 1
```

##### 隐式类型转换

​		如果参与数学运算的某操作数不是数字型，那么JS会自动将此操作数转换为数字型（加号除外）**,本质是内部调用Number()函数**

```JS
3*'4'  // 12
true + true // 2
false + 2 // 2
3 * '2tian' // NaN
```

##### 有关IEEE754

​	在JS中，有些小数的数学运算不是很精准

```JS
0.1 + 0.2 // 0.30000000000000004
```

​	**JS使用了IEEE754二进制浮点数算术标准，这回使一些个别的小数运算产生“丢失精度”问题**

​	解决办法：在进行小数运算时，要**调用数字的toFixed()方法**保留指定的小数位数

```JS
(0.1+0.2).toFixed(3); //'0.300'
Number(0.1+0.2).toFixed(3); //0.300
```

##### 幂和开根号

​	JS中没有此运算法，需要使用Math对象的相关方法进行计算。

​		指数运算：

```js
Math.pow(2,3); // 8  
Math.pow(3,2); // 9
```

​		开根号

```js
Math.sqrt(81); // 9  
Math.sqrt(-81); // NaN  
```

##### 向上取整和向下取整

​	Math.ceil()向上取整（±abs+1），Math.floor()向下取整（±abs-1）。

  		   -2.4                     2.4
  		     |                       |   
  	<====|=====|====|====|====|====|=====|====|====|=======>
  	    -3    -2   -1    0    1    2     3

```js
Math.ceil(2.4);  // 3
Math.floor(2.4); // 2
Math.ceil(-2.4);  // -2 看数轴方向，-2的方向大
Math.floor(-2.4); // -3 看数轴方向，-3的方向小
Math.ceil(2);  // 2
Math.floor(2); // 2
```



#### 关系运算符

​		大于**>**,小于**<**,大于或等于>=,小于或等于**<=**,等于==,不等于**!=**,全等于===,不全等于**!==**

```js
8 > 5; //true
7 < 4; //false
8 >= 8; //true
3 == 3;//true
3 === 3; //true
3 = 3; //错误语句
```

##### ==与===

等于==运算符不比较值的类型，会**进行隐式转换**后比较值是否相等。
全等于===运算符不仅比较值，还比较类型

```js
5 == '5'; // true
1 == true; // true
0 == undefined（NaN）; // false
```

1、null和undefined用==进行比较涉及隐式强制类型转换，ES5规范中规定：

​    1、如果x为null，y为undefined，则结果为true。

​    2、如果x为undefined，y为null，则结果为true。

2、null和undefined用===比较是结果为false是因为类型不同：

```js
typeof null //"object"
typeof undefined //"undefined"
undefined == null  //true
undefined === null   //false
```

##### NaN不自等

```js
NaN == NaN;// false 也不会等于其他任何值
```

​	如何判断某变量值为NaN？

​	isNaN()函数可以用来判断变量是否为NaN。

​		它的机理是：只要该变量传入**Number()的执行结果是NaN**，则都会得到true

```js
isNaN(undefined); // true
isNaN('3tian'); // true
isNaN(null); // false
```

**!=不等于和!==不全等,同理**

JS中没有连比：判断变量a是否结余3~15之间，错误写法：3 <= a <= 15



#### 逻辑表达式

##### 	非运算!

​		置反运算，单目运算符，只需要一个操作数

```js
!0 //true
!undefined //true
!'' //true
!'imc' //false
```

​	**!!的作用等于Boolean()函数**

```js
!!'' //false
!!0  //false
!!'imc' //true
```

##### 	与运算&&

​		并且逻辑，全true才true

##### 	或运算||

​		或者逻辑，有true就true

##### 	★短路计算

​		a && b  => a假，表达式值为a，a真，表达式值为b。

```js
3 && 6; //6
undefined && 15; //undefined
15 && undefined; //undefined
null && 2; //null
'' && 16; //''
NaN && undefined; //NaN
```

​		a || b => a真，表达式值为a，a假，表达式值为b  

```JS
3 || 6;//3
0 || 6;//6
null || undefined; //undefined
'a' || 'b'; //'a'
NaN || null; //null
```

##### 	优先级：! 大于 && >大于 ||

```JS
0 && 3 || 6; //6 
```



#### 赋值表达式

​	赋值 **=** ;快捷赋值 **+=**,   **-+**,   ***=**,   **/=**,   **%=**;自增运算 **++**,自减运算 **--**

##### 赋值=

​	赋值运算也产生值，等号后面的值将作为“赋值运算的值”

```JS
var a; 
console.log(a = 4); //4
// 连续赋值运算符 
var a,b,c;
a = b = c = 15;
```

##### 快捷赋值+=  -+  *=  /=  %=

​	在原数值基础上进一步进行运算

```JS
var a = 3; a += 5;// a = a + 5;
```

##### 自增运算++  ,自减运算--

表示在自身基础上加1或者减1。

​	a++ 先用再加，++a 先加再用

```JS
var a = 3;            var a = 3;
var b = a++;          var b = ++a;
console.log(b); //3   console.log(b); //4
console.log(a); //4   console.log(a); //4
```

###### 经典题目

```js
var num1 = 10,num2 = 3;
var num3 = num1 + num2++; // 拆解 var num3 = num1 + num2; num2++;
document.writeln(num2);//4
document.writeln(num3);//13
```



#### 综合表达式

​	运算顺序：非运算=>数学运算=>关系运算=>逻辑运算

```js
5 < 3 + 3; //true
3 > 2 && 8 > 3 + 4; //true
3 > 2 && 8 > 3 + 5; //false
!13 < 5 - 3 //true
!13 < 5 - 5 //false
```

​	变量的范围表示：变量a介于5~12之间

```js
5 <= a && a <= 12;
```

​	闰年判断：

```js
 (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0);
```

#### 一些问题

1、表达式有哪几种？每种表达式分别有哪些运算符？
2、每种表达式中运算顺序是什么？综合运算顺序是什么？
3、什么是短路计算？ 3 && 13的结果？ 3||13呢？
4、a++和++a有什么区别？ 

```js
var a = 3,b = 4; alert (a++ + b++ + ++a + ++b);//18
// a + b = 3 + 4 = 7; a++; b++; 
// a++; b++; a + b = 5 + 6 = 11;
```







## 2、《流控语句与数组》

​	条件语句、循环语句、初始算法

### 2.1、流控语句

#### 2.1,1、条件语句

##### if语句

​	if语句是最简单的条件语句，也称选择语句。它通常结合else一起使用，表示如果...就...否则...

###### 普通if语句

​		举例1：用户输入一个数字，判断是偶数，弹出对话框显示“偶数”，否则弹出“奇数”。

```js
var a = Number(prompt('请输入一个数字'));
if (a % 2 ==0){
    alert('偶数');
} else{
    alert('奇数');
}
```

​		举例2：用户输入年龄，判断用户是否可以申领驾照。申领驾照的条件是年龄必须为18岁到70岁。

```js
var age = Number(prompt('请输入年龄'));
if (age >=  18 && age <= 70){
    alert('可以考取驾照');
} else{
    alert('年龄不符合要求');
}
```

else可以省略；

​	分辨清楚哪些语句是if语句体中的语句

```js
var a = Number(prompt('请输入年龄'));
if (a > 5){
    alert('这个数字大于5');
}
if (a % 2 == 0){
    alert('这个数字是偶数');
}
alert('再见');
```

###### 单行if语句

​	如果if语句体中只有一行语句，可以省略大括号和换行。

```js
var a = Number(prompt('请输入年龄'));
if (a > 5)  alert('这个数字大于5');             
if (a % 2 == 0)  alert('这个数字是偶数');       
alert('再见');
```

###### if else if多条件分支

​	举例：用户输入考试成绩，根据下表输出用户的成绩档次

```js
var score = Number(prompt('请输入成绩'));
if(score >= 85){
    alert('优秀');
} else if(score >= 70){
    alert('良好');
} else if(score >= 70){
    alert('及格');
} else {
    alert('不及格');
}
```

​	**else if()条件分支“暗含”不符合之前所有条件，要深刻理解什么叫“否则如果”**

​			BMI肥胖指数计算：BMI指数(Body Mass Index,身体质量指数)是用体重(以公斤为单位)除以身高(以米为单位)的平方得出的数字，是目前国际上常用的衡量人体胖瘦程度以及是否健康的标准。

```js
var weight = Number(prompt('请输入体重，以公斤为单位'));
var height = Number(prompt('请输入身高，以米为单位'));
var bmi = weight/Math.pow(height,2);
alert('您的BMI指数为' + bmi);
if( bmi < 18.5){
    alert('过瘦');
} else if(bmi >= 18.5 && bmi < 24){
    alert('正常');
} else if(bmi >= 24 && bmi < 28){
    alert('过胖');                   
} else if(bmi >= 28 && bmi < 32){
    alert('肥胖');
} else {
    alert('非常肥胖');
}
```

###### 		水仙花数

​		3位数，它的每个数位的数字的立方等于它本身

```js
// 写法1
var n = Number(prompt('请输入一个三位数'));
var x,y,z,sum;
if(!isNaN(n) && 100 <= n && n <= 999){      
    x = Math.floor(n / 100); 
    y = Math.floor(n / 10) % 10;
    z = n % 10;
    sum = Math.pow(x,3) + Math.pow(y,3) + Math.pow(z,3);
    if(n == sum){
        alert('您输入的数字是水仙花数');
    }else{
        alert('您输入的数字不是水仙花数');
    }
}
else{
    alert('您输入的数字不合法的');
}
```

```js
// 写法2 
var n = Number(prompt('请输入一个三位数'));
var x,y,z,sum,n_str;
if(!isNaN(n) && 100 <= n && n <= 999){      
    n_str = n.toString();
    x = Number(n_str.charAt(0));
    y = Number(n_str.charAt(1));
    z = Number(n_str.charAt(2));
    sum = Math.pow(x,3) + Math.pow(y,3) + Math.pow(z,3);
    if(n == sum){
        alert('您输入的数字是水仙花数');
    }else{
        alert('您输入的数字不是水仙花数');
    }
}
else{
    alert('您输入的数字不合法的');
}
```

###### 		游乐园门票计算

​			请用户输入年龄和星期几，弹出对话框显示门票价格。星期几用阿拉伯数字0~6表示，其中0表示周日。年龄大于等于10岁平时300，周末500），年龄小于10岁（平时140，周末210）;

​		**if语句的嵌套**

```js
// 写法1 
var week = Number(prompt('请输入星期几'));
var age = Number(prompt('请输入年龄'));
if(week == 0 || week == 6){
    if(age >= 10){
        alert('500元');
    }else{
        alert('210元');
    }
}else{
    if(age >= 10){
        alert('300元');
    }else{
        alert('140元');
    }
}   
```

```js
// 写法2 
var week = Number(prompt('请输入星期几'));
var age = Number(prompt('请输入年龄'));
if(age >= 10){
    if(week == 0 || week == 6){
        alert('500元');
    }else{
        alert('300元');
    }
}else{
    if(week == 0 || week == 6){
        alert('210元');
    }else{
        alert('140元');
    }
}   
```



##### switch语句

​	用途：当一个变量被分类讨论的情形

​	案例：用户输入一个1~12的任意一个数字，显示月份的天数

```js
var year = Number(prompt('请输入一个年份'));
var month = Number(prompt('请输入一个月份'));
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      alert('这个月有31天');
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      alert('这个月有30天');
      break;
  case 2:
      if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
          alert('这个月有29天');
      }else{
          alert('这个月有28天');
      } 
      break;
  default:
      alert('请输入正确的月份');
}
```

​	1、在switch()的圆括号中一般是一个变量名，这个变量将被分类讨论

​	2、case表示“情况”，它后面没有圆括号，直接跟一个值。程序会依次将case后面的值与switch圆括号中的值进行全等比对，如果比对相同，则执行这条case:后面的语句。default表示默认情况

​	3、多条case可以共用同一个语句体

**break非常重要**：switch语句并不想if语句那样当执行了某一个分支之后会自动跳出if语句体，程序员必须主动调用break来跳出switch语句体。如果不书写break，则后面的所有case 都将被视为匹配，直到遇见break。

```js
var a = 10;
switch(a){
    case 10:
        console.log('A');//被输出
    case 4:
        console.log('B');//被输出
    case 88:
        console.log('C');//被输出
        break;
    case 2:
        console.log('D');
}
```



##### 三元运算符

​	条件表达式?表达式1:表达式2；真1假2。(替代两个选择)

```js
var age = 24;
var type = age >= 18?'成年人':'未成年人'
console.log(type);  //成年人
```





##### 循环语句

###### for循环

​	for(var i = 1;i <= 10; i++){console.log(i);}

​	表达式var i = 1;表示定义一个“循环变量”i,并赋值为1;

​	表达式i<=10;表示继续执行循环的条件，只要这个条件为真，则会一直执行。

​	表达式i++用来更新循环变量，是循环变量的值越来越趋向终点。	

```JS
// 案例1：请使用for循环语句在控制台逐行输出18、14、10、6、2、-2、-6
    for(var i = 18;i >= -6;i-=4){
        console.log(i);
    }
// 案例2：请使用for循环语句在控制台逐行输出0、0.2、0.4、0.6、0.8、1
    for(var i = 0;i <= 1;i += 0.2){
        console.log(i.toFixed(1));
    }
```

###### 	for算法题

```js
// 案例1：计算1+2+3+...+99+100的和
   var sum = 0 ;
   for(var i = 1;i <= 100; i++){
       sum += i;
   }
// 案例2：请问1~100中哪个数字除以3余1，除以4余2，除以5余3？
   for(var i = 1;i <= 100;i++){
       if(i % 3 == 1 || i % 4 == 2 || i % 5 == 3){
       }
   }
```

###### while循环语句

​	while(循环条件){}

​		while循环没有显示定义循环变量，必须自己在while循环外先定义好循环变量，有时甚至可以没有循环变量。

​		循环体内的语句，必须使循环测试条件趋向不成立，否则会死循环。

```js
// 案例1:计算1+2+3+...+99+100的和
    var i = 1,sum = 0;
    while(i <= 100){console.log(i); sum += i;i++;}
// 更适合while循环的场景：寻找最小的满足n*n<456789的正整数n
    var n = 1;
    while(n*n < 456789){
        console.log(n);
        n++;
    }
// 案例2：小兔子拔萝卜，第一天拔1个，第二天拔2个，第三天拔3个，以此类推。请问小兔子多少天能把500个萝卜拔光？
    var day = 1,sum = 0;
    while(sum < 500){
        sum += day++;
    }
    console.log(day-1);
```

​	

###### break和continue ★

​		break表示立即终止循环，它只能用在循环语句中，在for循环和while循环中都可以使用

```JS
for(var i = 0;i < 10;i++){ console.log(i); if(i == 4){break; }}
```

​		break用在while语句中，通常while(true){}搭配使用

```JS
var n = 1; while(true){if(n*n > 456789){console.log(n);break;}n++;}
```

​	 	continue用于跳过循环中的一个迭代，并继续执行循环中的下一个迭代。for循环更经常使用continue

```JS
for(var i = 0;i < 10;i++){if(i == 3){continue;}console.log(i);}
```



###### do-while语句

​	do{循环体}while(循环执行条件);

​	是一种“后测试循环语句”，它不同于for循环和while循环每次都是“先测试条件是否满足，然后执行循环体”，do-while循环是“先执行循环体，然后测试条件是否满足”

 **随机数函数**

​	Math.random()表示得到0~1之间得到小数

​		 得到[a,b]区间的整数，公式：

​       	 parseInt(Math.random()*(b-a+1)) + a;

```js
// 案例1：随机生成两个变量dx和dy，它们均在[-4,4]区间随机取值，但要求dx和dy不能同时为0
do{
  var dx = parseInt(Math.random()*9) - 4;
  var dy = parseInt(Math.random()*9) - 4;
}while(dx == 0 && dy == 0);
```

###### 	do-while算法题

猜数字小游戏：随机生成一个2~99的数字，让用户猜测这个数字是几，用户输入自己的猜测之后，提示“输入的数字太大了”或“输入的数字太小了”，不断重复这个过程，直到用户准确猜到这个数字

```js
var answer = parseInt(Math.random()*98) + 2;
var max = 99,min = 2;
do{
    var input = Number(prompt('请输入猜测值:'+ min + '~' + max));
    if(input < min || input > max){
        alert('请输入正确范围数字');
        continue;
    }
    if(answer > input){
        alert('太小了!');
        min = input;
    }else if(input > answer){
        alert('太大了');
        max = input;
    }else{
        alert('答对啦!');
        break;
    }
}while(input != answer)
```





### 2.2、算法(Algorithm)

​	是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制。也就是说，能够对一定规范的输入，在有限时间内获得所要求的输出

​	就是把一个复杂的问题，拆解为计算机能够一步一步执行的步骤

​		计算机的流程控制语句：顺序执行，选择语句，循环语句。

#### **优秀的算法的要求**

​	正确性，健壮性(多平台)，可读性（后期维护）。前端工程师对时间复杂度和空间复杂度要求较低。

​	伪代码：心中所想。

​	算法如何培养？多敲、多练、多总结。经典的业务需求场景要熟记心间。

#### 累加器和累乘器

​	累加器题目：输入n;计算3/2 + 4/3 + 5/4 +...+ n + 1/n;

```js
var n = Number(prompt('输入'));
var sum = 0;
for(var m = 2;m <= n;m++ ){
    sum += (m+1)/m;
}
```

​	累乘器题目：由用户输入数字n，请计算n的阶乘

```js
var n = Number(prompt('输入'));
var sum = 0;
for(var m = 1;m <= n;m++){
    sum *= m;
}
```

​	同时使用：[某大厂面试题]圆周π可以有下面的**莱布尼茨级数公式**计算出来，请由用户输入参数n，计算圆周率π。

​		π/2 = 1 + 1/3 + (1 * 2)/(3 * 5) + (1 * 2 * 3)/(3 * 5 * 7) + (1 *  2 * 3 * 4)/(3 * 5 * 7 * 9) +...+ (1 * 2 * ... * n)/(3 * 5 *...(2n+1))

```js
var n = Number(prompt('输入'));
var sum = 1;
var reslut = 1;
for(m = 1;m <= n;m++){
    sum *= (m/(2*m+1));
    reslut += sum;
}
alert(reslut*2);
```



#### 穷举法

​	计算机最突出的能力就是计算，它没有归纳总结、逻辑推理的能力。所以人们使用计算机解决问题的时候，要“扬长避短”——充分发挥计算机的计算优势，而不要让它进行逻辑推理。穷举法就是这样的一种算法思想。

​	顾名思义：是指根据题目的条件确定答案的大致范围，并在此范围内对所有可能的情况逐一验证，知道全部情况验证完毕。若某个情况符合题目的条件，则为本问题的一个解；若全部情况验证后都不符合题目的条件，则本题无解。

```JS
// 案例1：编程寻找100以内的既能被3整除，也能被5整除的数字
for(var i = 1; i <= 100;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
    }
}
// 案例2：用户输入一个数字，在控制台显示这个数字的全部约数
    var n =Number(prompt('请输入数字'));
    for(var i = 1;i <= n ; i++){
        if(n % i == 0){
            console.log(i);
        }
    }
// 案例3：寻找全部的水仙花数。
    var x,y,z;
    for(var i = 100;i < 1000;i++){
        x = i.toString().charAt(0);
        y = i.toString().charAt(1);
        z = i.toString().charAt(2);
        if(Math.pow(x,3) + Math.pow(y,3) + Math.pow(z,3) == i){
            console.log(i);
        }
    }
```

####  综合算法题★

​	循环的嵌套：请寻找1~100的所有质数（只能够被1和它本身整除的数字，最小的质数是2）。

​	**label语句语法**：label:statement;label表示标签名，statement表示代码块，label和statement表示代码块之间使用英文状态下的冒号分隔；

```js
outer: for(var x = 2; x < 101;x++){
    for(var y = 2;x > y;y++){
        if(x % y == 0){
            //要给外层for循环加上label，然后在continue的后面加上这个lable，这样就表示立即开始迭代外层for循环的下一个数字了。
            continue outer;
        }
    }
    console.log(x);
}
```

```js
// 案例：有雉兔同笼，上有三十五头，下有九十四足，问雉兔各几何。
    // 写法1：
    for(var x = 0;x <= 35; x++){
        for(var y = 0;y <= 35; y++){
          if(x + y == 35 && 2*x + 4*y == 94){
            console.log('x = ' + x + ',' + 'y = ' + y);
          }
        }
     }
// 写法2
var y;for(var x = 0;x <= 35; x++){ y = 35 - x; if(2 * x + 4 * y ==94){console.log('x = ' + x + ',' + 'y = ' + y);}}
```

#### 一些问题

1、JS中的流程控制语句有哪些？
2、if多分枝语句的执行机理；for循环的执行机理？
3、for和while循环各有什么使用场景？
4、累加器和累乘器、穷举法算法思想







### 2.3、数组(Array)  

​	**用来存储一组相关的值，**从而方便进行求和、计算平均数、逐项遍历等操作。每种高级编程语言都有，它是一种数据结构。(可以存储不同的数据)

​	定义数组的方法1：var arr = ['A','B','C','D'];

​	定义数组的方法2：var arr = new Array('A','B','C','D');  

​	下面的代码表示定义一个长度为4的数组，但是这4项都是undefined

```js
var arr = new Array(4);
```

​	访问数组项：数组每一项都有下标，下标从0开始。方括号书写下标的形式，访问数组的任一项。

```js
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
```

#### 	下标越界

​		JS规定，访问数组中不存在的项会返回undefined，不会报错

```js
console.log(arr[10000]);// undefined
```

#### 	数组的长度

​		length属性表示它的长度，数组的最后一项的下标是数组的长度减1。

```js
console.log(arr.length);
```

​	

#### 	更改数组项

不是只读，可以修改；如果更改的数组超过了length-1，则会创造这项。

```js
var arr = [2, 5, 7 ,3];
arr[6] = 4;
console.log(arr);//(7) [2, 5, 7, 3, 空(EMPTY), 空(EMPTY), 4]
```

#### 	数组的遍历

```js
var arr = ['A','B','C',,,'D'];
for(var i = 0 ; i < arr.length; i++){console.log(arr[i]);}//A B C undefined undefined D
```

#### 	数组的类型检测

用typeof检测结果是object

```js
 typeof[1,2,3] // object
```

IE8:**Array.isArray()**方法来检测数组； 

```js
Array.isArray([1,2,3]);// true
```

用关键字 **instanceof**来检测

```js
console.log([1, 2, 3] instanceof Array)
```



#### 数组的常用方法★

##### 1、数组的头尾增删-changed

###### 	push() 尾+

​	在尾部插入新项，如果需要多项用逗号隔开，调用完后，数组会立即改变，不需要赋值。

```js
var arr = [1,3,4,5];arr.push(12,23);console.log(arr);//(6) [1, 3, 4, 5, 12, 23]
```

###### 	pop() 尾 -

​	在尾部删除,会返回尾被删除的项。()内参数无意义。

```js
var arr = [1,3,4,5];var last = arr.pop();console.log(arr);//(3) [1, 3, 4] console.log(last);//5
```

###### 	unshift() 头++

​	在头部插入新项，如果需要多项用逗号隔开，调用完后，数组会立即改变，不需要赋值。

```js
var arr = [1,3,4,5];arr.unshift(12,23);console.log(arr);//(6) (6) [12, 23, 1, 3, 4, 5]
```

###### 	shift() 头 -

​	在头部删除，删除数组中下标为0的项，会返回被删除的项。()内参数无意义。

```js
var arr = [1,3,4,5];var last = arr.shift();console.log(arr);//(3) [3, 4, 5] console.log(last);//1
```

##### 2、splice()替换子元素方法-changed

用于替换数组中的指定项（从下标为3的地方开始用3个数据替换2个新项并新增一个新项）

```js
var arr = ['A','B','C','D','E','F','G']
arr.splice(3,2,'X','Y','Z')
console.log(arr);//(8) ["A", "B", "C", "X", "Y", "Z", "F", "G"]
```

用于在指定位置插入新项（从下标为2的地方开始插入3个新项）

```js
var arr = ['A','B','C','D','E','F','G']
arr.splice(2,0,'X','Y','Z')
console.log(arr);//(10) ["A", "B", "X", "Y", "Z", "C", "D", "E", "F", "G"]
```

用于删除指定项（从下标为2的地方删除4项）

```js
var arr = ['A','B','C','D','E','F','G']
arr.splice(2,4)
console.log(arr);//(3) ["A", "B", "G"]
```

会以数组形式返回被删除的项(一定有返回值，没有就是 返回空数组[])先删除再替换

```js
var arr = [0,1,2,3,4,5,6,7,8,9]
var splice = arr.splice(3,2,99,999,9999)
console.log(arr);//(11) [0, 1, 2, 99, 999, 9999, 5, 6, 7, 8, 9]
console.log(splice);//(2) [3, 4]
```

##### 3、slice(a,b)切片复制方法-nochanged

​	类似于字符串的，不会更改原数组;a < b

```js
var arr = ['A','B','C','D','E','F','G']
console.log(arr.slice(2,4));//(2) ["C", "D"]
```

​	如果不提供第二个参数，则表示从指定项开始，提取所有后续所有项作为子数组。

```js
var arr = ['A','B','C','D','E','F','G'];
console.log(arr.slice(2));//(5) ["C", "D", "E", "F", "G"]
```

   允许倒数取值（负数）

```js
var arr = ['A','B','C','D','E','F','G']
console.log(arr.slice(-5,-3));//(5) ["C", "D"]
```

##### 4、join(toString)和split(toArr)方法-changed

​	join使**数组转为字符串**，split使**字符串转为数组**

​	join()的参数表示以什么字符作为连接符，如果留空则默认以逗号分隔，如同调用toString()方法

```js
[22,33,44,55].join() // "22,33,44,55"
[22,33,44,55].toString() // "22,33,44,55"
[22,33,44,55].join('') // 22334455 
[22,33,44,55].join(' ') // 22 33 44 55
```

​	split()的参数表示以什么字符拆分字符串，一般不能留空

```js
'ABCDE'.split() // ["ABCDE"]  
'ABCDE'.split(' ')// ["ABCDE"]  
'ABCDE'.split('') // (5) ["A", "B", "C", "D", "E"]
'A-B-C-D-E'.split('-') // (5) ["A", "B", "C", "D", "E"]
```

​	字符串和数组更多相关性：字符串也可以使用方括号内写下标的形式，访问某个字符，等价于charAt()方法

```js
'ABCDE'[0];// A
```

​	**字符串的一些算法问题有时候会转为数组解决**

##### 5、concat()方法-changed

​	可以合并连结多个数组,不会改变原数组。

```js
var arr1 = [1,2,3,4]; var arr2 = [5,6,7,8]; var arr3 = [9,10,11];
var arr = arr1.concat(arr2,arr3);
console.log(arr);// (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

##### 6、reverse()方法-changed

​	用来将一个数组中的全部项顺序置反

```js
var arr = ['A','B','C','D'];
arr.reverse();
console.log(arr);// (4) ["D", "C", "B", "A"]
```

###### 字符串倒序处理

```js
'ABCDEFG'.split('').reverse().join('');// "GFEDCBA"
```

##### 7、indexOf()和includes()方法-nochanged

​	indexOf(a,b)搜索数组中的元素，并返回它所在的位置，如果元素不存在，则返回-1；

​       a表示要查找的项,b表示起点（一个参数值时b为0）

```js
['A','B','C','D','E'].indexOf('D');//3 
['A','B','C','D','E'].indexOf('w');//-1
['D','A','B','C','D','E'].indexOf('D');//0
```

​	includes()判断一个数组是否包含一个指定的值，返回布尔值

```js
['A','B','C','D','E'].includes('C');//true
['A','B','C','D','E'].includes('w');//false
[1,2,3,4,5,6].includes(3);//true
```



##### 8、reduce方法-changed

​	arr.reduce(callback(acl,val,idx,array),initVal)

参数1: 是要执行的函数，参数如下：
    	acl => 上一次回调时返回的积累值，必选项 => acl ?= val;
    	val => 当前元素，必选项 => arr[idx]
   	 idx => 当前索引，可选
   	 array => 被遍历的数组，可选项
参数2：函数迭代的数值
    	initVal：第一次调用函数时的第一个参数的值，如果没有提供初始值，则将**使用数组中的第一个元素**

```js
//案例1：无参数2：initVal,没有设置函数的初始迭代值
let arr = [1,2,3,4];
let sums = arr.reduce(function(acl,val,idx,array){
    console.log('acl=' +acl,'val=' + val,'idx=' + idx,array);
    return acl + val;
});
console.log(arr,sums);
```

```js
//案例2：有参数2：initVal,设置函数的初始迭代值
let arr2 = [1,2,3,4];
let sum2 = arr2.reduce(function(acl,val,idx,array){
    console.log('acl=' +acl,'val=' + val,'idx=' + idx,array);
    return acl + val;
},10);
console.log(arr2,sum2);
```

**reduce的应用**

```js
// 1、数组中的元素求和
let arrs = [1,2,3,4];
let suma = arrs.reduce((acl,val)=>{
    return acl + val;
});
console.log(suma);
```

```js
// 2、数组去重
let arrlist = [12,123,12312412,42342,123,3254,454,3454,3454,23412,1231,1231];
let newArr = arrlist.reduce((prev,next) => {
    //判断数组是否存在当前元素，如果不存在的话，再将其添加到数组中
    prev.indexOf(next) == -1 && prev.push(next)
    return prev
},[]);//设置迭代初始值为一个空数组
//原数组不会发生改变
console.log(arrlist);
//去除重复项的新数组
console.log(newArr);
```

★★★理解第一个参数是如何进行迭代的



##### 9、map方法 -new

- 返回一个新数组，新数组中的元素为原始数组中的每个元素调用函数处理后得到的值。

- 按照原始数组元素顺序依次处理元素

 **注意**

- 不会对空数组进行检测
- 不会改变原始数组
- 函数的作用是对数组中的每一个元素进行处理，返回新的元素

  **参数**

- ```js
  array.map(function(item, index, arr))
  ```

- item必须，当前元素的值

- index可选，当前元素在数组中的索引值
- arr可选，当前元素属于的数组对象

```js
const arr = [1, 2, 3, 4, 5, 6]
const newArr = arr.map(function (item, index, arr){
  item *= 2;
  return item;
})
console.log(newArr) // (6) [2, 4, 6, 8, 10, 12]
```



##### 10、forEach方法 - no new

- 接收一个函数作为参数，在遍历每一项的时候，这个函数会被调用，同时将当前遍历到的项、当前项的下标（索引）、遍历的数组作为函数参数传递过来。

**参数**

- ```js
  array.forEach(function(item, index, arr))
  ```

- item必须，当前元素的值

- index可选，当前元素在数组中的索引值
- arr可选，当前元素属于的数组对象

```js
var array = ['a', 'b', 'c']
array.forEach(function(item, index, arr){
  console.log('this' + (index + 1) + ‘项的值是：’ + item )
})
```



##### 11、filter方法 -new

- 类似map，把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素

**注意**

- 不会对空数组进行检测
- 不会改变原始数组

**参数**

- ```js
  array.filter(function(item, index, arr))
  ```

- item必须，当前元素的值

- index可选，当前元素在数组中的索引值
- arr可选，当前元素属于的数组对象

```js
var array = [32, 33, 16, 44]
const res = array.filter(function(item, index, arr){
  return item > 32
})
console.log(res)
```



##### 12、sort方法 - new

- 用于对数组的元素进行排序，排序顺序可以是字母或数字、并按升序(默认按字母)或降序。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // (4) ['Apple', 'Banana', 'Mango', 'Orange']
fruits.reverse(); // (4) ['Orange', 'Mango', 'Banana', 'Apple']
```

**注意**

- 当数字是按照字母顺序排序时 40 排在 5前面。所以需要一个函数来作为参数调用

```js
var arr = [33,22,55,11];
//从小到大
arr.sort(function(a,b){
    if(a > b){
        return 1;
    }else {
        return -1;
    }
   //可以简写：retrun a-b; 从大到小排序：return b - a; 
});
console.log(arr);
```



#### 遍历相关算法

##### 总和、平均数

```js
var scoreArr = [96,97,76,87,87,90,91,99,78,56],sum = 0,avg;
for(var i = 0; i < scoreArr.length;i++){
    sum += scoreArr[i];
}
avg = sum / scoreArr.length;
console.log('sum:' + sum + ',avg:' + avg);
```

##### 最大值和最小值

```JS
var scoreArr = [96,97,76,87,87,90,91,99,78,56],max = scoreArr[0],min = scoreArr[0];
 for(var i = 0; i < scoreArr.length;i++){
    max < scoreArr[i]?max = scoreArr[i]:min = scoreArr[i];
}
console.log('max:' + max + ',min:' + min );
```

##### 数组去重

​	去掉数组中的重复项，思路：准备一个空结果数组，遍历原数组，如果遍历到的项不再结果数组中，则推入结果数组。

```JS
var arr = [1,2,3,4,5,1,3,4,78,9],reslut = [];
    for(var i = 0; i < arr.length;i++){
            if(!reslut.includes(arr[i])){
               reslut.push(arr[i]);
            }
    }
    console.log(reslut);//(7) [1, 2, 3, 4, 5, 78, 9]
```

请随机从原数组中取值3项

```JS
var arr = [1,2,3,4,5,78,9],reslut = [],num;
  for(var i = 0; i < 3;i++){
    num = parseInt(Math.random()*arr.length);
    reslut.push(arr[num]);
    arr.splice(num,1);
}
console.log(reslut);//(3) [9, 5, 78]
console.log(arr);//(4) [1, 2, 3, 4]
```

##### 冒泡排序

​	n个数字，共需要比较n-1趟，比较次数为n(n-1)/2次

```js
// 我的写法
var a= [1,78,88,5,36,44],ex;
for(var i = 0;i < arr.length; i++){
     for(var j = 1; j < arr.length; j++){
         if(a[i] < a[j]){
            ex = a[j];
            a[j] = a[i];
            a[i] = ex;
         }
     }
}
console.log(a);

// 视频的写法
var arr= [20,78,88,5,36,44],ex;
for(var i = 1;i < arr.length; i++){
  for(var j = arr.length - 1;j >= i;j--){
    if(arr[j] < arr[j-1]){
      ex = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = ex;
    }
  }
}
console.log(arr);
```



#### 二维数组

​	以数组为数组元素的数组，即数组的数组。矩阵

```js
var matrix = [[1,3,5],[2,4,6],[7,2]];
console.log('length = ' + matrix.length);
for(var i = 0;i < matrix.length; i++){
  for(var j = 0;j < matrix[i].length ; j++){
     console.log(matrix[i][j]);
  }
}
```









### 2.4、引用类型★

​	**array,object,function,regexp...**

#### 基本类型占用单独的内存，而引用类型共用堆内存

​	基本类型比较值相同，引用类型比较“地址”是否相等（同内存）。

```js
var arr1= [1,2,3,5],arr2;
arr2 = arr1;// 此时不是赋“值”，而是赋“址”。
arr1.push(7);
console.log(arr1);//(5) [1, 2, 3, 5, 7]
console.log(arr2);//(5) [1, 2, 3, 5, 7]
console.log(arr1 === arr2) // true
// 总结：基本类型值(nbsun): 当var a = b 变量传值时，用==比较的是值。
// 		引用类型值(aofr) : 当var a = b 变量传值时，用===比较的是内存地址是否相同，即比较是否是同一个对象。
```

#### 深克隆和浅克隆

​	**浅克隆**：只克隆数组的第一层，如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层。

```js
// 案例1
var arr1 = [1,2,3,4],result = [];
for(var i = 0;i < arr1.length; i++){
    result.push(arr[i]);
}
console.log(result);//(4) [1, 2, 3, 4]
console.log(result == arr1);//false
arr1.push(5);
console.log(result);//(4) [1, 2, 3, 4]
```

```js
// 案例2
var arr1 = [1, 2, 3, 4, [1, 2, 3]],result = [];
for(var i = 0;i < arr1.length; i++){
    result.push(arr1[i]);
}
console.log(result);//(5) [1, 2, 3, 4, [1, 2, 3]]
console.log(result == arr1);// false
console.log(result[4] == arr1[4]);// true 藕断丝连（数组是对象，属于引用类型）
```

```js
// 案例3
var arr1 = [1,[2,3]];
var arr2 = [arr1[0],arr1[1]]; // 此时arr2 =[1,[2,3]]
arr1[1].push(4);// arr1[1] == arr2[1],所以arr2 = [1,[2,3,4]]
arr1.shift(); // arr1与arr2的地址不一样，所以arr2不会有影响
console.log(arr2);// (2)[1,[2,3,4]]
```

​	**深克隆**：克隆数组的所有层，要使用递归技术。

#### 一些问题

1、数组是什么？应该如何定义？

2、如何检测数组类型？

3、数组有哪些常用方法？

4、数组的遍历相关算法、去重和随机样本、冒泡排序

5、基本类型值和引用类型值得区别

6、实现浅克隆







## 3、《函数与DOM、BOM》

### 3.1、函数function（一等公民）

#### 什么是函数？

​	函数是语句的封装，方便代码复用。函数具有一次定义，多次调用的优点。使用函数，可以简化代码，让代码更具有可读性

​	函数的定义和调用：和变量类似，函数必须先定义然后才能使用

​	**function 函数名(形参){函数体语句}**

#### 匿名函数

​	**var fun = function(){函数体语句}**

```js
function fun(){console.log(1)} 
fun();// 函数的调用
```

​	语句的执行顺序：从上到下

#### 函数声明的提升★★★

​	和变量声明提升类似，函数声明也可以被提升。 

```js
fun(); 
function fun(){console.log(11111);}
```

##### 	函数表达式不能提升

```js
fun(); 
var fun = function(){console.log(1);}//引发错误Uncaught TypeError: fun is not a function
```

##### 函数的优先提升：先函数，后变量

```js
fun() //11111
function fun(){console.log(11111);} // 第一
var fun = function(){console.log(1);} // 第二会覆盖前一个函数
fun() // 1
```

```js
// 案例1
console.log(fn);// fn(){}
function fn(){};
```

```JS
// 案例2
console.log(fn);// undefined
var fn = function fn(){};
```

```JS
// 案例3
console.log(a);// function a(){console.log(4);}
// 第三步 => 变量I: 覆盖函数II
var a = 1;
console.log(a);// 1
// 第一步 => 函数I: 第一个被提升的函数
function a(){
    console.log(2);
}
console.log(a);// 1
// 第四步 => 变量II: 覆盖变量I
var a = 3;
console.log(a);// 3
// 第二步 => 函数II: 覆盖第一个被提升的函数I
function a(){ 
    console.log(4);
}
console.log(a);// 3
a();// 因为a的值为3，无法调用，所以会报错
```

​	**结果就是函数名和变量名是可以相互覆盖的**





#### 函数的参数

​	参数是函数内的一些待定值，在调用函数时，必须传入这些参数的具体值，参数的数量，可多可少

​	形参和调用的数量可以不一致

```JS
function add(a,b,c){ var sum = a + b + c;console.log('三个数字的和是'+ sum)} 
add(3,5);
// 此时的第三个形参会接收到undefined(+undefined = NaN)
```

##### arguments

​	表示它接收到的实参列表，它是一个<**类数组对象**>：所有属性均为从0开始的自然数序列，

​	并且有length属性，和数组类似可以用方括号书写下标访问对象的某个属性值，但是不能调用数组的方法。

```js
function fun(){console.log(arguments);console.log(arguments[2]);} 
fun(33,232,23,11);//23
```

​	实际案例：无限累加器

```js
function sumFun(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}
sumFun(12,141234312,-4124,141);
```



#### 函数的返回值

##### 	return关键字

```js
function add(a,b,c){ var sum = a + b + c;return sum;}  
console.log(add(3,5)); // 8
console.log(add(1,add(3,5))); // 9
```

​	调用函数时，一旦遇见return语句则会立即退出函数，将执行权交还给调用者

```JS
function fun(a,b,c){
    console.log('A');
    return 'B';
    console.log('C');
}  
console.log(1);
var char = fun();
console.log(char);
console.log('2');
//执行结果：1AB2
```

​	结合if语句的时候，往往不需要写else分支了

```JS
// 编写偶数判断函数
function checkEven(x){
    if(x % 2 == 0){return true;}
    return fasle;
    // return x % 2 == 0
}
```

###### 寻找喇叭花数

即abc = a! + b! + c!;abc表示3位数

```JS
function factorial(n){
    var sum = 1;
    for(var i = 1; i <= n ; i++){
        sum *= i;
    }
    return sum;
}
for(var i = 100 ; i < 1000;i++){
    var i_str = i.toString();
    if(i == factorial(Number(i_str[0])) + factorial(Number(i_str[1])) + factorial(Number(i_str[2]))){
        console.log(i)
	}
}
```

这个函数中的a、b分别表示数组中靠前和靠后的项，如果需要将它们交换位置，则返回任意正数；否则就返回负数。

```js
var arr = [33,22,55,11];
//从小到大
arr.sort(function(a,b){
    if(a > b){
        return 1;
    }else {
        return -1;
    }
   //可以简写：retrun a-b（升序）; 从大到小排序：return b - a; （降序）
});
console.log(arr);
```

**函数时JS中的一等公民，它可以当做参数传入另一个函数 **





#### 3.1.1、递归★★★

​	=> 函数的内部语句可以调用这个函数自身，从而发起对函数的一次迭代。在新的迭代中，又会执行调用函数自身的语句, 从而又产生一次迭代。当函数执行到某一次时，不再进行的新的迭代，函数被一层一层返回，函数被递归。

​	=> 递归是一种较为高级的编程技巧，它把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。

##### 递归的要素

​	边界条件：确定递归到何时终止，也称为递归出口。

​	递归模式：大问题是如何分解为小问题的，也称为递归体。

```JS
function fun(n){
   return n == 1? 1 : n*fun(n - 1);
}
```

##### 算法题

###### 	斐波那契数列

​	1、1、2、3、5、8、13、21...

```JS
function fib(n){
   if(n == 1 || n == 0){return 1;}
    return fib(n - 1) + fib(n - 2);
}
```

##### 深克隆

​	使用递归思想，整体思路和浅克隆相：如果遍历到项是基本类型值，则直接推入结果数组；如果遍历到的项是又是数组，则重复执行浅克隆的操作

```JS
//原数组
var arr1 = [33,44,11,22,[88,66]];
//函数，这个函数会被递归
function deepClone(arr){
    //结果数组,每一层都有一个结果数组
    var result = [];
    //遍历数组的每一项
    for(var i = 0; i < arr.length; i++){
        //类型判断，如果遍历到的项是数组
        if(Array.isArray(arr[i])){
            //递归
            result.push(deepClone(arr[i]));
        }else{
            //如果遍历到项是基本类型值，则直接推入结果数组；
            //递归的出口
            result.push(arr[i]);
        }
    }
    return result;
}
var arr2 = deepClone(arr1);
//是否藕断丝连
console.log(arr2);
console.log(arr1[4] == arr2[4]);
arr1[4].push(99);
console.log(arr2 == arr1)
console.log(arr1);
```

```js
function deepClone(obj = {}){
  if (typeof obj !== 'object' || obj == null) return obj
  let res = null
  if (obj instanceof Array) {
     res = []
  } else {
     res = {}
  }
  for(key in obj) {
    if(obj.hasOwnProperty(key)){
       res[key] = deepClone(obj[key])
    }
  }  
  return res
}
const init = { a: { b: { c : 1 } }  }
const copy = deepClone(init)
console.log(copy == init)
```



#### 3.1.2、全局变量和局部变量

##### 	变量作用域

​		JS是函数级作用域编程语言：**变量只在其定义时所在的function内部有意义。**

##### 	局部变量

```js
function fun(){var a = 10;} 
fun();
console.log(a);//报错
```

##### 	全局变量

​		如果不将变量定义在任何函数的内部，此时这个变量就是全局变量，它在任何函数内都可以被访问和更改。

```js
var a = 10;
function fun(){
   a++;console.log(a);// 11
} 
fun();
console.log(a);// 11
```

###### 	遮蔽效应★

​		如果函数中也定义了和全局同名的变量，则函数内的变量会将全局的变量“遮蔽”

```js
var a = 10;
function fun(){
    var a = 5;
    a++;
    console.log(a); //6
}                
fun();
console.log(a);// 10
```

​	注意考虑**局部也有变量声明提升**的情况

```js
var a = 10;
function fun(){
    // var a = undefined
    // a++;
    // a = 5;
    // console.log(a)
    // 上面是理解后
    a++; // 局部变量a被自增1，a此时是undefinde，自增1结果是NaN
    // var a = 5;它会产生变量声明提升
    var a = 5; // 重新赋值5
    console.log(a); //5
}                
fun();
console.log(a);//10
```

​	**形参也是局部变量**

```js
var a = 10;
function fun(a){
    a++;
    // 如果加上 var a = 5;
    console.log(a); //8
}                
fun(7);
console.log(a);//10
```



##### 作用域链

###### 	函数的嵌套

> 一个函数内部也可以定义一个函数和局部变量相似，定义在一个函数内部的函数是局部函数。

```js
function fun(){
    function inner(){
        console.log('你好');
    }
    inner();//调用内部局部函数
}
fun();//调用外部全局函数
```

​		在函数嵌套中，变量会从内到外逐层寻找它的定义。

```js
var a = 10, b = 20,c = 60;
function fun(){
  var c = 30;
  function inner(){
     var a  = 40,d = 50;
     console.log(a,b,c,d);//40 20 30 50
  }
  inner();
}
fun();
```

​		**不加var将定义全局变量：在初次赋值时，如果没有加var,则将定义全局变量**

```js
var a = 1,b = 2;
function fun(){
    // 全局变量C
    c = 3;
    var b = 4; 
    b++; c++;
}
fun();
console.log(b)// 2 
console.log(c);// 4
```

```JS
// 案例1
var a = 23;
function fun(a){
    console.log(a);// 这里的a是形参，但此时是空，undefined
    a = 43;// 这里的a依然是形参a，因为函数的参数定义了a，要记住，JS中函数是老大。
}
fun();// 因为调用的时候没有传参
console.log(a);// 23
```

```JS
// 案例2
var username = 'xm';
function fn(){
  var username = 'xh';
  var sex = 'male';
  console.log(username);// xh
  function fn2(){
    username = 'xhei';
    var age = 18;
    console.log(sex);// male
  }
  fn2();
  console.log(username);// xhei
}
fn();
console.log(username);// xm
```

#### 3.1.3、闭包(closure)★★★

​	闭包是函数本身和该函数声明是所处的环境状态的组合;

​	函数能够"记忆住"其定义时所处的环境,即时函数不在其定义的环境中被调用,也能访问定义时所处环境的变量。

```js
function fun(){
    var name ='lm';
    function innerFun(){
        console.log(name);//lm
    }
    return innerFun;//返回内部局部函数
}    
//调用外部函数，就能得到内部函数，用变量inn来接收
var inn = fun();// 内部函数被移动到了外部执行
/ **
ƒ innerFun(){
        console.log(name);//lm
  }
*/
console.log(inn) 
var name = 'aaa';// 外部定义了一个全局变量，innerFun()：name的值没有被改变
inn(); // === fun()();
```

观察闭包现象：在JS中，每次创建函数时都会创建闭包。但是，闭包特性往往需要将函数“换一个地方”执行，才能被观察出来。

闭包非常实用：因为它允许我们将数据与操作该数据的函数关联起来。这与《面向对象编程》有少许相似之处。



##### 闭包的功能

###### 	记忆性

​		当闭包产生时，函数所处环境的状态会始终保持在内存中，不会在外层函数调用后被自动清除。

​	案例：创建体温检测函数chekTemp(n),可以检查体温n是否正常，函数会返回布尔值。

​			   但是不同的小区有不同的体温检测标准，比如A小区体温合格线37.1°C，而B小区的是37.3°C。如何实现？

```js
function createCheckTemp(standardTemp){
  //这个函数可以一直记忆住standardTemp形参的值
  //standardTemp形参不会因为createCheckTemp函数执行完毕之后就忘记这个值
  function checkTemp(n){
    if(n <= standardTemp){
      console.log('你的体温正常');
    }else{
      console.log('你的体温高了');
    }
  }
  return checkTemp;
}
//创建一个checkTemp函数，它以37.1度为标准线
var checkTem_A = createCheckTemp(37.1);
//再创建一个checkTemp函数，它以37.3度为标准线
var checkTem_B = createCheckTemp(37.3);
checkTem_A(37.2);
checkTem_A(37.7);
checkTem_B(37.2);
checkTem_B(37.7);
```



###### 模拟私有变量

​	在Java、C++等语言中，有私有属性的概念（private s = 11;），但是JS中只能用闭包来模拟

​	案例：请定义一个变量a，要求是能保证这个a只能被进行制定操作（如加1、乘2），而不能进行其他操作，应该怎么编程呢？

```js
//封装一个函数，这个函数的功能就是私有化变量
function fun(){
  //定义一个局部变量a
  var a = 0;
  return {
    getA: function(){
      return a;
    },
    add: function(){
      a++;
    },
    // 相同函数名也会覆盖上面的
    // add: function(){
    pow: function(){
      a *= 2;
    }
  };
}
var obj = fun();
// 如果想在fun函数外面使用变量a,唯一的方法就是调用getA()方法
console.log(obj.getA());// 0
// 想让变量a进行加1操作
obj.add();
obj.add();
console.log(obj.getA());// 2
obj.pow(obj.getA(),3);
console.log(obj.getA()); // 4
```

​	使用闭包的注意点（IE）：不能滥用闭包，否则会造成网页的性能问题，严重时可能导致内存泄漏。所谓内存泄漏是指程序中已动态分配的内存由于某种原因未释放或无法释放 

```JS
// 面试题
function addCount(){
var count = 0;
return function(){
  count = count + 1;
  console.log(count);
};
}
var fun1 = addCount();
var fun2 = addCount();
fun1();//1
fun2();//1
fun1();//2
fun2();//2
```



##### IIFE(Immediately Invoked Function Expression)

​	立即调用函数表达式，是一种特殊的JS函数写法，一旦被定义，就立即被调用执行

```JS
(//将函数变为表达式
function(){statements})();//运行函数
//写法2
+function(){
    console.log(1);
}();
//写法3
-function(){
    console.log(1);
}();
//写法4
!function(){
    console.log(1);
}();
```

注意()()可能会造成语法上的错误，原因如下

```js
const a = b
(function(){})()
// 会出现执行b()函数的情况，一般前面加个!号
```



###### IIEF的作用

​	1、为变量赋值：需要一些复杂的计算时（if语句），使用IIFE显得语法更紧凑。

```js
var age = 12;
var sex = '女'
//IIEF给title赋值
var title = (function(){
 if(age < 18){
   return '小朋友';
 }else{
   if(sex == '男'){
     return '先生';
   }else{
     return '女士';
   }
 }
})();
```

​	2、将全局变量转为局部变量：如for循环中，语法显得紧凑

```js
// 原例子
var arr = [];
//给arr数组推入函数
for(var i = 0 ; i < 5; i++){
  arr.push(function(){
    console.log(i);//变量i是全局变量，所有函数都共享内存中的同一个变量i
  });
}
//调用数组中的函数
arr[2]();//5
```

```JS
// 转变后
var arr = [];
console.log(i) // undefined
//给arr数组推入函数
for(var i = 0 ; i < 5; i++){
  (function(i){  //这里的i是局部变量（形参）
    arr.push(function(){
    console.log(i);//
    });
  })(i);//这里的i是全局变量（实参）
}
//调用数组中的函数
arr[2]();//2
```

```js
var name="World!";
(function(){
    var name;
    if(typeof name=== 'undefined'){
        name='Jack';
        console.log('Goodbye'+name);
    }
    else{
        console.log('hello'+name);
    }
})();
```

##### 一些问题

1、什么是函数？函数为编程带来了哪些便利？

2、函数的参数和返回值

3、函数的相关算法题

4、递归、递归算法题

5、作用域和闭包

6、IIFE的作用







### 3.2、DOM（Document Object Model）

​	JS操作HTML和CSS的桥梁（节点思维）, 特点：将文档表示为节点树。

![](D:\front-end\study\MarkDown\0基础\img\DOM节点树.png)

#### 3.2.1、nodeType常用属性值★

​	可以显示这个节点具体的类型。

**1**：元素节点<p>和<div>

**3**：文字节点text

8：注释节点<!-- -->

**9**：document节点

**10**：DTD（文档类型声明）节点

​	访问元素节点：获取页面上的元素节点

##### document对象

​	几乎所有的DOM的功能都封装在了document对象中。也表示整个HTML文档，它是DOM节点树的根。nodeType属性值是9。

```js
document.nodeType;// 9
```





#### 3.2.2、常用方法

​	IE6: **document.getElementById()**;通过"**id**"得到元素

​		注意事项：相同id只能得到第一个，不惧深度。

​	IE6: **document.getElementsByTagName()**;通过"**标签名**"得到《节点数组》

 	注意事项：数组方便遍历，从而可以批量操作元素节点；

​    	    即使只有一个标签名的节点，也会得到长度为1的数组

​    	    任何一个节点元素也可以调用此方法得到内部某种类的元素节点

​	IE9: **document.getElementsByClassName()**;通过"**类名**"得到《节点数组》

​		    注意事项：任何一个节点元素也可以调用此方法得到内部某“类名”的元素节点

​	IE8部分,IE9全部: **document.querySelector()**;通过"**选择器**"得到元素

   	注意事项：IE9:才支持CSS3选择器，如:nth-child(),:[src^='dog']等

​            相同的只能得到第一个，不惧深度。

​	IE8部分,IE9全部: **document.querySelectorAll();**通过"**选择器**"得到《元素数组》

​    	注意事项： 即使只有一个符号选择器的节点，也会得到长度为1的数组

   	 **在测试DOM代码时,通常JS代码一定要写到HTML节点的后面，否则JS无法找到相应得到HTML节点**
   	
   	 **可以使用window.onload = function(){}事件，使页面加载完毕之后，在执行指定的代码**

```html
<div id="box">box
  <p id="para">para</p>
  <p id="para">para1</p>
  <p id="para">para2</p>
</div>
  <div id="box1">box
    <p  class="ppp ddd" id="para">para</p>
    <p  class="ppp" id="para">para1</p>
    <p  class="ppp" id="para">para2</p>
</div>
<ul id="list">
  <li>我是li</li>
  <li>我是li</li>
  <li>我是li</li>
  <li>我是li</li>
  <li>我是li</li>
  <li>我是li</li>
</ul>
```

```JS
// 如果需要把JS代码放到元素之前需要给window对象添加onload事件监听，onload表示页面都加载完毕了。
// window.onload = function(){
// 通过ID获取元素节点
var box = document.getElementById('box');
var para = document.getElementById('para');
console.log(box.nodeType);//1
console.log(para);//p标签元素节点
console.log( typeof para);//object
// 通过标签获得元素节点数组
var ps = document.getElementsByTagName('p');
  console.log(ps);//HTMLCollection(3) [p#para, p#para, p#para, para: p#para]
// 获得box中的p标签的数组
var box_ps = box.getElementsByTagName('p');
  console.log(box_ps);
// 通过类名获得节点数组
var class_s = document.getElementsByClassName('ppp');
  console.log(class_s);
// 通过选择器得到元素
var select = document.querySelector('#box1 .ddd');
// 通过CSS3选择器得到元素
var select1 = document.querySelector('#box1 p:nth-child(2)');
  console.log(select);
  console.log(select1);
// 通过选择器得到元素数组
var list = document.querySelectorAll('#list li');
  console.log(list);
// }
```

##### 三者的区别

```JS
// 以上两者可以动态获取元素，页面增加或者删除时，获取元素的个数可以改变
getElementsByTagName('TagName'); // 形参标签名
getElementsByClassName('ClassName'); // 形参类名
// 无法做到动态获取元素，一次获取终生使用
querySelectorAll('SelectorName'); // 形参是CSS选择器
```





#### 3.2.3、节点的关系★

![image-20210904140855494](D:\front-end\study\MarkDown\0基础\img\节点的关系.png)

|  考虑所有节点   |      关系      | 只考虑元素节点(非文本节点) |
| :-------------: | :------------: | :------------------------: |
|   childNodes    |     子节点     |        **children**        |
|   parentNode    |     父节点     |         parentNode         |
|   fristChild    |  第一个子节点  |   first**Element**Child    |
|    lastChild    | 最后一个子节点 |    last**Element**Child    |
| previousSibling | 前一个兄弟节点 | pervious**Elemen**tSibling |
|   nextSibling   | 后一个兄弟节点 |   next**Element**Sibling   |

**注意**：***在DOM中，文本节点也属于节点***。在标准的W3C的规范中，空白文本节点也应该算作节点，

但是在IE8及以前的浏览器中会有一定的兼容问题，它们不把空文本节点当做节点

```html
<div id="boxs">
    我是父节点的文本内容，属于节点
    <p>我是段落A</p>
    我是文本
    <p id="paras">我是段落B</p>
    <p>我是段落C</p>
</div>
```

```js
var boxs = document.getElementById('boxs');
var paras = document.getElementById('paras');
// 所有子节点
console.log(boxs.childNodes);// NodeList(7) [text, p, text, p#para, text, p, text]
// 所有的元素子节点(非文本节点)（IE9开始兼容）
console.log(boxs.children);// HTMLCollection(3) [p, p#paras, p, paras: p#paras]
// 第一个子节点
console.log(boxs.firstChild);// text：“我是父节点的文本内容，属于节点”
console.log(boxs.firstChild.nodeType);// 3
// 第一个元素子节点（IE9开始兼容）
console.log(boxs.firstElementChild);// <p>我是段落A</p>
// 最后一个子节点
console.log(boxs.lastChild);// 此时</div>换行，所以此时会产生#text对象，内容为"\n "，如果是</p></div>，输出就是： <p>我是段落C</p>
console.log(boxs.lastChild.nodeType);// lastChild如果是text节点，那么就是3 如果是元素节点<p>我是段落C</p>，那么就是1
// 最后一个元素子节点（IE9开始兼容）
console.log(boxs.lastElementChild);// <p>我是段落C</p>
// 父节点
console.log(paras.parentNode); // <div id="boxs">...</div>
// 前一个兄弟节点
console.log(paras.previousSibling);// 我是文本
// 前一个元素兄弟节点（IE9开始兼容）
console.log(paras.previousElementSibling);// <p>我是段落A</p>
// 后一个兄弟节点
console.log(paras.nextSibling);// #text内容为"\n "，不换行之后就是<p>我是段落C</p>
// 后一个元素兄弟节点（IE9开始兼容）
console.log(paras.nextElementSibling);// <p>我是段落C</p>
```

##### 书写常见的节点关系函数

​	书写IE6也能兼容的“寻找所有元素子节点”函数

```js
function getChildren(node){
  var children = [];
  // 遍历node这个节点的所有子节点，判断每一个子节点的nodeType属性是不是1
  // 如果是1，就推入结果数组
  for(var i = 0;i < node.childNodes.length;i++){
    if(node.childNodes[i].nodeType == 1){ 
      children.push(node.childNodes[i]);
    }
  }
  return children;
}
console.log(getChildren(boxs));//(3) [p, p#paras, p]
```

​	书写IE6也能兼容的“寻找前一个元素子节点”函数

```js
function getElementsPreviousSibling(node){
  var o = node;
  while(o.previousSibling != null){
    if(o.previousSibling.nodeType == 1){
      return o.previousSibling;
    }
    o = o.previousSibling;
  }
  return null;
}
console.log(getElementsPreviousSibling(paras));// <p>我是段落A</p>
```

​	如何编写函数，获得某元素的所有的兄弟节点?

```js
function getAllElementsSibling(node){
  // 前面的元素兄弟节点
  var prevs = [];
  // 后面的元素兄弟节点
  var nexts = [];
  // 遍历node的前面的节点
  var o = node;
  while(o.previousSibling != null){
    if(o.previousSibling.nodeType == 1){
      prevs.unshift(o.previousSibling);
    }
    // 向上个节点移动
    o = o.previousSibling;
  }
  // 遍历node的后面的节点
  o = node;
  while(o.nextSibling != null){
    if(o.nextSibling.nodeType == 1){
      nexts.push(o.nextSibling);
    }
    // 向下个节点移动
    o = o.nextSibling;
  }
  // 将两个数组合并返回
  return prevs.concat(nexts);
}
console.log(getAllElementsSibling(paras));
```





#### 3.2.4、节点操作★

##### 	如何改变元素节点中的内容

###### 	innerHTML

​	以HTML语法设置节点中的内容

###### 	innerText

​	以纯文本的形式设置节点中的内容



##### 	如何改变元素节点的CSS样式

​		DOM对象.style.css属性（驼峰命名） = 'CSS属性值';

```js
oBoxx.style.backgroundColor = 'red';
```

​		DOM对象.classList.add('CSS类名')

```js
oboxx.classList.add('ClassName')
```



##### 	如何改变元素节点的HTML属性★★★

​		标准W3C属性，如src、href等等，只需要直接打点进行更改即可

​		不符W3C标准的属性，要使用**setAttribute**()和**getAttribute**()来设置、读取



##### className属性的介绍和使用

定义：className属性设置或返回元素的class属性值

1、className属性用于设置元素的class属性值

```js
element.className = "cName";
```

1.1、element表示要设置class属性的目标元素

1.2、className表示获取或设置指定元素的class属性的值

1.3、cName表示的是class属性的值

使用示例：代码中，myDiv表示要设置class属性的目标元素，fixBox表示class属性的值

```css
var myDiv = document.getElementById("myDiv");
// 设置class属性值
myDiv.className="fixBox";
```

2、element.className

className属性用于获取元素的class属性值：

​	(1)直接获取html元素的class属性值

使用示例：代码中，myDiv表示要获取class属性的目标元素。

```js
var myDiv = document.getElementById("myDiv");
// 获取class属性值
console.log(myDiv.className);
```

​	(2)先通过className设置元素的属性值，再获取该属性值

​	(3)当元素有多个类名，通过className属性可以获取到全部的类名

```html
<div id="myBox" class="oneBox twoBox threeBox"></div>
<script>
    var myBox = document.getElementById("myBox");
    console.log(myBox.className) // oneBox twoBox threeBox
</script>
```

3、使用场景：实现行为与样式分离，减少代码量，所以在需求不确定的情况下，建议**使用calssName这种方式来动态修改元素的样式**

```html
<style>
.oneBox {
    font-weight: bold;
    font-size: 1.2em;
    background: red;
}
</style>
<div id="myBox">jjj</div>
<script>
    var myBox = document.getElementById("myBox");
    // myBox.style.fontWeight = "bold";
    // myBox.style.fontSize = "1.2em";
    // myBox.style.background = "red";
    myBox.className = "oneBox"
</script>
```

注意事项：通过className设置元素的class属性会覆盖原来所有存在的class值。

解决方法：通过自定义方法实现，看代码:原基础上追加类名方法

```html
<div id="boxx" style="width: 200px;height: 200px;border: 1px solid #000;">
    <a href= "#">我会被替代</a>
</div>
<img src="poem.png" id="pic">
<a href="http://www.baidu.com" id="link" target="blank" >去百度</a>
<div id="sbox" data-n="10" >sbox</div>
<script>
    var oBoxx = document.getElementById('boxx');
    // 这两个属性会互相覆盖，也覆盖<div>这里面</div>原来的内容
    oBoxx.innerHTML = '<ul><li>牛奶</li><li>咖啡</li></ul>';// 这个会添加HTML代码
    console.log(oBoxx.innerHTML);
    oBoxx.innerText = '<ul><li>牛奶</li><li>咖啡</li></ul>';// 这个只添加纯文本显示
    console.log(oBoxx.innerText);   
    // 改变元素节点的背景颜色
    oBoxx.style.backgroundColor = 'rgba(100,200,111,.2)';
        
    var pic = document.getElementById('pic');
    // 改变元素节点的HTML属性(标准的W3C属性)
    pic.src = 'images/dog.jpg';
    var oLink = document.getElementById('link');
    oLink.href = 'http://www.bing.com';
    oLink.innerText = '去必应';
    
    var sbox = document.getElementById('sbox');
    // data-n不符W3C标准的属性
    sbox.setAttribute('data-n',10);
    var n = sbox.getAttribute('data-n');
    console.log(n); // 10
    // 可以设置class属性值（替换）
    sbox.className ='leiming classs';
    // 获取class属性值,有多少个获取多少个
    console.log(sbox.className); // 'leiming classs';
    
    // 原基础上追加类名方法，两个参数：1、元素;2、类名值
    function addClass(element, value){
        // 定义一个变量，存储原来的class属性值
        var newClassName = "";
        // 如果class属性是空的，直接加
        if(!element.className){
            element.className = value;
        }else{
            // 原来class属性值的赋值给空的变量
            newClassName = element.className;
            // 这句代码将追加的类名和原来的分开组合
            newClassName += " ";
            // 原来的基础追加新的类名值
            newClassName += value;
            // 赋值给原来的元素属性值
            element.className = newClassName;
        }
    }
</script>
```





#### 3.2.5、节点的创建、移除和克隆

##### 节点的创建

​	document.createElement()方法用于创建一个指定tagname的HTML元素

```js
var oDiv = document.createElement('div');
```

###### 孤儿节点

​	它并没有被挂载到DOM树上，我们无法看见它

​    必须继续appendChild()或insertBefore()方法将孤儿节点插入到DOM树上

###### 	appendChild()

​	任何已经在DOM树上的节点，都可以调用appendChild()方法，它可以将孤儿节点挂载到它的内部，成为它的最后一个子节点。

​		父节点.appendChild(孤儿节点);

###### 	insertBefore()

​	任何已经在DOM树上的节点，都可以调用insertBefore()方法，它可以将孤儿节点挂载到它的内部，成为它的“标杆子节点”之后的节点。

​		父节点.insertBefore(孤儿节点, 标杆节点);

```html
<div id="parent">
    <p>我是原本的P0</p>
    <!--<p>我是后来的P3</p> -->
    <p>我是原本的P1</p>
    <p>我是原本的P2</p>
</div>
<script>
    var oParent = document.getElementById('parent');
    var oPs = oParent.getElementsByTagName('p');
    
    // 创建孤儿节点
    var newP = document.createElement('p');
    // 设置内部文字
    newP.innerText = '我是后来的P3';
    // 上树
    // oParent.appendChild(oP);
    // 证明getElementsByTagName是动态获取元素节点的
    console.log(oPs);
    // 插入第一个节点前面
    oParent.insertBefore(newP,oPs[1]);
    console.log(oPs);
</script>
```

​	请动态创建出一个20行12列的表格

```html
<table id="mytable"></table>
<script>
    var mytable = document.getElementById('mytable');
    //创建了新的tr标签
    for(var i = 0; i < 20 ; i++){
        var tr = document.createElement('tr');
        for(var j = 0 ; j < 12; j++){
            //创建了新的td标签
            var td = document.createElement('td');
            //让tr追加td标签
            tr.appendChild(td);
        }
        //让table追加tr标签
        mytable.appendChild(tr);
    }
    mytable.style.backgroundColor ='red';
</script>
```

​	制作九九乘法表

```html
<table id="newtable"></table>
<script>
    var newtable = document.getElementById('newtable');
    for(var i = 1;i < 10; i++){
        var tr = document.createElement('tr');
        for(var j = 1;j <= i; j++){
            var td = document.createElement('td');
            td.innerText = i + '*' + j +'=' + i*j;
            tr.appendChild(td);
        }
        newtable.appendChild(tr);
    }
</script>
```

##### 移动节点

​	如果将已经挂载到DOM树上的节点成为appendChild()或者insertBefore()的参数，这个节点将会被移动

​		新父节点.appendChild(已经有父亲的节点); 

​		新父节点.insertBefore(已经有父亲的节点，标杆子节点);

​	这意味着一个节点不能同时位于DOM树的两个位置

```html
<div id="box2">
    <p id="para1">我box2要被移动了</p>
</div>
<div id="box3">
    <p id="para2">我box3是原来的</p>
    <p id="para2">我box3是原来的</p>
    <p id="para2">我box3是原来的</p>
    <p id="para2">我box3是原来的</p>
</div>
<script>
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var para1 = document.getElementById('para1')
    // 记得是数组
    var para2 = box3.getElementsByTagName('p');
    // 被移动了
    // box3.appendChild(para1);
    box3.insertBefore(para1, para2[0]);
    // 删除节点
    box3.removeChild(para2[1]);
</script>
```

##### 删除节点

​	removeChild()方法从DOM中删除一个子节点 

​		父节点.removeChild(要删除的子节点);

​	子节点不能主动删除自己，必须由父节点删除它

##### 克隆节点

​	cloneNode()方法可以克隆节点，克隆出的节点是“孤儿节点”

​		var 孤儿节点 = 老节点.cloneNode();

​		var 孤儿节点 = 老节点.cloneNode(**true**);

​			参数是一个布尔值，表示是否深度克隆：true，则该节点的所有后代节点也会被克隆，如果fasle，则克隆该节点本身

```html
<div id="box4">
    <ul>
        <li>牛奶</li>
        <li>咖啡</li>
        <li>可乐</li>
    </ul>
</div>
<div id="box5"></div>
<script>
    var box4 =  document.getElementById('box4');
    var box5 =  document.getElementById('box5');
    var theUL = box4.getElementsByTagName('ul')[0];
    //克隆节点
    var new_ul = theUL.cloneNode();
    //深度克隆节点
    var new_ul = theUL.cloneNode(true);
    //上树
    box5.appendChild(new_ul);
</script>
```





#### 3.2.6、拓展-自定义属性data★★★

​	data-*实际上就是data-前缀加上自定义的属性名，使用这样的结构可以进行数据存放。

​	使用data-*可以解决自定义属性混乱无管理的现状。

​	原生js中自定义属性

1、设置的两种方式

​    第一种是可以直接在HTML标签上面书写。

​    第二种是通过js的dataset属性来设置。

2、js读取自定义属性

​    读取的时候通过dataset属性，使用“.”来获取自定义属性，需要去掉data-前缀，连字符需要转化为驼峰命名

3、css读取自定义属性

```css
h2[data-birth-date = "20201130"]{
  color: red;
}
```

```html
<!-- 1、自定义属性data-weather，值为rain，多单词用 - 链接 -->
<div data-weather="rain">今天下雨了</div>
<div data-birth-date="20201130">今天下雨了</div>
<!-- 设置了data-weater的自定义属性，值为rain，HTML5中元素都会有一个dataset的属性，这是DOMStringMap类型的键值对集合 -->
<!-- 使用css读取这个属性 -->
<h2>今天下雨啦</h2>
<script>
    var h2 = document.querySelector('h2');
    h2.dataset.weather = "rain";
    // 多属性需要用驼峰命名法
    h2.dataset.birthDate = "20201130";
    console.log(h2.dataset.weather);
    console.log(h2.dataset.birthDate);
</script>
```





#### 3.2.7、事件监听

​	DOM允许我们书写JS代码以让HTML元素对事件作出反应

​	什么是“事件”：**用户与网页的交互动作**

​		·当用户点击元素时

​		·当鼠标移动到元素上时

​		·当文本框内容被改变时

​		·当键盘在文本框中被按下时

​		·当网页已加载完毕时

​		·....

​	监听：计算机随时能够发现这个事件发生了，从而执行程序员预先编写的一些程序

​	设置事件监听的方法主要有**onXXXX**和**addEventListener()**

```js
oBox.onclick = function(){//点击盒子时，将执行这里的语句}
```

##### 	常见的鼠标事件监听

| 方法名       | 作用                                                         |
| ------------ | ------------------------------------------------------------ |
| ondblclick   | 当鼠标双击某个对象                                           |
| onmousedown  | 当某个鼠标按键在某个对象上被按下                             |
| onmouseup    | 当某个鼠标按键在某个对象上被松开                             |
| onmousemove  | 当某个鼠标按键在某个对象上被移动                             |
| onmouseenter | 当鼠标进入某个对象(相似实际onmouseover带冒泡)                |
| onmouseleave | 当鼠标离开某个对象(相似实际onmouseout带冒泡)                 |
| onmousewheel | 当鼠标滚动某个对象（e.deltaY属性表示滚动方向，向下返回正，向上返回负） |

##### 	常见的键盘事件监听

| 方法名     | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| onkeyperss | 当某个键盘的键被按下（系统按钮如箭头键和功能无法得到识别）   |
| onkeydown  | 当某个键盘的键被按下（系统按钮可以识别，优先于onkeypress发生） |
| onkeyup    | 当某个键盘的键被松开                                         |
| keyCode    | 返回某个事件触发的键的值                                     |

###### e.charCode和e.keyCode属性

​	e.charCode属性通常用于**onkeypress**事件中，表示用户输入的字符的“字符码”

​		字符码：数字0~9：48~57 大写字母A~Z：65~90 小写字母a~z：97~122

​	e.keyCode属性通常用于**onkeydown**事件和**onkeyup**中，表示用户按下的按键的“键码”

​		键码：数字0~9：48~57 字母不分大小写a~z：65~90 四个方向键：←↑→↓37、38、39、40 回车键(Enter):13 空格键：32

##### 常见的表单事件监听

| 方法名   | 作用                                    |
| -------- | --------------------------------------- |
| onchange | 当用户改变域的内容(value获得文本域的值) |
| onfocus  | 当某元素获得焦点（比如tab键或鼠标点击） |
| onblur   | 当某元素失去焦点                        |
| onsubmit | 当表单被提交                            |
| onreset  | 当表单被重置                            |

##### 常见的页面事件监听

| 方法名   | 作用                   |
| -------- | ---------------------- |
| onload   | 当页面或图像被加载完成 |
| onunload | 当用户退出页面         |

```html
<div id="box6" style="width: 200px;height: 200px;border: 1px solid #000;"></div>
<input type="text" id="nameField">
<form id="myform">
    <p>姓名：
        <input type="text" name="nameField">
    </p>
    <p>年龄：
        <input type="text" name="ageField">
    </p>
    <p>
        <input type="submit" value="提交" >
        <input type="reset" value="重置" >
    </p>  
</form>
<script>
    var oBox6 = document.getElementById('box6');
    // 给盒子添加点击监听事件
    oBox6.onclick = function(){
        console.log('你好，你点击了我');
    };
    oBox6.ondblclick = function(){
        console.log('你好，你双击了我');
    };
    oBox6.onmousedown = function(){
        console.log('你好，你按下了我');
    };
    oBox6.onmouseup = function(){
        console.log('你好，你松开了我');
    };
    oBox6.onmouseenter = function(){
        console.log('你好，你进入了我');
    };
    oBox6.onmouseleave = function(){
        console.log('你好，你离开了我');
    };
    oBox6.onmousemove = function(){
        console.log('你好，你移动了');
    };
    // 添加键盘监听事件
    var nameField = document.getElementById('nameField');
    // 系统按钮如箭头键和功能无法得到识别
    nameField.onkeypress = function(){
        console.log('按下键盘:系统按钮如箭头键和功能无法得到识别')
    };
    nameField.onkeydown = function(){
        console.log('按下键盘:我全都识别')
    };
    nameField.onkeyup = function(){
        console.log('松开键盘')
    };
    // 添加表单监听事件
    var myform = document.getElementById('myform');
    var NameField = myform.nameField;
    var ageField = myform.ageField;
    NameField.onchange = function(){
        console.log('你已修改完毕');
    };
    NameField.oninput = function(){
        console.log('你正在修改');
    };
    NameField.onfocus = function(){
        console.log('你得到我的关注了');
    };
    NameField.onblur = function(){
        console.log('你失去我的关注了');
    };
    // 此时使用的对象是父元素，因为此时的动作应用对象是父元素
    myform.onsubmit = function(){
        alert('你正在尝试提交数据');
    };
    myform.onreset = function(){
        alert('你正在尝试重置数据');
    };
</script>
<!-- 补充 -->
<div class="parent" style="width: 200px;height: 200px;border: 1px solid #000;">
    <div class="child" style="width: 100px;height: 100px; background-color: #f00;">child</div>
</div>
<script>
var parentEle = document.querySelector(".parent")
var childEle = document.querySelector(".child")
    
parentEle.onmouseout = function (e) {
console.log("parent的onmouseout事件被触发了", e.target)
}
</script>
```



#### 3.2.8、DOM事件传播★★★

​	研究：当盒子嵌套时事件监听在盒子内部的执行顺序

##### 	传播

​	**先从外到内**（捕获阶段capturing phase），然后**再从内到外**（冒泡阶段Bubbling phase）

​		DOM0级事件监听（单一）：只能监听冒泡阶段 oBox.onclick = function (){};

​		DOM2级事件监听（多级）： oBox.addEvenListener('click',funciton(){//这是事件处理函数},true);

​				  true:监听捕获阶段 fasle:监听冒泡阶段

```html
<style>
    .parent {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    }

    .child {
    width: 100px;
    height: 100px;
    background-color: #f00;
    }
</style>
<body>
	<div class="parent">
	<div class="child">child</div>
</div>
<script>
var parentEle = document.querySelector(".parent")
var childEle = document.querySelector(".child")

parentEle.onmouseout = function (e) {
console.log("parent的onmouseout事件被触发了", e.target)
}
</script>
</body>
```



##### 	注意事项

​		1、最内部元素不再区分捕获和冒泡阶段，会先执行写在前面的监听，然后执行后写的监听

​		2、如果给元素设置相同的两个或多个同名事件，**则DOM0级写法后面写的会覆盖先写的；而DOM2级会按顺序执行**

```html
<div id="box7" style="width: 202px;height: 202px;border: 1px solid #000;padding: 50px; background-color: red;">
    <div id="box8" style="width: 102px;height: 102px;border: 1px solid #000;padding: 50px; background-color: blue;">
        <div id="box9" style="width: 102px;height: 102px;border: 1px solid #000; background-color: #333;"></div>
    </div>
</div>
<script>
    var box7 = document.getElementById('box7');
    var box8 = document.getElementById('box8');
    var box9 = document.getElementById('box9');
    // onXXX写法只能监听冒泡阶段
    box7.onclick = function(){
        console.log('我是box7');
    };
    // 被后面的监听事件函数覆盖了，所以无法执行，在box8的冒泡阶段会执行alert('我是B')
    box8.onclick = function(){
        console.log('我是box8');
    };
    // 冒泡阶段的事件监听按照顺序执行
    box9.onclick = function(){
        console.log('我是box9');
    };
    // DOM2级事件监听
    // 监听捕获阶段
    box7.addEventListener('click',function(){
        console.log('我是box7捕获阶段');
    },true);
    box8.addEventListener('click',function(){
        console.log('我是box8捕获阶段');
    },true);
    box9.addEventListener('click',function(){
        console.log('我是box9捕获阶段');
    },true);
    // 监听冒泡阶段
    box7.addEventListener('click',function(){
        console.log('我是box7冒泡阶段');
    },false);
    box8.addEventListener('click',function(){
        console.log('我是box8冒泡阶段');
    },false);
    box9.addEventListener('click',function(){
         console.log('我是box9冒泡阶段');
    },false);21
  
    // 注意事项2
    // 覆盖,不执行
    box8.onclick = function(){
        alert('我是A');
    };
    box8.onclick = function(e){
        // e.stopPropagation()
        alert('我是box8');
    };
    // 独立的
    box8.addEventListener('click',function(){
        alert('我是C');
    },false);
    box8.addEventListener('click',function(){
        alert('我是D');
    },false);
</script>
```



#### 3.2.9、事件对象

​	事件处理函数提供一个形式参数（单词event或字母e），它是一个对象，封装了本次事件的细节

```js
oBox.onmousemove = funciton(e){// 对象e就是本次事件的“事件对象”};
```

##### 	鼠标位置

|  属性   | 作用                                          |
| :-----: | --------------------------------------------- |
| clientX | 鼠标指针相对于《浏览器》的水平坐标,如margin值 |
| clientY | 鼠标指针相对于《浏览器》的垂直坐标,如margin值 |
|  pageX  | 鼠标指针相对于《整张网页》的水平坐标          |
|  pageY  | 鼠标指针相对于《整张网页》的垂直坐标          |
| offsetX | 鼠标指针相对于《事件源元素》的水平坐标        |
| offsetY | 鼠标指针相对于《事件源元素》的垂直坐标        |

```html
<!-- 鼠标位置 -->
<div id="info" style="font-size: 28px;"></div>
<div id="box10" style="width: 200px;height: 200px;background-color: red;margin: 100px;padding: 50px;">
  <p style="width: 100px;height: 100px;background-color: blue;color: white;">
    盒子内部是老大左上角是0,0
  </p>
</div>
<script>
  var oBox10 = document.getElementById('box10');
  var oInfo = document.getElementById('info');
  oBox10.onmousemove = function(e){
      oInfo.innerHTML = 'offsetX/Y：' + e.offsetX + ',' + e.offsetY + '<br>' 
                      + 'clientX/Y：' + e.clientX + ',' + e.clientY + '<br>'
                      + 'pageX/Y：' + e.pageX + ',' + e.pageY;
  };
</script>
```



###### e.charCode和e.keyCode属性

​	e.charCode属性通常用于onkeypress事件中，表示用户输入的字符的“字符码”

​	    字符码：数字0~9：48~57 大写字母A~Z：65~90 小写字母a~z：97~122

​	e.keyCode属性通常用于onkeydown事件和onkeyup中，表示用户按下的按键的“键码”

```
  键码：数字0~9：48~57 字母不分大小写a~z：65~90 四个方向键：←↑→↓37、38、39、40 回车键(Enter):13 空格键：32
```

```html
<!--  e.charCode和e.keyCode属性-->
<h1 id="h1"></h1>
<input type="text"  id="text" placeholder="请输入任意字符">
<h1 id="h11"></h1>
<input type="text"  id="text1" placeholder="请输入任意字符">
        
<script>
  var text = document.getElementById('text');
  var h1 = document.getElementById('h1')
  var text1 = document.getElementById('text1');
  var h11 = document.getElementById('h11')
  // 当前键盘按键的
  text.onkeypress =  function(e){ 
      h1.innerText = '你输入的字符的字符码是' + e.charCode;
  };
  text1.onkeydown =  function(e){ 
      h11.innerText = '你按下的按键的键码是' + e.keyCode;
  };
</script>
```

```html
<!-- 按方向键可以控制页面上的盒子移动 -->
<div id="moveBox" style="width: 100px;height: 100px;top: 200px;left: 300px;background-color: orange;position: relative;"></div>
<script>
    var oMoveBox = document.getElementById('moveBox');
    var t = 200,l = 200;
    // 监听document对象的键盘按下事件监听，表示当用户在整个网页上按下按键的时候
    document.onkeydown = function(e){
        switch(e.keyCode){
            case 37:
            l = l - 20;
            // oMoveBox.style.left = t - 20;
            break;
            case 38:
            t = t - 20;
            break;
            case 39: 
            l = l + 20;
            break;
            case 40: 
            t = t + 20;
            break;
        }
        //更改样式
        oMoveBox.style.left = l + 'px';
        oMoveBox.style.top = t + 'px';
    };
</script>
```



###### e.preventDefault()方法

​	用来阻止事件产生的“默认动作”，一些特殊的业务需求，需要阻止事件的“默认动作” 例如a标签的链接跳转，表单的提交

```html
<!-- 用来阻止事件产生的“默认动作” e.preventDefault()方法
制作一个文本框，只能让用户在其中输入小字母和数字，其他字符无法输入
-->
<input type="text"  id="limit" placeholder="只能输入小写字母及数字"> 
<script>
    var limit = document.getElementById('limit');
    limit.onkeypress = function(e){
        console.log(e.charCode);
        if(!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122) ){
            // 阻止浏览器的默认行为
            e.preventDefault();
        }
    }; 
</script>
```

```html
<!-- 制作鼠标滚轮事件：当鼠标在盒子中向下滚动时，数字加1，反之减1 -->
<div id="mouseBox" style="width: 200px;height: 200px;background-color: #abcdef;">鼠标在我里面滚动</div>
<h2 id="h2">0</h2>
<script>
    var oMouseBox = document.getElementById('mouseBox');
    var oH2 = document.getElementById('h2');
    // 全局变量就是H2中显示的数字
    var n = 0;
    // 添加鼠标滚轮事件监听
    oMouseBox.onmousewheel = function(e){
        // 阻止默认事件：当用户在盒子里面去滚动鼠标滚轮的时候，此时就不会引发页面滚动条的滚动
        e.preventDefault();
        if(e.deltaY > 0){
            n++;
        }else{
            n--;
        }
        oH2.innerText = n;
    };
</script>
```



###### e.stopPropagation()方法

​	用来里阻止事件继续传播，在一些场合，非常有必要切断事件继续传播，否则会造成页面特效显示出BUG

```html
<!-- e.stopPropagation()方法 -->
<div id="btnBox" style="width: 200px;height: 200px;background-color: #abcdef;" >
    <button id="btn">按钮</button>
</div>
<script>
    var oBtnBox = document.getElementById('btnBox');
    var oBtn = document.getElementById('btn');
    oBtnBox.onclick = function(){
        console.log("我是盒子");
    };
    oBtn.onclick = function(e){
        // 阻止事件的冒泡传播
        e.stopPropagation();
        console.log("我是按钮");
    };
    oBtnBox.addEventListener('click',function(e){
        // 阻止事件的捕获传播
        e.stopPropagation();
        console.log("我是盒子");
    },true);
    oBtn.addEventListener('click',function(e){
        console.log("我是按钮");
    },true);
</script>
```

```html
<!-- 小案例：制作一个弹出层：点击按钮显示弹出层，点击网页任意地方，弹出层关闭 -->
<button id="tBtn">按我弹出弹出层</button>
<div id="modal" style="display: none;width: 400px;height: 140px;background-color: #abcdef;
position: relative;top: 50%;left: 50%;margin-top: -70px;margin-left: -200px;"></div>
<script>
    var oModal = document.getElementById('modal');
    var oTBtn = document.getElementById('tBtn');
    // 点击按钮弹出弹出层
    oTBtn.onclick = function(e){
        // 点击按钮后，事件会冒泡到document，所以弹出层瞬间显示又关闭
        // 阻止事件传播到document
        e.stopPropagation();
        oModal.style.display = 'block';  
    };
    // 点击页面任意部分关闭弹出层
    document.onclick = function(){
        oModal.style.display = 'none';  
    };
    oModal.onclick = function(e){
        // 阻止事件传播到document
        e.stopPropagation();
    };
</script>
```



#### 3.2.10、事件委托

##### 	批量添加事件监听

​		页面上有一个无序列表<ul>,它内部共有20个<li>元素，请批量给它们添加点击事件监听，

​	实现效果：点击哪个<li>元素，哪个<li>元素就变红

```html
<ul id ="uList">
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
    <li>列表项5</li>
    <li>列表项6</li>
</ul>
<script>
    var uList = document.getElementById('uList');
    var lis = uList.getElementsByTagName('li');
    // 书写循环语句，批量给元素添加监听
    for(var i = 0; i < lis.length; i++){
        lis[i].onclick = function(){
            // 在这个函数中，this表示点击的这个元素，this涉及函数上下文的相关知识
            this.style.color = 'red';
        };
    }
</script>
```

​	批量添加事件监听的性能问题：每一个事件监听注册都会消耗一定的系统内存，而批量添加事件会导致监听数量太多，内存消耗会非常大

​		实际上，每个<li>的事件处理函数都是不同的函数，这些函数本身也会占用内存



##### 	新增元素动态绑定事件

```js
e.target.getAttribute('data-tag')
e.target.classList.contains('cur')
e.target.tagName.toLowerCase() == 'li'
```

​		题目：页面上有一个无序列表<ul>,它内部没有<li>元素，请制作一个按钮，点击这个按钮就能增加一个<li>元素。并且要求每个增加的<li>元素

​			也要有点击事件监听，实现效果点击哪个<li>元素，哪个<li>元素就变红

```html
 <!-- 新增元素动态绑定事件 -->
<button id="addLiBtn">按我添加新的列表项</button>
<ul id ="noList"></ul>
<script>
    var noList = document.getElementById('noList');
    var addLiBtn = document.getElementById('addLiBtn');
    //按钮的点击事件
    addLiBtn.onclick = function(){
        //创建一个新的li列表项，它是孤儿节点
        var newLi = document.createElement('li');
        newLi.innerText = '我是孤儿列表项';
        //上树
        noList.appendChild(newLi);
        //给新创建的这个li节点添加onclick事件监听
        newLi.onclick = function(){
            this.style.color = 'red';
        };
    };
</script>
```

​		动态绑定事件的问题：新增元素必须分别添加事件监听，不能自动获得事件监听。大量事件监听、事件处理函数都会产生大量消耗内存



##### 利用事件的冒泡机制

​	将后代元素事件委托给祖先元素 

​	监听ul的onclick事件，不管点击任何一个<li>元素，事件都会**通过事件冒泡**传给祖先元素

​	事件委托通常需要结合使用e.target属性

​		**target**：触发此事件的最早元素，即“事件源元素”

​		**currentTarget**：事件处理程序附加到的元素

```html
<!-- 事件委托 -->
<button id="addLi">按我添加新的列表项</button>
<ul id ="tList">
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li><span>最内层元素不能再有额外的内层元素了，</span>列表项1</li>
    <li><span>最内层元素不能再有额外的内层元素了，</span>列表项2</li>
    <li><span>最内层元素不能再有额外的内层元素了，</span>列表项3</li>
</ul>
<script>
    var tList = document.getElementById('tList');
    var addLi = document.getElementById('addLi');
    // onmouseenter不冒泡，onmouseover冒泡。
    // 不能使用不冒泡的事件给祖先元素
    // tList.onmouseenter = function(e){
    tList.onclick = function(e){
        // e.target表示用户真正点击的那个元素
        e.target.style.color = 'red';
    };
    addLi.onclick = function(){
        //创建新的li元素
        var new_li = document.createElement('li');
        //添加内容
        new_li.innerText = '我是新增的'
        //上树
        tList.appendChild(new_li);
    };
</script>
```

##### 事件委托的使用场景★

​	1、当有大量类似元素需要批量添加事件监听时，使用事件委托可以减少内存开销

​	2、当有动态元素节点上树时，使用事件委托可以让新上树的元素具有事件监听

注意事项：onmouseenter和onmouseover都表示“鼠标进入”，她们有什么区别呢？

​	答：onmouseenter不冒泡，onmouseover冒泡

​	1、不能使用不冒泡的事件给祖先元素

​	2、最内层元素不能再有额外的内层元素了



#### 3.2.11、定时器和延时器

##### 定时器

​	setInterval()函数可以重复调用一个函数，在每次调用之间具有固定的时间间隔

```js
setInterVal( function(){// 这个函数将自动被以固定时间间隔实现调用 } ,2000);
```

​	第一个参数是函数，第二个参数是间隔时间，单位是毫秒ms

​	可以接收第3、4...个参数，它们将按顺序传入第一个函数作为它的实参

```js
setInterval(function(a,b){console.log(a + b);},5000,88,55);
```

具名函数也可以传入：看案例2

```js
var a = 0;
function fun(){
    console.log(++a);
}
setInterval(fun,6000);
```

清除定时器：clearInterval()函数可以清除一个定时器，看案例3

```js
//设置定时器，并且用timer变量接收这个定时器
var timer = setInterval(function () {
    //语句体      
}, 2000);
//点击按钮时，清除定时器
oBtn.onclick = function () {
    clearInterval(timer);//传入定时器变量
}
```



```js
<!-- 秒表Demo -->
<h2 id="sconed">0</h2>
<button id="begin">开始</button>
<button id="pause">暂停</button>
<script>
    var count = 0,timer;
    var sconed = document.getElementById('sconed');
    var begin = document.getElementById('begin');
    var pause = document.getElementById('pause');
  
    begin.onclick = function () {
        // 当用户一点击就会创建一下计时器实例，当点多了的时候就会创建多个，同时工作。
        // 为了防止定时器叠加，我们应该在设置定时器之前先清除定时器
        clearInterval(timer);
        timer = setInterval(function () {
            sconed.innerText = ++count;
        },1000);
    }
    pause.onclick = function () {
        clearInterval(timer);
    }
```



##### 延时器

​	setTimeout()函数可以设置一个延时器，当指定时间到了之后，会执行函数一次，不再重复执行。

```js
setTimeout( function(){//这个函数将会在固定时间后只调用一次} ,2000);
```



```html
<!-- 延时器 -->
<button id="btn1">2秒后弹出延时器</button>
<button id="btn2">取消弹出</button>
<script>
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var timers;
    btn1.onclick = function () {
        timers = setTimeout(function () {
            alert('延时器');
        },2000);
    };
    btn2.onclick = function () {
        clearTimeout(timers);
    };
    
</script>
```

清除延时器：clearTimeout()函数可以清除一个延时器



初步认识异步语句：setInterval()函数和setTimeout()函数是两个异步语句。

异步(asynchronous):不会阻塞CPU继续执行其他语句，当异步完成时，会执行“回调函数”(callback)。

```html
<!-- 异步小案例 -->
<script>
    console.log('异步A');
    setTimeout(function () {
        console.log('异步B');
    },2000);
    console.log('异步C');
    // ACB
</script>
```

##### 使用定时器实现动画

​	利用“视觉暂留”原理

1、不方便根据动画总时间计算步长

2、运动方向要设置正负

3、多种运动进行叠加较为困难（比如一个方形一边移动一边变为圆形）

```html
<div id="JSAnimation"
     style="margin-top: 200px;width: 100px;height: 100px;background-color:orange;left: 10px;position: relative;"></div>
<button id ="btnAnimation">开始运动</button>
<script>
    var JSAnimation = document.getElementById('JSAnimation');
    var btnAnimation = document.getElementById('btnAnimation');
    var left = 10;
    btnAnimation.onclick = function(){
      var timer = setInterval(function () {
            left += 2;
            JSAnimation.style.left = left + 'px';
            if (left >= 200 ) {
                clearInterval(timer);
            }
        }, 20);
    };
</script>
```



#### 3.2.12、JS和CSS3结合实现动画：规避了定时器制作动画的缺点

##### 函数节流

一个函数执行一次后，只有大于设定的执行周期后才允许执行第二次，只需要借助setTimeout()延时器

##### 节流锁公式

```js
var lock = true;
function 需要节流的函数(){
  //如果锁是关闭状态，则不执行
  if(!lock) return;
  //函数核心语句
  {...}
  //关锁
  lock = false;
  //指定毫秒数后将锁打开
  setTimeout(function(){
      lock = true;
  },2000);
}
```

```html
<div id="JSAnimation1" style="margin-top:200px;width: 100px;height: 100px;background-color:orange;left: 10px;position: relative;"></div>
<button id ="btnAnimation1">开始运动</button>
<script>
  var JSAnimation1 = document.getElementById('JSAnimation1');
  var btnAnimation1 = document.getElementById('btnAnimation1');
  //标示量，指示当前盒子在左边还是右边
  var pos = 1;//0：右边，1：左边
  var lock = true;
  //事件监听
  btnAnimation1.onclick = function(){
    if(!lock) return;
    //添加过渡
    JSAnimation1.style.transition = 'left 2s linear 0s';
    if(pos == 1){
    //瞬间移动，但是由于有过渡，所以是动画
      JSAnimation1.style.left = '1100px';
      pos = 2;
    }else{
      JSAnimation1.style.left = '100px';
      pos = 1;
     }
    lock = false;
    setTimeout(function () {
      lock = true;
    }, 2000);
  };
</script>
```

##### 	动画效果开发1-无缝连续滚动特效

```html
<style>
/* 动画效果开发1-无缝连续滚动特效 */
#lunboBox{
    width: 1000px;
    height: 130px;
    border: 1px solid #000;
    margin: 50px auto;
    overflow: hidden;
}
#lunboBox ul{
    width: 5000px;
    list-style: none;
    position: relative;
    left: 0;
}
#lunboBox ul li{
    float: left;
    width: 200px;
    height: 130px;
    margin-right: 10px;
}
</style>

<div id="lunboBox">
  <ul id ="listCopy">
    <li><img src="images/number/0.png"></li>
    <li><img src="images/number/1.png"></li>
    <li><img src="images/number/2.png"></li>
    <li><img src="images/number/3.png"></li>
    <li><img src="images/number/4.png"></li>
    <li><img src="images/number/5.png"></li>
  </ul>
</div>
<script>
    var lunboBox = document.getElementById('lunboBox');
    var listCopy = document.getElementById('listCopy');
    listCopy.innerHTML += listCopy.innerHTML;
    var left2 = 0,timerss;
    //如果注释掉这行代码，即实现滚动图鼠标进入再出来实现滚动
    fun();
    function fun() {
        //设表（定时器）先关，防止动画积累
        clearInterval(timerss);
        timerss = setInterval(function () {
            left2 -= 4;
            listCopy.style.left = left2 + 'px';
            if(left2 <= -1260){
                left2 = 0;
            }
        }, 20);
    }
    lunboBox.onmouseenter = function () {
        clearInterval(timerss);
    };
    lunboBox.onmouseleave = function () {
        fun();
    };
</script>
```

##### 	动画效果开发2-跑马灯轮播图特效

```html
<style>
#carousel{
    width: 650px;
    height: 360px;
    border: 1px solid #000;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
}
#carousel ul {
    list-style: none;
    width: 5000px;
    position: relative;
    left: 0;
    transition: left 0.5s linear 0s;
}
#carousel ul li{
    float: left;
}
#carousel #leftbtn{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    left: 20px;
    top: 50%;
    margin-top: -25px;
}
#carousel #rightbtn{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    right: 20px;
    top: 50%;
    margin-top: -25px;
}
</style>
<div id="carousel">
  <ul id="listImg">
    <li><img src="images/beijing/0.jpg"></li>
    <li><img src="images/beijing/1.jpg"></li>
    <li><img src="images/beijing/2.jpg"></li>
    <li><img src="images/beijing/3.jpg"></li>
    <li><img src="images/beijing/4.jpg"></li>
  </ul>
  <a href="javascrpt:;" id="leftbtn"></a>
  <a href="javascrpt:;" id="rightbtn"></a>
</div>
<script>
    var carousel = document.getElementById('carousel');
    var rightbtn = document.getElementById('rightbtn');
    var leftbtn = document.getElementById('leftbtn');
    var listImg = document.getElementById('listImg');
    //克隆第一张图片
    var cloneImg =  listImg.firstElementChild.cloneNode(true);
    //上树
    listImg.appendChild(cloneImg);
    
    //节流锁
    var locks = true;
    //当前ul显示到第几张了
    var idx = 0;
    //监听
    rightbtn.onclick = function () {
        //判断锁的状态
        if(!locks) return;
        //取消过渡，最后一张图片需要瞬间跳转
        listImg.style.transition = 'left 0.5s linear 0s';
        idx++;
        if(idx > 4){
            //设置延时器，延时器的功能就是将ul瞬间拉回0的位置，让最后一张之前到最后一张过渡动画完完成之后，延时后立即瞬间切换为第一张的位置。
            setTimeout(function () {
                //取消掉过渡，因为要瞬间移动，不是逆顺序弹回
                listImg.style.transition = 'none';
                listImg.style.left = 0;
                idx = 0;
            }, 500);
        }
        listImg.style.left = -idx*650 + 'px';
        locks = false;
        //指定毫秒数后将锁打开
        setTimeout(function(){
            locks = true;
        },500);
    };
    leftbtn.onclick = function () {
        //判断锁的状态
        if(!locks) return;
        if (idx == 0) {
            listImg.style.transition = 'none';
            listImg.style.left = -5 * 650 + 'px';
        
            //设置一个延时器，这个延时器的延时时间可以是0毫秒，可以让《过渡先是瞬间
            setTimeout(function () {
                listImg.style.transition = 'left 0.5s linear 0s';
                idx = 4;
                listImg.style.left = -idx*650  + 'px';
            }, 0);
        }else{
            idx--;
            listImg.style.left = -idx*650  + 'px';
        }   
        locks = false;
        //指定毫秒数后将锁打开
        setTimeout(function(){
            locks = true;
        },500);
    };
</script>
```

##### 动画效果开发3-呼吸轮播图特效

```html
<style>
    #carousel1{
    width: 650px;
    height: 360px;
    border: 1px solid #000;
    margin: 50px auto;
    position: relative;
   
}
#carousel1 ul {
    list-style: none;
}
#carousel1 ul li{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease 0s;
}
#carousel1 ul li:first-child{
    opacity: 1;
}
#carousel1 #leftbtn1{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    left: 20px;
    top: 50%;
    margin-top: -25px;
}
#carousel1 #rightbtn1{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    right: 20px;
    top: 50%;
    margin-top: -25px;
}
</style>
<div id="carousel1">
    <ul id="listImg1">
        <li><img src="images/beijing/0.jpg"></li
        <li><img src="images/beijing/1.jpg"></li
        <li><img src="images/beijing/2.jpg"></li
        <li><img src="images/beijing/3.jpg"></li
        <li><img src="images/beijing/4.jpg"></li
    </ul>
    <a href="javascrpt:;" id="leftbtn1"></a>
    <a href="javascrpt:;" id="rightbtn1"></a>
</div>
<script>
    var carousel1 = document.getElementById('carousel1')
    var rightbtn1 = document.getElementById('rightbtn1')
    var leftbtn1 = document.getElementById('leftbtn1')
    var listImg1 = document.getElementById('listImg1')
    var listSet = listImg1.getElementsByTagName('li')
    var idx1 = 0,lockss = true;
    rightbtn1.onclick = function() {
        if(!lockss)
        {
            alert('主人慢点！');
            return;
        }
        listSet[idx1].style.opacity = 0;
        idx1++;
        if(idx1 > 4){
            idx1 = 0;
        }
        listSet[idx1].style.opacity = 1;
        lockss = false;
        setTimeout(function() {
            lockss = true
        }, 500);
    };
    leftbtn1.onclick = function() {
        if(!lockss)
        {
            alert('主人慢点！');
            return;
        }
        listSet[idx1].style.opacity = 0;
        idx1--;
        if(idx1 < 0){
            idx1 = 4;
        }
        listSet[idx1].style.opacity = 1;
        lockss = false;
        setTimeout(function() {
            lockss = true
        }, 500);
    };
</script>
```



##### 一些问题

1、访问元素节点有哪些方法？
2、节点的关系有哪些？
3、常见节点操作有哪些？
4、节点的创建、移除和克隆要如何实现？
5、事件捕捉和冒泡是什么？应该如何设置？
6、什么是事件委托？什么时候要用事件委托？
7、使用定时器和CSS3的过渡实现动画







### 3.3、BOM(Browser Object Model)

​	浏览器对象模型，是JS与浏览器窗口交互的接口

​		一些与浏览器改变尺寸、滚动条滚动相关的特效，需要使用到

#### 3.3.1、window对象

是当前JS脚本运行所处的窗口，而这个窗口中包含DOM结构，window.document属性就是document对象

​	同一个窗口的标签页之间不会共享一个window对象

##### 全局变量会成为window对象的属性

```js
var a = 10;
console.log(window.a == a);//true
// 全局变量会成为window对象的属性
var ming = '3333333333333333333';
console.log(window.hasOwnProperty('ming')); //true
console.log(window.ming); //3333333333333333333
```

多个JS文件之间是共享全局作用域，即JS文件没有作用域隔离功能

```HTML
<!-- JS文件之间共享全局作用域 -->
<script src="js/BOM.js"></script>
<script src="js/BOM1.js"></script>
```

```js
// BOM.js
var sss = 1;
// BOM1.js
sss++;
console.log('跨文件答案：' + sss); // 1
```



##### 内置函数普遍是window的方法

​	如setInterval()、alert()等内置函数，普遍是window的方法

```JS
//内置函数普遍是window的方法
console.log(window.hasOwnProperty('setInterval')); //true
console.log(window.alert == alert);//true
console.log(window.setInterval == setInterval);//true
window.setInterval(function () {
    window.alert("你好");
},1000000);
```

##### 窗口尺寸相关属性

| 属性                                 | 作用                                                     |
| ------------------------------------ | -------------------------------------------------------- |
| innerHeight                          | 浏览器窗口的内容区域的高度，包含水平滚动条（如果有的话） |
| innerWidth                           | 浏览器窗口的内容区域的高度，包含垂直滚动条（如果有的话） |
| document.documentElement.clientWidth | 获得不包含滚动条的窗口宽度                               |
| outerHeight                          | 浏览器窗口的外部高度                                     |
| outerWidth                           | 浏览器窗口的外部宽度                                     |

```JS
// 窗口尺寸相关属性
console.log('窗口内宽（包含滚动条）',window.innerWidth);
console.log('窗口外宽',window.outerWidth);
console.log('窗口内宽（不包含滚动条）',document.documentElement.clientWidth);
```

##### resize事件

​	在窗口大小改变之后，就会触发resize事件，可以使用**window.onresize**或者**window.addEventListener('resize')**来绑定事件处理函数

```JS
// 监听窗口改变尺寸时间
window.onresize = function () {
    var root = document.documentElement;
    console.log('窗口改变尺寸了:',root.clientWidth,root.clientHeight);
}
```

##### 已卷动高度

​	(只读)window.scrollY属性表示在垂直方向已滚动的像素值

​	(非只读)document.documentElement.scrollTop属性也表示窗口卷动高度

```JS
// 公式
var scollTop = window.scrollY || document.documentElement.scrollTop;
```

```JS
//已卷动高度
console.log(window.scrollY);
console.log(document.documentElement.scrollTop);
//改变网页滚动条的位置（做返回顶部）
document.documentElement.scrollTop = 5400;//重新从VScode中打开
```

##### scroll事件

​	在窗口被卷动之后，就会触发scroll事件，可以使用**window.onscroll**或者**window.addEventListener('scroll')**来绑定事件处理函数

```JS
// scroll事件
window.onscroll = function () {
    console.log('窗口卷动了',window.scrollY);
};
```





##### Navigator对象

​	window.navigator属性可以检索navigator对象，它内部含有用户此次活动的浏览器的相关属性和标识

​		appName：浏览器官方名称

​		appVersion：浏览器版本

​		userAgent：浏览器的用户代理（含有内核信息和封装壳信息）

​		platform：用户操作系统

```js
console.log('浏览器官方名称',navigator.appName);
console.log('浏览器版本',navigator.appVersion);
console.log('浏览器的用户代理',navigator.userAgent);
console.log('用户操作系统',navigator.platform);
// Location对象
console.log(location);
```



##### History对象

​	window.history对象提供了操作浏览器会话历史的接口

​	常用操作就是模拟浏览器回退按钮

```JS
history.back();// 等同于点击浏览器的回退按钮
history.go(-1);// 等同于history.back();
```

```html
<button id="returnBtn">点我返回</button>
<script>
    // History对象
    var returnBtn = document.getElementById('returnBtn');
    returnBtn.onclick = function () {
        window.history.back();
    };
</script>
```



##### Location对象

​	window.location标识当前所在网址，可以通过给这个属性赋值命令浏览器进行页面跳转

```JS
window.location = 'http://www.jd.com';
window.location.href = 'http://www.jd.com';
```

```html
<button id ="locationBtn">点我去看百度</button>
<script>
    //Location对象
    var locationBtn = document.getElementById('locationBtn');
    locationBtn.onclick = function () {
        window.location = 'http://www.baidu.com';
    };
</script>
```



###### 重新加载当前页面

​	可以调用location的reload方法以重新加载当前页面，参数true表示强制从服务器强制加载

```html
<button id ="reloadBtn">点我强制刷新网页</button>
<script>
    // 刷新页面
    var reloadBtn = document.getElementById('reloadBtn');
    reloadBtn.onclick = function () {
        window.location.reload(true);
    }
</script>
```

###### GET请求查询参数

​	window.location.search属性即为当前浏览器的GET请求查询参数

```js
// 比如网址https://www.baidu.com/?a=1&b=2
window.location.search // '?a=1&b=2'
```



#### 3.3.2、BOM特效开发

​	制作返回顶部按钮：改变document.documentElement.scrollTop属性，通过定时器逐步改变此值，则将用动画形式返回顶部

```html
<div id="backtotop" style="width: 60px;height: 60px;background-color: rgba(25,125,225,.5);
position: fixed; bottom: 100px;right: 100px;cursor: pointer;color: white;
">返回顶部</div>
<script>
    var backtotop = document.getElementById('backtotop');
    var timer;
    backtotop.onclick = function () {
        clearInterval(timer);
        timer =  setInterval(function () {
            //不断让scrollTop减少
            document.documentElement.scrollTop -= 200;
            if(document.documentElement.scrollTop <= 0){
                clearInterval(timer);
            }
        },20);
    };
</script>
```

​	楼层导航小效果：DOM元素都有offsetTop属性，表示此元素到定位祖先元素的垂直距离
​        定位祖先元素：在祖先中，离自己最近的且拥有定位属性的元素    

```html
<!-- Demo -->
<div id="loucengbox" style="width: 400px;height: 400px;border: 4px solid red;
margin: 60px auto;
">
    <ul>
        <li>
            <p id="texts" style="width: 80px;height: 80px;background-color: orange;"></p>
        </li>
    </ul>
</div>
<script>
    var texts = document.getElementById('texts');
    var loucengbox = document.getElementById('loucengbox');
    //谁有相对定位，就会成为祖先。默认是浏览器
    //所以使用这个属性的时候，所有的祖先元素都不要有定位
    console.log('我与祖先相距：' + texts.offsetTop);
</script>
```

##### 	楼层导航实战

```html
<style>
/* 楼层导航 */
.content-part{
    width: 1000px;
    margin: 30px auto;
    background-color: #ccc;
    font-size: 50px;
}
#floornav{
    position: fixed;
    right: 20px;
    top: 20px;
    width: 100px;
    height: 200px;
    background-color: orange;
}
#floornav ul{
    list-style: none;
}
#floornav ul li{
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 65x;
    cursor: pointer;
}
#floornav ul li.current{
    background-color: #abcdef;
}
</style>
<nav id='floornav'>
    <ul id="floorul">
        <li data-n = "科技" class="current">科技</li>
        <li data-n = "体育">体育</li>
        <li data-n = "新闻">新闻</li>
        <li data-n = "娱乐">娱乐</li>
        <li data-n = "视频">视频</li>
    </ul>
</nav>
<section class="content-part" data-n ="科技" style="height: 867px;">科技栏目</section>
<section class="content-part" data-n ="体育" style="height: 767px;">体育栏目</section>
<section class="content-part" data-n ="新闻" style="height: 667px;">新闻栏目</section>
<section class="content-part" data-n ="娱乐" style="height: 567px;">娱乐栏目</section>
<section class="content-part" data-n ="视频" style="height: 467px;">视频栏目</section>
<script>
    //使用事件委托给li添加监听
    var floorul = document.getElementById('floorul');
    var contetnParts = document.querySelectorAll('.content-part');
    var floorli = document.querySelectorAll('#floorul li');
    floorul.onclick = function (e) {
        if(e.target.tagName.toLowerCase() == 'li'){
            //getAttribute表示得到标签身上的某个属性值
            var n = e.target.getAttribute('data-n');
            //可以用属性选择器(就是[]选择器)来寻找带有相同data-n的content-part
            var contentPart = document.querySelector('.content-part[data-n=' + n +']');
            document.documentElement.scrollTop = contentPart.offsetTop;
        }
    };
    //在页面加载好之后，将所有的content-part盒子的offset值推入数组
    var offsetTopArr = [];
    //遍历contetnParts,将它们的净位置推入数组 
    for (var i = 0; i < contetnParts.length; i++) {
        offsetTopArr.push(contetnParts[i].offsetTop);
    }
    //为了方便最后一项比值
    offsetTopArr.push(Infinity);
    console.log(offsetTopArr );
    
    //当前所在楼层
    var nowfloor = -1;
    //监听窗口的滚动事件
    window.onscroll = function () {
        var scrollTopSize = document.documentElement.scrollTop;
        console.log(scrollTopSize);
        //介于数组哪两项数据之间，就让对应的li变颜色
        //遍历offsetTopArr数组，看看当前的scrollTop值在哪两个楼层之间
        for (var i = 0; i < offsetTopArr.length; i++) {
            console.log(offsetTopArr[i] + ':' + offsetTopArr[i+1]);
            if(scrollTopSize >=offsetTopArr[i] && scrollTopSize < offsetTopArr[i+1]){
                break;
            }
        }
        //如果当前所在楼层不是i，表示换楼层了
        //退出循环的时候，i是几，就表示当前楼层是几
        if(nowfloor != i){
            console.log('当前楼层是：' + i);
            //让全局变量改变为这个楼层号
            nowfloor = i;
            //设置下标有i的项有current
            for (var j = 0; j < floorli.length; j++) {
                if(j == i){
                    floorli[j].className = 'current';
                }else{
                    floorli[j].className = '';
                }
                
            }
        }
    };
</script>
```

##### 【避坑】BOM特效开发

###### 1、页面缩放问题

 ·点击右侧导航项，主体内容没有发生改变

 ·被点击的导航项，背景没有变为紫色，字体颜色没有改为白色

 ·原因有可能是缩小页面导致的

###### 2、高度问题

​	·点击导航项，主题内容没有发生变化，有可能是内容的高度太小了，建议：把内容的高度设置大一些：style = "height: 1500px;"

###### 3、兼容性问题

​	·页面没有缩放，点击导航项，主体内容不会发生变化，原因：有可能是出现了兼容性问题，加上下方代码

```js
 var contentPart = document.querySelector('.content-part[data-n=' + n + ']');
 document.documentElement.scrollTop = contentPart.offsetTop;
 // 加上下方代码
 document.body.scrollTop = contentPart.offsetTop;
 // scrollTop的值修改为下方代码
 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
```

#### 一些问题

1、窗口相关属性有哪些？
2、窗口卷动事件时什么？如何得到卷动值？
3、要回使用Navigator对象、History对象、Location对象常用属性和方法









## 4、《面向对象》

### 	4.1、认识对象

​		object是“键值对”的集合，表示属性和值的《映射关系》

```js
var xiaoming = { name:'小明', age:26,sex:'男', hobbies:['足球','编程'] };
```

​	JS中，大括号表示对象，属性名（键名，key）：key&value对，name和小明产生映射关系

#### 对象的语法

​	K和V之间用冒号分隔，每组K:V之间用逗号分隔，最后一个K:V对后可以不书写逗号

```js
var obj = { k1:v1, k2:v2, k3:v3};
```

属性是否加引号：**如果对象的属性键名不符合JS标识符命名规范，则这个键名必须用引号包裹**

```js
var xiaoming = {
  name: '小明',
  age: 26,
  sex: '男',
  hobbies: ['足球','编程'],
  // 不符合JS命名规范
  'favorite-book': '毛选',
  b: 2
};
```

##### 属性的访问

```js
xiaoming.name; // '小明'
```

如果属性名**不符合JS标识符**命名规范，则必须用**方括号的写法来访问**：

```js
xiaoming['favorite-book']; // '毛选'
```

如果**属性名以变量形式存储，则必须使用方括号形式:**

```js
var key = 'b'; 
// var key = 'age'
console.log(xiaoming.key);// undefined 
console.log(xiaoming[key]);// 2
```

##### 属性的更改

```js
xiaoming.b = 20;
```

##### 属性的创建★

​	如果对象本身没有某个属性值，则用点语法赋值时，这个属性会被创建出来

```js
xiaoming.height = 170;
```

##### 属性的删除★

```js
delete xiaoming.b;
```





#### 对象的方法调用

​		如果对象的某个属性值是函数，则它也被称为对象的“方法”,方法也是函数，只不过方法是对象的“函数属性”，它需要用对象.调用

```js
xiaoming.syHello();
```

##### 对象的遍历

​	和数组类似，需要使用for...in...循环遍历对象的每个键

​	for(var k in obj){}    k: 循环变量，它会一次成文对象的每一个键     obj: 要遍历的对象

```js
var xiaoming = {
  name:'小明',
  age:26,
  sex:'男',
  hobbies:['足球','编程'],
  'favorite-book': '毛选',
  b:2,
  syHello: function () {
      console.log('你好'+ xiaoming.name + xiaoming.sex);
  },
  sleep:function(){
      console.log('开始睡觉zzzzzzzzz');
  }
};
//属性的访问
console.log(xiaoming);
console.log(xiaoming.name);
//方括号的写法来访问
console.log(xiaoming['favorite-book']);
var key = 'b';
console.log(xiaoming.key);
console.log(xiaoming[key]);
//属性的更改
console.log(xiaoming.b = 20);
//属性的创建
console.log(xiaoming.height = 170);
//属性的删除
console.log(delete xiaoming.b);//true
console.log(xiaoming);
//对象的方法（对象的方法）
xiaoming.syHello();
//遍历对象
for (var key in xiaoming) {
    console.log('对象xiaoming属性' + key + '的值是' + xiaoming[key]);
}
```





#### 对象的深浅克隆★

##### 	对象是引用类型值

​			1、不能使用var obj2 = obj1克隆对象；

​			2、使用==或者===进行对象比较时，比较的是它们是否为**内存中的同一个对象**，而不是比较值

```js
var obj1 = {a:1},obj2 ={a:1}; obj3 ={a:10},obj4 = obj3;
console.log(obj1 == obj2);// fasle
console.log(obj1 === obj2);// fasle
console.log({} == {});// fasle
console.log({} === {});// fasle
//对象的引用
console.log(obj3 == obj4);// true
obj3.a ++;
console.log(obj4);// {a: 11}
```



##### 	对象的浅克隆

​		只克隆对象的“表层”,如果对象的某些属性值又是引用类型值，则不一进步克隆它们，只是传递它们的引用（for...in...）

```js
var obj5 = {a:9999,b:999,c:99,d:[99,999,9999]}
var obj6 = {};
for (var key in obj5) {
    // 每遍历一个key属性，就给obj6也添加一个同名的key属性
    // 值和obj5的key属性值相同
    obj6[key] = obj5[key];
}
console.log(obj6);
obj5.a ++;
// d属性是引用类型值，本质上它们共用内存中的数组，并没有分开
obj5.d.push(99999);
console.log(obj6);
console.log(obj6.d == obj5.d); // true
```



##### 	对象的深克隆

​			克隆对象的全貌，不论对象的属性值是否又是引用类型值，都能将它们实现克隆（递归算法）

```js
var obj10 ={a:1,b:2,c:[33,44,{m:55,n:66,p:[77,88]}]};
//对象的深克隆
function deepClone(obj) {
  //判断obj是对象还是数组
  if(Array.isArray(obj)){
    //数组
    var result = [];
    for (var i = 0; i < obj.length; i++) {
        result.push(deepClone(obj[i]));
    }
  }else if(typeof obj == 'object'){
    //对象
    var result = {};
    for (var key in obj) {
        result[key] = deepClone(obj[key]);
    }
  }else{
    //基本类型
    var result = obj; 
  }
  return result;
};
var obj11 = deepClone(obj10);
console.log(obj11);
console.log(obj11.c == obj10.c);
//obj10改变了，obj11从始至终没有变过
obj10.c.push(99);
console.log(obj10);
console.log(obj11);
obj10.c[2].p.push(999);
console.log(obj10);
console.log(obj11);
```

```js
function deepClone(obj = {}){
 if(typeof obj !== 'object' || obj == null){
   return obj  
 } 
 let res;
 if(obj instanceof Array) {
    res = [] 
 } else {
    res = {}
 }
 for(key in obj){
   if(obj.hasOwnProperty(key)){
      res[key] = deepClone(obj[key]) 
   }
 }   
 return res;
}
```



### 4.2、上下文this

​	函数的上下文，可以使用this关键字，与中文中“这”类似，函数中的this具体指代什么必须通过调用函数时的“前言后语”来判断

​		函数的上下由调用方式决定：同一个函数，用不同的形式调用它，则函数上下文不同。

1、对象打点调用函数，函数中的this指代这个打点的对象 

```js
 xiaming.sayHello();// 这个函数的上下文就是xiaming这个对象
```

2、圆括号直接调用函数，函数中的this指代window对象

```JS
var sayHello = xiaming.sayHello;
(this.)sayHello();
```

#### 上下文规则★★★

​	函数的上下文(this关键字)由**调用函数的方式决定**，function是“运行时上下文”策略，**函数如果不调用，则不能确定函数的上下文**

```js
var xiaming = {
    nickname:'小明',
    age : 12,
    sayHello : function(){
        // 这两个this指代什么？答案：不知道，函数没有被调用，调用了才会确定上下文
        console.log('我是' + this.nickname + '，我' + this.age + '岁了');
        console.log('this == xiaming ?' + (this == xiaming)); 
        console.log('this == window ?' + (this == window));
    }
};
// 这条代码会被window对象调用，而对象中的变量名不会
// var nickname = '夏明',age = 19;
// 将函数“提”出来，单独存为变量
var sayHello = xiaming.sayHello;
sayHello();// 我是undefined，我undefined岁了
// this == xiaming ? false
// this == window ? true
```

##### 规则1： 对象打点调用它的方法函数，则函数的上下文是这个打点的对象=> **对象.方法();**

```js
// 规则1题目举例-第1小题 
// 全局函数
function fn(){
    console.log(this.a + this.b);
}
var objA = {a:66,b:33,fn:fn}; 
// 对象.方法();
objA.fn();// 99
fn(); // NaN

// 规则1题目举例-第2小题
var objB = {
    a: 1,
    b: 2,
    fn: function(){
      console.log(this.a + this.b);
    }
};
var objC = {
    a: 3,
    b: 4,
    fn: objB.fn// 指向objB的fn函数
};
// 对象.方法();
// this指向objC
objC.fn();// 7

// 规则1题目举例-第3小题
function outer() {
    var a = 11,b = 22;
    return {
        a: 33,
        b: 44,
        fn: function(){
          console.log(this.a + this.b);
        }
    };
};
// 对象.方法();
// outer()返回一个对象，this指向这个返回的对象
outer().fn();// 77

// 规则1题目举例-第4小题
function fun1(){
    console.log(this.z + this.b);
}
var objD = {
    z: 1,
    b: 2,
    c: [{ z: 3, b: 4, c: fun1 }]
    };
var z = 5;
// 对象.方法();
// this指向objD的C[0]返回的对象
objD.c[0].c();// 7

// 规则1题目举例-第5小题
function fun2(){
    return this.a2 + this.b2;
}
var a2 = 1, b2 = 2, 
objF = {
    a2: 3,
    // 函数();
    b2: fun2(),// 3
    fun2: fun2
};
 // 对象.方法();
var result = objF.fun2();
console.log(result);// 6
```

##### 规则2： 圆括号直接调用函数，则函数的上下文是window对象=> **函数();**

```js
// 规则2题目举例-第1小题
var objE = {
    a1: 1,
    b1: 2, 
    fn: function (){
      console.log(this.a1 + this.b1);
    }
};
var a1 = 30, b1 = 4;
var fn = objE.fn;
// 函数();
fn(); // 34

// 规则2题目举例-第2小题
function fun2(){
    return this.a2 + this.b2;
}
var a2 = 1, b2 = 2,
objF = {
    a2: 3,
    // 函数();
    b2: fun2(),// 3
    fun2: fun2
};
// 对象.方法();
var result = objF.fun2;
console.log(result());// 3
```

##### 规则3： 数组(类数组对象)枚举出函数进行调用，上下文是这个数组(类数组对象) => **数组[下标]（）;**

```js
// 规则3题目举例-第1小题
var arr =['A','B','C',function () {
    console.log(this[0]);
}];
// 数组[下标]();
arr[3]();// A

// 规则3题目举例-第2小题
function fun3() {
    // 数组[下标]();
    console.log(arguments);// 它接收到了调用fun3函数的实参
    arguments[3]();// 然后调用了自己的类数组第三个参数函数的方法
}
fun3('A','B','C',function () {
    console.log(this[1]);// B
});
```

##### 规则4： IIFE中的函数，上下文对象是window对象=>  **(function(){})();**

```js
// 规则4题目举例
var a3 = 1;
var objG = {
    a3: 2,
    // IIFE:(function(){})();window执行了IIFE
    fun4: (function(){
        // this指向window对象
        var a3 = this.a3;
        console.log(this)
        return function () {
            console.log(a3 + this.a3);// this.a3 = 2
        }
    })()
};
// 对象.方法();
objG.fun4();// 1 + 2 = 3
```

##### 规则5： 定时器、延时器调用函数，上下文是window对象=>  **setInterval(函数，时间); setTimeout(函数，时间);**

```js
// 规则5题目举例
var objH = {
    a: 1,
    b: 2,
    fun5 : function () {
        console.log(this.a + this.b);
    }
}
var a = 3, b = 4;
// 定时器延时器在调用(objH.fun5不是调用哦)
setTimeout(window.objH.fun5, 2000);// 7
// 适用规则1
setTimeout(function () {
    objH.fun5();// 3
}, 2000);
```

##### 规则6： 事件处理函数的上下文是绑定事件的DOM元素=>  **DOM元素.onclick = function(){};**

```html
<!--规则6题目举例-第1小题
   点击哪个盒子，哪个盒子就变红，要求使用同一事件处理函数实现
-->
<style>
.box00{
    overflow: hidden;
    margin: 50px auto;
    width: 800px;
}
.box{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    float: left;
    margin-right: 10px;
}
</style>
<div class="box00">
   <div id="box1" class="box"></div>
   <div id="box2" class="box"></div>
   <div id="box3" class="box"></div>
</div>
<script>
    function setColorToRed() {
        this.style.backgroundColor = 'red';
    } 
    // 规则6题目举例-第2小题
    // 点击哪个盒子，哪个盒子在2000毫秒后就变红，要求使用同一事件处理函数实现
    function setDelayColorToRed() {
        // 备份上下文常用self，当你的函数又有一个内层函数的时候
        var self = this;
        setTimeout(function () {
            // 如果此时用this去调用，那么是规则5：上下文是window对象
            self.style.backgroundColor = 'red';
        },2000);
    } 
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    box1.onclick = setColorToRed || setDelayColorToRed;
    box2.onclick = setColorToRed || setDelayColorToRed;
    box3.onclick = setColorToRed || setDelayColorToRed;
</script>
```





#### 指定函数的上下文★

​    函数.call(上下文，单个参数)：立即执行，不用手动调用

​    函数.apply(上下文，[数组])：立即执行，不用手动调用

​    函数.bind(上下文,  单个参数，单个参数)：返回一个新的函数，不会立即执行，需要手动调用

```js
var xiaomin = { chinese: 80, math: 95, english: 93 };
function sum(bo1, bo2) {
    console.log(this.chinese + this.math + this.english + bo1 + bo2);
}
try {
    // 无法调用哦
    xiaomin.sum();
} catch (error) {
    console.log('无法调用哦');
} 
// 让xiaomin成为sum函数的上下文，就可以调用了
// 传递的参数形式不一样
sum.call(xiaomin, 5, 5);
sum.apply(xiaomin, [5, 3]);

function funA() {
    console.log(this);
    funBBB.apply(this, arguments);
}
function funBBB(num1, num2) {
    console.log(num1 + num2);    
}
// 规则2
funA(33,34);// 67
```

#### 上下文规则总结

| 规则            | 上下文           |
| --------------- | ---------------- |
| 对象.函数()     | 对象             |
| 函数()          | window           |
| 数组[下标]（）  | 数组             |
| IIFE            | window           |
| 定时器，延时器  | window           |
| DOM事件处理函数 | 绑定DOM的元素    |
| call/apply/bind | 任意指定         |
| 用new调用函数   | 匿名创建出的对象 |

```js
let a = 1;
const foo = () => {
    return obj = {
        a: 2,
        // 函数是obj的
        fn() {
            let a = 3;
            // obj
            console.log(this);
            setTimeout(() => {
                // obj
                console.log(this);
                console.log(this.a);// 2
            });
        }
    }
}
foo().fn();
```





### 4.3、构造函数与类

​	用new操作符调用函数：new 函数();现在不讨论它的“面向对象”意义，而是先把用new调用函数的执行步骤和它上下文弄清楚

#### 		四步走

​					1、函数体内会自动创建出一个空白对象
​      			  2、函数的上下文(this)会指向这个对象
​       			 3、函数体内的语句会执行
​     			   4、函数会自动返回上下文对象，即使函数没有return语句

```js
function funs(){
    // 第一步：创建空白对象{}
    // 第二步：this指向空白对象{}
    // 第三步：按顺序执行函数体内语句
    this.a = 3;
    this.b = 5;
    var n = 100;
    if(this.b > this.a){
        this.n = n;
    }
    // 第四步：return this;
}
//返回的上下文对象呗变量obj接收 
var objI = new funs();
console.log(objI);// funs {a: 3, b: 5, n: 100}
```



#### 		构造函数

​				用new调用一个函数，这个函数就被称为“构造函数”，任何函数都可以是构造函数，只需要用new调用它

​					构造函数用来“构造新对象”，它内部的语句将为新对象添加若干属性和方法，完成对象的初始化

​					构造函数必须用new关键字调用，否则不能正常工作，开发者**约定构造函数命名首字母要大写**

​					构造函数中的**this**不是函数本身

```js
// 构造函数中的this不是函数本身
function People(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
var xioaming = new People('小明',19,'男');
var xiaohong = new People('小红',19,'男');
```

```js
// 如果不用new调用构造函数
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 会用window对象生成全局变量：name值为：小明；age值为19，sex值为男
People('小明', 19, '男');
console.log(name + age + sex); //小明19男
```



#### 		类与实例

类（抽象）:只描述对象会拥有哪些属性和方法，但是并不指明属性的值；人类、狗、小轿车等都是抽象概念。

实例：实例是具体客观的对象，拥有实际的某些确定的值的，例如：狗（加菲猫、史努比、小白等），小轿车（宝马320li、奥迪A4、奔驰C200等）
    由类创造实例的过程叫：实例化

Java、C++等是“面向对象”(object-oriented)语言

JavaScript是《基于对象》(object-based)语言

JavaScript中的构造函数可以类比“面向对象”语言中的“类”，写法的确类似，但是和其还是有本质不同。

```js
// 尝试为对象添加方法
function Peoples(name) {
    this.name = name;
    this.sayHello = function () {
     console.log('my name is ' + this.name);
    };
    this.sleep = function () {
        console.log( this.name + '睡着了zzzzzzzz');
    };
}
// 实例化
var xm = new Peoples('小明');
xm.sayHello();
xm.sleep();
```







### 4.4、prototype和原型链查找★★★★★

#### constructor

prototype（原型）：任何函数都有此属性，是个对象，默认**拥有constructor属性指回函数**

​	普通函数没有，《构造函数的prototype属性是它的实例的原型》

```js
function add(a,b) {
   return a + b; 
}
console.log(add.prototype); 
console.log(typeof add.prototype); // object
console.log(add.prototype.constructor == add); // true
console.log(new add().__proto__.constructor === add)// true
```

![image-20210904164046071](D:\front-end\study\MarkDown\0基础\img\prototype.png)



```js
//测试三角关系是否存在
function People(names) {
    this.names = names;
}
//实例化
var xiaoming = new Open('小明');
//测试三角关系是否存在
console.log(xiaoming.__proto__ === People.prototype); // true
```



#### 原型链查找★★★★★

​	实例可以打点访问它的原型的属性和方法。

```js
// 原型链查找
function Personal(name,age) {
    this.name = name;
    this.age = age;
}
Personal.prototype.nationality = '中国';
var xg = new Personal('小刚',15);
var xg1 = new Personal('小刚',15);
//实例可以打点访问它的原型上的属性和方法
console.log(xg.nationality); // 中国
console.log(xg1);// 查看控制台的__proto__ 属性
```



#### hasOwnProperty方法

​	可以检查对象是否真正“**自己拥有**”某属性或者方法

```js
console.log(xg.hasOwnProperty('age')); // true
console.log(xg.hasOwnProperty('nationality')); // false
```



#### in操作符

​	只能检查某个属性或方法**是否可以被对象访问**，不能检查是否是自己的属性或方法

```js
console.log('age' in xg); // true
console.log('nationality' in xg); // true
```



#### 原型链遮蔽效应

​	之前我们将方法写到了对象身上（**都是内存中的不同函数，造成浪费**）

​	解决方法：将方法写到prototype上：

```js
// 原型链遮蔽效应
function Personals(name,age,nationality) {
    this.name = name;
    this.age = age;
    // 类内部的nationality
    this.nationality = nationality;
    this.sayHello = function () {
     console.log('你好 ' + this.name);
    };
}
// 原型链上的nationality
Personals.prototype.nationality = '中国';
// 将方法写到prototype上
Personals.prototype.sleep = function () {
    console.log(this.name + '睡着了zzzzzzzz');
};
Personals.prototype.growup = function () {
    this.age ++;
};

var tom = new Personals('汤姆',15,'美国');
var jerry = new Personals('杰瑞',15,'美国');
console.log('原型链遮蔽效应'); // 先访问自身是否含有属性或方法，再沿着原型链去寻找是否含有属性和方法
console.log(tom.nationality); // 美国
console.log(tom);// 查看控制台的__proto__ 属性

// 验证方法是否共用同一内存
console.log(tom.sayHello === jerry.sayHello); // false
console.log(tom.sleep === jerry.sleep); // true
console.log(jerry.age); // age = 15
jerry.growup();
console.log(jerry.age); // age = 16
```



#### 原型链的终点

![image-20210904164250335](D:\front-end\study\MarkDown\0基础\img\prototypeFinal.png)



```js
function Person(name,age) {
    this.name = name;
    this.age = age;
}
var xiaoming = new Person();
console.log(xiaoming.__proto__.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
console.log(Object.prototype.hasOwnProperty('toString')); // true
```



#### 关于数组的原型链★★★★★



![image-20210904164501296](D:\front-end\study\MarkDown\0基础\img\prototypeOfArray.png)

```js
var arr = [0,1,1,2,3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(Array.prototype.hasOwnProperty('push')); // true
console.log(Array.prototype.hasOwnProperty('splice')); // true
```



#### 继承

​	描述了两个类之间“is a kind of”的关系，比如学生“是一种”人，所以人类和学生类之间就构成继承关系

​		People是“父类”（或超类、基类）；student是“子类”（或“派生类”）

##### 	继承关系举例

|    父类     |           子类            |
| :---------: | :-----------------------: |
|   People    |     Student、Teacher      |
|   Vehicle   |  Car、Truck、Motorcycle   |
|  Appliance  | Television、Refrigertator |
| publication |      Book、Magazine       |

##### 如何实现

```js
Student.prototype = new Person();
```

​	子类必须拥有父类的全部属性和方法，同时子类还应该能定义自己特有的属性和方法

###### ![image-20210904164904507](D:\front-end\study\MarkDown\0基础\img\extends.png)

```js
function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.sayHello = function () {
    console.log('我是' + this.name + '我今年' + this.age );
}
// 书写子类
function Student(name, age, school, studentNumber) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.studentNumber = studentNumber;
}
console.log('原来的原型链检测');
console.log(Student.prototype.__proto__ === Object.prototype); // true
console.log(Student.__proto__.__proto__ === Object.prototype); // true
// 关键语句实现继承
Student.prototype = new People();
// 或者这句
// Student.prototype.__proto__ = People.prototype;
console.log('检测原来的原型链是否改变');
console.log(Student.prototype.__proto__ === Object.prototype); // fasle
console.log(Student.prototype.__proto__ === People.prototype); // true
// 要写在原型链改变之后
Student.prototype.study = function () {
    console.log(this.name + '正在学习');
}
var hanmeimei = new Student('hanmeimei', 12, '初中', 123);
hanmeimei.sayHello();
hanmeimei.study();
// 重写父类方法override
Student.prototype.sayHello = function () {
    console.log('哈哈，你好，我是'+ this.name + '我今年' + this.age);
}
hanmeimei.sayHello();
// 某个People类的实例
var laozhang = new People('老张', 66);
try {
    // 原型链无法向下查找，study方法在子类的原型上
    laozhang.study();
} catch (error) {
    console.log('老张是不行的');
}
// 调用自己的原型上的sayHello方法
laozhang.sayHello();
```



#### 上升到面向对象-红绿灯小案例

​	面向对象的本质：定义不同的类，让类的实例工作

​	面向对象的优点：程序编写更清晰、代码结构更严密、使代码更健壮更利于维护

​	面向对象的应用场合：需要封装和复用性的场合（组件思维）

​	面向对象的重点：编写类



页面上做一个红绿灯，点击红灯就变黄，点击黄灯就变绿，点击绿灯就变回红灯

如果页面上有100个这样的红绿灯呢？

​	TrafficLight类

​	属性：自己的当前颜色color、自己的DOM元素dom

​	方法：初始化init()、切换颜色changeColor()、绑定时间bindEvent()

```html
<style>
/* 红绿灯 */
#box img{
    width: 80px;
}    
</style>
<div id="box"></div>
    <script>
        function TrafficLight() {
            //设置红灯为1，绿灯为2，黄灯为3
            this.color = 3;
            //调用自己的初始化方法
            this.init(); 
            //监听
            this.bindEvent();
            //切换颜色
            this.changeColor();  
        }   
        TrafficLight.prototype.init = function () {
            //获得DOM元素
            this.dom = document.createElement('img');
            //添加图片
            this.dom.src = 'images/trfficlight/' + this.color +'.jpg'
            console.log('images/trfficlight/' + this.color +'.jpg');
            //上树
            box.appendChild(this.dom);
        };
        TrafficLight.prototype.changeColor = function () {
            console.log('点击前我是：' + this.color);
            this.dom.src = 'images/trfficlight/' + this.color +'.jpg'
            this.color --;
            if (this.color == 0){
                this.color = 3;
            }
            console.log('点击后我变成了：' + this.color);
        };
        TrafficLight.prototype.bindEvent = function  () {
            //备份上下文
            var self =  this;
            this.dom.onclick = function () {
               //当点击的是调用改变颜色方法
               self.changeColor();
           };
        };
        
        // //自动跳
        // TrafficLight.prototype.bindEvent = function () {
        //     //备份上下文
        //     var self =  this;
        //     setInterval( function () {
        //        //当点击的是调用改变颜色方法
        //        self.changeColor();
        //    },2000) ;
        // };
        var box = document.getElementById('box');
        var n = 5;
        while (n--) {
            new TrafficLight();
        }
    </script>
```

#### 上升到面向对象-炫彩小球小案例

**Ball类**
属性：

​	x：圆心坐标x
​     y：圆心坐标y
​     r：圆半径
​     opacity：透明度
​     color：颜色
​     dom：DOM元素
方法：初始化init()、更新update()。
如何实现多个小球动画
​    把每个小球实例都放到同一个数组中({小球实例},{小球实例},{小球实例},{小球实例})
​	只需要使用1个定时器，在每一帧遍历每个小球，调用它们的update方法

```html
<style>
/* 炫彩小球 */
.ball{
    position: absolute;
    border-radius: 50%;
}
</style>
<script>
    // 小球类
    function Ball(x, y) {
        // 属性x，y表示的是圆心的坐标
        this.x = x;
        this.y = y;
        // 球的半径
        this.r = 20;
        // 这个小球的位移的增量（while循环除0，防止小球不动）
        do{
            this.idx = parseInt(Math.random()*20) - 10;
            this.idy = parseInt(Math.random()*20) - 10;
        }while (this.idx == 0 && this.idy == 0)
        //背景颜色
        // this.color = 'red';
        this.color = arrColor[parseInt(Math.random() * arrColor.len
        //透明度
        this.opacity = 1;
        //初始化
        this.init();
        //把自己推入数组，注意，这里的this不是类本身，而是实例
        ballArr.push(this);
    }
    Ball.prototype.init = function () {
        //创建DOM
        this.doms = document.createElement('div');
        //加上类名
        this.doms.className = 'ball';
        //圆的半径*2 = 直径
        this.doms.style.width  = 2 * this.r + 'px';
        this.doms.style.height = 2 * this.r + 'px';
        //给小球定位
        this.doms.style.left  = this.x - this.r + 'px'; 
        this.doms.style.top  = this.y - this.r + 'px';
        //给小球上色
        this.doms.style.backgroundColor = this.color;
        //上树
        document.body.appendChild(this.doms);
    }
    //更新小球位置
    Ball.prototype.update = function () {
        //更改小球的值
        this.x += this.idx;
        this.y += this.idy;
        //更新小球的半径
        this.r -= 0.2;
        this.opacity -= 0.01;
        //圆的半径*2 = 直径
        this.doms.style.width  = 2 * this.r + 'px';
        this.doms.style.height = 2 * this.r + 'px';
        //更新小球定位
        this.doms.style.left  = this.x - this.r + 'px'; 
        this.doms.style.top  = this.y - this.r + 'px';
        //更新小球上色
        this.doms.style.backgroundColor = this.color;
        //更新小球透明度
        this.doms.style.opacity = this.opacity;
        //当透明度小于0的时候，就需要从数组中删除自己，DOM元素也需
        // if(this.r < 0){//也可以修改半径小于0时删除
        if(this.opacity < 0){
            for (var i = 0; i < ballArr.length; i++) {
                if (ballArr[i] == this) {
                    ballArr.splice(i,1);
                }
            }
            //删除自己的DOM,下树
            document.body.removeChild(this.doms)
        }
    };
    //把所有的小球实例都放到一个数组中
    var ballArr = [];
    var arrColor = ['#EAF2D3','#6495ed','#D24D57','	#CCFF33','#FFB7DD'];
    
    //定时器负责更新所有的小球实例
    setInterval(function () {
    //遍历数组，调用小球的UPdate方法
        for (var i = 0; i < ballArr.length; i++) {
            ballArr[i].update();
        }
    },20);
    //鼠标指针的事件监听，跟随鼠标创建小球
    document.onmousemove = function (e) {
        //得到鼠标的位置
        var mx = e.clientX;
        var my = e.clientY;
        //创建对象
        new Ball(mx,my);
    };
</script>
```







### 4.5、内置对象

#### 包装类

Nmeber()、String()、和Boolean()分别是数字、字符串、布尔值的“包装类”。
    目的：为了让基本类型值可以从它们的构造函数的prototype上获得方法
Nmeber()、String()、和Boolean()的**实例都是object类型**，它们的primitiveValue属性存储它们的本身值 
    new出来的基本类型值可以正常参与运算

```js
var a11 = new Number(111);
var b11 = new String('包装类');
var c11 = new Boolean(true);
console.log('包装类');
console.log(a11);//Number {11}
console.log(typeof a11);//object
console.log(b11);//String {"11"}
console.log(typeof b11);//object
console.log(c11);//Boolean {true}
console.log(typeof c11);//object
console.log('包装类运算');
console.log(a11 + 5);
console.log(b11 + 5);
console.log(c11 && false);//false
        
var d11 = 1212;
console.log(d11.__proto__ == Number.prototype);
var e11 = '1212';
console.log(e11.__proto__ == String.prototype);
console.log(String.prototype.hasOwnProperty('toUpperCase'));
console.log(String.prototype.hasOwnProperty('slice'));
console.log(String.prototype.hasOwnProperty('substr'));
console.log(String.prototype.hasOwnProperty('substring'));
```



#### Math(数学)对象

##### Math.round()

​	四舍五入

​    小数点后某位计算：Math.round(3.7455 * 100) / 100;

```js
console.log('四舍五入');
console.log(Math.round(3.49));
console.log(Math.round(3.51));
console.log('小数点后某位');
console.log(Math.round(3.7455 * 100)/100);
```



##### Math.max()和Math.min

​	分别的到参数(列罗出来，不是数组)列表的最大/小值，如果参数包含不能转换成数字的非数字值，则返回NaN

```js
console.log('最大/小值');
console.log(Math.max(1,222,31,2));
console.log(Math.min(1,222,31,2));
var arr = [1,222,31,2];
console.log(Math.max.apply(null,arr));
// 展开运算符
console.log(Math.max(...arr));
```



##### Math.random()

​	可以的到0(包含)~1之间的小数:生成[a,b]公式 **parseInt(Math.random()*(b-a+1)) + a;**

```js
// 随机数[-5,5]
console.log('随机数：');
var a12 = -5;
var b12 = 5;
console.log(parseInt(Math.random()*( b12 - a12 + 1 )) + a12);
```



#### Date(日期)对象

​	使用new Date()即可得到当前时间的日期对象，它是Object

```js
new Date('2020-12-01') == new Date(2020，11，1) == 20201201 
```

```js
// 什么参数都不加，自动获得当前
console.log('日期对象：');
var date = new Date();
console.log(new Date());//Sat Jun 26 2021 19:17:20 GMT+0800 (中国标准时间)
console.log(new Date(2020,5,3));//Fri Jun 03 2020 00:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2020-5-3'));//Sun May 03 2020 00:00:00 GMT+0800 (中国标准时间)
```



##### 日期对象的常见方法

| 方法          | 作用               |
| ------------- | ------------------ |
| getDate()     | 得到日期1~31       |
| getDay()      | 得到星期0~6        |
| getMonth()    | 得到月份0~11       |
| getFullYear() | 得到年份1~Infinity |
| getHours()    | 得到小时数0~23     |
| getMinutes()  | 得到分钟数0~59     |
| getSeconds()  | 得到秒数0~59       |

```js
// 日期对象的常见方法（背）
console.log('日期对象的常见方法:');
var date = new Date()
console.log('日期：' + date.getDate());
console.log('星期：' + date.getDay());
console.log('月份：' + date.getMonth());
console.log('年份：' + date.getFullYear());
console.log('小时数：' + date.getHours());
console.log('分钟数：' + date.getMinutes());
console.log('秒数：' + date.getSeconds());
```



##### 时间戳

​	某时刻距离1970年1月1日零点的毫秒数（数据库中用整数存储时间戳）

```js
// 显示时间戳
console.log('时间戳:');
var timestamp1 = date.getTime();// 精准到毫秒
var timestamp2 = Date.parse(date);// 精确到秒，以毫秒数表示，最后三位永远000
console.log(timestamp1);
console.log(timestamp2);
var dddd = Date.parse(new Date(2021,5,7)) - 248*1000*60*60*24
```

​	使用：**getTime()、Date.parse(obj)；new Date(**时间戳)可以让时间戳变为日期对象

```js
console.log(new Date(timestamp2));
console.log(new Date(dddd));
```

##### 	倒计时小程序

```js
// 在页面上实时显示距离明年高考还有多少天、多少时、多少分、多少秒？
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
document.body.appendChild(h1);
document.body.appendChild(h2);
//定时器
setTimeout(function(){
//获得当前时间
var nowDate  = new Date();
//算出明年高考的时间
var targetDate = new Date(nowDate.getFullYear() + 1, 5, 6);
//两者的时间戳差值
console.log(targetDate  - nowDate);
var diff = new Date(targetDate  - nowDate);
var day = parseInt(diff/(1000*60*60*24));
var hours = parseInt(diff%(1000*60*60*24)/(1000*60*60));
var minutes = parseInt(diff%(1000*60*60)/(1000*60));
var seconds = parseInt(diff%(1000*60*60)%(1000*60)/1000);
h1.innerText = nowDate.getFullYear() + '年高考倒计时!'
console.log(diff);
h2.innerText =  day + '天' +  hours + '小时' + minutes + '分钟' + seconds + '秒';
},1000);
```



### 4.6、继承与内置构造函数

继承：描述了两个类之间“is a kind of”的关系，比如学生“是一种”人，所以人类和学生类之间就构成继承关系

​	People是“父类”（或超类、基类）；student是“子类”（或“派生类”）

继承关系举例：
    People => Student、Teacher
    Vehicle => Car、Truck、Motorcycle
    Appliance =>Television、Refrigertator
    publication => Book、Magazine

#### 使用原型链实现继承

​	让子类构造函数的prototype，指向父类的一个实例

```js
Student.prototype = new Person();
```

​	通过原型链实现继承的问题:

​	问题1：如果父类的属性中有引用类型值，则这个属性会被所有子类的实例共享；

​	问题2：子类的构造函数中，往往需要重复定义很多超类定义过的属性。即，子类的构造函数写的不够优雅；

```js
// 使用原型链实现继承
// 超类、父类
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log('你好'+ this.name + '我' + this.age );
}
Person.prototype.sleep = function () {
    console.log( this.name + '正在睡觉zzzzzz' );
}
// 书写子类
function Student(name,age,school,studentNumber) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.studentNumber = studentNumber;
}
console.log('原来的原型链检测');
console.log(Student.prototype.__proto__ === Object.prototype);
console.log(Student.__proto__.__proto__ === Object.prototype);
// 关键语句实现继承，使用原型链实现继承
Student.prototype = new Person();
// Student.prototype.__proto__ = Person.prototype;
console.log('检测原来的原型链是否改变');
console.log(Student.prototype.__proto__ === Object.prototype);
console.log(Student.prototype.__proto__ === Person.prototype);
//要写在原型链改变之后
Student.prototype.study = function () {
    console.log(this.name + '正在学习');
}
var xa = new Student('xa',12,'初中',123);
xa.sayHello();
xa.study();
// 重写父类方法override
Student.prototype.sayHello = function () {
    console.log('哈哈，你好'+ this.name + '我' + this.age);
}
xa.sayHello();
var laozhang = new Person('老张',66);
try {
    laozhang.study();
} catch (error) {
    console.log('老张是不行的');
}
laozhang.sayHello();
```



#### 借用构造函数

为了解决原型中包含引用类型值所带来问题和子类构造函数不优雅的问题，开发人员通常使用一种叫做“借助构造函数”的技术，也被称为“伪造对象”或“经典继承”。

思想：在子类构造函数的内部调用超类的构造函数，但是要注意使用call()绑定上下文

作用：父类与子类不再共享引用类型值

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [33,44,55,66]; // 引用类型值不再被共享
}
// 书写子类
function Student(name, age, school, studentNumber) {
    // 规则2: 圆括号直接调用函数，则函数的上下文是window对象=> 函数();
    // 此时会生成全局变量name,age
    // Person(name, age);
    Person.call(this, name, age);// 指定Person函数上下文为Student的上下文,实现借用构造函数继承
    this.school = school;
    this.studentNumber = studentNumber;
}
var xiaoming = new Student('明', 14, '随便小学', 1110);
console.log(xiaoming);
xiaoming.arr.push(77);
console.log(xiaoming.arr);//(5) [33, 44, 55, 66, 77]
console.log(xiaoming.hasOwnProperty('arr'));//true
var xiaohong = new Student('小红', 12, '随便小学', 110);
console.log(xiaohong.arr);//(4) [33, 44, 55, 66]
console.log(xiaohong.hasOwnProperty('arr')); //true

console.log(xiaoming.__proto__ === Student.prototype)// true
console.log(xiaoming.__proto__.constructor === Student)// true
// Student和Person的原型关系
console.log(Student.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Student.prototype.__proto__ === Person.prototype) // false

console.log(Student.prototype === Person.prototype) // false
console.log(xiaoming.__proto__ === Person.prototype) // false
console.log(xiaoming.__proto__ === Student.prototype) // true

var shool = new Person('xue', 123)
console.log(shool.__proto__ === Student.prototype) // false
console.log(shool.__proto__ === Person.prototype) // true
console.log(shool.__proto__.constructor === Person)// true
```



#### 组合继承★★★★★

将**借用原型链**和**借用构造函数**的技术组合到一起，也叫作伪经典继承（最常用）

缺点：会调用两次超类的构造函数，一次是在创建子类原型的时候，另一次是在子类构造函数的内部

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [33,44,55,66];// 引用类型值不再被共享
}
Person.prototype.sayHello = function () {
    console.log('你好'+ this.name + '我' + this.age );
}
// 书写子类
function Student(name, age, school, studentNumber) {
    // 指定Person函数上下文为Student的上下文,实现借用构造函数继承
    Person.call(this, name, age);// 在子类构造函数的内部
    this.school = school;
    this.studentNumber = studentNumber;
}
// 借助原型链实现继承
Student.prototype = new Person();// 在创建子类原型的时候
Student.prototype.study = function () {
    console.log(this.name + '正在学习');
}
Student.prototype.sayHello = function () {
    console.log('哈哈哈哈哈！你好'+ this.name + '我' + this.age );
}
```



#### 原型式继承(IE9+)

**可以根据指定的对象为原型创建出新对象**

- F.prototype = obj

```js
var obj2 = Object.create(obj1);
```

obj2 ==> __proto__ ==> obj1

再没有必要“兴师动众”地构造函数，而只想让新对象与现有对象“类似”的情况下，使用Object.create()即可胜任，称为原型式继承

```js
// 原型式继承
var obj20 = {
     a: 33,
     b: 44,
     c: 12,
     test: function(){
         console.log(this.a + this.b);
     }
    };
var obj21 = Object.create(obj20, {
    d: {
        value : 99// 第二个参数是对象，补充对象值是99
    },
    a: {
        value : 2// 会遮蔽obj20的a属性
    }
});
console.log(obj21) // { a: 2, d: 99}
console.log(obj21.__proto__) // {a: 33, b: 44, c: 12, test: f()}
console.log(obj21.__proto__ === obj20);// true
console.log(obj21.a);// 2
console.log(obj21.d);// 99
obj21.test();// 2 + 44 = 46
```

面试热点★★：Object.create()兼容性写法

如何在低版本浏览器中实现此方法？

```js
// 低版本浏览器中实现方法
// 道格拉斯·克罗克福德
// 函数的功能以o为原型，创建新对象
function object(o) {
    // 创建一个临时构造函数
    function F() {}
    // 让这个临时构造函数的prototype指向o，这样一来它new出来的对象，__proto__原型链指向了o
    F.prototype = o; 
    // 返回F的实例
    return new F();  
}
var obj22 = { a: 23, b: 5 };
var obj23 = object(obj22);
// F.prototype = obj22 obj23.__proto__ = obj22
// 所以obj23的隐式原型可以顺着原型链找到obj22的属性进行访问
console.log(obj23.__proto__ === obj22); // true
console.log(obj23.__proto__) // { a: 23, b: 5 };
console.log(obj22.__proto__ === Object.prototype)
console.log(obj23.a);
console.log(obj23.b);
```



#### 寄生式继承

编写一个函数，它接受一个参数o，返回以o为原型的新对象p，同时给p上添加预置的新方法

​	就是编写一个函数，它可以“增强对象”，只要把对象传入这个函数，这个函数将以此对象为“基础”创建出新对象，并未新对象赋予新的预置方法

在主要考虑对象而不是自定义类型的构造函数的情况下，寄生式继承也是一种有用的模式

​	缺点：会由于不能做到函数复用**（独立内存）**而降低效率，即“方法没有写到prototype上” （没有构造函数） 

```js
var obj24 = {
    name: 'ahong',
    age: 51,
    sex: '女'
};
var obj25 = {
    name: 'anong',
    age: 11,
    sex: '男'
};
function f(o) {
    // 以o为原型创建出新对象
    var p = Object.create(o);
    // 补充方法在实例对象上
    p.sayHello = function () {
        console.log('你好，' + this.name + this.sex + this.age);
    }
    return p;
}
var p1 = f(obj24);	
p1.sayHello(); // 你好，ahong女51
var p2 = f(obj25);
p2.sayHello(); // 你好，anong男11
console.log(p1.sayHello === p2.sayHello); // false
```



#### 寄生组合式继承

目的：通过借用构造函数来**继承属性**，通过原型链的混成形式来**继承方法**

思路：不必为了指定子类型的原型而调用超类型的构造函数，我们所要的无非就是超类型原型的一个副本而已，本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

![image-20210904175111351](D:\front-end\study\MarkDown\0基础\img\寄生组合式继承.png)

```js
// 寄生组合式继承
// subType是子类的构造函数，superType是父类的构造函数
function inheritPrototype(subType, superType) {
    // 核心
    subType.prototype = Object.create(superType.prototype);
}
function People(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [33,44,55,66];// 引用类型值不再被共享
}
People.prototype.sayHello = function () {
    console.log('你好' + this.name + '我' + this.age );
}
People.prototype.sleep = function () {
    console.log( this.name + '正在睡觉zzzzzz' );
}


// 书写子类
function Student(name, age, school, studentNumber) {
    // 指定Person函数上下文为Student的上下文,实现借用构造函数继承
    People.call(this, name, age);// 在子类构造函数的内部
    this.school = school;
    this.studentNumber = studentNumber;
}
// 调用我们自己编写的inheritPrototype函数，可以让Student类的prototype指向以Person.prototype为原型的一个新对象
inheritPrototype(Student, People);

Student.prototype.study = function () {
    console.log(this.name + '正在学习');
}
// override
Student.prototype.sayHello = function () {
    console.log('哈哈哈哈哈！你好' + this.name + '我' + this.age );
}

var xiaoming = new Student('明', 14, '随便小学', 1110);
xiaoming.sleep(); // 明正在数据
xiaoming.sayHello(); // 哈哈哈哈哈！你好明我14
xiaoming.study(); // 明正在学习
console.log(Student.prototype.__proto__ === People.prototype) // true
console.log(Student.hasOwnProperty('sleep')); // false
console.log(Student.hasOwnProperty('arr')) // false
console.log('arr' in Student) // fasle
console.log('arr' in People) // fasle
console.log('arr' in xiaoming) // true
```



#### instanceof运算符

用来检测“**某对象是不是某个类的实例**” 

​	底层机理：检查Student.prototype属性是否在xiaoming的原型链上（多少层都行，只要在就行）

```js
console.log(xiaoming instanceof Student);// true
console.log(xiaoming instanceof People);// true
console.log(xiaoming instanceof Object);// true
console.log([] instanceof Array) // true
Object.create(null) instanceof Object // false
```



#### 内置构造函数

Array就是数组类型的构造函数，Function就是函数类型的构造函数，Object就是对象类型的构造函数

​	用途：所有该类型的方法都是定义在它的内置构造函数的prototype上的，我们可以给这个对象添加新的方法，从而拓展某类型的功能

```js
// 内置构造函数
// 数组的内置构造函数,任何数组的字面量都可以看做是Array的实例
console.log([1,2] instanceof Array);//true
console.log([] instanceof Array);//true

// 函数的内置构造函数,任何函数的字面量都可以看做是Function的实例
function name(params) {}
console.log(name instanceof Function);//true

// Function是所有函数的构造函数
var jianfa = new Function('a','b','return a - b');
console.log(jianfa(8,3));//5

// 对象的内置构造函数，任何对象的字面量都可以看做是Object的实例
console.log({a : 1} instanceof Object);//true
console.log({} instanceof Object);//true
var obj = new Object();
console.log(obj);// 空对象{}
obj.a = 1;
obj.b = 1;
console.log(obj);// {a: 1, b: 1}
```

```js
// 拓展求和方法
Array.prototype.sum = function() {
    // this表示调用sum()方法的数组
    var arr = this;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
var arr = [1,2,32,34];
console.log(arr.sum());
```



#### 内置构造函数的关系😮

​	Object.prototype是万物原型链的终点，JS规定函数、数组皆为对象。

![image-20210904174842266](D:\front-end\study\MarkDown\0基础\img\Object.prototype.png)

```js
// 内置构造函数的关系
console.log([1,2].__proto__ === Array.prototype); // true 
console.log([1,2].__proto__.__proto__ === Object.prototype); // true
console.log([1,2] instanceof Object); // true
console.log([1,2] instanceof Array); // true
        
console.log(Object.prototype.__proto__); // null
console.log(null.__proto__); // 报错
// Object也是Function new出来的
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
console.log(Object.__proto__.__proto__ === Object.prototype); // true
console.log(Object instanceof Function); // true
console.log(Function instanceof Object); // true
console.log(Function instanceof Function); // true
console.log(Object instanceof Object); // true
```





### 4.7、设计模式与设计原则★★★★★

#### 一、什么是设计模式

设计模式(Design pattem)代表了最佳的实践，通常被有经验的面向对象的开发人员所采用。设计模式是开发人员在开发过程中面临的一般问题的解决方案。
项目中合理的运用设计模式可以完美的解决很多问题，每种设计模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的。
问题，以及问题的核心解决方案，这也是设计模式能够被广泛应用的原因。
而这些设计模式，代表的是一种解决问题的思想。我们在解决问题和设计这些模式得到时候本身也是有原则可循的，甚至可以指定一些需要强制遵守的准则。

#### 二、设计模式的原则

1、单一职责原则：一个类，应该仅有一个引起它变化的原因；功能要单一
2、开放封闭原则：对扩展开放，对修改关闭
3、里氏替换原则：基类出现的地方，子类一定出现
4、接口隔离原则：一个接口应该是一种角色，不该干的事情不干，该干的都要干。简而言之就是降低耦合，减低依赖。
5、依赖翻转原则：针对接口编程，依赖抽象而不依赖具体
《JS中常用的是单一功能和开放封闭原则》

#### 三、设计模式的作用

设计模式有助于写出可复用和可维护性高的程序



#### 工厂模式

1、定义：工厂模式是由一个方法来决定到底要创建哪个类的实例，而这些实例经常都拥有相同的接口。这种模式主要用在所实例化的类型在编译期并不能确定，而是在执行期决定的情况。
2、分类：简单工厂，工厂方法
3、区别：简单工厂是将创建对象的步骤放在父类进行，工厂方法使延迟到子类中进行，它们两者都可以总结为：“根据传入的字符串来选择对应的类”
4、实现：(1)简单工厂

```js
var UserFactory = function (role) {
    function Admin() {
        this.name = "管理员",
        this.viewPage = ['首页', '查询', '权限管理']
    }
    function User() {
        this.name = '普通用户',
        this.viewPage = ['首页', '查询']
    }
    switch (role) {
        case 'admin':
            return new Admin();
            break;
        case 'user':
            return new User();
            break;
        default:
            throw new Error('参数错误, 可选参数: admin、user');
    }
}
// admin.name可以修改值
var admin = UserFactory('admin');
var user = UserFactory('user');
```

(2)实现工厂方法

```js
// 安全模式创建的工厂方法函数
var UserFactory = function (role) {
    if (this instanceof UserFactory) {
        // this = UserFactory 即 UserFactory[role]对象上的属性
        var s = new this[role]();
        return s;
        // return new this[role]();  
    } else {
        return new UserFactory(role);
    }
}
// 工厂方法函数的原型中设置所有对象的构造函数
UserFactory.prototype = {
    Admin: function () {
        this.name = "管理员",
        this.viewPage = ['首页', '查询', '权限管理']
    },
    User: function () {
        this.name = '用户',
        this.viewPage = ['首页', '查询']
    }
}
// 调用
// 执行上下文是window对象
var admin = UserFactory('Admin');
var user = UserFactory('User');
admin instanceof UserFactory // false
```



#### 构造器模式

1、什么是构造器模式：在面向对象的编程语言中，构造器是一个类中用来初始化新对象的特殊方法。并且可以接受参数来设定实例对象的属性的方法
2、实现案例：其实就是利用原型链上被继承的特性，实现了构造器。

```js
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    // this.info = new CarDetail(model)
    // 属性也可以通过 new 的方式产生
}
// 覆盖原型对象上的toString
Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
};
// 使用:
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString()); // Honda Civic has done 20000 miles
console.log(mondeo.toString()); // Ford Mondeo has done 5000 miles
```



#### 单例模式😙

1、什么是单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点。单例模式是一种常用的模式，有一些对象我们往往只需要一个，
比如全局缓存、浏览器中的window对象等。在JS开发中，单例模式的用途同样非常广泛。试想一下，当我们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。
2、实现案例
假设要设置一个管理员，多次调用也仅设置一次，我们可以使用闭包缓存一个内部变量来实现这个单例

```js
function SetManager(name) {
    this.manager = name;
}
SetManager.prototype.getName = function() {
    console.log(this.manager);
};
// IIFE
var SingletonSetManager = (function() {
    var manager = null;
    return function(name) {
        if (!manager) {
            manager = new SetManager(name);
        }
        return manager;
    } 
})();
SingletonSetManager('a').getName(); // a
SingletonSetManager('b').getName(); // a
SingletonSetManager('c').getName(); // a
```

这是比较简单的做法，但是假如我们还要设置一个HR呢？就得赋值一遍代码了。所以，可以改写单例内部，实现更通用一些。

```JS
// 提取出通用的单例
function getSingleton(fn) {
  var instance = null;
  return function() {
    if (!instance) {
        instance = fn.apply(this, arguments);
    }
    return instance;
  }
}
// 再进行调用，结果还是一样
// 获取单例
var managerSingleton = getSingleton(function(name) {
    var manager = new SetManager(name);
    return manager;
});
managerSingleton('a').getName(); // a
managerSingleton('b').getName(); // a
managerSingleton('c').getName(); // a
// 这时，我们添加HR时，就不需要更改获取单例内部的实现了，仅需要实现添加HR所需要做的，再调用即可。
function SetHr(name) {
    this.hr = name;
}
SetHr.prototype.getName = function() {
    console.log(this.hr);
};
var hrSingleton = getSingleton(function(name) {
    var hr = new SetHr(name);
    return hr;
});
hrSingleton('aa').getName(); // aa
hrSingleton('bb').getName(); // aa
hrSingleton('cc').getName(); // aa
```



#### 原型模式

1、什么是原型模式：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象，在JS中，实现原型模式是在ES5中，提出的Object.create方法，使用现有的对象来提供新创建的对象的__ proto__

2、核心思想：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象

3、实现案例

```js
var prototype = {
    name: "Jack",
    getName: function() {
        return this.name;
    },
};
var obj = Object.create(prototype, {
   job: {
      value: "IT",
   },
});
console.log(obj.getName()); // Jack
console.log(obj.job); // IT
console.log(obj.__proto__ === prototype); //true
```

#### 发布-订阅模式（观察者模式）📃

1、什么是发布-订阅者模式：它定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，在JS开发中，我们一般用事件模型来替代传统的发布-订阅者模式。

2、核心思想：取代对象之间硬编码的通知机制，一个对象不用再显式的调用另外一个对象的某个接口，在JS中通常使用注册回调函数的形式来订阅。

3、实现案例：JS中的事件就是经典的发布-订阅者模式

```js
// 订阅
document.body.addEventListener('click', function() {
    console.log('click1');
}, false);
document.body.addEventListener('click', function() {
    console.log('click2');
}, false);
// 发布
document.body.click(); // click1  click2
```



再来举个例子，小A在公司C完成了笔试及面试，小B也在公司C完成了笔试。他们焦急地等待结果，每隔半天就电话询问公司C，导致公司C很不耐烦。

这种解决办法就是AB直接把联系方式留给C，有结果的话C自然会通知AB，这里的“询问”属于显式调用，“留给”属于订阅，“通知”属于发布。

```js
// 观察者
var observer = {
    // 订阅集合
    subscribes: [],
    // 订阅
    subscribe: function(type, fn) {
        if (!this.subscribes[type]) {
            this.subscribes[type] = [];
        }        
        // 收集订阅者的处理
        typeof fn === 'function' && this.subscribes[type].push(fn);
    },
    // 发布  可能会携带一些信息发布出去
    publish: function() {
        var type = [].shift.call(arguments),
            fns = this.subscribes[type];
        
        // 不存在的订阅类型，以及订阅时未传入处理回调的
        if (!fns || !fns.length) {
            return;
        }
        
        // 挨个处理调用
        for (var i = 0; i < fns.length; ++i) {
            fns[i].apply(this, arguments);
        }
    },
    
    // 删除订阅
    remove: function(type, fn) {
        // 删除全部
        if (typeof type === 'undefined') {
            this.subscribes = [];
            return;
        }
        var fns = this.subscribes[type];
        // 不存在的订阅类型，以及订阅时未传入处理回调的
        if (!fns || !fns.length) {
            return;
        }
        if (typeof fn === 'undefined') {
            fns.length = 0;
            return;
        }
        // 挨个处理删除
        for (var i = 0; i < fns.length; ++i) {
            if (fns[i] === fn) {
                fns.splice(i, 1);
            }
        }
    }
};
// 订阅岗位列表
function jobListForA(jobs) {
    console.log('A', jobs);
}
function jobListForB(jobs) {
    console.log('B', jobs);
}
// A订阅了笔试成绩
observer.subscribe('job', jobListForA);
// B订阅了笔试成绩
observer.subscribe('job', jobListForB);
// A订阅了笔试成绩
observer.subscribe('examinationA', function(score) {
    console.log(score);
});
// B订阅了笔试成绩
observer.subscribe('examinationB', function(score) {
    console.log(score);
});
// A订阅了面试结果
observer.subscribe('interviewA', function(result) {
    console.log(result);
});
observer.publish('examinationA', 100); // 100
observer.publish('examinationB', 80); // 80
observer.publish('interviewA', '备用'); // 备用
observer.publish('job', ['前端', '后端', '测试']); // 输出A和B的岗位
// B取消订阅了笔试成绩
observer.remove('examinationB');
// A都取消订阅了岗位
observer.remove('job', jobListForA);
observer.publish('examinationB', 80); // 没有可匹配的订阅，无输出
observer.publish('job', ['前端', '后端', '测试']); // 输出B的岗位
```
4.优缺点
   	 优点：一为时间上的解耦，二为对象之间的解耦，可以用在异步编程中。
    	缺点：创建订阅者本身要消耗一定的时间和内存，订阅的处理函数不一定会被执行，驻留内存有性能开销，弱化了对象之间的联系，复杂的情况下可能会导致程序难以跟踪维护和理解。



#### 适配器模式

1、什么是适配器模式：是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作
      页脚包装器(wrapper)，这是一个相对简单的模式。在程序开发中有许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的格式并不符合目前的需求。这时候有两种解决办法，
      第一种是修改原来的接口实现，但如果原来的模块很复杂，或者我们拿到的模块是一段别人编写的经过压缩的代码，修改原接口就显得太不现实了。
      第二种办法是创建一个适配器，将原接口转换为客户希望的另一个接口，客户只需要和适配器打交道。
2、核心思想：解决两个已有接口之间不匹配的问题
3、实现案例：一个简单的数据格式转换的适配器

```js
// 渲染数据，格式限制为数组了
function renderData(data) {
    data.forEach(function(item) {
        console.log(item);
    });
}
// 对非数组的进行转换适配
function arrayAdapter(data) {
    if (typeof data !== 'object') {
        return [];
    }
    if (Object.prototype.toString.call(data) === '[object Array]') {
        return data;
    }
    var temp = [];
    for (var item in data) {
        if (data.hasOwnProperty(item)) {
            temp.push(data[item]);
        }
    }
    return temp;
}
var data = {
    0: 'A',
    1: 'B',
    2: 'C'
};
renderData(arrayAdapter(data)); // A B C
```



#### 装饰器模式

1、什么是装饰器模式：以动态的给某个对象  添加一些额外的职责，而不会影响这个类中派生的其他对象。是一种“即用即付”的方式，能够不再改变对象自身的基础上，在程序运行期间给对象动态地添加职责
2、核心思想：是为对象动态加入行为，经过多重包装，可以形成一条装饰链
3、实现案例：最简单的装饰者，就是重写对象的属性

```js
var A = {
    score: 10
};
A.score = '分数：' + A.score;
// 也可以使用传统面向对象的方法来实现装饰，添加技能：
function Person() {}
Person.prototype.skill = function() {
    console.log('数学');
};
// 装饰器，还会音乐
function MusicDecorator(person) {
    this.person = person;
}
MusicDecorator.prototype.skill = function() {
    this.person.skill();
    console.log('音乐');
};
// 装饰器，还会跑步
function RunDecorator(person) {
    this.person = person;
}
RunDecorator.prototype.skill = function() {
    this.person.skill();
    console.log('跑步');
};
var person = new Person();
// 装饰一下
var person1 = new MusicDecorator(person);
person1 = new RunDecorator(person1);
person.skill(); // 数学
person1.skill(); // 数学 音乐 跑步
```

我们也可以使用更通用的装饰函数

```js
// 装饰器，在当前函数执行前先执行另一个函数
function decoratorBefore(fn, beforeFn) {
    return function() {
        var ret = beforeFn.apply(this, arguments);
        
        // 在前一个函数中判断，不需要执行当前函数
        if (ret !== false) {
            fn.apply(this, arguments);
        }
    };
}
function skill() {
    console.log('数学');
}
function skillMusic() {
    console.log('音乐');
}
function skillRun() {
    console.log('跑步');
}
var skillDecorator = decoratorBefore(skill, skillMusic);
skillDecorator = decoratorBefore(skillDecorator, skillRun);
skillDecorator(); // 跑步 音乐 数学
```



#### 代理模式

1、什么是代理模式：当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象请求做出一些处理之后，再把请求转交给本体对象代理和本体的接口具有一致性，本体定义了关键功能，而代理是提供或拒绝对它的访问，或者在访问本体之前做一些额外的事情。
2、核心思想：一个对象提供一个代用品或占位符，以便控制对它的访问
3、实现案例：代理模式主要有三种：保护代理、虚拟代理、缓存代理。保护代理主要实现了访问主体的限制行为，以过滤字符作为简单的例子：

```js
// 主体，发送消息
function sendMsg(msg) {
    console.log(msg);
}
// 代理，对消息进行过滤
function proxySendMsg(msg) {
    // 无消息则直接返回
    if (typeof msg === 'undefined') {
        console.log('deny');
        return;
    }
    // 有消息则进行过滤
    msg = ('' + msg).replace(/泥\s*煤/g, '');
    sendMsg(msg);
}
sendMsg('泥煤呀泥 煤呀'); // 泥煤呀泥 煤呀
proxySendMsg('泥煤呀泥 煤'); // 呀
proxySendMsg(); // deny
```

它的意图很明显，在访问主体之前进行控制，没有消息的时候直接在代理中返回了，拒绝访问主体，这属于护代理的形式。有消息的时候对敏感字符进行了处理，这属于虚拟代理的模式。
虚拟代理在控制对主体的访问时，加入了一些额外的操作，如在滚动事件触发的时候，也许不需要频繁触发，我们可以引入函数节流，这是一种虚拟代理的实现

```js
// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才一次性处理
function debounce(fn, delay) {
    delay = delay || 200;
    
    var timer = null;
    return function() {
        var arg = arguments;
        
        // 每次操作时，清除上次的定时器
        clearTimeout(timer);
        timer = null;
        
        // 定义新的定时器，一段时间后进行操作
        timer = setTimeout(function() {
            fn.apply(this, arg);
        }, delay);
    }
};
var count = 0;
// 主体
function scrollHandle(e) {
    console.log(e.type, ++count); // scroll
}
// 代理
var proxyScrollHandle = (function() {
    return debounce(scrollHandle, 500);
})();
window.onscroll = proxyScrollHandle;
```

缓存代理可以为一些开销大的运算结果提供暂时的缓存，提升效率。来个栗子——缓存加法操作：

```js
// 主体
function add() {
    var arg = [].slice.call(arguments);
    return arg.reduce(function(a, b) {
        return a + b;
    });
}
// 代理
var proxyAdd = (function() {
    var cache = [];
    return function() {
        var arg = [].slice.call(arguments).join(',');
        
        // 如果有，则直接从缓存返回
        if (cache[arg]) {
            return cache[arg];
        } else {
            var ret = add.apply(this, arguments);
            return ret;
        }
    };
})();
console.log(
    add(1, 2, 3, 4),
    add(1, 2, 3, 4),
    proxyAdd(10, 20, 30, 40),
    proxyAdd(10, 20, 30, 40)
); // 10 10 100 100
```



#### 外观模式

1、什么是外观模式：为了系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
2、核心思想：可以通过请求外观接口来达到访问子系统，也可以选择越过外观来直接访问子系统
3、实现案例：外观模式在JS中，可以认为是一组函数的集合、

```js
// 三个处理函数
function start() {
    console.log('start');
}
function doing() {
    console.log('doing');
}
function end() {
    console.log('end');
}
// 外观函数，将一些处理统一起来，方便调用
function execute() {
    start();
    doing();
    end();
}
// 调用init开始执行
function init() {
    // 此处直接调用了高层函数，也可以选择越过它直接调用相关的函数
    execute();
}
init(); // start doing end
```



#### 迭代器模式

1、什么是迭代器模式：是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。
2、核心思想：在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。
3、实现案例：JS数组的map forEach已经内置了迭代器

```js
[1, 2, 3].forEach(function(item, index, arr) {
    console.log(item, index, arr);
});
```

不过对于对象的遍历，往往不能与数组一样使用同一的遍历代码，我们可以封装一下：

```js
 function each(obj, cb) {
     var value;
     if (Array.isArray(obj)) {
         for (var i = 0; i < obj.length; ++i) {
             value = cb.call(obj[i], i, obj[i]);
             if (value === false) {
                 break;
             }
         }
     } else {
         for (var i in obj) {
             value = cb.call(obj[i], i, obj[i]);
             if (value === false) {
                 break;
             }
         }
     }
 }
 each([1, 2, 3], function(index, value) {
     console.log(index, value);
 });
 each({a: 1, b: 2}, function(index, value) {
     console.log(index, value);
 });
 // 0 1
 // 1 2
 // 2 3
 // a 1
 // b 2
```

再来看一个例子————强行地使用迭代器，来了解一下迭代器也可以替换频繁的条件语句，虽然例子不太好，但在其他负责的分支判断情况下，也是值得考虑的：

```js
 function getManager() {
     var year = new Date().getFullYear();
     if (year <= 2000) {
         console.log('A');
     } else if (year >= 2100) {
         console.log('C');
     } else {
         console.log('B');
     }
 }
 getManager(); // B
```

将每个条件语句拆分出逻辑函数，放入迭代器中迭代

```js
function year2000() {
    var year = new Date().getFullYear();
    if (year <= 2000) {
        console.log('A');
    }
    return false;
}
function year2100() {
    var year = new Date().getFullYear();
    if (year >= 2100) {
        console.log('C');
    }
    return false;
}
function year() {
    var year = new Date().getFullYear();
    if (year > 2000 && year < 2100) {
        console.log('B');
    }
    return false;
}
function iteratorYear() {
    for (var i = 0; i < arguments.length; ++i) {
        var ret = arguments[i]();
        if (ret !== false) {
            return ret;
        }
    }
}
var manager = iteratorYear(year2000, year2100, year); // B
```

### 一些问题

1、熟悉每条函数上下文this的判定规则
2、call和apply的功能和区别
3、用new调用函数的四步走
4、什么是类和实例？面向对象编程的意义
5、prototype的原型链查找
6、继承的实现
7、使用面向对象实现小案例
8、熟练掌握Math、Date等JS内置对象













## 5、正则表达式

​	(regular expression)描述了字符串的“构成模式”，经常被用于检查字符串是否符合预定的格式要求

基本使用方法：检查某个字符串是否是6位字符串

```js
var str = '123123'; 
var regexp = /^\d{6}$/; 
if(regexp.test(str)) alert('ok');
```

正则表达式“按位”描述规则，是指它是一位一位的描述字符串的构成形式：检查字符串是不是以字母m开头，然后是3个数字，最后以字母n结尾（/^m\d\d\dn$/）

​	/xxx/正斜杆表示这是一个正则表达式，^表示开头，$表示结尾，\d表示1位数字

正则表达式的创建：1、使用/内容/的语法形式；2、使用new RegExp('内容')的形式；typeof检查结果是object。

```js
var regexp = new RegExp('^\\d{6}$');
```



#### 元字符

​	一位指定类型的字符，使用new RegExp('内容')的形式，**反斜杠需要多写一个**

| 元字符 | 功能                                                     |
| ------ | -------------------------------------------------------- |
| \d     | 匹配一个数字                                             |
| \D     | 匹配一个非数字字符                                       |
| \w     | 匹配一个单字字符（字母，数字或者下划线）                 |
| \W     | 匹配一个非单字字符                                       |
| \s     | 匹配一个空白字符，包括空格、制表符和换行符               |
| .      | 任意字符                                                 |
| ^      | 匹配开头                                                 |
| $      | 匹配结尾                                                 |
| \|     | 表示或，表示只匹配指定几项之间的一项正则表达式中使用竖线 |

使用方式：x|y表示匹配x或y，只能匹配到其中一个

```js
var str = 'ab';
var reg = /a|ab/
console.log(reg.exec(str));// a
```

应用：纯数字或者纯字母: 

```js
/^\d+$|^[a-zA-Z]+$/
```

举例：某快递公司运单号形式是这样的：123-4560-789

```js
/^\d{3}-\d{4}-\d{3}$/
```

某产品的验证秘钥形式是这样的：xxx-xxxx-xxx ，其中x表示字母数字或者下划线 

```js
/^\w{3}-\w{4}-\w{3}$/
```



#### 字符的转义

在特殊字符之前得到反斜杠\表示下一个字符不是特殊字符, 不管一个符号有没有特殊意义，都可以在其之前加上一个\以确保它表达的是这个符号本身

- 检查字符串是不是任意字符`/^.$/`

- 检查字符串是不是一个点`/^\.$/`

举例：某产品批号形式为：123.45^67#89

```js
/^\d{3}\.\d{2}\^\d{2}\#\d{2}$/
```

方括号表示法：[xyz]可以创建一个字符集合，表示匹配方括号中的任意字符

举例：某学校的学号规定：第1位是一个字母，b表示本科生，y表示研究生，后面是7位数字

```js
/^[by]\d{7}$/
```

可以使用短横**`-`**来指定一个字符范围，**^表示否定**

| 字符 | 转义             |
| ---- | ---------------- |
| \d   | [0-9]            |
| \D   | [^ 0-9]                  |
| \w   | [A-Z a-z 0-9 _ ] |
| \W   | [^ A-Z a-z 0-9]               |

题目1：请验证某字符串是否是5位字母，大小写均可

```js
/^\[A-Za-z]{5}$/
```

题目2：请验证某字符串是否是5位，且仅有小写字母、点

```js
/^[a-z\.]{5}$/
```

题目3：请验证某字符串是否是4位小写字母，且最后一位不能是m字母

```js
/^[a-z]{3}[a-ln-z]$/ 
```



#### 量词

| 量词  | 意义                                              |
| ----- | ------------------------------------------------- |
| *     | 匹配前一个表达式0次或多次。等价于{0,}，贪婪匹配   |
| +     | 匹配前面一个表达式1次或多次。等价于{1,}，贪婪匹配 |
| ?     | 匹配前面一个表达式0次或1次。等价于{0,1}，贪婪匹配 |
| {n}   | n是一个正整数，匹配了前面一个字符刚好出现了n次    |
| {n,}  | n是一个正整数，匹配了前一个字符至少出现了n次      |
| {n,m} | n和m都是整数，匹配了前面的字符至少n次，最多m次    |

题目1：请验证字符串是否符号手机号码的规则：11位数字，并且肯定以1开头

```js
/^1\d{10}$/
```

题目2：请验证某字符串是否是这样的：以字母开头，中间是任意位数字（最少1位）构成，并以字母结尾

```js
/^[a-zA-Z]\d+[a-zA-Z]$/
```

题目3：请验证某字符串是否符合网址规则：以www.开头，中间是任意位的字符（字母数字下划线），最后以.com结尾，也可以以.com.cn结尾 

```js
/^www\.\w+\.com(\.cn)?$/
```



#### 修饰符

也叫做标志(flags)，用于使用正则表达式实现高级搜索

| 修饰符 | 意义             |
| ------ | ---------------- |
| i      | 不区分大小写搜索 |
| g      | 全局搜索         |

```js
var re = /m/gi;  var re = new RegExp('m', 'gi');
```



#### 正则表达式的相关方法

| 方法       | 作用                                                       |
| ---------- | ---------------------------------------------------------- |
| .test()    | 测试某字符串是否匹配正则表达式，返回布尔值                 |
| .exec()    | 根据正则表达式，在字符串中进行查找，返回结果数组或者null。 |
| .compile() | 可以在脚本执行过程中编译正则表达式，也可以改变已有表达式。 |

```js
console.log(/\d+/.exec('abc123def456hgi789')); // ['123']
```

有“**g**”修饰符的正则表达式将自动成为“有状态”的，可以对单个字符串中的多次匹配结果进行逐条的遍历

```js
var str = 'abc123def456hgi789',result;
var regexp = /\d+/g;
console.log(regexp.exec(str));
console.log(regexp.exec(str));
console.log(regexp.exec(str));
console.log(regexp.exec(str));
// 或者这样写
while(result = regexp.exec(str)){
    console.log(result[0]);
}
```



#### 字符串的相关方法

| 方法      | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| seacrh()  | 在字符串中根据正则表达式进行查找匹配，返回首次**匹配到的位置索引**，查找不到则返回-1 |
| match()   | 在字符串中根据正则表达式进行查找匹配，**返回一个数组**，找不到则返回null |
| replace() | 使用替换字符串**替换掉匹配到的子字符串**，可以使用正则表达式 |
| split()   | **分隔字符串为数组**，可以使用正则表达式                     |

```JS
// 忽略全局匹配修饰符“g”; 
var str = "JavaScript is fun"; 
var p = /a./g;
console.log(str.search(p));// 1
```

```js
var str = 'abc123def456hgi789';
var regexp = /\d+/g;
// seacrh()类似indexOf方法,找不到返回-1
console.log(str.search(regexp));// 3
// match()
console.log(str.match(regexp));//(3) ["123", "456", "789"]
// replace()
console.log(str.replace(/[a-z]+/g,'*'));// 注意+表示贪婪的，尽可能多的连续匹配小写字母 *123*456*789
console.log(str.replace(/[a-z]/g,'*'));// 注意无+表示的 ***123***456***789
// split()分隔字符串拆分为数组
console.log(str.split(regexp));// (4) ["abc", "def", "hgi", ""]
```



#### 正则表达式的应用

进行表单验证（可以搜索引擎查找，拿来即用）

```HTML
<div>
    <p>
        请输入中文姓名：
        <input type="text" value="" id ="nameField">
        <span id ="nameWarning" style="color:red;display: none;">输入的姓名不合法</span>
    </p>
    <p>
        请输入手机号码：
        <input type="text" value="" id ="telField">
        <span id ="telWarning" style="color:red;display: none;">输入的号码不合法</span>
    </p>
    <p>
        请输入邮箱：
        <input type="text" value="" id ="emailField">
        <span id ="emailWarning" style="color:red;display: none;">输入的号码不合法</span>
    </p>
</div>
<script>
    var nameCheck = /^[\u4e00-\u9fa5]{2,4}$/;
    var telCheck = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])d{8}$/;
    var emailCheck = /^\w{2,}\@\w{2,}\.[a-z]{2,4}(\.[a-z]{2,4})?$/;
    var nameField = document.getElementById('nameField');
    var nameWarning = document.getElementById('nameWarning');
    var telWarning = document.getElementById('telWarning');
    var telField = document.getElementById('telField');
    var emailField = document.getElementById('emailField');
    var emailWarning = document.getElementById('emailWarning');
    nameField.onblur = function () {
        if(nameCheck.test(nameField.value)){
            nameWarning.style.display = 'none';
        }else{
            nameWarning.style.display = 'inline';
        }
    }
    telField.onblur = function () {
        if(telCheck.test(telField.value)){
            telWarning.style.display = 'none';
        }else{
            telWarning.style.display = 'inline';
        }
    }
    emailField.onblur = function () {
        if(emailCheck.test(emailField.value)){
            emailWarning.style.display = 'none';
        }else{
            emailWarning.style.display = 'inline';
        }
    }
    
</script>
```



#### 一些问题

1、元字符、量词、方括号表示法必须要熟悉
2、正则表达式和字符串的常用方法要熟悉
3、会用搜索引擎搜索常见的正则表达式
