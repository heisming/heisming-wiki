# CSS层叠式样式表语法

## 1、CSS基础语法和盒模型

### 1.1、CSS基础语法

#### 1.1.1、什么是CSS

​	CSS（cascading style sheet 层叠式样式表）是用来给HTML标签添加样式的语言，样式结构分离，美化页面。

​	本质：CSS就是样式的“清单”，要书写合适的选择器，然后把指定元素的样式“一条一条罗列”出来

​    CSS不是“逻辑编程”，是简单的罗列样式

​	！！！背诵CSS属性是非常重要的，决定了做网页的速度 

#### 1.1.2、书写位置

##### 	CSS外链式

```html
<link rel="stylesheet" href="css/css.css">
```

##### 	CSS内嵌式

```HTML
<head>
	<style>
	</style>
</head>
```

##### 	行内式

```html
<div style="color:cornflowerblue;">行内式</div>
```

​	CSS导入式 :  已淘汰

```html
 <style>
     @import url(css/css.css);
 </style>
```

#### 1.1.3、选择器

​	局部样式作用大于全局

##### 	标签(div)、元素、类型选择器

​		通常用于标签的初始化，例：ul无序列表的小圆点的除去，a超链接的下划线的除去

​		它直接使用元素的标签名当做选择器，将选择页面上所有的同种标签

#####  	id选择器

​		标签的唯一标识；#id{}

​		命名规范：只能由字母、数字、下划线、短横组成。不能以数字开头。字母区分大小写，小写为主。 

##### 	class选择器

​		命名规范：同ID选择器，多个标签可以相同类名,同一个标签可以属于多个类。

​		原子类（基础样式）：在做网页项目前，可以将所有常用字号、文字颜色、行高、外边距、内边距等都设置为单独的类。

​	**(好方法，要记住)HTML标签可以选择什么类来快速添加常见样式**

```html
<div id="para1">
    <ul>
        <li class="class1 spec1">我没有小圆点</li>
        <li class="class1 spec1 color-red">我没有小圆点</li>
        <li>我没有小圆点</li>
    </ul>
    <a href="#">我没有下划线了</a>
</div>
```

```css
/* 元素选择器 */
div{
  padding: 10px;
}
/* id选择器 */
#para1 {
    color: green;
}
/* 类选择器 */
.class1 {
    color: sandybrown;
}
.spec1 {
    font-style: italic;
}
/* 原子类选择器 */
.fs12 {
    font-size: 12px;
}
.color-red {
    color: red;
}
```

#### 1.1.4、复合选择器

##### 后代选择器

​	.box .spec 选择类名为box的标签内部的类名为spec的标签，可以隔着好几代

##### 交集选择器

​	li.spec 既是li标签，也是spec类的标签

##### 并集选择器

​	ul,ol 选择所有ul和ol标签

```html
<div class="box">
    <ul>
        <li>
            <p>我是后代选择器</p>
        </li>
        <li>
            <p class="spec">我是<em>强调文字</em></p>
        </li>
        <li>
            <p>我是段落</p>
        </li>
    </ul>
    <h3 class="spec">我是交集选择器</h3>
</div>
```

```css
/* 并集选择器 */
.box,
h3,
p {
    color: aqua;
}
/* 后代选择器 */
.box p.spec em {
    color: green;
}
/* 交集选择器 */
h3.spec {
    font-style: oblique;
}
```

#### 1.1.5、伪类

​	是添加到选择器的描述性词语，指定要选择的元素的特殊状态，超级链接拥有4个特殊状态

##### 		a:link没有被访问的超级链接

##### 		a:visited已经被访问过的超级链接

##### 		a:hover正被鼠标悬停的超级链接

##### 		a:active正被激活的超级链接（按下按键但是还没有松开按键）

​    a标签的伪类书写，要按照“爱lv恨ha准则”的顺序，否则会有伪类不生效 

##### 		★链接伪类的顺序

​	a:link=a:visited => **a:hover** => a:active (各自单独使用除外)

​	a:hover必须置于a:link和a:visited之后，才有效，a:active必须在a：hover之后，才有效。而link、visited两个伪类之间顺序无所谓，谁在前都可以。

```html
<div>
    <p style="font-weight:bold;">
        <a href="http://www.taobao.com">淘宝网</a>
    </p>
    <p>
        <a href="http://www.jd.com">京东网</a>
    </p>
</div>
```

```css
/* 伪类选择器 */
/* 默认颜色 */
a:link {
    color: dodgerblue;
}
/* 点击过后的颜色 */
a:visited {
    color: red;
}
/* 悬停时的样式 */
a:hover {
    background-color: yellow;
}
/* 鼠标按键按住不放的样式 */
a:active {
    font-size: 19px;
}
```

#### 1.1.6、元素关系选择器(IE7)

##### 子选择器

​	div>p： div的子标签p，只选择元素的直接后代的所有，父子关系（不包含孙子元素）

##### 相邻兄弟选择器

​	img+p： 图片后面紧跟着的段落将被选中，只选择一条,若不匹配，则无效

##### 通用兄弟选择器

​	p~span： p元素之后的所有**同层级**span元素

```html
<div class="box">
    <p>子选择器</p>
    <p>子选择器</p>
    <div>
        <p>X子选择器X</p>
        <p>X子选择器X</p>
    </div>
</div>
<p>
    <img src="images/gugong.jpg">
    <span>北京故宫</span>
    <span>X相邻兄弟选择器X</span>
</p>
<p>
    <img src="images/niaochao.jpg">
    <span>北京鸟巢</span>
    <span>X相邻兄弟选择器X</span>
</p>
<h3>通用兄弟选择器</h3>
<span>通用兄弟选择器</span>
<span>通用兄弟选择器</span>
<span>通用兄弟选择器</span>
<p>X通用兄弟选择器X</p>
<span>通用兄弟选择器</span>
<div>
    <span>X通用兄弟选择器X</span>
    <span>X通用兄弟选择器X</span>
</div>
```

```css
/* 元素关系选择器 */
/* 子选择器 */
.box>p {
    color: pink;
}
/* 相邻兄弟选择器 */
img+span {
    color: purple;
}
/* 通用兄弟选择器 */
h3~span {
    color: gold;
}
```

#### 1.1.7、序号选择器

##### 	:first-child 

​		选择其父元素的第一个子元素（IE7）

##### 	:last-child 

​		选择其父元素的最后一个子元素（IE9）

##### 	:nth-child(3) 

​		选择其父元素的第3个子元素(类似于数组元素取值，是这个类型就生效)（IE9）

​			1、(?)内可以写`Xn+Y`,表示从Y开始每隔X个选一个，不能反写`Y+Xn`,正整数n：从0到无穷大

​			2、(?)内2n+1==`odd`属性, 2n==`even`属性

​			3、若(?)内的值没有对应上所要选择的子元素，则不会被选中

##### 	:nth-of-type(3) 

​		选择其父元素的第3个某类型子元素（按照肉眼可见的类型第几个）

##### 	:nth-last-child(3) 

​		选择其父元素的倒数第3个子元素

##### 	:nth-last-of-type(3) 

​		选择其父元素的倒数第3个某类型子元素

##### 	nth-last-of-type(1)==last-of-type  

```html
<div class="box1">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <h3>666</h3>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <h3>888</h3>
    <h3>888</h3>
    <p>8</p>
    <p>9</p>
    <p>0</p>
</div>
```

```css
/* 序号选择器 */
.box1 p:first-child {
    color: red;
}
.box1 p:last-child {
    color: dodgerblue;
}
.box1 p:nth-child(2n) {
    color: yellowgreen;
}
.box1 h3:nth-of-type(3) {
    color: blue;
}
.box1 p:nth-last-child(3) {
    color: aliceblue;
}
```

##### 	★★★经典嵌套案例

因为家用电器的li标签属于ul的首个子元素，所以ol全部变红；

清洁用品属于ul的第二个子元素，所以不生效 

清洁用品中的ol第一个li洗衣液属于ol的第一个子元素，所以变红，

妇婴用品属于ul的第三个子元素，所以不变

```html
<ul>
    <li>
        家用电器
        <ol>
            <li>冰箱</li>
            <li>洗衣机</li>
            <li>空调</li>
        </ol>
    </li>
    <li>
        清洁用品
        <ol>
            <li>洗衣液</li>
            <li>消毒液</li>
            <li>洗厕液</li>
        </ol>
    </li>
    <li>妇婴用品</li>
</ul>
```

```css
li:first-child {
    color: red;
}
```

#### 1.1.8、属性选择器（极少用）（IE9）

​	Element[attribute“x”=“value”]选择器用于选取属性值中包含指定词汇的元素。

##### img[alt] 

​	选择有alt属性的img标签

##### img[alt="故宫"] 

​	选择alt属性是故宫的img标签

##### img[alt^="北京"] 

​	选择alt属性以北京开头的img标签

##### img[alt$="夜景"] 

​	选择alt属性以夜景结尾的img标签

##### img[alt*="美"] 

​	选择有alt属性中含有美字的img标签

##### img[alt~=“手机拍摄”] 

​	选择单独有alt属性中有空格隔开的手机拍摄字样的img标签

##### img[alt|=”参赛作品“] 

​	选择有alt属性以”参赛作品**—**"开头的img标签

