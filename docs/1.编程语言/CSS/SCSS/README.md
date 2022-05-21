# CSS预处理器

定义：

CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。

通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加了一些编程的特性，无需考虑浏览器的兼容性问题。

例如你可以在CSS中使用**变量、简单的逻辑程序、函数**等等在编程语言中的一些基本特性，可以让你的CSS**更加简洁、适应性更强、可读性更佳，更易于代码的维护**等诸多好处。

 

其它的： 

- Sass（SCSS）✨

  - ```scss
    $color: red;
    
    .test {
      color: $color;
    }
    ```

- LESS✨

- Stylus✨

- Turbine

- Swithch CSS

- CSS Cacheer

- DT CSS

- ...



# Sass

> https://www.sass.hk

- 是一门高于CSS的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通CSS更加强大的功能。
- 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护的管理和样式表
- 基于Ruby

![image-20220113151554283](D:\front-end\study\MarkDown\UI\sass.png)

## Sass和SCSS有什么区别

两者其实是同一种东西，我们平时都称之为Sass，两者之间不同之处有以下两点：

- 文件扩展名不同。`.sass`和`.scss`
- 语法书写方式不同，sass是以严格的缩进式语法规则来书写，不带大括号｛｝和分号；，而SCSS的语法书写和我们的CSS语法书写类似

### Sass语法

```scss
$font-stack: Helvetica, sans-serif; // 定义变量
$primary-color: #333; // 定义变量
body
  font: 100% $font-stack;
  color: $primary-color;
```

### SCSS语法

```scss
$font-stack: Helvetica, sans-serif // 定义变量
$primary-color: #333 // 定义变量
body {
  font: 100% $font-stack
  color: $primary-color
}
```

编译

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```





## Sass编译

编译方法：命令编译，GUI工具编译，自动化编译



### 命令编译

#### 单文件编译

```sh
cmd
sass <要编译的Sass文件路径>/style.scss:<要输出的CSS文件路径>/style.css
```

#### 多文件编译

```sh
sass sass/:css/
```

上面的命令标识将项目中的"sass"文件夹中素有的`.scss or .sass`编译成`.css`文件，并且将这些CSS文件都放在项目中`CSS`文件夹中



#### 缺点以及解决方法

在实际编译过程中，你会发现上面的命令，只能一次性编译。每次保存`.scss`文件之后，都得重新执行一次这一的命令。如此操作太麻烦，其实还有一种方法，就是在Sass编译时，**开启`watch`功能，这一只要你的代码进行任意修改，都能自动检测到代码的变化，并且给你直接编译出来：**

```sh
sass --watch <要编译的Sass文件路径>/style.scss:<要输出的CSS文件路径>/style.css
```



### GUI工具编译

主流的主要有:

- Koala(http://koala-app.com)✨
- Compass.app(http://compass.kkbox.com)
- Scout(http://mhs.github.io/scout-app)
- CodeKit(http://incident57.com/codekit/index.html)✨
- Prepros(http://prepros.id)



### 自动化编译

#### Grunt配置Sass编译的代码

```js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
       dist: {
          files: {
              'style/style.css' : 'sass/style.scss'
          }
       }
    },
    watch: {
       css: {
         files: '**/*.scss',
         tasks: ['sass']
       }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
```



#### Gulp配置Sass编译的代码

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css'))
})
gulp.task('watch', function() {
  gulp.watch('scss/*.scss'. ['sass']);
})
gulp.task('defalut', ['sass', 'watch']);
```





### 常见的编译错误

- 字符编译错误，不支持`GBK`编码，只支持`UTF-8`
- 路径错误，中文字符



### 不同样式风格的输出方法

#### 嵌套输出方式nested

> test.scss

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li { display: inline-block; }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```sh
sass --watch test.scss:test.css --style nested
```

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none; }
nav li { display: inline-block; }
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;  }
```



#### 展开输出方式expanded✨

大括号另起一行

```sh
sass --watch test.scss:test.css --style expanded
```

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none; 
}
nav li {
  display: inline-block; 
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;  
}
```



#### 紧凑输出方式compact

单行CSS样式

```sh
sass --watch test.scss:test.css --style compact
```

```css
nav ul { margin: 0; padding: 0; list-style: none; }
nav li { display: inline-block; }
nav a { display: block; padding: 6px 12px; text-decoration: none;  }
```



#### 压缩输出方式compressed

会去掉标准的Sass和CSS注释及空格

```sh
sass --watch test.scss:test.css --style compressed
```

```css
nav ul{ margin: 0; padding: 0; list-style: none; }nav li{ display: inline-block; }nav a{ display: block; padding: 6px 12px; text-decoration: none;  }
```



## Sass调试

需要浏览器支持`sourcemap`功能即可

```sh
sass --watch --scss --sourcemap style.scsc:style.css
sass --watch styles.scss:style.css
```

### 在线网站

> http://sassmeister.com/



## Sass的基本特性✨

### 《基础》

#### 变量声明

在JS中声明变量都是使用`var`关键词，而sass使用`$`开头

```scss
$good: 750px;
$brand-primary: darken(#42bca, 6.5%) !default; //337ab7
$btn-primary-color: #fff !default;
$btn-primary-bg: $brand-primary !default;
$btn-primary-border: darken($btn-primary-bg, 5%) !default;
```

如果值后面加上`!default`则表示默认值



#### 普通变量与默认变量

##### 普通变量

定义之后可以在全局范围内使用

```scss
$fontSize: 12px;
body {
  font-size: $fontSize;
}
```



##### 默认变量

sass的默认变量需要在值后面加上`!default`即可

```scss
$baseLineHeight: 1.5 !deafult;
body {
  line-Height: $baseLineHeight;
}
```

默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量**之前**重新声明下变量即可。

```scss
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body {
  line-height: $baseLineHeight;
}
```

编译

```css
body {
  line-height: 2;
}
```

编译后不是默认的1.5。默认的变量的价值在进行**组件化开发**的时候会非常有用



#### 变量的调用

```scss
$brand-primary: darken(#42bca, 6.5%) !default; // #337ab7
$btn-primary-color: #fff !default;
$btn-primary-bg: $brand-primary !default;
$btn-primary-border: darken($btn-primary-bg, 5%) !default;
```

在按钮button中调用

```scss
.btn-primary {
  background-color: $btn-primary-bg;
  color: $btn-primary-color;
  border: 1px solid $btn-primary-border;
}
```

编译出来的CSS:

```CSS
.btn-primary {
  background-color: #337ab7;
  color: #fff;
  border: 1px solid #2e6da4;
}
```

 



#### 局部变量和全局变量

```scss
$color: orange !default; // 定义全局变量(在选择器、函数、混合宏...的外面定义的变量)
.block {
  color: $color; // 调用全局变量
}
em {
  $color: red: // 定义局部变量
  a {
    color: $color; // 调用局部变量
  }
}
span {
  color: $color; // 调用全局变量
}
```

编译结果

```css
.block {
  color: orange;
}
em a {
  color: red;
}
span {
  color: orange;
}
```

在元素内部定义的变量不会影响其他元素。**全局变量**就是定义在元素外面的变量，如下代码：

```scss
$color:orange !default;
```

`$color` 就是一个全局变量，而定义在元素内部的变量，比如 `$color:red; `是一个**局部变量**。



##### 全局变量的影子

当在局部范围（选择器内、函数内、混合宏内...）声明一个已经存在于全局范围内的变量时，局部变量就成为了**全局变量的影子**。基本上，**局部变量只会在局部范围内覆盖全局变量**。

```scss
$color: orange !default; // 定义全局变量
.block {
  color: $color; // 调用全局加变量
}
em {
  $color: red;// 定义局部变量（全局变量$color的影子）
  a {
    color: $color; // 调用局部变量
  }
}
```



##### 什么时候声明变量？

只有满足所有下述标准时方可创建新变量：

- 该值至少重复出现了两次
- 该值至少可能会被更新一次
- 该值所有的表现都与变量有关（非巧合）



#### 嵌套

##### 选择器嵌套✨

假设有一段这样的结构：

```html
<header>
<nav>
    <a href=“##”>Home</a>
    <a href=“##”>About</a>
    <a href=“##”>Blog</a>
</nav>
<header>
```

想选中 header 中的 a 标签，在写 CSS 会这样写：

```css
nav a {
  color: red;
}

header nav a {
  color: green;
}
```

那么在 Sass 中，就可以使用选择器的嵌套来实现：

```scss
nav {
  a {
    color: red;
    header & {
      color: green;
    }
  }
}
```



##### 属性嵌套

CSS 有一些属性前缀相同，只是后缀不一样，比如：border-top/border-right，与这个类似的还有 margin、padding、font 等属性。

```css
.box {
  border-top: 1px solid red;
  border-bottom: 1px solid green;
}
```

在 Sass 中

```scss
.box {
  border: {
    top: 1px solid red;
    bottom: 1px solid green;
  }
}
```



##### 伪类嵌套

只不过他需要借助`&`符号一起配合使用。我们就拿经典的`clearfix`为例吧：

```scss
.clearfix {
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
    overflow: hidden;
  }
}
```

编译出来的 CSS：

```css
.clearfix:before, .clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  overflow: hidden;
}
```



###### 避免选择器嵌套

- 选择器嵌套最大的问题是将使最终的代码难以阅读。开发着需要花费巨大精力计算不同缩进级别下的选择器具体的表现效果
- 选择器越具体则声明语句越冗长，而且对最近选择器的引用（&）也月频繁。在某些时候，出现混淆选择器路径和探索下一级选择器的错误率很高





#### 混合宏

如果整个网站中有几处小样式类似，比如颜色，字体等，在 Sass 可以**使用变量**来统一处理，那么这种选择还是不错的。

但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候**混合宏**就会变得非常有意义。



##### 声明混合宏

###### 不带参数混合宏

使用`@mixin`来声明一个混合宏。

```scss
@mixin border-radius {
  -webkit-border-radius: 5px;
  border-radius: 5px
}
```

其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。



###### 带参数混合宏

```scss
@mixin border-radius($radius: 5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
```



###### 复杂的混合宏

大括号里面写上带有**逻辑关系**

```scss
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}
```

这个 box-shadow 的混合宏，带有多个参数，这个时候可以使用“ … ”来替代。简单的解释一下，当 $shadow 的参数数量值大于或等于 1 时，表示有多个阴影值，反之调用默认的参数值` 0 0 4px rgba(0,0,0,.3) `





