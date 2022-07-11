# 移动web基础

## 1、移动Web开发入门

### 基本概念

#### 分辨率

移动设备是由一个一个RGB颜色像素点组成，越多越好 1980*960



物理像素(physical pixel)也叫设备像素(dp：device pixel) ★★★

CSS像素也称：为逻辑像素(logical pixel)、**设备独立像素**(dip: device independent pixel)★★★

方便实际开发中使用

css像素会自动换算成对应的物理像素



#### 设备像素比(dpr：device pixel ratio)★★★

dpr  =  (在一个方向上)设备像素 / CSS像素(没有缩放时)

当前手机屏幕分辨率是1334*750，css像素屏幕宽高是375 * 667，计算device pixel ratio（设备像素比）是多少？

答案: 设备像素比  =  物理像素（1334） /  **设备独立像素**（667）= 2

##### 标清屏(dpr = 1)和高清屏(dpr > 1)

dpr = 2表示1个CSS像素用2*2个设备像素来绘制★★★★★



#### 缩放

改变的是CSS像素的大小

缩放-放大：1个CSS像素 = 1个物理像素

缩放-缩小：2*2个CSS像素 = 1个物理像素



#### PPI

每英寸的物理像素点

ppi：pixels per inch

dpi：dots per inch

计算方式：PPi = dp / di = sqrt(wp * wp + hp * hp) / di;

dp为屏幕对角线的分辨率
wp为屏幕的横向分辨率
hp为屏幕的纵向分辨率
di为屏幕对角线的长度(单位为英寸)



### 视口-viewport

![](D:\front-end\study\MarkDown\0基础\img\视口.png)

#### 视口设置位置

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 视口设置位置：
        width=device-width布局视口的宽度等于视觉视口，
        initial-scale=1.0初始缩放比例设置为1 ，各有兼容性问题，都写
        user-scalable= yes 限制用户缩放
        maximun-scale= 1,minimum-scale = 1 最大最小也是1，相当于限制缩放范围
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>移动Web开发入门</title>
</head>
```

#### 获取视口宽度(布局视口)

```js
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.getBoundingClientRect().width);
```



### 真机查看

1、通过本地服务器打开开发页面
2、通过ipconfig查询IP地址，并替换页面地址中的相应部分
3、关闭电脑防火墙，在移动设备浏览器中输入相应网址



### 移动开发中常用的单位

##### 1、px

 绝对单位，当需要设置固定宽高时可用

##### 2、%

百分比相对单位，可以用来设置宽度，流体布局会用

##### 3、em

​	相对单位，设置字体大小时，2em = 父元素字体的大小 *2 
   	 设置其他，比如宽、高时，1em = 自身字体的大小
   	 一般用来控制行首的缩进，一般不用来布局

##### 4、★★★rem(root element html)

​	相对单位 可以用来布局的
  	  1rem = 根元素(html元素)的字体大小

##### 5、视口单位：vm/xh/vmax/vmin

​	相对单位 可以用来布局的
​	   1vm = 视口宽度的1%
​	   1vh = 视口高度的1%
​	   vmin:当前vw和vh中较小的一个值
​	   vmax:当前vw和vh中较大的一个值

```html
<div class="first" style="font-size: 12px;">我是
    <div class="second" style="font-size: 3em;background-color:greenyellow;width: 20vw;">看我
        <div class="third" style="font-size: 1rem;background-color:red">奥术大师</div>
    </div>
</div>
```



### 一些问题

1、物理像素、CSS像素、设备像素比是什么？
2、移动开发中常用单位有哪些?
3、什么是视口？怎么获取视口的数据？





## 2、流体布局





## 3、Flex布局

### 认识flex布局

#### 1.什么是 Flex 布局

Flex 是 Flexible Box 的缩写，意为“弹性的盒子”，所以 Flex 布局一般也叫作“Flex 弹性布局”
任何一个 HTML 元素都可以指定为 Flex 布局

```css
display: flex | inline-flex;
```

#### 2.什么是 Flex 容器（flex container）

采用 Flex 布局的元素，称为 Flex 容器

#### 3.什么是 Flex 项目（flex item）

Flex 容器的所有 子元素(孙子元素不是) 自动成为容器成员，称为 Flex 项目

####  4.什么是主轴，什么是交叉轴

默认情况下，水平方向的是主轴，垂直于主轴方向的是交叉轴
Flex 项目默认沿主轴起始排列

![](D:\front-end\study\MarkDown\0基础\mweb\flex.png)



### base.css

```css
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    padding: 20px 0;
    background-color: #e2e2e2;
  }
  img {
    width: 100%;
    margin-bottom: 20px;
    vertical-align: top;
  }
  h2 {
    padding: 5px 10px;
    border-bottom: 2px solid #797979;
    margin-bottom: 10px;
    color: #797979;
  }
  p {
    padding: 10px;
    background: #797979;
    border-radius: 5px;
    margin: 0 10px 10px;
    color: white;
    font-size: 20px;
  }
  
  .flex-container {
    background-color: white;
    margin: 0 0 20px;
  }
  .container-tall {
    min-height: 1000px;
  }
  .flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    background-color: #ffd200;
    margin: 6px;
    color: white;
    font-size: 100px;
    text-align: center;
  }
  .flex-item .desc {
    display: block;
    position: relative;
    top: -140px;
    font-size: 22px;
  }
  .item-tall {
    height: 400px;
    line-height: 400px;
  }  
```



### Flex容器的属性

```html
<link rel="stylesheet" href="./css/basic.css">
```

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex容器的属性</title>
    <link rel="stylesheet" href="./css/basic.css">
    <style>
        .flex-container{
            display: flex;
        }


        /* 1.flex-direction 属性 */
        .flex-1-1{
            /* row（默认值）：主轴为水平方向，起点在左端 */
            flex-direction: row;
        }
        .flex-1-2{
            /* row-reverse：主轴为水平方向，起点在右端 */
            flex-direction: row-reverse;
        }
        .flex-1-3{
            /* column：主轴为垂直方向，起点在上沿 */
            flex-direction: column;
        }
        .flex-1-4{
            /* column-reverse：主轴为垂直方向，起点在下沿 */
            flex-direction: column-reverse;
        }
        

        /* 2.flex-wrap 属性 */
        .flex-2-1{
            /* nowrap（默认）：不换行 */
            flex-wrap: nowrap;
        }
        .flex-2-2{
            /* wrap：换行，第一行在上方 */
            flex-wrap: wrap;
        }
        .flex-2-3{
            /* wrap-reverse：换行，第一行在下方 */
            flex-wrap: wrap-reverse;
        }
        

        /* 3.flex-flow 属性=(flex-direction + flex-wrap) */
        .flex-3{
            flex-flow: row-reverse nowrap;
        }

        

        /* 4.justify-content 属性 */
        .flex-4-1{
            /* flex-start（默认值）：左对齐（flex-direction: row） */
            justify-content :flex-start;
        }
        .flex-4-2{
            /* flex-end：右对齐（flex-direction: row） */
            justify-content :flex-end;
        }
        .flex-4-3{
            /* center： 居中（水平居中） */
            justify-content :center;
        }
        .flex-4-4{
            /* space-between：Flex 项目之间的间隔都相等 */
            justify-content :space-between;
        }
        .flex-4-5{
            /* space-around：每个 Flex 项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 */
            justify-content :space-around;
        }
        .flex-4-6{
            /* space-evenly：每个 Flex 项目之间间隔以及头尾间隔都相等。所以，项目之间的间隔比项目与边框的间隔相等 */
            justify-content :space-evenly;
        }


        /* 5.align-items 属性 */
        .flex-5-1{
            /* stretch（默认值）：如果 Flex 项目未设置交叉轴方向的大小或设为
        auto，将占满整个容器交叉轴方向的大小 */
            align-items: stretch;
        }
        .flex-5-1 .flex-item{
            height: auto;
        }
        .flex-5-2{
            /* flex-start：交叉轴的起点对齐 */
            align-items: flex-start;
        }
        .flex-5-3{
            /* flex-end：交叉轴的终点对齐 */
            align-items: flex-end;
        }
        .flex-5-4{
            /* center：交叉轴的中点对齐（垂直居中） */
            align-items: center;
        }
        .flex-5-5{
            /* baseline: Flex 项目的第一行文字的基线对齐 */
            align-items: baseline;
        }
        .flex-5-5 .flex-item{
            text-decoration: underline;
            font-size: 160px;
        }
        .flex-5-5 .item-tall{
            font-size: 80px;
        }


        /* 6.align-content 属性 */
        .flex-6 {
            flex-wrap: wrap;
        }
        .flex-6-1 {
            /* stretch（默认值）：主轴线平分 Flex 容器交叉轴方向上的空间（空白出的三根） */
            align-content: stretch;
        }
        .flex-6-1 .flex-item {
            /* height: auto; */
        }
        .flex-6-2 {
            /* flex-start：与交叉轴的起点对齐 */
            align-content: flex-start;
        }
        .flex-6-3 {
            /* flex-end：与交叉轴的终点对齐 */
            align-content: flex-end;
        }
        .flex-6-4 {
            /* center：与交叉轴的中点对齐 */
            align-content: center;
        }
        .flex-6-5 {
            /* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布（空白出中的两条） */
            align-content: space-between;
        }
        .flex-6-6 {
            /* space-around：每根轴线两侧的间隔都相等，所以轴线之间的间隔比轴线与边框的间隔大一倍 */
            align-content: space-around;
        }
    </style>

</head>
<img src="./flex.png" alt="">
    <!-- 1.flex-direction 属性 -->
    <div>
    <h2>1.flex-direction 属性</h2>

    <p>flex-direction:row（默认值）：主轴为水平方向，起点在左端</p>
    <div class="flex-container flex-1-1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <p>flex-direction:row-reverse：主轴为水平方向，起点在右端</p>
    <div class="flex-container flex-1-2">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <p>flex-direction:column：主轴为垂直方向，起点在上沿</p>
    <div class="flex-container flex-1-3">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>

    <p>flex-direction:column-reverse：主轴为垂直方向，起点在下沿</p>
    <div class="flex-container flex-1-4">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
    </div>
    </div>
    <!-- 2.flex-wrap 属性 -->
    <div>
      <h2>2.flex-wrap 属性</h2>

      <p>flex-wrap:nowrap（默认）：不换行</p>
      <div class="flex-container flex-2-1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        <div class="flex-item">7</div>
      </div>

      <p>flex-wrap:wrap：换行，第一行在上方</p>
      <div class="flex-container flex-2-2">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        <div class="flex-item">7</div>
      </div>

      <p>flex-wrap:wrap-reverse：换行，第一行在下方</p>
      <div class="flex-container flex-2-3">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        <div class="flex-item">7</div>
      </div>
    </div> 

     <!-- 3.flex-flow 属性 -->
     <div>
      <h2>3.flex-flow 属性</h2>
      <div class="flex-container flex-3">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
        <div class="flex-item">7</div>
      </div>
    </div> 

     <!-- 4.justify-content 属性 -->
    <div>
      <h2>4.justify-content 属性</h2>

      <p>justify-content:flex-start（默认值）：左对齐（flex-direction: row）</p>
      <div class="flex-container flex-4-1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>

      <p>justify-content:flex-end：右对齐（flex-direction: row）</p>
      <div class="flex-container flex-4-2">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>

      <p>justify-content:center： 居中（水平居中）</p>
      <div class="flex-container flex-4-3">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>

      <p>justify-content:space-between：Flex 项目之间的间隔都相等</p>
      <div class="flex-container flex-4-4">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>

      <p>
        justify-content:space-around：每个 Flex
        项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
      </p>
      <div class="flex-container flex-4-5">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>
      <p>
        justify-content:space-evenly：每个 Flex
        项目之间间隔以及头尾间隔都相等。所以，项目之间的间隔比项目与边框的间隔相等
      </p>
      <div class="flex-container flex-4-6">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
      </div>
    </div>

     <!-- 5.align-items 属性 -->
    <div>
      <h2>5.align-items 属性</h2>

      <p>
        align-items:stretch（默认值）：如果 Flex 项目未设置交叉轴方向的大小或设为
        auto，将占满整个容器交叉轴方向的大小
      </p>
      <div class="flex-container flex-5-1">
        <div class="flex-item">1</div>
        <div class="flex-item item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item item-tall">4</div>
      </div>

      <p>align-items:flex-start：交叉轴的起点对齐</p>
      <div class="flex-container flex-5-2">
        <div class="flex-item">1</div>
        <div class="flex-item item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item item-tall">4</div>
      </div>

      <p>align-items:flex-end：交叉轴的终点对齐</p>
      <div class="flex-container flex-5-3">
        <div class="flex-item">1</div>
        <div class="flex-item item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item item-tall">4</div>
      </div>

      <p>align-items:center：交叉轴的中点对齐（垂直居中）</p>
      <div class="flex-container flex-5-4">
        <div class="flex-item">1</div>
        <div class="flex-item item-tall">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item item-tall">4</div>
      </div>

      <p>align-items:baseline: Flex 项目的第一行文字的基线对齐</p>
      <div class="flex-container flex-5-5">
        <div class="flex-item">S</div>
        <div class="flex-item item-tall">p</div>
        <div class="flex-item">q</div>
        <div class="flex-item item-tall">h</div>
      </div>

      <img src="./baseline.png" alt="baseline" />
    </div> 

     <!-- 6.align-content 属性 -->
    <img src="./jiaochazhou.png" alt="">
     <div>
        <h2>6.align-content 属性</h2>
  
        <p>align-content:stretch（默认值）：主轴线平分 Flex 容器交叉轴方向上的空间</p>
        <div class="flex-container container-tall flex-6 flex-6-1">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
  
        <p>align-content:flex-start：与交叉轴的起点对齐</p>
        <div class="flex-container container-tall flex-6 flex-6-2">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
  
        <p>align-content:flex-end：与交叉轴的终点对齐</p>
        <div class="flex-container container-tall flex-6 flex-6-3">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
  
        <p>align-content:center：与交叉轴的中点对齐</p>
        <div class="flex-container container-tall flex-6 flex-6-4">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
  
        <p>align-content:space-between：与交叉轴两端对齐，轴线之间的间隔平均分布</p>
        <div class="flex-container container-tall flex-6 flex-6-5">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
  
        <p>
         align-content:space-around：每根轴线两侧的间隔都相等，
          所以轴线之间的间隔比轴线与边框的间隔大一倍
        </p>
        <div class="flex-container container-tall flex-6 flex-6-6">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
          <div class="flex-item">4</div>
          <div class="flex-item">5</div>
          <div class="flex-item">6</div>
          <div class="flex-item">7</div>
          <div class="flex-item">8</div>
          <div class="flex-item">9</div>
        </div>
      </div>
<body>
    <!-- Flex容器的属性 -->
    <script>
        // 1.★flex-direction
        // 决定主轴的方向（即 Flex 项目的排列方向）
        // flex-direction: row（默认值） | row-reverse | column | column-reverse;

        // 2.★flex-wrap
        // 默认情况下，Flex 项目都排在一条轴线上
        // flex-wrap 属性定义了如果一条轴线排不下，如何换行
        // flex-wrap: nowrap（默认值） | wrap | wrap-reverse;

        // 3.★★flex-flow
        // flex-direction 和 flex-wrap 的简写形式
        // flex-flow: <flex-direction> || <flex-wrap>;
        // 默认值为 row nowrap

        // 4.★justify-content
        // 定义了 Flex 项目在主轴上的对齐方式
        // justify-content: flex-start（默认值） | flex-end | center | space-between | space-around;

        // 5.★align-items
        // 定义了 Flex 项目在交叉轴上如何对齐
        // align-items: stretch（默认值）  | flex-start | flex-end | center | baseline;

        // 6.align-content
        // 定义了存在多根主轴线时，Flex 项目在交叉轴上如何对齐
        // 如果项目只有一根主轴线，该属性不起作用
        // align-content: stretch（默认值） | flex-start | flex-end | center | space-between | space-around;
    </script>
</body>

</html>
```



