# Canvas
> [mdn]( https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)
> [掘金](https://juejin.cn/post/7119495608938790942)
## 简介
canvas: 画布, 就是用来画画的
概述：
- Canvas 是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素.
- Canvas API 提供了一个通过JavaScript 和 HTML的Canvas元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
- Canvas API 主要聚焦于2D图形。而同样使用Canvas元素的 WebGL API 则用于绘制硬件加速的2D和3D图形。

## 使用
Canvas 最早是由 Apple 引入 WebKit，用于Mac OS X 的 Dashboard，随后被各个浏览器实现。如今除一些过时的浏览器不支持Canvas元素外，所有的新版本主流浏览器都支持它。
Canvas元素的学习需要具备一些基本的HTML和JavaScript知识。

### 基本用法
下面我们来简单创建一个例子，看看canvas究竟如何使用。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas 基本使用</title>
</head>
<body>
  <canvas width="200" height="200">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</body>
</html>
```
上面代码就是一个基本的使用Canvas标签的例子。可以看到我们为它设置了宽和高，还在 Canvas标签内部给出一个提示文案。在这里需要说明一下：
- Canvas标签的默认大小为：300 x 150 (像素)，而这里咱们设置为了：200 x 200（像素）。
- Canvas标签中的文字是在不支持Canvas标签的浏览器中使用的，因为支持Canvas标签的浏览器会忽略容器中包含的内容正常渲染Canvas标签，而不支持Canvas标签的浏览器则相反，浏览器会忽略容器而显示其中的内容。

可以看一下上面代码在浏览器上的展示样式：


### 渲染上下文
Canvas标签起初只是创造了一个固定大小的画布，它公开了一个或多个渲染上下文，而我们想对它进行绘制就需要找到渲染上下文。

Canvas标签提供了一个方法叫：`getContext()` ，通过它我们可以获得渲染上下文和绘画功能。简单写个例子：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas 基本使用</title>
</head>
<body>
  <canvas id="canvas" width="200" height="200">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
    }
  </script>
</body>
</html>
```
这里需要注意一点，getContext方法是有一个接收参数，它是绘图上下文的类型，可能的参数有：
- 2d：建立一个二维渲染上下文。这种情况可以用 CanvasRenderingContext2D()来替换getContext('2d')。
- webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象。只在实现WebGL 版本1(OpenGL ES 2.0)的浏览器上可用。
- webgl2（或 experimental-webgl2）：创建一个 WebGL2RenderingContext 三维渲染上下文对象。只在实现 WebGL 版本2 (OpenGL ES 3.0)的浏览器上可用。
- bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。

### 绘制形状
在我们获得绘制上下文以后，就可以根据绘制上下文开始绘制一些基本的形状，比如：直线、三角形、矩形、圆弧和圆。接下来咱们具体实现一下。

#### 直线 
绘制直线咱们需要了解三个函数：
moveTo(x, y)
设置初始位置，参数为初始位置x和y的坐标点
lineTo(x, y)
绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点
stroke()
通过线条来绘制图形轮廓
接下里咱们应用上面的三个函数来试着绘制一条直线，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制直线</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一条从起点（x: 50, y:50）到 另一个点（x: 200, y:200）的直线
      ctx.moveTo(50, 50);
      ctx.lineTo(200, 200);
      ctx.stroke();
    }
  </script>
</body>
</html>
```
为了展示的效果好一点，这里我调整了一下画布的大小：500 x 500，还给画布添加了一个阴影和圆角。得到的直线如图：

#### 三角形
知道了如何绘制一条直线，那么绘制三角形也就不难了，咱们只需要画三条直线拼在一起就是一个三角形了，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制三角形</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个三角形
      ctx.moveTo(50, 50);
      ctx.lineTo(200, 200);
      ctx.lineTo(200, 50);
      ctx.lineTo(50, 50);
      ctx.stroke();
    }
  </script>
</body>
</html>
```
具体效果如下：

