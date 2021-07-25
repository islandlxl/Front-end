### react 小试牛刀
### 创建一个 react app
npx create-react-app myapp
### 进入项目 并启动
cd myapp
npm start
### react jsx语法
html+js的代码就叫jsx语法，html标签由html解析，{}由js代码解析
### react中元素的概念
const element = <h1>Hello, world</h1>;
### react中的组件 
1.class 组件
2.函数组件
###　props
父子组件之间的数据传递通用变量
### state
DOM中的状态值
### 纯函数
函数的调用不会修改函数的入参
### 生命周期函数
生命周期函数就是钩子函数，在运行的特定时间会执行
  componentWillMound: 函数渲染之前执行
  componentDidMound: 函数渲染之后执行
  shouldComponentupdate:返回true和false,true允许改变，false不允许改变
  componentWillUpdate: 数据在改变之前执行(state ,props)
  componentDidupdate: 数据在改变之后执行(state, props)
  componentWillReceiveProps: props发生改变之后执行
  componentWillunMount: 组件在卸载之前执行
### setState为异步处理还是同步处理
setState会引起视图重新渲染
在可控的情况下是异步，不可控情况下是同步的
可以使用async await Promise解决问题或者使用回调函数
### 条件渲染

### react列表渲染key
在key有序的数组遍历中，末尾追加元素不会引起视图重新渲染，