### Flex项目的属性

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex项目的属性</title>
    <link rel="stylesheet" href="./css/basic.css">
    <style>
        .flex-container{
            display: flex;
        }


        /* 1.order 属性 */
        .flex-1 .order {
            order: -1;
        }
        

        /* 2.flex-grow 属性 */
        .flex-2-1 .flex-item {
            flex-grow: 1;
        }
        .flex-2-1 .grow-2 {
            flex-grow: 2;
        }
        .flex-2-2 .grow {
            flex-grow: 1;
        }


        /* 3.flex-shrink 属性 */
        .flex-3 .flex-item {
            flex-shrink: 1;
        }
        .flex-3 .shrink-0 {
            flex-shrink: 0;
        }


        /* 4.flex-basis 属性 */
        .flex-4 .flex-item {
            /* width: 400px; */
            flex-basis: 400px;
            /* height: 400px; */
        }
        .flex-4 {
            /* 主轴方向更改让flex-basis变成了高度增长 */
            flex-direction: column;
        }


        /* 5.flex 属性：flex-grow, flex-shrink 和 flex-basis*/
        /* 默认值：flex: 0 1 auto; */
        .flex-5-1 .flex-item {
            /* 指代：flex: 1 1 auto; */
            flex: auto;
        }
        .flex-5-2 .flex-item {
            /* 指代：flex: 0 0 auto; */
            flex: none;
        }


        /* 6.align-self 属性 */
        .flex-6 {
            height: 600px;
            /* align-items: stretch; */
            align-items: center;
        }
         
        .flex-6 .flex-item {
            /* height: auto; */
            align-self: baseline !important;
            text-decoration: underline;
        } 

        .flex-6 .auto {
            align-self: auto;
        }
        .flex-6 .start {
            align-self: flex-start;
        }
        .flex-6 .end {
            align-self: flex-end;
        }
        .flex-6 .center {
            align-self: center;
        }
        .flex-6 .stretch {
            height: auto;
            align-self: stretch;
        }
        .flex-6 .baseline {
            font-size: 36px;
            align-self: baseline;
        }
    </style>
</head>


<body>
    <img src="./flex.png" alt="flex" />

    <!-- 1.order 属性 -->
    <div>
      <h2>1.order 属性</h2>
      <div class="flex-container flex-1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item order">
          4
          <span class="desc">order: -1</span>
        </div>
      </div>
    </div> 

    <!-- 2.flex-grow 属性 -->
     <div>
      <h2>2.flex-grow 属性</h2>
      <p>
        如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）
      </p>
      <div class="flex-container flex-2-1">
        <div class="flex-item">
          1
          <span class="desc">flex-grow: 1</span>
        </div>
        <div class="flex-item">
          2
          <span class="desc">flex-grow: 1</span>
        </div>
        <div class="flex-item">
          3
          <span class="desc">flex-grow: 1</span>
        </div>
      </div>

      <p>
        如果一个项目的 flex-grow 属性为 2，其他项目都为
        1，则前者占据的剩余空间将比其他项多一倍
      </p>
      <div class="flex-container flex-2-1">
        <div class="flex-item">
          1
          <span class="desc">flex-grow: 1</span>
        </div>
        <div class="flex-item grow-2">
          2
          <span class="desc">flex-grow: 2</span>
        </div>
        <div class="flex-item">
          3
          <span class="desc">flex-grow: 1</span>
        </div>
      </div>

      <p>
        如果有的 Flex 项目有 flex-grow 属性，有的项目没有 flex-grow 属性，但有
        width 这样的属性，有 flex-grow 属性的项目将等分剩余空间
      </p>
      <div class="flex-container flex-2-2">
        <div class="flex-item grow">
          1
          <span class="desc">flex-grow: 1</span>
        </div>
        <div class="flex-item">
          2
          <span class="desc">width: 200</span>
        </div>
        <div class="flex-item grow">
          3
          <span class="desc">flex-grow: 1</span>
        </div>
      </div>
    </div> 

    <!-- 3.flex-shrink 属性 -->
     <div>
      <h2>3.flex-shrink 属性</h2>

      <p>
        如果所有项目的 flex-shrink 属性都不为 0，当空间不足时，都将等比例缩小
      </p>
      <div class="flex-container flex-3">
        <div class="flex-item">
          1
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          2
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          3
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          4
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          5
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          6
          <span class="desc">flex-shrink: 1</span>
        </div>
        <div class="flex-item">
          7
          <span class="desc">flex-shrink: 1</span>
        </div>
      </div>

      <p>
        如果一个项目的 flex-shrink 属性为 0，其他项目都为
        1，则空间不足时，前者不缩小
      </p>
      <div class="flex-container flex-3">
        <div class="flex-item shrink-0">
          1
          <span class="desc">flex-shrink: 0</span>
        </div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
      </div>
    </div> 

    <!-- 4.flex-basis 属性 -->
    <div>
      <h2>4.flex-basis 属性</h2>

      <div class="flex-container flex-4">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
      </div>
    </div> 

    <!-- 5.flex 属性 -->
     <div>
      <h2>5.flex 属性</h2>
      <p>flex: auto (1 1 auto)</p>
      <div class="flex-container flex-5-1">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
      </div>

      <p>flex: none (0 0 auto)</p>
      <div class="flex-container flex-5-2">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
      </div>
    </div> 

    <!-- 6.align-self 属性 -->
    <div>
        <h2>6.align-self 属性</h2>
        <div class="flex-container flex-6">
          <div class="flex-item auto">
            1
            <span class="desc">auto</span>
          </div>
          <div class="flex-item start">
            2
            <span class="desc">flex-start</span>
          </div>
          <div class="flex-item end">
            3
            <span class="desc">flex-end</span>
          </div>
          <div class="flex-item center">
            4
            <span class="desc">center</span>
          </div>
          <div class="flex-item stretch">
            5
            <span class="desc">stretch</span>
          </div>
          <div class="flex-item baseline">
            6
            <span class="desc">baseline</span>
          </div>
        </div>
  
        <img src="./baseline.png" alt="baseline" />
      </div>

    <script>
        // 1.order
        // 定义了 Flex 项目的排列顺序
        // 数值越小，排列越靠前，默认为 0
        // order: <integer>;  /* default 0 */
  
        // 2.flex-grow
        // 定义了 Flex 项目在主轴方向上的放大比例，默认为 0，即如果存在剩余空间，该项目也不放大
        // flex-grow: <number>; /* default 0 */
  
        // 3.flex-shrink
        // 定义了 Flex 项目在主轴方向上的缩小比例，默认为 1，即如果空间不足，该项目将缩小
        // flex-shrink: <number>; /* default 1 */
  
        // 4.flex-basis
        // 定义了在分配多余空间之前，Flex 项目占据的主轴大小（main size）
        // 浏览器根据这个属性，计算主轴是否有多余空间
        // 它的默认值为 auto，即项目的本来大小
        // flex-basis: <length>; | auto; /* default auto */
            
        // 5.flex
        // 是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto
        // flex: <flex-grow> || <flex-shrink> || <flex-basis>
        // 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
  
        // 6.align-self
        // 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性
        // align-self: auto（默认值） | flex-start | flex-end | center | stretch | baseline;
      </script>
</body>
</html>
```



##### 圣杯布局

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>圣杯布局</title>
    <style>
    
    body{
       display: flex;
       flex-direction: column;
       height: 100vh;
       font-size: 24px;
    }

    .header-layout{
        background-color: red;
        height: 200px;
    }

    .body-layout{
        display: flex;
        flex-grow: 1;   
        align-items: stretch;     
    }

    .body-layout .nav-layout{
        background-color: green;
        width: 200px;
        order: -1;
    }

    .body-layout .main-layout{
        background-color: grey;
        flex-grow: 1;
    }
    .body-layout .aside-layout{
        background-color: lightblue;
        width: 200px;
    }

    .footer-layout{
        background-color: yellow;
        height: 200px;
    }

    .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    </style>
</head>

<body>
    <header class="header-layout flex-center">头部</header>
    <div class="body-layout">
        <main class="main-layout flex-center">主体部分</main>
        <nav class="nav-layout flex-center">导航</nav>
        <aside class="aside-layout flex-center">侧栏</aside>
    </div>
    <footer class="footer-layout flex-center">底部</footer>
</body>

</html>
```

### 一些问题

1、Flex容器是什么？Flex项目是什么？如何使用？
2、Flex容器的属性有哪些？
3、Flex项目的属性是什么?
4、圣杯布局的思想是什么？







## 4、rem和vw布局

![](D:\front-end\study\MarkDown\0基础\mweb\tabbar.png)

### 4.1、rem布局

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rem 布局方案</title>
    <style>
        img {
          width: 100%;
        }
        .tabbar-layout {
          position: fixed;
          bottom: 0;
          left: 0;
          box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.15);
  
          /* width: 100%;
          height: 48px; */
            
          /* width: 750px;
          height: 96px; */

          /* width: 75rem;
          height: 9.6rem; */
          
          /* 安装VS插件px2rem，打开设置搜索，设置最底部的值 */
          width: 75rem /* 750/10 */;
          height: 9.6rem /* 96/10 */;
        }
      </style>

      <style>

        /* 《rem + vw布局方案》
           1.原理 
           viewWidth / 750px = ? / 10px
            推导出
           100vw / 750px = ?vw / 10px
        */
      </style>
    <style>
        html{
            /* 不用担心字体过大或过小，这里只是用来计算，不用来显示 */
            /* font-size: 5px; */
            /* font-size: 10px; */


            /* 2.实现（替代了JS代码） */
            /* 《rem + vw布局方案》
            10px * 100vw /750px */
            font-size: 1.333333vw;
        }
    </style>
</head>
<body>
    <div class="tabbar-layout">
        <img src="./images/tabbar.png" alt="标签栏" />
    </div>

     <script>
        // 1.原理
        // 750px/96px

        // 宽高比不变
        // 750rem/96rem
        // 宽和高可以随着屏幕大小的变化而变化

        // 1rem = html 字体大小
        // 设(自定义比例) 1rem = 10px
        // 当屏幕变化的时候修改 html 的字体大小

        // 375px / 48px === 750 / 96

        // 视口宽 /  设计稿宽 = ?  / 设定比例
        // viewWidth / 750px = ? / 10px
        // ? = viewWidth * 10px / 750px = viewWidth / 75

        // 2.实现
        // {
        //    const docEl = document.documentElement;
        //    const setHtmlFontSize = () => {
        //         const viewWidth = docEl.clientWidth;
        //         docEl.style.fontSize  =  `${viewWidth/75}px`;
        //    } 

        //    window.addEventListener('resize', () => {
        //       setHtmlFontSize();
        //    }, false)
        // }

        // 安装 px2rem 插件，修改配置后需重启编辑器生效

        // 3.扩展 flexible
        // https://github.com/amfe/lib-flexible
        // 解决了 1px 边框问题
     </script>
</body>
</html>
```



### 4.2、vw布局

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vw 布局方案</title>

    <style>
        img {
          width: 100%;
        }
        .tabbar-layout {
          position: fixed;
          bottom: 0;
          left: 0;
          box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.15);
  
          /* 
            width: 750px;
            height: 96px;
          */
          width: 100vw;
          /* 
            X * vw = 100vw * 96px / 750px 
            X = 960 / 75 = 12.8 
          */
          height: 12.8vw;
        }
    </style>
</head>
<body>
    <div class="tabbar-layout">
        <img src="./images/tabbar.png" alt="标签栏" />
    </div>
    <script>
        // 1.原理
        // 计算出测量的值对应的 vw 单位的值

        // 测量px / 750px = ?vw / 100vw
        // ?vw = 100vw * 测量px / 750px

        // 1rem = 10px
        // 75rem 9.6rem

        // px2vw 插件

        // 优先使用 vw 布局方案，如果条件不允许（比如浏览器不兼容 vw），再选择 rem 方案
        // 修改历史项目的时候，如果该项目使用的是 rem 布局，可以使用 vw + rem 方案修改
        
    </script>


<!-- 问题总结
1、等比例缩放：宽高比不变，随着屏幕大小的变化而变化
2、rem布局方案的步骤和思想？
3、vw布局方案的步骤和思想？
4、rem + vw 布局方案的步骤和思想？
 -->
</body>
</html>
```





## 5、响应式布局✨

### 媒体查询的语法

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>媒体查询的语法</title>
    <style>
      /* 1.什么是媒体查询 Media querys */
      /* 一套样式很难适应各种大小的屏幕 */
      /* 针对各种大小的屏幕写样式，让我们的页面在不同大小的屏幕上都能正常显示 */ 

      /* 是屏幕设备并且屏幕宽度 >= 320px（断点 Breakpoint） */
      /* @media screen and (min-width:320px) {
          body {
              background-color: red;
          }
      } */

      /* 2.媒体类型 */
      /* all（所有设备 默认值） / screen（屏幕设备） / print（打印设备） / speech（屏幕阅读器，一般供残障人士使用） */
      /* all 和 screen 比较常用 */
      /* @media all and (min-width:320px) {
          body {
              background-color: red;
          }
      } */
      /* 省略写法 */
      /* @media (min-width:320px) {
          body {
              background-color: red;
          }
      } */


      /* 3.媒体查询中的逻辑 */
      /* 与( and )  / 或( , ) / 非( not ) */

      /* 3.1.与( and ) */
      /* 查询条件全部为真时生效 */

      /* screen 并且屏幕宽度 >=320px 且 <= 375px */
      /* @media screen and (min-width: 320px) and (max-width: 375px) {
        body {
          background-color: red;
        }
      } */

      /* 3.2.或( , ) */
      /* 查询条件中的任意一个为真时生效 */

      /* (screen 并且屏幕宽度 >= 375px) 或 (屏幕宽度 <= 320px) */
      /* @media screen and (min-width: 375px), (max-width: 320px) {
        body {
          background-color: red;
        }
      } */
      /* 上面相当于省略all，没有省略all的写法 */
      /* (screen 并且屏幕宽度 >=375px) 或 (all 并且屏幕宽度 <= 320px) */
      /* @media screen and (min-width: 375px), all and (max-width: 320px) {
        body {
          background-color: red;
        }
      } */

      /* 3.3.非( not ) */
      /* 对当前查询条件取反 */

      /* 当 not 与 and 同时出现，not 对整个媒体查询生效 */
      /* 取反(screen 并且屏幕宽度 >=320px 且 <= 375px) */
      /* @media not screen and (min-width: 320px) and (max-width: 375px) {
        body {
          background-color: red;
        }
      } */

      /* not 与逗号分隔的多个媒体查询同时存在时，not 只对它所在的那个查询生效 */
      /* 取反(screen 并且屏幕宽度 >=375px) 或 (all 并且屏幕宽度 <= 320px) */
      /* not只作用于min-width */
      /* 合并为screen 并且屏幕宽度 <= 375px */
      /* @media not screen and (min-width: 375px), all and (max-width: 320px) {
        body {
          background-color: red;
        }
      } */

    

      /* 4.媒体特性 */
      /* 宽度：width / max-width / min-width */

      /* 设备像素比dpr：-webkit-device-pixel-ratio / -webkit-max-device-pixel-ratio / -webkit-min-pixel-ratio */

      /* 方向：orientation: landscape(水平) / portrait(垂直) */

      /* @media screen and (min-width: 320px) {
        body {
          background-color: red;
        }
      } */

      /* 只有320px生效 */
      /* @media screen and (width: 320px) {
        body {
          background-color: red;
        }
      } */

      /* dpr <= 2 且屏幕水平方向 */
      @media (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape) {
        body {
          background-color: red;
        }
      }

    </style>

</head>
<body>
    <script>
        // 响应式布局的概念
        // 响应式布局就是利用媒体查询技术，让页面在不同的屏幕上采用不同的样式，从而让页面能够兼容多种终端设备，如PC、手机、ipad

        // 语 法
        // @media 媒体类型 查询逻辑 (媒体特性：断点){
        //  /* 具体样式 */
        // }       

        // 获取 dpr
        console.log(window.devicePixelRatio);
   </script>
</body>


</html>
```



### 断点和书写位置

index.css

```css
/* mobile */
@media screen and (max-width: 768px) {
  body {
    background-color: red;
  }
}

/* PC */
@media screen and (min-width: 768px) {
  body {
    background-color: green;
  }
}

