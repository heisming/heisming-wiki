# AOP
```js
//Aop构造器
function Aop(options){
    this.options = options
}
//业务方法执行前钩子
Aop.prototype.before = function(cb){
    cb.apply(this)
}
//业务方法执行后钩子
Aop.prototype.after = function(cb){
    cb.apply(this)
}
//业务方法执行器
Aop.prototype.execute = function(beforeCb,runner,afterCb){
    this.before(beforeCb)
    runner.apply(this)
    this.after(afterCb)
}

var aop = new Aop({
    afterInfo:'执行后',
    runnerInfo:'执行中',
    beforeInfo:'执行前'
})

var beforeCb = function(){
    console.log(this.options.beforeInfo)
}
var afterCb = function(){
    console.log(this.options.afterInfo)
}
var runnerCb = function(){
    console.log(this.options.runnerInfo)
}

aop.execute(beforeCb,runnerCb,afterCb)
```