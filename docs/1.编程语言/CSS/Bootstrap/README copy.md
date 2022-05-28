# Bootstrap

> https://www.bootcss.com

最受欢迎的 HTML、CSS 和 JS 框架，用于**开发响应式布局、移动设备优先**的 WEB 项目。



## 简介

在制作Web页面时，前端人员都习惯为网站设置一个**全局样式（reset.css）**。

Bootstrap框架的核心是轻量的CSS基础代码库，他并没有一味的重置样式，而是注重各浏览器基础表现，降低开发难度。

大部分前端人员都具有归零的思想，但实际你会发现，归零之后的样式在开发过程中会存在着潜在的问题，例如，在全局样式表中将**em**变成一个普通标记，明明应该是斜体，怎么就没效果了呢？

Bootstrap框架在这一部分做了一定的变更，不再一味追求归零，而是更注重重置可能产生问题的样式（如，body,form的margin等），保留和坚持部分浏览器的基础样式，解决部分潜在的问题，提升一些细节的体验，具体说明如下：

- **移除body的margin声明**
- **设置body的背景色为白色**
- **为排版设置了基本的字体、字号和行高**
- **设置全局链接颜色，且当链接处于悬浮“:hover”状态时才会显示下划线样式**



## 《排版》

### 标题

Bootstrap和普通的HTML页面一样，定义标题都是使用标签<h1>到<h6>,只不过Bootstrap覆盖了其默认的样式，

使用其在所有浏览器下显示的效果一样，具体定义的规则可以如下表所示：

| 元素 | 字体大小 | 计算比例    | 其它                                   |
| ---- | -------- | ----------- | -------------------------------------- |
| h1   | 36px     | 14px * 2.60 | margin-top: 20px; margin-bottom: 10px; |
| h2   | 30px     | 14px * 2.15 | margin-top: 20px; margin-bottom: 10px; |
| h3   | 24px     | 14px * 1.70 | margin-top: 20px; margin-bottom: 10px; |
| h4   | 18px     | 14px * 1.25 | margin-top:10px; margin-bottom: 10px;  |
| h5   | 14px     | 14px * 1    | margin-top:10px; margin-bottom: 10px;  |
| h6   | 12px     | 14px * 0.85 | margin-top:10px; margin-bottom: 10px;  |

