import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



//初始化 
Template.hello.onCreated(function helloOnCreated() {
  console.log('初始化');
  this.counter = new ReactiveVar(0);
});
//已经渲染
Template.hello.onRendered(function (){
  console.log('是DOM结构绘制完毕后就执行，并没有全部家在完图片');
});
//销毁
Template.hello.onDestroyed(function(){
  console.log('销毁了');
});

//可以设置参数与参数的方程
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
//事件监听  this 获取当前的数据上下文(相当于template.data)
// 支持的事件：click, mousedown, mouseup, mouseenter, mouseleave, keydown, keyup, keypress, focus, blur, 和 change。
Template.hello.events({
  'click button'(event, template) {
    // increment the counter when button is clicked
    console.log(template.counter.get() + 1);
    template.counter.set(template.counter.get() + 1);
  },
});
