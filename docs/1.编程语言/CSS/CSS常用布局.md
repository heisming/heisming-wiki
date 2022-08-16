# csCSS常用布局

## 1、水平布局

###  第一种

   优点：浏览器兼容比较好
   缺点：text-align具有继承性（子元素自定义其属性覆盖）

```html
<div class="parent1">
    <div class="child1">第一种</div>
</div>
```

```css
.parent1 {
  height: 100px;
  background-color: red;
  line-height: 100px;
  /* 
    为《文本内容》设置水平对齐方式
    left：左对齐
    right：右对齐
    center：居中对齐
   */
  text-align: center;
}
.child1 {
  width: 100px;
  height: 100px;
  background-color: yellow;
  /*
   display属性：
   block：块级元素
   inline：内联元素（text-align属性有效）
     *width、height、margin属性失效
   inline-block：行内块级元素
   */
  display: inline-block;
}
```



### 第二种

优点：只需要对子元素设置即可
缺点：如果子元素脱离文档流（浮动、绝对定位、固定定位等），导致margin属性的值无效(`display:inline`行内元素属性也会失效)

```html
<div class="parent2">
    <div class="child2">第二种</div>
</div>
```

```css
.parent2 {
  height: 100px;
  background-color: red;
  line-height: 100px;
}
.child2 {
  width: 100px;
  height: 100px;
  background-color: yellow;
  /* display的值为table和block都可以 */
  display: block;
  /* display: table; */
  /* 
    margin: 0 
    margin: auto => 浏览器自动分配
  */
  margin: 0 auto;
  /* text-align: center; */
}
```



### 第三种

优点：无论父元素是否脱离文档流，都不影响子元素水平居中效果
缺点：transform属性是CSS3中新增属性，浏览器支持不好

```html
<div class="parent3">
    <div class="child3">第三种	</div>
</div>
```

```css
.parent3{
  height: 100px;
  background-color: red;
  line-height: 100px;
  /* 开启定位 */
  position: relative; 
}
.child3{
  width: 100px;
  height: 100px;
  background-color: yellow;
  /* 
    把当前元素设置为绝对定位之后
    1、如果父元素没有开启定位的话，当前元素是相对于页面定位的
    2、如果父元素开启定位的话，当前元素是相对于父元素定位的
  */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```



### 第四种

优点：适合移动端布局使用

缺点：兼容性差

```html
<div class="parent4">
    <div class="child4">第四种</div>
</div>
```

```css
/* 第四种 */
.parent4{
  display: flex;
  background-color: red;
  justify-content: center;
}
.child4{
  width: 100px;
  height: 100px;
  background-color: yellow;
}
```



## 2、垂直布局

### 第一种

优点：浏览器兼容比较好
vertical-align具有继承性（子元素自定义其属性覆盖）

```html
<div class="parent1">
    <div class="child1">第一种</div>
</div>
```

```css
.parent1{
  width: 100px;
  height: 300px;
  background-color: red;
  /*display属性：
   *table：设置当前元素为<table>元素效果
   *table-cell：设置当前元素为<td>元素（单元格）效果
   */
  display: table-cell;
  /* 
    vertical-align属性：用于设置文本内容的垂直方向对齐方式
    *top：顶部对齐
    *middle：居中对齐
    *bottom：底部对齐
  */
  vertical-align: middle;
}
.child1{
  width: 100px;
  height: 100px;
  background-color: yellow;
}
```



### 第二种

优点：无论父元素是否脱离文档流，都不影响子元素垂直居中效果
缺点：transform属性是CSS3中新增属性，浏览器支持不好

```html
<div class="parent2">
    <div class="child2">第二种</div>
</div>
```

```css
.parent2{
  margin-top: 20px;
  width: 100px;
  height: 300px;
  background-color: red;
  position: relative;
}
.child2{
  width: 100px;
  height: 100px;
  background-color: yellow;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```



### 第三种

优点：移动端适配好

缺点：兼容性差

```html
<div class="parent3">
    <div class="child3">第三种</div>
</div>
```

```css
/* 第三种 */
.parent3{
  display: flex;
  width: 100px;
  height: 300px;
  align-items: center;
  background-color: red;
}
.child3{
  width: 100px;
  height: 100px;
  background-color: yellow;
}
```



### 第四种

```html
<div class="parent4">
    <div class="child4">第三种</div>
</div>
```

