# Redux

> 中文网站：http://cn.redux.js.org/     https://www.redux.org.cn/
>
> 英文官网：https://redux.js.org/

![redux](http://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)





```sh
npm i --save redux
```



## 基本Demo:todoList

### /todolist.js

```react
import React from 'react';
import 'antd/dist/antd.css'
import { getInputChangeAction, getAddItemAction, 
        getDelteItemAction, initListAction, getInitList  } from './store/actionCreators';
import store from './store';
import TodoListUI from './TodoListUI';

// 容器组件负责页面的逻辑(聪明组件)
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState() 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    // 监听store数据变化
    store.subscribe(this.handleStoreChange)

    // 异步请求(已经移到actionCreators中)
    // axios.get('https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist')
    // .then((res)=>{
    //   const data = res.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
    // })

    // redux-saga
    const action = getInitList()
    store.dispatch(action)

    // redux-thunk
    // const action = getTodoList()
    // store会自动执行返回的函数
    // store.dispatch(action)
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    this.setState(store.getState())
  }

  // 删除
  handleItemDelete(index) {
    const action = getDelteItemAction(index)
    store.dispatch(action)
  }

  // 增加
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  // 输入框同步
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange= {this.handleInputChange}
      handleItemDelete= {this.handleItemDelete}
      handleBtnClick= {this.handleBtnClick}
    />
  }
}

export default App;
```



### /TodoListUI.js

```js
import React from 'react';
import 'antd/dist/antd.css'
import { getInputChangeAction, getAddItemAction, 
        getDelteItemAction, initListAction, getInitList  } from './store/actionCreators';
import store  from './store';
import TodoListUI from './TodoListUI';


// 容器组件负责页面的逻辑(聪明组件)
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState() 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    // 监听store数据变化
    store.subscribe(this.handleStoreChange)

    // 异步请求(已经移到actionCreators中)
    // axios.get('https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist')
    // .then((res)=>{
    //   const data = res.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
    // })

    // redux-saga
    const action = getInitList()
    store.dispatch(action)

    // redux-thunk
    // const action = getTodoList()
    // store会自动执行返回的函数
    // store.dispatch(action)
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    this.setState(store.getState())
  }

  // 删除
  handleItemDelete(index) {
    const action = getDelteItemAction(index)
    store.dispatch(action)
  }

  // 增加
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  // 输入框同步
  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange= {this.handleInputChange}
      handleItemDelete= {this.handleItemDelete}
      handleBtnClick= {this.handleBtnClick}
    />
  }
}

export default App
```



## Redux-thunk



### /store/index.js

```js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import sagas from './sagas'

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// redux-saga
// const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  // 使用react-thunk
  applyMiddleware(thunk)
  // 使用react-saga
  // applyMiddleware(sagaMiddleware)
);


// store是唯一的
const store = createStore(
  // 使用reduce创建初始数据
  reducer,
  // 使用atcion与store的中间件thunk
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// sagaMiddleware.run(sagas)

export default store
```



### /store/reducer.js

```js
import { DELETE_LIST_VALUE, ADD_LIST_VALUE, CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actionType'
// state存放所有数据的信息

const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}
// state是上一次存储的数据，action指的是用户传过来的那句话 store.dispatch(action)
// reducer可以接收state，但是绝不能修改state
// 只有store能够改变自己的内容
// Reducer必须是纯函数：给定固定的输入，就一定有固定的输出，而且不会有任何副作用
const fn =  (state = defaultState, action) => {
  // 固定写法
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    // 副作用
    // state.inputValue = action.value
    newState.inputValue = action.value
    return newState
  } else if(action.type === ADD_LIST_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if(action.type === DELETE_LIST_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  } else if(action.type === INIT_LIST_ACTION){ //saga
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}
export default fn
```



### /store/action.js

```js
import { DELETE_LIST_VALUE, ADD_LIST_VALUE, CHANGE_INPUT_VALUE, INIT_LIST_ACTION, GET_INIT_LIST } from './actionType'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_LIST_VALUE
});

export const getDelteItemAction = (index) => ({
  type: DELETE_LIST_VALUE,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

// rudex-thunk可以返回一个函数
export const getTodoList = () => {
  return (dispatch) => {
    // 异步ajax请求
    // redux-thunk
    axios.get('https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist')
    .then((res)=>{
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
};

// rudex-saga
export const getInitList = () => ({
  type: GET_INIT_LIST
})
```



## Redux-saga



### /store/saga.js

```js
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'
// https://github.com/redux-saga/redux-saga

function* fetchUser() {
  // 异步逻辑
  try {
    const res = yield axios.get('https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error);
  }

}

// generator 函数
function* mySagas() {
  // 接收就执行
  yield takeEvery(GET_INIT_LIST, fetchUser)
}

export default mySagas
```



### /store/actionType.js

```js
export const DELETE_LIST_VALUE = 'delete_list_value'
export const ADD_LIST_VALUE = 'add_list_value'
export const CHANGE_INPUT_VALUE = 'change_input_value'
export const INIT_LIST_ACTION = 'init_list_action'
export const GET_INIT_LIST = 'get_init_list'
```



## react-redux

```react
import { Provider } from 'react-redux'
import store from '../store'
import Todolist from './Todolist'

class APP extends Component{
  render() {
    return (
      <Provider store={store}>
        <div>
          <Todolist></Todolist>
        </div>    
      </Provider>      	
    )
  }
}

export default App
```



/Todolist.js

```jsx
import store from './store'
import { connect } from 'react-redux'

class Todolist extends Component{
  render() {
    const { inputValue, changeInputValue } = this.props  
    return (
      <div>
        <input value={inputValue}/>
        <button onClick={e => changeInputValue(e)}>change</button>
      </div>
    )
  }
}

// 当前组件与store做连接,把store里的数据变成组件的props
const mapStateToProps = state => {
  // 返回给组件的props
  return {
    inputValue: state.inputValue
  }  
}
// 当前组件与action做连接，把action映射到组件的props
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
```





## 重写教程

安装依赖

```sh
npx create-react-app reduxdemo
npm i redux@4.1.2
```



### 类编程写法



#### src/index.js

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```



#### src/App.js

```react
import React from 'react';
import './App.css';
import store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  // 处理文本框的变化
  handleChangeInputValue(e) {
    // console.log(e.target.value);
    const action = {
      type: 'input_value_change',
      value: e.target.value
    }
    store.dispatch(action)
  }
  // 
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    // console.log(this)
    this.setState(store.getState())
  }
  // 处理点击事件
  handleBtnClick() {
    const action = {
      type: 'add_list_item',
      item: this.state.inputValue
    }
    store.dispatch(action)
  }

  // 删除item
  handleDeleteItem = (index) => {
    const action = {
      type: 'delete_list_item',
      index
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={e => this.handleChangeInputValue(e)} />
        <button onClick={this.handleBtnClick}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.handleDeleteItem(index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
```



#### src/store/index.js

```jsx
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer)

export default store 
```



#### src/store/reducer.js

```jsx
// state存放所有数据的信息
const defaultState = {
  inputValue: '1',
  list: [1, 2, 3]
}

// state是上一次存储的数据，action指的是用户传过来的那句话 store.dispatch(action)
// reducer可以接收state，但是绝不能修改state
// 只有store能够改变自己的内容
// Reducer必须是纯函数：给定固定的输入，就一定有固定的输出，而且不会有任何副作用
const fn = (state = defaultState, action) => {
  switch (action.type) {
    case 'input_value_change':
      // 必须通过复制现有的 state 并对复制的值进行更改的方式来做 不可变更新（immutable updates）。
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'add_list_item':
      const newsState = JSON.parse(JSON.stringify(state))
      newsState.list.push(action.item)
      return newsState
    case 'delete_list_item':
      const deleteState = JSON.parse(JSON.stringify(state))
      deleteState.list.splice(action.index, 1)
      return deleteState
    default:
      return state;
  }
}

export default fn
```





### redux-thunk

![](http://cn.redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

```sh
npm i redux-thunk@2.3.0
```



#### 增加src/store/actionCreator.js

```jsx
import axios from 'axios'
// import { test } from '../api/test'
const test = "https://www.fastmock.site/mock/1513c2e4d1cffd88bf36b2ff454d1cb1/react/api/todolist"

// 箭头函数的省略写法： ({}) 相当于 {return {}}
export const changeInputValue = (value) => ({
  type: 'input_value_change',
  value
})

export const addListItem = (item) => 
{return {
  type: 'add_list_item',
  item
}}

export const deleteListItem = (index) => ({
  type: 'delete_list_item',
  index
})


// 异步获取数据的逻辑 redux-thunk
const setNetworkList = (list) => ({
  type: 'set_network_list',
  list
})
export const getNetworkList = () => {
  return (dispatch) => {
    axios.get(test).then(res => {
      const { data } = res.data
      dispatch(setNetworkList(data))
    }).catch(err => {
      console.log(err)
    })
  }
}
```



#### 修改src/store/index.js

```jsx
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

/* 调试代码 开启了 Redux DEVTools
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))) */

const store = createStore(reducer, applyMiddleware(thunk))

export default store
```



#### 修改src/store/reducer.js

```jsx
const defaultState = {
  inputValue: '1',
  list: [1, 2, 3]
}

const fn = (state = defaultState, action) => {
  switch (action.type) {
    case 'input_value_change':
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'add_list_item':
      const newsState = JSON.parse(JSON.stringify(state))
      newsState.list.push(action.item)
      return newsState
    case 'delete_list_item':
      const deleteState = JSON.parse(JSON.stringify(state))
      deleteState.list.splice(action.index, 1)
      return deleteState
    case 'set_network_list':
      const netState = JSON.parse(JSON.stringify(state))
      netState.list = action.list
      return netState
    default:
      return state;
  }
}

export default fn
```




#### 修改src/App.js

```jsx
import React from 'react';
import store from './store';
import { changeInputValue, addListItem,
   deleteListItem, getNetworkList } from './store/actionCreator'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  // 处理文本框的变化
  handleChangeInputValue(e) {
    // console.log(e.target.value);
    // const action = {
    //   type: 'input_value_change',
    //   value: e.target.value
    // }
    // 改写成
    store.dispatch(changeInputValue(e.target.value))
  }
  // 
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    // console.log(this)
    this.setState(store.getState())
  }

  // 处理点击事件
  handleBtnClick() {
    console.log(this.state.inputValue)
    const action = {
      type: 'add_list_item',
      item: this.state.inputValue
    }
    store.dispatch(action)
  }

  // 删除item
  handleDeleteItem = (index) => {
    const action = {
      type: 'delete_list_item',
      index
    }
    store.dispatch(action)
  }

  handleToGetNetworkList = () => {
    store.dispatch(getNetworkList())
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue || ''} onChange={e => this.handleChangeInputValue(e)} />
        <button onClick={this.handleBtnClick}>add</button>
        <button onClick={this.handleToGetNetworkList}>get net work data</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.handleDeleteItem(index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
```



### redux-saga

> https://redux-saga-in-chinese.js.org/

```sh
npm i redux-saga@1.1.3
```



#### 修改src/store/index.js

```js
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// redux-saga
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

// https://github.com/zalmoxisus/redux-devtools-extension
/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; */ 

import reducer from './reducer'

// redux-saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

/* const enhancer = composeEnhancers(
  // 使用react-thunk
  applyMiddleware(thunk)
  // 使用react-saga
  // applyMiddleware(sagaMiddleware)
); */

// store是唯一的
/* const store = createStore(
  // 使用reduce创建初始数据
  reducer,
  // 使用atcion与store的中间件thunk
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) */

// const store = createStore(reducer, applyMiddleware(thunk))

export default store
```



#### 增加src/store/sagas.js

```js
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { test } from '../api/test'

function* fetchUser() {
  // 异步逻辑
  try {
    const res = yield axios.get(test)
    const action = {
      type: 'init_list_data',
      data: res.data.data
    }
    yield put(action)
  } catch(err) {
    console.log(err);
  }
}

// generator 函数
function* mySagas() {
  // 接收就执行
  yield takeEvery('get_list_data', fetchUser)
}

export default mySagas
```



#### 修改src/store/actionCreator.js

```js
// import axios from 'axios'
// import { test } from '../api/test'

// 箭头函数的省略写法： ({}) 相当于 {return {}}
export const changeInputValue = (value) => ({
  type: 'input_value_change',
  value
})

export const addListItem = (item) => 
{return {
  type: 'add_list_item',
  item
}}

export const deleteListItem = (index) => ({
  type: 'delete_list_item',
  index
})


// 异步获取数据的逻辑 redux-thunk
// const setNetworkList = (list) => ({
//   type: 'set_network_list',
//   list
// })
// export const getNetworkList = () => {
//   return (dispatch) => {
//     axios.get(test).then(res => {
//       const { data } = res.data
//       dispatch(setNetworkList(data))
//     }).catch(err => {
//       console.log(err)
//     })
//   }
// }

// redux-saga
export const getInitListData = () => ({
  type: 'get_list_data'
})  
```



#### 修改src/store/reducer.js

```js
// state存放所有数据的信息
const defaultState = {
  inputValue: '1',
  list: [1, 2, 3]
}

// state是上一次存储的数据，action指的是用户传过来的那句话 store.dispatch(action)
// reducer可以接收state，但是绝不能修改state
// 只有store能够改变自己的内容
// Reducer必须是纯函数：给定固定的输入，就一定有固定的输出，而且不会有任何副作用
const fn = (state = defaultState, action) => {
  switch (action.type) {
    case 'input_value_change':
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'add_list_item':
      const newsState = JSON.parse(JSON.stringify(state))
      newsState.list.push(action.item)
      // 将输入框清空
      newsState.inputValue = ''
      return newsState
    case 'delete_list_item':
      const deleteState = JSON.parse(JSON.stringify(state))
      deleteState.list.splice(action.index, 1)
      return deleteState
    case 'set_network_list':
      const netState = JSON.parse(JSON.stringify(state))
      netState.list = action.list
      return netState
    // reudx-saga
    case 'init_list_data':
      const initState = JSON.parse(JSON.stringify(state))
      initState.list = action.data
      return initState
    default:
      return state;
  }
}

export default fn
```



#### 修改src/App.js

```jsx
import React from 'react';
import store from './store';
import { changeInputValue, addListItem, getInitListData,
   deleteListItem, getNetworkList } from './store/actionCreator'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  // 处理文本框的变化
  handleChangeInputValue(e) {
    // console.log(e.target.value);
    // const action = {
    //   type: 'input_value_change',
    //   value: e.target.value
    // }
    // 改写成
    store.dispatch(changeInputValue(e.target.value))
  }
  // 
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
    
    // redux-saga
    store.dispatch(getInitListData())
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    // console.log(this)
    this.setState(store.getState())
  }

  // 处理点击事件
  handleBtnClick() {
    console.log(this.state.inputValue)
    const action = {
      type: 'add_list_item',
      item: this.state.inputValue
    }
    store.dispatch(action)
  }

  // 删除item
  handleDeleteItem = (index) => {
    const action = {
      type: 'delete_list_item',
      index
    }
    store.dispatch(action)
  }

  // handleToGetNetworkList = () => {
  //   store.dispatch(getNetworkList())
  // }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue || ''} onChange={e => this.handleChangeInputValue(e)} />
        <button onClick={this.handleBtnClick}>add</button>
        {/* <button onClick={this.handleToGetNetworkList}>get net work data</button> */}
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.handleDeleteItem(index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App
```



### React-Redux

> https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

```sh
npm i react-redux@5.0.7
```



#### 修改src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react-redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    // 它的原理是React组件的context属性,给全局提供store
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);
```



#### 修改src/App.js

```jsx
import React from 'react';
import store from './store';
import { changeInputValue, addListItem, getInitListData,
   deleteListItem, getNetworkList } from './store/actionCreator'
import { connect } from 'react-redux'  


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  // 处理文本框的变化
  handleChangeInputValue(e) {
    // console.log(e.target.value);
    // const action = {
    //   type: 'input_value_change',
    //   value: e.target.value
    // }
    // 改写成
    store.dispatch(changeInputValue(e.target.value))
  }
  // 
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
    
    // redux-saga
    store.dispatch(getInitListData())
  }

  // store数据发生变化时执行的函数
  handleStoreChange() {
    // console.log(this)
    this.setState(store.getState())
  }

  // 处理点击事件
  handleBtnClick() {
    console.log(this.state.inputValue)
    const action = {
      type: 'add_list_item',
      item: this.state.inputValue
    }
    store.dispatch(action)
  }

  // 删除item
  handleDeleteItem = (index) => {
    const action = {
      type: 'delete_list_item',
      index
    }
    store.dispatch(action)
  }

  // handleToGetNetworkList = () => {
  //   store.dispatch(getNetworkList())
  // }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue || ''} onChange={e => this.handleChangeInputValue(e)} />
        <button onClick={this.handleBtnClick}>add</button>
        {/* <button onClick={this.handleToGetNetworkList}>get net work data</button> */}
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={() => this.handleDeleteItem(index)}>{item}</li>
              )
            })
          }
        </ul>
        {/* react-redux */}
        {this.props.toPropsInputValue}
        <button onClick={() => this.props.toPropsHandleBtnClick(this.props.toPropsInputValue)}>add</button>
      </div>
    );
  }
}


// react-redux
// connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
// 负责输入逻辑，即将state映射到 UI 组件的参数（props），
// 当前组件与store做连接,把store里的数据变成组件的props
const mapStateToProps = state => ({
  // 获取state，返回给组件的props
  toPropsInputValue: state.inputValue
})

// 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
// 它定义哪些用户的操作应该当作 Action，传给 Store。
// 它可以是一个函数，也可以是一个对象。
// 当前组件与action做连接，把action映射到组件的props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 发送action
    toPropsHandleBtnClick(value) {
      dispatch(addListItem(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
```



### 模块合并写法

#### immutable 和 redux-immutable

```sh
npm i immutable@3.8.2 redux-immutable@4.0.0
```



#### src/index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    // 它的原理是React组件的context属性
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);
```



#### src/App.js与react-router搭配

```sh
npm i react-router-dom@4.3.1
```

```react
import React from 'react';
import store from './store';
import { Provider } from 'react-redux'  
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            {/* <Route exact path={'/'}>{login ? <Redirect to={Home} /> : <Login/> }</Route> */}
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/'} component={Home}/>
          </>
        </Router>
      </Provider>
    )
  }
}
export default App
```



#### src/store/index.js

```js
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// redux-saga
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import reducer from './reducer'