```html
<div class="one s">one</div>
<div class="one s stwo">two</div>
<div class="one s-three">three</div>
<div class="one sfour">four</div>
<div class="sone">five</div>
```

```css
div[class~=s] {
    color: red;
}
```

```css
div[class^=s] {
    color: red;
}
```

```css
div[class*=s] {
    color: red;
}
```

```css
div[class|=s] {
    color: red;
}
```

#### 1.1.8、CSS3新增伪类

##### 	:empty

​		选择空标签 

##### 	:focus

​		选择当前获得焦点的表单元素

##### 	:enabled

​		选择当前有效的表单元素

##### 	:disabled

​		选择当前无效的表单元素

##### 	:checked

​		选择当前无效的表单元素（只用于单选按钮和复选框）

##### 	:root

​		选择当前已经勾选的单选按钮或者复选框选择根元素，即<html>标签

```html
<div class="class2">
    <p class="para"></p>
    <p class="para"></p>
    <p class="para"></p>
    <p class="para"></p>
</div>
<div>
    <input type="text">
    <input type="text" disabled>
    <input type="text">
    <input type="text" disabled>
    <input type="text">
</div>
<div>
    <input type="checkbox"><span>文字</span>
    <input type="checkbox"><span>文字</span>
    <input type="checkbox"><span>文字</span>
    <input type="checkbox"><span>文字</span>
    <input type="checkbox"><span>文字</span>
</div>
```

```css
/* CSS3新增伪类 */
.class2>p {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
}
p:empty {
    background-color: seagreen;
}
input:focus {
    background-color: red;
}
input:disabled {
    border: 1px solid blue;
}
input:enabled {
    border: 1px solid yellow;
}
input:checked+span {
    color: red;
}
```

#### 1.1.9、html=:root

#### 1.1.10、伪元素

##### X::before 

​	其将成为匹配选中的元素X，content内容充当第一个子元素，必须设置content属性

##### X::after

​	其将成为匹配选中的元素X，content内容充当最后一个子元素，必须设置content属性

##### X::selecetion

​	应用于文档中被用户高亮的使用鼠标圈选的部分

##### X::first-letter

​	会选中某元素中（必须是块级元素）第一行的第一个字母

##### X::first-line

​	会选中某元素中（必须是块级元素）第一行的全部字母

```html
<div>
    <a href="">我是一个</a>
</div>
<div class="box22">
    文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
    文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
    文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
</div>
```

```css
/* 伪元素 */
a::before {
    content: "□";
}
a::after {
    content: "❤"
}
.box22 {
    width: 400px;
    height: 300px;
    border: 1px solid #000;
}
.box22::selection {
    background-color: springgreen;
    color: deeppink;
}
.box22::first-letter {
    font-style: oblique;
}
.box22::first-line {
    text-decoration: underline;
}
```

#### 1.1.11、层叠性和选择器权重计算

##### 	层叠性

​		多个选择器可以同时作用于同一个标签，效果叠加

##### 	冲突性

​		id权重>class权重>标签权重,权值相同，就近原则。

​		CSS行内式的优先级>内嵌式的优先级。

##### 	选择器权重计算

​		复杂选择器可以通过（id、class、标签的个数）的形式，计算权重，数值多的获胜，

​	 计算方式：一个ID选择器权值为100，一个类名选择器权值为10，一个标签选择器权值为1。可以通过（百位，十位，个位）计算更简便。有几个ID选择器，就						把数量填在百位上；有几个类名选择器，就把数量填在十位上；有几个元素选择器，就把数量填在个位数上。如#box #inner div 这个选择器中 ，包						含2个ID选	择器、0个类名选择器、1个标签选择器。那么就是（2,0,1），最终的权值就是201。

​      举例：#div .p span权值是（1，1，1），span权值是（0，0，1），div p span权值是（0，0，3），#div p span权值是（1，0，2）

​				  所以111>001>003>102

​	 注意：`!important`提升至最大权重，可以写在属性后面。（很少使用）

​				若复合选择器中没带有p标签，则表示p标签有**继承性**，权重失效，这时就遵循最近原则，谁离p标签进，谁就获胜。若一样近，就会比较权重。

```html
<div>
    <div id="box01" class="box01">
        <div id="box02" class="box02">
            <div id="box03" class="box03">
                <p>权重计算</p>
            </div>
        </div>
    </div>
</div>
```

```css
/* 权重计算 */
/* 权重（2，1，0） */
#box01 #box2 p {
    color: red;
}
/* 权重（2，1，2） */
#box01 div.box02 #box03 p {
    color: blue;
}
/* 权重（0，3，1） */
.box01 .box02 .box03 p {
    color: green;
}
```

```css
.box01 #box02 {
  color: red;
}
#box01 #box02 {
  color: blue;
}
/* 没有带<p>标签全都权重失效，带有继承性，离p标签最近 */
.box01 .box02 .box03 {
  color: green;
}
```

#### 1.1.12、文本与字体属性

##### color属性

​	设置文本内容的前景色：

​	1、RGB(255,0,0)，工作时追求精准

​	2、#XXXXXX：十六进制表示法#aabbcc==#abc

​	3、黑色是#000,白色是#fff，灰色有#ccc、#333、#2f2f2f等

​	4、RGBA（255,  0,  0,  0.65）最后一个参数表示透明度，介于0~1之间，0表示纯透明，1表示纯实心

```html
<p class="rgba">透明文字</p>
```

```css
.rgba {
    color: rgba(255, 2, 2, 0.6)
}
```

#####  font-size属性

​	用来设置字号，单位通常为px；em、rem。

​	网页文字正文字号通常是16px，**浏览器最小支持10px字号**

##### font-weight属性

​	设置字体的粗细程度，normal=400, bold=700;

```html
<p class="weight">加粗文字</p>
<h3 class="noweight">去加粗文字</p>
```

```css
.weight {
    font-weight: blod;
}
h3.noweight {
    font-weight: normal;
}
```

##### font-style属性

​	设置字体的倾斜

​		normal：取消倾斜，比如可以把天生倾斜的i，em等标签设置为不倾斜

​		italic：设置为倾斜字体（常用）

```html
<i class="i">取消倾斜</i>
```

```css
i.i {
    font-style: normal;
}
```

##### text-decoration属性

​	用于设置文本的修饰线外观的

​		none:没有修饰线

​		underline：下划线 

​		line-through：删除线

```html
<p class="line-through">删除线</p>
```

```css
p.line-through {
    text-decoration: line-through;
}
```

##### font-family属性

​	用于设置字体

​		1、字体可以是列表形式，一般英语字体放到前面，后面的字体是前面的字体的“后备字体”

​		2、字体名称中有空格、中文必须用“”包裹

​		3、通常必须是用户计算机中已经安装好的字体；微软雅黑和宋体较多，

​		4、如何设置为用户电脑中没有的字体呢？那就必须自己定义新字体，这就需要我们有字体文件，用户加载网页的时候，

​		5、字体文件根据操作系统和浏览器不同，有eot、woff2、woff、ttf、svg文件格式，需要同时有这5种文件

​		6、当我们拥有字体文件之后，就可以用＠font-face定义字体

​		7、阿里巴巴提供了一套免费商用授权的普惠字体，网址https://www.iconfont.cn/webfont，省去下载的麻烦

​		8、当引号嵌套时，外面的引号使用双引号，内部的引号使用单引号

```html
<p class="font-family">备用字体格式</p>
<p class="font-face">我的优点是：我很帅;但是我的缺点是：我帅的不明显。</p>
```

```css
p.font-family{
    font-family: 'Courier New', Courier, "微软雅黑"；
}

/* 线上引用，可下载放入fonts文件夹中引用，有一定的使用范围，根据网页生成的文字的词句的文字应用，没有生成的一
@font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('//at.alicdn.com/t/webfont_1g8xfhru0sl.eot');
    /* IE9*/
    src: url('//at.alicdn.com/t/webfont_1g8xfhru0sl.eot?#iefix') format('embedded-opentype'),
        /* IE6-IE8 */
        url('//at.alicdn.com/t/webfont_1g8xfhru0sl.woff2') format('woff2'),
        url('//at.alicdn.com/t/webfont_1g8xfhru0sl.woff') format('woff'),
        /* chrome、firefox */
        url('//at.alicdn.com/t/webfont_1g8xfhru0sl.ttf') format('truetype'),
        /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/webfont_1g8xfhru0sl.svg#杨任东竹石体-Bold') format('svg');
    /* iOS 4.1- */
}
p.font-face{
    font-family: webfont;
}
```

#### 1.1.13、段落和行相关属性

##### text-indent属性

​	定义首行文本内容之前的缩进量，缩进两个字符2em；em表示字符宽度

##### line-height属性

​	用来定义行高，**无单位写法表示字号的倍数**

###### 	继承问题

​		写具体数值，如30px，则继承改值。

​		写比例，如2/1.5，则继承该比例。

​		写百分比，如200%，则继承计算出来的值。

​	**单行文本垂直居中**：设置行高=盒子高度，即实现单行文本垂直居中

##### text-align属性

​	 center即可以实现文本水平居中， 快捷键：tac

##### word-wrap

​	属性允许长单词或 URL 地址换行到下一行。

```css
word-wrap: normal|break-word;
```

##### font合写属性（性能优化）

​	必须:可以用来作为font-style，font-weight，font-size，line-height和font-family属性的合写 

