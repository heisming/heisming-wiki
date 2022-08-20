# Vue
## attribute和property

attribute 是元素标签的属性，property 是元素对象的属性
```html
<input id="input" value="test value"/>
<script>
  let dInput = document.getElementById('input');
  console.log(input.getAttribute("value")); // test value
  console.log(input.value); // test value
</script>
```

## property
[文档](https://v3.cn.vuejs.org/api/instance-properties.html)
属性值的意思

组件实例property
[文档](https://cn.vuejs.org/guide/essentials/application.html#%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B-property)

Data property
[文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#data-property)

## attribute
```html
attribute => :item="item" & v-on:click="handleClick"
<div :item="item" v-on:click="handleClick"></div>
```

特殊的attribute
[文档](https://cn.vuejs.org/api/built-in-special-attributes.html)