// redux-saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

// const store = createStore(reducer, applyMiddleware(thunk))

export default store
```

#### src/store/saga.js

```js
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

// 根据源码需要做解构赋值解析actionCreator传递过来的action对象中的值
function* fetchUser({username, password}) {
  // 异步逻辑
  try {
    const res = yield axios.get('/api/login.json?username=' + username + '&password=' + password)
    // const res = yield axios.get('/api/login.json')
    const action = {
      type: 'change_login_state',
      isLogin: res.data.isLogin
    }
    yield put(action)
  } catch(err) {
    console.log(err);
  }
}

// generator 函数
function* mySagas() {
  // 接收就执行
  yield takeEvery('need_to_login', fetchUser)
}

export default mySagas
```

#### src/store/reducer.js

```js
import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as loginReducer } from '../pages/login/store'

// 所有分支整合后的reducer
// Redux 切片（Slice）
export default combineReducers({
  home: homeReducer,
  login: loginReducer
})
```



#### src/pages/login/index.js

```jsx
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
    const { toPropsIsLogin, toPropsUsername, toPropsPassword, handleBtnReset, handleToLogin, handleToChangeUsername, handleToChangePassword } = this.props
    return (
      !toPropsIsLogin ?
      <>
        <div>
          用户名：
          <input value={toPropsUsername} onChange={ e => handleToChangeUsername(e) }/>
        </div>
        <br/>
        <div>
          密码：
          <input type="password" value={toPropsPassword} onChange={ e => handleToChangePassword(e) } />
        </div>
        <br/>
        <button onClick={() => handleToLogin(toPropsUsername, toPropsPassword)}>登录</button>
        <button onClick={handleBtnReset}>重置</button>
      </>
      : <Redirect to="/" />
    )
  }
}