##### 调用混合宏

匹配了一个关键词`@include`来调用声明好的混合宏

```scss
@mixin border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}
```

在一个按钮中要调用定义好的混合宏“border-radius”，可以这样使用：

```scss
button {
    @include border-radius;
}
```

编译

```css
button {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```





##### 混合宏的参数

###### 传一个不带值的参数

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

在调用的时候可以给这个混合宏传一个参数值：

```scss
.box {
  @include border-radius(3px);
}
```

编译出来的 CSS:

```css
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```



###### 传一个带值的参数

给混合宏的参数传一个**默认值**，例如：

```scss
@mixin border-radius($radius: 3px){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```

在调用类似这样的混合宏时，假设你的页面中的圆角很多地方都是`3px`的圆角，那么这个时候只需要调用默认的混合宏“border-radius”:

```scss
.btn {
  @include border-radius;
}
```

编译出来的 CSS:

```css
.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

但有的时候，页面中有些元素的圆角值不一样，那么可以随机给混合宏传值，如：

```scss
.box {
  @include border-radius(50%);
}
```

编译出来的 CSS:

```css
.box {
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
```



###### 传多个参数✨

```scss
@mixin center($width, $height){
  width: $width;
  height: $height;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -($height) / 2;
  margin-left: -($width) / 2;
}
```

在混合宏`center`就传了多个参数。在实际调用和其调用其他混合宏是一样的：

```scss
.box-center {
  @include center(500px, 300px);
}
```

编译出来CSS：

```css
.box-center {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -250px;
}
```

有一个特别的参数 **`…`** 当混合宏传的参数过多之时，可以使用参数来替代，如：

```scss
@mixin box-shadow($shadows...) {
  @if length($shadows) >= 1 {
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
  } @else {
    $shadows: 0 0 2px rgba(#000, .25);
    -webkit-box-shadow: $shadow;
    box-shadow: $shadow;
  }
}
```

在实际调用中：

```scss
.box {
  @include box-shadow(0 0 1px rgba(#000,.5),0 0 2px rgba(#000, .2));
}
```

编译出来的CSS:

```css
.box {
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.2);
}
```



###### 混合宏的不足

混合宏在实际编码中给我们带来很多方便之处，特别是对于**复用重复代码块**。但其最大的**不足之处**是会**生成冗余的代码块**。

比如在不同的地方调用一个相同的混合宏时。如：

```scss
@mixin border-radius { 
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
.box {
   @include border-radius;
   margin-bottom: 5px;
}
.btn {
   @include border-radius;
}
```

在`.box`和`.btn`中都调用了定义好的“border-radius”混合宏。先来看编译出来的 CSS：

```css
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 5px;
}

.btn {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

Sass 在调用相同的混合宏时，并不能**智能的将相同的样式代码块合并在一起**。这也是 Sass 的混合宏最不足之处。





#### 扩展/继承

继承可以理解为不带参数的混合宏，而且，继承是联合声明，相对于不带参数的混合宏来说，不会产生样式代码块的冗余

![img](https://img.mukewang.com/55261e8200017bfc07910449.jpg)



图中代码显示`.col-sub .block li,.col-extra .block li`继承了 `.item-list ul li”选择器的 “padding : 0;` 和 `ul li`选择器中的 `list-style : none outside none;`以及 * 选择器中的 `box-sizing: inherit;`。



在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承。

```scss
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  backgroud-color: #f36;
  color: #fff;
  @extend .btn;
}
.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```

编译出来之后：

```css
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}
.btn-primary {
  backgroud-color: #f36;
  color: #fff;
}
.btn-second {
  background-color: orange;
  color: #fff;
}
```

在 Sass 中的继承，可以继承类样式块中所有样式代码，而且编译出来的 CSS 会将选择器合并在一起，形成组合选择器：

```css
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}
```





#### 占位符 %placeholder

取代以前 CSS 中的基类造成的代码冗余的情形。因为 `%placeholder` 声明的代码，如果不被 `@extend` 调用的话，不会产生任何代码。来看一个演示：

```scss
%mt5 {
  margin-top: 5px;
}
%pt5 {
  padding-top: 5px;
}
```

这段代码没有被 @extend 调用，所以并没有产生任何代码块：

```scss
.btn {
  @extend %mt5;
  @extend %pt5;
}
.block {
  @extend %mt5;
    span {
       @extend %pt5; 
    }
}
```

编译出来的CSS

```css
.btn, .block {
  margin-top: 5px;
}
.btn, .block span {
  padding-top: 5px;
}
```

从编译出来的 CSS 代码可以看出，通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。这也是我们希望看到的效果，也让你的代码变得更为干净。





#### 混合宏 VS 继承 VS 占位符✨

什么时候用混合宏，什么时候用继承，什么时候使用占位符？



##### Sass 中的混合宏使用

```scss
// SCSS中混合宏使用
@mixin mt($var){
  margin-top: $var;  
}

.block {
  @include mt(5px);

  span {
    display:block;
    @include mt(5px);
  }
}

.header {
  color: orange;
  @include mt(5px);

  span{
    display:block;
    @include mt(5px);
  }
}
```

编译结果：

```css
.block {
  margin-top: 5px;
}

.block span {
  display: block;
  margin-top: 5px;
}

.header {
  color: orange;
  margin-top: 5px;
}

.header span {
  display: block;
  margin-top: 5px;
}
```

**总结：**编译出来的 CSS 清晰告诉了大家，他**不会自动合并相同**的样式代码，如果在样式文件中调用同一个混合宏，会产生多个对应的样式代码，造成**代码的冗余**，这也是 CSSer 无法忍受的一件事情。不过他并不是一无事处，**它可以传参数**。

**个人建议**：如果你的代码块中**涉及到变量，**建议**使用混合宏**来创建相同的代码块。



##### Sass 中继承

```scss
// SCSS 继承的运用
// 无论.mt是否被调用过都会编译成CSS代码
.mt {
  margin-top: 5px; 
}

.block {
  @extend .mt;

  span {
    display:block;
    @extend .mt;
  }
}

.header {
  color: orange;
  @extend .mt;

  span{
    display:block;
    @extend .mt;
  }
}
```

编译结果：

```css
.mt, .block, .block span, .header, .header span {
  margin-top: 5px;
}

.block span {
  display: block;
}

.header {
  color: orange;
}

.header span {
  display: block;
}
```

**总结：**使用继承后，编译出来的 CSS 会将使用**继承的代码块合并到一起**，通过**组合选择器**的方式向大家展现，比如 .mt, .block, .block span, .header, .header span。这样编译出来的代码相对于混合宏来说要干净的多，也是 CSSer 期望看到。但是它**不能传变量参数**。

**个人建议**：如果你的代码块**不需要传任何变量参数**，而且**有一个基类已在文件**中存在，那么建议使用 Sass 的继承。



##### Sass中占位符

```scss
// SCSS中占位符的使用
// 只有%mt被调用过才会编译成CSS代码
%mt{
  margin-top: 5px;  
}

.block {
  @extend %mt;

  span {
    display:block;
    @extend %mt;
  }
}

.header {
  color: orange;
  @extend %mt;

  span{
    display:block;
    @extend %mt;
  }
}
```

编译结果：

```css
.block, .block span, .header, .header span {
  margin-top: 5px;
}

.block span {
  display: block;
}

.header {
  color: orange;
}

.header span {
  display: block;
}
```

**总结：**编译出来的 CSS 代码和使用继承基本上是相同，只是不会在代码中生成占位符 mt 的选择器。那么占位符和继承的主要区别的，“占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。”



##### 表格归纳

|          | 混合宏                                                       | 继承                                                         | 占位符                                                       |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 声明方式 | @mixin                                                       | .class                                                       | %placeholder                                                 |
| 调用方式 | @include                                                     | @extend                                                      | @extend                                                      |
| 使用环境 | 如果相同代码块需要在不同的环境传递不同的值时，可以通过混合宏来定义重复使用的代码块。<br />**不足**：就是编译出来的CSS代码多次出现调用的混合宏对应的代码块，使用文件变得臃肿，代码冗余。 | 如果相同代码块不需要传递不同的值，并且此代码块已经在Sass文件中定义，可以通过Sass的继承来调用已存在的基类。使用继承将会将调用相同基类的代码合并在一起。<br />**不足**：如果基类并不存在于HTML结构时，不管调用与不调用，在编译出来的CSS中都将产生基类对应的样式代码。 | 占位和继承基本类似，唯一不同的是，相同代码块并没有在基类中存在，而是额外声明。如果不调用已声明的占位符，将不会产生任何样式代码，如果在不同选择器调用占位符，那么编译出来的CSS代码将会把相同的代码合并在一起。 |



#### 插值#{}

更干净的、高效的和面向对象的 CSS

```scss
#properties: (margin, padding);

@mixin set-value($side, $value) {
  @each #prop in $properties {
    #{$prop}-#{$side}: $value;
  }
}
.login-box {
  @include set-value(top, 14px)
}
/**
 * #propretimes: (margin, padding);理解为一个数组 propretimes = [ margin, padding ]
 * set-value是一个多参数混合宏
 * @each #prop in  $propretimes  ≈  for prop in propretimes
 * #{$prop}-#{$side}: $value;  ≈  return `${prop}-${side}: ${value}`  
/
```

@each...in...循环语句

它可以让变量和属性工作的很完美，上面的代码编译成 CSS：

```css
.login-box {
  margin-top: 14px;
  padding-top: 14px;
}
```

这是 Sass 插值中一个简单的实例。当你想设置属性值的时候你可以使用字符串插入进来。另一个有用的用法是构建一个选择器。可以这样使用：

```scss
@mixin generate-sizes($class, $small, $medium, $big) {
  .#{$class}-small { font-size: $samll; } // 12px
  .#{$class}-medium { font-size: $medium; } // 20px
  .#{$class}-big { font-size: $big; } // 40px
}
@include generate-sizes("header-text", 12px, 20px, 40px)
```

编译出来的 CSS:

```css
.header-text-small { font-size: 12px; }
.header-text-medium { font-size: 20px; }
.header-text-big { font-size: 40px; }
```

一旦你发现这一点，你就会想到超级酷的 mixins，用来生成代码或者生成另一个 mixins。

然而，这并不完全是可能的。第一个限制，这可能会很删除用于 Sass 变量的插值。

```scss
// 变量
$margin-big: 40px;
$margin-medium: 20px;
$margin-small: 12px;
// 混合宏
@mixin set-value($size) {
  margin-top: $margin-#{$size};
  // 想调用 margin-top: $margin-big
}
// 调用
.login-box {
  @include set-value(big);
}
```

编译结果：

```sh
Undefined variable: "$margin-".

error test.scss (Line 5: Undefined variable: “$margin-".)
```

所以，`#{}`语法并不是随处可用，你也不能在 mixin 中调用：

```scss
@mixin updated-status {
  margin-top: 20px;
  background: #F00;
}
$flag: "status";
.navigation {
  @include updated-#{$flag};
  // @include updated-status
}
```

编译结果：

```sh
Error: property "#{$flag}" must be followed by a ':'
error test.scss (Line 7: Invalid CSS after "...nclude updated-": expected "}", was "#{$flag};")
```

幸运的是，可以使用 @extend 中使用插值。例如：

```scss
%updated-status {
  margin-top: 20px;
  background: #F00;
}
.selected-status {
  font-weight: bold;
}
$flag: "status";
.navigation {
  @extend %updated-#{$flag};
  @extend .selected-#{$flag};
}
```

上面的 Sass 代码是可以运行的，可以动态的插入 .class 和 %placeholder。当然他们不能接受像 mixin 这样的参数，上面的代码编译出来的 CSS:

```css
.navigation {
  margin-top: 20px;
  background: #F00;
}
.selected-status, .navigation {
  font-weight: bold;
}
```



#### 注释

1、类似CSS的注释方式，使用`/*...*/`

2、类似JS的注释方式，使用`//`

```scss
// 定义一个占位符
%mt5 {
  margin-top: 5px;
}
/* 调用一个占位符 */
.box {
  @extend %mt5;
}
```

编译：

```css
@charset "UTF-8";
.box {
  margin-top: 5px;
}

/* 调用一个占位符 */
```



#### 数据类型

 Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型：

- 数字：如1，2，13，`10px`;
- 字符串：有引号字符串或无引号字符串，如`"foo"`、`'bar'`、`baz`;
- 颜色：blue、`#04a3f9`、`rgba(255, 0, 0, 0.5)`
- 布尔值：如 true、false
- 空值：如null
- 列表值：用空格或者逗号分开，如`1.5em 1em 0 2em`、`Helvetica, Arial, sans-serif`

`SassScript`也支持其他 CSS 属性值（property value），比如 **Unicode 范围**，或 **!important** 声明。

然而，Sass 不会特殊对待这些属性值，一律视为**无引号字符串** (unquoted strings)。



#### 字符串

SassScript 支持 CSS 的两种字符串类型：

- **有引号字符串**(quoted strings)，如`"Lucida Grande"`、`'http://sass-lang.com'`
- **无引号字符串** (unquoted strings)，如`sans-serifbold`

**在编译 CSS 文件时不会改变其类型。**

只有一种情况例外，使用 **#{ }插值语句 (interpolation) 时**，**有引号字符串将被编译为无引号字符串**，这样方便了在混合指令 (mixin) 中引用选择器名。

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi Firefox users!";
  }
}
@include firefox-message(".header") // 变成无引号字符串了
```

编译为：

```css
body.firefox .header:before {
  content: "Hi Firefox users!";
}
```

需要注意的是：当 deprecated = property syntax 时 （暂时不理解是怎样的情况），所有的字符串都将被编译为无引号字符串，不论是否使用了引号。



#### 值列表

所谓值列表(lists)是指Sass如何处理CSS中：

```css
margin: 10px 15px 0 0
```

或者

```css
font-face: Helvetica, Arial, sans-serif
```

像上面这样通过**空格或者逗号分隔**的一系列的值。

事实上，独立的值也被视为值列表——只包含一个值的值列表。

Sass列表函数（Sass list functions）赋予了值列表更多功能：

- nth函数可以直接访问值列表
- join函数可以将多个值列表连接在一起
- append函数可以在值列表中添加值
- @each规则能够给值列表中的每个项目添加样式

值列表中可以再包含值列表，比如 `1px 2px, 5px 6px `是包含`1px 2px `与 `5px 6px`两个值列表的值列表。

如果内外两层值列表使用相同的分隔方式，要用圆括号包裹内层，所以也可以写成`(1px 2px) (5px 6px)`。

当值列表被编译为CSS时，Sass不会添加任何圆括号，因为CSS不允许这样做。

包含两个值列表的值列表`(1px 2px) (5px 6px)`与四个值的值列表`1px 2px 5px 6px` 在编译后的CSS文件中是一样的



可以用()表示空的列表，这样不可以直接编译成CSS，比如编译font-family:()时，Sass将会报错。

如果值列表中包含空的值列表或空值，编译时将**清除空值**，比如`1px 2px () 3px` 或 `1px 2px null 3px`





#### 运算

程序中的运算是常见的一件事情，但在 CSS 中能做运算的，到目前为止仅有 **calc() 函数**可行

##### 加法

加法运算是 Sass 中运算中的一种，在变量或属性中都可以做加法运算。如：

```scss
/*
in是英寸。
8in即8英寸。
1英寸约=2.54厘米,
1英寸大约是96像素
*/
.box {
  width: 20px + 8in; // in = 96
}
```

编译

```css
.box {
  width: 788px;
}
```

但对于携带不同类型的单位时，在 Sass 中计算会报错，如下例所示：

```scss
.box {
  width: 20px + 1em;
}
```

```sh
Error: Incompatible units: 'em' and 'px'.
```



##### 减法

```scss
$full-width: 960px;
$sidebar-width: 200px;
.content {
  width: $full-width - $sidebar-width;
}
```

编译出来的 CSS 如下：

```css
.content {
  width: 760px;
}
```

同样的，运算时碰到不同类型的单位时，编译也会报错，如：

```scss
$full-width: 960px;
.content {
  width: $full-width - 1em;
}
```

```sh
Error: Incompatible units: 'em' and 'px'.
```



##### 乘法

Sass 中的乘法运算和前面介绍的加法与减法运算还略有不同。

虽然他也能够支持多种单位（比如 em ,px , %），但当**一个单位同时声明两个值时会有问题。**

比如下面的示例：

```scss
.box {
  width: 10px * 2px;
}
```

```sh
Error: 20px*px isn't a valid CSS value.
```

如果进行乘法运算时，两个值单位相同时，只需要**为一个数值提供单位即可**。上面的示例可以修改成：

```
.box {
  width: 10px * 2;
}
```

编译

```css
.box {
  width: 20px;
}
```

Sass 的乘法运算和加法、减法运算一样，在运算中有不同类型的单位时，也将会报错。如下面的示例：

```scss
.box {
  width: 20px * 2em;
}
```

```sh
Error: 40em*px isn't a valid CSS value.
```



##### 除法

“**/**” 符号在 CSS 中已做为一种符号使用。因此在 Sass 中做除法运算时，直接使用“/”符号做为除号时，将不会生效，编译时既得不到我们需要的效果，也不会报错。

简单的示例：

```scss
.box {
  width: 100px / 2;
}
```

编译：

```css
.box {
  width: 100px / 2;
}
```

要修正这个问题，只需要给运算的外面添**加一个小括号( )**即可：

```scss
.box {
  width: (100px / 2);
}
```

编译

```css
.box {
  width: 50px;
}
```

除了上面情况带有小括号，“/”符号会当作除法运算符之外，如果“/”符号**在已有的数学表达式中时，也会被认作除法符号**。如下面示例：

```scss
.box {
  width: 100px / 2 + 2in;  
}
```

编译出来的CSS：

```css
.box {
  width: 242px;
}
```

另外，在 Sass 除法运算中，**当用变量进行除法运算时**，“/”符号也会自动被识别成除法，如下例所示：

```scss
$width: 1000px;
$nums: 10;
.item {
  width: $width / 10;
}
.list {
  width: $width / $nums;
}
```

编译出来的CSS:

```css
.item {
  width: 100px;
}
.list {
  width: 100px;
}
```



综合上述，”/ ”符号被当作除法运算符时有以下几种情况：

- 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
- 如果数值被圆括号包围。
- 如果数值是另一个数学表达式的一部分。

```scss
p {
  font: 10px / 8px; // 纯CSS，NO
  $width: 1000px;
  width: $width / 2; // 使用了变量，YES
  width: round(1.5) / 2; // 使用了函数，yes
  height: (500px / 2); // 使用了圆括号，yes
  margin-left: 5px + 8px / 2px; //使用了加(+),yes
}
```

编译：

```css
p {
  font: 10px / 8px;
  width: 500px;
  width: 1;
  height: 250px;
  margin-left: 9px;
}
```



**如果两个值带有相同的单位值时，除法运算之后会得到一个不带单位的数值。**✨

```scss
.box {
  width: (1000px / 100px); 
}
```

编译：

```css
.box {
  width: 10;
}
```



##### 变量计算

```scss
$content-width: 720px;
$sidebar-width: 220px;
$gutter: 20px;

.container {
  width: $content-width + $sidebar-width + $gutter;
  margin: 0 auto;
}
```

编译出来的CSS

```css
.container {
  width: 960px;
  margin: 0 auto;
}
```



##### 颜色运算

所有算数运算都支持颜色值，并且是分段运算的。也就是说，红、绿和蓝各颜色分段单独进行运算。如：

```scss
p {
  color: #010203 + #040506;
}
```

按位相加，计算公式为 01 + 04 = 05、02 + 05 = 07 和 03 + 06 = 09， 并且被合成为：

```css
p {
  color: #050709;
}
```



算数运算也能将数字和颜色值 一起运算，同样也是分段运算的。如：

```scss
p {
  color: #010203 * 2;
}
```

计算公式为：01 * 2 = 02、02 * 2 = 04 和 03 * 2 = 06， 并且被合成为：

```css
p {
  color: #020406;
}
```



##### 字符运算

在 Sass 中可以通过加法符号“+”来对字符串进行连接。例如：

```scss
$content: "Hello" + "" + "Sass!";
.box:before {
  content: " #{$content} ";
}
```

编译出来的CSS：

```css
.box:before {
  content: " HelloSass! ";
}
```

除了在变量中做字符连接运算之外，还可以直接通过 +，把字符连接在一起：✨

```scss
div {
  cursor: e + -resize;
}
```

编译出来的CSS:

```css
div {
  cursor: e-resize;
}
```

注意，如果**有引号**的字符串被添加了一个**没有引号**的字符串 （带引号的字符串在 + 符号左侧）， 结果会是一个**有引号**的字符串。 

同样的，如果一个**没有引号**的字符串被添加了一个**有引号**的字符串 （没有引号的字符串在 + 符号左侧）， 结果将是一个**没有引号**的字符串。  

```scss
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

编译出来的 CSS：

```css
p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```



### 

### 《控制命令》

#### @if 指令

是一个 SassScript，它可以根据条件来处理样式块，如果条件为 true 返回一个样式块，反之 false 返回另一个样式块。在 Sass 中除了 @if 之，还可以配合 @else if 和 @else 一起使用。

假设要控制一个元素隐藏或显示，我们就可以定义一个混合宏，通过 @if...@else... 来判断传进参数的值来控制 display 的值。如下所示：

```scss
@mixin blockOrHidden($boolean: true) {
  @if $boolean {
    @debug "$boolean is #{$boolean}";
    display: block;
  }
  @else {
    @debug "$boolean is #{$boolean}";
    display: none;
  }
}

.block {
   @include blockOrHidden;
}
.hidden {
   @include blockOrHidden(false);
}
```

编译出来的CSS:

```css
.block {
  display: block;
}

.hidden {
  display: none;
}
```



#### @for循环

在 Sass 的 @for 循环中有两种方式：

```scss
@for $i from <start> through <end>
@for $i from <start> to <end>
```

- $i 表示变量
- start 表示起始值
- end 表示结束值

这两个的区别是关键字 **through 表示包括 end 这个**数，而 **to 则不包括 end 这个数**

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i };
}
```

编译出来的 CSS:

```css
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```

再来个 to 关键字的例子：

```scss
@for $i from 1 to 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

编译出来的 CSS:

```css
.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}
```



**@for应用在网格系统生成各个格子 class 的代码：**

```scss
$grid-prefix: span !default;
$grid-width: 60px !default;
$grid-gutter: 20px !default;

%grid {
  float: left;
  margin-left: $grid-gutter / 2;
  margin-right: $grid-gutter / 2;
}
@for $i from 1 through 12 {
  .#{$grid-prefix}#{$i} {
    width: $grid-width * $i + $grid-gutter * ($i - 1);
    @extend %grid;
  }
}
```

编译出来的 CSS:

```CSS
.span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12 {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

.span1 {
  width: 60px;
}

.span2 {
  width: 140px;
}

.span3 {
  width: 220px;
}

.span4 {
  width: 300px;
}

.span5 {
  width: 380px;
}

.span6 {
  width: 460px;
}

.span7 {
  width: 540px;
}

.span8 {
  width: 620px;
}

.span9 {
  width: 700px;
}

.span10 {
  width: 780px;
}

.span11 {
  width: 860px;
}

.span12 {
  width: 940px;
}
```

将上面的示例稍做修改，将 @for through 方式换成 @for to:：

```scss
@for $i from 1 to 13 {
  .#{$grid-prefix}#{$i} {
    width: $grid-width * $i + $grid-gutter * ($i - 1);
    @extend %grid;
  }
}
```



#### @while循环

简单用例：

```scss
$types: 4;
$type-width: 20px;

@while $types > 0 {
  .while-#{$types} {
    width: $type-width + $types;
  }
  $types: $types - 1;
}
```

编译出来的 CSS:

```css
.while-4 {
  width: 24px;
}
.while-3 {
  width: 23px;
}
.while-2 {
  width: 22px;
}
.while-1 {
  width: 21px;
}
```



#### @each循环

遍历一个列表，然后从列表中取出对应的值。

```scss
@each $item in <list>
```

在下面的例子中你可以看到，$var 就是一个变量名，<list> 是一个 SassScript 表达式，将返回一个列表值。

变量 $var 会在列表中做遍历，并且遍历出与 $var 对应的样式块。

```scss
$list: adam john wynn mason kuroir; // list就是一个列表

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/avatars/#{$author}.png") no-repeat; 
        }
    }
}
.author-images{
   @include author-images;
}
```

编译出 CSS:

```css
.author-images .photo-adam {
  background: url("/images/avatars/adam.png") no-repeat;
}

.author-images .photo-john {
  background: url("/images/avatars/john.png") no-repeat;
}

.author-images .photo-wynn {
  background: url("/images/avatars/wynn.png") no-repeat;
}

.author-images .photo-mason {
  background: url("/images/avatars/mason.png") no-repeat;
}

.author-images .photo-kuroir {
  background: url("/images/avatars/kuroir.png") no-repeat;
}
```





### 《字符串函数与数字函数》

在 Sass 中除了可以定义变量，具有 @extend、%placeholder 和 mixins 等特性之外，还自备了一系列的函数功能。其主要包括：

- 字符串函数
- 数字函数
- 列表函数
- 颜色函数
- Introspection 函数
- 三元函数
- **自定义函数**



#### 字符串函数

字符串函数是用来处理字符串的函数。

##### unquote()

主要是用来删除一个字符串中的引号，如果这个字符串没有带有引号，将返回原始的字符串。

```scss
.test1 {
    content:  unquote('Hello Sass!') ;
}
.test2 {
    content: unquote("'Hello Sass!");
}
.test3 {
    content: unquote("I'm Web Designer");
}
.test4 {
    content: unquote("'Hello Sass!'");
}
.test5 {
    content: unquote('"Hello Sass!"');
}
.test6 {
    content: unquote(Hello Sass);
}
```

编译后的 css 代码：

```css
.test1 {
  content: Hello Sass!;
}

.test2 {
  content: 'Hello Sass!;
}

.test3 {
  content: I'm Web Designer;
}

.test4 {
  content: 'Hello Sass!';
}

.test5 {
  content: "Hello Sass!";
}

.test6 {
  content: Hello Sass;
}
```

> 注意：unquote( ) 函数只能删除字符串最前和最后的引号（双引号或单引号），而无法删除字符串中间的引号。
>
> 如果字符没有带引号，返回的将是字符串本身。



##### quote()

给字符串添加引号。字符串自身带有引号会统一换成双引号 ""

```scss
.test1 {
    content: quote('Hello Sass!');
}
.test2 {
    content: quote("Hello Sass!");
}
.test3 {
    content: quote(ImWebDesigner);
}
.test4 {
    content: quote(' ');
}
```

编译出来的 css 代码：

```css
.test1 {
  content: "Hello Sass!";
}

.test2 {
  content: "Hello Sass!";
}

.test3 {
  content: "ImWebDesigner";
}

.test4 {
  content: " ";
}
```

> 使用 quote() 函数中使用多个空格视为一个空格，且null也表示为空

```scss
.test11 {
  content: quote(Hello  null  Sass);
}
```

```css
.test11 {
  content: "Hello Sass";
}
```

> 碰到特殊符号，比如： !、?、> 等，除中折号 - 和 下划线_ 都需要使用双引号括起，否则编译器在进行编译的时候同样会报错：

```scss
.test11 {
  content: quote(Hello '>');
}
```

```css
.test11 {
  content: 'Hello ">"';
}
```



##### To-upper-case()

将字符串小写字母转换成大写字母。如：

```scss
.test {
  text: to-upper-case(aaaa);
  text: to-upper-case(aA-aAAA-aaa);
}
```

编译出来的 css 代码：

```css
.test {
  text: AAAA;
  text: AA-AAAA-AAA;
}
```



##### To-lower-case()

将字符串转换成小写字母：

```scss
.test {
  text: to-lower-case(AAAAA);
  text: to-lower-case(aA-aAAA-aaa);
}
```

编译出来的 css 代码：

```css
//CSS
.test {
  text: aaaaa;
  text: aa-aaaa-aaa;
}
```



#### 数字函数

针对数字方面提供一系列的函数功能：

##### percentage($value)

 将一个不带单位的数转换成百分比值；

```sh
>> percentage(.2)
20%
>> percentage(2px / 10px)
20%
>> percentage(2em / 10em)
20%
>>
```

```scss
.footer{
    width : percentage(.2)
}
```

编译后的 css 代码：

```css
.footer{
    width : 20%
}
```

带有单位的值

```scss
.test11 {
  width: percentage(2px / 10em);
}
// Error: argument $number of `percentage($number)` must be unitless
```



##### round($value)

将数值(可以**携带单位**的任何数值)**四舍五入**，转换成一个最接近的整数；

```sh
>> round(12.3)
12
>> round(12.5)
13
>> round(1.49999)
1
>> round(2.0)
2
>> round(20%)
20%
>> round(2.2%)
2%
>> round(3.9em)
4em
>> round(2.3px)
2px
>> round(2px / 3px)
1
>> round(1px / 3px)
0
>> round(3px / 2em)
2px/em
```

```scss
.footer {
   width:round(12.3px)
}
```

编译后的 css 代码：

```css
.footer {
  width: 12px;
}
```



##### ceil($value)

将大于自己的小数转换成下一位整数；

```sh
>> ceil(2.0)
2
>> ceil(2.1)
3
>> ceil(2.6)
3
>> ceil(2.3%)
3%
>> ceil(2.3px)
3px
>> ceil(2.5px)
3px
>> ceil(2px / 3px)
1
>> ceil(2% / 3px)
1%/px
>> ceil(1em / 5px)
1em/px
```

```
.footer {
   width:ceil(12.3px);
}
```

编译后的 css 代码：

```
.footer {
  width: 13px;
}
```



##### floor($value)

将一个数去除他的小数部分；

```
>> floor(2.1)
2
>> floor(2.5)
2
>> floor(3.5%)
3%
>> floor(10.2px)
10px
>> floor(10.8em)
10em
>> floor(2px / 10px)
0
>> floor(3px / 1em)
3px/em
```

```
.footer {
   width:floor(12.3px);
}
```

编译后的 css 代码：

```
.footer {
  width: 12px;
}
```



##### abs($value)

返回一个数的绝对值；

```
>> abs(10)
10
>> abs(-10)
10
>> abs(-10px)
10px
>> abs(-2em)
2em
>> abs(-.5%)
0.5%
>> abs(-1px / 2px)
0.5
```

```
.footer {
   width:abs(-12.3px);
}
```

编译后的 css 代码：

```
.footer {
  width: 12.3px;
}
```



##### **min($numbers…)**

找出几个数值之间的最小值；

```
>> min(1,2,1%,3,300%)
1%
>> min(1px,2,3px)
1px
>> min(1em,2em,6em)
1em
```

出现两种不同类型的单位，将会报错误信息：

```scss
.test11 {
  width: min(1px,1em);
}
// Internal Error: Incompatible units: 'em' and 'px'.
```



##### **max($numbers…)**

找出几个数值之间的最大值；

```
>> max(1, 5)
5
>> max(1px, 5px)
5px
```

```
.test11 {
  width: max(1, 3px, 5%, 6);
}
// Internal Error: Incompatible units: 'px' and '%'.
```



##### **random()**

获取随机数

```
>> random()
0.03886
>> random()
0.66527
>> random()
0.8125
>> random()
0.26839
>> random()
0.85063
```





#### 列表函数

列表函数主要包括一些对列表参数的函数使用

##### length($list)

返回一个列表的长度值；

```
>> length(10px)
1
>> length(10px 20px (border 1px solid) 2em)
4
>> length(border 1px solid)
3
```

列表参数之间使用空格隔开，不能使用逗号，否则函数将会出错：

```
>> length(10px,20px,(border 1px solid),2em)
SyntaxError: wrong number of arguments (4 for 1) for `length'
>> length(1,2px)
SyntaxError: wrong number of arguments (2 for 1) for `length'
```



##### nth($list, $n)

返回一个列表中指定的某个标签值

```scss
nth($list, $n);
```

&n （ > 0）=>  1 是指列表中的第一个标签值，2 是指列给中的第二个标签值，依此类推。如：

```
>> nth(10px 20px 30px,1)
10px
>> nth((Helvetica,Arial,sans-serif),2)
"Arial"
>> nth((1px solid red) border-top green,1)
(1px "solid" #ff0000)
```



##### join($list1, $list2, [$separator])

**只能将两个列**给连接在一起，变成一个列表；

```
>> join(10px 20px, 30px 40px)
(10px 20px 30px 40px)
>> join((blue,red),(#abc,#def))
(#0000ff, #ff0000, #aabbcc, #ddeeff)
>> join((blue,red),(#abc #def))
(#0000ff, #ff0000, #aabbcc, #ddeeff)
```

两个以上：

```
>> join((blue red), join((#abc #def),(#dee #eff)))
(#0000ff #ff0000 #aabbcc #ddeeff #ddeeee #eeffff)
```

参数 $separator，给列表函数连接列表值，使用的分隔符号，

- auto（默认值）

- comma(表项值之间使用逗号（,）分隔)
- space(列表项值之间使用空格（ ）分隔。)

| auto                                            | 效果                                                         | 示例代码                                                     |
| ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 列表中的第一个列表中每个值之间使用的是逗号（,） | 合并的列表中每个列表项之间使用逗号,分隔                      | `>> join((blue, red, #eff),(green orange))`<br />`(#0000ff, #ff0000, #eeffff, #008000, #ffa500)` |
| 列表中的第一个列表中只有一个列表项              | 每个列表项目这间使用的分隔符号会**根据第二个列表项**中使用的，<br />如果第二列表项中使用是,分隔，则使用逗号分隔；<br />如果第二列项之间使用的空格符，则使用空格分隔： | `>> join(blue,(green, orange)) `<br />`(#0000ff, #008000, #ffa500) `<br />`>> join(blue,(green orange)) `<br />`(#0000ff #008000 #ffa500)` |
| 列表中的第一个列表中每个值之间使用的是空格      | 合并的列表中每个列表项之间使用空格分隔                       | `>> join((blue green),(red,orange))`<br />` (#0000ff #008000 #ff0000 #ffa500) `<br />`>> join((blue green),(red orange))` <br />`(#0000ff #008000 #ff0000 #ffa500)` |
| 两个列表中的列表项小于1时                       | 将会以空格分隔                                               | `>> join(blue,red)`<br /> `(#0000ff #ff0000)`                |

> 建议: 指定$separator参数进行使用join函数

```
>> join(blue,red,comma)
(#0000ff, #ff0000)
>> join(blue,red,space)
(#0000ff #ff0000)
>> join((blue green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join((blue, green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue, green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join(blue,(red,orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red,orange),space)
(#0000ff #ff0000 #ffa500)
>> join(blue,(red orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red orange),space)
(#0000ff #ff0000 #ffa500)
```



##### append($list1, $val, [$separator])

将某个值放在列表的最后；

```
>> join(blue,red,comma)
(#0000ff, #ff0000)
>> join(blue,red,space)
(#0000ff #ff0000)
>> join((blue green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join((blue, green),(red,orange),comma)
(#0000ff, #008000, #ff0000, #ffa500)
>> join((blue, green),(red,orange),space)
(#0000ff #008000 #ff0000 #ffa500)
>> join(blue,(red,orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red,orange),space)
(#0000ff #ff0000 #ffa500)
>> join(blue,(red orange),comma)
(#0000ff, #ff0000, #ffa500)
>> join(blue,(red orange),space)
(#0000ff #ff0000 #ffa500)
```

没有明确的指定 $separator 参数值，其默认值是 auto。

- 如果列表**只有一个**列表项时，那么插入进来的值将和原来的值会以**空格**的方式分隔。
- 如果列表中列表项是以**空格**分隔列表项，那么插入进来的列表项也将以**空格**分隔；
- 如果列表中列表项是以**逗号**分隔列表项，那么插入进来的列表项也将以**逗号**分隔。

可以显示的设置 $separator 参数

- 如果取值为 comma 将会以逗号分隔列表项
- 如果取值为 space 将会以空格分隔列表项

```
>> append((blue green), red, comma)
(#0000ff, #008000, #ff0000)
>> append((blue green), red, space)
(#0000ff #008000 #ff0000)
>> append((blue, green), red, comma)
(#0000ff, #008000, #ff0000)
>> append((blue, green), red, space)
(#0000ff #008000 #ff0000)
>> append(blue, red, comma)
(#0000ff, #ff0000)
>> append(blue, red, space)
(#0000ff #ff0000)
```



##### zip($lists…)

将几个列表结合成一个多维的列表；

```
>> zip(1px 2px 3px, solid dashed dotted, green blue red)
((1px "solid" #008000), (2px "dashed" #0000ff), (3px "dotted" #ff0000))
```

每个单一的列表个数值可以是不相同的：

```
.test11 {
  border: zip(1px 2px 3px, solid dotted, green blue red);
}
```

```css
.test11 {
  border: 1px solid green, 2px dotted blue;
}
```

每个单一列表的值对应的取其相同位置值：

| --- List --- | --- nth(1) --- | --- nth(2) --- | --- nth(3) --- |
| ------------ | -------------- | -------------- | -------------- |
| List1        | 1px            | 2px            | 3px            |
| List2        | solid          | dashed         | dotted         |
| List3        | green          | blue           | red            |

zip()函数组合（竖排方向）出来就成了：

```css
1px solid green, 2px dashed blue, 3px dotted red
```



##### index($list, $value)

返回一个值在列表中的位置值（已1开头）。

```
>> index(1px solid red, 1px)
1
>> index(1px solid red, solid)
2
>> index(1px solid red, red)
3
```

如果指定的值**不在列表中**（没有找到相应的值），那么返回的值将是 **false**。**验证为无返回值**





#### Introspection函数

主要用来对值做一个判断的作用

##### type-of($value)

返回一个值的类型

- number 为数值型。
- string 为字符串型。
- bool 为布尔型。
- color 为颜色型。

```
>> type-of(100)
"number"
>> type-of(100px)
"number"
>> type-of("asdf")
"string"
>> type-of(asdf)
"string"
>> type-of(true)
"bool"
>> type-of(false)
"bool"
>> type-of(#fff)
"color"
>> type-of(blue)
"color"
>> type-of(1 / 2 = 1)
"string"
```



##### unit($number)

返回一个值的单位，复杂的计算时，其能根据运算得到一个“多单位组合”的值，不过只充许**乘、除**运算：

```
>> unit(100)
""
>> unit(100px)
"px"
>> unit(20%)
"%"
>> unit(1em)
"em"
>> unit(10px * 3em)
"em*px"
>> unit(10px / 3em)
"px/em"
>> unit(10px * 2em / 3cm / 1rem)
"em/rem"
```

但加、减碰到不同单位时，unit() 函数将会报错，`除 px 与 cm、mm `运算之外：

```
>> unit(1px + 1cm)
"px"
>> unit(1px - 1cm)
"px"
>> unit(1px + 1mm)
"px"
```

```SCSS
.test11 {
  width: unit(10px * 2em - 3cm / 1rem);
}
// Error: Incompatible units: 'cm/rem' and 'em*px'.
.test11 {
  width: unit(10px * 2em - 1px / 1rem);
}
// Error: Incompatible units: 'px/rem' and 'em*px'.
```

unit() 函数对于单位运算相对来说也没有规律，而且有些单位也无法整合成一个单位，对于我们在 CSS 中运用中并不适合，比如：

```
>> unit(10px * 3em)
"em*px"
>> unit(10px / 3em)
"px/em"
>> unit(10px * 2em / 3cm / 1rem)
"em/rem"
```



##### unitless($number)

判断一个值是否带有单位，不带单位返回的值为 true，反之为 false

```
>> unitless(100)
true
>> unitless(100px)
false
>> unitless(100em)
false
>> unitless(100%)
false
>> unitless(1 /2 )
true
>> unitless(1 /2 + 2 )
true
>> unitless(1px /2 + 2 )
false
```



##### comparable($number-1, $number-2)

判断两个值是否可以做加、减和合并，可以返回的值为 true，反之为 false

```
>> comparable(2px,1px)
true
>> comparable(2px,1%)
false
>> comparable(2px,1em)
false
>> comparable(2rem,1em)
false
>> comparable(2px,1cm)
true
>> comparable(2px,1mm)
true
>> comparable(2px,1rem)
false
>> comparable(2cm,1mm)
true
```



#### Miscellaneous函数

三元条件函数

```scss
if($condition, $if-true, $if-false)
```

```
>> if(true, 1px, 2px)
1px
>> if(false, 1px, 2px)
2px
```





### 《Map》

Sass 的 map 常常被称为数据地图，也有人称其为数组，因为他总是以**`key:value`**成对的出现，但其更像是一个 **`JSON`** 数据。

```scss
{
  "empoloyees": [
    { "firstName": "John", "lastName": "Doe" },  
    { "firstName": "Anna", "lastName": "Smith" },  
    { "firstName": "Peter", "lastName": "Jones" }
  ]
}
```

 Sass 的 map 长得与 JSON 极其相似：

```scss
$map: (
  $key1: value1,
  $key2: value2,
  $key3: value3
);
```

1、首先有一个类似于 Sass 的变量一样，用个 $ 加上命名空间来声明 map。

2、后面紧接是一个小括号 ()

3、将数据以 `key:value` 的形式赋予，其中 key 和 value 是成对出现

4、并且每对之间使用逗号 (,) 分隔，其中最后一组后面没有逗号。



其中键 key 是用来查找相关联的值 value。使用 map 可以很容易收集键的值和动态插入。

```scss
$default-color: #fff !default;
$primary-color: #22ae39 !default;
```

使用 map 可以更好的进行管理：

```scss
$color: (
  default: #fff,
  primary: #22ae39
);
```

如果哪一天，需要新增加颜色变量值，在 map 中可以非常随意的添加：

```scss
$color: (
    default: #fff,
    primary: #22ae39,
    negative: #d9534f
);
```



#### map 嵌套 map

```scss
$map: (
    key1: value1,
    key2: (
        key-1: value-1,
        key-2: value-2,
    ),
    key3: value3
);
```

##### 网页换皮肤的项目

```scss
$theme-color: (
    default: (
        bgcolor: #fff,
        text-color: #444,
        link-color: #39f
    ),
    primary:(
        bgcolor: #000,
        text-color:#fff,
        link-color: #93f
    ),
    negative: (
        bgcolor: #f36,
        text-color: #fefefe,
        link-color: #d4e
    )
);
```



#### Maps的函数

##### map-get($map, $key)

根据给定的 $key 值，返回 $map 中相关的值，如果 $key 不存在 $map中，将返回 null 值。

- $map：定义好的 map。
- $key：需要遍历的 key。

```scss
$social-colors: (
  dribble: #ea4c89,
  facebook: #3b5998,
  github: #177575,
  google: #db4437,
  twitter: #55acee
);
```

假设要获取 facebook 键值对应的值 #3b5998，我们就可以使用 map-get() 函数来实现：

```scss
.btn-dribble{
  color: map-get($social-colors, facebook);
}
```

编译出来的CSS：

```css
.btn-dribble {
  color: #3b5998;
}
```

假设 $social-colors 这个 map 没有 $weibo 这个 key:

```scss
.btn-weibo{
  font-size: 12px;
  color: map-get($social-colors, weibo);
}
```

此时编译出来的是CSS：

```css
.btn-weibo {
  font-size: 12px;
}
```

如果 $key 不在 $map 中，不会编译出 CSS

其实在 Sass 中，`map-get($social- colors, weibo)`返回了一个 null 值，也没有任何错误或者警告信息。

**这样不利于排错，解决方案map-has-key**



##### map-has-key($map, $key)

根据给定的 key 值判断 map 是否有对应的 value 值，如果有返回 true，否则返回 false。

当 $key 不在 $map 中时，使用 `map-get($map, $key)`函数将返回一个 null 值，但对于开发人员，并看不到任何提示信息。

```scss
@if map-has-key($social-colors, facebook) {
  .btn-facebook {
     color: map-get($social-colors, facebook);
  }
} @else {
  @warn "No color found for facebook in $social-colors map. Preoperty committed"
}
```

编译：

```css
.btn-facebook {
  color: #3b5998;
}
```

###### 自定义一个函数

```scss
@function colors($color) {
  @if not map-has-key($social-colors, $color) {
    @warn "No color found for `#{$color}`
  }
  @return map-get($social-colors, $color)
}
```

有了这个函数之后，就可以这样使用

```scss
.btn-dribble {
    color: colors(dribble);
}
.btn-facebook {
    color: colors(facebook);
}
.btn-github {
    color: colors(github);
}
.btn-google {
    color: colors(google);
}
.btn-twitter {
    color: colors(twitter);
}
.btn-weibo {
    color: colors(weibo);
}
```

编译出来的 CSS:

```css
.btn-dribble {
  color: #ea4c89;
}