![img](https://img.mukewang.com/53acce330001429807730337.jpg)

Bootstrap标题样式进行了以下显著的优化重置：

1、重新设置了**margin-top**和**margin-bottom**的值，  **h1~h3**重置后的值都是**20px**；**h4~h6**重置后的值都是**10px。**
2、所有标题的行高都是**1.1**（也就是font-size的1.1倍）,而且文本颜色和字体都继承父元素的颜色和字体。
3、固定不同级别标题字体大小，**h1=36px，h2=30px，h3=24px，h4=18px，h5=14px**和**h6=12px。**

| 内容                  | font-size     |
| --------------------- | ------------- |
| h1. Bootstrap heading | Semibold 36px |
| h2. Bootstrap heading | Semibold 30px |
| h3. Bootstrap heading | Semibold 24px |
| h4. Bootstrap heading | Semibold 18px |
| h5. Bootstrap heading | Semibold 14px |
| h6. Bootstrap heading | Semibold 12px |

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```

#### 副标题

在标题内还可以包含 `<small>` 标签或赋予 `.small` 类的元素，可以用来**标记副标题**。

这个副标题具有其自己的一些独特样式：

**1、**行高都是**1**，而且**font-weight**设置了**normal**变成了常规效果（不加粗），同时颜色被设置为**灰色（#999）。**
**2、**由于**<small>**内的文本字体在**h1~h3**内，其大小都设置为当前字号的**65%；**而在**h4~h6**内的字号都设置为当前字号的**75%；**

```css
h1 small, .h1 small,
h2 small, .h2 small,
h3 small, .h3 small,
h1 .small, .h1 .small,
h2 .small, .h2 .small,
h3 .small, .h3 .small {
  font-size: 65%;
}
h4, .h4,
h5, .h5,
h6, .h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 small, .h4 small,
h5 small, .h5 small,
h6 small, .h6 small,
h4 .small, .h4 .small,
h5 .small, .h5 .small,
h6 .small, .h6 .small {
  font-size: 75%;
}
```

| 主标题 + 副标题                      |
| ------------------------------------ |
| h1. Bootstrap heading Secondary text |
| h2. Bootstrap heading Secondary text |
| h3. Bootstrap heading Secondary text |
| h4. Bootstrap heading Secondary text |
| h5. Bootstrap heading Secondary text |
| h6. Bootstrap heading Secondary text |

```HTML
<h1>h1. Bootstrap heading <small>Secondary text</small></h1>
<h2>h2. Bootstrap heading <small>Secondary text</small></h2>
<h3>h3. Bootstrap heading <small>Secondary text</small></h3>
<h4>h4. Bootstrap heading <small>Secondary text</small></h4>
<h5>h5. Bootstrap heading <small>Secondary text</small></h5>
<h6>h6. Bootstrap heading <small>Secondary text</small></h6>
```



### 段落（正文文本）

排版中另一个重要元素之一。

#### body

在Bootstrap中为文本设置了一个全局的文本样式（这里所说的文本是指正文文本）：

1、全局文本字号为**14px(font-size)**。

2、行高为**1.42857143（line-height）**，大约是**20px**(大家看到一串的小数或许会有疑惑，其实他是通过LESS编译器计算出来的，当然Sass也有这样的功能)。

3、颜色为**深灰色（#333）**；

4、字体为**"Helvetica Neue", Helvetica, Arial, sans-serif;（font-family）**

该设置都定义在**<body>**元素上，由于这几个属性都是**继承属性**，所以Web页面中文本（包括段落p元素）如无重置都会具有这些样式效果。

1084~1090

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #fff;
}
```

#### p

另外在Bootstrap中，为了让段落**p**元素之间具有一定的间距，便于用户阅读文本，特意设置了**p**元素的**margin**值

1289-1291

```css
p {
  margin: 0 0 10px;
}
```



#### 自定义

在Bootstrap中，排版设置的默认值都存在**variables.less**文件中(Sass版本存在**_variables.scss中**)的两个变量：

**LESS版本：**

```less
@font-size-base: 14px; @line-height-base: 1.428571429; // 20/14
```

**Sass版本：**

```scss
$font-size-base: 14px !default; $line-height-base: 1.428571429 !default; // 20/14
```

第一条语句用于设置**字体大小**，第二条语句用于设置**行高**。系统默认使用这两个值产生整个页面相应的**margin、padding**和**line-height**的值。

你只需要修改这两个变量的值，然后重新编译，就可以自定义自己的Bootstrap排版样式。



#### 强调内容

如果想让一个段落**p**突出显示，可以通过添加类名“**.lead**”实现，其作用就是增大文本字号，加粗文本，而且对行高和**margin**也做相应的处理。用法如下：

```html
<p>我是普通文本，我的样子长成这样我是普通文本，我的样子长成这样我是普通文本，</p>
<p class="lead">我是特意要突出的文本，我的样子成这样。我是特意要突出的文本，我的样子长成这样。</p>
```

1292~1302

```css
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
```

除此之外，Bootstrap还通过元素标签:**<small>**、**<strong>**、**<em>**和**<cite>**给文本做突出样式处理。

59~62

```css
b,
strong {
  font-weight: bold;
}
```

1303~1306

```css
small,
.small {
  font-size: 85%; /*标准字体的85%,也就是14px * 0.85px，差不多12px*/
}
```

源码中未找到

```css
cite {
  font-style: normal;
}
```



#### 粗体

粗体就是给文本加粗，在普通的元素中我们一般通过font-weight设置为bold关键词给文本加粗。

在Bootstrap中，可以使用**<b>**和**<strong>**标签让文本直接加粗。

59~62

```css
b,
strong {
  font-weight: bold;
}
```

```Html
<p>我在学习<strong>Bootstrap</strong>，我要掌握<strong>Bootstrap</strong>的所有知识。</p>
```



#### 斜体

斜体类似于加粗一样，除了可以给元素设置样式**font-style**值为**italic**实现之外，

在Bootstrap中还可以通过使用标签**<em>**或**<i>**来实现

```css
<p>我在网上跟<em>大漠</em>一起学习<i>Bootstrap</i>的使用。我一定要学会<i>Bootstrap</i>。</p>
```



#### 强调相关的类

通过颜色来表示强调，具本说明如下：

| 类名          | 功能     | 颜色                      |
| ------------- | -------- | ------------------------- |
| .text-muted   | 提示     | 使用浅**灰色（#777）**    |
| .text-primary | 主要     | 使用**蓝色（#337ab7）**   |
| .text-success | 成功     | 使用**浅绿色(#3c763d)**   |
| .text-info    | 通知信息 | 使用**浅蓝色（#31708f）** |
| .text-warning | 警告     | 使用**黄色（#8a6d3b）**   |
| .text-danger  | 危险     | 使用**褐色（#a94442）**   |

1336~1373

```css
.text-muted {
  color: #777777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
```





#### 文本对齐风格

在排版中离不开文本的对齐方式。

在CSS中常常使用`text-align`来实现文本的对齐风格的设置。其中主要有四种风格：

✔左对齐，取值left

✔居中对齐，取值center

✔右对齐，取值right

✔两端对齐，取值justify

Bootstrap通过定义四个类名来控制文本的对齐风格：

1312~1323

```css
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
```

例如下面的四行代码，分别定义文本的四种不同的对齐风格：

```html
<p class="text-left">我居左</p>
<p class="text-center">我居中</p>
<p class="text-right">我居右</p>
<p class="text-justify">我两端对齐</p>
```

> 特别声明：目前两端对齐在各浏览器下解析各有不同，特别是应用于中文文本的时候。所以项目中慎用。



#### 列表

在HTML文档中，列表结构主要有三种：有序列表、无序列表和定义列表。具体使用的标签说明如下：

**无序列表**

```html
<ul>
    <li>…</li>
</ul>
```

**有序列表**

```html
<ol>
    <li>…</li>
</ol>
```

**定义列表**

```html
<dl>
    <dt>…</dt>
    <dd>…</dd>
</dl>
```

Bootstrap根据平时的使用情形提供了**六种**形式的列表：

☑普通列表

☑有序列表

☑去点列表

☑内联列表

☑描述列表

☑水平描述列表



##### **无序列表**

和我们平时使用的一样（无序列表使用ul，有序列表使用ol标签）

1415~1425

```css
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
```

Bootstrap对于列表，只是在**margin**上做了一些调整。



##### **列表嵌套**

```html
<ol>
    <li>有序列表</li>
    <li>
    有序列表
        <ol>
        <li>有序列表(2)</li>
        <li>有序列表(2)</li>
        </ol>
    </li>
    <li>有序列表</li>
</ol>
```



##### 去点列表

通过给无序列表添加一个类名“**.list-unstyled**”,这样就可以去除默认的列表样式的风格。

1426~1429

```css
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
```



##### 内联列表

通过添加类名“**.list-inline**”来实现内联列表，

简单点说就是**把垂直列表换成水平列表**，**而且去掉项目符号（编号）**，**保持水平显示**。

也可以说内联列表就是**为制作水平导航而生**。

1430~1439

```css
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
```

看个示例：

```html
<ul class="list-inline">
    <li>W3cplus</li>
    <li>Blog</li>
    <li>CSS3</li>
    <li>jQuery</li>
    <li>PHP</li>
</ul>
```



##### 定义列表

调整了**行间距**，**外边距**和**字体加粗**效果。

```css
dl {
  margin-top: 0;
  margin-bottom: 20px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: 700;
}
dd {
  margin-left: 0;
}
```

对于定义列表使用，其实很简单，与我们以前的使用定义列表的方法是相同的：

```html
<dl>
  <dt>北京</dt>
  <dd>北京是中国的首都，是政治文化集中地</dd>
  <dt>上海</dt>
  <dd>上海号称东方的巴黎</dd>
</dl>
```



##### 水平定义列表

给<dl>添加类名“**.dl-horizontal**”给定义列表实现水平显示效果。

```css
@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
```

此处添加了一个媒体查询。也就是说，只有屏幕**大于768px**的时候，添加类名“**.dl-horizontal**”才具有水平定义列表效果。其实现主要方式：

- 将dt设置了一个左浮动，并且设置了一个宽度为160px
- 将dd设置一个margin-left的值为180px，达到水平的效果
- 当标题宽度超过160px时，将会显示三个省略号

其用法如下：

```html
<dl class="dl-horizontal">
    <dt>W3cplus</dt>
    <dd>一个致力于推广国内前端行业的技术博客。它以探索为己任，不断活跃在行业技术最前沿，努力提供高质量前端技术博文</dd>
    <dt>慕课网</dt>
    <dd>一个专业的，真心实意在做培训的网站</dd>
    <dt>我来测试一个标题，我来测试一个标题</dt>
    <dd>我在写一个水平定义列表的效果，我在写一个水平定义列表的效果</dd>
</dl>
```

宽屏下的效果（屏幕**大于768px**）：

[![img](https://img.mukewang.com/53ad0ff90001418208740117.jpg)](https://img.mukewang.com/53ad0ff90001418208740117.jpg)

当你缩小你的浏览器屏幕时，水平定义列表将回复到原始的状态。

[![img](https://img.mukewang.com/53ad10270001db6f06200172.jpg)](https://img.mukewang.com/53ad10270001db6f06200172.jpg)



#### 显示代码

一般在个人博客上使用的较为频繁，用于显示代码的风格。在Bootstrap主要提供了**三种代码风格**：

1、使用**<code></code>**来显示单行内联代码

2、使用**<pre></pre>**来显示多行块代码

3、使用**<kbd></kbd>**来显示用户输入代码



预编译版本的Bootstrap将代码的样式单独提取出来：

1、LESS版本，请查阅code.less文件，路径：/bootstrap/less/code.less

2、Sass版本，请查阅_code.scss文件



在使用代码时，用户可以根据具体的需求来使用不同的类型：

1、**<code>**：一般是针对于**单个单词或单个句子**的代码

2、**<pre>**：一般是针对于**多行代码**（也就是成块的代码）

3、**<kbd>**: 一般是表示**用户要通过键盘输入的内容**



虽然不同的类型风格不一样，但其使用方法是类似的。



##### code风格`code`

```html
<div>Bootstrap的代码风格有三种：
  <code>&lt;code&gt;</code>
  <code>&lt;pre&gt;</code>
  <code>&lt;kbd&gt;</code>
</div>
```

##### **pre风格**(ctrl + shift + k)

标签前面留多少个空格，在显示效果中就会留多少个空格。

```html
<div>
<pre>
&lt;ul&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ul&gt;
</pre>
</div>
```

###### .pre-scrollable

有时候代码太多，而且不想让其占有太大的页面篇幅，就想控制代码块的大小

在pre标签上添加类名“**.pre-scrollable**”，就可以控制代码块区域最大高度为**340px**，一旦超出这个高度，就会在**Y轴出现滚动条**。

```css
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
```

> 友情提示：如果了解LESS或Sass这样的CSS预定定义处理器，你完全可以通过**code.less**或者**_code.scss**文件修改样式，然后重新编译，你就可以得到属于自己的代码样式风格。



##### **kbd风格**(black_bg`code`)

```html
<div>请输入<kbd>ctrl+c</kbd>来复制代码，然后使用<kbd>ctrl+v</kbd>来粘贴代码</div>
```

不管使用哪种代码风格，在代码中碰到小于号（<）要使用**硬编码**“**`&lt;`**”来替代，大于号(>)使用“**`&gt;`**”来替代。



#### 表格

表格是Bootstrap的一个基础组件之一，Bootstrap为表格提供了**1种基础样式**和**4种附加样式**以及**1个支持响应式的表格**。

在使用Bootstrap的表格过程中，只需要添加对应的类名就可以得到不同的表格风格，在接下来的内容中，我们会详细介绍Bootstrap的表格使用。

同样的，如果你对CSS预处理器熟悉，你可以使用Bootstrap提供的预处理版本：
☑ LESS版本，对应的文件是 **tables.less**
☑ Sass版本，对应的文件是 **_tables.scss**

为表格不同的样式风格提供了不同的类名，主要包括：

☑ **.table**：基础表格

☑ **.table-striped**：斑马线表格

☑ **.table-bordered**：带边框的表格

☑ **.table-hover**：鼠标悬停高亮的表格

☑ **.table-condensed**：紧凑型表格

☑ **.table-responsive**：响应式表格



##### 表格行的类

表格的行元素**<tr>**提供了五种不同的类名，每种类名控制了行的不同背景颜色，具体说明如下表所示：

![img](https://img.mukewang.com/53ad213f0001b08807340508.jpg)

| 类名     | 描述                         | 对应的颜色 |
| -------- | ---------------------------- | ---------- |
| .active  | 表示当前活动的信息           | #f5f5f5    |
| .success | 表示成功或者正确的行为       | #dff0d8    |
| .info    | 表示中立的信息或行为         | #d9edf7    |
| .warning | 表示警告，需要特别注意       | #fcf8e3    |
| .danger  | 表示危险或者可能是错误的行为 | #f2dede    |

只需要在<tr>元素中添加上表对应的类名，就能达到你自己需要的效果：

```html
<tr class="active">
  <td>…</td>
</tr>
```

> **特别提示**：除了”.active”之外，其他四个类名和”.table-hover”配合使用时，Bootstrap针对这几种样式也做了相应的悬浮状态的样式设置
>
> 所以如果需要给tr元素添加其他颜色样式时，在”.table-hover”表格中也要做相应的调整。

注意要实现**悬浮状态**，需要在<table>标签上加入`table-hover`类。

如下代码：

```html
<table class="table-hover">
```

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>表格行的类</title>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>

<body>
<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th>类名</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>.active</td>
      <td>表示当前活动的信息</td>
    </tr>
    <tr class="success">
      <td>.success</td>
      <td>表示成功或者正确的行为</td>
    </tr>
    <tr class="info">
      <td>.info</td>
      <td>表示中立的信息或行为</td>
    </tr>
    <tr class="warning">
      <td>.warning</td>
      <td>表示警告，需要特别注意</td>
    </tr>
    <tr class="danger">
      <td>.danger</td>
      <td>表示危险或者可能是错误的行为</td>
    </tr>
  </tbody>
</table> 
</body>
</html>
```



##### 基础表格

对表格的结构，跟我们平时使用表格是一样的：

```html
<table>
<thead>
<tr>
<th>表格标题</th>
…
</tr>
</thead>
<tbody>
<tr>
<td>表格单元格</td>
…
</tr>
     …
</tbody>
</table>
```

在Bootstrap中，对于基础表格是通过类名“**.table**”来控制。

如果在<table>元素中不添加任何类名，表格是无任何样式效果的。

```html
<table class="table">
   <thead>
     <tr>
       <th>表格标题</th>
       <th>表格标题</th>
       <th>表格标题</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
   </tbody>
 </table>
```

![img](https://img.mukewang.com/53c617ea0001a48108560141.jpg)

**.table”主要有三个作用：**

- **给表格设置了margin-bottom:20px以及设置单元内距**
- **在thead底部设置了一个2px的浅灰实线**
- **每个单元格顶部设置了一个1px的浅灰实线**



##### 斑马线表格

在**<table class="table">**的基础上增加类名“**.table-striped**”即可：

```
<table class="table table-striped">
   <thead>
     <tr>
       <th>表格标题</th>
       <th>表格标题</th>
       <th>表格标题</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
   </tbody>
 </table>
```

其效果与基础表格相比，仅是在tbody**隔行有一个浅灰色的背景色**。

其实现原理也非常的简单，利用CSS3的结构性选择器“:nth-child”来实现，所以对于IE8以及其以下浏览器，没有背景条纹效果。

```css
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}
```



##### 带边框的表格

所有单元格具有一条**1px**的边框。

只需要在基础表格<table class="table">基础上添加一个“**.table-bordered**”类名即可：

```html
<table class="table table-bordered">
   <thead>
     <tr>
       <th>表格标题</th>
       <th>表格标题</th>
       <th>表格标题</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
     <tr>
       <td>表格单元格</td>
       <td>表格单元格</td>
       <td>表格单元格</td>
     </tr>
   </tbody>
 </table>
```

其源码

```css
.table-bordered {
  border: 1px solid #ddd;/*整个表格设置边框*/
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd; /*每个单元格设置边框*/
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;/*表头底部边框*/
}
```



##### 鼠标悬浮高亮的表格

当鼠标悬停在表格的行上面有一个高亮的背景色

需要<table class="table">元素上添加类名“**table-hover**”即可：



单元格所在行的背景色都会变成**浅灰色**。

鼠标悬浮高亮的效果主要是通过“hover”事件来实现，设置了“**tr:hover**”时的th、td的背景色为新颜色。

```css
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}
```

> **注：**其实，鼠标悬浮高亮表格，可以和Bootstrap其他表格混合使用。简单点说，只要你想让你的表格具备悬浮高亮效果，你只要给这个表格添加“**table-hover**”类名就好了。例如，将前面介绍的几种表格结合使用：

```html
<table class="table table-striped table-bordered table-hover">
…
</table>
```



##### 紧凑型表格

**单元格没内距**或者**内距较其他表格的内距更小**。

通过类名“**table-condensed**”重置了单元格内距**padding**的值

```html
<table class="table table-condensed">
…
</table>
```

源码

```css
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
```



##### 响应式表格(容器式)

随着各种手持设备的出现，要想让你的Web页面适合千罗万像的设备浏览，**响应式设计**的呼声越来越高。

在Bootstrap中也为表格提供了响应式的效果，将其称为**响应式表格**。

Bootstrap提供了一个容器，并且此容器设置类名“.table-responsive”,

此容器就具有响应式效果，然后将<table class="table">置于这个容器当中，这样表格也就具有响应式效果。



应式表格效果表现为：当你的浏览器可视区域小于**768px**时，表格底部会出现水平滚动条。

当你的浏览器可视区域大于768px时，表格底部水平滚动条就会消失。示例如下：

```html
<div class="table-responsive">
<table class="table table-bordered">
   …
</table>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/53ad2eab0001c55105540130.jpg)

（宽屏效果）

![img](https://img.mukewang.com/53ad2f540001847402420197.jpg)





### 《表单》

表单主要功能是用来与用户做交流的一个网页控件，良好的表单设计能够让网页与用户更好的沟通。

表单中常见的元素主要包括：**文本输入框**、**下拉选择框、单选按钮、复选按钮**、**文本域**和**按钮**等。

其中每个控件所起的作用都各不相同，而且不同的浏览器对表单控件渲染的风格都各有不同。



#### 表单源码查询

根据不同的Bootstrap版本，你可以轻松获取相应的源码：

- LESS版本：对应源文件 **forms.less**

- Sass版本：对应源文件 **_forms.scss**

仅仅对表单内的**fieldset**、**legend**、**label**标签进行了定制。

```css
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
```

主要将这些元素的**margin**、**padding**和**border**等进行了细化设置。



当然表单除了这几个元素之外，还有**input**、**select**、**textarea**等元素

这几个元素，在Bootstrap框架中，通过定制了一个类名**`form-control`**将会实现一些设计上的定制效果。

**1、宽度变成了100%**

**2、设置了一个浅灰色（#ccc）的边框**

**3、具有4px的圆角**

**4、设置阴影效果，并且元素得到焦点之时，阴影和边框效果会有所变化**

**5、设置了placeholder的颜色为#999**



#### 水平表单

Bootstrap框架默认的表单是**垂直显示风格**，但很多时候我们需要的**水平表单风格**（标签居左，表单控件居右）见下图。

![img](https://img.mukewang.com/53d07cb5000111c403540091.jpg)

在Bootstrap框架中要**实现水平表单效果**，必须满足以下两个条件：

> 1、在<form>元素是使用类名“form-horizontal”。
> 2、配合Bootstrap框架的网格系统。（网格布局会在以后的章节中详细讲解）



在<form>元素上使用类名“form-horizontal”主要有以下几个作用：

- 设置表单控件padding和margin值。
- 改变“form-group”的表现形式，类似于网格系统的“row”。

```css
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
```

来看一个简单的示例：

```html
<form class="form-horizontal" role="form">
<div class="form-group">
  <label for="inputEmail3" class="col-sm-2 control-label">邮箱</label>
  <div class="col-sm-10">
  <input type="email" class="form-control" id="inputEmail3" placeholder="请输入您的邮箱地址">
  </div>
  </div>
  <div class="form-group">
  <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
  <div class="col-sm-10">
  <input type="password" class="form-control" id="inputPassword3" placeholder="请输入您的邮箱密码">
  </div>
  </div>
  <div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
  <div class="checkbox">
  <label>
  <input type="checkbox">记住密码
  </label>
  </div>
  </div>
  </div>
  <div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
  <button type="submit" class="btnbtn-default">进入邮箱</button>
  </div>
</div>
</form>
```



#### 内联表单

有时候我们需要将表单的控件都在一行内显示，类似这样的：

![img](https://img.mukewang.com/53b2532a000107b003190032.jpg)

在Bootstrap框架中实现这样的表单效果，只需要在<form>元素中添加类名“form-inline”即可。

内联表单实现原理将表单控件设置成内联块元素（display:inline-block）。

```css
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
```

如果你要在input前面添加一个label标签时，会导致input换行显示。

如果你必须添加这样的一个label标签，并且不想让input换行，你需要将label标签也放在容器“form-group”中，如：

```html
<form class="form-inline" role="form">
    
<div class="form-group">
  <label class="sr-only" for="exampleInputEmail2">邮箱</label>
  <input type="email" class="form-control" id="exampleInputEmail2" placeholder="请输入你的邮箱地址">
</div>
    
<div class="form-group">
  <label class="sr-only" for="exampleInputPassword2">密码</label>
  <input type="password" class="form-control" id="exampleInputPassword2" placeholder="请输入你的邮箱密码">
</div>
    
<div class="checkbox">
<label>
   <input type="checkbox">记住密码
</label>
</div>
    
<button type="submit" class="btnbtn-default">进入邮箱</button>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b253ae00011c8003170053.jpg)

为什么添加了label标签，而且没有放置在”**form-group**”这样的容器中，input也不会换行；

还有label标签怎么没显示出来，在label标签运用了一个类名“**sr-only**”，标签没显示就是这个样式将标签隐藏了。

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

> 注意：那么Bootstrap为什么要这么做呢？这样不是多此一举吗？其实不是的，如果没有为输入控件设置label标签，**屏幕阅读器**将无法正确识别。
>
> 这也是Bootstrap框架另一个优点之处，为残障人员进行了一定的考虑。



#### 表单控件

每一个表单都是由表单控件组成。离开了控件，表单就失去了意义。

##### 输入框input

**单行输入框**，常见的文本输入框，也就是**input**的**type**属性值为**text**。

在Bootstrap中使用input时也必须添加type类型，如果没有指定type类型，将无法得到正确的样式，

因为Bootstrap框架都是通过**input[type=“?”]**(其中?号代表type类型，比如说text类型，对应的是**input[type=“text”]**)的形式来定义样式的。

```css
input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
```

为了让控件在各种表单风格中样式不出错，需要添加类名“**form-control**”，如：

```html
<form role="form">
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
</form>
```

运行效果：

![img](https://img.mukewang.com/53b2571700018ab503070043.jpg)



##### 下拉选择框select

Bootstrap框架中的下拉选择框使用和原始的一致，多行选择设置**multiple**属性的值为**multiple**。

Bootstrap框架会为这些元素提供统一的样式风格。如：

```html
<form role="form">
<div class="form-group">
  <select class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  </div>
  <div class="form-group">
  <select multiple class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b257ea000136bd02570072.jpg)



##### 文本域textarea

文本域和原始使用方法一样，设置**rows**可定义其高度，设置**cols**可以设置其宽度。

但如果**textarea**元素中添加了类名“**form-control**”类名，则无需设置cols属性。

因为Bootstrap框架中的“form-control”样式的表单控件宽度为**100%**或**auto**。

```html
<form role="form">
  <div class="form-group">
    <textarea class="form-control" rows="3"></textarea>
  </div>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b25d4d0001dbb503010055.jpg)



##### 复选框checkbox和单选择按钮radio

Bootstrap针对他们做了一些特殊化处理，主要是checkbox和radio与label标签配合使用会出现一些小问题（最头痛的是对齐问题）。

```html
<form role="form">
<div class="checkbox">
    <label>
        <input type="checkbox" value="">
        记住密码
    </label>
</div>
<div class="radio">
    <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="love" checked>
    喜欢
    </label>
</div>
<div class="radio">
    <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="hate">
        不喜欢
    </label>
</div>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b25edb0001faae02520102.jpg)

从上面的示例，可以得知：

- 不管是checkbox还是radio都使用label包起来了
- checkbox连同label标签放置在一个名为“.checkbox”的容器内
- radio连同label标签放置在一个名为“.radio”的容器内

在Bootstrap框架中，主要借助“.checkbox”和“.radio”样式，来处理复选框、单选按钮与标签的对齐方式。

```css
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.radio label,
.checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 4px \9;
  margin-left: -20px;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
```



###### 水平排列

有时候，为了布局的需要，将复选框和单选按钮需要水平排列。

- 如果checkbox需要水平排列，只需要在label标签上添加类名“**checkbox-inline**”

- 如果radio需要水平排列，只需要在label标签上添加类名“**radio-inline**”

如下所示：

```html
<form role="form">
  <div class="form-group">
    <label class="checkbox-inline">
      <input type="checkbox"  value="option1">游戏
    </label>
    <label class="checkbox-inline">
      <input type="checkbox"  value="option2">摄影
    </label>
    <label class="checkbox-inline">
    <input type="checkbox"  value="option3">旅游
    </label>
  </div>
  <div class="form-group">
    <label class="radio-inline">
      <input type="radio"  value="option1" name="sex">男性
    </label>
    <label class="radio-inline">
      <input type="radio"  value="option2" name="sex">女性
    </label>
    <label class="radio-inline">
      <input type="radio"  value="option3" name="sex">中性
    </label>
  </div>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b2649f00011bae01920069.jpg)

```css
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
```



##### 按钮

Bootstrap框架的按钮也是一个独立部分，我们同样在不同的版本之中能找到对应的代码：

1. **LESS版本**：查看源文件buttons.less文件
2. **Sass版本**：查看源文件_buttons.scss文件
3. **已编译版本**：查看源文件bootstrap.css文件



制作按钮通常使用下面代码来实现：

- **input[type=“submit”]**

- **input[type=“button”]**

- **input[type=“reset”]**

- **<button>**

在Bootstrap框架中的按钮都是采用<button>来实现。

```css
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>表单控件状态——焦点状态</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
<table class="table table-bordered table-striped">  
    <thead>  
      <tr>  
        <th>Button</th>  
        <th>class=""</th>  
        <th>Description</th>  
      </tr>  
    </thead>  
    <tbody>  
      <tr>  
        <td><button class="btn" href="#">Default</button></td>  
        <td><code>btn</code></td>  
        <td>Standard gray button with gradient</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-primary" href="#">Primary</button></td>  
        <td><code>btn btn-primary</code></td>  
        <td>Provides extra visual weight and identifies the primary action in a set of buttons</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-info" href="#">Info</button></td>  
        <td><code>btn btn-info</code></td>  
        <td>Used as an alternative to the default styles</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-success" href="#">Success</button></td>  
        <td><code>btn btn-success</code></td>  
        <td>Indicates a successful or positive action</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-warning" href="#">Warning</button></td>  
        <td><code>btn btn-warning</code></td>  
        <td>Indicates caution should be taken with this action</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-danger" href="#">Danger</button></td>  
        <td><code>btn btn-danger</code></td>  
        <td>Indicates a dangerous or potentially negative action</td>  
      </tr>  
      <tr>  
        <td><button class="btn btn-inverse" href="#">Inverse</button></td>  
        <td><code>btn btn-inverse</code></td>  
        <td>Alternate dark gray button, not tied to a semantic action or use</td>  
      </tr>  
    </tbody>  
  </table>    
</body>
</html>
```



###### 基本按钮

Bootstrap框架V3.x版本的基本按钮和V2.x版本的基本按钮一样，都是通过类名“btn”来实现。

不同的是在V3.x版本要简约很多，去除了V2.x版本中的大量的CSS3中的部分特效，比如说文本阴影（text-shadow）、渐变背景（background-image）、边框阴

影（box-shadow）等。

Bootstrap框架中的考虑了不同浏览器的解析差异，进行了比较安全的兼容性处理，使按钮效果在不同的浏览器中所呈现的效果基本相同。

```css
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

使用方式如下：

```html
<button class="btn" type="button">我是一个基本按钮</button>
```

运行效果如下:

![img](https://img.mukewang.com/53b28609000143a602800084.jpg)



###### 默认按钮

通过基础类名“**.btn**”定义了一个基础的按钮风格，然后通过“**.btn-default**”定义了一个默认的按钮风格。

默认按钮的风格就是在基础按钮的风格的基础上修改了按钮的**背景颜色**、**边框颜色**和**文本颜色**。

```css
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
```

使用**默认按钮风格**也非常的简单，只需要在基础按钮“btn”的基础上增加类名“btn-default”即可：

```html
<button class="btn btn-default" type="button">默认按钮</button>
```

运行效果如下:

![img](https://img.mukewang.com/53b287170001023501820104.jpg)



###### 多标签支持

一般制作按钮除了使用`<button>`标签元素之外，还可以使用`<input type="submit">`和`<a>`标签等。

其他标签制作的基本按钮效果：

```html
<button class="btn btn-default" type="button">button标签按钮</button>
<input type="submit" class="btn btn-default" value="input标签按钮"/>
<a href="##" class="btn btn-default">a标签按钮</a>
<span class="btn btn-default">span标签按钮</span>
<div class="btn btn-default">div标签按钮</div>
```

运行效果如下:

![img](https://img.mukewang.com/53b287f800014bc402460068.jpg)

> 注意：为了避免浏览器兼容性问题，个人强烈建议使用**button**或**a**标签来制作按钮。



###### 定制风格

其他六种按钮风格，每种风格的其实都一样，不同之处就是按钮的背景颜色、边框颜色和文本颜色。

![img](https://img.mukewang.com/53b367bd0001d59c07530312.jpg)

![img](https://img.mukewang.com/53b367d10001846a08020810.jpg)



使用方法，只需要在基础按钮“.btn”基础上追加**对应的类名**，就可以得到需要的按钮风格。如：

```html
<button class="btn" type="button">基础按钮.btn</button>
<button class="btn btn-default" type="button">默认按钮.btn-default</button>
<button class="btn btn-primary" type="button">主要按钮.btn-primary</button>
<button class="btn btn-success" type="button">成功按钮.btn-success</button>
<button class="btn btn-info" type="button">信息按钮.btn-info</button>
<button class="btn btn-warning" type="button">警告按钮.btn-warning</button>
<button class="btn btn-danger" type="button">危险按钮.btn-danger</button>
<button class="btn btn-link" type="button">链接按钮.btn-link</button>
```

运行效果如下:

![img](https://img.mukewang.com/53b368510001fe2701800274.jpg)



###### 按钮大小

在Bootstrap框架中提供了三个类名来控制按钮大小：

![img](https://img.mukewang.com/53b36a7600014af106910605.jpg)

在Bootstrap框架中控制按钮的大小都是通过修改按钮的**padding**、**line-height**、**font-size**和**border-radius**几个属性。

```css
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
```

不能缺少“**.btn**”类名：

```html
<button class="btn btn-primary btn-lg" type="button">大型按钮.btn-lg</button>
<button class="btn btn-primary" type="button">正常按钮</button>
<button class="btn btn-primary btn-sm" type="button">小型按钮.btn-sm</button>
<button class="btn btn-primary btn-xs" type="button">超小型按钮.btn-xs</button>
```

运行效果如下:

![img](https://img.mukewang.com/53b36b220001f92302370097.jpg)





###### 块状按钮

上面每个示例中的**按钮宽度**都是依靠**按钮文本**和**padding**的值来决定。

但有时候在制作按钮的时候需要按钮宽度充满整个父容器**（width:100%）**，特别是在移动端的制作中。

Bootstrap框架中提供了一个类名“**btn-block**”（块状按钮）。

按钮使用这个类名就可以让按钮充满整个容器，并且这个按钮不会有任何的**padding**和**margin**值。

源码：

```css
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
```

在原按钮类名上添加“.btn-block”类名，当然“.btn”类名是不可或缺的：

```html
<button class="btn btn-primary btn-lg btn-block" type="button">大型按钮.btn-lg</button>
<button class="btn btn-primary btn-block" type="button">正常按钮</button>
<button class="btn btn-primary btn-sm btn-block" type="button">小型按钮.btn-sm</button>
<button class="btn btn-primary btn-xs btn-block" type="button">超小型按钮.btn-xs</button>
```

运行效果如下：

![img](https://img.mukewang.com/53b36c2b000130f202260110.jpg)



###### 按钮状态——活动状态

主要包括按钮的**悬浮状态(:hover)**，**点击状态(:active)**和**焦点状态（:focus）**几种。

```css
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
```

而且不同风格下的按钮都具有这几种状态效果，只是颜色做了一定的调整，以默认风格（btn-default）为例：

```css
.btn-default:focus,
.btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  background-image: none;
  border-color: #adadad;
}
.btn-default:active:hover,
.btn-default.active:hover,
.open > .dropdown-toggle.btn-default:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.open > .dropdown-toggle.btn-default:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
```

当按钮处理正在点击状态（也就是鼠标按下的未松开的状态）:

对于<button>元素是通过“:active”伪类实现

而对于<a>这样的标签元素则是通过添加类名“.active”来实现



###### 按钮状态——禁用状态

禁用状态与其他状态按钮相比，就是背景颜色的透明度opcity的值从100%调整为65%。

**禁用按钮有两种实现方式：**

**方法1：**在标签中添加**disabled属性**，可以禁止元素的默认行为的。

**方法2：**在元素标签中添加**类名“disabled”**，不会禁止按钮的默认行为，比如说**提交**和**重置**行为等（实测可以禁止）。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<title>按钮状态——禁用状态</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
	<button class="btn btn-primary btn-lg btn-block" type="button" disabled="disabled">通过disabled属性禁用按钮</button> 
	<button class="btn btn-primary btn-block disabled" type="button">通过添加类名disabled禁用按钮</button>
	<button class="btn btn-primary btn-sm btn-block" type="button">未禁用的按钮</button>
  <form>
    <input type="text" class="form-control" placeholder="test" />
    <button type="reset" class="btn btn-primary btn-block " disabled="disabled" >重置</button>
    <input type="reset" class="btn btn-primary btn-block " disabled="disabled" value="重置"/>
    <a href="https://www.baidu.com" type="button" class="btn btn-primary btn-block disabled" target="_blank" >是否被禁用</a>
  </form>
</body>
</html>
```

举例：

```html
<button class="btn btn-primary btn-lgbtn-block" type="button" disabled="disabled">通过disabled属性禁用按钮</button>
<button class="btn btn-primary btn-block disabled" type="button">通过添加类名disabled禁用按钮</button>
<button class="btn btn-primary btn-smbtn-block" type="button">未禁用的按钮</button>
```

运行效果如下：

![img](https://img.mukewang.com/53b36e9d0001132e02690107.jpg)

源码：

```css
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  opacity: 0.65;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
```

同样的，其他风格按钮也具有这样的效果，只是颜色做了一定的调整，比如信息按钮(.btn-info)所示：

```css
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
```

同样的，可以通过buttons.less或者_buttons.scss来自定义按钮风格。





##### 表单控件大小

可以通过设置控件的**height，line-height，padding**和**font-size**等属性来实现控件的高度设置。

提供了两个不同的类名，用来控制表单控件的高度。这两个类名是：

- **input-sm**: 让控件比正常大小更小

- **input-lg**: 让控件比正常大小更大

这两个类适用于表单中的**input**，**textarea**和**select**控件，具体使用如下：

```html
<input class="form-control input-lg" type="text" placeholder="添加.input-lg，控件变大">
<input class="form-control" type="text" placeholder="正常大小">
<input class="form-control input-sm" type="text" placeholder="添加.input-sm，控件变小">
```

运行效果如下:

![img](https://img.mukewang.com/53b269860001e43f02260101.jpg)

源码：

```css
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}

.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
```

从上面的源码中不难发现，不管是“input-sm”还是“input-lg”仅对控件高度做了处理。

但往往很多时候，我们需要控件宽度也要做一定的变化处理。这个时候就要借住Bootstrap框架的[**网格系统**]()。

所以你要控制表单宽度，可以像下面这样使用：

```html
<form role="form" class="form-horizontal">
  <div class="form-group">
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  <div class="col-xs-4">
    <input class="form-control input-lg" type="text" placeholder=".col-xs-4">
  </div>
  </div>
    …
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b26a6a00018cba02420078.jpg)

前面介绍水平表单时说过，如果表单使用了类名“**form-horizontal**”，其中“**form-group**”就相当于网格系统中的“**row”**。

换句话说，如果没有这样做，要通过网格系统来控制表单控件宽度，就需要这样使用：

```HTML
<div class="row">  <!-- 替代class="form-group" -->
    <div class="col-xs-4">
    	<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
    </div>
    <div class="col-xs-4">
    	<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
    </div>
    <div class="col-xs-4">
    	<input class="form-control input-lg" type="text" placeholder=".col-xs-4">
    </div>
</div>
```



##### 表单控件状态

**作用：**

每一种状态都能给用户传递不同的信息，

比如表单有焦点的状态可以告诉用户可以输入或选择东西，

禁用状态可以告诉用户不可以输入或选择东西，

还有就是表单控件验证状态，可以告诉用户的操作是否正确等。



###### 焦点状态

焦点状态是通过伪类“**:focus**”来实现。

Bootstrap框架中表单控件的焦点状态删除了**outline**的默认样式，重新添加阴影效果。

```css
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
}
```

要让控件在焦点状态下有上面样式效果，需要给控件添加类名“**form-control**”

```html
<form role="form" class="form-horizontal">
  <div class="form-group">
    <div class="col-xs-6">
      <input class="form-control input-lg" type="text" placeholder="不是焦点状态下效果">
    </div>
    <div class="col-xs-6">
      <input class="form-control input-lg" type="text" placeholder="焦点点状态下效果">
    </div>
  </div>
</form>
```

运行效果如下:

![img](https://img.mukewang.com/53b271e700018f8a02780042.jpg)

在Bootstrap框架中，**file**、**radio**和**checkbox**控件在焦点状态下的效果也与普通的input控件不太一样。

```css
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
```



###### 禁用状态

Bootstrap框架的表单控件的禁用状态和普通的表单禁用状态实现方法是一样的，在相应的表单控件上添加属性“**disabled**”。

```css
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eeeeee;
  opacity: 1;
}
```

使用方法为：只需要在需要禁用的表单控件上加上“**disabled**”即可：

```html
<input class="form-control" type="text" placeholder="表单已禁用，不能输入" disabled>
```

运行效果如下：

![img](https://img.mukewang.com/53b27abf00013e5f03360048.jpg)

在使用了“**form-control**”的表单控件中，样式设置了禁用表单背景色为灰色，而且手型变成了不准输入的形状。

如果控件中不使用类名“**form-control**”，禁用的控件只会有一个不准输入的手型出来。

```css
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
```

在Bootstrap框架中，如果**fieldset**设置了**disabled**属性，整个域都将处于被禁用状态。

```html
<form role="form">
<fieldset disabled>
  <div class="form-group">
  <label for="disabledTextInput">禁用的输入框</label>
    <input type="text" id="disabledTextInput" class="form-control" placeholder="禁止输入">
  </div>
  <div class="form-group">
  <label for="disabledSelect">禁用的下拉框</label>
    <select id="disabledSelect" class="form-control">
  <option>不可选择</option>
  </select>
  </div>
  <div class="checkbox">
  <label>
    <input type="checkbox">无法选择
  </label>
  </div>
  <button type="submit" class="btnbtn-primary">提交</button>
</fieldset>
</form>
```

运行效果如下:

![img](https://img.mukewang.com/53b27b2200010df702890118.jpg)



###### `<legend></legend>`

对于整个禁用的域中，如果legend中有输入框的话，这个**输入框是无法被禁用**的。我们一起来验证一下：

```html
<form role="form">
<fieldset disabled> <!-- *** -->
    <legend>
        <input type="text" class="form-control" placeholder="显然我颜色变灰了，但是我没被禁用，不信？单击试一下" />
    </legend>
    …
</fieldset>
</form>
```

运行效果如下:

![img](https://img.mukewang.com/53b27bc30001113302720144.jpg)



###### 验证状态

在制作表单时，不免要做表单验证。同样也需要提供验证状态样式，在Bootstrap框架中同样提供这几种效果。

- .has-success：成功状态（绿色）
- .has-warning: 警告状态（黄色）
- .has-error：错误状态（红色）

使用的时候只需要在form-group容器上对应添加状态类名。

```html
<form role="form">
<div class="form-group has-success"> <!-- 成功状态（绿色） -->
  <label class="control-label" for="inputSuccess1">成功状态</label>
  <input type="text" class="form-control" id="inputSuccess1" placeholder="成功状态" >
</div>
<div class="form-group has-warning"> <!-- 警告状态（黄色） -->
  <label class="control-label" for="inputWarning1">警告状态</label>
  <input type="text" class="form-control" id="inputWarning1" placeholder="警告状态">
</div>
<div class="form-group has-error"> <!-- 错误状态（红色） -->
  <label class="control-label" for="inputError1">错误状态</label>
  <input type="text" class="form-control" id="inputError1" placeholder="错误状态">
</div>
</form>
```

运行效果如下:

![img](https://img.mukewang.com/53b27e170001133702870115.jpg)

从效果可以看出，三种状态下效果都是一样的，只是颜色不一样而以。



很多时候，在表单验证的时候，不同的状态会提供不同的 icon，比如成功是一个对号（√），错误是一个叉号（×）等。

表单在对应的状态下**显示 icon** 出来，添加类名“**has-feedback**”。

请注意，此类名要与“**has-error**”、“**has-warning**”和“**has-success**”在一起：

```html
<form role="form">
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess1">成功状态</label>
  <input type="text" class="form-control" id="inputSuccess1" placeholder="成功状态" >
  <span class="glyphiconglyphicon-ok form-control-feedback"></span>
</div>
<div class="form-group has-warning has-feedback">
  ......
</div>
<div class="form-group has-error has-feedback">
  ......
</div>
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b27e8600013fdf02910117.jpg)

从效果图中可以看出，图标都居右。在 Bootstrap 的小图标都是使用**@font-face**来制作

必须在表单中添加了一个 span 元素：

```html
<span class="glyphicon glyphicon-ok form-control-feedback"></span>
<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
<span class="glyphicon glyphicon-remove form-control-feedback"></span>
```



##### 表单提示信息

 使用了一个"**help-block**"样式，将提示信息以块状显示，并且显示在控件底部。

```html
<form role="form">
<div class="form-group has-success has-feedback">
  <label class="control-label" for="inputSuccess1">成功状态</label>
  <input type="text" class="form-control" id="inputSuccess1" placeholder="成功状态" >
    
  <span class="help-block">你输入的信息是正确的</span>
    
  <span class="glyphiconglyphicon-ok form-control-feedback"></span>
</div>
  …
</form>
```

运行效果如下：

![img](https://img.mukewang.com/53b2829200018aaf02180116.jpg)



源码：

```css
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
```

在Bootstrap V2.x版本中还提供了一个行内提示信息，其使用了类名“**help-inline**”。=> **未找到**

一般让提示信息显示在控件的后面，也就是同一水平显示。

```css
.help-inline{
  display: inline-block;
  padding-left: 5px;
  color: #737373;
}
```

如果你不想为bootstrap.css增加自己的代码，而且设计又有这种样的需求，那么只能借助于Bootstrap的网格系统。

```html
<form role="form">
<div class="form-group">
<label class="control-label" for="inputSuccess1">成功状态</label>
<div class="row">
<div class="col-xs-6">
<input type="text" class="form-control" id="inputSuccess1" placeholder="成功状态" >
</div>
    
<span class="col-xs-6 help-block">你输入的信息是正确的</span>
    
</div>
</div>
</form>
```

运行效果如下:

![img](https://img.mukewang.com/53b283010001402902670049.jpg)

> 结束语：如果你觉得这样的表单效果并不是你需要的，可以通过**forms.less**或者**_forms.scss**文件进行定制，然后重新编译就可以得到需要的表单效果。





##### 图像

在Bootstrap框架中对于图像的样式风格提供以下几种风格：

**1、img-responsive：**响应式图片，主要针对于响应式设计

**2、img-rounded：**圆角图片

**3、img-circle：**圆形图片

**4、img-thumbnail：**缩略图片

**使用方法：**

在**`<img>`**标签上添加对应的类名，如下代码：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<title>图像</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <img   alt="140x140" src="http://placehold.it/140x140">
        <div>默认图片</div>
    </div>
    <div class="col-sm-4">
      <img  class="img-rounded" alt="140x140" src="http://placehold.it/140x140"> 
        <div>圆角图片</div>
    </div>
    <div class="col-sm-4">
      <img  class="img-circle" alt="140x140" src="http://placehold.it/140x140">
        <div>圆形图片</div>
    </div>
      <div class="row">
        <div class="col-sm-6">
          <img  class="img-thumbnail" alt="140x140" src="http://placehold.it/140x140"> 
            <div>缩略图</div>
        </div>
        <div class="col-sm-6">
          <img  class="img-responsive" alt="140x140" src="http://placehold.it/140x140" /> 
          <div>响应式图片</div>
        </div>
      </div>
  </div>
</div> 
</body>
</html>
```

运行效果如下:

![img](https://img.mukewang.com/53b36fc300017b1e02980139.jpg)

源码：

```css
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.img-circle {
  border-radius: 50%;
}
```

**设置图片大小：**

由于样式没有对图片做大小上的样式限制，所以在实际使用的时候，需要通过其他的方式来处理图片大小。

比如说控制图片容器大小。（注意不可以通过css样式直接修改img图片的大小，这样操作就不响应了）

> **注意：**对于圆角图片和圆形图片效果，因为是使用了CSS3的圆角样式来实现的，所以注意对于IE8以及其以下版本不支持，是没有圆角效果的。

Bootstrap框架为了大家更好的维护图像的样式，同样将这部分样式独立出来：

1、LESS版本，可以查阅scaffolding.less

2、Sass版本，可以查阅_scaffolding.scss



##### 图标

**200个icon**：使用**CSS3**的**@font-face**属性配合字体来实现的icon效果。

![img](https://img.mukewang.com/53db0e5b0001aff810560855.jpg)

**放心使用**：

首先要感谢[**glyphicons.com**](https://glyphicons.com/)网站，因为Bootstrap框架中图标都是glyphicons.com这个商业网站提供的，并且免费授权给Bootstrap框架使用，所以大家可以放心

使用在自己的项目当中。

Bootstrap框架将内部样式也提取出来：

1、LESS版本：对应源文件为glyphicons.less文件

2、Sass版本：对应源文件为_glyphicons.scss文件

**原理分析**：

```CSS
@font-face {
    font-family: 'Glyphicons Halflings';
    src: url('../fonts/glyphicons-halflings-regular.eot');
    src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
```

在Bootstrap框架中有一个**fonts**的目录，这个目录中提供的字体文件就是用于制作icon的字体文件。

自定义完字体之后，需要对**icon**设置一个默认样式，在Bootstrap框架中是通过给元素添加**“glyphicon”**类名来实现，然后通过伪元素“**:before**”的“**content**”属性

调取对应的icon编码：

```CSS
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\002a";
}
.glyphicon-plus:before {
  content: "\002b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\20ac";
}
...
```



在任何**内联元素**上应用所对应的样式即可：

```html
<span class="glyphicon glyphicon-search"></span>
<span class="glyphicon glyphicon-asterisk"></span>
<span class="glyphicon glyphicon-plus"></span>
<span class="glyphicon glyphicon-cloud"></span>
<span class="glyphicon glyphicon-heart"></span>
```

运行效果如下或查看右侧结果窗口：

![img](https://img.mukewang.com/53b371270001aff102680096.jpg)

所有icon都是以”**glyphicon-**”前缀的类名开始，然后后缀表示图标的名称。具体说明如下：

![img](https://img.mukewang.com/53da0a7e0001300509180435.jpg)

**特别说明**：

除了使用glyphicon.com提供的图标之外，还可以使用第三方为Bootstrap框架设计的图标字体，

如[Font Awesome](http://www.bootcss.com/p/font-awesome/)。使用方法和上面介绍的一样，不过记得将字体下载到你本地。 感兴趣的可以阅读官网相关介绍。





### 《网格系统》

#### 实现原理

通过定义容器大小，平分12份(也有平分成24份或32份，但12份是最常见的)，

再调整内外边距，最后结合媒体查询，就制作出了强大的响应式网格系统。

Bootstrap框架中的网格系统就是将容器平分成12份。

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>实现原理</title>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
  </div>
  <div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
  </div>
    <div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
  </div>
</div>
</body>
</html>
```



#### 工作原理

1、数据行(.row)必须包含在容器（.container）中，以便为其赋予合适的对齐方式和内距(padding)。如：

```html
<div class="container">
  <div class="row"></div>
</div>
```

2、在行(.row)中可以添加列(.column)，但列数之和不能超过平分的总列数，比如12。如：

```html
<div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-8"></div>
    </div>
</div>
```

3、具体内容应当放置在列容器（column）之内，而且只有列（column）才可以作为行容器(.row)的直接子元素

4、通过设置内距（padding）从而创建列与列之间的间距。然后通过为第一列和最后一列设置负值的外距（margin）来抵消内距(padding)的影响



为了更好的理解Bootstrap框架的网格系统工作原理，我们来看一张草图：

![img](https://img.mukewang.com/53b0f9c000018b9305540282.jpg)

简单对图解释一下：

1、最外边框，带有一大片白色区域，就是相当于浏览器的可视区域。网格系统中带有响应式效果，其带有四种类型的浏览器（超小屏，小屏，中屏和大屏），其

断点（像素的分界点）是768px、992px和1220px。

2、第二个边框(1)相当于容器(.container)。针对不同的浏览器分辨率，其宽度也不一样：自动、750px、970px和1170px。

```css
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```

3、２号横条阐述的是，将容器的行（.row）平分了12等份，也就是列。每个列都有一个“**padding-left:15px**”(图中粉红色部分)和一个“**padding-right:15px**”(图中紫色部分)。这样也导致了第一个列的padding-left和最后一列的padding-right占据了总宽度的30px，从而致使页面不美观，当然，如果你需要留有一定的间距，这个做法是不错的。

```css
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,
.col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, 
.col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, 
.col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, 
.col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, 
.col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, 
.col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, 
.col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, 
.col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, 
.col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, 
.col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, 
.col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
```

4、３号横条就是行容器(.row),其定义了“margin-left”和”margin-right”值为”-15px”，用来抵消第一个列的左内距和最后一列的右内距。

```css
.row {
  margin-right: -15px;
  margin-left: -15px;
}
```

5、将行与列给合在一起就能看到横条4的效果。也就是我们期望看到的效果，**第一列和最后一列与容器（.container）之间没有间距**。

6、横条５只是想向大家展示，你可以根据需要，任意组合列与列，只是他们的组合数之和不要超过总列数。



#### 基本用法

网格系统用来布局，其实就是列的组合。网格系统中有**四种基本的用法**。

![img](https://img.mukewang.com/53e483500001c7f408770494.jpg)

**Grid options**

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

|                 | Extra small devices Phones(≤768px) | Small devices Tablets(≥768px)                    | Medlum devices Desktops (≥992px) | Large devices Desktops (≥1200px) |
| --------------- | ---------------------------------- | ------------------------------------------------ | -------------------------------- | -------------------------------- |
| Grid behavior   | Horizontal at all times            | Collapsed to start, horizontal above breakpoints |                                  |                                  |
| Container width | None(auto)                         | 750px                                            | 970px                            | 1170px                           |
| Class prefix    | `.col-xs-`                         | `.col-sm-`                                       | `.col-md-`                       | `.col-lg-`                       |
| # of columns    | 12                                 |                                                  |                                  |                                  |
| Column width    | Auto                               | -62px                                            | -81px                            | -97px                            |
| Gutter width    | 30px(15 on each side of column)    |                                                  |                                  |                                  |
| Nestable        | Yes                                |                                                  |                                  |                                  |
| Offsets         | Yes                                |                                                  |                                  |                                  |
| Column ordering | Yes                                |                                                  |                                  |                                  |



##### 列组合

列组合简单理解就是**更改数字**来合并列（原则：列总和数不能超12），有点类似于表格的colspan属性，以中屏（970px）为例

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-8">.col-md-8</div>
  </div>
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3">.col-md-3</div>
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-3">.col-md-3</div>
 </div>
</div>
```

使用上面的结构，你将看到下图的效果：

![img](https://img.mukewang.com/53b0fbdc00015f2805540051.jpg)

实现列组合方式非常简单，两个CSS两个特性：**浮动**与**宽度百分比**。

```css
@media (min-width: 992px) {
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
```



##### 列偏移

在列元素上添加类名“**col-md-offset-***”(其中星号代表要偏移的列组合数)，有这个类名的列就会**向右偏移**。

例如，你在列元素上添加“col-md-offset-4”，表示该列向右移动4个列的宽度。

```html
<div class="container">
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-2 col-md-offset-4">列向右移动四列的间距</div>
        <div class="col-md-2">.col-md-3</div>
    </div>
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 col-md-offset-4">列向右移动四列的间距</div>
    </div>
</div>
```

运行：

![img](https://img.mukewang.com/53b0fe8d00018ca605530045.jpg)

实现原理非常简单，就是利用十二分之一（1/12）的margin-left。

然后有多少个offset，就有多少个margin-left。

```css
.col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
```

> 注意：对列进行向右偏移时，要保证列与偏移列的总数不超过12，不然会致列断行显示，如：

```html
<div class="row">
  <div class="col-md-3">.col-md-3</div>
  <div class="col-md-3 col-md-offset-3">col-md-offset-3</div>
  <div class="col-md-4">col-md-4</div>
</div>
```

![img](https://img.mukewang.com/53b0ff3f00015e2f05530050.jpg)



##### 列排序

列排序其实就是改变列的方向，就是改变左右浮动，并且设置浮动的距离。

通过添加类名“`col-md-push-*`”和“`col-md-pull-*`” (其中星号代表移动的列组合数)。

- 向右移动：“`col-md-push-*`”
- 向左移动：“`col-md-pull-*`” 

简单的示例：

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-8">.col-md-8</div>
  </div>
</div>
```

默认情况之下，上面的代码效果如下：

![img](https://img.mukewang.com/53b10a400001af8005540037.jpg)

“`col-md-4`”居左，“`col-md-8`”居右，如果要互换位置，需要将“`col-md-4`”向右移动８个列的距离，

也就是8个offset ,也就是在“`<div class="col-md-4">`”添加类名“`col-md-push-8`”，调用其样式。

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-push-8">.col-md-4</div>
    <div class="col-md-8">.col-md-8</div>
  </div>
</div>
```

![img](https://img.mukewang.com/53b10a79000152b805540042.jpg)

也要将“`col-md-8`”向左移动４个列的距离，也就是4个offset，在“`<div class="col-md-8`">”上添加类名“`col-md-pull-4`”：

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-push-8">.col-md-4</div>
    <div class="col-md-8 col-md-pull-4">.col-md-8</div>
  </div>
</div>
```



![img](https://img.mukewang.com/53b10aa80001687005530038.jpg)





Bootstrap仅通过设置`left`和`right`来实现**定位效果**。

```CSS
.col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
```



##### 列的嵌套

可以在一个列中添加一个或者多个行（row）容器，然后在这个行容器中插入列（像前面介绍的一样使用列）。

但在列容器中的行容器（row），宽度为100%时，就是当前外部列的宽度。

来看一个简单示例：

```html
<div class="container">
    <div class="row">
        <div class="col-md-8">
        我的里面嵌套了一个网格
           <div class="row">
              <div class="col-md-6">col-md-6</div>
              <div class="col-md-6">col-md-6</div>
           </div>
        </div>
        <div class="col-md-4">col-md-4</div>
     </div>
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-8">
        我的里面嵌套了一个网格
            <div class="row">
              <div class="col-md-4">col-md-4</div>
              <div class="col-md-4">col-md-4</div>
              <div class="col-md-4">col-md-4</div>
            </div>
        </div>
    </div>
</div>
```

效果如下：

![img](https://img.mukewang.com/53b10c9e0001e28b05540070.jpg)

> 注意：嵌套的列总数也需要遵循不超过12列。不然会造成末位列换行显示。





### 《菜单、按钮及导航》

#### 下拉菜单

在Bootstrap框架中的**下拉菜单组件**是一个独立的组件，根据不同的版本，它对应的文件：

- LESS版本：对应的源码文件为 **dropdowns.less**

- Sass版本：对应的源码文件为 **_dropdowns.scss**

在使用Bootstrap框架的下拉菜单时，必须调用Bootstrap框架提供的bootstrap.js文件。

当然，如果你使用的是未编译版本，在js文件夹下你能找到一个名为“dropdown.js”的文件。

你也可以调用这个js文件。不过在我们的教程中，我们统一调用压缩好的“bootstrap.min.js”文件：

```html
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
```

> 特别声明：因为Bootstrap的组件交互效果都是依赖于jQuery库写的插件，所以在使用bootstrap.min.js之前一定要先加载jquery.min.js才会生效果。

简单的示例：

```html
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```

**使用方法：**

在使用Bootstrap框架中的下拉菜单组件时，其结构运用的正确与否非常的重要，如果结构和类名未使用正确，直接影响组件是否能正常运用。

1、使用一个名为“**dropdown**”的容器包裹了整个下拉菜单元素，示例中为:

```html
<div class="dropdown"></div>
```

2、使用了一个**`<button>`**按钮做为父菜单，并且定义类名“**dropdown-toggle**”和自定义“**data-toggle**”属性，且值必须和最外容器类名一致，此示例为:

```
data-toggle="dropdown"
```

子选项选中背景效果

```
aria-haspopup="true" aria-expanded="true"
```

3、下拉菜单项使用一个**ul**列表，并且定义一个类名为“**dropdown-menu**”，此示例为:

```html
<ul class="dropdown-menu">
```



##### 原理分析

Bootstrap框架中的下拉菜单组件，其下拉菜单项默认是隐藏的，如下所示：

![img](https://img.mukewang.com/53e1f1850001230803900164.jpg)

因为“**dropdown-menu**”默认样式设置了“**display:none**”

```css
.dropdown-menu {
  position: absolute; /* 设置绝对定位，相对于父元素div.dropdown */
  top: 100%; /* 让下拉菜单项在父菜单项底部，如果父元素不设置相对定位，该元素相对于body元素 */
  left: 0;
  z-index: 1000; /* 让下拉菜单项不被其他元素遮盖住 */
  display: none; /* 默认隐藏下拉菜单项 */
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
```

当用户点击父菜单项时，下拉菜单将会被显示出来，如下所示：

![img](https://img.mukewang.com/53e1f3dc0001c10204150412.jpg)

当用户再次点击时，下拉菜单将继续隐藏，如下所示：

![img](https://img.mukewang.com/53e1f1850001230803900164.jpg)

**原理分析：**

现在我们来分析一下实现原理，非常简单，通过js技术手段，给父容器“div.dropdown”添加或移除类名“open”来控制下拉菜单显示或隐藏。也就是说，默认情况，“div.dropdown”没有类名“open”，当用户第一次点击时，“div.dropdown”会添加类名“open”；当用户再次点击时，“div.dropdown”容器中的类名“open”又会被移除。我们可以通过浏览器的firebug查看整个过程：

默认情况：

[![img](https://img.mukewang.com/53e314020001537208700352.jpg)](https://img.mukewang.com/53e314020001537208700352.jpg)

用户第一次点击：

[![img](https://img.mukewang.com/53e314360001a81808720333.jpg)](https://img.mukewang.com/53e314360001a81808720333.jpg)

用户再次点击：

[![img](https://img.mukewang.com/53e31461000180e608710333.jpg)](https://img.mukewang.com/53e31461000180e608710333.jpg)

在bootstrap.css文件第3076行～第3078行，我们可以很容易发现：

```css
.open > .dropdown-menu {
  display: block;
}
```



##### 下拉分隔线

假设下拉菜单有两个组，那么组与组之间可以通过添加一个空的<li>，并且给这个<li>**添加类名**“**divider**”来实现添加下拉分隔线的功能。

对应的样式代码：

```css
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
```

```html
<li class="divider"></li>
```

效果如下：



![img](https://img.mukewang.com/53e346260001aed304220432.jpg)



##### 菜单标题

给每个组添加一个头部（标题）。如下：

```html
<div class="dropdown">
<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
下拉菜单
<span class="caret"></span>
</button>
  
<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    
<li role="presentation" class="dropdown-header">第一部分菜单头部</li>
    
<li role="presentation"><a role="menuitem" tabindex="-1" href="#">下拉菜单项</a></li>
…
<li role="presentation" class="divider"></li>
    
<li role="presentation" class="dropdown-header">第二部分菜单头部</li>
…
<li role="presentation"><a role="menuitem" tabindex="-1" href="#">下拉菜单项</a></li>
</ul>
</div>
```

对应的样式如下：

```css
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
```

运行效果如下：

![img](https://img.mukewang.com/53e34b1e0001ccdd07440651.jpg)



##### 对齐方式

###### 实现右对齐方法

下拉菜单默认是左对齐，让下拉菜单相对于父容器**右对齐**时，可以在`“dropdown-menu”`上添加一个`“pull-right”`或者`“dropdown-menu-right”`类名，如下所示：

```HTML
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
  下拉菜单
  <span class="caret"></span>
  </button>
  <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">
   …
  </ul>
</div>
```

###### 实现原理

```css
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
```

同时一定要为.dropdown添加`float:left`css样式。

```css
.dropdown{
  float: left;
}
```

运行效果如下所示：

![img](https://img.mukewang.com/53e34c370001522204970469.jpg)



##### 与父容器左边对齐(默认)

相反的类名`“dropdown-menu-left”`，其效果就是让下拉菜单与父容器左边对齐，其实就是默认效果。

```css
.dropdown-menu-left {
  right: auto;
  left: 0;
}
```





##### 菜单项状态

下拉菜单项的默认的状态（不用设置）有**悬浮状态（:hover）**和**焦点状态（:focus）**：

```css
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
```

下拉菜单项除了上面两种状态，还有**当前状态（.active）**和**禁用状态（.disabled）**。

这两种状态使用方法只需要在对应的菜单项上添加对应的类名：

```html
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
  下拉菜单
  <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#">下拉菜单项</a></li>
    ….
    <li role="presentation" class="disabled"><a role="menuitem" tabindex="-1" href="#">下拉菜单项</a></li>
  </ul>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/53e44d0d000131d208720446.jpg)

源码：

```css
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #337ab7;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
```





#### 按钮

##### 按钮组

按钮组也是一个独立的组件，所以可以找到对应的源码文件：

- LESS版本：对应的源文件为buttons.less

- Sass版本：对应的源文件为_buttons.scss

- CSS版本：对应bootstrap.css文件第3131行～第3291行

**使用方法：**

按钮组和下拉菜单组件一样，需要依赖于button.js插件才能正常运行。

不过我们同样可以直接只调用bootstrap.js文件。因为这个文件已集成了button.js插件功能。

对于结构方面，非常的简单。使用一个名为`“btn-group”`的容器，把多个按钮放到这个容器中。如下所示：

```html
<div class="btn-group">
  <button type="button" class="btn btn-default">
     <span class="glyphicon glyphicon-step-backward"></span>
  </button>
   …
  <button type="button" class="btn btn-default">
     <span class="glyphicon glyphicon-step-forward"></span>
  </button>
</div>
```

运行效果如下所示：

![img](https://img.mukewang.com/53e458d10001af8808310131.jpg)

除了可以使用<button>元素之外，还可以使用其他标签元素，比如<a>标签。唯一要保证的是：不管使用什么标签，“.btn-group”容器

里的标签元素需要带有类名“.btn”。

按钮组实现源码如下：

```css
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
```

从效果图上我们可以看出，按钮组四个角都是圆角（支持CSS3的浏览器），除了第一个和最后一个具有边上的圆角之外，其他的按钮没

有圆角，它是怎么实现的呢？其实实现方法非常简单：

1、默认所有按钮都有圆角

 2、除第一个按钮和最后一个按钮（下拉按钮除外），其他的按钮都取消圆角效果

 3、第一个按钮只留左上角和左下角是圆角

 4、最后一个按钮只留右上角和右下角是圆角

对应的源码如下：

```css
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
```

案例：

```html
<div class="btn-group">
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-zoom-in"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-zoom-out"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-download"></span></button>
    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-upload"></span></button>
</div>
```

![img](http://img.mukewang.com/53e851e60001ba6302200056.jpg)



##### 按钮工具栏

在富文本编辑器中，将按钮组分组排列在一起，比如说复制、剪切和粘贴一组；左对齐、中间对齐、右对齐和两端对齐一组，如下图所示：

![img](https://img.mukewang.com/53e45edc00019ad308600101.jpg)

将按钮组“btn-group”按组放在一个**大的容器“btn-toolbar”**中，如下所示：

```html
<div class="btn-toolbar">
  <div class="btn-group">
    …
  </div>
  <div class="btn-group">
    …
  </div>
  <div class="btn-group">
    …
  </div>
  <div class="btn-group">
    …
  </div>
</div>
```

实现原理主要是让容器的多个分组`“btn-group”`元素进行浮动，并且组与组之前保持5px的左外距。代码如下：

```css
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
```

> 注意在”btn-toolbar”上清除浮动。

```css
.btn-toolbar:before,
.btn-toolbar:after{
  display: table;
  content: " ";
}
.btn-toolbar:after{
  clear: both;
}
```

运行效果如下：

![img](https://img.mukewang.com/53e462020001bd2e08240084.jpg)



##### 按钮组大小设置

- .btn-group-lg:大按钮组

- .btn-group-sm:小按钮组
- .btn-group-xs:超小按钮组

只需要在“.btn-group”类名上追加对应的类名，就可以得到不同大小的按钮组。如下所示：

只需要在“.btn-group”类名上追加对应的类名，就可以得到不同大小的按钮组。如下所示：

```
<div class="btn-toolbar">
  <div class="btn-group btn-group-lg">
    …
  </div>
  <div class="btn-group">
    …
  </div>
  <div class="btn-group btn-group-sm">
    …
  </div>
  <div class="btn-group btn-group-xs">
   …
  </div>
</div>
```

运行效果如下所示：

[![img](https://img.mukewang.com/53e4632b0001bb2808230100.jpg)](https://img.mukewang.com/53e4632b0001bb2808230100.jpg)

实现上图效果样式代码如下：

```css
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
```



##### 嵌套分组

下拉菜单和普通的按钮组排列在一起，实现类似于导航菜单的效果。如下所示：

![img](https://img.mukewang.com/53e466ac0001273008410307.jpg)

把制作下拉菜单的`“dropdown”`的容器换成`“btn-group”`，并且和普通的按钮放在同一级。如下所示：

```html
<div class="btn-group">
<button class="btnbtn-default" type="button">首页</button>
<button class="btnbtn-default" type="button">产品展示</button>
<button class="btnbtn-default" type="button">案例分析</button>
<button class="btnbtn-default" type="button">联系我们</button>
    
<div class="btn-group">
   <button class="btnbtn-default dropdown-toggle" data-toggle="dropdown" type="button">关于我们<span class="caret"></span></button>
   <ul class="dropdown-menu">
         <li><a href="##">公司简介</a></li>
         <li><a href="##">企业文化</a></li>
         <li><a href="##">组织结构</a></li>
         <li><a href="##">客服服务</a></li>
    </ul>
</div>
    
</div>
```

实现的样式代码：

```css
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
```



##### 垂直分组(容器)

把水平分组的`“btn-group”`类名换成`“btn-group-vertical”`即可。如下所示：

```html
<div class="btn-group-vertical">
<button class="btnbtn-default" type="button">首页</button>
<button class="btnbtn-default" type="button">产品展示</button>
<button class="btnbtn-default" type="button">案例分析</button>
<button class="btnbtn-default" type="button">联系我们</button>
<div class="btn-group">
   <button class="btnbtn-default dropdown-toggle" data-toggle="dropdown" type="button">关于我们<span class="caret"></span></button>
   <ul class="dropdown-menu">
      <li><a href="##">公司简介</a></li>
      <li><a href="##">企业文化</a></li>
      <li><a href="##">组织结构</a></li>
      <li><a href="##">客服服务</a></li>
</ul>
</div>
</div>
```

运行的效果如下：

![img](https://img.mukewang.com/53e85b8f0001cfd001870309.jpg)

实现垂直分组的样式代码：

```css
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
```

和水平分组按钮不一样的是：

- 水平分组按钮第一个按钮左上角和左下角具有圆角以及最后一个按钮右上角和右下角具有圆角

- 垂直分组按钮第一个按钮左上角和右上角具有圆角以及最后一个按钮左下角和右下角具有圆角



##### 等分按钮

等分按钮的效果在**移动端**上特别的实用。

整个按钮组宽度是容器的100%，而按钮组里面的每个按钮平分整个容器宽度。

例如，如果你按钮组里面有五个按钮，那么每个按钮是20%的宽度，如果有四个按钮，那么每个按钮是25%宽度，以此类推。



等分按钮也常被称为是自适应分组按钮，只需要在按钮组`“btn-group”`上**追加**一个“**btn-group-justified**”类名，如下所示：

```html
<div class="btn-wrap">
<div class="btn-group btn-group-justified">
  <a class="btnbtn-default" href="#">首页</a>
  <a class="btnbtn-default" href="#">产品展示</a>
  <a class="btnbtn-default" href="#">案例分析</a>
  <a class="btnbtn-default" href="#">联系我们</a>
</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/53e46af60001ab0306850099.jpg)

实现原理非常简单，把“btn-group-justified”模拟成表格（display:table），而且把里面的按钮模拟成表格单元格（display:table-cell）。具体样式代码如下：

```css
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
```

> **特别声明**：在制作等分按钮组时，请尽量使用**<a>**标签元素来制作按钮，因为使用<button>标签元素时，使用display:table在部分浏览器下支持并不友好。





##### 按钮下拉菜单

按钮下拉菜单仅从外观上看和上一节介绍的下拉菜单效果基本上是一样的。

不同的是在普通的下拉菜单的基础上封装了按钮（.btn）样式效果。简单点说就是点击一个按钮，会显示隐藏的下拉菜单。

按钮下拉菜单其实就是普通的下拉菜单，只不过把“<a>”标签元素换成了“<button>”标签元素。

唯一不同的是外部容器`“div.dropdown”`换成了`“div.btn-group”`。如下所示：

```html
<div class="btn-group">
      <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">按钮下拉菜单<span class="caret"></span></button>
      <ul class="dropdown-menu">
          <li><a href="##">按钮下拉菜单项</a></li>
          <li><a href="##">按钮下拉菜单项</a></li>
          <li><a href="##">按钮下拉菜单项</a></li>
          <li><a href="##">按钮下拉菜单项</a></li>
      </ul>
</div>
<script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
```

实现样式代码如下：

```css
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
```

运行的效果如下：

![](https://img.mukewang.com/53e9be8300019b2a02020189.jpg)



##### 按钮的向下向上三角形

按钮的向下三角形，我们是通过在<button>标签中添加一个“<span>”标签元素，并且命名为“caret”:

```HTML
<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
    按钮下拉菜单
    <span class="caret"></span>
</button>
```

这个三角形完全是通过CSS代码来实现的：

```CSS
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
```

另外在按钮中的三角形**“caret”**做了一定的样式处理：

```css
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
```

有的时候我们的下拉菜单会向上弹起（接下来一个小节会介绍），这个时候我们的三角方向需要朝上显示，实现方法：

需要在**“div.btn-group”类上追加“dropup”类名**（这也是做向上弹起下拉菜单要用的类名）。

```css
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \9;
}
```

上面代码中可以看出，向上三角与向下三角的区别：其实就是改变了一个border-bottom的值。

下面是向上弹起菜单的例子：

```html
<div class="btn-group dropup">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">按钮下拉菜单<span class="caret"></span></button>
  <ul class="dropdown-menu">
        <li><a href="##">按钮下拉菜单项</a></li>
        <li><a href="##">按钮下拉菜单项</a></li>
        <li><a href="##">按钮下拉菜单项</a></li>
        <li><a href="##">按钮下拉菜单项</a></li>
  </ul>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/53e8651e0001c0a102900141.jpg)



##### 向上弹起的下拉菜单

比如说你的菜单在页面最底部，而这个菜单正好有一个下拉菜单，为了让用户有更好的体验，不得不让下拉菜单向上弹出。

为这种效果提代了一个类名“dropup”。

只需要在`“div.btn-group”`上添加这个类名（当然，如果是普通向上弹出下拉菜单，你只需要在**“dropdown”**类名基础上追加“**dropup**”类名即可）。

```html
<div class="btn-group dropup">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">按钮下拉菜单<span class="caret"></span></button>
    <ul class="dropdown-menu">
         <li><a href="##">按钮下拉菜单项</a></li>
         <li><a href="##">按钮下拉菜单项</a></li>
         <li><a href="##">按钮下拉菜单项</a></li>
         <li><a href="##">按钮下拉菜单项</a></li>
    </ul>
</div>
```

运行的效果如下：

![img](https://img.mukewang.com/53e868aa0001399d01890186.jpg)

源码：

```css
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
```

从上面的例子中可以看出，实现方法为：主要将“dropdown-menu”的top值变成了auto，而把bottom值换成了100%：





#### 导航

在Bootstrap框架将导航独立出来成为一个导航组件，根据不同的版本，可以找到对应的源码：

- **LESS版本**：对应的源文件是**navs.less**

- **Sass版本**：对应的源文件是**_navs.scss**

- **编译后版本**：对应源码是bootstrap.css



##### 导航基础样式

Bootstrap框架中制作导航条主要通过**“.nav”**样式。

默认的“.nav”样式不提供默认的导航样式，必须附加另外一个样式才会有效，比如“nav-tabs”、“nav-pills”之类。

实现方法就是为ul标签加入.nav和nav-tabs两个类样式。

```css
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
```



##### 标签形tab导航

标签形导航，也称为选项卡导航。特别是在很多内容分块显示的时，使用这种选项卡来分组十分适合。

标签形导航是通过“**nav-tabs**”样式来实现。在制作标签形导航时需要在原导航“nav”上追加此类名，如：

```html
<ul class="nav nav-tabs">
     <li><a href="##">Home</a></li>
     <li><a href="##">CSS3</a></li>
     <li><a href="##">Sass</a></li>
     <li><a href="##">jQuery</a></li>
     <li><a href="##">Responsive</a></li>
</ul>
```

运行的效果如下所示：

![img](https://img.mukewang.com/53e86aa60001805308940091.jpg)

实现原理非常的简单，将菜单项（li）按块显示，并且让他们在同一水平上排列，然后定义非高亮菜单的样式和鼠标悬浮效果。代码如下：

```css
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
```

其实上例的效果和我们平时看到的选项卡效果并不一致。一般情况之下，选项卡教会有一个当前选中项。

假设我们想让“Home”项为当前选中项，只需要在其标签上添加类名“class="active"”即可：

```html
<ul class="nav nav-tabs">
    <li class="active"><a href="##">Home</a></li>
    …
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/53e86b7700019e0308540121.jpg)

对应样式代码如下：

```css
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
```

除了当前项之外，有的选项卡还带有禁用状态，实现这样的效果，只需要在标签项上添加**“`class="disabled"`”**即可：

```HTML
<ul class="nav nav-tabs">
     <li class="active"><a href="##">Home</a></li>
     …
     <li class="disabled"><a href="##">Responsive</a></li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/53e86c8b00015ca208550155.jpg)

实现这个效果的样式，在默认样式“.nav”中就带有：

```CSS
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
```

> 注意：我们看到的选项卡效果，点击菜单项就可以切换内容，如果要实现这样的效果需要配合js插件，这部分将在后面的教程中会介绍。



##### 胶囊形(pills)导航

当前项高亮显示，并带有圆角效果。其实现方法和“nav-tabs”类似，同样的结构，只需要把类名“nav-tabs”换成“**nav-pills**”即可：

```html
<ul class="nav nav-pills">
      <li class="active"><a href="##">Home</a></li>
      <li><a href="##">CSS3</a></li>
      <li><a href="##">Sass</a></li>
      <li><a href="##">jQuery</a></li>
      <li class="disabled"><a href="##">Responsive</a></li>
</ul>
```

![img](https://img.mukewang.com/53e86ee60001711e08160307.jpg)

实现效果样式代码：

```css
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
```



##### 垂直堆叠的导航

制作垂直堆叠导航只需要在**“nav-pills”**的基础上添加一个“**nav-stacked**”类名即可：

```html
<ul class="nav nav-pills nav-stacked">
     <li class="active"><a href="##">Home</a></li>
     <li><a href="##">CSS3</a></li>
     <li><a href="##">Sass</a></li>
     <li><a href="##">jQuery</a></li>
     <li class="disabled"><a href="##">Responsive</a></li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/53e871a2000102b707240444.jpg)

垂直堆叠导航与胶囊形导航相比，主要是让导航项不浮动，让其垂直排列，然后给相邻导航项留有一定的间距：

```css
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
```

在下拉菜单一节中，下拉菜单组与组之间有一个分隔线。

其实在垂直堆叠导航也具有这样的效果，只需要添加在导航项之间添加“`<li class="nav-divider"></li>`”即可：

```html
<ul class="nav nav-pills nav-stacked">
    <li class="active"><a href="##">Home</a></li>
    <li><a href="##">CSS3</a></li>
    <li><a href="##">Sass</a></li>
    <li><a href="##">jQuery</a></li>
    
   <li class="nav-divider"></li>
   
    <li class="disabled"><a href="##">Responsive</a></li>
</ul>
```

实现样式：

```css
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
```

如果我在”nav-tabs”上添加“nav-stacked”是不是也能实现垂直的标签选项导航呢？

答案是：在bootstrap V2.x版本可以，但在Bootstrap V3.x版本将这个效果取消了，可能作者觉得垂直选择项并不太常见，也不美观吧。



##### 自适应导航

###### 使用

自适应导航指的是导航占据容器全部宽度，而且菜单项可以像表格的单元格一样自适应宽度。

自适应导航和前面使用“**btn-group-justified**”制作的自适应按钮组是一样的。

只不过在制作自适应导航时更换了另一个类名“**nav-justified**”。当然他需要和“nav-tabs”或者“nav-pills”配合在一起使用。如：

```html
<ul class="nav nav-tabs nav-justified">
     <li class="active"><a href="##">Home</a></li>
     <li><a href="##">CSS3</a></li>
     <li><a href="##">Sass</a></li>
     <li><a href="##">jQuery</a></li>
     <li><a href="##">Responsive</a></li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/53ed99aa00016bcb08630061.jpg)



###### 实现原理

实现原理并不难，列表（<ul>）上设置宽度为“100%”，然后每个菜单项(<li>)设置了“display:table-cell”，让列表项以模拟表格单元格的形式显示：

```css
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
```

这里有一个媒体查询条件：“@media (min-width:768px){…}”表示自适应导航仅在浏览器视窗宽度大于768px才能按上图风格显示。

当你的浏览器视窗宽度小于768px的时候，将会按下图的风格展示：

![img](https://img.mukewang.com/53e874f70001bacb06150786.jpg)

从上图效果可以得知，“nav-tabs”和“nav-justified”配合在一起使用，也就是自适应选项卡导航，浏览器视窗宽度小于768px时，在样式上做了另外的处理。

```css
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
```



##### 二级导航

只需要将li当作父容器，使用类名“**dropdown**”，同时在li中嵌套另一个列表ul，使用前面介绍下拉菜单的方法就可以：

```html
<ul class="nav nav-pills">
     <li class="active"><a href="##">首页</a></li>
     <li class="dropdown">
        <a href="##" class="dropdown-toggle" data-toggle="dropdown">教程<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="##">CSS3</a></li>
            …
       </ul>
     </li>
     <li><a href="##">关于我们</a></li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/53e877e700014b0104150304.jpg)

通过浏览器调试工具，不难发现，点击有二级导航的菜单项，会自动添加“open”类名，再次点击就会删除添加的“open”类名：

![img](https://img.mukewang.com/53e878580001e0b307120404.jpg)

简单点来说，就是依靠这个类名来控制二级导航显示与否，并且设置了背景色和边框：

```css
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
```

可以用分隔线，只需要添加“`<li class="nav-divider"></li>`”这样的一个空标签就可以了。

运行效果如下：

![img](https://img.mukewang.com/53e878b600013f7d04750337.jpg)



源码：

```css
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
```





##### 面包屑式导航

面包屑(Breadcrumb)一般用于导航，主要是起的作用是告诉用户现在所处页面的位置（当前位置）。

在Bootstrap框架中面包屑也是一个独立模块组件：

- LESS版本：对应源文件breadcrumbs.less
- Sass版本：对应源文件_breadcrumbs.scss
- 编译出来的版本：源码对应bootstrap.css文件

**使用方法：**

使用方式就很简单，为ol加入breadcrumb类：

```html
<ol class="breadcrumb">
  <li><a href="#">首页</a></li>
  <li><a href="#">我的书</a></li>
  <li class="active">《图解CSS3》</li>
</ol>
```

**实现原理：**

看来不错吧！作者是使用`li+li:before`实现li与li之间的分隔符，所以这种方案在IE低版本就惨了（不支持）。

```css
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\00a0";
}
.breadcrumb > .active {
  color: #777777;
}
```





### 《导航条、分页导航》

#### 导航条navbar

在导航条(navbar)中有一个背景色、而且导航条可以是纯链接（类似导航），也可以是表单，还有就是表单和导航一起结合等多种形式。

在Bootstrap框架中是一个独立组件，所以你也可以根据自己的需求使用不同的版本：

- **LESS版本**：对应的源文件navbar.less
- **Sass版本**：对应的源文件_navbar.scss
- **编译后的版本**：查看bootstrap.css



##### 基础导航条

在制作一个基础导航条时，主要分以下几步：

**第一步：**首先在制作导航的列表`<ul class="nav">`基础上添加类名“**navbar-nav**”

**第二步：**在列表外部添加一个容器（div），并且使用类**名“navbar”和“navbar-default”**

```html
<div class="navbar navbar-default" role="navigation">
     <ul class="nav navbar-nav">
	 	<li class="active"><a href="##">网站首页</a></li>
        <li><a href="##">系列教程</a></li>
        <li><a href="##">名师介绍</a></li>
        <li><a href="##">成功案例</a></li>
        <li><a href="##">关于我们</a></li>
	 </ul>
</div>
```

“.navbar”样式的主要功能就是设置左右padding和圆角等效果，但他和颜色相关的样式没有进行任何的设置。其主要源码如下：

```css
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
```

**原理分析：**

导航条的颜色都是通过**“.navbar-default”**来进行控制：

```css
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
```

navbar-nav样式是在导航.nav的基础上重新调整了菜单项的浮动与内外边距。同时也不包括颜色等样式设置，

```css
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
```



##### 为导航条添加标题、二级菜单及状态

###### 加入导航条标题

在Web页面制作中，常常在菜单前面都会有一个标题（文字字号比其它文字稍大一些），

其实在Bootstrap框架也做了这方面考虑，其通过**“navbar-header”**和**“navbar-brand”**来实现

```html
<div class="navbar navbar-default" role="navigation">
  　<div class="navbar-header">
  　    <a href="##" class="navbar-brand">慕课网</a>
  　</div>
    <ul class="nav navbar-nav">
	   <li class="active"><a href="##">网站首页</a></li>
       <li><a href="##">系列教程</a></li>
       <li><a href="##">名师介绍</a></li>
       <li><a href="##">成功案例</a></li>
       <li><a href="##">关于我们</a></li>
	 </ul>
</div>
```

**原理分析：**

此功能主要起一个提醒功能，当然改良一下可以当作是logo(此处不做过多阐述)。其样式主要是加大了字体设置，并且设置了最大宽度：

```css
.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}
```

同样在默认导航条（navbar-default）下，对navbar-brand也做了颜色处理：

```css
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
```



###### 导航条状态、二级菜单

同样的，在基础导航条中对菜单提供了当前状态，禁用状态，悬浮状态等效果，而且也可以带有二级菜单的导航条

```html
<div class="navbar navbar-default" role="navigation">
  　<div class="navbar-header">
  　    <a href="##" class="navbar-brand">慕课网</a>
  　</div>
	<ul class="nav navbar-nav">
	 	<li class="active"><a href="##">网站首页</a></li>
        <li class="dropdown">
          <a href="##" data-toggle="dropdown" class="dropdown-toggle">系列教程<span class="caret"></span></a>
          <ul class="dropdown-menu">
        	<li><a href="##">CSS3</a></li>
        	<li><a href="##">JavaScript</a></li>
        	<li class="disabled"><a href="##">PHP</a></li>
          </ul>
       </li>
       <li><a href="##">名师介绍</a></li>
       <li><a href="##">成功案例</a></li>
       <li><a href="##">关于我们</a></li>
	</ul>
</div>
```

效果图如下：

![img](https://img.mukewang.com/53f55cad00018e8008660190.jpg)



##### 带搜索表单的导航条

有的导航条中会带有搜索表单，比如新浪微博的导航条：

![img](https://img.mukewang.com/53edcf9d00013cf506950056.jpg)

在Bootstrap框架中提供了一个“**navbar-form**”，使用方法很简单，在navbar容器中放置一个带有navbar-form类名的表单

```html
<form action="##" class="navbar-form navbar-left" rol="search">
	<div class="form-group">
   		<input type="text" class="form-control" placeholder="请输入关键词" />
   	</div>
    <button type="submit" class="btn btn-default">搜索</button>
</form>
```

“**navbar-left**”让表单左浮动，更好实现对齐。在Bootstrap框架中，还提供了“**navbar-right**”样式，让元素在导航条靠右对齐。

```css
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
```

> 注意：这里有一个条件，只有当浏览器视窗宽度大于768px生效。



##### 导航条中的按钮、文本和链接

Bootstrap框架的导航条中除了使用`navbar-brand中的a元素`和`navbar-nav的ul`和`navbar-form`之外，还可以使用其他元素。框架提供了三种其他样式：

1、导航条中的按钮**navbar-btn**

2、导航条中的文本**navbar-text**

3、导航条中的普通链接**navbar-link**

但这三种样式在框架中使用时受到一定的限制，需要和**navbar-brand、navbar-nav**配合起来使用。

而且对数量也有一定的限制，一般情况在使用一到两个不会有问题，超过两个就会有问题。

先来看看这三种样式对应的源码：

```CSS
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
}
```

```CSS
.navbar-default .navbar-text {
  color: #777;
}

.navbar-inverse .navbar-text {
  color: #9d9d9d;
}
```

```CSS
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}

.navbar-inverse .navbar-link {
  color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
```

**navbar-btn和navbar-link在上一小节已经讲过，现在我们**来看一下**navbar-text**的一个简单应用

```HTML
<div class="navbar navbar-default" role="navigation">
  　<div class="navbar-header">
  　    <a href="##" class="navbar-brand">慕课网</a>
  　</div>
	 <ul class="nav navbar-nav">
	 	<li><a href="##" class="navbar-text">Navbar Text</a></li>
	 	<li><a href="##" class="navbar-text">Navbar Text</a></li>
	 	<li><a href="##" class="navbar-text">Navbar Text</a></li>
	 </ul>
</div>
```

在结果窗口中查看效果，可以看出明显的存在问题，通过浏览器调试工具，可以看到a标签有margin-top和margin-bottom的值为15px，欲将其对齐，我们将上面的结构做一定的调整：

```HTML
<div class="navbar navbar-default" role="navigation">
　<div class="navbar-header">
　    <a href="##" class="navbar-brand">慕课网</a>
　</div>
  <div class="nav navbar-nav">
      <a href="##" class="navbar-text">Navbar Text</a>
      <a href="##" class="navbar-text">Navbar Text</a>
      <a href="##" class="navbar-text">Navbar Text</a>
  </div>
</div>
```

换换标签就OK了。



##### 固定导航条

Bootstrap框架提供了两种固定导航条的方式：

- **.navbar-fixed-top**：导航条固定在浏览器窗口顶部

- **.navbar-fixed-bottom**：导航条固定在浏览器窗口底部

只需要在制作导航条最外部容器navbar上追加对应的类名即可：

```HTML
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
　…
</div>
<div class="content">我是内容</div>
<div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
　…
</div>
```

**实现原理：**

在`navbar-fixed-top`和`navbar-fixed-bottom`使用了`position：fixed`属性，

并且设置`navbar-fixed-top`的top值为0，而`navbar-fixed-bottom`的bottom值为0。

具体的源码如下：

```css
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
```

**存在bug及解决方法:**

从运行效果中大家不难发现，页面主内容顶部和底部都被固定导航条给遮住了。为了避免固定导航条遮盖内容，我们需要在body上做一些处理：

```css
body {
  padding-top: 70px; /*有顶部固定导航条时设置*/
  padding-bottom: 70px; /*有底部固定导航条时设置*/
}
```

因为固定导航条默认高度是50px，我们一般设置padding-top和padding-bottom的值为70px，当然有的时候还是需要具体情况具体分析。

**第二种解决这个bug方法：**

把固定导航条都放在页面内容前面：

```html
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
　…
</div>
<div class="navbar navbar-default navbar-fixed-bottom" role="navigation">
　…
</div>
<div class="content">我是内容</div>
```

在文件中添加下列样式代码：

```css
.navbar-fixed-top ~ .content {
   padding-top: 70px;
}
.navbar-fixed-bottom ~ .content {
  padding-bottom: 70px;
}
```

当然，这种方法有的时候也是需要具体情况具体分析的。



##### 响应式导航条

例如Bootstrap框架官网的导航条：

[
![img](https://img.mukewang.com/53eded3b0001db2a06970046.jpg)](https://img.mukewang.com/53eded3b0001db2a06970046.jpg)

（宽屏时效果）

[![img](https://img.mukewang.com/53f580af00017ef408720073.jpg)](https://img.mukewang.com/53f580af00017ef408720073.jpg)

（中屏时效果）

[![img](https://img.mukewang.com/53f580e30001bba208690079.jpg)](https://img.mukewang.com/53f580e30001bba208690079.jpg)

（窄屏时效果）



**使用方法：**

1、保证在窄屏时**需要折叠的内容**必须包裹在带一个div内，并且为这个div加入**collapse、navbar-collapse**两个类名。最后为这个div添加一个**class类名**或者**id名**。

2、保证在窄屏时要显示的图标样式（固定写法）：

```html
<button class="navbar-toggle" type="button" data-toggle="collapse">
  <span class="sr-only">Toggle Navigation</span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
</button>
```

3、并为button添加`data-target=".类名/#id名"`，究竞是类名还是id名呢？由需要折叠的div来决定。如：

需要折叠的div代码段：

```html
<div class="collapse navbar-collapse" id="example">
      <ul class="nav navbar-nav">
      …
      </ul>
</div>
```

窄屏时显示的图标代码段：

```html
<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#example">
  ...
</button>
```

也可以这么写，需要折叠的div代码段：

```html
<div class="collapse navbar-collapse example" >
      <ul class="nav navbar-nav">
      …
      </ul>
</div>
```

窄屏时要显示的图标：

```html
<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".example">
  ...
</button>
```

案例：

```html
<!--代码-->
<div class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
     　<!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->
       <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse">
         <span class="sr-only">Toggle Navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </button>
       <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->
       <a href="##" class="navbar-brand">慕课网</a>
  </div>
  <!-- 屏幕宽度小于768px时，div.navbar-responsive-collapse容器里的内容都会隐藏，显示icon-bar图标，当点击icon-bar图标时，再展开。屏幕大于768px时，默认显示。 -->
  <div class="collapse navbar-collapse navbar-responsive-collapse">
    	<ul class="nav navbar-nav">
      		<li class="active"><a href="##">网站首页</a></li>
      		<li><a href="##">系列教程</a></li>
      		<li><a href="##">名师介绍</a></li>
      		<li><a href="##">成功案例</a></li>
      		<li><a href="##">关于我们</a></li>
	 	</ul>
  </div>
</div>
```



##### 反色导航条

将`navbar-deafult`类名换成`navbar-inverse`。其变化只是导航条的背景色和文本做了修改。如下：

```html
<div class="navbar   navbar-inverse   " role="navigation">
<div class="nav bar-header">
      <a href="##" class="navbar-brand">慕课网</a>
</div>
<ul class="nav navbar-nav">
      <li class="active"><a href="">首页</a></li>
      <li><a href="">教程</a></li>
      <li><a href="">关于我们</a></li>
</ul>
</div>
```



##### 分页导航

###### 带页码的分页导航

在Bootstrap框架为开发者提供不同的版本：

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  LESS版本：对应的源文件pagination.less

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  Sass版本：对应的源文件_pagination.scss

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  编译后版本：对应bootstrap.css

**使用方法：**

平时很多人喜欢用`div>a`和`div>span`结构来制作带页码的分页导航。

不过，在Bootstrap框架中使用的是`ul>li>a`这样的结构，在ul标签上加入pagination方法：

```html
<ul class="pagination">
   <li><a href="#">&laquo;</a></li>
   <li><a href="#">1</a></li>
   <li><a href="#">2</a></li>
   <li><a href="#">3</a></li>
   <li><a href="#">4</a></li>
   <li><a href="#">5</a></li>
   <li><a href="#">&raquo;</a></li>
</ul>
```

运行效果：

![img](https://img.mukewang.com/53f5972900018aa605480162.jpg)

**实现原理：**

从效果中可以看出，当前状态页码会高亮显示，而且不能点击。而最后一页是禁用状态，也不能点击。实现样式：

```css
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
```

> 注意：要禁用当前状态和禁用状态不能点击，我们还要依靠js来实现，或者将这两状态下的a标签换成span标签。

**大小设置：**

在Bootstrap框架中，也可以通过几个不同的情况来设置其大小。类似于按钮一样：

1、通过“pagination-lg”让分页导航变大；

2、通过“pagination-sm”让分页导航变小：

```html
<ul class="pagination pagination-lg">
 …
</ul>
<ul class="pagination">
 …
</ul>
<ul class="pagination pagination-sm">
 …
</ul>
```

**大小设置实现原理：**

其实就是通增加相应的padding大小、font-size大小和圆角大小



###### 翻页分页导航

这种分页导航常常在一些简单的网站上看到，比如说个人博客，杂志网站等。这种分页导航是看不到具体的页码，只会提供一个“上一页”和“下一页”的按钮。

Bootstrap框架将其独立成一个单独的部分：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  LESS版本：对应源文件为pager.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Sass版本：对应源文件为_pager.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 编译后版本：对应bootstrap.css



**使用方法：**

在实际使用中，翻页分页导航和带页码的分页导航类似，为ul标签加入`pager`类：

```html
<ul class="pager">
   <li><a href="#">&laquo;上一页</a></li>
   <li><a href="#">下一页&raquo;</a></li>
</ul>
```

**实现原理：**

对应样式代码：

```css
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
```

**对齐样式设置：**

默认情况之下，翻页分页导航是居中显示，但有的时候我们需要一个居左，一个居右。Bootstrap框架提供了两个样式：

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  previous：让“上一步”按钮居左

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  next：让“下一步”按钮居右

具体使用的时候，只需要在`li`标签上添加对应类名即可：

```html
<ul class="pager">
   <li class="previous"><a href="#">&laquo;上一页</a></li>
   <li class="next"><a href="#">下一页&raquo;</a></li>
</ul>
```

**实现原理：**

实现原理很简单，就是一个进行了左浮动，一个进行了右浮动：

```css
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
```

**状态样式设置：**

和带页码分页导航一样，如果在li标签上添加了disabled类名的时候，分页按钮处于禁用状态，但同样不能禁止其点击功能。

你可以通过js来处理，或将`a`标签换成`span`标签。

```html
<ul class="pager">
  <li class="disabled"><span>&laquo;上一页</span></li>
  <li><a href="#">下一页&raquo;</a></li>
</ul>
```

**状态样式实现原理：**

```css
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777777;
  cursor: not-allowed;
  background-color: #fff;
}
```

案例：

```html
<!--代码-->
<ul class="pager">
  <li><a href="#">&laquo;上一页</a></li>
  <li><a href="#">下一页&raquo;</a></li>
</ul> 
<!--左右对齐-->
<ul class="pager">
  <li class="previous"><a href="#">&laquo;上一页</a></li>
  <li class="next"><a href="#">下一页&raquo;</a></li>
</ul> 
<!--禁止状态-->
<ul class="pager">
  <li class="disabled"><span>&laquo;上一页</span></li>
  <li><a href="#">下一页&raquo;</a></li>
</ul>  
```



##### 标签

在一些Web页面中常常会添加一个标签用来告诉用户一些额外的信息，比如说在导航上添加了一个新导航项，可能就会加一个“new”标签，来告诉用户。

这是新添加的导航项。如下图所示：

![img](https://img.mukewang.com/53f5a3810001256d05550068.jpg)

那么在Bootstrap框架中特意将这样的效果提取出来成为一个标签组件，并且以“.label”样式来实现高亮显示。

既然他是一个独立的组件，当然在不同的版本下有不同的文件：

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  LESS版本：对应的源文件label.less

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  Sass版本：对应的源文件_label.scss

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  编译后版本：bootstrap.css文件

**使用原理：**

使用方法很简单，你可以在使用span这样的行内标签：

```html
<h3>Example heading <span class="label label-default">New</span></h3>
```

**实现原理：**

```css
.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}
```

如果使用的是a标签元素来制作的话，为了让其更美观，在hover状态去掉下划线之类：

```css
a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
```

有的时候标签内没有内容的时候，可以借助CSS3的:empty伪元素将其隐藏：

```css
.label:empty {
  display: none;
}
```

**颜色样式设置：**

和按钮元素button类似，label样式也提供了多种颜色：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-deafult:默认标签，深灰色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-primary：主要标签，深蓝色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-success：成功标签，绿色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-info：信息标签，浅蓝色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-warning：警告标签，橙色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  label-danger：错误标签，红色

主要是通过这几个类名来修改背景颜色和文本颜色：

```html
<span class="label label-default">默认标签</span>
<span class="label label-primary">主要标签</span>
<span class="label label-success">成功标签</span>
<span class="label label-info caret">信息标签</span>
<span class="label label-warning">警告标签</span>
<span class="label label-danger">错误标签</span>
```

**颜色实现原理：**

```css
.label-default {
  background-color: #777777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #286090;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
```



##### 徽章

从某种意义上来说，徽章效果和前面介绍的标签效果是极其的相似。

也是用来做一些提示信息使用。常出现的是一些系统发出的信息，比如你登录你的twitter后，如果你信息没有看，系统会告诉你有多少信息未读，如下图所示：

![img](https://img.mukewang.com/53f5aac500010a7f04370079.jpg)

在Bootstrap框架中，把这种效果称作为徽章效果，使用“badge”样式来实现。

对应的文件版本：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  LESS版本:源文件badges.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  Sass版本：源文件_badges.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  编译后版本：bootstrap.css

**使用方法：**

使用span标签来制作，然后为他加入`badge`类：

```html
<a href="#">Inbox <span class="badge">42</span></a>
```

**实现原理：**

主要将其设置为椭圆形，并且加了一个背景色：

```css
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777777;
  border-radius: 10px;
}
```

同样也使用:empty伪元素，当没有内容的时候隐藏：

```css
.badge:empty {
  display: none;
}
```

可以将徽章与按钮或者导航之类配合使用：

```css
<div class="navbar navbar-default" role="navigation">
　<div class="navbar-header">
　       <a href="##" class="navbar-brand">慕课网</a>
　</div>
  <ul class="nav navbar-nav">
         <li class="active"><a href="##">网站首页</a></li>
         <li><a href="##">系列教程</a></li>
         <li><a href="##">名师介绍</a></li>
         <li><a href="##">成功案例<span class="badge">23</span></a></li>
         <li><a href="##">关于我们</a></li>
  </ul>
</div>
```

**按钮和胶囊形导航设置徽章：**

另外，徽章在按钮元素button和胶囊形导航nav-pills也可以有类似的样式，只不过是颜色不同而以：

```html
<ul class="nav nav-pills">
  <li class="active"><a href="#">Home <span class="badge">42</span></a></li>
   …
  <li><a href="#">Messages<span class="badge">3</span></a></li>
</ul>
<ul class="navnav-pills nav-stacked" style="max-width: 260px;">
    <li class="active">
        <a href="#">
           <span class="badge pull-right">42</span>
           Home
        </a>
    </li>
    …
    <li>
        <a href="#">
           <span class="badge pull-right">3</span>
           Messages
        </a>
    </li>
</ul>
<button class="btnbtn-primary" type="button">
    Messages <span class="badge">4</span>
</button>
```

> 注意：不过和标签组件不一样的是：在徽章组件中没有提供多种颜色风格的效果，不过你也可以通过**badges.less**或者**_badges.scss**快速自定义。





### 《其它内置组件》

#### 缩略图

在网站中最常用的地方就是产品列表页面，一行显示几张图片，有的在图片底下（左侧或右侧）带有标题、描述等信息。

Bootstrap框架将这一部独立成一个模块组件。并通过“**thumbnail**”样式配合**bootstrap的网格系统**来实现。可以将产品列表页变得更好看。

源码文件：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) LESS版本：对应文件thumbnails.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Sass版本：对应文件_thumbnails.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 编译后版本：bootstrap.css



**使用方法：**

通过“**thumbnail**”样式配合**bootstrap的网格系统**来实现。

前面也说过了，缩略图的实现是配合网格系统一起使用，假设我们一个产品列表，如下图所示：

![img](https://img.mukewang.com/5418e97a00014d6806620159.jpg)

先来看结构：

```html
<div class="container">
    <div class="row">
        <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
                <img src="http://img.mukewang.com/5434eba100014fe906000338.png" style="height: 180px; width: 100%; display: block;" alt="">
            </a>
        </div>
    …
    </div>
</div>
```

上面的结构表示的是在宽屏幕（可视区域大于768px）的时候，一行显示四个缩略图(单击全屏查看效果)：

![img](https://img.mukewang.com/5418ea8a00016d7c06500135.jpg)

在窄屏（可视区域小于768px）的时候，一行只显示两个缩略图：

![img](https://img.mukewang.com/5418eac00001bf4a06550366.jpg)



**实现原理：**

布局实现的主要是依靠于Bootstrap框架的网格系统，而缩略图对应的样式代码：

```css
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #337ab7;
}
.thumbnail .caption {
  padding: 9px;
  color: #333333;
}
```



让缩略图配合标题、描述内容，按钮等：

![](https://img.mukewang.com/5418f3a20001103f06620230.jpg)

在仅有缩略图的基础上，添加了一个div名为“caption“的容器，在这个容器中放置其他内容，比如说标题，文本描述，按钮等：

```html
<div class="container">
    <div class="row">
        <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
                <img src="http://a.hiphotos.baidu.com/image/w%3D400/sign=c56d7638b0b7d0a27bc9059dfbee760d/3b292df5e0fe9925d46873da36a85edf8cb171d7.jpg" style="height: 180px; width: 100%; display: block;" alt="">
            </a>
            
            <div class="caption">
              <h3>Bootstrap框架系列教程</h3>
              <p>Bootstrap框架是一个优秀的前端框，就算您是一位后端程序员或者你是一位不懂设计的前端人员，你也能依赖于Bootstrap制作做优美的网站...</p>
              <p>
                  <a href="##" class="btn btn-primary">开始学习</a>
                  <a href="##" class="btn btn-info">正在学习</a>
              </p>
            </div>
            
        </div>
    …
    </div>
</div>
```



#### 警示框

在网站中，网页总是需要和用户一起做沟通与交流。

特别是当用户操作上下文为用户提供一些有效的警示框，比如说告诉用户操作成功、操作错误、提示或者警告等。如下图所示：

![img](https://img.mukewang.com/5418f5120001a99e06760090.jpg)

在Bootstrap框架有一个独立的组件，实现上述的效果，这个组件被称为警示框。

**源码版本：**

![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) LESS版本：对应的源码文件alerts.less

![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Sass版本：对应的源码文件_alerts.scss

![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 编译后的版本：bootstrap.css文件

```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>警示框</title>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>
<body>
    
<h2>默认警示框</h2>
<div class="alert alert-success" role="alert">恭喜您操作成功！</div>
<div class="alert alert-info" role="alert">请输入正确的密码</div>
<div class="alert alert-warning" role="alert">您已操作失败两次，还有最后一次机会</div>
<div class="alert alert-danger" role="alert">对不起，您输入的密码有误</div> 
    
<h2>可关闭的警示框</h2>
<div class="alert alert-success alert-dismissable" role="alert">
    <button class="close" type="button" data-dismiss="alert">&times;</button>
    恭喜您操作成功！
</div>
<div class="alert alert-info alert-dismissable" role="alert">
	<button class="close" type="button" data-dismiss="alert">&times;</button>
	请输入正确的密码
</div>
<div class="alert alert-warning alert-dismissable" role="alert">
	<button class="close" type="button" data-dismiss="alert">&times;</button>
	您已操作失败两次，还有最后一次机会
</div>
<div class="alert alert-danger alert-dismissable" role="alert">
	<button class="close" type="button" data-dismiss="alert">&times;</button>
	对不起，您输入的密码有误
</div>
    
<h2>警示框的链接</h2>
<div class="alert alert-success" role="alert">
    <strong>Well done!</strong> 
    You successfully read 
	<a href="#" class="alert-link">this important alert message</a>
	.
</div>
<div class="alert alert-info" role="alert">
	<strong>Heads up!</strong>
	 This 
	 <a href="#" class="alert-link">alert needs your attention</a>
	 , but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
	<strong>Warning!</strong>
	 Better check yourself, you're 
	 <a href="#" class="alert-link">not looking too good</a>
	 .
</div>
<div class="alert alert-danger" role="alert">
	<strong>Oh snap!</strong>
	<a href="#" class="alert-link">Change a few things up</a>
	 and try submitting again.
</div>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
</body>
</html>
```



##### 默认警示框

Bootstrap框架通过“alert“样式来实现警示框效果。在默认情况之下，提供了四种不同的警示框效果：

 **1、成功警示框**：告诉用用户操作成功，在“alert”样式基础上追加“alert-success”样式，具体呈现的是背景、边框和文本都是绿色；

 **2、信息警示框**：给用户提供提示信息，在“alert”样式基础上追加“alert-info”样式，具体呈现的是背景、边框和文本都是浅蓝色；

 **3、警告警示框**：提示用户小心操作（提供警告信息），在“alert”样式基础上追加“alert-warning”样式，具体呈现的是背景、边框、文本都是浅黄色；

 **4、错误警示框**：提示用户操作错误，在“alert”样式基础上追加“alert-danger”样式，具体呈现的是背景、边框和文本都是浅红色。

如下图示：

![img](https://img.mukewang.com/5418f5c400016e3006660225.jpg)



**使用方法：**

具体使用的时候，可以在类名为“alert”的div容器里放置提示信息。实现不同类型警示框，只需要在“alert”基础上追加对应的类名，如下：

```html
<div class="alert alert-success" role="alert">恭喜您操作成功！</div>
<div class="alert alert-info" role="alert">请输入正确的密码</div>
<div class="alert alert-warning" role="alert">您已操作失败两次，还有最后一次机会</div>
<div class="alert alert-danger" role="alert">对不起，您输入的密码有误</div>
```

运行效果如下：

![img](https://img.mukewang.com/5418f6300001d5b206600225.jpg)

**实现原理：**

其中“alert”样式的源码主要是设置了警示框的背景色、边框、圆角和文字颜色。另外对其内部几个元素h4、p、ul和“.alert-link”做了样式上的特殊处理：

```css
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
```

不同类型的警示框，主要是通过“alert-success”、“alert-info”、“alert-warning”和“alert-danger”样式来实现：

```css
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
```



##### 可关闭的警示框

大家在平时浏览网页的时候，会发现一些警示框带有关闭按钮，用户一点击关闭按钮就能自动关闭显示的警示框（也就是让警示框隐藏不显示）。

在Bootstrap框架中的警示框也具有这样的功能。

**使用方法：**

只需要在默认的警示框里面添加一个关闭按钮。然后进行三个步骤：

 1、需要在基本警示框“alert”的基础上添加“**alert-dismissable**”样式。

 2、在button标签中加入**class="close"**类，实现警示框关闭按钮的样式。

 3、要确保关闭按钮元素上设置了自定义属性：“**data-dismiss="alert"**”（因为可关闭警示框需要借助于Javascript来检测该属性，从而控制警示框的关闭）。

具体使用如下：&times;

```html
<div class="alert alert-success alert-dismissable" role="alert">
    <button class="close" type="button" data-dismiss="alert">&times;</button>
    恭喜您操作成功！
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5418f90a0001127e06660238.jpg)

**原理分析：**

在样式上，需要在基本警示框“alert”的基础上添加“**alert-dismissable**”样式，这样就可以实现带关闭功能的警示框。

```css
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
```



##### 警示框的链接

有时候你可能想在警示框中加入链接地址，用来告诉用户跳到某一个地方或新的页面。

而这个时候你又想让用户能明显的看出来这是链接地址。

在Bootstrap框架中对警示框里的链接样式做了一个高亮显示处理。为不同类型的警示框内的链接进行了加粗处理，并且颜色相应加深。

**实现方法：**

Bootstrap框架是通过给警示框加的**链接**添加一个名为**“alert-link”**的类名，通过“alert-link”样式给链接提供高亮显示。

具体使用如下：

```html
<div class="alert alert-success" role="alert">
    <strong>Well done!</strong> 
    You successfully read 
    <a href="#" class="alert-link">this important alert message</a>
    .
</div>
<div class="alert alert-info" role="alert">
    <strong>Heads up!</strong>
     This 
     <a href="#" class="alert-link">alert needs your attention</a>
     , but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
    <strong>Warning!</strong>
     Better check yourself, you're 
     <a href="#" class="alert-link">not looking too good</a>
     .
</div>
<div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong>
    <a href="#" class="alert-link">Change a few things up</a>
     and try submitting again.
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5418fc470001ee6306570227.jpg)

**实现原理：**

实现样式如下：

```css
.alert .alert-link {
  font-weight: bold;
}
/*不同类型警示框中链接的文本颜色*/
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger .alert-link {
  color: #843534;
}
```



#### 进度条

在网页中，进度条的效果并不少见，比如一个评分系统，比如加载状态等。就如下图所示的一个评分系统，他就是一个简单的进度条效果：

![img](https://img.mukewang.com/5418fe4e000106af05640152.jpg)

进度条和其他独立组件一样，开发者可以根据自己的需要，选择对应的版本：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) LESS版本：源码文件progress-bars.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Sass版本：源码文件_progress-bars.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 编译后版本：bootstrap.css文件





##### 基本样式

Bootstrap框架中对于进度条提供了一个基本样式，一个100%宽度的背景色，然后个高亮的色表示完成进度。

其实制作这样的进度条非常容易，一般是使用两个容器，外容器具有一定的宽度，并且设置一个背景颜色，他的子元素设置一个宽度，比如完成度是30%（也就是

父容器的宽度比例值），同时给其设置一个高亮的背景色。

**使用方法：**

Bootstrap框架中也是按这样的方式实现的，他提供了两个容器，外容器使用“progress”样式，子容器使用“progress-bar”样式。

其中progress用来设置进度条的容器样式，而progress-bar用于限制进度条的进度。使用方法非常的简单：

```html
<div class="progress">
       <div class="progress-bar" style="width:40%"></div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5418ff230001f9e106680072.jpg)

**实现原理：**

前面也说了，这样的基本进度条主要分成两部分：

progress样式主要设置进度条容器的背景色，容器高度、间距等：

```css
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

而progress-bar样式在设置进度方向，重要的是设置了进度条的背景颜色和过渡效果：

```css
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
```

**结构优化：**

虽然这样实现了基本进度条效果，但对于残障人员浏览网页有点困难，所以我们可以将结构做得更好些（语义化更友好些）：

```html
<div class="progress">
    <div class="progress-bar" style="width:40%;" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        <span class="sr-only">40% Complete</span>
    </div>
</div>
```

1、role属性作用：告诉搜索引擎这个div的作用是进度条。

2、aria-valuenow="40"属性作用：当前进度条的进度为40%。

3、aria-valuemin="0"属性作用：进度条的最小值为0%。

4、aria-valuemax="100"属性作用：进度条的最大值为100%。



##### 彩色进度条

Bootstrap框架中的进度条和警告信息框一样，为了能给用户一个更好的体验，也根据不同的状态配置了不同的进度条颜色。

在此称为彩色进度条，其主要包括以下四种：

- **progress-bar-info**：表示信息进度条，进度条颜色为蓝色

-  **progress-bar-success**：表示成功进度条，进度条颜色为绿色

- **progress-bar-warning**：表示警告进度条，进度条颜色为黄色

- **progress-bar-danger**：表示错误进度条，进度条颜色为红色

**使用方法：**

具体使用就非常简单了，只需要在基础的进度上增加对应的类名。如：

```html
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width:40%"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-info" style="width:60%"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-warning" style="width:80%"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-danger" style="width:50%"></div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5419029300010f1806460117.jpg)

**实现原理：**

彩色进度条与基本进度条相比，就是进度条颜色做了一定的变化，其对应的样式代码如下：

```css
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-bar-danger {
  background-color: #d9534f;
}
```



##### 条纹进度条

在Bootstrap框架中除了提供了彩色进度条之外，还提供了一种条纹进度条，这种条纹进度条采用CSS3的线性渐变来实现，并未借助任何图片。

使用Bootstrap框架中的条纹进度条只需要在进度条的容器“progress”基础上增加类名“progress-striped”，当然，如果你要让你的进度条条纹像彩色进度一样，具

有彩色效果，你只需要在进度条上增加相应的颜色类名，如前面的彩色进度条所讲。

一起来看一下制作条纹进度条的结构：

```html
<div class="progress progress-striped">
    <div class="progress-bar progress-bar-success" style="width:40%"></div>
</div>
<div class="progress progress-striped">
    <div class="progress-bar progress-bar-info" style="width:60%"></div>
</div>
<div class="progress progress-striped">
    <div class="progress-bar progress-bar-warning" style="width:80%"></div>
</div>
<div class="progress progress-striped">
    <div class="progress-bar progress-bar-danger" style="width:50%"></div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541904a600011ac906590147.jpg)

**原现实现：**

正如前面所说，实现条纹进度条，主要使用的是CSS3的线性渐变，其具体代码如下：

```css
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
```

同样的，条纹进度条对应的每种状态也有不同的颜色，使用方法与彩色进度条一样。只是样式上做了一定的调整：

```css
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}

.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}

.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}

.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
```



##### 动态条纹进度条

**使用方法：**

在进度条“**progress progress-striped**”两个类的基础上再加入“**active**”类名。如下代码：

```html
<div class="progress progress-striped active">
    <div class="progress-bar progress-bar-success" style="width:40%"></div>
</div>
```

**实现原理：**

为了让条纹进度条动起来，Bootstrap框架还提供了一种动态条纹进度条。其实现原理主要通过CSS3的animation来完成。

首先通过@keyframes创建了一个progress-bar-stripes的动画，这个动画主要做了一件事，就是改变背景图像的位置，也就是background-position的值。

因为条纹进度条是通过CSS3的线性渐变来制作的，而linear-gradient实现的正是对应背景中的背景图片。

```css
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
```

了解CSS3的同学都知道，@keyframes仅仅是创建了一个动画效果，如果要让进度条真正的动起来，我们需要通过一定的方式调用@keyframes创建的动画“progress-bar-stripes”，并且通过一个事件触发动画生效。在Bootstrap框架中，通过给进度条容器“progress”添加一个类名“active”，并让文档加载完成就触“progress-bar-stripes”动画生效。

```html
<div class="progress progress-striped active">
    <div class="progress-bar progress-bar-success" style="width:40%"></div>
</div>
<div class="progress progress-striped active">
    <div class="progress-bar progress-bar-info" style="width:60%"></div>
</div>
<div class="progress progress-striped active">
    <div class="progress-bar progress-bar-warning" style="width:80%"></div>
</div>
<div class="progress progress-striped active">
    <div class="progress-bar progress-bar-danger" style="width:50%"></div>
</div>
```

调用动画对应的样式代码如下：

```css
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
```

运行效果如下：

![img](https://img.mukewang.com/5419229f00011bbe06480143.jpg)

> **特别注意**：要让条纹进度条动起来，就需要让“progress-striped”和“active”同时运用，不然条纹进度条是不具备动效效果。



##### 层叠进度条

Bootstrap框架除了提供上述几种进度条之外，还提供了一种层叠进度条，层叠进度条，可以将不同状态的进度条放置在一起，按水平方式排列。具体使用如下：

```html
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width:20%"></div>
    <div class="progress-bar progress-bar-info" style="width:10%"></div>
    <div class="progress-bar progress-bar-warning" style="width:30%"></div>
    <div class="progress-bar progress-bar-danger" style="width:15%"></div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5419242a0001b6cc06660074.jpg)

或许你会感到疑问，没有为层叠进度条添加额外的样式代码，怎么就正常了呢？可以回过头来看基本进度条那部分，不难发现，在“progress-bar”上有一个左浮动的样式。也就是这个样式，在不增加任何样式代码就能实现上例的层叠效果。当然有一点需要注意，层叠进度条宽度之和不能大于100%，大于100%就会造成下面的不良效果（见右侧代码编辑器）：

![img](https://img.mukewang.com/541924530001ed6e06650212.jpg)

除了层叠彩色进度条之外，还可以层叠条纹进度条，或者说条纹进度条和彩色进度条混合层叠，仅需要在“progress”容器中添加对应的进度条，同样要注意，层叠的进度条之和不能大于100%。来简单的看一个示例：

```html
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width:20%"></div>
    <div class="progress-bar progress-bar-info" style="width:20%"></div>
    <div class="progress-bar progress-bar-warning" style="width:30%"></div>
    <div class="progress-bar progress-bar-danger" style="width:15%"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-success progress-bar-striped" style="width:20%"></div>
    <div class="progress-bar progress-bar-info progress-bar-striped" style="width:20%"></div>
    <div class="progress-bar progress-bar-striped progress-bar-warning" style="width:30%"></div>
    <div class="progress-bar progress-bar-danger progress-bar-striped" style="width:15%"></div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width:20%"></div>
    <div class="progress-bar progress-bar-info progress-bar-striped" style="width:20%"></div>
    <div class="progress-bar progress-bar-warning" style="width:30%"></div>
    <div class="progress-bar progress-bar-danger progress-bar-striped" style="width:15%"></div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541924ce0001a3b606780144.jpg)



##### 带Label的进度条

上面介绍的各种进度条，都仅仅是通过颜色进度向用户传递进度值。但实际中，有很多时候是需要在进度条中直接用相关的数值向用户传递完成的进度值，在Bootstrap就为大家考虑了这种使用场景。

**实现方法：**

只需要在进度条中添加你需要的值，如：

```html
<div class="progress">
    <div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">20%</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541928420001baea06610148.jpg)



还有一种特殊情形，当进度条处于开始位置，也就是进度条的值为0%时，内容是否会撑开一定的宽度，让进度条具有颜色呢？如果是，这不是我们需要的效果，如果不是，又是怎么实现的呢？我们先来看一个这样的示例：

```html
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541928ab0001b41506650064.jpg)

**原理分析：**

效果告诉我们，当进度为0%，进度条颜色并没有显示出来，那是因为Bootstrap在样式上做了一定的处理。

```css
/* 未找到 */
.progress-bar[aria-valuenow="1"],
.progress-bar[aria-valuenow="2"] {
  min-width: 30px;
}
.progress-bar[aria-valuenow="0"] {
  min-width: 30px;
  color: #777;
  background-color: transparent;
  background-image: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
```

案例：

```html
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 20%" role="progressbar" aria-valuenow="20%" aria-valuemin="0" aria-valuemax="100">20%</div>
</div>

<div class="progress progress-striped">
  <div class="progress-bar progress-bar-info" style="width: 30%" role="progressbar" aria-valuenow="30%" aria-valuemin="0" aria-valuemax="100">30%</div>    
</div>

<div class="progress progress-striped active">
  <div class="progress-bar progress-bar-warning" style="width: 90%" role="progressbar" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100">90%</div>  
</div>

<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 20%" role="progressbar" aria-valuenow="20%" aria-valuemin="0" aria-valuemax="100">20%</div> 
  <div class="progress-bar progress-bar-info progress-bar-striped" style="width: 30%" aria-valuenow="20%" aria-valuemin="0" aria-valuemax="100">20%</div> 
  <div class="progress-bar progress-bar-warning" style="width: 30%" role="progressbar" aria-valuenow="30%" aria-valuemin="0" aria-valuemax="100">30%</div> 
  <div class="progress-bar progress-bar-danger progress-bar-striped" style="width: 15%" role="progressbar" aria-valuenow="15%" aria-valuemin="0" aria-valuemax="100">15%</div> 
</div>
```



#### 媒体对象

在Web页面或者说移动页面制作中，常常看到这样的效果，左边居左（或居右），内容居右（或居左）排列，如下图所示：

![img](https://img.mukewang.com/54192a4d00014b6a06590154.jpg)

我们常常把这样的效果称为媒体对象。可以说他是一种抽像的样式，可以用来构建不同类型的组件。这些组件都具有开篇所说的样式风格。那么在Bootstrap框架中特意将些部分提取出来做来一个组件介绍。其对应的版本文件：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **LESS版本**：对应的源文件是media.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **Sass版本：**对应的源文件是_media.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **编译后版本：**对应bootstrap.css



##### 默认媒体对象

媒体对象一般是成组出现，而一组媒体对象常常包括以下几个部分：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  媒体对像的容器：常使用“media”类名表示，用来容纳媒体对象的所有内容

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 媒体对像的对象：常使用“media-object”表示，就是媒体对象中的对象，常常是图片

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 媒体对象的主体：常使用“media-body”表示，就是媒体对像中的主体内容，可以是任何元素，常常是图片侧边内容

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 媒体对象的标题：常使用“media-heading”表示，就是用来描述对象的一个标题，此部分可选

如下图所示：

![img](https://img.mukewang.com/54192bd200016f6306660264.jpg)

除了上面四个部分之外，在Bootstrap框架中还常常使用“pull-left”或者“pull-right”来控制媒体对象中的对象浮动方式。

在具体使用中如下所示：

```html
<div class="media">
    <a class="pull-left" href="#">
        <img class="media-object" src="http://img.mukewang.com/52e1d29d000161fe06000338-300-170.jpg" alt="...">
    </a>
    <div class="media-body">
        <h4 class="media-heading">系列：十天精通CSS3</h4>
        <div>全方位深刻详解CSS3模块知识，经典案例分析，代码同步调试，让网页穿上绚丽装备！</div>
    </div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/54192c430001e72b06540183.jpg)

**原理分析：**

媒体对象样式相对来说比较简单，只是设置他们之间的间距，如下所示：

```css
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-object.img-thumbnail {
  max-width: none;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
```



##### 媒体对象的嵌套

在评论系统中，常常能看到下图的效果：

![img](https://img.mukewang.com/54192d740001e45706570246.jpg)

从外往里看，这里有三个媒体对象，只不过是一个嵌套在另一个的里面。那么在Bootstrap框架中的媒体对象也具备这样的功能，只需要将另一个媒体对象结构放置在媒体对象的主体内“media-body”，如下所示：

```html
<div class="media">
    <a class="pull-left" href="#">
        <img class="media-object" src="…" alt="...">
    </a>
    <div class="media-body">
        <h4 class="media-heading">Media Heading</h4>
        <div>…</div>
        <div class="media">
            <a class="pull-left" href="#">
                <img class="media-object" src="…" alt="...">
            </a>
            <div class="media-body">
                <h4 class="media-heading">Media Heading</h4>
                <div>…</div>
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src="…" alt="...">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">Media Heading</h4>
                        <div>...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

在确保你的结构没有嵌套错的情况下，能直接看到下图这样的效果：

![img](https://img.mukewang.com/54192e5a0001361906580217.jpg)



##### 媒体对象列表

媒体对象的嵌套仅是媒体对象中一个简单应用效果之一，在很多时候，我们还会碰到一个列表，每个列表项都和媒体对象长得差不多，同样用评论系统来说事：

![img](https://img.mukewang.com/541930820001e33e06580376.jpg)

**使用方法：**

针对上图的媒体对象列表效果，Bootstrap框架提供了一个列表展示的效果，在写结构的时候可以使用ul，并且在ul上添加类名“media-list”，而在li上使用“media”，示例代码如下：

```html
<ul class="media-list">
    <li class="media">
        <a class="pull-left" href="#">
            <img class="media-object" src=" " alt="...">
        </a>
        <div class="media-body">
            <h4 class="media-heading">Media Header</h4>
            <div>…</div>
        </div>
    </li>
    <li class="media">…</li>
    <li class="media">…</li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/5419310600018dfc06590301.jpg)

**原理分析：**

媒体对象列表，在样式上也并没有做过多的特殊处理，只是把列表的左间距置０以及去掉了项目列表符号：

```css
.media-list {
  padding-left: 0;
  list-style: none;
}
```





#### 列表组

列表组是Bootstrap框架新增的一个组件，可以用来制作列表清单、垂直导航等效果，也可以配合其他的组件制作出更漂亮的组件。由于其在Bootstrap是一个独立的组件，所以也对应有自己独立源码：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **LESS版本**：对应的源码文件 list-group.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  **Sass版本**：对应的源码文件是 _list-group.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png)  **编译出的Bootstrap版本：**对应的源码bootstrap.css

案例：

```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>列表组</title>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<style>
    body{padding:50px;}
</style>
</head>
<body>
<h3>基础列表组</h3>
<ul class="list-group">
    <li class="list-group-item">揭开CSS3的面纱</li>
    <li class="list-group-item">CSS3选择器</li>
	<li class="list-group-item">CSS3边框</li>
	<li class="list-group-item">CSS3背景</li>
	<li class="list-group-item">CSS3文本</li>
</ul>
<h3>带徽章的列表组</h3>
<ul class="list-group">
    <li class="list-group-item">
    	<span class="badge">13</span>揭开CSS3的面
	</li>
	<li class="list-group-item">
		<span class="badge">456</span>CSS3选择器
	</li>
	<li class="list-group-item">
		<span class="badge">892</span>CSS3边框
	</li>
	<li class="list-group-item">
		<span class="badge">90</span>CSS3背景
	</li>
	<li class="list-group-item">
		<span class="badge">1290</span>CSS3文本
	</li>
</ul>
<h3>带链接的列表组</h3>
<ul class="list-group">
    <li class="list-group-item">
    	<a href="##">揭开CSS3的面</a>
	</li>
	<li class="list-group-item">
		<a href="##">CSS3选择器</a>
	</li>
	<li class="list-group-item">
		<a href="##">CSS3边框</a>
	</li>
	<li class="list-group-item">
		<a href="##">CSS3背景</a>
	</li>
	<li class="list-group-item">
		<a href="##">CSS3文本</a>
	</li>
</ul>
<h3>自定义列表组</h3>
<div class="list-group">
    <a href="##" class="list-group-item">
    	<h4 class="list-group-item-heading">图解CSS3</h4>
		<p class="list-group-item-text">详细讲解了选择器、边框、背景、文本、颜色、盒模型、伸缩布局盒模型、多列布局、渐变、过渡、动画、媒体、响应Web设计、Web字体等主题下涵盖的所有CSS3新特性...</p>
	</a>
	<a href="##" class="list-group-item">
		<h4 class="list-group-item-heading">Sass中国</h4>
		<p class="list-group-item-text">致力于为中国开发者提供最全面，最具影响力，最前沿的Sass相关技术与教程...</p>
	</a>
</div>
<h3>组合列表项的状态</h3>
<div class="list-group">
    <a href="##" class="list-group-item active"><span class="badge">5902</span>图解CSS3</a>
    <a href="##" class="list-group-item"><span class="badge">15902</span>W3cplus</a>
	<a href="##" class="list-group-item"><span class="badge">59020</span>慕课网</a>
	<a href="##" class="list-group-item disabled"><span class="badge">0</span>Sass中国</a>
</div>
<h3>多彩列表组</h3>
<div class="list-group">
    <a href="##" class="list-group-item active"><span class="badge">5902</span>图解CSS3</a>
    <a href="##" class="list-group-item list-group-item-success"><span class="badge">15902</span>W3cplus</a>
	<a href="##" class="list-group-item list-group-item-info"><span class="badge">59020</span>慕课网</a>
	<a href="##" class="list-group-item list-group-item-warning"><span class="badge">0</span>Sass中国</a>
	<a href="##" class="list-group-item list-group-item-danger"><span class="badge">10</span>Mobile教程</a>
</div>
  <script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
</body>
</html>
```



##### 基础列表组

基础列表组，看上去就是去掉了列表符号的列表项，并且配上一些特定的样式。在Bootstrap框架中的基础列表组主要包括两个部分：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **list-group**：列表组容器，常用的是ul元素，当然也可以是ol或者div元素

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **list-group-item**：列表项，常用的是li元素，当然也可以是div元素

来看一个简单的示例：

```html
<ul class="list-group">
    <li class="list-group-item">揭开CSS3的面纱</li>
    <li class="list-group-item">CSS3选择器</li>
    <li class="list-group-item">CSS3边框</li>
    <li class="list-group-item">CSS3背景</li>
    <li class="list-group-item">CSS3文本</li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/541938050001335e06550202.jpg)

**原理分析：**

对于基础列表组并没有做过多的样式设置，主要设置了其间距，边框和圆角等：

```css
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
```



##### 带徽章的列表组

带徽章的列表组其实就是将Bootstrap框架中的徽章组件和基础列表组结合在一起的一个效果。具体做法很简单，只需要在“list-group-item”中添加徽章组件“badge”：

```html
<ul class="list-group">
    <li class="list-group-item">
        <span class="badge">13</span>揭开CSS3的面
    </li>
    <li class="list-group-item">
        <span class="badge">456</span>CSS3选择器
    </li>
    <li class="list-group-item">
        <span class="badge">892</span>CSS3边框
    </li>
    <li class="list-group-item">
        <span class="badge">90</span>CSS3背景
    </li>
    <li class="list-group-item">
        <span class="badge">1290</span>CSS3文本
    </li>
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/541939cb000111e006550205.jpg)

**实现原理：**

实现效果非常简单，就是给徽章设置了一个右浮动，当然如果有两个徽章同时在一个列表项中出现时，还设置了他们之间的距离：

```css
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
```





##### 带链接的列表组

带链接的列表组，其实就是每个列表项都具有链接效果。大家可能最初想到的就是在基础列表组的基础上，给列表项的文本添加链接：

```html
<ul class="list-group">
    <li class="list-group-item">
        <a href="##">揭开CSS3的面</a>
    </li>
    <li class="list-group-item">
        <a href="##">CSS3选择器</a>
    </li>
    ...
</ul>
```

运行效果如下：

![img](https://img.mukewang.com/54193e2b0001e6e606470202.jpg)

这样做有一个不足之处，就是链接的点击区域只在文本上有效：

![img](https://img.mukewang.com/54193e7300017f9406590195.jpg)

但很多时候，都希望在列表项的任何区域都具备可点击。这个时候就需要在链接标签上增加额外的样式：“display:block”；

![img](https://img.mukewang.com/54193eba00018ae306660234.jpg)

虽然这样能解决问题，达到需求。但在Bootstrap框架中，还是采用了另一种实现方式。就是将ul.list-group使用div.list-group来替换，而li.list-group-item直接用a.list-group-item来替换。这样就可以达到需要的效果：

```html
<div class="list-group">
    <a href="##" class="list-group-item">图解CSS3</a>
    <a href="##" class="list-group-item"><span class="badge">220</span>Sass教程</a>
    <a href="##" class="list-group-item">玩转Bootstrap</a>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/54193f4d0001e76b06570137.jpg)

**原理实现：**

如果使用a.list-group-item时，在样式需要做一定的处理，比如说去文本下划线，增加悬浮效果等：

```css
a.list-group-item,
button.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}
```





##### 自定义列表组

Bootstrap框加在链接列表组的基础上新增了两个样式：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-heading：用来定义列表项头部样式

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-text：用来定义列表项主要内容

这两个样式最大的作用就是用来帮助开发者可以自定义列表项里的内容，如下面的示例：

```
<div class="list-group">
    <a href="##" class="list-group-item">
        <h4 class="list-group-item-heading">图解CSS3</h4>
        <p class="list-group-item-text">...</p>
    </a>
    <a href="##" class="list-group-item">
        <h4 class="list-group-item-heading">Sass中国</h4>
        <p class="list-group-item-text">...</p>
    </a>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541941c700010e7a06490147.jpg)

**原理实现：**

这两个样式主要控制不同状态下的文本颜色：

```css
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}

.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}

.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}

.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
```



##### 列表项的状态设置

Bootstrap框架也给组合列表项提供了状态效果，特别是链接列表组。比如常见状态和禁用状态等。实现方法和前面介绍的组件类似，在列表组中只需要在对应的列表项中添加类名：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **active**：表示当前状态

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) **disabled**：表示禁用状态

来看个示例：

```
<div class="list-group">
    <a href="##" class="list-group-item active"><span class="badge">5902</span>图解CSS3</a>
    <a href="##" class="list-group-item"><span class="badge">15902</span>W3cplus</a>
    <a href="##" class="list-group-item"><span class="badge">59020</span>慕课网</a>
    <a href="##" class="list-group-item disabled"><span class="badge">0</span>Sass中国</a>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5419437d0001b70006400218.jpg)

**原理实现：**

在样式上主要对列表项的背景色和文本做了样式设置：



```css
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  color: #777777;
  cursor: not-allowed;
  background-color: #eeeeee;
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
```





##### 多彩列表组

列表组组件和警告组件一样，Bootstrap为不同的状态提供了不同的背景颜色和文本色，可以使用这几个类名定义不同背景色的列表项。

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-success：成功，背景色绿色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-info：信息，背景色蓝色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-warning：警告，背景色为黄色

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) list-group-item-danger：错误，背景色为红色

如果你想给列表项添加什么背景色，只需要在“list-group-item”基础上增加对应的类名：

```html
<div class="list-group">
    <a href="##" class="list-group-item active"><span class="badge">5902</span>图解CSS3</a>
    <a href="##" class="list-group-item list-group-item-success"><span class="badge">15902</span>W3cplus</a>
    <a href="##" class="list-group-item list-group-item-info"><span class="badge">59020</span>慕课网</a>
    <a href="##" class="list-group-item list-group-item-warning"><span class="badge">0</span>Sass中国</a>
    <a href="##" class="list-group-item list-group-item-danger"><span class="badge">10</span>Mobile教程</a>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5419452b0001826206350276.jpg)

**原理实现：**

同样的，这几个类名仅修改了背景色和文本色，对应的源码为：

```css
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
```





#### 面板

面板（Panels）是Bootstrap框架新增的一个组件，其主要作用就是用来处理一些其他组件无法完成的功能。同样在不同的版本中具有不同的源码：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Less版本：对应的源码文件是 panels.less

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) Sass版本：对应的源码文件是 _panels.scss

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) 编译后的Bootstrap：对应bootstrap.css



##### 基础面板

基础面板非常简单，就是一个div容器运用了“panel”样式，产生一个具有边框的文本显示块。由于“panel”不控制主题颜色，所以在“panel”的基础上增加一个控制颜色的主题“panel-default”，另外在里面添加了一个“div.panel-body”来放置面板主体内容：

```
<div class="panel panel-default">
    <div class="panel-body">我是一个基础面板，带有默认主题样式风格</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/54194ead00016f8806480074.jpg)

**原理分析：**

“panel“主要对边框，间距和圆角做了一定的设置：

```css
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
```



##### 带有头和尾的面板

基础面板看上去太简单了，Bootstrap为了丰富面板的功能，特意为面板增加“面板头部”和“页面尾部”的效果：

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-heading：用来设置**面板头部**样式

  ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-footer：用来设置**面板尾部**样式

```html
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">…</div>
    <div class="panel-footer">作者：大漠</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/5419500b00017cc706440219.jpg)

**原理分析：**

panel-heading和panel-footer也仅仅间距和圆角等样式进行了设置：

```css
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
```



##### 彩色面板

在基础面板一节中了解到，panel样式并没有对主题进行样式设置，而主题样式是通过panel-default来设置。在Bootstrap框架中面板组件除了默认的主题样式之外，还包括以下几种主题样式，构成了一个彩色面板：

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-primary：重点蓝

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-success：成功绿

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-info:信息蓝

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-warning：警告黄

 ![☑](https://www.imooc.com/static/moco/v1.0/images/face/36x36/2611.png) panel-danger：危险红

使用方法就很简单了，只需要在panel的类名基础上增加自己需要的类名：

```html
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">…</div>
    <div class="panel-footer">作者：大漠</div>
</div>
<div class="panel panel-primary">…</div>
<div class="panel panel-success">…</div>
<div class="panel panel-info">…</div>
<div class="panel panel-warning">…</div>
<div class="panel panel-danger">…</div>
```

运行效果如下：

![img](https://img.mukewang.com/541951700001139606510546.jpg)

从效果中不难发现，这几个样式只是改变了面板的背景色、文本和边框颜色





##### 面板中嵌套表格

一般情况下可以把面板理解为一个区域，在使用面板的时候，都会在panel-body放置需要的内容，可能是图片、表格或者列表等。来看看面板中嵌套表格和列表组的一个效果。首先来看嵌套表格的效果：

```
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">
    <p>详细讲解了选择器、边框、背景、文本、颜色、盒模型、伸缩布局盒模型、多列布局、渐变、过渡、动画、媒体、响应Web设计、Web字体等主题下涵盖的所有CSS3新特性
    </p>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>＃</th>
                <th>我的书</th>
                <th>发布时间</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>《图解CSS3》</td>
                <td>2014-07-10</td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="panel-footer">作者：大漠</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541954b90001781f06520370.jpg)

**优化代码：**

在实际应用运中，你或许希望表格和面板边缘不需要有任何的间距。但由于panel-body设置了一个padding：15px的值，为了实现这样的效果。我们在实际使用的时候需要把table提取到panel-body外面：

```
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">…</div>
    <table class="table table-bordered">…</table>
    <div class="panel-footer">作者：大漠</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541955440001d27206510331.jpg)

这样的效果是不是完美多了。大家可能会问，前面介绍表格的时候table-bordered明明有边框，按理说这里应该会出现边框重叠效果才对，怎么没有呢？其实原本是有边框重叠的，只不过在面板中对表格又做了一次优化。



##### 面板中嵌套列表组

在上一节，我们介绍了如何在面板中放置表格，现在我们来学习如何在面板中放置列表组，我们简单的来看一个示例：

```
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">
        <p>详细讲解了选择器、边框、背景、文本、颜色、盒模型、伸缩布局盒模型、多列布局、渐变、过渡、动画、媒体、响应Web设计、Web字体等主题下涵盖的所有CSS3新特性
        </p>
        <ul class="list-group">
            <li class="list-group-item">我是列表项</li>
            <li class="list-group-item">我是列表项</li>
            <li class="list-group-item">我是列表项</li>
        </ul>
    </div>
    <div class="panel-footer">作者：大漠</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541957920001280d06600435.jpg)

**优化代码：**

和嵌套表格一样，如果你觉得这样有间距不好看，你完全可以把列表组提取出来：

```
<div class="panel panel-default">
    <div class="panel-heading">图解CSS3</div>
    <div class="panel-body">…</div>
    <ul class="list-group">
        <li class="list-group-item">我是列表项</li>
        <li class="list-group-item">我是列表项</li>
        <li class="list-group-item">我是列表项</li>
    </ul>
    <div class="panel-footer">作者：大漠</div>
</div>
```

运行效果如下：

![img](https://img.mukewang.com/541957ed000127f106440360.jpg)

同样的道理，Bootstrap将嵌套在面板中的列表组做了一定的样式优化。