```html
<p class="text">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
<div class="box99">
    行胜于言
</div>
```

```css
/* 缩进2个字符 */
p.text{
    text-indent:2em;
    /* 设置行高 */
    line-height:2.5;
    /* font合写必写属性:加粗 倾斜 字大小/行高 字体， */
    font:bold italic 40px/1.5 "Times New Roman","微软雅黑";
}
.box99{
    width: 440px;
    height: 440px;
    background-color: orange;
    font-size: 45px;
    color: white;
    /* 水平居中 */
    text-align: center;
    /* 垂直居中 */
    line-height: 440px;            
}
```

#### 1.1.14、继承性inherited

##### 	 **文本相关的属性普遍具有继承性**

​		只需要给祖先标签设置，即可在后代所有标签中生效

​		 color、font-xxx、list-xxx、text-xxx、line-xxx；

​		 因为文字相关的属性有继承性，所以通常会设置body标签的字号、颜色、行高等，这样就可以当做整个网页的默认样式了。

​			1、就近原则：在继承的情况下，选择器权重计算失效，而是“就近原则” 

​			2、若复合选择器中没带有p标签，则表示p标签有继承性，权重失效，这时就遵循最近原则，谁离p标签进，谁就获胜。若一样近，就会比较权重。

​			3、★★★注意：<a>自带默认样式，所以就近自己自带的样式，它没有继承性。

```html
<div>
    <div id="box61" class="box61">
        <div id="box62" class="box62">
            <div id="box63" class="box63">
                <p>继承性</p>
            </div>
        </div>
    </div>
</div>
```

```css
/* 继承性 */
#box61 #box62 #box63{
    color: red;
}
p{
    color:yellow;
}
```

```html
<div class="box100">
    <div class="box101">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</div>
```

```css
.box100 .box101 ul{
  color: green;  
}
li:first-child{
  color: red;
}
li{
  color: blue;
}
.box100 .box101{
  color: pink;  
}
```



### 1.2、盒模型（面试必考）

​	所有HTML标签都可以看成矩形盒子，由width（内容）、height（内容）、padding（内边距）、border（外边框）构成。

​	![image-20210901204821689](D:\大前端学习\MarkDown\0基础\img\box.png)	

1、盒子的**总宽度 **= width + 左右padding + 左右border
2、盒子的**总高度** = height + 上下padding + 上下border

##### 	width属性表示盒子**内容的宽度**，px单位

​		当块级元素（div、h系列、li等）没有设置width属性时，它将自动撑满，这不意味着width可以继承

##### 	height属性表示盒子**内容的高度**，px单位

​		如果不设置，它将自动被其内容撑开。如果没有内容，则值为0。

##### 	padding是盒子的内边距，即盒子边框内壁到文字的距离

 		padding-top     上padding

​		 padding-right   右padding

 		padding-bottom  下padding
 	
 		padding-left    左padding

##### 	padding顺时针记忆法 

​		单数值写法（上右下左）：padding:10px;
​		双数值写法（上下，左右）：padding:10px 20px;
​		三数值写法（上，左右，下）: padding:10px 30px 10px;
​		四数值写法（上,右,下,左）：padding:10px 20px 30px 40px;
​		特殊值写法（上下,左右0）：padding:30px 0;
​		小属性层叠大属性：padding:40px; padding-bottom:0;
​     

```html
<div class="box111"></div>
```

```css
/* 盒子模型 */
.box111{
    background-color: orange;
    width: 200px;
    height: 200px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 40px;
}
```

##### margin是盒子的外边距

​	margin-top  上margin，“向上踹”

​	margin-right  右margin，“向右踹”

​	margin-bottom 下margin，“向下踹”

​	margin-left  左margin，“向左踹”

```html
<span style="border: 1px solid black;margin-right: 30px;">我是一个SPAN</span>
<span style="border: 1px solid black;margin-left: 40px;">我是另一个SPAN</span
```

###### 竖直方向的margin有塌陷现象

​	小px的margin会塌陷到大px的margin中，从而margin不叠加，只以大px值为准

```html
<div style="width:200px;height:200px;background-color:red;margin-bottom: 50px;"></div>
<div style="width:200px;height:200px;background-color:green;margin-top: 100px;"></div>
```

###### 部分元素有默认的margin

​	    body、ul、ol、p等

​		在开始制作网页的时候，要将他们清除(详情看HTML标签内容)

​		1、*(通配符选择器，表示所有元素){margin:0;padding:0;}效率低

​		2、一般使用这个：body,ul,p{margin:0;padding:0;}

###### margin有传递现象

​	当父子元素中子元素设置margin-top时，会连带父元素一起向下

###### margin设置负值

​	**margin-top负值元素向上移动，margin-left负值元素向左移动**

​	**margin-right负值，右侧元素左移，自身不受影响**

​	**margin-bottom负值，下方元素上移，自身不受影响**

解决方案：
	1、给父容器加上边框：边框会改变元素的尺寸，因为需要注意，为了不让边框影响页面效果，可以考虑边框的颜色与父元素一直，或者通过样式border:1px solid transparent;将其设置成透明 

​	2、子元素设置浮动；

​	3、父元素设置浮动：浮动会让元素脱离文档流，产生高度塌陷问题，从而对页面布局产生影响，产生了要清除浮动。

​	4、子绝父相：设置父元素相对定位，子元素绝对定位。

​	5、将子元素margin换成padding，给父元素设置overflow:hidden;（如果子元素必须超出父元素才能实现效果，此时不建议使用该属性，否则子元素超出的部分可能会被隐藏掉）盒子的水平居中

```html
<div style="width:200px;height:200px;background-color:green;">       
    <p style="width:100px;height:100px;background-color:red;margin-top: 100px;"></p>>
</div>
```

##### 盒模型计算

​	盒子内部空间是由父盒子的width和height属性决定的

​	div.box001的可用内部空间为：宽度=400px，高度=**300px**；

​	div.c1的占用空间为:宽度=width:388px+border:6px*2=**400px**，高度=height:188px+border:6px*2+margin-bottom:20px=**220px**

​	所以留给div.c2的空间只剩：宽度=**400px**，高度=**80px**;所以同上计算方式。

​		注意：padding: 10px 0;表示盒子内边距增大，所以像充气的气球一样，会向外扩大；

###### box-sizing:border-box属性(IE9)

​		即padding、border变为“内缩”的，不再“外扩”；就是实际的width和height；

​		大量应用于移动网页制作，因为它结合百分比布局、弹性布局等非常好用，PC极少

```HTML
<div class="box001">
    <div class="c1"></div>
    <div class="c2"></div>
</div>
```

```css
/* 盒模型计算 */
.box001{
    width: 400px;
    height: 300px;
    border: 5px solid rgb(238, 158, 158);
    padding:10px;
    /* 居中显示 */
    margin:40px auto;
}
.box001 .c1{
    width: 388px;
    height: 188px;
    border: 6px solid rgb(136, 228, 177);
    margin-bottom: 20px;
}   
.box001 .c2{
    width: 388px;
    height: 48px;
    border: 6px solid rgb(136, 210, 228);
    padding: 10px 0;
}   
```

##### ★★★display属性

###### 	块级元素

​		非并排显示，能设置宽高，不设置width时自动撑满；div,section,header,p,h系列,li,ul,ol,dl,dt,dd等

###### 	行内元素

​		并排显示,不能设置宽高，不设置width时自动收缩；a,span,em,b,u,i等(**文字为主，text-align属性有效)，margin无效**

###### 	行内块

​		img和表单input，from, table元素都是，既可以设置宽高又可以并排显示

###### 	相互转换

​		block属性将元素转为块级

​		inline属性将元素转为行内元素，不多见

​		inline-block属性将元素转为行内块

```html
<span style="display: block; border: 1px solid #000; width: 100px;">我是行内元素转换为块元素</span>
```

###### 	元素的隐藏

​			none属性可以将元素隐藏，元素将彻底放弃位置，如同没有写它的标签一样

​			**visibility:hidden**也可以将元素隐藏，但是元素**不放弃自己的位置**

```html
<div  style="border: 1px solid #000;width: 200px;height: 200px;background-color: red;visibility: hidden;"></div>
<div  style="border: 1px solid #000;width: 200px;height: 200px;background-color: blue;display: none;" ></div>
<div  style="border: 1px solid #000;width: 200px;height: 200px;background-color: yellow;"></div>
```



## 2、浮动与定位（面试必考）

### 	2.1、浮动

​		浮动的本质功能：用来实现并排，并排的盒子都要设置浮动，父盒子需要有足够的宽度，否则子盒子会掉下去

​		浮动的顺序贴靠特性：子盒子会按顺序进行贴靠，如果没有足够空间，则会寻找在前一个兄弟元素

​		浮动的元素不再区分块级元素、行内元素，**脱离了标准文档流**，《一律能够设置宽度和高度》，即使它是span或者a标签等

#### 		float：left左浮动

#### 		float：right右浮动，（实际工作使用少）



#### 		使用浮动实现网页布局

​			垂直显示的盒子，不要设置浮动，只有并排显示的盒子才要设置浮动

​			“大盒子带着小盒子跑”，一个大盒子中，又是一个小天地，内部可以继续使用浮动

​			超时售卖的塑料袋0.3元一个，**div是免费的**！不要节约盒子！