```



```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>断点和书写位置</title>
    <style>
        /* 1.如何设置断点 Breakpoint */
        @media screen and (min-width:320px){
            body{
                background-color: red;
            }
        }
        /* 1.1经验总结 
        Bootstrap 的断点
          xs: < 576px 超小屏
          sm: 576px ~ 768px 小屏
          md: 768px ~ 992px 中屏
          lg: 992px ~ 1200px 大屏
          xl: >= 1200px 超大屏
        */

        /* 1.2.改变屏幕大小，当页面显示不正常（或不符合要求）的时候，就需要设置断点了 */

        /* 2.媒体查询的书写位置 */
        /* 2.1.样式表（style 标签或单独的 CSS 文件）中（推荐） */
        /* 2.2.样式外链 link 中（不推荐） */
        /* 不论媒体查询的条件是否满足，都会下载样式文件 */

    </style>
    
    <!-- 单独的CSS文件 -->
    <link rel="stylesheet" href="./css/index.css">

    <!-- 样式外链 link 中（不推荐） -->
    <!-- <link
      rel="stylesheet"
      href="./css/mobile.css"
      media="screen and (max-width: 768px)"
    />
    <link
      rel="stylesheet"
      href="./css/pc.css"
      media="screen and (min-width: 768px)"
    /> -->

</head>

<body></body>

</html>
```



### 媒体查询的策略📃

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>媒体查询的策略</title>
    <style>
      /* css reset */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      body {
        padding-top: 200px;
      }
      img {
        width: 100%;
      }
      .row {
        width: 100%;
        display: flex;
        /* 换行 */
        flex-wrap: wrap;
      }
      .col {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: rgba(86, 61, 124, 0.15);
        border: 1px solid rgba(86, 61, 124, 0.2);
      }


       /*
        断点
          xs: < 576px 超小屏
          sm: 576px ~ 768px 小屏
          md: 768px ~ 992px 中屏
          lg: 992px ~ 1200px 大屏
          xl: >= 1200px 超大屏
      */
      

      /* 无策略写法 */
      /* @media screen and (max-width:576px) {
          .col{
              width: 100%;
          }
      }
      @media screen and (min-width:576px) and (max-width:768px) {
          .col{
              width: 50%;
          }
      }
      @media screen and (min-width:768px) and (max-width:992px) {
          .col{
              width: 33.3333%;
          }
      }
      @media screen and (min-width:992px) and (max-width:1200px) {
          .col{
              width: 25%;
          }
      }
      @media screen and (min-width:1200px) {
          .col{
              width: 8.3333%;
          }
      } */


      /* PC端优先 */
      /* 从大到小 */
      /* .col{
          width: 8.33333%;
      }

      @media screen and (max-width:1200px) {
          .col{
              width: 25%;
          }
      } 
      @media screen and (max-width:992px) {
          .col{
              width: 33.33333%;
          }
      } 
      @media screen and (max-width:768px) {
          .col{
              width: 50%;
          }
      }
      @media screen and (max-width:576px) {
          .col{
              width: 100%;
          }
      }  */


      /* 移动端优先（推荐★★★） */
      /* moblie frist 从小到大 */
      .col{
          width: 100%;
      }
      @media screen and (min-width:576px) {
          .col{
              width: 50%;
          }
      } 
 
      @media screen and (min-width:768px) {
          .col{
              width: 33.3333%;
          }
      }
     
      @media screen and (min-width:992px) {
          .col{
              width: 25%;
          }
      } 

      @media screen and (min-width:1200px) {
          .col{
              width: 8.3333%;
          }
      } 

    </style>
</head>
<body>
    <div class="row">
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
        <div class="col">
          <img src="images/1.png" alt="" />
        </div>
      </div>
</body>
</html>
```

### 一些问题

1、媒体类型有哪些？主要的是什么？
2、媒体查询中的逻辑分别有哪几个？功能是什么？
3、媒体特性有哪些？常用的有哪些？
4、媒体查询的断点设置方式以及书写的位置应该在哪最合适？
5、媒体查询的策略：无策略、从小到大和从大到小应该使用哪一个比较好？为什么？







## 6、网格Grid布局

### 基础知识

grid.css

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  padding: 20px 0;
  background-color: #e2e2e2;
  font-size: 24px;
}
img {
  width: 100%;
  margin-bottom: 20px;
  vertical-align: top;
}
h2,
h3 {
  padding: 5px 10px;
  border-bottom: 2px solid #797979;
  margin-bottom: 10px;
  color: #797979;
}
h3 {
  border-bottom: none;
}
p,
h4 {
  padding: 10px;
  background: #797979;
  border-radius: 5px;
  margin: 0 10px 10px;
  color: white;
}
h4 {
  background-color: pink;
  color: #666;
}

.container,
.grid-container {
  background-color: white;
  margin: 0 10px 20px;
  padding: 6px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;
}
.item-1 {
  background-color: lightseagreen;
}
.item-2 {
  background-color: lightsteelblue;
}
.item-3 {
  background-color: lightgreen;
}
.item-4 {
  background-color: #ffd200;
}
.item-5 {
  background-color: lightskyblue;
}
.item-6 {
  background-color: pink;
}
.item-7 {
  background-color: gray;
}
.item-8 {
  background-color: orange;
}
.item-9 {
  background-color: yellowgreen;
}
.item-10 {
  background-color: palevioletred;
}
```



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Grid 基础知识</title>
    <link rel="stylesheet" href="./css/grid.css" />
  </head>
  <body>
    <!-- 基本概念 -->
    <!-- <img src="./grid-1.png" alt="grid" /> -->
    <!-- <img src="./grid-2.png" alt="grid" /> -->
    <img src="./grid.png" alt="grid" />

    <!-- 网格线 -->
    <img src="./grid-line.png" alt="grid line" />

    <!-- <div class="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
    </div> -->

    <script>
      // 1.Grid 容器（container）和项目（item）
      // 采用 Grid 网格布局的元素，称为 Grid 容器
      // display: grid | inline-grid;

      // Grid 容器的所有 *子元素* 自动成为容器成员，称为 Grid 项目

      // 2.行、列和单元格
      // 容器中的水平区域称为“行”（row），垂直区域称为“列”（column）
      // 行和列的交叉区域，称为“单元格”（cell）

      // 3.网格线
      // 划分网格的线，称为“网格线”（grid line）
      // 水平网格线划分出行，垂直网格线划分出列

      // 4.其它
      // 行间距、列间距（gap）
      // 区域（area）
      // 内容（content）
      // 网格轨道（track）
    </script>
  </body>
</html>
```



### 容器的属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Grid 容器的属性</title>
    <link rel="stylesheet" href="./grid.css" />
    <style>
      /* 1.display 属性 */
      .grid-1-1 {
        display: grid;
      }
      .grid-1-2 {
        display: inline-grid;
      }
      

      /* 2.grid-template-rows/grid-template-columns 属性 */
      /* 行高和列宽 */
      .container {
        display: grid;
      }
      .grid-2-1 { 
        /* 固定数值 */
        /* grid-template-rows: 150px 150px 150px;
        grid-template-columns: 150px 150px 150px; */

        /* grid-template-rows: 150px 300px 150px;
        grid-template-columns: 150px 300px 150px; */

        /* 给网格线起名字 */
        /* 允许同一根网格线有多个名字 */
        grid-template-rows: [r1 r11] 150px [r2] 150px [r3] 150px [r4];
        grid-template-columns: [c1] 150px [c2] 150px [c3] 150px [c4];
      }
      .grid-2-2 {
        /* 百分比 %：容器宽高的百分比（不包括内边距和边框）*/
        height: 600px;
        grid-template-rows: 33.33% 33.33% 33.33%;
        grid-template-columns: 33.33% 33.33% 33.33%;
      }
      .grid-2-3 {
        /* fr（fraction 的缩写，意为“片段”）：分配剩余可用空间 */
        height: 600px;
        /* grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr; */

        /* grid-template-columns: 2fr 2fr 1fr;
        grid-template-rows: 1fr 2fr 2fr; */

        grid-template-columns: 50px 1fr 50px;
        grid-template-rows: 1fr 2fr 1fr;
      }
      .grid-2-4 {
        /* auto：先于 fr 计算，获取必要的最小空间 */
        height: 600px;
        /* grid-template-columns: 150px auto 150px; */
        /* grid-template-columns: auto auto auto;
        grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: auto 1fr 150px;
        grid-template-rows: 1fr 2fr 1fr;
      }
      .grid-2-5 {
        /* repeat(行列数,大小值)：简化重复的值 */
        /* grid-template-rows: 150px 150px 150px;
        grid-template-columns: 150px 150px 150px; */

        /* grid-template-rows: repeat(3, 150px);
        grid-template-columns: repeat(3, 150px); */

        /* grid-template-rows: repeat(4, 25%);
        grid-template-columns: repeat(4, 25%); */

        /* grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr); */

        /* grid-template-columns: repeat(2, 150px 150px);
        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: repeat(3, 150px); */

        /* 当单元格的大小固定，容器大小不确定时，
        如果希望每一行（或每一列）容纳尽可能多的单元格，可以使用 auto-fill 自动填充 */
        grid-template-columns: repeat(auto-fill, 150px);
        grid-template-rows: repeat(3, 150px);
      }
      .grid-2-6 {
        /*minmax(min, max)：取值 >= 最小值，并且 <= 最大值 */
        /* minmax(150px,300px) => 150~300px */
        grid-template-columns: 1fr minmax(150px, 300px) 1fr;
        grid-template-rows: repeat(3, 150px);
      }








      /* 3.grid-auto-flow 属性 */
      /* 定义项目的排列顺序 */
      .grid-3-1 {
        /* row（默认值）：先填满第一行，再放入第二行 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        grid-auto-flow: row;
      }
      .grid-3-2 {
        /* column：先填满第一列，再放入第二列 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        grid-auto-flow: column;
      }
      .grid-3-3 {
        /* row dense：row，在稍后出现较小的项目时，尝试填充网格中较早的空缺 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        grid-auto-flow: row dense;
        
      }
      .grid-3-3 .item-1 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .grid-3-3 .item-2 {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .grid-3-4 {
        /* column dense：column，在稍后出现较小的项目时，尝试填充网格中较早的空缺 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        grid-auto-flow: column dense;

      }
      .grid-3-4 .item-1 {
        grid-row-start: 1;
        grid-row-end: 3;
      }
      .grid-3-4 .item-2 {
        grid-row-start: 1;
        grid-row-end: 3;
      }

      /* 4.grid-auto-rows/grid-auto-columns 属性 */
      /* grid-auto-rows 定义浏览器自动创建的多余网格的行高
         grid-auto-columns 定义浏览器自动创建的多余网格的列宽 */
      .grid-4 {
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);
        /* grid-auto-rows: 200px; */

        grid-auto-flow: column;
        grid-auto-columns: 200px;
      }

      /* 5.row-gap/column-gap/gap 属性 */
      /* row-gap 设置行间距
         column-gap 设置列间距
         gap 是 row-gap 和 column-gap 的简写形式  */
      .grid-5 {
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        /* row-gap: 20px;
        column-gap: 20px; */
        gap: 20px 20px;

        /* 如果省略了第二个值，第二个值等于第一个值 */
        gap: 20px;
      }


      /* 6.grid-template-areas 属性 */
      /* 定义区域 */
      .grid-6 {
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        /* grid-template-areas:
          'a b c'
          'd e f'
          'g h i'; */

        grid-template-areas:
          'a a a'
          'd e f'
          'g g g';
        grid-template-areas:
          'header header header'
          'nav main sidebar'
          'footer footer footer';

        /* 如果某些区域不需要利用，则使用“点”（.）表示 */
        grid-template-areas:
          'a . a'
          'd e f'
          'g g g';

        /* 区域的命名会影响到网格线。每个区域的起始网格线，
           会自动命名为 区域名-start，终止网格线自动命名为 区域名-end */
        grid-template-columns: [c1 c11] 150px [c2] 150px [c3] 150px [c4];
        grid-template-rows: [r1] 150px [r2] 150px [r3] 150px [r4];

        grid-template-areas:
          'header header header'
          'nav main sidebar'
          'footer footer footer';
      }




      /* 7.align-items/justify-items/place-items 属性 (垂直水平居中)*/
      /* align-items 设置项目的垂直位置（上中下）
         justify-items 设置项目的水平位置（左中右）
         place-items 是 align-items 和 justify-items 的合并简写形式 */
      .grid-7-1 {
        /* stretch（默认值）：拉伸，占满单元格的整个宽高 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        align-items: stretch;
        justify-items: stretch;
        place-items: stretch stretch;

        /* 如果省略第二个值，则浏览器认为与第一个值相等 */
        place-items: stretch;
      }
      .grid-7-2 {
        /* start：对齐单元格的起始边缘 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        align-items: start;
        justify-items: start;
        place-items: start start;
         /* 如果省略第二个值，则浏览器认为与第一个值相等 */
        place-items: start;
      }
      .grid-7-3 {
        /* end：对齐单元格的结束边缘 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        align-items: end;
        justify-items: end;
        place-items: end end;
         /* 如果省略第二个值，则浏览器认为与第一个值相等 */
        place-items: end ; 
      }
      .grid-7-4 {
        /* center：单元格内部居中*/
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        align-items: center;
        justify-items: center;
        place-items: center center;
         /* 如果省略第二个值，则浏览器认为与第一个值相等 */
        place-items: center;
      }




      /* 8.align-content/justify-content/place-content 属性 */
      /* align-content 设置整个内容区域的垂直位置（上中下）
         justify-content 设置整个内容区域的水平位置（左中右）
         place-content 是 align-content 和 justify-content 的合并简写形式 */
      .grid-8-1 {
        /* stretch（默认值）：项目大小没有指定时，拉伸占据整个网格容器 */
        grid-template-columns: repeat(3, 150px);
        /* grid-template-rows: repeat(3, 150px); */
        height: 600px;

        align-content: stretch;
        justify-content: stretch;
        place-content: stretch;
      }
      .grid-8-2 {
        /* start：对齐容器的起始位置 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;

        align-content: start;
        justify-content: start;
        place-content: start;
      }
      .grid-8-3 {
        /* end：对齐容器的结束位置d */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;

        align-content: end;
        justify-content: end;
        place-content: end;
      }
      .grid-8-4 {
        /* center：容器内部居中 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;

        align-content: center;
        justify-content: center;
        place-content: center;
      }
      .grid-8-5 {
        /* space-around：每个项目两侧的间隔相等。
        所以，项目之间的间隔比项目与容器边框的间隔大一倍 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;

        align-content: space-around;
        justify-content: space-around;
        place-content: space-around;
      }
      .grid-8-6 {
        /* space-between：项目与项目之间的间隔相等，项目与容器边框之间没有间隔 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;

        align-content: space-between;
        justify-content: space-between;
        place-content: space-between;
      }
      .grid-8-7 {
        /* space-evenly：项目与项目之间的间隔相等，
        项目与容器边框之间也是同样长度的间隔 */
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, 150px);

        height: 600px;
        
        align-content: space-evenly;
        justify-content: space-evenly;
        place-content: space-evenly;
      }
    </style>
  </head>
  <body>
    <!-- <img src="./grid.png" alt="grid" /> -->
    <!-- <img src="./grid-line.png" alt="grid line" /> -->

    <!-- 1.display 属性 -->
    <div>
      <h2>1.display 属性</h2>
      <h3>指定一个元素采用网格布局</h3>
      <h4>display: grid | inline-grid;</h4>

      <p>grid：容器元素是块级元素</p>
      <div class="grid-container grid-1-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
      </div>
      <!-- <div class="grid-container grid-1-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
      </div> -->

      <p>inline-grid：容器元素是内联块元素</p>
      <div class="grid-container grid-1-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
      </div>
      <!-- <div class="grid-container grid-1-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
      </div> -->
    </div>

    <!-- 2.grid-template-rows/grid-template-columns 属性 -->
    <div>
      <h2>
        2.grid-template-rows 属性，<br />
        grid-template-columns 属性
      </h2>
      <h3>
        grid-template-rows 定义每一行的行高
        <br />
        grid-template-columns 定义每一列的列宽
      </h3>
      <h4>
        grid-template-rows: 固定数值 | % | fr | auto | repeat() | minmax()
      </h4>
      <h4>
        grid-template-columns: 固定数值 | % | fr | auto | repeat() | minmax()
      </h4>

      <p>固定数值</p>
      <div class="container grid-2-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>百分比 %：容器宽高的百分比（不包括内边距和边框）</p>
      <div class="container grid-2-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>fr（fraction 的缩写，意为“片段”）：分配剩余可用空间</p>
      <div class="container grid-2-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>auto：先于 fr 计算，获取必要的最小空间</p>
      <div class="container grid-2-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>repeat()：简化重复的值</p>
      <div class="container grid-2-5">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>minmax(min, max)：取值 >= 最小值，并且 <= 最大值</p>
      <div class="container grid-2-6">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 3.grid-auto-flow 属性 -->
    <div>
      <h2>3.grid-auto-flow 属性</h2>
      <h3>定义项目的排列顺序</h3>
      <h4>
        grid-auto-flow: row（默认值） | column | row dense | column dense;
      </h4>

      <p>row（默认值）：先填满第一行，再放入第二行</p>
      <div class="container grid-3-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>column：先填满第一列，再放入第二列</p>
      <div class="container grid-3-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>row dense：row，在稍后出现较小的项目时，尝试填充网格中较早的空缺</p>
      <div class="container grid-3-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>
        column dense：column，在稍后出现较小的项目时，尝试填充网格中较早的空缺
      </p>
      <div class="container grid-3-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 4.grid-auto-rows/grid-auto-columns 属性 -->
    <div>
      <h2>
        4.grid-auto-rows 属性，<br />
        grid-auto-columns 属性
      </h2>
      <h3>
        grid-auto-rows 定义浏览器自动创建的多余网格的行高
        <br />
        grid-auto-columns 定义浏览器自动创建的多余网格的列宽
      </h3>

      <div class="container grid-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
        <div class="item item-10">10</div>
      </div>
    </div>

    <!-- 5.row-gap/column-gap/gap 属性 -->
    <div>
      <h2>
        5.row-gap 属性，<br />
        column-gap 属性，<br />
        gap 属性
      </h2>
      <h3>
        row-gap 设置行间距
        <br />
        column-gap 设置列间距
        <br />
        gap 是 row-gap 和 column-gap 的简写形式
      </h3>

      <div class="container grid-5">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 6.grid-template-areas 属性 -->
    <div>
      <h2>6.grid-template-areas 属性</h2>
      <h3>定义区域</h3>

      <div class="container grid-6">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 7.align-items/justify-items/place-items 属性 -->
    <div>
      <h2>
        7.align-items 属性，<br />
        justify-items 属性，<br />
        place-items 属性
      </h2>
      <h3>
        align-items 设置项目的垂直位置（上中下）
        <br />
        justify-items 设置项目的水平位置（左中右）
        <br />
        place-items 是 align-items 和 justify-items 的合并简写形式
      </h3>
      <h4>align-items: stretch（默认值）| start | end | center;</h4>
      <h4>justify-items: stretch（默认值）| start | end | center;</h4>
      <h4>place-items: align-items justify-items;</h4>

      <p>stretch（默认值）：拉伸，占满单元格的整个宽高</p>
      <div class="container grid-7-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>start：对齐单元格的起始边缘</p>
      <div class="container grid-7-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>end：对齐单元格的结束边缘</p>
      <div class="container grid-7-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>center：单元格内部居中</p>
      <div class="container grid-7-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 8.align-content/justify-content/place-content 属性 -->
    <div>
      <h2>
        8.align-content 属性，<br />
        justify-content 属性，<br />
        place-content 属性
      </h2>
      <h3>
        align-content 设置整个内容区域的垂直位置（上中下）
        <br />
        justify-content 设置整个内容区域的水平位置（左中右）
        <br />
        place-content 是 align-content 和 justify-content 的合并简写形式
      </h3>
      <h4>
        align-content: stretch（默认值） | start | end | center | space-around |
        space-between | space-evenly;
      </h4>
      <h4>
        justify-content: stretch（默认值） | start | end | center | space-around
        | space-between | space-evenly;
      </h4>
      <h4>place-content: align-content justify-content;</h4>

      <p>stretch（默认值）：项目大小没有指定时，拉伸占据整个网格容器</p>
      <div class="container grid-8-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>start：对齐容器的起始位置</p>
      <div class="container grid-8-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>end：对齐容器的结束位置</p>
      <div class="container grid-8-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>center：容器内部居中</p>
      <div class="container grid-8-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>
        space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
      </p>
      <div class="container grid-8-5">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>space-between：项目与项目之间的间隔相等，项目与容器边框之间没有间隔</p>
      <div class="container grid-8-6">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>
        space-evenly：项目与项目之间的间隔相等，项目与容器边框之间也是同样长度的间隔
      </p>
      <div class="container grid-8-7">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 9.grid-template/grid 属性 -->
    <div>
      <h2>
        9.grid-template 属性，<br />
        grid 属性
      </h2>
      <h3>
        grid-template 是 grid-template-columns、grid-template-rows 和
        grid-template-areas 这三个属性的合并简写形式
        <br />
        grid 是 grid-template-rows、grid-template-columns、grid-template-areas、
        grid-auto-rows、grid-auto-columns、grid-auto-flow
        这六个属性的合并简写形式
      </h3>
      <p>既不易写也不易读，不建议使用</p>
    </div>
  </body>