.btn-facebook {
  color: #3b5998;
}

.btn-github {
  color: #171515;
}

.btn-google {
  color: #db4437;
}

.btn-twitter {
  color: #55acee;
}
```

使用 @each：

```scss
@each $social-network, $social-color in $social-colors {
  .btn-#{$social-network} {
    color: colors($social-network);
  }
}

/*
for({ key, value } in list) {
...
}
*/
```



##### map-keys($map)

返回 map 中所有的 key。

这些值赋予给一个变量，那他就是一个列表。

```scss
$list: map-keys($social-colors);
```

相当于：

```scss
$list: "dribble","facebook","github","google","twitter";
```

###### [修改自定义一个函数](#自定义一个函数)

```SCSS
@function colors($color){
    $names: map-keys($social-colors);
    @if not index($names,$color){
        @warn "Waring: `#{$color} is not a valid color name.`";
    }
    @return map-get($social-colors,$color);
}
```

用map-key s将 $social-colors 这个 map 的所有 key 取出，并赋予给一个名 为 $names 的列表。

然后通过 index($names,$color) 返回 $color 在 $names 位置

如果这个位置不存在，将返回提示信息，如果存在将返回正确的值。

```scss
.btn-weibo{
    color: colors(weibo);
}
// Waring: `#{$color} is not a valid color name.`
```

同样，也可以通过 @each 或者 @for 遍历出所有值：

@each:

```SCSS
@each $name in map-keys($social-colors){
    .btn-#{$name}{
        color: colors($name);
    }
}
```

@for:

```SCSS
@for $i from 1 through length(map-keys($social-colors)){
    .btn-#{nth(map-keys($social-colors),$i)} {
        color: colors(nth(map-keys($social-colors),$i));
    }
}
```

虽然使用的方法不一样，但最终得到的 CSS 是一样的：

```CSS
.btn-dribble {
  color: #ea4c89;
}

