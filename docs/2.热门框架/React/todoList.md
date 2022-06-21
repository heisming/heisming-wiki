# TodoList.js

```jsx
import React from 'react';
import axios from 'axios'
import ListItem from './ListItem'
import './todolist.css';

class App extends React.Component {
  // Initialization
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      list: [],
      title: 'todoList',
      inputValue: ''
    }
    this.onBtnClick = this.onBtnClick.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onInputChange(e) {
    let inputValue = e.target.value
    // ref获取DOM元素
    // let inputValue = this.input.inputValue
      this.setState(() => {
        return {
          inputValue
        }
      })
  }

  onBtnClick() {
    this.setState((prevState) =>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  onDeleteClick(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return <ListItem 
        key={index}
        index={index} 
        content={item} 
        onChildrenClick={index => this.onDeleteClick(index)}/>
        // <li onClick={e => this.onDeleteClick(index)} key={index}>{item}</li>
      })
    )
  }

  // Mounting
  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount() {
    console.log('parent componentWillMount')
  }

  render() {
    console.log('parent render is excute');
    const { title, inputValue} = this.state
    return (
      <div className="App">
        <h1>{title}</h1>
        {/* 这个组件中 value = {this.state.inputValue} 有一些情况是 this.state.childName === undefined 那么这个组件就会变成非受控组件。 */}
        <input 
        value={inputValue} 
        onChange={this.onInputChange}  
        // onKeyUp={e => this.onBtnClick(e)}
        // 获取虚拟DOM（尽量不要操作DOM）
        // ref={(input) => {this.input = input}}
        />
        <button onClick={this.onBtnClick}>Add</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </div>
    );
  }

  // render()

  // Mounting
  // 在组件被挂载到页面之后，自动执行
  componentDidMount() {
    console.log('parent componentDidMount')
    // 一般用来做ajax请求
    axios.get('https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist').then((res) => {
      console.log(res);
      this.setState(() => ({ list: res.data }))
    }).catch(() => {
      alert('error')
    })
  }

  // Updation
  // 组件更新之前，自动执行
  shouldComponentUpdate() {
    console.log('parent shouldComponentUpdate')
    return true || false
  }

  // Updation
  // 组件被更新之前，自动执行，但是它在shouldComponentUpdate之后被执行，如果shouldComponentUpdate返回true就会执行，如果返回false就不会执行
  componentWillUpdate() {
    console.log('parent componentWillUpdate')
  }

  // render()

  // Updation
  // 组件更新完成之后会被自动执行
  componentDidUpdate() {
    console.log('parent componentDidUpdate')
  }

}

export default App;
```

# ListItem.js

```jsx
import React from "react";
import PropTypes from 'prop-types';

class ListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  onnDeleteClick(){
    const { onChildrenClick, index} = this.props
    onChildrenClick(index)
    // this.props.onChildrenClick(this.props.index)
  }

  // 性能优化：父组件的输入框导致的子组件的不断render
  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate');
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  // 当一个组件从父组件接受了参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果组件第一次存在于父组件中，不会执行
  // 如果组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中删除的时候，会自动执行
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  // 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次
  render(){
    console.log('child render');
    const { content, requiredAny } =  this.props
    return (
      // 虚拟DOM
      // JSX => createElement => 虚拟DOM(JS对象) => 真实的DOM
      // React.createElement('div', {}, 'item') // === <div>item</div>
      // React.createElement('div', {}, React.createElement('span', {}, 'item')) // === <div><span>item</span></div>
      <li onClick={e => this.onnDeleteClick(e)}>{requiredAny}-{content}</li>
    )
  }

}

// https://react.docschina.org/docs/typechecking-with-proptypes.html
// 限制父组件传值类型
ListItem.propTypes = {
  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChildrenClick: PropTypes.func,
  index: PropTypes.number
}
// 指定 props 的默认值：
ListItem.defaultProps = {
  requiredAny: 'Stranger'
};  

export default ListItem
```





# CSSTransition

## App.css

```js
/* 手写动画 */
.show{
  /* opacity: 1; */
  /* transition: opacity 1s linear 0.2s; */
  animation: show-item 1s linear 0.2s forwards;
}
.hide{
  /* opacity: 0; */
  /* transition: opacity 1s linear 0.2s; */
  animation: hide-item 1s linear 0.2s forwards;
}

@keyframes hide-item {
  0% {
    opacity: 1;
    color: red;
  }
  50% {
    opacity: .5;
    color: gold;
  }
  100% {
    opacity: 0;
    color: blue;
  }
}
@keyframes show-item {
  0% {
    opacity: 0;
    color: red;
  }
  50% {
    opacity: .5;
    color: gold;
  }
  100% {
    opacity: 1;
    color: blue;
  }
}


/* CSSTransition */
/* 入场动画开始 */
.fade-enter, .fade-appear{
  opacity: 0;
}
/* 入场动画时间 */
.fade-enter-active, .fade-appear-active{
  opacity: 1;
  transition: opacity 1s linear 0s;
}
/* 入场动画结束 */
.fade-enter-done{
  opacity: 1;
}

/* 出场动画开始 */
.fade-exit{
  opacity: 1;
  color: red;
}

/* 出场动画时间 */
.fade-exit-active{
  opacity: 0;
  transition: opacity 1s linear 0s;
}

/* 出场动画结束 */
.fade-exit-done{
  opacity: 0;
}
```

## App.js

```jsx
import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
import './App.css';

class App extends React.Component {
  // Initialization
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      show: true,
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this)
    this.handleAddIem = this.handleAddIem.bind(this)
  }

  handleAddIem(){
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  handleToggole() {
    this.setState((prevState) => ({
      show : this.state.show ? false : true 
    }))
  }
  render() {
    return (
      // 类似template
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  // 样式场景是进还是出
                  in={this.state.show}
                  // 设置动画时长
                  timeout={300}
                  // 设置类名
                  classNames='fade'
                  // DOM被移除，v-if
                  unmountOnExit
                  // 钩子函数，JS改变动画，条件触发自动执行
                  onEntered={ el => { el.style.color = 'blue' }}
                  // 第一次渲染展示的时候也展示动画效果
                  appear={true}>
                    <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddIem}>add</button>
        <CSSTransition
          // 样式场景是进还是出
          in={this.state.show}
          // 设置动画时长
          timeout={300}
          // 设置类名
          classNames='fade'
          // DOM被移除，v-if
          unmountOnExit
          // 钩子函数，JS改变动画，条件触发自动执行
          onEntered={ el => { el.style.color = 'blue' }}
          // 第一次渲染展示的时候也展示动画效果
          appear={true}
        >
          <div>Hello</div>
        </CSSTransition>
        {/* <div className={this.state.show ? 'show' : 'hide'}>Hello</div> */}
        <button onClick={this.handleToggole}>toggole</button>
      </Fragment>
    )
  }

}

export default App;
```





## Redux

将组件中的数据放到一个公用的数据库**Store**中存储

![image-20210918202640042](D:\大前端学习\MarkDown\框架\image\Redux.png)

### Redux = Reducer + Flux

![image-20210918203152774](D:\大前端学习\MarkDown\框架\image\Redux Flow.png)



#### Store

```shell
npm i redux --save
```







### Redux-thunk

中间件

Redux store **仅支持同步数据流。使用** thunk.saga 等中间件可以帮助在 Redux 应用中实现异步性

![image-20210920104854073](D:\大前端学习\MarkDown\框架\image\ReudxDataFlow.png)





### Redux-saga





## Antd

```shell
npm i antd --save
```



