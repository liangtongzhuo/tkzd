import { Template } from 'meteor/templating';


//表单事件监听
Template.myTemplate.events({
  'submit form'(event, template){
    event.preventDefault();
    var textValue = event.target.myForm.value;
    console.log(textValue);
    event.target.myForm.value = "";
  }
});
