# UML

## 介绍
UML - Unified Modeling Language - 统一建模语言。
软件工程（不仅是编程）中的任何设计都可以用它来表述，包含：
- 类图
- 用例图
- 对象图
- 顺序图
- 协作图
- 状态图
- 活动图
- 组件图
- 配置图

## UML类图的作用
- 需求指导设计，设计指导开发
- 开发之前，写技术方案设计文档，并评审。
- UML类图就是一个重要的工具和表达方式。如果你和同事都熟悉UML类图，那会减少很多沟通成本，不用看代码就可以知道你的代码结构，核心属性和方法。

## 工具
- [processon](https://www.processon.com)
- MS Visio
- [drow.io](https://drawio-app.com/)👍

## 单个类
三个区域
- 类名
- 属性
- 方法
权限描述
- `+` public
- `#` protected
- `-` private

## 类图的几种关系
- 实现 - 实现接口
- 泛化 - 继承
- 关联 - A是B的一个属性
  - 聚合 - 整体包含部分，部分可以脱离整体单独的存在
  - 组合 - 整体包含部分，部分不可脱离整体
  - 依赖 - 不时属性，函数参数、返回值

> ❗聚合、组合、依赖，**都属于关联关系**，更加细化了。

### 实现接口
> TS的interface和Java的不一样，TS有属性，而Java的没有属性。而UML类图是依据Java语法而画的（没有属性区域），也合并到一个区域了。

[interface](./assets/drowio/interface.drawio ':include :type=code')


### 泛化-继承父类

[extends](./assets/drowio/extends.drawio ':include :type=code')


### 关联
分类
- 单项关联（最常见）
- 双向关联
- 自关联

[Association](./assets/drowio/Association.drawio ':include :type=code')

### 聚合
整体包含部分，部分可以脱离整体单独存在

[Aggregation](./assets/drowio/Aggregation.drawio ':include :type=code')

### 组合
整体包含部分,部分**不可**脱离整体

[Composition](./assets/drowio/Composition.drawio ':include :type=code')

### 依赖
不是属性，函数参数、返回值

[Dependency](./assets/drowio/Dependency.drawio ':include :type=code')


## 总结
UML类图的作用
- 单个类
- 类之间的关系
- 关联关系的细分，不必过于较真

[AADEI](./assets/drowio/AADEI.drawio ':include :type=code')