#### 矩形
知道了三角形的绘制，那么矩形的绘制是不是也用直线来拼凑呢？答案是否定的，矩形虽然可以用四条直线来拼凑成，但那样太复杂了，Canvas API 给提供了三种绘制矩形的方法：

- strokeRect(x, y, width, height) 绘制一个矩形的边框
- fillRect(x, y, width, height) 绘制一个填充的矩形
- clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。

下面我们依次看一下他们有什么异同。
##### strokeRect
strokeRect(x, y, width, height) 是用来绘制一个矩形的边框，x和y 是矩形的起点坐标，width和height 是矩形的宽高。举个例子，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制矩形</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个矩形边框
      ctx.strokeRect(50, 50, 200, 100);
    }
  </script>
</body>
</html>
```
如下图，strokeRect方法绘制的就是一个矩形框：

##### fillRect
fillRect(x, y, width, height) 绘制一个填充的矩形，x和y 是矩形的起点坐标，width和height 是矩形的宽高。举个例子，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制矩形</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个填充矩形
      ctx.fillRect(100, 100, 200, 100);
    }
  </script>
</body>
</html>
```
如下图，fillRect方法实现的是填充了一个矩形：


##### clearRect
clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明，x和y 是矩形的起点坐标，width和height 是矩形的宽高。这里需要结合结合另外两种画法来对比一下，才能看出具体的效果，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制矩形</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个填充矩形
      ctx.fillRect(100, 100, 200, 100);
      ctx.fillRect(50, 50, 200, 100);
      ctx.clearRect(75, 75, 100, 70);
    }
  </script>
</body>
</html>
```
如下图，中间白色的矩形就是被指定清除的区域：

#### 圆弧和圆
绘制圆弧或者圆，使用的方法是：arc(x, y, radius, startAngle, endAngle, anticlockwise)。x和Y为圆心的坐标，radius为半径，startAngle为圆弧或圆的开始位置，endAngle为圆弧或圆的结束位置，anticlockwise是绘制的方向（不写默认为false，从顺时针方向）。
下面画一个半圆弧看看效果，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制圆弧</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一段圆弧
      ctx.arc(60, 60, 50, 0, Math.PI, false);
      ctx.stroke();
    }
  </script>
</body>
</html>
```
效果如下图：


这里需要注意的是：在画弧的时候，arc()函数中角的单位是弧度而不是角度。角度换算为弧度的表达式为：弧度=(Math.PI/180)*角度。

所以想要画一个圆的弧度就是：Math.PI*2，咱们继续画一个圆弧看一下，代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制圆弧</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一段圆弧
      ctx.arc(60, 60, 50, 0, Math.PI, false);
      ctx.stroke();
      // 绘制一个圆弧
      ctx.arc(200, 60, 50, 0, Math.PI*2, false);
      ctx.stroke();
    }
  </script>
</body>
</html>
```
但效果似乎不想我们想象的一样，如下图：


如上图所示，先画的半圆弧和后画的圆弧被连在了一起，其实这是因为在咱们每次新建路径的时候都需要开启和闭合路径，这样不同路径之间才不会相互干扰。下面咱们就来介绍一下如何开启和闭合路径。

##### beginPath
新建一条路径，生成之后，图形绘制命令被指向到路径上。

##### closePath
闭合路径之后图形绘制命令又重新指向到上下文中。 具体怎么使用这两个函数呢？下面咱们介绍一下，直接上代码：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制圆弧</title>
  <style>
    /* 给画布增加一个阴影和圆角的样式 */
    canvas {
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="500">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一段圆弧
      ctx.beginPath() // 开启路径
      ctx.arc(60, 60, 50, 0, Math.PI, false);
      ctx.stroke();
      ctx.closePath() // 闭合路径
      // 绘制一个圆弧
      ctx.beginPath() // 开启路径
      ctx.arc(200, 60, 50, 0, Math.PI*2, false);
      ctx.stroke();
      ctx.closePath() // 闭合路径
    }
  </script>
</body>
</html>
```
如上代码，咱们为每一条路径都设置了开启和闭合。那么看一下效果如何：

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```

```html

```