```html
<div style="border: 1px solid #000;width: 250px;height: 100px;">
    <div style="width: 150px;height: 100px;background-color: red;float: left;color: white;text-align: center;line-height: 100px;">1</div>
    <div style="width: 100px;height: 50px;background-color: blue;float: left;color: white;text-align: center;line-height: 50px;">2</div>
    <div style="width: 100px;height: 50px;background-color: green;float: left;color: white;text-align: center;line-height: 50px;">3</div>
</div>
<div style="border: 1px solid #000;width: 250px;height: 100px;">
    <div style="width: 150px;height: 100px;background-color: red;float: right;color: white;text-align: center;line-height: 100px;">1</div>
    <div style="width: 100px;height: 50px;background-color: blue;float: right;color: white;text-align: center;line-height: 50px;">2</div>
    <div style="width: 100px;height: 50px;background-color: green;float: right;color: white;text-align: center;line-height: 50px;">3</div>
</div>
```

```html
<header>
    <div class="logo"></div>
    <div class="login"></div>
    <nav></nav>
</header>
<section id="content">
    <aside class="ad"></aside>
    <main>
        <div class="banner"></div>
        <div class="pics">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </main> 
</section>
<footer></footer>
```

```css
header{
    width: 600px;
    height: 100px;
    margin: 40px auto;
}      
header .logo{
    width: 180px;
    height: 100px;
    float: left;
    background-color: orange;
}
header .login{
    width: 260px;
    height: 40px;
    background-color: green;
    float: right;
}
nav{
    width: 380px;
    height: 40px;
    float: right;
    margin-top: 20px;
    background-color: blue;
}
/* 内容区域 */
#content{
    width: 600px;
    height: 300px;
    margin: 40px auto;      
      
}        
#content .ad{
    width: 230px;
    height: 300px;
    float: left;
    background-color: red;
}
#content main{
    float: right;
    width: 340px;
    height: 300px;
}
#content main .banner{
    width: 340px;
    height: 200px;
    background-color:rgb(119, 153, 228);
}
#content main .pics{
    width: 340px;
    height: 70px;
    margin-top: 30px;
}
#content main .pics ul{
    list-style: none;
}
ul{   
      margin: 0;
      padding: 0;
}
      
#content main .pics ul li{
    float: left;
    width: 75px;
    height: 70px;
    background-color: yellow;   
    margin-right: 13px;
}
#content main .pics li:last-child{
    margin-right: 0;
}
     
footer{
    width: 600px;
    height: 100px;
    margin: 0 auto;
    background-color: #aaa;
}
```

#### 2.1.1、BFC规范和浏览器差异（面试题）

##### BFC(Box Formatting Context，块级格式化下上文)

​	是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素的影响，反之亦然

​	**当一个盒子不设置height，当内容子元素都浮动时**，无法撑起自身(例如前端不知道后端传给我的数据是多大，所以某些情况之下，部分盒子是无法设置高度的)

​	**那么就说这个盒子就没有形成BFC**

##### 如何创建BFC

​	方法1：float的值不是none

​	方法2：position的值不是static或者relative

​	方法3：display的值是inline-block、flex或者inline-flex

​	方法4：overflow：hidde  表示溢出隐藏，溢出盒子边框的内容将会被隐藏，非常好用

##### BFC的其他作用

​	BFC可以取消盒子margin塌陷

​	BFC可以阻止元素被浮动的元素覆盖 

##### ???

IE6、7浏览器使用haslayout机制，和BFC规范略有差异，比如IE浏览器可以使用zoom:1属性“让盒子拥有layout”

如果要制作兼容到IE6、7的网页时，尽量让网页布局变得简单，内部有浮动的盒子要设置height属性，规范编程，不要“玩杂技”

```html
<!-- 不设置height,没有被撑起来，边框挤在一起 -->
<div style="width: 400px;border:10px solid #000">
    <div style="width: 200px;height: 200px;background-color: orange;float: left;"></div>
    <div style="width: 200px;height: 200px;background-color: blue;float: left;"></div>
</div>
```

```html
<!-- 浮动元素覆盖，一般浮动都是要一起设置的，所以这样做不规范。可以用overflow：hidden知识点让其正常
<section style="width: 300px;height: 300px;background-color: red;float: left;"></section>
<section style="width: 200px;height: 200px;background-color: blue;overflow: hidden;"></section>
```

#### 2.1.2、★清除浮动

浮动一定要封闭到一个盒子中，否则就会对页面后续元素产生影响

​	方法1：让内部有浮动的父盒子形成BFC,他就能关闭住内部的浮动。此时最好的方法就是overflow：hidden属性。

​	方法2：给后面的父盒子设置clear：both属性，clear表示清除浮动对自己的影响，both表示左右浮动都清除（margin失效）极少用

​	方法3：使用::after伪元素给盒子添加最后一个子元素，并且给其设置clear:both，然后再转为块元素(工作中常用)

​	方法4：在两个父盒子之间“隔墙”，隔一个clear:both的盒子，并设置自己高度来当做缝隙

```html
<!-- 这个盒子拿到style="overflow: hidden;"试试看效果 -->
<div style="overflow: hidden;">
    <p style="float: left; width: 100px;height: 100px;background-color: orange;margin-right: 20px;"></p>
    <p style="float: left; width: 100px;height: 100px;background-color: orange;margin-right: 20px;"></p>
</div>
<div style="overflow: hidden;">
    <p style="float: left; width: 100px;height: 100px;background-color: orange;margin-right: 20px;"></p>
    <p style="float: left; width: 100px;height: 100px;background-color: orange;margin-right: 20px;"></p>
</div>
```

### 2.2、定位

#### 	相对定位

​		盒子可以相对自己原来的位置进行位置调整

​		位置描述词：left向右移动，right向左，top向下，bottom向上。单位px；可以设置负整，方向相反。

​		性质：相对定位的元素，会在“**老家留坑**”，本质上仍然是在原来的位置，只不过渲染在新的地方而已，渲染的图形可以比喻成“影子”，不会对页面其他元素产生任何影响

​		**用途：1、相对定位用来微调元素位置；2、相对定位的元素，可以当做绝对定位的参考盒子**

​		por快捷键:position: relative;

```html
 <div class="blue"></div>
 <p>wow</p>
 <div class="red"></div>
```

```css
/* 相对定位 */
.blue{
    width: 100px;
    height: 100px;
    background: blue;
    /*  */
    position: relative;
    left: 50px;
    bottom: -50px;
}
.red{
    width: 100px;
    height: 100px;
    background: red;
}
```

#### 	绝对定位

​		盒子可以在浏览器中以坐标进行位置精准描述，拥有自己的绝对位置

​		位置描述词：left到左边的距离，right到右边的距离，top到上边的距离，bottom到下面的距离。单位px；

​		**绝对定位脱离标准文档流**，将释放自己的位置，对其他元素不会产生任何干扰，而是对他们进行**压盖**

##### 		绝对定位的参考盒子

​			不是永远以浏览器作为基准点
​			会以自己祖先元素中，离自己最近的拥有定位属性的盒子，当做基准点。
​			这个盒子通常是相对定位的，所以这个性质也叫做“子绝父相”

##### 		绝对定位的盒子垂直居中

​			top:50%;margin-top:-自己高度的一半;水平居中同理

​		poa快捷键:position:absolute

##### 		堆叠顺序z-index属性

​			一个没有单位的正整数，数值大的盒子能够压住数值小的

​			绝对定位的用途: 1、绝对定位用来制作“压盖”、“遮罩”的效果;2、绝对定位结合CSS精灵使用及结合JS实现动画

```html
<div class="carousel">
    <img src="images/wuxi/1.jpg" alt="wuxi"> 
    <a href="#" class="left_btn btn">&lt;</a>
    <a href="#" class="right_btn btn">&gt;</a>
    <ol>
        <li></li>
        <li class="current"></li>
        <li></li>
        <li></li>
    </ol>
</div>
```

```css
/* 绝对定位 */
.carousel {
    width: 900px;
    height: 500px;
    border: 1px solid #000;
    margin: 40px auto;
    position: relative;
}
.carousel .btn{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    text-decoration: none;
    background-color: rgba(255, 255, 255, .5);
    /* 设置圆角 */
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    color:white;
    font-family: consolas;
    font-size: 30px;
    /* 设置鼠标变小手 */
    cursor: pointer;
}
.carousel .btn:hover{
    background-color: grey;
}
.carousel .left_btn{
    left: 10px;
}
.carousel .right_btn{
    right: 10px;
}
.carousel ol{
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 120px;
    height: 20px;
}
.carousel ol li{
   float: left;
   width: 20px;
   height: 20px;
   margin-left: 6px;
   border-radius: 50%;
   background-color: rgba(255, 255, 255, .5);
   list-style: none;
}
.carousel ol li.current{
    background-color: gold;
}
```

#### 固定定位

​	不管页面如何卷动，它永远固定在那里

​		注意事项：固定定位只能以页面为参考点，没有子固父相这个性质，脱离标准文档流

​		用途：制作“返回顶部”，“楼层导航”

```html
<div 
  style="
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: 100px;height: 100px; 
  background-color: rgba(0, 255, 255, .5);
  ">
    返回底部</div>                                                          
```

#### 脱离标准文档流的方法：

##### 	浮动、绝对定位、固定定位





## 3.CSS背景样式