</html>

```



### 项目的属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Grid 项目的属性</title>
    <link rel="stylesheet" href="./grid.css" />
    <style>
      /* 1.grid-column-start/grid-column-end/grid-row-start/grid-row-end */
      /* 指定项目的位置 */
      .container {
        display: grid;
        grid-template-columns: [c1] 150px [c2] 150px [c3] 150px [c4];
        grid-template-rows: [r1] 150px [r2] 150px [r3] 150px [r4];
      }
      /* 盒子1 */
      .grid-1-1 .item-1 {
        /* number：数字，从第几个网格线开始，到第几个网格线结束 */
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;

        /* grid-column-start: -4;
        grid-column-end: -2; */

        /* 项目可以相互重叠，使用 z-index 来控制重叠顺序 */
        z-index: 1;
      }
      /* 盒子2 */
      .grid-1-1 .item-2 {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;

        z-index: 2;
      }







      .grid-1-2 {
        /* name：通过名字来引用一个命名的网格线 */
        grid-template-areas:
          'header header header'
          'nav main sidebar'
          'footer footer footer';
      }
      .grid-1-2 .item-1 {
        /* name：通过名字来引用一个命名的网格线 */
        grid-column-start: c1;
        grid-column-end: c3;
        /* grid-row-start: r1;
        grid-row-end: r3; */

        grid-row-start: header-start;
        grid-row-end: footer-start;
      }


      .grid-1-3 .item-1 {
        /* span number：该网格项将跨越所提供的网格数量 */
        grid-column-start: span 2;
        /* grid-column-start: span 1; */
      }







      /* 2.grid-column/grid-row 属性 */
      /* grid-column 是 grid-column-start 和 grid-column-end 的合并简写形式
         grid-row 是 grid-row-start 和 grid-row-end 的合并简写形式 */
      .grid-2 .item-1 {
        /* grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3; */

        grid-column: 1 / 3;
        grid-row: 1 / 3;

        grid-column: 2; 
        /* 斜杠以及后面的部分可以省略，默认跨越一个网格 */
        grid-column: 2 / span 1; 
      }


      

      /* 3.grid-area 属性 */
      .grid-3-1 {
        grid-template-areas:
          'header header header'
          'nav main sidebar'
          'footer footer footer';
      }
      .grid-3-1 .item-1 {
        /* 区域名：指定项目放在哪一个区域 */
        grid-area: header;
      }
      .grid-3-2 .item-1 {
        /* grid-row-start / grid-column-start / grid-row-end /
        grid-column-end */

        /* 左上角到右下角 */
        grid-area: 2 / 2 / 3 / 3;
      }

      /* 4.align-self/justify-self/place-self 属性 */
      /* align-self 设置项目的垂直位置（上中下），
         跟 align-items 的用法完全一致，但只作用于单个项目
         justify-self 设置项目的水平位置（左中右），
         跟 justify-items 的用法完全一致，但只作用于单个项目
         place-self 是 align-self 和 justify-self 的合并简写形式 */
      .grid-4-1 .item-1 {
        /* stretch（默认值）：拉伸，占满单元格的整个宽高 */
        align-self: stretch;
        justify-self: stretch;
        place-self: stretch stretch;
        place-self: stretch;
      }
      .grid-4-2 .item-1 {
        /* start：对齐单元格的起始边缘 */
        align-self: start;
        justify-self: start;
        place-self: start start;
      }
      .grid-4-3 .item-1 {
        /* end：对齐单元格的结束边缘 */
        align-self: end;
        justify-self: end;
        place-self: end end;
      }
      .grid-4-4 .item-1 {
        /* center：单元格内部居中 */
        align-self: center;
        justify-self: center;
        place-self: center center;
      }
    </style>
  </head>
  <body>
    <!-- <img src="./grid.png" alt="grid" /> -->
    <!-- <img src="./grid-line.png" alt="grid line" /> -->

    <!-- 1.grid-column-start/grid-column-end/grid-row-start/grid-row-end 属性 -->
    <div>
      <h2>
        1.grid-column-start 属性，<br />
        grid-column-end 属性，<br />
        grid-row-start 属性，<br />
        grid-row-end 属性
      </h2>
      <h3>指定项目的位置</h3>
      <h4>grid-column-start: number | name | span number;</h4>
      <h4>grid-column-end: number | name | span number;</h4>
      <h4>grid-row-start: number | name | span number;</h4>
      <h4>grid-row-end: number | name | span number;</h4>

      <p>number：数字，从第几个网格线开始，到第几个网格线结束</p>
      <div class="container grid-1-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>name：通过名字来引用一个命名的网格线</p>
      <div class="container grid-1-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>span number：该网格项将跨越所提供的网格数量</p>
      <div class="container grid-1-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 2.grid-column/grid-row -->
    <div>
      <h2>
        2.grid-column 属性，<br />
        grid-row 属性
      </h2>
      <h3>
        grid-column 是 grid-column-start 和 grid-column-end 的合并简写形式
        <br />
        grid-row 是 grid-row-start 和 grid-row-end 的合并简写形式
      </h3>
      <h4>
        grid-column: grid-column-start / grid-column-end;
        <br />
        grid-row: grid-row-start / grid-row-end;
      </h4>

      <div class="container grid-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 3.grid-area 属性 -->
    <div>
      <h2>3.grid-area 属性</h2>
      <h3>
        指定项目放在哪一个区域
        <br />
        还可用作
        grid-row-start、grid-column-start、grid-row-end、grid-column-end
        的合并简写形式，直接指定项目的位置
      </h3>
      <h4>grid-area: 区域名;</h4>
      <h4>
        grid-area: grid-row-start / grid-column-start / grid-row-end /
        grid-column-end;
      </h4>

      <p>区域名：指定项目放在哪一个区域</p>
      <div class="container grid-3-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>grid-row-start / grid-column-start / grid-row-end / grid-column-end</p>
      <div class="container grid-3-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>

    <!-- 4.align-self/justify-self/place-self 属性 -->
    <div>
      <h2>
        4.align-self 属性，<br />
        justify-self 属性，<br />
        place-self 属性
      </h2>
      <h3>
        align-self 设置项目的垂直位置（上中下），跟 align-items
        的用法完全一致，但只作用于单个项目
        <br />
        justify-self 设置项目的水平位置（左中右），跟 justify-items
        的用法完全一致，但只作用于单个项目
        <br />
        place-self 是 align-self 和 justify-self 的合并简写形式
      </h3>
      <h4>align-self: stretch（默认值）| start | end | center;</h4>
      <h4>justify-self: stretch（默认值）| start | end | center;</h4>
      <h4>place-self: align-self justify-self;</h4>

      <p>stretch（默认值）：拉伸，占满单元格的整个宽高</p>
      <div class="container grid-4-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>start：对齐单元格的起始边缘</p>
      <div class="container grid-4-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>end：对齐单元格的结束边缘</p>
      <div class="container grid-4-3">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>

      <p>center：单元格内部居中</p>
      <div class="container grid-4-4">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
      </div>
    </div>
  </body>
</html>
```

#### 圣杯布局

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>shengmebi</title>
<style>
  body{
    height: 100vh;
    display: grid;
    grid-template-rows: 80px auto 80px;
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas: 
    'header header header'
    'nav main aside'
    'footer footer footer';
    font-size: 24px;
  }
  
  .header-layout{
    background-color: red;
    grid-area: header;
  }
  .main-layout{
    background-color:grey;
    grid-area: main;
  }
  .nav-layout{
    background-color: green;
    grid-area: nav;
  }
  .aside-layout{
    background-color: lightblue;
    grid-area: aside;
  }
  .footer-layout{
    background-color: yellow;
    grid-area: footer;
  }

  .grid-center{
    display: grid;
    align-items: center;
    justify-items: center;
  }
</style>

</head>
<body>
  <header class="header-layout grid-center">头部</header>

  <!-- <div class="body-layout"> -->
  <main class="main-layout grid-center">主体部分</main>
  <nav class="nav-layout grid-center">导航</nav>
  <aside class="aside-layout grid-center">侧栏</aside>
  <!-- </div> -->

  <footer class="footer-layout grid-center">底部</footer>
</body>
</html>
```



### 一些问题

1、什么是列(Column)/行(row)/容器(container)/项目(item)/单元格(cell)/行间距(row gap)/列间距(column gap)/区域(area)/内容(content)
2、什么是网格线/网格轨道(track)
3、Grid容器的属性有哪些？各有什么功能？
4、Grid项目的属性有哪些？各有什么功能？
5、圣杯布局有几种实现方式？



## 常用布局方案的总结

| 布局方案     | 适用场景                           |
| ------------ | ---------------------------------- |
| 流体布局     | 宽度随屏幕大小变化，高度不变       |
| rem和vw布局  | 等比例缩放                         |
| 响应式布局   | 一次开发，多端使用(用于展示性网站) |
| Flex弹性布局 | 轴线布局（一维布局）               |
| Grid网格布局 | 行列布局（二维布局）               |







## 7、移动端事件

### Touch事件

#### Touch事件的基础

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Touch事件的基础</title>
    <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box" id="box"></div>

    <script>
      // 1.Touch 事件的类型
      // touchstart touchmove touchend touchcancel

      // 2.注意事项
      // 2.1.Touch 事件在 PC 端不会触发，鼠标事件在 PC 端和移动端都会触发

      // 2.2.即使触摸点移出目标元素，touchmove 事件依然会持续触发，mousemove 事件不会再触发

      // 3.Touch 事件的特征检测（判断浏览器支不支持 Touch 事件）

      console.log('onload' in window);
      console.log('ontouchstart' in window);
      console.log(window.hasOwnProperty('ontouchstart'));

      if('ontouchstart' in window) console.log('supporse');;

      // 手刚触摸到屏幕触发
      $box.addEventListener('touchstart',startHandler,false);
      // 手指在屏幕上移动
      $box.addEventListener('touchmove',moveHandler,false);
      // 手离开屏幕触发
      $box.addEventListener('touchend',endHandler,false);
      // 中断当前事件时触发，打入电话等(可以鼠标右键模拟点击)
      $box.addEventListener('touchcancel',cancelHandler,false);
      


      function startHandler() {
        console.log('touchstart');
      }
      function moveHandler() {
        console.log('touchmove');
      }
      function endHandler() {
        console.log('touchend');
      }
      function cancelHandler() {
        console.log('touchcancel');
      }


      // 鼠标移入事件（带冒泡）
      $box.addEventListener('mouseover', mouseHandler, false);
      // 鼠标移入事件
      $box.addEventListener('mouseenter', mouseHandler, false);
      // 鼠标按下事件
      $box.addEventListener('mousedown', mouseHandler, false);
      // 鼠标移动事件
      $box.addEventListener('mousemove', mouseHandler, false);
      // 鼠标松开事件
      $box.addEventListener('mouseup', mouseHandler, false);
      // 鼠标移出事件（带冒泡）
      $box.addEventListener('mouseout', mouseHandler, false);
      // 鼠标移出事件
      $box.addEventListener('mouseleave', mouseHandler, false);
      // 鼠标点击事件
      $box.addEventListener('click', mouseHandler, false);

      function mouseHandler(evt) {
        console.log(evt.type);
      }


    </script>
</body>
</html>
```