```css
/* 第四种 */
.parent4{
  width: 100px;
  height: 300px;
  background-color: red;
  position: relative;
}
.child4{
  width: 100px;
  height: 100px;
  background-color: yellow;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto 0;
}
```



## 3、水平垂直布局

### 第一种

优点：浏览器兼容比较好
缺点：text-align、vertical-align属性具有继承性（子元素自定义其属性覆盖）
无法设置100%宽度

```html
<div class="parent1">
    <div class="child1">第一种</div>
</div>
```

```css
.parent1{
  width: 1000px;
  height: 300px;
  background-color: red;
  /*display属性：
   *table-cell：设置当前元素为<td>元素（单元格）效果
   */
  display: table-cell; 
  /* 
    vertical-align属性：用于设置文本内容的垂直方向对齐方式
    *top：顶部对齐
    *middle：居中对齐
    *bottom：底部对齐
  */
  vertical-align: middle;
}
.child1{
  width: 100px;
  height: 100px;
  background-color: yellow;
  /*
   display属性：
   *block：块级元素 ★★★推荐（可能会影响其他元素）
   *table：设置当前元素为<table>元素效果，语义化差
   */
  display: block;
  /* margin: auto => 浏览器自动分配*/
  margin: 0 auto;
}
```



### 第二种

优点：无论父元素是否脱离文档流，都不影响子元素垂直居中效果
缺点：transform属性是CSS3中新增属性，浏览器支持不好

```html
<div class="parent2">
    <div class="child2">第二种</div>
</div>
```

```css
.parent2{
    margin-top: 20px;
    height: 300px;
    background-color: red;
    line-height: 100px;
    /*  */
    position: relative;
}
.child2{
    width: 100px;
    height: 100px;
    background-color: yellow;
    /*  */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```



### 第三种

优点：无论父元素是否脱离文档流，都不影响子元素垂直居中效果,兼容性好
缺点：子元素必须设置宽度和高度，必须形成子绝父相

```html
<div class="parent3">
    <div class="child3">第三种</div>
</div>
```

```css
.parent3{
    margin-top: 20px;
    height: 300px;
    background-color: red;
    position: relative;
}
.child3{
    width: 100px;
    height: 100px;
    background-color: yell
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}
```



### 第四种

优点：实现方便，全局水平居中，有继承性
缺点：兼容性差

```html
<div class="parent4">
    <div class="child4">第四种</div>
</div>
```

```css
.parent4{
    margin-top: 20px;
    height: 300px;
    background-color: red;
    /* 弹性布局 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.child4{
    width: 100px;
    height: 100px;
    background-color: yellow;
}
```



### 第五种

```html
<div class="parent5">
    <div class="child5">第五种</div>
</div>
```

```css
.parent5{
    margin-top: 20px;
    height: 300px;
    background-color: red;
    position: relative;
}
.child5{
    width: 100px;
    height: 100px;
    background-color: yellow;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```



## 4、多列布局

### 4.1、两列布局

​	**一列确定宽度，另一列自动填满宽度的布局**



#### 第一种

优点：实现方式简单
缺点：自适应margin属性值与定宽元素的width属性值保持一致
     定宽元素浮动与自适应元素不浮动导致浏览器兼容性不好 

```html
<div class="parent">
    <div class="left">左：定宽</div>
    <div class="right">右：自适应
        <div class="inner">看我的位置</div>
    </div>
</div>
```

```css
.parent{
    margin-bottom: 120px;
    background-color: red;
}
.left{
    width: 100px;
    height: 100px;
    float: left;
    background-color: yellow;
}
.right{
    /* 不设置就会占满父容器 */
    margin-left: 100px;
    height: 100px;
    background-color: blue;
}
.inner{
    height: 100px;
    clear: both;
    background-color: green;
}
```

#### 第一种方案的优化版本 

```html
<div class="parents">
    <div class="lefts">左：定宽</div>
    <div class="right-fix">
        <!-- 右：自适应 父盒子有内容会导致子盒子无法占满父容器 -->
        <div class="rights">
            <!-- 右：自适应 父盒子有内容会导致子盒子无法占满父容器 -->
            <div class="inners">看我的位置,我其实是撑满了整个容器的宽度，但我的位置没有再掉下来了</div>
        </div>
    </div>
</div>
```