### 	3.1、边框与圆角

#### 		3.1.1、边框border

##### 		边框的三要素

​			border：1px solid red;{线宽度、线型、线颜色}

##### 		线型

​			solid实线，《dashed虚线，dotted点状线》

##### 		小属性

​			 border-width线宽，border-style线型，border-color线颜色

```html
<div style="border:1px dashed red;width: 200px;height: 200px;">dashed</div>
<div style="border:1px dotted red;width: 200px;height: 200px;">dotted</div>
<!-- 《小属性》方便"层叠"大属性，当你需要把同样样式的盒子边框中的某一个属性改动，就使用小属性就可以了 -->
<div style="border-width:1px;border-style:dotted;border-color:red;width: 200px;height: 200px;">拆分为小属性</div>
```

##### 		四个方向的边框

​			border-top:上边框

​			border-right:右边框 

​			border-bottom:下边框 

​			border-left:左边框 

​			四个边框的拆分为小属性:用来层叠

​				以top为例 => border-top-width; border-top-style; border-top-color;四种同例

```HTML
<div style="border-left:1px solid red;
            border-right-width: 1px;
            border-right-style:dashed;
            border-right-color:red;
            width: 200px;height: 200px; margin-top: 20px;">四个方向的边框</div>
```

##### 去掉边框 

```CSS
border-left:none;
```

##### ★利用边框制作三角形

```html
 <div class="triangle">制作三角形</div>
```

```css
.triangle{
    width: 0;
    height: 0;
    /* transparent是透明色 */
    border: 20px solid transparent;
    border-top-color: red;
    /* 对角线平分三角形 */
    border-left-color: red;
}
```

#### 3.1.2、圆角-CSS3

##### 	border-radius属性

​		通常为px单位（表示圆角的圆的半径），表示圆角的半径

​		单独设置四个圆角：border-radius:10px 20px 30px 40px 左上、右上、右下、左下；==>> **以左上开始的顺时针。**

​			一个值表示：按照半径数值计算，超过半径数值都是50%样式。

​			两个值表示：第一个左上和右下，第二个表示右上和左下。==>> 以左上开始的对角线原则

​			三个值表示：第一个左上角，第二个右上、左下角，第三个值右下。 ==>> 以左上开始的横向正常行数

###### 		**小属性**

​			border-top-left-radius左上角，border-bottom-left-radius右下角

###### 		百分比作为单位

​			表示圆角起始于每条边的哪里，如果边100px，20%就是20px；依赖边长

​			正方形盒子设置50%就是正圆形；长方形盒子则为椭圆形。

###### 		box-sizing: border-box;

​			这种情况：**在盒子的高度是百分比写的**，当盒子有边框的时候，此属性的作用让height属性是盒子的总高度。

```html
 <div style="border:1px solid black;
 border-radius:10px 50px 20px 30px;
 width: 100px;height: 100px;">圆角</div>
 
 <div style="border:1px solid black;
 border-radius:50%;
 width: 100px;height: 100px;">正方形</div>

 <div style="border:1px solid black;
 border-radius:50%;
 width: 200px;height: 100px;">椭圆形</div>

 <div style="border:1px solid black;
 border-radius:100px;
 width: 200px;height: 100px;">胶囊形</div>
 
 <div style="border:1px solid black;
 border-radius:20px 50px;
 width: 100px;height: 100px;">圆角两个值</div>

 <div style="border:1px solid black;
 border-radius:50px 40px 15px;
 width: 100px;height: 100px;">圆角三个值</div>
```

###### 制作蝴蝶结

```html
<div class="bows">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
/* 制作蝴蝶结 */
.bows{
    width: 200px;
    position: relative;
}
.bows .left{
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-left-color: red ;
    border-radius: 40%;
    position: absolute;
}
.bows .right{
    width: 0;
    height: 0;
    border: 100px solid transparent;
    border-right-color: red;
    border-radius: 40%;
    position: absolute;
    right: 20px;
}
```

#### 3.1.3、盒子阴影-CSS3

##### 	box-shadow属性

​	box-shadow:10px  20xp  30px   rgba(0,0,0,0.4);

​					X轴偏移，Y轴偏移，模糊量，颜色（偏移可负），**以盒子中心为轴心**

```html
<div style="border:1px solid black;
box-shadow: 30px 20px 30px rgba(0, 0, 0, 0.4);
width: 100px;height: 100px;margin-top: 200px;">盒子阴影</div>
```

##### 	阴影延展

​		第四个参数为阴影延展值

​		box-shadow:10px 20xp 30px 40px rgba(0,0,0,0.4);

```html
<div style="border:1px solid black;
box-shadow: 2px 2px 20px 30px rgba(0, 0, 0, 0.4);
width: 100px;height: 100px;margin-top: 100px;">阴影延展</div>
```

##### 	内阴影

​		属性前面加inset，表示内阴影

​		box-shadow:inset 10px 20xp 30px 40px rgba(0,0,0,0.4);

```html
<div style="border:1px solid black;
box-shadow:inset 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
width: 100px;height: 100px;margin-top: 100px;">内阴影</div
```

##### 	多阴影

​		用逗号隔开，表示多个阴影

```html
<div style="border:1px solid black;
box-shadow:2px 2px 10px 20px rgba(0, 0, 0, 0.4),
4px 4px 10px 20px rgba(233, 57, 66, 0.685),
inset 2px 2px 10px 20px rgba(25, 33,122, 0.4);
width: 100px;height: 100px;margin-top: 100px;"> 多阴影</div>
```



#### 3.1.4、文本阴影效果-CSS3



##### text-shadow属性

```css
text-shadow: 5px 5px 5px #FF0000;
```

```css
text-shadow: h-shadow v-shadow blur color;
/* 水平阴影的位置-允许负值, 垂直阴影的位置-允许负, 模糊的距离, 阴影的颜色*/
```

### 3.2、背景基础知识（IE6）

#### 	3.2.1、背景颜色基础知识

##### 		background-color： red;

​			十六进制、rgb()、rgba()

###### 			padding区域是有背景颜色的

#### 	3.2.2、背景图片基础知识

##### 		background-image:url(imgs/bg.png);

​			图片路径写到url()中，可以写http://绝对路径要加双引号

​			**如果CSS样式表是外链的，要从CSS出发到图片的路径，而不是HTML**

```html
<div style="background-image: url(images/goblin.png);
            width: 500px;height: 300px;
            border: 1px solid #000;">文字文字文字文字文字文字文字</div>
```

##### 		背景图片的重复模式

###### 			background-repeat

​				可以用来调整背景图片的重复模式

|   属性    |        样式        |
| :-------: | :----------------: |
|  repeat   | x、y均平铺（默认） |
| repeat-x  |       x平铺        |
| repeat-y  |       y平铺        |
| no-repeat |       不平铺       |

```html
<div style="background-repeat:repeat;
            background-image: url(images/archer.png); 
            width: 900px;height: 600px;border: 1px solid #000;">x、y均平铺</div>

<div style="background-repeat:repeat-x;
            background-image: url(images/archer.png); 
            width: 900px;height: 600px;border: 1px solid #000;">x平铺</div>

<div style="background-repeat:repeat-y;
            background-image: url(images/archer.png); 
            width: 900px;height: 600px;border: 1px solid #000;">y平铺</div>

<div style="background-repeat:no-repeat;
            background-image: url(images/archer.png); 
            width: 900px;height: 600px;border: 1px solid #000;">不平铺</div>
```

#### 	3.2.3、背景尺寸(IE9)-CSS3		

##### 			background-size:100px 200px;

​				宽高 也可以写百分比;等比例写auto					 

​				用来设置背景图片尺寸

```html
<div style="background-size:300px auto;
            background-image: url(images/beijing/1.jpg); 
            width: 600px;height: 300px;border: 1px solid #000;"></div>
```

###### 		contain属性

​			表示将背景图片智能改变尺寸以容纳到盒子里

```html
<div style="background-size:contain;
            background-image: url(images/beijing/1.jpg); 
            width: 600px;height: 400px;border: 1px solid #000;margin-top: 10px;background-repeat:no-repeat;"></div>
```

##### 		cover属性

​			表示将背景图片智能改变尺寸以撑满盒子

```html
<div style="background-size:cover;
            background-image: url(images/beijing/1.jpg); 
            width: 600px;height: 400px;border: 1px solid #000;margin-top: 10px;background-repeat:no-repeat;"></div>
```

#### 3.2.4、背景裁切(极少用)(IE9)

##### 	 background-clip：default;

​		设置元素的背景裁切到哪个盒子

```html
<div style="background-image:url(images/0.jpg);
    width: 300px;height: 300px;margin-top: 10px;
    border: 10px dotted #000;
    padding: 50px; margin-bottom: 10px;"></div>
```

###### 		border-box属性  

​			背景延伸至边框（默认default）

```html
<!-- 背景裁切到padding区域，此时就不会在点状线、虚线边框地下渲染 -->
<div style="background-image:url(images/0.jpg);
	width: 300px;height: 300px; margin-bottom: 10px; padding: 50px; 
    border: 10px dotted #000;
    background-clip: padding-box;"></div>
```

###### 		padding-box属性 

​			背景延伸至内边（padding），不会绘制到边框外（仅在dotted、dashed边框可察觉）

