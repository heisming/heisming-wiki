# HTML标签

## 1、认识HTML结构

```HTML
<!-- HTML文件第一行必须文档类型声明DTD -->
<!DOCTYPE html>
<!-- lang属性表示网页的语言，zh表示中文 -->
<html lang="en">

<!-- head标签对是网页的配置，不是网页的头部 -->
<head>
    <!-- meta元标签，表示网页的基础配置，单标签 -->
    <!-- charset:字符集 
        UTF-8=>涵盖全球所有国家，民族文字和大量图形字符，1个汉字占3个字节数，适用于制作有非汉字文字的网页； 
        GB2312（gbk）=>收录所有汉字字符（包含简体、繁体）和英语、少量韩文、日语和少量图形字符，1个汉字占2个字节数，制作只有汉语和英语的网页，由于1个汉字仅占2个字节，网页文件尺寸明显减少 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 视口设置位置：width=device-width布局视口的宽度等于视觉视口，
        initial-scale=1.0初始缩放比例设置为1 ，各有兼容性问题，都写
        user-scalable= yes 限制用户缩放
        maximun-scale= 1,minimum-scale = 1 最大最小也是1，相当于限制缩放范围 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- title网页的标题，文字会显示在浏览器的标签栏上，也是搜索引擎收录网站时显示的标题，为了吸引用户点击，合理设置title是必要的 -->
    <title>HTML基础知识</title>
    <!-- 通过关键词提升SEO自然搜索排名。 -->
    <meta name="Keywords" content="手机，5G手机，游戏手机，高性能手机">
    <!-- 通过页面描述提升搜索引擎显示的简介词语。 -->
    <meta name="Description" content="sss手机是先进的手机，功能丰富，充电5分钟，通话2小时">
 </head>

 <body>
     <!-- body中书写网页的内容，包括网页的头部、主要内容、页脚等各个部分 -->
 </body>
</html>
```

```css
/*html min:font-size: 12px*/
display: block;
font-size: 16px;
/*body*/
display: block;
font-size: 1em;
margin: 8px;
```



## 2、(block)块级元素

​	**属性：独占一行，可设置宽高，不设置width时自动撑满**

### 2.1、p文本标签

```HTML
<p>文本标签</p>
```

```css
font-size: 1em;
margin: 1em 0;
```



### 2.2、div盒子标签

```HTML
<div>盒子标签</div>
```

```css
font-size: 1em;
```



### 2.3、h系列标题标签

```HTML
  <h1>标题标签</h1>
  <h2>标题标签</h2>
  <h3>标题标签</h3>
  <h4>标题标签</h4>
  <h5>标题标签</h5>
  <h6>标题标签</h6>
```

```css
all: font-weight: bold   
h1: font-size: 2em; margin: 0.67em 0;
h2: font-size: 1.5em; margin: 0.83em 0;
h3: font-size: 1.17em; margin: 1em 0;		
h4: font-size: 1em; margin: 1.33em 0;
h5: font-size: 0.83em, margin: 1.67em 0	
h6: font-size: 0.67em, margin: 2.33em 0	
```



### 2.4、ul、li无序列表标签

​	1、li标签不能单独使用
​	2、ul只能容纳li标签，
​	3、但li标签是容器，内部可以放任何其他标签
​	4、li列表的嵌套及type属性值只有三个：circle（空心圆），square（实心方块），disc（实心圆，默认值）。 

```HTML
    <ul>unorderd list
        <li type="circle">list item 
            <h3>面包</h3>
            <ul>
                <li>全麦紫薯面包</li>
                <li>全麦原味面包</li>
            </ul>
        </li>
        <li type="square">鸡蛋</li>
        <li>牛奶
            <p>要全脂的鲜牛奶</p>
        </li>
        <li type="disc">
            <h3>水果</h3>
            <ul>
                <li>芒果</li>
                <li>西瓜</li>
            </ul>
        </li>
    </ul>
```

```css
/*ul*/
/*继承性inherited*/
list-style: disc; 
/*no-inherited*/
margin: 1rem 0;
padding-left: 40px;
```

```CSS
/*li*/
display: list-item
font-size: 1em
list-style: disc; 
text-align: left;
```