```css
.parents{
    height: 100px;
    margin-bottom: 20px;
}
.lefts{
    height: 100px;
    /* 定宽 */
    width: 100px;
    /* 当前元素脱离文档流 */
    float: left;
    /* 设置显示层级更高 */
    position: relative;
    background-color: yellow;
    /* 或者这样-100px */
    /* margin-right: -100px; */
}
.right-fix{
    /* 设置为浮动，导致默认宽度值为0 */
    float: right;
    width: 100%;
    margin-left: -100px;
    background-color: blue;
}
.rights{
    height: 100px;
    background-color: red;
}
.inners{
    background-color: green;
    height: 100px;
    clear: both;
}
```



#### 第二种 

优点：简单易用，第一种缺点全无
缺点：overflow属性不仅解决了两列布局问题，同时设置了内容溢出的情况

```html
<div class="parent2">
    <div class="left2">左：定宽</div>
    <div class="right2">右：自适应</div>
</div>
```

```css
.parent2{
    margin-bottom: 20px;
}
.left2{
    height: 100px;
    /* 定宽 */
    width: 100px;
    background-color: yellow;
    float: left;
}
.right2{
    height: 100px;
    background-color: green;
    /* 开启BFC模式 - 当前元素的内部环境与外界完全隔离
       不开启：right2占满父容器
       开启：right2就自动填满右边了
    */
    overflow: hidden;
}
```



#### 第三种

优点：兼容性好
缺点：将所有元素的display属性设置为table相关值，受到相应制约

```html
<div class="parent3">
    <div class="left3">左：定宽</div>
    <div class="right3">右：自适应</div>
</div>
```

```css
.parent3{
    /* 此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。 */
    display: table;
    /* table-layout 属性用来显示表格单元格、行、列的算法规则。
        automatic	默认。列宽度由单元格内容设定。
        fixed	列宽由表格宽度和列宽度设定。
        inherit	规定应该从父元素继承 table-layout 属性的值。
    */
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
}
.left3{
    height: 100px;
    /* 定宽 */
    width: 100px;
    /* 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
    display: table-cell;
    background-color: yellow;
}
.right3{
    height: 100px;
    /* 此元素会作为一个表格单元格显示（类似 <td> 和 <th>） */
    display: table-cell;
    background-color: green;
}
```



#### 第四种

优点：实现简单
缺点：兼容性差

```html
<div class="parent4">
    <div class="left4">左：定宽</div>
    <div class="right4">右：自适应</div>
</div>
```

```css
.parent4{
    display: flex;
    margin-bottom: 20px;
}
.left4{
    /* 定宽 */
    width: 100px;
    height: 100px;
    background-color: yellow;
}
.right4{
    height: 100px;
    flex: 1;
    background-color: green;
}
```



#### 第五种

```html
<div class="parent5">
    <div class="left5">左：定宽</div>
    <div class="right5">右：自适应</div>
</div>
```

```css
.left5{
    float: left;
    width: 100px;
    height: 100px;
    background-color: yellow;
}
.right5{
    float: right;
    width: calc(100% - 100px);
    height: 100px;
    background-color: green;
}
```





### 4.2、三列布局

​	**其中的两列布局固定宽度，另外一列自动填满**



#### 第一种(类似两列的第一种)

优点：实现方式简单
缺点：自适应margin属性值与定宽元素的width属性值保持一致
     定宽元素浮动与自适应元素不浮动导致浏览器兼容性不好

```html
<div class="parent">
    <div class="left">定宽</div>
    <div class="center">定宽</div>
    <div class="right">自适应</div>
</div>
```

```css
.parent{
    margin-bottom: 20px;
}
.left,
.center,
.right{
    height: 100px;
}
.left{
    width: 100px;
    background-color: red;
    float: left;
}
.center{
    width: 100px;
    background-color: green;
    float: left;
}
.right{
    background-color: blue;
    margin-right: -200px;
}
```



#### 第二种 

优点：简单易用，第一种缺点全无
缺点：overflow属性不仅解决了三列布局问题，同时设置了内容溢出的情况

```html
<div class="parent2">
    <div class="left2">定宽</div>
    <div class="center2">定宽</div>
    <div class="right2">自适应</div>
</div>
```

```css
.parent2{
    margin-bottom: 20px;
}
.left2,
.center2,
.right2{
    height: 100px;
}
.left2{
    width: 100px;
    background-color: red;
    float: left;
}
.center2{
    width: 100px;
    background-color: green;
    float: left;
}
.right2{
    background-color: blue;
    overflow: hidden;
}
```



#### 第三种

优点：兼容性好
缺点：将所有元素的display属性设置为table相关值，受到相应制约

```html
<div class="parent3">
    <div class="left3">定宽</div>
    <div class="center3">定宽</div>
    <div class="right3">自适应</div>
</div>
```

