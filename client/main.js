import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//初始化 ？
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

//可以设置参数与参数的方程
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
//事件监听
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

//单独复制
// Template.test.helpers({
  // text: 'This is paragraph...'
// });

//each 循环
Template.body.helpers({
  paragraphs: [
     { text: "This is paragraph 1..." },
     { text: "This is paragraph 2..." },
     { text: "This is paragraph 3..." },
     { text: "This is paragraph 4..." },
     { text: "This is paragraph 5..." }
  ]
});