```HTML
<!-- padding区域没有背景图片 -->
    <div style="background-image:url(images/0.jpg);
    width: 300px;height: 300px; margin-bottom: 10px;
	padding: 50px; 
    border: 10px dotted #000;
    background-clip: content-box;
    background-size: 100px auto;
    background-origin: content-box;"></div
```

###### 		content-box属性 

​			背景被裁减至内容区

#### 3.2.5、背景原点

##### 	background-origin：padding-box;

###### 		padding-box

​			背景图像相对于内边距框来定位

###### 		border-box

​			背景图像相对于边框盒来定位

###### 		content-box

​			背景图像相对于内容框来定位

#### 3.2.6、背景固定-CSS3

##### 	background-attachment:scroll;

​		决定背景图像的位置是在视口内固定，或者随着包含他的区块滚动。

###### 		fixed 

​			自己滚动条不动，外部滚动条不动

###### 		local 

​			自己滚动条动，外部滚动条动

###### 		scroll 

​			自己滚动条不动，外部滚动条动（默认）

```html
<!-- 溢出的纵向内容用滚动条显示 -->
    <div style="overflow-y:scroll;background-image: url(images/0.jpg);
         width: 500px;height: 500px; border: 1px solid #000;margin-bottom: 10px;
         background-attachment: fixed;">  
         <!-- 外部滚动条动，内部背景图片滚动 -->
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
    </div>
```

#### 3.2.7、背景图片位置（常用）

##### 	background-position:100px 200px;

​		设置背景图片出现在盒子的什么位置

​		top、bottom、left、right、center定位图片，可以使用百分比

```html
<div style="width: 400px;height: 300px;border: 1px solid #000;margin-bottom: 10px;
background-image: url(images/0.jpg); background-repeat: no-repeat;background-size: 50% auto;
background-position: center center;">center center</div>

<div style="width: 400px;height: 300px;border: 1px solid #000;margin-bottom: 10px;
background-image: url(images/0.jpg); background-repeat: no-repeat;background-size: 50% auto;
background-position: top center;">top center</div>

<div style="width: 400px;height: 300px;border: 1px solid #000;margin-bottom: 10px;
background-image: url(images/0.jpg); background-repeat: no-repeat;background-size: 50% auto;
background-position: top right;">top right</div>
```

​		如果只定义了一个属性，那么第二个值默认为center

##### 	CSS精灵技术&CSS雪碧图

​		将多个小图标合并制作到一张图片上，使用background-position属性单独显示其中一个。

​		优点：可以减少HTTP请求书，加快网页显示速度。缺点：不方便测量、后期改动麻烦。

```html
<!-- 这张图片没有撑满盒子，backgroud-position属性可以让图片以居中形式撑满盒子 -->
    <div style=" width: 600px;height: 400px;border: 1px solid #000;margin-bottom: 10px;
    background-image: url(images/beijing/1.jpg);background-repeat:no-repeat;
    background-size:cover;background-position: center center;"></div>
```

```html
<!-- 这张图片留有下方空隙，backgroud-position属性可以让图片以居中形式撑满盒子 -->
    <div style=" width: 600px;height: 400px;border: 1px solid #000;margin-bottom: 10px;
    background-image: url(images/beijing/1.jpg);background-repeat:no-repeat;
    background-size:contain;background-position: center center;"></div>
```

```html
<!-- CSS精灵技术&CSS雪碧图抠图技术的应用 -->
    <ul style="list-style: none;">
        <li style="position:relative;padding-left: 15px;">
            <i style="width: 14px;height: 8px;position: absolute;top: 10px;left: 0;
            background-image: url("http://www.heisming.com/assets/images/sprites.png");
            background-position: 0 -12px;">
            </i>1+1=2
        </li>
        <li style="position:relative;padding-left: 15px;">
            <i style="width: 14px;height: 8px;position: absolute;top: 10px;left: 0;
            background-image: url("http://www.heisming.com/assets/images/sprites.png");
            background-position: 0 -12px;">
            </i>2+2=4
        </li>
    </ul>
```

#### 3.2.8、background综合属性(极其常见)（性能优化）

##### 	background:white url(images/archer.png) no-repeat center center;

​	一些常用的背景相关的小属性，可以合写到一条里

```html
<div style="
width:300px;
height:300px;
background-image:
url('http://climg.mukewang.com/582c3b780001a95103000090.jpg'),
url('http://climg.mukewang.com/582c3b6d0001197603000090.jpg'),
url('http://climg.mukewang.com/582c3b61000122dd03000090.jpg');
background-size: 300px 90px,300px 90px,300px 90px;
background-repeat:no-repeat,no-repeat,no-repeat;
background-position:top center,center center,bottom center ;"></div>
```

#### 3.2.9、 线型渐变背景（常用）

##### 	 background-image属性

​		可以用linear-gradient()形式创建线型渐变背景。

```css
background-image: linear-gradient (to right,blue,red); 
```

​		渐变方向（可以写成度数：45deg），开始颜色,（yellow 20%表示颜色会出现在20%的地方），结束颜色

​		

##### 浏览器私有前缀，增加兼容性(背诵)

​	不同的浏览器有不同的私有前缀，用来对实验性质的CSS属性加以标识

###### 	Chorme => -webkit-

######     Firefox => -moz- 

###### 	IE、Edge => -ms-

###### 	欧朋 => -o-

```html
    <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: linear-gradient(to right,rgba(83, 240, 63, 0.473),rgb(29, 29, 138));"></div>

    <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: -webkit-linear-gradient(to right,red,blue);"></div>

    <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: -moz-linear-gradient(45deg,red,blue);"></div>

    <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: -ms-linear-gradient(to bottom,red,orange,green,blue,purple);"></div>

    <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: -o-linear-gradient(to right,red,orange 20%,black);"></div>
```

#####  **background: repeating-radial-gradient**(x,y)

​	 重复背景渐变创建一个从原点辐射的重复渐变组成的<image>

```html
<div style="width: 400px;height: 400px;border: 1px solid red;
    background: repeating-linear-gradient(red 0%,yellow 20%);"></div>
```

#### 3.2.10、径向渐变背景(极少用)

##### 	background-image:radial-gradient(50% 50%,red,blue)

​		50%，50% => 圆心坐标

```html
 <div style="width: 200px;height: 200px;border: 1px solid #000;margin-top: 10px;
    background-image: radial-gradient(50% 50%,rgba(83, 240, 63, 0.473),orange);"></div>
```

## 4、2D与3D转换-CSS3 

### 4.1、旋转变形rotate

​		transform:rotate(45deg);  若角度为正，则顺时针，反之逆时针

​		transform-origin：x   y;  可以设置自己的自定义变换原点,可以写百分比%

```html
<img src="images/goblin.png" alt="" style="transform: rotate(60deg);   border: 1px solid #000;">
```

```html
<!-- 右上角为中心点进行旋转,打开浏览器F12，调整旋转角度即可明白 -->
<img src="images/goblin.png" alt="" style="transform-origin:100% 0;   transform: rotate(-30deg);    border: 1px solid #000;">
```

### 4.2、缩放变形scale

​		transform:scale(3);缩放倍数：当数值小于1，表示缩小，大于1表示放大，1表示不变

```html
<img src="images/goblin.png" alt="" style="transform: scale(0.5);border: 1px solid #000;">
```

### 4.3、斜切变形skew

​		transform:skew(xdeg,ydex); x默认逆时针,当只有一个参数时，第二个为0

```html
<img src="images/goblin.png" alt="" style="transform: skew(45deg);border: 1px solid #000;">
```

### 4.4、位移变形translate（IE9）

​		transform:translate(100px,200px);向右，向下；

​		和相对定位一样，会**老家留坑**，形影分离，任意元素可用

```html
<div style="width: 100px;height: 100px;background-color:orange"></div>
<div style="transform:translate(100px,0);margin:50px 0;width: 100px;height: 100px;background-color:yellow"></div>
<div style="width: 100px;height: 100px;background-color:orange"></div>
```

### 4.5、3D旋转rotateX,rotetaY

​		transform:rotateX(),rotetaY(),即可实现绕横纵轴旋转;《rotetaZ()可以实现平面旋转》

![image-20210904135727994](D:\大前端学习\MarkDown\0基础\img\3D旋转.png)

​			perspective属性用来定义透视强度，人眼到舞台的距离，px

​		空间移动(属性写在3D旋转之后),让依赖的原轴向各个方向拉伸

​			当元素进行3D旋转后，即可以继续添加translateX(px)、translateY(px)、translateZ(px);属性让元素在空间进行移动

​			X:左右 Y上下 Z前后（里外）

![image-20210902095906596](D:\大前端学习\MarkDown\0基础\img\3D.png)

```html
<!-- 3D旋转 -->
<div class="perspectives">
    <p></p>
</div>
```

```css
/* 3D旋转 */
.perspectives{
    margin-top: 20px;
    width: 202px;
    height: 202px;
    border: 1px solid #000;
    /* 舞台，必须设置此属性，否则旋转失效 */
    perspective: 300px;
}
.perspectives p{
    margin: 0;
    padding: 0;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    background-color: orange ;
    /* 演员，可以同时旋转 */
    transform: rotateX(60deg) rotateY(60deg);
}
```

```html
<!-- 调整XYZ属性查看移动方向-->
<div class="perspectivess">
    <p class="translate"></p>
</div>
```

