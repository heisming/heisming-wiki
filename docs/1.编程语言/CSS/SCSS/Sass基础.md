# Sass

## 初识

### .sass

```scss
.header
    span
    font-size: 13px;
    &:active
        color: green;
    &:hover
        color: blue;

```

### .scss

```scss
.header{
    span{
    font-size: 12px;
    &:active{
        color: green;
    }
    &:hover{
        color: blue;
    }
}
}
```

**转换后**

```css
.header span {
  font-size: 12px;
}

.header span:active {
  color: green;
}

.header span:hover {
  color: blue;
}
/*# sourceMappingURL=deom.css.map */
```





## 定义变量

```scss
// 变量
$small-font:14px + 3px;
$text-color:#553;
$default-font:'microsoft yahei';

.title{
    color: lighten($text-color,30%);
    font-family: $default-font;
}
.subtitle{
    color: darken($text-color,33%);
}
.text{
    color: $text-color;
    font-size: $small-font;
}
```

转换后

```css
.title {
  color: #acac75;
  font-family: "microsoft yahei";
}

.subtitle {
  color: black;
}

.text {
  color: #553;
  font-size: 17px;
}
/*# sourceMappingURL=demo.css.map */
```



## 媒体查询和Mixin

```scss
@mixin ipad($height) {
    @media screen and (min-width:768px) {
        height: $height;
        @content;
    }
}

.header{
    width: 1000px;
    @include ipad(null){
        width: 500px;
        color: red;
    }
}
```

转换后

```css
.header {
  width: 1000px;
}

@media screen and (min-width: 768px) {
  .header {
    width: 500px;
    color: red;
  }
}
/*# sourceMappingURL=main.css.map */
```



## 嵌套拆分引入

### 变量

#### _content.scss

```scss
.content{
    color: $content-color;
}
```

#### _header.scss

```scss
.header{
    color: $color;
    font-size: $default-font-size;
}
```

#### _viriables.scss

```scss
// 拆分
$color:red;
$content-color:orange;
$default-font-size:12px;
```

#### main.scss

```scss
// 嵌套
div {
    span{
        color: red;
        a{
            color: blue;
        }
    }
}

// 引入
@import 'viriables';
@import 'header';
@import 'content';
```

转换后

```css
div span {
  color: red;
}

div span a {
  color: blue;
}

.header {
  color: red;
  font-size: 12px;
}

.content {
  color: orange;
}
/*# sourceMappingURL=main.css.map */
```



### Mixin

#### _mixin.scss

```scss
@mixin singeline-ellipsis($width) {
    width: $width;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

#### main.scss

```scss
@import 'mixin';
.text{
    @include singeline-ellipsis(1800px);
}
.content{
    display: block;
    @include singeline-ellipsis(null);
}
```

转换后

```css
.text {
  width: 1800px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.content {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*# sourceMappingURL=main.css.map */
```

