# Web端慕云游如何做webpack开发？

## 1、编程思想

### 1.0 搭建项目结构目录和开发环境(看PC端)

![image-20210811175736966](D:\大前端学习\MarkDown\webpack\image-20210811175736966-16286758582972.png)

### 1.1、布局结构

####  1.1.1、将这个页面分为几个layout？

![image-20210811175227282](D:\大前端学习\MarkDown\webpack\image-20210811175227282-16286755488681.png)

### 1.1.2、先将index页面布局放入index.art文件

## 2、问题总结

### 2.1、如何从一个页面传递值到下一个页面？

#### 2.1.1、通过JS代码中的location对象 

```js
window.location.href = `./details.html?id=${id}`;
```

#### 2.1.2、通过li标签的href属性 

```html
<a href="./details.html?id={{$value.id}}"></a>
```

#### 2.1.3、接收属性

```js
const urlStr = location.href;
const id = urlStr.slice(urlStr.indexOf('id=') + 3,urlStr.length);
```