const mapStateToProps = (state) => ({
  // login:目录 username: state，因为redux采取分离的写法
  toPropsUsername: state.getIn(['login', 'username']),
  toPropsPassword: state.getIn(['login', 'password']),
  toPropsIsLogin: state.getIn(['login', 'isLogin']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleToChangeUsername(e) {
      dispatch(actionCreators.sendUsername(e.target.value))
    },
    handleToChangePassword(e) {
      dispatch(actionCreators.sendPassword(e.target.value))
    },
    handleBtnReset() {
      dispatch(actionCreators.resetAllInput())
    },
    handleToLogin(username, password) {
      if(username && password)  
        dispatch(actionCreators.toLogin(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
```

#### src/pages/login/store/index.js

```js
import reducer from './reducer'
import * as actionCreators from './actionCreators'

export { reducer, actionCreators }
```

#### src/pages/login/store/reducer.js

```js
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isLogin: false,
  username: '1123',
  password: '123'
})

const fn = (state = defaultState, action) => {
  switch (action.type) {
    case 'reset_all':
     return state.merge({
       username: '',
       password: ''
     })
    case 'change_username':
      return state.merge({
        username: fromJS(action.username)
      })
    case 'change_password':
      return state.merge({
        password: fromJS(action.password)
      })
    case 'change_login_state':
      return state.set('isLogin', action.isLogin)
    // 是从Home页面传过的action
    case 'to_logout':
      return state.set('isLogin', false)
    default:
      return state
  }
}

export default fn
```

#### src/pages/login/store/actionCreators.js

```js
import { fromJS } from 'immutable'
export const resetAllInput = () => ({
  type: 'reset_all'
})

// redux-saga
export const toLogin = (username, password) => ({
  type: 'need_to_login',
  username: fromJS(username),
  password: fromJS(password)
})

export const sendUsername = (username) => ({
  type: 'change_username',
  username: fromJS(username)
})
export const sendPassword = (password) => ({
  type: 'change_password',
  password: fromJS(password)
})
```



#### src/pages/home/index.js

```jsx
import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { actionCreator } from './store'

class Home extends React.Component{
  render() {
    const { toPropsIsLogin, handleToLogout, handleToChange, toPropsHelloWorld } = this.props
    return (
      toPropsIsLogin ?
      <div>
        {toPropsHelloWorld}
        <button onClick={handleToChange}>change</button>
        <br/>
        <Link to="/login" replace>
          <button onClick={handleToLogout}>退出登录</button>
        </Link>
      </div>
      : <Redirect to={"/login"}/>
    )
  }
}

const mapStateToProps = state => ({
  // 可以取到login的reducer中的state
  toPropsIsLogin: state.getIn(['login', 'isLogin']),
  // 自己的state
  toPropsHelloWorld: state.getIn(['home', 'helloworld'])
})

const mapDispatchToProps = dispatch => {
  return {
    handleToLogout() {
      // 让login的state的isLogin变为false
      dispatch(actionCreator.toLogout())
    },
    handleToChange() {
      dispatch(actionCreator.toBohelloWorld('helloworld'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

#### src/pages/home/store/index.js

```js
import reducer from './reducer'
import * as actionCreator from './actionCreators'

export { reducer, actionCreator }
```

#### src/pages/home/store/reducer.js

```js
import { fromJS } from 'immutable'
const defaultState = fromJS({
  helloworld: 'Home'
})

const fn = (state = defaultState, action) => {
  switch (action.type) {
    case 'hello_world':
      return state.set('helloworld', action.data)
    default:
      return state
  }
}

export default fn
```

#### src/pages/home/store/actionCreators.js

```js
export const toLogout = () => ({
  type: 'to_logout'
})

export const toBohelloWorld = (data) => ({
  type: 'hello_world',
  data
})
```





### 函数式编程写法

因为react-redux7之后才支持hooks，所以需要更新依赖包

> https://juejin.cn/post/6844903874197880840
>
> https://juejin.cn/post/6999886777666240548
>
> http://cn.redux.js.org/tutorials/essentials/part-3-data-flow

```sh
npm i react-redux@7.2.6
```



#### src/store/index.js

```js
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer)

export default store
```

#### src/store/actionCreator.js

```js
export const changeValue = value => ({
  type: 'change_value',
  value
})
```

#### src/store/reducer.js

```js
const defaultState = {
  value: ''
}

const fn = (state = defaultState, action) => {
  switch(action.type) {
    case 'change_value':
      // state永远是上一个state的值
      console.log(state)
      // 浅拷贝？ yes
      // const newState = state
      const newState = JSON.parse(JSON.stringify(state))
      newState.value = action.value
      return newState
    default:
      return state;
  }
}

export default fn
```

#### src/index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Application from './Application'

ReactDOM.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('root') 
)
```

#### src/App.js

```jsx
import React, { useState } from 'react'
// 使用useSelector useDispatch 替代connect
import { useSelector, useDispatch } from 'react-redux'
import { changeValue } from './store/actionCreator'

export default function App() {
  // 共享状态,从Redux的store中提取数据（state）
  const value = useSelector(state => state.value)
  const dispatch = useDispatch()
  const [useStateValue, setUseStateValue] = useState(123)
  
  return (
    <>
      <input 
        value={useStateValue}
        onChange={e => setUseStateValue(e.target.value)}
      />
      {value}
      <button onClick={() => dispatch(changeValue(useStateValue))}>开始吧</button>
    </>
  )
}
```