.btn-facebook {
  color: #3b5998;
}

.btn-github {
  color: #171515;
}

.btn-google {
  color: #db4437;
}

.btn-twitter {
  color: #55acee;
}
```



##### map-values($map)

返回 $map中所有的 value值，可以说也将是一个列表。有相同的 value 也将会全部获取出来。

```scss
map-values($social-colors)
```

将会返回：

```scss
#ea4c89,#3b5998,#171515,#db4437,#55acee
```



##### map-merge($map1,  $map2)

将两个 map 合并成一个新的 map。

```scss
$color: (
    text: #f36,
    link: #f63,
    border: #ddd,
    backround: #fff
);
$typo:(
    font-size: 12px,
    line-height: 1.6
);
```

合并

```scss
$newmap: map-merge($color, $typo);
```

将会生成一个新的 map:

```scss
$newmap:(
    text: #f36,
    link: #f63,
    border: #ddd,
    background: #fff,
    font-size: 12px,
    line-height: 1.6
);
```

`$map1` 和 `$map2` 中有相同的 $key 名，那么将 `$map2` 中的 $key 会取代 `$map1` 中的：

```SCSS
$color: (
    text: #f36,
    link: #f63,
    border: #ddd,
    backround: #fff
);
$typo:(
    font-size: 12px,
    line-height: 1.6,
    border: #ccc,
    background: #000
);
```

执行：

```SCSS
$newmap: map-merge($color,$typo);
```

得到的新 map:

```SCSS
$newmap:(
    text: #f36,
    link: #f63,
    font-size: 12px,
    line-height: 1.6,
    border: #ccc,
    background: #000
);
```



##### map-remove($map,$key)

从 map 中删除一个 key，返回一个新 map。

```scss
$map:map-remove($social-colors,dribble);
```

返回的是一个新 map:

```scss
$map:(
    facebook: #3b5998,
    github: #171515,
    google: #db4437,
    twitter: #55acee
);
```

如果删除的 key 并不存在于 $map 中，返回的新 map 和以前的 map 一样。

```scss
$map:map-remove($social-colors, weibo);
```

返回的值：

```scss
$map: (
    dribble: #ea4c89,
    facebook: #3b5998,
    github: #171515,
    google: #db4437,
    twitter: #55acee
);
```



##### keywords($args)

返回一个函数的参数，这个参数可以动态的设置 key 和 value。

可以通过混合宏或函数的参数变创建 map。

参数也是成对出现，其中 `$args` 变成 key(会自动去掉$符号)，而 `$args` 对应的值就是value。

```scss
@mixin map($args...) {
  @debug keywords($args);
}
@include map (
  $dribble: #ea4c89,
  $facebook: #3b5998,
  $github: #171515,
  $google: #db4437,
  $twitter: #55acee
)
```

在命令终端可以看到一个输入的 @debug 信息：

```sh
 DEBUG: (dribble: #ea4c89, facebook: #3b5998, github: #171515, google: #db4437, twitter: #55acee)
```





### 《颜色函数》

- RGB
- HSL
- Opacity
- adjust-color
- change-color



#### RGB颜色函数

RGB 颜色只是颜色中的一种表达式，其中 R 是 red 表示红色，G 是 green 表示绿色而 B 是 blue 表示蓝色。在 Sass 中为 RGB 颜色提供六种函数：

- rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
- rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
- red($color)：从一个颜色中获取其中红色值；
- green($color)：从一个颜色中获取其中绿色值；
- blue($color)：从一个颜色中获取其中蓝色值；
- mix($color-1,$color-2,[$weight])：把两种颜色混合在一起。



```sh
sass -i
```

在命令终端开启这个命令，相当于开启 Sass 的函数计算。

接下来，分别在终端使用 RGB 函数来进行计算，看其最终结果：

```sh
$ sass -i
>> rgb(200,40,88) //根据r:200,g:40,b:88计算出一个十六进制颜色值
#c82858
>> rgba(#c82858,.65) //根据#c82858的65%透明度计算出一个rgba颜色值
rgba(200, 40, 88, 0.65)
>> red(#c82858) //从#c82858颜色值中得到红色值 200
200
>> green(#c82858) //从#c82858颜色值中得到绿色值 40
40
>> blue(#c82858) //从#c82858颜色值中得到蓝色值 88
88
>> mix(#c82858,rgba(200,40,80,.65),.3) //把#c82858和rgba(200,40,88,.65) 两颜色按比例混合得到一个新颜色
rgba(200, 40, 80, 0.65105)
```

在 RGB 颜色函数中，在实际中常用的主要是 rgba() 和 mix() 两个函数



#### RGBA()函数

将一个颜色根据透明度转换成 rgba 颜色.

其语法有两种格式：

```scss
rgba($red,$green,$blue, $alpha)  // 将一个rgba颜色转译出来，和未转译的值一样
rgba($color, $alpha)  // 将一个Hex颜色转换成rgba颜色
```

原来的写法：

```scss
background: rgba(200, 40, 88, .5)
color: rgba(#c82858, .5) // （注意 css3 是可以的，但是存在浏览器兼容问题）：
```

假设在变量中定义了一个基本的变量：

```scss
$color: #f36;
$bgColor: orange;
$borderColor:green;
```

**语法**

在这个实例中，我们使用了 Sass 的 rgba 函数，在括号是函数的参数，第一个参数是需要转换的颜色，他可以是任何颜色的表达方式，也可以是一个颜色变量；第二个参数是颜色的透明度，其值是 0~1 之间。上面的代码转译出来：

```SCSS
// 转换的颜色
.rgba {
    color: rgba(#f36, .5);
    background: rgba(orange, .5);
    border-color: rgba(green, .5);
}
// 颜色变量
.rgba {
    color: rgba($color, .5);
    background: rgba($bgColor, .5);
    border-color: rgba($borderColor, .5);
}

```

编译后

```scss
.rgba {
  color: rgba(255, 51, 102, 0.5);
  background: rgba(255, 165, 0, 0.5);
  border-color: rgba(0, 128, 0, 0.5);
}
```



#### Red()、Green()、Blue()函数

##### Red() 函数

获取一个颜色当中的红色值

```
>> red(#f36)
255
```

##### Green() 函数

获取某一个颜色值中 green 的值

```
>> green(#f36)
51
```

##### Blue() 函数

取某一个颜色值中 blue 的值

```
>> blue(#f36)
102
```



#### Mix()函数

两种颜色根据一定的比例混合在一起，生成另一种颜色。其使用语法如下：

```scss
mix($color-1, $color-2, $weight);
```

**$color-1 和 $color-2** 指的是你需要合并的颜色，颜色可以是任何表达式，也可以是颜色变量。

**$weight** 为 合并的比例（选择权重），默认值为 50%，其取值范围是 0~1 之间。

它是每个 RGB 的百分比来衡量，当然透明度也会有一定的权重。

默认的比例是 50%，这意味着两个颜色各占一半，如果指定的比例是 25%，这意味着第一个颜色所占比例为 25%，第二个颜色所占比例为75%。



使用方法:

```scss
mix(#f00, #00f) => #7f007f
mix(#f00, #00f, 25%) => #3f00bf
mix(rgba(255, 0, 0, 0.5), #00f) => rgba(63, 0, 191, 0.75)
```

在前面的基础上，做一个修改：

```scss
$color1: #a63;
$color2: #fff;
$bgColor1: #f36;
$bgColor2: #e36;
$borderColor1: #c36;
$borderColor2: #b36;

.mix {
    background: mix($bgColor1, $bgColor2, .75);
    color: mix($color1, $color2, .25);
    border-color: mix($borderColor1, $bgColor2, .05);
}
```

编译的 css 代码：

```css
.mix {
    background: #ee3366;
    color: #fefefe;
    border-color: #ed33
}
```

这就是 Mix 函数的工作原理，在函数中指定三个函数，

前两个函数是你想混合的颜色（记住，你可以通过颜色变量、十六进制、RGBA、RGB、HSL 或者 HSLA 颜色值）。

第三个参数是第一种颜色的比例值。



#### HSL函数

- **hsl($hue,$saturation,$lightness)**：通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色；

  - ```
    >> hsl(200,30%,60%) // 通过h200,s30%，l60%创建一个颜色
    #7aa3b8
    ```

- **hsla($hue,$saturation,$lightness,$alpha)**：通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色；

  - ```
    >> hsla(200,30%,60%,.8) // 通过h200,s30%，l60%,a80%创建一个颜色
    rgba(122, 163, 184, 0.8)
    ```

- **complement($color)**：返回一个补充色，相当于adjust-hue($color,180deg);

  - ```
    >> complement(#f36)
    #33ffcc
    ```

- **invert($color)**：反回一个反相色，红、绿、蓝色值倒过来，而透明度不变。

  - ```
    >> invert(#f36)
    #00cc99
    ```



##### **lighten($color,$amount)**

通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；

##### **darken($color,$amount)**

通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；

这个亮度值可以是 0~1 之间，不过常用的一般都在 **3%~20%** 之间。

首先定义一个颜色变量：

```scss
$baseColor: #ad141e;
```

使用 lighten() 和 darken() 函数来修改 10% 的亮度值：

```scss
.lighten {
  background: lighten($baseColor, 10%);
}
.darken {
  background: darken($baseColor, 10%);
}
```

编译出来的 css 代码：

```css
//CSS
.lighten {
  background: #db1926;
}

.darken {
  background: #7f0f16;
}
```

![img](https://img.mukewang.com/55667b0f000138e608210178.jpg)

##### **lightness($color)**

从一个颜色中获取亮度（lightness）值

来验证一下三个颜色之间亮度值的变化：

```sh
>> lightness(#ad141e) // 原色的亮度值
37.84314%
>> lightness(#db1926) // 在原色的亮度值基础上增加10%
47.84314%
>> lightness(#7f0f16) // 在原色的亮度值基础上减少10%
27.84314%
```

lighten() 和 darken() 函数只是在原始颜色的基础上对亮度值进行运算操作，

但是生成出来的新颜色在色相和饱和度会有略微的变化，

比如上面的实例生成的新颜色与原始色在色相与饱和度值的对比：

```sh
>> hue(#ad141e)
356.07843deg
>> hue(#db1926)
355.97938deg
>> hue(#7f0f16)
356.25deg
>> saturation(#ad141e)
79.27461%
>> saturation(#db1926)
79.5082%
>> saturation(#7f0f16)
78.87324%
```

如果有点颜色概念基础的同学应该都清楚，不管什么颜色当其亮度值 趋近于0时，颜色会越来越暗，直到变成了黑色；反之，当其亮度值趋近于 100% 时，颜色会越来越亮，直到变成了白色。但当使用 lighten() 和 darken() 函数对一个颜色的亮度值计算时，会碰到两个极端，lighten() 函数会让新颜色的亮度值超过 100%，而 darken() 函数会让新颜色的亮度值低于 0 变成负数。可实际上任何颜色的亮度值都在 0~100% 之间，如此一来，Sass 的 lighten() 和 darken() 函数又将会如何处理呢？

带着上面的疑问，我们一起来做一个简单性的测试。从上面的示例中得知 #ad1414 的亮度值为 37.84314%，为了让新颜色的亮度值大于 100% 和小于 0，在对应的函数，做一些调整：

```scss
$baseColor:#ad141e;
.lighten {
    background: lighten($baseColor,70%);
}
.darken{
    background: darken($baseColor,40%);
}
```

编译出来的 css 代码：

```css
//CSS
.lighten {
  background: white;
}

.darken {
  background: black;
}
```

**上面的例子说明了一切问题。当颜色的亮度值接近或大于 100%，颜色会变成白色；反之颜色的亮度值接近或小于 0 时，颜色会变成黑色。**



##### **saturate($color,$amount)**

通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色

##### **desaturate($color,$amount)**

通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色；

```scss
$baseColor: #ad141e;
.saturate {
  background: saturate($baseColor, 30%); 
}
.desaturate {
  background: desaturate($baseColor, 30%);
}
```

编译出来的 css 代码：

```css
.saturate {
  background: #c1000d;
}

.desaturate {
  background: #903137;
}
```

![img](https://img.mukewang.com/55667cfb0001eef708220170.jpg)

##### **saturation($color**)

从一个颜色中获取饱和度（saturation）值

颜色变了。同样使用 saturation() 函数在终端中进行计算一下，看看他们有什么样的变化：

```sh
>> saturation(#ad141e) // 原色的饱和度
79.27461%
>> saturation(#c1000d)  // 在原色饱和度基础上增加30%,超过100%时按100%计算
100%
>> saturation(#903137) // 在原色饱和度基础上减少30%,小于0时按0计算
49.2228%
```



##### **adjust-hue($color,$degrees)**

通过改变一个颜色的色相值，创建一个新的颜色；

通常这个度数值是在 -360deg 至 360deg 之间，当然了可以是百分数：

```scss
$baseColor: #ad141e;
.adjust-hue-deg {
  background: adjust-hue($baseColor, 30deg);
}
.adjust-hue-per {
  background: adjust-hue($baseColor, 30%);
}
```

编译出的 css 代码：

```css
.adjust-hue-deg {
  background: #ad5614;
}

.adjust-hue-per {
  background: #ad5614;
}
```

![img](https://img.mukewang.com/55667dbe000180ce08170175.jpg)

从转译出来的代码，不难发现他们的颜色是一样的。尝试多次，如果两个值（抛弃 deg 和 100%）相同，计算出来的颜色也会一样。

##### **hue($color)**

从一个颜色中获取色相（hue）值；

同样的，可以通过 hue() 函数得到颜色转换前后的色相值：

```sh
>> hue(#ad141e) // 原颜色色相值
356.07843deg
>> hue(#ad5614) // 在原色色相基础上增加30deg
25.88235deg
```

在 HSL 颜色表达方式上，色相是从 -360 和 360 之间，负值逆时针转，正值顺时针转。

在这个实例中，原色的色相值约 356deg，加上 30deg 后，新颜色变成了 386deg，

但我们的色盘中并没有比 360deg 更大的值，当值大于 360deg时，表示色盘转完了一圈，继续顺时针转余下的值（这里是 26deg）

那么这个继续转的值就是新颜色的色相值。



##### **grayscale($color)**

一般这个函数能将彩色颜色转换成不同程度的灰色，相当于desaturate($color, 100%);

```scss
$baseColor: #ad141e;
.grayscale {
  background: grayscale($baseColor);
}
.desaturate {
  background: desaturate($baseColor,100%);
}
```

编译出来的 css 代码：

```css
.grayscale {
  background: #616161;
}

.desaturate {
  background: #616161;
}
```

![img](https://img.mukewang.com/55667ede0001a81308150123.jpg)

看看计算出来的 HSL 各个值的变化：

```sh
>> hue(#ad141e)
356.07843deg
>> hue(#616161)
0deg
>> saturation(#ad141e)
79.27461%
>> saturation(#616161)
0%
>> lightness(#ad141e)
37.84314%
>> lightness(#616161)
38.03922%
```

grayscale() 函数处理过的颜色，其最大的特征就是颜色的饱和度为 0。



#### Opacity函数

##### alphpa() 和 opacity()

与 red()，green() 等函数很类似。这个函数的主要功能是用来**获取一个颜色的透明度值**。如果颜色没有特别指定透明度，那么这两个函数得到的值都会是 1：

```sh
>> alpha(red)
1
>> alpha(rgba(red, .8))
0.8

>> opacity(red)
1
>> opacity(rgba(red, .8))
0.8
```



##### rgba()函数

有一个 rgba() 函数可以创建一个颜色，同时还可以**对颜色修改其透明度**。其可以接受两个参数，第一个参数为颜色，第二个参数是你需要设置的颜色透明值。

```sh
>> rgba(red, .5)
rgba(255, 0, 0, 0.5)

>> rgba(#dedede,.5)
rgba(222, 222, 222, 0.5)

>> rgba(rgb(34,45,44),.5)
rgba(34, 45, 44, 0.5)

>> rgba(rgba(33,45,123,.2),.5)
rgba(33, 45, 123, 0.5)

>> rgba(hsl(33,7%,21%),.5)
rgba(57, 54, 50, 0.5)

>> rgba(hsla(33,7%,21%,.9),.5)
rgba(57, 54, 50, 0.5)
```



##### opacify()、fade-in()

对已有颜色的透明度做一个加法运算，会让颜色更加不透明。

其接受两个参数，第一个参数是原始颜色，第二个参数是你需要增加的透明度值，其取值范围主要是在 0~1 之间。

当透明度值增加到大于 1 时，会以 1 计算，表示颜色不具有任何透明度。

```
>> opacify(rgba(22,34,235,.6),.2)
rgba(22, 34, 235, 0.8)
>> opacify(rgba(22,34,235,.6),.5)
#1622eb
>> opacify(hsla(22,34%,23%,.6),.15)
rgba(79, 53, 39, 0.75)
>> opacify(hsla(22,34%,23%,.6),.415)
#4f3527
>> opacify(red,.15)
#ff0000
>> opacify(#89adde,.15)
#89adde

>> fade-in(rgba(23,34,34,.5),.15)
rgba(23, 34, 34, 0.65)
>> fade-in(rgba(23,34,34,.5),.615)
#172222
```

其中 fade-in( ) 函数又名 fade_in() 函数。其所起作用等效。



##### transparentize()、 fade-out()

所起作用刚好与 opacify() 和 fade-in() 函数相反，让颜色更加的透明。

这两个函数会让透明值做减法运算，当计算出来的结果小于 0 时会以 0 计算，表示全透明。

```sh
>> transparentize(red,.5)
rgba(255, 0, 0, 0.5)
>> transparentize(#fde,.9)
rgba(255, 221, 238, 0.1)
>> transparentize(rgba(98,233,124,.3),.11)
rgba(98, 233, 124, 0.19)
>> transparentize(rgba(98,233,124,.3),.51)
rgba(98, 233, 124, 0)

>> fade-out(red,.9)
rgba(255, 0, 0, 0.1)
>> fade-out(hsla(98,6%,23%,.5),.1)
rgba(58, 62, 55, 0.4)
>> fade-out(hsla(98,6%,23%,.5),.6)
rgba(58, 62, 55, 0)
```



#### 颜色函数实战——七色卡

常见的颜色就是七彩色，红、橙、黄、蓝、绿、紫、黑。

那么我们就使用 Sass 的颜色函数来制作一个这样的色卡。效果图如下：

![img](https://img.mukewang.com/556fb2ec00010af708030478.jpg)





### 《@规则》

Sass 支持所有 CSS3 的 @ 规则， 以及一些 Sass 专属的规则，也被称为“指令（directives）”。 

这些规则在 Sass 中具有不同的功效，详细解释如下。

#### @import

Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。

 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 

另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用。



Sass 会在当前目录下寻找其他 Sass 文件， 如果是 Rack、Rails 或 Merb 环境中则是 Sass 文件目录。 

也可以通过 :load_paths 选项或者在命令行中使用 --load-path 选项来指定额外的搜索目录。



@import 根据文件名引入。

默认情况下，它会寻找 Sass 文件并直接引入， 但是，在少数几种情况下，它会被编译成 CSS 的 @import 规则：

- 如果文件的扩展名是 .css。
- 如果文件名以 http:// 开头。
- 如果文件名是 url()。
- 如果 @import 包含了任何媒体查询（media queries）。

如果上述情况都没有出现，并且扩展名是 .scss 或 .sass，该名称的 Sass 或 SCSS 文件就会被引入。

如果没有扩展名， Sass 将试着找出具有 .scss 或 .sass 扩展名的同名文件并将其引入。

例如：

```
@import "foo.scss";
```

或

```
@import "foo";
```

两者都将引入 foo.scss 文件， 而

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

将被编译为：

```
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

也可以通过一个 @import 引入多个文件。例如：

```
@import "rounded-corners", "text-shadow";
```

将引入 rounded-corners 和 text-shadow 两个文件。



如果你有一个 SCSS 或 Sass 文件需要引入， 但是你又不希望它被编译为一个 CSS 文件，

这时，你就可以在文件名前面加一个下划线，就能避免被编译。

这将告诉 Sass 不要把它编译成 CSS 文件。 然后，你就可以像往常一样引入这个文件了，而且还可以省略掉文件名前面的下划线。

例如，你有一个文件叫做 _colors.scss。 这样就不会生成 _colors.css 文件了， 而且你还可以这样做：

```
@import "colors"; // 不用加下划线
```

来引入 _colors.scss 文件。

**注意**，在同一个目录不能同时存在带下划线和不带下划线的同名文件。 例如， _colors.scss 不能与 colors.scss 并存。



##### 嵌套 @import

虽然大部分时间只需在顶层文件使用 @import 就行了， 但是，你还可以把他们包含在 CSS 规则 和 @media 规则中。

来看官网提供的一个简单示例：

假设要引入的样式文件`example.scss`文件中包含这样的代码：

```scss
.example {
  color: red;
}
```

然后这样引用：

```scss
#main {
  @import "example";
}
```

编译出来的 CSS：

```css
#main .example {
  color: red;
}
```



#### @media

和 CSS 的使用规则一样的简单，但它有另外一个功能，可以嵌套在 CSS 规则中。

有点类似 JS 的冒泡功能一样，如果在样式中使用 @media 指令，它将冒泡到外面。

来看一个简单示例：

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

编译出来：

```css
.sidebar {
  width: 300px;
}

@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
```



##### 嵌套 @media：

```scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
```

编译出来：

```css
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px;
  }
}
```

##### 使用插件#{}

```scss
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
```

编译出来的 CSS：

```css
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px;
  }
}
```



#### @extend

用来**扩展选择器**或占位符

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url("/image/hacked.png");
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

被编译为：

```css
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.error.intrusion, .seriousError.intrusion {
  background-image: url("/image/hacked.png"); }

.seriousError {
  border-width: 3px; }
```

##### 扩展选择器✨

不止扩展类选择器，还可以扩展任何选择器，比如 `.special.cool`, `a:hover`, 或 `a.user[href^=“http://“]`，例如：

```scss
a:hover {
  text-decoration: underline;
}
.hoverlink {
  @extend a:hover;
}
```

编译:

```css
a:hover, .hoverlink {
  text-decoration: underline;
}
```

再来看一个复杂点的：

```scss
.comment a.user:hover {
  font-weight: bold;
}
.hoverlink {
  @extend a:hover;
}
```

编译出来的CSS

```css
.comment a.user:hover, .comment .user.hoverlink {
  font-weight: bold;
}
```



##### 多个扩展

所设某个样式要继承多个地方的样式，那么可以使用 @extend 来继承多个选择器或占位符的样式，如：

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.attention {
  font-size: 3em;
  background-color: #ff0;
}
.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}
```

编译出来的CSS

```css
.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.attention, .seriousError {
  font-size: 3em;
  background-color: #ff0; }

.seriousError {
  border-width: 3px; }
```



##### 扩展单一选择器

 %placeholder 不使用@extend显示调用是不会生成任何样式代码。

那么在选择器中使用占位符一样。比如下面的代码：

```scss
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}

.txet{
  @extend %extreme;
}
```

这段代码在不调用之前不产生任何代码，只有能过@extend调用之后才生成代码：

```css
#context a.txet {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
```



#### @at-root

从字面上解释就是**跳出根元素**。

当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root。来看一个简单的示例：

```scss
.a {
  color: red;
  .b {
    color: orange;
    .c {
      color: yellow;
      @at-root .d {
        color: green;
      }
    }
  }
}
```

编译出来的CSS

```css
.a {
  color: red;
}

.a .b {
  color: orange;
}

.a .b .c {
  color: yellow;
}
/* 跳出来了 */
.d {
  color: green;
}
```



#### @debug

在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug:

```
@debug 10em + 12em;
```

会输出：

```
Line 1 DEBUG: 22em
```



#### @warn

和 @debug 功能类似，用来帮助我们更好的调试 Sass。如：

```scss
@mixin adjust-location($x, $y) {
  @if unitless($x) {
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}
```



#### @error

和 @warn功能类似，用来帮助我们更好的调试 Sass。如：

```scss
@mixin error($x){
  @if $x < 10 {
    width: $x * 10px;
  } @else if $x == 10 {
    width: $x;
  } @else {
    @error "你需要将#{$x}值设置在10以内的数";
  }
}

.test {
  @include error(15);
}
```

编译的时候：

```sh
你需要将15值设置在10以内的数 on line 7 at column 5
```
