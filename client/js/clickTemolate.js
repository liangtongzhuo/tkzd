import { Template } from 'meteor/templating';
// 支持的事件：click, mousedown, mouseup, mouseenter, mouseleave, keydown, keyup, keypress, focus, blur, 和 change。
  Template.clickTemplate.events({
	
      'click p'(events,template){
         console.log("The PARAGRAPH is clicked...");
      },
		
      'click .myClass'(events,template){
         console.log("The CLASS is clicked...");
      },
		
      'click #myId'(events,template){
         console.log("The ID is clicked...");
      },
   });