### 2.5、ol、li有序列表标签

​	1、li标签不能单独使用
​	2、ol只能容纳li标签，
​	3、但li标签是容器，内部可以放任何其他标签   
​	4、type属性的值只能是：1（默认）、a、A、i、I
​	5、reversed属性是倒序
​	6、start属性是从第几位开始排序

```html
<ol type="I" start="1" reversed>
    odered list
    <li>list item</li>
    <li>实践 </li>
    <li>检验、总结、指导</li>
    <li>理论</li>
</ol>
```

```css
/*ol*/
/*继承性inherited*/
list-style-type: decimal; 
/*no-inherited*/
margin: 1rem 0;
padding-left: 40px;
```

```css
/*li*/
display: list-item
font-size: 1em
list-style: disc; 
text-align: left;
```



### 2.6、dl、dd、dt定义列表标签

```html
<dl>
   <dt>爱情</dt>
   <dd>爱情是个体与个体（多数指人）之间的强烈的依恋、亲近、向往，以及无私并且无所不尽其心的情感。</dd>
   <dt>亲情</dt>
   <dd>是有血缘关系的人之间存在的特殊感情</dd>
</dl>
```

```html
<dl>
    <dt>爱情</dt>
    <dd>爱情是个体与个体（多数指人）之间的强烈的依恋、亲近、向往，以及无私并且无所不尽其心的情感。</dd>
</dl>
<dl>
    <dt>亲情</dt>
    <dd>是有血缘关系的人之间存在的特殊感情</dd>
</dl>
```

```css
/*dl*/
font-size: 1em;
margin: 1em 0;
```

```css
/*dt*/
font-size: 1em;
```

```css
/*dd*/
font-size: 1em;
padding-left: 40px;
```



### 2.7、header, section, footer, aside, nav, main, article区块标签-HTML5

**区块标签**：与div相似

​	section => 文档的区域，语义比div大

​	article => 文档的核心文章内容，会被搜索引擎主要抓取

​	aside => 文档的非必要相关内容，比如广告等

​	nav => 导航条

​	header => 页头

​	main => 网页的核心部分

​	footer => 页脚

​	figure =>  标签规定独立的流内容（图像、图表、照片、代码等等）。

```html
    <!-- 网页的头部 -->
    <header> 
        <section class="logo">网页的logo</section>
        <!-- 导航条 -->
        <nav>导航条</nav>
    </header>
    <!-- 网页的核心 -->
    <main>
        <!-- 广告 -->
        <aside>
            我是广告
        </aside>
        <!-- 文章内容 -->
        <article>
            <section>部分1</section>
            <section>部分2</section>
            <section>部分3</section>
        </article>
    </main>
    <!-- 页脚 -->
    <footer></footer>
```

```css
font-size: 1em;
```



### 2.8、 form表单标签

用来收集信息，比如注册、登录、发送评论反馈、购买商品等等

​	action属性表示表单要提交到的后台程序的网址
​	method属性表示表单提交的方式，GET、POST

```html
<form action="HelloWord.php" method="POST">
<form>
```

```css
margin-bottom: 10px;
font-size: 1em;
```



## 3、(inline)行内元素

​	**属性：横向排列显示, 不能设置宽高，不设置width时自动收缩**

### 3.1、a超链接标签

  a => anchor锚

  href => hypertext reference超文本引用

  	1、href属性支持相对路径和绝对路径,详情看img的规则
  	
  	2、title属性用于设置鼠标的悬停提示文本
  	
  	3、target属性设置：blank，即可在新标签页中打开网页。用于跳转非本网站的页面
  	
  	4、图片也可以设置超链接,只需要用<a>标签包裹img标签即可
  	
  	5、实际开发中不建议去掉href属性，而是建议设置href="#"或者设置href="javascript:;"禁止链接刷新或跳转。