```css
.parent3{
    margin-bottom: 20px;
    /* 此元素会作为块级表格来显示
    display: table;
    /* table-layout 属性用来显示表
        fixed	列宽由表格宽度和列
    */
    table-layout: fixed;
    width: 100%;
}
.left3,
.center3,
.right3{
    /* 此元素会作为一个表格单元格
    display: table-cell;
    height: 100px;
}
.left3{
    width: 100px;
    background-color: red;
}
.center3{
    width: 100px;
    background-color: green;
}
.right3{
    background-color: blue;
}
```



#### 第四种

优点：实现简单
缺点：兼容性差

```html
<div class="parent4">
    <div class="left4">定宽</div>
    <div class="center4">定宽</div>
    <div class="right4">自适应</div>
</div>
```

```css
.parent4{
    display: flex;
    margin-bottom: 20px;
}
.left4,
.center4,
.right4{
    height: 100px;
}
.left4{
    width: 100px;
    background-color: red;
}
.center4{
    width: 100px;
    background-color: green;
}
.right4{
    flex: 1;
    background-color: blue;
}
```





### 4.3、等分布局

 	**一行被分成多列，每一列宽度相同**



#### 第一种

优点:
缺点: 

```html
<div class="parent-fix">
    <div class="parent">
        <div class="col1"><div class="text"></div></div>
        <div class="col2"><div class="text"></div></div>
        <div class="col3"><div class="text"></div></div>
        <div class="col4"><div class="text"></div></div>
    </div>
</div>
```

```css
.parent-fix{
    overflow: hidden;
}
.parent{
    margin-bottom: 20px;
    height: 100px;
    /* 反向拉 */
    margin-left: -10px;
}
.col1,
.col2,
.col3,
.col4{
    float: left;
    width: 25%;
    height: 100px;
    /* 间隙 */
    box-sizing: border-box;
    padding-left: 10px;
}
.text{
    height: 100px;
}
.col1 .text{
    background-color: red;
}
.col2 .text{
    background-color: green;
}
.col3 .text{
    background-color: blue;
}
.col4 .text{
    background-color: hotpink;
}
```



#### 第二种

优点:
缺点: 

```html
<div class="parent-fix2">
    <div class="parent2">
        <div class="col11"><div class="text1"></div></div>
        <div class="col21"><div class="text1"></div></div>
        <div class="col31"><div class="text1"></div></div>
        <div class="col41"><div class="text1"></div></div>
    </div>
</div>
```

```css
.parent-fix2{
    overflow: hidden;
    margin-bottom: 20px;
}
.parent2{
    /* table布局导致 */
    width: calc( 100% + 10px);
    display: table;
    table-layout: fixed;
    margin-left: -10px;
}
.col11,
.col21,
.col31,
.col41{
    height: 100px;
    display: table-cell;
    padding-left: 10px;
    box-sizing: border-box;
}
.text1{
    height: 100px;
}
.col11 .text1{
    background-color: red;
}
.col21 .text1{
    background-color: green;
}
.col31 .text1{
    background-color: blue;
}
.col41 .text1{
    background-color: hotpink;
}
```



#### 第三种

优点：
缺点：

```html
<!-- 第三种 -->
<div class="parent-fix3">
    <div class="parent3">
        <div class="col111"><div class="text2"></div></div>
        <div class="col211"><div class="text2"></div></div>
        <div class="col311"><div class="text2"></div></div>
        <div class="col411"><div class="text2"></div></div>
    </div>
</div>
```

```css
.parent3{
  display: flex;
  margin-left: -10px;
}
.col111,
.col211,
.col311,
.col411{
    flex: 1;
    height: 100px;
    padding-left: 10px;
    box-sizing: border-box;
}
.text2{
    height: 100px;
}
.col111 .text2{
    background-color: red;
}
.col211 .text2{
    background-color: green;
}
.col311 .text2{
    background-color: blue;
}
.col411 .text2{
    background-color: hotpink;
}
```



### 4.4、等高布局

​	就是一行被划分成若干列，每一列的高度都是相同的值



#### 第一种

优点：兼容性好

缺点：

```html
<div class="parent">
    <div class="left">imooc</div>
    <div class="right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet eaque assumenda neque
      repudiandae ad ratione nulla quae quod soluta, debitis tempore aliquid recusandae cupiditate, in maiores
      distinctio obcaecati a?</div>
</div>
```