```css
/* 空间移动：调整XYZ属性查看移动方向*/
perspectivess{
    margin-top: 20px;
    width: 202px;
    height: 202px;
    border: 1px solid #000;
    /* 舞台，必须设置此属性，否则旋转失效 */
    perspective: 300px;
    margin-bottom: 300px;
}
.perspectivess p.translate{
    margin: 0;
    padding: 0;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    background-color: orange ;
    /* 演员，设置完3D旋转后设置 */
    transform: rotateX(10deg) translateX(60px) translateY(60px) translateZ(60px);
}
```

#### 制作一个正方体

​	正方体的每个面都是从舞台经过不同的3D旋转、空间移动到自己的位置的

```html
<section>
    <!-- 又是舞台，又是演员 -->
    <div class="squre">
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
        <p>F</p>
    </div>
</section>
```

```css
/* 正方体移动 */
section{
    width: 200px;
    height: 200px;
    margin: 100px auto;
    /* 设置透视强度，否则就不是正方体了 */
    perspective: 10000px;
}
section:hover .squre{
    transform: rotateX(360deg) rotateY(360deg);
}
/* 制作一个正方体 */
.squre{
    width: 200px;
    height: 200px;
    /* 透视强度大越正 */
    perspective: 10000px;
    position: relative;
    /* 设置变形类型，保留它内部的3D效果 */
    /* 这个盒子又是舞台，又是演员，这个BOX整体带着里面
    transform-style: preserve-3d;
    transition: transform 12s ease-in-out 0.15s;
}
.squre p{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    /* 添加内部文字样式 */
    text-align: center;
    line-height: 200px;
    font-size: 100px;
    color: white;
}
.squre p:nth-child(1){
    background-color: rgba(233, 57, 66, 0.685);
    /* 前面 */
    transform: translateZ(100px);
}
.squre p:nth-child(2){
    background-color: rgba(233, 122, 57, 0.685);
    /* 顶面 */
    transform: rotateX(90deg) translateZ(100px);
}
.squre p:nth-child(3){
    background-color: rgba(233, 221, 57, 0.685);
    /* 底面 */
    transform: rotateX(-90deg) translateZ(100px);
}
.squre p:nth-child(4){
    background-color: rgba(57, 233, 66, 0.685);
    /* 左面 */
    transform: rotateY(-90deg)  translateZ(100px);
}
.squre p:nth-child(5){
    background-color: rgba(57, 113, 233, 0.685);
    /* 右面 */
    transform: rotateY(-90deg) translateZ(-100px);
}
.squre p:nth-child(6){
    background-color: rgba(57, 207, 233, 0.685);
    /* 后面 */
    transform: translateZ(-100px);
}
```



#### 最后多几句

实际开发中，接触最多的**2D、3D转换就是平移，旋转，缩放。**

需要了解正方向问题:X轴方向，顺时针旋转为正，Y轴方向，逆时针旋转为正，Z轴方向，顺时针旋转为正。







## 5、过渡与动画-CSS3

### 	5.1、过渡（IE10）

​		transition过渡属性是CSS3特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画”

​		移动端兼容良好。曾经网页上的动画特效基本都是由“JS定时器”实现的，现在逐步改为使用CSS3过渡

​		优点：动画细腻，内存开销小

#### 	四要素：transition: width 1s linear 0s;

​		第一个参数：什么属性要过渡；特例：如果要所有属性都参与过渡，写all滥用导致效率问题。

​		第二个参数 ：动画时长；（不能省略s）

​		第三个参数：变化速度曲线；
  		  缓动参数：ease：开始和结束都很慢，中间快
​        		     linear:线型速度一样
​          		   ease-in:开始慢，越来越快
​          		   ease-out:开始快，最后慢
​          		   ease-in-out:开始和结束都慢（平缓），中间快
​          		   贝赛尔曲线：https://cubic-bezier.com可生成，可自定义缓动参数  cubic-bezier(0,1.01,1,-0.01)

​		第四个参数：延迟时间。（不能省略s）    

##### 		哪些属性可以参与过渡？

​			1、所有数值类型的属性，都可以参与过渡，比如width、height、left、top、border-radius、opacity;

​			2、背景颜色和文字颜色都可以被过渡

​			3、所有变形（2D和3D）都能被过渡

##### 		过渡的四个小属性

​			transition-property：哪些属性要过渡

​			transition-duration：动画时间

​			transition-timing-function：动画变化曲线（缓动效果）

​			transition-delay：延迟时间

##### 小demo

###### 		宽度增加过渡

```html
<!-- 宽度增加过渡  -->
<div class="transition"></div>
```

```css
/* 宽度增加过渡 */
.transition {
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: width 2s linear 0.5s;
    margin-bottom: 10px;
}
.transition:hover {
    width: 666px;          
}
```

###### 		右位移过渡

```html
<!-- 右位移过渡 -->
<div class="transition1">
    <p></p>
</div>  
```

```css
/* 右位移过渡 */
.transition1 p{
    position: relative;
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: left 3s linear 1.5s;
    left:0;
    margin-bottom: 10px;
}
.transition1:hover p{
    left: 1000px;
}
```

###### 		背景颜色过渡

```html
<!-- 背景颜色过渡 -->
<div class="transition2"></div>
```

```css
/* 背景颜色过渡 */
.transition2 {
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: background-color 2s linear 0.5s;
    margin-bottom: 10px;
}
.transition2:hover {
    background-color: rgb(134, 240, 124);        
}
```

###### 		圆角变形过渡

```html
<!-- 圆角变形过渡 -->
<div class="transition3"></div>
```

```css
/* 圆角变形过渡 */
.transition3 {
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: border-radius 2s linear 0.5s;
    margin-bottom: 10px;
    border-radius: 0;
}
.transition3:hover {
    border-radius: 50%;
}
```

###### 		2D变形过渡

```html
<!-- 2D变形过渡 -->
<div class="transition4"></div>
```

```css
/* 2D变形过渡 */
.transition4 {
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: transform 3s linear 0.5s;
    margin-bottom: 10px;
    transform: 0;
}
.transition4:hover {
    /* 以左上角点开始旋转360度 */
    transform: scale(1.5) rotate(360deg);
}
```

###### 		3D变形过渡

```html
<!-- 3D变形过渡 -->
<div class="transition5">
    <p></p>
</div>
```

```css
/* 3D变形过渡 */
.transition5 {
    perspective: 300px;
    width: 200px;
    height: 200px;
    border: 1px solid #000;           
    margin-bottom: 10px;
}
.transition5 p{
    width: 200px;
    height: 200px;
    background-color: rgba(75, 141, 241, 0.349);
    transition: transform 3s linear 0.5s;
}
.transition5:hover p{
    /* 以左上角点开始旋转360度 */
    transform: rotateX(90deg) translateZ(100px);
}
```

###### 		all单词过渡

```html
<!-- all单词过渡 -->
<div class="all">
    <p></p>
</div>
```

```css
/* all单词过渡 */
.all{
    width: 200px;
    height: 100px;
    background-color: rgba(75, 141, 241, 0.349);
    border-radius: 0;
    transition:all 3s linear 0.5s;
}
.all:hover{
    background-color: rgba(241, 183, 75, 0.349);
    border-radius: 50%;
}
```

###### 		过渡的缓动效果

```html
<!-- 过渡的缓动效果 -->
<div class="ease">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>
```

```css
/* 过渡的缓动效果 */
.ease{
    border: 1px solid #000;
}
.ease p{
    width: 60px;
    height: 60px;
    background-color: orange;
    margin-bottom: 10px;
    position: relative;
    left: 0;
    transition: left 5s linear 0s;
}
.ease p:nth-child(2){
    transition-timing-function: ease;
}
.ease p:nth-child(3){
    transition-timing-function: ease-in;
}
.ease p:nth-child(4){
    transition-timing-function: ease-out;
}
.ease p:nth-child(5){
    transition-timing-function: ease-in-out;
}
.ease p:nth-child(6){
    transition-timing-function: cubic-bezier(0,1,1,-0.01);
}
.ease:hover p{
    left: 1000px;
}
```



##### 实战案例

###### 		显示隐藏的文字

```html
<!-- 过渡效果实战案例1 ：显示隐藏的文字 -->
<div class="transition_example1">
    <ul>
        <li>
            <img src="images/beijing/1.jpg" alt="">
            <div class="info">北京的鸟巢</div>
        </li>
        <li>
            <img src="images/beijing/2.jpg" alt="">
            <div class="info">北京的长桥</div>
        </li>
        <li>
            <img src="images/beijing/3.jpg" alt="">
            <div class="info">北京的圆顶</div>
        </li>
    </ul>
</div>
```

```css
/* 过渡效果实战案例1 ：显示隐藏的文字 */
.transition_example1{
    width: 1200px;
    height: 400px;
    overflow: hidden;
    margin: 40px auto;
}
.transition_example1 ul{
    list-style: none;
}
.transition_example1 ul li{
    float: left;
    width: 380px;
    height: 210px;
    margin-right: 20px;
    position: relative;
}
.transition_example1 ul li img{
    width: 380px;
    height: 210px;
}
.transition_example1 ul li .info{
    position: absolute;
    width: 370px;
    height: 30px;
    line-height: 30px;
    background-color: rgba(32, 25, 25, 0.781);
    color: white;
    padding-left: 10px;
    bottom: 0;
    /* 透明度设置为0 */
    opacity: 0;
    transition: opacity 1s linear 0.2s;
}
.transition_example1 ul li:hover .info {
    opacity: 1;
}
```