```HTML
<a href="http://www.heisming.com " title="千万别点我" target="blank">我的首页</a>
<a href="https://www.heisming.com">
   <img src="http://www.heisming.com/assets/images/head.jpg" alt="我的首页">
</a>
<!-- 其他页面的锚点 -->
<a href="web/LearnLink.html#wuxi">重点推荐无锡攻略</a>

<!-- 指向exe、zip、rar等文件格式的链接，将自动成为下载链接 -->
<a href="1.zip">下载链接</a>

<!-- 邮件链接、电话链接
  有mailto：前缀的链接是邮件链接，系统将自动打开Email相关软件
  有tel：前缀的链接是电话链接，系统将自动打开拨号盘
-->
<a href="mailto:10000@qq.com">给电信发邮件</a>
<a href="tel:123456">给XX打电话</a>
```

```css
color: rgb(0, 0, 238);
font-size: 1em;
cursor: pointer;
/*text-decoration: underline;*/
text-decoration-line underline;
text-decoration-color: rgb(0, 0, 238);
text-decoration-style solid
```

**页面内锚点**

 => 较长的页面，可以适当的给h系列标签添加ID属性，它将成为页面的“锚点”

 => 当网址后面添加**#**时，页面将自动滚动到锚点所在位置

 => 其他页面的超级链接，可以链接到指定锚点





### 3.2、audio/video音视频标签-HTML 5

在浏览器中插入音频需要使用<audio>或<video>标签,**兼容到IE9**

  	1、controls显示播放控件
  	
  	2、src音频地址

​	  3、标签对中是对不兼容audio标签的浏览器的显示文字

​	  4、常用音频格式是MP3、ogg,常用视频格式MP4、ogv、webm

​	  5、autoplay属性，控制音频自动播放；常用的浏览器一般不会使用

​	  6、loop属性，循环播放音乐/视频

​	  7、source标签为媒体元素定义媒体资源，该标签允许规定多个格式的音/视频文件，供浏览器选择自己支持的媒体类型进行播放。

```html
<audio controls autoplay loop>
  <source src="../music/hangpaibgm(mp3).mp3" type="audio/mp3">
  <source src="../music/hangpaibgm(ogg).ogg" type="audio/ogg">
  <source src="../music/hangpaibgm(wav).wav" type="audio/wav">
  请升级浏览器
</audio>
```

```HTML
<video controls src="../video/flower.mp4" autoplay loop>
<video controls>
  <source src="../video/flower.avi" type="video/avi">
  <source src="../video/flower.mp4" type="video/mp4">
  <source src="../video/flower.ogv" type="video/ogv">
  <source src="../video/flower.webm" type="video/webm">
  请升级浏览器
</video>
```

```css
font-size: 1em;
```



### 3.3、小语义化标签

#### 	3.3.1、span文本区块标签

​		标签是文本中的“区块”标签，无样式，结合CSS来丰富样式

```html
<span>北京</span>的区号是<span>010</span>
```

```css
font-size: 1em;
```



#### 	3.3.2、b加粗标签

```html
<b>我爱学习</b>
```

```css
font-size: 1em;
font-weight: blod;
```

#### 	3.3.3、u下划线标签

```html
<u>我爱学习</u>
```

```css
text-decoration: underline;
font-size: 1em;
```

#### 	3.3.4、i倾斜标签

```html
<i>我爱学习</i>
```

```css
font-style: italic;
font-size: 1em;
```

​	**biu已经被CSS替代，但是网页中也可以表示需要强调的文本**



#### 	3.3.4、strong标签

​		特重要文字

```html
我<strong>一定</strong>好好学习
```

```css
font-size: 1em;
font-weight: blod;
```

#### 	3.3.4、em强调文字标签

```html
 我<em>一定</em>好好学习
```

```css
font-style: italic;
font-size: 1em;
```

#### 	3.3.5、mark标签-HTML5

```HTML
我<mark>一定</mark>好好学习
```

```CSS
background-color: yellow;
color: black;
font-size: 1em;
```



#### 	3.3.6、figure标签-HTML5

​			代表一段独立的内容、与说明<figcaption>配合使用，它是一个独立的引用单元，比如建议读者拓展视野的图片等，当这部分转移到附录中或者其他页面时不会影响到主体。

```html
<figure>
  <img src="images/beijing/1.jpg">
  <figcaption>北京鸟巢</figcaption>
</figure>
<figure>
  <img src="images/beijing/2.jpg">
  <figcaption>颐和园十七孔桥</figcaption>
</figure>
```

```css
/*figure*/
margin: 10px 40px;
font-size: 1em;
```