```css
.parent{
    display: table;
    margin-bottom: 20px;
}
.left,
.right{
    display: table-cell;
    width: 200px;
}
.left{
    background-color: red;
    
}
.right{
    background-color: green;
}
```



#### 第二种

优点：
缺点：视觉效果看的是正常的等高，但实际是伪等高

```html
<div class="parent2">
  <div class="left2">imooc</div>
  <div class="right2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit amet eaque assumenda neque
    repudiandae ad ratione nulla quae quod soluta, debitis tempore aliquid recusandae cupiditate, in maiores
    distinctio obcaecati a?</div>
</div>
```

```css
.parent2{
    /*  */
    overflow: hidden;
    margin-bottom: 20px;
}
.left2,
.right2{
    width: 200px;
    float: left;
    /*  */
    padding-bottom: 9999px;
    margin-bottom: -9999px;
}
.left2{
    background-color: red;
    
}
.right2{
    background-color: green;
}
```



### 4.5、*圣杯布局

 	   头部 
宽度 自适应 定宽
    	底部 

核心=三列布局：100px  ?px  100px

#### 第一种 

优点：兼容好
缺点：不利于搜索引擎抓取内容页面

```html
<!-- 当兄弟元素中，前面的没有浮动（div是块级元素独占一行），后面的浮动了，浮动的元素不允许超过这个元素的 -->
<div class="parent-1">
    <!-- 浮动使它脱离了标准文档流，所以center1就可以站到上面来并排显示了-->
    <div class="left-1">定宽</div>
    <!-- right位置改变了，因为center-1在文档流之中，它独占一行，所以right只能另起一行进行右浮动 -->
    <div class="right-1">定宽</div>
    <!-- center位置改变了 -->
    <div class="center-1">自适应</div>
</div>
<!-- 所以等left-1和right-1都浮动完成后，center-1就可以进入标准文档流来独占第一行了，然后center-1两边在使用margin属性就可以了-->
```

```css
.parent-1{
    margin-bottom: 20px;
}
.left-1,
.center-1,
.right-1{
    height: 100px;
}
.left-1{
    float: left;
    width: 100px;
    background-color: red;
}
.center-1{
    margin-left: 100px;
    margin-right: 100px;
    background-color: green;
}
/* right位置改了 */
.right-1{
    float: right;
    width: 100px;
    background-color: blue;
}
```



#### 第二种

优点：
缺点：

```html
<div class="parent-2">
    <div class="left-2">定宽</div>
    <div class="center-2">自适应</div>
    <div class="right-2">定宽</div>
</div>
```

```css
.parent-2{
    margin-bottom: 20px;
    position: relative;
}
.left-2,
.center-2,
.right-2{
    height: 100px;
}
/* 可以浮动改为position:absolute */
.left-2{
    float: left;
    width: 100px;
    background-color: red;
}
.center-2{
    background-color: green;
}
.right-2{
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: blue;
}
```



#### 第三种

优点：适合SEO优化
缺点：position:relative定位会在老家留坑

```html
<div class="parent-3">
    <!-- center位置变了 -->
    <div class="center-3">定宽</div>
    <div class="left-3">自适应</div>
    <div class="right-3">定宽</div>
</div>
```

```css
.parent-3{
    height: 100px;
    /* 左left右right各100px,给left和right盒子留位置 */
    margin: 0 100px;
    margin-bottom: 20px;
}
.left-3,
.center-3,
.right-3{
    height: 100px;
    float: left;
}
.left-3{
    width: 100px;
    background-color: red;
    /* 因为margin-left: -100%会导致left盒子会向左移动整个父布局的宽度，所以盒子就跑到center左边来了 */
    margin-left: -100%;
    /* 利用相对定位的属性让left盒子向左移动 */
    position: relative;
    left: -100px;
}
.center-3{
    width: 100%;
    /* 因为margin-left: -100px会导致子盒子向左移动100px
    margin-right: -100px会导致右边的盒子向右移动100px
    所以left和right盒子就有了位置排在它的后面
	*/
	/* margin: 0 -100px; */
    background-color: green;
}
.right-3{
    width: 100px;
    background-color: blue;
    /* 因为margin-right: -100px会让center盒子向左移动100px */
    /* margin-right: -100px; */
    /* 因为margin-left: -100px;会让right盒子向左移动100px */
    margin-left: -100px;
    /* 利用相对定位的属性让right盒子向右移动 */
    position: relative;
    right: -100px;
}
```



#### 第四种

优点：实现简单, 移动布局适配好
缺点：兼容性差