#### Touch事件的event对象

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Touch事件的event对象</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
            /* 处理所有触摸操作 */
            /*默认值 touch-action: auto; */

            /* touch-action: none; */

            /* 禁止平移 */
            touch-action: pan-x;
            touch-action: pan-y;

            /* 只允许进行滚动和持续缩放操作，不允许双击缩放 */
            touch-action: manipulation; 
        }
    </style>
</head>

<body style="height:2000px">
    <div id="box" class="box"></div>
    <script>

        const $box = document.getElementById('box');

        // 手刚触摸到屏幕触发
        $box.addEventListener('touchstart', startHandler, false);
        // // 手指在屏幕上移动
        // $box.addEventListener('touchmove', moveHandler, false);
        // // 手离开屏幕触发
        // $box.addEventListener('touchend', endHandler, false);
        // // 中断当前事件时触发，打入电话等(可以鼠标右键模拟点击)
        // $box.addEventListener('touchcancel', cancelHandler, false);



        function startHandler(evt) {
            console.log('touchstart');
            
            // 1.event 对象的常用属性
            // type 事件类型
            // target 目标元素
            // touches 屏幕上的所有触摸点
            // targetTouches 起始于目标上的所有触摸点
            // changedTouches 事件触发时，状态发生了改变的所有触摸点
            console.log('《event 对象的常用属性》');
            /** TouchEvent {isTrusted: true, touches: TouchList, targetTouches: TouchList, 
            changedTouches: TouchList, altKey: false, …} **/
            console.log(evt);
            console.log(evt.type);// touchstart
            console.log(evt.target);// <div id="box" class="box"></div>
            // 支持多指触摸
            // TouchList {0: Touch, length: 1}
            console.log(evt.touches);// 记录在屏幕上的手指点数
            console.log(evt.targetTouches);// 记录在div元素上的点
            console.log(evt.changedTouches);// 记录事件触发改变的点

            // 2.触摸点的常用属性
            // identifier 触摸点id（唯一标识符）,一般多指触摸有用
            // target 目标元素
            // screenX/screenY 触点相对于屏幕左边缘的X、Y坐标
            // clientX/clientY 触点相对于可视区域左边缘的X、Y坐标。不包括任何滚动偏移
            // pageX/pageY 触点相对于 HTML 文档左边缘的X、Y坐标。包括滚动偏移
            console.log('《触摸点的常用属性》');
            // 获取Touch对象
            const touch = evt.changedTouches[0];
            // Touch {identifier: 0, target: div#box.box, screenX: 1556, screenY: 252, clientX: 106, …}
            console.log(touch);
            console.log(touch.identifier);// 触摸点id（唯一标识符）,一般多指触摸有用
            console.log(touch.target);// <div id="box" class="box"></div>
            console.log('screen=?x=',touch.screenX,'y=',touch.screenY);// 触摸点相对于屏幕的XY轴坐标
            console.log('client=?x=',touch.clientX, 'y=',touch.clientY);// 触摸点相对于可视区域(不包含滚动条)的XY轴坐标
            console.log('page=?x=',touch.pageX,'y=', touch.pageY);// 触摸点相对于页面(包含滚动条)的XY轴坐标
            
            // 3.阻止浏览器的默认行为
            // 阻止 scrolling(滚动), pinch/zoom(缩放), 鼠标事件等默认行为
            // evt.preventDefault();
            // 3.1.可以在 touch 的事件处理函数中使用 evt.preventDefault() 阻止浏览器的默认行为
            // 3.2.touch-action 告诉浏览器哪些触摸操作让浏览器处理，阻止其他触摸操作的默认行为
            // https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action
        }

        // 手指在屏幕上移动触发
        function moveHandler(evt) {
            console.log('touchmove');
        }

        //手指抬起来的时候触发
        function endHandler(evt) {
            // console.log('touchend');
            // console.log(evt.type);

            // 所以屏幕上是没有任何点的，只能记录到事件触发改变的点
            console.log(evt.touches.length); // 0
            console.log(evt.targetTouches.length);// 0
            console.log(evt.changedTouches.length);// 1
        }

        // 中断当前事件时触发
        function cancelHandler(evt) {
            console.log('touchcancel');

            console.log(evt.touches.length);
            console.log(evt.targetTouches.length);
            console.log(evt.changedTouches.length);
        }

        // 鼠标移入事件（带冒泡）
        $box.addEventListener('mouseover', mouseHandler, false);
        // 鼠标移入事件
        $box.addEventListener('mouseenter', mouseHandler, false);
        // 鼠标按下事件
        $box.addEventListener('mousedown', mouseHandler, false);
        // 鼠标移动事件
        $box.addEventListener('mousemove', mouseHandler, false);
        // 鼠标松开事件
        $box.addEventListener('mouseup', mouseHandler, false);
        // 鼠标移出事件（带冒泡）
        $box.addEventListener('mouseout', mouseHandler, false);
        // 鼠标移出事件
        $box.addEventListener('mouseleave', mouseHandler, false);
        // 鼠标点击事件
        $box.addEventListener('click', mouseHandler, false);


        function mouseHandler(evt) {
            console.log(evt.type);
        }
    </script>

</body>

</html>
```

#### 单指拖拽

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>单指拖拽</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body style="height: 2000px">
    <div id="box" class="box"></div>
    <script>

        /**
         * 思路分析
         * 第一步：单指触摸到的获取当前位置
         * 第二步：获取手指移动到的点并实现动画
         * 第三步：手指抬起时：将最后一次移动的位置赋值给当前位置
         */

        const drag = $el => {
            // 每次拖拽最开始的触摸点
            const startPoint = {};
            // 拖拽过程中移动到的点
            const movePoint = {};
            // 被拖拽元素的当前位置.
            const curPos = {
                x: 0,
                y: 0
            };

            // 手指刚触摸到屏幕触发
            $el.addEventListener('touchstart', startHandler, false);
            // 手指在屏幕上移动
            $el.addEventListener('touchmove', moveHandler, false);
            // 触发二选一
            // 手离开屏幕触发
            $el.addEventListener('touchend', endHandler, false);
            // 中断当前事件时触发，打入电话等(可以鼠标右键模拟点击)
            $el.addEventListener('touchcancel', endHandler, false);
            
            // 手指开始触摸的点
            function startHandler(evt) {
                // 阻止移动端浏览器的默认行为
                evt.preventDefault();
                // 获取触摸对象
                const touch = evt.changedTouches[0];
                startPoint.x = touch.pageX;
                startPoint.y = touch.pageY;
                console.log('startPoint:',startPoint);
            }
            // 手指移到的点
            function moveHandler(evt) {
                // 获取触摸对象
                const touch = evt.changedTouches[0];
                movePoint.x = curPos.x + touch.pageX - startPoint.x;
                movePoint.y = curPos.y + touch.pageY - startPoint.y;
                $el.style.transform = `translate3d(${movePoint.x}px,${movePoint.y}px,0)`;
                console.log('movePoint:',movePoint);
            }
            // 手指头抬起
            function endHandler(evt) {
                console.log(evt.type);
                curPos.x = movePoint.x;
                curPos.y = movePoint.y;
                console.log('curPos:',curPos);
            }

        }
        drag(document.getElementById('box'));
    </script>

</body>

</html>
```





### Pointer事件

#### Pointer事件基础

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pointer事件基础</title>
    <style>
        .box {
          width: 200px;
          height: 200px;
          background-color: red;
        }
      </style>
</head>
<body>
    <div id="box" class="box"></div>
    <script>
      // 1.Pointer 事件的类型
      // pointerover/pointerenter/pointerout/pointerleave/pointerdown/pointermove/pointerup/pointercancel

      // 2.注意事项
      // 2.1.Pointer 事件直接继承了鼠标事件，在此基础上又添加了其他一些内容，处理 Pointer 事件和处理鼠标事件几乎一致

      // 2.2.Pointer 事件在 PC 端和移动端都会触发

      // 2.3.触摸点移出目标元素，touchmove 事件依然会持续触发，pointermove 和 mousemove 事件不会再触发

      // 3.Pointer 事件的特征检测（判断浏览器支不支持 Pointer 事件）
      if ('onpointerdown' in window) {
        console.log('支持 Pointer 事件');
      }

      const $box = document.getElementById('box');
    
    //   // touch
    //   $box.addEventListener('touchstart', touchHandler, false);
    //   $box.addEventListener('touchmove', touchHandler, false);
    //   $box.addEventListener('touchend', touchHandler, false);
    //   $box.addEventListener('touchcancel', touchHandler, false);
    //   // mouse
    //   $box.addEventListener('mouseover', mouseHandler, false);
    //   $box.addEventListener('mouseenter', mouseHandler, false);
    //   $box.addEventListener('mousedown', mouseHandler, false);
    //   $box.addEventListener('mousemove', mouseHandler, false);
    //   $box.addEventListener('mouseup', mouseHandler, false);
    //   $box.addEventListener('mouseout', mouseHandler, false);
    //   $box.addEventListener('mouseleave', mouseHandler, false);
    //   $box.addEventListener('click', mouseHandler, false);

      // pointer事件(在PC端相当于mouse事件，在移动端相当于touch事件)
      $box.addEventListener('pointerover', pointerHandler, false);
      $box.addEventListener('pointerenter', pointerHandler, false);
      $box.addEventListener('pointerdown', pointerHandler, false);
      $box.addEventListener('pointermove', pointerHandler, false);
      $box.addEventListener('pointerup', pointerHandler, false);
      $box.addEventListener('pointerout', pointerHandler, false);
      $box.addEventListener('pointerleave', pointerHandler, false);

      function mouseHandler(evt) {
        console.log(evt.type);
      }

      function touchHandler(evt) {
        console.log(evt.type);
      }

      function pointerHandler(evt) {
        console.log(evt.type);
      }

    </script>
</body>
</html>
```

#### Pointer事件的event对象

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pointer事件的event对象</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;

            /* touch-action 设置触摸操作时浏览器的默认行为 */
            touch-action: none;
        }
    </style>
</head>

<body style="height: 2000px">
    <div id="box" class="box">
        <img src="./1.jpg" alt="">
    </div>
    <script>
        const $box = document.getElementById('box');
        $box.addEventListener('pointerover', pointerHandler, false);
        $box.addEventListener('pointerenter', pointerHandler, false);
        $box.addEventListener('pointerdown', pointerHandler, false);
        $box.addEventListener('pointermove', pointerHandler, false);
        $box.addEventListener('pointerup', pointerHandler, false);
        $box.addEventListener('pointerout', pointerHandler, false);
        $box.addEventListener('pointerleave', pointerHandler, false);
        $box.addEventListener('pointercancel', pointerHandler, false);

        // 可以在 touch 的事件处理函数中使用 evt.preventDefault() 阻止移动端的默认行为
        // $box.addEventListener('touchstart', startHandler, false);

        // function startHandler(evt) {
        //     evt.preventDefault();
        // }

        function pointerHandler(evt) {

            // 1.event 对象的常用属性
            // pointerId 指针id（唯一标识符）
            // type 事件类型
            // pointerType 指针类型（鼠标/笔/触摸等）
            // target 目标元素
            // screenX/screenY 指针相对于屏幕左边缘的X、Y坐标
            // clientX/clientY 指针相对于可视区域左边缘的X、Y坐标。不包括任何滚动偏移
            // x/y clientX/clientY 的别名
            // pageX/pageY 指针相对于 HTML 文档左边缘的X、Y坐标。包括滚动偏移

            /* PointerEvent {isTrusted: true, pointerId: 2, width: 38.33333206176758,
               height: 38.33333206176758, pressure: 1, …} */
            console.log(evt);
            console.log(evt.pointerId); //5  指针id（唯一标识符）
            console.log(evt.type); // 事件类型 pointerover
            console.log(evt.pointerType); // 指针类型（鼠标/笔/触摸等） touch
            console.log(evt.target);// 目标元素 <div id="box" class="box"></div>
            console.log(evt.screenX, evt.screenY);// 指针相对于屏幕左边缘的X、Y坐标
            console.log(evt.clientX, evt.clientY);// 指针相对于可视区域左边缘的X、Y坐标。不包括任何滚动偏移
            console.log(evt.x, evt.y); // clientX/clientY 的别名
            console.log(evt.pageX, evt.pageY);// 指针相对于 HTML 文档左边缘的X、Y坐标。包括滚动偏移

            // 2.阻止浏览器的默认行为
            // 阻止 scrolling, pinch/zoom, 鼠标事件等默认行为
            // 2.1.Pointer 的事件处理函数中，evt.preventDefault() 阻止的是 PC 端的默认行为（不能阻止 scrolling, pinch/zoom, 鼠标事件等默认行为，可以阻止图片拖动的默认行为）
            // 2.2.1.可以在 touch 的事件处理函数中使用 evt.preventDefault() 阻止移动端的默认行为
            // 2.2.2.touch-action 阻止触摸操作时移动端浏览器的默认行为

            evt.preventDefault();
        }

        $box.addEventListener('mouseover', mouseHandler, false);
        $box.addEventListener('click', mouseHandler, false);

        function mouseHandler(evt) {
            console.log(evt.type);
        }
    </script>

</body>

</html>
```

#### 单指(针)拖拽

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>单指(针)拖拽</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
            touch-action: none;
        }
    </style>
</head>

<body style="height: 2000px">
    <div id="box" class="box"></div>
    <!-- <img src="./1.jpg"id="box" alt=""> -->
    <script>
        // {// 2.仿照 touch 的 Pointer 拖拽（有问题）
        //     const drag = $el => {
        //         // 每次拖拽最开始的触摸点
        //         const startPoint = {};
        //         // 拖拽过程中移动到的点
        //         const movePoint = {};
        //         // 被拖拽元素的当前位置
        //         const curPos = {
        //             x: 0,
        //             y: 0
        //         };

        //         $el.addEventListener('pointerdown', startHandler, false);
        //         $el.addEventListener('pointermove', moveHandler, false);
        //         $el.addEventListener('pointerup', endHandler, false);
        //         $el.addEventListener('pointercancel', endHandler, false);
        //         $el.addEventListener(
        //             'touchstart',
        //             evt => {
        //                 evt.preventDefault();
        //             },
        //             false
        //         );

        //         function startHandler(evt) {
        //             startPoint.x = evt.pageX;
        //             startPoint.y = evt.pageY;
        //         }
        //         function moveHandler(evt) {
        //             evt.preventDefault();

        //             movePoint.x = curPos.x + evt.pageX - startPoint.x;
        //             movePoint.y = curPos.y + evt.pageY - startPoint.y;

        //             $el.style.transform = `translate3d(${movePoint.x}px, ${movePoint.y}px, 0)`;
        //         }
        //         function endHandler() {
        //             curPos.x = movePoint.x;
        //             curPos.y = movePoint.y;
        //         }
        //     };
        //     drag(document.getElementById('box'));
        // }


        {    // 3.使用技巧后的 Pointer 拖拽
            const drag = $el => {
                // 每次拖拽最开始的触摸点
                const startPoint = {};
                // 拖拽过程中移动到的点
                const movePoint = {};
                // 被拖拽元素的当前位置
                const curPos = {
                    x: 0,
                    y: 0
                };

                $el.addEventListener('pointerdown', startHandler, false);
                
                // 阻止移动端浏览器的默认行为
                // $el.addEventListener(
                //     'touchstart',
                //     evt => {
                //         evt.preventDefault();
                //     },
                //     false
                // );

                function startHandler(evt) {
                    startPoint.x = evt.pageX;
                    startPoint.y = evt.pageY;
                    document.addEventListener('pointermove', moveHandler, false);
                    document.addEventListener('pointerup', endHandler, false);
                    document.addEventListener('pointercancel', endHandler, false);

                }

                function moveHandler(evt) {
                    // 阻止PC端浏览器的默认行为
                    evt.preventDefault();

                    movePoint.x = curPos.x + evt.pageX - startPoint.x;
                    movePoint.y = curPos.y + evt.pageY - startPoint.y;

                    $el.style.transform = `translate3d(${movePoint.x}px, ${movePoint.y}px, 0)`;
                }

                function endHandler() {
                    curPos.x = movePoint.x;
                    curPos.y = movePoint.y;
                    document.removeEventListener('pointermove', moveHandler, false);
                    document.removeEventListener('pointerup', endHandler, false);
                    document.removeEventListener('pointercancel', endHandler, false);

                }
            };
            drag(document.getElementById('box'));
        }


    </script>