​	

## 4、(inline-block)行内块元素

**既可以设置宽高又可以并排显示**



### 4.1、img图片标签

src=source（来源）引用路径图片

1、**如果需要回退层级，使用“../”。**

  2、**相对路径引用:../images/xxx.xx;**

​    2.1、poem.png==./poem.png

  3、**绝对路径:描述图片的精准位置：**

​    3.1、盘符形式(少用）：E:\desktop\1.png

​    3.2、url地址形式：http://www.heisming.com/assets/images/head.jpg

  4、**尽量少用“/”开头的路径；**

​    当项目运行在服务器环境下，“/”这个地址才能正常使用。

​	如果项目是直接通过双击html文件打开的，此时会造成文件找不到图片而报错 /img/1.jpg==http://127.0.0.1:5500/img/1.jpg

  5、**alt 属性是alternate“替代品”的缩写，它是对图像的文本描述，不是强制性的。**

​    1、如果由于某种原因无法加载图像，浏览器会在页面上显示alt属性中的备用文本。

​    2、还有就是供视力不方便的朋友使用的网页朗读器，也会朗读alt中的文本

​    3、width、height属性分别设置宽度和高度，单位是像素，但是不需要写单位；如果省略其中一个属性，则表示**按原始比例缩放图片**

```HTML
<img src="../poem.png" alt="加油诗" width="300px">
<img src="../goblin.png">
<img src="http://www.heisming.com/assets/images/head.jpg">
```

```css
font-size:1em;
```



### 4.2、input空标签

#### 4.2.1、文本框

​	type属性 => 被设置为text的元素可以进行单行文本框，单标签
​	value属性 => 表示已经填好的值
​	placeholder属性 => 表示提示文本，将以浅色文字在文本框中，并不是文本框中的值
​	disabled属性 => 表示用户不能与元素交互，锁死
​	required属性 => 表示非空必须填写

```HTML
请输入你的姓名：<input type="text"  required>
报考院校：<input type="text" value="XX大学" disabled>
毕业院校：<input type="text" placeholder="请输入全日制学校">
```

```css
/* type="text" */
padding: 1px 2px;
cursor: text;
border-width: 2px;
border-style: inset;
font-size: 13.3333px
```



#### 4.2.2、单选按钮

​	label => 用来将文字和单选按钮进行绑定，用户单击文字的时候也视为点击了单选按钮

​    使用type属性值 => 被设置为radio的<input>元素可以创建单选按钮
​    value属性值 => 会向服务器提交
​    checked属性值 => 默认选中
​    name属性值 => 相同就只能选一个

```HTML
<label>              
  <input type="radio" name="sex" value="男" checked>男
</label>
<label>              
  <input type="radio" name="sex" value="女">女             
</label>
```

```CSS
cursor: default;
box-sizing: border-box;
margin: 3px 3px 0px 5px;
padding: initial;
border: initial;
```



#### 4.2.3、复选框

​	  label => 用来将文字和单选按钮进行绑定，用户单击文字的时候也视为点击了单选按钮

​      使用type属性值  => 被设置为checkbox的<input>元素可以创建

​      value属性值  => 会向服务器提交

​      checked属性值  =>  默认选中

```HTML
<label>
  <input type="checkbox" name="hobby" value="足球">足球
</label>
<label>
  <input type="checkbox" name="hobby" value="篮球">篮球
</label>
<label>
  <input type="checkbox" name="hobby" value="跑步">跑步
</label>
```

```CSS
cursor: default;
box-sizing: border-box;
margin: 3px 3px 0px 5px;
padding: initial;
border: initial;
```

#### 4.2.5、密码框

​	使用type属性值被设置为password的<input>元素可以创建

```html
请输入密码:<input type="password" name="pwd">
```

```css
-webkit-text-security: disc !important;
padding: 1px 2px;
```



#### 4.2.6、普通按钮

​	不能提交<form>数据

```html
<input type="button" value="我是一个按钮">
```

```css
padding: 1px 6px;
border-width: 2px;
```



#### 4.2.7、提交按钮

​	能提交<form>数据

```HTML
<input type="submit" value="提交表单">
```

```CSS
padding: 1px 6px;
border-width: 2px;
```

#### 4.2.8、重置按钮

​	重置<form>数据

```HTML
<input type="reset" value="重置表单">
```

```CSS
padding: 1px 6px;
border-width: 2px;
```

#### 4.2.9、颜色选择控件-HTML5

```HTML
<input type="color">
```

```CSS
border-width: 1px;
padding: 1px 2px;
```

#### 4.2.10、日期、时间选择控件-HTML5

```HTML
<input type="date">
<input type="time">
```

```css
border-width: 2px;
padding-left: 1px;
```

#### 4.2.11、电子邮件输入控件-HTML5

```HTML
<input type="email">
```

```CSS
padding: 1px 2px;
border-width: 2px;
```

#### 4.3.12、文件选择控件-HTML5

```html
<input type="flie">
```

#### 4.3.13、数字选择控件-HTML5

​	min：最小值

​	max：最大值

```html
<input type="number" min="10" max="15" >
```

```css
border-width: 2px;
padding: 1px 2px;
```

#### 4.3.14、拖拽条-HTML5

```html
<input type="range" min="1" max="10">
```

```css
margin: 2px;
```

#### 4.3.15、搜索框-HTML5

```html
<input type="search">
```

```css
border-width: 2px;
padding: 1px 2px;
```

#### 4.3.16、网址输入控件-HTML5

```html
<input type="url">
```

```css
border-width: 2px;
padding: 1px 2px;
```

#### 4.3.17、周选择控件-HTML5

```html
<input type="week">
```

```css
border-width: 2px;
padding-left: 1px;
```

#### 4.3.18、datalist备选控件-HTML5

​	可以为输入框提供一些备选项，当用户输入的内容与备选项文字相同时，将会显示智能感应

```html
<input type="text" list="province-lis">
<datalist id="province-lis">
   <option value="山西省">
   <option value="广西省">
   <option value="上海省">
   <option value="广东省">
   <option value="安徽省">
</datalist>
```

```css
/*option*/
font-weight: normal;
display: block;
white-space: nowrap;
min-height: 1.2em;
padding: 0px 2px 1px;
```







### 4.3、select下拉选择菜单

​	表示下拉菜单，<option>是它的内部的选项,默认选中第一个

```HTML
<select>
  <option value="JavaScript" selected>JavaScript</option>
  <option value="PHP">PHP</option>
  <option value="JAVA">JAVA</option>
  <option value="C++">C++</option>
</select>
```

```css
/*select*/
border-width: 1px;
font: 400 13.3333px Arial;
/*option*/
font: 400 13.3333px Arial;
padding: 0 2px 1px;
```



### 4.4、textarea多行文本框

​	表示多行文本框，rows和cols属性，定义行数和列数

```html
<textarea cols="120" rows="10"></textarea>
```

```css
padding: 2px 0px 0px 2px;
font: 400 13.3333px Arial;
border-width: 1px;
```

### 4.5、button按钮标签

​	可以提交<form>数据

```HTML
<button>我是一个按钮</button>
<button><img src="images/logo.png" alt=""></button>
```

```CSS
font: 400 13.3333px Arial;
padding: 1px 6px;
border-width: 2px;
```



## 5、(table块级)表格元素

​	border属性 => 显示表格的边框（默认双线）

​	caption属性 => 是表格的标题，常常作为第一个子元素出现

​    width属性，当不设置时，表格的宽度会由内容撑开

​     	 1、如果想让表格的宽度与父元素一致，可以考虑给table设置宽度为100%

​      	2、给<td>标签设置width属性，可以调整该td所在列的宽度

​      	3、给<tr>标签设置width属性无效

​    height属性通常设置在<tr><table>标签上，用来调整高度

​    	  1、同width一样

​      	2、如果宽度和高度都比默认小，就使用默认值

​    align属性可以调整整体的水平位置

​      	1、有left、center、right属性

​      	2、给<tr>设置属性，可以统一设置该行所有<td>中内容水平对齐方式

​      	3、给<td>设置属性，可以调整内容的水平对齐方式

### **表格的嵌套**

​	表格的嵌套要写在<td>当中

- <tr>table row 表格行
- <th>table header 标题小格
- <td>table data 表格数据
  - `colspan`属性用来设置`td`或者`th`列跨度
  - `rowspan`属性用来设置`td`或者`th`行跨度
  - `cellpadding`(定义表格单元的内容和边框之间的空间)和`cellspacing`（使用百分比或像素,定义了两个单元格之间空间的大小）

```html
<table border="1" width="500">            
  <caption>字母表</caption>
  <tr>
      <th>第一季度</th>
      <th>第二季度</th>
      <th>第三季度</th>
      <th>第四季度</th>
      <th>第五季度</th>
  </tr>
  <tr>
      <td>A</td>
      <td colspan="2">B</td>            
      <td>C</td>
      <td rowspan="3">C</td>
  </tr>
  <tr>
      <td colspan="3">E</td>
      <td>C</td>        
  </tr>
  <tr>
      <td>A</td>
      <td colspan="2" rowspan="2">B</td>
      <td>C</td>
  </tr>
  <tr>
      <td>A</td>
      <td>C</td>
      <td>C</td>
  </tr>
</table>
```



### **表格的结构标签**

​	<thead></thead>定义表头
​	<tbody></tbody>定义表核心内容
​	<tfoot></tfoot>定义表脚，通常是汇总行
​	使用表格是存在的问题：复杂的表格加载会较慢，影响用户体验。
​	**原因**：表格在html结构中是作为整体进行加载的，表格中的内容全部加载完，表格才会显示出来，所以表格加载会较慢。
​	**解决方案**：使用结构标签划分结构
​	**原理**：结构标签会让内容按照三个结构块进行显示，那个结构加载完，就会显示哪个结构，可以让表格内容早点显示，从而提升用户体验

```html
<table border="1">
        <thead>
            <tr>
                <th rowspan="2"></th>
                <th colspan="2">第一季度</th>
                <th colspan="2">第二季度</th>
                <th colspan="2">第三季度</th>
                <th colspan="2">第四季度</th>
            </tr>
            <tr>
                <th>国内</th>
                <th>国外</th>
                <th>国内</th>
                <th>国外</th>
                <th>国内</th>
                <th>国外</th>
                <th>国内</th>
                <th>国外</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>手机</th>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <th>农产品</th>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
            <tr>
                <th>水产品</th>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
                <td>123</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>汇总</th>
                <td>369</td>
                <td>369</td>
                <td>369</td>
                <td>369</td>
                <td>369</td>
                <td>369</td>
                <td>369</td>
                <td>369</td>
            </tr>
        </tfoot>
    </table>
```







## 6、问题总结

### 1、什么是“语义化”？

答：合理HTML标记以及其特有的属性去格式化文档内容。通俗地讲,语义化就是对数据和信息进行处理,使得机器可以理解。让页面具有良好的结构与含义，从而让人和机器都能快速理解网页内容。语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

### 2、什么是“代码语义化”？

答：创建良好的标记，便于开发者阅读和写出更优雅的代码

### 3、什么是“结构语义化”？

答：样式丢失的时候能让页面呈现清晰的结构。

### 4、语义化的作用是什么？

答：4.1、在没有CSS的情况下，页面也能呈现出很好的内容结构、代码结构
		4.2、用户体验.例如title、alt用于解释名词或解释图片信息的标签尽量写有含义的词语，方便机器语音播放网页内容，辅助特殊人群。
		4.3、有利于SEO(搜索引擎优化)和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息。
		4.4、方便其他设备解析，做到各种浏览器兼容，以更好的方式来渲染网页。
		4.5、便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

### 5、如何评判你写的页面语义化是好的还是坏的？

答：5.1、 尽可能少的使用无语义的标签div和span；
		5.2、 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
		5.3、 不要使用纯样式标签，如：b、font、u等，改用css设置。
		5.4、 需要强调的文本，可以包含在strong或em标签中，strong默认样式是加粗（不要用b），em是斜体（不要用i）；
		5.5、  使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
		5.6、表单域要用fieldset标签包起来，并用legend标签说明表单的用途；demo
		5.7、每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。
		5.8、补充一点：不仅写html结构时，要用语义化标签，给元素写css类名时，也要遵循语义化原则，不要随便起个名字就用，那样等以后，再重构时，非常难读。