###### 		2D背景移动

```html
<!-- 过渡动画实战案例2：2D背景移动-->
<div class="transition_example2">
    <ul>
        <li>
            <img src="images/icon1.svg" alt="">
        </li>
        <li>
            <img src="images/icon2.svg" alt="">
        </li>
        <li>
            <img src="images/icon3.svg" alt="">
        </li>
        <li>
            <img src="images/icon4.svg" alt="">
        </li>
    </ul>
</div>
```

```css
/* 过渡动画实战案例2：2D背景移动 */
.transition_example2{
    width: 508px;
    height: 107px;
    border: 1px solid #000;
    margin: 40px auto;
}
.transition_example2 ul{
    list-style: none;
}
.transition_example2 ul li{
    float: left;
    width: 107px;
    height: 107px;
    margin-right: 20px;
    position: relative;
    
}     
.transition_example2 li::before{
    content: '';
    display: block;
    width: 107px;
    height: 107px;
    transform: rotate(0);
    transition: transform 1s linear 0.4s;
}
/* 当每个li被触碰的时候，里面的背景进行旋转 */
.transition_example2 ul li:hover::before{
    transform: rotate(360deg);
}
.transition_example2 li:nth-child(1)::before{
    background-image: url(images/a_1.png);
}
.transition_example2 li:nth-child(2)::before{
    background-image: url(images/a_2.png);
}
.transition_example2 li:nth-child(3)::before{
    background-image: url(images/a_3.png);
}
.transition_example2 li:nth-child(4)::before{
    background-image: url(images/a_4.png);
}
.transition_example2 ul li img{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    left: 50%;
    margin-left: -30px;
    transform: scale(1);
    transition: transform 0.5s linear 0.2s;
}
/* 中心图片放大1.1倍 */
.transition_example2 ul li:hover img{
    transform: scale(1.1);
}
```

###### 		3D旋转

```html
<!-- 过渡效果实战案例3：3D旋转 -->
<div class="transition_example3">
    <img class="cat" src="images/cat.jpg" alt="">
    <img class="dog" src="images/dog.jpg" alt="">
</div>
```

```css
/* 过渡效果实战案例3：3D旋转*/
.transition_example3{
   width: 202px;
   height: 202px;
   margin: 40px auto;
   perspective: 500px;
   position: relative;
}
.transition_example3 img{
    width: 200px;
    height: 200px;
   border: 1px solid #000;
   border-radius: 50%;
}
.transition_example3 img.dog{
   position: absolute;
   left: 0;
   top: 0;           
   /* 旋转原点的设置 */
   transform-origin: 100% 100%  ;
   transform: translateX(0);
   transition: transform 1s linear 0.1s;
}
.transition_example3:hover img.dog{
    transform: rotateY(-180deg);
}
```

### 5.2、动画的自定义和调用-CSS3

#### @keyframes

​	来定义动画，keyframes表示“关键帧”，项目上线前，要补上@-webkit-等这样的私有前缀
@keyframes AnimationName {
   起始状态 from {transform:rotate(0)}
   结束状态 to {transform:rotate(360deg)}
}
定义完动画之后，用animation属性调用动画
​    animation: AnimationName 1s linear 0s 3;
​    动画名字、总时长、缓动效果、延时时间、执行次数（无限:infinite）
如果想让动画的第2、4、6...（偶次数）自动逆向执行，那么要加上alternate参数即可
​    animation: AnimationName 1s linear 0s infinite 《alternate》;
如果想让动画停止在最后结束状态，那么要加上forwards
​    animation: AnimationName 1s linear 0s 《forwards》;

#### 七个小属性        

​    animation-name: 动画名字;
​    animation-duration: 总时长;
​    animation-timing-function:缓动效果;
​    animation-delay:延时时间;
​    animation-iteration-count:执行次数;
​    animation-direction:执行方向;
​    animation-fill-mode:执行结束状态;

#### demo

##### 	旋转360度

```html
<!-- 旋转360度 -->
<div class="keyframes1"></div>
```

```css
/* 旋转360度 */
@keyframes toChange{
   from{
       transform: rotate(0);
   }
   to{
       transform: rotate(360deg);
   }
}
.keyframes1{
   width: 200px;
   height: 200px;
   background-color: rgb(103, 191, 212);
   animation: toChange 1s linear 0.1s 5;
   margin-bottom: 10px;
}
```

##### 	左右来回移动

```html
<!-- 左右来回移动 -->
<div class="keyframes2"></div>
```

```css
/* 左右来回移动 */
@keyframes toRightToLeft{
   from{
       transform: translateX(0);
   }
   to{
       transform: translateX(1000px);
   }
}
.keyframes2{
   width: 200px;
   height: 200px;
   background-color: rgb(103, 191, 212);
   margin-bottom: 10px;
   animation: toRightToLeft 1s linear 0.1s infinite alternate;
}
```

##### 	由方变圆

```html
<!-- 由方变圆 -->
<div class="keyframes3"></div>
```

```css
/* 由方变圆 */
@keyframes toRadius{
   from{
       border-radius: 0;
   }
   to{
       border-radius: 50%;
   }
}
.keyframes3{
   width: 200px;
   height: 200px;
   margin-bottom: 10px;
   background-color: rgb(103, 191, 212);
   animation: toRadius 1s linear 0.1s forwards;
}
```

#### 多关键帧动画

@keyframes AnimationName {
      起始状态 0%  {background-color:red}
      中间状态 20% {background-color:orange}
      中间状态 40% {background-color:yellow}
      中间状态 60% {background-color:green}
      中间状态 80% {background-color:blue}
      结束状态 100%{background-color:purple}
   }

##### DEMO

###### 	彩色背景颜色交替变化

```HTML
<!-- 多关键帧动画：彩色背景颜色交替变化 -->
<div class="keyframes4"></div>
```

```CSS
/* 多关键帧动画：彩色背景颜色交替变化 */
@keyframes changeColor {
   0%  {background-color:red}
   20% {background-color:orange}
   40% {background-color:yellow}
   60% {background-color:green}
   80% {background-color:blue}
   100%{background-color:purple}
}
.keyframes4{
   width: 200px;
   height: 200px;
   margin-bottom: 10px;
   background-color: rgb(103, 191, 212);
   border-radius: 50%;
   animation: changeColor 10s linear 0.1s infinite  alternate;
}
```

###### 	自定义效果动画实战

```html
<!-- 自定义动画效果实战案例 -->
<img class="dengpao" src="images/dengpao.png" alt="">
<img class="guang" src="images/guang.png" alt="">
<img class="rocket" src="images/huojian.png" alt="">
<div class="line1"></div>
<div class="line2"></div>
<div class="line3"></div>
<div class="line4"></div>
```

```css
/* 自定义动画效果实战案例 */
 @keyframes flashing{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
 }
@keyframes vibration {
    from{
       transform: translateX(-20px) translateY(-20px);
    }
    to{
       transform: translateX(20px) translateY(20px);
    }
}
@keyframes vibration2 {
    0%{
       transform: rotate(45deg) translateY(-200px);
       opacity: 0;
    }
    50%{
       opacity: 1;
    }
    100%{
       transform: rotate(45deg) translateY(200px);
       opacity: 0;
    }
}
.dengpao{
   position: absolute;
   top: 300px;
   left: 300px;
}
.guang{
   position: absolute;
   top: 240px;
   left: 224px;
   animation: flashing 1s linear 0s infinite alternate;
}
.rocket{
   position: absolute;
   top: 240px;
   left: 624px;
   animation: vibration 1s ease-in 0s infinite alternate;
}
.line1{
    width: 2px;
    height: 111px;
    background-color: blue;
    position: absolute;
    top: 400px;
    left: 800px;
    transform: rotate(45deg);            
    animation: vibration2 1.2s ease-in 0s infinite ;
}
.line2{
    width: 2px;
    height: 111px;
    background-color: blue;
    position: absolute;
    top: 420px;
    left: 800px;
    transform: rotate(45deg);            
    animation: vibration2 1s ease-in 0s infinite ;
}
.line3{
    width: 2px;
    height: 111px;
    background-color: blue;
    position: absolute;
    top: 90px;
    left: 800px;
    transform: rotate(45deg);            
    animation: vibration2 1.4s ease-in 0s infinite ;
}
.line4{
    width: 2px;
    height: 111px;
    background-color: blue;
    position: absolute;
    top: 70px;
    left: 800px;
    transform: rotate(45deg);            
    animation: vibration2 1.6s ease-in 0s infinite ;
    animation: name duration timing-function delay iteration-count direction fill-mode;
}
```



##### Animate.css动画库(IE10)

```html
<head>
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css"/>           
</head>
<div class="animated bounceInLeft"style="width: 100px;height: 100px;background-color: red;margin: 0 auto;"></div>
```



### 5.3、注意事项

​	1、过渡和动画的时间要写单位

​	2、过渡和动画，最好设置初始值

​	3、过渡和动画，transform属性的覆盖问题，按照后来者居上原则

​	4、过渡与动画，transform属性值书写顺序问题（先平移还是先选择的问题，顺序不能错） 