</body>

</html>
```



#### 手势模拟

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>手势模拟</title>
    <style>
      img {
        width: 100%;
      }
      .box {
        width: 200px;
        height: 200px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <img id="gesture" src="./gesture.png" alt="移动端手势" />

    <!-- <div id="box" class="box"></div> -->

    <!-- 思路分析
    1、第零步：设置存储变量值的对象，以及判定标准
    2、第一步：设置目标元素的touchstart监听事件，并阻止其PC和移动端的默认事件，还有设置超出的目标元素的监听事件
    3、第二步：判断是否是扫动手势（判断标准是否符合） => 判断扫动方向 => 分情况设置扫动方向结果
    4、第三步：输出对应结果
    -->
    <script>
      // 1.滑（扫）动手势
      function swipe($el, cb) {
        // 最开始的触摸点
        const start = {};
        // 时间和距离阈值
        const threshold = {
          time: 500,
          distance: 100
        };

        $el.addEventListener('pointerdown', startHandler, false);
        // 阻止移动端默认行为
        $el.addEventListener(
          'touchstart',
          evt => {
            evt.preventDefault();
          },
          false
        );

        function startHandler(evt) {
          
          // 阻止 PC 端默认行为
          evt.preventDefault();

          start.time = new Date().getTime();
          start.x = evt.pageX;
          start.y = evt.pageY;

          document.addEventListener('pointerup', endHandler, false);
          document.addEventListener('pointercancel', endHandler, false);
        }
        
        function endHandler(evt) {
          const delta = {};
          let direction = '';

          delta.time = new Date().getTime() - start.time;
          delta.x = evt.pageX - start.x;
          delta.y = evt.pageY - start.y;

          // 判断是否是扫动手势
          if (
            delta.time > threshold.time ||
            (Math.abs(delta.x) < threshold.distance &&
              Math.abs(delta.y) < threshold.distance)
          ) {
            // 扫太慢或扫的距离太短，不是扫动手势
            return;
          } else {
            // 判断扫动方向
            if (Math.abs(delta.x) >= Math.abs(delta.y)) {
              // 左右扫动
              if (delta.x > 0) {
                // 右扫
                direction = 'right';
              } else {
                // 左扫
                direction = 'left';
              }
            } else {
              // 上下扫动
              if (delta.y > 0) {
                // 下扫
                direction = 'down';
              } else {
                // 上扫
                direction = 'up';
              }
            }

            cb.call($el, direction);
          }

          document.removeEventListener('pointerup', endHandler, false);
          document.removeEventListener('pointercancel', endHandler, false);
        }
      }

      // swipe(document.getElementById('box'), function (direction) {
      //   // console.log(this);
      //   console.log(direction);
      // });

      swipe(document.getElementById('gesture'), function (direction) {
        // console.log(this);
        console.log(direction);
      });

      // 作业：使用 touch 事件模拟扫动手势

      // 2.手势库 Hammer.js
      // https://hammerjs.github.io/
    </script>
  </body>
</html>

```

#### 使用 touch 事件模拟扫动手势

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <!-- <div class="box" id="box"></div> -->
    <img src="./gesture.png"  id ="box"alt="">
    <script>
        function swipe($el, cb) {
            const start = {};
            //滑动判断标准
            const threshold = {
                time: 500,
                distance: 100
            };

            $el.addEventListener('pointerdown', startHandler, false);
            // 阻止移动端的默认事件，阻止 scrolling, pinch/zoom, 鼠标事件等默认行为
            $el.addEventListener('touchstart', evt=>{evt.preventDefault()}, false);
            
            function startHandler(evt) {
                // Pointer 的事件处理函数中，evt.preventDefault() 阻止的是 PC 端的默认行为（不能阻止 scrolling, pinch/zoom, 鼠标事件等默认行为，可以阻止图片拖动的默认行为）
                evt.preventDefault();
                //获得起始时间点以及坐标
                start.time = new Date().getTime();
                start.x = evt.pageX;
                start.y = evt.pageY;
                document.addEventListener('pointerup', endHandler, false);
                document.addEventListener('pointercancel', endHandler, false);
            }

            function endHandler(evt) {
                //存储差值用来判断是否匹配标准
                const delta = {};
                let direction = '';
                delta.time = new Date().getTime() - start.time;
                delta.x = evt.pageX - start.x;
                delta.y = evt.pageY - start.y;

                //判断是否是扫动手势
                if (delta.time > threshold.time ||
                    (Math.abs(delta.x) > threshold.x && Math.abs(delta.y) > delta.y)) {
                    return;
                } else {
                    //判断 方向
                    if (Math.abs(delta.x) >= Math.abs(delta.y)) {
                        if (delta.x > 0) {
                            direction = 'right';
                        } else {
                            direction = 'left';
                        }
                    } else {
                        if (delta.y > 0) {
                            direction = 'down';
                        } else {
                            direction = 'up';
                        }
                    }
                }
                cb.call($el, direction);
            }
            document.removeEventListener('pointerup', endHandler, false);
            document.removeEventListener('pointercancel', endHandler, false);

        }

        swipe(document.getElementById('box'), function (direction) {
            console.log(direction);
        })
    </script>
</body>

</html>
```







## 8、移动端web开发常见问题

### 1px 边框

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>1px 边框</title>
    <style>
      body {
        background-color: #f5f5f5;
      }

      .list {
        padding: 0;
        margin: 0;
        font-size: 30px;
      }
      .item {
        list-style: none;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
      }
      
      /* 直接设置“细”边框 */
      .item1 {
        border-width: 0.5px;
      }

      /* 伪类 + transform */
      @media (-webkit-min-device-pixel-ratio: 2) {
        .border-1px {
          position: relative;
          border: none;
        }
        .border-1px::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          /* 设置相应边框 */
          border-bottom: 1px solid #ccc;
          /* border: 1px solid #ccc; */
          /* 设置圆角 */
          /* border-radius: 20px; */
          transform-origin: 0 0;
          transform: scale(0.5);

          /* background-color: rgba(255, 0, 0, 0.5); */
        }
      }
      @media (-webkit-min-device-pixel-ratio: 3) {
        .border-1px::after {
          width: 300%;
          height: 300%;
          transform: scale(0.3333);
        }
      }
    </style>
  </head>
  <body>
    <ul class="list">
      <li class="item">“变粗”的 1px 边框</li>
      <!-- <li class="item">变粗的原因</li>
      <li class="item">解决方案</li> -->
      <li class="item item1">直接设置“细”边框</li>
      <li class="item border-1px">伪类 + transform</li>
    </ul>

    <script>
      // 1.高清屏下，1px 边框“变粗”的原因
      // 并不是真的变粗了，而是设计想要的 1像素，不是程序员眼中的 1CSS像素，而是 1物理像素
      // 如果 dpr=2，设计实际想要的就是 1px/2=0.5px
      // 如果 dpr=3，设计实际想要的就是 1px/3=0.3333px

      // 2.解决方案
      // 2.1.和设计商量，如果不在意这个问题，不用去管

      // 2.2.直接设置“细”边框
      // 存在兼容性问题，不同的浏览器会有不同的表现
      // 对于 iOS8 以后的 iOS 系统推荐使用这种方法

      // 2.3.伪类 + transform（推荐）
      // 支持四个边框、颜色、圆角的设置

      // 其他方案可参考：https://www.cnblogs.com/zzsdream/articles/6004933.html
    </script>
  </body>
</html>

```

### click 事件 300ms 延迟

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- viewport中禁止(新的方法) -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1, user-scalable=no"
    />
    <title>click 事件 300ms 延迟</title>
    <style>
      .btn {
        width: 100%;
        height: 300px;
        font-size: 100px;

        /* touch-action: manipulation; */
      }
    </style>
  </head>
  <body>
    <button id="btn" class="btn">提交</button>

    <script src="https://cdn.bootcdn.net/ajax/libs/fastclick/1.0.6/fastclick.min.js"></script>
    <script>
      // 1.移动端 click 事件 300ms 延迟的原因
      // 原因：double-tap to zoom 双击缩放（检测双击）

      // 2.解决方案
      // 2.1.不使用 click 事件，把 click 事件中要处理的放到 touchstart 或 touchend 中去处理

      // 2.2.禁止双击缩放（浏览器厂商的努力）
      // https://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay

      // 2.2.1.viewport 中禁止缩放
      // 2.2.2.touch-action: manipulation;

      // 2.3.使用 Fastclick 库
      // 主要针对老版本浏览器
      // https://github.com/ftlabs/fastclick
      // 代码如下
      if ('addEventListener' in document) {
        document.addEventListener(
          'DOMContentLoaded',
          function () {
            FastClick.attach(document.body);
          },
          false
        );
      }

      const $btn = document.getElementById('btn');
      $btn.addEventListener(
        'touchstart',
        () => {
          console.time('click');
        },
        false
      );
      // $btn.addEventListener(
      //   'touchend',
      //   () => {
      //     console.timeEnd('click');
      //     console.log('提交表单');
      //   },
      //   false
      // );
      $btn.addEventListener(
        'click',
        () => {
          console.timeEnd('click');
          console.log('提交表单');
        },
        false
      );
    </script>
  </body>
</html>
```

### Touch 事件点击穿透

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- 300ms延迟的解决方案 -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1, user-scalable=no"
    />
    <title>Touch 事件点击穿透</title>
    <style>
      .btn {
        width: 100%;
        height: 300px;
        font-size: 100px;
      }
      .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        opacity: 1;
        transition: opacity 0.5s;
      }
    </style>
  </head>
  <body>
    <button id="btn" class="btn">提交</button>
    <div id="mask" class="mask"></div>

    <script>
      // 1.Touch 事件点击穿透的原因
      // 移动端 Touch 事件会立即触发，而 click 事件会延迟一段时间触发

      // 2.解决方案
      // 遮罩层不要立即消失

      // 2.1.延时消失（用户体验不好）
      // 2.2.消失过程中添加动画效果

      const $btn = document.getElementById('btn');
      const $mask = document.getElementById('mask');
      $mask.addEventListener(
        'touchend',
        () => {
          // $mask.style.display = 'none';

          // 2.1.延时消失
          // setTimeout(() => {
          //   $mask.style.display = 'none';
          // }, 200);
           
          // 2.2.消失过程中添加动画效果
          $mask.style.opacity = 0;
        },
        false
      );
      // 因为隐藏之后其实遮罩层还在，所有设置动画结束后真正隐藏元素
      $mask.addEventListener(
        'transitionend',
        () => {
          $mask.style.display = 'none';
        },
        false
      );

      // $mask.addEventListener(
      //   'touchstart',
      //   () => {
      //     console.time('click');
      //   },
      //   false
      // );
      $btn.addEventListener(
        'click',
        () => {
          // console.timeEnd('click');
          console.log('提交表单');
        },
        false
      );
    </script>
  </body>
</html>

```

### 移动端图片

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- 300ms延迟问题 -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1, user-scalable=no"
    />
    <title>移动端图片</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      /* 1.img 图片 */
      /* 一般使用百分比，并且只设置宽度或高度中的一个，不同时设置，让宽高能够等比例缩放，图片不失真 */
      .img-container {
        display: flex;
        justify-content: center;
      }
      img {
        /* 当图片实际宽度小于父容器宽度时，图片会被强行拉伸至与父容器同宽，图片失真 */
        width: 100%;

        /* 当图片实际宽度小于父容器宽度时，图片不会随着父容器宽度的变大而进一步拉伸 */
        /* max-width: 100%; */
      }

      /* 2.背景图片 */
      .bg-container {
        width: 100%;

        /* 2.1.如果高度固定 */
        /* height: 200px; */

        /* 2.2.如果高度不固定 */
        /* 563px 224px */
        /* 和使用 img 标签引入图片的方式类似 */
        /* 相对于宽度的百分比 */
        padding-top: 39.7869%;

        background-color: red;

        /* 小屏幕使用小图片 */
        background: url(./bg.png) no-repeat;

        /* 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见 */
        background-size: cover;
      }

      /* 结合媒询一起使用 */
      /* 大屏幕使用大图片 */
      @media (min-width: 560px) {
        .bg-container {
          background-image: url(./bg_lg.png);
        }
      }
    </style>
  </head>
  <body>
    <!-- 1.img 图片 -->
    <!-- <div class="img-container">
      <img src="img.jpg" alt="" />
    </div> -->

    <!-- 2.背景图片 -->
    <div class="bg-container"></div>
  </body>
</html>

```



### 一些问题

1px边框：需要1物理像素；
    1、设置小数像素边框(IOS8以后)
    2、伪类加transform的方案
click事件300ms：双击、双击缩放导致了事件延迟
    1、把click事件的操作放到touchstart或者touchend事件中进行处理
    2、viewport中设置禁止缩放
    3、touch-action：manipulation;只允许滚动和持续缩放操作
    4、使用Fastclick库(主要针对老版本浏览器)
Touch事件点击穿透：移动端Touch事件会立即触发，而click事件会延迟一段时间触发
    1、设置延时器消失（用户体验不好）
    2、消失过程中添加动画效果
移动端图片：img图片和背景图片
    1、img图标：使用百分比，只设置高度或者宽度，让图片等比例百分比缩放（(max-)width:100%）
    2、背景图片：使用backgroun-size:cover;（缩放背景图片以完全覆盖背景区）
    3、背景图片：利用padding-top + 百分比设置高度，让宽高比保持不变
    4、结合媒体查询一起使用，小屏幕用小的图片，大的用大的图片







## 9、移动Web开发性能优化

### 网络请求过程中的性能优化

#### 网络请求过程中的优化点

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>合并 CSS</title>
  <!-- <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/base.css" />
    <link rel="stylesheet" href="./css/index.css" /> -->
    <!-- 合并成一个？ -->
  <!-- <link rel="stylesheet" href="./css/index.css" /> -->

  <!-- 1.合并后的资源不能过大 -->
  <!-- 2.考虑缓存的问题 -->
  <link rel="stylesheet" href="./css/common.css" />
  <link rel="stylesheet" href="./css/index.css" />
</head>

<body>
  <script>
    /* 1、将多个资源分布在不同域上，减少请求队列的等待时间
        1.1、浏览器为每个域名分配的并发通道有限 chrome  6个
        1.2、多个域意味着更多的DNS查询时间，通常把域名拆分到3-5个比较合适

       2、通过dns-prefetch减少DNS查询时间
        2.1 尝试在请求资源之前解析域名
        <!-- <link rel="dns-prefetch" href="//g.alicdn.com" /> -->
        2.2 仅对跨域域上的DNS查找有效
        2.3 已经解析过的域名不要再添加dns-prefetch

       3、减少HTTP请求数量
       3.1 资源合并(合并CSS文件、JS文件)
        3.1.1.合并后的资源不能过大
        3.1.2.需要考虑缓存的问题
       3.2 内联首屏相关代码(script)
       3.3 使用缓存(浏览器缓存，localstorage等)

       4、减少请求资源的大小
        4.1 资源的压缩(HTML、CSS的压缩以及JS的压缩和混淆)（去掉空格，变量名使用单个字符）
        4.2 开启Gzip压缩
        4.3 减少cookie的体积
    */

  </script>
</body>

</html>
```

#### 页面加载和渲染过程中的优化点

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面加载和渲染过程中的优化点</title>
    <link rel="stylesheet" href="./index.css" />
    <!-- rem 布局 -->
    <!-- <script>
      {
        const docEl = document.documentElement;

        const setHtmlFontSize = () => {
          const viewWidth = docEl.clientWidth;

          docEl.style.fontSize = `${viewWidth / 75}px`;
        };

        setHtmlFontSize();
        window.addEventListener('resize', setHtmlFontSize, false);
      }
    </script> -->
  </head>
  <body>
    <p id="content" class="content">内容</p>
    <div class="box"></div>
    <!-- 
      1、CSS一般在head中引入
      2、JS一般在body末尾引入
      3、减少回流/重布局(Reflow/Relayout)与重绘(Repaint)
        3.1 元素的尺寸、位置、隐藏等属性改变时，浏览需要重新计算，就称为《回流》
        3.2 元素的外观、风格等属性改变时，浏览器只需要重新绘制，就称为《重绘》
        3.3 回流一定会引起重绘，重绘不一定会引起回流

    -->
    <script src="./index.js"></script>
  </body>