```html
<div class="parent-4">
    <div class="left-4">定宽</div>
    <div class="center-4">自适应</div>
    <div class="right-4">定宽</div>
</div>
```

```css
.parent-4{
    margin-bottom: 20px;
    display: flex;
}
.left-4,
.center-4,
.right-4{
    height: 100px;
}
.left-4{
    width: 100px;
    background-color: red;
}
.center-4{
    flex: 1;
    background-color: green;
}
.right-4{
    width: 100px;
    background-color: blue;
}
```





### 4.6、双飞翼布局

​	**优化圣杯布局（开启定位的问题）**

```html
<div id="parent">
    <div id="center">
      <div id="inner">自适应</div>
    </div>
    <div id="left">定宽</div>
    <div id="right">定宽</div>
</div>
```

```css
#parent {
  height: 100px;
}
#left,
#center,
#right {
  height: 100px;
  float: left;
}
#left,
#right {
  width: 100px;
}
#left {
  background-color: red;
  /* 将当前元素从当前行，移动上一行同一个位置 */
  margin-left: -100%;
}
#center {
  /* 为父级元素宽度的100% */
  width: 100%;
  background-color: hotpink;
}
#right {
  background-color: blue;
  margin-left: -100px;
}
#inner {
  height: 100px;
  background-color: green;
  /* 为了让盒子中的文字可以显示，需要将两边空出来 */
  /* 对应的是left元素的宽度 */
  margin-left: 100px;
  /* 对应的是right元素的宽度 */
  margin-right: 100px;
}
```



### 4.7、CSS3多列布局

```html
<div id="parent">
    <div class="col1"></div>
    <div class="col2"></div>
    <div class="col3"></div>
    <div class="col4"></div>
</div>
<div id="parent2">
    <div class="col5"></div>
</div>
<div id="parent3">
    <div class="col6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus aliquid nostrum provident
    est esse necessitatibus mollitia error, tempore voluptate nobis odio alias, ab animi reprehenderit repellat
    perferendis voluptas rerum!</div>
    <div class="col7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quibusdam vel! Provident consequatur
    voluptates quibusdam consectetur architecto! Ut eaque aspernatur quibusdam incidunt nobis ipsam quidem, quod
    ullam, velit officia necessitatibus!
    </div>
    <div class="col8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta officia porro error
    suscipit. Nostrum, deleniti laborum. Sed odit, nemo, ducimus dolores rem reprehenderit soluta ipsam nesciunt id
    unde accusamus.</div>
    <div class="col9">imooc</div>
</div>
```

```css
#parent,
#parent2,
#parent3 {
  /* column-count: 4;
  column-width: 300px; */
  /* 定义列的数量和宽度 */
  columns: 4 300px;
  /* 定义列之间的距离 */
  column-gap: 20px;
  /* column-rule-width: 5px;
  column-rule-color: tomato;
  column-rule-style: double; */
  /* 定义列之间的边框的宽度、颜色、样式 */
  column-rule: 5px tomato double;
}
.col1,
.col2,
.col3,
.col4,
.col5 {
  height: 300px;
}
.col1,
.col6 {
  background-color: hotpink;
}
.col2,
.col7 {
  background-color: lightblue;
}
.col3.col8 {
  background-color: green;
}
.col4,
.col9 {
  background-color: yellow;
}
.col5 {
  background-color: tomato;
  /* 一个列元素是否横跨所有列 */
  column-span: all;
}
.col6,
.col7,
.col8,
.col9 {
  /* 定义列的高度是由内容决定(auto), 还是统一(balance) */
  column-fill: balance;
}
```





## 5、全屏布局

​	**全屏布局就是指HTML页面铺满整个浏览器窗口，并且没有水平和垂直滚动条，而且还可以跟随浏览器得到大小变化而变化**

```html
<header></header>
<section class="content">
    <div class="left"></div>
    <div class="right"></div>
</section>
<footer></footer>
```

```css
html,body{
    margin: 0;
    overflow: hidden;
}
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: red;
}
.content{
    overflow: auto;
    position: absolute;
    top: 100px;
    bottom: 100px;
    left: 0;
    right: 0;
    background-color: blue;
}
.content .left{
    /* 改为position: absolute看看 */
    position: fixed;
    top: 100px;
    bottom: 100px;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: yellow;
}
.content .right{
    margin-left: 200px;
    /* height: 1000px; */
    height: 100%;
    background-color: orange;
    
}
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: green;
}
```