</html>

```



### HTMLCSSJS性能优化

#### 图片优化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>图片优化</title>

    <!--减少HTTP请求数量
          使用CSS画图(动画)代替简单的图片
          合并小图标(CSS Sprites)
          将小图标内嵌到HTML中
        减少请求资源的大小
          使用图标字体代替简单的图标
          压缩图片
          选择合适的图片大小
          选择合适的图片类型
            jpg
             有损压缩，压缩率高，不支持透明
             适用于色彩丰富，渐变色且不需要透明图片的场景
            png
             png-8 支持256色 + 透明
             png-24 支持2的24方色 + 不支持透明
             png-32支持2的24方色 + 支持透明
             使用大部分需要透明图片的场景
            webp
             与png、jpg相比，相同视觉体验下，图像更小
             支持有损压缩、无损压缩、透明和动画
             理论上完全可以替代png、jpg、gif等图片格式
             可能存在一定的兼容性问题
    -->

    <style>
      /* CSS 画图 */
      /* https://www.webhek.com/post/40-css-shapes.html */
      /* 下拉图标 */
      .triangle-down {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 100px solid #ccc;
      }

      /* CSS3 loading */
      .loading {
        width: 80px;
        height: 40px;
        margin: 0 auto;
        margin-top: 100px;
      }
      .loading span {
        display: inline-block;
        width: 8px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        animation: load 1s ease infinite;
      }
      @keyframes load {
        0%,
        100% {
          height: 40px;
          background: lightgreen;
        }
        50% {
          height: 70px;
          margin: -15px 0;
          background: lightblue;
        }
      }
      .loading span:nth-child(2) {
        animation-delay: 0.2s;
      }
      .loading span:nth-child(3) {
        animation-delay: 0.4s;
      }
      .loading span:nth-child(4) {
        animation-delay: 0.6s;
      }
      .loading span:nth-child(5) {
        animation-delay: 0.8s;
      }
    </style>
  </head>
  <body>
    <!-- 下拉图标 -->
    <span class="triangle-down"></span>

    <!-- CSS3 loading -->
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </body>
</html>

```

##### 移动端图片

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1, user-scalable=no"
    />
    <title>移动端图片</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bg-container {
        width: 100%;
        padding-top: 39.7333%;

        /* 小屏幕使用小图片 */
        background: url(./bg.png) no-repeat;

        /* 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见 */
        background-size: cover;
      }

      /* 大屏幕使用大图片 */
      @media (min-width: 560px) {
        .bg-container {
          background-image: url(./bg_lg.png);
        }
      }
    </style>
  </head>
  <body>
    <div class="bg-container"></div>
  </body>
</html>
```

#### 动画优化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>动画优化</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
        /* transition: opacity 0.5s; */
      }
    </style>
  </head>
  <body>
    <div id="mask" class="mask"></div>

    <!-- 
      优先使用CSS3过渡和动画
      优先使用translate3d运动
      必须使用JS做动画时，使用requestAnimationFrame
    -->
    
    <script>
      // requestAnimationFrame
      // 和 setTimeout 类似
      const $mask = document.getElementById('mask');

      $mask.addEventListener(
        'click',
        function () {
          // setTimeout(fadeOut, 20);
          requestAnimationFrame(fadeOut);
        },
        false
      );

      let opacity = 1;
      function fadeOut() {
        opacity -= 0.05;

        if (opacity <= 0) {
          opacity = 0;
          $mask.style.display = 'none';
        } else {
          //浏览器自己决定  
          requestAnimationFrame(fadeOut);
        }

        $mask.style.opacity = opacity;
      }

      // $mask.addEventListener(
      //   'click',
      //   function () {
      //     $mask.style.opacity = 0;
      //   },
      //   false
      // );
      // $mask.addEventListener(
      //   'transitionend',
      //   function () {
      //     $mask.style.display = 'none';
      //   },
      //   false
      // );
    </script>
  </body>
</html>
```



#### CSS 优化

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS 优化</title>
  <style>
    /* 1.选择器优化 */
    /* 1.1.不要使用嵌套过多过于复杂的选择器，可以通过样式直接选择 */
    /* 1.2.保持简单，不要画蛇添足 */

    ul li a {
      text-decoration: none;
    }

    ul.list li.list-item a.list-link {
      text-decoration: none;
    }

    .list-link {
      text-decoration: none;
    }

    /* 1.3.避免过多的通配符选择器 */
    /* 少量完全可以 */
    * {
      padding: 0;
      margin: 0;
    }

    /* 1.4.移除无匹配的样式 */
    .list {}

    /* 2.其他优化 */
    /* 2.1.提取公用部分 */
    ul,
    ol,
    p {
      padding: 0;
      margin: 0;
    }

    /* ol {
      padding: 0;
      margin: 0;
    }

    p {
      padding: 0;
      margin: 0;
    } */

    /* 2.2.避免使用 CSS @import 导入 CSS */
    /* 会发送多余的 HTTP 请求 */
    /* 除了less sass 预处理源 */
    @import './reset.css';
    
  </style>
</head>

<body>
  <ul class="list">
    <li class="list-item">
      <a href="###" class="list-link">HTML</a>
    </li>
    <li>
      <a href="###">CSS</a>
    </li>
  </ul>
</body>

</html>
```

#### DOM 优化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM 优化</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid #ccc;
        text-align: center;
      }

      .box {
        width: 200px;
        height: 200px;
        background-color: red;
      }
      .active {
        width: 100px;
        height: 100px;
        background-color: yellow;
      }

      * {
        box-sizing: border-box;
      }
      body {
        background-color: #f5f5f5;
      }

      .list {
        padding: 0;
        margin: 0;
      }
      .item {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 10px;

        background-color: #fff;

        font-size: 40px;
      }

      .backtop {
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 90px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        color: #fff;
        font-size: 60px;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
      }
      .none {
        display: none;
      }
    </style>
  </head>
  <body style="height: 2000px">
    <a href="#" id="backtop" class="backtop">&uarr;</a>

    <ul class="list" id="list">
      <!-- <li class="item">洗衣服</li>
      <li class="item">做饭</li>
      <li class="item">写代码</li> -->
    </ul>

    <ul class="list">
      <li class="item">1</li>
      <li class="item">2</li>
      <li class="item">3</li>
    </ul>

    <div id="box" class="box"></div>

    <table>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
      </tr>
      <tr>
        <td>张三</td>
        <td>18</td>
        <td>男</td>
      </tr>
      <tr>
        <td>李四</td>
        <td>20</td>
        <td>女</td>
      </tr>
    </table>

    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      // 1.渲染优化
      // 1.1.减少 DOM 元素数量和嵌套层级
      // 1.2.尽量避免使用 table 布局，用其他标签代替
      //   table 是作为一个整体解析的，要等整个表格都解析完成才显示
      //   可能很小的一点改动，也会造成整个 table 的重新布局

      // 2.选择器优化
      // 2.1.优先使用 id 来获取单个元素
      // console.log(document.getElementById('box')); // 推荐
      // console.log(document.querySelector('#box')); // 不推荐

      // 2.2.获取多个元素时，尽量直接通过元素本身的 className 获取
      // console.log(document.querySelectorAll('ul.list li.item')); // 不推荐
      // console.log(document.getElementsByClassName('item')); // 推荐
      // console.log(document.querySelectorAll('.item')); // 推荐

      // 3.减少 DOM 操作次数
      // 3.1.总是将选择器的选择结果缓存起来
      // 3.2.避免在循环中多次使用 innerHTML，在循环结束后使用一次
      // 3.3.使用 DocumentFragment 优化多次的 appendChild
      // 3.4.新创建的元素，完成必要操作后再添加到页面中
      // 3.5.不要直接通过 JS 修改元素的 style，通过添加移除 class 修改元素样式
      // 3.6.注意强制回流
      // 当获取的属性值包括但不限于 offsetTop、offsetLeft、scrollTop、clientTop 这些“全局属性”时，需要此时页面上的其他元素的布局和样式处于最新状态，这会引起多次的回流和重绘。这样的操作称为强制回流
      // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      // 可以将其结果缓存起来，需要更新的时候再更新

      const todoDatas = ['洗衣服', '做饭', '写代码'];

      // // 总是将选择器的选择结果缓存起来
      // const $list = document.getElementById('list');



            // 多次使用innerHTML（不推荐）
      // // for (const item of todoDatas) {
      // //   $list.innerHTML += `<li class="item">${item}</li>`;
      // // }
      
            // 一次性使用innerHTML （推荐）
      //    // 避免在循环中多次使用 innerHTML，在循环结束后使用一次
      // // let html = '';
      // // for (const item of todoDatas) {
      // //   html += `<li class="item">${item}</li>`;
      // // }
      // // $list.innerHTML = html;

         // 创建元素方式（不推荐）
      // for (const item of todoDatas) {
      //   const $li = document.createElement('li');
      //   // 新创建的元素，完成必要操作后再添加到页面中
      //   $li.className = 'item';
      //   $li.innerHTML = item;
      //   $list.appendChild($li);
      // }


         // 使用 DocumentFragment 优化多次的 appendChild（推荐）
      // const $liFragment = document.createDocumentFragment();
      // for (const item of todoDatas) {
      //   const $li = document.createElement('li');
      //   $li.className = 'item';
      //   $li.innerHTML = item;
      //   $liFragment.appendChild($li);
      // }
      // $list.appendChild($liFragment);
      
              

      // 不要直接通过 JS 修改元素的 style，通过CSS样式添加移除 class 修改元素样式（推荐）
      const $box = document.getElementById('box');
      // let active = false;
      $box.addEventListener(
        'click',
        () => {
          // if (!active) {
          //   active = true;
          //   // $box.style.width = '100px';
          //   // $box.style.height = '100px';
          //   // $box.style.backgroundColor = 'yellow';
          //   $box.classList.add('active');
          // } else {
          //   active = false;
          //   // $box.style.width = '200px';
          //   // $box.style.height = '200px';
          //   // $box.style.backgroundColor = 'red';
          //   $box.classList.remove('active');
          // }
            
          // 简化用toggle就行，不用判断
          $box.classList.toggle('active');
        },
        false
      );

      
      const $backtop = document.getElementById('backtop');
      // 注意强制回流
      let winHeight = window.innerHeight;
      // 当浏览器的窗口大小变化的时候，将浏览器窗口的高度赋值使用减少回流
      window.addEventListener(
        'resize',
        () => {
          winHeight = window.innerHeight;
        },
        false
      );

      window.addEventListener('scroll', scrollHandler, false);
      function scrollHandler() {
        // console.log('scroll');
        if (document.documentElement.scrollTop >= winHeight) {
          $backtop.classList.remove('none');
        } else {
          $backtop.classList.add('none');
        }
      }
    </script>
  </body>
</html>

```

#### 事件代理

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件代理</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        background-color: #f5f5f5;
      }
      .input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        font-size: 20px;
      }
      .list {
        padding: 0;
        margin: 0;
      }
      .item {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 10px;
        background-color: #fff;
        font-size: 40px;
      }
      .underline {
	    text-decoration: line-through !important;
	  }
      .del {
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <input type="text" id="input" class="input" placeholder="请输入待办事项" />
    <ul class="list" id="list">
      <li class="item">洗衣服<a href="javascript:;" class="del">x</a></li>
      <li class="item">做饭<a href="javascript:;" class="del">x</a></li>
      <li class="item">写代码<a href="javascript:;" class="del">x</a></li>
    </ul>

    <script>
      // 1.什么是事件代理（利用事件冒泡）
      // 也叫事件委托，把原本在子元素上监听的事件委托给父元素，让父元素监听

      // 2.事件代理的实现
      const $input = document.getElementById('input');
      const $list = document.getElementById('list');

      // 原理：冒泡
      $list.addEventListener(
        'click',
        evt => {
          // console.log('click');
          // console.log(evt.target);
          // 判断点击是否是a标签
          if (evt.target.classList.contains('del')) {
            // 移除的是li标签
            $list.removeChild(evt.target.parentNode);
            // 增加样式
            evt.target.parentNode.classList.add('underline')
          }
        },
        false
      );

      $input.addEventListener(
        'keypress',
        evt => {
          // console.log(evt);
          if (evt.keyCode === 13) {
            // 回车
            if (!$input.value) return;

            const $item = document.createElement('li');
            const $del = document.createElement('a');
            $item.className = 'item';
            $del.className = 'del';
            $del.href = 'javascript:;';

            $item.innerHTML = $input.value;
            $del.innerHTML = 'x';

            // $del.addEventListener(
            //   'click',
            //   () => {
            //     $list.removeChild($item);
            //   },
            //   false
            // );

            $item.appendChild($del);
            $list.appendChild($item);

            $input.value = '';
          }
        },
        false
      );
    </script>
  </body>
</html>
```

#### 事件稀释★

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>事件稀释</title>
    <style>
      .backtop {
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 90px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        color: #fff;
        font-size: 60px;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
      }
      .none {
        display: none;
      }
    </style>
  </head>
  <body style="height: 2000px">
    <a href="#" id="backtop" class="backtop none">&uarr;</a>

    <script>
      // 1.什么是事件稀释
      // 有些事件在一段时间内会多次触发，事件稀释就是减少这些事件的触发频率
      // 比如 scroll resize mousemove touchmove 等
      // window.addEventListener('scroll', handler, false);
      // window.addEventListener('resize', handler, false);
      // window.addEventListener('mousemove', handler, false);
      // window.addEventListener('touchmove', handler, false);
      // function handler(evt) {
      //   console.log(evt.type);
      // }


      const $backtop = document.getElementById('backtop');
      let winHeight = window.innerHeight;

      // window.addEventListener('scroll', debounce(scrollHandler), false);
      window.addEventListener('scroll', throttle(scrollHandler), false);

      //【扩展】防抖/节流函数中的args和context
      window.addEventListener('scroll',
      // 这里指定scrollHandler中的this为$backtop，参数为winHeight
      debounce(scrollHandler,250,$backtop).bind(null,winHeight)
      ,false);

      function scrollHandler(threshold){
        console.log(this,threshold);
        if (document.documentElement.scrollTop >= threshold) {
          this.classList.remove('none');
        }else{
          this.classList.add('none');
        }
      }

      window.addEventListener(
        'resize',
        debounce(() => {
          winHeight = window.innerHeight;
          console.log(winHeight);
        }),
        false
      );

      function scrollHandler() {
        console.log('scroll');
        if (document.documentElement.scrollTop >= winHeight) {
          $backtop.classList.remove('none');
        } else {
          $backtop.classList.add('none');
        }
      }

      // 2.防抖 debounce
      // 在某个时间期限内，事件处理函数只执行一次
      function debounce(fn, miliseconds = 250, context) {
        let timer = null;
        return function (...args) {
          const self = context || this;
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            fn.apply(self, args);
            timer = null;
          }, miliseconds);
        };
      }

      // 3.节流 throttle
      // 事件处理函数执行一次后，在某个时间期限内不再工作
      function throttle(fn, miliseconds = 250, context) {
        let lastEventTimestamp = null;
        return function (...args) {
          const self = context || this;
          const now = Date.now();
          if (!lastEventTimestamp || now - lastEventTimestamp >= miliseconds) {
            lastEventTimestamp = now;
            fn.apply(self, args);
          }
        };
      }
    </script>
  </body>
</html>
```

```js
function debounce(fn, miliseconds = 250, context) {
  let timer = null
  return function (...args) {
    const self = context | this
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(self, args)
      timer = null
    }, miliseconds)
  }
}

function throttle(fn, miliseconds = 250, context) {
   let timer = null
   return function (...args){
      if(timer) return
      const self = context | this
      timer = setTimeout(() => {
        fn.apply(self, args)
        timer = null
      }, miliseconds)
   }
}

function throttle(fn, miliseconds = 250, context) {
  let lastEventTimestamp = null
  return function(...args) {
    const self = context | this
    const now = new Date()
    if(!lastEventTimestamp || now - lastEventTimestamp >= miliseconds) {
       lastEventTimestamp = now
       fn.apply(self, args);
    }
  }
}
```



#### 图片懒加载

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>图片懒加载</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      /* .img-container {
      } */
      img {
        width: 100%;
        height: 183px;
      }
    </style>
  </head>
  <body>
    <!-- <div class="img-container"><img src="./images/1.jpg" alt="" /></div>
    <div class="img-container"><img src="./images/2.jpg" alt="" /></div>
    <div class="img-container"><img src="./images/3.jpg" alt="" /></div>
    <div class="img-container"><img src="./images/4.jpg" alt="" /></div> -->

    <div class="img-container">
      <img
        src="./images/loading.gif"
        alt=""
        data-src="./images/1.jpg"
        class="lazyload"
      />
    </div>
    <div class="img-container">
      <img
        src="./images/loading.gif"
        alt=""
        data-src="./images/2.jpg"
        class="lazyload"
      />
    </div>
    <div class="img-container">
      <img
        src="./images/loading.gif"
        alt=""
        data-src="./images/3.jpg"
        class="lazyload"
      />
    </div>
    <div class="img-container">
      <img
        src="./images/loading.gif"
        alt=""
        data-src="./images/4.jpg"
        class="lazyload"
      />
    </div>
    <div class="img-container">
      <img
        src="./images/loading.gif"
        alt=""
        data-src="./images/5.jpg"
        class="lazyload"
      />
    </div>

    <script>
      // 1.什么是图片懒加载
      // 图片懒加载又叫图片延迟（按需）加载
      // 在需要的时候加载图片

      // 2.图片懒加载的实现
      // ★★★图片要设置高度
      const imgs = [...document.querySelectorAll('.lazyload')];
      // console.log(imgs);
      
      lazyload();

      // window.addEventListener('scroll', lazyload, false);
      window.addEventListener('scroll', debounce(lazyload), false);

      // 不适用
      // window.addEventListener('scroll', throttle(lazyload), false);

      // 懒加载
      function lazyload() {
        console.log('lazyload');
        for (let i = 0; i < imgs.length; i++) {
          const $img = imgs[i];
          if (isInVisibleArea($img)) {
            // 老的方法getAttribute('data-src')
            $img.src = $img.dataset.src;
            imgs.splice(i, 1);
            i--;
          }
        }
      }

      // DOM 元素是否在可视区域内
      function isInVisibleArea($el) {
        const rect = $el.getBoundingClientRect();
        // window.innerWidth进行优化
        // 判断是否在可视区域里面
        return (
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          rect.right > 0 &&
          rect.left < window.innerWidth
        );
      }
      
      // 防抖 debounce
      // 在某个时间期限内，事件处理函数只执行一次
      function debounce(fn, miliseconds = 250, context) {
        let timer = null;
        return function (...args) {
          const self = context || this;
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            fn.apply(self, args);
            timer = null;
          }, miliseconds);
        };
      }

      // 节流 throttle
      // 事件处理函数执行一次后，在某个时间期限内不再工作
      function throttle(fn, miliseconds = 250, context) {
        let lastEventTimestamp = null;

        return function (...args) {
          const self = context || this;
          const now = Date.now();

          if (!lastEventTimestamp || now - lastEventTimestamp >= miliseconds) {
            lastEventTimestamp = now;
            fn.apply(self, args);
          }
        };
      }
    </script>
  </body>
</html>
```

#### 图片预加载

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>图片预加载</title>
    <style>
      .img-container {
        display: flex;
        align-items: center;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
      }
      img {
        width: 100%;
      }
      * {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div class="img-container">
      <img src="./images/1.jpg" alt="图片" id="img" />
    </div>

    <script>
      // 1.什么是图片预加载
      // 提前加载将来可能会用到的图片

      // 2.图片预加载的实现
      const imgs = [
        './images/2.jpg',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg'
      ];
      let i = 0;

      const $img = document.getElementById('img');

      // 首先开始加载第一张预加载第二张，结束
      preload(imgs[i])
        .then(data => {
          console.log(data);
        })
        .catch(() => {});

      // 点击切换
      $img.addEventListener(
        'click',
        () => {
          if (i < imgs.length) {
            $img.src = imgs[i];
            i++;
            // 预加载下一张
            if (i < imgs.length) {
              preload(imgs[i]);
            }
          } else {
            console.log('已经是最后一张了！');
          }
        },
        false
      );

      // 预加载
      function preload(src) {
        return new Promise((resolve, reject) => {
          const image = new Image();
          // 一张页面或一幅图像完成加载时触发事件
          image.addEventListener('load', () => resolve(image), false);
          image.addEventListener('error', () => reject, false);

          image.src = src;
        });
      }

    </script>
  </body>
</html>
```

### 一些问题

1、网络请求过程中的优化点有哪些？
2、页面加载和渲染过程中的回流和重绘应该怎么理解？
3、图片优化如何进行压缩？
4、requestAnimationFrame的应用是什么
5、如何减少 DOM 操作次数？  
6、事件代理为什么要给父元素监听？
7、事件稀释中的防抖和节流有什么区别？
8、图片懒加载的核心思想是什么？
9、图片预加载的应用场景有哪些？





## 10、Swiper 触摸滑动插件

### 使用方法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swiper 的使用方法</title>
    <link rel="stylesheet" href="./swiper-bundle.min.css">
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .swiper-container {
        width: 375px;
        height: 300px;
      }
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 80px;
      }
    </style>
  </head>
  <body>
    <div id="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

    <script src="./swiper-bundle.min.js"></script>
    <script>
      // 1.Swiper 的使用流程
      // 1.1.加载 Swiper 文件
      // 加载 swiper-bundle.min.js 和 swiper-bundle.min.css 文件

      // 1.2.完成 Swiper 的 HTML 结构和 CSS 样式

      // 1.3.初始化 Swiper
      const mySwiper = new Swiper ('#swiper', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      // 2.版本升级怎么办
      // 一切以官网为准
      // Swiper 官网：https://www.swiper.com.cn
      // Swiper 使用方法：https://www.swiper.com.cn/usage/index.html
      // 各种版本下载地址：https://github.com/nolimits4web/swiper
    </script>
  </body>
</html>

```

### Swiper的常用API

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Swiper 的常用 API</title>
    <link rel="stylesheet" href="./swiper-bundle.min.css" />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .swiper-container {
        width: 375px;
        height: 300px;
      }
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 80px;
      }
    </style>
  </head>
  <body>
    <div id="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

    <button id="btn-prev">上一个</button>
    <button id="btn-next">下一个</button>
    <button class="btn-index" data-index="0">1</button>
    <button class="btn-index" data-index="1">2</button>
    <button class="btn-index" data-index="2">3</button>

    <script src="./swiper-bundle.min.js"></script>
    <script>
      // 1.Swiper 初始化
      // 用于初始化一个 Swiper，返回初始化后的 Swiper 实例
      // const swiperInstance = new Swiper(swiperContainer, parameters);

      // 2.基础配置
      // initialSlide 设定初始化时 slide 的索引
      // direction 滑动方向
      // speed 切换速度
      // effect 切换效果，默认为位移切换
      // grabCursor 设置为 true 时，鼠标覆盖 Swiper 时指针会变成手掌形状
      // slidesPerView 设置 slider 容器能够同时显示的 slide 数量
      // freeMode 设置为 true 则变为 free 模式，slide 会根据惯性滑动可能不止一格且不会贴合（滑动菜单）
      // loop 会在原本 slide 前后复制若干个(默认一个) slide，并在合适的时候切换，让 Swiper 看起来是循环的
      // on 注册事件

      // 3.事件
      // init 初始化后执行
      // slideChangeTransitionStart 从当前 slide 开始过渡到另一个 slide 时执行
      // slideChangeTransitionEnd 从一个 slide 过渡到另一个 slide 结束时执行

      // 4.属性
      // activeIndex 返回当前 slide 的索引
      // previousIndex 返回上一个 slide 的索引，切换前的索引
      // width/height 获取 swiper 容器的宽/高

      // 5.方法
      // slideNext()/slidePrev() 切换到下/上一个滑块
      // slideTo() 控制 Swiper 切换到指定 slide

      // 6.控制
      // autoplay 自动切换
      // pagination 使用分页器导航
      // navigation 使用前进后退按钮来控制 Swiper 切换
      // scrollbar 为 Swiper 增加滚动条
      // keyboard 开启键盘来控制 Swiper 切换
      // mousewheel 开启鼠标滚轮控制 Swiper 切换

      const mySwiper = new Swiper('#swiper', {
        initialSlide: 0,
        direction: 'horizontal', // 默认，水平切换
        // direction: 'vertical' // 垂直切换
        speed: 300, // 默认，300
        // effect: 'slide', // 默认，位移切换
        // effect: 'fade', // 淡入
        // fadeEffect: {
        //   crossFade: true
        // },
        // effect: 'cube' // 方块
        // effect: 'coverflow' // 3d流
        // effect: 'flip' // 3d翻转
        grabCursor: true,
        // slidesPerView: 2
        // freeMode: true
        // loop: true,
        on: {
          init: function (swiper) {
            // console.log(this === swiper);
            // console.log('init');
            // console.log(this);
            console.log(this.activeIndex);
            console.log(this.previousIndex);
            console.log(this.width, this.height);
          },
          slideChangeTransitionStart: function (swiper) {
            // console.log(this === swiper);
            // console.log('slideChangeTransitionStart');
            console.log(this.activeIndex);
            console.log(this.previousIndex);
          },
          slideChangeTransitionEnd: function (swiper) {
            // console.log(this === swiper);
            // console.log('slideChangeTransitionEnd');
          }
        },

        // autoplay: true,
        // autoplay: {
        //   delay: 1000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // }

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize: 30
        },

        keyboard: true,
        mousewheel: true
      });

      const $prevBtn = document.getElementById('btn-prev');
      const $nextBtn = document.getElementById('btn-next');

      $prevBtn.addEventListener(
        'click',
        () => {
          mySwiper.slidePrev();
        },
        false
      );
      $nextBtn.addEventListener(
        'click',
        () => {
          mySwiper.slideNext();
        },
        false
      );

      const $indexBtns = document.querySelectorAll('.btn-index');

      for (const $el of $indexBtns) {
        $el.addEventListener(
          'click',
          () => {
            mySwiper.slideTo($el.dataset.index);
          },
          false
        );
      }
    </script>
  </body>
</html>

```

### Tab 切换

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tab 切换</title>
    <link rel="stylesheet" href="./swiper-bundle.min.css" />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }
      a {
        text-decoration: none;
        color: #333;
      }
      a:hover {
        color: #409eff;
      }
      li {
        list-style: none;
      }
      body {
        padding: 24px;
      }
      .tab-header {
        display: flex;
        justify-content: space-between;
        line-height: 30px;
      }
      .tab-label-active {
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }
      .tab-item {
        line-height: 40px;
        border-bottom: 1px solid #ebebeb;
      }
    </style>
  </head>
  <body>
    <div id="tab-header" class="tab-header">
      <a href="javascript:;" class="tab-label tab-label-active" data-index="0">在线演示</a>
      <a href="javascript:;" class="tab-label" data-index="1">中文教程</a>
      <a href="javascript:;" class="tab-label" data-index="2">获取 Swiper</a>
    </div>
    <div id="tab-content" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li class="tab-item">Swiper 基础演示</li>
            <li class="tab-item">Swiper 精彩应用（移动）</li>
            <li class="tab-item">Swiper 精彩应用（PC）</li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li class="tab-item">Swiper 使用方法</li>
            <li class="tab-item">Swiper Animate 使用方法</li>
            <li class="tab-item">Swiper 与 DOM</li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li class="tab-item">下载 Swiper</li>
            <li class="tab-item">Swiper CDN 地址</li>
          </ul>
        </div>
      </div>
    </div>

    <script src="./swiper-bundle.min.js"></script>
    <script>
      const $tabHeader = document.getElementById('tab-header');
      const $tabLabels = $tabHeader.querySelectorAll('.tab-label');

      const tableSwiper = new Swiper('#tab-content',{
        // loop:true,
        on:{
          // 切换的时候触发事件并同时改变其CSS样式
          slideChangeTransitionStart(){
            console.log(this.activeIndex);
            // 遍历所有的子元素移除激活样式
            for (const $el of $tabLabels) {
              $el.classList.remove('tab-label-active');
            }
            // 给当前的slide激活样式
            $tabLabels[this.activeIndex].classList.add('tab-label-active');
          }
        }
      })
      $tabHeader.addEventListener('click',
        evt=>{
        console.log(evt.target);
        const $el = evt.target;
        // 获取data-index属性做为需要跳转的index，自动激活样式
        tableSwiper.slideTo($el.dataset.index);
      },false);
      

    </script>
  </body>
</html>

```

### 页面滑动切换

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面滑动切换</title>
    <link rel="stylesheet" href="./swiper-bundle.min.css" />
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .swiper-container {
        width: 100vw;
        height: 100vh;
      }
      .swiper-slide {
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
      }
      .logistics-slide {
        background-color: #57cfe1;
      }
      .purchase-slide {
        background-color: #fe8e34;
      }
      .logistics-text,
      .purchase-text {
        position: absolute;
        width: 214px;
        opacity: 0;
        transition: all 1s 0.5s;
      }
      .logistics-text-active,
      .purchase-text-active {
        opacity: 1;
      }
      .logistics-text {
        top: 50px;
      }
      .purchase-text {
        bottom: 40px;
      }
      .logistics-phone,
      .logistics-person,
      .purchase-phone,
      .purchase-person {
        position: absolute;
        width: 180px;
        transition: all 0.5s;
      }
      .logistics-phone {
        bottom: 0;
        transform: translate3d(-1000px, 0, 0);
      }
      .logistics-phone-active {
        transform: translate3d(-70px, 0, 0);
      }
      .logistics-person {
        bottom: 0;
        transform: translate3d(1000px, 0, 0);
      }
      .logistics-person-active {
        transform: translate3d(70px, 0, 0);
      }
      .purchase-person {
        top: 50px;
        transform: translate3d(-70px, -1000px, 0);
      }
      .purchase-person-active {
        top: 50px;
        transform: translate3d(-70px, 0, 0);
      }
      .purchase-phone {
        top: 120px;
        transform: translate3d(70px, 1000px, 0);
      }
      .purchase-phone-active {
        top: 120px;
        transform: translate3d(70px, 0, 0);
      }
    </style>
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide logistics-slide">
          <img
            src="./images/logistics-phone.png"
            alt=""
            class="logistics-phone"
            id="logistics-phone"
          />
          <img
            src="./images/logistics-person.png"
            alt=""
            class="logistics-person"
            id="logistics-person"
          />
          <img
            src="./images/logistics-text.png"
            alt=""
            class="logistics-text"
            id="logistics-text"
          />
        </div>
        <div class="swiper-slide purchase-slide">
          <img
            src="./images/purchase-phone.png"
            alt=""
            class="purchase-phone"
            id="purchase-phone"
          />
          <img
            src="./images/purchase-person.png"
            alt=""
            class="purchase-person"
            id="purchase-person"
          />
          <img
            src="./images/purchase-text.png"
            alt=""
            class="purchase-text"
            id="purchase-text"
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <script src="./swiper-bundle.min.js"></script>
    <script>
      const ids = [
        ['logistics-phone', 'logistics-person', 'logistics-text'],
        ['purchase-phone', 'purchase-person', 'purchase-text']
      ];

      new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        mousewheel: true,

        on: {
          init() {
            // 在初始化时触发一次 slideChangeTransitionEnd 事件
            this.emit('slideChangeTransitionEnd');
          },
          slideChangeTransitionEnd() {
            // console.log(this.activeIndex);
            for (const id of ids[this.activeIndex]) {
              const $el = document.getElementById(id);
              $el.classList.add(`${id}-active`);
            }

            if (typeof this.previousIndex !== 'undefined') {
              for (const id of ids[this.previousIndex]) {
                const $el = document.getElementById(id);
                $el.classList.remove(`${id}-active`);
              }
            }
          }
        }
      });
    </script>
  </body>
</html>
```

### 一些问题

1、使用Swiper需要加载什么文件？在哪里加载？
2、Swiper的常用API有哪些？
3、Swiper如何进行版本升级？
